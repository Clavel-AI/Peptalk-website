"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Search, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create a PepTalk account?",
          answer:
          "You can create a PepTalk account by downloading the app from the App Store or Google Play. Once installed, open the app, verify your phone number, and complete your profile by selecting your preferred languages."
        },
        {
          question: "Is PepTalk free to use?",
          answer:
          "Yes, PepTalk is free to download and use. Basic messaging and real-time translation features are included at no cost. Some advanced features, such as enhanced translation options or extra storage, may require a subscription."
        },
        {
          question: "What devices does PepTalk support?",
          answer:
          "PepTalk is available for both Android and iOS devices, including phones and tablets. All versions are designed to work smoothly across your devices with sync support."
        },
      ],
    },
    {
      category: "Translation & Languages",
      questions: [
        {
          question: "How many languages does PepTalk support?",
          answer:
          "PepTalk supports real-time translation in over 100 languages. We regularly add new languages based on user demand and translation quality improvements."
        },
        {
          question: "How accurate is the translation?",
          answer:
          "Translation quality may vary by language, but PepTalk is built to provide clear and natural conversations across supported languages. We use advanced AI to improve translation accuracy over time"
        },
        {
          question: "Can I translate messages offline?",
          answer:
          "Yes, PepTalk supports offline translation for select languages. You can download language packs for offline use, but online translation offers better accuracy and broader language support."
        },
        {
          question: "How do I change my default language?",
          answer:
          "To change your default language, go to Settings, then Languages, and choose your preferred option. Incoming messages will be translated to this language automatically."
        },
      ],
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          question: "Are my messages encrypted?",
          answer:
          "Yes, all messages on PepTalk are secured with end-to-end encryption. Only you and the recipient can read or listen to the content. PepTalk cannot access your conversations"
        },
        {
          question: "Does PepTalk store my translation history?",
          answer:
          "No, PepTalk does not store your translation history. All translation activity and language preferences are processed and stored locally on your device to protect your privacy."
        },
        {
          question: "How do I enable two-step verification?",
          answer:
          "To enable two-step verification, go to Settings > Account > Two-Step Verification and follow the setup instructions. You will be asked to create a PIN that will be required when registering your phone number again."
        },
        {
          question: "Can I delete my account and data?",
          answer:
          "Yes, you can delete your PepTalk account at any time by going to Settings > Account > Delete Account. This action will permanently remove your account and all associated data from our servers."
        },
      ],
    },
    {
      category: "Messaging Features",
      questions: [
        {
          question: "How do group chats work with translation?",
          answer:
          "In group chats, each participant can set their preferred language. Messages are automatically translated in real time so everyone sees the conversation in the language they choose."
        },
        {
          question: "Can I send voice messages with translation?",
          answer:
          "Yes, PepTalk can transcribe your voice message and translate it into the recipient’s preferred language. The original audio is also available if the recipient wants to listen."
        },
        {
          question: "What file types can I share?",
          answer:
          "You can share images, videos, documents (PDF, DOC), audio files, and location. File size limits are 16MB for photos, 100MB for videos, and 100MB for documents."
        },
        {
          question: "How do I create a group chat?",
          answer:
          "To create a group, tap the New Chat button, select New Group, add your contacts, name the group, and tap Create. PepTalk supports up to 256 participants in one group."
        },
      ],
    },
    {
      category: "Technical Issues",
      questions: [
        {
          question: "Why aren't my messages being delivered?",
          answer:
          "Message delivery issues can occur due to poor internet connectivity, the recipient's device being offline, or background sync interruptions. Check your connection and try restarting PepTalk to resolve the issue"
        },
        {
          question: "The app is running slowly. How can I fix this?",
          answer:
          "Try closing other apps, restarting PepTalk, clearing the app cache, or restarting your device. Make sure you have the latest version of the app installed from the App Store or Google Play."
        },
        {
          question: "How do I backup my chat history?",
          answer:
          "Go to Settings > Chats > Chat Backup to enable automatic backups to your cloud service (iCloud for iOS or Google Drive for Android). You can also create manual backups whenever needed."
        },
        {
          question: "I'm not receiving notifications. What should I do?",
          answer:
          "Make sure PepTalk has permission to send notifications in your device settings. Also check the app’s notification preferences under Settings > Notifications."
        },
      ],
    },
  ]

  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      categoryIndex,
      questionIndex,
      globalIndex: categoryIndex * 100 + questionIndex,
    })),
  )

  const filteredQuestions = searchTerm
    ? allQuestions.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : null

  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3971C0] to-[#2c5aa0] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Find quick answers to common questions about PepTalk
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900 border-0 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {filteredQuestions ? (
            // Search Results
            <div>
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Search Results ({filteredQuestions.length})</h2>
              <div className="space-y-4">
                {filteredQuestions.map((item) => (
                  <Card key={item.globalIndex} className="border border-gray-200">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleItem(item.globalIndex)}
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                        {openItems.includes(item.globalIndex) ? (
                          <ChevronUp className="w-5 h-5 text-[#3971C0] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#3971C0] flex-shrink-0" />
                        )}
                      </button>
                      {openItems.includes(item.globalIndex) && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            // Category View
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const globalIndex = categoryIndex * 100 + questionIndex
                      return (
                        <Card key={questionIndex} className="border border-gray-200">
                          <CardContent className="p-0">
                            <button
                              onClick={() => toggleItem(globalIndex)}
                              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50"
                            >
                              <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                              {openItems.includes(globalIndex) ? (
                                <ChevronUp className="w-5 h-5 text-[#3971C0] flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-[#3971C0] flex-shrink-0" />
                              )}
                            </button>
                            {openItems.includes(globalIndex) && (
                              <div className="px-6 pb-6">
                                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Didn't find what you were looking for?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you with any questions about PepTalk that aren't covered in our FAQ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#3971C0] hover:bg-[#2c5aa0] text-white text-[17px]"
              onClick={() => window.location.href = 'https://clavel.ai/contacts/'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
