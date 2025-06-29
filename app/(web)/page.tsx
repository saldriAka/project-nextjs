'use client'

import { Faq } from '@/components/home/Faq'

import { ShowCases } from '@/components/home/ShowCases'
import { About } from '@/components/home/About'
import Banner from '@/components/home/Banner'
import { Skills } from '@/components/home/Skills'
import Review from '@/components/home/Review'

export default function HomePage() {
    
  return (
    <>
    <div className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Banner />
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-800">
        <About />
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <ShowCases/>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-800">
        <Faq />
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Skills />
      </div>
      <div className="sticky top-0 flex flex-col items-center justify-center bg-white dark:bg-slate-800">
        <Review />
      </div>
    </div> 
    </>
  )
}
