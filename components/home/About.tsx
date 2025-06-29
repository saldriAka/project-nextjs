import Image from "next/image";
import { Badge } from "../ui/badge";
import Img from '@/assets/about.jpg'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sekilas Tentang</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="text-slate-800 dark:text-white font-semibold italic">Temenngoding</span> adalah platform yang ditujukan untuk para developer yang ingin berkembang dengan pendekatan dunia kerja nyata.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Di sini, kamu bisa belajar melalui studi kasus nyata, mengakses berbagai <b className="italic">template, component, blocks</b>, serta mendapatkan <b className="italic">eBook</b> yang membantu mempercepat dan mempermudah proses kerja development.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Platform ini juga berfungsi sebagai referensi desain dan struktur web yang sesuai standar industri—membantu kamu membangun website yang tidak hanya bagus secara visual, tapi juga fungsional dan efisien.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Real-case Practice", "Komponen Siap Pakai", "eBook Bermanfaat", "Referensi Desain Modern"].map((trait) => (
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