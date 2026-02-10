"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsappButton from "@/components/whatsapp-button"
import Link from "next/link"
import {
  AadhaarIcon,
  CreditCardIcon,
  FileIcon,
  DocumentIcon,
  CheckCircleIcon,
  CarIcon,
  HeartIcon,
  ArrowRightIcon,
} from "@/lib/icons"

export default function Services() {
  const [activeTab, setActiveTab] = useState("documentation")

  const documentationServices = [
    {
      id: "aadhaar",
      icon: AadhaarIcon,
      title: "Aadhaar Enrollment",
      description: "Get your unique Aadhaar identity number",
    },
    { id: "pan", icon: CreditCardIcon, title: "PAN Card", description: "Apply for Permanent Account Number" },
    { id: "gst", icon: FileIcon, title: "GST Services", description: "GST registration and compliance" },
    { id: "income-cert", icon: DocumentIcon, title: "Income Certificate", description: "Official income verification" },
    {
      id: "caste-cert",
      icon: CheckCircleIcon,
      title: "Caste Certificate",
      description: "Government-issued caste certificate",
    },
    {
      id: "birth-cert",
      icon: DocumentIcon,
      title: "Birth/Death Certificate",
      description: "Vital records documentation",
    },
    { id: "ration", icon: FileIcon, title: "Ration Card Services", description: "Ration card registration & updates" },
    { id: "dl", icon: CarIcon, title: "Driving License Help", description: "License application assistance" },
    { id: "voter", icon: CheckCircleIcon, title: "Voter ID Services", description: "Voter registration support" },
    { id: "notary", icon: DocumentIcon, title: "Notary & Attestation", description: "Notarization services" },
    { id: "affidavit", icon: FileIcon, title: "Affidavit Creation", description: "Legal affidavit drafting" },
    { id: "passport", icon: DocumentIcon, title: "Passport Services", description: "Passport application help" },
  ]

  const insuranceServices = [
    { id: "motor", icon: CarIcon, title: "Motor Insurance", description: "Comprehensive vehicle coverage" },
    { id: "term", icon: HeartIcon, title: "Term Insurance", description: "Life protection plans" },
    { id: "life", icon: HeartIcon, title: "Life Insurance", description: "Whole life and endowment plans" },
    { id: "travel", icon: DocumentIcon, title: "Travel Insurance", description: "International travel coverage" },
    { id: "labour", icon: CheckCircleIcon, title: "Labour Insurance", description: "Worker protection coverage" },
    { id: "machinery", icon: FileIcon, title: "Machinery Insurance", description: "Equipment & machinery coverage" },
    { id: "group", icon: CheckCircleIcon, title: "Group Insurance", description: "Corporate group policies" },
    { id: "business", icon: FileIcon, title: "Business Insurance", description: "Business liability coverage" },
  ]

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-[#1E73BE] to-blue-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100">Comprehensive documentation and insurance solutions tailored for you</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setActiveTab("documentation")}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === "documentation"
                  ? "bg-[#1E73BE] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Documentation Services
            </button>
            <button
              onClick={() => setActiveTab("insurance")}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === "insurance" ? "bg-[#FF8C42] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Insurance Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "documentation" && (
            <div>
              <h2 className="text-4xl font-bold text-[#0D1B2A] mb-12">Documentation & Digital Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {documentationServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100 group"
                  >
                    <service.icon className="w-10 h-10 text-[#1E73BE] mb-4 group-hover:scale-110 transition" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-[#1E73BE] font-semibold">
                      View More <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === "insurance" && (
            <div>
              <h2 className="text-4xl font-bold text-[#0D1B2A] mb-12">Insurance Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {insuranceServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100 group"
                  >
                    <service.icon className="w-10 h-10 text-[#FF8C42] mb-4 group-hover:scale-110 transition" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-[#FF8C42] font-semibold">
                      View Plans <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </>
  )
}
