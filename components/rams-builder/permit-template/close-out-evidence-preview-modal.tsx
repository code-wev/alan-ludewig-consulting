"use client";

import React from "react";
import { 
  X,
  Download,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  Maximize,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface CloseOutEvidencePreviewModalProps {
  onClose: () => void;
}

export function CloseOutEvidencePreviewModal({ onClose }: CloseOutEvidencePreviewModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 font-['Sansation']">
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-[24px] flex flex-col gap-[40px] w-full max-w-[1250px] max-h-[95vh] overflow-y-auto relative shadow-xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
        
        {/* Close Button & Actions */}
        <div className="absolute right-[20px] top-[20px] flex flex-col items-center gap-[12px]">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="size-[20px]" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <Download className="size-[18px]" />
          </button>
        </div>

        <div className="flex flex-col gap-[24px]">
          {/* Header */}
          <div className="flex flex-col gap-[12px] border-b border-[#e3e6ec] pb-[13px] pr-[40px]">
            <h3 className="text-[20px] font-bold text-brand-primary">structural_integrity_check_01.pdf</h3>
            <div className="flex items-center gap-[12px]">
              <span className="bg-[#ccdafd] text-brand-secondary text-[12px] px-[8px] py-[2px] rounded-[3px]">Compliance Review</span>
              <span className="bg-[#f3f5f8] text-brand-secondary text-[12px] px-[8px] py-[2px] rounded-[3px]">Risk Controls / PPE</span>
              <span className="text-brand-secondary text-[12px]">Oct 24, 2024</span>
            </div>
          </div>

          {/* Main Layout 75/25 */}
          <div className="flex w-full h-[600px] border border-[#e3e6ec] rounded-[8px] overflow-hidden">
            
            {/* Left: Document Preview */}
            <div className="w-[75%] bg-[#f3f5f8] border-r border-[#e3e6ec] relative flex items-center justify-center p-[48px]">
              {/* Document Toolbar */}
              <div className="absolute top-[16px] bg-brand-primary rounded-[12px] px-[16px] py-[8px] flex items-center gap-[24px] shadow-lg">
                <div className="flex items-center gap-[8px]">
                  <ZoomOut className="size-[14px] text-white cursor-pointer" />
                  <span className="text-white text-[12px]">100%</span>
                  <ZoomIn className="size-[14px] text-white cursor-pointer" />
                </div>
                <div className="w-px h-[16px] bg-white/20" />
                <div className="flex items-center gap-[16px]">
                  <ChevronLeft className="size-[14px] text-white cursor-pointer" />
                  <span className="text-white text-[12px]">PAGE 1 OF 4</span>
                  <ChevronRight className="size-[14px] text-white cursor-pointer" />
                </div>
                <div className="w-px h-[16px] bg-white/20" />
                <Maximize className="size-[14px] text-white cursor-pointer" />
              </div>

              {/* Simulated PDF */}
              <div className="bg-white shadow-xl w-[450px] h-full flex flex-col relative overflow-hidden">
                <div className="p-[40px] opacity-40 flex flex-col gap-[20px]">
                  <div className="w-[150px] h-[20px] bg-gray-200" />
                  <div className="w-full h-[10px] bg-gray-200 mt-[10px]" />
                  <div className="w-full h-[10px] bg-gray-200" />
                  <div className="w-[80%] h-[10px] bg-gray-200" />
                  <div className="flex gap-[20px] mt-[20px]">
                    <div className="w-1/2 h-[100px] border border-dashed border-gray-400 bg-gray-100" />
                    <div className="w-1/2 h-[100px] border border-dashed border-gray-400 bg-gray-100" />
                  </div>
                  <div className="w-full h-[80px] bg-gray-200 mt-[20px]" />
                </div>

                {/* Locked Overlay */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex flex-col items-center justify-center gap-[16px]">
                  <FileText className="size-[40px] text-brand-secondary opacity-30" />
                  <span className="text-brand-secondary text-[14px]">Document Preview Locked</span>
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="w-[25%] bg-white flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
              <div className="p-[24px] flex flex-col gap-[32px]">
                
                {/* Details */}
                <div className="flex flex-col gap-[16px]">
                  <h4 className="text-[16px] font-bold text-brand-primary">Evidence Details</h4>
                  
                  <div className="flex flex-col gap-[16px]">
                    <div className="flex flex-col">
                      <span className="text-[14px] text-brand-secondary">Type</span>
                      <span className="text-[14px] text-brand-primary">Adobe PDF</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] text-brand-secondary">Storage Location</span>
                      <span className="text-[14px] text-brand-primary truncate">SharePoint / Compliance / 2024 / Q4</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] text-brand-secondary">Uploaded By</span>
                      <span className="text-[14px] text-brand-primary">M. Henderson</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] text-brand-secondary">File Size</span>
                      <span className="text-[14px] text-brand-primary">2.4 MB</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] text-brand-secondary">Status</span>
                      <div className="flex items-center gap-[8px] mt-[4px]">
                        <div className="size-[8px] rounded-full bg-[#f59e0b]" />
                        <span className="text-[14px] text-[#b45309]">Awaiting Approval</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Audit Notes */}
                <div className="flex flex-col gap-[8px] pt-[25px] border-t border-[#e3e6ec]">
                  <h4 className="text-[16px] font-bold text-brand-primary">Audit Notes</h4>
                  <p className="text-[14px] text-brand-secondary leading-[1.6]">
                    &quot;Evidence confirms correct PPE selection (Class 3 High-Vis) for roadside work. Structural check complete as per BS-8001 standards. Visual inspection shows no fractures.&quot;
                  </p>
                </div>

                {/* Reference Thumbnail */}
                <div className="flex flex-col gap-[12px] pt-[25px] border-t border-[#e3e6ec]">
                  <h4 className="text-[16px] font-bold text-brand-primary">Reference Thumbnail</h4>
                  <div className="w-full h-[140px] bg-gray-200 border border-[#e3e6ec] rounded-[6px] overflow-hidden flex items-center justify-center">
                     <span className="text-gray-400 text-sm">Image Thumbnail</span>
                  </div>
                  <Button variant="outline" className="w-full h-[34px] border-brand-primary text-brand-primary font-bold text-[12px]">
                    View Version History
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-[20px]">
            <Button 
              variant="outline"
              className="h-[34px] w-[150px] border-brand-primary text-brand-primary font-bold text-[12px]"
            >
              Replace Evidence
            </Button>
            <Button 
              className="h-[34px] w-[160px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90"
            >
              Download Evidence
            </Button>
          </div>
          <Button 
            className="h-[34px] w-[150px] bg-[#d92d20] text-white font-bold text-[12px] hover:bg-[#d92d20]/90"
          >
            Delete Evidence
          </Button>
        </div>

      </div>
    </div>
  );
}
