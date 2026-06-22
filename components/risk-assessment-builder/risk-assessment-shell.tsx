"use client";

import { ChevronRight, CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { RISK_ASSESSMENT_STEPS, type RiskAssessmentStepId } from "./types";

type RiskAssessmentShellProps = {
  currentStepId: RiskAssessmentStepId;
  onStepChange?: (stepId: RiskAssessmentStepId) => void;
  children: React.ReactNode;
};

export function RiskAssessmentShell({
  currentStepId,
  onStepChange,
  children,
}: RiskAssessmentShellProps) {
  return (
    <div className="flex flex-col gap-8 text-brand-primary font-sans w-full">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-1.5 text-[12px] text-brand-secondary">
        <span>Dashboard</span>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span>RAMS Builder</span>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span className="text-brand-primary">Risk Assessment Builder</span>
      </div>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-[30px] font-bold leading-[1.2] text-brand-primary font-sans">
          Risk Assessment Builder
        </h1>
        <p className="max-w-3xl text-[16px] leading-6 text-brand-secondary">
          Identify and assess hazards on site. Create custom task-based risk assessments 
          with standard controls, customized safety actions, PPE settings, and full PDF export.
        </p>
      </div>

      {/* Warning/Reminder Alert Banner */}
      <section className="flex items-start gap-4 rounded-[12px] border border-[#d6e9ff] bg-[#EFF6FF] p-4 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
        <CircleAlert className="mt-0.5 size-5 shrink-0 text-[#1e40af]" />
        <div className="space-y-1">
          <p className="text-[14px] font-bold leading-[1.6] text-[#1e3a8a]">
            Important: Document Review Required
          </p>
          <p className="text-[14px] leading-[1.6] text-[#1e3a8a]/90">
            All generated risk assessments must be reviewed, amended and adapted for specific tasks, 
            site conditions and intended use. Generated content is based on your input and must be checked before use.
          </p>
        </div>
      </section>

      {/* Tab List Stepper Progress Indicator */}
      <nav
        aria-label="Risk assessment progress steps"
        className="flex flex-wrap items-center bg-[#f3f5f8] p-1.5 rounded-[12px] border border-[#e3e6ec] w-full gap-1 md:gap-0"
      >
        {RISK_ASSESSMENT_STEPS.map((step) => {
          const isCurrent = step.id === currentStepId;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onStepChange?.(step.id)}
              className={cn(
                "flex-1 min-w-[140px] text-center py-2.5 px-4 text-[13px] font-medium transition-all cursor-pointer rounded-[6px] outline-none border border-transparent",
                isCurrent
                  ? "bg-white text-brand-primary font-bold border-[#e3e6ec] shadow-sm"
                  : "text-brand-secondary hover:text-brand-primary hover:bg-white/40"
              )}
            >
              {step.label.replace(/^\d+\.\s*/, "")}
            </button>
          );
        })}
      </nav>

      {/* Main step container */}
      <div className="mt-2 w-full">
        {children}
      </div>
    </div>
  );
}
