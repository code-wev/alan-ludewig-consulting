"use client";

import React, { useEffect, useState } from "react";
import { 
  X, 
  UserPlus, 
  Contact, 
  CheckCircle, 
  UserSquare2, 
  UploadCloud,
  FileText,
  Trash2,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddPermitHolderModalProps {
  onClose: () => void;
}

export function AddPermitHolderModal({ onClose }: AddPermitHolderModalProps) {
  const [acceptConditions, setAcceptConditions] = useState(true);
  const [availableEntirePeriod, setAvailableEntirePeriod] = useState(false);

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
          
          <div className="flex items-center justify-center size-[38px] bg-[#f8f9fc] rounded-full">
            <UserPlus className="size-5 text-brand-primary" />
          </div>
          <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">
            Add Permit Holder
          </h2>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto px-[32px] pb-[32px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
          <div className="flex flex-col gap-[24px] w-full">
            
            {/* Section: Identity & Contact */}
            <div className="flex flex-col gap-[16px] w-full">
              <div className="flex items-center gap-2 pb-2 border-b border-transparent">
                <Contact className="size-5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">
                  Identity & Contact
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Full Name <span className="text-[#d92d20]">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Company
                  </label>
                  <input 
                    type="text" 
                    placeholder="Employer name"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Job Role
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Electrician"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Identification Number (ID)
                  </label>
                  <input 
                    type="text" 
                    placeholder="Passport/Reg Number"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Mobile Number
                  </label>
                  <input 
                    type="text" 
                    placeholder="+44 0000 000000"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Email Address
                  </label>
                  <input 
                    type="text" 
                    placeholder="john.doe@company.com"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>
            </div>

            {/* Section: Competency & Qualifications */}
            <div className="flex flex-col gap-[16px] w-full mt-2">
              <div className="flex items-center gap-2 pb-2 border-b border-transparent">
                <CheckCircle className="size-5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">
                  Competency & Qualifications
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Primary Competency
                  </label>
                  <div className="relative">
                    <select className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary appearance-none bg-white">
                      <option value="" disabled selected>Select Competency...</option>
                      <option value="cscs">CSCS Card</option>
                      <option value="smsts">SMSTS</option>
                      <option value="sssts">SSSTS</option>
                    </select>
                    <ChevronDown className="absolute right-[13px] top-1/2 -translate-y-1/2 size-4 text-[#a3acba] pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Expiry Date
                  </label>
                  <input 
                    type="date" 
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-[#a3acba] focus:outline-none focus:border-brand-primary focus:text-brand-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[8px] w-full">
                <label className="text-[14px] text-brand-primary leading-[1.6]">
                  Supporting Evidence (Certificate Upload)
                </label>
                
                {/* Upload Dropzone */}
                <div className="border-2 border-[#e3e6ec] border-dashed rounded-[6px] flex flex-col items-center justify-center py-[20px] px-[18px] hover:bg-gray-50 cursor-pointer transition-colors">
                  <UploadCloud className="size-[22px] text-[#45464e] mb-2" />
                  <span className="text-[13px] text-[#45464e] leading-[18px] font-['Manrope']">
                    Click to upload or drag & drop
                  </span>
                  <span className="text-[9px] text-[#76767f] leading-[13.5px] font-['Manrope'] mt-1">
                    PDF, JPG, PNG (Max 5MB)
                  </span>
                </div>

                {/* Uploaded File Preview */}
                <div className="border border-[#e3e6ec] rounded-[6px] flex items-center justify-between p-[11px] mt-2">
                  <div className="flex items-center gap-3">
                    <div className="size-[32px] rounded-[4px] bg-[rgba(5,15,54,0.1)] flex items-center justify-center">
                      <FileText className="size-[14px] text-brand-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold text-brand-primary leading-[1.6]">CSCS_Card_Doe_2023.pdf</span>
                      <span className="text-[12px] text-brand-secondary leading-[1.6]">1.2 MB • Uploaded</span>
                    </div>
                  </div>
                  <button className="size-[28px] rounded-[4px] flex items-center justify-center hover:bg-red-50 transition-colors">
                    <Trash2 className="size-[16px] text-[#d92d20]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Section: Responsibility & Area */}
            <div className="flex flex-col gap-[16px] w-full mt-2">
              <div className="flex items-center gap-2 pb-2 border-b border-transparent">
                <UserSquare2 className="size-5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">
                  Responsibility & Area
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Responsibility Type
                  </label>
                  <div className="relative">
                    <select className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary appearance-none bg-white">
                      <option value="main" selected>Main Permit Holder</option>
                      <option value="supervisor">Supervisor</option>
                      <option value="worker">Worker</option>
                    </select>
                    <ChevronDown className="absolute right-[13px] top-1/2 -translate-y-1/2 size-4 text-[#a3acba] pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-brand-primary leading-[1.6]">
                    Specific Work Area
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Zone B - Floor 2"
                    className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[8px] w-full">
                <label className="text-[14px] text-brand-primary leading-[1.6]">
                  Task Notes / Remarks
                </label>
                <textarea 
                  placeholder="Describe specific duties or limitations..."
                  className="w-full min-h-[74px] rounded-[6px] border border-[#e3e6ec] p-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary resize-none"
                />
              </div>

              {/* Toggles Box */}
              <div className="bg-[#f0f4fa] rounded-[8px] p-[16px] flex flex-col gap-[12px] mt-2">
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-brand-primary leading-[1.6]">Accept Permit Conditions</span>
                    <span className="text-[14px] text-brand-secondary leading-[1.6]">Confirms individual has read RAMS</span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setAcceptConditions(!acceptConditions)}
                    className={`w-[44px] h-[24px] rounded-full relative transition-colors duration-200 ease-in-out ${acceptConditions ? 'bg-brand-primary' : 'bg-[#dce0e7]'}`}
                  >
                    <div className={`absolute top-[2px] w-[20px] h-[20px] bg-white rounded-full transition-transform duration-200 ease-in-out ${acceptConditions ? 'translate-x-[22px]' : 'translate-x-[2px]'}`} />
                  </button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-brand-primary leading-[1.6]">Available Entire Period</span>
                    <span className="text-[14px] text-brand-secondary leading-[1.6]">Present for full permit duration</span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setAvailableEntirePeriod(!availableEntirePeriod)}
                    className={`w-[44px] h-[24px] rounded-full relative transition-colors duration-200 ease-in-out ${availableEntirePeriod ? 'bg-brand-primary' : 'bg-[#dce0e7]'}`}
                  >
                    <div className={`absolute top-[2px] w-[20px] h-[20px] bg-white rounded-full transition-transform duration-200 ease-in-out ${availableEntirePeriod ? 'translate-x-[22px]' : 'translate-x-[2px]'}`} />
                  </button>
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
              className="h-[34px] min-w-[150px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90"
            >
              Add Permit Holder
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
