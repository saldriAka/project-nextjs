// app/loading.tsx
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <main className={cn('px-4 py-6', 'fixed-main flex grow flex-col overflow-hidden')}>
      <div className="mb-4 flex flex-col space-y-5 animate-pulse">
        <div className="h-8 w-48 bg-muted rounded" />
        <div className="h-5 w-64 bg-muted rounded" />
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-4">
        {Array(4).fill(null).map((_, i) => (
          <div key={i} className="h-8 w-24 bg-muted rounded" />
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-4 animate-pulse">
        {Array(4).fill(null).map((_, i) => (
          <Card key={i}>
            <CardHeader className="h-12 bg-muted rounded-t" />
            <CardContent className="space-y-2 py-4">
              <div className="h-6 w-24 bg-muted rounded" />
              <div className="h-4 w-32 bg-muted rounded" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 animate-pulse">
        <Card className="col-span-1 lg:col-span-4 h-48">
          <CardHeader className="h-6 bg-muted rounded-t mb-2" />
          <CardContent className="h-36 bg-muted rounded" />
        </Card>
        <Card className="col-span-1 lg:col-span-3 h-48">
          <CardHeader className="space-y-2">
            <div className="h-6 w-32 bg-muted rounded" />
            <div className="h-4 w-48 bg-muted rounded" />
          </CardHeader>
          <CardContent className="h-24 bg-muted rounded" />
        </Card>
      </div>
    </main>
  )
}
