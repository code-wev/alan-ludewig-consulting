import { Info } from 'lucide-react';
import React from 'react';
import { COSHH_STEPS, type CoshhStepId } from './types';

interface CoshhRiskAssessmentShellProps {
  currentStepId: CoshhStepId;
  children: React.ReactNode;
}

export function CoshhRiskAssessmentShell({
  currentStepId,
  children,
}: CoshhRiskAssessmentShellProps) {
  return (
    <div className='flex flex-col gap-8 w-full mx-auto'>
      {/* Breadcrumb */}
      <div className='flex flex-row items-center gap-2 w-full'>
        <span className='text-xs text-[#5A6886]'>Dashboard</span>
        <svg
          width='14'
          height='14'
          viewBox='0 0 14 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.24988 10.5L8.74988 7L5.24988 3.5'
            stroke='#5A6886'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span className='text-xs text-[#5A6886]'>RAMS Builder</span>
        <svg
          width='14'
          height='14'
          viewBox='0 0 14 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.24988 10.5L8.74988 7L5.24988 3.5'
            stroke='#5A6886'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span className='text-xs font-bold text-[#132651]'>COSHH Risk Assessment</span>
      </div>

      {/* Header with Autosave */}
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='flex flex-col gap-2 w-[981px]'>
          <h1 className='text-[30px] leading-[36px] font-bold text-[#132651] font-inter'>
            COSHH Risk Assessment Builder
          </h1>
          <p className='text-base text-[#5A6886] font-inter'>
            Create a chemical substance assessment with hazards, exposure routes, control measures,
            PPE, storage, and emergency actions.
          </p>
        </div>

        {/* Autosave Badge */}
        <div className='flex flex-row items-center gap-2 px-3 py-1.5 bg-[#F3F5F8] border border-[#E3E6EC] rounded'>
          <svg
            width='16'
            height='12'
            viewBox='0 0 16 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M5.5 11L1.5 7L2.91 5.59L5.5 8.17L13.09 0.58L14.5 2L5.5 11Z' fill='#5A6886' />
          </svg>
          <span className='text-xs text-[#5A6886]'>Autosave: Just now</span>
        </div>
      </div>

      {/* Info Box */}
      <div className='flex flex-row p-4 gap-4 bg-[#E4EBFE] border border-[rgba(173,198,255,0.5)] rounded-lg w-full items-start'>
        <div className='pt-[2px]'>
          <Info className='w-5 h-5 text-[#132651]' />
        </div>
        <p className='text-[#132651] text-sm leading-[1.6]'>
          <strong>Reminder :</strong> Documents generated using this tool are templates. Review and
          adapt them to your specific circumstances before issuing for use. Final responsibility for
          content rests with the user.
        </p>
      </div>

      {/* Stepper Navigation */}
      <div className='flex flex-row gap-2 w-full overflow-x-auto pb-2'>
        {COSHH_STEPS.map((step) => {
          const isActive = step.id === currentStepId;
          const isPast =
            COSHH_STEPS.findIndex((s) => s.id === step.id) <
            COSHH_STEPS.findIndex((s) => s.id === currentStepId);

          return (
            <div key={step.id} className='flex flex-col gap-2 w-[222.86px] shrink-0'>
              <div
                className={`h-2 rounded-xl w-full ${
                  isActive || isPast ? 'bg-[#132651]' : 'bg-[#F3F5F8]'
                }`}
              />
              <span
                className={`text-base ${isActive || isPast ? 'text-[#132651]' : 'text-[#5A6886]'}`}
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
