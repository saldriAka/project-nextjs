// UsersTable.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreHorizontal, Edit2, Trash2 } from 'lucide-react'
import { TablePagination } from './TablePagination'
import { User } from '@/types/user'

interface Column {
  header: string
  accessor: keyof User
  className?: string
}

interface UsersTableProps {
  data: User[]
  page: number
  total: number
  rowsPerPage: number
  columns: Column[]
  onEdit: (user: User) => void
  onDelete: (user: User) => void
  onPageChange: (page: number) => void
  onLimitChange: (size: number) => void
}

export function UsersTable({
  data,
  columns,
  page,
  total,
  rowsPerPage,
  onEdit,
  onDelete,
  onPageChange,
  onLimitChange,
}: UsersTableProps) {
  return (
    <>
      <div className="overflow-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-14 text-center">No</TableHead>
              {columns.map((col) => (
                <TableHead key={String(col.accessor)} className={col.className}>
                  {col.header}
                </TableHead>
              ))}
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="w-10 text-right">
                <span>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={String(row.id)}>
                <TableCell className="text-center">
                  {Number.isFinite(page) && Number.isFinite(rowsPerPage)
                    ? (page - 1) * rowsPerPage + index + 1
                    : index + 1}
                </TableCell>
                {columns.map((col) => (
                  <TableCell key={String(col.accessor)} className={col.className}>
                    {String(row[col.accessor])}
                  </TableCell>
                ))}

                <TableCell className="text-center">
                  {row.isActive ? (
                    <span className="inline-flex px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-800">
                      Inactive
                    </span>
                  )}
                </TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0 flex items-center justify-center">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onEdit(row)} className="cursor-pointer">
                        <Edit2 className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => onDelete(row)}
                        className="cursor-pointer text-red-500 focus:text-red-500"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4">
        <TablePagination
          page={page}
          rowsPerPage={rowsPerPage}
          total={total}
          onPageChange={onPageChange}
          onRowsPerPageChange={onLimitChange}
        />
      </div>
    </>
  )
}
