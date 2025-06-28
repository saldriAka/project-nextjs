import { Calendar, ChevronsUpDown, Home, Inbox, Plus, Search, Settings } from "lucide-react"


export const links = [
  {
    title: 'Overview',
    href: '/dashboard/overview',
    isActive: true,
    disabled: false,
  },
  {
    title: 'Customers',
    href: '/dashboard/customers',
    isActive: false,
    disabled: true,
  },
  {
    title: 'Products',
    href: '/dashboard/products',
    isActive: false,
    disabled: true,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    isActive: false,
    disabled: true,
  },
]

// Menu items.
export const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: Inbox,
  },
  {
    title: "Pages",
    url: "/dashboard/pages",
    icon: Inbox,
  },
  {
    title: "Section",
    url: "/dashboard/section",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]