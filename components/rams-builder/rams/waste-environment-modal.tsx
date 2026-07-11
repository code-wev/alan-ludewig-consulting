import React from "react";
import { 
  X, Trash2, PlusCircle, Leaf, ShieldPlus, 
  RotateCcw, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface WasteEnvironmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WasteEnvironmentModal({ isOpen, onClose }: WasteEnvironmentModalProps) {
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
            <h2 className="text-[24px] font-bold text-brand-primary">Waste & Environment</h2>
            <p className="text-[14px] text-brand-secondary mt-1">
              Record environmental controls, waste streams, disposal arrangements and spill prevention measures for this project.
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
        <div className="px-8 pb-8 flex flex-col gap-10 overflow-y-auto flex-1 no-scrollbar">
          
          {/* Section 1: Waste & Disposal Controls */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2">
              <Trash2 className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary">Waste & Disposal Controls</h3>
            </div>
            
            <div className="flex flex-col rounded-[12px] border border-[#e3e6ec] overflow-hidden">
              <div className="grid grid-cols-[140px_1fr_1fr_140px_90px_90px_120px_60px] gap-4 px-4 py-3 bg-[#dbeafe] text-[#1e3a8a] text-[12px] font-bold">
                <div>Waste Type</div>
                <div>Waste Stream</div>
                <div>Segregation Req.</div>
                <div>Disposal Method</div>
                <div className="text-center">Carrier Req.</div>
                <div className="text-center">Note Req.</div>
                <div>Notes</div>
                <div className="text-center">Actions</div>
              </div>
              
              <div className="grid grid-cols-[140px_1fr_1fr_140px_90px_90px_120px_60px] gap-4 px-4 py-4 items-center bg-white border-t border-[#e3e6ec]">
                <div className="relative">
                  <select className="w-full h-[36px] px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-8 focus:outline-none focus:border-brand-primary">
                    <option>Hazardous</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                </div>
                
                <input 
                  type="text" 
                  defaultValue="COSHH Waste"
                  className="w-full h-[36px] px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary"
                />
                
                <input 
                  type="text" 
                  defaultValue="Separate Bin"
                  className="w-full h-[36px] px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary"
                />
                
                <input 
                  type="text" 
                  defaultValue="Specialist Pickup"
                  className="w-full h-[36px] px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary"
                />
                
                <div className="flex justify-center">
                  <Switch defaultChecked />
                </div>
                
                <div className="flex justify-center">
                  <Switch defaultChecked />
                </div>
                
                <input 
                  type="text" 
                  defaultValue="-"
                  className="w-full h-[36px] px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary"
                />
                
                <div className="flex justify-center">
                  <button className="text-red-500 hover:text-red-600 transition-colors">
                    <Trash2 className="size-[18px]" />
                  </button>
                </div>
              </div>
            </div>
            
            <button className="flex items-center gap-2 text-[13px] font-bold text-brand-primary hover:text-brand-secondary transition-colors w-fit">
              <PlusCircle className="size-[18px]" />
              Add Waste Stream
            </button>
          </div>

          {/* Section 2: Spill Prevention & Environmental Protection */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary">Spill Prevention & Environmental Protection</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Spill Kit Location</label>
                <input 
                  type="text" 
                  placeholder="e.g. Main Site Office / Storage Yard"
                  className="w-full h-[42px] px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Spill Response Procedure</label>
                <input 
                  type="text" 
                  placeholder="e.g. Contain, Notify Site Manager, Clean-up"
                  className="w-full h-[42px] px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Drain Protection Measures</label>
                <input 
                  type="text" 
                  placeholder="e.g. Drain mats, bungs, sandbags"
                  className="w-full h-[42px] px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Dust Suppression Measures</label>
                <input 
                  type="text" 
                  placeholder="e.g. Water spray, localized extraction"
                  className="w-full h-[42px] px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Noise / Vibration Controls</label>
                <input 
                  type="text" 
                  placeholder="e.g. Acoustic barriers, time restrictions"
                  className="w-full h-[42px] px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Environmental Protection Notes</label>
                <input 
                  type="text" 
                  placeholder="Additional details..."
                  className="w-full h-[42px] px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Additional Controls */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldPlus className="size-5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary">Additional Controls</h3>
              </div>
              <button className="flex items-center gap-2 text-[13px] font-bold text-[#1e3a8a] hover:text-[#1e3a8a]/80 transition-colors">
                <PlusCircle className="size-[18px]" />
                Add Additional Environmental Control
              </button>
            </div>
            
            <textarea 
              placeholder="Enter custom control measures or specific site constraints here..."
              className="w-full h-[100px] p-4 rounded-[8px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
            ></textarea>
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
          <button className="flex items-center gap-2 text-[13px] font-bold text-brand-secondary hover:text-brand-primary transition-colors">
            <RotateCcw className="size-4" />
            Reset Form
          </button>
        </div>
      </div>
    </div>
  );
}
