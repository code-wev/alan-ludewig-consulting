"use client";

import React, { useState } from "react";
import { RAMSCreditsModal } from "./rams-credits-modal";
import { SiteVisitModal } from "./site-visit-modal";

export function UsageAndCredits() {
  const [isRAMSModalOpen, setIsRAMSModalOpen] = useState(false);
  const [isSiteVisitModalOpen, setIsSiteVisitModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-[#132651]">Usage & Credits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Card 1 - RAMS Credits (Trigger) */}
          <div 
            className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-2 relative cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setIsRAMSModalOpen(true)}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#2B7FFF] mb-2"></div>
            <div className="text-[28px] font-bold text-[#132651] leading-tight">12</div>
            <div className="text-sm font-bold text-[#132651]">RAMS Credits</div>
            <div className="text-xs text-[#5A6886]">Available</div>
          </div>

          {/* Card 2 - Site Visit Credits (Trigger) */}
          <div 
            className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-2 relative cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setIsSiteVisitModalOpen(true)}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#AD46FF] mb-2"></div>
            <div className="text-[28px] font-bold text-[#132651] leading-tight">2</div>
            <div className="text-sm font-bold text-[#132651]">Site Visit Credits</div>
            <div className="text-xs text-[#5A6886]">Remaining</div>
          </div>

          {/* Card 3 - Saved Files */}
          <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-2 relative">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00BC7D] mb-2"></div>
            <div className="text-[28px] font-bold text-[#132651] leading-tight">24</div>
            <div className="text-sm font-bold text-[#132651]">Saved Files</div>
            <div className="text-xs text-[#5A6886]">Documents</div>
          </div>

        </div>
      </div>

      <RAMSCreditsModal 
        isOpen={isRAMSModalOpen}
        onClose={() => setIsRAMSModalOpen(false)}
      />

      <SiteVisitModal 
        isOpen={isSiteVisitModalOpen}
        onClose={() => setIsSiteVisitModalOpen(false)}
      />
    </>
  );
}
