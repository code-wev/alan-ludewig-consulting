"use client";

import { useRouter } from "next/navigation";
import { useMethodStatement } from "./use-method-statement";
import { MethodStatementShell } from "./method-statement-shell";
import { ProjectDetailsStep } from "./project-details-step";
import { ScopeOfWorksStep } from "./scope-of-works-step";
import { SequenceOfWorksStep } from "./sequence-of-works-step";
import { PlantToolsStep } from "./plant-tools-step";
import { PpeEmergencyStep } from "./ppe-emergency-step";
import { ReviewGenerateStep } from "./review-generate-step";
import { toast } from "sonner";
import { METHOD_STATEMENT_STORAGE_KEY } from "./types";

export function MethodStatementPage() {
  const router = useRouter();
  const state = useMethodStatement();
  const {
    currentStepId,
    projectDetails,
    scopeOfWorks,
    sequenceOfWorks,
    plantTools,
    ppeEmergency,
    finalApproval,
    updateProjectDetails,
    updateScopeOfWorks,
    addSequenceStep,
    removeSequenceStep,
    updateSequenceStepField,
    togglePlantSelection,
    togglePowerToolSelection,
    toggleHandToolSelection,
    addCustomTool,
    removeCustomTool,
    updatePpeEmergency,
    togglePpeSelection,
    updateFinalApproval,
    goToStep,
    handleSaveDraft,
    handleProjectDetailsNextStep,
    handleScopeOfWorksNextStep,
    handleSequenceOfWorksNextStep,
    handlePlantToolsNextStep,
    handlePpeEmergencyNextStep,
  } = state;

  const handleGeneratePdfClick = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(METHOD_STATEMENT_STORAGE_KEY);
    }
    toast.success("Method Statement PDF generated successfully!");
    router.push("/rams-builder");
  };

  const handleSubmitReview = () => {
    toast.success("Method Statement submitted for review.");
  };

  return (
    <MethodStatementShell currentStepId={currentStepId}>
      {currentStepId === "project-details" ? (
        <ProjectDetailsStep
          details={projectDetails}
          onFieldChange={updateProjectDetails}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleProjectDetailsNextStep}
        />
      ) : currentStepId === "scope-of-works" ? (
        <ScopeOfWorksStep
          data={scopeOfWorks}
          onFieldChange={updateScopeOfWorks}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleScopeOfWorksNextStep}
        />
      ) : currentStepId === "sequence-of-works" ? (
        <SequenceOfWorksStep
          data={sequenceOfWorks}
          onAddStep={addSequenceStep}
          onRemoveStep={removeSequenceStep}
          onUpdateStepField={updateSequenceStepField}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleSequenceOfWorksNextStep}
        />
      ) : currentStepId === "plant-tools" ? (
        <PlantToolsStep
          data={plantTools}
          onTogglePlant={togglePlantSelection}
          onTogglePowerTool={togglePowerToolSelection}
          onToggleHandTool={toggleHandToolSelection}
          onAddCustomTool={addCustomTool}
          onRemoveCustomTool={removeCustomTool}
          onSaveDraft={handleSaveDraft}
          onNextStep={handlePlantToolsNextStep}
        />
      ) : currentStepId === "ppe-emergency" ? (
        <PpeEmergencyStep
          data={ppeEmergency}
          onTogglePpe={togglePpeSelection}
          onFieldChange={updatePpeEmergency}
          onSaveDraft={handleSaveDraft}
          onNextStep={handlePpeEmergencyNextStep}
        />
      ) : currentStepId === "review-generate" ? (
        <ReviewGenerateStep
          draft={{
            currentStepId,
            projectDetails,
            scopeOfWorks,
            sequenceOfWorks,
            plantTools,
            ppeEmergency,
            finalApproval,
            updatedAt: new Date().toISOString(),
          }}
          onUpdateFinalApproval={updateFinalApproval}
          onSaveDraft={handleSaveDraft}
          onGeneratePdf={handleGeneratePdfClick}
          onSubmitReview={handleSubmitReview}
          onEditStep={goToStep}
        />
      ) : (
        <div className="flex w-full items-center justify-center p-20 text-[#5A6886]">
          <p>Step placeholder for {currentStepId}</p>
        </div>
      )}
    </MethodStatementShell>
  );
}
