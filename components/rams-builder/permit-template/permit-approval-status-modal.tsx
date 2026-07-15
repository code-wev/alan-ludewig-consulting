"use client";

import React from "react";
import {
  X,
  FileText,
  Edit3,
  Eye,
  Check,
  User,
  Info,
  MessageSquare,
  History,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface PermitApprovalStatusModalProps {
  onClose: () => void;
}

export function PermitApprovalStatusModal({
  onClose,
}: PermitApprovalStatusModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101828]/50 font-['Sansation'] p-4 md:p-8 overflow-y-auto no-scrollbar">
      <div className="w-[1202px] max-w-[95vw] bg-white rounded-[12px] flex flex-col gap-[40px] p-[24px] shadow-xl border-[1.5px] border-[#e3e6ec] relative my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[24px] right-[24px] p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X className="size-4 text-brand-secondary" />
        </button>

        <div className="flex flex-col gap-[24px] w-full relative">
          {/* Header */}
          <div className="flex flex-col gap-[6px] w-[318px]">
            <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">
              Permit Approval Status
            </h2>
            <div className="flex items-center gap-[8px]">
              <div className="bg-[#ffdad6] px-[8px] py-[2px] rounded-[3px] text-[#d92d20] text-[12px] leading-[1.6]">
                Requires Revision
              </div>
              <span className="text-[14px] text-brand-secondary leading-[1.6]">
                Permit ID: #PRMT-2024-0892
              </span>
            </div>
          </div>

          {/* Modal Content - Split layout */}
          <div className="flex items-start w-full border border-[#e3e6ec] rounded-[12px] overflow-hidden">
            {/* Left Column - Approval Timeline */}
            <div className="flex-1 pl-[32px] pr-[33px] py-[32px] flex flex-col bg-white border-r border-[#e3e6ec]">
              <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6] mb-[48px]">
                Approval Timeline
              </h3>

              <div className="relative flex flex-col gap-[48px]">
                {/* Vertical Line */}
                <div className="absolute top-[8px] bottom-[8px] left-[15px] w-[2px] bg-[#c5c6cf]" />

                {/* Timeline Item 1: Revision Requested */}
                <div className="relative flex flex-col gap-[8px] pl-[48px] z-10">
                  <div className="absolute left-0 top-[4px] shrink-0 flex items-center justify-center size-[32px] rounded-full bg-[#ba1a1a] border-4 border-[#ffdad6]">
                    <X className="size-[9.33px] text-white" strokeWidth={3} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-[16px] font-bold text-brand-primary leading-[1.6]">
                      Revision Requested
                    </h4>
                    <span className="text-[12px] text-[#7f848b] font-semibold tracking-[0.6px] font-['Hanken_Grotesk'] leading-[16px]">
                      Today, 14:32
                    </span>
                  </div>
                  <div className="bg-[#f3f5f8] border-l-4 border-[#d92d20] rounded-[6px] pl-[20px] pr-[16px] py-[16px]">
                    <p className="text-[14px] text-brand-secondary leading-[1.6] mb-0">
                      &quot;Risk control for high-altitude welding on Section B
                      is insufficient.
                    </p>
                    <p className="text-[14px] text-brand-secondary leading-[1.6] mb-0">
                      Please update the fall arrest equipment specifications and
                      resubmit
                    </p>
                    <p className="text-[14px] text-brand-secondary leading-[1.6]">
                      for review.&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-[12px] mt-[4px]">
                    <Image
                      width={24}
                      height={24}
                      src="https://i.pravatar.cc/150?u=1"
                      alt="Marcus Thorne"
                      className="size-[24px] rounded-[12px]"
                    />
                    <span className="text-[12px] text-brand-primary leading-[1.6]">
                      Marcus Thorne
                    </span>
                    <span className="bg-[#ccdafd] px-[8px] py-[2px] rounded-[3px] text-[12px] text-brand-secondary leading-[1.6]">
                      Permit Issuer
                    </span>
                  </div>
                </div>

                {/* Timeline Item 2: Permit Submitted */}
                <div className="relative flex flex-col gap-[4px] pl-[48px] z-10">
                  <div className="absolute left-0 top-[4px] shrink-0 flex items-center justify-center size-[32px] rounded-full bg-[#081a3f] border-4 border-[#e0e3e6]">
                    <FileText
                      className="size-[10px] text-white"
                      strokeWidth={3}
                    />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-[16px] font-bold text-brand-primary leading-[1.6]">
                      Permit Submitted for Approval
                    </h4>
                    <span className="text-[12px] text-[#7f848b] font-semibold tracking-[0.6px] font-['Hanken_Grotesk'] leading-[16px]">
                      Today, 09:15
                    </span>
                  </div>
                  <p className="text-[14px] text-brand-secondary leading-[1.6]">
                    Full documentation package submitted following internal
                    safety check.
                  </p>
                  <div className="flex items-center gap-[12px] mt-[8px]">
                    <Image
                      width={24}
                      height={24}
                      src="https://i.pravatar.cc/150?u=2"
                      alt="Sarah Chen"
                      className="size-[24px] rounded-[12px]"
                    />
                    <span className="text-[12px] text-brand-primary leading-[1.6]">
                      Sarah Chen
                    </span>
                    <span className="bg-[#ccdafd] px-[8px] py-[2px] rounded-[3px] text-[12px] text-brand-secondary leading-[1.6]">
                      Permit Issuer
                    </span>
                  </div>
                </div>

                {/* Timeline Item 3: Draft Created */}
                <div className="relative flex flex-col gap-[4px] pl-[48px] z-10 opacity-60">
                  <div className="absolute left-0 top-[4px] shrink-0 flex items-center justify-center size-[32px] rounded-full bg-[#c5c6cf] border-4 border-[#e0e3e6]">
                    <Edit3 className="size-[12px] text-brand-primary" />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-[16px] font-bold text-brand-primary leading-[1.6]">
                      Draft Created
                    </h4>
                    <span className="text-[12px] text-[#7f848b] font-semibold tracking-[0.6px] font-['Hanken_Grotesk'] leading-[16px]">
                      Yesterday, 16:45
                    </span>
                  </div>
                  <p className="text-[14px] text-brand-secondary leading-[1.6]">
                    Initial permit drafting based on Site Survey #882.
                  </p>
                  <div className="flex items-center gap-[12px] mt-[8px]">
                    <Image
                      width={24}
                      height={24}
                      src="https://i.pravatar.cc/150?u=3"
                      alt="Alan Ludewig"
                      className="size-[24px] rounded-[12px]"
                    />
                    <span className="text-[12px] text-brand-primary leading-[1.6]">
                      Alan Ludewig
                    </span>
                    <span className="bg-[#ccdafd] px-[8px] py-[2px] rounded-[3px] text-[12px] text-brand-secondary leading-[1.6]">
                      Safety Consultant
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Authorisation Status */}
            <div className="w-[582px] shrink-0 bg-[#f3f5f8] px-[32px] py-[24px] flex flex-col h-full">
              <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6] mb-[20px]">
                Authorisation Status
              </h3>

              <div className="flex flex-col gap-[16px] mb-[32px]">
                {/* Card 1 */}
                <div className="bg-white border border-[#e3e6ec] rounded-[6px] pl-[17px] pr-[17px] py-[17px] flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-[16px]">
                    <div className="relative shrink-0">
                      <Image
                        src="https://i.pravatar.cc/150?u=1"
                        alt="Marcus"
                        className="size-[48px] rounded-[6px]"
                      />
                      <div className="absolute bottom-[-4px] right-[-4px] size-[16px] bg-[#ba1a1a] border-2 border-white rounded-[12px] flex items-center justify-center">
                        <X className="size-[6px] text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <div className="flex flex-col w-[96px]">
                      <span className="text-[14px] text-brand-primary leading-[1.6]">
                        Marcus Thorne
                      </span>
                      <span className="text-[12px] text-brand-secondary leading-[1.6]">
                        Permit Issuer
                      </span>
                      <span className="text-[10px] text-[#d92d20] leading-[1.6] mt-[4px]">
                        Rejected
                      </span>
                    </div>
                  </div>
                  <button className="p-[6px] hover:bg-gray-100 rounded-[4px] shrink-0 size-[28px] flex items-center justify-center">
                    <Eye className="size-[18px] text-brand-primary" />
                  </button>
                </div>

                {/* Card 2 */}
                <div className="bg-white border border-[#e3e6ec] rounded-[6px] pl-[17px] pr-[17px] py-[17px] flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-[16px]">
                    <div className="relative shrink-0">
                      <Image
                        width={48}
                        height={48}
                        src="https://i.pravatar.cc/150?u=2"
                        alt="Sarah"
                        className="size-[48px] rounded-[6px]"
                      />
                      <div className="absolute bottom-[-4px] right-[-4px] size-[16px] bg-[#505e7c] border-2 border-white rounded-[12px] flex items-center justify-center">
                        <Check
                          className="size-[6px] text-white"
                          strokeWidth={3}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-[76px]">
                      <span className="text-[14px] text-brand-primary leading-[1.6]">
                        Sarah Chen
                      </span>
                      <span className="text-[12px] text-brand-secondary leading-[1.6]">
                        Permit Holder
                      </span>
                      <span className="text-[10px] text-[#505e7c] leading-[1.6] mt-[4px]">
                        Accepted
                      </span>
                    </div>
                  </div>
                  <button className="p-[6px] hover:bg-gray-100 rounded-[4px] shrink-0 size-[28px] flex items-center justify-center">
                    <Eye className="size-[18px] text-brand-primary" />
                  </button>
                </div>

                {/* Card 3 */}
                <div className="bg-white border border-[#e3e6ec] rounded-[6px] pl-[17px] pr-[17px] py-[17px] flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-[16px]">
                    <div className="relative shrink-0">
                      <div className="size-[48px] rounded-[6px] bg-[#e6e8ec] flex items-center justify-center">
                        <User className="size-[18px] text-gray-400" />
                      </div>
                      <div className="absolute bottom-[-4px] right-[-4px] size-[16px] bg-[#c5c6cf] border-2 border-white rounded-[12px] flex items-center justify-center" />
                    </div>
                    <div className="flex flex-col w-[115px]">
                      <span className="text-[14px] text-brand-primary leading-[1.6]">
                        TBD
                      </span>
                      <span className="text-[12px] text-brand-secondary leading-[1.6]">
                        Performing Authority
                      </span>
                      <span className="text-[10px] text-brand-secondary leading-[1.6] mt-[4px]">
                        Awaiting Assignment
                      </span>
                    </div>
                  </div>
                  <button className="p-[6px] hover:bg-gray-100 rounded-[4px] shrink-0 size-[28px] flex items-center justify-center">
                    <Eye className="size-[18px] text-brand-primary" />
                  </button>
                </div>

                {/* Card 4 */}
                <div className="bg-white border border-[#e3e6ec] rounded-[6px] pl-[17px] pr-[17px] py-[17px] flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-[16px]">
                    <div className="relative shrink-0">
                      <Image
                        src="https://i.pravatar.cc/150?u=4"
                        alt="Robert"
                        className="size-[48px] rounded-[6px]"
                      />
                      <div className="absolute bottom-[-4px] right-[-4px] size-[16px] bg-[#c5c6cf] border-2 border-white rounded-[12px] flex items-center justify-center" />
                    </div>
                    <div className="flex flex-col w-[103px]">
                      <span className="text-[14px] text-brand-primary leading-[1.6]">
                        Robert Hale
                      </span>
                      <span className="text-[12px] text-brand-secondary leading-[1.6]">
                        Competent Person
                      </span>
                      <span className="text-[10px] text-brand-secondary leading-[1.6] mt-[4px]">
                        Pending Approval
                      </span>
                    </div>
                  </div>
                  <button className="p-[6px] hover:bg-gray-100 rounded-[4px] shrink-0 size-[28px] flex items-center justify-center">
                    <Eye className="size-[18px] text-brand-primary" />
                  </button>
                </div>
              </div>

              <div className="bg-[#081a3f] rounded-[4px] p-[16px] flex gap-[8px]">
                <Info className="size-[20px] text-white shrink-0 mt-0.5" />
                <div className="flex flex-col gap-[3px] w-[458px]">
                  <span className="text-[14px] font-bold text-white leading-[1.6]">
                    Authorisation Requirement
                  </span>
                  <span className="text-[12px] text-brand-bg-main/80 leading-[1.6]">
                    All 4 roles must acknowledge and accept terms before the
                    permit is issued for active work.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Guidance Section */}
          <div className="bg-[#f3f5f8] rounded-[12px] px-[32px] py-[24px] flex justify-between items-center w-full">
            <div className="flex items-start gap-[12px]">
              <MessageSquare className="size-[24px] text-brand-primary shrink-0 mt-1" />
              <div className="flex flex-col gap-[8px]">
                <span className="text-[16px] font-bold text-brand-primary leading-[1.6]">
                  Resubmit Guidance
                </span>
                <p className="text-[14px] text-brand-secondary leading-[1.6]">
                  To resolve the current rejection, please navigate to{" "}
                  <span className="font-bold text-brand-primary">
                    Risk Controls (Step 4)
                  </span>{" "}
                  and update the High-Altitude Fall Protection section. Ensure
                  you attach the latest certification for the specific harnesses
                  to be used by the team.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ec] rounded-[6px] px-[20px] py-[16px] shrink-0 flex items-center gap-[24px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] w-[202px]">
              <div className="flex flex-col gap-[2px]">
                <span className="text-[12px] text-brand-secondary leading-[1.6]">
                  Last Audit
                </span>
                <span className="text-[14px] font-bold text-brand-primary leading-[1.6]">
                  Aug 24, 2024
                </span>
              </div>
              <History className="size-[24px] text-brand-primary" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-[20px] items-center">
            <Button
              variant="outline"
              className="h-[34px] w-[149px] rounded-[6px] border-brand-primary text-brand-primary font-bold text-[12px] hover:bg-gray-50"
            >
              Edit Permit Control
            </Button>
            <Button className="h-[34px] w-[148px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-brand-primary/90">
              Resubmit for Approval
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
