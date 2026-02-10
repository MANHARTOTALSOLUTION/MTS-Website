import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-[#1E73BE] mb-4">404</div>
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#1E73BE] to-[#FF8C42] opacity-20 rounded-full" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155aa8] transition font-semibold"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-[#1E73BE] text-[#1E73BE] rounded-lg hover:bg-blue-50 transition font-semibold"
          >
            Contact Support
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">Helpful links:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/services" className="text-[#1E73BE] hover:underline text-sm">
              Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/about" className="text-[#1E73BE] hover:underline text-sm">
              About
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/apply" className="text-[#1E73BE] hover:underline text-sm">
              Apply Now
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-[#1E73BE] hover:underline text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
