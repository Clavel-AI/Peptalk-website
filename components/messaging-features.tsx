"use client"

import { useState } from "react"
import Image from "next/image"
import { Shield, MessageCircle, FileText, Video, Settings, Bell } from "lucide-react"

const features = [
  {
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "End-to-End Encryption",
    description: "Personal messages, calls, photos and videos are secured with end-to-end encryption.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Start private or group chats",
    description: "Chat one-on-one or in groups, and use message reactions to respond quickly.",
  },
  {
    icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Share files easily",
    description: "Send documents, photos, voice notes, and other media in any conversation.",
  },
  {
    icon: <Video className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Call with voice or video",
    description: "Switch from text to voice or video calls whenever needed.",
  },
  {
    icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Personalize your experience",
    description: "Set up your profile, choose a theme, and start chatting.",
  },
  {
    icon: <Bell className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    title: "Get real-time alerts",
    description: "Stay notified about messages, calls, profile updates, and people near you.",
  },
]

export default function FeaturesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Responsive cards per page
  const getCardsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1 // mobile
      if (window.innerWidth < 1024) return 2 // tablet
      return 3 // desktop
    }
    return 3
  }
  
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage())
  const totalFeatures = features.length
  const totalPages = Math.ceil(totalFeatures / cardsPerPage)

  // Update cards per page on window resize
  useState(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage())
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  })

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="bg-white p-4 sm:p-6 pt-8 sm:pt-16 pb-6">
      <div className=" flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
        {/* Left Section */}
        <div className="lg:w-[30%] w-full space-y-3 sm:space-y-5">
          <p className="font-semibold text-xs sm:text-sm text-gray-600">Features</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold leading-tight sm:leading-snug">
            Why You'll Love Messaging with Loved Ones
          </h2>
          <p className="text-[#6E6E6E] text-sm sm:text-base lg:text-[17px] max-w-md">
            Use PepTalk to send messages, share files, and record voice notes. Join group chats or talk one-on-one using
            features that support everyday communication.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-[70%] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${totalPages * 100}%`,
              transform: `translateX(-${(currentSlide * 100) / totalPages}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const start = pageIndex * cardsPerPage
              const end = start + cardsPerPage
              const pageFeatures = features.slice(start, end)

              return (
                <div 
                  key={pageIndex} 
                  className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 px-1 sm:px-2"
                >
                  {pageFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex-1 border rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-sm hover:shadow-md transition"
                    >
                      <div className="bg-[#3971C0] w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-lg sm:text-xl lg:text-[23px] leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-[17px] text-[#6E6E6E] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center sm:justify-end gap-3 sm:gap-4 mt-6 sm:mt-10 px-4 sm:pr-6 mx-auto">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-3xl bg-[#F4F9FF] flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-colors"
          onClick={prevSlide}
        >
          <Image 
            src="/images/Left.png" 
            alt="Left Arrow" 
            width={20} 
            height={20} 
            className="sm:w-6 sm:h-6"
          />
        </div>
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-3xl bg-[#F4F9FF] flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-colors"
          onClick={nextSlide}
        >
          <Image 
            src="/images/Right.png" 
            alt="Right Arrow" 
            width={20} 
            height={20}
            className="sm:w-6 sm:h-6"
          />
        </div>
      </div>
    </div>
  )
}