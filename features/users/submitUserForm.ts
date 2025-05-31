import { toast } from "sonner"
import { handleCreateUser, handleUpdateUser } from "./users.actions"
import { UserInput } from "./users.schema"
import { HandleUserSubmitProps, User } from "@/types/user"
import { UseFormReturn } from "react-hook-form"

export async function handleUserSubmit({
  values,
  isEdit,
  currentRow,
  form,
  onOpenChange,
  onSuccess,
}: HandleUserSubmitProps) {
  try {
    if (isEdit && currentRow) {
      if (!currentRow) {
        toast.error('User data not found for editing.')
        return
      }
      await handleUpdateUser(currentRow.id, values)
      toast.success(`User "${values.name}" updated successfully.`)
    } else {
      await handleCreateUser(values)
      toast.success(`User "${values.name}" created successfully.`)
    }

    form.reset()
    onOpenChange(false)
    onSuccess()
  } catch (err) {
    let message = 'Failed to submit form. Please try again.'

    try {
      const parsed = JSON.parse((err as Error).message)

      if (parsed?.fieldErrors) {
        Object.entries(parsed.fieldErrors).forEach(([key, value]) => {
          const msg = Array.isArray(value) && value.length > 0
            ? value.join(', ')
            : typeof value === 'string'
              ? value
              : undefined

          if (msg) {
            form.setError(key as keyof UserInput, {
              type: 'server',
              message: msg,
            })
          }
        })
      }

      if (parsed?.formErrors?.length) {
        message = parsed.formErrors.join(', ')
      } else if (typeof parsed === 'string') {
        message = parsed
      }
    } catch {
      message = (err as Error).message
    }

    toast.error(message)
  }
}


export function getUserFormDefaultValues(
  isEdit: boolean,
  currentRow?: User
): UserInput {
  if (isEdit && currentRow) {
    return {
      name: currentRow.name ?? '',
      email: currentRow.email,
      role: currentRow.role as 'admin' | 'user',
      avatar: currentRow.avatar ?? 'https://i.pravatar.cc/150?img=3',
      isActive: currentRow.isActive ? 'active' : 'inactive',
    }
  }

  return {
    name: '',
    email: '',
    role: 'user',
    avatar: 'https://i.pravatar.cc/150?img=3',
    isActive: 'active',
  }
}