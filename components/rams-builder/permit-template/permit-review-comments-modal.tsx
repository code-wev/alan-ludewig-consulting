"use client";

import React from "react";
import { X, Reply, ClipboardList, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface PermitReviewCommentsModalProps {
  onClose: () => void;
}

export function PermitReviewCommentsModal({
  onClose,
}: PermitReviewCommentsModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] w-full max-w-312 max-h-[90vh] flex flex-col relative shadow-xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[18.5px] right-[18.5px] p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="size-4 text-brand-secondary" />
        </button>

        {/* Content Area */}
        <div className="p-6 flex flex-col gap-10 h-full overflow-hidden">
          <div className="flex flex-col h-full relative">
            <div className="flex flex-col gap-6 h-full overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between pr-6">
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-[20px] font-bold text-brand-primary">
                    Permit Review Comments
                  </h2>
                  <p className="text-[16px] text-brand-secondary">
                    Ref: PERMIT-2024-0892 | High Voltage Maintenance
                  </p>
                </div>
              </div>

              {/* Main Layout (30/70 Split) */}
              <div className="flex flex-col lg:flex-row h-full overflow-hidden border border-[#e3e6ec] rounded-[12px]">
                {/* Left Sidebar (Review History) */}
                <div className="bg-[#f3f5f8] border-r border-[#e3e6ec] lg:w-68 shrink-0 p-6 flex flex-col gap-6 overflow-y-auto">
                  <h3 className="text-[16px] font-bold text-brand-primary">
                    Review History
                  </h3>

                  <div className="flex flex-col gap-8 relative ml-2.75">
                    <div className="absolute left-2.75 top-2 bottom-2 w-px bg-[#e3e6ec]" />

                    {/* Rejected */}
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="pt-1">
                        <div className="bg-[#d92d20] rounded-full size-6 flex items-center justify-center -ml-3">
                          <X className="size-3 text-white" strokeWidth={3} />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] text-brand-primary">
                          Review Rejected
                        </span>
                        <span className="text-[12px] text-brand-secondary mt-1">
                          Today, 10:45 AM
                        </span>
                      </div>
                    </div>

                    {/* Assigned */}
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="pt-1">
                        <div className="bg-white border border-[#e3e6ec] rounded-full size-6 flex items-center justify-center p-1 -ml-3">
                          <div className="bg-[#e3e6ec] rounded-full size-2" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] text-brand-primary">
                          Reviewer Assigned
                        </span>
                        <span className="text-[12px] text-brand-secondary mt-1">
                          Yesterday
                        </span>
                      </div>
                    </div>

                    {/* Submitted */}
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="pt-1">
                        <div className="bg-white border border-[#e3e6ec] rounded-full size-6 flex items-center justify-center p-1 -ml-3">
                          <div className="bg-[#e3e6ec] rounded-full size-2" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] text-brand-primary">
                          Submitted for Approval
                        </span>
                        <span className="text-[12px] text-brand-secondary mt-1">
                          Oct 24
                        </span>
                      </div>
                    </div>

                    {/* Draft */}
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="pt-1">
                        <div className="bg-white border border-[#e3e6ec] rounded-full size-6 flex items-center justify-center p-1 -ml-3">
                          <div className="bg-[#e3e6ec] rounded-full size-2" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] text-brand-primary">
                          Draft Created
                        </span>
                        <span className="text-[12px] text-brand-secondary mt-1">
                          Oct 22
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content (Comments) */}
                <div className="bg-white flex-1 p-6 flex flex-col gap-8 overflow-y-auto">
                  {/* Permit Type Comment */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <ClipboardList className="size-5 text-brand-primary" />
                        <h3 className="text-[16px] font-bold text-brand-primary">
                          Permit Type
                        </h3>
                      </div>
                      <span className="bg-[#ffdad6] text-[#d92d20] text-[12px] px-2 py-0.5 rounded-[3px]">
                        Unresolved
                      </span>
                    </div>

                    <div className="bg-white border border-[#e3e6ec] rounded-[12px] drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] p-4.25 flex flex-col gap-5">
                      <div className="flex gap-4">
                        <div className="size-10 rounded-[12px] bg-[#e6e8ea] shrink-0 overflow-hidden relative">
                          <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                            alt="Marcus Chen"
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex flex-col w-full gap-1">
                          <div className="flex items-center justify-between w-full">
                            <span className="font-semibold text-[#001137] text-[16px]">
                              Marcus Chen
                            </span>
                            <span className="text-[#505e7c] text-[13px]">
                              Today, 10:48 AM
                            </span>
                          </div>
                          <div className="text-[14px] text-[#191c1e] leading-5">
                            The permit type selected is{" "}
                            <span className="text-[#001137]">
                              &apos;Standard Hot Work&apos;
                            </span>
                            , but the job description mentions working near
                            high-pressure gas lines. This{" "}
                            <span className="text-[#ba1a1a]">MUST</span> be
                            upgraded to &apos;High Risk Restricted Area&apos; to
                            comply with site safety protocols.
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-[#e3e6ec] flex justify-end pt-2.25 mt-2">
                        <button className="flex items-center gap-1 hover:bg-slate-50 px-2 py-1 rounded">
                          <Reply className="size-3.5 text-brand-primary" />
                          <span className="text-[14px] text-brand-primary">
                            Reply
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hazard Identification Comment */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <AlertTriangle className="size-5 text-brand-primary" />
                        <h3 className="text-[16px] font-bold text-brand-primary">
                          Hazard Identification
                        </h3>
                      </div>
                      <span className="bg-[#ffdad6] text-[#d92d20] text-[12px] px-2 py-0.5 rounded-[3px]">
                        Unresolved
                      </span>
                    </div>

                    <div className="bg-white border border-[#e3e6ec] rounded-[12px] drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] p-4.25 flex flex-col gap-5">
                      <div className="flex gap-4">
                        <div className="size-10 rounded-[12px] bg-[#e6e8ea] shrink-0 overflow-hidden relative">
                          <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                            alt="Marcus Chen"
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex flex-col w-full gap-1">
                          <div className="flex items-center justify-between w-full">
                            <span className="font-semibold text-[#001137] text-[16px]">
                              Marcus Chen
                            </span>
                            <span className="text-[#505e7c] text-[13px]">
                              Today, 10:52 AM
                            </span>
                          </div>
                          <div className="text-[14px] text-[#191c1e] leading-5">
                            Atmospheric monitoring requirements are incomplete.
                            Given the confined space proximity, you must specify
                            the frequency of gas testing and the specific gases
                            being monitored (LEL, H2S, O2).
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-[#e3e6ec] flex justify-end pt-2.25 mt-2">
                        <button className="flex items-center gap-1 hover:bg-slate-50 px-2 py-1 rounded">
                          <Reply className="size-3.5 text-brand-primary" />
                          <span className="text-[14px] text-brand-primary">
                            Reply
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center shrink-0 w-full justify-start -mt-4">
            <div className="flex items-center gap-5">
              <Button
                variant="outline"
                className="h-8.5 rounded-[6px] border-brand-primary px-4 text-[12px] font-bold text-brand-primary"
              >
                Edit Permit
              </Button>
              <Button className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0a1530]">
                Resubmit for Approval
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
