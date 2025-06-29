"use client"
import Image from "next/image"
import { X, ExternalLink, Github, Clock, Code, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PortfolioItem } from "@/types/home"


interface CardModalProps {
  item: PortfolioItem
  onClose: () => void
}

export function CardModal({ item, onClose }: CardModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 h-full">
          {/* Left Side - Image */}
          <div className="relative h-64 md:h-auto">
            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
            <div className="absolute bottom-4 left-4 md:hidden">
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="p-8 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              {/* Title (visible on desktop) */}
              <div className="hidden md:block">
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full" />
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{item.description}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-violet-50 rounded-xl">
                  <Clock className="w-6 h-6 mx-auto mb-1 text-violet-600" />
                  <div className="text-sm font-medium">3 Weeks</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-xl">
                  <Code className="w-6 h-6 mx-auto mb-1 text-blue-600" />
                  <div className="text-sm font-medium">Full Stack</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-xl">
                  <Zap className="w-6 h-6 mx-auto mb-1 text-green-600" />
                  <div className="text-sm font-medium">Optimized</div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold mb-3">Built With</h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-medium border border-violet-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6 pt-6 border-t">
              <Button asChild className="flex-1">
                <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild className="flex-1 bg-transparent">
                <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
