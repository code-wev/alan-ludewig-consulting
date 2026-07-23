import React from "react";
import { X, CheckCircle2, AlertTriangle, Info, CheckSquare, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ApplySuggestedControlsModalProps {
  isApplySuggestedControlsOpen: boolean;
  setIsApplySuggestedControlsOpen: (open: boolean) => void;
}

export function ApplySuggestedControlsModal({ isApplySuggestedControlsOpen, setIsApplySuggestedControlsOpen }: ApplySuggestedControlsModalProps) {
  if (!isApplySuggestedControlsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-[12px] w-full max-w-[600px] shadow-2xl flex flex-col my-8 max-h-[90vh] overflow-hidden transition-all duration-300">
        <div className="flex items-start justify-between border-b border-[#e3e6ec] p-6 shrink-0">
          <div className="flex gap-4">
             <div className="size-10 bg-[#eef4ff] rounded-[8px] flex items-center justify-center shrink-0">
               <CheckSquare className="size-5 text-[#132651]" />
             </div>
             <div>
               <h3 className="text-[18px] font-bold text-[#132651] mb-1">Apply Suggested Controls?</h3>
               <p className="text-[13px] text-[#5a6886]">
                 You are about to bulk-apply recommended safety and environmental controls to the current risk assessment. Review the summary below.
               </p>
             </div>
          </div>
          <button
            onClick={() => setIsApplySuggestedControlsOpen(false)}
            className="text-[#95a0b6] hover:text-[#132651] hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all shrink-0"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
          {/* Pills */}
          <div className="flex flex-wrap items-center gap-3">
             <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#eef4ff] rounded-full text-[#132651] text-[12px] font-bold">
               <CheckCircle2 className="size-4" /> 12 Selected
             </div>
             <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f1f5f9] rounded-full text-[#64748b] text-[12px] font-bold">
               <span className="font-medium">10</span> Existing
             </div>
             <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#fef2f2] rounded-full text-[#dc2626] text-[12px] font-bold">
               <AlertTriangle className="size-4" /> 5 Mandatory
             </div>
          </div>

          {/* Info Box */}
          <div className="bg-[#eef4ff] rounded-[8px] p-4 flex items-start gap-3">
             <Info className="size-5 text-[#5a6886] shrink-0 mt-0.5" />
             <p className="text-[13px] text-[#5a6886] leading-relaxed">
               Archiving this assessment will make it available again in active assessment records. It will be removed from the Archive Library.
             </p>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-3">
             <label className="flex items-start gap-3 p-4 border border-[#e3e6ec] rounded-[8px] cursor-pointer hover:bg-[#f9fafc] transition-colors">
                <input type="checkbox" className="mt-1 shrink-0 rounded border-[#c5c6cd]" defaultChecked />
                <div>
                   <p className="text-[14px] font-bold text-[#132651]">Mark selected controls as required before work starts</p>
                   <p className="text-[12px] text-[#5a6886] mt-1">Enforces a mandatory check for field staff during assessment.</p>
                </div>
             </label>
             <label className="flex items-start gap-3 p-4 border border-[#e3e6ec] rounded-[8px] cursor-pointer hover:bg-[#f9fafc] transition-colors">
                <input type="checkbox" className="mt-1 shrink-0 rounded border-[#c5c6cd]" />
                <div>
                   <p className="text-[14px] font-bold text-[#132651]">Replace duplicate controls</p>
                   <p className="text-[12px] text-[#5a6886] mt-1">Existing controls with matching IDs will be overwritten by suggested items.</p>
                </div>
             </label>
             <label className="flex items-start gap-3 p-4 border border-[#e3e6ec] rounded-[8px] cursor-pointer hover:bg-[#f9fafc] transition-colors">
                <input type="checkbox" className="mt-1 shrink-0 rounded border-[#c5c6cd]" defaultChecked />
                <div>
                   <p className="text-[14px] font-bold text-[#132651]">Recalculate residual risk scores</p>
                   <p className="text-[12px] text-[#5a6886] mt-1">Automatically updates the probability and severity impact based on new controls.</p>
                </div>
             </label>
          </div>
        </div>

        <div className="flex items-center justify-start border-t border-[#e3e6ec] p-6 bg-white shrink-0">
          <Button
            className="h-10 rounded-[6px] bg-[#132651] px-8 text-[14px] font-bold text-white hover:bg-[#0d1b3a] shadow-none"
            onClick={() => setIsApplySuggestedControlsOpen(false)}
          >
            Apply Controls
          </Button>
        </div>
      </div>
    </div>
  );
}
