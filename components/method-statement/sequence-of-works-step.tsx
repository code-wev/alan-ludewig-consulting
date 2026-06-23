"use client";

import React from "react";
import { ListOrdered, Plus, Trash2 } from "lucide-react";
import type { MethodStatementSequenceOfWorks } from "./types";

interface SequenceOfWorksStepProps {
  data: MethodStatementSequenceOfWorks;
  onAddStep: () => void;
  onRemoveStep: (id: string) => void;
  onUpdateStepField: (id: string, field: "title" | "description", value: string) => void;
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
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
      <div className="flex flex-col bg-white border-[1.5px] border-[#E3E6EC] rounded-[12px] p-8 shadow-[0_1px_1px_rgba(15,23,42,0.04)] gap-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-[8px] bg-[#eef2ff] text-brand-primary">
              <ListOrdered className="size-5" />
            </div>
            <h2 className="text-[20px] font-bold text-[#132651]">Step 3: Sequence of Works</h2>
          </div>
          <button
            type="button"
            onClick={onAddStep}
            className="flex items-center gap-2 h-9 rounded-[6px] bg-[#eef2ff] px-4 text-xs font-bold text-[#132651] transition hover:bg-[#e2eaff]"
          >
            <Plus className="size-4" /> Add Step
          </button>
        </div>

        {/* Steps List */}
        <div className="flex flex-col gap-6">
          {data.steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col gap-4 p-5 bg-[#fafbfd] border border-[#e3e6ec] rounded-[8px] relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#132651]">
                  Step {index + 1}:
                </span>
                {data.steps.length > 1 && (
                  <button
                    type="button"
                    onClick={() => onRemoveStep(step.id)}
                    className="flex size-7 items-center justify-center rounded-lg text-[#ef4444] transition hover:bg-[#fff1f2]"
                    aria-label={`Remove step ${index + 1}`}
                  >
                    <Trash2 className="size-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-brand-secondary">Step Title</label>
                  <input
                    type="text"
                    value={step.title}
                    onChange={(e) => onUpdateStepField(step.id, "title", e.target.value)}
                    placeholder={`e.g. Phase ${index + 1} Action`}
                    className="w-full p-2.5 border border-[#d7dce5] rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#8a96ab] transition bg-white"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-brand-secondary">Step Description / Safety Measures</label>
                  <textarea
                    value={step.description}
                    onChange={(e) => onUpdateStepField(step.id, "description", e.target.value)}
                    placeholder="Describe specific work actions and specific safety precautions to take during this step..."
                    className="w-full p-2.5 border border-[#d7dce5] rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#8a96ab] transition bg-white resize-none min-h-[68px]"
                  />
                </div>
              </div>
            </div>
          ))}

          {data.steps.length === 0 && (
            <div className="text-center py-10 border-2 border-dashed border-[#e3e6ec] rounded-lg text-brand-secondary text-sm">
              No steps defined. Click "Add Step" above to start defining sequence of works.
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-4 mt-4 pt-6 border-t border-[#f3f5f8]">
          <button
            type="button"
            onClick={onSaveDraft}
            className="h-10 rounded-[6px] border border-[#132651] bg-white px-5 text-sm font-bold text-[#132651] transition hover:bg-brand-bg-main"
          >
            Save Draft
          </button>
          <button
            type="button"
            onClick={onNextStep}
            className="h-10 rounded-[6px] bg-[#132651] px-5 text-sm font-bold text-white transition hover:bg-[#132651]/90"
          >
            Next: Plant & Tools
          </button>
        </div>
      </div>
    </div>
  );
}
