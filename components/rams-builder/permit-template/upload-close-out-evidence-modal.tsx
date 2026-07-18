"use client";

import React from "react";
import { 
  X,
  ChevronDown,
  UploadCloud,
  CheckSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface UploadCloseOutEvidenceModalProps {
  onClose: () => void;
}

export function UploadCloseOutEvidenceModal({ onClose }: UploadCloseOutEvidenceModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 font-['Sansation']">
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-[24px] flex flex-col gap-[40px] w-full max-w-[1154px] max-h-[90vh] overflow-y-auto relative shadow-xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-[20px] top-[20px] text-gray-400 hover:text-gray-600"
        >
          <X className="size-[20px]" />
        </button>

        <div className="flex flex-col gap-[24px]">
          {/* Header */}
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-[20px] font-bold text-brand-primary">Upload Close-Out Evidence</h3>
            <p className="text-[16px] text-brand-secondary">Attach supporting documentation for safety compliance.</p>
          </div>

          {/* Scrollable Content -> Form */}
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[16px]">
              {/* Evidence Title */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] text-brand-primary">Evidence Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Zone 4 Final Walkthrough"
                  className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] h-[51px] text-[14px] placeholder:text-brand-primary focus:outline-none w-full"
                />
              </div>

              {/* Type and Related Section */}
              <div className="grid grid-cols-2 gap-[24px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary">Type</label>
                  <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] h-[51px] flex items-center justify-between cursor-pointer">
                    <span className="text-[14px] text-[#a3acba]">Completion Photo</span>
                    <ChevronDown className="size-[18px] text-brand-primary" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary">Related Section</label>
                  <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] h-[51px] flex items-center justify-between cursor-pointer">
                    <span className="text-[14px] text-brand-primary">Excavation & Shoring</span>
                    <ChevronDown className="size-[18px] text-brand-primary" />
                  </div>
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] text-brand-primary">Date</label>
                <input 
                  type="text" 
                  placeholder="mm/dd/yyyy"
                  className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] h-[51px] text-[14px] placeholder:text-[#a3acba] focus:outline-none w-full"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-[4px]">
              <label className="text-[14px] text-brand-primary">Notes</label>
              <textarea 
                placeholder="Enter any specific details or context for this evidence..."
                className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] py-[12px] h-[106px] text-[14px] placeholder:text-[#a3acba] focus:outline-none w-full resize-none"
              />
            </div>

            {/* Evidence Files (Upload Area) */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] text-brand-primary">Evidence Files</label>
              <div className="border-2 border-dashed border-[#e3e6ec] rounded-[6px] bg-white flex flex-col items-center justify-center p-[34px] cursor-pointer hover:bg-gray-50">
                <div className="bg-brand-primary/10 rounded-[12px] size-[48px] flex items-center justify-center mb-[12px]">
                  <UploadCloud className="size-[20px] text-brand-primary" />
                </div>
                <span className="text-[14px] text-brand-primary mb-[4px]">Upload close-out evidence or drag and drop</span>
                <span className="text-[12px] text-brand-secondary">Supports JPG, PNG, PDF (Max 25MB)</span>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center gap-[12px] cursor-pointer">
                <div className="size-[16px] border border-[#c5c6d0] rounded-[2px] bg-white shrink-0" />
                <span className="text-[14px] text-brand-primary">Include in PDF</span>
              </div>
              <div className="flex items-center gap-[12px] cursor-pointer">
                <div className="size-[16px] rounded-[2px] bg-[#001137] flex items-center justify-center shrink-0">
                  <CheckSquare className="size-[10px] text-white" />
                </div>
                <span className="text-[14px] text-brand-primary">Make visible to issuer</span>
              </div>
              <div className="flex items-center gap-[12px] cursor-pointer">
                <div className="size-[16px] border border-[#c5c6d0] rounded-[2px] bg-white shrink-0" />
                <span className="text-[14px] text-brand-primary">Link to action</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-[20px] mt-2">
          <Button 
            variant="outline"
            className="h-[34px] w-[150px] border-brand-primary text-brand-primary font-bold text-[12px]"
          >
            Save Draft
          </Button>
          <Button 
            className="h-[34px] w-[160px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90"
          >
            Upload Evidence
          </Button>
        </div>

      </div>
    </div>
  );
}
