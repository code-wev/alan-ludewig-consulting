"use client";

import React from "react";
import { ChevronDown, Plus, Trash2 } from "lucide-react";
import type { MethodStatementSequenceOfWorks, SequenceStep } from "./types";

interface SequenceOfWorksStepProps {
  data: MethodStatementSequenceOfWorks;
  onAddStep: () => void;
  onRemoveStep: (id: string) => void;
  onUpdateStepField: (
    id: string,
    field: keyof Omit<SequenceStep, "id" | "stepNumber">,
    value: string
  ) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function SequenceOfWorksStep({
  data,
  onAddStep,
  onRemoveStep,
  onUpdateStepField,
  onSaveDraft,
  onNextStep,
}: SequenceOfWorksStepProps) {
  return (
    <div className="grid grid-cols-12 gap-6 w-full items-start">
      {/* ─────────────────── Left Column — Steps ─────────────────── */}
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-5">

        {/* Individual Step Cards */}
        {data.steps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col bg-white border border-[#E3E6EC]/60 rounded-[16px] pt-8 px-8 pb-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] gap-5"
          >
            {/* Step Header Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="text-[14px] font-bold text-[#132651] font-inter shrink-0">
                  {index + 1}.
                </span>
                <input
                  type="text"
                  value={step.title}
                  onChange={(e) => onUpdateStepField(step.id, "title", e.target.value)}
                  placeholder={
                    index === 0 ? "Site Setup / Preparation" : "Main Work Activity"
                  }
                  className="flex-1 min-w-0 bg-transparent font-bold text-[14px] text-[#132651] font-inter border-b border-transparent focus:border-[#132651] outline-none py-0.5 transition placeholder:text-[#A3ACBA]"
                />
              </div>
              {data.steps.length > 1 && (
                <button
                  type="button"
                  onClick={() => onRemoveStep(step.id)}
                  className="ml-3 flex size-8 items-center justify-center rounded-lg text-[#ef4444] transition hover:bg-[#fff1f2] shrink-0 cursor-pointer"
                  aria-label={`Remove step ${index + 1}`}
                >
                  <Trash2 className="size-4" />
                </button>
              )}
            </div>

            {/* Description of Work */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13.5px] font-bold text-[#132651] font-inter">
                Description of Work
              </label>
              <textarea
                placeholder={
                  index === 0
                    ? "e.g. Ensure all exclusion zones are marked and signages are displayed..."
                    : "Detailed breakdown of the core task..."
                }
                value={step.descriptionOfWork}
                onChange={(e) =>
                  onUpdateStepField(step.id, "descriptionOfWork", e.target.value)
                }
                className="w-full h-[78px] p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13.5px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition resize-none"
              />
            </div>

            {/* Responsible Person + Required Equipment (side by side) */}
            <div className="grid grid-cols-2 gap-4">
              {/* Responsible Person */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13.5px] font-bold text-[#132651] font-inter">
                  Responsible Person
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={index === 0 ? "Site Supervisor" : "Lead Engineer"}
                    value={step.responsiblePerson}
                    onChange={(e) =>
                      onUpdateStepField(step.id, "responsiblePerson", e.target.value)
                    }
                    className="w-full h-[44px] pl-3 pr-9 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13.5px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition appearance-none"
                  />
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#A3ACBA] pointer-events-none" />
                </div>
              </div>

              {/* Required Equipment */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13.5px] font-bold text-[#132651] font-inter">
                  Required Equipment
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      index === 0 ? "e.g. Traffic cones, tape" : "Specific plant or tools"
                    }
                    value={step.requiredEquipment}
                    onChange={(e) =>
                      onUpdateStepField(step.id, "requiredEquipment", e.target.value)
                    }
                    className="w-full h-[44px] pl-3 pr-9 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13.5px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition appearance-none"
                  />
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#A3ACBA] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Risk Notes / Safety Controls */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13.5px] font-bold text-[#132651] font-inter">
                Risk Notes / Safety Controls
              </label>
              <input
                type="text"
                placeholder={
                  index === 0
                    ? "Specific hazards to avoid during this step"
                    : "PPE requirements or critical stop points"
                }
                value={step.riskNotes}
                onChange={(e) =>
                  onUpdateStepField(step.id, "riskNotes", e.target.value)
                }
                className="w-full h-[44px] px-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13.5px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition"
              />
            </div>
          </div>
        ))}

        {/* Add Work Step — dashed button */}
        <button
          type="button"
          onClick={onAddStep}
          className="flex items-center justify-center gap-2 w-full py-4 border-[2px] border-dashed border-[#C8CDD8] hover:border-[#132651] rounded-[12px] bg-white text-[#132651] text-[14px] font-semibold transition hover:bg-[#fafbfd] cursor-pointer"
        >
          {/* Circle plus icon */}
          <span className="flex items-center justify-center size-5 rounded-full border-2 border-[#132651]">
            <Plus className="size-3" strokeWidth={3} />
          </span>
          Add Work Step
        </button>

        {/* Footer Actions */}
        <div className="flex items-center gap-3 mt-1">
          <button
            type="button"
            onClick={onSaveDraft}
            className="h-[38px] px-5 rounded-[6px] border border-[#132651] bg-white text-[#132651] text-[13px] font-bold transition hover:bg-[#F3F5F8] cursor-pointer"
          >
            Save Draft
          </button>
          <button
            type="button"
            onClick={onNextStep}
            className="h-[38px] px-5 rounded-[6px] bg-[#132651] text-white text-[13px] font-bold transition hover:opacity-90 cursor-pointer"
          >
            Next: Plant / Tools
          </button>
        </div>
      </div>

      {/* ─────────────────── Right Column — Sidebar ─────────────────── */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-5">

        {/* Sequence Guidance Card */}
        <div className="flex flex-col p-5 bg-[#E8F0FE] border border-[#ADC6FF]/30 rounded-[12px] gap-3">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <circle cx="10" cy="10" r="9" stroke="#1a73e8" strokeWidth="1.8" />
              <path d="M10 9v5" stroke="#1a73e8" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="10" cy="6.5" r="0.9" fill="#1a73e8" />
            </svg>
            <h4 className="text-[13.5px] font-bold text-[#132651] font-inter">
              Sequence Guidance
            </h4>
          </div>

          <p className="text-[13px] leading-[1.65] text-[#132651] font-inter">
            Describe the task in the order it will be completed. This ensures that safety
            measures are understood chronologically.
          </p>

          <ul className="flex flex-col gap-1.5 text-[13px] text-[#132651] font-inter">
            {[
              'Use clear, imperative language (e.g., "Install," "Verify," "Clear").',
              "Break complex tasks into smaller, manageable steps.",
              'Ensure a separate step for "Waste Removal / Housekeeping" at the end of the project.',
              "Include specific quality checks or sign-offs required by your client.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-[6px] size-1.5 rounded-full bg-[#132651] shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Builder Progress Card */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC]/60 rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] gap-5">
          <h4 className="text-[18px] font-bold text-[#132651] font-inter">
            Builder Progress
          </h4>

          <div className="flex flex-col gap-0">
            {/* Step 1 — completed */}
            <div className="flex items-center justify-between py-3 border-b border-[#F3F5F8]">
              <span className="text-[13.5px] text-[#5A6886] font-inter">
                Step 1: General Details
              </span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="#22c55e" />
                <path
                  d="M5.5 10.5L8.5 13.5L14.5 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Step 2 — completed */}
            <div className="flex items-center justify-between py-3 border-b border-[#F3F5F8]">
              <span className="text-[13.5px] text-[#5A6886] font-inter">
                Step 2: Scope of Works
              </span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="#22c55e" />
                <path
                  d="M5.5 10.5L8.5 13.5L14.5 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Step 3 — active */}
            <div className="flex items-center justify-between py-3 border-b border-[#F3F5F8]">
              <span className="text-[13.5px] font-bold text-[#132651] font-inter">
                Step 3: Sequence of Works
              </span>
              <div className="size-5 rounded-full border-2 border-[#132651] flex items-center justify-center">
                <div className="size-2 rounded-full bg-[#132651]" />
              </div>
            </div>

            {/* Step 4 — upcoming */}
            <div className="flex items-center justify-between py-3 opacity-50">
              <span className="text-[13.5px] text-[#5A6886] font-inter">
                Step 4: Plant / Tools
              </span>
              <div className="size-5 rounded-full border border-[#C8CDD8]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
