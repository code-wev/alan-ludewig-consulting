"use client";

import { useAuth } from "@/providers/auth-provider";
import { Search, Bell, Settings, ChevronDown, User, Menu } from "lucide-react";

interface DashboardTopbarProps {
  onMenuClick?: () => void;
}

export function DashboardTopbar({ onMenuClick }: DashboardTopbarProps) {
  const { user } = useAuth();

  return (
    <header className="h-20.25 bg-white border-b border-[#e3e6ec] px-8 flex items-center justify-between sticky top-0 z-30 w-full">
      {/* Search Bar */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 text-brand-primary"
        >
          <Menu size={24} />
        </button>
        <div className="hidden md:flex items-center w-[384px] h-9 bg-[#f3f5f8] rounded-[6px] px-4 gap-2">
          <Search className="w-5 h-5 text-brand-secondary" />
          <input
            type="text"
            placeholder="Search ....."
            className="bg-transparent border-none outline-none text-[12px] text-brand-secondary w-full font-['Sansation']"
          />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        {/* Badge */}
        <div className="hidden sm:flex items-center justify-center px-2.25 py-0.5 border-[1.5px] border-[#ad46ff] rounded-[6px]">
          <span className="text-[12px] font-['Sansation'] text-[#ad46ff]">Comply Pro</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-[10px] hover:bg-slate-50">
          <Bell className="w-5 h-5 text-brand-primary" />
          <div className="absolute top-1 right-1 w-2 h-2 bg-[#d92d20] rounded-full" />
        </button>

        {/* Settings */}
        <button className="p-2 rounded-[10px] hover:bg-slate-50">
          <Settings className="w-5 h-5 text-brand-primary" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2 pl-2 pr-2 py-2 rounded-[10px] cursor-pointer hover:bg-slate-50 transition-colors border border-transparent">
          <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="hidden lg:block text-[12px] font-['Sansation'] text-brand-primary text-center min-w-22.75">
            {user?.name || "Alan Ludewig"}
          </span>
          <ChevronDown className="w-4 h-4 text-brand-primary" />
        </div>
      </div>
    </header>
  );
}
