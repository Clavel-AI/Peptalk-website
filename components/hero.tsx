import Image from "next/image"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 pt-16">
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

        <h1 className="text-[54px] md:text-[54px] lg:text-[54px] font-bold text-[#080808] mb-6 leading-tight font-figtree">
          Talk Native. Translate Instantly.
          <br />
          Connect Globally.
        </h1>

        <p className="text-[17px] md:text-[17px] text-[#6E6E6E] max-w-3xl mx-auto leading-relaxed font-figtree">
          No more switching apps or copying texts. Message in your language—they read in theirs. Seamless. Instant.
          Human. It's not magic. It's the future of messaging.
        </p>
      </div>
    </section>
  )
}
