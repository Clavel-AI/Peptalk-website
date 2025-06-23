// app/features/page.tsx
'use client';

import { ArrowLeft, ArrowRight, Languages, Mic, TextQuote } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <TextQuote className="h-6 w-6 text-white" />,
    title: "Smart Instant Translation",
    description:
      "Your messages are translated in real time, so conversations flow naturally across any language.",
  },
  {
    icon: <Mic className="h-6 w-6 text-white" />,
    title: "Voice-to-Text Translator",
    description:
      "Speak in your language, and the app converts it into translated text instantly for the other user.",
  },
  {
    icon: <Languages className="h-6 w-6 text-white" />,
    title: "Multi Language Threads",
    description:
      "Each user sees the same conversation in their preferred language—automatically and accurately.",
  },
];

export default function FeaturesPage() {
  return (
    <div className=" bg-white p-6 py-16">
      <div className=" mx-auto flex flex-col lg:flex-row gap-12 container">
        {/* Left Section */}
        <div className="lg:w-[30%] w-[30%] space-y-5">
          <p className="font-semibold text-sm text-gray-600">Features</p>
          <h2 className="text-[35px] md:text-[35px] font-bold leading-snug">
            Why You’ll Love Messaging with Loved Ones
          </h2>
          <p className="text-[#6E6E6E] text-[17px] max-w-md">
            Stay close, no matter the language. Our real-time translation makes every message feel
            personal, clear, and effortless—so nothing gets lost between you and the people who
            matter most.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-[70%] ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border rounded-3xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition"
              >
                <div className="bg-[#3971C0] w-20 h-20 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-[23px]">{feature.title}</h3>
                <p className="text-[17px] text-[#6E6E6E]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      {/* <div className="flex justify-end gap-4 mt-10 pr-6 mx-auto container">
        <div className="w-14 h-14 rounded-3xl bg-[#F4F9FF] flex items-center justify-center hover:bg-gray-200 cursor-pointer">
          <Image
            src="/images/Left.png"
            alt="Left Arrow"
            width={24}
            height={24}
          />
        </div>
        <div className="w-14 h-14 rounded-3xl bg-[#F4F9FF] flex items-center justify-center hover:bg-gray-200 cursor-pointer">
          <Image
            src="/images/Right.png"
            alt="Right Arrow"
            width={24}
            height={24}
          />
        </div>
      </div> */}
    </div>
  );
}
