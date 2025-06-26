"use client"

import { useState } from "react"
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Product Updates", "Translation Tips", "Security", "User Stories", "Company News"]

  const blogPosts = [
    {
      id: 1,
      title: "Introducing PepTalk 3.0: Enhanced AI Translation and New Features",
      excerpt:
        "We're excited to announce the launch of PepTalk 3.0 with improved AI translation accuracy, new voice features, and enhanced security measures.",
      author: "Sarah Chen",
      date: "2024-01-15",
      category: "Product Updates",
      readTime: "5 min read",
      featured: true,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["AI", "Translation", "Update"],
    },
    {
      id: 2,
      title: "10 Tips for Better Cross-Cultural Communication",
      excerpt:
        "Learn how to communicate more effectively across cultures using PepTalk's advanced features and best practices for international messaging.",
      author: "Maria Rodriguez",
      date: "2024-01-12",
      category: "Translation Tips",
      readTime: "8 min read",
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Communication", "Culture", "Tips"],
    },
    {
      id: 3,
      title: "How End-to-End Encryption Protects Your Multilingual Conversations",
      excerpt:
        "Understanding the security measures that keep your translated messages private and secure across all languages and devices.",
      author: "David Kim",
      date: "2024-01-10",
      category: "Security",
      readTime: "6 min read",
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Security", "Encryption", "Privacy"],
    },
    {
      id: 4,
      title: "Success Story: How PepTalk Connected a Global Remote Team",
      excerpt:
        "Discover how a multinational company used PepTalk to improve communication and collaboration across 15 different languages.",
      author: "Jennifer Park",
      date: "2024-01-08",
      category: "User Stories",
      readTime: "7 min read",
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Success Story", "Remote Work", "Global"],
    },
    {
      id: 5,
      title: "The Science Behind Real-Time Translation: How PepTalk Works",
      excerpt:
        "A deep dive into the AI and machine learning technologies that power PepTalk's instant translation capabilities.",
      author: "Dr. Alex Thompson",
      date: "2024-01-05",
      category: "Product Updates",
      readTime: "10 min read",
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      tags: ["AI", "Technology", "Translation"],
    },
    {
      id: 6,
      title: "PepTalk Reaches 10 Million Users Worldwide",
      excerpt: "Celebrating this major milestone and sharing our vision for the future of multilingual communication.",
      author: "CEO Michael Johnson",
      date: "2024-01-03",
      category: "Company News",
      readTime: "4 min read",
      featured: false,
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Milestone", "Growth", "Community"],
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3971C0] to-[#2c5aa0] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">PepTalk Blog</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Stay updated with the latest news, tips, and insights about multilingual communication
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900 border-0 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-[#3971C0] hover:bg-[#2c5aa0] text-white"
                    : "border-[#3971C0] text-[#3971C0] hover:bg-[#3971C0] hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === "All" && searchTerm === "" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Article</h2>
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gray-200 aspect-video md:aspect-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-[#3971C0] text-white">{featuredPost.category}</Badge>
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 text-gray-400 ml-2" />
                      <span className="text-sm text-gray-600">{featuredPost.date}</span>
                    </div>
                    <Button className="bg-[#3971C0] hover:bg-[#2c5aa0] text-white">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === "All" ? "Latest Articles" : selectedCategory}
            </h2>
            <span className="text-gray-600">{filteredPosts.length} articles found</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="bg-gray-200 aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline" className="border-[#3971C0] text-[#3971C0]">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#3971C0] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                      <Calendar className="w-4 h-4 ml-2" />
                      <span>{post.date}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#3971C0] group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchTerm("")
                }}
                className="mt-4 bg-[#3971C0] hover:bg-[#2c5aa0] text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>    
    </div>
  )
}