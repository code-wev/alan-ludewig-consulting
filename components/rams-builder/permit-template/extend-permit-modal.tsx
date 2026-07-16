"use client";

import React from "react";
import { 
  X, 
  Calendar,
  ChevronDown,
  AlertTriangle,
  RefreshCw,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExtendPermitModalProps {
  onClose: () => void;
}

export function ExtendPermitModal({ onClose }: ExtendPermitModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101828]/50 font-['Sansation']">
      <div className="w-[1154px] max-w-[95vw] max-h-[90vh] bg-white rounded-[12px] flex flex-col shadow-xl overflow-hidden border-[1.5px] border-[#e3e6ec] relative">
        
        {/* Header (Fixed) */}
        <div className="flex items-center justify-between p-6 shrink-0 relative border-b border-transparent">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Extend Permit Validity</h2>
            <p className="text-[16px] text-brand-secondary leading-[1.6]">Permit ID: #PRMT-2024-0892</p>
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
          
          {/* Warning Panel */}
          <div className="bg-[#fffbeb] border border-[#fde68a] rounded-[6px] p-[17px] flex items-start gap-[12px]">
            <AlertTriangle className="size-[22px] text-[#d97706] shrink-0 mt-0.5 fill-current" />
            <p className="text-[14px] text-[#92400e] leading-[1.6]">
              Permit conditions and site controls must be checked before extending validity. Ensure all safety protocols remain effective for the extended duration.
            </p>
          </div>

          {/* Date & Time Fields */}
          <div className="grid grid-cols-2 gap-5 w-full">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Current Permit Expiry</label>
              <div className="relative">
                <input 
                  type="text" 
                  value="24 Oct 2024, 17:00" 
                  readOnly 
                  className="w-full border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] py-[12px] h-[51px] text-[14px] text-brand-primary focus:outline-none pl-[40px]" 
                />
                <Calendar className="absolute left-[16px] top-1/2 -translate-y-1/2 size-[16px] text-[#a3acba]" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">New Expiry Date & Time</label>
              <div className="relative">
                <input 
                  type="text" 
                  value="24 Oct 2024 , 07:00 PM" 
                  readOnly 
                  className="w-full border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] py-[12px] h-[51px] text-[14px] text-brand-primary focus:outline-none pl-[40px]" 
                />
                <Calendar className="absolute left-[16px] top-1/2 -translate-y-1/2 size-[16px] text-[#a3acba]" />
              </div>
            </div>
          </div>

          {/* Extension Reason */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[14px] text-brand-primary">Extension Reason</label>
            <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] py-[12px] h-[51px] flex justify-between items-center cursor-pointer">
              <span className="text-[14px] text-brand-primary">Work Not Completed</span>
              <ChevronDown className="size-[18px] text-brand-secondary" />
            </div>
          </div>

          {/* Extension Reason Notes */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[14px] text-brand-primary">Extension Reason Notes</label>
            <div className="border border-[#e3e6ec] rounded-[6px] px-[17px] pt-[17px] pb-[37px] h-auto min-h-[100px]">
              <p className="text-[14px] text-[#a3acba] leading-[1.6]">
                Structural welding tasks delayed by 2 hours due to power grid fluctuation. Remaining work estimated to take 90 minutes plus cooling time.
              </p>
            </div>
          </div>

          {/* Compliance Toggles */}
          <div className="flex flex-col gap-6 w-full pt-2">
            
            {/* Revalidation Required */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] bg-[#e6e8ea] rounded-[4px] flex items-center justify-center shrink-0">
                  <RefreshCw className="size-[20px] text-brand-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-primary">Revalidation Required</span>
                  <span className="text-[12px] text-brand-secondary">Site lead must re-check conditions</span>
                </div>
              </div>
              <div className="w-[44px] h-[24px] bg-brand-primary rounded-full relative shrink-0 cursor-pointer">
                <div className="absolute left-[22px] size-[20px] bg-white rounded-full top-[2px]" />
              </div>
            </div>

            {/* Permit Issuer Approval Required */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] bg-[#e6e8ea] rounded-[4px] flex items-center justify-center shrink-0">
                  <ShieldCheck className="size-[20px] text-brand-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-primary">Permit Issuer Approval Required</span>
                  <span className="text-[12px] text-brand-secondary">Mandatory for extensions &gt; 2 hours</span>
                </div>
              </div>
              <div className="w-[44px] h-[24px] bg-brand-primary rounded-full relative shrink-0 cursor-pointer">
                <div className="absolute left-[22px] size-[20px] bg-white rounded-full top-[2px]" />
              </div>
            </div>

            {/* Permit Holder Confirmation Required */}
            <div className="flex items-center justify-between w-full opacity-50">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] bg-[#e6e8ea] rounded-[4px] flex items-center justify-center shrink-0">
                  <UserCheck className="size-[20px] text-brand-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-brand-primary">Permit Holder Confirmation Required</span>
                  <span className="text-[12px] text-brand-secondary">Digital signature from task lead</span>
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
            className="h-[34px] w-[160px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90"
            onClick={onClose}
          >
            Request Extension
          </Button>
        </div>

      </div>
    </div>
  );
}
