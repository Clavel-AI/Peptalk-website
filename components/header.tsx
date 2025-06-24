"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import LOGO from "@/assests/logo.svg" // Uncomment if you have a logo SVG file

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
    <header className="fixed w-full z-50 bg-white shadow-sm">
      <div className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="PepTalk" width={120} height={40} />
          </Link>
          <Button
            onClick={() => scrollToSection('download')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Download App
          </Button>        
        </div>
      </div>
    </header>
  )
}
