"use client";

import { Layout, ShieldCheck, RefreshCw, ChevronDown } from "lucide-react";
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
    <div className="flex flex-col gap-6 font-sans w-full">
      {/* Main Form Card - Full Width */}
      <div className="w-full rounded-[16px] border border-[#e3e6ec] bg-white pt-8 px-8 pb-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-[18px] font-bold text-brand-primary">Project &amp; Site Details</h3>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left Column of fields */}
            <div className="space-y-5">
              {/* Project / Reference select */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-brand-primary block">
                  Project/Reference
                </label>
                <div className="relative">
                  <select
                    value={
                      ["London Bridge Refurbishment", "Riverside Apartments", "Wembley Retail Fit-Out", "Camden School Extension", "Manchester Depot Upgrade", ""].includes(jobDetails.projectName)
                        ? jobDetails.projectName
                        : "custom"
                    }
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "custom") {
                        onFieldChange("projectName", "New Project");
                      } else {
                        onFieldChange("projectName", val);
                        // Auto-fill details
                        if (val === "London Bridge Refurbishment") {
                          onFieldChange("clientPrincipalContractor", "City Commercial Developments Ltd");
                          onFieldChange("siteAddress", "Southwark, London SE1 9AL");
                        } else if (val === "Riverside Apartments") {
                          onFieldChange("clientPrincipalContractor", "Greenwich Housing Association");
                          onFieldChange("siteAddress", "Greenwich, London SE10 0ER");
                        } else if (val === "Wembley Retail Fit-Out") {
                          onFieldChange("clientPrincipalContractor", "Wembley Retail Park Ltd");
                          onFieldChange("siteAddress", "Brent, London HA9 0WS");
                        } else if (val === "Camden School Extension") {
                          onFieldChange("clientPrincipalContractor", "Camden Borough Council");
                          onFieldChange("siteAddress", "Camden, London NW1 8NH");
                        } else if (val === "Manchester Depot Upgrade") {
                          onFieldChange("clientPrincipalContractor", "Manchester Logistics Ltd");
                          onFieldChange("siteAddress", "Trafford, Manchester M17 1AB");
                        }
                      }
                    }}
                    className="h-11 w-full rounded-[6px] border border-[#DCE0E7] bg-white px-3.5 text-[14px] text-brand-primary outline-none transition focus:border-brand-primary appearance-none pr-10 cursor-pointer"
                  >
                    <option value="">Select existing project...</option>
                    <option value="London Bridge Refurbishment">London Bridge Refurbishment</option>
                    <option value="Riverside Apartments">Riverside Apartments</option>
                    <option value="Wembley Retail Fit-Out">Wembley Retail Fit-Out</option>
                    <option value="Camden School Extension">Camden School Extension</option>
                    <option value="Manchester Depot Upgrade">Manchester Depot Upgrade</option>
                    <option value="custom">-- Custom / Other Project --</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-[#8a96ab] pointer-events-none" />
                </div>
                {!["London Bridge Refurbishment", "Riverside Apartments", "Wembley Retail Fit-Out", "Camden School Extension", "Manchester Depot Upgrade", ""].includes(jobDetails.projectName) && (
                  <input
                    type="text"
                    value={jobDetails.projectName}
                    onChange={(e) => onFieldChange("projectName", e.target.value)}
                    placeholder="Enter custom project name..."
                    className="h-11 w-full rounded-[6px] border border-[#DCE0E7] bg-white px-3.5 text-[14px] text-brand-primary outline-none transition placeholder:text-[#A3ACBA] focus:border-brand-primary mt-2"
                  />
                )}
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
                  className="h-11 w-full rounded-[6px] border border-[#DCE0E7] bg-white px-3.5 text-[14px] text-brand-primary outline-none transition placeholder:text-[#A3ACBA] focus:border-brand-primary"
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
                  className="w-full rounded-[6px] border border-[#DCE0E7] bg-white p-3.5 text-[14px] text-brand-primary outline-none transition placeholder:text-[#A3ACBA] focus:border-brand-primary resize-none h-[116px]"
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
                <input
                  type="date"
                  value={jobDetails.plannedStartDate}
                  onChange={(e) => onFieldChange("plannedStartDate", e.target.value)}
                  className="h-11 w-full rounded-[6px] border border-[#DCE0E7] bg-white px-3.5 text-[14px] text-brand-primary outline-none transition focus:border-brand-primary cursor-pointer"
                />
              </div>

              {/* Review Date */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-brand-primary block">
                  Review Date
                </label>
                <input
                  type="date"
                  value={jobDetails.reviewDate}
                  onChange={(e) => onFieldChange("reviewDate", e.target.value)}
                  className="h-11 w-full rounded-[6px] border border-[#DCE0E7] bg-white px-3.5 text-[14px] text-brand-primary outline-none transition focus:border-brand-primary cursor-pointer"
                />
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
                  className="h-11 w-full rounded-[6px] border border-[#DCE0E7] bg-white px-3.5 text-[14px] text-brand-primary outline-none transition placeholder:text-[#A3ACBA] focus:border-brand-primary"
                />
              </div>

              {/* Description of Works */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-brand-primary block">
                  Description of Works
                </label>
                <textarea
                  value={jobDetails.descriptionOfWorks}
                  onChange={(e) => onFieldChange("descriptionOfWorks", e.target.value)}
                  placeholder="Brief overview of the activity being assessed."
                  rows={4}
                  className="w-full rounded-[6px] border border-[#DCE0E7] bg-white p-3.5 text-[14px] text-brand-primary outline-none transition placeholder:text-[#A3ACBA] focus:border-brand-primary resize-none h-[116px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation - Left aligned, no top border */}
        <div className="flex items-center justify-start gap-3 mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={onSaveDraft}
            className="h-9.5 px-5 rounded-[6px] border border-brand-primary bg-white text-[13px] font-bold text-brand-primary shadow-none hover:bg-brand-bg-main"
          >
            Save Draft
          </Button>
          <Button
            type="button"
            onClick={onNextStep}
            className="h-9.5 px-5 rounded-[6px] bg-brand-primary text-[13px] font-bold text-white hover:bg-[#0d1b3a]"
          >
            Next Step
          </Button>
        </div>
      </div>

      {/* Info footer bar - spanned horizontally at the bottom */}
      <div className="grid gap-6 md:grid-cols-3 bg-[#FAFBFD] border border-[#e3e6ec] rounded-[16px] p-6.25 w-full">
        {/* Card 1: Standard Templates */}
        <div className="flex gap-4">
          <div className="flex size-10 items-center justify-center rounded-[8px] bg-white border border-[#e3e6ec] shadow-sm shrink-0">
            <Layout className="size-5 text-[#1a73e8]" />
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
          <div className="flex size-10 items-center justify-center rounded-[8px] bg-white border border-[#e3e6ec] shadow-sm shrink-0">
            <ShieldCheck className="size-5 text-[#1a73e8]" />
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
          <div className="flex size-10 items-center justify-center rounded-[8px] bg-white border border-[#e3e6ec] shadow-sm shrink-0">
            <RefreshCw className="size-5 text-[#1a73e8]" />
          </div>
          <div className="space-y-1">
            <h4 className="text-[15px] font-bold text-brand-primary leading-tight">Auto-Save Enabled</h4>
            <p className="text-[13px] text-brand-secondary leading-[1.6]">
              Your progress is automatically saved to your dashboard. You can close this window and resume any draft at a later time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
