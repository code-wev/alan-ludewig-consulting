"use client";

import React from "react";
import { X, PenLine, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ClosePermitModalProps {
  onClose: () => void;
}

export function ClosePermitModal({ onClose }: ClosePermitModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] w-full max-w-300.5 max-h-[95vh] flex flex-col relative shadow-xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4.5 right-4.5 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="size-4 text-brand-secondary" />
        </button>

        <div className="p-6 flex flex-col gap-8 h-full overflow-hidden">
          
          <div className="flex flex-col gap-8 h-full overflow-y-auto pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            
            {/* Header */}
            <div className="flex flex-col gap-1.5 shrink-0 pr-8">
              <h2 className="text-[20px] font-bold text-brand-primary leading-tight">
                Close Permit?
              </h2>
              <p className="text-[16px] text-brand-secondary leading-tight">
                Finalizing site safety and work completion records.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[14px] text-brand-primary">Completion Checklist</h3>
              
              <div className="flex flex-col gap-3">
                {[
                  "Work activity completed",
                  "Area made safe",
                  "Tools removed from site",
                  "Isolation removed and equipment tested"
                ].map((item, idx) => (
                  <div key={idx} className="border border-[#e3e6ec] rounded-[6px] p-3.25 flex items-center gap-3 bg-white cursor-pointer hover:bg-slate-50 transition-colors">
                    <div className="size-5 rounded-xs bg-white border border-[#e3e6ec] shrink-0" />
                    <span className="text-[14px] text-brand-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-[14px] text-brand-primary">Close-Out Date/Time</label>
              <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4.25 flex items-center bg-white cursor-text">
                <span className="text-[14px] text-[#a3acba]">07/06/2026, 11:59 AM</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[14px] text-brand-primary">Permit Holder Declaration</label>
                <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4.25 flex items-center justify-between bg-white cursor-text">
                  <span className="text-[14px] text-[#a3acba]">Digital Signature / Name</span>
                  <PenLine className="size-4 text-brand-secondary" />
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-[14px] text-brand-primary">Permit Issuer Declaration</label>
                <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4.25 flex items-center justify-between bg-white cursor-text">
                  <span className="text-[14px] text-[#a3acba]">Digital Signature / Name</span>
                  <ShieldCheck className="size-4.5 text-brand-secondary" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-[14px] text-brand-primary">Outstanding Actions</label>
              <textarea 
                className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-17.25 px-4.25 py-2.75 text-[14px] text-[#6b7280] placeholder:text-[#6b7280] focus:outline-none resize-none bg-white font-['Hanken_Grotesk']"
                placeholder="List any follow-up actions required..."
              />
            </div>

            <div className="flex flex-col gap-2 w-full pb-2">
              <label className="text-[14px] text-brand-primary">Close-Out Notes</label>
              <textarea 
                className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-17.25 px-4.25 py-2.75 text-[14px] text-[#6b7280] placeholder:text-[#6b7280] focus:outline-none resize-none bg-white font-['Hanken_Grotesk']"
                placeholder="Additional observations or handover notes..."
              />
            </div>

          </div>
          
          {/* Footer Actions */}
          <div className="flex items-center justify-start shrink-0 mt-2">
            <Button
              className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0a1530]"
            >
              Close Permit
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
