import { X, ChevronDown, ShieldCheck, Search, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface AddCustomPPEModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: any) => void;
}

export function AddCustomPPEModal({ isOpen, onClose }: AddCustomPPEModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[800px] max-w-full bg-white rounded-[12px] shadow-lg border border-[#e3e6ec] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-4">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center size-10 rounded-[8px] bg-[#1e3a8a] text-white shrink-0">
              <ShieldCheck className="size-5" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[24px] font-bold text-brand-primary">Add Custom PPE Requirement</h2>
              <p className="text-[14px] text-brand-secondary">
                Configure site-specific safety equipment
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-brand-secondary hover:text-brand-primary transition-colors mt-1"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 flex flex-col gap-6 overflow-y-auto max-h-[80vh] no-scrollbar">
          
          <div className="flex gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">PPE Category</label>
              <div className="relative">
                <select className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none text-[#a3acba] focus:border-brand-primary appearance-none bg-white">
                  <option>Head Protection</option>
                  <option>Eye Protection</option>
                  <option>Hand Protection</option>
                  <option>Foot Protection</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
              </div>
            </div>
            
            <div className="w-[200px] shrink-0 h-[80px] rounded-[6px] border-[1.5px] border-dashed border-[#e3e6ec] bg-[#f8fafc] flex flex-col items-center justify-center gap-1 mt-[26px]">
              <HardHat className="size-6 text-[#1e3a8a]" />
              <span className="text-[12px] font-bold text-brand-primary">Preview Sign</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Specific PPE Type</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Search className="size-4 text-[#a3acba]" />
              </div>
              <input 
                type="text" 
                placeholder="Search standard PPE types (e.g. FFP3 Mask, Nitrile Gloves...)"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] pl-10 pr-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div className="flex flex-col gap-4">
              <span className="text-[14px] font-bold text-brand-primary">Compliance Status</span>
              <div className="flex items-center gap-3">
                <Switch defaultChecked />
                <span className="text-[14px] text-brand-secondary">Mandatory for Task</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Related Hazard</label>
              <input 
                type="text" 
                placeholder="e.g. Airborne Dust, Falling Objects"
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary bg-white"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Related Methodology Step</label>
            <div className="relative">
              <select className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                <option>General Site Access</option>
                <option>Step 1: Mobilization & Site Setup</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Specific Usage Notes</label>
            <textarea 
              placeholder="e.g. Must be worn at all times when within 2 meters of the live zone."
              rows={3}
              className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Inspection Requirement</label>
            <textarea 
              placeholder="e.g. Daily visual inspection for cracks or strap fatigue required before shift."
              rows={3}
              className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
            />
          </div>

          {/* Footer actions */}
          <div className="flex items-center gap-4 mt-2">
            <Button variant="outline" onClick={onClose} className="h-[42px] px-6 rounded-[6px] border-[#e3e6ec] bg-white text-[14px] font-bold text-brand-primary hover:bg-gray-50">
              Save Draft
            </Button>
            <Button className="h-[42px] px-6 rounded-[6px] bg-[#1e3a8a] text-[14px] font-bold text-white hover:bg-[#1e3a8a]/90">
              Add PPE Requirement
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
