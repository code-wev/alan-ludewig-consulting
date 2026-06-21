"use client";

import { DashboardSidebar } from "./sidebar";

interface ClientSidebarProps {
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function ClientSidebar(props: ClientSidebarProps) {
  return <DashboardSidebar {...props} />;
}
