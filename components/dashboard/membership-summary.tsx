"use client";

import React, { useState } from "react";
import { Award, CheckCircle2 } from "lucide-react";
import { MembershipDetailsModal } from "./membership-details-modal";

export function MembershipSummary() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row w-full bg-white rounded-xl border border-[#E3E6EC] p-6 gap-6 items-start md:items-center justify-between">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="bg-[#F3F5F8] p-2 rounded-lg">
                <Award className="w-6 h-6 text-[#132651]" />
              </div>
              <h2 className="text-[18px] font-bold text-[#132651]">Membership Summary</h2>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex bg-[#132651] text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-[#132651]/90 transition-colors"
            >
              View Details
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-2 w-full">
            <div className="flex flex-col">
              <span className="text-xs text-[#5A6886] mb-1">Membership Plan</span>
              <span className="font-bold text-base text-[#132651]">Comply Pro</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-[#5A6886] mb-1">Renewal Date</span>
              <span className="font-bold text-base text-[#132651]">28 June 2026</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-[#5A6886] mb-1">Billing Cycle</span>
              <span className="font-bold text-base text-[#132651]">Monthly</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-[#5A6886] mb-1">Status</span>
              <div className="flex items-center gap-1.5 bg-[#ECFDF5] text-[#0F766E] px-2.5 py-1 rounded-full w-fit">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="text-xs">Active</span>
              </div>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex md:hidden bg-[#132651] text-white px-4 py-2 rounded-md font-bold text-sm w-full justify-center hover:bg-[#132651]/90 transition-colors"
        >
          View Details
        </button>
      </div>

      <MembershipDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
