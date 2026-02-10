"use client"

export default function Applications() {
  const applications = [
    { id: 1, service: "PAN Card", date: "2024-12-01", status: "Approved", ref: "MTS-2024-12-001" },
    { id: 2, service: "GST Services", date: "2024-11-28", status: "Processing", ref: "MTS-2024-11-002" },
    { id: 3, service: "Motor Insurance", date: "2024-11-25", status: "Approved", ref: "MTS-2024-11-003" },
    { id: 4, service: "Aadhaar Enrollment", date: "2024-11-20", status: "Completed", ref: "MTS-2024-11-004" },
    { id: 5, service: "Income Certificate", date: "2024-11-15", status: "Pending", ref: "MTS-2024-11-005" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800"
      case "Processing":
        return "bg-yellow-100 text-yellow-800"
      case "Completed":
        return "bg-blue-100 text-blue-800"
      case "Pending":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Applications</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Reference</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Service</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Date</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-mono text-sm text-gray-600">{app.ref}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{app.service}</td>
                  <td className="px-6 py-4 text-gray-600">{app.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[#1E73BE] hover:underline font-semibold text-sm">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
