"use client";

import { Info, ChevronRight } from "lucide-react";
import React from "react";
import { METHOD_STATEMENT_STEPS, type MethodStatementStepId } from "./types";

interface MethodStatementShellProps {
  currentStepId: MethodStatementStepId;
  children: React.ReactNode;
}

export function MethodStatementShell({
  currentStepId,
  children,
}: MethodStatementShellProps) {
  const currentStepIndex = METHOD_STATEMENT_STEPS.findIndex(
    (step) => step.id === currentStepId,
  );

  return (
    <div className='flex flex-col gap-8 w-full mx-auto text-brand-primary'>
      {/* Breadcrumb */}
      <div className='flex flex-wrap items-center gap-1.5 text-[12px] text-brand-secondary'>
        <span>Dashboard</span>
        <ChevronRight className='size-3.5 text-[#95a0b6]' />
        <span>RAMS Builder</span>
        <ChevronRight className='size-3.5 text-[#95a0b6]' />
        <span className='text-brand-primary font-bold'>
          Method Statement Builder
        </span>
      </div>
      {/* Header */}
      <div className='flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between w-full'>
        <div className='space-y-2'>
          <h1 className='text-[30px] leading-[1.2] font-bold text-brand-primary font-inter'>
            Method Statement Builder
          </h1>
          <p className='text-base text-[#5A6886] font-inter'>
            Create a safe system of work document describing how the task will
            be carried out safely.
          </p>
        </div>
      </div>
      pt-0.5
      {/* Info Box */}
      <div className='flex flex-row p-4 gap-4 bg-[#E8F0FE] border border-[#ADC6FF]/30 rounded-lg w-full items-start'>
        <div className='pt-0.5 shrink-0'>
          <Info className='w-5 h-5 text-[#1a73e8]' />
        </div>
        <p className='text-brand-primary text-[13.5px] leading-[1.6] font-inter'>
          <strong>Reminder :</strong> Documents generated using this tool are
          templates. Review and adapt them to your specific circumstances before
          issuing for use. Final responsibility for content rests with the user.
        </p>
      </div>
      {/* Stepper Navigation */}
      <div className='flex flex-row gap-4 w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-200'>
        {METHOD_STATEMENT_STEPS.map((step, index) => {
          const isActive = step.id === currentStepId;
          const isCompleted = index < currentStepIndex;
          const isBarActive = index <= currentStepIndex;

          return (
            <div
              key={step.id}
              className='flex flex-col gap-2 min-w-40 flex-1 shrink-0'>
              <div
                className={`h-1.5 rounded-full w-full transition-all duration-300 ${
                  isBarActive ? "bg-brand-primary" : "bg-[#E3E6EC]"
                }`}
              />
              <span
                className={`text-[13.5px] font-semibold leading-[1.6] font-sans ${
                  isActive || isCompleted
                    ? "text-brand-primary"
                    : "text-[#5A6886]"
                }`}>
                {step.title}
              </span>
            </div>
          );
        })}
      </div>
      {/* Main Content Area */}
      <div className='w-full'>{children}</div>
    </div>
  );
}
