"use client";

import React from "react";
import { 
  X, 
  Info, 
  CheckSquare2, 
  CheckCircle2, 
  ListChecks
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubmitForReviewModalProps {
  onClose: () => void;
}

export function SubmitForReviewModal({ onClose }: SubmitForReviewModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 font-['Sansation']">
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-[24px] flex flex-col gap-[40px] w-full max-w-[1200px] max-h-[95vh] overflow-y-auto relative shadow-xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-[20px] top-[20px] text-gray-400 hover:text-gray-600"
        >
          <X className="size-[20px]" />
        </button>

        <div className="flex flex-col gap-[32px]">
          {/* Header */}
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-[20px] font-bold text-brand-primary">Request Permit Approval</h3>
            <p className="text-[16px] text-brand-secondary">
              Review all details before submitting to the competent person.
            </p>
          </div>

          <div className="flex flex-col gap-[32px]">
            {/* Permit Summary Section */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center gap-[8px]">
                <Info className="size-[18px] text-brand-primary" />
                <h4 className="text-[16px] font-bold text-brand-primary">Permit Summary</h4>
              </div>
              
              <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[12px] p-[25px] grid grid-cols-3 gap-y-[24px] gap-x-[24px]">
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[14px] text-brand-primary">Permit Reference</span>
                  <span className="text-[14px] text-brand-secondary">PTW-2024-0892</span>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[14px] text-brand-primary">Type</span>
                  <span className="text-[14px] text-brand-secondary">Hot Works - Level 1</span>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[14px] text-brand-primary">Site</span>
                  <span className="text-[14px] text-brand-secondary">London Data Center A1</span>
                </div>
                
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[14px] text-brand-primary">Permit Holder</span>
                  <span className="text-[14px] text-brand-secondary">J. Harrison (Mech Eng)</span>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[14px] text-brand-primary">Issuer</span>
                  <span className="text-[14px] text-brand-secondary">S. Miller (Supervisor)</span>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[14px] text-brand-primary">Validity Period</span>
                  <span className="text-[14px] text-brand-secondary">08:00 - 18:00 (Today)</span>
                </div>
              </div>
            </div>

            {/* Checklist and Progress Section */}
            <div className="flex gap-[32px] items-start w-full">
              
              {/* Left Column: Readiness Checklist */}
              <div className="flex flex-col gap-[16px] w-[60%] shrink-0">
                <div className="flex items-center gap-[8px]">
                  <ListChecks className="size-[18px] text-brand-primary" />
                  <h4 className="text-[16px] font-bold text-brand-primary">Readiness Checklist</h4>
                </div>
                
                <div className="flex flex-col gap-[12px]">
                  {[
                    { title: "Job/site details complete", desc: "Verified all location markers and task scope" },
                    { title: "Hazards/controls reviewed", desc: "Risk matrix updated for today's weather" },
                    { title: "Safety records attached", desc: "COSHH & Method Statement included" },
                    { title: "Holder/Issuer assigned", desc: "Competency certificates verified" },
                    { title: "Validity confirmed", desc: "No overlapping high-risk tasks scheduled" },
                  ].map((item, idx) => (
                    <div key={idx} className="border border-[#e3e6ec] rounded-[6px] p-[13px] flex items-start gap-[12px]">
                      <div className="bg-[#0c1b36] rounded-[2px] size-[22px] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckSquare2 className="size-[14px] text-white" />
                      </div>
                      <div className="flex flex-col flex-1">
                        <span className="text-[14px] font-bold text-brand-primary">{item.title}</span>
                        <span className="text-[14px] text-brand-secondary">{item.desc}</span>
                      </div>
                      <CheckCircle2 className="size-[20px] text-green-500 shrink-0 mt-1" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Progress and Message */}
              <div className="flex flex-col gap-[24px] flex-1">
                <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[12px] p-[25px] flex flex-col gap-[16px]">
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] font-bold text-brand-primary">Overall Progress</span>
                    <span className="text-[14px] font-bold text-brand-primary">100%</span>
                  </div>
                  <div className="h-[8px] bg-[#e3e6ec] rounded-full overflow-hidden w-full">
                    <div className="h-full bg-brand-primary w-full" />
                  </div>
                  <p className="text-[14px] text-brand-secondary leading-[1.6]">
                    The system has validated that all mandatory compliance fields are populated and risk scores are within acceptable limits for a Competent Person review.
                  </p>
                </div>

                <div className="flex flex-col gap-[8.5px]">
                  <span className="text-[16px] font-bold text-brand-primary">Submission Message (Optional)</span>
                  <textarea 
                    className="border border-[#e3e6ec] rounded-[6px] p-[13px] text-[14px] placeholder:text-[#a3acba] min-h-[120px] resize-none focus:outline-none focus:border-brand-primary"
                    placeholder="Add any specific instructions or notes for the approver..."
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-[20px]">
          <Button 
            variant="outline"
            className="h-[34px] w-[150px] border-brand-primary text-brand-primary font-bold text-[12px]"
          >
            Save Draft
          </Button>
          <Button 
            className="h-[34px] w-[160px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90"
          >
            Request Approval
          </Button>
        </div>

      </div>
    </div>
  );
}
