import React from "react";
import { MapPin, Calendar, Menu, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectDetailsStepProps {
  onNext: () => void;
}

export function ProjectDetailsStep({ onNext }: ProjectDetailsStepProps) {
  return (
    <div className="flex flex-col xl:flex-row gap-8 items-start w-full">
      {/* Left: Form Section */}
      <div className="flex flex-col gap-6 w-full xl:w-[70%]">
        
        {/* Project Identification */}
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 border-b border-[#e3e6ec] pb-4">
            <ClipboardList className="size-5 text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary">Project Identification</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Project Name</label>
              <input 
                type="text" 
                placeholder="enter your project name"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">RAMS Reference Number</label>
              <input 
                type="text" 
                defaultValue="RAMS-2023-0042"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary bg-[#f3f5f8] opacity-70"
              />
              <span className="text-[12px] text-brand-secondary mt-1 leading-[1.6]">
                Auto-generated reference number. You may edit this to use your own internal client / project reference.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Client / Company Name</label>
              <input 
                type="text" 
                placeholder="e.g. Horizon Developers"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Principal Contractor</label>
              <input 
                type="text" 
                placeholder="Primary contractor name"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>
          </div>
        </div>

        {/* Site Information */}
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 border-b border-[#e3e6ec] pb-4">
            <MapPin className="size-5 text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary">Site Information</h3>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Site Name</label>
              <input 
                type="text" 
                placeholder="Specific site or building name"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Full Site Address</label>
              <textarea 
                placeholder="Street, City, Postal Code"
                rows={3}
                className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Site Contact Name</label>
                <input 
                  type="text" 
                  placeholder="Primary contact person"
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Site Contact Number</label>
                <input 
                  type="text" 
                  placeholder="+44 0000 000000"
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Timing & Accountability */}
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 border-b border-[#e3e6ec] pb-4">
            <Calendar className="size-5 text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary">Timing & Accountability</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Responsible Person</label>
              <input 
                type="text" 
                placeholder="Safety officer or lead"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">RAMS Author</label>
              <input 
                type="text" 
                defaultValue="Alan Ludewig"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Project Start Date</label>
              <input 
                type="text" 
                placeholder="mm/dd/yyyy"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Estimated Duration</label>
              <input 
                type="text" 
                placeholder="e.g. 3 Months"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Review Date</label>
              <input 
                type="text" 
                placeholder="mm/dd/yyyy"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>
          </div>
        </div>

        {/* Project Notes */}
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 border-b border-[#e3e6ec] pb-4">
            <Menu className="size-5 text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary">Project Notes</h3>
          </div>
          
          <div className="flex flex-col gap-2">
            <textarea 
              placeholder="Add any specific considerations or high-level project objectives here..."
              rows={4}
              className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
            />
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center gap-4 mt-2">
          <Button variant="outline" className="h-[42px] px-6 rounded-[6px] border-[#e3e6ec] bg-white text-[14px] font-bold text-brand-primary hover:bg-gray-50">
            Save Draft
          </Button>
          <Button onClick={onNext} className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-[14px] font-bold text-white hover:bg-[#0d1b3a]">
            Next: Scope of Works
          </Button>
        </div>

      </div>

      {/* Right: RAMS Summary Sidebar */}
      <div className="flex flex-col gap-10 w-full xl:w-[30%] sticky top-6">
        
        {/* Summary Box */}
        <div className="flex flex-col gap-4 rounded-[12px] border border-[#e3e6ec] bg-brand-primary p-6 shadow-sm relative">
          {/* Subtle shadow overlay from design */}
          <div className="absolute -inset-px rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] pointer-events-none" />
          
          <h3 className="text-[16px] font-bold text-white relative z-10">RAMS Summary</h3>
          
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex flex-col">
              <span className="text-[12px] text-white opacity-60 leading-[1.6]">Project Name</span>
              <span className="text-[14px] font-bold text-white leading-[1.6]">Unnamed Project</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[12px] text-white opacity-60 leading-[1.6]">Reference</span>
              <span className="text-[14px] font-bold text-white leading-[1.6]">RAMS-2023-0042</span>
            </div>

            <div className="flex flex-col gap-2 border-t border-white/10 pt-4 mt-1">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold text-white leading-[1.6]">Completion</span>
                <span className="text-[12px] font-bold text-white leading-[1.6]">12.5%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-brand-secondary overflow-hidden">
                <div className="h-full bg-white" style={{ width: "12.5%" }} />
              </div>
            </div>

            <div className="flex items-start justify-between border-t border-white/10 pt-4 mt-1">
              <div className="flex flex-col">
                <span className="text-[12px] text-white opacity-60 leading-[1.6]">Current Step</span>
                <span className="text-[14px] font-bold text-white leading-[1.6]">01 / 08</span>
              </div>
              <div className="flex flex-col gap-1 min-w-[106px]">
                <span className="text-[12px] text-white opacity-60 leading-[1.6]">Draft Status</span>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-[#b4c5fa]" />
                  <span className="text-[14px] font-bold text-white leading-[1.6]">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Placeholder Box */}
        <div className="border border-[#e3e6ec] rounded-[12px] h-[192px] p-px relative overflow-hidden flex flex-col justify-end">
          <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888086925-0c1332dd0946?q=80&w=2940&auto=format&fit=crop')" }}>
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.6)] to-transparent" />
          <div className="relative z-10 p-4">
            <span className="text-[14px] font-bold text-white">Visual Site Planner Placeholder</span>
          </div>
        </div>

      </div>
    </div>
  );
}
