import { Language, Step } from "@/types/pages";
import { Check, FileText, Layers, Settings } from "lucide-react";

export const APP_NAME = 'My App';

export const availableLanguages: Language[] = [
  { code: "ID", name: "Indonesian", flag: "🇮🇩" },
  { code: "EN", name: "English", flag: "🇺🇸" },
]

export const sectionTypes: string[] = ["CONTENT", "HERO", "FORM", "GALLERY", "CTA"]

// Updated steps array - merged step 1 and 2
export const steps: Step[] = [
  { id: 1, title: "Page", desc: "Page info, translations & SEO", icon: FileText },
  { id: 2, title: "Sections", desc: "Add page sections", icon: Settings },
  { id: 3, title: "Section Input", desc: "Configure form inputs", icon: Layers },
  { id: 4, title: "Review", desc: "Review and create", icon: Check },
]

export const robotOptions = [
  { label: "Index, Follow", value: "index, follow" },
  { label: "No Index, No Follow", value: "noindex, nofollow" },
  { label: "No Index", value: "noindex" },
  { label: "No Follow", value: "nofollow" },
]

export const fieldTypes = [
  { value: "text", label: "Text Input" },
  { value: "textarea", label: "Textarea" },
  { value: "select", label: "Select Dropdown" },
]

export const validationTypes = [
  { value: "REQUIRED", label: "Required" },
  { value: "MIN_LENGTH", label: "Minimum Length" },
  { value: "MAX_LENGTH", label: "Maximum Length" },
  { value: "EMAIL", label: "Email Format" },
  { value: "PHONE", label: "Phone Format" },
  { value: "REGEX", label: "Custom Pattern" },
]

export type SectionType = "FORM" | "TEXT" | "IMAGE" | "VIDEO"
export type ValidationType = "REQUIRED" | "MIN_LENGTH" | "MAX_LENGTH" | "EMAIL" | "PHONE" | "REGEX"

