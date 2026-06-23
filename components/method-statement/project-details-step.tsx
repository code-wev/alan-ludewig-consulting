"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import type { MethodStatementProjectDetails } from "./types";

interface ProjectDetailsStepProps {
  details: MethodStatementProjectDetails;
  onFieldChange: <K extends keyof MethodStatementProjectDetails>(key: K, value: MethodStatementProjectDetails[K]) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function ProjectDetailsStep({
  details,
  onFieldChange,
  onSaveDraft,
  onNextStep,
}: ProjectDetailsStepProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col bg-white border-[1.5px] border-[#E3E6EC] rounded-[12px] pt-10 px-8 pb-12 shadow-[0_1px_1px_rgba(15,23,42,0.04)] gap-6">
        
        {/* Header */}
        <div className="flex items-center gap-3">
          <Briefcase className="size-7 text-[#132651]" />
          <h2 className="text-[20px] font-bold text-[#132651] font-inter">Step 1: Project Details</h2>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-semibold text-[#132651]">Project Name</label>
            <input
              type="text"
              placeholder="e.g. Roof Remediation Phase 1"
              value={details.projectName}
              onChange={(e) => onFieldChange("projectName", e.target.value)}
              className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-semibold text-[#132651]">Client/Principal Contractor</label>
            <input
              type="text"
              placeholder="e.g. BuildCorp UK Ltd"
              value={details.clientContractor}
              onChange={(e) => onFieldChange("clientContractor", e.target.value)}
              className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-semibold text-[#132651]">Site Address</label>
            <textarea
              placeholder="Enter full site address including postcode"
              value={details.siteAddress}
              onChange={(e) => onFieldChange("siteAddress", e.target.value)}
              className="w-full h-[78px] p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition resize-none"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-semibold text-[#132651]">Work Activity</label>
            <input
              type="text"
              placeholder="Briefly describe the task (e.g., Installation of HVAC unit on roof)"
              value={details.workActivity}
              onChange={(e) => onFieldChange("workActivity", e.target.value)}
              className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition"
            />
          </div>

          <div className="flex flex-col gap-2 col-span-1">
            <label className="text-sm font-semibold text-[#132651]">Prepared By</label>
            <input
              type="text"
              value={details.preparedBy}
              onChange={(e) => onFieldChange("preparedBy", e.target.value)}
              className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition"
            />
          </div>

          <div className="flex flex-col gap-2 col-span-1">
            <label className="text-sm font-semibold text-[#132651]">Approved By</label>
            <input
              type="text"
              placeholder="Name of safety officer/supervisor"
              value={details.approvedBy}
              onChange={(e) => onFieldChange("approvedBy", e.target.value)}
              className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition"
            />
          </div>

          <div className="flex flex-col gap-2 col-span-1">
            <label className="text-sm font-semibold text-[#132651]">Planned Start Date</label>
            <input
              type="date"
              value={details.plannedStartDate}
              onChange={(e) => onFieldChange("plannedStartDate", e.target.value)}
              className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition"
            />
          </div>

          <div className="flex flex-col gap-2 col-span-1">
            <label className="text-sm font-semibold text-[#132651]">Estimated Duration</label>
            <input
              type="text"
              placeholder="Value"
              value={details.estimatedDuration}
              onChange={(e) => onFieldChange("estimatedDuration", e.target.value)}
              className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition"
            />
          </div>

          <div className="flex flex-col gap-2 col-span-1">
            <label className="text-sm font-semibold text-[#132651]">Number of Operatives</label>
            <input
              type="text"
              placeholder="e.g. 4"
              value={details.numberOfOperatives}
              onChange={(e) => onFieldChange("numberOfOperatives", e.target.value)}
              className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition"
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
            Next: Scope of Works
          </button>
        </div>
      </div>
    </div>
  );
}
