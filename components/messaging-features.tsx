// app/features/page.tsx
'use client';

import { ArrowLeft, ArrowRight, Languages, Mic, TextQuote } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Image src="/images/Frame 59 (2).png" alt="Phone Mockup" width={80} height={80} className="rounded-full" />,
    title: "Easy Messaging Setup",
    description:
      "Set up your profile in a few steps and start messaging instantly. PepTalk supports one-on-one chats with a clean interface.",
  },
  {
    icon: <Image src="/images/Frame 60 (1).png" alt="Group Chat" width={80} height={80} className="rounded-full" />,
    title: "Built-In Translation Tools",
    description:
      "Speak or type in your own language while PepTalk translates everything in real time. Peptalk’s Voice-to-text and multi-language threads keep the conversation natural for everyone.",
  },
  {
    icon: <Image src="/images/Frame 61 (1).png" alt="File Sharing" width={80} height={80} className="rounded-full" />,
    title: "Secure and Flexible Features",
    description:
      "Keep your messages protected with encryption, stay updated with notifications, and back up your chats anytime. You can also customize themes and use voice or video calls when needed.",
  },
];

export default function FeaturesPage() {
  return (
    <div className=" bg-white p-6 pt-16 pb-6">
      <div className=" mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="lg:w-[30%] w-[30%] space-y-5">
          <p className="font-semibold text-sm text-gray-600">Features</p>
          <h2 className="text-[35px] md:text-[35px] font-bold leading-snug">
            Why You’ll Love Messaging with Loved Ones
          </h2>
          <p className="text-[#6E6E6E] text-[17px] max-w-md">
            Use PepTalk to send messages, share files, react to conversations, and record voice notes. Join group chats or talk one-on-one using features that support everyday communication.
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

       <div className="flex justify-end gap-4 mt-10 pr-6 mx-auto ">
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
      </div>
    </div>
  );
}
