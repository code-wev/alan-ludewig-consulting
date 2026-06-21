"use client";

import { useAuth } from "@/providers/auth-provider";
import { Search, Bell, Settings, ChevronDown, User, Menu } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface DashboardTopbarProps {
  onMenuClick?: () => void;
}

export function DashboardTopbar({ onMenuClick }: DashboardTopbarProps) {
  const { user } = useAuth();

  return (
    <header className="h-[81px] bg-white border-b border-[#e3e6ec] px-[32px] flex items-center justify-between sticky top-0 z-30 w-full">
      {/* Search Bar */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 text-[#132651]"
        >
          <Menu size={24} />
        </button>
        <div className="hidden md:flex items-center w-[384px] h-[36px] bg-[#f3f5f8] rounded-[6px] px-[16px] gap-2">
          <Search className="w-[20px] h-[20px] text-[#5a6886]" />
          <input
            type="text"
            placeholder="Search ....."
            className="bg-transparent border-none outline-none text-[12px] text-[#5a6886] w-full font-['Sansation']"
          />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-[16px]">
        {/* Badge */}
        <div className="hidden sm:flex items-center justify-center px-[9px] py-[2px] border-[1.5px] border-[#ad46ff] rounded-[6px]">
          <span className="text-[12px] font-['Sansation'] text-[#ad46ff]">Comply Pro</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-[10px] hover:bg-slate-50">
          <Bell className="w-[20px] h-[20px] text-[#132651]" />
          <div className="absolute top-[4px] right-[4px] w-[8px] h-[8px] bg-[#d92d20] rounded-full" />
        </button>

        {/* Settings */}
        <button className="p-2 rounded-[10px] hover:bg-slate-50">
          <Settings className="w-[20px] h-[20px] text-[#132651]" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-[8px] pl-[8px] pr-[8px] py-[8px] rounded-[10px] cursor-pointer hover:bg-slate-50 transition-colors border border-transparent">
          <div className="w-[32px] h-[32px] bg-[#132651] rounded-full flex items-center justify-center">
            <User className="w-[16px] h-[16px] text-white" />
          </div>
          <span className="hidden lg:block text-[12px] font-['Sansation'] text-[#132651] text-center min-w-[91px]">
            {user?.name || "Alan Ludewig"}
          </span>
          <ChevronDown className="w-[16px] h-[16px] text-[#132651]" />
        </div>
      </div>
    </header>
  );
}
