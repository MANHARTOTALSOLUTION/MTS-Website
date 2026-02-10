"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MenuIcon, XIcon } from "@/lib/icons"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold">
            <div className="w-12 h-12 bg-[#1E73BE] rounded-lg flex items-center justify-center text-white text-lg font-bold">
              M
            </div>
            <div className="hidden sm:block">
              <div className="text-[#1E73BE] text-lg font-bold">Manhar Total Solution</div>
              <div className="text-xs text-gray-600">Documentation & Insurance</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-[#1E73BE] font-medium transition">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#1E73BE] font-medium transition">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#1E73BE] font-medium transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#1E73BE] font-medium transition">
              Contact
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-[#1E73BE] font-medium transition">
              Login
            </Link>
            <button className="px-6 py-2 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155aa8] transition font-medium">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Home
            </Link>
            <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Services
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Contact
            </Link>
            <Link href="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Login
            </Link>
            <button className="w-full px-4 py-2 bg-[#1E73BE] text-white rounded hover:bg-[#155aa8] transition">
              Get Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
