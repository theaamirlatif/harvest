import { Bell, Calendar, CreditCard, FileText, HardDrive, LayoutDashboard, LayoutDashboardIcon, LifeBuoy, LogOut, Settings, Users, type LucideIcon } from "lucide-react";

interface SidebarProps {
  path: string;
  title: string;
  icons: {
    icon: typeof LayoutDashboard;
    activeIcon: typeof LayoutDashboard;
  };
}

export const sidebarData: SidebarProps[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icons: {
      icon: LayoutDashboardIcon,
      activeIcon: LayoutDashboard,
    },
  },
  {
    path: "client-management",
    title: "Client Management",
    icons: {
      icon: Users,
      activeIcon: Users,
    },
  },
  {
    path: "maintenance-scheduling",
    title: "Maintenance Scheduling",
    icons: {
      icon: Calendar,
      activeIcon: Calendar,
    },
  },
  {
    path: "requests-alerts",
    title: "Requests & Alerts",
    icons: {
      icon: Bell,
      activeIcon: Bell,
    },
  },
  {
    path: "facility-hardware",
    title: "Facility & Hardware",
    icons: {
      icon: HardDrive,
      activeIcon: HardDrive,
    },
  },
  {
    path: "documents",
    title: "Documents",
    icons: {
      icon: FileText,
      activeIcon: FileText,
    },
  },
  {
    path: "billing-invoices",
    title: "Billing & Invoices",
    icons: {
      icon: CreditCard,
      activeIcon: CreditCard,
    },
  },
  {
    path: "support-ticket-handling",
    title: "Support Ticket Handling",
    icons: {
      icon: LifeBuoy,
      activeIcon: LifeBuoy,
    },
  },
];


export interface SidebarFooterProps {
  path: string;
  title: string;
  icon: LucideIcon;
  color: "default" | "red";
}

export const sidebarFooterData: SidebarFooterProps[] = [
  {
    title: "System Settings",
    path: "system-settings",
    icon: Settings,
    color: "default",
  },
  {
    title: "Logout",
    path: "/",
    icon: LogOut,
    color: "red",
  },
];
