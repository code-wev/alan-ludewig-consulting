"use client";

import React from "react";
import { Check, User, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { PPE_OPTIONS, type MethodStatementPpeEmergency } from "./types";

interface PpeEmergencyStepProps {
  data: MethodStatementPpeEmergency;
  onTogglePpe: (id: string) => void;
  onFieldChange: <K extends keyof MethodStatementPpeEmergency>(
    key: K,
    value: MethodStatementPpeEmergency[K],
  ) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

function PpeIcon({ id }: { id: string }) {
  switch (id) {
    case "hard-hat":
      return (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='size-6'>
          <path d='M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z' />
          <path d='M12 2C8 2 4 5 4 10v3h16v-3c0-5-4-8-8-8z' />
          <path d='M12 2v4' />
        </svg>
      );
    case "safety-boots":
      return (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='size-6'>
          <path d='M4 4v10a4 4 0 0 0 4 4h7.5l3.5-3.5V8.5L16 4H4z' />
          <path d='M4 10h12' />
          <path d='M7 18v2m4-2v2' />
        </svg>
      );
    case "hi-vis":
      return (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='size-6'>
          <path d='M15 4V2H9v2L4 7v5h3v10h10V12h3V7l-5-3z' />
          <path d='M9 10h6M9 14h6' />
        </svg>
      );
    case "gloves":
      return (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='size-6'>
          <path d='M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5' />
          <path d='M14 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5' />
          <path d='M10 10V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v7' />
          <path d='M6 13a4 4 0 0 0-4 4v4h16v-4a6 6 0 0 0-6-6h-2z' />
        </svg>
      );
    case "eye-protection":
      return (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='size-6'>
          <circle cx='6' cy='12' r='3' />
          <circle cx='18' cy='12' r='3' />
          <path d='M9 12h6M3 12h3m12 0h3M3 10V6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v4' />
        </svg>
      );
    case "face-shield":
      return (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='size-6'>
          <path d='M5 3h14v3H5V3z' />
          <path d='M6 6v10a6 6 0 0 0 12 0V6' />
          <path d='M9 11h6' />
        </svg>
      );
    case "respiratory":
      return (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='size-6'>
          <path d='M12 2C6.5 2 2 6.5 2 12c0 3.3 1.6 6.2 4 8.1V15c0-1.7 1.3-3 3-3h6c1.7 0 3 1.3 3 3v5.1c2.4-1.9 4-4.8 4-8.1 0-5.5-4.5-10-10-10z' />
          <circle cx='12' cy='16' r='2' />
        </svg>
      );
    case "protective-clothing":
      return (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='size-6'>
          <path d='M6 2h12v4L20 8v5h-2v7H8v-7H6V8l2-2V2z' />
          <path d='M12 2v8' />
        </svg>
      );
    case "ear-protection":
      return (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='size-6'>
          <path d='M3 14c0-4.97 4.03-9 9-9s9 4.03 9 9' />
          <rect x='2' y='12' width='4' height='6' rx='2' />
          <rect x='18' y='12' width='4' height='6' rx='2' />
        </svg>
      );
    case "harness":
      return (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='size-6'>
          <path d='M4 4h16v3H4V4z' />
          <path d='M12 7v10' />
          <path d='M6 7v6h12V7' />
          <path d='M8 17h8v3H8v-3z' />
        </svg>
      );
    default:
      return (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='size-6'>
          <circle cx='12' cy='12' r='3' />
          <path d='M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83' />
        </svg>
      );
  }
}

export function PpeEmergencyStep({
  data,
  onTogglePpe,
  onFieldChange,
  onSaveDraft,
  onNextStep,
}: PpeEmergencyStepProps) {
  const handleApplyComplianceSuggestion = () => {
    if (!data.selectedPpe.includes("respiratory")) {
      onTogglePpe("respiratory");
      toast.success(
        "Compliance Agent Suggestion Applied: Respiratory Protection (RPE) added.",
      );
    } else {
      toast.info("Respiratory Protection is already selected.");
    }
  };

  return (
    <div className='flex flex-col gap-5 w-full'>
      {/* ── Disclaimer Banner ── */}
      <div className='flex flex-col gap-1 px-5 py-3.5 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px]'>
        <div className='flex items-center gap-2'>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            className='shrink-0'>
            <path
              d='M9 1.5L16.5 15H1.5L9 1.5Z'
              stroke='#DC2626'
              strokeWidth='1.6'
              strokeLinejoin='round'
            />
            <path
              d='M9 7v3.5'
              stroke='#DC2626'
              strokeWidth='1.6'
              strokeLinecap='round'
            />
            <circle cx='9' cy='13' r='0.75' fill='#DC2626' />
          </svg>
          <p className='text-[13px] font-bold text-[#DC2626] font-inter'>
            Disclaimer: Ensure All Equipment Listed Appropriate for the task and
            subject to site-specific inspection
          </p>
        </div>
        <p className='text-[12.5px] text-[#DC2626]/80 font-inter pl-6'>
          Users must be trained and competent in the use of any plant or
          equipment specified below.
        </p>
      </div>

      {/* ── Two-column layout ── */}
      <div className='grid grid-cols-12 gap-6 w-full items-start'>
        {/* ─── Left Column ─── */}
        <div className='col-span-12 lg:col-span-8 flex flex-col gap-5'>
          <div className='flex flex-col bg-white border border-[#E3E6EC]/60 rounded-[16px] pt-8 px-8 pb-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] gap-7'>
            {/* Header */}
            <div className='flex items-center gap-3'>
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
                Step 5: PPE &amp; Emergency
              </h2>
            </div>

            {/* ── PPE Section ── */}
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2.5'>
                  {/* Shield icon */}
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                    className='text-brand-primary'>
                    <path
                      d='M9 1.5L2.25 4.5v4.5C2.25 12.86 5.19 16.61 9 17.25c3.81-.64 6.75-4.39 6.75-8.25V4.5L9 1.5z'
                      stroke='#132651'
                      strokeWidth='1.6'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <h3 className='text-[14.5px] font-bold text-brand-primary font-inter'>
                    Personal Protective Equipment (PPE)
                  </h3>
                </div>
                <span className='text-[11.5px] font-semibold text-[#5A6886] font-inter'>
                  Select all that apply
                </span>
              </div>

              {/* PPE Cards Grid */}
              <div className='grid grid-cols-3 gap-3'>
                {PPE_OPTIONS.map((opt) => {
                  const isSelected = data.selectedPpe.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type='button'
                      onClick={() => onTogglePpe(opt.id)}
                      className={`relative flex flex-col items-center justify-center gap-2.5 py-4 px-3 border rounded-[10px] transition text-center select-none cursor-pointer ${
                        isSelected
                          ? "border-brand-primary bg-brand-primary text-white shadow-[0_4px_12px_rgba(19,38,81,0.2)]"
                          : "border-[#DCE0E7] bg-white hover:bg-[#FAFBFD] text-[#5A6886] hover:border-brand-primary"
                      }`}>
                      {/* Selected checkmark indicator — top right corner */}
                      {isSelected && (
                        <div className='absolute top-2 right-2 flex size-4 items-center justify-center rounded-full bg-white/20'>
                          <Check
                            className='size-2.5 text-white'
                            strokeWidth={3}
                          />
                        </div>
                      )}
                      {/* Icon */}
                      <div
                        className={`${isSelected ? "text-white" : "text-[#A3ACBA]"}`}>
                        <PpeIcon id={opt.id} />
                      </div>
                      {/* Label */}
                      <span
                        className={`text-[12px] font-semibold font-inter leading-tight ${isSelected ? "text-white" : "text-brand-primary"}`}>
                        {opt.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Emergency Arrangements ── */}
            <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-2.5'>
                {/* Star / asterisk icon */}
                <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
                  <path
                    d='M9 1.5v15M1.5 9h15M3.2 3.2l11.6 11.6M14.8 3.2L3.2 14.8'
                    stroke='#132651'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                  />
                </svg>
                <h3 className='text-[14.5px] font-bold text-brand-primary font-inter'>
                  Emergency Arrangements
                </h3>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* Emergency Contact Name */}
                <div className='flex flex-col gap-1.5'>
                  <label className='text-[13px] font-bold text-brand-primary font-inter'>
                    Emergency Contact Name
                  </label>
                  <input
                    type='text'
                    placeholder='e.g. Sarah Jenkins'
                    value={data.emergencyContactName}
                    onChange={(e) =>
                      onFieldChange("emergencyContactName", e.target.value)
                    }
                    className='w-full h-11 px-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition font-inter'
                  />
                </div>

                {/* Emergency Contact Number */}
                <div className='flex flex-col gap-1.5'>
                  <label className='text-[13px] font-bold text-brand-primary font-inter'>
                    Emergency Contact Number
                  </label>
                  <input
                    type='text'
                    placeholder='e.g. 07700 900123'
                    value={data.emergencyContactNumber}
                    onChange={(e) =>
                      onFieldChange("emergencyContactNumber", e.target.value)
                    }
                    className='w-full h-11 px-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition font-inter'
                  />
                </div>

                {/* First Aid Arrangements */}
                <div className='flex flex-col gap-1.5 md:col-span-2'>
                  <label className='text-[13px] font-bold text-brand-primary font-inter'>
                    First Aid Arrangements
                  </label>
                  <textarea
                    placeholder='Detail the location of first aid kits and nominated first aiders...'
                    value={data.firstAid}
                    onChange={(e) => onFieldChange("firstAid", e.target.value)}
                    className='w-full h-18 p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition resize-none font-inter'
                  />
                </div>

                {/* Fire Arrangements */}
                <div className='flex flex-col gap-1.5 md:col-span-2'>
                  <label className='text-[13px] font-bold text-brand-primary font-inter'>
                    Fire Arrangements
                  </label>
                  <textarea
                    placeholder='Detail fire extinguishers, evacuation routes, and assembly points...'
                    value={data.fireFighting}
                    onChange={(e) =>
                      onFieldChange("fireFighting", e.target.value)
                    }
                    className='w-full h-18 p-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition resize-none font-inter'
                  />
                </div>

                {/* Nearest Hospital / A&E */}
                <div className='flex flex-col gap-1.5 md:col-span-2'>
                  <label className='text-[13px] font-bold text-brand-primary font-inter'>
                    Nearest Hospital / A&amp;E
                  </label>
                  <input
                    type='text'
                    placeholder="e.g. St. Mary's General Hospital, SE1 7EH"
                    value={data.nearestHospital}
                    onChange={(e) =>
                      onFieldChange("nearestHospital", e.target.value)
                    }
                    className='w-full h-11 px-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition font-inter'
                  />
                </div>

                {/* Environmental Controls */}
                <div className='flex flex-col gap-1.5'>
                  <label className='text-[13px] font-bold text-brand-primary font-inter'>
                    Environmental Controls
                  </label>
                  <input
                    type='text'
                    placeholder='e.g. Spill kits on standby, drip trays under static plant...'
                    value={data.environmentalControls}
                    onChange={(e) =>
                      onFieldChange("environmentalControls", e.target.value)
                    }
                    className='w-full h-11 px-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition font-inter'
                  />
                </div>

                {/* Waste Controls */}
                <div className='flex flex-col gap-1.5'>
                  <label className='text-[13px] font-bold text-brand-primary font-inter'>
                    Waste Controls
                  </label>
                  <input
                    type='text'
                    placeholder='e.g. Segregated skips, rubble removed daily...'
                    value={data.wasteControls}
                    onChange={(e) =>
                      onFieldChange("wasteControls", e.target.value)
                    }
                    className='w-full h-11 px-3 border-[1.5px] border-[#DCE0E7] bg-white rounded-[6px] text-[13px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition font-inter'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer Buttons — outside card */}
          <div className='flex items-center gap-3'>
            <button
              type='button'
              onClick={onSaveDraft}
              className='h-9.5 px-5 rounded-[6px] border border-brand-primary bg-white text-brand-primary text-[13px] font-bold transition hover:bg-[#F3F5F8] cursor-pointer font-inter'>
              Save Draft
            </button>
            <button
              type='button'
              onClick={onNextStep}
              className='h-9.5 px-5 rounded-[6px] bg-brand-primary text-white text-[13px] font-bold transition hover:opacity-90 cursor-pointer font-inter'>
              Next: Review &amp; Generate
            </button>
          </div>
        </div>

        {/* ─── Right Column — Sidebar ─── */}
        <div className='col-span-12 lg:col-span-4 flex flex-col gap-5'>
          {/* Emergency Guidance Card (blue) */}
          <div className='flex flex-col p-5 bg-[#E8F0FE] border border-[#ADC6FF]/30 rounded-[12px] gap-3'>
            <div className='flex items-center gap-2'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
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
                Emergency Guidance
              </h4>
            </div>

            <p className='text-[13px] leading-[1.65] text-brand-primary font-inter'>
              Ensure that all emergency contact numbers are verified and the
              nearest A&amp;E department is correctly identified for the
              specific site location.
            </p>

            <ul className='flex flex-col gap-1.5 text-[13px] text-brand-primary font-inter'>
              {[
                "Check that the PPE selected is suitable for the risks identified in Step 3.",
                "The emergency plan must be communicated to all staff during the site induction.",
                "Waste controls must comply with local council environmental regulations.",
              ].map((text, i) => (
                <li key={i} className='flex items-start gap-2'>
                  <span className='mt-1.5 size-1.5 rounded-full bg-brand-primary shrink-0' />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Agent Card */}
          <div className='flex flex-col p-5 bg-white border border-[#E3E6EC]/60 rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] gap-4'>
            <div className='flex items-center gap-3'>
              {/* Orange avatar */}
              <div className='flex size-9 items-center justify-center rounded-full bg-[#EA580C] text-white shrink-0'>
                <User className='size-4.5' />
              </div>
              <div className='flex flex-col'>
                <span className='text-[13.5px] font-bold text-brand-primary font-inter'>
                  Compliance Agent
                </span>
                <div className='flex items-center gap-1 text-[11px] text-[#5A6886] font-inter'>
                  <Sparkles className='size-3 text-brand-primary' />
                  <span>Cite this: 01h 35m</span>
                </div>
              </div>
            </div>

            <p className='text-[12.5px] leading-[1.65] text-[#5A6886] font-inter'>
              &ldquo;I&apos;ve noticed your respiratory protective selection
              doesn&apos;t match the concrete cutting risk earlier. Would you
              like me to update it?&rdquo;
            </p>

            <button
              type='button'
              onClick={handleApplyComplianceSuggestion}
              className='w-full h-9 bg-brand-primary text-white text-[12.5px] font-bold rounded-[6px] hover:opacity-90 transition font-inter cursor-pointer'>
              Apply Suggestion
            </button>
          </div>

          {/* Builder Progress Card */}
          <div className='flex flex-col p-6 bg-white border border-[#E3E6EC]/60 rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] gap-4'>
            <h4 className='text-[18px] font-bold text-brand-primary font-inter'>
              Builder Progress
            </h4>

            <div className='flex flex-col gap-0'>
              {/* Steps 1–4 completed */}
              {[
                "1: Tech Details",
                "2: Risk Assessment",
                "3: Networkings",
                "4: Plants & Tools",
              ].map((label) => (
                <div
                  key={label}
                  className='flex items-center justify-between py-2.5 border-b border-[#F3F5F8]'>
                  <span className='text-[13px] text-[#5A6886] font-inter'>
                    {label}
                  </span>
                  <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
                    <circle cx='9' cy='9' r='9' fill='#22c55e' />
                    <path
                      d='M4.5 9.5L7.5 12.5L13.5 6.5'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              ))}

              {/* Step 5 — active */}
              <div className='flex items-center justify-between py-2.5 border-b border-[#F3F5F8]'>
                <span className='text-[13px] font-bold text-brand-primary font-inter'>
                  PPE &amp; Emergency
                </span>
                <div className='size-4.5 rounded-full border-2 border-brand-primary flex items-center justify-center'>
                  <div className='size-2 rounded-full bg-brand-primary' />
                </div>
              </div>

              {/* Step 6 — upcoming */}
              <div className='flex items-center justify-between py-2.5 opacity-50'>
                <span className='text-[13px] text-[#5A6886] font-inter'>
                  Review &amp; Generate
                </span>
                <div className='size-4.5 rounded-full border border-[#C8CDD8]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
