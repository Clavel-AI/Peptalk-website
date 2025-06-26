import { Play, Download, MessageCircle, Globe, Users, Shield, Smartphone } from "lucide-react"
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
      id: "translation",
      icon: Globe,
      title: "Enable Translation",
      description: "Set up real-time translation",
      steps: [
        "Go to Settings > Languages & Translation",
        "Toggle 'Auto-translate incoming messages' ON",
        "Select your preferred translation languages",
        "Choose translation quality (Standard or High)",
        "Enable 'Show original message' if desired",
        "Test translation by sending a message to yourself",
      ],
      tips: [
        "High quality translation uses more data but is more accurate",
        "You can translate individual messages by long-pressing them",
      ],
    },
    {
      id: "messaging",
      icon: MessageCircle,
      title: "Start Messaging",
      description: "Send your first multilingual message",
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
      steps: [
        "Tap 'New Chat' then select 'New Group'",
        "Add participants from your contacts",
        "Set a group name and description",
        "Choose group language settings",
        "Enable 'Multilingual mode' for the group",
        "Start your multilingual group conversation",
      ],
      tips: ["Each member can set their preferred language", "Group admins can manage translation settings"],
    },
    {
      id: "security",
      icon: Shield,
      title: "Security Setup",
      description: "Secure your account and messages",
      steps: [
        "Go to Settings > Account > Security",
        "Enable Two-Step Verification",
        "Create a secure 6-digit PIN",
        "Add a recovery email address",
        "Enable App Lock with fingerprint/face ID",
        "Review privacy settings and adjust as needed",
      ],
      tips: [
        "Use a PIN that's easy for you to remember but hard for others to guess",
        "Regularly update your recovery information",
      ],
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
        <div className="container mx-auto px-4 max-w-4xl">
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
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-900">Instructions</h4>
                        <ol className="space-y-3">
                          {step.steps.map((stepItem, stepIndex) => (
                            <li key={stepIndex} className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-[#3971C0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-sm font-bold">{stepIndex + 1}</span>
                              </div>
                              <span className="text-gray-700">{stepItem}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-900">Pro Tips</h4>
                        <div className="space-y-3">
                          {step.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-[#3971C0] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{tip}</span>
                            </div>
                          ))}
                        </div>
                        {/* Placeholder for screenshot */}
                        <div className="mt-6 bg-gray-100 rounded-lg p-8 text-center">
                          <Smartphone className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-500 text-sm">Screenshot placeholder</p>
                          <p className="text-gray-400 text-xs">{step.title} interface</p>
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

      {/* Quick Tips */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Quick Tips for Better Experience</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

      {/* Video Tutorials */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Video Tutorials</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {["Getting Started with PepTalk", "Setting Up Real-time Translation", "Creating Multilingual Groups"].map(
              (title, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gray-200 aspect-video flex items-center justify-center">
                    <Play className="w-12 h-12 text-[#3971C0]" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600">5:30 minutes</p>
                  </CardContent>
                </Card>
              ),
            )}
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
