'use client'

import { useEffect, useState } from 'react'
import LoadingContainer from '@/components/LoadingContainer'
import { DataTable } from '@/components/DataTable'
import { useDebouncedCallback } from 'use-debounce'
import handleGetAllPages, { handleDeletePage } from '@/features/pages/pages.actions'
import { Edit2, MoreHorizontal, Plus, Trash2, User } from 'lucide-react'
import { Page } from '@/types/pages'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageForm } from './PageForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { DataDeleteDialog } from '@/components/DataDeleteDialog'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function PagesManager() {

  const router = useRouter()
  

  //pagination
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [total, setTotal] = useState(0)

  // const [debouncedSearch, setDebouncedSearch] = useState(search)
  // const debounced = useDebouncedCallback((value: string) => {
  //   setDebouncedSearch(value)
  // }, 500)


  const [data, setData] = useState<Page[] | null>(null)
  const [currentRow, setCurrentRow] = useState<Page | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  const [loading, setLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [mode, setMode] = useState<"create" | "edit">("create")
  const [activeTab, setActiveTab] = useState<"form" | "table">("table")

  console.log('data', currentRow)

   const handleNewPageClick = (): void => {
    setActiveTab("form")
  }
  
  const refreshData = async () => {
    setIsRefreshing(true)
    try {
      const result = await handleGetAllPages(
        page,
        limit,
      )
      setData(result.data)
      setTotal(result.total)
    } finally {
      setLoading(false)
      setIsRefreshing(false)
    }
  }
  
  const deletePageById = async (id: number) => {
    try {
      console.log('Deleting page ID:', id)
      const result = await handleDeletePage(id)
      toast.success(result.message)
    } catch (error: any) {
      toast.error(`Failed to delete page: ${error?.message || 'Unknown error'}`)
    }
  }

  useEffect(() => {
    refreshData()
  }, [page, limit])


  if (loading || data === null || isRefreshing) {
    return <LoadingContainer />
  }

  return (
    <div className="peer-[.header-fixed]/header:mt-16 px-4 py-6">
      <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Pages</h2>
          <p className="text-muted-foreground">Manage your pages here.</p>
        </div>
      </div>
    <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as "table" | "form")}> 
      <TabsList>
        <TabsTrigger value="table">Page List</TabsTrigger>
        <TabsTrigger value="form">{mode === "edit" ? "Edit Page" : "Create Page"}</TabsTrigger>
      </TabsList>

      <TabsContent value="table" className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Data List</CardTitle>
            <CardDescription>Manage your data pages</CardDescription>
          </div>
          <Button
            onClick={handleNewPageClick}
            className=""
          >
            <Plus size={16} className=" " />
            New Page
          </Button>
        </CardHeader>
        <CardContent>

            <DataTable
              data={data ?? []}
              page={page}
              total={total}
              rowsPerPage={limit}
              columns={[
                { header: 'Title', key: 'title' },
                { header: 'Description', key: 'desc' },
                { header: 'Slug', key: 'slug' },
                { header: 'IsPublished', key: 'isPublished' },
              ]}
              rowActions={[
                {
                  label: 'Edit',
                  icon: <Edit2 className="h-4 w-4" />,
                  onClick: (row) => {
                    setMode("edit")             
                    setCurrentRow(row)           
                    setActiveTab("form")
                  },
                },
                {
                  label: 'Delete',
                  icon: <Trash2 className="h-4 w-4" />,
                  onClick: (row) => {
                    setDeleteDialogOpen(true)
                    setCurrentRow(row)
                  },
                  className: 'text-red-500 focus:text-red-500',
                },
                {
                  label: 'Section',
                  icon: <MoreHorizontal className="h-4 w-4" />,
                  onClick: (row) => {
                    router.push(`/dashboard/pages/${row.id}/section`)
                  },
                },
              ]}
              onPageChange={setPage}
              onLimitChange={setLimit}
            />
            <DataDeleteDialog
              open={deleteDialogOpen}
              onOpenChange={setDeleteDialogOpen}
              currentRow={currentRow!}
              onConfirm={async () => {
                if (currentRow) {
                  await deletePageById(currentRow.id)
                }
              }}
              onSuccess={() => {
                refreshData()
                setCurrentRow(null)
              }}
              resourceLabel="Page"
              confirmField="title"
            />
        </CardContent>
      </Card>
      
      </TabsContent>

      <TabsContent value="form">
        
        <PageForm
          mode={mode}
          pageId={mode === "edit" ? currentRow?.id : undefined}
          defaultValues={currentRow}
          onBack={() => {
            setActiveTab("table")
            setCurrentRow(null)
            setMode("create")
          }}
        />
      </TabsContent>
    </Tabs>
    
       </div>
  )
}
