import prisma from '@/lib/db'
import { Page } from '@prisma/client';

export async function getPages(
  page = 1,
  limit = 10,
  search = '',
  statusFilter: string | null = null
): Promise<{ data: any[]; total: number }> {
  const where: Partial<Record<keyof Page, any>> = {
    ...(search && {
      title: {
        contains: search,
        mode: 'insensitive',
      },
    }),
    ...(statusFilter === 'published' && { isPublished: true }),
    ...(statusFilter === 'draft' && { isDraft: true }),
  };

  const [pages, total] = await Promise.all([
    prisma.page.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      include: {
        createdBy: true,
      },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.page.count({ where }),
  ]);

  const data = pages.map((page: any) => ({
    id: page.id,
    title: page.title ?? '[No Title]',
    desc: page.desc ?? '[No Description]',
    content: page.content ?? '{}',
    slug: page.slug ? `/${page.slug}` : '[No Slug]',
    
    // Status flags
    isPublished: page.isPublished ?? false,
    isDraft: page.isDraft ?? false,

    // SEO fields
    metaTitle: page.metaTitle ?? '[No Meta Title]',
    metaDescription: page.metaDescription ?? '[No Meta Description]',
    canonicalUrl: page.canonicalUrl ?? '[No Canonical URL]',
    coverImageUrl: page.coverImageUrl ?? '',
    ogImageUrl: page.ogImageUrl ?? '',
    robots: page.robots ?? 'index,follow',

    // Timestamps
    createdAt: page.createdAt ?? null,
    updatedAt: page.updatedAt ?? null,

    // Author information
    author: page.createdBy?.name ?? 'Unknown',
    createdById: page.createdBy?.id ?? null,
  }))

  return { data, total };
}

export async function createPage(data: any) {

  const page = await prisma.page.create({
    data: {
      ...data,
      createdById: 2,
    },
  });
  
  try {
    return { data: page, success: true, message: 'Page created successfully' }
  } catch (e) {
    return { data:[], success: false, message: 'Failed to create page' }
  }
}


export async function updatePage(id: number, data: any) {

  const page = await prisma.page.update({
    where: { id },
    data: {
      ...data,
      createdById: 2,
    },
  });
  
  try {
    return { data: page, success: true, message: 'Page updated successfully.' }
  } catch (e) {
    return { data:[], success: false, message: 'Failed to update page.' }
  }
}


export async function deletePage(id: number) {
  const page =  prisma.page.delete({ where: { id } })
  
  try {
    return { data: page, success: true, message: 'Page Deleted successfully.' }
  } catch (e) {
    return { data:[], success: false, message: 'Failed to Delete page.' }
  }
}