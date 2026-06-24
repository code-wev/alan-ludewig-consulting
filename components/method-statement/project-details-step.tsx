"use client";

import React from "react";
import type { MethodStatementProjectDetails } from "./types";

interface ProjectDetailsStepProps {
  details: MethodStatementProjectDetails;
  onFieldChange: <K extends keyof MethodStatementProjectDetails>(
    key: K,
    value: MethodStatementProjectDetails[K],
  ) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function ProjectDetailsStep({
  details,
  onFieldChange,
  onSaveDraft,
  onNextStep,
}: ProjectDetailsStepProps) {
  return (
    <div className='w-full'>
      <div className='flex flex-col bg-white border border-[#E3E6EC]/60 rounded-[16px] pt-10 px-10 pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.02)] gap-6'>
        {/* Header */}
        <div className='flex items-center gap-3'>
          <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='shrink-0 text-brand-primary'>
            {/* Spiral rings on the left */}
            <path
              d='M3 6.5H5.5'
              stroke='#132651'
              strokeWidth='2.5'
              strokeLinecap='round'
            />
            <path
              d='M3 11.5H5.5'
              stroke='#132651'
              strokeWidth='2.5'
              strokeLinecap='round'
            />
            <path
              d='M3 16.5H5.5'
              stroke='#132651'
              strokeWidth='2.5'
              strokeLinecap='round'
            />
            <path
              d='M3 21.5H5.5'
              stroke='#132651'
              strokeWidth='2.5'
              strokeLinecap='round'
            />
            text-brand-primary
            {/* Notebook page outline */}
            <rect
              x='5.5'
              y='2.5'
              width='19.5'
              height='23'
              rx='2.5'
              stroke='#132651'
              strokeWidth='2.5'
            />
            {/* Checklist / text lines on the page */}
            <path
              d='M10.5 8.5H19.5'
              stroke='#132651'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <path
              d='M10.5 13.5H19.5'
              stroke='#132651'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <path
              d='M10.5 18.5H15.5'
              stroke='#132651'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
          <h2 className='text-[20px] font-bold text-brand-primary font-inter'>
            Step 1: Project Details
          </h2>
        </div>

        {/* Form Fields */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5'>
          <div className='flex flex-col gap-2 col-span-1'>
            <label className='text-sm font-semibold text-brand-primary'>
              Project Name
            </label>
            <input
              type='text'
              placeholder='e.g. Roof Remediation Phase I'
              value={details.projectName}
              onChange={(e) => onFieldChange("projectName", e.target.value)}
              className='w-full h-12.75 px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition'
            />
            h-12.75
          </div>

          <div className='flex flex-col gap-2 col-span-1'>
            <label className='text-sm font-semibold text-brand-primary'>
              Client/Principal Contractor
            </label>
            <input
              type='text'
              placeholder='e.g. BuildCorp UK Ltd'
              value={details.clientContractor}
              onChange={(e) =>
                onFieldChange("clientContractor", e.target.value)
              }
              className='w-full h-12.75 px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition'
            />
          </div>

          <div className='flex flex-col gap-2 md:col-span-2'>
            <label className='text-sm font-semibold text-brand-primary'>
              Site Address
            </label>
            <textarea
              placeholder='Enter full site address including postcode'
              value={details.siteAddress}
              onChange={(e) => onFieldChange("siteAddress", e.target.value)}
              className='w-full h-19.5 p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition resize-none'
            />
          </div>

          <div className='flex flex-col gap-2 md:col-span-2'>
            <label className='text-sm font-semibold text-brand-primary'>
              Work Activity
            </label>
            <input
              type='text'
              placeholder='Briefly describe the task (e.g., Installation of HVAC unit on roof)'
              value={details.workActivity}
              onChange={(e) => onFieldChange("workActivity", e.target.value)}
              className='w-full h-12.75 px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition'
            />
          </div>

          <div className='flex flex-col gap-2 col-span-1'>
            <label className='text-sm font-semibold text-brand-primary'>
              Prepared By
            </label>
            <input
              type='text'
              value={details.preparedBy}
              onChange={(e) => onFieldChange("preparedBy", e.target.value)}
              className='w-full h-12.75 px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition'
            />
          </div>

          <div className='flex flex-col gap-2 col-span-1'>
            <label className='text-sm font-semibold text-brand-primary'>
              Approved By
            </label>
            <input
              type='text'
              placeholder='Name of safety officer/supervisor'
              value={details.approvedBy}
              onChange={(e) => onFieldChange("approvedBy", e.target.value)}
              className='w-full h-12.75 px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition'
            />
          </div>

          <div className='flex flex-col gap-2 col-span-1'>
            <label className='text-sm font-semibold text-brand-primary'>
              Planned Start Date
            </label>
            <input
              type='text'
              placeholder='mm/dd/yyyy'
              value={details.plannedStartDate}
              onChange={(e) =>
                onFieldChange("plannedStartDate", e.target.value)
              }
              className='w-full h-12.75 px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition'
            />
          </div>

          <div className='flex flex-col gap-2 col-span-1'>
            <label className='text-sm font-semibold text-brand-primary'>
              Estimated Duration
            </label>
            <input
              type='text'
              placeholder='Value'
              value={details.estimatedDuration}
              onChange={(e) =>
                onFieldChange("estimatedDuration", e.target.value)
              }
              className='w-full h-12.75 px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition'
            />
          </div>

          <div className='flex flex-col gap-2 col-span-1'>
            <label className='text-sm font-semibold text-brand-primary'>
              Number of Operatives
            </label>
            <input
              type='text'
              placeholder='e.g. 4'
              value={details.numberOfOperatives}
              onChange={(e) =>
                onFieldChange("numberOfOperatives", e.target.value)
              }
              className='w-full h-12.75 px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition'
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className='flex items-center gap-3 mt-4'>
          <button
            type='button'
            onClick={onSaveDraft}
            className='h-9.5 px-5 rounded-[6px] border border-brand-primary bg-white text-brand-primary text-[13px] font-bold transition hover:bg-[#F3F5F8] cursor-pointer'>
            Save Draft
          </button>
          <button
            type='button'
            onClick={onNextStep}
            className='h-9.5 px-5 rounded-[6px] bg-brand-primary text-white text-[13px] font-bold transition hover:opacity-90 cursor-pointer'>
            Next: Scope of Works
          </button>
        </div>
      </div>
    </div>
  );
}
