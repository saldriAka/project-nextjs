"use client"
import Image from "next/image"
import { X, ExternalLink, Github, Star, Eye, GitFork } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PortfolioItem {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

interface FullscreenModalProps {
  item: PortfolioItem
  onClose: () => void
}

export function FullscreenModal({ item, onClose }: FullscreenModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-white animate-in fade-in-0 duration-300">
      {/* Header */}
      <div className="relative h-20 bg-gradient-to-r from-violet-600 to-purple-700">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-full">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>

            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span className="text-sm">4.8</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span className="text-sm">1.2k</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="w-4 h-4" />
                <span className="text-sm">45</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100vh-5rem)] overflow-y-auto mt-2">
        <div className="max-w-6xl mx-auto p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Image and Gallery */}
            <div className="space-y-4">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="relative h-20 rounded-lg overflow-hidden border-2 border-violet-200">
                    <Image
                      src={`/placeholder.svg?height=80&width=120&text=View${index + 1}`}
                      alt={`View ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">Project Description</h4>
                <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold mb-3">Technologies & Tools</h4>
                <div className="grid grid-cols-2 gap-3">
                  {item.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-200 text-center font-medium"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-4">Project Highlights</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-600">98%</div>
                    <div className="text-sm text-gray-600">Performance Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-600">15+</div>
                    <div className="text-sm text-gray-600">Features</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-600">3 Weeks</div>
                    <div className="text-sm text-gray-600">Development Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-600">Mobile First</div>
                    <div className="text-sm text-gray-600">Design Approach</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button asChild size="lg" className="flex-1">
                  <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Launch Project
                  </a>
                </Button>
                <Button variant="outline" asChild size="lg" className="flex-1 bg-transparent">
                  <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
