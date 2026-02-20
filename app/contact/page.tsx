"use client"

import type React from "react"

import { useState } from "react"
import WhatsappButton from "@/components/whatsapp-button"
import { PhoneIcon, MailIcon, MapPinIcon } from "@/lib/icons"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 5000)
  }

  return (
    <>
      <div className="pt-20 pb-20 bg-white dark:bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#0D1B2A] dark:text-white mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Get in touch with our team. We're here to help!</p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
              <PhoneIcon className="w-8 h-8 text-[#1E73BE] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">+91 99241 97765</p>
              <a href="tel:+919924197765" className="text-[#1E73BE] hover:underline font-semibold">
                Call Now
              </a>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-8 border border-orange-200 dark:border-orange-800">
              <MailIcon className="w-8 h-8 text-[#FF8C42] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">manhartotalsolution@gmail.com</p>
              <a href="mailto:manhartotalsolution@gmail.com" className="text-[#FF8C42] hover:underline font-semibold">
                Send Email
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
              <div className="w-8 h-8 mb-4 text-[#25D366]">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.746c0 5.432 4.424 9.846 9.846 9.846a9.823 9.823 0 009.847-9.847c0-5.422-4.424-9.746-9.848-9.746m7.841 15.36c-1.88 1.119-4.046 1.759-6.357 1.759-7.046 0-12.773-5.727-12.773-12.773S4.614 1.227 11.66 1.227c7.046 0 12.773 5.727 12.773 12.773 0 2.311-.64 4.477-1.759 6.357l1.21 4.409-4.508-1.21z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">+91 99241 97765</p>
              <a
                href="https://wa.me/919924197765"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-semibold"
              >
                Message Us
              </a>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white dark:bg-[#1B2838] rounded-2xl border border-gray-100 dark:border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200">
                  ✓ Message sent successfully! We'll reply soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent resize-none"
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155aa8] transition font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Address */}
            <div className="space-y-6">
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-lg h-80 bg-gray-200 dark:bg-[#1B2838]">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4552.2200001207475!2d72.53338807606428!3d23.70482859052301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c51b11ebc6029%3A0x4d4328b461ecd5fe!2sManhar%20Total%20Solution!5e1!3m2!1sen!2sin!4v1771164741806!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>


              <div className="bg-gray-50 dark:bg-[#1B2838] rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-[#1E73BE]" />
                  Our Location
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Manhar Total Solution
                  <br />
                  New Delhi, India
                  <br />
                  <br />
                  <strong className="dark:text-white">Business Hours:</strong>
                  <br />
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsappButton />
    </>
  )
}
