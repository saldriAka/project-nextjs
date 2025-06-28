import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateWords(text: string, maxWords = 10): string {
  const words = text.trim().split(/\s+/)
  return words.length > maxWords
    ? words.slice(0, maxWords).join(' ') + '...'
    : text
}

export function getNestedValue(obj: Record<string, any>, path: string): any {
  return path.split('.').reduce((acc, part) => acc?.[part], obj)
}

export function capitalize(str: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function toPascalCase(str: string) {
  return str
    .split("-")
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}


export function sanitizeLabel(label: string) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")   // buang semua karakter selain huruf, angka, spasi, dan "-"
    .replace(/\s+/g, "-")           // ganti spasi (termasuk tab/newline) dengan "-"
    .replace(/-+/g, "-")            // gabungkan multiple "-" jadi satu
    .replace(/^-+|-+$/g, "");       // hapus "-" di awal/akhir
}