"use client";

import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { ClientSidebar } from "./client-sidebar";
import { AdminSidebar } from "./admin-sidebar";
import { ROLES } from "@/constants/roles";
import { DashboardTopbar } from "./dashboard-topbar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

  const SidebarComponent = user?.role === ROLES.ADMIN ? AdminSidebar : ClientSidebar;

  return (
    <div className="flex h-screen overflow-hidden bg-brand-bg-main">
      {/* Sidebar */}
      <SidebarComponent 
        isCollapsed={isCollapsed} 
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
        onToggleCollapse={toggleSidebar}
      />

      {/* Main Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardTopbar onMenuClick={toggleMobileSidebar} />
        
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-brand-soft-bg p-4 md:p-10 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
