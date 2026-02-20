"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

interface GalleryImage {
  id: number
  image_url: string
  uploaded_by_name: string
  uploaded_at: string
}

interface User {
  id: number
  name: string
  email: string
  role: string
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetchImages()
    checkAuth()
  }, [])

  const fetchImages = async () => {
    try {
      const res = await fetch("/api/gallery")
      const data = await res.json()
      setImages(data.images || [])
    } catch (error) {
      console.error("Failed to fetch images:", error)
    } finally {
      setLoading(false)
    }
  }

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/auth")
      const data = await res.json()
      setUser(data.user)
    } catch {
      setUser(null)
    }
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !user) return

    setUploading(true)
    const formData = new FormData()
    formData.append("image", file)

    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        body: formData },
      )
      const data = await res.json()
      if (data.image) {
        setImages([data.image, ...images])
      }
    } catch (error) {
      console.error("Upload failed:", error)
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-[#0D1B2A] dark:via-[#1B2838] dark:to-[#0D1B2A] mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#0D1B2A] dark:text-white mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore our work and achievements
            </p>
          </div>

          {user && (
            <div className="flex justify-center mb-8">
              <label className="cursor-pointer px-6 py-3 bg-gradient-to-r from-[#1E73BE] to-[#FF8C42] text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2">
                {uploading ? "Uploading..." : "Upload Image"}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleUpload}
                  className="hidden"
                  disabled={uploading}
                />
              </label>
            </div>
          )}

          {!user && (
            <div className="text-center mb-8">
              <Link
                href="/login"
                className="inline-block px-6 py-3 bg-[#1E73BE] text-white rounded-xl font-semibold hover:bg-[#155aa8] transition"
              >
                Login to Upload
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-[#0a1421]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="w-12 h-12 border-4 border-[#1E73BE] border-t-transparent rounded-full animate-spin mx-auto" />
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No images yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedImage(image.image_url)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <Image
                    src={image.image_url}
                    alt="Gallery"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">
                      Uploaded by {image.uploaded_by_name || "Unknown"}
                    </p>
                  </div>
                  <div className="absolute inset-0 ring-2 ring-white/0 group-hover:ring-white/30 rounded-2xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#1E73BE]/20" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}
