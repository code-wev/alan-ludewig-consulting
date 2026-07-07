import React, { useState } from "react";
import { Eye, Trash2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AddCustomWorkTypeModal } from "./add-custom-work-type-modal";

interface ScopeOfWorksStepProps {
  onPrevious: () => void;
  onNext: () => void;
}

const WORK_TYPES = [
  { id: "excavation", label: "Excavation", icon: "🏗️", isActive: true },
  { id: "hot-works", label: "Hot Works", icon: "🔥", isActive: false },
  { id: "lifting", label: "Lifting", icon: "🏗️", isActive: false },
  { id: "electrical", label: "Electrical", icon: "⚡", isActive: false },
  { id: "plumbing", label: "Plumbing", icon: "🔧", isActive: false },
  { id: "carpentry", label: "Carpentry", icon: "🔨", isActive: false },
  { id: "groundworks", label: "GROUNDWORKS", icon: "⛏️", isActive: false },
  { id: "demolition", label: "Demolition", icon: "🏚️", isActive: false },
  { id: "roofing", label: "Roofing", icon: "🏠", isActive: false },
  { id: "ar-height", label: "Ar Height", icon: "🪜", isActive: false },
  { id: "temporary", label: "Temporary", icon: "🚧", isActive: false },
  { id: "other", label: "Other", icon: "🛠️", isActive: false },
];

export function ScopeOfWorksStep({ onPrevious, onNext }: ScopeOfWorksStepProps) {
  const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>(["excavation"]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleWorkType = (id: string) => {
    setSelectedWorkTypes(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start w-full text-brand-primary relative">
      
      {/* Left: Core Details (2 columns) */}
      <div className="col-span-1 xl:col-span-2 flex flex-col gap-6 w-full">
        
        {/* Top Details Box */}
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8 shadow-sm">
          
          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Scope of Works Title</label>
            <input 
              type="text" 
              placeholder="e.g., HVAC System Maintenance - Block A"
              className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Detailed Scope of Works</label>
            <textarea 
              placeholder="Add any specific considerations or high-level project objectives here..."
              rows={3}
              className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <label className="text-[16px] font-bold text-brand-primary">Supporting Scope Image</label>
                <span className="text-[12px] text-brand-secondary">Upload photos, drawings, or diagrams relevant to the scope of works.</span>
              </div>
              <Button className="h-[34px] px-4 rounded-[6px] bg-brand-primary text-[12px] font-bold text-white hover:bg-[#0d1b3a]">
                Add Image
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Image Thumbnail 1 */}
              <div className="flex flex-col rounded-[12px] border border-[#e3e6ec] bg-white overflow-hidden pb-4">
                <div className="h-[211px] w-full relative">
                  <Image src="https://images.unsplash.com/photo-1541888086925-0c1332dd0946?q=80&w=2940&auto=format&fit=crop" alt="Site layout" fill sizes="" className="absolute inset-0 size-full object-cover" />
                </div>
                <div className="flex items-center justify-between px-4 pt-4">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-brand-primary truncate max-w-[180px]">Site layout-groundworks area</span>
                    <span className="text-[12px] text-brand-secondary">JPEG. 2.1 MB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center justify-center p-1.5 rounded-[4px] hover:bg-gray-100 text-[#3b82f6] transition-colors">
                      <Eye className="size-[18px]" />
                    </button>
                    <button className="flex items-center justify-center p-1.5 rounded-[4px] hover:bg-gray-100 text-[#ef4444] transition-colors">
                      <Trash2 className="size-[18px]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Thumbnail 2 */}
              <div className="flex flex-col rounded-[12px] border border-[#e3e6ec] bg-white overflow-hidden pb-4">
                <div className="h-[211px] w-full relative">
                  <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop" alt="Drainage drawing" fill sizes="" className="absolute inset-0 size-full object-cover" />
                </div>
                <div className="flex items-center justify-between px-4 pt-4">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-brand-primary truncate max-w-[180px]">Drainage detail drawing</span>
                    <span className="text-[12px] text-brand-secondary">PNG. 2.1 MB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center justify-center p-1.5 rounded-[4px] hover:bg-gray-100 text-[#3b82f6] transition-colors">
                      <Eye className="size-[18px]" />
                    </button>
                    <button className="flex items-center justify-center p-1.5 rounded-[4px] hover:bg-gray-100 text-[#ef4444] transition-colors">
                      <Trash2 className="size-[18px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 pt-2">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Work Area / Location</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-secondary">
                  <MapPin className="size-4" />
                </div>
                <input 
                  type="text" 
                  placeholder="Floor level, Room numbers..."
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] pl-10 pr-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Work Constraints</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-secondary">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/org/2000/svg">
                    <path d="M16.9944 13.9142L9.82772 1.51421C9.64335 1.19472 9.34091 0.957597 8.97864 0.849646C8.61637 0.741695 8.21976 0.770308 7.87602 0.929849C7.53228 1.08939 7.26629 1.36836 7.13286 1.71216C6.99944 2.05597 7.00845 2.43981 7.15772 2.77671L14.3244 15.1767C14.5088 15.4962 14.8112 15.7333 15.1735 15.8413C15.5358 15.9492 15.9324 15.9206 16.2761 15.7611C16.6198 15.6015 16.8858 15.3226 17.0193 14.9788C17.1527 14.635 17.1437 14.2511 16.9944 13.9142Z" fill="currentColor"/>
                    <path d="M1.38356 2.77661C1.53278 2.43963 1.54173 2.05574 1.40825 1.71191C1.27477 1.36809 1.00874 1.08913 0.665004 0.92964C0.321267 0.770151 -0.0753066 0.741624 -0.437515 0.849633C-0.799723 0.957642 -1.10207 1.19479 -1.28634 1.51428L-8.45301 13.9143C-8.60223 14.2513 -8.61118 14.6351 -8.4777 14.979C-8.34422 15.3228 -8.07819 15.6017 -7.73445 15.7612C-7.39072 15.9207 -6.99414 15.9492 -6.63193 15.8412C-6.26973 15.7332 -5.96737 15.4961 -5.78311 15.1766L1.38356 2.77661Z" fill="currentColor"/>
                    <path d="M7.87085 11.2384H10.5375V12.5717H7.87085V11.2384Z" fill="currentColor"/>
                    <path d="M8.53752 5.2384H9.87085V9.90507H8.53752V5.2384Z" fill="currentColor"/>
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Permits, time limits..."
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] pl-10 pr-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Work Type Multi-select Bento Grid */}
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8 shadow-sm">
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-[16px] font-bold text-brand-primary">Identified Work Activities & Hazards</h3>
              <p className="text-[12px] text-brand-secondary max-w-[550px] leading-[1.6]">
                Select all activities and hazard relevant to this project. You can choose multiple options. This Selections will help tailor recommended controls and guidance later in the RAMS
              </p>
            </div>
            <Button onClick={() => setIsModalOpen(true)} className="h-[34px] px-4 rounded-[6px] bg-brand-primary text-[12px] font-bold text-white hover:bg-[#0d1b3a]">
              Add Custom Work Type
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {WORK_TYPES.map((type) => {
              const isSelected = selectedWorkTypes.includes(type.id);
              return (
                <div 
                  key={type.id}
                  onClick={() => toggleWorkType(type.id)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-2 p-4 rounded-[4px] border border-[#e3e6ec] cursor-pointer transition-colors h-[90px]",
                    isSelected ? "bg-brand-primary text-white border-brand-primary" : "bg-[#f3f5f8] text-brand-primary hover:bg-[#e9ecf2]"
                  )}
                >
                  <span className="text-lg">{type.icon}</span>
                  <span className={cn("text-[12px] font-regular text-center leading-[1.2]", isSelected ? "text-white" : "text-brand-primary")}>
                    {type.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Actions */}
        <div className="flex items-center gap-4 mt-2">
          <Button variant="outline" onClick={onPrevious} className="h-[42px] px-6 rounded-[6px] border-[#e3e6ec] bg-white text-[14px] font-bold text-brand-primary hover:bg-gray-50">
            Previous Step
          </Button>
          <Button variant="outline" className="h-[42px] px-6 rounded-[6px] border-[#e3e6ec] bg-white text-[14px] font-bold text-brand-primary hover:bg-gray-50 ml-auto">
            Save Draft
          </Button>
          <Button onClick={onNext} className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-[14px] font-bold text-white hover:bg-[#0d1b3a]">
            Next: Arrangements
          </Button>
        </div>

      </div>

      {/* Right: Risk & Notes */}
      <div className="col-span-1 flex flex-col gap-6 w-full sticky top-6">
        
        {/* Site Characteristics Toggles */}
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-6 shadow-sm">
          <h3 className="text-[16px] font-bold text-brand-primary">Site Characteristics</h3>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-brand-primary">Out-of-Hours Work</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-brand-primary">Occupied Premises</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-brand-primary">Public Interface</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-brand-primary">Existing Services Present</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-brand-primary">High-Risk Work</span>
              <Switch />
            </div>
          </div>
        </div>

        {/* Site-Specific Scope Notes */}
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-6 shadow-sm">
          <h3 className="text-[16px] font-bold text-brand-primary">Site-Specific Scope Notes</h3>
          
          <div className="flex flex-col gap-4">
            <textarea 
              placeholder="Add any unusual observations or specific site hazards noted during initial visit..."
              rows={5}
              className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
            />
            
            <div className="flex items-start gap-3 rounded-[6px] bg-[#f3f5f8] p-4">
              <div className="text-brand-secondary mt-0.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/org/2000/svg">
                  <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14.4C4.48 14.4 1.6 11.52 1.6 8C1.6 4.48 4.48 1.6 8 1.6C11.52 1.6 14.4 4.48 14.4 8C14.4 11.52 11.52 14.4 8 14.4ZM7.2 4H8.8V5.6H7.2V4ZM7.2 7.2H8.8V12H7.2V7.2Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-[12px] text-brand-secondary leading-[1.6]">
                Notes added here will ben prepended to the final Method Statement document as &apos;Project Specific Hazards&apos;.
              </p>
            </div>
          </div>
        </div>

      </div>

      <AddCustomWorkTypeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}
