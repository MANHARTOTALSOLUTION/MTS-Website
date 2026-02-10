"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsappButton from "@/components/whatsapp-button"
import Link from "next/link"
import { CheckIcon } from "@/lib/icons"

// Service data
const serviceData: Record<
  string,
  {
    title: string
    subtitle: string
    description: string
    features: string[]
    documents: string[]
    steps: string[]
    time: string
    price: string
    faqs: Array<{ q: string; a: string }>
  }
> = {
  aadhaar: {
    title: "Aadhaar Enrollment",
    subtitle: "Get Your Unique Identity Number",
    description:
      "Aadhaar is a 12-digit unique identity number issued by UIDAI to all residents of India. It serves as proof of identity and address across India.",
    features: [
      "Online enrollment facility",
      "Instant generation of enrollment number",
      "Digital identity verification",
      "Free biometric capture",
      "Fast processing",
    ],
    documents: [
      "Valid Government ID (Passport, Voter ID, PAN Card, or Driving License)",
      "Proof of Address (Electricity Bill, Water Bill, or Rental Agreement)",
      "Original documents for verification",
    ],
    steps: [
      "Visit our enrollment center",
      "Provide your documents",
      "Complete biometric process",
      "Get enrollment acknowledgment slip",
      "Receive Aadhaar number within 10-15 days",
    ],
    time: "10-15 days",
    price: "Free",
    faqs: [
      {
        q: "How long does Aadhaar enrollment take?",
        a: "The Aadhaar number is generated instantly upon successful enrollment. The printed card is usually delivered within 10-15 days.",
      },
      {
        q: "Is Aadhaar enrollment free?",
        a: "Yes, Aadhaar enrollment is completely free. No charges are levied.",
      },
      {
        q: "What documents are required?",
        a: "You need a valid government-issued ID and proof of address. We can help you arrange these documents.",
      },
    ],
  },
  pan: {
    title: "PAN Card Registration",
    subtitle: "Apply for Your Permanent Account Number",
    description:
      "A PAN Card is a 10-character alphanumeric identifier issued by the Indian Income Tax Department as a unique taxpayer ID.",
    features: [
      "Online application",
      "Home delivery of card",
      "Instant PAN generation",
      "Lifetime validity",
      "Easy application process",
    ],
    documents: [
      "ID Proof (Passport, Voter ID, or Driving License)",
      "Address Proof (Electricity Bill or Telephone Bill)",
      "2 Passport-sized photographs",
      "Birth Certificate or School Certificate",
    ],
    steps: [
      "Fill application form",
      "Submit required documents",
      "Verification process",
      "PAN generation",
      "Card delivery to your address",
    ],
    time: "15-20 days",
    price: "Starting from ₹500",
    faqs: [
      {
        q: "Can I apply for PAN online?",
        a: "Yes, we handle the complete online process for you. Just provide the documents.",
      },
      {
        q: "Is PAN required for everyone?",
        a: "PAN is mandatory for businesses and individuals with taxable income above ₹2,50,000.",
      },
      {
        q: "How long is PAN validity?",
        a: "PAN is issued for a lifetime and does not require renewal.",
      },
    ],
  },
  gst: {
    title: "GST Services",
    subtitle: "Goods and Services Tax Registration",
    description:
      "GST registration is mandatory for businesses with annual turnover exceeding ₹40 lakh. We provide complete GST registration and compliance services.",
    features: [
      "GST registration assistance",
      "Compliance support",
      "Monthly filing",
      "Return preparation",
      "Expert guidance",
    ],
    documents: [
      "Business registration certificate",
      "PAN of proprietor/directors",
      "Address proof of business premises",
      "Bank account details",
      "Authorization letter",
    ],
    steps: [
      "Document preparation",
      "Online application filing",
      "Verification process",
      "GST number allocation",
      "Ongoing compliance support",
    ],
    time: "5-7 days",
    price: "Starting from ₹2,000",
    faqs: [
      {
        q: "When is GST registration mandatory?",
        a: "GST registration is mandatory for businesses with turnover exceeding ₹40 lakh in a financial year.",
      },
      {
        q: "How much time does registration take?",
        a: "With our assistance, GST registration typically takes 5-7 days.",
      },
      {
        q: "What are the ongoing compliance requirements?",
        a: "You need to file monthly or quarterly returns and maintain proper records of sales and purchases.",
      },
    ],
  },
}

export default function ServiceDetail({ params }: { params: { id: string } }) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const service = serviceData[params.id] || serviceData.aadhaar
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <>
      <Navbar />

      <div className="pt-20 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-[#0D1B2A] mb-4">{service.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{service.subtitle}</p>
            <p className="text-lg text-gray-700">{service.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3">
                      <CheckIcon className="w-5 h-5 text-[#1E73BE] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Required Documents */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
                <ul className="space-y-3">
                  {service.documents.map((doc, idx) => (
                    <li key={idx} className="flex gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <span className="text-[#1E73BE] font-bold flex-shrink-0">{idx + 1}.</span>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Process Steps */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
                <div className="space-y-4">
                  {service.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-[#1E73BE] text-white flex items-center justify-center font-bold flex-shrink-0">
                          {idx + 1}
                        </div>
                        {idx < service.steps.length - 1 && <div className="w-1 h-12 bg-gray-200 mt-2" />}
                      </div>
                      <div className="pb-8">
                        <p className="text-gray-700 font-semibold">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                      >
                        <span className="text-left font-semibold text-gray-900">{faq.q}</span>
                        <span className={`transform transition ${openFaqIndex === idx ? "rotate-180" : ""}`}>▼</span>
                      </button>
                      {openFaqIndex === idx && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-700">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Pricing Card */}
              <div className="bg-gradient-to-br from-[#1E73BE] to-blue-800 text-white rounded-xl p-8 mb-6 sticky top-24">
                <div className="mb-6">
                  <p className="text-blue-100 text-sm mb-2">Starting from</p>
                  <p className="text-3xl font-bold">{service.price}</p>
                </div>

                <div className="space-y-4 mb-6 border-t border-blue-300 border-opacity-30 pt-6">
                  <div>
                    <p className="text-blue-100 text-sm">Processing Time</p>
                    <p className="font-semibold">{service.time}</p>
                  </div>
                </div>

                <button className="w-full py-3 bg-[#FF8C42] text-white rounded-lg hover:bg-orange-600 transition font-semibold mb-3">
                  Apply Now
                </button>

                <Link
                  href="/contact"
                  className="block text-center py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#1E73BE] transition font-semibold"
                >
                  Get More Info
                </Link>
              </div>

              {/* Contact CTA */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our experts are here to guide you through the entire process.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+91234567890"
                    className="block px-4 py-2 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155aa8] transition text-center font-semibold text-sm"
                  >
                    Call Now
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 border-2 border-[#1E73BE] text-[#1E73BE] rounded-lg hover:bg-blue-50 transition text-center font-semibold text-sm"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsappButton />
    </>
  )
}
