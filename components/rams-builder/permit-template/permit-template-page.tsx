"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { PermitTypeStep } from "./permit-type-step";
import { JobDetailsStep } from "./job-details-step";
import { HazardsControlsStep } from "./hazards-controls-step";
import { SuggestedControlsModal } from "./suggested-controls-modal";
import { IsolationGasRecordModal } from "./isolation-gas-record-modal";
import { Button } from "@/components/ui/button";

const STEPPER_STEPS = [
  "Permit Type",
  "Job / Site Details",
  "Hazards & Controls",
  "Authorisation",
  "Validity Period",
  "Close Out / Review"
];

const STEP_TITLES = [
  "Step 1: Permit Type Selection",
  "Step 2: Job / Site Details",
  "Step 3: Hazards & Controls",
  "Step 4: Authorisation",
  "Step 5: Validity Period",
  "Step 6: Close Out / Review"
];

const STEP_DESCRIPTIONS = [
  "Select the primary high-risk activity for this permit. Steps 3 through 5 will be automatically configured based on your selection.",
  "",
  "",
  "Auth...",
  "Validity...",
  "Close Out..."
];

export function PermitTemplatePage() {
  const [currentStep, setCurrentStep] = useState(2);
  const [showSuggestedControlsModal, setShowSuggestedControlsModal] = useState(false);
  const [showIsolationModal, setShowIsolationModal] = useState(false);

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, STEPPER_STEPS.length - 1));
  const handlePrevious = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <div className="flex flex-col gap-8 pb-12 w-full text-brand-primary">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary font-['Sansation']">
        <Link href="/dashboard" className="hover:text-brand-primary transition-colors">
          Dashboard
        </Link>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <Link href="/rams-builder" className="hover:text-brand-primary transition-colors">
          RAMS Builder
        </Link>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span className="text-brand-primary font-bold">Permit Template / Permit Completion</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[28px] font-bold leading-[1.2] text-brand-primary font-['Sansation']">
            Permit Template / Permit Completion
          </h1>
          <p className="max-w-[800px] text-[15px] leading-normal text-brand-secondary font-['Sansation']">
            Create and complete permits for high-risk activities such as hot works, confined spaces, work at height, excavation, and isolation.
          </p>
        </div>
        
        {/* Info Box */}
        <div className="bg-[#f0f4ff] border border-[#dbeafe] rounded-[8px] p-4 flex gap-3 mt-2 items-start">
          <div className="rounded-full border border-brand-primary size-5 flex items-center justify-center shrink-0 mt-0.5">
            <Info className="size-3.5 text-brand-primary" />
          </div>
          <p className="text-[14px] text-brand-primary leading-[1.6]">
            <span className="font-bold">Reminder :</span> Documents generated using this tool are templates. Review and adapt them to your specific circumstances before issuing for use. Final responsibility for content rests with the user.
          </p>
        </div>
      </div>

      {/* Stepper Navigation */}
      <div className="w-full mt-2">
        <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar pb-2">
          {STEPPER_STEPS.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            return (
              <div key={step} className="flex flex-col gap-2 min-w-[140px] flex-1">
                <div 
                  className={cn(
                    "h-2 w-full rounded-full",
                    (isActive || isCompleted) ? "bg-brand-primary" : "bg-[#f3f5f8]"
                  )} 
                />
                <span 
                  className={cn(
                    "text-[14px] whitespace-nowrap",
                    (isActive || isCompleted) ? "font-bold text-brand-primary" : "text-[#8a96ab]"
                  )}
                >
                  {index + 1}. {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Header - Section Intro */}
      <div className="flex items-start justify-between border-b border-[#e3e6ec] pb-6 mt-4">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[20px] font-bold text-brand-primary">
            {STEP_TITLES[currentStep]}
          </h2>
          {STEP_DESCRIPTIONS[currentStep] && (
            <p className="text-[14px] text-brand-secondary max-w-[1200px] leading-[1.6]">
              {STEP_DESCRIPTIONS[currentStep]}
            </p>
          )}
        </div>
        
        {/* Step 3 Header Actions */}
        {currentStep === 2 && (
          <div className="flex items-center gap-4 shrink-0">
            <Button 
              variant="outline" 
              onClick={() => setShowSuggestedControlsModal(true)}
              className="h-[34px] rounded-[6px] border-brand-primary text-brand-primary font-bold text-[12px] px-4 hover:bg-gray-50"
            >
              Suggested Controls
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowIsolationModal(true)}
              className="h-[34px] rounded-[6px] border-brand-primary text-brand-primary font-bold text-[12px] px-4 hover:bg-gray-50"
            >
              Add Isolation / Gas Test Record
            </Button>
            <Button className="h-[34px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] px-4 hover:bg-opacity-90">
              Add Hazard
            </Button>
          </div>
        )}
      </div>

      {/* Main Content Render */}
      {currentStep === 0 && <PermitTypeStep onNext={handleNext} />}
      {currentStep === 1 && <JobDetailsStep onPrevious={handlePrevious} onNext={handleNext} />}
      {currentStep === 2 && <HazardsControlsStep onPrevious={handlePrevious} onNext={handleNext} />}
      {/* 
      {currentStep === 3 && <AuthorisationStep onPrevious={handlePrevious} onNext={handleNext} />}
      {currentStep === 4 && <ValidityPeriodStep onPrevious={handlePrevious} onNext={handleNext} />}
      {currentStep === 5 && <CloseOutStep onPrevious={handlePrevious} onNext={handleNext} />}
      */}

      {/* Modals */}
      {showSuggestedControlsModal && (
        <SuggestedControlsModal onClose={() => setShowSuggestedControlsModal(false)} />
      )}
      {showIsolationModal && (
        <IsolationGasRecordModal onClose={() => setShowIsolationModal(false)} />
      )}

    </div>
  );
}
