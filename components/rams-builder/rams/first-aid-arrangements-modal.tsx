import React from "react";
import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface FirstAidArrangementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FirstAidArrangementsModal({ isOpen, onClose }: FirstAidArrangementsModalProps) {
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
            <h2 className="text-[24px] font-bold text-brand-primary">First Aid Arrangements</h2>
            <p className="text-[14px] text-brand-secondary mt-1">
              Record first aid personnel, equipment, treatment locations and incident response arrangements.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-2">
            
            {/* Left Column: First Aid Cover */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between pb-2 border-b border-[#e3e6ec]">
                <h3 className="text-[14px] font-medium text-brand-primary">First Aid Cover</h3>
                <div className="flex items-center gap-3">
                  <span className="text-[13px] text-brand-secondary">Primary First Aider</span>
                  <Switch />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">First Aider Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Role / Company</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Safety Lead / AL Consulting"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Contact Number</label>
                  <input 
                    type="text" 
                    placeholder="+44 7000 000 000"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] text-brand-secondary">First Aid Qualification</label>
                    <input 
                      type="text" 
                      placeholder="Select qualification"
                      className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] text-brand-secondary">Qualification Expiry Date</label>
                    <input 
                      type="text" 
                      placeholder="mm/dd/yyyy"
                      className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                    />
                  </div>
                </div>
              </div>
              
              <button className="flex items-center gap-2 text-[13px] font-bold text-[#1e3a8a] hover:text-[#1e3a8a]/80 transition-colors w-fit mt-2">
                <Plus className="size-[16px]" />
                Add Another First Aider
              </button>
            </div>

            {/* Right Column: First Aid Facilities */}
            <div className="flex flex-col gap-5">
              <div className="pb-2 border-b border-[#e3e6ec]">
                <h3 className="text-[14px] font-medium text-brand-primary">First Aid Facilities</h3>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">First Aid Kit Location</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Site Office Reception"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Defibrillator Location</label>
                  <div className="flex items-center gap-4">
                    <input 
                      type="text" 
                      placeholder="e.g. Security Desk"
                      className="flex-1 h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                    />
                    <div className="flex items-center gap-3 shrink-0 w-[200px]">
                      <Switch />
                      <span className="text-[13px] text-brand-secondary">Defibrillator Available</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Eyewash Station Location</label>
                  <div className="flex items-center gap-4">
                    <input 
                      type="text" 
                      placeholder="e.g. Canteen Corridor"
                      className="flex-1 h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                    />
                    <div className="flex items-center gap-3 shrink-0 w-[200px]">
                      <Switch />
                      <span className="text-[13px] text-brand-secondary">Emergency Shower Available</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Medical Room / Welfare Point</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Ground Floor, Room 102"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Accident Reporting Procedure</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Ground Floor, Room 102"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section: Emergency Medical Response Notes */}
          <div className="flex flex-col gap-5 mt-2">
            <div className="pb-2 border-b border-[#e3e6ec]">
              <h3 className="text-[14px] font-medium text-brand-primary">Emergency Medical Response Notes</h3>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-brand-secondary">Emergency Procedure</label>
              <textarea 
                placeholder="Detail the steps to be taken in a medical emergency..."
                className="w-full h-[120px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Site-specific medical risks</label>
                <textarea 
                  placeholder="e.g. Remote location, extreme temperatures..."
                  className="w-full h-[100px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Additional First Aid Equipment</label>
                <textarea 
                  placeholder="e.g. Oxygen cylinders, stretchers..."
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
          
          <Button 
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
          >
            Add First Aider
          </Button>
        </div>
      </div>
    </div>
  );
}
