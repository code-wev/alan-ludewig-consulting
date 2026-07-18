"use client";

import React from "react";
import { X, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeleteEvidenceModalProps {
  onClose: () => void;
}

export function DeleteEvidenceModal({ onClose }: DeleteEvidenceModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 font-['Sansation']">
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-[24px] flex flex-col gap-[24px] w-full max-w-[846px] relative shadow-xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-[20px] top-[20px] text-gray-400 hover:text-gray-600"
        >
          <X className="size-[20px]" />
        </button>

        <div className="flex flex-col gap-[32px] w-full">
          <div className="flex flex-col gap-[24px] w-full">
            
            {/* Header Area */}
            <div className="flex gap-[16px] w-full items-start pr-[40px]">
              <div className="size-[48px] bg-[#ffdad6] rounded-[12px] flex items-center justify-center shrink-0">
                <TriangleAlert className="size-[24px] text-[#d92d20]" />
              </div>
              <div className="flex flex-col gap-[4px]">
                <h3 className="text-[20px] font-semibold text-[#191c1e] font-['Hanken_Grotesk']">
                  Delete Close-Out Evidence?
                </h3>
                <p className="text-[14px] text-brand-secondary leading-[1.6]">
                  Deleting this evidence will remove it from the permit close-out record and final document pack.
                </p>
              </div>
            </div>

            {/* Summary Table */}
            <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[12px] p-[17px] w-full flex flex-col gap-[12px]">
              <div className="flex justify-between items-center pb-[9px] border-b border-[#ccdafd]/50">
                <span className="text-[14px] text-[#505e7c]">Evidence File Name</span>
                <span className="text-[14px] text-brand-primary text-right">structural_integrity_check_01.pdf</span>
              </div>
              <div className="flex justify-between items-center pb-[9px] border-b border-[#ccdafd]/50">
                <span className="text-[14px] text-[#505e7c]">Evidence Type</span>
                <span className="text-[14px] text-brand-primary">Site Image</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-[#505e7c]">Related Section</span>
                <span className="text-[14px] text-brand-primary text-right">Final Site Walk & Handover Approval</span>
              </div>
            </div>
            
          </div>

          {/* Action Button */}
          <div className="flex w-full">
            <Button 
              className="bg-[#d92d20] text-white font-bold text-[12px] h-[34px] px-[16px] rounded-[6px] hover:bg-[#d92d20]/90"
            >
              Delete Evidence
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
