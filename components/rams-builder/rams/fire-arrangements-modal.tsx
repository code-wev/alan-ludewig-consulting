import React from "react";
import { 
  X, Flame, FireExtinguisher, LogOut, 
  PlusCircle, RotateCcw, Trash2, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface FireArrangementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FireArrangementsModal({ isOpen, onClose }: FireArrangementsModalProps) {
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
            <h2 className="text-[24px] font-bold text-brand-primary">Fire Arrangements</h2>
            <p className="text-[14px] text-brand-secondary mt-1">
              Define fire prevention controls, firefighting equipment, evacuation procedures and emergency assembly details.
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
          
          {/* Section 1: Fire Prevention */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2">
              <Flame className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary">Fire Prevention</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 bg-[#f1f5f9] rounded-[8px] border border-[#e2e8f0]">
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] font-bold text-brand-primary">Hot Works Present</span>
                  <span className="text-[12px] text-brand-secondary">Does the task involve welding, cutting, or grinding?</span>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-[#f1f5f9] rounded-[8px] border border-[#e2e8f0]">
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] font-bold text-brand-primary">Fire Watch Required</span>
                  <span className="text-[12px] text-brand-secondary">Is a dedicated person required to monitor for 30/60m?</span>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Combustible Materials Control</label>
                <textarea 
                  placeholder="Describe how combustible materials will be managed..."
                  className="w-full h-[100px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Ignition Source Controls</label>
                <textarea 
                  placeholder="Identify and list controls for potential ignition sources..."
                  className="w-full h-[100px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
                ></textarea>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-[13px] text-brand-secondary">Fire Risk Notes</label>
              <input 
                type="text" 
                placeholder="General observations or specific site risks..."
                className="w-full h-[42px] px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
              />
            </div>
          </div>

          {/* Section 2: Firefighting Equipment */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FireExtinguisher className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary">Firefighting Equipment</h3>
            </div>
            
            <div className="flex flex-col rounded-[12px] border border-[#e3e6ec] overflow-hidden">
              <div className="grid grid-cols-[40px_1fr_1fr_60px_120px_150px_60px] gap-4 px-4 py-3 bg-[#dbeafe] text-[#1e3a8a] text-[12px] font-bold items-center">
                <div className="flex justify-center">
                  <input type="checkbox" className="rounded-[4px] border-[#c4cce0] text-brand-primary focus:ring-brand-primary" />
                </div>
                <div>Equipment Type</div>
                <div>Location</div>
                <div>QTY</div>
                <div>Inspection Date</div>
                <div>Responsible</div>
                <div className="text-center">Action</div>
              </div>
              
              {[
                { type: "CO2 Extinguisher", loc: "Main Switch Room", qty: "2", date: "11/20/2026", resp: "Site Manager" },
                { type: "CO2 Extinguisher", loc: "Welfare Unit Entrance", qty: "1", date: "11/20/2026", resp: "S. Harrison" },
                { type: "CO2 Extinguisher", loc: "Welfare Unit Entrance", qty: "2", date: "11/20/2026", resp: "Site Manager" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-[40px_1fr_1fr_60px_120px_150px_60px] gap-4 px-4 py-4 bg-white border-t border-[#e3e6ec] text-[13px] text-brand-primary items-center">
                  <div className="flex justify-center">
                    <input type="checkbox" className="rounded-[4px] border-[#c4cce0] text-brand-primary focus:ring-brand-primary" />
                  </div>
                  <div className="relative">
                    <select className="w-full h-[36px] px-3 rounded-[6px] border border-transparent hover:border-[#e3e6ec] text-[13px] text-brand-primary bg-transparent appearance-none pr-8 focus:outline-none focus:border-brand-primary cursor-pointer font-medium">
                      <option>{row.type}</option>
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                  </div>
                  <div className="text-brand-secondary">{row.loc}</div>
                  <div className="text-brand-secondary">{row.qty}</div>
                  <div className="text-brand-secondary">{row.date}</div>
                  <div className="text-brand-secondary">{row.resp}</div>
                  <div className="flex justify-center">
                    <button className="text-red-500 hover:text-red-600 transition-colors">
                      <Trash2 className="size-[18px]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-[13px] font-bold text-brand-primary hover:text-brand-secondary transition-colors w-fit">
              <PlusCircle className="size-[18px]" />
              Add New Equipment Row
            </button>
          </div>

          {/* Section 3: Evacuation & Emergency */}
          <div className="flex flex-col gap-4 pb-4">
            <div className="flex items-center gap-2">
              <LogOut className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary">Evacuation & Emergency</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Fire Assembly Point</label>
                <textarea 
                  placeholder="e.g. Main site entrance gate..."
                  className="w-full h-[80px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Fire Marshal</label>
                <textarea 
                  placeholder="e.g. John Doe, Sarah Smith..."
                  className="w-full h-[80px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
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
          <button className="flex items-center gap-2 text-[13px] font-bold text-brand-secondary hover:text-brand-primary transition-colors">
            <RotateCcw className="size-4" />
            Reset Form
          </button>
        </div>
      </div>
    </div>
  );
}
