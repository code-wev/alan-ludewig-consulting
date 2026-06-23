"use client";

import React from "react";
import { ListOrdered, Plus, Trash2, Info, CheckCircle2, Eye } from "lucide-react";
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
    <div className="grid grid-cols-12 gap-8 w-full items-start">
      {/* Left Column - Form Card */}
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-6 w-full">
        <div className="flex flex-col bg-white border-[1.5px] border-[#E3E6EC] rounded-[12px] pt-10 px-8 pb-12 shadow-[0_1px_1px_rgba(15,23,42,0.04)] gap-6">
          
          {/* Header */}
          <div className="flex items-center gap-3">
            <ListOrdered className="size-7 text-[#132651]" />
            <h2 className="text-[20px] font-bold text-[#132651] font-inter">Step 3: Sequence of Works</h2>
          </div>

          {/* Steps List */}
          <div className="flex flex-col gap-6">
            {data.steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col gap-5 p-6 bg-[#fafbfd] border border-[#e3e6ec] rounded-[12px] relative group"
              >
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 w-full max-w-lg">
                    <span className="text-[14px] font-bold text-[#132651] font-inter shrink-0">
                      Step {index + 1}:
                    </span>
                    <input
                      type="text"
                      value={step.title}
                      onChange={(e) => onUpdateStepField(step.id, "title", e.target.value)}
                      placeholder={index === 0 ? "Site Setup / Preparation" : "Main Work Activity"}
                      className="w-full bg-transparent font-bold text-[16px] text-[#132651] border-b border-transparent focus:border-brand-primary outline-none py-0.5 transition"
                    />
                  </div>
                  {data.steps.length > 1 && (
                    <button
                      type="button"
                      onClick={() => onRemoveStep(step.id)}
                      className="flex size-8 items-center justify-center rounded-lg text-[#ef4444] transition hover:bg-[#fff1f2]"
                      aria-label={`Remove step ${index + 1}`}
                    >
                      <Trash2 className="size-4.5" />
                    </button>
                  )}
                </div>

                {/* Step Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                  
                  {/* Description of Work */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[14px] font-bold text-[#132651] font-inter">Description of Work</label>
                    <textarea
                      placeholder={
                        index === 0
                          ? "e.g. Ensure all exclusion zones are marked and signages are displayed..."
                          : "Detailed breakdown of the core task..."
                      }
                      value={step.descriptionOfWork}
                      onChange={(e) => onUpdateStepField(step.id, "descriptionOfWork", e.target.value)}
                      className="w-full h-[78px] p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition resize-none"
                    />
                  </div>

                  {/* Responsible Person */}
                  <div className="flex flex-col gap-2 col-span-1">
                    <label className="text-[14px] font-bold text-[#132651] font-inter">Responsible Person</label>
                    <input
                      type="text"
                      placeholder={index === 0 ? "Site Supervisor" : "Lead Engineer"}
                      value={step.responsiblePerson}
                      onChange={(e) => onUpdateStepField(step.id, "responsiblePerson", e.target.value)}
                      className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition"
                    />
                  </div>

                  {/* Required Equipment */}
                  <div className="flex flex-col gap-2 col-span-1">
                    <label className="text-[14px] font-bold text-[#132651] font-inter">Required Equipment</label>
                    <input
                      type="text"
                      placeholder={index === 0 ? "e.g. Traffic cones, tape" : "Specific plant or tools"}
                      value={step.requiredEquipment}
                      onChange={(e) => onUpdateStepField(step.id, "requiredEquipment", e.target.value)}
                      className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition"
                    />
                  </div>

                  {/* Risk Notes / Safety Controls */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[14px] font-bold text-[#132651] font-inter">Risk Notes / Safety Controls</label>
                    <input
                      type="text"
                      placeholder="Specific hazards to avoid during this step or PPE requirements"
                      value={step.riskNotes}
                      onChange={(e) => onUpdateStepField(step.id, "riskNotes", e.target.value)}
                      className="w-full h-[51px] px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition"
                    />
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Add Work Step Button (Dashed) */}
          <button
            type="button"
            onClick={onAddStep}
            className="flex items-center justify-center gap-3 w-full py-6 border-[2px] border-dashed border-[#132651] hover:border-[#132651]/80 rounded-[12px] bg-white text-[#132651] text-[16px] font-bold transition hover:bg-[#fafbfd]"
          >
            <Plus className="size-5" /> Add Work Step
          </button>

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
              Next: Plant / Tools
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
              <h4 className="text-[14px] font-bold text-[#132651] font-inter">Sequence Guidance</h4>
              <p className="text-[14px] leading-[1.6] text-[#5A6886] font-inter">
                Describe the task in the order it will be completed. This ensures that safety measures are understood chronologically.
              </p>
            </div>
          </div>
          <ul className="flex flex-col gap-2.5 pl-8 list-disc text-[14px] text-[#5A6886] font-inter">
            <li>Use clear, imperative language (e.g., "Install," "Verify," "Clear").</li>
            <li>Break complex tasks into smaller, manageable steps.</li>
            <li>Ensure a separate step for "Waste Removal / Housekeeping" at the end of the project.</li>
            <li>Include specific quality checks or sign-offs required by your client.</li>
          </ul>
        </div>

        {/* Document Progress Card */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-[12px] gap-6">
          <h4 className="text-[20px] font-bold text-[#132651] font-inter">Builder Progress</h4>
          
          <div className="flex flex-col gap-4">
            
            {/* Step 1 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] text-[#5A6886] font-inter">Project Details</span>
              <CheckCircle2 className="size-5 text-[#16a34a]" />
            </div>

            {/* Step 2 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] text-[#5A6886] font-inter">Scope of Works</span>
              <CheckCircle2 className="size-5 text-[#16a34a]" />
            </div>

            {/* Step 3 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] font-bold text-[#132651] font-inter">Sequence of Works</span>
              <div className="size-5 rounded-full border-2 border-[#132651] bg-[#132651]/10 flex items-center justify-center">
                <div className="size-2 rounded-full bg-[#132651]" />
              </div>
            </div>

            {/* Step 4 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3 opacity-60">
              <span className="text-[16px] text-[#5A6886] font-inter">Plant / Tools / Equipment</span>
              <div className="size-5 rounded-full border border-[#E3E6EC]" />
            </div>

            {/* Step 5 Progress */}
            <div className="flex items-center justify-between pb-1 opacity-60">
              <span className="text-[16px] text-[#5A6886] font-inter">PPE &amp; Emergency</span>
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
