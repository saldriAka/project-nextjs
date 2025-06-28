'use client';

import { TopMenuItems } from '@/types/menu';
import { cn } from '@/lib/utils';
import { IconCheck, IconMenu, IconMoon, IconSearch, IconSun } from '@tabler/icons-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from 'next-auth/react';
function TopMenu({ menuItems }: { menuItems: TopMenuItems[] }) {
  return (
    <>
    <div className='md:hidden'>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button size='icon' variant='outline'>
            <IconMenu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side='bottom' align='start'>
          {menuItems.map(({ title, href, isActive, disabled }) => (
            <DropdownMenuItem key={`${title}-${href}`} asChild>
              <Link
                key={`${title}-${href}`}
                href={href}
                className={!isActive ? 'text-muted-foreground' : ''}
              >
                {title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <nav
      className={cn(
        'hidden items-center space-x-4 md:flex lg:space-x-6',
      )}
    >
      {menuItems.map(({ title, href, isActive, disabled }) => (
        <Link
          key={`${title}-${href}`}
          href={href}
          className={`hover:text-primary text-sm font-medium transition-colors}`}
        >
          {title}
        </Link>
      ))}
    </nav>
    <div className='ml-auto flex items-center space-x-4'>

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='icon' className='scale-95 rounded-full'>
            <IconSun className='size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
            <IconMoon className='absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem>
            Light{' '}
            <IconCheck
              size={14}
              className=''
            />
          </DropdownMenuItem>
          <DropdownMenuItem>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>


      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
            <Avatar className='h-8 w-8'>
              {/* <AvatarImage src='/avatars/01.png' alt='@shadcn' /> */}
              <AvatarFallback>SN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='end' forceMount>
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
              <p className='text-sm leading-none font-medium'>satnaing</p>
              <p className='text-muted-foreground text-xs leading-none'>
                satnaingdev@gmail.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href='/settings'>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href='/settings'>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href='/settings'>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>New Team</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    
    </div>
    </>
  );
}
export default TopMenu;
