"use client"

import type React from "react"

import { useState } from "react"
import WhatsappButton from "@/components/whatsapp-button"

const allServices = [
  "Aadhaar Enrollment",
  "PAN Card",
  "GST Services",
  "Income Certificate",
  "Caste Certificate",
  "Birth/Death Certificate",
  "Ration Card Services",
  "Driving License Help",
  "Voter ID Services",
  "Notary & Attestation",
  "Affidavit Creation",
  "Passport Services",
  "Motor Insurance",
  "Term Insurance",
  "Life Insurance",
  "Travel Insurance",
  "Labour Insurance",
  "Machinery Insurance",
]

export default function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    notes: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData, file)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <div className="pt-20 pb-20 bg-gray-50 dark:bg-[#0a1421] min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#0D1B2A] dark:text-white mb-4">Apply for a Service</h1>
            <p className="text-lg text-gray-600">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white dark:bg-[#1B2838] rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200">
                ✓ Application submitted successfully! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Select Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
                  required
                >
                  <option value="">Choose a service...</option>
                  {allServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Upload Documents</label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
                  />
                  {file && <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">✓ {file.name}</p>}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent resize-none"
                  placeholder="Any additional information you'd like to share..."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155aa8] transition font-semibold"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>

      <WhatsappButton />
    </>
  )
}
