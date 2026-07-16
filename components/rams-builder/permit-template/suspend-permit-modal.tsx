"use client";

import React from "react";
import { 
  X,
  ChevronDown,
  RefreshCw,
  Bell,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuspendPermitModalProps {
  onClose: () => void;
}

export function SuspendPermitModal({ onClose }: SuspendPermitModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101828]/50 font-['Sansation']">
      <div className="w-[1154px] max-w-[95vw] max-h-[90vh] bg-white rounded-[12px] flex flex-col shadow-xl overflow-hidden border-[1.5px] border-[#e3e6ec] relative">
        
        {/* Header (Fixed) */}
        <div className="flex items-center justify-between p-6 shrink-0 relative border-b border-transparent">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Add Permit Suspension Condition</h2>
            <p className="text-[16px] text-brand-secondary leading-[1.6]">Define automatic triggers that necessitate a temporary halt in work activities.</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-[24px] right-[24px] p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          >
            <X className="size-4 text-brand-secondary" />
          </button>
        </div>

        {/* Modal Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col gap-6 w-full no-scrollbar">
          
          <div className="flex flex-col gap-6 w-full">
            {/* Suspension Trigger */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[14px] text-brand-primary">Suspension Trigger (Required)</label>
              <input 
                type="text" 
                defaultValue="e.g., High Wind Speeds > 25mph" 
                className="w-full border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] py-[12px] h-[51px] text-[14px] text-brand-primary focus:outline-none" 
              />
            </div>

            {/* Category & Responsible Role */}
            <div className="grid grid-cols-2 gap-5 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Category</label>
                <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] py-[12px] h-[51px] flex justify-between items-center cursor-pointer">
                  <span className="text-[14px] text-[#191c1e]">Weather</span>
                  <ChevronDown className="size-[18px] text-brand-secondary" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Responsible Role</label>
                <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] py-[12px] h-[51px] flex justify-between items-center cursor-pointer">
                  <span className="text-[14px] text-[#191c1e]">HSE Supervisor</span>
                  <ChevronDown className="size-[18px] text-brand-secondary" />
                </div>
              </div>
            </div>

            {/* Condition Description */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[14px] text-brand-primary">Condition Description</label>
              <textarea 
                placeholder="Explain the specific breach or event that triggers suspension..."
                className="w-full border border-[#e3e6ec] rounded-[6px] px-[17px] py-[13px] min-h-[116px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none resize-none"
              />
            </div>

            {/* Required Action Before Restart */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[14px] text-brand-primary">Required Action Before Restart</label>
              <textarea 
                placeholder="Define the steps required to validate safety before work resumes..."
                className="w-full border border-[#e3e6ec] rounded-[6px] px-[17px] py-[13px] min-h-[116px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none resize-none"
              />
            </div>
          </div>

          {/* Toggles Section */}
          <div className="bg-[#f2f4f6] rounded-[8px] p-6 flex flex-col gap-4 w-full">
            
            {/* Revalidation Required */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-[12px]">
                <div className="size-[20px] flex items-center justify-center shrink-0">
                  <RefreshCw className="size-[20px] text-brand-primary" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-primary leading-[1.6]">Revalidation Required</span>
                  <span className="text-[12px] text-brand-secondary leading-[1.6]">Manual permit sign-off after trigger clearance</span>
                </div>
              </div>
              <div className="w-[44px] h-[24px] bg-brand-primary rounded-full relative shrink-0 cursor-pointer">
                <div className="absolute left-[22px] size-[20px] bg-white rounded-full top-[2px]" />
              </div>
            </div>

            {/* Notify Permit Holder */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-[12px]">
                <div className="size-[20px] flex items-center justify-center shrink-0">
                  <Bell className="size-[20px] text-brand-primary" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-primary leading-[1.6]">Notify Permit Holder</span>
                  <span className="text-[12px] text-brand-secondary leading-[1.6]">Instant alert via SMS/Email</span>
                </div>
              </div>
              <div className="w-[44px] h-[24px] bg-brand-primary rounded-full relative shrink-0 cursor-pointer">
                <div className="absolute left-[22px] size-[20px] bg-white rounded-full top-[2px]" />
              </div>
            </div>

            {/* Notify Permit Issuer */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-[12px]">
                <div className="size-[20px] flex items-center justify-center shrink-0 opacity-70">
                  <Mail className="size-[20px] text-brand-secondary" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-secondary leading-[1.6]">Notify Permit Issuer</span>
                  <span className="text-[12px] text-[#a3acba] leading-[1.6]">Log entry only, no immediate notification</span>
                </div>
              </div>
              <div className="w-[44px] h-[24px] bg-[#dce0e7] rounded-full relative shrink-0 cursor-not-allowed">
                <div className="absolute left-[2px] size-[20px] bg-white border border-[#dce0e7] rounded-full top-[2px]" />
              </div>
            </div>

          </div>
        </div>

        {/* Footer (Fixed) */}
        <div className="flex items-center gap-5 p-6 shrink-0 mt-auto border-t border-transparent">
          <Button 
            variant="outline" 
            className="h-[34px] w-[150px] rounded-[6px] border-brand-primary text-brand-primary font-bold text-[12px] hover:bg-gray-50"
            onClick={onClose}
          >
            Save Draft
          </Button>
          <Button 
            className="h-[34px] w-[177px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90"
            onClick={onClose}
          >
            Add Suspension Condition
          </Button>
        </div>

      </div>
    </div>
  );
}
