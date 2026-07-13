import React from "react";
import { X, Info, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface AddCustomWorkTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: any) => void;
}

export function AddCustomWorkTypeModal({ isOpen, onClose }: AddCustomWorkTypeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[800px] max-w-full bg-white rounded-[12px] shadow-lg border border-[#e3e6ec] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-4">
          <h2 className="text-[24px] font-bold text-brand-primary">Add Custom Work Type</h2>
          <button 
            onClick={onClose}
            className="text-brand-secondary hover:text-brand-primary transition-colors"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 flex flex-col gap-6 overflow-y-auto max-h-[80vh] no-scrollbar">
          
          {/* Info Banner */}
          <div className="flex items-center gap-3 bg-[#eef2ff] border border-[#d6e0ff] rounded-[8px] p-4 text-[#1e3a8a]">
            <Info className="size-5 shrink-0" />
            <p className="text-[14px] leading-normal">
              Custom work types can be used to tailor RAMS content and safety suggestions for this project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Work Type Name</label>
              <input 
                type="text" 
                placeholder="e.g. Solar Panel Installation"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Work Category</label>
              <div className="relative">
                <select className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                  <option>Construction</option>
                  <option>Electrical</option>
                  <option>Maintenance</option>
                  <option>Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Short Description</label>
            <textarea 
              placeholder="Briefly describe the activities involved..."
              rows={3}
              className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-center gap-2 mt-4">
              <label className="text-[16px] font-bold text-brand-primary">Compliance Status</label>
              <div className="flex items-center gap-3">
                <Switch defaultChecked />
                <span className="text-[14px] text-brand-secondary">High-Risk Activity</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Suggested Related Permit</label>
              <div className="relative">
                <select className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                  <option>None</option>
                  <option>Hot Works Permit</option>
                  <option>Confined Space Permit</option>
                  <option>Working at Height Permit</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Suggested PPE Notes</label>
            <textarea 
              placeholder="Specific PPE requirements for this work type..."
              rows={3}
              className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
            />
          </div>

          <div className="flex items-center gap-3 mt-2">
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-5 h-5 bg-white border border-[#e3e6ec] rounded-[4px] peer-checked:bg-brand-primary peer-checked:border-brand-primary flex items-center justify-center after:content-[''] after:w-[10px] after:h-[10px] after:bg-white after:rounded-sm after:scale-0 peer-checked:after:scale-100 transition-all"></div>
            </label>
            <span className="text-[14px] text-brand-secondary">Add to future templates library</span>
          </div>

          {/* Footer actions */}
          <div className="mt-4 flex items-center">
            <Button className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-[14px] font-bold text-white hover:bg-[#0d1b3a]">
              Save as Custom Work Type
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
