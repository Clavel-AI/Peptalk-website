"use client"

import { useState } from "react"
import Image from "next/image"
import { Shield, MessageCircle, FileText, Video, Settings, Bell } from "lucide-react"

const features = [
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Message securely",
    description: "Your chats are encrypted and saved safely with backup support.",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    title: "Start private or group chats",
    description: "Chat one-on-one or in groups, and use message reactions to respond quickly.",
  },
  {
    icon: <FileText className="w-8 h-8 text-white" />,
    title: "Share files easily",
    description: "Send documents, photos, voice notes, and other media in any conversation.",
  },
  {
    icon: <Video className="w-8 h-8 text-white" />,
    title: "Call with voice or video",
    description: "Switch from text to voice or video calls whenever needed.",
  },
  {
    icon: <Settings className="w-8 h-8 text-white" />,
    title: "Personalize your experience",
    description: "Set up your profile, choose a theme, and start chatting.",
  },
  {
    icon: <Bell className="w-8 h-8 text-white" />,
    title: "Get real-time alerts",
    description: "Stay notified about messages, calls, profile updates, and people near you.",
  },
]

export default function FeaturesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const cardsPerPage = 3
  const totalFeatures = features.length
  const totalPages = Math.ceil(totalFeatures / cardsPerPage)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="bg-white p-6 pt-16 pb-6">
      <div className="mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="lg:w-[30%] w-full space-y-5">
          <p className="font-semibold text-sm text-gray-600">Features</p>
          <h2 className="text-[35px] font-bold leading-snug">Why You'll Love Messaging with Loved Ones</h2>
          <p className="text-[#6E6E6E] text-[17px] max-w-md">
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
              const widthClass =
                pageFeatures.length === 2 ? "w-[48%]" : pageFeatures.length === 1 ? "w-[100%]" : "w-[32%]"

              return (
                <div key={pageIndex} className="w-full flex justify-between px-2">
                  {pageFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`${widthClass} border rounded-3xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition`}
                    >
                      <div className="bg-[#3971C0] w-20 h-20 rounded-full flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-[23px]">{feature.title}</h3>
                      <p className="text-[17px] text-[#6E6E6E]">{feature.description}</p>
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end gap-4 mt-10 pr-6 mx-auto">
        <div
          className="w-14 h-14 rounded-3xl bg-[#F4F9FF] flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          onClick={prevSlide}
        >
          <Image src="/images/Left.png" alt="Left Arrow" width={24} height={24} />
        </div>
        <div
          className="w-14 h-14 rounded-3xl bg-[#F4F9FF] flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          onClick={nextSlide}
        >
          <Image src="/images/Right.png" alt="Right Arrow" width={24} height={24} />
        </div>
      </div>
    </div>
  )
}