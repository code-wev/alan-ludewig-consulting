'use client';

import { ControlMeasuresStep } from './control-measures-step';
import { CoshhRiskAssessmentShell } from './coshh-risk-assessment-shell';
import { ExposurePersonsStep } from './exposure-persons-step';
import { HazardClassificationStep } from './hazard-classification-step';
import { PpeStorageStep } from './ppe-storage-step';
import { ReviewGenerateStep } from './review-generate-step';
import { SubstanceDetailsStep } from './substance-details-step';
import { useCoshhRiskAssessment } from './use-coshh-risk-assessment';

import { useRouter } from 'next/navigation';

export function CoshhRiskAssessmentPage() {
  const router = useRouter();
  const state = useCoshhRiskAssessment();
  const {
    currentStepId,
    substanceDetails,
    hazardClassification,
    exposurePersons,
    controlMeasures,
    ppeStorage,
    finalApproval,
    updateSubstanceDetails,
    updateHazardClassification,
    updatePpeStorage,
    updateFinalApproval,
    toggleHazardSelection,
    toggleExposureRoute,
    togglePersonAtRisk,
    toggleSuggestedControl,
    togglePpeSelection,
    handleSaveDraft,
    handleSubstanceDetailsNextStep,
    handleHazardClassificationNextStep,
    handleExposurePersonsNextStep,
    handleControlMeasuresNextStep,
    handlePpeStorageNextStep,
    goToStep,
  } = state;

  const handleGeneratePdfClick = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('coshh_draft_v1');
    }
    router.push('/rams-builder');
  };

  const handleEditStep = (stepId: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    goToStep(stepId as any);
  };

  return (
    <CoshhRiskAssessmentShell currentStepId={currentStepId}>
      {currentStepId === 'substance-details' ? (
        <SubstanceDetailsStep
          details={substanceDetails}
          onFieldChange={updateSubstanceDetails}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleSubstanceDetailsNextStep}
        />
      ) : currentStepId === 'hazard-classification' ? (
        <HazardClassificationStep
          classification={hazardClassification}
          onFieldChange={updateHazardClassification}
          onToggleHazard={toggleHazardSelection}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleHazardClassificationNextStep}
        />
      ) : currentStepId === 'exposure-persons' ? (
        <ExposurePersonsStep
          data={exposurePersons}
          onToggleExposureRoute={toggleExposureRoute}
          onTogglePersonAtRisk={togglePersonAtRisk}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleExposurePersonsNextStep}
        />
      ) : currentStepId === 'control-measures' ? (
        <ControlMeasuresStep
          data={controlMeasures}
          onToggleSuggestedControl={toggleSuggestedControl}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleControlMeasuresNextStep}
        />
      ) : currentStepId === 'ppe-storage' ? (
        <PpeStorageStep
          data={ppeStorage}
          onUpdatePpeStorage={updatePpeStorage}
          onTogglePpeSelection={togglePpeSelection}
          onSaveDraft={handleSaveDraft}
          onNextStep={handlePpeStorageNextStep}
        />
      ) : currentStepId === 'review-generate' ? (
        <ReviewGenerateStep
          draft={{
            currentStepId,
            substanceDetails,
            hazardClassification,
            exposurePersons,
            controlMeasures,
            ppeStorage,
            finalApproval,
            updatedAt: new Date().toISOString(),
          }}
          onUpdateFinalApproval={updateFinalApproval}
          onSaveDraft={handleSaveDraft}
          onGeneratePdf={handleGeneratePdfClick}
          onSubmitReview={() => alert('Submit for Review would happen here')}
          onEditStep={handleEditStep}
        />
      ) : (
        <div className='flex w-full items-center justify-center p-20 text-[#5A6886]'>
          <p>Step placeholder for {currentStepId}</p>
        </div>
      )}
    </CoshhRiskAssessmentShell>
  );
}
