"use client";

import React from "react";
import {
  ShieldAlert,
  Info,
  CheckCircle2,
  Eye,
  Check,
  User,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { PPE_OPTIONS, type MethodStatementPpeEmergency } from "./types";

interface PpeEmergencyStepProps {
  data: MethodStatementPpeEmergency;
  onTogglePpe: (id: string) => void;
  onFieldChange: <K extends keyof MethodStatementPpeEmergency>(
    key: K,
    value: MethodStatementPpeEmergency[K]
  ) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

// Helper component for PPE Icons
function PpeIcon({ id }: { id: string }) {
  switch (id) {
    case "hard-hat":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6"
        >
          <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
          <path d="M12 2C8 2 4 5 4 10v3h16v-3c0-5-4-8-8-8z" />
          <path d="M12 2v4" />
        </svg>
      );
    case "safety-boots":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6"
        >
          <path d="M4 4v10a4 4 0 0 0 4 4h7.5l3.5-3.5V8.5L16 4H4z" />
          <path d="M4 10h12" />
          <path d="M7 18v2m4-2v2" />
        </svg>
      );
    case "hi-vis":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6"
        >
          <path d="M15 4V2H9v2L4 7v5h3v10h10V12h3V7l-5-3z" />
          <path d="M9 10h6M9 14h6" />
        </svg>
      );
    case "gloves":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6"
        >
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
          <path d="M14 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
          <path d="M10 10V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v7" />
          <path d="M6 13a4 4 0 0 0-4 4v4h16v-4a6 6 0 0 0-6-6h-2z" />
        </svg>
      );
    case "eye-protection":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6"
        >
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="12" r="3" />
          <path d="M9 12h6M3 12h3m12 0h3M3 10V6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v4" />
        </svg>
      );
    case "face-shield":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6"
        >
          <path d="M5 3h14v3H5V3z" />
          <path d="M6 6v10a6 6 0 0 0 12 0V6" />
          <path d="M9 11h6" />
        </svg>
      );
    case "respiratory":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6"
        >
          <path d="M12 2C6.5 2 2 6.5 2 12c0 3.3 1.6 6.2 4 8.1V15c0-1.7 1.3-3 3-3h6c1.7 0 3 1.3 3 3v5.1c2.4-1.9 4-4.8 4-8.1 0-5.5-4.5-10-10-10z" />
          <circle cx="12" cy="16" r="2" />
        </svg>
      );
    case "protective-clothing":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6"
        >
          <path d="M6 2h12v4L20 8v5h-2v7H8v-7H6V8l2-2V2z" />
          <path d="M12 2v8" />
        </svg>
      );
    case "ear-protection":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6"
        >
          <path d="M3 14c0-4.97 4.03-9 9-9s9 4.03 9 9" />
          <rect x="2" y="12" width="4" height="6" rx="2" />
          <rect x="18" y="12" width="4" height="6" rx="2" />
        </svg>
      );
    case "harness":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6"
        >
          <path d="M4 4h16v3H4V4z" />
          <path d="M12 7v10" />
          <path d="M6 7v6h12V7" />
          <path d="M8 17h8v3H8v-3z" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
  }
}

export function PpeEmergencyStep({
  data,
  onTogglePpe,
  onFieldChange,
  onSaveDraft,
  onNextStep,
}: PpeEmergencyStepProps) {
  // Toggle respiratory protection suggestion from live agent
  const handleApplyComplianceSuggestion = () => {
    if (!data.selectedPpe.includes("respiratory")) {
      onTogglePpe("respiratory");
      toast.success(
        "Compliance Agent Suggestion Applied: Respiratory Protection (RPE) added."
      );
    } else {
      toast.info("Respiratory Protection is already selected.");
    }
  };

  return (
    <div className="grid grid-cols-12 gap-8 w-full items-start">
      {/* Left Column - Form Card */}
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-6 w-full">
        <div className="flex flex-col bg-white border-[1.5px] border-[#E3E6EC] rounded-[12px] pt-10 px-8 pb-12 shadow-[0_1px_1px_rgba(15,23,42,0.04)] gap-8">
          {/* Header */}
          <div className="flex items-center gap-3">
            <ShieldAlert className="size-7 text-[#132651]" />
            <h2 className="text-[20px] font-bold text-[#132651] font-inter">
              Step 5: PPE &amp; Emergency arrangements
            </h2>
          </div>

          {/* Section 1: PPE */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <h3 className="text-[16px] font-bold text-[#132651] font-inter">
                Personal Protective Equipment (PPE)
              </h3>
              <span className="text-[12px] font-semibold text-[#5A6886] bg-[#FAFBFD] border border-[#E3E6EC] px-2 py-0.5 rounded-[4px] font-inter">
                Select all that apply
              </span>
            </div>

            {/* PPE Grid Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {PPE_OPTIONS.map((opt) => {
                const isSelected = data.selectedPpe.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onTogglePpe(opt.id)}
                    className={`flex flex-col items-start gap-4 p-4 border rounded-[8px] transition relative text-left select-none ${
                      isSelected
                        ? "border-[#132651] bg-[#132651]/5 text-[#132651] shadow-[0_0_0_1px_#132651]"
                        : "border-[#E3E6EC] bg-white hover:bg-[#FAFBFD] text-[#5A6886] hover:text-[#132651]"
                    }`}
                  >
                    {/* Checkmark Indicator */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 flex size-5 items-center justify-center rounded-full bg-[#132651] text-white">
                        <Check className="size-3" strokeWidth={3} />
                      </div>
                    )}
                    {/* Icon container */}
                    <div
                      className={`p-2 rounded-[6px] transition-colors ${
                        isSelected
                          ? "bg-[#132651] text-white"
                          : "bg-[#FAFBFD] text-[#A3ACBA]"
                      }`}
                    >
                      <PpeIcon id={opt.id} />
                    </div>
                    {/* Label */}
                    <span className="text-[14px] font-bold font-inter leading-tight">
                      {opt.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Emergency Arrangements */}
          <div className="flex flex-col gap-5 mt-4">
            <div className="border-b border-[#F3F5F8] pb-3">
              <h3 className="text-[16px] font-bold text-[#132651] font-inter">
                Emergency arrangements
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Emergency Contact Name */}
              <div className="flex flex-col gap-1.5 col-span-1">
                <label className="text-[14px] font-bold text-[#132651] font-inter">
                  Emergency Contact Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={data.emergencyContactName}
                  onChange={(e) =>
                    onFieldChange("emergencyContactName", e.target.value)
                  }
                  className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition font-inter"
                />
              </div>

              {/* Emergency Contact Number */}
              <div className="flex flex-col gap-1.5 col-span-1">
                <label className="text-[14px] font-bold text-[#132651] font-inter">
                  Emergency Contact Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. 07700 900123"
                  value={data.emergencyContactNumber}
                  onChange={(e) =>
                    onFieldChange("emergencyContactNumber", e.target.value)
                  }
                  className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition font-inter"
                />
              </div>

              {/* First Aid Arrangements */}
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[14px] font-bold text-[#132651] font-inter">
                  First Aid Arrangements
                </label>
                <textarea
                  placeholder="Detail the location of first aid kits and nominated first aiders..."
                  value={data.firstAid}
                  onChange={(e) => onFieldChange("firstAid", e.target.value)}
                  className="w-full h-[88px] p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition resize-none font-inter"
                />
              </div>

              {/* Fire Arrangements */}
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[14px] font-bold text-[#132651] font-inter">
                  Fire Arrangements
                </label>
                <textarea
                  placeholder="Detail fire extinguishers, evacuation routes, and assembly points..."
                  value={data.fireFighting}
                  onChange={(e) => onFieldChange("fireFighting", e.target.value)}
                  className="w-full h-[88px] p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition resize-none font-inter"
                />
              </div>

              {/* Nearest Hospital / A&E */}
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[14px] font-bold text-[#132651] font-inter">
                  Nearest Hospital / A&E
                </label>
                <input
                  type="text"
                  placeholder="e.g. St. Mary's General Hospital, SE1 7EH"
                  value={data.nearestHospital}
                  onChange={(e) => onFieldChange("nearestHospital", e.target.value)}
                  className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition font-inter"
                />
              </div>

              {/* Environmental Controls */}
              <div className="flex flex-col gap-1.5 col-span-1">
                <label className="text-[14px] font-bold text-[#132651] font-inter">
                  Environmental Controls
                </label>
                <input
                  type="text"
                  placeholder="e.g. Spill kits on standby, drip trays under static plant..."
                  value={data.environmentalControls}
                  onChange={(e) =>
                    onFieldChange("environmentalControls", e.target.value)
                  }
                  className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition font-inter"
                />
              </div>

              {/* Waste Controls */}
              <div className="flex flex-col gap-1.5 col-span-1">
                <label className="text-[14px] font-bold text-[#132651] font-inter">
                  Waste Controls
                </label>
                <input
                  type="text"
                  placeholder="e.g. Segregated skips, rubble removed daily..."
                  value={data.wasteControls}
                  onChange={(e) => onFieldChange("wasteControls", e.target.value)}
                  className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition font-inter"
                />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[#f3f5f8]">
            <button
              type="button"
              onClick={onSaveDraft}
              className="h-[34px] px-4 rounded-[6px] border border-[#132651] bg-white text-[#132651] text-[12px] font-bold transition hover:bg-brand-bg-main font-inter"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={onNextStep}
              className="h-[34px] px-4 rounded-[6px] bg-[#132651] text-white text-[12px] font-bold transition hover:opacity-90 font-inter"
            >
              Next: Review &amp; Generate
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Helper & Context */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 w-full">
        {/* Info Box - Emergency Guidance */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-[12px] gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#132651] shrink-0 mt-0.5" />
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-bold text-[#132651] font-inter">
                Emergency Guidance
              </h4>
              <p className="text-[14px] leading-[1.6] text-[#5A6886] font-inter">
                Ensure that all emergency contact numbers are verified and the nearest
                A&amp;E department is correctly identified for the specific site location.
              </p>
            </div>
          </div>
          <ul className="flex flex-col gap-2.5 pl-8 list-disc text-[14px] text-[#5A6886] font-inter">
            <li>Check that the PPE selected is suitable for the risks identified in Step 3.</li>
            <li>The emergency plan must be communicated to all staff during the site induction.</li>
            <li>Waste controls must comply with local council environmental regulations.</li>
          </ul>
        </div>

        {/* Compliance Agent (Live Analysis) Card */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-[12px] gap-4 shadow-[0_4px_12px_rgba(19,38,81,0.03)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#132651]" />
          
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-full bg-[#132651]/10 text-[#132651]">
                <User className="size-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-[#132651] font-inter">
                  Compliance Agent
                </span>
                <div className="flex items-center gap-1 text-[11px] text-[#5A6886] font-inter font-semibold opacity-80">
                  <Sparkles className="size-3 text-[#132651]" />
                  <span>Live Analysis</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[13px] leading-[1.6] text-[#5A6886] italic font-inter bg-[#FAFBFD] p-3 rounded-[6px] border border-[#E3E6EC]">
            "I've noticed your respiratory protection selection doesn't match the
            concrete cutting risk earlier. Would you like me to update it?"
          </p>

          <button
            type="button"
            onClick={handleApplyComplianceSuggestion}
            className="w-full h-[36px] bg-[#132651] text-white text-[12px] font-bold rounded-[6px] hover:opacity-90 transition font-inter flex items-center justify-center gap-1.5"
          >
            Apply Suggestion
          </button>
        </div>

        {/* Builder Progress Card */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-[12px] gap-6">
          <h4 className="text-[20px] font-bold text-[#132651] font-inter">
            Builder Progress
          </h4>

          <div className="flex flex-col gap-4">
            {/* Step 1 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] text-[#5A6886] font-inter">
                Project Details
              </span>
              <CheckCircle2 className="size-5 text-[#16a34a]" />
            </div>

            {/* Step 2 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] text-[#5A6886] font-inter">
                Scope of Works
              </span>
              <CheckCircle2 className="size-5 text-[#16a34a]" />
            </div>

            {/* Step 3 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] text-[#5A6886] font-inter">
                Sequence of Works
              </span>
              <CheckCircle2 className="size-5 text-[#16a34a]" />
            </div>

            {/* Step 4 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] text-[#5A6886] font-inter">
                Plant / Tools / Equipment
              </span>
              <CheckCircle2 className="size-5 text-[#16a34a]" />
            </div>

            {/* Step 5 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] font-bold text-[#132651] font-inter">
                PPE &amp; Emergency
              </span>
              <div className="size-5 rounded-full border-2 border-[#132651] bg-[#132651]/10 flex items-center justify-center">
                <div className="size-2 rounded-full bg-[#132651]" />
              </div>
            </div>

            {/* Step 6 Progress */}
            <div className="flex items-center justify-between pb-1 opacity-60">
              <span className="text-[16px] text-[#5A6886] font-inter">
                Review &amp; Generate
              </span>
              <div className="size-5 rounded-full border border-[#E3E6EC]" />
            </div>
          </div>

          {/* Action button */}
          <button
            type="button"
            onClick={onSaveDraft}
            className="flex items-center justify-center gap-2 h-[34px] w-full rounded-[6px] border border-[#132651] bg-white text-[#132651] text-[12px] font-bold transition hover:bg-brand-bg-main font-inter"
          >
            <Eye className="size-4" /> Preview Draft
          </button>
        </div>
      </div>
    </div>
  );
}
