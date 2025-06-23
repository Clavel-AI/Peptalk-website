import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-4 py-10">
            <div className="max-w-6xl mx-auto">
                {/* Subscribe Section */}
                <div className="text-center mb-10">
                    <h2 className="text-[30px] font-semibold mb-4">
                        Subscribe to our news & <br /> latest updates.
                    </h2>
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className=" px-10 py-2 bg-black text-white placeholder-white border border-white rounded-xl outline-none"
                            />
                            <span className="absolute left-28 top-1/2 -translate-y-1/2 text-gray-400">
                                <Image
                                    src="/images/mail.png"
                                    alt="Email Icon"
                                    width={20}
                                    height={20}
                                />
                            </span>
                        </div>
                        <button className="bg-yellow-400 h-10 text-black font-medium mt-4 mb-10 px-6 py-2 rounded-md">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Main Footer Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-300">
                    {/* Logo & Address */}
                    <div className="space-y-4 flex flex-col items-start sm:items-start">
                        <div className="flex items-center space-x-2">
                            <Image src="/images/logo.png" alt="PepTalk" width={100} height={40} />
                        </div>
                        <p className="text-[13px]">20 Cooper Square, New York, NY 10003, USA</p>
                        <p className="text-[13px]">All Rights Reserved</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold text-[20px] mb-2">Links</h4>
                        <ul className="space-y-1">
                            <li className="text-[13px]">Overons</li>
                            <li className="text-[13px]">Social Media</li>
                            <li className="text-[13px]">Counters</li>
                            <li className="text-[13px]">Contact</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold text-[20px] mb-2">Company</h4>
                        <ul className="space-y-1">
                            <li className="text-[13px]">Terms & Conditions</li>
                            <li className="text-[13px]">Privacy Policy</li>
                            <li className="text-[13px]">Contact</li>
                        </ul>
                    </div>

                    {/* Get in touch */}
                    <div>
                        <h4 className="text-white font-bold text-[20px] mb-2">Get in touch</h4>
                        <ul className="space-y-1">
                            <li className="text-[13px]">20 Cooper Square, New York, NY 10003, USA</li>
                            <li className="text-[13px]">+1 842 484 5939</li>
                            <li className="text-[13px]">info@peptalk.ai</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Note */}
                <p className="text-center text-[13px] text-gray-500 mt-10">
                    © 2025 peptalk. All rights reserved
                </p>
            </div>
        </footer>
    );
}
