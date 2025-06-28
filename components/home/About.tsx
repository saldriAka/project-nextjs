import Image from "next/image";
import { Badge } from "../ui/badge";
import Img from '@/assets/placeholder.svg'

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Saya adalah seorang pengembang <b className="italic">FullStack</b> yang penuh semangat, dengan pengalaman lebih dari 5 tahun menciptakan solusi digital yang menggabungkan desain indah dengan fungsionalitas yang kuat.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Perjalanan saya dimulai dari rasa ingin tahu tentang bagaimana web bekerja, yang kemudian tumbuh menjadi kecintaan dalam merancang pengalaman pengguna yang intuitif dan berdampak.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Di luar dunia pemrograman, saya senang mengeksplorasi teknologi baru, berkontribusi pada proyek open-source, dan berbagi pengetahuan dengan komunitas developer.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Pemecahan Masalah", "Kolaboratif", "Disiplin", "Kreatif"].map((trait) => (
                <Badge key={trait} variant="secondary" className="px-3 py-1 text-sm">
                  {trait}
                </Badge>
              ))}
            </div>
          </div>


          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src={Img}
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
  )
} 