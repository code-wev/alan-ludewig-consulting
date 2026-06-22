"use client";

import { ChevronRight, CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  PERMIT_TEMPLATE_REMINDER,
  PERMIT_TEMPLATE_STEPS,
  type PermitTemplateStepId,
} from "./types";

type PermitTemplateShellProps = {
  currentStepId: PermitTemplateStepId;
  children: React.ReactNode;
};

export function PermitTemplateShell({
  currentStepId,
  children,
}: PermitTemplateShellProps) {
  const currentStepIndex = PERMIT_TEMPLATE_STEPS.findIndex(
    (step) => step.id === currentStepId,
  );

  return (
    <div className="flex flex-col gap-8 text-brand-primary">
      <div className="flex flex-wrap items-center gap-1.5 text-[12px] text-brand-secondary">
        <span>Dashboard</span>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span>RAMS Builder</span>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span className="text-brand-primary">
          Permit Template / Permit Completion
        </span>
      </div>

      <div className="space-y-2">
        <h1 className="max-w-210 text-[30px] font-bold leading-[1.2] text-brand-primary">
          Permit Template / Permit Completion
        </h1>
        <p className="max-w-310 text-[16px] leading-6 text-brand-secondary">
          Create and complete permits for high-risk activities such as hot
          works, confined spaces, work at height, excavation, and isolation.
        </p>
      </div>

      <section className="flex items-start gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] px-4.25 py-4.25">
        <CircleAlert className="mt-0.5 size-5 shrink-0 text-brand-primary" />
        <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
          <span className="font-bold">Reminder :</span>{" "}
          {PERMIT_TEMPLATE_REMINDER}
        </p>
      </section>

      <nav
        aria-label="Permit template steps"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-6"
      >
        {PERMIT_TEMPLATE_STEPS.map((step, index) => {
          const isCurrent = step.id === currentStepId;
          const isCompleted = index < currentStepIndex;
          const isBarActive = index <= currentStepIndex;
          const isTextPrimary = isCompleted || (isCurrent && index === 0);

          return (
            <div key={step.id} className="space-y-2">
              <div
                className={cn(
                  "h-2 rounded-[12px]",
                  isBarActive ? "bg-brand-primary" : "bg-[#f3f5f8]",
                )}
              />
              <p
                className={cn(
                  "font-['Sansation'] text-[16px] leading-[1.6]",
                  isTextPrimary ? "text-brand-primary" : "text-brand-secondary",
                )}
              >
                {step.label}
              </p>
            </div>
          );
        })}
      </nav>

      {children}
    </div>
  );
}
