"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Flame, 
  Check, 
  Zap,
  Ear,
  HardHat,
  Eye,
  Shirt,
  Search,
  FileText,
  Edit2,
  Trash2,
  Lock,
  Activity,
  MoveVertical,
  BoxSelect,
  FlaskConical,
  Truck,
  Volume2,
  Footprints,
  ClipboardList,
  BriefcaseMedical,
  PlusCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HazardsControlsStepProps {
  onPrevious: () => void;
  onNext: () => void;
  onOpenIsolationModal?: (tab?: string) => void;
}

const HAZARDS = [
  { id: "fire", label: "Fire & Hot Work", icon: Flame, iconColor: "text-[#d92d20]", checked: true },
  { id: "height", label: "Work at Height", icon: MoveVertical, iconColor: "text-brand-primary", checked: true },
  { id: "confined", label: "Confined Space", icon: BoxSelect, iconColor: "text-brand-primary", checked: false },
  { id: "electrical", label: "Electrical Systems", icon: Zap, iconColor: "text-brand-primary", checked: true },
  { id: "hazardous", label: "Hazardous Substances", icon: FlaskConical, iconColor: "text-brand-primary", checked: false },
  { id: "plant", label: "Plant & Machinery", icon: Truck, iconColor: "text-brand-primary", checked: false },
  { id: "noise", label: "Noise Pollution", icon: Volume2, iconColor: "text-brand-primary", checked: false },
];

const PPE_ITEMS = [
  { id: "hard_hat", label: "Hard Hat", icon: HardHat, selected: true },
  { id: "goggles", label: "Goggles", icon: Eye, selected: false },
  { id: "hi_vis", label: "Hi-Vis Vest", icon: Shirt, selected: true },
  { id: "ear_plugs", label: "Ear Plugs", icon: Ear, selected: false },
  { id: "boots", label: "Boots", icon: Footprints, selected: true },
];

export function HazardsControlsStep({ onPrevious, onNext, onOpenIsolationModal }: HazardsControlsStepProps) {
  const [hazards, setHazards] = useState(HAZARDS);
  const [ppe, setPpe] = useState(PPE_ITEMS);

  const toggleHazard = (id: string) => {
    setHazards(prev => prev.map(h => h.id === id ? { ...h, checked: !h.checked } : h));
  };

  const togglePPE = (id: string) => {
    setPpe(prev => prev.map(p => p.id === id ? { ...p, selected: !p.selected } : p));
  };

  return (
    <div className="flex flex-col gap-6 w-full font-['Sansation']">
      
      {/* 2-Column Grid for main sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-full">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          
          {/* Hazard Identification */}
          <div className="bg-white border border-[#e3e6ec] rounded-[12px] flex flex-col overflow-hidden shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <div className="bg-[#f2f4f8] border-b border-[#c5c6d0] px-6 py-4">
              <h3 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Hazard Identification</h3>
              <p className="text-[14px] text-brand-secondary leading-[1.6]">Select all hazards relevant to this permit.</p>
            </div>
            <div className="p-6 flex flex-col gap-4">
              {hazards.map(hazard => {
                const Icon = hazard.icon;
                return (
                  <div 
                    key={hazard.id}
                    className="border border-[#e3e6ec] rounded-[4px] p-3.5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleHazard(hazard.id)}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={cn("size-4", hazard.iconColor)} />
                      <span className="text-[16px] text-brand-primary leading-[1.6]">{hazard.label}</span>
                    </div>
                    <div className={cn(
                      "size-[18px] rounded-[4px] border flex items-center justify-center transition-colors",
                      hazard.checked ? "bg-brand-primary border-brand-primary" : "border-[#e3e6ec] bg-white"
                    )}>
                      {hazard.checked && <Check className="size-3 text-white" strokeWidth={3} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mandatory PPE */}
          <div className="bg-white border border-[#e3e6ec] rounded-[12px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-4">
            <h3 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Mandatory PPE</h3>
            <div className="grid grid-cols-3 gap-3">
              {ppe.map(item => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => togglePPE(item.id)}
                    className={cn(
                      "h-[76px] rounded-[8px] flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors border",
                      item.selected 
                        ? "bg-[rgba(218,226,255,0.05)] border-brand-primary border-2" 
                        : "border-[#e3e6ec] opacity-60 hover:opacity-80"
                    )}
                  >
                    <Icon className="size-5 text-brand-primary" />
                    <span className="text-[12px] text-brand-primary leading-[1.6] text-center">{item.label}</span>
                  </div>
                );
              })}
              
              {/* Add PPE Button */}
              <div className="h-[76px] rounded-[8px] flex flex-col items-center justify-center gap-1 cursor-pointer border border-dashed border-brand-secondary hover:bg-gray-50 transition-colors">
                <PlusCircle className="size-5 text-brand-secondary" />
                <span className="text-[12px] text-brand-primary leading-[1.6] text-center mt-0.5">Add PPE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          
          {/* Permit Question Set */}
          <div className="bg-white border border-[#e3e6ec] rounded-[12px] flex flex-col shadow-[0px_1px_1px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-[#e3e6ec]">
              <div className="flex flex-col">
                <h3 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Permit Question Set</h3>
                <p className="text-[14px] text-brand-secondary leading-[1.6]">Questions can be edited for this permit only. Changes here will not alter the global admin template.</p>
              </div>
              <Button className="h-[34px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] px-4 hover:bg-opacity-90 shrink-0">
                Add Control
              </Button>
            </div>
            
            <div className="p-6 flex flex-col gap-6 bg-[#f9fafc]">
              
              {/* Question 1 */}
              <div className="bg-white border border-[#e3e6ec] rounded-[8px] p-5 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-[15px] font-bold text-brand-primary leading-[1.6] mt-0.5">
                    1. Has the work area been cleared of combustible materials?
                  </h4>
                  <div className="flex items-center rounded-[6px] overflow-hidden border border-[#e3e6ec] shrink-0">
                    <button className="px-3 py-1 text-[12px] font-bold bg-brand-primary text-white">YES</button>
                    <button className="px-3 py-1 text-[12px] font-bold bg-white text-brand-secondary border-l border-r border-[#e3e6ec]">NO</button>
                    <button className="px-3 py-1 text-[12px] font-bold bg-white text-brand-secondary">N/A</button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <input 
                    type="text" 
                    placeholder="Add comment..." 
                    className="flex-1 h-[36px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] text-brand-primary placeholder:text-brand-secondary focus:outline-none focus:border-brand-primary"
                  />
                  <div className="flex items-center gap-4 shrink-0">
                    <FileText className="size-[18px] text-brand-secondary cursor-pointer hover:text-brand-primary" />
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div className="size-[14px] rounded-[3px] border border-[#e3e6ec] bg-white flex items-center justify-center" />
                      <span className="text-[12px] text-brand-secondary leading-[1.6]">Action Required</span>
                    </label>
                    <Edit2 className="size-[16px] text-[#059669] cursor-pointer hover:opacity-80" />
                    <Trash2 className="size-[16px] text-[#d92d20] cursor-pointer hover:opacity-80" />
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-white border border-[#e3e6ec] rounded-[8px] p-5 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-[15px] font-bold text-brand-primary leading-[1.6] mt-0.5">
                    2. Is a suitable fire extinguisher available at the work point?
                  </h4>
                  <div className="flex items-center rounded-[6px] overflow-hidden border border-[#e3e6ec] shrink-0">
                    <button className="px-3 py-1 text-[12px] font-bold bg-brand-primary text-white">YES</button>
                    <button className="px-3 py-1 text-[12px] font-bold bg-white text-brand-secondary border-l border-r border-[#e3e6ec]">NO</button>
                    <button className="px-3 py-1 text-[12px] font-bold bg-white text-brand-secondary">N/A</button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <input 
                    type="text" 
                    placeholder="Add comment..." 
                    className="flex-1 h-[36px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] text-brand-primary placeholder:text-brand-secondary focus:outline-none focus:border-brand-primary"
                  />
                  <div className="flex items-center gap-4 shrink-0">
                    <FileText className="size-[18px] text-brand-secondary cursor-pointer hover:text-brand-primary" />
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div className="size-[14px] rounded-[3px] border border-[#e3e6ec] bg-white flex items-center justify-center" />
                      <span className="text-[12px] text-brand-secondary leading-[1.6]">Action Required</span>
                    </label>
                    <Edit2 className="size-[16px] text-[#059669] cursor-pointer hover:opacity-80" />
                    <Trash2 className="size-[16px] text-[#d92d20] cursor-pointer hover:opacity-80" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-2">
                <div className="flex flex-col gap-3">
                  <h4 className="text-[14px] font-bold text-brand-primary leading-[1.6]">Required PPE</h4>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search PPE..." 
                      className="w-full h-[40px] rounded-[6px] border border-[#e3e6ec] px-3 pl-3 pr-10 text-[14px] text-brand-primary placeholder:text-brand-secondary focus:outline-none focus:border-brand-primary"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#f3f5f8] text-brand-secondary text-[12px] rounded-[4px]">Hard Hat</span>
                    <span className="px-3 py-1 bg-[#f3f5f8] text-brand-secondary text-[12px] rounded-[4px]">Hi-vis Vest</span>
                    <span className="px-3 py-1 bg-[#f3f5f8] text-brand-secondary text-[12px] rounded-[4px]">Safety Glasses</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-[14px] font-bold text-brand-primary leading-[1.6]">Control Measures</h4>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search Control Measures..." 
                      className="w-full h-[40px] rounded-[6px] border border-[#e3e6ec] px-3 pl-3 pr-10 text-[14px] text-brand-primary placeholder:text-brand-secondary focus:outline-none focus:border-brand-primary"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#f3f5f8] text-brand-secondary text-[12px] rounded-[4px]">Fire Watch</span>
                    <span className="px-3 py-1 bg-[#f3f5f8] text-brand-secondary text-[12px] rounded-[4px]">Gas Monitoring</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Permit-Specific Record Logs */}
          <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-6 flex flex-col gap-4 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <h3 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Permit-Specific Record Logs</h3>
            <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-[#f9fafc] border border-[#e3e6ec] rounded-[8px] p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="size-[36px] bg-[#fef3f2] rounded-[8px] flex items-center justify-center">
                    <Lock className="size-[18px] text-[#d92d20]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-brand-primary leading-[1.6]">Isolation Log</span>
                    <span className="text-[12px] text-brand-secondary leading-[1.6]">LOTO Status: 0 Active</span>
                  </div>
                </div>
                <Button 
                  onClick={() => onOpenIsolationModal?.('electrical')}
                  className="h-[30px] rounded-[6px] bg-brand-primary text-white font-bold text-[11px] px-4 hover:bg-opacity-90"
                >
                  Record Action
                </Button>
              </div>

              <div className="bg-[#f9fafc] border border-[#e3e6ec] rounded-[8px] p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="size-[36px] bg-[#eff8ff] rounded-[8px] flex items-center justify-center">
                    <ClipboardList className="size-[18px] text-[#0453cd]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-brand-primary leading-[1.6]">Gas Test Record</span>
                    <span className="text-[12px] text-brand-secondary leading-[1.6]">Last Reading: N/A</span>
                  </div>
                </div>
                <Button 
                  onClick={() => onOpenIsolationModal?.('gas')}
                  className="h-[30px] rounded-[6px] bg-brand-primary text-white font-bold text-[11px] px-4 hover:bg-opacity-90"
                >
                  Record Action
                </Button>
              </div>

              <div className="bg-[#f9fafc] border border-[#e3e6ec] rounded-[8px] p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="size-[36px] bg-[#fef3f2] rounded-[8px] flex items-center justify-center">
                    <Activity className="size-[18px] text-[#d92d20]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-brand-primary leading-[1.6]">Lockout / Tagout</span>
                    <span className="text-[12px] text-brand-secondary leading-[1.6]">Periodic Checks Req.</span>
                  </div>
                </div>
                <Button className="h-[30px] rounded-[6px] bg-brand-primary text-white font-bold text-[11px] px-4 hover:bg-opacity-90">
                  Record Action
                </Button>
              </div>

              <div className="bg-[#f9fafc] border border-[#e3e6ec] rounded-[8px] p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="size-[36px] bg-[#eff8ff] rounded-[8px] flex items-center justify-center">
                    <BriefcaseMedical className="size-[18px] text-[#0453cd]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-brand-primary leading-[1.6]">Working at Height</span>
                    <span className="text-[12px] text-brand-secondary leading-[1.6]">Approved & Attached</span>
                  </div>
                </div>
                <Button className="h-[30px] rounded-[6px] bg-brand-primary text-white font-bold text-[11px] px-4 hover:bg-opacity-90">
                  Record Action
                </Button>
              </div>

            </div>
          </div>
          
        </div>

      </div>

      {/* Control Measure Table */}
      <div className="w-full bg-white border border-[#e3e6ec] rounded-[12px] flex flex-col shadow-[0px_1px_1px_rgba(0,0,0,0.05)] overflow-hidden mt-2">
        <div className="grid grid-cols-12 bg-[#d8e6ff] px-6 py-3 border-b border-[#e3e6ec]">
          <div className="col-span-3 text-[13px] font-bold text-brand-primary">Control Measure</div>
          <div className="col-span-2 text-[13px] font-bold text-brand-primary">Related Permit Check</div>
          <div className="col-span-2 text-[13px] font-bold text-brand-primary">Responsible Person</div>
          <div className="col-span-2 text-[13px] font-bold text-brand-primary">Required Before Work / Confirmed</div>
          <div className="col-span-2 text-[13px] font-bold text-brand-primary">Status</div>
          <div className="col-span-1 text-[13px] font-bold text-brand-primary">Actions</div>
        </div>
        
        <div className="flex flex-col">
          {/* Row 1 */}
          <div className="grid grid-cols-12 px-6 py-4 border-b border-[#e3e6ec] items-center">
            <div className="col-span-3 flex flex-col pr-4">
              <span className="text-[13px] font-bold text-brand-primary leading-[1.6]">Fire Extinguisher Present</span>
              <span className="text-[11px] text-brand-secondary leading-[1.6]">CO2 or Powder type at work point.</span>
            </div>
            <div className="col-span-2 text-[13px] text-brand-secondary">Question #2</div>
            <div className="col-span-2 text-[13px] text-brand-secondary">M. Thompson</div>
            <div className="col-span-2 flex items-center">
              <div className="size-[20px] bg-brand-primary rounded-[4px] flex items-center justify-center">
                <Check className="size-[14px] text-white" strokeWidth={3} />
              </div>
            </div>
            <div className="col-span-2 flex items-center">
              <span className="px-2 py-1 bg-[#12b76a] text-white text-[12px] font-bold rounded-[4px]">Verified</span>
            </div>
            <div className="col-span-1 flex items-center">
              <button className="text-[#059669] hover:opacity-80 transition-opacity">
                <Edit2 className="size-4" />
              </button>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-12 px-6 py-4 border-b border-[#e3e6ec] items-center">
            <div className="col-span-3 flex flex-col pr-4">
              <span className="text-[13px] font-bold text-brand-primary leading-[1.6]">Full Fall Arrest Harness</span>
              <span className="text-[11px] text-brand-secondary leading-[1.6]">Inspected and tagged within 6 months.</span>
            </div>
            <div className="col-span-2 text-[13px] text-brand-secondary">Question #2</div>
            <div className="col-span-2 text-[13px] text-brand-secondary">J. Aris</div>
            <div className="col-span-2 flex items-center">
              <div className="size-[20px] bg-brand-primary rounded-[4px] flex items-center justify-center">
                <Check className="size-[14px] text-white" strokeWidth={3} />
              </div>
            </div>
            <div className="col-span-2 flex items-center">
              <span className="px-2 py-1 bg-[#12b76a] text-white text-[12px] font-bold rounded-[4px]">Verified</span>
            </div>
            <div className="col-span-1 flex items-center">
              <button className="text-[#059669] hover:opacity-80 transition-opacity">
                <Edit2 className="size-4" />
              </button>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-12 px-6 py-4 border-b border-[#e3e6ec] items-center">
            <div className="col-span-3 flex flex-col pr-4">
              <span className="text-[13px] font-bold text-brand-primary leading-[1.6]">Area Segregation</span>
              <span className="text-[11px] text-brand-secondary leading-[1.6]">Barrier tape and signage 5m radius.</span>
            </div>
            <div className="col-span-2 text-[13px] text-brand-secondary">Question #2</div>
            <div className="col-span-2 text-[13px] text-brand-secondary">S. Miller</div>
            <div className="col-span-2 flex items-center">
              <div className="size-[20px] bg-brand-primary rounded-[4px] flex items-center justify-center">
                <Check className="size-[14px] text-white" strokeWidth={3} />
              </div>
            </div>
            <div className="col-span-2 flex items-center">
              <span className="px-2 py-1 bg-[#12b76a] text-white text-[12px] font-bold rounded-[4px]">Verified</span>
            </div>
            <div className="col-span-1 flex items-center">
              <button className="text-[#059669] hover:opacity-80 transition-opacity">
                <Edit2 className="size-4" />
              </button>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-12 px-6 py-4 items-center">
            <div className="col-span-3 flex flex-col pr-4">
              <span className="text-[13px] font-bold text-brand-primary leading-[1.6]">Lock Out Tag Out (LOTO)</span>
              <span className="text-[11px] text-brand-secondary leading-[1.6]">Circuit isolation confirmed at DB-02.</span>
            </div>
            <div className="col-span-2 text-[13px] text-brand-secondary">N/A</div>
            <div className="col-span-2 text-[13px] text-brand-secondary">M. Thompson</div>
            <div className="col-span-2 flex items-center">
              <div className="size-[20px] bg-brand-primary rounded-[4px] flex items-center justify-center">
                <Check className="size-[14px] text-white" strokeWidth={3} />
              </div>
            </div>
            <div className="col-span-2 flex items-center">
              <span className="px-2 py-1 bg-[#12b76a] text-white text-[12px] font-bold rounded-[4px]">Verified</span>
            </div>
            <div className="col-span-1 flex items-center">
              <button className="text-[#059669] hover:opacity-80 transition-opacity">
                <Edit2 className="size-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center gap-4 mt-6">
        <Button 
          variant="outline" 
          onClick={onPrevious}
          className="h-[34px] min-w-[100px] rounded-[6px] border-brand-primary text-brand-primary font-bold text-[12px] hover:bg-gray-50"
        >
          Save Draft
        </Button>
        <Button 
          onClick={onNext}
          className="h-[34px] min-w-[150px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90"
        >
          Next: Authorisation
        </Button>
      </div>

    </div>
  );
}
