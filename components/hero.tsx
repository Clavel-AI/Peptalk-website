"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
  const translations = [
    {
      line1: "Your Real-Time Multilingual",
      line2: "Messaging app",
      lang: "en"
    },
    {
      line1: "आपका रीयल-टाइम बहुभाषी",
      line2: "मैसेजिंग ऐप",
      lang: "hi"
    },
    {
      line1: "तुमचे रीअल-टाइम बहुभाषिक",
      line2: "मेसेजिंग अॅप",
      lang: "mr"
    },
    {
      line1: "உங்கள் நேரலை பன்மொழி",
      line2: "செய்தி அனுப்பும் பயன்பாடு",
      lang: "ta"
    },
    {
      line1: "Your Real-Time Multilingual",
      line2: "Messaging app",
      lang: "en"
    },
    {
      line1: "আপনার রিয়েল-টাইম বহুভাষিক",
      line2: "মেসেজিং অ্যাপ",
      lang: "bn"
    },
    {
      line1: "તમારી રીયલ-ટાઇમ બહુભાષી",
      line2: "મેસેજિંગ એપ",
      lang: "gu"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % translations.length);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full max-w-none px-4 pt-24 bg-[#F4F9FF]">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-8">
          {/* <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="User avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          </div> */}
        </div>

        <h1 className="text-[54px] md:text-[54px] lg:text-[54px] font-bold text-[#080808] mb-6 leading-tight font-figtree transition-opacity duration-500">
          {translations[currentIndex].line1}
          <br />
          {translations[currentIndex].line2}
        </h1>

        <p className="text-[17px] md:text-[17px] text-[#6E6E6E] max-w-3xl mx-auto leading-relaxed font-figtree">
          Tired of copying messages into translation apps? PepTalk translates your messages in real time so both people chat in their own language.
        </p>
      </div>
    </section>
  )
}