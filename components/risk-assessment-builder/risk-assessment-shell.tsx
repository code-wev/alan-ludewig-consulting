"use client";

import { ChevronRight, CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { RISK_ASSESSMENT_STEPS, type RiskAssessmentStepId } from "./types";

type RiskAssessmentShellProps = {
  currentStepId: RiskAssessmentStepId;
  children: React.ReactNode;
};

export function RiskAssessmentShell({
  currentStepId,
  children,
}: RiskAssessmentShellProps) {
  const currentStepIndex = RISK_ASSESSMENT_STEPS.findIndex(
    (step) => step.id === currentStepId,
  );

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
      <section className="flex items-start gap-4 rounded-[12px] border-[1.5px] border-[#A7VX4B]/20 bg-[#EFF6FF] p-4">
        <CircleAlert className="mt-0.5 size-5 shrink-0 text-brand-primary" />
        <div className="space-y-1">
          <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
            Important: Document Review Required
          </p>
          <p className="text-[14px] leading-[1.6] text-brand-primary/80">
            All generated risk assessments must be reviewed, amended and adapted for specific tasks, 
            site conditions and intended use. Generated content is based on your input and must be checked before use.
          </p>
        </div>
      </section>

      {/* Horizontal Stepper Progress Indicator */}
      <nav
        aria-label="Risk assessment progress steps"
        className="grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7"
      >
        {RISK_ASSESSMENT_STEPS.map((step, index) => {
          const isCurrent = step.id === currentStepId;
          const isCompleted = index < currentStepIndex;
          const isBarActive = index <= currentStepIndex;
          const isTextPrimary = isCompleted || isCurrent;

          return (
            <div key={step.id} className="space-y-2">
              <div
                className={cn(
                  "h-2 rounded-[12px] transition-colors duration-300",
                  isBarActive ? "bg-brand-primary" : "bg-[#f3f5f8]",
                )}
              />
              <p
                className={cn(
                  "text-[14px] font-medium leading-[1.4] transition-colors duration-300 font-sans",
                  isTextPrimary ? "text-brand-primary font-bold" : "text-brand-secondary",
                )}
              >
                {step.label}
              </p>
            </div>
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
