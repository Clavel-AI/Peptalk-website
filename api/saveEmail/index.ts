import type { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions"
import { BlobServiceClient } from "@azure/storage-blob"

export default async function (request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log("Email subscription request received")

  // Set CORS headers
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  }

  // Handle preflight OPTIONS request
  if (request.method === "OPTIONS") {
    return {
      status: 200,
      headers: corsHeaders,
    }
  }

  if (request.method !== "POST") {
    return {
      status: 405,
      headers: corsHeaders,
      jsonBody: { error: "Method not allowed" },
    }
  }

  try {
    const body = (await request.json()) as { email: string }
    const { email } = body

    // Validate email
    if (!email || !isValidEmail(email)) {
      return {
        status: 400,
        headers: corsHeaders,
        jsonBody: { error: "Valid email address is required" },
      }
    }

    // Get Azure Storage connection string from environment variables
    const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING
    if (!connectionString) {
      context.error("Azure Storage connection string not found")
      return {
        status: 500,
        headers: corsHeaders,
        jsonBody: { error: "Server configuration error" },
      }
    }

    // Create blob service client
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString)
    const containerName = "email-subscriptions"
    const containerClient = blobServiceClient.getContainerClient(containerName)

    // Create container if it doesn't exist
    await containerClient.createIfNotExists({
      access: "blob",
    })

    // Create email record
    const emailRecord = {
      email: email.toLowerCase().trim(),
      subscribedAt: new Date().toISOString(),
      source: "footer-subscription",
      id: generateId(),
      userAgent: request.headers.get("user-agent") || "unknown",
      ip: request.headers.get("x-forwarded-for") || "unknown",
    }

    // Check if email already exists in master list
    const isDuplicate = await checkDuplicateEmail(containerClient, emailRecord.email)
    if (isDuplicate) {
      return {
        status: 200,
        headers: corsHeaders,
        jsonBody: {
          success: true,
          message: "Email already subscribed",
          duplicate: true,
        },
      }
    }

    // Save to blob storage as JSON
    const blobName = `subscription-${emailRecord.id}.json`
    const blockBlobClient = containerClient.getBlockBlobClient(blobName)

    await blockBlobClient.upload(JSON.stringify(emailRecord, null, 2), JSON.stringify(emailRecord).length, {
      blobHTTPHeaders: {
        blobContentType: "application/json",
      },
    })

    // Also append to a master list for easy querying
    await appendToMasterList(containerClient, emailRecord)

    context.log(`Email subscription saved: ${email}`)

    return {
      status: 200,
      headers: corsHeaders,
      jsonBody: {
        success: true,
        message: "Successfully subscribed to newsletter",
        id: emailRecord.id,
      },
    }
  } catch (error) {
    context.error("Error saving email subscription:", error)

    return {
      status: 500,
      headers: corsHeaders,
      jsonBody: {
        error: "Failed to process subscription",
        details: error instanceof Error ? error.message : "Unknown error",
      },
    }
  }
}

// Helper function to validate email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Helper function to generate unique ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Helper function to check for duplicate emails
async function checkDuplicateEmail(containerClient: any, email: string): Promise<boolean> {
  try {
    const masterBlobName = "master-email-list.json"
    const masterBlobClient = containerClient.getBlockBlobClient(masterBlobName)

    const downloadResponse = await masterBlobClient.download()
    if (downloadResponse.readableStreamBody) {
      const content = await streamToString(downloadResponse.readableStreamBody)
      const existingData = JSON.parse(content)
      return existingData.some((record: any) => record.email === email)
    }
  } catch (error) {
    // File doesn't exist yet, no duplicates
    return false
  }
  return false
}

// Helper function to append to master list
async function appendToMasterList(containerClient: any, emailRecord: any) {
  try {
    const masterBlobName = "master-email-list.json"
    const masterBlobClient = containerClient.getBlockBlobClient(masterBlobName)

    let existingData: any[] = []

    // Try to get existing master list
    try {
      const downloadResponse = await masterBlobClient.download()
      if (downloadResponse.readableStreamBody) {
        const content = await streamToString(downloadResponse.readableStreamBody)
        existingData = JSON.parse(content)
      }
    } catch (error) {
      // File doesn't exist yet, start with empty array
      existingData = []
    }

    // Add new record
    existingData.push(emailRecord)

    // Upload updated master list
    await masterBlobClient.upload(JSON.stringify(existingData, null, 2), JSON.stringify(existingData).length, {
      blobHTTPHeaders: {
        blobContentType: "application/json",
      },
    })
  } catch (error) {
    console.error("Error updating master list:", error)
    // Don't throw error here as the individual record was still saved
  }
}

// Helper function to convert stream to string
async function streamToString(readableStream: any): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: any[] = []
    readableStream.on("data", (data: any) => {
      chunks.push(data.toString())
    })
    readableStream.on("end", () => {
      resolve(chunks.join(""))
    })
    readableStream.on("error", reject)
  })
}
