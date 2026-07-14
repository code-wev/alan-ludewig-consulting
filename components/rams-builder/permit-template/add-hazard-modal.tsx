"use client";

import React, { useEffect } from "react";
import {
  X,
  AlertTriangle,
  ChevronDown,
  Trash2,
  PlusCircle,
  ShieldCheck,
  Camera,
  Zap,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddHazardModalProps {
  onClose: () => void;
}

export function AddHazardModal({ onClose }: AddHazardModalProps) {
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
      <div className="bg-white rounded-[12px] w-full max-w-[1100px] max-h-[90vh] flex shadow-2xl overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-brand-secondary hover:text-brand-primary transition-colors z-10"
        >
          <X className="size-6" />
        </button>

        {/* Left Column (Form Area) */}
        <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar relative">
          {/* Header */}
          <div className="flex flex-col gap-2 p-8 pb-6 border-b border-[#e3e6ec] shrink-0 sticky top-0 bg-white z-10">
            <div className="flex items-start gap-4">
              <div className="size-[48px] bg-[#fef3f2] rounded-[12px] flex items-center justify-center shrink-0">
                <AlertTriangle
                  className="size-6 text-[#d92d20]"
                  strokeWidth={2}
                />
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <h2 className="text-[20px] font-bold text-brand-primary leading-[1.2]">
                  Add Permit Hazard
                </h2>
                <p className="text-[14px] text-brand-secondary">
                  Identify a specific hazard and its mandatory control measures.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 flex flex-col gap-8 pb-8">
            {/* Hazard Information */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-[4px] h-[24px] bg-brand-primary rounded-r-[4px]" />
                <h3 className="text-[16px] font-bold text-brand-primary leading-[1.2]">
                  Hazard Information
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-bold text-brand-primary">
                    Hazard Title (Required)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Live Electrical Exposure in Server Room"
                    className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary placeholder:text-brand-secondary focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-brand-primary">
                      Category
                    </label>
                    <div className="relative">
                      <select className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 appearance-none text-[14px] text-brand-secondary focus:outline-none focus:border-brand-primary">
                        <option>Select category...</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-brand-primary">
                      Persons At Risk (Multi-Select)
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-3 py-1.5 bg-brand-primary text-white rounded-full text-[12px] font-bold flex items-center gap-1.5 cursor-pointer">
                        Contractors <X className="size-3" />
                      </span>
                      <span className="px-3 py-1.5 bg-white border border-[#e3e6ec] text-brand-secondary hover:border-brand-primary hover:text-brand-primary transition-colors rounded-full text-[12px] font-bold cursor-pointer">
                        Public
                      </span>
                      <span className="px-3 py-1.5 bg-white border border-[#e3e6ec] text-brand-secondary hover:border-brand-primary hover:text-brand-primary transition-colors rounded-full text-[12px] font-bold cursor-pointer">
                        Staff
                      </span>
                      <span className="px-3 py-1.5 bg-white border border-[#e3e6ec] text-brand-secondary hover:border-brand-primary hover:text-brand-primary transition-colors rounded-full text-[12px] font-bold cursor-pointer">
                        Visitors
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-bold text-brand-primary">
                    Description
                  </label>
                  <textarea
                    placeholder="Detailed description of the hazard and how it may cause harm..."
                    className="w-full h-[100px] rounded-[8px] border border-[#e3e6ec] p-4 text-[14px] text-brand-primary placeholder:text-brand-secondary focus:outline-none focus:border-brand-primary resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Control Measures */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-[4px] h-[24px] bg-brand-primary rounded-r-[4px]" />
                <h3 className="text-[16px] font-bold text-brand-primary leading-[1.2]">
                  Control Measures
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-bold text-brand-primary">
                    Primary Controls
                  </label>
                  <textarea
                    placeholder="Primary safety measures to be implemented..."
                    className="w-full h-[80px] rounded-[8px] border border-[#e3e6ec] p-4 text-[14px] text-brand-primary placeholder:text-brand-secondary focus:outline-none focus:border-brand-primary resize-none"
                  />
                </div>

                <div className="bg-[#f8fafd] border border-[#e3e6ec] rounded-[12px] p-5 flex flex-col gap-4">
                  <span className="text-[14px] font-bold text-brand-primary">
                    Repeatable Measures List
                  </span>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-[32px] h-[40px] bg-white border border-[#e3e6ec] rounded-[6px] flex items-center justify-center shrink-0">
                        <span className="text-[13px] font-bold text-brand-secondary">
                          1
                        </span>
                      </div>
                      <input
                        type="text"
                        defaultValue="Lock-out Tag-out (LOTO) procedure confirmed"
                        className="flex-1 h-[40px] rounded-[6px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary"
                      />
                      <button className="text-[#d92d20] hover:opacity-80 transition-opacity p-2">
                        <Trash2 className="size-5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-[32px] h-[40px] bg-white border border-[#e3e6ec] rounded-[6px] flex items-center justify-center shrink-0">
                        <span className="text-[13px] font-bold text-brand-secondary">
                          2
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Add next control measure..."
                        className="flex-1 h-[40px] rounded-[6px] border border-dashed border-[#dce1eb] px-4 text-[14px] text-brand-secondary focus:outline-none focus:border-brand-primary"
                      />
                      <button className="text-brand-primary hover:opacity-80 transition-opacity p-2">
                        <PlusCircle className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-brand-primary">
                      Responsible Role
                    </label>
                    <div className="relative">
                      <select className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 appearance-none text-[14px] text-brand-secondary focus:outline-none focus:border-brand-primary">
                        <option>Select role...</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-brand-primary">
                      Permit Condition
                    </label>
                    <div className="relative">
                      <select className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 appearance-none text-[14px] text-brand-secondary focus:outline-none focus:border-brand-primary">
                        <option>Select condition...</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Toggles */}
                <div className="flex flex-col gap-3 pt-2">
                  {/* Toggle 1 */}
                  <div className="flex items-center justify-between p-4 bg-[#f8fafd] border border-[#e3e6ec] rounded-[12px]">
                    <div className="flex items-center gap-4">
                      <div className="size-[40px] bg-brand-primary rounded-[8px] flex items-center justify-center shrink-0">
                        <ShieldCheck
                          className="size-5 text-white"
                          strokeWidth={2}
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-[14px] font-bold text-brand-primary">
                          Required Before Work Starts
                        </h4>
                        <p className="text-[12px] text-brand-secondary">
                          Prevent work commencement until this is ticked off.
                        </p>
                      </div>
                    </div>
                    {/* Switch */}
                    <div className="w-[44px] h-[24px] bg-brand-primary rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 bottom-1 w-[16px] bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Toggle 2 */}
                  <div className="flex items-center justify-between p-4 bg-white border border-[#e3e6ec] rounded-[12px]">
                    <div className="flex items-center gap-4">
                      <div className="size-[40px] bg-[#f3f5f8] rounded-[8px] flex items-center justify-center shrink-0">
                        <Camera
                          className="size-5 text-brand-secondary"
                          strokeWidth={2}
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-[14px] font-bold text-brand-primary">
                          Verification Required
                        </h4>
                        <p className="text-[12px] text-brand-secondary">
                          Requires photo or signature evidence for closure.
                        </p>
                      </div>
                    </div>
                    {/* Switch Off */}
                    <div className="w-[44px] h-[24px] bg-[#e3e6ec] rounded-full relative cursor-pointer">
                      <div className="absolute left-1 top-1 bottom-1 w-[16px] bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer inside left column */}
          <div className="flex items-center gap-4 p-8 border-t border-[#e3e6ec] mt-auto shrink-0 bg-white">
            <Button
              variant="outline"
              className="h-[44px] px-6 rounded-[8px] border-[#e3e6ec] text-brand-primary font-bold text-[14px] hover:bg-gray-50"
              onClick={onClose}
            >
              Generate RAMS PDF
            </Button>
            <Button
              className="h-[44px] px-6 rounded-[8px] bg-brand-primary text-white font-bold text-[14px] hover:bg-opacity-90"
              onClick={onClose}
            >
              Submit for Review
            </Button>
          </div>
        </div>

        {/* Right Column (Summary) */}
        <div className="w-[380px] bg-[#f8fafd] border-l border-[#e3e6ec] shrink-0 p-8 flex flex-col gap-6 overflow-y-auto no-scrollbar">
          <h3 className="text-[16px] font-bold text-brand-primary">
            Hazard Summary
          </h3>

          <div className="h-[200px] bg-white border border-[#e3e6ec] rounded-[12px] flex items-center justify-center relative shadow-sm">
            <Zap
              className="size-16 text-[#dce1eb]"
              strokeWidth={1}
              fill="#f3f5f8"
            />
            <div className="absolute bottom-3 right-3 px-3 py-1 bg-brand-primary text-white text-[12px] font-bold rounded-[6px]">
              Electrical Preview
            </div>
          </div>

          <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-4 flex flex-col gap-2 shadow-sm">
            <span className="text-[12px] text-brand-secondary">
              Current Status
            </span>
            <div className="flex items-center gap-2">
              <div className="size-2 bg-[#d92d20] rounded-full" />
              <span className="text-[15px] font-bold text-brand-primary">
                Critical Hazard
              </span>
            </div>
          </div>

          <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-4 flex items-center justify-between shadow-sm">
            <div className="flex flex-col gap-1">
              <span className="text-[12px] text-brand-secondary">
                Control Count
              </span>
              <span className="text-[20px] font-bold text-brand-primary">
                3
              </span>
            </div>
            <div className="size-[48px] rounded-full border-[3px] border-[#e4ebfe] flex items-center justify-center relative">
              <svg
                className="absolute inset-0 size-full -rotate-90 transform"
                viewBox="0 0 48 48"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  stroke="#0453cd"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="138"
                  strokeDashoffset="34.5"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <span className="text-[12px] font-bold text-brand-primary">
                75%
              </span>
            </div>
          </div>

          <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-4 flex flex-col gap-3 shadow-sm">
            <span className="text-[12px] text-brand-secondary">
              Linked Condition
            </span>
            <span className="text-[14px] font-bold text-brand-primary">
              Continuous Monitoring Required
            </span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-[#f3f5f8] text-brand-secondary text-[12px] rounded-[6px] border border-[#e3e6ec]">
                Loto
              </span>
              <span className="px-2.5 py-1 bg-[#f3f5f8] text-brand-secondary text-[12px] rounded-[6px] border border-[#e3e6ec]">
                PPE
              </span>
            </div>
          </div>

          <div className="bg-[#fef3f2] border border-[#fecdca] rounded-[12px] p-4 flex items-start gap-3 mt-2">
            <Info className="size-5 text-[#d92d20] mt-0.5 shrink-0" />
            <p className="text-[12px] text-[#d92d20] leading-normal">
              This hazard requires a formal Method Statement update. Ensure the
              RAMS document is synced after saving this hazard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
