'use client'
import { User } from '@/types/user'
import { useEffect, useState } from 'react'



export default function UsersPage() {
  // const [users, setUsers] = useState<User[]>([])
  const [users, setUsers] = useState<any[]>([])


  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers)
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
