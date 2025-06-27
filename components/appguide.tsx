"use client"

import { Play, Download, MessageCircle, Globe, Users, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function AppGuidePage() {
  const guideSteps = [
    {
      id: "download",
      icon: Download,
      title: "Download & Install",
      description: "Get PepTalk on your device",
      image: "/screenshots/download-step.png", // Add your screenshot here
      steps: [
        "Visit your device's app store (App Store for iOS, Google Play for Android)",
        "Search for 'PepTalk Multilingual Messenger'",
        "Tap 'Install' or 'Get' to download the app",
        "Wait for the installation to complete",
        "Tap the PepTalk icon to open the app",
      ],
      tips: ["Make sure you have a stable internet connection", "Ensure you have enough storage space (minimum 100MB)"],
    },
    {
      id: "setup",
      icon: Smartphone,
      title: "Account Setup",
      description: "Create your PepTalk account",
      image: "images/Up.png", 
      steps: [
        "Open PepTalk and tap 'Get Started'",
        "Enter your phone number and tap 'Next'",
        "Enter the verification code sent to your phone",
        "Create your profile with name and photo",
        "Select your primary language from the list",
        "Choose additional languages you want to communicate in",
      ],
      tips: ["Use a clear profile photo for better recognition", "You can add more languages later in settings"],
    },
    {
      id: "contacts",
      icon: Globe,
      title: "Sync Contacts",
      description: "Import your contacts and invite friends",
      image: "images/Invite Contacts.png", // Add your screenshot here
      steps: [
        "Go to Settings > Contacts",
        "Tap 'Sync Contacts' button",
        "Allow PepTalk to access your contacts when prompted",
        "Wait for contacts to sync",
        "View your contacts in the PepTalk directory",
        "Tap 'Invite' button next to non-PepTalk users",
      ],
      tips: [
        "Only phone numbers from your contacts will be synced",
        "You can manually refresh contacts list by pulling down",
        "Green indicators show which contacts are already on PepTalk",
      ],
    },
    {
      id: "messaging",
      icon: MessageCircle,
      title: "Start Messaging",
      description: "Send your first multilingual message",
      image: "images/Direct.png", // Add your screenshot here
      steps: [
        "Tap the 'New Chat' button on the main screen",
        "Select a contact or enter a phone number",
        "Type your message in your native language",
        "The message will be automatically translated for the recipient",
        "Tap send and wait for the response",
        "View translated responses in your language",
      ],
      tips: [
        "Speak clearly for voice messages to improve translation",
        "Use simple sentences for better translation accuracy",
      ],
    },
    {
      id: "groups",
      icon: Users,
      title: "Group Chats",
      description: "Create multilingual group conversations",
      image: "images/group.png", // Add your screenshot here
      steps: [
        "Tap 'New Chat' then select 'New Group'",
        "Add participants from your contacts",
        "Set a group name and description",
        "Enable 'Multilingual mode' for the group",
        "Start your multilingual group conversation",
      ],
      tips: ["Each member can set their preferred language", "Group admins can manage translation settings"],
    },
  ]

  const quickTips = [
    {
      title: "Translation Accuracy",
      description: "For better translations, use complete sentences and avoid slang or regional expressions.",
    },
    {
      title: "Voice Messages",
      description: "Speak clearly and at a moderate pace when recording voice messages for translation.",
    },
    {
      title: "Offline Mode",
      description: "Download language packs for offline translation when you don't have internet access.",
    },
    {
      title: "Group Management",
      description:
        "As a group admin, you can set default languages and manage translation preferences for all members.",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3971C0] to-[#2c5aa0] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">PepTalk App Guide</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Learn how to use PepTalk's powerful multilingual messaging features step by step
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-[#3971C0] hover:bg-gray-100 border-white">
              <Play className="w-5 h-5 mr-2" />
              Watch Video Guide
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10 border-white">
              <Download className="w-5 h-5 mr-2" />
              Download PDF Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {guideSteps.map((step) => (
              <Link
                key={step.id}
                href={`#${step.id}`}
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-[#3971C0] hover:bg-[#3971C0] hover:text-white"
              >
                <step.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{step.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16">
            {guideSteps.map((step, index) => (
              <div key={step.id} id={step.id} className="scroll-mt-20">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-[#3971C0] to-[#2c5aa0] text-white">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="secondary" className="bg-white/20 text-white border-0">
                            Step {index + 1}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                        <p className="opacity-90">{step.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h4 className="text-lg font-semibold mb-4 text-gray-900">Instructions</h4>
                        <ol className="space-y-3 mb-8">
                          {step.steps.map((stepItem, stepIndex) => (
                            <li key={stepIndex} className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-[#3971C0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-sm font-bold">{stepIndex + 1}</span>
                              </div>
                              <span className="text-gray-700">{stepItem}</span>
                            </li>
                          ))}
                        </ol>

                        <h4 className="text-lg font-semibold mb-4 text-gray-900">Pro Tips</h4>
                        <div className="space-y-3">
                          {step.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-[#3971C0] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Screenshot Container */}
                      <div className="lg:col-span-1 flex justify-center">
                        <div className="relative">
                          {/* Phone Frame */}
                          <div className="w-64 h-[540px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                              {/* Status Bar */}
                              {/* <div className="h-6 bg-gray-50 flex items-center justify-between px-6 text-xs text-gray-600">
                                <span>9:41</span>
                                <div className="flex items-center space-x-1">
                                  <div className="w-4 h-2 border border-gray-400 rounded-sm">
                                    <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
                                  </div>
                                </div>
                              </div> */}

                              {/* Screenshot Area */}
                              <div className="flex-1 relative">
                                <img
                                  src={step.image || "/placeholder.svg"}
                                  alt={`${step.title} screenshot`}
                                  className="w-full h-full object-cover object-top"
                                  onError={(e) => {
                                    // Fallback to placeholder if image fails to load
                                    e.currentTarget.style.display = "none"
                                  }}
                                />
                                {/* Fallback placeholder (hidden by default) */}
                                <div
                                  className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6 text-center"
                                  style={{ display: "none" }}
                                >
                                  <Smartphone className="w-16 h-16 text-gray-300 mb-4" />
                                  <p className="text-gray-500 text-sm font-medium mb-2">{step.title}</p>
                                  <p className="text-gray-400 text-xs leading-relaxed">
                                    Add your screenshot to:
                                    <br />
                                    <code className="bg-gray-200 px-2 py-1 rounded text-xs">{step.image}</code>
                                  </p>
                                </div>
                              </div>

                              {/* Home Indicator */}
                              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
                            </div>
                          </div>

                          {/* Step Number Badge */}
                          <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#3971C0] rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Quick Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {quickTips.map((tip, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[#3971C0]">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Need More Help */}
      <section className="py-16 bg-[#3971C0] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need More Help?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our support team is ready to help you get the most out of PepTalk
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/help">
              <Button size="lg" variant="outline" className="bg-white text-[#3971C0] hover:bg-gray-100 border-white">
                Visit Help Center
              </Button>
            </Link>
            <Link href="https://clavel.ai/contacts/">
              <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10 border-white">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
