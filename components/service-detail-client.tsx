"use client"

import * as React from "react"
import { CheckIcon } from "@/lib/icons"

export default function ServiceDetailClient({
  faqs,
}: {
  faqs: Array<{ q: string; a: string }>
}) {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
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
  )
}
