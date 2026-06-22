"use client";

import { AlertOctagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type RiskAssessmentEmergencyDetails } from "./types";

interface StepEmergencyDetailsProps {
  emergencyDetails: RiskAssessmentEmergencyDetails;
  onFieldChange: (field: keyof RiskAssessmentEmergencyDetails, value: string) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
}

export function StepEmergencyDetails({
  emergencyDetails,
  onFieldChange,
  onSaveDraft,
  onNextStep,
  onPrevStep,
}: StepEmergencyDetailsProps) {

  return (
    <div className="space-y-8 font-sans w-full">
      {/* Step Header */}
      <div className="space-y-1">
        <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">
          Step 6 — Emergency Details
        </h2>
        <p className="text-[14px] text-brand-secondary leading-[1.6]">
          Outline contingency plans, contact numbers, and assembly protocols in the event of an emergency.
        </p>
      </div>

      <div className="rounded-[12px] border border-[#e3e6ec] bg-white p-6 space-y-6">
        <div className="flex items-center gap-2 border-b border-[#f3f5f8] pb-3">
          <AlertOctagon className="size-5 text-red-500" />
          <h3 className="text-[16px] font-bold text-brand-primary">Contingency &amp; Rescue Arrangements</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-[12px] font-bold text-brand-primary block">
              Emergency Contact Number
            </label>
            <input
              type="text"
              value={emergencyDetails.emergencyContactNumber}
              onChange={(e) => onFieldChange("emergencyContactNumber", e.target.value)}
              placeholder="e.g. +44 (0) 7700 900077"
              className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[12px] font-bold text-brand-primary block">
              Emergency Assembly Point
            </label>
            <input
              type="text"
              value={emergencyDetails.emergencyAssemblyPoint}
              onChange={(e) => onFieldChange("emergencyAssemblyPoint", e.target.value)}
              placeholder="e.g. South Car Park Gate A"
              className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
            />
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[12px] font-bold text-brand-primary block">
              First Aid Arrangements
            </label>
            <textarea
              value={emergencyDetails.firstAidArrangements}
              onChange={(e) => onFieldChange("firstAidArrangements", e.target.value)}
              placeholder="Designated first aider, first aid box location details..."
              rows={3}
              className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[13px] text-brand-primary outline-none transition focus:border-brand-primary resize-none font-normal"
            />
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[12px] font-bold text-brand-primary block">
              Nearest Hospital &amp; Medical Contact
            </label>
            <textarea
              value={emergencyDetails.nearestHospital}
              onChange={(e) => onFieldChange("nearestHospital", e.target.value)}
              placeholder="Hospital name, address, phone number..."
              rows={3}
              className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[13px] text-brand-primary outline-none transition focus:border-brand-primary resize-none font-normal"
            />
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[12px] font-bold text-brand-primary block">
              Fire Fighting Arrangements
            </label>
            <textarea
              value={emergencyDetails.fireFightingArrangements}
              onChange={(e) => onFieldChange("fireFightingArrangements", e.target.value)}
              placeholder="Type of extinguishers on site, alarm points, escape routes..."
              rows={3}
              className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[13px] text-brand-primary outline-none transition focus:border-brand-primary resize-none font-normal"
            />
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="flex items-center justify-between border-t border-[#e3e6ec] pt-6">
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onPrevStep}
            className="h-8.5 px-4 rounded-[6px] border-brand-primary bg-white text-[12px] font-bold text-brand-primary shadow-none hover:bg-[#fafbfd]"
          >
            Back
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onSaveDraft}
            className="h-8.5 px-4 rounded-[6px] border-[#d7dce5] bg-white text-[12px] font-bold text-brand-secondary shadow-none hover:bg-[#fafbfd]"
          >
            Save Draft
          </Button>
        </div>
        <Button
          type="button"
          onClick={onNextStep}
          className="h-8.5 px-4 rounded-[6px] bg-brand-primary text-[12px] font-bold text-white hover:bg-brand-primary/95"
        >
          Next: Review &amp; Generate
        </Button>
      </footer>
    </div>
  );
}
