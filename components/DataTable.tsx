import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'
import { TablePagination } from './users/TablePagination'
import { truncateWords } from '@/lib/utils'

interface Column<T = any> {
  key: keyof T
  header: string
  className?: string
  render?: (item: T) => React.ReactNode
}

interface RowAction<T> {
  label: string
  icon: React.ReactNode
  onClick: (row: T) => void
  className?: string
}

interface DataTableProps<T> {
  data: T[]
  page: number
  total: number
  rowsPerPage: number
  columns: Column<T>[]
  onPageChange: (page: number) => void
  onLimitChange: (size: number) => void
  rowActions?: RowAction<T>[]
}

export function DataTable<T>({
  data,
  columns,
  page,
  total,
  rowsPerPage,
  onPageChange,
  onLimitChange,
  rowActions,
}: DataTableProps<T>) {
  return (
    <>
      <div className="overflow-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-14 text-center">No</TableHead>
              {columns.map((col) => (
                <TableHead key={String(col.key)} className={col.className}>
                  {col.header}
                </TableHead>
              ))}
              <TableHead className="w-10 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={String((row as any).id ?? index)}>
                <TableCell className="text-center">
                  {(page - 1) * rowsPerPage + index + 1}
                </TableCell>
                {columns.map((col) => (
                  <TableCell key={String(col.key)} className={col.className}>
                    {col.render ? (
                      col.render(row)
                    ) : typeof row[col.key] === 'boolean' ? (
                      row[col.key] ? (
                        <span className="inline-flex px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-800">
                          Inactive
                        </span>
                      )
                    ) : (
                      truncateWords(String(row[col.key] ?? ''))
                    )}
                  </TableCell>
                ))}

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0 flex items-center justify-center"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {rowActions?.map((action, idx) => (
                        <DropdownMenuItem
                          key={idx}
                          onClick={() => action.onClick(row)}
                          className={action.className}
                        >
                          <span className="mr-2">{action.icon}</span>
                          {action.label}
                        </DropdownMenuItem>
                      ))}
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
