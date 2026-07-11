import React from "react";
import { 
  X, Shield, AlertTriangle, CheckSquare, AlignLeft, 
  Search, ChevronDown, Hand, Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface EditPPESuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EditPPESuggestionModal({ 
  isOpen, 
  onClose 
}: EditPPESuggestionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[1000px] max-w-full max-h-[90vh] bg-white rounded-[12px] shadow-lg border border-[#e3e6ec] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-[24px] font-bold text-brand-primary">Edit PPE Suggestion</h2>
            <p className="text-[14px] text-brand-secondary">
              Adjust the recommended PPE requirement to match the site-specific task and risk controls.
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
        <div className="px-8 pb-8 flex overflow-y-auto flex-1 no-scrollbar gap-8">
          
          {/* Left Column - Form */}
          <div className="flex-1 flex flex-col gap-8">
            
            {/* Section 1: PPE Details */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <Shield className="size-5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary">PPE DETAILS</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">PPE Category</label>
                  <div className="relative">
                    <select className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-10 focus:outline-none focus:border-brand-primary">
                      <option>Hand</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Specific PPE Type</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      defaultValue="Cut Resistant Gloves"
                      className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white pr-10 focus:outline-none focus:border-brand-primary"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="h-[18px] w-[18px] rounded-[4px] border-[1.5px] border-[#c4cce0] bg-white peer-checked:bg-[#1e293b] peer-checked:border-[#1e293b] flex items-center justify-center transition-colors">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 peer-checked:opacity-100">
                        <path d="M3.5 7.5L0.5 4.5L1.91421 3.08579L3.5 4.67157L8.08579 0.0857864L9.5 1.5L3.5 7.5Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[13px] text-brand-primary">Mandatory for All Site Personnel</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="h-[18px] w-[18px] rounded-[4px] border-[1.5px] border-[#c4cce0] bg-white peer-checked:bg-[#1e293b] peer-checked:border-[#1e293b] flex items-center justify-center transition-colors">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 peer-checked:opacity-100">
                        <path d="M3.5 7.5L0.5 4.5L1.91421 3.08579L3.5 4.67157L8.08579 0.0857864L9.5 1.5L3.5 7.5Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[13px] text-brand-primary">Required for Specific Task Only</span>
                </label>
              </div>
            </div>

            <hr className="border-[#e3e6ec]" />

            {/* Section 2: Task & Hazard Context */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <AlertTriangle className="size-5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary">Task & Hazard Context</h3>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Related Hazard/Reason</label>
                <textarea 
                  placeholder="Potential for lacerations from sharp metal edges during demolition phase."
                  className="w-full h-24 p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Methodology Step</label>
                  <div className="relative">
                    <select className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-10 focus:outline-none focus:border-brand-primary">
                      <option>02. Removal of Ductwork</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Related Permit</label>
                  <div className="relative">
                    <select className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-10 focus:outline-none focus:border-brand-primary">
                      <option>Demolition Permit D-104</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Risk Assessment Item</label>
                  <div className="relative">
                    <select className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-10 focus:outline-none focus:border-brand-primary">
                      <option>RA-SHARP-001</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">PPE Priority</label>
                  <div className="relative">
                    <select className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-10 focus:outline-none focus:border-brand-primary">
                      <option>Mandatory</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-[#e3e6ec]" />

            {/* Section 3: Usage Requirements */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <CheckSquare className="size-5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary">Usage Requirements</h3>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Minimum Standard/Certification</label>
                <input 
                  type="text" 
                  defaultValue="EN 388 Cut Resistance Level 5"
                  className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Inspection Requirement</label>
                  <input 
                    type="text" 
                    placeholder="Daily visual check for holes..."
                    className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Replacement Requirement</label>
                  <input 
                    type="text" 
                    placeholder="Replace upon any visible damage..."
                    className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Storage Requirement</label>
                <input 
                  type="text" 
                  placeholder="Dry ventilated area, away from direct sunlight..."
                  className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                />
              </div>

              <div className="flex flex-col gap-3 mt-1">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="h-[18px] w-[18px] rounded-[4px] border-[1.5px] border-[#c4cce0] bg-white peer-checked:bg-[#1e293b] peer-checked:border-[#1e293b] flex items-center justify-center transition-colors">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 peer-checked:opacity-100">
                        <path d="M3.5 7.5L0.5 4.5L1.91421 3.08579L3.5 4.67157L8.08579 0.0857864L9.5 1.5L3.5 7.5Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[13px] text-brand-primary">Training / Briefing Required</span>
                </label>
              </div>
            </div>

            <hr className="border-[#e3e6ec]" />

            {/* Section 4: Site-Specific Notes */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <AlignLeft className="size-5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary">Site-Specific Notes</h3>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Notes</label>
                <textarea 
                  placeholder="Additional local site observations..."
                  className="w-full h-24 p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
                ></textarea>
              </div>
            </div>

          </div>

          {/* Right Column - Preview & Info */}
          <div className="w-[340px] shrink-0 flex flex-col gap-4">
            <h3 className="text-[14px] font-bold text-brand-primary">Preview</h3>
            
            <div className="rounded-[12px] border border-[#1e3a8a] p-5 flex flex-col gap-4 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-[6px] bg-[#eef2ff] shrink-0">
                  <Hand className="size-5 text-[#1e3a8a]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-brand-secondary">Hand Protection</span>
                  <span className="text-[14px] font-bold text-brand-primary">Cut Resistant Gloves</span>
                </div>
              </div>
              
              <div>
                <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-[4px] bg-[#dcfce7] text-[#166534] text-[11px] font-bold">
                  Mandatory
                </span>
              </div>

              <hr className="border-[#e3e6ec]" />

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] text-brand-secondary">Risk Link</span>
                  <span className="text-[13px] text-brand-primary">&quot;Lacerations from metal edges&quot;</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] text-brand-secondary">Standard</span>
                  <span className="text-[13px] text-brand-primary">EN 388 Level 5</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] text-brand-secondary">Task Alignment</span>
                  <span className="text-[13px] text-brand-primary">Step: Removal of Ductwork</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-[8px] bg-[#eef2ff] p-4 text-[#1e3a8a]">
              <Info className="size-5 shrink-0 mt-0.5" />
              <p className="text-[13px] leading-relaxed">
                Changes to PPE suggestions will be logged in the site risk register for audit compliance.
              </p>
            </div>
          </div>
          
        </div>

        {/* Footer */}
        <div className="flex items-center justify-start gap-4 px-8 py-5 border-t border-[#e3e6ec] bg-white rounded-b-[12px]">
          <Button 
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
          >
            Reset to Suggested Values
          </Button>
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-[#0d1b2a] text-white font-bold text-[14px] hover:bg-black"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
