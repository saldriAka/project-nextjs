
'use client'

import { Book, Menu, Sunset, Trees, Zap } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

interface MenuItem {
  title: string
  url: string
  description?: string
  icon?: React.ReactNode
  items?: MenuItem[]
  arrow?: boolean
}

interface Navbar1Props {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  menu?: MenuItem[]
  auth?: {
    login: { title: string; url: string }
    signup: { title: string; url: string }
  }
  isSticky?: boolean
}

const Nav = ({
  logo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "SALDRI.id",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Bantu Teman",
      url: "#",
      arrow: true,
      items: [
        {
          title: "Template",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "/blog",
        },
        {
          title: "Component",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/about",
        },
        {
          title: "Block",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/contact",
        },
        {
          title: "Ebook",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/contact",
        },
      ],
    },
    
    { title: "About", url: "/about" },
    { title: "Blog", url: "/blog" },
    { title: "Contact", url: "/contact" },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/register" },
  },
  isSticky = false,
}: Navbar1Props) => {
  return (
    <section
      className={`py-4 bg-white ${
        isSticky ? "" : "sticky top-0 z-50 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-between">
          {/* Logo */}
          <Link href={logo.url} className="flex items-center">
            
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tmngoding
            </div>
          </Link>

          {/* Navigation Menu */}
          <div className="relative">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-x-3">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 transform hover:scale-105 transition-all duration-300"
            >
              <Link href={auth.login.url}>{auth.login.title}</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Link href={auth.signup.url}>{auth.signup.title}</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
            </a>

            {/* Mobile Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  )
}

const renderMenuItem = (item: MenuItem) => {
  // Handle dropdown menu items
  if (item.items && item.items.length > 0) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="capitalize font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transform hover:scale-105">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid w-[400px] gap-3 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title}>
                <SubMenuLink item={subItem} />
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  // Handle regular menu items
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <Link
          href={item.url || "#"}
          className="group inline-flex font-semibold h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm capitalize transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent focus:bg-gradient-to-r focus:from-blue-600 focus:to-purple-600 focus:bg-clip-text focus:text-transparent disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105"
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

// Mobile menu item
const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    )
  }

  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  )
}

// Sub menu link UI
const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      href={item.url}
      className="flex gap-4 items-start rounded-md p-3 transition-colors hover:bg-muted hover:text-accent-foreground"
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm text-muted-foreground">{item.description}</p>
        )}
      </div>
    </Link>
  )
}

export { Nav }
