'use server'

import { pageSchema } from "./pages.schema"
import { createPage, deletePage, getPages, updatePage } from "./pages.service"

export default async function handleGetAllPages(
  page: number,
  limit: number,
  search?: string,
) {
  return await getPages(page, limit, search, null)
}

export async function handleCreatePage(values: any) {
  const parsed = pageSchema.safeParse(values);

  if (!parsed.success) {
    const errors = parsed.error.flatten();
    throw new Error(JSON.stringify(errors));
  }

  return await createPage(parsed.data);
}

export async function handleUpdatePage(id: number, values: any) {
  const parsed = pageSchema.safeParse(values);

  if (!parsed.success) {
    const errors = parsed.error.flatten();
    throw new Error(JSON.stringify(errors));
  }

  return await updatePage(id, parsed.data);
}

export async function handleDeletePage(id: number) {
  return await deletePage(id)
}