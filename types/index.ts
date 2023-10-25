export type MainNavItem = {
  title: string;
  href?: string;
};

export type SidebarNavItem = {
  title: string;
  href?: string;
  icon: string;
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};
