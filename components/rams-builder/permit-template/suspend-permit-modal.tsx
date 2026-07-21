"use client";

import React from "react";
import { X, AlertTriangle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuspendPermitModalProps {
  onClose: () => void;
}

export function SuspendPermitModal({ onClose }: SuspendPermitModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] w-full max-w-223.5 max-h-[90vh] flex flex-col relative shadow-xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4.5 right-4.5 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="size-4 text-brand-secondary" />
        </button>

        <div className="p-6 flex flex-col gap-8 h-full overflow-hidden">
          <div className="flex flex-col gap-6 h-full overflow-y-auto pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            
            {/* Header */}
            <div className="flex gap-3 items-center">
              <div className="bg-[#fffbeb] rounded-[6px] size-12 flex items-center justify-center shrink-0">
                <AlertTriangle className="size-6 text-[#f59e0b]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h2 className="text-[20px] font-bold text-brand-primary">Suspend Permit?</h2>
                <p className="text-[14px] text-brand-secondary">
                  Initiating formal suspension for PTW-2026-0042.
                </p>
              </div>
            </div>

            {/* Permit Summary */}
            <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[12px] p-4.25">
              <div className="grid grid-cols-2 gap-y-7.5">
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Permit Type</span>
                  <span className="text-[14px] text-brand-primary">Hot Work (Level 3)</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Project/Site</span>
                  <span className="text-[14px] text-brand-primary">Substation 4B / Bristol</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Permit Holder</span>
                  <span className="text-[14px] text-brand-primary">James Henderson</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Current Expiry</span>
                  <span className="text-[14px] text-brand-primary">Today, 18:00</span>
                </div>
              </div>
            </div>

            {/* Input Fields */}
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Suspension Reason</label>
                <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4 flex items-center justify-between bg-white cursor-pointer">
                  <span className="text-[14px] text-[#a3acba]">Select a reason...</span>
                  <ChevronDown className="size-4.5 text-[#a3acba]" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Suspension Notes</label>
                <textarea 
                  className="border border-[#e3e6ec] rounded-[6px] h-21.75 p-4.25 text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none resize-none"
                  placeholder="Provide specific details regarding the safety issue or reason for work stoppage..."
                />
              </div>

              {/* Interactions */}
              <div className="flex flex-col gap-4">
                
                {/* Work Stopped Checkbox */}
                <div className="flex gap-3 items-center h-14">
                  <div className="pt-0.75">
                    <div className="size-5 rounded-xs border border-[#e3e6ec] bg-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] text-brand-primary">Work Stopped Confirmation</span>
                    <span className="text-[12px] text-brand-secondary">I confirm that all activities associated with this permit have ceased immediately.</span>
                  </div>
                </div>

                {/* Toggles */}
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="border border-[#e3e6ec] rounded-[6px] h-12.75 px-3.25 flex items-center justify-between bg-white flex-1">
                      <span className="text-[14px] text-brand-primary">Notify Permit Holder</span>
                      <div className="bg-[#dce0e7] h-6 w-11 rounded-full relative cursor-pointer">
                        <div className="absolute bg-white size-5 rounded-full left-0.5 top-0.5 border border-[#dce0e7]" />
                      </div>
                    </div>
                    <div className="border border-[#e3e6ec] rounded-[6px] h-12.75 px-3.25 flex items-center justify-between bg-white flex-1">
                      <span className="text-[14px] text-brand-primary">Notify Permit Issuer</span>
                      <div className="bg-[#dce0e7] h-6 w-11 rounded-full relative cursor-pointer">
                        <div className="absolute bg-white size-5 rounded-full left-0.5 top-0.5 border border-[#dce0e7]" />
                      </div>
                    </div>
                  </div>
                  <div className="border border-[#e3e6ec] rounded-[6px] h-12.75 px-3.25 flex items-center justify-between bg-white">
                    <span className="text-[14px] text-brand-primary">Revalidation Required</span>
                    <div className="bg-[#dce0e7] h-6 w-11 rounded-full relative cursor-pointer">
                      <div className="absolute bg-white size-5 rounded-full left-0.5 top-0.5 border border-[#dce0e7]" />
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Warning Block */}
              <div className="bg-[#ffdad6]/10 border border-[#ffdad6] rounded-[6px] p-4.25 flex gap-3 items-start">
                <AlertTriangle className="size-4.5 text-[#d92d20] shrink-0 mt-px" />
                <p className="text-[14px] font-semibold text-[#d92d20] leading-5">
                  Suspending this permit means all work covered by this permit must stop until conditions are reviewed and the permit is revalidated.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center shrink-0 w-full justify-start -mt-4">
            <Button
              className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0a1530]"
            >
              Suspend Permit
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
