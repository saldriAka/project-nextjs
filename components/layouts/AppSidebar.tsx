import {  ChevronsUpDown,  Plus  } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu"
import Link from "next/link"
import { SideMenuItems } from "@/types/menu"

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  menuItems: SideMenuItems[]
}

export function AppSidebar({ menuItems, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible='icon' variant='floating' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size='lg'
                  className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
                >
                  <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
                    
                  </div>
                  <div className='grid flex-1 text-left text-sm leading-tight'>
                    <span className='truncate font-semibold'> 
                      SALDRI.id
                    </span>
                    <span className='truncate text-xs'>admin</span>
                  </div>
                  <ChevronsUpDown className='ml-auto' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
                align='start'
                side={true ? 'bottom' : 'right'}
                sideOffset={4}
              >
                <DropdownMenuLabel className='text-muted-foreground text-xs'>
                  Teams
                </DropdownMenuLabel>
                  <DropdownMenuItem
                    // key={team.name}
                    // onClick={() => setActiveTeam(team)}
                    className='gap-2 p-2'
                  >
                    <div className='flex size-6 items-center justify-center rounded-sm border'>
                      
                    </div>
                    Admin
                    <DropdownMenuShortcut>⌘ 1</DropdownMenuShortcut>
                  </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='gap-2 p-2'>
                  <div className='bg-background flex size-6 items-center justify-center rounded-md border'>
                    <Plus className='size-4' />
                  </div>
                  <div className='text-muted-foreground font-medium'>Add team</div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={sidebarData.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}



