import { CirclePlus } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Cross2Icon } from "@radix-ui/react-icons"


interface DataTableToolbarProps {
  search: string
  onSearchChange: (value: string) => void
  statusFilter: string | null
  onStatusFilterChange: (value: string | null) => void
  roleFilter: string | null
  onRoleFilterChange: (value: string | null) => void
  onResetFilters: () => void
  isFiltered: boolean
}

export function DataTableToolbar({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  roleFilter,
  onRoleFilterChange,
  onResetFilters,
  isFiltered,
}: DataTableToolbarProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:space-x-2">
        <Input
          placeholder="Search by Name..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />

        <div className="flex gap-x-2">
          {/* Status Filter */}
          <Select
            value={statusFilter ?? 'all'}
            onValueChange={(val) => onStatusFilterChange(val === 'all' ? null : val)}
          >
            <SelectTrigger className="h-8 w-[120px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>

          {/* Role Filter */}
          <Select
            value={roleFilter ?? 'all'}
            onValueChange={(val) => onRoleFilterChange(val === 'all' ? null : val)}
          >
            <SelectTrigger className="h-8 w-[120px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isFiltered && (
          <Button variant="ghost" onClick={onResetFilters} className="h-8 px-2 lg:px-3">
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )

}

