"use client";

import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardNavItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
  isCollapsed?: boolean;
}

export function DashboardNavItem({
  label,
  href,
  icon: Icon,
  isActive,
  onClick,
  isCollapsed,
}: DashboardNavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-6 py-3 transition-all duration-200 group relative",
        isActive
          ? "bg-white text-[#132651]"
          : "text-[#f7f8fa] hover:bg-white/5",
        isCollapsed && "justify-center px-0"
      )}
    >
      <Icon
        className={cn(
          "w-[18px] h-[18px] shrink-0 transition-colors",
          isActive ? "text-[#132651]" : "text-[#f7f8fa]"
        )}
      />
      {!isCollapsed && (
        <span
          className={cn(
            "text-[14px] font-['Sansation'] leading-relaxed truncate",
            isActive ? "font-bold" : "font-normal"
          )}
        >
          {label}
        </span>
      )}
      
      {/* Active Indicator Line (Figma has a 3px right border on active state) */}
      {isActive && !isCollapsed && (
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#132651]" />
      )}
    </Link>
  );
}
