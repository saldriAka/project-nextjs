'use server'

import { UserInput, userSchema } from './users.schema'
import { createUser, deleteUser, getUserById, getUsers, isEmailUsed, updateUser } from './users.service'

function formatFieldError(field: string, message: string) {
  return {
    formErrors: [],
    fieldErrors: {
      [field]: [message],
    },
  }
}

export default async function handleGetAllUsers(
  page: number,
  limit: number,
  search?: string,
  statusFilter?: string | null,
  roleFilter?: string | null
) {
  return await getUsers(page, limit, search, statusFilter, roleFilter)
}

export async function handleCreateUser(values: UserInput) {
  const parsed = userSchema.safeParse(values)
  if (!parsed.success) {
    throw new Error(JSON.stringify(parsed.error.flatten()))
  }

  const data = parsed.data
  const used = await isEmailUsed(data.email)
  if (used) {
    throw new Error(JSON.stringify(formatFieldError('email', `Email '${data.email}' is already in use`)))
  }

  return createUser(parsed.data)
}

export async function handleUpdateUser(id: number, values: UserInput) {
  const parsed = userSchema.safeParse(values)
  if (!parsed.success) {
    throw new Error(JSON.stringify(parsed.error.flatten()))
  }

  const data = parsed.data

  // Ambil user lama berdasarkan ID
  const existingUser = await getUserById(id)
  if (!existingUser) {
    throw new Error(JSON.stringify(formatFieldError('email', 'User not found')))
  }

  // Cek apakah email diubah
  const emailChanged = existingUser.email !== data.email

  if (emailChanged) {
    const used = await isEmailUsed(data.email)
    if (used) {
      throw new Error(
        JSON.stringify(formatFieldError('email', `Email '${data.email}' is already in use`))
      )
    }
  }

  return updateUser(id, data)
}


export async function handleUsersDelete(id: number) {
  return await deleteUser(id)
}
