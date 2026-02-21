"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { useAuth } from "@/context/AuthContext"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  message?: string
}

export default function LoginModal({ isOpen, onClose, message }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { refreshAuth } = useAuth()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: isLogin ? "login" : "register",
          ...formData,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      await refreshAuth()
      onClose()
      setFormData({ name: "", email: "", password: "" })
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white dark:bg-[#1B2838] rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <Image src="/logo.png" alt="Logo" width={50} height={50} className="mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-[#0D1B2A] dark:text-white">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          {message && (
            <p className="text-orange-500 text-sm mt-2 font-medium">{message}</p>
          )}
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            {isLogin ? "Sign in to continue" : "Join Manhar Total Solution"}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
                placeholder="Enter your name"
                required={!isLogin}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#1E73BE] to-[#FF8C42] text-white rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Please wait..." : isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="mt-5 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => {
                setIsLogin(!isLogin)
                setError("")
              }}
              className="text-[#1E73BE] font-semibold hover:underline"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
