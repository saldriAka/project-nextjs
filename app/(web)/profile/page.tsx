"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  ChevronDown,
  Menu,
  X,
  Send,
} from "lucide-react"
import Image from "next/image"

export default function ProfilePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "React", level: 90, icon: Code },
    { name: "Next.js", level: 85, icon: Code },
    { name: "TypeScript", level: 80, icon: Code },
    { name: "UI/UX Design", level: 75, icon: Palette },
    { name: "Mobile Dev", level: 70, icon: Smartphone },
    { name: "Node.js", level: 85, icon: Code },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI and seamless user experience",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Next.js", "Stripe", "Tailwind"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Firebase", "Material-UI"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with smooth animations and modern design",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      github: "#",
      live: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tmngoding
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-600 ${
                    activeSection === item ? "text-blue-600 font-semibold" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                John Doe
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Full Stack Developer & UI/UX Designer
            </p>

            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences that blend beautiful design with powerful functionality. Passionate about
              creating solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-slate-600 dark:text-slate-300 hover:text-blue-600"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                combine beautiful design with robust functionality.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                My journey started with a curiosity about how things work on the web, and it has evolved into a deep
                love for crafting user experiences that are both intuitive and powerful.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Problem Solver", "Team Player", "Continuous Learner", "Creative Thinker"].map((trait) => (
                  <Badge key={trait} variant="secondary" className="px-3 py-1 text-sm">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="About me"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card
                  key={skill.name}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-center text-sm text-slate-600 dark:text-slate-400">{skill.level}%</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href={project.live} className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing
              together!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your name" className="transition-all duration-300 focus:scale-105" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="What's this about?" className="transition-all duration-300 focus:scale-105" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </div>
            <p className="text-slate-400 mb-6">Building the future, one line of code at a time.</p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transform hover:scale-110 transition-all duration-300 text-slate-300 hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  )
}
