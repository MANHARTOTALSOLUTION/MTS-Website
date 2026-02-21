"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, Plus, Upload, Sparkles } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import LoginModal from "./login-modal"

interface GalleryImage {
  id: number
  image_url: string
  uploaded_by_name: string
  uploaded_at: string
}

export default function GallerySection() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadMessage, setUploadMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { user } = useAuth()

  useEffect(() => {
    fetchImages()
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
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

  const handleUploadClick = () => {
    if (!user) {
      setShowLoginModal(true)
      setUploadMessage("Login required to upload images")
      return
    }
    setShowUploadModal(true)
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append("image", file)

    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      
      if (data.image) {
        setImages([data.image, ...images])
        setShowUploadModal(false)
      } else {
        setUploadMessage(data.error || "Upload failed")
      }
    } catch (error) {
      console.error("Upload failed:", error)
      setUploadMessage("Upload failed")
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-[#0D1B2A] to-slate-900 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-orange-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-gray-300 font-medium">Our Gallery</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Captured Moments
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our journey through visuals - a collection of memories, achievements, and milestones
          </p>
        </div>

        {/* Upload Button */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button
            onClick={handleUploadClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#1E73BE] to-[#FF8C42] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C42] to-[#1E73BE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-3 text-white font-semibold">
              <div className="relative">
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
              </div>
              <span>Add Your Image</span>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-2 ring-white/30 group-hover:ring-white/60 transition-all duration-300" />
          </button>
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#1E73BE] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
              <Upload className="w-10 h-10 text-gray-500" />
            </div>
            <p className="text-gray-400 text-lg">No images yet. Be the first to upload!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 delay-${Math.min(index * 100, 500)} transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedImage(image.image_url)}
              >
                {/* 3D Tilt Effect Container */}
                <div
                  className="w-full h-full transition-all duration-300"
                  style={{
                    transform: hoveredIndex === index ? "rotateX(5deg) rotateY(-5deg) scale(1.05)" : "rotateX(0) rotateY(0) scale(1)",
                    boxShadow: hoveredIndex === index ? "0 25px 50px -12px rgba(30, 115, 190, 0.4), 0 0 30px rgba(255, 140, 66, 0.2)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10" />
                  
                  <Image
                    src={image.image_url}
                    alt="Gallery"
                    fill
                    className="object-cover transition-all duration-500 hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-20" />
                  
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-30 translate-y-full hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium truncate">
                      {image.uploaded_by_name || "Anonymous"}
                    </p>
                    <p className="text-white/70 text-xs">
                      {new Date(image.uploaded_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Glass Border */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 pointer-events-none" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full aspect-auto max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Preview"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowUploadModal(false)} />
          <div className="relative w-full max-w-md bg-white dark:bg-[#1B2838] rounded-3xl shadow-2xl p-8 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowUploadModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E73BE] to-[#FF8C42] rounded-2xl flex items-center justify-center">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] dark:text-white">Upload Image</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Share your moment with us
              </p>
            </div>

            {uploadMessage && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
                {uploadMessage}
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleUpload}
              className="w-full p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#1E73BE] file:text-white hover:file:bg-[#155aa8] cursor-pointer"
            />

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
              Max 5MB • JPG, PNG, WebP
            </p>

            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="w-full mt-6 py-3 bg-gradient-to-r from-[#1E73BE] to-[#FF8C42] text-white rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {uploading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  Choose Image
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => {
          setShowLoginModal(false)
          setUploadMessage("")
        }}
        message={uploadMessage}
      />
    </section>
  )
}
