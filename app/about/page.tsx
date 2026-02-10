import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsappButton from "@/components/whatsapp-button"
import { CheckCircleIcon } from "@/lib/icons"

export default function About() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-[#1E73BE] to-blue-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About Manhar Total Solution</h1>
          <p className="text-xl text-blue-100">
            Delivering excellence in documentation and insurance services since 2013
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-lg h-96 bg-gradient-to-br from-[#1E73BE] to-[#FF8C42] opacity-80" />
            <div>
              <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6">Our Vision & Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                We believe that everyone deserves access to reliable, affordable documentation and insurance services.
                Our mission is to simplify complex government processes and provide peace of mind through comprehensive
                insurance solutions.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Vision</h3>
                  <p className="text-gray-600">
                    To become the most trusted partner for government documentation and insurance services in India.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Mission</h3>
                  <p className="text-gray-600">
                    Provide fast, affordable, and transparent services while maintaining the highest standards of
                    professionalism and integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0D1B2A] mb-16">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "We maintain highest ethical standards in all operations" },
              { title: "Transparency", desc: "Clear communication and honest dealings with clients" },
              { title: "Excellence", desc: "Commitment to delivering quality in every service" },
              { title: "Innovation", desc: "Constantly improving our processes and offerings" },
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
                <CheckCircleIcon className="w-8 h-8 text-[#1E73BE] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0D1B2A] mb-16">What We Do</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border border-blue-200">
              <h3 className="text-2xl font-bold text-[#1E73BE] mb-6">Documentation & Digital Services</h3>
              <ul className="space-y-4">
                {[
                  "Aadhaar Enrollment",
                  "PAN Card Registration",
                  "GST Services",
                  "Income & Caste Certificates",
                  "Birth & Death Certificates",
                  "Driving License",
                  "Passport Services",
                  "Printing & Scanning",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <CheckCircleIcon className="w-5 h-5 text-[#1E73BE] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-12 border border-orange-200">
              <h3 className="text-2xl font-bold text-[#FF8C42] mb-6">Insurance Services</h3>
              <ul className="space-y-4">
                {[
                  "Motor Insurance",
                  "Life Insurance",
                  "Term Insurance Plans",
                  "Travel Insurance",
                  "Labour Insurance",
                  "Machinery Insurance",
                  "Group Insurance",
                  "Business Insurance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <CheckCircleIcon className="w-5 h-5 text-[#FF8C42] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0D1B2A] mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Fast Processing", desc: "Quick turnaround time for all services" },
              { title: "Trusted Staff", desc: "Certified professionals with years of experience" },
              { title: "Affordable Pricing", desc: "Competitive rates without hidden charges" },
              { title: "End-to-End Help", desc: "24/7 customer support throughout your journey" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircleIcon className="w-7 h-7 text-[#1E73BE]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </>
  )
}
