import Link from "next/link"
import { CheckCircleIcon, DocumentIcon, ShieldIcon } from "@/lib/icons"

export default function Dashboard() {
  const stats = [
    { label: "Total Applications", value: 12, icon: DocumentIcon, color: "from-blue-50 to-blue-100" },
    { label: "Approved", value: 8, icon: CheckCircleIcon, color: "from-green-50 to-green-100" },
    { label: "Pending", value: 4, icon: DocumentIcon, color: "from-orange-50 to-orange-100" },
    { label: "Insurance Policies", value: 3, icon: ShieldIcon, color: "from-purple-50 to-purple-100" },
  ]

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome Back, John!</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition`}
          >
            <stat.icon className="w-8 h-8 text-[#1E73BE] mb-4" />
            <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Applications */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Service</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Date</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { service: "PAN Card", date: "2024-12-01", status: "Approved" },
                { service: "GST Services", date: "2024-11-28", status: "Processing" },
                { service: "Motor Insurance", date: "2024-11-25", status: "Approved" },
              ].map((app, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{app.service}</td>
                  <td className="px-6 py-4">{app.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        app.status === "Approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link href="#" className="text-[#1E73BE] hover:underline font-semibold">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-gray-200">
          <Link href="/dashboard/applications" className="text-[#1E73BE] hover:underline font-semibold">
            View All Applications →
          </Link>
        </div>
      </div>
    </div>
  )
}
