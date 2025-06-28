import { PageFormData } from "@/features/pages/pages.schema"
import { SectionType, ValidationType } from "@/lib/constants"
import type React from "react"

export interface Page {
  id: number
  createdById: number
  title: string
  slug: string
  desc?: string
  isPublished: boolean
  isDraft: boolean
  metaTitle?: string
  metaDescription?: string
  canonicalUrl?: string
  coverImageUrl?: string
  ogImageUrl?: string
  robots?: string
}


export interface PageFormProps {
  mode: "create" | "edit"
  pageId?: number
  defaultValues?: PageFormData | null
  onBack?: () => void
}


export interface FormFieldValidation {
  id: number
  validationType: ValidationType
  validationValue?: string
  errorMessage: string
}

export interface FormField {
  id: number
  name: string
  fieldType: string
  position: number
  isRequired: boolean
  label: string
  placeholder?: string
  helpText?: string
  validations: FormFieldValidation[]
}


export interface JsonFieldData {
  type: string
  value: string
}

export interface FormFieldContent {
  id: string
  type: "text" | "textarea" | "json"
  label: string
  value: string
}
