"use client";

import React from "react";
import { X, ChevronDown, ShieldCheck, CheckCircle2, Clock, CheckSquare, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AssignPermitIssuerModalProps {
  onClose: () => void;
}

export function AssignPermitIssuerModal({ onClose }: AssignPermitIssuerModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101828]/50 font-['Sansation']">
      <div className="w-[880px] max-w-[95vw] max-h-[90vh] bg-white rounded-[12px] flex flex-col shadow-xl overflow-hidden border-[1.5px] border-[#e3e6ec]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 shrink-0 relative">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Assign Permit Issuer</h2>
            <p className="text-[16px] text-brand-secondary leading-[1.6]">Permit Reference: ALC-2024-0892</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="size-4 text-brand-secondary" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col gap-8 w-full no-scrollbar">
          
          {/* Personnel Selection */}
          <div className="flex gap-6 w-full">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-[14px] text-brand-primary leading-[1.6]">Search Authorised Person</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="Daniel Richardson" 
                  className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 pr-10 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary cursor-pointer" 
                  readOnly
                />
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-primary pointer-events-none" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-[14px] text-brand-primary leading-[1.6]">Required Role</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="Permit Issuer (Fixed)" 
                  className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 pl-10 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary" 
                  readOnly
                />
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-brand-primary pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Competency Verification */}
          <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[12px] p-6 w-full flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-[#e3e6ec] pb-3">
              <CheckCircle2 className="size-4 text-brand-primary" strokeWidth={2.5} />
              <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">Competency Verification</h3>
            </div>
            
            <div className="grid grid-cols-4 gap-6 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-[14px] text-brand-secondary leading-[1.6]">Qualification</span>
                <span className="text-[14px] text-brand-primary leading-[1.6]">Senior Supervisor</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[14px] text-brand-secondary leading-[1.6]">Expiry Date</span>
                <span className="text-[14px] text-brand-primary leading-[1.6]">12 Oct 2025</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[14px] text-brand-secondary leading-[1.6]">Approved Types</span>
                <div className="flex items-center gap-2">
                  <div className="bg-white h-[24px] px-2 rounded-[12px] flex items-center justify-center text-[12px] text-brand-secondary">Hot Work</div>
                  <div className="bg-white h-[24px] px-2 rounded-[12px] flex items-center justify-center text-[12px] text-brand-secondary">Confined</div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[14px] text-brand-secondary leading-[1.6]">Status</span>
                <div className="flex items-center gap-1.5 h-[24px]">
                  <div className="size-2 rounded-full bg-[#10b981]" />
                  <span className="text-[14px] text-[#00a63e] leading-[1.6]">Valid</span>
                </div>
              </div>
            </div>
          </div>

          {/* Assignment Validity Period */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-2 pb-2">
              <Clock className="size-5 text-brand-primary" strokeWidth={2.5} />
              <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">Assignment Validity Period</h3>
            </div>
            
            <div className="flex gap-6 w-full">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-[14px] text-brand-primary leading-[1.6]">Start Date & Time</label>
                <input 
                  type="text" 
                  defaultValue="05/20/2026, 08:00AM" 
                  className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary" 
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-[14px] text-brand-primary leading-[1.6]">End Date & Time</label>
                <input 
                  type="text" 
                  defaultValue="05/20/2026, 08:00AM" 
                  className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <label className="text-[14px] text-brand-primary leading-[1.6]">Issuer Notes / Limitations</label>
              <textarea 
                placeholder="Enter specific instructions or site-specific constraints for the issuer..." 
                className="w-full h-[90px] rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba] resize-none" 
              />
            </div>
          </div>

          {/* Authorisation Checklist */}
          <div className="bg-[#f3f5f8] border-2 border-dashed border-[#e3e6ec] rounded-[12px] p-6 w-full flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-5 text-[#d92d20]" strokeWidth={2.5} />
              <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">Authorisation Checklist</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-[#e3e6ec] h-[74px] rounded-[6px] flex items-center gap-3 p-[13px]">
                <CheckSquare className="size-5 text-black shrink-0" strokeWidth={2.5} />
                <span className="text-[14px] text-brand-primary leading-[1.6]">Competency verified against central training register</span>
              </div>
              <div className="bg-white border border-[#e3e6ec] h-[74px] rounded-[6px] flex items-center gap-3 p-[13px]">
                <CheckSquare className="size-5 text-black shrink-0" strokeWidth={2.5} />
                <span className="text-[14px] text-brand-primary leading-[1.6]">Permit type specific authorisation confirmed</span>
              </div>
              <div className="bg-white border border-[#e3e6ec] h-[74px] rounded-[6px] flex items-center gap-3 p-[13px]">
                <Square className="size-5 text-[#a3acba] shrink-0" />
                <span className="text-[14px] text-brand-primary leading-[1.6]">Available for the full duration of validity period</span>
              </div>
              <div className="bg-white border border-[#e3e6ec] h-[74px] rounded-[6px] flex items-center gap-3 p-[13px]">
                <Square className="size-5 text-[#a3acba] shrink-0" />
                <span className="text-[14px] text-brand-primary leading-[1.6]">Recent site conditions and hazards reviewed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center px-6 py-[16px] shrink-0 bg-white border-t border-[#e3e6ec]">
          <Button className="h-[34px] w-[160px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90">
            Assign Permit Issuer
          </Button>
        </div>

      </div>
    </div>
  );
}
