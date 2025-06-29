import { StaticImageData } from "next/image"

export type PortfolioItem = {
  id: number
  title: string
  description: string
  image: StaticImageData // ubah dari string ke StaticImageData
  technologies: string[]
  liveUrl: string
  githubUrl: string
}