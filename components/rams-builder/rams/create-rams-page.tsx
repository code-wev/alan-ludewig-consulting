"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectDetailsStep } from "./project-details-step";
import { ScopeOfWorksStep } from "./scope-of-works-step";

const STEPPER_STEPS = [
  "Project Details",
  "Scope of Works",
  "Arrangements",
  "PPE",
  "Methodology",
  "Env / Emergency",
  "Risk Assessment",
  "Review & Generate"
];

const STEP_TITLES = [
  "Step 1 — Project Details",
  "Step 2 — Scope of Works",
  "Step 3 — Arrangements",
  "Step 4 — PPE",
  "Step 5 — Methodology",
  "Step 6 — Env / Emergency",
  "Step 7 — Risk Assessment",
  "Step 8 — Review & Generate",
];

const STEP_DESCRIPTIONS = [
  "Initialize your Risk Assessment and Method Statement.",
  "Define the project's parameters, constraints, and work types to generate specific safety protocols.",
  "Define the arrangements...",
  "Define PPE...",
  "Define Methodology...",
  "Define Env / Emergency...",
  "Define Risk Assessment...",
  "Review & Generate...",
];

export function CreateRamsPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, STEPPER_STEPS.length - 1));
  const handlePrevious = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <div className="flex flex-col gap-8 pb-12 w-full text-brand-primary">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary">
        <Link href="/dashboard" className="hover:text-brand-primary transition-colors">
          Dashboard
        </Link>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <Link href="/dashboard/rams-builder" className="hover:text-brand-primary transition-colors">
          RAMS Builder
        </Link>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span className="text-brand-primary">Create New RAMS</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-[30px] font-bold leading-[1.2] text-brand-primary">
            Create New RAMS
          </h1>
          <p className="max-w-[800px] text-[16px] leading-normal text-brand-secondary">
            Complete each step to generate a professional RAMS document.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Clock className="size-5 text-brand-secondary" />
          <span className="text-[16px] text-brand-primary">Autosave: Just now</span>
        </div>
      </div>

      {/* Stepper Navigation */}
      <div className="w-full">
        <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar pb-2">
          {STEPPER_STEPS.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            return (
              <div key={step} className="flex flex-col gap-2 min-w-[150px] flex-1">
                <div 
                  className={cn(
                    "h-2 w-full rounded-full",
                    (isActive || isCompleted) ? "bg-brand-primary" : "bg-[#f3f5f8]"
                  )} 
                />
                <span 
                  className={cn(
                    "text-[16px] whitespace-nowrap",
                    (isActive || isCompleted) ? "font-bold text-brand-primary" : "text-brand-secondary"
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
      <div className="flex flex-col gap-1 border-b border-[#e3e6ec] pb-6">
        <h2 className="text-[28px] font-bold text-brand-primary">
          {STEP_TITLES[currentStep]}
        </h2>
        <p className="text-[18px] text-brand-secondary">
          {STEP_DESCRIPTIONS[currentStep]}
        </p>
      </div>

      {/* Main Content Render */}
      {currentStep === 0 && <ProjectDetailsStep onNext={handleNext} />}
      {currentStep === 1 && <ScopeOfWorksStep onPrevious={handlePrevious} onNext={handleNext} />}

    </div>
  );
}
