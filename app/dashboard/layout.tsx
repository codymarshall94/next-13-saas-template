import SidebarNav from '@/components/SidebarNav';
import { dashboardConfig } from '@/config/dashboard';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = dashboardConfig.sidebarNav;
  const sideBarExtras = dashboardConfig.sidebarNavExtras;
  return (
    <div className='flex'>
      <SidebarNav items={sidebar} itemsExtra={sideBarExtras} />
      {children}
    </div>
  );
}
