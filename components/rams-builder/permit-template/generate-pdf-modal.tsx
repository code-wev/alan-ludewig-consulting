"use client";

import React from "react";
import { 
  X, 
  CheckCircle2, 
  Flame, 
  Folder, 
  FileText 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface GeneratePdfModalProps {
  onClose: () => void;
}

export function GeneratePdfModal({ onClose }: GeneratePdfModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 font-['Sansation']">
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-[24px] flex flex-col gap-[32px] w-full max-w-[657px] relative shadow-xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-[20px] top-[20px] text-gray-400 hover:text-gray-600"
        >
          <X className="size-[20px]" />
        </button>

        <div className="flex flex-col items-center gap-[32px] w-full mt-[20px]">
          
          {/* Header Area */}
          <div className="flex flex-col items-center gap-[12px] w-full max-w-[504px] text-center">
            <div className="size-[80px] bg-[#e7f3eb] rounded-[12px] flex items-center justify-center mb-[12px]">
              <CheckCircle2 className="size-[40px] text-green-700" />
            </div>
            <h3 className="text-[18px] font-bold text-brand-primary">
              Permit Issued Successfully
            </h3>
            <p className="text-[14px] text-brand-secondary leading-[1.6]">
              Your permit has been generated, reviewed, and finalized in<br />
              accordance with company compliance standards.
            </p>
          </div>

          {/* Permit Detail Card */}
          <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px] p-[17px] w-full flex justify-between items-center">
            <div className="flex gap-[16px] items-center">
              <div className="size-[48px] bg-brand-primary rounded-[2px] flex items-center justify-center shrink-0">
                <Flame className="size-[24px] text-white" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <h4 className="text-[14px] font-bold text-brand-primary">Hot Works Permit</h4>
                <div className="flex items-center gap-[16px] text-[12px] text-brand-secondary">
                  <span>Reference: PER-2024-089</span>
                  <span>Version: v1.0</span>
                </div>
                <span className="text-[12px] text-[#155dfc]">Expires: 25 Oct 2024, 18:00</span>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-[4px]">
              <span className="text-[12px] text-brand-secondary">Status</span>
              <span className="text-[12px] text-[#15803d]">Download Ready</span>
            </div>
          </div>

          {/* Destinations */}
          <div className="flex gap-[16px] w-full mb-[8px]">
            <button className="flex-1 bg-[#f3f5f8] border border-[#e3e6ec] rounded-[4px] p-[13px] flex items-center gap-[12px] hover:bg-gray-100 transition-colors">
              <Folder className="size-[18px] text-brand-primary" />
              <span className="text-[14px] text-brand-primary">My Saved Files</span>
            </button>
            <button className="flex-1 bg-[#f3f5f8] border border-[#e3e6ec] rounded-[4px] p-[13px] flex items-center gap-[12px] hover:bg-gray-100 transition-colors">
              <FileText className="size-[18px] text-brand-primary" />
              <span className="text-[14px] text-brand-primary">Completed Forms</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-[16px] w-full">
            <Button 
              className="flex-1 bg-brand-primary text-white font-bold text-[12px] h-[34px] hover:bg-opacity-90"
            >
              Download PDF
            </Button>
            <Button 
              variant="outline"
              className="flex-1 border-brand-primary text-brand-primary font-bold text-[12px] h-[34px]"
            >
              Issue New Permit
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
