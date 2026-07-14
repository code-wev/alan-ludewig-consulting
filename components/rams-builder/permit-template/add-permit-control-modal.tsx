"use client";

import React, { useEffect } from "react";
import {
  X,
  Info,
  CloudUpload,
  FileText,
  Eye,
  Trash2,
  CheckCircle2,
  ShieldCheck,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AddPermitControlModalProps {
  onClose: () => void;
}

export function AddPermitControlModal({ onClose }: AddPermitControlModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/70 backdrop-blur-sm p-4 font-['Sansation']">
      {/* Modal Container */}
      <div className="bg-white rounded-[12px] w-full max-w-[1000px] max-h-[90vh] flex flex-col shadow-2xl relative">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#e3e6ec] shrink-0">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-[8px] bg-[#0f214a] flex items-center justify-center shrink-0">
              <ShieldCheck className="size-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] font-bold text-[#0f214a] leading-[1.2]">
                Add Permit Control
              </h2>
              <p className="text-[14px] text-brand-secondary">
                Define a control measure required before work can proceed under this permit.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-brand-secondary hover:text-[#0f214a] transition-colors"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-8">
          <div className="grid grid-cols-[1fr_320px] gap-8">
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              {/* Section 1: Control Details */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <Info className="size-[18px] text-[#0f214a]" />
                  <h3 className="text-[16px] font-bold text-[#0f214a]">
                    Control Details
                  </h3>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-[#0f214a]">
                      Control Measure Title<span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Full fall arrest harness"
                      className="w-full h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] text-brand-primary placeholder:text-[#a1a9b8] focus:outline-none focus:border-[#0f214a]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#0f214a]">
                        Control Category<span className="text-[#dc2626]">*</span>
                      </label>
                      <select className="w-full h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] text-[#0f214a] bg-white focus:outline-none focus:border-[#0f214a]">
                        <option>Engineering</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#0f214a]">
                        Related Hazard<span className="text-[#dc2626]">*</span>
                      </label>
                      <select className="w-full h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] text-[#0f214a] bg-white focus:outline-none focus:border-[#0f214a]">
                        <option>Work at Height</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#0f214a]">
                        Related Permit Check
                      </label>
                      <select className="w-full h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] text-[#0f214a] bg-white focus:outline-none focus:border-[#0f214a]">
                        <option>Question #1</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#0f214a]">
                        Control Source
                      </label>
                      <select className="w-full h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] text-[#0f214a] bg-white focus:outline-none focus:border-[#0f214a]">
                        <option>Suggested</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-[#0f214a]">
                      Control Description<span className="text-[#dc2626]">*</span>
                    </label>
                    <textarea
                      placeholder="Describe the exact control measure..."
                      className="w-full h-[100px] rounded-[6px] border border-[#e3e6ec] p-3 text-[14px] text-brand-primary placeholder:text-[#a1a9b8] focus:outline-none focus:border-[#0f214a] resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Responsibility & Verification */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-[18px] text-[#0f214a]" />
                  <h3 className="text-[16px] font-bold text-[#0f214a]">
                    Responsibility & Verification
                  </h3>
                </div>

                <div className="grid grid-cols-[1fr_200px] gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-[#0f214a]">
                      Responsible Person / Role<span className="text-[#dc2626]">*</span>
                    </label>
                    <select className="w-full h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] text-[#0f214a] bg-white focus:outline-none focus:border-[#0f214a]">
                      <option>Permit Holder</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3 pt-[28px]">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="size-[18px] rounded-[4px] bg-[#0f214a] flex items-center justify-center shrink-0">
                        <Check className="size-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-[13px] text-[#0f214a] font-bold">
                        Required Before Work Starts
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="size-[18px] rounded-[4px] bg-[#0f214a] flex items-center justify-center shrink-0">
                        <Check className="size-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-[13px] text-[#0f214a] font-bold">
                        Verification Required
                      </span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-[#0f214a]">
                      Verification Method
                    </label>
                    <select className="w-full h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] text-[#0f214a] bg-white focus:outline-none focus:border-[#0f214a]">
                      <option>Visual Inspection</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-[#0f214a]">
                      Verification Frequency
                    </label>
                    <select className="w-full h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] text-[#0f214a] bg-white focus:outline-none focus:border-[#0f214a]">
                      <option>Before Work Starts</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Linked Safety Records */}
              <div className="bg-[#f8fafd] rounded-[8px] border border-[#e3e6ec] p-5 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[14px] font-bold text-[#0f214a]">
                      Linked Safety Records
                    </h4>
                    <p className="text-[13px] text-brand-secondary">
                      Connect evidence or verification records.
                    </p>
                  </div>
                  <button className="px-3 py-1.5 bg-[#d6e9ff] text-[#0453cd] text-[12px] font-bold rounded-[6px] hover:bg-[#c2dfff] transition-colors">
                    Create Safety Record
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="size-[16px] rounded-[4px] border border-[#c2c9d6] bg-white group-hover:border-[#0f214a] flex items-center justify-center shrink-0"></div>
                    <span className="text-[13px] text-brand-secondary">
                      Electrical Isolation
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="size-[16px] rounded-[4px] bg-[#0f214a] flex items-center justify-center shrink-0">
                      <Check className="size-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] text-brand-secondary">Gas Test</span>
                    <span className="px-2 py-0.5 bg-white border border-[#e3e6ec] text-brand-secondary text-[10px] font-bold rounded-[4px] ml-1">
                      Pending
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="size-[16px] rounded-[4px] border border-[#c2c9d6] bg-white group-hover:border-[#0f214a] flex items-center justify-center shrink-0"></div>
                    <span className="text-[13px] text-brand-secondary">
                      Working at Height
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="size-[16px] rounded-[4px] border border-[#c2c9d6] bg-white group-hover:border-[#0f214a] flex items-center justify-center shrink-0"></div>
                    <span className="text-[13px] text-brand-secondary">LOTO</span>
                  </label>
                </div>
              </div>

              {/* Supporting Evidence */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[15px] font-bold text-[#0f214a]">
                  Supporting Evidence
                </h3>
                
                <div className="h-[120px] rounded-[8px] border-2 border-dashed border-[#dce1eb] flex flex-col items-center justify-center gap-2 bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                  <CloudUpload className="size-8 text-[#0f214a]" strokeWidth={1.5} />
                  <span className="text-[13px] font-bold text-[#0f214a]">
                    Upload photo, certificate, inspection record or supporting document
                  </span>
                  <span className="text-[11px] text-[#8a94a6] uppercase font-bold">
                    PDF, JPG, PNG, DOCX
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-[8px] border border-[#e3e6ec] bg-white">
                  <div className="flex items-center gap-3">
                    <FileText className="size-5 text-[#0453cd]" strokeWidth={2} />
                    <div className="flex flex-col">
                      <span className="text-[13px] font-bold text-[#0f214a]">
                        Training_Cert_JohnDoe.pdf
                      </span>
                      <span className="text-[11px] text-brand-secondary">
                        1.2 MB • Uploaded today
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-[#0453cd] hover:opacity-80 transition-opacity">
                      <Eye className="size-[18px]" />
                    </button>
                    <button className="text-[#dc2626] hover:opacity-80 transition-opacity">
                      <Trash2 className="size-[18px]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[15px] font-bold text-[#0f214a]">
                  Additional Notes
                </h3>
                <textarea
                  placeholder="Enter any extra context or procedural reminders..."
                  className="w-full h-[80px] rounded-[6px] border border-[#e3e6ec] p-3 text-[14px] text-brand-primary placeholder:text-[#a1a9b8] focus:outline-none focus:border-[#0f214a] resize-none"
                />
              </div>
            </div>

            {/* Right Column: Control Summary */}
            <div className="flex flex-col">
              <div className="bg-[#f8fafd] border-l border-[#e3e6ec] h-full rounded-r-[12px] flex flex-col pt-0 p-6 absolute right-0 top-0 bottom-0 w-[320px]">
                {/* Close Button Spacer */}
                <div className="h-[88px] shrink-0 border-b border-[#e3e6ec] -mx-6 px-6 flex items-center mb-6"></div>
                
                <h3 className="text-[15px] font-bold text-[#0f214a] mb-6">
                  Control Summary
                </h3>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[13px] text-brand-secondary">
                      Related Hazard
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-[#dc2626]" />
                      <span className="text-[14px] font-bold text-[#0f214a]">
                        Work at Height
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[13px] text-brand-secondary">
                      Status
                    </span>
                    <div>
                      <span className="px-3 py-1 bg-[#fff5eb] text-[#b45309] text-[12px] font-bold rounded-full border border-[#fed7aa]">
                        Pending Verification
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-px bg-[#e3e6ec] my-1" />

                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-brand-secondary">Category:</span>
                    <span className="text-[13px] font-bold text-[#0f214a]">
                      PPE/Equipment
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-brand-secondary">Responsibility:</span>
                    <span className="text-[13px] font-bold text-[#0f214a]">
                      Permit Holder
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-brand-secondary">Required Before:</span>
                    <CheckCircle2 className="size-4 text-[#0f214a]" strokeWidth={2.5} />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-brand-secondary">Verification:</span>
                    <CheckCircle2 className="size-4 text-[#0f214a]" strokeWidth={2.5} />
                  </div>

                  <div className="bg-[#eef2ff] rounded-[8px] p-4 flex gap-3 border border-[#e0e7ff] mt-2">
                    <CheckCircle2 className="size-4 text-[#0453cd] shrink-0 mt-0.5" />
                    <span className="text-[12px] text-[#4b5563] leading-[1.6]">
                      Controls marked as required before work must be verified before the permit can be issued.
                    </span>
                  </div>

                  {/* Illustration Image */}
                  <div className="w-full h-[120px] rounded-[8px] overflow-hidden bg-[#e3e6ec] mt-2">
                     <Image
                        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80"
                        alt="Illustration"
                        width={400}
                        height={200}
                        className="w-full h-full object-cover grayscale mix-blend-multiply opacity-50"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 p-6 border-t border-[#e3e6ec] shrink-0 bg-white shadow-[0px_-2px_10px_rgba(0,0,0,0.02)]">
          <Button
            variant="outline"
            className="h-[44px] px-8 rounded-[6px] border-[#0f214a] text-[#0f214a] font-bold text-[14px] hover:bg-gray-50"
            onClick={onClose}
          >
            Save Draft
          </Button>
          <Button
            className="h-[44px] px-8 rounded-[6px] bg-[#0f214a] text-white font-bold text-[14px] hover:bg-opacity-90"
            onClick={onClose}
          >
            Add Control
          </Button>
        </div>
      </div>
    </div>
  );
}
