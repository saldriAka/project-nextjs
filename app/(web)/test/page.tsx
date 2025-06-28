"use client"
import { useState } from "react"
import type React from "react"

import { Play, Copy, Download, ExternalLink, Monitor, Smartphone, Tablet, Code2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export default function Component() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [activeView, setActiveView] = useState<string>("preview")
  const [activeDevice, setActiveDevice] = useState<string>("web")

  const testimonialCode = `import { Play } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function TestimonialSection() {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-6">
      <div className="space-y-4">
        <p className="text-sm font-medium text-muted-foreground">
          <span className="font-semibold text-foreground">Philip</span>, CEO at Day Spa
        </p>
        <blockquote className="text-lg leading-relaxed">
          "I'm absolutely floored by the level of care and attention to 
          detail the team at Acme have put into this project and for one 
          can guarantee that we will be a return customer."
        </blockquote>
      </div>
      <Button variant="outline" className="gap-2">
        <Play className="w-4 h-4" />
        Watch the Video
      </Button>
    </div>
  )
}`

  

  const copyToClipboard = async (code: string, type: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(type)
      toast('Code copied to clipboard!')
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      toast('Failed to copy code to clipboard!')
    }
  }

  const downloadCode = (code: string, filename: string) => {
    const blob = new Blob([code], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast('Code downloaded successfully!')
  }

  const openInNewTab = (content: string, title: string) => {
    const newWindow = window.open("", "_blank")
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${title} - Preview</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
              body { font-family: system-ui, -apple-system, sans-serif; }
            </style>
          </head>
          <body class="p-8 bg-gray-50">
            ${content}
          </body>
        </html>
      `)
      newWindow.document.close()
    }
  }

  const testimonialHtml = `<div class="max-w-2xl mx-auto text-center space-y-6">
    <div class="space-y-4">
      <p class="text-sm font-medium text-gray-600">
        <span class="font-semibold text-gray-900">Philip</span>, CEO at Day Spa
      </p>
      <blockquote class="text-lg leading-relaxed text-gray-900">
        "I'm absolutely floored by the level of care and attention to detail the team at Acme have put into this project and for one can guarantee that we will be a return customer."
      </blockquote>
    </div>
    <button class="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 hover:bg-gray-50">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>
      Watch the Video
    </button>
  </div>`


  const renderContent = (type: string) => {
    if (activeView === "code") {
      return (
        <div className="bg-muted/50">
          <div className="flex items-center justify-between p-4 border-b bg-muted/30">
            <span className="text-sm font-medium">
              {type === "testimonial" ? "testimonial-section.tsx" : "big-image-testimonial.tsx"}
            </span>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(testimonialCode, type)}
              >
                <Copy className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  downloadCode(
                    testimonialCode,
                    "testimonial-section.tsx",
                  )
                }
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <pre className="text-sm overflow-x-auto p-6">
            <code className="language-tsx">{testimonialCode}</code>
          </pre>
        </div>
      )
    }

    // Preview content based on device
    const PreviewComponent = TestimonialPreview

    switch (activeDevice) {
      case "web":
        return (
          <div className="p-8 min-h-[400px]">
            <PreviewComponent />
          </div>
        )
      case "tablet":
        return (
          <div className="p-4 flex justify-center min-h-[400px] items-center">
            <div className="w-[768px] border rounded-xl p-6 bg-white shadow-lg">
              <div className="scale-90 origin-top">
                <PreviewComponent />
              </div>
            </div>
          </div>
        )
      case "mobile":
        return (
          <div className="p-4 flex justify-center min-h-[400px] items-center">
            <div className="w-[375px] border rounded-[2rem] p-6 bg-white shadow-xl">
              <div className="scale-75 origin-top">
                <PreviewComponent />
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="p-8 min-h-[400px]">
            <PreviewComponent />
          </div>
        )
    }
  }

  // Helper component for a pill-style toggle
  function ToggleButton({
    active,
    onClick,
    children,
  }: {
    active: boolean
    onClick: () => void
    children: React.ReactNode
  }) {
    return (
      <button
        onClick={onClick}
        className={cn(
          "inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm",
          active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70",
        )}
      >
        {children}
      </button>
    )
  }

  return (
    <div className="max-w-7xl mx-auto py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover fully responsive Testimonials for your Shadcn UI projects,
          <br />
          each meticulously designed for seamless integration and customization.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="space-y-12">
        <div className="border rounded-lg bg-background">
          {/* header bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b">
            {/* LEFT — view mode */}
            <div className="flex gap-2">
              <ToggleButton active={activeView === "preview"} onClick={() => setActiveView("preview")}>
                <Eye className="h-4 w-4" />
                Preview
              </ToggleButton>
              <ToggleButton active={activeView === "code"} onClick={() => setActiveView("code")}>
                <Code2 className="h-4 w-4" />
                Code
              </ToggleButton>
            </div>

            {/* CENTER — device options (only if preview) */}
            {activeView === "preview" && (
              <div className="flex gap-2">
                <ToggleButton active={activeDevice === "web"} onClick={() => setActiveDevice("web")}>
                  <Monitor className="h-4 w-4" /> Web
                </ToggleButton>
                <ToggleButton active={activeDevice === "tablet"} onClick={() => setActiveDevice("tablet")}>
                  <Tablet className="h-4 w-4" /> Tablet
                </ToggleButton>
                <ToggleButton active={activeDevice === "mobile"} onClick={() => setActiveDevice("mobile")}>
                  <Smartphone className="h-4 w-4" /> Mobile
                </ToggleButton>
                <ToggleButton
                  active={false}
                  onClick={() =>
                    openInNewTab(
                      testimonialHtml,
                      "Testimonial Section",
                    )
                  }
                >
                  <ExternalLink className="h-4 w-4" /> New Tab
                </ToggleButton>
              </div>
            )}

            {/* RIGHT — copy / download */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  copyToClipboard(testimonialCode, "testimonial")
                }
              >
                <Copy className="h-4 w-4" />
                {copiedCode === "testimonial" ? "Copied!" : "Copy"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  downloadCode(
                    testimonialCode,
                    "testimonial-section.tsx",
                  )
                }
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="mt-0">{renderContent("testimonial")}</div>
        </div>
      </div>
    </div>
  )
}

function TestimonialPreview() {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-6">
      <div className="space-y-4">
        <p className="text-sm font-medium text-muted-foreground">
          <span className="font-semibold text-foreground">Philip</span>, CEO at Day Spa
        </p>
        <blockquote className="text-lg leading-relaxed">
          "I'm absolutely floored by the level of care and attention to detail the team at Acme have put into this
          project and for one can guarantee that we will be a return customer."
        </blockquote>
      </div>
      <Button variant="outline" className="gap-2 bg-background text-foreground border-border hover:bg-muted">
        <Play className="w-4 h-4" />
        Watch the Video
      </Button>
    </div>
  )
}

