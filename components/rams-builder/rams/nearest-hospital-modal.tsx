import React from "react";
import { 
  X, Route, Info, Building2
} from "lucide-react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

interface NearestHospitalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NearestHospitalModal({ isOpen, onClose }: NearestHospitalModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[95vw] max-w-[1124px] h-[95vh] max-h-[963px] bg-white rounded-[12px] border-[1.5px] border-[#e3e6ec] flex flex-col p-[24px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Absolute Top Right */}
        <div className="absolute top-[18px] right-[18px] w-[30px] h-[30px] flex items-center justify-center cursor-pointer text-brand-secondary hover:text-brand-primary transition-colors rounded-full z-10" onClick={onClose}>
          <X className="size-[14px]" />
        </div>

        {/* Modal Inner Container */}
        <div className="flex flex-col w-full h-full gap-[32px] overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center w-full h-[55px] shrink-0">
            <div className="flex flex-col gap-[4px] w-full pr-[40px]">
              <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Nearest Hospital / A&E</h2>
              <p className="text-[14px] text-brand-secondary leading-[1.6] truncate">
                Record the nearest appropriate emergency medical facility and key route information for the site.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col w-full min-h-0 overflow-y-auto overflow-x-hidden no-scrollbar pr-2 pb-4 gap-[32px]">
            
            {/* Columns Container */}
            <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-[24px] shrink-0">
              
              {/* Left Column: Facility Details */}
              <div className="flex flex-col gap-[24px] w-full lg:w-[550px] shrink-0">
                
                {/* Section Header */}
                <div className="flex items-center gap-[12px] h-[44px]">
                  <div className="w-[40px] h-[40px] bg-[#fef2f2] rounded-[6px] flex items-center justify-center">
                    <Building2 className="size-[15px] text-red-500" />
                  </div>
                  <h3 className="text-[16px] font-bold text-brand-primary">Facility Details</h3>
                </div>

                <div className="flex flex-col gap-[16px] w-full">
                  
                  {/* Hospital Name */}
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className="text-[14px] text-brand-primary">Hospital Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. St. Mary's Hospital A&E"
                      className="w-full h-[51px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  {/* FULL ADDRESS */}
                  <div className="flex flex-col gap-[6px] w-full">
                    <label className="text-[11px] font-bold text-[#45464f] uppercase tracking-[0.55px]">
                      FULL ADDRESS
                    </label>
                    <textarea 
                      placeholder="Street name and locality..."
                      className="w-full h-[94px] py-[11px] px-[17px] bg-white border border-[#c5c6d0] rounded-[4px] text-[16px] text-[#6b7280] placeholder:text-[#6b7280] focus:outline-none focus:border-brand-primary resize-none"
                    />
                  </div>

                  {/* Postcode & Distance */}
                  <div className="flex gap-[16px] w-full">
                    <div className="flex flex-col gap-[8px] flex-1">
                      <label className="text-[14px] text-brand-primary">Postcode</label>
                      <input 
                        type="text" 
                        defaultValue="SW1A 1AA"
                        className="w-full h-[51px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] flex-1 relative">
                      <label className="text-[14px] text-brand-primary">Distance From Site</label>
                      <div className="relative w-full h-[51px]">
                        <input 
                          type="text" 
                          defaultValue="2.4"
                          className="w-full h-full pl-[16px] pr-[60px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                        />
                        <span className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[14px] text-[#a3acba]">Miles</span>
                      </div>
                    </div>
                  </div>

                  {/* Telephones */}
                  <div className="flex gap-[16px] w-full">
                    <div className="flex flex-col gap-[8px] flex-1">
                      <label className="text-[14px] text-brand-primary">Main Telephone</label>
                      <input 
                        type="text" 
                        defaultValue="+44 27123 4567"
                        className="w-full h-[51px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] flex-1">
                      <label className="text-[14px] text-brand-primary">A&E Telephone</label>
                      <input 
                        type="text" 
                        defaultValue="+44 27123 4567"
                        className="w-full h-[51px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                  </div>

                  {/* Trauma Centre */}
                  <div className="flex items-center justify-between p-[17px] bg-[#f3f5f8] border border-[#e3e6ec] rounded-[4px] w-full">
                    <div className="flex flex-col gap-[6px]">
                      <h4 className="text-[16px] font-bold text-brand-primary leading-[1.6]">Trauma Centre</h4>
                      <p className="text-[14px] text-brand-secondary leading-[1.6]">Is this a designated Major Trauma Centre?</p>
                    </div>
                    <Switch />
                  </div>

                  {/* Specialist Unit Notes */}
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className="text-[14px] text-brand-primary">Specialist Unit Notes</label>
                    <input 
                      type="text" 
                      defaultValue="e.g. Specialized Burn Unit, Eye Infirmary..."
                      className="w-full h-[51px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Route Information */}
              <div className="flex flex-col gap-[24px] w-full lg:w-[550px] shrink-0">
                
                {/* Section Header */}
                <div className="flex items-center gap-[12px] h-[38px]">
                  <div className="w-[40px] h-[40px] bg-brand-primary rounded-[6px] flex items-center justify-center">
                    <Route className="size-[16px] text-white" />
                  </div>
                  <h3 className="text-[16px] font-bold text-brand-primary">Route Information</h3>
                </div>

                <div className="flex flex-col gap-[16px] w-full">
                  
                  {/* Route Summary */}
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className="text-[14px] text-brand-primary">Route Summary</label>
                    <textarea 
                      placeholder="Summarize the primary path to hospital..."
                      className="w-full h-[114px] py-[12px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary resize-none"
                    />
                  </div>

                  {/* Routes */}
                  <div className="flex gap-[16px] w-full">
                    <div className="flex flex-col gap-[8px] flex-1">
                      <label className="text-[14px] text-brand-primary">Main Access Route</label>
                      <input 
                        type="text" 
                        defaultValue="A40 via North Circular"
                        className="w-full h-[51px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] flex-1">
                      <label className="text-[14px] text-brand-primary">Alt Route</label>
                      <input 
                        type="text" 
                        defaultValue="B122 backroads"
                        className="w-full h-[51px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                  </div>

                  {/* Traffic/Access Restrictions */}
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className="text-[14px] text-brand-primary">Traffic/Access Restrictions</label>
                    <input 
                      type="text" 
                      defaultValue="e.g. Low bridge on High St, School zones..."
                      className="w-full h-[51px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  {/* Ambulance Access Notes */}
                  <div className="flex flex-col gap-[8px] w-full">
                    <label className="text-[14px] text-brand-primary">Ambulance Access Notes</label>
                    <input 
                      type="text" 
                      defaultValue="Entry code for gate 4, approach from North..."
                      className="w-full h-[51px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  {/* Map / Route Image Preview */}
                  <div className="flex flex-col gap-[6px] w-full">
                    <label className="text-[14px] text-brand-primary">Map / Route Image Preview</label>
                    <div className="w-full h-[192px] bg-[#f2f4f6] border-2 border-dashed border-[#e3e6ec] rounded-[8px] relative overflow-hidden flex items-center justify-center">
                      <Image 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
                        alt="Map Preview"
                        fill
                        sizes=""
                        className="object-cover opacity-60 mix-blend-multiply pointer-events-none"
                      />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="mb-[8px]">
                          <Info className="size-[27px] text-brand-primary" />
                        </div>
                        <h4 className="text-[14px] font-bold text-brand-primary text-center">Route map selected</h4>
                        <p className="text-[12px] text-brand-secondary text-center">Click footer button to change image</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Bottom Notice */}
            <div className="w-full shrink-0 bg-[#d7e2ff] px-[32px] py-[12px] flex items-center gap-[12px] mt-auto">
              <Info className="size-[16px] text-brand-primary shrink-0" />
              <p className="text-[14px] text-brand-primary leading-[1.6]">
                Confirm hospital and route details before issuing the RAMS for site use.
              </p>
            </div>
          </div>

          {/* Footer (outside Body) */}
          <div className="flex items-center justify-between w-full shrink-0 mt-auto pt-[8px]">
            <div className="flex items-center gap-[16px] overflow-hidden pr-2">
              <button className="flex shrink-0 items-center justify-center h-[34px] px-[16px] bg-white border-[1.5px] border-brand-primary rounded-[6px] text-[12px] font-bold text-brand-primary hover:bg-slate-50 transition-colors whitespace-nowrap">
                Save Draft
              </button>
              <button className="flex shrink-0 items-center justify-center h-[34px] px-[16px] bg-brand-primary rounded-[6px] text-[12px] font-bold text-white hover:bg-[#0a1532] transition-colors whitespace-nowrap">
                Save & Close
              </button>
            </div>
            <button className="flex shrink-0 items-center justify-center h-[34px] px-[16px] bg-white border-[1.5px] border-brand-primary rounded-[6px] text-[12px] font-bold text-brand-primary hover:bg-slate-50 transition-colors whitespace-nowrap">
              Upload Map / Route Image
            </button>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
