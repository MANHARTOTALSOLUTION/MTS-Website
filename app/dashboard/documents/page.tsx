"use client"

import { FileIcon } from "@/lib/icons"

export default function Documents() {
  const documents = [
    { id: 1, name: "PAN Card", date: "2024-12-01", size: "2.4 MB", type: "PDF" },
    { id: 2, name: "Aadhaar Enrollment", date: "2024-11-20", size: "1.8 MB", type: "PDF" },
    { id: 3, name: "GST Certificate", date: "2024-11-28", size: "3.2 MB", type: "PDF" },
    { id: 4, name: "Motor Insurance Policy", date: "2024-11-25", size: "4.1 MB", type: "PDF" },
  ]

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Documents</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                <FileIcon className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                <p className="text-sm text-gray-600">
                  {doc.date} • {doc.size}
                </p>
              </div>
            </div>
            <button className="text-[#1E73BE] hover:underline font-semibold text-sm">Download</button>
          </div>
        ))}
      </div>

      {documents.length === 0 && (
        <div className="text-center py-12">
          <FileIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">No documents yet</p>
        </div>
      )}
    </div>
  )
}
