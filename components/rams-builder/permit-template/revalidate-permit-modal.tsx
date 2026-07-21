"use client";

import React from "react";
import { X, ChevronDown, Search, CloudUpload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RevalidatePermitModalProps {
  onClose: () => void;
}

export function RevalidatePermitModal({ onClose }: RevalidatePermitModalProps) {
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

        <div className="p-6 flex flex-col gap-6 h-full overflow-hidden">
          
          {/* Header */}
          <div className="flex flex-col gap-1.5 shrink-0 pr-8">
            <h2 className="text-[20px] font-bold text-brand-primary">
              Revalidate Permit
            </h2>
            <p className="text-[16px] text-brand-secondary">
              Step 5 Validity Period <span className="text-brand-primary">• PER-2024-0012</span>
            </p>
          </div>

          <div className="flex flex-col gap-6 h-full overflow-y-auto pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            
            {/* Revalidation Schedule */}
            <div className="flex flex-col gap-4">
              
              <div className="bg-[#f3f5f8] rounded-[6px] p-4 flex items-center justify-between">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[16px] font-bold text-brand-primary">Revalidation Required</span>
                  <span className="text-[14px] text-brand-secondary">Ensure the permit is reviewed at periodic intervals</span>
                </div>
                {/* Toggle */}
                <div className="bg-brand-primary h-6 w-11 rounded-full relative cursor-pointer">
                  <div className="absolute bg-white size-5 rounded-full right-0.5 top-0.5 border border-white" />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-[14px] text-brand-primary">Revalidation Frequency</label>
                  <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4 flex items-center justify-between bg-white cursor-pointer">
                    <span className="text-[14px] text-brand-primary">Every 4 Hours</span>
                    <ChevronDown className="size-4.5 text-[#a3acba]" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-[14px] text-brand-primary">New Revalidation Date / Time</label>
                  <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4 flex items-center bg-white cursor-text">
                    <span className="text-[14px] text-brand-primary">24 Oct 2024 , 02:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Responsible Person</label>
                <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4 flex items-center gap-3 bg-white cursor-text">
                  <Search className="size-4.5 text-[#a3acba]" />
                  <span className="text-[14px] text-[#a3acba]">Search team member...</span>
                </div>
              </div>

            </div>

            {/* Revalidation Checks */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[14px] font-bold text-brand-primary">Revalidation Checks</h3>
              <div className="flex flex-col gap-3">
                {[
                  "Site conditions remain unchanged",
                  "Hazards and controls still valid",
                  "Permit holder remains assigned",
                  "Permit issuer remains available",
                  "PPE confirmed"
                ].map((check, idx) => (
                  <div key={idx} className="border border-[#e3e6ec] rounded-[6px] p-3.25 flex items-center gap-3 bg-white cursor-pointer">
                    <div className="size-5 rounded-xs bg-[#f3f5f8] border border-[#e3e6ec] shrink-0" />
                    <span className="text-[14px] text-brand-primary">{check}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes & Evidence */}
            <div className="flex flex-col gap-4 pb-4">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Revalidation Notes</label>
                <textarea 
                  className="border border-[#e3e6ec] rounded-[6px] h-26.5 p-3.25 text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none resize-none"
                  placeholder="Enter observations or deviations..."
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Evidence Upload</label>
                <div className="border-2 border-[#c5c6d0] border-dashed rounded-lg p-6 flex flex-col items-center gap-1 cursor-pointer hover:bg-slate-50 transition-colors">
                  <CloudUpload className="size-5 text-brand-primary mb-1" />
                  <span className="text-[14px] text-brand-primary">Click to upload or drag and drop</span>
                  <span className="text-[12px] text-brand-secondary">Maximum file size 10MB (JPG, PNG, PDF)</span>
                </div>
              </div>
            </div>

          </div>
          
          {/* Footer Actions */}
          <div className="flex items-center gap-5 shrink-0 mt-2">
            <Button
              variant="outline"
              className="h-8.5 rounded-[6px] border-brand-primary px-4 text-[12px] font-bold text-brand-primary hover:bg-slate-50"
            >
              Save Draft
            </Button>
            <Button
              className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0a1530]"
            >
              Save Revalidation Requirement
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
