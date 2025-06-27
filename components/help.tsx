"use client"

import Image from "next/image"
import { Mail, Users } from "lucide-react"

export default function Help() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className=" py-8 md:py-16 lg:py-24">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#3971C0] to-[#2c5aa0] text-white p-6 md:p-10 lg:p-12 text-center mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 lg:mb-6">Need Help?</h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help you with any questions about
            PepTalk.
          </p>
        </div>

        {/* Support Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
          {/* Email Support Card */}
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-100 transition-colors duration-300">
              <Mail className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">Email Support</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Get help via email within 24 hours. Our support team will respond to your questions promptly.
            </p>
            <button className="bg-[#3971C0] hover:bg-[#2c5aa0] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto">
              Send Email
            </button>
          </div>

          {/* Community Card */}
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-50 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-green-100 transition-colors duration-300">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">Community</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Connect with other PepTalk users, share tips, and get answers from the community.
            </p>
            <a
              href="https://www.reddit.com/user/Peptalk_chat/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3971C0] hover:bg-[#2c5aa0] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto"
            >
              Join Community
            </a>
          </div>
        </div>
        {/* Contact Information */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Still need help?</h3>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Our support team is available Monday to Friday, 9 AM to 6 PM EST
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:support@peptalk.com"
                className="flex items-center text-[#3971C0] hover:text-[#2c5aa0] transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                support@peptalk.com
              </a>
              <span className="hidden sm:block text-gray-300">|</span>
              <a
                href="tel:+1-555-PEPTALK"
                className="flex items-center text-[#3971C0] hover:text-[#2c5aa0] transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1-555-PEPTALK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
