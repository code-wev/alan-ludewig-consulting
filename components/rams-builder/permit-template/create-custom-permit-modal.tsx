"use client";

import React, { useState } from "react";
import { X, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CreateCustomPermitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export function CreateCustomPermitModal({
  isOpen,
  onClose,
  onSave,
}: CreateCustomPermitModalProps) {
  const [isIssuerApprovalRequired, setIsIssuerApprovalRequired] = useState(true);
  const [isPpeMandatoryCheck, setIsPpeMandatoryCheck] = useState(true);
  const [isIsolationPointsVerification, setIsIsolationPointsVerification] = useState(false);
  const [isContinuousGasTesting, setIsContinuousGasTesting] = useState(false);
  const [isFireWatchStandby, setIsFireWatchStandby] = useState(false);
  const [isRescuePlanAttached, setIsRescuePlanAttached] = useState(false);
  const [saveToFutureTemplates, setSaveToFutureTemplates] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 backdrop-blur-sm p-4 md:p-8 overflow-y-auto font-['Sansation'] no-scrollbar">
      {/* Modal Container */}
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] w-full max-w-[894px] flex flex-col relative shadow-2xl my-auto max-h-[90vh] overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X className="size-4 text-brand-secondary" />
        </button>

        <div className="p-6 md:p-[24px] flex flex-col gap-6 w-full overflow-y-auto no-scrollbar">
          {/* Header */}
          <div className="flex flex-col gap-1.5 w-full max-w-[448px]">
            <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">
              Create Custom Permit Type
            </h2>
            <p className="text-[16px] text-brand-secondary leading-[1.6]">
              Configure specialized safety parameters for unique activities
            </p>
          </div>

          {/* Section 1: Basic Info */}
          <div className="flex flex-col gap-4 w-full">
            {/* Custom Permit Name */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[14px] text-brand-primary leading-[1.6]">
                Custom Permit Name <span className="text-[#d92d20]">*</span>
              </label>
              <input 
                type="text" 
                placeholder="e.g. Specialized Chemical Handling"
                className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[16px] text-brand-primary placeholder:text-[#6b7280] focus:outline-none focus:border-brand-primary font-['Manrope']"
              />
            </div>

            {/* Category and Duration */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[14px] text-brand-primary leading-[1.6]">
                  Permit Category
                </label>
                <div className="relative w-full">
                  <select className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-[16px] text-[14px] text-brand-primary appearance-none focus:outline-none focus:border-brand-primary bg-white cursor-pointer">
                    <option>General</option>
                    <option>High Risk</option>
                    <option>Specialist</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-[18px] text-brand-primary pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[14px] text-brand-primary leading-[1.6]">
                  Permit Duration Guidance
                </label>
                <div className="relative w-full">
                  <select className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] px-[16px] text-[14px] text-brand-primary appearance-none focus:outline-none focus:border-brand-primary bg-white cursor-pointer">
                    <option>Single Shift</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-[18px] text-brand-primary pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[14px] text-brand-primary leading-[1.6]">
                Description
              </label>
              <textarea 
                placeholder="Define the scope and safety intent of this permit type..."
                className="w-full h-[112px] rounded-[6px] border border-[#e3e6ec] p-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary resize-none"
              />
            </div>
          </div>

          {/* Section 2: Controls Multi-select */}
          <div className="flex flex-col gap-4 w-full">
            <h4 className="text-[16px] font-bold text-brand-primary leading-[1.6]">
              Required Controls Checklist
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              
              {/* Checkbox 1 */}
              <div 
                className="border border-[#e3e6ec] rounded-[6px] h-[51px] px-[12px] flex items-center gap-[11px] cursor-pointer"
                onClick={() => setIsIssuerApprovalRequired(!isIssuerApprovalRequired)}
              >
                <div className={cn("size-[22px] rounded-[4px] border flex items-center justify-center shrink-0", isIssuerApprovalRequired ? "bg-brand-primary border-brand-primary" : "bg-white border-[#c6c5cf]")}>
                  {isIssuerApprovalRequired && <Check className="size-[14px] text-white" strokeWidth={3} />}
                </div>
                <span className="text-[14px] text-brand-primary leading-[1.6]">Issuer Approval Required</span>
              </div>

              {/* Checkbox 2 */}
              <div 
                className="border border-[#e3e6ec] rounded-[6px] h-[51px] px-[12px] flex items-center gap-[11px] cursor-pointer"
                onClick={() => setIsPpeMandatoryCheck(!isPpeMandatoryCheck)}
              >
                <div className={cn("size-[22px] rounded-[4px] border flex items-center justify-center shrink-0", isPpeMandatoryCheck ? "bg-brand-primary border-brand-primary" : "bg-white border-[#c6c5cf]")}>
                  {isPpeMandatoryCheck && <Check className="size-[14px] text-white" strokeWidth={3} />}
                </div>
                <span className="text-[14px] text-brand-primary leading-[1.6]">PPE Mandatory Check</span>
              </div>

              {/* Checkbox 3 */}
              <div 
                className="border border-[#e3e6ec] rounded-[6px] h-[51px] px-[12px] flex items-center gap-[11px] cursor-pointer"
                onClick={() => setIsIsolationPointsVerification(!isIsolationPointsVerification)}
              >
                <div className={cn("size-[22px] rounded-[4px] border flex items-center justify-center shrink-0", isIsolationPointsVerification ? "bg-brand-primary border-brand-primary" : "bg-white border-[#c6c5cf]")}>
                  {isIsolationPointsVerification && <Check className="size-[14px] text-white" strokeWidth={3} />}
                </div>
                <span className="text-[14px] text-brand-primary leading-[1.6]">Isolation Points Verification</span>
              </div>

              {/* Checkbox 4 */}
              <div 
                className="border border-[#e3e6ec] rounded-[6px] h-[51px] px-[12px] flex items-center gap-[11px] cursor-pointer"
                onClick={() => setIsContinuousGasTesting(!isContinuousGasTesting)}
              >
                <div className={cn("size-[22px] rounded-[4px] border flex items-center justify-center shrink-0", isContinuousGasTesting ? "bg-brand-primary border-brand-primary" : "bg-white border-[#c6c5cf]")}>
                  {isContinuousGasTesting && <Check className="size-[14px] text-white" strokeWidth={3} />}
                </div>
                <span className="text-[14px] text-brand-primary leading-[1.6]">Continuous Gas Testing</span>
              </div>

              {/* Checkbox 5 */}
              <div 
                className="border border-[#e3e6ec] rounded-[6px] h-[51px] px-[12px] flex items-center gap-[11px] cursor-pointer"
                onClick={() => setIsFireWatchStandby(!isFireWatchStandby)}
              >
                <div className={cn("size-[22px] rounded-[4px] border flex items-center justify-center shrink-0", isFireWatchStandby ? "bg-brand-primary border-brand-primary" : "bg-white border-[#c6c5cf]")}>
                  {isFireWatchStandby && <Check className="size-[14px] text-white" strokeWidth={3} />}
                </div>
                <span className="text-[14px] text-brand-primary leading-[1.6]">Fire Watch Standby</span>
              </div>

              {/* Checkbox 6 */}
              <div 
                className="border border-[#e3e6ec] rounded-[6px] h-[51px] px-[12px] flex items-center gap-[11px] cursor-pointer"
                onClick={() => setIsRescuePlanAttached(!isRescuePlanAttached)}
              >
                <div className={cn("size-[22px] rounded-[4px] border flex items-center justify-center shrink-0", isRescuePlanAttached ? "bg-brand-primary border-brand-primary" : "bg-white border-[#c6c5cf]")}>
                  {isRescuePlanAttached && <Check className="size-[14px] text-white" strokeWidth={3} />}
                </div>
                <span className="text-[14px] text-brand-primary leading-[1.6]">Rescue Plan Attached</span>
              </div>

            </div>
          </div>

          {/* Section 3: Custom Requirements */}
          <div className="flex flex-col gap-4 w-full pt-2">
            <h4 className="text-[16px] font-bold text-brand-primary leading-[1.6]">
              Custom Conditions
            </h4>
            
            <div className="bg-[#f3f5f8] rounded-[12px] p-4 flex flex-col gap-4 w-full">
              {/* Authorisation Notes */}
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[14px] text-brand-primary leading-[1.6]">
                  Authorisation Notes
                </label>
                <input 
                  type="text" 
                  placeholder="Add specific guidance for permit issuers..."
                  className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] bg-white focus:outline-none focus:border-brand-primary"
                />
              </div>

              {/* Special Conditions */}
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[14px] text-brand-primary leading-[1.6]">
                  Special Conditions
                </label>
                <input 
                  type="text" 
                  placeholder="Weather restrictions, noise limits, etc."
                  className="w-full h-[51px] rounded-[6px] border border-[#e3e6ec] px-[13px] text-[14px] text-brand-primary placeholder:text-[#a3acba] bg-white focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            {/* Save to Future Templates Toggle */}
            <div className="bg-[#f3f5f8] border border-[rgba(4,83,205,0.2)] rounded-[6px] p-[17px] flex items-center justify-between w-full mt-2">
              <div className="flex flex-col gap-1.5">
                <h4 className="text-[16px] font-bold text-brand-primary leading-[1.6]">
                  Save to Future Templates
                </h4>
                <p className="text-[14px] text-brand-secondary leading-[1.6]">
                  Make this permit type available for future work requests.
                </p>
              </div>
              
              {/* Toggle Switch */}
              <button 
                onClick={() => setSaveToFutureTemplates(!saveToFutureTemplates)}
                className={cn(
                  "relative w-[44px] h-[24px] rounded-full transition-colors duration-200 shrink-0",
                  saveToFutureTemplates ? "bg-brand-primary" : "bg-[#c6c5cf]"
                )}
              >
                <div 
                  className={cn(
                    "absolute top-[2px] bg-white rounded-full size-[20px] transition-transform duration-200 shadow-sm",
                    saveToFutureTemplates ? "translate-x-[22px]" : "translate-x-[2px]"
                  )} 
                />
              </button>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center gap-5 pt-2">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="h-[34px] px-4 rounded-[6px] border-brand-primary text-brand-primary font-bold text-[12px] hover:bg-gray-50"
            >
              Save Draft
            </Button>
            <Button 
              onClick={onSave}
              className="h-[34px] px-4 rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-[#0f1d3e]"
            >
              Create Custom Permit
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
