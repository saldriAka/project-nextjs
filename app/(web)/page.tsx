'use client'

import { Faq } from '@/components/home/Faq'
import Patner from '@/components/home/Patner'

import { ShowCases } from '@/components/home/ShowCases'
import { useEffect, useRef, useState } from 'react'
import { About } from '@/components/home/About'
import Banner from '@/components/home/Banner'
import { Skills } from '@/components/home/Skills'

export default function HomePage() {
    
  return (
    <>
        <Banner />
        <About />
        <ShowCases/>
        <Faq />
        <Skills />
    </>
  )
}
