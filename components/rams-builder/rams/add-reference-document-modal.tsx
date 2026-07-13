import React, { useState } from "react";
import { X, Info, ChevronDown, UploadCloud, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AddReferenceDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: any) => void;
}

export function AddReferenceDocumentModal({ isOpen, onClose, onSave }: AddReferenceDocumentModalProps) {
  const [riskLevel, setRiskLevel] = useState("Medium");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[800px] max-w-full bg-white rounded-[12px] shadow-lg border border-[#e3e6ec] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <ClipboardList className="size-6 text-brand-primary" />
              <h2 className="text-[24px] font-bold text-brand-primary">Add RAMS Document</h2>
            </div>
            <p className="text-[14px] text-brand-secondary mt-1">
              Upload reference documentation or build new site-specific requirements.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-brand-secondary hover:text-brand-primary transition-colors mt-1"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 flex flex-col gap-6 overflow-y-auto max-h-[80vh] no-scrollbar">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Document Reference ID</label>
              <input 
                type="text" 
                placeholder="e.g. HSE-PRO-001"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Document Type</label>
              <div className="relative">
                <select className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                  <option>Risk Assessment</option>
                  <option>Method Statement</option>
                  <option>COSHH Assessment</option>
                  <option>Drawing</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Document Title</label>
            <input 
              type="text" 
              placeholder="Full legal title of the document"
              className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Source File</label>
            <div className="w-full flex flex-col items-center justify-center gap-2 rounded-[8px] border-[1.5px] border-dashed border-[#e3e6ec] bg-[#f8fafc] py-12 cursor-pointer hover:border-brand-primary hover:bg-[#f1f5f9] transition-colors">
              <div className="flex items-center justify-center w-12 h-12 rounded-[8px] bg-[#e0e7ff] text-[#4f46e5] mb-2">
                <UploadCloud className="size-6" />
              </div>
              <span className="text-[16px] font-bold text-brand-primary">Click to upload or drag and drop</span>
              <span className="text-[14px] text-brand-secondary">PDF, DOCX or JPG (Max. 10MB)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Related Project Area</label>
              <div className="relative">
                <select className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                  <option>All Areas</option>
                  <option>Ground Floor</option>
                  <option>External</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Risk Level Tag</label>
              <div className="flex items-center gap-3">
                
                <button 
                  onClick={() => setRiskLevel("Low")}
                  className={cn(
                    "h-[51px] flex-1 flex items-center justify-center gap-2 rounded-[6px] border-[1.5px] border-[#e3e6ec] transition-colors",
                    riskLevel === "Low" ? "bg-brand-primary border-brand-primary text-white" : "bg-white text-brand-primary hover:bg-gray-50"
                  )}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></div>
                  <span className="text-[14px]">Low</span>
                </button>
                
                <button 
                  onClick={() => setRiskLevel("Medium")}
                  className={cn(
                    "h-[51px] flex-1 flex items-center justify-center gap-2 rounded-[6px] border-[1.5px] border-[#e3e6ec] transition-colors",
                    riskLevel === "Medium" ? "bg-brand-primary border-brand-primary text-white" : "bg-white text-brand-primary hover:bg-gray-50"
                  )}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]"></div>
                  <span className="text-[14px]">Medium</span>
                </button>
                
                <button 
                  onClick={() => setRiskLevel("High")}
                  className={cn(
                    "h-[51px] flex-1 flex items-center justify-center gap-2 rounded-[6px] border-[1.5px] border-[#e3e6ec] transition-colors",
                    riskLevel === "High" ? "bg-brand-primary border-brand-primary text-white" : "bg-white text-brand-primary hover:bg-gray-50"
                  )}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></div>
                  <span className="text-[14px]">High</span>
                </button>

              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Summary / Scope of Works</label>
            <textarea 
              placeholder="Enter a brief summary of what this document covers..."
              rows={3}
              className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
            />
          </div>

          {/* Compliance Review Info */}
          <div className="flex items-start gap-3 bg-[#eef2ff] border border-[#d6e0ff] rounded-[8px] p-5">
            <Info className="size-5 text-[#1e3a8a] shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="text-[14px] font-bold text-[#1e3a8a]">Compliance Review Required</span>
              <p className="text-[14px] text-[#1e3a8a]/80 leading-relaxed">
                Adding this document will trigger an automated compliance check. You will be notified if any mandatory sections are missing.
              </p>
            </div>
          </div>

          {/* Footer actions */}
          <div className="mt-2 flex items-center">
            <Button className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-[14px] font-bold text-white hover:bg-[#0d1b3a]">
              Create Reference Document
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
