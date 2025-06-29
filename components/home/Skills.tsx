"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Code, Globe, Server, Database, Palette, Smartphone, Star, Workflow, Webhook } from "lucide-react"

const skills = [
  { name: "ReactJS", level: 90, category: "Frontend", icon: Code },
  { name: "TailwindCSS", level: 90, category: "Frontend", icon: Code },
  { name: "HTML/CSS", level: 95, category: "Frontend", icon: Code },
  { name: "TypeScript", level: 85, category: "Frontend", icon: Code },
  { name: "Next.js", level: 88, category: "Frontend", icon: Globe },
  { name: "Node.js", level: 82, category: "Backend", icon: Server },
  { name: "NestJS", level: 82, category: "Backend", icon: Server },
  { name: "Golang", level: 82, category: "Backend", icon: Server },
  { name: "Laravel", level: 82, category: "Backend", icon: Server },
  { name: "PHP", level: 85, category: "Backend", icon: Server },
  { name: "MySQL", level: 75, category: "Database", icon: Database },
  { name: "PostgreSQL", level: 75, category: "Database", icon: Database },
  { name: "MongoDB", level: 70, category: "Database", icon: Database },
  { name: "Redis", level: 70, category: "Database", icon: Database },
  { name: "Elasticsearch", level: 70, category: "Database", icon: Database },
  { name: "AWS", level: 72, category: "Devops", icon: Workflow  },
  { name: "VPS", level: 80, category: "Devops", icon: Workflow  },
  { name: "Docker", level: 85, category: "Devops", icon: Workflow  },
  { name: "CI/CD", level: 67, category: "Devops", icon: Workflow  },
  { name: "Linux Environment", level: 90, category: "Devops", icon: Workflow  },
  { name: "Git/Gitflow", level: 90, category: "Devops", icon: Workflow  },
  { name: "Kubernetes", level: 68, category: "Devops", icon: Workflow  },
  { name: "Swagger", level: 68, category: "API", icon: Webhook  },
  { name: "RESTFul API", level: 68, category: "API", icon: Webhook  },
  { name: "Postman", level: 68, category: "API", icon: Webhook  },
]

const categories = ["Frontend", "Backend", "Database", "API", "Devops"]

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend")

  const filteredSkills =
    selectedCategory === "All" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  // Convert percentage to stars (0-5 stars)
  const getStarRating = (level: number) => {
    return (level / 100) * 5
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-3 h-3 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          </div>
        </div>,
      )
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-3 h-3 text-gray-300" />)
    }

    return stars
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full text-xs px-4 py-2 h-8"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon
            const starRating = getStarRating(skill.level)

            return (
              <div
                key={skill.name}
                className="group  relative p-4 w-40 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Badge */}
                <div className="absolute -top-2 -right-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-sm">
                    {skill.category.slice(0, 3)}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-sm font-semibold text-center mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </h3>

                {/* Stars */}
                <div className="flex justify-center items-center gap-0.5 mb-2">{renderStars(starRating)}</div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/50">
            <span className="text-xs text-gray-600">Rating:</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <Star key={num} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-xs text-gray-600">= Expert Level</span>
          </div>
        </div>
      </div>
    </section>
  )
}
