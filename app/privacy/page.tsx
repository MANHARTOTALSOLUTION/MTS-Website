import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Privacy() {
  return (
    <>
      <Navbar />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#0D1B2A] mb-6">9. PRIVACY POLICY AND DISCLAIMER</h1>
          <div className="prose text-gray-700">
            <p>All customer data is handled confidentially and used only for service purposes.</p>
            <p>We do not represent any government authority.</p>
            <p>Delays or rejections due to incorrect client information or government system issues are not our responsibility.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
