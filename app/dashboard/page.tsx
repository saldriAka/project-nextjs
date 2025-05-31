import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import Dashboard from "@/components/dashboard/Dashboard"

export default async function IndexPage() {
  const session = await getServerSession(authOptions)
  return <Dashboard session={session} />
}
