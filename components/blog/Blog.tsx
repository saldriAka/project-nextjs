import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react"

// Data blog unggulan
const featuredPost = {
  id: 1,
  title: "Masa Depan Pengembangan Web: Tren yang Perlu Diperhatikan di 2024",
  excerpt:
    "Temukan tren dan teknologi terbaru yang membentuk masa depan pengembangan web, mulai dari integrasi AI hingga framework canggih.",
  image: "/placeholder.svg?height=400&width=800",
  author: "John Doe",
  date: "15 Jan 2024",
  readTime: "8 menit baca",
  category: "Teknologi",
  featured: true,
}

// Data artikel lainnya
const blogPosts = [
  {
    id: 2,
    title: "Membangun Aplikasi React yang Skalabel",
    excerpt: "Pelajari praktik terbaik untuk membangun aplikasi React yang mampu berkembang sesuai kebutuhan bisnis.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Jane Smith",
    date: "12 Jan 2024",
    readTime: "6 menit baca",
    category: "Pengembangan",
  },
  {
    id: 3,
    title: "Panduan Lengkap Sistem Desain",
    excerpt: "Semua yang perlu Anda ketahui tentang membangun dan memelihara sistem desain yang efektif.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Mike Johnson",
    date: "10 Jan 2024",
    readTime: "10 menit baca",
    category: "Desain",
  },
  {
    id: 4,
    title: "Praktik Terbaik Keamanan API",
    excerpt: "Lindungi API Anda dengan langkah keamanan dan strategi implementasi penting ini.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Sarah Wilson",
    date: "8 Jan 2024",
    readTime: "7 menit baca",
    category: "Keamanan",
  },
  {
    id: 5,
    title: "Prinsip Desain Mobile-First",
    excerpt: "Kuasai seni mendesain terlebih dahulu untuk perangkat seluler sebelum menyesuaikan ke desktop.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Alex Chen",
    date: "5 Jan 2024",
    readTime: "5 menit baca",
    category: "Desain",
  },
  {
    id: 6,
    title: "Teknik Optimasi Basis Data",
    excerpt: "Tingkatkan performa database Anda dengan strategi optimasi yang terbukti.",
    image: "/placeholder.svg?height=300&width=400",
    author: "David Brown",
    date: "3 Jan 2024",
    readTime: "9 menit baca",
    category: "Backend",
  },
]

const categories = ["Semua", "Teknologi", "Pengembangan", "Desain", "Keamanan", "Backend"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transform hover:scale-105">
            Blog | Artikel
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Wawasan, tutorial, dan pemikiran seputar teknologi, desain, dan pengembangan dari tim ahli kami.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-background border-2 border-muted rounded-2xl p-2 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                    <Search className="h-5 w-5" />
                  </div>
                  <Input
                    placeholder="Cari artikel, tutorial, atau wawasan..."
                    className="flex-1 border-0 bg-transparent text-lg placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0 h-12"
                  />
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Cari
                  </Button>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center items-center">
              <span className="text-sm text-muted-foreground">Pencarian populer:</span>
              {["React", "Next.js", "TypeScript", "Sistem Desain", "API"].map((term) => (
                <Button
                  key={term}
                  variant="ghost"
                  size="sm"
                  className="text-xs bg-muted/50 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 hover:text-blue-600 transition-all duration-300 rounded-full px-3 py-1"
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kategori */}
      <section className="py-8 px-4 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transform hover:scale-105"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Artikel Unggulan */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text">
            Artikel Unggulan
          </h2>
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600">
                    {featuredPost.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                  </div>
                  <Button
                    asChild
                    className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transform hover:scale-105"
                  >
                    <Link href={`/blog/${featuredPost.id}`}>
                      Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Grid Artikel */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-transparent">
            Artikel Terbaru
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="outline"
                      className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent"
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full mt-4 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transform hover:scale-105"
                  >
                    <Link href={`/blog/${post.id}`}>
                      Baca Artikel <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigasi Halaman */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transform hover:scale-105 bg-transparent"
            >
              Sebelumnya
            </Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "outline"}
                className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transform hover:scale-105"
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transform hover:scale-105 bg-transparent"
            >
              Selanjutnya
            </Button>
          </div>
        </div>
      </section>

      {/* Form Berlangganan */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
            Tetap Terhubung
          </h2>
          <p className="text-muted-foreground mb-8">
            Berlangganan newsletter kami untuk mendapatkan artikel dan wawasan terbaru langsung ke inbox Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Masukkan email Anda" className="flex-1" />
            <Button className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transform hover:scale-105">
              Langganan
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
