'use client'

import { useState, useTransition } from 'react'
import { IconAlertTriangle } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ConfirmDialog } from './ConfirmDialog'
import { toast } from 'sonner'
import { getNestedValue } from '@/lib/utils'

interface Props<T> {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow: T
  onConfirm: (data: T) => Promise<void> | void
  onSuccess: () => void
  onDelete?: (data: T) => void

  // Optional customization
  resourceLabel?: string // ex: "User", "Page"
  confirmField?: string // ex: "name" or "slug" or "title"
}

export function DataDeleteDialog<T extends Record<string, any>>({
  open,
  onOpenChange,
  currentRow,
  onConfirm,
  onSuccess,
  onDelete,
  resourceLabel = 'Item',
  confirmField = 'name',
}: Props<T>) {
  const [value, setValue] = useState('')
  const [isPending, startTransition] = useTransition()

  const displayName = String(getNestedValue(currentRow ?? {}, confirmField) || '')

  const handleDelete = () => {
    if (value.trim() !== displayName) return

    startTransition(async () => {
      try {
        await onConfirm(currentRow)
        toast.success(`${resourceLabel}: ${displayName} successfully deleted!`)
        onDelete?.(currentRow)
        onOpenChange(false)
        onSuccess()
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
      disabled={value.trim() !== displayName || isPending}
      title={
        <span className="text-destructive flex items-center gap-1">
          <IconAlertTriangle size={18} className="stroke-destructive" />
          Delete {resourceLabel}
        </span>
      }
      desc={
        <div className="space-y-4">
          <p>
            Are you sure you want to delete{' '}
            <span className="font-semibold">{displayName}</span>? <br />
            This action cannot be undone.
          </p>

          <div className="space-y-2">
            <Label htmlFor="confirm-value">Confirm {confirmField}</Label>
            <Input
              id="confirm-value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={`Enter ${confirmField} to confirm deletion`}
              disabled={isPending}
            />
            <p className="text-sm text-muted-foreground mt-1">
              Type: <code className="font-semibold text-red-500">{displayName}</code> to confirm.
            </p>
          </div>

          <Alert variant="destructive">
            <AlertTitle>Warning!</AlertTitle>
            <AlertDescription>
              This operation is irreversible. Deletion cannot be undone.
            </AlertDescription>
          </Alert>
        </div>
      }
      confirmText={isPending ? 'Deleting...' : 'Delete'}
      destructive
    />
  )
}
