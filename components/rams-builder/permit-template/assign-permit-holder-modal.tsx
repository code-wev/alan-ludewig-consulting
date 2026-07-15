"use client";

import React from "react";
import { X, Search, ChevronDown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AssignPermitHolderModalProps {
  onClose: () => void;
}

export function AssignPermitHolderModal({ onClose }: AssignPermitHolderModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101828]/50 font-['Sansation']">
      <div className="w-[880px] max-w-[95vw] max-h-[90vh] bg-white rounded-[12px] flex flex-col shadow-xl overflow-hidden border-[1.5px] border-[#e3e6ec]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 shrink-0 relative">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Assign Permit Holder</h2>
            <p className="text-[16px] text-brand-secondary leading-[1.6]">Specify the person responsible for site safety and team compliance.</p>
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
          
          {/* Basic Info Inputs */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[14px] text-brand-primary leading-[1.6]">
                Search Permit Holder <span className="text-[#d92d20]">*</span>
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#a3acba] pointer-events-none" />
                <input 
                  type="text" 
                  placeholder="Start typing name or employee ID..." 
                  className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 pl-11 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba] font-['Manrope']" 
                />
              </div>
            </div>

            <div className="flex gap-6 w-full">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-[14px] text-brand-primary leading-[1.6]">Company</label>
                <input 
                  type="text" 
                  defaultValue="Ludewig Heavy Industries" 
                  className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary" 
                  readOnly
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-[14px] text-brand-primary leading-[1.6]">Role / Trade</label>
                <input 
                  type="text" 
                  defaultValue="Senior Site Supervisor" 
                  className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary" 
                  readOnly
                />
              </div>
            </div>

            <div className="flex gap-6 w-full">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-[14px] text-brand-primary leading-[1.6]">Related Work Area</label>
                <div className="relative">
                  <input 
                    type="text" 
                    defaultValue="Loading Bay 04 - Northern Zone" 
                    className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 pr-10 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary cursor-pointer" 
                    readOnly
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-primary pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-[14px] text-brand-primary leading-[1.6]">Work Team Size</label>
                <div className="flex items-center gap-3">
                  <input 
                    type="text" 
                    defaultValue="4" 
                    className="flex-1 h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary" 
                  />
                  <span className="text-[14px] text-brand-secondary leading-[1.6]">Personnel</span>
                </div>
              </div>
            </div>

            <div className="flex gap-6 w-full">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-[14px] text-brand-primary leading-[1.6]">Validity Start</label>
                <input 
                  type="text" 
                  placeholder="mm/dd/yyyy" 
                  className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba]" 
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-[14px] text-brand-primary leading-[1.6]">Validity End</label>
                <input 
                  type="text" 
                  placeholder="mm/dd/yyyy" 
                  className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba]" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-[14px] text-brand-primary leading-[1.6]">Holder Notes / Handover Instructions</label>
              <textarea 
                placeholder="Any specific requirements for this holder during the shift..." 
                className="w-full h-[112px] rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba] resize-none" 
              />
            </div>
          </div>

          {/* Required Confirmation Checklist */}
          <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[12px] p-[17px] w-full flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="size-4 text-brand-primary" strokeWidth={2.5} />
              <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6] uppercase">Required Confirmation Checklist</h3>
            </div>
            
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="mt-1 flex shrink-0 items-center justify-center size-4 rounded-[2px] border border-[#c5c6d0] bg-white group-hover:border-brand-primary transition-colors" />
              <span className="text-[14px] text-brand-secondary leading-[1.6]">Individual has received a current site-specific safety induction.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="mt-1 flex shrink-0 items-center justify-center size-4 rounded-[2px] border border-[#c5c6d0] bg-white group-hover:border-brand-primary transition-colors" />
              <span className="text-[14px] text-brand-secondary leading-[1.6]">Holder understands all permit conditions and associated risk controls.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="mt-1 flex shrink-0 items-center justify-center size-4 rounded-[2px] border border-[#c5c6d0] bg-white group-hover:border-brand-primary transition-colors" />
              <span className="text-[14px] text-brand-secondary leading-[1.6]">Holder will remain available on-site for the duration of the permit validity.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="mt-1 flex shrink-0 items-center justify-center size-4 rounded-[2px] border border-[#c5c6d0] bg-white group-hover:border-brand-primary transition-colors" />
              <span className="text-[14px] text-brand-secondary leading-[1.6]">Holder understands authority and responsibility to stop work if conditions change.</span>
            </label>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center gap-5 px-6 py-[16px] shrink-0 bg-white border-t border-[#e3e6ec]">
          <Button variant="outline" className="h-[34px] w-[150px] rounded-[6px] border-brand-primary text-brand-primary font-bold text-[12px] hover:bg-gray-50">
            Validate Competencies
          </Button>
          <Button className="h-[34px] w-[148px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90">
            Assign Permit Holder
          </Button>
        </div>

      </div>
    </div>
  );
}
