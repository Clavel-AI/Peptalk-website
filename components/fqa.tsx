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
            "To create a PepTalk account, download the app from your device's app store, open it, and follow the registration process. You'll need to verify your phone number and set up your profile with your preferred languages.",
        },
        {
          question: "Is PepTalk free to use?",
          answer:
            "Yes, PepTalk is free to download and use. We offer basic messaging and translation features at no cost. Premium features like advanced translation options and additional storage may require a subscription.",
        },
        {
          question: "What devices does PepTalk support?",
          answer:
            "PepTalk is available for iOS (iPhone and iPad), Android smartphones and tablets, and as a web application for desktop computers. All versions sync seamlessly across your devices.",
        },
      ],
    },
    {
      category: "Translation & Languages",
      questions: [
        {
          question: "How many languages does PepTalk support?",
          answer:
            "PepTalk supports over 100 languages for real-time translation. We continuously add new languages based on user demand and translation quality improvements.",
        },
        {
          question: "How accurate is the translation?",
          answer:
            "Our translation accuracy varies by language pair but typically ranges from 85-95%. We use advanced AI models and continuously improve our translation quality. For critical communications, we recommend having important messages reviewed by native speakers.",
        },
        {
          question: "Can I translate messages offline?",
          answer:
            "Yes, PepTalk offers offline translation for the most popular language pairs. You can download language packs for offline use, though online translation generally provides better accuracy and supports more languages.",
        },
        {
          question: "How do I change my default language?",
          answer:
            "Go to Settings > Languages > Default Language and select your preferred language. This will be the language that incoming messages are translated to by default.",
        },
      ],
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          question: "Are my messages encrypted?",
          answer:
            "Yes, all messages in PepTalk are protected with end-to-end encryption. This means only you and the recipient can read your messages - not even PepTalk can access them.",
        },
        {
          question: "Does PepTalk store my translation history?",
          answer:
            "No, your translation history is stored locally on your device only. We don't store your conversations or translation data on our servers to protect your privacy.",
        },
        {
          question: "How do I enable two-step verification?",
          answer:
            "Go to Settings > Account > Two-Step Verification and follow the setup process. You'll create a PIN that will be required when registering your phone number with PepTalk again.",
        },
        {
          question: "Can I delete my account and data?",
          answer:
            "Yes, you can delete your PepTalk account at any time by going to Settings > Account > Delete Account. This will permanently remove your account and associated data from our servers.",
        },
      ],
    },
    {
      category: "Messaging Features",
      questions: [
        {
          question: "How do group chats work with translation?",
          answer:
            "In group chats, each member can set their preferred language. Messages are automatically translated to each member's chosen language, allowing seamless multilingual conversations.",
        },
        {
          question: "Can I send voice messages with translation?",
          answer:
            "Yes, PepTalk can transcribe voice messages and translate them to the recipient's preferred language. The recipient can also hear the original audio if they choose.",
        },
        {
          question: "What file types can I share?",
          answer:
            "You can share photos, videos, documents (PDF, DOC, etc.), audio files, and location. File size limits apply: 100MB for videos, 16MB for photos, and 100MB for documents.",
        },
        {
          question: "How do I create a group chat?",
          answer:
            "Tap the 'New Chat' button, select 'New Group', choose your contacts, set a group name and photo, and tap 'Create'. You can add up to 256 participants to a group.",
        },
      ],
    },
    {
      category: "Technical Issues",
      questions: [
        {
          question: "Why aren't my messages being delivered?",
          answer:
            "Message delivery issues can be caused by poor internet connection, the recipient's phone being offline, or app synchronization problems. Try checking your internet connection and restarting the app.",
        },
        {
          question: "The app is running slowly. How can I fix this?",
          answer:
            "Try closing other apps, restarting PepTalk, clearing the app cache, or restarting your device. If problems persist, ensure you have the latest version of the app installed.",
        },
        {
          question: "How do I backup my chat history?",
          answer:
            "Go to Settings > Chats > Chat Backup to set up automatic backups to your cloud storage (iCloud for iOS, Google Drive for Android). You can also create manual backups anytime.",
        },
        {
          question: "I'm not receiving notifications. What should I do?",
          answer:
            "Check that notifications are enabled in your device settings for PepTalk, ensure the app has permission to send notifications, and verify your notification preferences in PepTalk Settings > Notifications.",
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
