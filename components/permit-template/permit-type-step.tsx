"use client";

import { PermitTypeOptionCard } from "./permit-type-option-card";
import { PermitStepActions } from "./permit-step-actions";
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

      <PermitStepActions
        nextLabel="Next: Job / Site Details"
        onSaveDraft={onSaveDraft}
        onNext={onNextStep}
      />
    </section>
  );
}
