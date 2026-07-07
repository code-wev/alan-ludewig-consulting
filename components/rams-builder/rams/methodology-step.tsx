import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  Plus,
  Camera,
  Paperclip,
  HardHat,
  Glasses,
  Shirt
} from "lucide-react";

interface MethodologyStepProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function MethodologyStep({ onPrevious, onNext }: MethodologyStepProps) {
  return (
    <div className="flex flex-col gap-6 w-full text-brand-primary">
      
      {/* Step Card 1: Expanded */}
      <div className="flex flex-col gap-0 rounded-[12px] border border-[#e3e6ec] bg-white overflow-hidden shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 border-b border-[#e3e6ec] bg-[#f8fafc]">
          <div className="flex items-center justify-center size-10 rounded-[6px] bg-[#0f172a] text-white font-bold text-[14px]">
            01
          </div>
          <h3 className="text-[16px] font-bold text-[#1e293b]">Site Preparation & Exclusion Zone</h3>
        </div>
        
        {/* Body */}
        <div className="flex flex-col xl:flex-row gap-8 p-6">
          {/* Left Side */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-brand-secondary">Description of Activity</label>
              <textarea 
                defaultValue="Inspect work area for hazards, clear debris, and install physical barriers to create a 3m exclusion zone around the working radius."
                className="w-full h-[72px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none"
              ></textarea>
            </div>
            
            {/* 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Responsible Role</label>
                <div className="relative">
                  <select className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-10 focus:outline-none focus:border-brand-primary">
                    <option>Site Supervisor</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Plant / Equipment</label>
                <input 
                  type="text" 
                  defaultValue="Safety Barriers, Cones, Tape"
                  className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Related Permit</label>
                <div className="relative">
                  <select className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-10 focus:outline-none focus:border-brand-primary">
                    <option>Not Required</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Hold Point Ref</label>
                <input 
                  type="text" 
                  defaultValue="HP-001"
                  className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>
            
            {/* Mandatory PPE */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-brand-secondary">Mandatory PPE</label>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#f1f5f9] border border-[#e2e8f0] text-[12px] font-bold text-[#475569]">
                  <HardHat className="size-[14px]" />
                  Hard Hat
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#f1f5f9] border border-[#e2e8f0] text-[12px] font-bold text-[#475569]">
                  <Glasses className="size-[14px]" />
                  Safety Glasses
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#f1f5f9] border border-[#e2e8f0] text-[12px] font-bold text-[#475569]">
                  <Shirt className="size-[14px]" />
                  Hi-Vis Vest
                </span>
                <button className="text-[12px] font-bold text-brand-secondary hover:text-brand-primary ml-1">
                  + Add More
                </button>
              </div>
            </div>
            
          </div>
          
          {/* Right Side (Visual) */}
          <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-2">
            <label className="text-[13px] text-brand-secondary">Step Visual & Annotations</label>
            
            {/* Image Container */}
            <div className="relative w-full h-[140px] rounded-[6px] border border-[#e3e6ec] bg-[#1e293b] overflow-hidden flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 bg-linear-to-br from-[#1e293b] to-[#0f172a] opacity-90"></div>
              <div className="relative z-10 w-[80%] h-[70%] bg-[#f8fafc] rounded-sm opacity-80 border-2 border-white/20 grid grid-cols-4 grid-rows-3 gap-1 p-1">
                  <div className="col-span-1 row-span-3 border border-slate-300"></div>
                  <div className="col-span-2 row-span-1 border border-slate-300"></div>
                  <div className="col-span-1 row-span-2 border border-slate-300"></div>
                  <div className="col-span-2 row-span-2 border border-slate-300 flex items-center justify-center relative bg-[#f1f5f9]">
                     <div className="absolute left-2 top-2 px-1.5 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold">1</div>
                     <div className="absolute right-4 bottom-2 px-1.5 py-0.5 rounded bg-[#1e3a8a] text-white text-[10px] font-bold">Barricade Line</div>
                     <div className="absolute right-6 bottom-7 text-red-600 text-[14px]">↙</div>
                  </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-1">
              <Button variant="outline" className="h-[36px] bg-[#f8fafc] border-[#e3e6ec] text-[12px] text-[#475569] hover:bg-[#f1f5f9] flex items-center gap-2">
                <Camera className="size-4" />
                Replace Photo
              </Button>
              <Button variant="outline" className="h-[36px] bg-[#f8fafc] border-[#e3e6ec] text-[12px] text-[#475569] hover:bg-[#f1f5f9] flex items-center gap-2">
                <Paperclip className="size-4" />
                Attach Doc
              </Button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Step Card 2: Collapsed */}
      <div className="flex flex-col gap-0 rounded-[12px] border border-[#e3e6ec] bg-white overflow-hidden shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 border-b border-[#e3e6ec] bg-[#f8fafc]">
          <div className="flex items-center justify-center size-10 rounded-[6px] bg-[#0f172a] text-white font-bold text-[14px]">
            02
          </div>
          <h3 className="text-[16px] font-bold text-[#1e293b]">Isolation of Energy Sources</h3>
        </div>
        
        {/* Body */}
        <div className="flex flex-col p-6">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_250px_250px] gap-6">
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-brand-secondary">Description of Activity</label>
              <textarea 
                defaultValue="Locate and isolate all relevant circuit breakers. Apply Lock-Out Tag-Out (LOTO) devices to ensure zero energy state before work commences."
                className="w-full h-[64px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none"
              ></textarea>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-brand-secondary">Responsible Role</label>
              <div className="relative">
                <select className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-10 focus:outline-none focus:border-brand-primary">
                  <option>Qualified Electrician</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-brand-secondary">Related Permit</label>
              <div className="relative">
                <select className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-10 focus:outline-none focus:border-brand-primary">
                  <option>Electrical Isolation Permit</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
              </div>
            </div>
            
          </div>
          
          <button className="flex items-center gap-2 text-[12px] font-bold text-brand-secondary hover:text-brand-primary mt-4 w-fit">
            <Plus className="size-4" />
            Expand More Fields
          </button>
        </div>
      </div>

      {/* Insert Next Step Button */}
      <div className="flex flex-col items-center justify-center py-10 rounded-[12px] border-2 border-dashed border-[#cbd5e1] bg-white text-center cursor-pointer hover:bg-slate-50 transition-colors shadow-sm">
        <div className="flex items-center justify-center size-10 rounded-full border border-[#475569] text-[#475569] mb-3">
          <Plus className="size-5" />
        </div>
        <h4 className="text-[15px] font-bold text-[#1e293b] mb-1">Insert Next Methodology Step</h4>
        <p className="text-[13px] text-brand-secondary">Drag and drop to reorder anytime</p>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-[#e3e6ec]">
        <Button 
          variant="outline" 
          className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
          onClick={onPrevious}
        >
          Save Draft
        </Button>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[11px] text-brand-secondary">Estimated Completion</span>
            <span className="text-[13px] font-bold text-[#1e3a8a]">85% Processed</span>
          </div>
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-[#0d1b2a] text-white font-bold text-[14px] hover:bg-black"
            onClick={onNext}
          >
            Next: Emergency Details
          </Button>
        </div>
      </div>

    </div>
  );
}
