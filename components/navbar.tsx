"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@/lib/icons"
import { useTheme } from "next-themes"
import AppointmentModal from "./appointment-modal"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const openAppointmentModal = () => {
    setIsAppointmentModalOpen(true)
  }

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false)
  }

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 dark:bg-[#0D1B2A]/90 backdrop-blur-md shadow-md" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 font-bold">
              <Image
                src="/logo.png"
                alt="Manhar Total Solution Logo"
                width={60}
                height={60}
              />

              <div className="hidden sm:block">
                <div className="text-[#1E73BE] dark:text-white text-lg font-bold">Manhar Total Solution</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Documentation & Insurance</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-[#1E73BE] dark:hover:text-white font-medium transition">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 dark:text-gray-200 hover:text-[#1E73BE] dark:hover:text-white font-medium transition">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-[#1E73BE] dark:hover:text-white font-medium transition">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-[#1E73BE] dark:hover:text-white font-medium transition">
                Contact
              </Link>
              <Link href="/login" className="text-gray-700 dark:text-gray-200 hover:text-[#1E73BE] dark:hover:text-white font-medium transition">
                Login
              </Link>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-[#1B2838] hover:bg-gray-200 dark:hover:bg-[#2B3A4A] transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {mounted && resolvedTheme === "dark" ? (
                  <SunIcon className="w-5 h-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              <button 
                onClick={openAppointmentModal}
                className="px-6 py-2 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155aa8] transition font-medium"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-[#1B2838] hover:bg-gray-200 dark:hover:bg-[#2B3A4A] transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {mounted && resolvedTheme === "dark" ? (
                  <SunIcon className="w-5 h-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-700 dark:text-gray-200">
                {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link href="/" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1B2838] rounded">
                Home
              </Link>
              <Link href="/services" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1B2838] rounded">
                Services
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1B2838] rounded">
                About
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1B2838] rounded">
                Contact
              </Link>
              <Link href="/login" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1B2838] rounded">
                Login
              </Link>
              <button 
                onClick={openAppointmentModal}
                className="w-full px-4 py-2 bg-[#1E73BE] text-white rounded hover:bg-[#155aa8] transition"
              >
                Book Appointment
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={closeAppointmentModal} 
      />
    </>
  )
}
