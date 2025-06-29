"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type AccordionItem = {
  id: string
  title: string
  content: string
}

const firstColumnData: AccordionItem[] = [
  {
    id: "unclear-architecture",
    title: "Aplikasi lambat dan sulit dikembangkan seiring waktu?",
    content:
      "Banyak proyek gagal karena arsitektur awal tidak dirancang dengan baik. Kami membantu merancang fondasi sistem yang scalable dan maintainable sejak awal.",
  },
  {
    id: "slow-delivery",
    title: "Proyek terus molor dan fitur tak kunjung selesai?",
    content:
      "Kami bantu menerapkan manajemen proyek yang efisien dengan praktik agile dan SDLC yang tepat, agar tim bisa fokus dan produktif.",
  },
  {
    id: "inconsistent-ui",
    title: "UI aplikasi tidak konsisten dan membingungkan pengguna?",
    content:
      "Kami bantu desain dan implementasi design system yang konsisten di seluruh platform, baik web maupun mobile, agar pengalaman pengguna tetap mulus.",
  },

  {
    id: "no-design-system",
    title: "Tidak punya design system yang jelas?",
    content:
      "Kami bantu buatkan dan terapkan design system yang scalable agar tim dev dan design bisa bekerja lebih efisien tanpa tumpang tindih.",
  },
]


const secondColumnData: AccordionItem[] = [
  {
    id: "no-mobile-strategy",
    title: "Punya website tapi belum punya strategi mobile?",
    content:
      "Kami bantu kembangkan aplikasi mobile yang selaras dengan bisnis Anda—baik native, hybrid, atau PWA—sesuai kebutuhan dan budget.",
  },
  {
    id: "scaling-problem",
    title: "Aplikasi mulai banyak pengguna tapi performa menurun?",
    content:
      "Kami bantu optimalkan backend, infrastruktur, dan database agar aplikasi tetap cepat, aman, dan siap menampung pertumbuhan user.",
  },
  {
    id: "deployment-chaos",
    title: "Deployment sering error dan tidak terkontrol?",
    content:
      "Kami bantu setup CI/CD pipeline yang rapi agar proses build, test, dan deploy berjalan otomatis dan minim kesalahan.",
  },

  {
    id: "automated-deploy",
    title: "Ingin proses deploy otomatis dan minim risiko?",
    content:
      "Dengan integrasi CI/CD yang tepat, kami pastikan setiap perubahan bisa langsung diuji dan dideploy tanpa repot manual.",
  },
]


export function Faq() {
  const [openAccordionFirst, setOpenAccordionFirst] = useState<string | null>(null)
  const [openAccordionSecond, setOpenAccordionSecond] = useState<string | null>(null)

  const handleToggle = (id: string, column: "first" | "second") => {
    if (column === "first") {
      setOpenAccordionFirst((prev) => (prev === id ? null : id))
    } else {
      setOpenAccordionSecond((prev) => (prev === id ? null : id))
    }
  }

  const renderAccordion = (data: AccordionItem[], openId: string | null, column: "first" | "second") => {
    return data.map((item, index) => ( 
      <div key={`${column}-${item.id}-${index}`} className="border rounded-lg overflow-hidden">
        <button
          onClick={() => handleToggle(item.id, column)}
          className="w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between"
          aria-expanded={openId === item.id}
          aria-controls={`content-${item.id}`}
        >
          <span className="font-semibold">{item.title}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              openId === item.id && "rotate-180"
            )}
          />
        </button>

        <div
          aria-controls={`content-${column}-${item.id}`}
          id={`content-${column}-${item.id}`}
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            openId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 pb-4 pt-2 border-t">
            <p className="text-muted-foreground leading-relaxed">{item.content}</p>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <section id="faq" className="py-10 bg-white dark:bg-slate-800">
      <div className="max-w-5xl mx-auto py-15">
        <div className="flex flex-col justify-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Faq</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Column */}
          <div className="space-y-4">
            {renderAccordion(firstColumnData, openAccordionFirst, "first")}
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            {renderAccordion(secondColumnData, openAccordionSecond, "second")}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
