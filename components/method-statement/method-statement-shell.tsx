"use client";

import { Info, ChevronRight } from 'lucide-react';
import React from 'react';
import { METHOD_STATEMENT_STEPS, type MethodStatementStepId } from './types';

interface MethodStatementShellProps {
  currentStepId: MethodStatementStepId;
  children: React.ReactNode;
}

export function MethodStatementShell({
  currentStepId,
  children,
}: MethodStatementShellProps) {
  const currentStepIndex = METHOD_STATEMENT_STEPS.findIndex(
    (step) => step.id === currentStepId
  );

  return (
    <div className='flex flex-col gap-8 w-full mx-auto text-brand-primary'>
      {/* Breadcrumb */}
      <div className='flex flex-wrap items-center gap-1.5 text-[12px] text-brand-secondary'>
        <span>Dashboard</span>
        <ChevronRight className='size-3.5 text-[#95a0b6]' />
        <span>RAMS Builder</span>
        <ChevronRight className='size-3.5 text-[#95a0b6]' />
        <span className='text-brand-primary font-bold'>Method Statement Builder</span>
      </div>

      {/* Header with Autosave */}
      <div className='flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between w-full'>
        <div className='space-y-2'>
          <h1 className='text-[30px] leading-[1.2] font-bold text-[#132651] font-inter'>
            Method Statement Builder
          </h1>
          <p className='text-base text-[#5A6886] font-inter max-w-310'>
            Create a safe system of work document describing how the task will be carried out safely.
          </p>
        </div>

        {/* Autosave Badge */}
        <div className='flex items-center gap-2 px-3 py-1.5 bg-[#F3F5F8] border border-[#E3E6EC] rounded-[6px] shrink-0 self-start xl:self-auto'>
          <svg
            width='16'
            height='12'
            viewBox='0 0 16 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M5.5 11L1.5 7L2.91 5.59L5.5 8.17L13.09 0.58L14.5 2L5.5 11Z' fill='#5A6886' />
          </svg>
          <span className='text-[12px] text-[#5A6886]'>Autosave: Just now</span>
        </div>
      </div>

      {/* Info Box */}
      <div className='flex flex-row p-4 gap-4 bg-[#E4EBFE] border border-[rgba(173,198,255,0.5)] rounded-lg w-full items-start'>
        <div className='pt-[2px] shrink-0'>
          <Info className='w-5 h-5 text-[#132651]' />
        </div>
        <p className='text-[#132651] text-sm leading-[1.6]'>
          <strong>Reminder :</strong> Documents generated using this tool are templates. Review and
          adapt them to your specific circumstances before issuing for use. Final responsibility for
          content rests with the user.
        </p>
      </div>

      {/* Stepper Navigation */}
      <div className='flex flex-row gap-4 w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-200'>
        {METHOD_STATEMENT_STEPS.map((step, index) => {
          const isActive = step.id === currentStepId;
          const isCompleted = index < currentStepIndex;
          const isBarActive = index <= currentStepIndex;

          return (
            <div key={step.id} className='flex flex-col gap-2 min-w-[160px] flex-1 shrink-0'>
              <div
                className={`h-2 rounded-[12px] w-full transition-all duration-300 ${
                  isBarActive ? 'bg-[#132651]' : 'bg-[#F3F5F8]'
                }`}
              />
              <span
                className={`text-[14px] font-['Sansation'] leading-[1.6] ${
                  isActive || isCompleted ? 'text-[#132651] font-bold' : 'text-[#5A6886]'
                }`}
              >
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
