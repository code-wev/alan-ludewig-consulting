"use client";

import React from "react";
import type { MethodStatementScopeOfWorks } from "./types";

interface ScopeOfWorksStepProps {
  data: MethodStatementScopeOfWorks;
  onFieldChange: <K extends keyof MethodStatementScopeOfWorks>(
    key: K,
    value: MethodStatementScopeOfWorks[K],
  ) => void;
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
    <div className='grid grid-cols-12 gap-6 w-full items-start'>
      {/* ─────────────────── Left Column — Form Card ─────────────────── */}
      <div className='col-span-12 lg:col-span-8'>
        <div className='flex flex-col bg-white border border-[#E3E6EC]/60 rounded-[16px] pt-10 px-10 pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.02)] gap-6'>
          {/* Header */}
          <div className='flex items-center gap-3'>
            {/* Notebook / document icon — same as Step 1 */}
            <svg
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='shrink-0'>
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
              <rect
                x='5.5'
                y='2.5'
                width='19.5'
                height='23'
                rx='2.5'
                stroke='#132651'
                strokeWidth='2.5'
              />
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
              Step 2: Scope of Works
            </h2>
          </div>

          {/* Form Fields */}
          <div className='flex flex-col gap-5'>
            {/* Descriptions of works */}
            <div className='flex flex-col gap-1'>
              <label className='text-[14px] font-bold text-brand-primary font-inter'>
                Descriptions of works
              </label>
              <span className='text-[13px] text-[#5A6886] font-inter leading-[1.4]'>
                Describe what work will be carried out
              </span>
              <textarea
                placeholder='Enter a detailed description of the physical activities to be performed...'
                value={data.descriptionOfWorks}
                onChange={(e) =>
                  onFieldChange("descriptionOfWorks", e.target.value)
                }
                className='mt-1.5 w-full h-22.5 p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13.5px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition resize-none'
              />
            </div>

            {/* Work Area/Location */}
            <div className='flex flex-col gap-1'>
              <label className='text-[14px] font-bold text-brand-primary font-inter'>
                Work Area/Location
              </label>
              <span className='text-[13px] text-[#5A6886] font-inter leading-[1.4]'>
                Describe the exact area where the work will take place
              </span>
              <input
                type='text'
                placeholder='e.g., Level 2 North Wing, Plant Room B...'
                value={data.workAreaLocation}
                onChange={(e) =>
                  onFieldChange("workAreaLocation", e.target.value)
                }
                className='mt-1.5 w-full h-12.75 px-4 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13.5px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition'
              />
            </div>

            {/* Access / Egress Arrangements */}
            <div className='flex flex-col gap-1'>
              <label className='text-[14px] font-bold text-brand-primary font-inter'>
                Access / Egress Arrangements
              </label>
              <span className='text-[13px] text-[#5A6886] font-inter leading-[1.4]'>
                Describe the exact area where the work will take place
              </span>
              <textarea
                placeholder='Describe entry/exit points, scaffolding access, lift usage etc...'
                value={data.accessEgress}
                onChange={(e) => onFieldChange("accessEgress", e.target.value)}
                className='mt-1.5 w-full h-19.5 p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13.5px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition resize-none'
              />
            </div>

            {/* Exclusions / Limitations */}
            <div className='flex flex-col gap-1'>
              <label className='text-[14px] font-bold text-brand-primary font-inter'>
                Exclusions / Limitations
              </label>
              <span className='text-[13px] text-[#5A6886] font-inter leading-[1.4]'>
                List any work exclusions, restricted areas, or limitations
              </span>
              <textarea
                placeholder='e.g., No hot works permitted, excluding electrical termination...'
                value={data.exclusionsLimitations}
                onChange={(e) =>
                  onFieldChange("exclusionsLimitations", e.target.value)
                }
                className='mt-1.5 w-full h-19.5 p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13.5px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition resize-none'
              />
            </div>

            {/* Site-Specific Notes */}
            <div className='flex flex-col gap-1'>
              <label className='text-[14px] font-bold text-brand-primary font-inter'>
                Site-Specific Notes
              </label>
              <span className='text-[13px] text-[#5A6886] font-inter leading-[1.4]'>
                Add any project-specific information that affects the method of
                work
              </span>
              <textarea
                placeholder='Additional observations or specific client requirements...'
                value={data.siteSpecificNotes}
                onChange={(e) =>
                  onFieldChange("siteSpecificNotes", e.target.value)
                }
                className='mt-1.5 w-full h-19.5 p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13.5px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition resize-none'
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className='flex items-center gap-3 mt-2'>
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
              Save Company Changes
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────── Right Column — Sidebar ─────────────────── */}
      <div className='col-span-12 lg:col-span-4 flex flex-col gap-5'>
        {/* Reminder Card */}
        <div className='flex flex-col p-5 bg-[#E8F0FE] border border-[#ADC6FF]/30 rounded-[12px] gap-3'>
          <div className='flex items-center gap-2'>
            {/* Info circle icon */}
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='shrink-0'>
              <circle
                cx='10'
                cy='10'
                r='9'
                stroke='#1a73e8'
                strokeWidth='1.8'
              />
              <path
                d='M10 9v5'
                stroke='#1a73e8'
                strokeWidth='1.8'
                strokeLinecap='round'
              />
              <circle cx='10' cy='6.5' r='0.9' fill='#1a73e8' />
            </svg>
            <h4 className='text-[13.5px] font-bold text-brand-primary font-inter'>
              Reminder
            </h4>
          </div>

          <p className='text-[13px] leading-[1.65] text-brand-primary font-inter'>
            Keep the scope clear and site-specific. Include only work activities
            relevant to this method statement. Avoid generic descriptions that
            could apply to any site.
          </p>

          <ul className='flex flex-col gap-1.5 text-[13px] text-brand-primary font-inter'>
            <li className='flex items-start gap-2'>
              <span className='mt-1.25 size-1.5 rounded-full bg-brand-primary shrink-0' />
              Be specific about locations
            </li>
            <li className='flex items-start gap-2'>
              <span className='mt-1.25 size-1.5 rounded-full bg-brand-primary shrink-0' />
              Clarify what is NOT included
            </li>
            <li className='flex items-start gap-2'>
              <span className='mt-1.25 size-1.5 rounded-full bg-brand-primary shrink-0' />
              Note shared access routes
            </li>
          </ul>
        </div>

        {/* Document Progress Card */}
        <div className='flex flex-col p-6 bg-white border border-[#E3E6EC]/60 rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] gap-5'>
          <h4 className='text-[18px] font-bold text-brand-primary font-inter'>
            Document Progress
          </h4>

          <div className='flex flex-col gap-0'>
            {/* Project Details — completed */}
            <div className='flex items-center justify-between py-3 border-b border-[#F3F5F8]'>
              <span className='text-[14px] text-[#5A6886] font-inter'>
                Project Details
              </span>
              {/* Green checkmark circle */}
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <circle cx='10' cy='10' r='10' fill='#22c55e' />
                <path
                  d='M5.5 10.5L8.5 13.5L14.5 7'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>

            {/* Scope of Works — active */}
            <div className='flex items-center justify-between py-3 border-b border-[#F3F5F8]'>
              <span className='text-[14px] font-bold text-brand-primary font-inter'>
                Scope of Works
              </span>
              {/* Radio-active circle */}
              <div className='size-5 rounded-full border-2 border-brand-primary flex items-center justify-center'>
                <div className='size-2 rounded-full bg-brand-primary' />
              </div>
            </div>

            {/* Sequence of Works — upcoming */}
            <div className='flex items-center justify-between py-3 border-b border-[#F3F5F8] opacity-50'>
              <span className='text-[14px] text-[#5A6886] font-inter'>
                Sequence of Works
              </span>
              <div className='size-5 rounded-full border border-[#C8CDD8]' />
            </div>

            {/* Risk Assessment — upcoming */}
            <div className='flex items-center justify-between py-3 opacity-50'>
              <span className='text-[14px] text-[#5A6886] font-inter'>
                Risk Assessment
              </span>
              <div className='size-5 rounded-full border border-[#C8CDD8]' />
            </div>
          </div>

          {/* Preview Draft button */}
          <button
            type='button'
            onClick={onSaveDraft}
            className='h-9.5 w-full rounded-[8px] border border-[#DCE0E7] bg-white text-brand-primary text-[13px] font-semibold transition hover:bg-[#F3F5F8] cursor-pointer'>
            Preview Draft
          </button>
        </div>
      </div>
    </div>
  );
}
