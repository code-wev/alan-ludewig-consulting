import React, { useState } from "react";
import { Sparkles, ShieldCheck, Trash2, Info, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { AddCustomPPEModal } from "./add-custom-ppe-modal";
import { AutoSuggestPPEModal } from "./auto-suggest-ppe-modal";
import { PPESuggestionDetailsModal } from "./ppe-suggestion-details-modal";

interface PPEStepProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function PPEStep({ onPrevious, onNext }: PPEStepProps) {
  const [isCustomPPEModalOpen, setIsCustomPPEModalOpen] = useState(false);
  const [isAutoSuggestPPEModalOpen, setIsAutoSuggestPPEModalOpen] = useState(false);
  const [isPPEDetailsModalOpen, setIsPPEDetailsModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full text-brand-primary">
      
      {/* Smart Suggestions Banner */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 rounded-[12px] bg-[#eef2ff] border border-[#d6e0ff] p-6">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center size-10 rounded-[8px] bg-[#1e3a8a] text-white shrink-0 mt-0.5">
            <Sparkles className="size-5" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[16px] font-bold text-[#1e3a8a]">Smart Suggestions</h3>
            <p className="text-[14px] text-[#1e3a8a]/80 leading-relaxed max-w-[800px]">
              Suggestions are based on selected work activities, hazards, plant/equipment, permits, methodology and risk assessment and risk assessment data.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button onClick={() => setIsAutoSuggestPPEModalOpen(true)} variant="outline" className="h-[38px] px-4 rounded-[6px] border-[#c7d2fe] bg-white text-[13px] font-bold text-[#1e3a8a] hover:bg-[#e0e7ff]">
            Auto-suggest PPE
          </Button>
          <Button onClick={() => setIsCustomPPEModalOpen(true)} className="h-[38px] px-4 rounded-[6px] bg-[#1e3a8a] text-[13px] font-bold text-white hover:bg-[#1e3a8a]/90">
            Add Custom PPE
          </Button>
        </div>
      </div>

      {/* PPE Cards Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* Card 1 */}
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#e3e6ec] pb-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-5 text-brand-primary" />
              <h4 className="text-[14px] font-bold text-brand-primary">Recommended Item</h4>
              <span className="flex items-center justify-center px-2 py-0.5 rounded-[4px] bg-[#dbeafe] text-[#2563eb] text-[11px] font-bold uppercase tracking-wider">
                Suggested
              </span>
            </div>
            <button className="text-[#ef4444] hover:bg-red-50 p-2 rounded-md transition-colors">
              <Trash2 className="size-4" />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-primary">Category</label>
                <div className="relative">
                  <select className="h-[46px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                    <option>Eye</option>
                    <option>Hand</option>
                    <option>Head</option>
                    <option>Foot</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-primary">Specific Type</label>
                <div className="relative">
                  <select className="h-[46px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                    <option>Impact Resistant Goggles</option>
                    <option>Safety Glasses</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[13px] text-brand-primary">Mandatory for all site personnel</span>
              <Switch defaultChecked />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-brand-primary">Reason / Hazard</label>
              <input 
                type="text" 
                defaultValue="Flying debris from grinding/cutting"
                className="h-[46px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary bg-white"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-brand-primary">Specific Notes</label>
              <input 
                type="text" 
                placeholder="e.g. Must be worn over prescription glasses"
                className="h-[46px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary bg-white"
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#e3e6ec] pb-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-5 text-brand-primary" />
              <h4 className="text-[14px] font-bold text-brand-primary">Recommended Item</h4>
              <span className="flex items-center justify-center px-2 py-0.5 rounded-[4px] bg-[#dbeafe] text-[#2563eb] text-[11px] font-bold uppercase tracking-wider">
                Suggested
              </span>
            </div>
            <button className="text-[#ef4444] hover:bg-red-50 p-2 rounded-md transition-colors">
              <Trash2 className="size-4" />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-primary">Category</label>
                <div className="relative">
                  <select className="h-[46px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                    <option>Hand</option>
                    <option>Eye</option>
                    <option>Head</option>
                    <option>Foot</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-primary">Specific Type</label>
                <div className="relative">
                  <select className="h-[46px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                    <option>Cut-resistant Gloves (Level 5)</option>
                    <option>General Handling Gloves</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[13px] text-brand-primary">Mandatory for all site personnel</span>
              <Switch defaultChecked />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-brand-primary">Reason / Hazard</label>
              <input 
                type="text" 
                defaultValue="Sharp edges on steel members"
                className="h-[46px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary bg-white"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-brand-primary">Specific Notes</label>
              <input 
                type="text" 
                defaultValue="Ensure correct sizing is available"
                className="h-[46px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary bg-white"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Additional PPE Provisions Box */}
      <div className="flex flex-col gap-4 rounded-[12px] border border-[#e3e6ec] bg-white p-6 shadow-sm">
        <h3 className="text-[16px] font-bold text-brand-primary">Additional PPE Provisions & Notes</h3>
        
        <textarea 
          placeholder="Enter any additional information regarding PPE storage, issue procedures, or disposal requirements..."
          rows={3}
          className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
        />
        
        <div className="flex items-center gap-2 mt-1 text-brand-secondary">
          <Info className="size-4" />
          <span className="text-[12px]">
            These notes will appear in the &apos;General Provisions&apos; section of the final RAMS document.
          </span>
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
          Next: Methodology
        </Button>
      </div>

      <AddCustomPPEModal 
        isOpen={isCustomPPEModalOpen}
        onClose={() => setIsCustomPPEModalOpen(false)}
      />

      <AutoSuggestPPEModal 
        isOpen={isAutoSuggestPPEModalOpen} 
        onClose={() => setIsAutoSuggestPPEModalOpen(false)} 
        onViewPPE={() => {
          setIsAutoSuggestPPEModalOpen(false);
          setIsPPEDetailsModalOpen(true);
        }}
      />
      
      <PPESuggestionDetailsModal
        isOpen={isPPEDetailsModalOpen}
        onClose={() => setIsPPEDetailsModalOpen(false)}
        onAdd={() => setIsPPEDetailsModalOpen(false)}
        onEdit={() => setIsPPEDetailsModalOpen(false)}
      />

    </div>
  );
}
