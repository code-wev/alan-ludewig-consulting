"use client";

import { AuthorisationStep } from "./authorisation-step";
import { HazardsControlsStep } from "./hazards-controls-step";
import { JobSiteDetailsStep } from "./job-site-details-step";
import { PermitTemplateShell } from "./permit-template-shell";
import { ValidityPeriodStep } from "./validity-period-step";
import { CloseOutReviewStep } from "./close-out-review-step";
import { PermitTypeStep } from "./permit-type-step";
import { usePermitTemplate } from "./use-permit-template";

export function PermitTemplatePage() {
  const state = usePermitTemplate();
  const {
    currentStepId,
    selectedPermitTypeId,
    jobSiteDetails,
    hazardsControls,
    authorisation,
    focusedHazardQuestions,
    visibleControlItems,
    setSelectedPermitTypeId,
    updateJobSiteDetails,
    updateAuthorisation,
    updateAuthorisationRoot,
    updateValidityPeriod,
    updateCloseOut,
    setFocusedHazardId,
    toggleHazardSelection,
    updateQuestionResponse,
    addCustomQuestion,
    updateCustomQuestion,
    removeCustomQuestion,
    addRequiredPpe,
    removeRequiredPpe,
    addControlMeasure,
    removeControlMeasure,
    addControlItem,
    updateControlItem,
    handleSaveDraft,
    handlePermitTypeNextStep,
    handleJobSiteDetailsNextStep,
    handleHazardsControlsNextStep,
    handleAuthorisationNextStep,
    handleValidityPeriodNextStep,
    handleSubmitPermit,
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
      ) : currentStepId === "hazards-controls" ? (
        <HazardsControlsStep
          hazardsControls={hazardsControls}
          focusedHazardQuestions={focusedHazardQuestions}
          visibleControlItems={visibleControlItems}
          onSetFocusedHazard={setFocusedHazardId}
          onToggleHazard={toggleHazardSelection}
          onQuestionResponseChange={updateQuestionResponse}
          onAddCustomQuestion={addCustomQuestion}
          onUpdateCustomQuestion={updateCustomQuestion}
          onRemoveCustomQuestion={removeCustomQuestion}
          onAddRequiredPpe={addRequiredPpe}
          onRemoveRequiredPpe={removeRequiredPpe}
          onAddControlMeasure={addControlMeasure}
          onRemoveControlMeasure={removeControlMeasure}
          onAddControl={addControlItem}
          onUpdateControl={updateControlItem}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleHazardsControlsNextStep}
        />
      ) : currentStepId === "authorisation" ? (
        <AuthorisationStep
          authorisation={authorisation}
          onFieldChange={updateAuthorisation}
          onRootFieldChange={updateAuthorisationRoot}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleAuthorisationNextStep}
        />
      ) : currentStepId === "validity-period" ? (
        <ValidityPeriodStep
          validityPeriod={state.validityPeriod}
          onFieldChange={updateValidityPeriod}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleValidityPeriodNextStep}
        />
      ) : currentStepId === "close-out-review" ? (
        <CloseOutReviewStep
          closeOut={state.closeOut}
          onFieldChange={updateCloseOut}
          onSaveDraft={handleSaveDraft}
          onSubmit={handleSubmitPermit}
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
