"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  Clock, 
  AlertTriangle, 
  Check, 
  Sun, 
  Sunrise, 
  Moon, 
  ChevronDown,
  ExternalLink,
  PauseCircle,
  AlertOctagon,
  RotateCw,
  RefreshCw,
  Bell,
  Lightbulb,
  CalendarClock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExtendPermitModal } from "./extend-permit-modal";

interface ValidityPeriodStepProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function ValidityPeriodStep({ onPrevious, onNext }: ValidityPeriodStepProps) {
  const [showExtendModal, setShowExtendModal] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full font-['Sansation']">
      
      {/* 2-column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] gap-[32px] w-full items-start">
         
         {/* Left Column */}
         <div className="flex flex-col gap-6">
            
            {/* Validity Details Card */}
            <div className="bg-white border border-[#e3e6ec] rounded-[12px] overflow-hidden">
               <div className="bg-[#f3f5f8] border-b border-[#e3e6ec] px-6 py-4 flex items-center justify-between">
                  <h3 className="text-[16px] font-bold text-brand-primary">Validity Details</h3>
                  <Calendar className="size-[18px] text-brand-primary" />
               </div>
               
               <div className="p-8 flex flex-col gap-8">
                  
                  {/* Date/Time Inputs */}
                  <div className="grid grid-cols-2 gap-8">
                     <div className="flex flex-col gap-2">
                        <label className="text-[14px] text-brand-primary">Start Date & Time</label>
                        <div className="relative">
                           <input 
                             type="text" 
                             value="11/20/2023, 08:00AM" 
                             readOnly 
                             className="w-full border-[1.5px] border-[#e3e6ec] rounded-[6px] px-3.5 py-2.5 text-[14px] text-brand-primary focus:outline-none" 
                           />
                           <Clock className="absolute right-3.5 top-1/2 -translate-y-1/2 size-5 text-[#a3acba]" />
                        </div>
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-[14px] text-brand-primary">Expiry Date & Time</label>
                        <div className="relative">
                           <input 
                             type="text" 
                             value="11/20/2023, 08:00AM" 
                             readOnly 
                             className="w-full border-[1.5px] border-[#d92d20] bg-[#fcf4f4] rounded-[6px] px-3.5 py-2.5 text-[14px] text-brand-primary focus:outline-none" 
                           />
                           <AlertTriangle className="absolute right-3.5 top-1/2 -translate-y-1/2 size-[18px] text-[#d92d20]" />
                        </div>
                     </div>
                  </div>

                  {/* Permit Duration Visualization */}
                  <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px] p-[25px] flex flex-col gap-[32px]">
                     {/* Top Section - Progress Bar */}
                     <div className="flex flex-col gap-[16px] w-full">
                        <div className="flex justify-between items-start w-full">
                           <span className="text-[14px] text-brand-secondary">Current Duration</span>
                           <span className="text-[14px] text-brand-primary">9 Hours 0 Minutes</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-[8px] bg-[#c5c6d0] rounded-[12px] w-full overflow-hidden flex">
                           <div className="h-full bg-brand-primary w-[37.5%]" />
                        </div>

                        {/* Times */}
                        <div className="flex justify-between items-start w-full">
                           <span className="text-[12px] text-brand-secondary">08:00 AM</span>
                           <span className="text-[12px] text-brand-secondary">12:30 PM (CURRENT)</span>
                           <span className="text-[12px] text-brand-secondary">05:00 PM</span>
                        </div>
                     </div>
                     
                     {/* Bottom Section - Notifications & Capacity */}
                     <div className="flex justify-between items-center w-full">
                        {/* Notification Checkbox */}
                        <div className="flex items-center gap-[8px]">
                           <div className="size-[18px] bg-brand-primary rounded-[4px] flex items-center justify-center">
                              <Check className="size-3 text-white" strokeWidth={3} />
                           </div>
                           <span className="text-[12px] text-brand-primary">Enable Expiry Reminder (SMS/Email notification)</span>
                        </div>

                        {/* Total Capacity */}
                        <div className="h-[45px] w-[115px] border-l border-[#e3e6ec] flex flex-col items-center justify-end">
                           <span className="text-[12px] text-brand-secondary text-center leading-[1.6]">Total Capacity</span>
                           <span className="text-[16px] text-brand-primary text-center leading-[1.6]">100%</span>
                        </div>
                     </div>
                  </div>

                  {/* Work Shift Coverage */}
                  <div className="flex flex-col gap-[12px] pt-[17px] border-t border-[#e3e6ec]">
                     <label className="text-[16px] font-bold text-brand-primary">Work Shift Coverage</label>
                     <div className="flex gap-[12px]">
                        <button className="bg-[#0453cd]/5 border-2 border-brand-primary rounded-[8px] py-[14px] px-[63px] flex flex-col items-center justify-center gap-1">
                           <Sun className="size-[22px] text-brand-primary" />
                           <span className="text-[13px] font-bold text-brand-primary font-['Manrope']">Day Shift</span>
                        </button>
                        <button className="border border-[#e3e6ec] rounded-[8px] pt-[13px] pb-[15px] px-[58px] flex flex-col items-center justify-center gap-1">
                           <Sunrise className="size-[20px] text-brand-secondary" />
                           <span className="text-[13px] text-brand-secondary font-['Manrope']">Swing Shift</span>
                        </button>
                        <button className="border border-[#e3e6ec] rounded-[8px] pt-[13px] pb-[15px] px-[60px] flex flex-col items-center justify-center gap-1">
                           <Moon className="size-[18px] text-brand-secondary" />
                           <span className="text-[13px] text-brand-secondary font-['Manrope']">Night Shift</span>
                        </button>
                     </div>
                  </div>

                  {/* Extension Requirement */}
                  <div className="flex flex-col gap-6 pt-[17px] border-t border-[#e3e6ec]">
                     <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-1 w-[437px]">
                           <h4 className="text-[16px] font-bold text-brand-primary">Extension Requirement</h4>
                           <p className="text-[14px] text-brand-secondary">Is this permit eligible for a validity extension beyond its initial expiry?</p>
                        </div>
                        <div className="w-[44px] h-[24px] bg-brand-primary rounded-full relative shrink-0 flex items-center shadow-inner cursor-pointer">
                           <div className="absolute left-[22px] size-[20px] bg-white rounded-full shadow-sm" />
                        </div>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-[32px]">
                        <div className="flex flex-col gap-[8px]">
                           <label className="text-[14px] text-brand-primary">Max Extension Count</label>
                           <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] py-[12px] h-[51px] flex justify-between items-center cursor-pointer">
                              <span className="text-[14px] text-brand-primary">Up to 2 Extensions</span>
                              <ChevronDown className="size-[18px] text-brand-secondary" />
                           </div>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                           <label className="text-[14px] text-brand-primary">Extension Lead Time</label>
                           <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] py-[12px] h-[51px] flex justify-between items-center cursor-pointer">
                              <span className="text-[14px] text-brand-primary">1 Hour before expiry</span>
                              <ChevronDown className="size-[18px] text-brand-secondary" />
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>

         {/* Right Column */}
         <div className="flex flex-col gap-6">
            
            {/* Operational Actions */}
            <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-[25px] flex flex-col gap-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]">
               <h4 className="text-[20px] font-bold text-brand-primary">Operational Actions</h4>
               <div className="flex flex-col gap-[12px]">
                  <button 
                    onClick={() => setShowExtendModal(true)}
                    className="bg-[#0453cd]/5 border border-[#0453cd]/20 rounded-[8px] py-[13px] px-[13px] flex justify-between items-center w-full group hover:bg-[#0453cd]/10"
                  >
                     <div className="flex gap-[12px] items-center">
                        <CalendarClock className="size-[18px] text-[#0453cd]" />
                        <span className="text-[14px] text-[#0453cd]">Extend Permit</span>
                     </div>
                     <ExternalLink className="size-[13.5px] text-[#0453cd]" />
                  </button>
                  <button className="bg-[#ba1a1a]/5 border border-[#ba1a1a]/20 rounded-[8px] py-[13px] px-[13px] flex justify-between items-center w-full group hover:bg-[#ba1a1a]/10">
                     <div className="flex gap-[12px] items-center">
                        <PauseCircle className="size-[20px] text-[#ba1a1a]" />
                        <span className="text-[14px] text-[#ba1a1a]">Suspend Permit</span>
                     </div>
                     <AlertOctagon className="size-[15px] text-[#ba1a1a]" />
                  </button>
                  <button className="bg-white border border-[#c6c5cf] rounded-[8px] py-[13px] px-[13px] flex justify-between items-center w-full group hover:bg-gray-50">
                     <div className="flex gap-[12px] items-center">
                        <RotateCw className="size-[20px] text-brand-primary" />
                        <span className="text-[14px] text-brand-primary">Revalidate</span>
                     </div>
                     <RefreshCw className="size-[12px] text-brand-primary" />
                  </button>
               </div>
            </div>

            {/* Validity Status */}
            <div className="bg-white border border-[#e3e6ec] rounded-[12px] overflow-hidden">
               <div className="bg-[#f3f5f8] border-b border-[#e3e6ec] px-[24px] py-[16px]">
                  <h4 className="text-[20px] font-bold text-brand-primary">Validity Status</h4>
               </div>
               <div className="p-[24px] flex flex-col gap-[24px]">
                  <div className="flex justify-between items-center border-b border-[#e3e6ec] pb-[13px] pt-[12px]">
                     <span className="text-[14px] text-brand-secondary">Permit Status</span>
                     <span className="bg-[#00bc7d] px-[9px] py-[2px] rounded-[6px] text-[12px] text-white">Active</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#e3e6ec] pb-[13px] pt-[12px]">
                     <span className="text-[14px] text-brand-secondary">Time Remaining</span>
                     <span className="text-[16px] font-bold text-brand-primary">04h : 30m</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#e3e6ec] pb-[13px] pt-[12px]">
                     <span className="text-[14px] text-brand-secondary">Extension Status</span>
                     <span className="text-[14px] text-brand-secondary">Eligible (2 Allowed)</span>
                  </div>
                  
                  <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px] p-[17px] flex gap-[12px] items-start">
                     <Bell className="size-[16.7px] text-brand-secondary shrink-0" />
                     <div className="flex flex-col gap-1">
                        <span className="text-[14px] font-bold text-brand-primary">Auto-Renewal Notice</span>
                        <span className="text-[12px] text-brand-secondary leading-[1.6]">This permit does not support auto- renewal. Manual submission required.</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Validity Guidance */}
            <div className="bg-[#e4ebfe] border border-[#adc6ff]/50 rounded-[8px] p-[17px] flex flex-col gap-[16px]">
               <div className="flex items-center gap-[8px]">
                  <Lightbulb className="size-[16.7px] text-brand-primary" />
                  <span className="text-[14px] font-bold text-brand-primary">Validity Guidance</span>
               </div>
               <div className="flex flex-col gap-[4px]">
                  <span className="text-[12px] font-bold text-brand-primary">Minimum Duration</span>
                  <span className="text-[14px] text-brand-primary leading-[1.6]">Permits should not exceed a single shift (12 hours) without a formal extension review.</span>
               </div>
               <div className="flex flex-col gap-[4px]">
                  <span className="text-[12px] font-bold text-brand-primary">Extension Policy</span>
                  <span className="text-[14px] text-brand-primary leading-[1.6]">Extensions require the Authorising Officer to re-inspect the worksite to ensure all control measures remain effective.</span>
               </div>
               <div className="flex flex-col gap-[4px]">
                  <span className="text-[12px] font-bold text-brand-primary">Night Works</span>
                  <span className="text-[14px] text-brand-primary leading-[1.6]">Permits crossing over midnight require additional lighting and fatigue management protocols to be documented in RAMS.</span>
               </div>
               <a href="#" className="flex items-center gap-[4px] text-[12px] font-bold text-brand-primary mt-1 hover:underline">
                  View Full Compliance Policy <ExternalLink className="size-[10.5px]" />
               </a>
            </div>
            
         </div>

      </div>

      {/* Footer Actions */}
      <div className="flex items-center gap-[16px] h-[34px] mt-2">
        <Button variant="outline" className="h-[34px] w-[90px] rounded-[6px] border-brand-primary text-brand-primary font-bold text-[12px] hover:bg-gray-50" onClick={onPrevious}>
          Save Draft
        </Button>
        <Button className="h-[34px] w-[141px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90 px-0" onClick={onNext}>
          Next: Close Out/Review
        </Button>
      </div>

      {/* Modals */}
      {showExtendModal && (
        <ExtendPermitModal onClose={() => setShowExtendModal(false)} />
      )}
    </div>
  );
}
