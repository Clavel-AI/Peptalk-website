import Image from "next/image"
import india from "../public/images/India.png"
import usa from "../public/images/usa.png"

export default function PhoneMockup() {
  return (
    <section className="relative mx-auto px-4 bg-[#F4F9FF]">
      {/* Background Moving Text */}
      {/* <div className="absolute inset-0 top-[20%] z-0 overflow-hidden pointer-events-none">
        <h2 className="text-[15vw] animate-marquee md:text-[10vw] font-bold text-[#3971C0] whitespace-nowrap">
          You Text, We Translate.
        </h2>
      </div> */}

      {/* Phone and language bubbles */}
      <div className="relative z-10 flex justify-center max-w-3xl mx-auto">
        <div className="relative">

          {/* Français - top left */}
          <div className="absolute -left-1 top-[13rem] lg:left-24 lg:top-20 md:left-28 md:top-24 flex items-center space-x-2 bg-white rounded-full px-3 py-1.5 shadow-md border border-gray-100">
            <Image src="/images/Français.webp" alt="French flag" width={24} height={24} className="rounded-full" />
            <span className="text-xs font-medium text-gray-700">Français</span>
          </div>

          {/* English - top right */}
          <div className="absolute -right-1 lg:right-24 lg:top-32 md:right-24 md:top-40 flex items-center space-x-2 bg-white rounded-full px-[0.75rem] sm:px-1 md:px-3 lg:px-3 py-1.5 shadow-md border border-gray-100">
            <Image src={usa} alt="English flag" width={24} height={24} className="rounded-full" />
            <span className="text-xs font-medium text-gray-700">English</span>
          </div>

          {/* हिंदी - left side */}
          <div className="absolute bottom-44 lg:left-20 lg:bottom-54 md:left-20 md:bottom-52 flex items-center space-x-2 bg-white rounded-full px-[0.75rem] sm:px-1 md:px-3 lg:px-3 py-1.5 shadow-md border border-gray-100">
            <Image src={india} alt="Hindi flag" width={24} height={24} className="rounded-full" />
            <span className="text-xs font-medium text-gray-700">हिंदी</span>
          </div>

          {/* Deutsch - bottom right */}
          <div className="absolute -right-4 lg:right-12 bottom-32 md:right-20 md:bottom-80 flex items-center space-x-2 bg-white rounded-full px-[0.75rem] sm:px-1 md:px-3 lg:px-3 py-1.5 shadow-md border border-gray-100">
            <Image src="/images/Deu.png" alt="German flag" width={24} height={24} className="rounded-full" />
            <span className="text-xs font-medium text-gray-700">Deutsch</span>
          </div>

          {/* Phone Mockup */}
          <div className="relative z-10">
            <Image
              src="/images/phone-mockup.webp"
              alt="PepTalk app interface showing chat conversations with real-time translation"
              width={700}
              height={600}
              className="mx-auto max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
