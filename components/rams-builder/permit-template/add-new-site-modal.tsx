"use client";

import React, { useEffect } from "react";
import { X, Building2, Contact } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddNewSiteModalProps {
  onClose: () => void;
}

export function AddNewSiteModal({ onClose }: AddNewSiteModalProps) {
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
        <div className="flex flex-col gap-[6px] pt-[24px] px-[32px] pb-[16px] relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-[24px] right-[24px] p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="size-5 text-brand-secondary" />
          </button>
          
          <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">
            Add Site Details
          </h2>
          <p className="text-[16px] text-brand-secondary leading-[1.6]">
            Ensure all mandatory information is captured for HSE compliance.
          </p>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto px-[32px] pb-[32px]">
          <div className="flex flex-col gap-[24px] w-full">
            
            {/* Section: Site Information */}
            <div className="flex flex-col gap-[16px] w-full">
              <div className="flex items-center gap-2 pb-2 border-b border-transparent">
                <Building2 className="size-5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">
                  Site Information
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Site Name <span className="text-[#d92d20]">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Canary Wharf North"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Project Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Phase 2 Refurbishment"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[8px] w-full">
                <label className="text-[14px] text-brand-primary leading-[1.6]">
                  Full Site Address <span className="text-[#d92d20]">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Street name and number"
                  className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    City
                  </label>
                  <input 
                    type="text" 
                    placeholder="City"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Postcode
                  </label>
                  <input 
                    type="text" 
                    placeholder="Postcode"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[8px] w-full">
                <label className="text-[14px] text-brand-primary leading-[1.6]">
                  Exact Work Location On Site
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Floor 4, Plant Room B, West Elevation"
                  className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Client/Company
                  </label>
                  <input 
                    type="text" 
                    placeholder="Client/Company"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Principal Contractor
                  </label>
                  <input 
                    type="text" 
                    placeholder="Principal Contractor"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[8px] w-full">
                <label className="text-[14px] text-brand-primary leading-[1.6]">
                  Site Access Instructions
                </label>
                <textarea 
                  placeholder="Entry codes, security gate details, or vehicle size restrictions..."
                  className="w-full min-h-[74px] rounded-[6px] border border-[#e3e6ec] p-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary resize-none"
                />
              </div>

            </div>

            {/* Section: Primary Contact Details */}
            <div className="flex flex-col gap-[16px] w-full mt-4">
              <div className="flex items-center gap-2 pb-2 border-b border-transparent">
                <Contact className="size-5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">
                  Primary Contact Details
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Contact Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Contact Name"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Role/Position
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Site Manager"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Phone Number
                  </label>
                  <input 
                    type="text" 
                    placeholder="Phone Number"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Emergency Contact
                  </label>
                  <input 
                    type="text" 
                    placeholder="24/7 Number"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
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
              className="h-[34px] min-w-[130px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90"
            >
              Add Site
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
