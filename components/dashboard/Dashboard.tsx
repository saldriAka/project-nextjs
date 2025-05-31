'use client'

import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Session } from "next-auth"
import LoadingContainer from "../LoadingContainer"

interface Props {
  session: Session | null
}

export default function Dashboard({ session }: Props) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true)
    }, 500) // 500ms delay

    return () => clearTimeout(timeout)
  }, [])

  if (!showContent) {
    return (<LoadingContainer/>)
  }

  return (
    <main
      className={cn(
        'peer-[.header-fixed]/header:mt-16',
        'px-4 py-6', 'fixed-main flex grow flex-col overflow-hidden'
      )}
    >
      <div className="mb-4 flex flex-col space-y-5">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div>Welcome, {session?.user?.email} ({session?.user?.role})</div>
      </div>

      <Tabs orientation="vertical" defaultValue="overview" className="space-y-4">
        <div className="w-full overflow-x-auto pb-2">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>Analytics</TabsTrigger>
            <TabsTrigger value="reports" disabled>Reports</TabsTrigger>
            <TabsTrigger value="notifications" disabled>Notifications</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month" },
              { title: "Subscriptions", value: "+2350", change: "+180.1% from last month" },
              { title: "Sales", value: "+12,234", change: "+19% from last month" },
              { title: "Active Now", value: "+573", change: "+201 since last hour" },
            ].map((item, i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                  <div className="text-muted-foreground h-4 w-4">📊</div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <p className="text-muted-foreground text-xs">{item.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
            <Card className="col-span-1 lg:col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                {/* Add chart or summary content here */}
              </CardContent>
            </Card>
            <Card className="col-span-1 lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add sales data list here */}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
