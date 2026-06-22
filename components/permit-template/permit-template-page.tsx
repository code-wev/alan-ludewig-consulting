"use client";

import { JobSiteDetailsStep } from "./job-site-details-step";
import { PermitTemplateShell } from "./permit-template-shell";
import { PermitTypeStep } from "./permit-type-step";
import { usePermitTemplate } from "./use-permit-template";

export function PermitTemplatePage() {
  const state = usePermitTemplate();
  const {
    currentStepId,
    selectedPermitTypeId,
    jobSiteDetails,
    setSelectedPermitTypeId,
    updateJobSiteDetails,
    handleSaveDraft,
    handlePermitTypeNextStep,
    handleJobSiteDetailsNextStep,
  } = state;

  return (
    <PermitTemplateShell currentStepId={currentStepId}>
      {currentStepId === "job-site-details" ? (
        <JobSiteDetailsStep
          selectedPermitTypeId={selectedPermitTypeId}
          jobSiteDetails={jobSiteDetails}
          onPermitTypeChange={setSelectedPermitTypeId}
          onFieldChange={updateJobSiteDetails}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleJobSiteDetailsNextStep}
        />
      ) : (
        <PermitTypeStep
          selectedPermitTypeId={selectedPermitTypeId}
          onSelectPermitType={setSelectedPermitTypeId}
          onSaveDraft={handleSaveDraft}
          onNextStep={handlePermitTypeNextStep}
        />
      )}
    </PermitTemplateShell>
  );
}
