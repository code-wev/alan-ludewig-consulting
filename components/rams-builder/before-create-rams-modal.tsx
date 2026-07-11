import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Shield, Info, FileText, CheckCircle2 } from "lucide-react";

interface BeforeCreateRamsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export function BeforeCreateRamsModal({ isOpen, onClose, onContinue }: BeforeCreateRamsModalProps) {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 backdrop-blur-sm p-4 md:p-8 overflow-y-auto">
      {/* Modal Container */}
      <div className="bg-white rounded-[12px] w-full max-w-[800px] flex flex-col relative shadow-2xl my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e3e6ec] bg-white rounded-t-[12px]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-[8px] bg-[#f8f9fc] flex items-center justify-center border border-[#e3e6ec]">
              <Shield className="size-5 text-brand-primary" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[20px] font-bold text-brand-primary">Before You Create a RAMS</h2>
              <p className="text-[13px] text-brand-secondary">
                Please review this important notice before generating a Risk Assessment and Method Statement.
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 transition-colors text-brand-secondary hover:text-brand-primary"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col gap-8 overflow-y-auto max-h-[70vh]">
          
          {/* Info Notice */}
          <div className="bg-[#f8f9fc] border border-[#e3e6ec] rounded-[8px] p-5 flex gap-4">
            <Info className="size-5 text-brand-primary shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1.5">
              <h3 className="text-[14px] font-bold text-brand-primary">RAMS Builder Notice</h3>
              <p className="text-[13px] text-brand-secondary leading-[1.6]">
                This tool helps you prepare a combined Risk Assessment and Method Statement based on the information you provide. The final document must be checked and approved by a competent person before use on site.
              </p>
            </div>
          </div>

          {/* Declaration & Responsibilities */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[14px] font-bold text-brand-primary">Declaration & Responsibilities</h3>
            
            <label className="flex items-center gap-4 p-4 rounded-[8px] bg-[#f8f9fc] border border-[#f0f2f5] cursor-pointer hover:border-[#e3e6ec] transition-colors">
              <input 
                type="checkbox"
                checked={isChecked1} 
                onChange={(e) => setIsChecked1(e.target.checked)}
                className="w-5 h-5 rounded-[4px] border-[#c5c6d0] accent-brand-primary cursor-pointer shrink-0"
              />
              <span className="text-[13px] text-brand-primary leading-[1.6]">
                I confirm that the information provided is accurate to the best of my knowledge and reflects current site conditions.
              </span>
            </label>

            <label className="flex items-center gap-4 p-4 rounded-[8px] bg-[#f8f9fc] border border-[#f0f2f5] cursor-pointer hover:border-[#e3e6ec] transition-colors">
              <input 
                type="checkbox"
                checked={isChecked2} 
                onChange={(e) => setIsChecked2(e.target.checked)}
                className="w-5 h-5 rounded-[4px] border-[#c5c6d0] accent-brand-primary cursor-pointer shrink-0"
              />
              <span className="text-[13px] text-brand-primary leading-[1.6]">
                I have reviewed the identified hazards and confirmed that all appropriate control measures have been addressed.
              </span>
            </label>

            <label className="flex items-center gap-4 p-4 rounded-[8px] bg-[#f8f9fc] border border-[#f0f2f5] cursor-pointer hover:border-[#e3e6ec] transition-colors">
              <input 
                type="checkbox"
                checked={isChecked3} 
                onChange={(e) => setIsChecked3(e.target.checked)}
                className="w-5 h-5 rounded-[4px] border-[#c5c6d0] accent-brand-primary cursor-pointer shrink-0"
              />
              <span className="text-[13px] text-brand-primary leading-[1.6]">
                I understand that any mandatory attachments (e.g. COSHH, drawings) must be reviewed alongside this document.
              </span>
            </label>
          </div>

          {/* Document Output Includes */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[14px] font-bold text-brand-primary">Document Output Includes</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-[#f8f9fc] px-3 py-2 rounded-[6px] text-brand-secondary text-[13px]">
                <CheckCircle2 className="size-4" />
                <span>Combined RA + MS</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f8f9fc] px-3 py-2 rounded-[6px] text-brand-secondary text-[13px]">
                <FileText className="size-4" />
                <span>Risk Assessment Appendix</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f8f9fc] px-3 py-2 rounded-[6px] text-brand-secondary text-[13px]">
                <FileText className="size-4" />
                <span>Methodology Steps</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f8f9fc] px-3 py-2 rounded-[6px] text-brand-secondary text-[13px]">
                <Shield className="size-4" />
                <span>PPE Requirements</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f8f9fc] px-3 py-2 rounded-[6px] text-brand-secondary text-[13px]">
                <Shield className="size-4" />
                <span>Emergency Arrangements</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f8f9fc] px-3 py-2 rounded-[6px] text-brand-secondary text-[13px]">
                <FileText className="size-4" />
                <span>Supporting Attachments</span>
              </div>
            </div>
          </div>

          {/* Final Declaration Box */}
          <label className="flex items-start gap-4 p-5 rounded-[8px] bg-[#eff6ff] border border-[#bfdbfe] cursor-pointer mt-4">
            <input 
              type="checkbox"
              checked={isChecked4} 
              onChange={(e) => setIsChecked4(e.target.checked)}
              className="w-5 h-5 rounded-[4px] border-[#c5c6d0] accent-brand-primary cursor-pointer shrink-0 mt-0.5"
            />
            <span className="text-[13px] text-brand-primary leading-[1.6]">
              I hereby declare that this Method Statement has been prepared in accordance with current health and safety legislation and site-specific requirements. All personnel involved in the works will be briefed on its contents and safety protocols prior to commencement.
            </span>
          </label>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center p-6 border-t border-[#e3e6ec] bg-white rounded-b-[12px]">
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-[#1e293b] text-white font-bold text-[14px] hover:bg-[#0f172a]"
            onClick={onContinue}
          >
            I Understand & Continue
          </Button>
        </div>

      </div>
    </div>
  );
}
