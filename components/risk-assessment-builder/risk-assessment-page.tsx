"use client";

import { useState } from "react";
import { FileClock, FileText, CreditCard, History } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { RiskAssessmentShell } from "./risk-assessment-shell";
import { StepJobDetails } from "./step-job-details";
import { StepWorkType } from "./step-work-type";
import { StepTasksHazards } from "./step-tasks-hazards";
import { StepControlsPpe } from "./step-controls-ppe";
import { StepMethodStatement } from "./step-method-statement";
import { StepEmergencyDetails } from "./step-emergency-details";
import { StepReviewGenerate } from "./step-review-generate";
import { ModalStartNew } from "./modal-start-new";
import { ModalPreviousList } from "./modal-previous-list";
import { ModalPreview } from "./modal-preview";
import { useRiskAssessment } from "./use-risk-assessment";

export function RiskAssessmentPage() {
  const state = useRiskAssessment();
  const {
    draft,
    isLoaded,
    setStep,
    updateJobDetails,
    setWorkType,
    toggleTaskSelection,
    toggleHazardSelection,
    addCustomHazard,
    removeCustomHazard,
    updateAssessedHazardRow,
    togglePpeSelection,
    updateControlsPpe,
    updateMethodStatement,
    updateEmergencyDetails,
    handleSaveDraft,
    handleNextStep,
    handlePrevStep,
    handleReset,
    handlePublish,
  } = state;

  // Modals state
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isPrevOpen, setIsPrevOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewProjectName, setPreviewProjectName] = useState("");

  if (!isLoaded) {
    return (
      <div className="flex h-64 w-full items-center justify-center text-brand-secondary">
        Loading Risk Assessment Builder...
      </div>
    );
  }

  const handleStartNew = (title: string, location: string, workType: string, useTemplate: string) => {
    handleReset();
    updateJobDetails("projectName", title);
    updateJobDetails("siteAddress", location);
    setWorkType(workType);
    setIsStartOpen(false);
    setStep("job-details");
  };

  const handleTriggerPreview = (projName: string) => {
    setPreviewProjectName(projName);
    setIsPreviewOpen(true);
  };

  return (
    <RiskAssessmentShell
      currentStepId={draft.currentStepId}
      onStepChange={setStep}
      topContent={
        draft.currentStepId === "job-details" ? (
          <div className="space-y-6 w-full font-sans">
            {/* Cards Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
              <article className="rounded-[12px] border border-[#e3e6ec] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[120px]">
                <div className="flex justify-between items-start w-full">
                  <div className="text-[#1a73e8]">
                    <CreditCard className="size-6" />
                  </div>
                  <span className="text-[32px] font-bold text-brand-primary leading-none">12</span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[14px] font-bold text-brand-primary">Credits Remaining</h4>
                  <p className="text-[12px] text-brand-secondary">Renews 28 June</p>
                </div>
              </article>

              <article className="rounded-[12px] border border-[#e3e6ec] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[120px]">
                <div className="flex justify-between items-start w-full">
                  <div className="text-[#1a73e8]">
                    <FileText className="size-6" />
                  </div>
                  <span className="text-[32px] font-bold text-brand-primary leading-none">8</span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[14px] font-bold text-brand-primary">Created This Month</h4>
                  <p className="text-[12px] text-brand-secondary">Documents</p>
                </div>
              </article>

              <article className="rounded-[12px] border border-[#e3e6ec] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[120px]">
                <div className="flex justify-between items-start w-full">
                  <div className="text-[#1a73e8]">
                    <FileClock className="size-6" />
                  </div>
                  <span className="text-[32px] font-bold text-brand-primary leading-none">3</span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[14px] font-bold text-brand-primary">Drafts In Progress</h4>
                  <p className="text-[12px] text-brand-secondary">Incomplete</p>
                </div>
              </article>

              <article className="rounded-[12px] border border-[#e3e6ec] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[120px]">
                <div className="flex justify-between items-start w-full">
                  <div className="text-[#1a73e8]">
                    <History className="size-6" />
                  </div>
                  <span className="text-[32px] font-bold text-brand-primary leading-none">24</span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[14px] font-bold text-brand-primary">Previous Risk Assessments</h4>
                  <p className="text-[12px] text-brand-secondary cursor-pointer hover:underline text-[#1a73e8]" onClick={() => setIsPrevOpen(true)}>
                    View Created Files
                  </p>
                </div>
              </article>
            </div>

            {/* Quick Actions Row */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  toast.success("Draft recovered successfully!", {
                    description: "You can pick up exactly where you left off.",
                  });
                }}
                className="h-9 px-4 rounded-[6px] border border-brand-primary bg-white text-[13px] font-bold text-brand-primary shadow-none hover:bg-brand-bg-main"
              >
                Continue Draft
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsPrevOpen(true)}
                className="h-9 px-4 rounded-[6px] border border-brand-primary bg-white text-[13px] font-bold text-brand-primary shadow-none hover:bg-brand-bg-main"
              >
                View Previous Assessments
              </Button>
              <Button
                type="button"
                onClick={() => setIsStartOpen(true)}
                className="h-9 px-4 rounded-[6px] bg-brand-primary text-[13px] font-bold text-white hover:bg-[#0d1b3a]"
              >
                Start New Risk Assessment
              </Button>
            </div>
          </div>
        ) : null
      }
    >

      {/* Conditional Step Rendering */}
      {draft.currentStepId === "job-details" ? (
        <StepJobDetails
          jobDetails={draft.jobDetails}
          onFieldChange={updateJobDetails}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleNextStep}
        />
      ) : draft.currentStepId === "work-type" ? (
        <StepWorkType
          selectedWorkTypeId={draft.workTypeId}
          jobDetails={draft.jobDetails}
          onSelectWorkType={setWorkType}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      ) : draft.currentStepId === "tasks-hazards" ? (
        <StepTasksHazards
          tasksHazards={draft.tasksHazards}
          onToggleTask={toggleTaskSelection}
          onToggleHazard={toggleHazardSelection}
          onAddCustomHazard={addCustomHazard}
          onRemoveCustomHazard={removeCustomHazard}
          onUpdateRow={updateAssessedHazardRow}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      ) : draft.currentStepId === "controls-ppe" ? (
        <StepControlsPpe
          controlsPpe={draft.controlsPpe}
          onTogglePpe={togglePpeSelection}
          onFieldChange={updateControlsPpe}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      ) : draft.currentStepId === "method-statement" ? (
        <StepMethodStatement
          methodStatement={draft.methodStatement}
          onFieldChange={updateMethodStatement}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      ) : draft.currentStepId === "emergency-details" ? (
        <StepEmergencyDetails
          emergencyDetails={draft.emergencyDetails}
          onFieldChange={updateEmergencyDetails}
          onSaveDraft={handleSaveDraft}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      ) : (
        <StepReviewGenerate
          draft={draft}
          onSaveDraft={handleSaveDraft}
          onPublish={handlePublish}
          onPrevStep={handlePrevStep}
        />
      )}

      {/* Modals */}
      <ModalStartNew
        isOpen={isStartOpen}
        onClose={() => setIsStartOpen(false)}
        onStart={handleStartNew}
      />

      <ModalPreviousList
        isOpen={isPrevOpen}
        onClose={() => setIsPrevOpen(false)}
        onPreview={handleTriggerPreview}
      />

      <ModalPreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        projectName={previewProjectName}
      />
    </RiskAssessmentShell>
  );
}
