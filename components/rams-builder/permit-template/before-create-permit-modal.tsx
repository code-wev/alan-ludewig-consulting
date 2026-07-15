import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, AlertTriangle, CheckCircle2 } from "lucide-react";

interface BeforeCreatePermitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export function BeforeCreatePermitModal({ isOpen, onClose, onContinue }: BeforeCreatePermitModalProps) {
  const [isChecked, setIsChecked] = useState(false);

  if (!isOpen) return null;

  const checklistItems = [
    "Accurately define permit type and current site conditions.",
    "Thoroughly review all identified hazards and necessary controls.",
    "Monitor validity periods and expiry times strictly.",
    "No work must commence until the permit is formally issued.",
    "Permits must be officially closed immediately after work completion."
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 backdrop-blur-sm p-4 md:p-8 overflow-y-auto no-scrollbar">
      {/* Modal Container */}
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-6 flex flex-col gap-6 w-full max-w-[894px] relative shadow-2xl my-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 p-1.5 rounded-full hover:bg-slate-100 transition-colors text-brand-secondary hover:text-brand-primary"
        >
          <X className="size-5" />
        </button>

        {/* Header Content */}
        <div className="flex gap-4 pr-10">
          <div className="bg-[#f3f5f8] rounded-[12px] size-12 flex items-center justify-center shrink-0">
            <AlertTriangle className="size-6 text-brand-primary" />
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[20px] font-semibold text-[#191c1e] leading-[28px]">Before You Create a Permit</h2>
            <p className="text-[14px] text-brand-secondary leading-[1.6]">
              This digital permit system is designed to ensure safe working practices. Accuracy and authorization are mandatory for compliance with UK Health & Safety legislation.
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex flex-col gap-6 overflow-y-auto max-h-[70vh] no-scrollbar">
          
          {/* Checklist */}
          <div className="bg-[#f3f5f8] border-l-4 border-l-brand-primary rounded-r-[12px] rounded-l-[4px] pl-6 pr-5 py-5 flex flex-col gap-4">
            <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">Mandatory Compliance Checklist:</h3>
            <div className="flex flex-col gap-3">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="size-[18px] text-brand-primary shrink-0 mt-[2px]" />
                  <span className="text-[14px] text-brand-secondary leading-[1.6]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Final Declaration Box */}
          <label className="flex items-center gap-4 p-[17px] rounded-[6px] bg-[#f3f5f8] border border-[#e3e6ec] cursor-pointer hover:border-brand-primary/30 transition-colors">
            <input 
              type="checkbox"
              checked={isChecked} 
              onChange={(e) => setIsChecked(e.target.checked)}
              className="w-6 h-6 rounded-[4px] border-[#c6c5cf] accent-brand-primary cursor-pointer shrink-0"
            />
            <span className="text-[14px] text-brand-secondary leading-[1.6]">
              I understand that this permit must be reviewed, authorised and controlled before work starts.
            </span>
          </label>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-start">
          <Button 
            className="h-[34px] px-4 rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-[#0f1d3e] disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              setIsChecked(false);
              onContinue();
            }}
            disabled={!isChecked}
          >
            I Understand & Continue
          </Button>
        </div>

      </div>
    </div>
  );
}
