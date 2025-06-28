'use client'

import { useSession, signOut, signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  const { data: session } = useSession()
  return (
    <>
    <body>
      <div className="bg-purple-950 md:bg-red-600 lg:bg-green-900 border-violet-500 border-b-2">
        <div className="md:flex justify-between container mx-auto py-5">
          <h1 className="text-base text-white font-bold text-center">
            Hello world
          </h1>
          <ul className="flex text-white space-x-10 justify-center mt-5 sm:mt-0">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/weserve">Weserve</Link></li>
            <li><Link href="/about">About</Link></li>
            <li>Portfolio</li>
            <li>Career</li>
            <li>
              {session ? (
                <Button onClick={() => signOut({ callbackUrl: '/' })}>Logout</Button>
              ) : (
                <>
                  <Button asChild variant="outline">
                    <Link href="/login" className='text-black'>Login</Link>
                  </Button>
                </>
              )}
            </li>
          </ul>
        </div>
        
      </div>
      <div className="w-2/4 mx-auto my-5 border-2 border-gray-200 min-w-96 p-5 bg-yellow-200 rounded-xl">
        <h3 className="text-center text-3xl mb-3">Halo Semua</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit expedita vel nihil harum error dignissimos sed debitis. Eaque et eligendi eos nam excepturi, ipsum non voluptas possimus illum deserunt.
      </div>
      <h3 className="text-center text-3xl mb-3">Portfolio</h3>
      <div className="w-4/6 mx-auto my-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        <div className="grid-items">01</div>
        <div className="grid-items">02</div>
        <div className="grid-items">03</div>
        <div className="rounded-md h-40 border-gray-400 border-2 bg-slate-100 flex justify-center items-center ">04</div>
        <div className="rounded-md h-40 border-gray-400 border-2 bg-slate-100 flex justify-center items-center ">05</div>
        <div className="rounded-md h-40 border-gray-400 border-2 bg-slate-100 flex justify-center items-center ">06</div>
      </div>

      <div className="lg:flex justify-between items-center container">
        <div className=" border-gray-400 border-2">A</div>
        <div className=" border-gray-400 border-2">B</div>
        <div className=" border-gray-400 border-2">C</div>
      </div>

      <div className="p-4 text-white text-center font-bold">
        <div className="bg-red-500 sm:bg-orange-500 md:bg-yellow-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-purple-500 p-10 rounded">
          <p>
            Breakpoint Aktif:
            <span className="block sm:hidden">📱 <strong>default (mobile)</strong></span>
            <span className="hidden sm:block md:hidden">📱 <strong>sm ≥ 640px</strong></span>
            <span className="hidden md:block lg:hidden">💻 <strong>md ≥ 768px</strong></span>
            <span className="hidden lg:block xl:hidden">🖥️ <strong>lg ≥ 1024px</strong></span>
            <span className="hidden xl:block 2xl:hidden">🖥️ <strong>xl ≥ 1280px</strong></span>
            <span className="hidden 2xl:block">🖥️ <strong>2xl ≥ 1536px</strong></span>
          </p>
        </div>
      </div>

</body> 
    </>
  
  );
}







"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Zap, Shield, Users, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const products = [
  {
    title: "Analytics Dashboard",
    href: "/analytics",
    description: "Advanced analytics and reporting tools for your business.",
    icon: BarChart3,
  },
  {
    title: "User Management",
    href: "/users",
    description: "Comprehensive user management and access control.",
    icon: Users,
  },
  {
    title: "Security Center",
    href: "/security",
    description: "Enterprise-grade security features and monitoring.",
    icon: Shield,
  },
  {
    title: "Performance Tools",
    href: "/performance",
    description: "Optimize your application's speed and reliability.",
    icon: Zap,
  },
]

const solutions = [
  {
    title: "For Startups",
    href: "/startups",
    description: "Scale your startup with our comprehensive toolkit.",
  },
  {
    title: "For Enterprise",
    href: "/enterprise",
    description: "Enterprise solutions for large-scale operations.",
  },
  {
    title: "For Developers",
    href: "/developers",
    description: "Developer-first tools and APIs for seamless integration.",
  },
  {
    title: "For Teams",
    href: "/teams",
    description: "Collaboration tools designed for modern teams.",
  },
]

const resources = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Comprehensive guides and API references.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Latest updates, tutorials, and industry insights.",
  },
  {
    title: "Community",
    href: "/community",
    description: "Join our community of developers and creators.",
  },
  {
    title: "Support",
    href: "/support",
    description: "Get help from our support team and community.",
  },
]

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-6 w-6 rounded bg-primary" />
            <span className="hidden font-bold sm:inline-block">MegaNav</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-foreground focus:bg-transparent focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-transparent data-[state=open]:bg-transparent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">Featured Product</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Discover our flagship analytics platform with advanced reporting and real-time insights.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                    <div className="grid gap-1">
                      {products.map((product) => (
                        <NavigationMenuLink key={product.title} title={product.title} href={product.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          {product.description}
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-foreground focus:bg-transparent focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="flex items-center space-x-2 pb-4">
              <div className="h-6 w-6 rounded bg-primary" />
              <span className="font-bold">MegaNav</span>
            </div>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <div className="flex flex-col space-y-3">
                  <h4 className="font-medium">Products</h4>
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="text-muted-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col space-y-3">
                  <h4 className="font-medium">Solutions</h4>
                  {solutions.map((solution) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                      className="text-muted-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {solution.title}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col space-y-3">
                  <h4 className="font-medium">Resources</h4>
                  {resources.map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="text-muted-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {resource.title}
                    </Link>
                  ))}
                </div>
                <Link href="/pricing" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                  Pricing
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <div className="h-6 w-6 rounded bg-primary" />
              <span className="font-bold">MegaNav</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
