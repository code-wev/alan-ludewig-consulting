"use client";

import React from "react";
import { FileText, Info, CheckCircle2, ChevronRight, Eye } from "lucide-react";
import type { MethodStatementScopeOfWorks } from "./types";

interface ScopeOfWorksStepProps {
  data: MethodStatementScopeOfWorks;
  onFieldChange: <K extends keyof MethodStatementScopeOfWorks>(key: K, value: MethodStatementScopeOfWorks[K]) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function ScopeOfWorksStep({
  data,
  onFieldChange,
  onSaveDraft,
  onNextStep,
}: ScopeOfWorksStepProps) {
  return (
    <div className="grid grid-cols-12 gap-8 w-full items-start">
      {/* Left Column - Form Card */}
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-6 w-full">
        <div className="flex flex-col bg-white border-[1.5px] border-[#E3E6EC] rounded-[12px] pt-10 px-8 pb-12 shadow-[0_1px_1px_rgba(15,23,42,0.04)] gap-6">
          
          {/* Header */}
          <div className="flex items-center gap-3">
            <FileText className="size-7 text-[#132651]" />
            <h2 className="text-[20px] font-bold text-[#132651] font-inter">Step 2: Scope of Works</h2>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-6">
            
            {/* Descriptions of Works */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-0.5">
                <label className="text-[14px] font-bold text-[#132651] font-inter">Descriptions of works</label>
                <span className="text-[14px] text-[#5A6886] font-inter">Describe what work will be carried out</span>
              </div>
              <textarea
                placeholder="Enter a detailed description of the physical activities to be performed..."
                value={data.descriptionOfWorks}
                onChange={(e) => onFieldChange("descriptionOfWorks", e.target.value)}
                className="w-full h-[78px] p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition resize-none"
              />
            </div>

            {/* Work Area/Location */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-0.5">
                <label className="text-[14px] font-bold text-[#132651] font-inter">Work Area/Location</label>
                <span className="text-[14px] text-[#5A6886] font-inter">Describe the exact area where the work will take place</span>
              </div>
              <input
                type="text"
                placeholder="e.g., Level 2 North Wing, Plant Room B..."
                value={data.workAreaLocation}
                onChange={(e) => onFieldChange("workAreaLocation", e.target.value)}
                className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition"
              />
            </div>

            {/* Access / Egress Arrangements */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-0.5">
                <label className="text-[14px] font-bold text-[#132651] font-inter">Access / Egress Arrangements</label>
                <span className="text-[14px] text-[#5A6886] font-inter">Describe entry/exit points, scaffolding access, lift usage etc...</span>
              </div>
              <textarea
                placeholder="Describe entry/exit points, scaffolding access, lift usage etc..."
                value={data.accessEgress}
                onChange={(e) => onFieldChange("accessEgress", e.target.value)}
                className="w-full h-[78px] p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition resize-none"
              />
            </div>

            {/* Exclusions / Limitations */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-0.5">
                <label className="text-[14px] font-bold text-[#132651] font-inter">Exclusions / Limitations</label>
                <span className="text-[14px] text-[#5A6886] font-inter">List any work exclusions, restricted areas, or limitations</span>
              </div>
              <textarea
                placeholder="e.g., No hot works permitted, excluding electrical termination..."
                value={data.exclusionsLimitations}
                onChange={(e) => onFieldChange("exclusionsLimitations", e.target.value)}
                className="w-full h-[78px] p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition resize-none"
              />
            </div>

            {/* Site-Specific Notes */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-0.5">
                <label className="text-[14px] font-bold text-[#132651] font-inter">Site-Specific Notes</label>
                <span className="text-[14px] text-[#5A6886] font-inter">Add any project-specific information that affects the method of work</span>
              </div>
              <textarea
                placeholder="Additional observations or specific client requirements..."
                value={data.siteSpecificNotes}
                onChange={(e) => onFieldChange("siteSpecificNotes", e.target.value)}
                className="w-full h-[78px] p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition resize-none"
              />
            </div>

          </div>

          {/* Footer Actions */}
          <div className="flex items-center gap-4 mt-4 pt-6 border-t border-[#f3f5f8]">
            <button
              type="button"
              onClick={onSaveDraft}
              className="h-[34px] px-4 rounded-[6px] border border-[#132651] bg-white text-[#132651] text-[12px] font-bold transition hover:bg-brand-bg-main"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={onNextStep}
              className="h-[34px] px-4 rounded-[6px] bg-[#132651] text-white text-[12px] font-bold transition hover:opacity-90"
            >
              Next: Sequence of Works
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Helper & Document Progress */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 w-full">
        
        {/* Helper Box */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-[12px] gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#132651] shrink-0 mt-0.5" />
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-bold text-[#132651] font-inter">Reminder</h4>
              <p className="text-[14px] leading-[1.6] text-[#5A6886] font-inter">
                Keep the scope clear and site-specific. Include only work activities relevant to this method statement. Avoid generic descriptions that could apply to any site.
              </p>
            </div>
          </div>
          <ul className="flex flex-col gap-2.5 pl-8 list-disc text-[14px] text-[#5A6886] font-inter">
            <li>Be specific about locations</li>
            <li>Clarify what is NOT included</li>
            <li>Note shared access routes</li>
          </ul>
        </div>

        {/* Document Progress Card */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-[12px] gap-6">
          <h4 className="text-[20px] font-bold text-[#132651] font-inter">Document Progress</h4>
          
          <div className="flex flex-col gap-4">
            
            {/* Step 1 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] text-[#5A6886] font-inter">Project Details</span>
              <CheckCircle2 className="size-5 text-[#16a34a]" />
            </div>

            {/* Step 2 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] font-bold text-[#132651] font-inter">Scope of Works</span>
              <div className="size-5 rounded-full border-2 border-[#132651] bg-[#132651]/10 flex items-center justify-center">
                <div className="size-2 rounded-full bg-[#132651]" />
              </div>
            </div>

            {/* Step 3 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3 opacity-60">
              <span className="text-[16px] text-[#5A6886] font-inter">Sequence of Works</span>
              <div className="size-5 rounded-full border border-[#E3E6EC]" />
            </div>

            {/* Step 4 Progress */}
            <div className="flex items-center justify-between pb-1 opacity-60">
              <span className="text-[16px] text-[#5A6886] font-inter">Risk Assessment</span>
              <div className="size-5 rounded-full border border-[#E3E6EC]" />
            </div>

          </div>

          {/* Action button */}
          <button
            type="button"
            onClick={onSaveDraft}
            className="flex items-center justify-center gap-2 h-[34px] w-full rounded-[6px] border border-[#132651] bg-white text-[#132651] text-[12px] font-bold transition hover:bg-brand-bg-main"
          >
            <Eye className="size-4" /> Preview Draft
          </button>
        </div>

      </div>
    </div>
  );
}
