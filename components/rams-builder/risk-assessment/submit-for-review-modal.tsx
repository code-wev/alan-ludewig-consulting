import React from "react";
import { X, Clock, FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubmitForReviewModalProps {
  isSubmitReviewOpen: boolean;
  setIsSubmitReviewOpen: (open: boolean) => void;
  onConfirmSubmit: () => void;
}

export function SubmitForReviewModal({
  isSubmitReviewOpen,
  setIsSubmitReviewOpen,
  onConfirmSubmit
}: SubmitForReviewModalProps) {
  if (!isSubmitReviewOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-[12px] w-full max-w-[800px] shadow-2xl flex flex-col my-8 max-h-[90vh] overflow-hidden transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4.5 shrink-0">
          <div>
            <h3 className="text-[20px] font-bold text-[#132651]">Submit Risk Assessment for Review</h3>
            <p className="text-[13px] text-[#5a6886] mt-0.5">Send this risk assessment to a competent person for review and approval.</p>
          </div>
          <button
            onClick={() => setIsSubmitReviewOpen(false)}
            className="text-[#95a0b6] hover:text-[#132651] hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          
          {/* Stepper */}
          <div className="flex items-center justify-between bg-[#f8f9fc] rounded-[8px] border border-[#e3e6ec] p-4">
             <div className="flex items-center w-full max-w-lg">
                <div className="flex flex-col items-center gap-2 relative z-10">
                   <div className="size-8 rounded-full bg-[#132651] text-white flex items-center justify-center text-[12px] font-bold">1</div>
                   <span className="text-[11px] font-bold text-[#132651] absolute -bottom-5">Draft</span>
                </div>
                <div className="flex-1 h-0.5 bg-[#e3e6ec] mx-2 mt-[-16px]"></div>
                <div className="flex flex-col items-center gap-2 relative z-10">
                   <div className="size-8 rounded-full bg-[#f1f5f9] text-[#95a0b6] flex items-center justify-center text-[12px] font-bold">2</div>
                   <span className="text-[11px] font-medium text-[#95a0b6] absolute -bottom-5">Submitted</span>
                </div>
                <div className="flex-1 h-0.5 bg-[#e3e6ec] mx-2 mt-[-16px]"></div>
                <div className="flex flex-col items-center gap-2 relative z-10">
                   <div className="size-8 rounded-full bg-[#f1f5f9] text-[#95a0b6] flex items-center justify-center text-[12px] font-bold">3</div>
                   <span className="text-[11px] font-medium text-[#95a0b6] absolute -bottom-5">Review</span>
                </div>
             </div>
             <div className="ml-auto px-3 py-1 bg-[#eef4ff] text-[#3b82f6] text-[11px] font-bold rounded-full">
               Current: Draft
             </div>
          </div>
          <div className="h-2"></div> {/* spacer for stepper labels */}

          {/* Details Box */}
          <div className="border border-[#e3e6ec] rounded-[8px] p-5">
             <div className="flex justify-between items-start mb-4">
                <div>
                   <p className="text-[11px] text-[#5a6886] mb-1">RA-2024-0042</p>
                   <p className="text-[14px] font-bold text-[#132651]">Structural Steel Inspection — Block 4</p>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded border border-[#e3e6ec] text-[#5a6886] bg-[#f9fafc]">DRAFT</span>
             </div>
             <div className="grid grid-cols-2 gap-y-4 gap-x-8 pt-4 border-t border-[#e3e6ec]">
                <div>
                   <p className="text-[11px] text-[#5a6886] mb-1">Site</p>
                   <p className="text-[13px] font-medium text-[#132651]">London Gateway Infrastructure</p>
                </div>
                <div>
                   <p className="text-[11px] text-[#5a6886] mb-1">Assessor</p>
                   <p className="text-[13px] font-medium text-[#132651]">James Wilson</p>
                </div>
                <div>
                   <p className="text-[11px] text-[#5a6886] mb-1">Date</p>
                   <p className="text-[13px] font-medium text-[#132651]">21 Nov 2026</p>
                </div>
                <div className="flex gap-8">
                   <div>
                     <p className="text-[11px] text-[#5a6886] mb-1">Hazards</p>
                     <p className="text-[13px] font-medium text-[#132651]">10</p>
                   </div>
                   <div>
                     <p className="text-[11px] text-[#5a6886] mb-1">Controls</p>
                     <p className="text-[13px] font-medium text-[#132651]">10</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="grid grid-cols-2 gap-6">
             <div>
               <label className="block text-[13px] font-bold text-[#132651] mb-2">Select competent person / reviewer</label>
               <select className="w-full h-10 px-3 rounded-[6px] border border-[#c5c6cd] text-[13px] text-[#5a6886] bg-white focus:outline-none focus:border-[#132651]">
                 <option>Select Consultant...</option>
                 <option>Sarah Jenkins</option>
                 <option>Alan Ludewig</option>
               </select>
             </div>
             <div>
               <label className="block text-[13px] font-bold text-[#132651] mb-2">Reviewer Role</label>
               <input type="text" value="Competent Person" readOnly className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-[#132651] bg-[#f9fafc] outline-none" />
             </div>
          </div>

          <div className="flex items-center justify-between border-b border-[#e3e6ec] pb-5">
             <div className="flex items-center gap-2 text-[#5a6886]">
                <Clock className="size-4" />
                <span className="text-[12px]">Turnaround: 2-3 business days</span>
             </div>
             <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#132651]">Notify Reviewer</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-9 h-5 bg-[#e3e6ec] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#132651]"></div>
                </label>
             </div>
          </div>

          <div>
             <label className="block text-[13px] font-bold text-[#132651] mb-2">Message to Reviewer</label>
             <textarea placeholder="Provide any additional context for the reviewer regarding the structural inspection..." className="w-full h-24 p-3 rounded-[6px] border border-[#c5c6cd] text-[13px] text-[#132651] outline-none focus:border-[#132651] resize-none placeholder:text-[#95a0b6]"></textarea>
          </div>

          <div className="border border-[#e3e6ec] rounded-[8px] p-5">
             <div className="flex justify-between items-center mb-4">
                <h4 className="text-[13px] font-bold text-[#132651] flex items-center gap-2">
                   Supporting Documents (4)
                </h4>
                <button className="text-[12px] font-bold text-[#3b82f6] flex items-center gap-1 hover:underline">
                   <Plus className="size-3" strokeWidth={3} /> Add Supporting Document
                </button>
             </div>
             <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f8f9fc] border border-[#e3e6ec] rounded-[6px] p-3 flex items-center gap-3">
                   <FileText className="size-4 text-[#95a0b6]" />
                   <span className="text-[12px] text-[#132651] font-medium truncate">PPE_Specs.pdf</span>
                </div>
                <div className="bg-[#f8f9fc] border border-[#e3e6ec] rounded-[6px] p-3 flex items-center gap-3">
                   <FileText className="size-4 text-[#95a0b6]" />
                   <span className="text-[12px] text-[#132651] font-medium truncate">Site_Plan_V2.dwg</span>
                </div>
                <div className="bg-[#f8f9fc] border border-[#e3e6ec] rounded-[6px] p-3 flex items-center gap-3">
                   <FileText className="size-4 text-[#95a0b6]" />
                   <span className="text-[12px] text-[#132651] font-medium truncate">Electrical_SOP.pdf</span>
                </div>
                <div className="bg-[#f8f9fc] border border-[#e3e6ec] rounded-[6px] p-3 flex items-center gap-3">
                   <FileText className="size-4 text-[#95a0b6]" />
                   <span className="text-[12px] text-[#132651] font-medium truncate">Incident_Log.xlsx</span>
                </div>
             </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer group mt-2">
             <input type="checkbox" className="mt-0.5 shrink-0 rounded border-[#c5c6cd] text-[#132651] focus:ring-[#132651]" />
             <span className="text-[13px] text-[#5a6886] leading-relaxed">
               I confirm this risk assessment is ready for competent person review. I have verified all hazards and control measures are accurate.
             </span>
          </label>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-start border-t border-[#e3e6ec] p-6 bg-white shrink-0 gap-3">
          <Button
            variant="outline"
            onClick={() => setIsSubmitReviewOpen(false)}
            className="h-10 rounded-[6px] border-[#c5c6cd] bg-white px-8 text-[14px] font-bold text-[#132651] hover:bg-[#f3f5f8] shadow-none"
          >
            Save Draft
          </Button>
          <Button
            onClick={onConfirmSubmit}
            className="h-10 rounded-[6px] bg-[#132651] px-8 text-[14px] font-bold text-white hover:bg-[#0d1b3a] shadow-none"
          >
            Confirm & Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
