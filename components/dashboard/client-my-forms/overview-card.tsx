"use client";

import React from "react";

interface OverviewCardProps {
  onClick?: () => void;
  icon: React.ReactNode;
  tagText: string;
  tagClass: string;
  title: string;
  value: string;
}

export function OverviewCard({
  onClick,
  icon,
  tagText,
  tagClass,
  title,
  value,
}: OverviewCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-[26px] flex flex-col gap-[8px] items-start w-full hover:bg-slate-50/50 transition cursor-pointer select-none"
    >
      {/* Top Row: Icon & Tag */}
      <div className="w-full h-[36px] flex items-center justify-between">
        <div className="size-[24px] flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className={`rounded-[6px] px-[8px] py-[2px] text-[12px] font-bold text-white shrink-0 ${tagClass}`}>
          {tagText}
        </div>
      </div>

      {/* Title */}
      <div className="w-full h-[20px] flex items-start mt-2">
        <span className="text-[14px] text-[#5a6886] font-medium font-sans leading-[1.6]">
          {title}
        </span>
      </div>

      {/* Value */}
      <div className="w-full h-[36px] flex items-center">
        <span className="text-[24px] font-bold text-[#132651] font-sans leading-[1.6]">
          {value}
        </span>
      </div>
    </div>
  );
}
