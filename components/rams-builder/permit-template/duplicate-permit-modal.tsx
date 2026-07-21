"use client";

import React from "react";
import { X, Copy, ChevronDown, Search, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DuplicatePermitModalProps {
  onClose: () => void;
}

export function DuplicatePermitModal({ onClose }: DuplicatePermitModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] w-full max-w-223.5 max-h-[95vh] flex flex-col relative shadow-xl overflow-hidden">
        
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
            <div className="flex items-center gap-3 shrink-0">
              <div className="size-10 rounded bg-[#dae2ff] flex items-center justify-center shrink-0">
                <Copy className="size-5 text-brand-primary" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h2 className="text-[20px] font-bold text-brand-primary leading-tight">
                  Duplicate Permit
                </h2>
                <p className="text-[14px] text-brand-secondary leading-tight">
                  Create a new permit based on an existing reference
                </p>
              </div>
            </div>

            {/* Permit Summary */}
            <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[12px] p-4.25 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="size-3 border border-brand-secondary rounded-sm flex items-center justify-center">
                  <span className="text-[8px] font-bold text-brand-secondary">i</span>
                </div>
                <span className="text-[14px] text-brand-primary">Permit Summary: PTW-2026-0042</span>
              </div>
              
              <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Source Permit Ref</span>
                  <span className="text-[14px] text-brand-primary">PTW-2026-0042</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Permit Type</span>
                  <span className="text-[14px] text-brand-primary">Hot Work (Level 1)</span>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-[14px] text-brand-secondary">Source Status</span>
                  <span className="bg-[#00bc7d] text-white text-[12px] px-2 py-0.5 rounded-[6px]">
                    Completed
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Project/Site</span>
                  <span className="text-[14px] text-brand-primary">West Wing Expansion Phase 2</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Previous Holder</span>
                  <span className="text-[14px] text-brand-primary">Mark Stephenson (Site Lead)</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary">Previous Validity</span>
                  <span className="text-[14px] text-brand-primary">12 Oct 2025 - 15 Oct 2025</span>
                </div>
              </div>
            </div>

            {/* Fields Grid */}
            <div className="flex flex-col gap-5">
              
              <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">New Permit Reference</label>
                  <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4 flex items-center bg-white">
                    <span className="text-[14px] text-brand-primary">PTW-2026-0089</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">Reason for Duplicate</label>
                  <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4 flex items-center justify-between bg-white cursor-pointer">
                    <span className="text-[14px] text-brand-primary">Repeat Work</span>
                    <ChevronDown className="size-4.5 text-[#a3acba]" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">New Project / Site</label>
                  <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4 flex items-center bg-white cursor-text">
                    <span className="text-[14px] text-[#a3acba]">Search or Enter Project</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">New Work Area</label>
                  <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4 flex items-center bg-white cursor-text">
                    <span className="text-[14px] text-[#a3acba]">Specific Floor/Zone</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-[14px] text-brand-primary">New Permit Holder</label>
                <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4 flex items-center gap-3 bg-white cursor-text">
                  <Search className="size-4.5 text-[#a3acba]" />
                  <span className="text-[14px] text-[#a3acba]">Search internal users...</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">New Start Date/Time</label>
                  <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4 flex items-center bg-white cursor-text">
                    <span className="text-[14px] text-[#a3acba]">mm/dd/yyyy</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">New Expiry Date/Time</label>
                  <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] h-12.75 px-4 flex items-center bg-white cursor-text">
                    <span className="text-[14px] text-[#a3acba]">mm/dd/yyyy</span>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Select Data to Duplicate Section */}
            <div className="flex flex-col gap-4 pb-4">
              <h4 className="text-[16px] font-bold text-brand-primary">Select Data to Duplicate</h4>
              
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                
                {[
                  "Copy Permit Type",
                  "Copy Job / Site Details",
                  "Copy Hazards & Controls",
                  "Copy Safety Records",
                  "Copy Authorisation Roles",
                  "Copy Validity Rules",
                  "Copy Supporting Attachments"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 cursor-pointer">
                    <div className="bg-[#001137] rounded-sm size-4.5 flex items-center justify-center shrink-0">
                      <CheckSquare className="size-4 text-white" />
                    </div>
                    <span className="text-[14px] text-brand-primary">{item}</span>
                  </div>
                ))}
                
                <div className="flex items-center gap-3 opacity-50 cursor-not-allowed">
                  <div className="bg-white border border-[#757780] rounded-sm size-4.5 shrink-0" />
                  <div className="flex items-center gap-1">
                    <span className="text-[14px] text-brand-primary">Copy Close-Out Notes</span>
                    <span className="text-[12px] text-[#191c1e] italic">(Always Disabled)</span>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
          
          {/* Footer Actions */}
          <div className="flex items-center justify-start shrink-0 mt-2">
            <Button
              className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0a1530]"
            >
              Create Draft Copy
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
