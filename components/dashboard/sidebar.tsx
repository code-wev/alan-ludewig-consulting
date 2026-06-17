"use client";

import { DASHBOARD_NAVIGATION } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/auth-provider";
import { ChevronLeft, ChevronRight, LogOut, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardNavItem } from "./nav-item";

interface DashboardSidebarProps {
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function DashboardSidebar({
  isMobileOpen,
  onCloseMobile,
  isCollapsed,
  onToggleCollapse,
}: DashboardSidebarProps) {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  if (!user) return null;

  const navItems = DASHBOARD_NAVIGATION[user.role];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/50 md:hidden'
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Aside */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-[#132651] border-r border-[#e3e6ec] transition-all duration-300 md:translate-x-0 md:sticky md:top-0 h-screen",
          isCollapsed ? "w-[80px]" : "w-[256px]",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
        )}>
        {/* Logo Section - Matching Figma node 345:12862 */}
        <div className='h-[84px] border-b border-[#e3e6ec]/20 px-[24px] flex items-center justify-between shrink-0 overflow-hidden'>
          <Link
            href='/dashboard'
            className='relative h-[36px] w-[186px] shrink-0'>
            <Image
              src='/images/logo.png'
              alt='Logo'
              fill
              className='object-contain'
              priority
            />
          </Link>

          {/* Desktop Toggle Button */}
          {!isCollapsed && (
            <button
              onClick={onToggleCollapse}
              className='hidden md:flex text-white/50 hover:text-white transition-colors ml-2'>
              <ChevronLeft size={20} />
            </button>
          )}

          {isCollapsed && (
            <button
              onClick={onToggleCollapse}
              className='hidden md:flex text-white/50 hover:text-white transition-colors absolute right-2'>
              <ChevronRight size={20} />
            </button>
          )}

          {/* Mobile Close Button */}
          {isMobileOpen && (
            <button
              onClick={onCloseMobile}
              className='md:hidden text-white/70 hover:text-white'>
              <X size={24} />
            </button>
          )}
        </div>

        {/* Navigation Section - scrollable but no scrollbar */}
        <nav className='flex-1 overflow-y-auto py-2 no-scrollbar'>
          {navItems.map((item) => (
            <DashboardNavItem
              key={item.href}
              {...item}
              isActive={pathname === item.href}
              isCollapsed={isCollapsed}
              onClick={onCloseMobile}
            />
          ))}
        </nav>

        {/* Logout Section */}
        <div className='h-[70px] border-t border-[#e3e6ec]/20 p-4 shrink-0'>
          <button
            onClick={logout}
            className={cn(
              "flex items-center gap-3 w-full px-4 py-2 text-[#f7f8fa] hover:bg-white/5 rounded-[6px] transition-colors",
              isCollapsed && "justify-center px-0",
            )}>
            <LogOut size={20} className='shrink-0' />
            {!isCollapsed && (
              <span className="text-[14px] font-['Sansation']">Logout</span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
