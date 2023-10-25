import SidebarNav from '@/components/SidebarNav';
import { dashboardConfig } from '@/config/dashboard';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = dashboardConfig.sidebarNav;
  return (
    <div className="flex">
      <SidebarNav items={sidebar} />
      {children}
    </div>
  );
}
