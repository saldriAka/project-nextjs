'use client'

import { useState, useTransition } from 'react'
import { IconAlertTriangle } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User } from '@/types/user'
import { ConfirmDialog } from '../ConfirmDialog'
import { handleUsersDelete } from '@/features/users/users.actions'
import { toast } from 'sonner'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow: User
  onDelete?: (user: User) => void // opsional callback eksternal
}

export function UsersDeleteDialog({
  open,
  onOpenChange,
  currentRow,
  onDelete,
  onSuccess, // Tambahkan prop ini
}: Props & { onSuccess: () => void }) {
  const [value, setValue] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleDelete = () => {
    if (value.trim() !== currentRow.name) return

    startTransition(async () => {
      try {
        await handleUsersDelete(currentRow.id)
        toast.success(`User: ${currentRow.name} successfully deleted!`)
        onDelete?.(currentRow)
        onOpenChange(false)
        onSuccess() // refresh list
        setValue('')
      } catch (err) {
        console.error('Delete failed:', err)
        toast.error(`Delete failed: ${err}`)
      }
    })
  }

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={(state) => {
        setValue('')
        onOpenChange(state)
      }}
      handleConfirm={handleDelete}
      disabled={value.trim() !== currentRow.name || isPending}
      title={
        <span className="text-destructive flex items-center gap-1">
          <IconAlertTriangle size={18} className="stroke-destructive" />
          Delete User
        </span>
      }
      desc={
        <div className="space-y-4">
          <p>
            Are you sure you want to delete{' '}
            <span className="font-semibold">{currentRow.name}</span>? <br />
            This action will permanently remove the user with the role of{' '}
            <span className="font-semibold uppercase">{currentRow.role}</span>.
            This cannot be undone.
          </p>

          <div className="space-y-2">
            <Label htmlFor="confirm-username">Confirm Name</Label>
            <Input
              id="confirm-username"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter username to confirm deletion"
              disabled={isPending}
            />
            <p className="text-sm text-muted-foreground mt-1">
              Type: <code className="font-semibold text-red-500 text-bold">{currentRow.name}</code> to confirm.
            </p>
          </div>

          <Alert variant="destructive">
            <AlertTitle>Warning!</AlertTitle>
            <AlertDescription>
              This operation is irreversible. Deleting a user cannot be undone.
            </AlertDescription>
          </Alert>
        </div>
      }
      confirmText={isPending ? 'Deleting...' : 'Delete'}
      destructive
    />
  )
}
