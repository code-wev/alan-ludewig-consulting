import React from "react";
import { X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReviewRequiredModalProps {
  isReviewRequiredOpen: boolean;
  setIsReviewRequiredOpen: (open: boolean) => void;
  onConfirm: () => void;
}

export function ReviewRequiredModal({
  isReviewRequiredOpen,
  setIsReviewRequiredOpen,
  onConfirm
}: ReviewRequiredModalProps) {
  if (!isReviewRequiredOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-[12px] w-full max-w-[600px] shadow-2xl flex flex-col my-8 max-h-[90vh] overflow-hidden transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4.5 shrink-0">
          <h3 className="text-[20px] font-bold text-[#132651]">Review Required</h3>
          <button
            onClick={() => setIsReviewRequiredOpen(false)}
            className="text-[#95a0b6] hover:text-[#132651] hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          <div className="flex items-start gap-3 bg-[#eef4ff] rounded-[8px] p-4">
             <div className="shrink-0 p-1 bg-[#132651] rounded text-white mt-0.5">
               <Info className="size-4" strokeWidth={3} />
             </div>
             <p className="text-[13px] text-[#5a6886] leading-relaxed">
               Before exporting, please confirm that you have reviewed and adapted this risk assessment for the specific site, task and working conditions.
             </p>
          </div>

          <div className="flex flex-col gap-4">
             <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="size-4 rounded border-[#c5c6cd] text-[#132651] focus:ring-[#132651] shrink-0" />
                <span className="text-[13px] text-[#5a6886] group-hover:text-[#132651] transition-colors">
                  I have reviewed the hazards and control measures.
                </span>
             </label>
             <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="size-4 rounded border-[#c5c6cd] text-[#132651] focus:ring-[#132651] shrink-0" />
                <span className="text-[13px] text-[#5a6886] group-hover:text-[#132651] transition-colors">
                  I have checked the risk ratings.
                </span>
             </label>
             <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="size-4 rounded border-[#c5c6cd] text-[#132651] focus:ring-[#132651] shrink-0" />
                <span className="text-[13px] text-[#5a6886] group-hover:text-[#132651] transition-colors">
                  I understand this document must be suitable for the specific work activity.
                </span>
             </label>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-start border-t border-[#e3e6ec] p-6 bg-white shrink-0">
          <Button
            onClick={onConfirm}
            className="h-10 rounded-[6px] bg-[#132651] px-8 text-[14px] font-bold text-white hover:bg-[#0d1b3a] shadow-none"
          >
            Confirm & Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
