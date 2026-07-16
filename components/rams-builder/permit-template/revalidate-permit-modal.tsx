"use client";

import React from "react";
import { 
  X,
  ShieldCheck,
  Info,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface RevalidatePermitModalProps {
  onClose: () => void;
}

export function RevalidatePermitModal({ onClose }: RevalidatePermitModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101828]/50 font-['Sansation']">
      <div className="w-[894px] max-w-[95vw] max-h-[90vh] bg-white rounded-[12px] flex flex-col shadow-xl overflow-hidden border-[1.5px] border-[#e3e6ec] relative">
        
        {/* Header (Fixed) */}
        <div className="flex items-center justify-between p-6 shrink-0 relative border-b border-transparent">
          <div className="flex items-center gap-[12px]">
            <div className="size-[40px] bg-[#081a3f] rounded-[4px] flex items-center justify-center shrink-0">
              <ShieldCheck className="size-[24px] text-white" />
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Confirm Permit Revalidation</h2>
              <p className="text-[14px] text-brand-secondary leading-[1.6]">Verification and assessment of permit renewal status.</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-[24px] right-[24px] p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          >
            <X className="size-4 text-brand-secondary" />
          </button>
        </div>

        {/* Modal Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col gap-8 w-full no-scrollbar">
          
          {/* Permit Summary */}
          <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[12px] p-[17px] flex flex-col gap-[16px] w-full">
            <div className="flex items-center gap-[8px]">
              <Info className="size-[14px] text-brand-primary" strokeWidth={2} />
              <span className="text-[14px] text-brand-primary leading-[1.6]">Permit Summary: PTW-2026-0042</span>
            </div>
            <div className="grid grid-cols-2 gap-y-[8px] gap-x-[20px]">
              <div className="flex flex-col gap-[4px] h-[40px]">
                <span className="text-[14px] text-brand-secondary leading-[1.6]">Type</span>
                <span className="text-[14px] text-brand-primary leading-[1.6]">Hot Work (Level 2)</span>
              </div>
              <div className="flex flex-col gap-[4px] h-[40px]">
                <span className="text-[14px] text-brand-secondary leading-[1.6]">Site</span>
                <span className="text-[14px] text-brand-primary leading-[1.6]">Sector B-4 - High Reach Maintenance</span>
              </div>
              <div className="flex flex-col gap-[4px] h-[40px]">
                <span className="text-[14px] text-brand-secondary leading-[1.6]">Holder</span>
                <span className="text-[14px] text-brand-primary leading-[1.6]">M. Thompson (ID: 4421)</span>
              </div>
              <div className="flex flex-col gap-[4px] h-[40px]">
                <span className="text-[14px] text-brand-secondary leading-[1.6]">Issuer</span>
                <span className="text-[14px] text-brand-primary leading-[1.6]">Alan Ludewig</span>
              </div>
              <div className="flex flex-col gap-[4px] h-[40px]">
                <span className="text-[14px] text-brand-secondary leading-[1.6]">Previous Expiry</span>
                <span className="text-[14px] text-[#e7000b] leading-[1.6]">Oct 14, 2023 - 16:00</span>
              </div>
              <div className="flex flex-col gap-[4px] h-[40px]">
                <span className="text-[14px] text-brand-secondary leading-[1.6]">New Validity Date/Time</span>
                <span className="text-[14px] text-[#00a63e] leading-[1.6]">Oct 15, 2023 - 16:00</span>
              </div>
            </div>
          </div>

          {/* Safety Verification Checklist */}
          <div className="flex flex-col gap-[8px] w-full">
            <span className="text-[14px] text-brand-primary leading-[1.6]">Safety Verification Checklist</span>
            <div className="grid grid-cols-2 gap-[8px]">
              
              {/* Row 1 */}
              <div className="border border-[#e3e6ec] rounded-[4px] flex items-center gap-[11px] py-[13px] px-[12px] h-[46px]">
                <div className="size-[22px] bg-[#001137] rounded-[2px] flex items-center justify-center shrink-0">
                  <Check className="size-[14px] text-white" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-[#191c1e] font-['Hanken_Grotesk']">Site conditions reviewed</span>
              </div>
              <div className="border border-[#e3e6ec] rounded-[4px] flex items-center gap-[11px] py-[13px] px-[12px] h-[46px]">
                <div className="size-[22px] bg-[#001137] rounded-[2px] flex items-center justify-center shrink-0">
                  <Check className="size-[14px] text-white" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-[#191c1e] font-['Hanken_Grotesk']">Hazards and controls remain valid</span>
              </div>

              {/* Row 2 */}
              <div className="border border-[#e3e6ec] rounded-[4px] flex items-center gap-[11px] py-[13px] px-[12px] h-[46px]">
                <div className="size-[22px] bg-[#001137] rounded-[2px] flex items-center justify-center shrink-0">
                  <Check className="size-[14px] text-white" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-[#191c1e] font-['Hanken_Grotesk']">Required safety records current</span>
              </div>
              <div className="border border-[#e3e6ec] rounded-[4px] flex items-center gap-[11px] py-[13px] px-[12px] h-[46px]">
                <div className="size-[22px] bg-[#001137] rounded-[2px] flex items-center justify-center shrink-0">
                  <Check className="size-[14px] text-white" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-[#191c1e] font-['Hanken_Grotesk']">Permit holder remains assigned</span>
              </div>

              {/* Row 3 */}
              <div className="border border-[#e3e6ec] rounded-[4px] flex items-center gap-[11px] py-[13px] px-[12px] h-[46px]">
                <div className="size-[22px] bg-[#001137] rounded-[2px] flex items-center justify-center shrink-0">
                  <Check className="size-[14px] text-white" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-[#191c1e] font-['Hanken_Grotesk']">Permit issuer authorisation valid</span>
              </div>
              <div className="border border-[#e3e6ec] rounded-[4px] flex items-center gap-[11px] py-[13px] px-[12px] h-[46px]">
                <div className="size-[22px] bg-[#001137] rounded-[2px] flex items-center justify-center shrink-0">
                  <Check className="size-[14px] text-white" strokeWidth={3} />
                </div>
                <span className="text-[13px] text-[#191c1e] font-['Hanken_Grotesk']">PPE/emergency arrangements confirmed</span>
              </div>

            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-y-[24px] gap-x-[20px] w-full mt-2">
            
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Revalidated By</label>
              <input 
                type="text" 
                value="Alan Ludewig" 
                readOnly 
                className="w-full border border-[#e3e6ec] rounded-[6px] px-[17px] h-[51px] text-[14px] text-brand-primary focus:outline-none" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Revalidation Date / Time</label>
              <input 
                type="text" 
                value="10/14/2023, 02:30 PM" 
                readOnly 
                className="w-full border border-[#e3e6ec] rounded-[6px] px-[17px] h-[51px] text-[14px] text-brand-primary focus:outline-none" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Status Selection</label>
              <div className="flex items-center gap-2 w-full h-[51px]">
                <div className="bg-[#f3f5f8] border-2 border-brand-primary rounded-[6px] px-[18px] flex-1 h-full flex items-center justify-center gap-2 cursor-pointer">
                  <Check className="size-[14px] text-brand-primary" strokeWidth={3} />
                  <span className="text-[14px] text-brand-primary font-bold">Active</span>
                </div>
                <div className="border border-[#e3e6ec] rounded-[6px] px-[17px] flex-1 h-full flex items-center justify-center cursor-pointer hover:bg-gray-50">
                  <span className="text-[14px] text-brand-secondary">With Conditions</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">New Expiry Date / Time</label>
              <input 
                type="text" 
                value="10/14/2023, 04:00 PM" 
                readOnly 
                className="w-full border border-[#e3e6ec] rounded-[6px] px-[17px] h-[51px] text-[14px] text-brand-primary focus:outline-none" 
              />
            </div>

            <div className="flex flex-col gap-2 col-span-2">
              <label className="text-[14px] text-brand-primary">Revalidation Notes</label>
              <textarea 
                placeholder="Enter any specific notes about the revalidation process..."
                className="w-full border border-[#c5c6d0] rounded-[6px] px-[17px] py-[13px] min-h-[116px] text-[14px] text-brand-primary placeholder:text-[#6b7280] focus:outline-none resize-none font-['Hanken_Grotesk']"
              />
            </div>

          </div>
        </div>

        {/* Footer (Fixed) */}
        <div className="flex items-center p-6 shrink-0 mt-auto border-t border-transparent">
          <Button 
            className="h-[34px] w-[147px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90"
            onClick={onClose}
          >
            Confirm Revalidation
          </Button>
        </div>

      </div>
    </div>
  );
}
