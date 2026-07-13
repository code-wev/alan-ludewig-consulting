"use client";

import React, { useEffect, useState } from "react";
import { 
  X, 
  FilePlus, 
  Contact, 
  UploadCloud,
  FileText,
  Trash2,
  RefreshCw,
  ChevronDown,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddSupportingDocumentModalProps {
  onClose: () => void;
}

export function AddSupportingDocumentModal({ onClose }: AddSupportingDocumentModalProps) {
  const [includeInPdf, setIncludeInPdf] = useState(false);
  const [showToIssuer, setShowToIssuer] = useState(true);
  const [makeVisible, setMakeVisible] = useState(true);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 font-['Sansation']">
      {/* Modal Container */}
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] w-[846px] max-h-[90vh] flex flex-col relative shadow-lg">
        
        {/* Header */}
        <div className="flex items-center gap-[12px] pt-[24px] px-[32px] pb-[16px] relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-[24px] right-[24px] p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="size-5 text-brand-secondary" />
          </button>
          
          <div className="flex items-center justify-center size-[38px] bg-[#f0f4fa] rounded-[8px]">
            <FilePlus className="size-5 text-brand-primary" />
          </div>
          <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">
            Add New Attachment
          </h2>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto px-[32px] pb-[32px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
          <div className="flex flex-col gap-[24px] w-full">
            
            {/* Section: Identity & Contact (as per Figma screenshot text) */}
            <div className="flex flex-col gap-[16px] w-full">
              <div className="flex items-center gap-2 pb-2 border-b border-transparent">
                <Contact className="size-5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">
                  Identity & Contact
                </h3>
              </div>

              <div className="flex flex-col gap-[8px] w-full">
                <label className="text-[14px] text-brand-primary leading-[1.6]">
                  Attachment Name <span className="text-[#d92d20]">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Site Clearance RAMS v2"
                  className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Type
                  </label>
                  <div className="relative">
                    <select className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary appearance-none bg-white">
                      <option value="rams" selected>RAMS</option>
                      <option value="drawing">Drawing</option>
                      <option value="certificate">Certificate</option>
                    </select>
                    <ChevronDown className="absolute right-[13px] top-1/2 -translate-y-1/2 size-4 text-[#a3acba] pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Related Section
                  </label>
                  <div className="relative">
                    <select className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary appearance-none bg-white">
                      <option value="job-details" selected>Job Details</option>
                      <option value="hazards">Hazards & Controls</option>
                    </select>
                    <ChevronDown className="absolute right-[13px] top-1/2 -translate-y-1/2 size-4 text-[#a3acba] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Reference Number
                  </label>
                  <input 
                    type="text" 
                    placeholder="REF-2023-001"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Revision
                  </label>
                  <input 
                    type="text" 
                    placeholder="v1.2"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[8px] w-full">
                <label className="text-[14px] text-brand-primary leading-[1.6]">
                  Notes
                </label>
                <textarea 
                  placeholder="Additional context regarding this document..."
                  className="w-full min-h-[74px] rounded-[6px] border border-[#e3e6ec] p-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary resize-none"
                />
              </div>

              {/* Upload Dropzone */}
              <div className="border-2 border-[#e3e6ec] border-dashed rounded-[6px] flex flex-col items-center justify-center py-[20px] px-[18px] mt-2 hover:bg-gray-50 cursor-pointer transition-colors">
                <UploadCloud className="size-[22px] text-[#45464e] mb-2" />
                <span className="text-[13px] text-[#45464e] leading-[18px] font-['Manrope']">
                  Click to upload or drag & drop
                </span>
                <span className="text-[9px] text-[#76767f] leading-[13.5px] font-['Manrope'] mt-1">
                  PDF, JPG, PNG (Max 5MB)
                </span>
              </div>

              {/* Uploaded File Preview */}
              <div className="border border-[#e3e6ec] rounded-[6px] flex items-center justify-between p-[11px]">
                <div className="flex items-center gap-3">
                  <div className="size-[32px] rounded-[4px] bg-[rgba(5,15,54,0.1)] flex items-center justify-center">
                    <FileText className="size-[14px] text-brand-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-brand-primary leading-[1.6]">Site_Layout_Final_R2.pdf</span>
                    <span className="text-[12px] text-brand-secondary leading-[1.6]">4.2 MB • Upload Complete</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="size-[28px] rounded-[4px] bg-[#f0f4fa] flex items-center justify-center hover:bg-[#e2eaf5] transition-colors">
                    <RefreshCw className="size-[14px] text-brand-primary" />
                  </button>
                  <button className="size-[28px] rounded-[4px] flex items-center justify-center hover:bg-red-50 transition-colors">
                    <Trash2 className="size-[16px] text-[#d92d20]" />
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-[12px] mt-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div 
                    className={`size-[20px] rounded-[4px] border flex items-center justify-center transition-colors ${includeInPdf ? 'bg-brand-primary border-brand-primary' : 'border-[#e3e6ec] bg-white group-hover:border-brand-primary'}`}
                    onClick={() => setIncludeInPdf(!includeInPdf)}
                  >
                    {includeInPdf && <Check className="size-[14px] text-white" strokeWidth={3} />}
                  </div>
                  <span className="text-[14px] text-brand-secondary leading-[1.6]">Include in PDF permit pack</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div 
                    className={`size-[20px] rounded-[4px] border flex items-center justify-center transition-colors ${showToIssuer ? 'bg-brand-primary border-brand-primary' : 'border-[#e3e6ec] bg-white group-hover:border-brand-primary'}`}
                    onClick={() => setShowToIssuer(!showToIssuer)}
                  >
                    {showToIssuer && <Check className="size-[14px] text-white" strokeWidth={3} />}
                  </div>
                  <span className="text-[14px] text-brand-secondary leading-[1.6]">Show to permit issuer during review</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div 
                    className={`size-[20px] rounded-[4px] border flex items-center justify-center transition-colors ${makeVisible ? 'bg-brand-primary border-brand-primary' : 'border-[#e3e6ec] bg-white group-hover:border-brand-primary'}`}
                    onClick={() => setMakeVisible(!makeVisible)}
                  >
                    {makeVisible && <Check className="size-[14px] text-white" strokeWidth={3} />}
                  </div>
                  <span className="text-[14px] text-brand-secondary leading-[1.6]">Make visible to permit holder in the app</span>
                </label>
              </div>

            </div>

          </div>
          
          {/* Footer Actions */}
          <div className="flex items-center gap-[20px] mt-[32px]">
            <Button
              variant="outline"
              onClick={onClose}
              className="h-[34px] min-w-[150px] rounded-[6px] border-brand-primary text-brand-primary font-bold text-[12px] hover:bg-gray-50"
            >
              Save Draft
            </Button>
            <Button
              onClick={onClose}
              className="h-[34px] min-w-[150px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90"
            >
              Add Attachment
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
