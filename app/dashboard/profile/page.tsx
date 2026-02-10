"use client"

import type React from "react"

import { useState } from "react"

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 98765 43210",
    address: "123 Main Street, New Delhi",
  })

  const [editData, setEditData] = useState(profileData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setProfileData(editData)
    setIsEditing(false)
  }

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-2xl">
        {!isEditing ? (
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">Full Name</p>
              <p className="text-lg font-semibold text-gray-900">{profileData.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Email Address</p>
              <p className="text-lg font-semibold text-gray-900">{profileData.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Phone Number</p>
              <p className="text-lg font-semibold text-gray-900">{profileData.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Address</p>
              <p className="text-lg font-semibold text-gray-900">{profileData.address}</p>
            </div>

            <button
              onClick={() => {
                setIsEditing(true)
                setEditData(profileData)
              }}
              className="mt-8 px-6 py-2 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155aa8] transition font-semibold"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={editData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={editData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
              />
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155aa8] transition font-semibold"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
