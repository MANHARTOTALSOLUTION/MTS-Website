import Link from "next/link"
import {
  DocumentIcon,
  ShieldIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  AadhaarIcon,
  CreditCardIcon,
  FileIcon,
  CarIcon,
  HeartIcon,
} from "@/lib/icons"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-20 bg-white dark:bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0D1B2A] dark:text-white leading-tight">
                Fast work and reliable insurance, all in one place
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Manhar Total Solution provides comprehensive government documentation services and insurance solutions.
                We make complex processes simple, fast, and affordable for everyone.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link 
                  href="/services" 
                  className="px-8 py-3 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155aa8] transition font-semibold inline-block"
                >
                  Explore Services
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-3 border-2 border-[#1E73BE] text-[#1E73BE] dark:text-white dark:border-white rounded-lg hover:bg-blue-50 dark:hover:bg-[#1B2838] transition font-semibold inline-block"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E73BE] to-[#FF8C42] opacity-10 rounded-3xl blur-3xl" />
              <div className="relative bg-white dark:bg-[#1B2838] rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#1E73BE] to-blue-600 rounded-2xl p-8 flex items-center justify-center text-white text-center">
                    <div>
                      <DocumentIcon className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Documentation</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#FF8C42] to-orange-600 rounded-2xl p-8 flex items-center justify-center text-white text-center">
                    <div>
                      <ShieldIcon className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Insurance</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-[#2B3A4A] rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <CheckCircleIcon className="w-12 h-12 text-[#1E73BE] mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800 dark:text-white">Verified</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-[#2B3A4A] rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <CheckCircleIcon className="w-12 h-12 text-[#FF8C42] mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800 dark:text-white">Trusted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a1421]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0D1B2A] dark:text-white mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-[#1B2838] rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                <CheckCircleIcon className="w-8 h-8 text-[#1E73BE]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Licensed Operators</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team consists of certified professionals with years of experience in government documentation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-[#1B2838] rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-orange-50 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-6">
                <ShieldIcon className="w-8 h-8 text-[#FF8C42]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Claim Assistance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We provide end-to-end support for your insurance claims with dedicated assistance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-[#1B2838] rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                <CheckCircleIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Affordable Pricing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We offer competitive rates without compromising on quality and service standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white dark:bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Documentation Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0D1B2A] dark:text-white mb-12">Documentation & Digital Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: AadhaarIcon, title: "Aadhaar Enrollment" },
                { icon: CreditCardIcon, title: "PAN Card" },
                { icon: FileIcon, title: "GST Services" },
                { icon: DocumentIcon, title: "Printing & Scanning" },
                { icon: CheckCircleIcon, title: "Notary & Attestation" },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#1B2838] rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-700"
                >
                  <service.icon className="w-10 h-10 text-[#1E73BE] mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Professional government services</p>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance Services */}
          <div>
            <h2 className="text-3xl font-bold text-[#0D1B2A] dark:text-white mb-12">Insurance Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {[
                { icon: CarIcon, title: "Motor Insurance" },
                { icon: HeartIcon, title: "Life Insurance" },
                { icon: ShieldIcon, title: "Term Insurance" },
                { icon: DocumentIcon, title: "Travel Insurance" },
                { icon: DocumentIcon, title: "Labour Insurance" },
                { icon: DocumentIcon, title: "Machinery Insurance" },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#1B2838] rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-700"
                >
                  <service.icon className="w-10 h-10 text-[#FF8C42] mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a1421]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0D1B2A] dark:text-white mb-6">About Manhar Total Solution</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                With over a decade of experience, we've helped thousands of customers navigate complex government
                documentation and insurance processes.
              </p>
              <ul className="space-y-4 mb-8">
                {["Fast Processing", "Trusted Staff", "Affordable Pricing", "End-to-End Help"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-[#1E73BE] flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/about" 
                className="px-8 py-3 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155aa8] transition font-semibold inline-flex items-center gap-2"
              >
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg h-96 bg-gradient-to-br from-[#1E73BE] to-[#FF8C42] opacity-80" />
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1E73BE] to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Immediate Assistance?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our dedicated support team is available 24/7 to help you with any questions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="tel:+919924197765" 
              className="px-8 py-3 bg-white text-[#1E73BE] rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              Call Now
            </a>
            <a 
              href="https://wa.me/919924197765" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#25D366] text-white rounded-lg hover:bg-green-600 transition font-semibold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
