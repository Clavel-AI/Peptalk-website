import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ConnectivitySection() {
  return (
    <section className="pb-16 pt-10 bg-white">
      <div className="mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="text-[18px] font-bold text-black-600 tracking-wide">Innovative</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Chat Across Languages Without
              <br />
              Switching Apps
             </h2>
            <p className="text-lg text-[#6E6E6E] leading-relaxed">
              PepTalk works for everyday chats and professional conversations. It translates everything instantly while you enjoy chatting.
            </p>
            <Button className="bg-[#3971C0] hover:bg-[#3971C0] text-white px-8 py-3 rounded-xl text-base font-medium">
              Download App
            </Button>
          </div>

          {/* Images */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Girl */}
            <div className="flex-1 relative bg-[#F4F9FF] rounded-3xl  flex flex-col items-center justify-end">
              <Image
                src="/images/girl.webp"
                alt="girl image"
                width={200}
                height={200}
                className="mx-auto"
              />
              <div className="absolute left-[60%] top-[50%] mt-2 bg-[#3971C0] text-white px-3 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-sm">
                Hey, how are you.?
              </div>
            </div>

            {/* Boy */}
            <div className="flex-1 relative bg-[#FFF5DA] rounded-3xl  flex flex-col items-center justify-end">
              <Image
                src="/images/boy.webp"
                alt="boy image"
                width={250}
                height={250}
                className="mx-auto"
              />
                <div className="mt-2 absolute right-[60%] top-[50%] text-[#3971C0] px-3 py-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl bg-white text-sm">
                अरे, कैसे हो?
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}