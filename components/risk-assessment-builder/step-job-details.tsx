"use client";

import { Layout, ShieldCheck, RefreshCw, Share2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type RiskAssessmentJobDetails } from "./types";

interface StepJobDetailsProps {
  jobDetails: RiskAssessmentJobDetails;
  onFieldChange: (field: keyof RiskAssessmentJobDetails, value: unknown) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function StepJobDetails({
  jobDetails,
  onFieldChange,
  onSaveDraft,
  onNextStep,
}: StepJobDetailsProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3 font-sans w-full">
      {/* Left 2 Columns: Main Form Card */}
      <div className="lg:col-span-2 rounded-[12px] border border-[#e3e6ec] bg-white p-6.25 flex flex-col justify-between shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
        <div className="space-y-6">
          <h3 className="text-[18px] font-bold text-brand-primary">Project &amp; Site Details</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left Column of fields */}
            <div className="space-y-5">
              {/* Project / Reference select */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-brand-primary block">
                  Project/Reference
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={jobDetails.projectName}
                    onChange={(e) => onFieldChange("projectName", e.target.value)}
                    placeholder="Select existing project..."
                    className="h-10 w-full rounded-[6px] border border-[#d7dce5] bg-white pl-3 pr-10 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
                  />
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#8a96ab] pointer-events-none" />
                </div>
              </div>

              {/* Client/Company Name */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-brand-primary block">
                  Client/Company Name
                </label>
                <input
                  type="text"
                  value={jobDetails.clientPrincipalContractor}
                  onChange={(e) => onFieldChange("clientPrincipalContractor", e.target.value)}
                  placeholder="e.g. Acme Corp Ltd"
                  className="h-10 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
                />
              </div>

              {/* Site Address */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-brand-primary block">
                  Site Address
                </label>
                <textarea
                  value={jobDetails.siteAddress}
                  onChange={(e) => onFieldChange("siteAddress", e.target.value)}
                  placeholder="Enter full site location details..."
                  rows={4}
                  className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary resize-none"
                />
              </div>
            </div>

            {/* Right Column of fields */}
            <div className="space-y-5">
              {/* Assessment Date */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-brand-primary block">
                  Assessment Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={jobDetails.plannedStartDate}
                    onChange={(e) => onFieldChange("plannedStartDate", e.target.value)}
                    className="h-10 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition focus:border-brand-primary cursor-pointer"
                  />
                </div>
              </div>

              {/* Review Date */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-brand-primary block">
                  Review Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={jobDetails.reviewDate}
                    onChange={(e) => onFieldChange("reviewDate", e.target.value)}
                    className="h-10 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition focus:border-brand-primary cursor-pointer"
                  />
                </div>
              </div>

              {/* Assessor Name */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-brand-primary block">
                  Assessor Name
                </label>
                <input
                  type="text"
                  value={jobDetails.preparedBy}
                  onChange={(e) => onFieldChange("preparedBy", e.target.value)}
                  placeholder="Alan Ludewig"
                  className="h-10 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
                />
              </div>

              {/* Description of Works */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-brand-primary block">
                  Description of Works
                </label>
                <input
                  type="text"
                  value={jobDetails.descriptionOfWorks}
                  onChange={(e) => onFieldChange("descriptionOfWorks", e.target.value)}
                  placeholder="Brief overview of the activity being assessed..."
                  className="h-10 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-end gap-3 border-t border-[#e3e6ec] mt-8 pt-5">
          <Button
            type="button"
            variant="outline"
            onClick={onSaveDraft}
            className="h-9 px-5 rounded-[6px] border border-brand-primary bg-white text-[13px] font-bold text-brand-primary shadow-none hover:bg-brand-bg-main"
          >
            Save Draft
          </Button>
          <Button
            type="button"
            onClick={onNextStep}
            className="h-9 px-5 rounded-[6px] bg-brand-primary text-[13px] font-bold text-white hover:bg-[#0d1b3a]"
          >
            Next Step
          </Button>
        </div>
      </div>

      {/* Right 1 Column: Info Sidebar */}
      <div className="space-y-6">
        <div className="rounded-[12px] border border-[#e3e6ec] bg-[#f3f5f8] p-6 space-y-6 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
          {/* Card 1: Standard Templates */}
          <div className="flex gap-4">
            <div className="flex size-10 items-center justify-center rounded-[6px] bg-white border border-[#e3e6ec] shadow-sm shrink-0">
              <Layout className="size-5 text-brand-primary" />
            </div>
            <div className="space-y-1">
              <h4 className="text-[15px] font-bold text-brand-primary leading-tight">Standard Templates</h4>
              <p className="text-[13px] text-brand-secondary leading-[1.6]">
                Use our pre-filled library of common industry hazards to speed up your assessment process while ensuring compliance.
              </p>
            </div>
          </div>

          {/* Card 2: HSE Aligned */}
          <div className="flex gap-4">
            <div className="flex size-10 items-center justify-center rounded-[6px] bg-white border border-[#e3e6ec] shadow-sm shrink-0">
              <ShieldCheck className="size-5 text-brand-primary" />
            </div>
            <div className="space-y-1">
              <h4 className="text-[15px] font-bold text-brand-primary leading-tight">HSE Aligned</h4>
              <p className="text-[13px] text-brand-secondary leading-[1.6]">
                Our builder follows current HSE guidelines for 5 steps to risk assessment, helping you stay legally compliant.
              </p>
            </div>
          </div>

          {/* Card 3: Auto-Save Enabled */}
          <div className="flex gap-4">
            <div className="flex size-10 items-center justify-center rounded-[6px] bg-white border border-[#e3e6ec] shadow-sm shrink-0">
              <RefreshCw className="size-5 text-brand-primary" />
            </div>
            <div className="space-y-1">
              <h4 className="text-[15px] font-bold text-brand-primary leading-tight">Auto-Save Enabled</h4>
              <p className="text-[13px] text-brand-secondary leading-[1.6]">
                Your progress is automatically saved to your dashboard. You can close this window and resume any draft at a later time.
              </p>
            </div>
          </div>
        </div>

        {/* Share for Review Bottom Card */}
        <div className="flex items-center gap-3 rounded-[12px] border border-[#e3e6ec] bg-white p-4.5 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
          <div className="flex size-9 items-center justify-center rounded-full bg-[#f4f7ff] shrink-0">
            <Share2 className="size-4.5 text-brand-primary" />
          </div>
          <span className="text-[14px] font-bold text-brand-primary">Share for Review</span>
        </div>
      </div>
    </div>
  );
}
