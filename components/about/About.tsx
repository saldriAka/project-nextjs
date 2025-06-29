import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Target, Award, Heart } from "lucide-react"
import Img from '@/assets/about.jpg'
import Image from "next/image"
import avatar1 from '@/assets/img/avatar/avatar-1.jpg'
import avatar2 from '@/assets/img/avatar/avatar-2.jpg'
import avatar3 from '@/assets/img/avatar/avatar-3.jpg'

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transform hover:scale-105">
            Tentang Kami
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-5"></div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kami hadir untuk memberikan solusi nyata atas tantangan digital Anda. Dari ide kecil hingga sistem kompleks, kami bantu wujudkan dengan teknologi terbaik.
          </p>
          <Button
            asChild
            size="lg"
            className="transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transform hover:scale-105"
          >
            <Link href="/contact">Hubungi Kami</Link>
          </Button>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
            Nilai-Nilai Utama Kami
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Kolaborasi",
                description: "Kami percaya bahwa solusi terbaik lahir dari kerja sama yang erat dan terbuka.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Inovasi",
                description: "Kami terus menjelajahi teknologi baru untuk menciptakan solusi yang relevan dan efisien.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Keunggulan",
                description: "Kami berkomitmen memberikan hasil terbaik, tanpa kompromi terhadap kualitas.",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Passion",
                description: "Kami mencintai apa yang kami lakukan, dan itu terlihat dalam setiap solusi yang kami berikan.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center transition-all duration-300 hover:shadow-lg transform hover:scale-105 py-5"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white">
                    {value.icon}
                  </div>
                  <CardTitle className="transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
                Awal Cerita
              </h2>
              <p className="text-muted-foreground mb-4">
                <span className="font-semibold italic">Temen ngoding </span>lahir di tahun 2020 dari keresahan para developer yang ingin belajar dan berkembang dengan materi yang langsung relevan di dunia kerja.
              </p>
              <p className="text-muted-foreground mb-4">
                Berawal dari komunitas kecil, kini Temen Ngoding telah membantu banyak developer dan tim produktif dengan menyediakan <b>template siap pakai</b>, <b>eBook teknikal</b>, dan <b>materi studi kasus nyata</b>.
              </p>
              <p className="text-muted-foreground">
                Dengan semangat kolaborasi dan inovasi, kami terus berkembang sebagai ruang belajar dan referensi terpercaya bagi para developer Indonesia.
              </p>
            </div>
            <div className="relative">
              <div className="">
                <div className="w-full h-full bg-background rounded-lg flex items-center justify-center">
                  <Image
                    src={Img}
                    width={500}
                    height={500}
                    alt="Ilustrasi Tim Temenngoding"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
            Tim Kami
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Coming soon",
                role: "CEO & Founder",
                image: avatar1,
              },
              {
                name: "Coming soon",
                role: "CTO",
                image: avatar2,
              },
              {
                name: "Coming soon",
                role: "Lead Developer",
                image: avatar3,
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="text-center transition-all duration-300 hover:shadow-lg transform hover:scale-105 py-10"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br p-1">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full bg-background"
                    />
                  </div>
                  <CardTitle className="transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
                    {member.name}
                  </CardTitle>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
            Siap Berkolaborasi?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ayo diskusikan bagaimana kami bisa bantu mengubah ide Anda menjadi produk digital yang berdampak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transform hover:scale-105"
            >
              <Link href="/contact">Mulai Proyek</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transform hover:scale-105 bg-transparent"
            >
              <Link href="/resource">Lihat Portofolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
