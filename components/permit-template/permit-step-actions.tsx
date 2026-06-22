"use client";

import { Button } from "@/components/ui/button";

type PermitStepActionsProps = {
  nextLabel: string;
  onSaveDraft: () => void;
  onNext: () => void;
};

export function PermitStepActions({
  nextLabel,
  onSaveDraft,
  onNext,
}: PermitStepActionsProps) {
  return (
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
        onClick={onNext}
        className="h-8.5 rounded-[6px] bg-brand-primary px-4 font-['Sansation'] text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
      >
        {nextLabel}
      </Button>
    </div>
  );
}
