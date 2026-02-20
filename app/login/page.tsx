"use client"
import Image from "next/image";
import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", formData)
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-gray-50 dark:bg-[#0a1421]">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-[#1B2838] rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-center gap-2 mb-8">
              <Image
                src="/logo.png"
                alt="Manhar Total Solution Logo"
                width={80}
                height={80}
              />
              
              <div>
                
                <div className="text-[#1E73BE] font-bold text-sm">Manhar Total Solution</div>
               

              </div>
            </Link>

            <h1 className="text-3xl font-bold text-center text-[#0D1B2A] dark:text-white mb-2">Welcome Back</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Sign in to your account</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                </label>
                <Link href="#" className="text-sm text-[#1E73BE] hover:underline font-semibold">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155aa8] transition font-semibold"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-[#1B2838] text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social Login (Optional) */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="py-2 px-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition text-sm font-medium text-gray-700 dark:text-gray-300">
                Google
              </button>
              <button className="py-2 px-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition text-sm font-medium text-gray-700 dark:text-gray-300">
                WhatsApp
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link href="/signup" className="text-[#1E73BE] hover:underline font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
