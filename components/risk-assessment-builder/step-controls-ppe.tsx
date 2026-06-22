"use client";

import { CheckSquare, Square, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PPE_OPTIONS, type RiskAssessmentControlsPpe } from "./types";
import { cn } from "@/lib/utils";

interface StepControlsPpeProps {
  controlsPpe: RiskAssessmentControlsPpe;
  onTogglePpe: (ppeId: string) => void;
  onFieldChange: (field: keyof RiskAssessmentControlsPpe, value: unknown) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
}

export function StepControlsPpe({
  controlsPpe,
  onTogglePpe,
  onFieldChange,
  onSaveDraft,
  onNextStep,
  onPrevStep,
}: StepControlsPpeProps) {

  return (
    <div className="space-y-8 font-sans w-full">
      {/* Step Header */}
      <div className="space-y-1">
        <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">
          Step 4 — Controls &amp; PPE
        </h2>
        <p className="text-[14px] text-brand-secondary leading-[1.6]">
          Identify required Personal Protective Equipment (PPE) and additional site-wide control measures.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        {/* PPE Selection (2 columns in xl layout) */}
        <section className="xl:col-span-2 rounded-[12px] border border-[#e3e6ec] bg-white p-6 space-y-6">
          <div className="flex items-center gap-2 border-b border-[#f3f5f8] pb-3">
            <Shield className="size-5 text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary">Required PPE Selector</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PPE_OPTIONS.map((item) => {
              const isChecked = controlsPpe.selectedPpe.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onTogglePpe(item.id)}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-lg border text-left transition-all hover:bg-[#fafbfd]",
                    isChecked ? "border-brand-primary bg-[#f4f7ff]" : "border-[#e3e6ec]"
                  )}
                >
                  <span className="text-[13px] font-bold text-brand-primary">{item.label}</span>
                  {isChecked ? (
                    <CheckSquare className="size-5 text-brand-primary shrink-0" />
                  ) : (
                    <Square className="size-5 text-brand-secondary shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* Custom Control Measures Notes */}
        <section className="xl:col-span-1 rounded-[12px] border border-[#e3e6ec] bg-white p-6 space-y-4">
          <h3 className="text-[16px] font-bold text-brand-primary">Site Control Measures</h3>
          <p className="text-[12px] text-brand-secondary leading-[1.6]">
            Define additional safety controls, work conditions, exclusions or supervision protocols necessary.
          </p>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-brand-secondary uppercase block">
              Additional Safety Actions
            </label>
            <textarea
              value={controlsPpe.customControls}
              onChange={(e) => onFieldChange("customControls", e.target.value)}
              placeholder="e.g. Conduct daily safety toolbox talk. Ensure all workers have safety induction training cards..."
              rows={6}
              className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[13px] text-brand-primary outline-none transition focus:border-brand-primary resize-none font-normal"
            />
          </div>
        </section>
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
          Next: Method Statement
        </Button>
      </footer>
    </div>
  );
}
