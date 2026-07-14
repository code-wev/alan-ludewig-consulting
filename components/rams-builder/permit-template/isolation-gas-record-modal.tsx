"use client";

import React, { useEffect } from "react";
import { 
  X, 
  ShieldCheck, 
  ChevronDown,
  Upload,
  Camera,
  CheckCircle2,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface IsolationGasRecordModalProps {
  onClose: () => void;
}

export function IsolationGasRecordModal({ onClose }: IsolationGasRecordModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/70 backdrop-blur-sm p-4 font-['Sansation']">
      
      {/* Modal Container */}
      <div className="bg-white rounded-[12px] w-full max-w-[1000px] max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-brand-secondary hover:text-brand-primary transition-colors"
        >
          <X className="size-6" />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col no-scrollbar">
          
          {/* Header */}
          <div className="flex flex-col gap-4 p-8 pb-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-7 text-[#0453cd]" strokeWidth={2} />
              <h2 className="text-[24px] font-bold text-brand-primary leading-[1.2]">Safety Record Entry</h2>
            </div>
            
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[14px] text-brand-secondary">Document specific control measures for</span>
              <span className="px-2 py-0.5 bg-[#f3f5f8] rounded-[4px] text-[12px] font-bold text-brand-primary border border-[#e3e6ec]">
                PTW-2023-8821
              </span>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 mt-4 bg-[#f3f5f8] p-1.5 rounded-[8px] w-fit">
              <button className="px-4 py-2 bg-white rounded-[6px] shadow-sm text-[14px] font-bold text-brand-primary">
                Electrical Isolation
              </button>
              <button className="px-4 py-2 text-[14px] font-bold text-brand-secondary hover:text-brand-primary transition-colors">
                Gas Test / Atmosphere
              </button>
              <button className="px-4 py-2 text-[14px] font-bold text-brand-secondary hover:text-brand-primary transition-colors">
                Lockout / Tagout
              </button>
              <button className="px-4 py-2 text-[14px] font-bold text-brand-secondary hover:text-brand-primary transition-colors">
                Working at Height
              </button>
            </div>
          </div>

          <div className="px-8 flex flex-col gap-8 pb-8">
            
            {/* Section 1: Isolation Point Details */}
            <div className="flex flex-col gap-6">
              
              <div className="flex items-center gap-3">
                <div className="w-[4px] h-[24px] bg-brand-primary rounded-r-[4px]" />
                <h3 className="text-[18px] font-bold text-brand-primary leading-[1.2]">Isolation Point Details</h3>
              </div>

              <div className="flex flex-col gap-6">
                
                {/* Grid 1: Reference, Equipment, Location, Method */}
                <div className="grid grid-cols-2 gap-6">
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-brand-primary">Reference Number</label>
                    <input 
                      type="text" 
                      defaultValue="ISO-EL-2023-441"
                      className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-brand-primary">Equipment Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. HV Main Cabinet A4"
                      className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary placeholder:text-[#a0abxc] focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-brand-primary">Location / Zone</label>
                    <input 
                      type="text" 
                      defaultValue="Substation West 02"
                      className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-brand-primary">Method of Isolation</label>
                    <div className="relative">
                      <select className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 appearance-none text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary">
                        <option>Circuit Breaker - Locked Open</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                    </div>
                  </div>
                  
                </div>

                {/* Grid 2: Lock Number, Tag Color, Verified Box */}
                <div className="grid grid-cols-3 gap-6">
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-brand-primary">Lock Number(s)</label>
                    <input 
                      type="text" 
                      defaultValue="L-9982, L-9983"
                      className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-brand-primary">Tag Color/Serial</label>
                    <input 
                      type="text" 
                      defaultValue="Red / TAG-4421"
                      className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-2 pt-[28px]">
                    <label className="flex items-center gap-3 w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 cursor-pointer">
                      <div className="size-4 rounded-[4px] border border-[#c5c6cd] flex items-center justify-center bg-white" />
                      <span className="text-[14px] font-bold text-brand-primary">Verified De-energized</span>
                    </label>
                  </div>

                </div>

                {/* Verification Box */}
                <div className="bg-[#f8fafd] border border-[#e3e6ec] rounded-[8px] p-5 flex flex-col gap-3 relative">
                  
                  <div className="absolute right-5 top-5 px-3 py-1 bg-[#ecfdf3] border border-[#d1fadf] rounded-full flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-[#027a48]" strokeWidth={2.5} />
                    <span className="text-[12px] font-bold text-[#027a48]">Compliance Met</span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="size-6 bg-brand-primary rounded-[6px] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="size-4 text-white" strokeWidth={3} />
                    </div>
                    <div className="flex flex-col gap-1 pr-[140px]">
                      <h4 className="text-[15px] font-bold text-brand-primary leading-[1.4]">Verified De-energized</h4>
                      <p className="text-[13px] text-brand-secondary leading-normal">
                        Confirmed zero potential energy using calibrated multimeter at terminals A, B, and C.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Section 2: Supporting Evidence */}
            <div className="flex flex-col gap-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-[4px] h-[24px] bg-brand-primary rounded-r-[4px]" />
                  <h3 className="text-[18px] font-bold text-brand-primary leading-[1.2]">Supporting Evidence</h3>
                </div>
                <button className="flex items-center gap-2 text-brand-primary font-bold text-[14px] hover:opacity-80 transition-opacity">
                  <Camera className="size-[18px]" />
                  Add Media
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                
                {/* Upload Box */}
                <div className="h-[200px] border-2 border-dashed border-[#dce1eb] rounded-[12px] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
                  <Upload className="size-8 text-brand-secondary" strokeWidth={1.5} />
                  <span className="text-[14px] text-brand-secondary font-bold">Upload Photo</span>
                </div>

                {/* Image 1 */}
                <div className="h-[200px] rounded-[12px] overflow-hidden relative border border-[#e3e6ec] group">
                  <Image 
                    src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80" 
                    alt="LOTO"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[#2d3142]/90 p-3">
                    <span className="text-[12px] font-bold text-white">Gas Detector Reading</span>
                  </div>
                </div>

                {/* Image 2 */}
                <div className="h-[200px] rounded-[12px] overflow-hidden relative border border-[#e3e6ec] group">
                  <Image 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" 
                    alt="Detector"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[#2d3142]/90 p-3">
                    <span className="text-[12px] font-bold text-white">Gas Detector Reading</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 p-6 border-t border-[#e3e6ec] shrink-0 bg-white shadow-[0px_-2px_10px_rgba(0,0,0,0.02)]">
          <Button 
            variant="outline"
            className="h-[44px] px-8 rounded-[8px] border-brand-primary text-brand-primary font-bold text-[14px] hover:bg-gray-50"
            onClick={onClose}
          >
            Save Draft
          </Button>
          <Button 
            className="h-[44px] px-8 rounded-[8px] bg-brand-primary text-white font-bold text-[14px] hover:bg-opacity-90"
            onClick={onClose}
          >
            Add Review Action
          </Button>
        </div>

      </div>
    </div>
  );
}
