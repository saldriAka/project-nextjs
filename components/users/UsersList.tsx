import { UsersListsProps } from "@/types/user";


export function UsersList({ data }: UsersListsProps) {
  return (
    <ul className="space-y-2">
      {data.map(user => (
        <li key={user.id} className="p-2 border rounded">
          <p>{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </li>
      ))}
    </ul>
  )
}