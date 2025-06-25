import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function saveEmailHandler(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Email subscription request processed for url "${request.url}"`);

    // Only allow POST requests
    if (request.method !== 'POST') {
        return {
            status: 405,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // Configure this properly for production
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse the JSON body to get the email
        const body = await request.json();
        const email = body?.email;

        // Validate email
        if (!email || typeof email !== 'string') {
            return {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ error: 'Valid email address is required' })
            };
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ error: 'Invalid email format' })
            };
        }

        // Log the email (in production, you'd save this to a database)
        context.log(`Saving email subscription: ${email}`);
        
        // TODO: Add your email storage logic here
        // Examples:
        // - Save to Azure Table Storage
        // - Save to Azure SQL Database
        // - Save to Azure Cosmos DB
        // - Send to email service like SendGrid
        
        // For now, we'll just log it and return success
        // await saveEmailToDatabase(email);

        return {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ 
                success: true, 
                message: 'Email subscription successful',
                email: email 
            })
        };

    } catch (error) {
        context.log.error('Error processing email subscription:', error);
        
        return {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
}

// Handle CORS preflight requests
export async function optionsHandler(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*', // Configure this properly for production
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '86400'
        }
    };
}

// Register the HTTP triggers
app.http('saveEmail', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: saveEmailHandler
});

// Handle CORS preflight
app.http('saveEmailOptions', {
    methods: ['OPTIONS'],
    authLevel: 'anonymous',
    route: 'saveEmail', // Same route as the POST handler
    handler: optionsHandler
});