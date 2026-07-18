"use client";

import React, { useState } from "react";
import { 
  X,
  MapPin,
  Calendar,
  Flame,
  CheckCircle2,
  CheckSquare,
  Square
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface IssueNewPermitModalProps {
  onClose: () => void;
}

export function IssueNewPermitModal({ onClose }: IssueNewPermitModalProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 font-['Sansation']">
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-[24px] flex flex-col gap-[40px] w-full max-w-[1200px] max-h-[95vh] overflow-y-auto relative shadow-xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-[20px] top-[20px] text-gray-400 hover:text-gray-600"
        >
          <X className="size-[20px]" />
        </button>

        <div className="flex flex-col gap-[24px] w-full">
          {/* Header Area */}
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-[20px] font-bold text-brand-primary">Issue Permit?</h3>
            <p className="text-[16px] text-brand-secondary">
              Step 6: Close Out Review • Path Clearance
            </p>
          </div>

          <div className="flex flex-col gap-[40px] w-full">
            {/* Permit Summary Card */}
            <div className="border border-[#e3e6ec] rounded-[12px] shadow-sm w-full flex flex-col">
              
              {/* Card Header */}
              <div className="p-[16px] flex justify-between items-start">
                <div className="flex flex-col gap-[3px]">
                  <span className="text-[14px] text-brand-secondary">Permit Reference</span>
                  <span className="text-[14px] text-brand-primary">PRMT-2024-0892</span>
                </div>
                <div className="bg-[#ffdad6] rounded-[12px] px-[12px] py-[4px] flex items-center gap-[4px]">
                  <Flame className="size-[12px] text-[#93000a]" />
                  <span className="text-[11px] font-bold text-[#93000a] tracking-[0.55px]">
                    HOT WORK (HIGH RISK)
                  </span>
                </div>
              </div>

              {/* Grid Details */}
              <div className="border-t border-b border-[#eceef0] py-[17px] px-[16px] flex w-full">
                <div className="flex-1 flex flex-col gap-[4px]">
                  <span className="text-[14px] text-brand-secondary">Work Area</span>
                  <div className="flex items-center gap-[6px]">
                    <MapPin className="size-[14px] text-brand-primary" />
                    <span className="text-[14px] text-brand-primary">Facility Zone B - Welding Shop</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-[4px]">
                  <span className="text-[14px] text-brand-secondary">Active Dates</span>
                  <div className="flex items-center gap-[6px]">
                    <Calendar className="size-[14px] text-brand-primary" />
                    <span className="text-[14px] text-brand-primary">24 Oct - 26 Oct 2024</span>
                  </div>
                </div>
              </div>

              {/* Personnel & Stats */}
              <div className="p-[16px] flex items-center justify-between w-full">
                <div className="flex items-center gap-[24px]">
                  
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[32px] bg-[#eceef0] rounded-[6px] overflow-hidden shrink-0 border border-[#e3e6ec]">
                      <Image
                        width={100}
                        height={100}
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                        alt="Holder" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <span className="text-[12px] text-brand-secondary">Holder</span>
                      <span className="text-[12px] text-brand-primary">David Sterling</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-[8px]">
                    <div className="size-[32px] bg-[#eceef0] rounded-[6px] overflow-hidden shrink-0 border-2 border-[#b4c5fa]">
                      <Image
                        width={100}
                        height={100}
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                        alt="Issuer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[2px] relative pr-[40px]">
                      <span className="text-[12px] text-brand-secondary">Issuer</span>
                      <div className="flex items-center gap-[6px]">
                        <span className="text-[12px] text-brand-primary">Sarah Jenkins</span>
                        <span className="bg-brand-primary text-white text-[10px] px-[4px] rounded-[3px] absolute right-0">Admin</span>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="flex items-center gap-[16px]">
                  <div className="flex flex-col items-end gap-[2px]">
                    <span className="text-[14px] text-brand-secondary">Risk Controls</span>
                    <span className="text-[14px] text-brand-primary">12 Verified</span>
                  </div>
                  <div className="flex flex-col items-end gap-[2px]">
                    <span className="text-[14px] text-brand-secondary">Records</span>
                    <span className="text-[14px] text-brand-primary">4 Linked</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pre-Issue Verification */}
            <div className="flex flex-col gap-[8px] w-full">
              <h3 className="text-[16px] font-bold text-brand-primary">Pre-Issue Verification</h3>
              
              <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[12px] w-full flex flex-col">
                
                {[
                  "Permit holder assigned and briefed",
                  "Issuer final approval granted",
                  "All site hazards confirmed and mitigated",
                  "Energy isolations verified (LOTO)"
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center justify-between p-[16px] ${idx !== 0 ? 'border-t border-[#e3e6ec]' : ''}`}
                  >
                    <span className="text-[14px] text-brand-primary">{item}</span>
                    <div className="flex items-center gap-[8px]">
                      <span className="text-[12px] text-[#00a63e]">Verified</span>
                      <CheckCircle2 className="size-[15px] text-[#00a63e]" />
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Checkbox */}
            <div 
              className="bg-[#e4ebfe] border border-[#adc6ff]/50 rounded-[8px] p-[17px] flex items-center gap-[16px] cursor-pointer"
              onClick={() => setIsChecked(!isChecked)}
            >
              <div className="shrink-0 flex items-center justify-center">
                {isChecked ? (
                  <CheckSquare className="size-[20px] text-brand-primary" />
                ) : (
                  <Square className="size-[20px] text-brand-primary bg-white rounded-[2px]" />
                )}
              </div>
              <span className="text-[14px] text-brand-secondary select-none">
                I confirm that all permit conditions have been checked and work may begin.
              </span>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-start">
          <Button 
            className="w-[177px] bg-brand-primary text-white font-bold text-[12px] h-[34px] hover:bg-opacity-90"
            disabled={!isChecked}
          >
            Issue Permit
          </Button>
        </div>

      </div>
    </div>
  );
}
