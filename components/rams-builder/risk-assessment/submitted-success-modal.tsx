import React from "react";
import { X, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubmittedSuccessModalProps {
  isSubmittedSuccessOpen: boolean;
  setIsSubmittedSuccessOpen: (open: boolean) => void;
}

export function SubmittedSuccessModal({
  isSubmittedSuccessOpen,
  setIsSubmittedSuccessOpen
}: SubmittedSuccessModalProps) {
  if (!isSubmittedSuccessOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-[12px] w-full max-w-[800px] shadow-2xl flex flex-col my-8 max-h-[90vh] overflow-hidden transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-end px-4 py-4 shrink-0 absolute top-0 right-0 z-10 w-full pointer-events-none">
          <button
            onClick={() => setIsSubmittedSuccessOpen(false)}
            className="text-[#95a0b6] hover:text-[#132651] hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all pointer-events-auto"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center mt-4">
          <div className="flex flex-col items-center text-center mb-8">
             <div className="mb-4 text-[#10b981]">
                <CheckCircle2 className="size-12" strokeWidth={2.5} />
             </div>
             <h3 className="text-[20px] font-bold text-[#132651] mb-2">Risk Assessment Submitted for Review</h3>
             <p className="text-[13px] text-[#5a6886]">
               Your risk assessment has been sent to the selected reviewer.
             </p>
          </div>

          <div className="w-full flex flex-col gap-6">
             {/* Summary Box */}
             <div className="border border-[#e3e6ec] rounded-[8px] p-6">
                <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                   <div className="col-span-2">
                      <p className="text-[11px] font-bold text-[#5a6886] uppercase tracking-wider mb-2">Reference & Title</p>
                      <div className="flex items-center gap-2">
                         <span className="px-2.5 py-1 bg-[#132651] text-white text-[10px] font-bold rounded">RA-2024-0042</span>
                         <span className="text-[14px] font-bold text-[#132651]">Structural Steel Inspection — Block 4</span>
                      </div>
                   </div>
                   
                   <div>
                      <p className="text-[11px] font-bold text-[#5a6886] uppercase tracking-wider mb-1">Reviewer</p>
                      <p className="text-[13px] font-medium text-[#132651]">Alan Ludewig</p>
                   </div>
                   <div>
                      <p className="text-[11px] font-bold text-[#5a6886] uppercase tracking-wider mb-1">Submitted By</p>
                      <p className="text-[13px] font-medium text-[#132651]">James Wilson</p>
                   </div>
                   
                   <div>
                      <p className="text-[11px] font-bold text-[#5a6886] uppercase tracking-wider mb-1">Date & Time</p>
                      <p className="text-[13px] font-medium text-[#132651]">Today, 10:42</p>
                   </div>
                   <div>
                      <p className="text-[11px] font-bold text-[#5a6886] uppercase tracking-wider mb-1">Expected Response</p>
                      <p className="text-[13px] font-medium text-[#132651]">2–3 business days</p>
                   </div>
                </div>
                
                <div className="flex items-center justify-between border-t border-[#e3e6ec] mt-6 pt-4">
                   <span className="text-[12px] font-bold text-[#5a6886]">Current Status</span>
                   <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-[#132651]"></div>
                      <span className="text-[13px] font-bold text-[#132651]">Submitted for Review</span>
                   </div>
                </div>
             </div>

             {/* Info Box */}
             <div className="bg-[#eef4ff] rounded-[8px] p-4 flex items-start gap-3">
                <Info className="size-5 text-[#3b82f6] shrink-0 mt-0.5" />
                <p className="text-[13px] text-[#3b82f6] leading-relaxed">
                  The designated reviewer has been notified via email. They will verify the mitigation measures and compliance scores before final approval. You will receive a notification once the status changes.
                </p>
             </div>

             {/* Timeline */}
             <div>
                <h4 className="text-[16px] font-bold text-[#132651] mb-6">Submission Progress</h4>
                <div className="relative pl-3">
                   <div className="absolute left-[23px] top-[24px] bottom-6 w-0.5 bg-[#e3e6ec]"></div>
                   
                   <div className="flex items-start gap-5 mb-8 relative z-10">
                      <div className="size-6 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0">
                         <CheckCircle2 className="size-4" strokeWidth={3} />
                      </div>
                      <div className="-mt-1">
                         <p className="text-[14px] font-bold text-[#132651]">Risk Assessment Submitted</p>
                         <p className="text-[12px] text-[#5a6886] mt-1">Completed Today, 10:42</p>
                      </div>
                   </div>
                   
                   <div className="flex items-start gap-5 mb-8 relative z-10">
                      <div className="size-6 rounded-full border-[3px] border-[#3b82f6] bg-white shrink-0"></div>
                      <div className="-mt-1">
                         <p className="text-[14px] font-bold text-[#132651]">Reviewer Check</p>
                         <p className="text-[12px] text-[#3b82f6] font-bold mt-1">In Progress</p>
                      </div>
                   </div>
                   
                   <div className="flex items-start gap-5 relative z-10">
                      <div className="size-6 rounded-full border-[3px] border-[#c5c6cd] bg-white shrink-0"></div>
                      <div className="-mt-1">
                         <p className="text-[14px] font-bold text-[#132651] opacity-50">Final Approval / Required Changes</p>
                         <p className="text-[12px] text-[#95a0b6] mt-1">Pending</p>
                      </div>
                   </div>
                </div>
             </div>

          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#e3e6ec] p-6 bg-white shrink-0 mt-4">
          <div className="flex items-center gap-3">
             <Button
               variant="outline"
               onClick={() => setIsSubmittedSuccessOpen(false)}
               className="h-10 rounded-[6px] border-[#c5c6cd] bg-white px-6 text-[14px] font-bold text-[#132651] hover:bg-[#f3f5f8] shadow-none"
             >
               Save Draft
             </Button>
             <Button
               onClick={() => setIsSubmittedSuccessOpen(false)}
               className="h-10 rounded-[6px] bg-[#132651] px-6 text-[14px] font-bold text-white hover:bg-[#0d1b3a] shadow-none"
             >
               Preview Submitted Assessment
             </Button>
          </div>
          <Button
            variant="ghost"
            onClick={() => setIsSubmittedSuccessOpen(false)}
            className="h-10 rounded-[6px] px-6 text-[14px] font-bold text-[#132651] hover:bg-[#f3f5f8]"
          >
            View Previous Risk Assessments
          </Button>
        </div>
      </div>
    </div>
  );
}
