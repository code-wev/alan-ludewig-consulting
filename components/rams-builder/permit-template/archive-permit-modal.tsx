"use client";

import React from "react";
import { X, Archive, Info, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArchivePermitModalProps {
  onClose: () => void;
}

export function ArchivePermitModal({ onClose }: ArchivePermitModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] w-full max-w-299.5 max-h-[90vh] flex flex-col relative shadow-xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[18.5px] right-[18.5px] p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="size-4 text-brand-secondary" />
        </button>

        <div className="p-6 flex flex-col gap-10 h-full overflow-hidden">
          <div className="flex flex-col gap-6 h-full overflow-y-auto pr-2 custom-scrollbar">
            
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="bg-[#fee2e2] rounded flex items-center justify-center size-6 text-[#dc2626]">
                <Archive className="size-3.5" />
              </div>
              <h2 className="text-[20px] font-bold text-brand-primary">Archive Permit?</h2>
            </div>

            {/* Info Box */}
            <div className="bg-[#e4ebfe] border border-[#adc6ff]/50 rounded-[8px] p-4.25 flex items-start gap-4">
              <Info className="size-5 text-brand-primary shrink-0" />
              <p className="text-[14px] text-brand-primary leading-[1.6]">
                Archived permits remain available for audit and compliance history but are not treated as active site permits.
              </p>
            </div>

            {/* Permit Summary */}
            <div className="flex flex-col gap-4">
              <div className="border-b border-[#dfe3eb] pb-2.25">
                <h3 className="text-[14px] font-bold text-brand-primary">Permit Summary</h3>
              </div>
              <div className="grid grid-cols-4 gap-x-5 gap-y-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Reference</span>
                  <span className="text-[14px] text-brand-primary">PTW-2026-0027</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Type</span>
                  <span className="text-[14px] text-brand-primary">Hot Works</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Site</span>
                  <span className="text-[14px] text-brand-primary">London South Hub</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Current Status</span>
                  <span className="text-[14px] text-[#00a63e]">Closed</span>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Holder</span>
                  <span className="text-[14px] text-brand-primary">Sarah Jenkins</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Issuer</span>
                  <span className="text-[14px] text-brand-primary">David Miller</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Issue Date</span>
                  <span className="text-[14px] text-brand-primary">12 Jan 2026</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Close Date</span>
                  <span className="text-[14px] text-brand-primary">14 Jan 2026</span>
                </div>
              </div>
            </div>

            {/* Archive Configuration */}
            <div className="flex flex-col gap-4">
              <div className="pb-2">
                <h3 className="text-[14px] font-bold text-brand-primary">Archive Configuration</h3>
              </div>
              
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-[14px] text-brand-primary">Archive Reason</label>
                  <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4 py-3 flex items-center justify-between bg-white cursor-pointer">
                    <span className="text-[14px] text-brand-primary">Work Completed</span>
                    <ChevronDown className="size-4.5 text-brand-primary" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-[14px] text-brand-primary">Replacement Permit Ref (Optional)</label>
                  <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4 flex items-center bg-white">
                    <input 
                      type="text" 
                      placeholder="e.g. PTW-2026-0045" 
                      className="w-full text-[14px] text-brand-primary placeholder:text-brand-secondary focus:outline-none" 
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[14px] text-brand-primary">Archive Notes</label>
                <textarea 
                  className="border border-[#e3e6ec] rounded-[6px] h-18.75 p-2.25 text-[14px] text-brand-primary placeholder:text-brand-secondary focus:outline-none resize-none"
                  placeholder="Enter any additional context for the archive audit trail..."
                />
              </div>

              {/* Toggle Switch */}
              <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px] h-18.5 p-4.25 flex items-center justify-between">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[14px] text-brand-primary">Keep Permit Available for Audit</span>
                  <span className="text-[14px] text-brand-secondary">Recommended for historical compliance and ISO standards.</span>
                </div>
                <div className="bg-brand-primary h-6 w-11 rounded-full relative cursor-pointer">
                  <div className="absolute bg-white size-5 rounded-full left-5.5 top-0.5 shadow" />
                </div>
              </div>

            </div>
          </div>
          
          {/* Footer */}
          <div className="flex items-center shrink-0 w-full -mt-4">
            <Button
              className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0a1530]"
            >
              Archive Permit
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
