import { Search, MessageCircle, Settings, Shield, Globe, Smartphone, Users, BookOpen, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function HelpCenterPage() {
  const helpCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of using PepTalk",
      articles: [
        "How to create your PepTalk account",
        "Setting up your profile",
        "Adding your first contacts",
        "Sending your first message",
      ],
    },
    {
      icon: Globe,
      title: "Translation & Languages",
      description: "Master multilingual messaging",
      articles: [
        "How real-time translation works",
        "Adding and changing languages",
        "Translation accuracy tips",
        "Offline translation features",
      ],
    },
    {
      icon: MessageCircle,
      title: "Messaging Features",
      description: "Explore all messaging capabilities",
      articles: [
        "Sending photos and videos",
        "Voice messages and calls",
        "Group chats and management",
        "Message formatting options",
      ],
    },
    {
      icon: Settings,
      title: "Account & Settings",
      description: "Manage your account preferences",
      articles: [
        "Privacy settings explained",
        "Notification preferences",
        "Account security options",
        "Data and storage management",
      ],
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Keep your conversations secure",
      articles: [
        "End-to-end encryption explained",
        "Two-step verification setup",
        "Blocking and reporting users",
        "Data protection policies",
      ],
    },
    {
      icon: Smartphone,
      title: "Technical Support",
      description: "Troubleshoot common issues",
      articles: [
        "App not working properly",
        "Connection and sync issues",
        "Installation problems",
        "Performance optimization",
      ],
    },
  ]

  const popularArticles = [
    "How to enable real-time translation",
    "Setting up two-step verification",
    "Managing group chat languages",
    "Troubleshooting connection issues",
    "Understanding message encryption",
    "Customizing notification sounds",
  ]

  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-[#3971C0] to-[#2c5aa0] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">How can we help you?</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Find answers to your questions about PepTalk's multilingual messaging features
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for help articles..."
              className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900 border-0 rounded-full"
            />
          </div>
        </div>
      </section> */}

      {/* Help Categories */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Browse Help Topics</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-[#3971C0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2c5aa0] transition-colors">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                  <p className="text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <Link href="#" className="text-[#3971C0] hover:underline text-sm">
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-[#3971C0] text-[#3971C0] hover:bg-[#3971C0] hover:text-white"
                  >
                    View All Articles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Popular Articles</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#3971C0] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <Link href="#" className="text-gray-900 hover:text-[#3971C0] font-medium">
                        {article}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Support */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12 bg-gradient-to-br from-[#3971C0] to-[#2c5aa0] text-white pt-10 pb-10">
            <h2 className="text-3xl font-bold mb-4 ">Need Help?</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you with any questions about PepTalk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-[#3971C0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Email Support</h3>
                <p className="text-gray-600 mb-4">Get help via email within 24 hours</p>
                <Button className="bg-[#3971C0] hover:bg-[#2c5aa0] text-white">Send Email</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <MessageCircle className="w-12 h-12 text-[#3971C0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
                <Button className="bg-[#3971C0] hover:bg-[#2c5aa0] text-white">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-[#3971C0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600 mb-4">Connect with other PepTalk users</p>
                <Button className="bg-[#3971C0] hover:bg-[#2c5aa0] text-white">Join Community</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <Link href="/fqa" className="text-[#3971C0] hover:underline font-medium">
              Frequently Asked Questions
            </Link>
            <Link href="/security" className="text-[#3971C0] hover:underline font-medium">
              Security & Privacy
            </Link>
            <Link href="https://clavel.ai/contacts/" className="text-[#3971C0] hover:underline font-medium">
              Contact Us
            </Link>
            <Link href="/" className="text-[#3971C0] hover:underline font-medium">
              Download PepTalk
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}