"use client"

import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  MessageCircle,
  Share2,
  Quote,
  ChevronUp,
  ChevronDown,
  Pause,
  Play,
} from "lucide-react"

const reviewsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2 hari lalu",
    review:
      "Produk luar biasa! Kualitas premium dengan harga yang sangat reasonable. Packaging sangat rapi",
    likes: 24,
    verified: true,
    product: "Smartphone Pro Max",
  },
  {
    id: 2,
    name: "Ahmad Rizki",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "5 hari lalu",
    review:
      "Overall bagus, tapi ada beberapa fitur yang masih bisa diperbaiki.",
    likes: 15,
    verified: true,
    product: "Laptop Gaming X1",
  },
  {
    id: 3,
    name: "Maria Santos",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "1 minggu lalu",
    review: "Sangat puas dengan pembelian ini. Sudah pakai 2 minggu dan performanya konsisten.",
    likes: 32,
    verified: true,
    product: "Wireless Headphones",
  },
  {
    id: 4,
    name: "Budi Santoso",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 3,
    date: "2 minggu lalu",
    review: "Produk standar, tidak ada yang istimewa tapi juga tidak mengecewakan.",
    likes: 8,
    verified: false,
    product: "Smart Watch",
  },
  {
    id: 5,
    name: "Lisa Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "3 minggu lalu",
    review:
      "Exceptional quality! Melebihi ekspektasi saya. Build quality solid, fitur lengkap, dan design yang elegant.",
    likes: 45,
    verified: true,
    product: "Tablet Pro",
  },
  {
    id: 6,
    name: "David Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "1 bulan lalu",
    review: "Good value for money. Ada minor issues tapi overall satisfied dengan purchase ini. Support team helpful.",
    likes: 19,
    verified: true,
    product: "Bluetooth Speaker",
  },
  {
    id: 7,
    name: "Siti Nurhaliza",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "1 bulan lalu",
    review:
      "Pelayanan excellent, produk berkualitas tinggi. Sudah order beberapa kali dan selalu puas dengan hasilnya.",
    likes: 28,
    verified: true,
    product: "Gaming Mouse",
  },
  {
    id: 8,
    name: "Rudi Hermawan",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2 bulan lalu",
    review: "Kualitas bagus, harga kompetitif. Pengiriman agak lama tapi packaging aman. Akan order lagi next time.",
    likes: 12,
    verified: false,
    product: "Mechanical Keyboard",
  },
]

export default function Component() {
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [scrollDirection, setScrollDirection] = useState<"horizontal" | "vertical">("horizontal")
  const horizontalScrollRef = useRef<HTMLDivElement>(null)
  const verticalScrollRef = useRef<HTMLDivElement>(null)

  // Auto scroll untuk horizontal
  useEffect(() => {
    if (!isAutoScrolling || scrollDirection !== "horizontal") return

    const interval = setInterval(() => {
      if (horizontalScrollRef.current) {
        const container = horizontalScrollRef.current
        const maxScroll = container.scrollWidth - container.clientWidth

        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0
        } else {
          container.scrollLeft += 1
        }
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isAutoScrolling, scrollDirection])

  const scrollHorizontal = (direction: "left" | "right") => {
    if (horizontalScrollRef.current) {
      const scrollAmount = 320
      const newScrollLeft =
        direction === "left"
          ? horizontalScrollRef.current.scrollLeft - scrollAmount
          : horizontalScrollRef.current.scrollLeft + scrollAmount

      horizontalScrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  const scrollVertical = (direction: "up" | "down") => {
    if (verticalScrollRef.current) {
      const scrollAmount = 200
      const newScrollTop =
        direction === "up"
          ? verticalScrollRef.current.scrollTop - scrollAmount
          : verticalScrollRef.current.scrollTop + scrollAmount

      verticalScrollRef.current.scrollTo({
        top: newScrollTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 ">
      <div className="max-w-7xl mx-auto space-y-12 pt-15">
        <section className="space-y-6 py-12 sm:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 pt-10">
              Reviews
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-3" />
            <div className="flex items-center justify-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                className="flex items-center space-x-2"
              >
                {isAutoScrolling ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>{isAutoScrolling ? "Pause" : "Play"} Auto-scroll</span>
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Navigation Buttons (hidden on mobile) */}
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white"
              onClick={() => scrollHorizontal("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white"
              onClick={() => scrollHorizontal("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Scrollable Area */}
            <div
              ref={horizontalScrollRef}
              className="overflow-x-auto px-4 sm:px-12 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex space-x-4 sm:space-x-6 min-w-max pt-6 sm:pt-10">
                {reviewsData.map((review, index) => (
                  <div key={review.id} className="min-w-[260px] sm:min-w-[320px] max-w-sm flex-shrink-0">
                    <Card
                      className={`transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                        index % 2 === 0 ? "bg-blue-50 border-blue-200" : "bg-purple-50 border-purple-200"
                      }`}
                    >
                      <CardContent className="p-4 sm:p-6 space-y-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                            <AvatarImage src={review.avatar || "/placeholder.svg"} />
                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                              {review.name.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{review.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-600">{review.product}</p>
                          </div>
                        </div>

                        {/* Star Rating */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500">{review.date}</p>
                        </div>

                        {/* Review Text */}
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 h-5 w-5 text-gray-300" />
                          <p className="text-gray-700 pl-6 italic text-xs sm:text-sm leading-relaxed">
                            {review.review}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-3 text-xs sm:text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Heart className="h-4 w-4" />
                              <span>{review.likes}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>Reply</span>
                            </span>
                          </div>
                          {review.verified && (
                            <Badge className="bg-green-100 text-green-800 text-[10px] sm:text-xs">Verified</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Hide scrollbar styling */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
