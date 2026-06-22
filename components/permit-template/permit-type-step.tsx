"use client";

import { Button } from "@/components/ui/button";
import { PermitTypeOptionCard } from "./permit-type-option-card";
import { PERMIT_TYPE_OPTIONS } from "./types";

type PermitTypeStepProps = {
  selectedPermitTypeId: string;
  onSelectPermitType: (id: string) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
};

export function PermitTypeStep({
  selectedPermitTypeId,
  onSelectPermitType,
  onSaveDraft,
  onNextStep,
}: PermitTypeStepProps) {
  return (
    <section className="space-y-6">
      <h2 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
        Step 1: Permit Type
      </h2>

      <div
        role="radiogroup"
        aria-label="Permit type options"
        className="grid gap-6 xl:grid-cols-3"
      >
        {PERMIT_TYPE_OPTIONS.map((option) => (
          <PermitTypeOptionCard
            key={option.id}
            option={option}
            isSelected={selectedPermitTypeId === option.id}
            onSelect={onSelectPermitType}
          />
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={onSaveDraft}
          className="h-8.5 rounded-[6px] border-brand-primary bg-white px-4 font-['Sansation'] text-[12px] font-bold text-brand-primary shadow-none hover:bg-brand-bg-main"
        >
          Save Draft
        </Button>
        <Button
          type="button"
          onClick={onNextStep}
          className="h-8.5 rounded-[6px] bg-brand-primary px-4 font-['Sansation'] text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
        >
          Next: Job / Site Details
        </Button>
      </div>
    </section>
  );
}
