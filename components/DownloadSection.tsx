'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <section className="w-full bg-[#f4f9ff] py-10 px-4 pb-[4.5rem]">
      <div className="mx-auto h-[350px] bg-gradient-to-r from-[#5E94DF] to-[#00337C] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between">

        <div className="md:w-[40%] h-full flex flex-col justify-between text-center md:text-left h-[300px]">
          <div className='mb-6 md:mb-0 h-[70%]'>
            <h2 className="text-[25px] sm:text-[45px] md:text-[35px] lg:text-[45px] font-bold mb-1">Download App Today</h2>
            <p className="text-[17px] sm:text-[20px] md:text-[17px] lg:text-[20px] mb-6">
              Join thousands of satisfied users who have downloaded our app.
              Experience a seamless and engaging platform that enhances your daily life.
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-4 h-[30%] items-end">
            <a
              href="https://play.google.com/store/apps/datasafety?id=com.webstore&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="images/google-play-badge.png"
                alt="Get it on Google Play"
                width={160}
                height={50}
                className="object-contain"
              />
            </a>
            <a
              href="https://www.apple.com/in/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="images/app-store-badge.webp"
                alt="Download on the App Store"
                width={160}
                height={50}
                className="object-contain"
              />
            </a>
          </div>
        </div>


        {/* Right Section */}
        <div className="relative md:w-[560px] h-auto">
          <Image
            src="/images/app-preview.png"
            alt="App Preview"
            width={800}
            height={800}
            className="object-contain absolute -right-8 -bottom-44"
          />
        </div>
      </div>
    </section>
  );
}
