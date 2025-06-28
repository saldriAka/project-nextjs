import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  ArrowLeft,
  Eye,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data - dalam aplikasi nyata, ini akan diambil dari API/database
const article = {
  id: 1,
  title: "Revolusi AI dalam Industri Teknologi: Bagaimana Machine Learning Mengubah Cara Kerja Modern",
  slug: "revolusi-ai-industri-teknologi",
  excerpt:
    "Perkembangan kecerdasan buatan telah mengubah lanskap teknologi secara fundamental, membawa inovasi yang tidak pernah terbayangkan sebelumnya.",
  content: `
    <p>Kecerdasan buatan (AI) telah menjadi salah satu teknologi paling revolusioner di abad ke-21. Dari asisten virtual hingga sistem rekomendasi yang canggih, AI telah mengintegrasikan dirinya ke dalam hampir setiap aspek kehidupan digital kita.</p>
    
    <h2>Transformasi Digital yang Tak Terbendung</h2>
    <p>Industri teknologi mengalami transformasi besar-besaran dengan hadirnya machine learning dan deep learning. Perusahaan-perusahaan besar seperti Google, Microsoft, dan Amazon berlomba-lomba mengembangkan teknologi AI yang lebih canggih dan efisien.</p>
    
    <p>Implementasi AI tidak hanya terbatas pada perusahaan teknologi besar. Startup dan perusahaan menengah juga mulai mengadopsi teknologi ini untuk meningkatkan efisiensi operasional dan memberikan pengalaman yang lebih personal kepada pengguna.</p>
    
    <h2>Dampak pada Dunia Kerja</h2>
    <p>Salah satu aspek paling menarik dari revolusi AI adalah dampaknya terhadap dunia kerja. Meskipun ada kekhawatiran tentang otomatisasi yang menggantikan pekerjaan manusia, kenyataannya AI lebih banyak menciptakan peluang baru dan meningkatkan produktivitas.</p>
    
    <p>Profesi-profesi baru seperti AI Engineer, Data Scientist, dan Machine Learning Specialist menjadi sangat diminati. Sementara itu, pekerjaan tradisional juga mengalami evolusi dengan bantuan AI untuk meningkatkan efisiensi dan akurasi.</p>
    
    <h2>Tantangan dan Peluang ke Depan</h2>
    <p>Meskipun penuh dengan potensi, implementasi AI juga menghadapi berbagai tantangan. Isu privasi data, bias algoritma, dan kebutuhan akan regulasi yang tepat menjadi perhatian utama para ahli dan pembuat kebijakan.</p>
    
    <p>Namun, dengan pendekatan yang tepat dan kolaborasi antara industri, akademisi, dan pemerintah, AI memiliki potensi untuk menyelesaikan berbagai masalah kompleks dan menciptakan masa depan yang lebih baik untuk semua.</p>
  `,
  author: {
    name: "Dr. Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Tech Journalist & AI Researcher",
    social: {
      twitter: "@sarahjohnson",
      linkedin: "sarah-johnson",
    },
  },
  publishedAt: "2024-01-15",
  readTime: "8 min read",
  category: "Technology",
  tags: ["AI", "Machine Learning", "Technology", "Innovation"],
  views: 12500,
  likes: 234,
  comments: 45,
  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
}

const relatedArticles = [
  {
    id: 2,
    title: "Masa Depan Blockchain dalam Sistem Keuangan Digital",
    excerpt: "Bagaimana teknologi blockchain mengubah cara kita bertransaksi dan menyimpan nilai.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    publishedAt: "2024-01-12",
    readTime: "6 min read",
    category: "Blockchain",
  },
  {
    id: 3,
    title: "Cybersecurity di Era Digital: Tantangan dan Solusi",
    excerpt: "Menghadapi ancaman siber yang semakin canggih dengan strategi keamanan terdepan.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    publishedAt: "2024-01-10",
    readTime: "7 min read",
    category: "Security",
  },
  {
    id: 4,
    title: "Internet of Things: Menghubungkan Dunia Digital",
    excerpt: "Eksplorasi bagaimana IoT mengubah cara kita berinteraksi dengan lingkungan sekitar.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    publishedAt: "2024-01-08",
    readTime: "5 min read",
    category: "IoT",
  },
]

export default function DetailBlog() {
  return (
    <div className="max-w-7xl mx-auto bg-gray-50">
      {/* Header */}
      <header className="bg-white z-50">
        <div className="  px-4 py-4">
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-4">
              <Link href="/blog" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Kembali ke Berita
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className=" mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Article Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {article.views.toLocaleString()} views
                    </span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">{article.title}</h1>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">{article.excerpt}</p>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-b py-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} />
                      <AvatarFallback>
                        {article.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{article.author.name}</h3>
                      <p className="text-sm text-gray-600">{article.author.bio}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {article.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {article.comments}
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative h-64 md:h-96">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="hover:bg-gray-100 cursor-pointer">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Social Share */}
                <div className="mt-6 pt-6 border-t">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Bagikan artikel ini:</h4>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Link2 className="h-4 w-4 mr-2" />
                      Copy Link
                    </Button>
                  </div>
                </div>
              </div>
            </article>

            {/* Author Bio Card */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} />
                    <AvatarFallback>
                      {article.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.author.name}</h3>
                    <p className="text-gray-600 mb-3">
                      {article.author.bio}. Passionate about emerging technologies and their impact on society. Follow
                      for insights on AI, blockchain, and digital transformation.
                    </p>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm">
                        <Twitter className="h-4 w-4 mr-2" />
                        Follow
                      </Button>
                      <Button variant="outline" size="sm">
                        <Linkedin className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter Signup */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📧 Newsletter Teknologi</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Dapatkan update terbaru tentang perkembangan teknologi langsung di inbox Anda.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </CardContent>
            </Card>

            {/* Trending Articles */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
                  Artikel Trending
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map((article, index) => (
                    <div key={article.id} className="flex space-x-3 group cursor-pointer">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 text-sm font-medium text-gray-600">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{new Date(article.publishedAt).toLocaleDateString("id-ID")}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Artikel Terkait</h3>
                <div className="space-y-4">
                  {relatedArticles.map((article) => (
                    <div key={article.id} className="group cursor-pointer">
                      <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary" className="text-xs">
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-2">{article.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500 space-x-2">
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>{new Date(article.publishedAt).toLocaleDateString("id-ID")}</span>
                      </div>
                      <Separator className="mt-4" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Advertisement Placeholder */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-gray-100 rounded-lg p-8">
                  <p className="text-sm text-gray-500 mb-2">Advertisement</p>
                  <div className="h-32 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-400">Ad Space</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
