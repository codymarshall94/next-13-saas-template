'use client';

import { MoreVertical, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Icons } from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { SidebarNavItem } from '@/types';

export default function SidebarNav({ items }: { items: SidebarNavItem[] }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className='h-screen'>
      <nav className='flex h-full flex-col border-r bg-white shadow-sm'>
        <div className='flex items-center justify-between p-4 pb-2'>
          {expanded && <span className='text-xl font-semibold'>Logo</span>}

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className='rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100'
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <Separator />
        <ul className='flex-1 px-3'>
          {items.map((item) => (
            <SidebarItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              expanded={expanded}
            />
          ))}
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
            <MoreVertical size={20} />
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
            : 'text-gray-600 hover:bg-indigo-50'
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
        <div
          className={`
          invisible absolute left-full ml-6 -translate-x-3 rounded-md
          bg-indigo-100 px-2 py-1
          text-sm text-indigo-800 opacity-20 transition-all
          group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
      `}
        >
          {title}
        </div>
      )}
    </li>
  );
}
