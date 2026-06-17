"use client";

import { DashboardSidebar } from "./sidebar";

interface AdminSidebarProps {
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function AdminSidebar(props: AdminSidebarProps) {
  return <DashboardSidebar {...props} />;
}
