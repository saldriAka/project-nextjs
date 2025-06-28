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

