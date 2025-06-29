"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CardModal } from "./CardModal"
import proj1 from "@/assets/img/portfolio/portfolio-1.jpg"
import proj2 from "@/assets/img/portfolio/portfolio-2.jpg"
import proj3 from "@/assets/img/portfolio/portfolio-3.jpg"
import proj4 from "@/assets/img/portfolio/portfolio-4.jpg"
import proj5 from "@/assets/img/portfolio/portfolio-5.jpg"
import { PortfolioItem } from "@/types/home"


// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Platform E-Commerce Modern",
    description:
      "Sebuah platform e-commerce modern yang dibangun dengan Next.js dan integrasi Stripe. Fitur mencakup katalog produk, keranjang belanja, dan pemrosesan pembayaran yang aman.",
    image: proj1,
    technologies: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    liveUrl: "https://contoh.com",
    githubUrl: "https://github.com/contoh",
  },
  {
    id: 2,
    title: "Aplikasi Manajemen Tugas",
    description:
      "Aplikasi manajemen tugas kolaboratif dengan pembaruan waktu nyata, fungsi drag-and-drop, dan fitur kerja tim.",
    image: proj2,
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://contoh.com",
    githubUrl: "https://github.com/contoh",
  },
  {
    id: 3,
    title: "Dasbor Cuaca Interaktif",
    description:
      "Dasbor cuaca responsif yang menampilkan kondisi cuaca saat ini, prakiraan, dan peta interaktif menggunakan API cuaca.",
    image: proj3,
    technologies: ["Vue.js", "Weather API", "Chart.js", "CSS3"],
    liveUrl: "https://contoh.com",
    githubUrl: "https://github.com/contoh",
  },
  {
    id: 4,
    title: "Aplikasi Sosial Media",
    description:
      "Aplikasi sosial media full-stack dengan autentikasi pengguna, pembuatan postingan, pesan instan, dan interaksi sosial.",
    image: proj4,
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    liveUrl: "https://contoh.com",
    githubUrl: "https://github.com/contoh",
  },
  {
    id: 5,
    title: "Website Portofolio Pribadi",
    description:
      "Website portofolio responsif yang menampilkan proyek, keahlian, dan pengalaman dengan animasi halus dan desain modern.",
    image: proj5,
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://contoh.com",
    githubUrl: "https://github.com/contoh",
  },
]


export function ShowCases({ ref }: { ref?: React.Ref<HTMLDivElement> }) {
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null)
  const [modalVersion, setModalVersion] = useState<number>(1)

  const handleViewDetails = (item: (typeof portfolioItems)[0], version: number) => {
    setSelectedItem(item)
    setModalVersion(version)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden" // html element
    } else {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
  }, [selectedItem])

  return (
    <section ref={ref} className="showcases min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-y-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          {/* <p className="mt-4 text-gray-600">klik "View Details" untuk melihat detail</p> */}
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="mx-auto max-w-7xl"
        >
          <CarouselContent>
            {portfolioItems.map((item, index) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <div className="group relative">
                    <div className="group-hover:opacity-100 transition-all ease-in-out duration-500 opacity-0 absolute justify-center w-full bottom-8 flex">
                      <button
                        onClick={() => handleViewDetails(item, 3)}
                        className="hover:bg-[#080C2E] transition-all ease-in-out duration-500 px-7 py-3 rounded-full shadow-2xl bg-violet-700 text-white font-semibold"
                      >
                        View Details
                      </button>
                    </div>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={320}
                      height={220}
                      className="rounded-2xl group-hover:border-violet-700 border-4 w-[320px] h-[220px] transition-all ease-in-out duration-500"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-1/2 left-3 flex items-center justify-center">
            <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0" />
          </div>
          <div className="absolute top-1/2 right-3 flex items-center justify-center">
            <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0" />
          </div>
        </Carousel>
      </div>


      {selectedItem && modalVersion === 3 && <CardModal item={selectedItem} onClose={closeModal} />}
    </section>
  )
}
