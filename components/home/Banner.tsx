'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import Img from '@/assets/placeholder.svg'

export default function Banner() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className=" relative">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src={Img}
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-5">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Teman Ngoding
            </span>
          </h1>

          {/* <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer
          </p> */}

          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed italic font-semibold">
            Sesulit apa pun logika atau kode yang kamu kerjakan,
                semua akan terasa lebih mudah jika dikerjakan bersama teman.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
              onClick={() => {}}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transform hover:scale-105 transition-all duration-300"
              onClick={() => {}}
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
      </div>
    </section>

  )
}
