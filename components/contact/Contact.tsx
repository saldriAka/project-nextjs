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
  message: string
  acceptTerms: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
  acceptTerms?: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
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
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

    

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        acceptTerms: false,
      })
    } catch (error) {
      
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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-5"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Kami senang mendengar dari Anda. Silakan isi formulir ini atau hubungi kami melalui kontak di bawah.
          </p>
        </div>

        <div className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 hover:bg-gradient-to-r hover:from-primary hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-default">
              Informasi Kontak
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="group">
                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <MailIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-xl text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-primary hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-default">
                  Email
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Tim kami siap membantu Anda.</p>
                <Link
                  className="inline-block mt-2 font-medium text-primary hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                  href="mailto:akashmoradiya3444@gmail.com"
                >
                  akashmoradiya3444@gmail.com
                </Link>
              </div>

              <div className="group">
                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-xl text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-primary hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-default">
                  Live Chat
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Tim kami siap menjawab pertanyaan Anda.</p>
                <Link
                  className="inline-block mt-2 font-medium text-primary hover:bg-gradient-to-r hover:from-primary hover:to-green-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                  href="#"
                >
                  Mulai Percakapan
                </Link>
              </div>

              <div className="group">
                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-xl text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-primary hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-default">
                  Kantor
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Silakan kunjungi kantor pusat kami.</p>
                <Link
                  className="inline-block mt-2 font-medium text-primary hover:bg-gradient-to-r hover:from-primary hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 Smith Street, Collingwood <br />
                  VIC 3066, Australia
                </Link>
              </div>

              <div className="group">
                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-xl text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-orange-600 hover:to-primary hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-default">
                  Telepon
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Senin–Jumat, pukul 08.00–17.00.</p>
                <Link
                  className="inline-block mt-2 font-medium text-primary hover:bg-gradient-to-r hover:from-primary hover:to-orange-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                  href="tel:+15550000000"
                >
                  +1 (555) 000-0000
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white dark:bg-slate-800 shadow-xl border-0">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transform transition-all duration-300 cursor-default">
                Kirim Pesan
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nama Depan *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Masukkan nama depan"
                      className={`mt-1.5 h-11 ${errors.firstName ? "border-red-500 focus:border-red-500" : ""}`}
                      aria-invalid={!!errors.firstName}
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nama Belakang *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Masukkan nama belakang"
                      className={`mt-1.5 h-11 ${errors.lastName ? "border-red-500 focus:border-red-500" : ""}`}
                      aria-invalid={!!errors.lastName}
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="nama@email.com"
                    className={`mt-1.5 h-11 ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Pesan *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tulis pesan Anda di sini..."
                    className={`mt-1.5 min-h-[120px] ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => handleInputChange("acceptTerms", !!checked)}
                      className={errors.acceptTerms ? "border-red-500" : ""}
                      aria-invalid={!!errors.acceptTerms}
                      aria-describedby={errors.acceptTerms ? "terms-error" : undefined}
                    />
                    <Label
                      htmlFor="acceptTerms"
                      className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed cursor-pointer"
                    >
                      Saya setuju dengan{" "}
                      <Link
                        href="#"
                        className="text-primary hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 underline"
                      >
                        syarat & ketentuan
                      </Link>{" "}
                      dan{" "}
                      <Link
                        href="#"
                        className="text-primary hover:bg-gradient-to-r hover:from-primary hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 underline"
                      >
                        kebijakan privasi
                      </Link>
                      .
                    </Label>
                  </div>
                  {errors.acceptTerms && (
                    <p id="terms-error" className="text-sm text-red-600 dark:text-red-400">
                      {errors.acceptTerms}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
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
