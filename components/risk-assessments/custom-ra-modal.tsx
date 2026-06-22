"use client";

import { X, Info, ChevronDown, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CustomRAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomRAModal({ isOpen, onClose }: CustomRAModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto no-scrollbar">
      <div 
        className="relative bg-white border-[1.5px] border-[#E3E6EC] rounded-xl w-full max-w-211.5 max-h-[90vh] overflow-y-auto p-5 flex flex-col gap-5 shadow-lg my-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between sticky top-0 bg-white z-10 pb-2">
          <h2 className="text-[20px] font-bold text-brand-primary font-sans">Request a Custom Template</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-full text-[#5A6886] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col gap-5">
          {/* Main Form Content */}
          <div className="flex flex-col gap-3">
            
            {/* Info Box */}
            <div className="flex items-start gap-4 p-3 bg-[#E4EBFE] border border-[#ADC6FF80] rounded-lg">
              <div className="pt-0.5">
                <Info className="w-5 h-5 text-brand-primary" />
              </div>
              <p className="text-sm text-brand-primary font-sans">
                If you cannot find the document you need in the library, submit a request and we will let you know if it can be created or added.
              </p>
            </div>

            {/* Template / Document Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-brand-primary font-sans">Template / Document Name</label>
              <input 
                type="text" 
                placeholder="e.g. Warehouse Fire Safety Checklist"
                className="w-full px-4 py-2 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-brand-primary placeholder:text-[#A3ACBA] outline-none focus:border-brand-primary transition-colors"
              />
            </div>

            {/* Type & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#191C1E] font-sans">Template Type</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-brand-primary outline-none appearance-none bg-white focus:border-brand-primary transition-colors">
                    <option>Risk Assessment</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-primary pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-brand-primary font-sans">Related Category</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-brand-primary outline-none appearance-none bg-white focus:border-brand-primary transition-colors">
                    <option>Risk Assessments</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-primary pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Industry & Project */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#191C1E] font-sans">Industry / Work Area</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-brand-primary outline-none appearance-none bg-white focus:border-brand-primary transition-colors">
                    <option>e.g. Logistics & Storage</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-primary pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-brand-primary font-sans">Project / Location</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-brand-primary outline-none appearance-none bg-white focus:border-brand-primary transition-colors">
                    <option>Main HQ - Bristol</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-primary pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Request Details */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-brand-primary font-sans">Request Details</label>
              <textarea 
                placeholder="Describe the specific requirements or sections you need included..."
                className="w-full h-15 px-4 py-2 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-brand-primary placeholder:text-[#A3ACBA] outline-none resize-none focus:border-brand-primary transition-colors"
              />
            </div>

            {/* Upload Supporting File */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-brand-primary font-sans">Upload Supporting File</label>
              <div className="flex flex-col items-center justify-center p-4 gap-1 border-2 border-dashed border-[#E3E6EC] rounded-lg bg-slate-50/50 hover:bg-slate-50 cursor-pointer transition-colors">
                <Upload className="w-5 h-5 text-brand-primary mb-1" />
                <span className="text-sm font-bold text-brand-primary font-sans">Drag and drop your files here, or browse</span>
                <span className="text-xs text-[#5A6886] font-sans">Supports PDF, DOCX, XLSX (Max 10MB)</span>
              </div>
            </div>

            {/* Priority & Output Format */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-brand-primary font-sans">Priority</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-brand-primary outline-none appearance-none bg-white focus:border-brand-primary transition-colors">
                    <option>Normal</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-primary pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 justify-center">
                <label className="text-sm text-brand-primary font-sans mb-0.5">Preferred Output Format</label>
                <div className="flex flex-wrap items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-[#D9DADC] text-[#1E3A8A] focus:ring-[#1E3A8A]" />
                    <span className="text-xs text-[#5A6886] font-sans">Word</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-[#D9DADC] text-[#1E3A8A] focus:ring-[#1E3A8A]" />
                    <span className="text-xs text-[#5A6886] font-sans">Excel</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-[#D9DADC] text-[#1E3A8A] focus:ring-[#1E3A8A]" />
                    <span className="text-xs text-brand-primary font-sans">PDF</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-[#D9DADC] text-[#1E3A8A] focus:ring-[#1E3A8A]" />
                    <span className="text-xs text-[#5A6886] font-sans">Online Form</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-2 mt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-4 h-4 rounded border border-[#E3E6EC] flex items-center justify-center group-hover:border-brand-primary transition-colors bg-white">
                </div>
                <span className="text-sm text-[#5A6886] font-sans">Save this request to My Saved Files</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-4 h-4 rounded border border-[#E3E6EC] flex items-center justify-center group-hover:border-brand-primary transition-colors bg-white">
                </div>
                <span className="text-sm text-[#5A6886] font-sans">I understand this is a request and may require review before creation.</span>
              </label>
            </div>

            {/* Footer Note */}
            <div className="pt-3 mt-1 border-t border-[#E3E6EC]">
              <p className="text-[11px] text-[#5A6886] font-sans leading-tight">
                * Custom template requests may require approval, additional time or an add-on purchase depending on the scope.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="sticky bottom-0 bg-white pt-2 pb-1">
            <Button className="w-full h-11 bg-brand-primary text-white font-bold hover:bg-brand-primary/90 rounded-lg text-sm">
              Submit Request
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
