"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("https://peptalk-dev-nodeapp-001-acbschdjadc6htev.eastus-01.azurewebsites.net/api/v1/auth/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      console.log("Subscription response:", response)

      if (!response.ok) {
        throw new Error("Already Subscribed !")
      }

      setSuccess(true)
      setEmail("")

      setTimeout(() => {
        setSuccess(false)
      }, 2000)

    } catch (err) {
      let errorMessage = "Failed to subscribe. Please try again later."

      if (err instanceof Error) {
        errorMessage = err.message
      }

      setError(errorMessage)
      console.error("Subscription error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Stay Updated with PepTalk
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest updates, features, and insights delivered to your inbox.
            </p>
          </div>

          <div className="flex justify-center">
            <form onSubmit={handleSubscribe} className="w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <div className="relative flex-1">
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 pl-12 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-lg outline-none focus:border-[#3971C0] focus:ring-2 focus:ring-yellow-400/20 transition-all disabled:opacity-50"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Image src="/images/mail.png" alt="Email Icon" width={18} height={18} className="opacity-60" />
                  </span>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-[#3971C0] to-[#3971C0] text-white font-semibold px-8 py-3 rounded-lg hover:from-[#2961b0] hover:to-[#2961b0] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-[#3971C0]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>

              </div>

              {error && (
                <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white text-sm px-6 py-3 rounded-lg shadow-lg transition-all duration-300 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⚠️</span>
                    <p className="font-semibold">{error}</p>
                  </div>
                </div>
              )}
              {success && (
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm px-6 py-3 rounded-lg shadow-lg transition-all duration-300 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✅</span>
                    <div>
                      <p className="font-semibold">Thank you for subscribing!</p>
                      <p className="opacity-90">You'll receive regular updates about PepTalk.</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Logo & Description */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                {/* Add your logo here */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/images/logofooter.png"
                    alt="PepTalk Logo"
                    width={130}
                    height={130}
                    className="rounded-full"
                  />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Use PepTalk to talk freely with real-time translation in every message. 
                 </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 relative">
                Explore PepTalk
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#3971C0] rounded"></span>
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    {/* <span className="w-1 h-1 bg-[#3971C0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> */}
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    {/* <span className="w-1 h-1 bg-[#3971C0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> */}
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    {/* <span className="w-1 h-1 bg-[#3971C0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> */}
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                  target="_blank"
                    href="https://clavel.ai/contacts/"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    {/* <span className="w-1 h-1 bg-[#3971C0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> */}
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 relative">
                Trust & Policies
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#3971C0] rounded"></span>
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/terms"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    {/* <span className="w-1 h-1 bg-[#3971C0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> */}
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    {/* <span className="w-1 h-1 bg-[#3971C0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> */}
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    {/* <span className="w-1 h-1 bg-[#3971C0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> */}
                    Security 
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    {/* <span className="w-1 h-1 bg-[#3971C0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> */}
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6 relative">
                Get Started
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#3971C0] rounded"></span>
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://play.google.com/store/apps/datasafety?id=com.webstore&hl=en"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    {/* <span className="w-1 h-1 bg-[#3971C0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> */}
                    Android
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.apple.com/in/app-store/"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    {/* <span className="w-1 h-1 bg-[#3971C0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> */}
                    IPhone
                  </a>
                </li>
                <li>
                  <a
                    href="/guide"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    {/* <span className="w-1 h-1 bg-[#3971C0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> */}
                    App Guide
                  </a>
                </li>
                <li>
                  <a
                    href="/fqa"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    {/* <span className="w-1 h-1 bg-[#3971C0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> */}
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 relative">
                Get in Touch
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#3971C0] rounded"></span>
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-800 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-[#3971C0] text-xs">📍</span>
                  </div>
                  <span className="text-gray-400 text-sm leading-relaxed">121 Gemini, Irvine, CA 92618, USA</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gray-800 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 text-xs">📞</span>
                  </div>
                  <a href="tel:+12138031017" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +1 (213) 803 1017
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gray-800 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 text-xs">✉️</span>
                  </div>
                  <a href="mailto:info@clavel.ai" className="text-gray-400 hover:text-white transition-colors text-sm">
                    support@peptalk.chat
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-500 text-sm">© 2025 PepTalk. All rights reserved.</p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.instagram.com/peptalk.chat/"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors group"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://www.linkedin.com/showcase/peptalkchat/"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors group"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://x.com/PepTalkchat"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors group"
                  aria-label="Follow us on X (Twitter)"
                >
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61577400763292"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors group"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://www.youtube.com/@PepTalk_chat"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors group"
                  aria-label="Follow us on YouTube"
                >
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">A product of</span>
                <Link
                  href="https://clavel.ai/"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Clavel AI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
