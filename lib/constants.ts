
import { Check, FileText, Layers, Settings } from "lucide-react";

export const APP_NAME = 'My App';

export const sectionTypes: string[] = ["CONTENT", "HERO", "FORM", "GALLERY", "CTA"]

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

