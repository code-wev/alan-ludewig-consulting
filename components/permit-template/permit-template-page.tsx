"use client";

import { PermitTemplateShell } from "./permit-template-shell";
import { PermitTypeStep } from "./permit-type-step";
import { usePermitTemplate } from "./use-permit-template";

export function PermitTemplatePage() {
  const {
    currentStepId,
    selectedPermitTypeId,
    setSelectedPermitTypeId,
    handleSaveDraft,
    handleNextStep,
  } = usePermitTemplate();

  return (
    <PermitTemplateShell currentStepId={currentStepId}>
      <PermitTypeStep
        selectedPermitTypeId={selectedPermitTypeId}
        onSelectPermitType={setSelectedPermitTypeId}
        onSaveDraft={handleSaveDraft}
        onNextStep={handleNextStep}
      />
    </PermitTemplateShell>
  );
}
