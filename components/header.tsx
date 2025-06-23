"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname()

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
  ]

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">PepTalk</span> */}
            <Image
              src="/images/logo.png"
              alt="PepTalk Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-[#3971C0] hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Features
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection('download')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Download App
          </Button>        </div>
      </div>
    </header>
  )
}
