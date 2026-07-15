"use client";

import React from "react";
import { X, CloudUpload, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddAuthorisedPersonModalProps {
  onClose: () => void;
}

export function AddAuthorisedPersonModal({ onClose }: AddAuthorisedPersonModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101828]/50 font-['Sansation']">
      <div className="w-[880px] max-w-[95vw] max-h-[90vh] bg-white rounded-[12px] flex flex-col shadow-xl overflow-hidden border-[1.5px] border-[#e3e6ec]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 shrink-0 relative">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[20px] font-bold text-brand-primary">Add Authorised Person</h2>
            <p className="text-[16px] text-brand-secondary">Register a new competent person to the compliance system.</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="size-4 text-brand-secondary" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col gap-10 no-scrollbar">
          
          {/* Personal Details */}
          <div className="flex flex-col gap-6">
            <div className="border-l-4 border-brand-primary pl-4 flex items-center">
              <h3 className="text-[16px] font-bold text-brand-primary">Personal Details</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">
                  Full Name <span className="text-[#d92d20]">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Michael Smith" 
                  className="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba]" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Company/Organisation</label>
                <input 
                  type="text" 
                  defaultValue="Alan Ludewig Consulting" 
                  className="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba]" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Job Title/Role</label>
                <input 
                  type="text" 
                  placeholder="e.g. Michael Smith" 
                  className="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba]" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Employee/Contractor ID</label>
                <input 
                  type="text" 
                  defaultValue="ID-4002" 
                  className="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba]" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="m.smith@al-consulting.com" 
                  className="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba]" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Mobile Number</label>
                <input 
                  type="text" 
                  defaultValue="+44 7700 900000" 
                  className="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba]" 
                />
              </div>
            </div>
          </div>

          {/* Authorisation Details */}
          <div className="flex flex-col gap-6">
            <div className="border-l-4 border-brand-primary pl-4 flex items-center">
              <h3 className="text-[16px] font-bold text-brand-primary">Authorisation Details</h3>
            </div>
            
            <div className="flex flex-col gap-4">
              <label className="text-[14px] font-bold text-brand-primary">
                System Role(s) *
              </label>
              <div className="grid grid-cols-3 gap-3">
                
                {/* Checkbox Card 1 */}
                <label className="flex items-center gap-3 p-[13px] h-[46px] rounded-[3px] border border-[#e3e6ec] cursor-pointer hover:border-brand-primary transition-colors">
                  <div className="size-[20px] rounded-[2px] border border-[#e3e6ec] bg-white flex items-center justify-center shrink-0">
                  </div>
                  <span className="text-[14px] text-brand-primary">Permit Issuer</span>
                </label>

                {/* Checkbox Card 2 (Checked) */}
                <label className="flex items-center gap-3 p-[13px] h-[46px] rounded-[3px] border border-brand-primary bg-[#f3f5f8] cursor-pointer">
                  <div className="size-[22px] rounded-[2px] bg-brand-primary flex items-center justify-center shrink-0">
                    <Check className="size-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[14px] text-brand-primary">Permit Holder</span>
                </label>

                {/* Checkbox Card 3 */}
                <label className="flex items-center gap-3 p-[13px] h-[46px] rounded-[3px] border border-[#e3e6ec] cursor-pointer hover:border-brand-primary transition-colors">
                  <div className="size-[20px] rounded-[2px] border border-[#e3e6ec] bg-white flex items-center justify-center shrink-0">
                  </div>
                  <span className="text-[14px] text-brand-primary">Performing Authority</span>
                </label>

                {/* Checkbox Card 4 */}
                <label className="flex items-center gap-3 p-[13px] h-[46px] rounded-[3px] border border-[#e3e6ec] cursor-pointer hover:border-brand-primary transition-colors">
                  <div className="size-[20px] rounded-[2px] border border-[#e3e6ec] bg-white flex items-center justify-center shrink-0">
                  </div>
                  <span className="text-[14px] text-brand-primary">Supervisor</span>
                </label>

                {/* Checkbox Card 5 */}
                <label className="flex items-center gap-3 p-[13px] h-[46px] rounded-[3px] border border-[#e3e6ec] cursor-pointer hover:border-brand-primary transition-colors">
                  <div className="size-[20px] rounded-[2px] border border-[#e3e6ec] bg-white flex items-center justify-center shrink-0">
                  </div>
                  <span className="text-[14px] text-brand-primary">Competent Person</span>
                </label>

                {/* Checkbox Card 6 */}
                <label className="flex items-center gap-3 p-[13px] h-[46px] rounded-[3px] border border-[#e3e6ec] cursor-pointer hover:border-brand-primary transition-colors">
                  <div className="size-[20px] rounded-[2px] border border-[#e3e6ec] bg-white flex items-center justify-center shrink-0">
                  </div>
                  <span className="text-[14px] text-brand-primary">Emergency Contact</span>
                </label>

              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Competency/Qualification</label>
                <div className="relative">
                  <input 
                    type="text" 
                    defaultValue="NEBOSH Certificate" 
                    className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 pr-10 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba] cursor-pointer" 
                    readOnly
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-primary pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Current Status</label>
                <div className="relative">
                  <input 
                    type="text" 
                    defaultValue="Active" 
                    className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 pr-10 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba] cursor-pointer" 
                    readOnly
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-primary pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Certificate Number</label>
                <input 
                  type="text" 
                  placeholder="e.g. CERT-2024-001" 
                  className="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba]" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Expiry Date</label>
                <input 
                  type="text" 
                  placeholder="mm/dd/yyyy" 
                  className="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba]" 
                />
              </div>
            </div>

            {/* Approved Permit Types */}
            <div className="flex flex-col gap-4 pt-4">
              <h4 className="text-[14px] font-bold text-brand-primary">Approved Permit Types</h4>
              <div className="flex flex-wrap items-center gap-3">
                <span className="h-[30px] px-3.5 rounded-[6px] border border-[#e3e6ec] text-brand-secondary text-[12px] flex items-center justify-center">Hot Work</span>
                <div className="h-[30px] pl-3 pr-2 rounded-[12px] bg-brand-primary text-white text-[12px] flex items-center justify-center gap-1.5 cursor-pointer">
                  Confined Space
                  <button className="hover:bg-white/20 p-0.5 rounded-full transition-colors flex items-center justify-center">
                    <X className="size-3" strokeWidth={2.5} />
                  </button>
                </div>
                <div className="h-[30px] pl-3 pr-2 rounded-[12px] bg-brand-primary text-white text-[12px] flex items-center justify-center gap-1.5 cursor-pointer">
                  Electrical Isolation
                  <button className="hover:bg-white/20 p-0.5 rounded-full transition-colors flex items-center justify-center">
                    <X className="size-3" strokeWidth={2.5} />
                  </button>
                </div>
                <span className="h-[30px] px-3.5 rounded-[6px] border border-[#e3e6ec] text-brand-secondary text-[12px] flex items-center justify-center">Working at Height</span>
                <span className="h-[30px] px-3.5 rounded-[6px] border border-[#e3e6ec] text-brand-secondary text-[12px] flex items-center justify-center">Excavation</span>
                
                <button className="h-[30px] px-3.5 rounded-[6px] border border-dashed border-brand-primary text-brand-primary text-[12px] hover:bg-gray-50 transition-colors flex items-center justify-center">
                  + Add Type
                </button>
              </div>
            </div>

          </div>

          {/* Notes & Documentation */}
          <div className="flex flex-col gap-6">
            <div className="border-l-4 border-brand-primary pl-4 flex items-center">
              <h3 className="text-[16px] font-bold text-brand-primary">Notes & Documentation</h3>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Competency Certificate (Optional)</label>
              <div className="p-[34px] rounded-[6px] border-2 border-dashed border-[#e3e6ec] flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-[#f8fafc] transition-colors">
                <CloudUpload className="size-8 text-[#a3acba] mb-1" />
                <span className="text-[14px] text-brand-primary">Click to upload or drag and drop</span>
                <span className="text-[12px] text-brand-secondary mt-1">PDF, JPG or PNG (max. 10MB)</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pb-2">
              <label className="text-[14px] text-brand-primary">Additional Notes</label>
              <textarea 
                placeholder="Enter any specific requirements, medical considerations, or access restrictions..." 
                className="h-[116px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-[17px] text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary placeholder:text-[#a3acba] resize-none" 
              />
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center gap-5 px-6 py-[16px] shrink-0 bg-white">
          <Button variant="outline" className="h-[34px] rounded-[6px] border-brand-primary text-brand-primary font-bold text-[12px] px-4 w-[150px] hover:bg-gray-50" onClick={onClose}>
            Save Draft
          </Button>
          <Button className="h-[34px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] px-4 w-[177px] hover:bg-opacity-90">
            Add Authorised Person
          </Button>
        </div>

      </div>
    </div>
  );
}
