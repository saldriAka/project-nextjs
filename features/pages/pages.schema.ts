import { z } from "zod"

export const pageSchema = z.object({
  createdById: z.number(),

  isPublished: z.boolean(),
  isDraft: z.boolean(),

  title: z.string().min(1, { message: 'Title is required' }),
  slug: z.string().min(1, { message: 'Slug is required' }),

  desc: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  content: z.string().optional(),

  canonicalUrl: z.string().url().optional(),
  robots: z.string().optional(),
  coverImageUrl: z.string().url().optional().or(z.literal('')),
  ogImageUrl: z.string().url().optional().or(z.literal('')),
});

export type PageFormData = z.infer<typeof pageSchema>

export const defaultPageData = pageSchema.parse({
  createdById: 2,
  title: 'My First Page',
  slug: 'my-first-page',
  isPublished: false,
  isDraft: false,
  desc: '',
  metaTitle: '',
  metaDescription: '',
  content: '',
  canonicalUrl: 'https://example.com/my-first-page',
  robots: 'index, follow',
  coverImageUrl: '',
  ogImageUrl: '',
});

