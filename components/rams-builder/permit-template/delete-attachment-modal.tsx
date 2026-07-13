"use client";

import React, { useEffect } from "react";
import { 
  X, 
  AlertTriangle,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeleteAttachmentModalProps {
  onClose: () => void;
  fileName: string;
}

export function DeleteAttachmentModal({ onClose, fileName }: DeleteAttachmentModalProps) {

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 font-['Sansation'] p-4">
      {/* Modal Container */}
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] w-[846px] max-w-full flex flex-col relative shadow-lg p-[24px]">
        
        <button 
          onClick={onClose}
          className="absolute top-[24px] right-[24px] p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="size-5 text-brand-secondary" />
        </button>

        <div className="flex flex-col gap-[32px] w-full mt-2">
          
          <div className="flex flex-col gap-[24px] w-full pr-[32px]">
            {/* Header Content */}
            <div className="flex gap-[16px] items-start w-full">
              <div className="flex items-center justify-center size-[48px] bg-[#ffdad6] rounded-[12px] shrink-0">
                <AlertTriangle className="size-[24px] text-[#d92d20]" />
              </div>
              <div className="flex flex-col gap-[4px] mt-1">
                <h2 className="text-[20px] font-semibold text-[#191c1e] leading-[28px] font-['Hanken_Grotesk']">
                  Delete Attachment?
                </h2>
                <p className="text-[14px] text-brand-secondary leading-[1.6]">
                  Deleting this attachment will remove it from the current permit and the generated permit document pack.
                </p>
              </div>
            </div>

            {/* Attachment Detail Block */}
            <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px] p-[17px] flex items-center gap-[16px] w-full">
              <div className="bg-white rounded-[3px] size-[40px] flex items-center justify-center shrink-0 shadow-sm border border-[#e3e6ec]">
                <FileText className="size-[20px] text-brand-primary" />
              </div>
              <div className="flex flex-col gap-[6px]">
                <span className="text-[16px] font-bold text-brand-primary leading-[1.6]">
                  {fileName}
                </span>
                <div className="flex items-center gap-[8px]">
                  <div className="bg-white px-[6px] py-[2px] rounded-[3px] border border-[#e3e6ec]">
                    <span className="text-[12px] text-brand-secondary leading-[1.6]">PDF</span>
                  </div>
                  <div className="size-[4px] bg-[#c6c5cf] rounded-full" />
                  <span className="text-[12px] text-brand-secondary leading-[1.6]">Supporting DOCS</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Actions */}
          <div className="flex items-center w-full">
            <Button
              onClick={onClose}
              className="h-[34px] min-w-[135px] rounded-[6px] bg-[#d92d20] text-white font-bold text-[12px] hover:bg-opacity-90"
            >
              Delete Attachment
            </Button>
          </div>

        </div>

      </div>
    </div>
  );
}
