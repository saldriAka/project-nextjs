'use client'

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";


export function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </div>
            <p className="text-slate-400 mb-6">Building the future, one line of code at a time.</p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "https://github.com/saldriAka", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/saldri-andika-putra-45a75a109/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:halo@temenngoding.com?subject=Halo%20Temen%20Ngoding&body=Saya%20ingin%20bertanya%20tentang%20...", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  target="_blank"
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transform hover:scale-110 transition-all duration-300 text-slate-300 hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
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
    </>
  )
}