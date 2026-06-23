"use client";

import React from "react";
import { FileText } from "lucide-react";
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
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
      <div className="flex flex-col bg-white border-[1.5px] border-[#E3E6EC] rounded-[12px] p-8 shadow-[0_1px_1px_rgba(15,23,42,0.04)] gap-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-[8px] bg-[#eef2ff] text-brand-primary">
            <FileText className="size-5" />
          </div>
          <h2 className="text-[20px] font-bold text-[#132651]">Step 2: Scope of Works</h2>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#132651]">Objectives / Purpose of Work</label>
            <textarea
              placeholder="What are the key goals/objectives of this task?..."
              value={data.objectives}
              onChange={(e) => onFieldChange("objectives", e.target.value)}
              className="w-full p-3 border border-[#d7dce5] rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#8a96ab] transition resize-none min-h-[80px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#132651]">Detailed Scope of Works</label>
            <textarea
              placeholder="Describe in detail what operations are included and how they will be executed..."
              value={data.scopeDescription}
              onChange={(e) => onFieldChange("scopeDescription", e.target.value)}
              className="w-full p-3 border border-[#d7dce5] rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#8a96ab] transition resize-none min-h-[140px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#132651]">Key Responsibilities</label>
            <textarea
              placeholder="Who is responsible for what (e.g. supervisor, safety officer, operatives)?..."
              value={data.responsibilities}
              onChange={(e) => onFieldChange("responsibilities", e.target.value)}
              className="w-full p-3 border border-[#d7dce5] rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#8a96ab] transition resize-none min-h-[80px]"
            />
          </div>
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
            Next: Sequence of Works
          </button>
        </div>
      </div>
    </div>
  );
}
