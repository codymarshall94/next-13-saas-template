'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Icons } from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { SidebarNavItem } from '@/types';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { MoreVertical } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import ThemeToggle from '../ThemeToggle';
import { usePathname } from 'next/navigation';

export default function SidebarNav({
  items,
  itemsExtra,
}: {
  items: SidebarNavItem[];
  itemsExtra: SidebarNavItem[];
}) {
  const [expanded, setExpanded] = useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log('Error signing out:', error.message);
    router.refresh();
  };

  return (
    <aside className='h-screen'>
      <nav className='flex h-full flex-col border-r shadow-sm'>
        <div className='flex items-center justify-between p-4 pb-2'>
          {expanded && (
            <span className='text-xl font-semibold text-primary'>PK Plan</span>
          )}
          <Button
            variant='ghost'
            onClick={() => setExpanded((curr) => !curr)}
            className='rounded-lg p-2 hover:bg-popover'
          >
            {!expanded ? (
              <Icons icon='chevron-right' />
            ) : (
              <Icons icon='chevron-left' />
            )}
          </Button>
        </div>
        <Separator />
        <ul className='flex-1 px-3'>
          {items.map((item) => (
            <SidebarItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              expanded={expanded}
              active={pathname === item.href}
            />
          ))}
        </ul>

        <Separator />
        <ul className='flex-1 px-3'>
          {itemsExtra.map((item) => (
            <SidebarItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              expanded={expanded}
            />
          ))}
          <div>
            <ThemeToggle />
            {expanded && (
              <span
                className={`overflow-hidden font-bold text-muted-foreground transition-all `}
              >
                Toggle Theme
              </span>
            )}
          </div>
        </ul>

        <Separator />
        <div className='flex p-3'>
          <Avatar className='h-10 w-10'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div
            className={`
              flex items-center justify-between
              overflow-hidden transition-all ${expanded ? 'ml-3 w-52' : 'w-0'}
          `}
          >
            <div className='leading-4'>
              <h4 className='font-semibold'>John Doe</h4>
              <span className='text-xs text-gray-600'>johndoe@gmail.com</span>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='ghost'
                  className='rounded-lg p-2 hover:bg-gray-100'
                >
                  <MoreVertical />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className='rounded-md bg-white p-2 shadow-md'
                align='end'
              >
                <Button
                  variant='ghost'
                  className='flex w-full items-center justify-between'
                  onClick={handleSignOut}
                >
                  {' '}
                  <span className='text-sm'>Logout</span>
                  <Icons icon='log-out' />
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon,
  title,
  expanded,
  active,
}: {
  icon: string;
  title: string;
  expanded: boolean;
  active?: boolean;
}) {
  return (
    <li
      className={`
        group relative my-1 flex cursor-pointer items-center
        rounded-md px-3 py-2
        font-medium transition-colors
        ${
          active
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'text-muted-foreground hover:bg-muted hover:text-primary'
        }
    `}
    >
      <Icons icon={icon} />
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'ml-3 w-52' : 'w-0'
        }`}
      >
        {title}
      </span>
      {!expanded && (
        <span
          className={`
          invisible absolute left-full ml-6 -translate-x-3 rounded-md
          bg-indigo-100 px-2 py-1
          text-sm text-indigo-800 opacity-20 transition-all
          group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
      `}
        >
          {title}
        </span>
      )}
    </li>
  );
}
