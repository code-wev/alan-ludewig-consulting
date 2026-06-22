"use client";

import React, { useState } from "react";
import { SupportModal } from "./support-modal";

export function NeedHelp() {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row w-full p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-[18px] font-bold text-[#132651]">Need help?</h2>
          <p className="text-base text-[#5A6886]">
            Use the Virtual Agent or open the Support Centre for further assistance.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button className="bg-[#132651] text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-[#132651]/90 transition-colors">
            Ask Agent
          </button>
          <button 
            onClick={() => setIsSupportModalOpen(true)}
            className="bg-white border border-[#132651] text-[#132651] px-4 py-2 rounded-md font-bold text-sm hover:bg-gray-50 transition-colors"
          >
            Get Support
          </button>
        </div>
      </div>

      <SupportModal 
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />
    </>
  );
}
