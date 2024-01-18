import { DashboardConfig } from '@/types';

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Support',
      href: '/support',
    },
  ],
  sidebarNav: [
    {
      title: 'Home',
      href: '/dashboard',
      icon: 'home',
    },
    {
      title: 'Calendar',
      href: '/dashboard/calendar',
      icon: 'calendar',
    },
    {
      title: 'Class Builder',
      href: '/dashboard/create-class',
      icon: 'blocks',
    },
    {
      title: 'My Classes',
      href: 'dashboard/my-classes',
      icon: 'folder',
    },
  ],
  sidebarNavExtras: [
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'settings',
    },
    {
      title: 'Support',
      href: '/dashboard/support',
      icon: 'help-circle',
    },
  ],
};
