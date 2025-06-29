"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon, CheckCircle } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  acceptTerms: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  acceptTerms?: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    acceptTerms: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Nama depan wajib diisi"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Nama belakang wajib diisi"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon wajib diisi"
    } else if (!/^[0-9+\-()\s]+$/.test(formData.phone)) {
      newErrors.phone = "Format nomor telepon tidak valid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Pesan minimal 10 karakter"
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Anda harus menyetujui syarat & ketentuan"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success("Pesan berhasil dikirim!")

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        acceptTerms: false,
      })
    } catch (error) {
      toast.error("Terjadi kesalahan. Silakan coba lagi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-5">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transform hover:scale-105">
            Sampaikan pertanyaan Anda
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-5" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Kami senang mendengar dari Anda. Silakan isi formulir ini atau hubungi kami melalui kontak di bawah.
          </p>
        </div>

        <div className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Informasi Kontak */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 hover:bg-gradient-to-r hover:from-primary hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-default">
              Informasi Kontak
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Email */}
              <div className="group">
                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <MailIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-xl text-gray-900 dark:text-white">Email</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Tim kami siap membantu Anda.</p>
                <Link
                  className="inline-block mt-2 font-medium text-primary underline"
                  href="mailto:akashmoradiya3444@gmail.com"
                >
                  nama@email.com
                </Link>
              </div>

              {/* Live Chat */}
              <div className="group">
                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-xl text-gray-900 dark:text-white">Live Chat</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Tim kami siap menjawab pertanyaan Anda.</p>
                <Link className="inline-block mt-2 font-medium text-primary underline" href="#">
                  Mulai Percakapan
                </Link>
              </div>

              {/* Kantor */}
              <div className="group">
                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-xl text-gray-900 dark:text-white">Kantor</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Silakan kunjungi kantor pusat kami.</p>
                <Link
                  className="inline-block mt-2 font-medium text-primary underline"
                  href="https://maps.google.com"
                  target="_blank"
                >
                  Jl. Jend. Sudirman No. 123, Jakarta Pusat 10220, Indonesia
                </Link>
              </div>

              {/* Telepon */}
              <div className="group">
                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-xl text-gray-900 dark:text-white">Telepon</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Senin–Jumat, pukul 08.00–17.00.</p>
                <Link className="inline-block mt-2 font-medium text-primary underline" href="tel:+15550000000">
                  +62 8123 5678
                </Link>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <Card className="bg-white dark:bg-slate-800 shadow-xl border-0">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Kirim Pesan</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">Nama Depan *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Masukkan nama depan"
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                  </div>

                  <div>
                    <Label htmlFor="lastName">Nama Belakang *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Masukkan nama belakang"
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="nama@email.com"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Telepon *</Label>
                  <Input
                    id="phone"
                    type="text"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="08xx-xxxx-xxxx"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="message">Pesan *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tulis pesan Anda di sini..."
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => handleInputChange("acceptTerms", !!checked)}
                    className={errors.acceptTerms ? "border-red-500" : ""}
                  />
                  <Label htmlFor="acceptTerms" className="text-sm">
                    Saya setuju dengan{" "}
                    <Link href="#" className="underline text-primary">
                      syarat & ketentuan
                    </Link>{" "}
                    dan{" "}
                    <Link href="#" className="underline text-primary">
                      kebijakan privasi
                    </Link>
                    .
                  </Label>
                </div>
                {errors.acceptTerms && <p className="text-sm text-red-500">{errors.acceptTerms}</p>}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact
