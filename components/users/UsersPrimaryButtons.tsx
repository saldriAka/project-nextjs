'use client'

import { Button } from '@/components/ui/button'
import { IconMailPlus, IconUserPlus } from '@tabler/icons-react'

interface UsersPrimaryButtonsProps {
  onAdd: () => void
  onInvite: () => void
}

export function UsersPrimaryButtons({ onAdd, onInvite }: UsersPrimaryButtonsProps) {
  return (
    <div className="flex gap-2">
      {/* <Button variant="outline" className="space-x-1" onClick={onInvite}>
        <span>Invite User</span>
        <IconMailPlus size={18} />
      </Button> */}
      <Button className="space-x-1" onClick={onAdd}>
        <span>Add User</span>
        <IconUserPlus size={18} />
      </Button>
    </div>
  )
}
