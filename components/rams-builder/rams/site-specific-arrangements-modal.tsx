import React from "react";
import { 
  X, ListChecks, FileText, Trash2, CloudUpload, 
  AlignLeft, PlusCircle, Paperclip, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SiteSpecificArrangementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SiteSpecificArrangementsModal({ isOpen, onClose }: SiteSpecificArrangementsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[1100px] max-w-full max-h-[90vh] bg-white rounded-[12px] shadow-lg border border-[#e3e6ec] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-[24px] font-bold text-brand-primary">Site Specific Arrangements</h2>
            <p className="text-[14px] text-brand-secondary mt-1">
              Add client, site and project-specific safety arrangements that are not covered elsewhere in the RAMS.
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
        <div className="px-8 pb-8 flex flex-col gap-8 overflow-y-auto flex-1 no-scrollbar">
          
          {/* Section 1: Site Arrangement Categories */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2">
              <ListChecks className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary">Site Arrangement Categories</h3>
            </div>
            
            <div className="bg-[#f8fafc] rounded-[12px] border border-[#e2e8f0] p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-[#cbd5e1] text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[14px] text-brand-secondary">Access/Egress</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-[#cbd5e1] text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[14px] text-brand-secondary">Visitor Control</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-[#cbd5e1] text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[14px] text-brand-secondary">Shared Site Rules</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-[#cbd5e1] text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[14px] text-brand-secondary">Other</span>
                  </label>
                </div>
                
                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-[#cbd5e1] text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[14px] text-brand-secondary">Deliveries</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-[#cbd5e1] text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[14px] text-brand-secondary">Welfare</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-[#cbd5e1] text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[14px] text-brand-secondary">Client-Specific</span>
                  </label>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-[#cbd5e1] text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[14px] text-brand-secondary">Parking</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-[#cbd5e1] text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[14px] text-brand-secondary">Restricted Areas</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-[#cbd5e1] text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[14px] text-brand-secondary">Working Hours</span>
                  </label>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-[#cbd5e1] text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[14px] text-brand-secondary">Security</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-[#cbd5e1] text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[14px] text-brand-secondary">Traffic</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-[#cbd5e1] text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[14px] text-brand-secondary">Noise</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Site Arrangement Details */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="size-5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary">Site Arrangement Details</h3>
              </div>
              <Button className="h-[36px] px-4 rounded-[6px] bg-[#0d1b2a] text-white font-bold text-[13px] hover:bg-black">
                Add Arrangement Block
              </Button>
            </div>
            
            <div className="flex flex-col rounded-[12px] border border-[#e3e6ec] p-6 gap-6 relative">
              <button className="absolute top-6 right-6 text-red-500 hover:text-red-600 transition-colors">
                <Trash2 className="size-[18px]" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Loading Dock Access Protocol"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Category</label>
                  <div className="relative">
                    <select className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-10 focus:outline-none focus:border-brand-primary">
                      <option>Select category...</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">DETAILED REQUIREMENT</label>
                <textarea 
                  placeholder="Provide full technical details or specific instructions for this arrangement..."
                  className="w-full h-[100px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Responsible Person</label>
                  <input 
                    type="text" 
                    placeholder="Name or Role"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Related Methodology Step</label>
                  <div className="relative">
                    <select className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-10 focus:outline-none focus:border-brand-primary">
                      <option>None / General</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                  </div>
                </div>
              </div>
              
              <div className="w-full h-[100px] rounded-[8px] border border-dashed border-[#cbd5e1] bg-[#f8fafc] flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-slate-100 transition-colors mt-2">
                <CloudUpload className="size-6 text-[#64748b]" />
                <span className="text-[13px] text-brand-primary font-medium">Click to upload or drag and drop supporting documents</span>
                <span className="text-[11px] text-[#64748b]">PDF, JPG, PNG (Max 10MB)</span>
              </div>
            </div>
          </div>

          {/* Section 3: Additional Site Notes */}
          <div className="flex flex-col gap-4 pb-4">
            <div className="flex items-center gap-2">
              <AlignLeft className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary">Additional Site Notes</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Site Restrictions</label>
                <textarea 
                  placeholder="Restricted zones, height limits, etc."
                  className="w-full h-[100px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Welfare Arrangements</label>
                <textarea 
                  placeholder="Toilets, canteen locations, water points..."
                  className="w-full h-[100px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Security Requirements</label>
                <textarea 
                  placeholder="ID badges, gate codes, CCTV protocols..."
                  className="w-full h-[100px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Client Requirements</label>
                <textarea 
                  placeholder="Specific client KPIs, noise curfews, etc."
                  className="w-full h-[100px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
                ></textarea>
              </div>
            </div>
          </div>
          
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-8 py-5 border-t border-[#e3e6ec] bg-white rounded-b-[12px]">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
            >
              Save Draft
            </Button>
            <Button 
              className="h-[42px] px-6 rounded-[6px] bg-[#0d1b2a] text-white font-bold text-[14px] hover:bg-black"
            >
              Save & Close
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-[13px] font-bold text-brand-primary hover:text-brand-secondary transition-colors">
              <PlusCircle className="size-[18px]" />
              Add Site Arrangement
            </button>
            <Button 
              variant="outline" 
              className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50 flex items-center gap-2"
            >
              <Paperclip className="size-4" />
              Attach File
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
