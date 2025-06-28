'use client'

import { useEffect, useState } from 'react'
import LoadingContainer from '@/components/LoadingContainer'
import { User } from '@/types/user'
import handleGetAllUsers from '@/features/users/users.actions'
import { UsersPrimaryButtons } from '@/components/users/UsersPrimaryButtons'
import { UsersTable } from '@/components/DataTable'
import { UsersActionDialog } from '@/components/users/UsersActionDialog'
import { UsersDeleteDialog } from '@/components/DataDeleteDialog'
import { DataTableToolbar } from '@/components/users/DataTableToolbar'
import { useDebouncedCallback } from 'use-debounce'


export default function UsersManager() {

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [total, setTotal] = useState(0)

  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [roleFilter, setRoleFilter] = useState<string | null>(null)
  const [debouncedSearch, setDebouncedSearch] = useState(search)

  const debounced = useDebouncedCallback((value: string) => {
    setDebouncedSearch(value)
  }, 500)

  const [users, setUsers] = useState<User[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const [dialogMode, setDialogMode] = useState<'add' | 'edit' | 'delete' | null>(null)
  const [currentRow, setCurrentRow] = useState<User | null>(null)
  
  const refreshUsers = async () => {
    setIsRefreshing(true)
    try {
      const result = await handleGetAllUsers(
        page,
        limit,
        debouncedSearch,
        statusFilter,
        roleFilter
      )
      setUsers(result.data)
      setTotal(result.total)
    } finally {
      setLoading(false)
      setIsRefreshing(false)
    }
  }

  useEffect(() => {
    refreshUsers()
  }, [page, limit, debouncedSearch, statusFilter, roleFilter])

  const closeDialog = () => {
    setDialogMode(null)
    setCurrentRow(null)
  }

  if (loading || users === null || isRefreshing) {
    return <LoadingContainer />
  }

  return (
    <div className="peer-[.header-fixed]/header:mt-16 px-4 py-6">
      <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">Manage your users and their roles here.</p>
        </div>

        <UsersPrimaryButtons
          onAdd={() => {
            setCurrentRow(null)
            setDialogMode('add')
          }}
          onInvite={() => {}}
        />
      </div>
      
      <DataTableToolbar
        search={search}
        onSearchChange={(value) => {
          setSearch(value)
          debounced(value)
        }}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        roleFilter={roleFilter}
        onRoleFilterChange={setRoleFilter}
        isFiltered={!!search || !!statusFilter || !!roleFilter}
        onResetFilters={() => {
          setSearch('')
          setStatusFilter(null)
          setRoleFilter(null)
        }}
      />
      <UsersTable
        data={users ?? []}
        page={page}
        total={total}
        rowsPerPage={limit}
        columns={[
          { header: 'Name', accessor: 'name' },
          { header: 'Email', accessor: 'email' },
          { header: 'Role', accessor: 'role' },
        ]}
        onEdit={(user) => {
          setCurrentRow(null)
          setTimeout(() => {
            setCurrentRow(user)
            setDialogMode('edit')
          }, 0)
        }}
        onDelete={(user) => {
          setCurrentRow(null)
          setTimeout(() => {
            setCurrentRow(user)
            setDialogMode('delete')
          }, 0)
        }}
        onPageChange={setPage}
        onLimitChange={setLimit}
      />

      {(dialogMode === 'add' || dialogMode === 'edit') && (
        <UsersActionDialog
          key={`user-${dialogMode}-${currentRow?.id ?? 'new'}`}
          currentRow={dialogMode === 'edit' ? currentRow ?? undefined : undefined}
          open={true}
          onOpenChange={(open) => {
            if (!open) closeDialog()
          }}
          onSuccess={refreshUsers}
        />
      )}

      {dialogMode === 'delete' && currentRow && (
        <UsersDeleteDialog
          key={`delete-${currentRow.id}`}
          open={true}
          onOpenChange={(open) => {
            if (!open) closeDialog()
          }}
          currentRow={currentRow}
          onDelete={(user) => {
            console.log('User deleted:', user)
            closeDialog()
          }}
          onSuccess={refreshUsers}
        />
      )}
    </div>
  )
}
