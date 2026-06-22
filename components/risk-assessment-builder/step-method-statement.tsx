"use client";

import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type RiskAssessmentMethodStatement } from "./types";

interface StepMethodStatementProps {
  methodStatement: RiskAssessmentMethodStatement;
  onFieldChange: (field: keyof RiskAssessmentMethodStatement, value: string) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
}

export function StepMethodStatement({
  methodStatement,
  onFieldChange,
  onSaveDraft,
  onNextStep,
  onPrevStep,
}: StepMethodStatementProps) {

  return (
    <div className="space-y-8 font-sans w-full">
      {/* Step Header */}
      <div className="space-y-1">
        <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">
          Step 5 — Method Statement
        </h2>
        <p className="text-[14px] text-brand-secondary leading-[1.6]">
          Specify safe sequence of tasks, pre-checks and site handback clearings.
        </p>
      </div>

      <div className="rounded-[12px] border border-[#e3e6ec] bg-white p-6 space-y-6">
        <div className="flex items-center gap-2 border-b border-[#f3f5f8] pb-3">
          <FileText className="size-5 text-brand-primary" />
          <h3 className="text-[16px] font-bold text-brand-primary">Safe Systems of Work Procedures</h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[12px] font-bold text-brand-primary block">
              Detailed Sequence of Operations
            </label>
            <p className="text-[11px] text-brand-secondary">
              List chronologically how this activity should be performed safely on site.
            </p>
            <textarea
              value={methodStatement.sequenceOfOperations}
              onChange={(e) => onFieldChange("sequenceOfOperations", e.target.value)}
              placeholder="e.g. 1. Isolate power. 2. Erect access scaffold..."
              rows={6}
              className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[13px] text-brand-primary outline-none transition focus:border-brand-primary font-normal"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Pre-Work Verification &amp; Checks
              </label>
              <textarea
                value={methodStatement.preWorkChecks}
                onChange={(e) => onFieldChange("preWorkChecks", e.target.value)}
                placeholder="Inductions, equipment inspection logs, clearance certifications..."
                rows={4}
                className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[13px] text-brand-primary outline-none transition focus:border-brand-primary font-normal resize-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Post-Work Site Clearance
              </label>
              <textarea
                value={methodStatement.postWorkClearance}
                onChange={(e) => onFieldChange("postWorkClearance", e.target.value)}
                placeholder="Housekeeping, tool checks, sign-off on permits..."
                rows={4}
                className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[13px] text-brand-primary outline-none transition focus:border-brand-primary font-normal resize-none"
              />
            </div>
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
          Next: Emergency Details
        </Button>
      </footer>
    </div>
  );
}
