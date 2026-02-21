"use client"

import { useState, useEffect, useRef } from "react"
import { Star, X, MessageSquare, Sparkles, User } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import LoginModal from "./login-modal"

interface Review {
  id: number
  name: string
  rating: number
  message: string
  created_at: string
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [loginMessage, setLoginMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    rating: 5,
    message: "",
  })
  const sectionRef = useRef<HTMLDivElement>(null)
  const { user } = useAuth()

  useEffect(() => {
    fetchReviews()
    
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

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews")
      const data = await res.json()
      setReviews(data.reviews || [])
    } catch (error) {
      console.error("Failed to fetch reviews:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleReviewClick = () => {
    if (!user) {
      setShowLoginModal(true)
      setLoginMessage("Login required to leave a review")
      return
    }
    setShowReviewModal(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError("")

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user?.name,
          rating: formData.rating,
          message: formData.message,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit review")
      }

      setReviews([data.review, ...reviews])
      setShowReviewModal(false)
      setFormData({ rating: 5, message: "" })
    } catch (err: any) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  const renderStars = (rating: number, interactive = false, onChange?: (r: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && onChange?.(star)}
            className={`transition-all duration-200 ${
              interactive ? "cursor-pointer hover:scale-110" : "cursor-default"
            }`}
          >
            <Star
              className={`w-5 h-5 ${
                star <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
              } ${interactive ? "hover:fill-yellow-300" : ""}`}
            />
          </button>
        ))}
      </div>
    )
  }

  const getAverageRating = () => {
    if (reviews.length === 0) return 0
    return (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
  }

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0D1B2A] dark:via-[#1B2838] dark:to-[#0D1B2A] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1B2838] rounded-full mb-4 border border-gray-200 dark:border-gray-700 shadow-sm">
            <MessageSquare className="w-4 h-4 text-[#1E73BE]" />
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Customer Reviews</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0D1B2A] dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real feedback from our valued customers
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1E73BE]">{getAverageRating()}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{renderStars(Math.round(Number(getAverageRating())))}</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0D1B2A] dark:text-white">{reviews.length}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Reviews</div>
            </div>
          </div>
        </div>

        {/* Leave Review Button */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button
            onClick={handleReviewClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#1E73BE] to-[#FF8C42] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C42] to-[#1E73BE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-3 text-white font-semibold">
              <Sparkles className="w-5 h-5" />
              <span>Leave a Review</span>
            </div>
          </button>
        </div>

        {/* Reviews Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#1E73BE] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-[#1B2838] rounded-full flex items-center justify-center">
              <MessageSquare className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">No reviews yet. Be the first to share your experience!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`group relative bg-white dark:bg-[#1B2838] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 delay-${Math.min(index * 100, 500)} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transformStyle: "preserve-3d",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1E73BE]/20 to-[#FF8C42]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-[1px] rounded-2xl bg-white dark:bg-[#1B2838]" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1E73BE] to-[#FF8C42] rounded-full flex items-center justify-center">
                        {review.name ? (
                          <span className="text-white font-bold text-lg">{review.name.charAt(0).toUpperCase()}</span>
                        ) : (
                          <User className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0D1B2A] dark:text-white">
                          {review.name || "Anonymous"}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(review.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    {renderStars(review.rating)}
                  </div>

                  {/* Message */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {review.message}
                  </p>
                </div>

                {/* 3D Hover Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
                  style={{
                    transform: hoveredIndex === index ? "translateZ(20px)" : "translateZ(0)",
                    boxShadow: hoveredIndex === index ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "none",
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowReviewModal(false)} />
          <div className="relative w-full max-w-md bg-white dark:bg-[#1B2838] rounded-3xl shadow-2xl p-8 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E73BE] to-[#FF8C42] rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] dark:text-white">Share Your Experience</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Your feedback helps us improve
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Rating
                </label>
                <div className="flex justify-center">
                  {renderStars(formData.rating, true, (r) => setFormData({ ...formData, rating: r }))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Review
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#0a1421] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E73BE] resize-none"
                  rows={4}
                  placeholder="Tell us about your experience..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-gradient-to-r from-[#1E73BE] to-[#FF8C42] text-white rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => {
          setShowLoginModal(false)
          setLoginMessage("")
        }}
        message={loginMessage}
      />
    </section>
  )
}
