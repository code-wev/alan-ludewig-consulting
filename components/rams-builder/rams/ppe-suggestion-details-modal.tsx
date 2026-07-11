import React from "react";
import { X, Hand, FileText, Lightbulb, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface PPESuggestionDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: () => void;
  onEdit: () => void;
}

export function PPESuggestionDetailsModal({ 
  isOpen, 
  onClose,
  onAdd,
  onEdit
}: PPESuggestionDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[900px] max-w-full max-h-[90vh] bg-white rounded-[12px] shadow-lg border border-[#e3e6ec] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center size-[48px] rounded-full bg-[#1e3a8a] text-white shrink-0">
              <Hand className="size-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[24px] font-bold text-brand-primary">PPE Suggestion Details</h2>
              <p className="text-[14px] text-brand-secondary">
                Review the recommended PPE requirement and its related safety context
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-brand-secondary hover:text-brand-primary transition-colors"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 flex flex-col gap-6 overflow-y-auto flex-1 no-scrollbar">
          
          {/* Badges */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[12px] font-bold text-[#334155]">
              <span className="size-2 rounded-full border-2 border-[#334155] bg-transparent"></span>
              Recommended
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#fef2f2] border border-[#fee2e2] text-[12px] font-bold text-[#ef4444] uppercase tracking-wider">
              ! mandatory
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[12px] font-bold text-[#64748b]">
              <span className="size-2 rounded-full bg-[#64748b]"></span>
              Not Yet Added
            </span>
          </div>

          {/* PPE Requirement Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#e3e6ec] pb-2">
              <h3 className="text-[14px] font-bold text-brand-primary uppercase tracking-wider">
                PPE REQUIREMENT
              </h3>
              <div className="flex items-center gap-3 px-3 py-1.5 rounded-[6px] border border-[#e3e6ec] bg-[#f8fafc]">
                <span className="text-[12px] text-brand-secondary">Mandatory</span>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="rounded-[12px] bg-[#f8fafc] border border-[#e3e6ec] p-6">
              <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] text-brand-secondary">Category</span>
                  <span className="text-[14px] font-bold text-brand-primary">Hand Protection</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] text-brand-secondary">Specific Equipment</span>
                  <span className="text-[14px] font-bold text-brand-primary">Cut-resistant Gloves Level 5</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] text-brand-secondary">Relevant Step</span>
                  <span className="text-[14px] text-brand-primary">Step 14: Steel Frame Installation</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] text-brand-secondary">Permit Required</span>
                  <div className="flex items-center gap-1.5 text-[14px] text-brand-primary">
                    <FileText className="size-4 text-[#ef4444]" />
                    <span>Permit to Work</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                  <span className="text-[12px] text-brand-secondary">Additional Notes</span>
                  <span className="text-[14px] text-brand-primary">
                    &quot;Ensure suitable sizes are available for all operatives.&quot;
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Why This PPE Is Recommended Section */}
          <div className="flex flex-col gap-5 rounded-[12px] bg-[#f8fafc] p-6 border-l-4 border-[#1e3a8a]">
            <div className="flex items-center gap-2">
              <Lightbulb className="size-5 text-[#1e3a8a]" />
              <h3 className="text-[16px] font-bold text-[#1e3a8a]">
                Why This PPE Is Recommended
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[13px] text-brand-primary">Identified Hazard</span>
                <div className="px-4 py-2.5 rounded-[6px] border border-[#e3e6ec] bg-[#f1f5f9] text-[13px] text-brand-secondary">
                  Sharp steel members and abrasive surfaces during lifting.
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[13px] text-brand-primary">Primary Risk</span>
                <div className="px-4 py-2.5 rounded-[6px] border border-[#e3e6ec] bg-[#f8fafc] text-[13px] text-brand-primary">
                  Manual Handling / Sharp Edges
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-[8px] border border-[#e3e6ec] bg-white mt-1">
              <div className="flex flex-col gap-1.5">
                <span className="text-[12px] text-brand-secondary">Initial Risk</span>
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-[4px] bg-[#b91c1c] text-white text-[12px] font-bold">
                  High
                </span>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <span className="text-[12px] text-brand-secondary">Residual Risk Expectation</span>
                <span className="text-[13px] font-bold text-brand-primary">
                  Reduction to &apos;Low&apos; with full compliance
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <h4 className="text-[12px] font-bold text-brand-primary uppercase tracking-wider">
                KEY CONTROL MEASURES
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Ensure gloves are EN 388:2016 Level 5 rated.",
                  "Inspect for tears or thinning at palm/fingertips.",
                  "Pair with long-sleeved high-vis for full arm protection.",
                  "Dispose of contaminated PPE according to site waste policy."
                ].map((measure, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="size-[18px] text-[#1e293b] shrink-0 mt-0.5" />
                    <span className="text-[13px] text-brand-secondary leading-relaxed">{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-8 py-5 border-t border-[#e3e6ec] bg-white rounded-b-[12px]">
          <Button 
            onClick={onEdit}
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
          >
            Edit Suggestion
          </Button>
          <Button 
            onClick={onAdd}
            className="h-[42px] px-6 rounded-[6px] bg-[#0d1b2a] text-white font-bold text-[14px] hover:bg-black"
          >
            Add PPE Requirement
          </Button>
        </div>
      </div>
    </div>
  );
}
