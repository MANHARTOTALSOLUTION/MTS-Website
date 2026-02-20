"use client"

import { useState, useEffect } from "react"

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)
  const [shouldBounce, setShouldBounce] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldBounce(true)
      setTimeout(() => setShouldBounce(false), 500)
    }, 12000)

    return () => clearInterval(interval)
  }, [])

  return (
    <a
      href="https://wa.me/919924197765"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 ${shouldBounce ? "animate-bounce" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full transition-transform duration-300 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
        style={{
          background: "linear-gradient(145deg, #25D366, #128C7E)",
          boxShadow: "0 8px 25px rgba(37, 211, 102, 0.4)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.4 0 .12 5.28.12 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.88 11.88 0 005.74 1.46h.01c6.64 0 11.92-5.28 11.92-11.92 0-3.18-1.24-6.17-3.45-8.41zm-8.48 18.3a9.93 9.93 0 01-5.07-1.4l-.36-.21-3.74.98.99-3.65-.23-.38a9.93 9.93 0 01-1.53-5.3C2.1 6.48 6.57 2 12.04 2c2.65 0 5.14 1.03 7.02 2.91a9.86 9.86 0 012.9 7.01c0 5.47-4.47 9.95-9.92 9.95zm5.45-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.5-.89-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.45 1.08 2.85 1.23 3.05.15.2 2.12 3.23 5.14 4.53.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
        </svg>
      </div>

      {isHovered && (
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-gray-900 dark:bg-white rounded-lg text-white dark:text-gray-900 text-sm font-medium whitespace-nowrap">
          Chat with us
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900 dark:border-l-white" />
        </div>
      )}
    </a>
  )
}
