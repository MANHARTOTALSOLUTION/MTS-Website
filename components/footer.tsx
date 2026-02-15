import Image from "next/image";
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0D1B2A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.png"
              alt="Manhar Total Solution Logo"
              width={80}
              height={80}
            />
            <p className="text-gray-300 text-sm">Fast paperwork and reliable insurance, all in one place.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#FF8C42] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF8C42] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF8C42] transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF8C42] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/services#documentation" className="hover:text-[#FF8C42] transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/services#insurance" className="hover:text-[#FF8C42] transition">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-[#FF8C42] transition">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#FF8C42] transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                Email:{" "}
                <a href="mailto:info@manhar.com" className="hover:text-[#FF8C42] transition">
                  info@manhar.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+91234567890" className="hover:text-[#FF8C42] transition">
                  +91 234 567 890
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF8C42] transition">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {currentYear} Manhar Total Solution. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#FF8C42] transition">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF8C42] transition">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF8C42] transition">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF8C42] transition">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
