"use client";

import { useState } from "react";
import { FileClock, FileCheck2, AlertTriangle, History } from "lucide-react";
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
    <RiskAssessmentShell currentStepId={draft.currentStepId} onStepChange={setStep}>
      {/* Summary Cards & Quick Actions (Only shown on Step 1: Job Details) */}
      {draft.currentStepId === "job-details" && (
        <div className="space-y-6 mb-8 font-sans">
          {/* Quick Actions Row */}
          <div className="flex flex-wrap items-center justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                toast.success("Draft recovered successfully!", {
                  description: "You can pick up exactly where you left off.",
                });
              }}
              className="h-8.5 rounded-[6px] border border-brand-primary bg-white px-4 text-[12px] font-bold text-brand-primary hover:bg-[#fafbfd]"
            >
              Continue Draft
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsPrevOpen(true)}
              className="h-8.5 rounded-[6px] border border-brand-primary bg-white px-4 text-[12px] font-bold text-brand-primary hover:bg-[#fafbfd]"
            >
              View Previous Assessments
            </Button>
            <Button
              type="button"
              onClick={() => setIsStartOpen(true)}
              className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
            >
              Start New Risk Assessment
            </Button>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold text-[#8a96ab] uppercase">Credits Remaining</span>
                <span className="p-1 rounded bg-blue-50 text-blue-600"><FileCheck2 className="size-4.5" /></span>
              </div>
              <p className="text-[24px] font-bold text-brand-primary">12</p>
              <p className="text-[11px] text-brand-secondary">Renews 28 June</p>
            </article>

            <article className="rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold text-[#8a96ab] uppercase">Created This Month</span>
                <span className="p-1 rounded bg-green-50 text-green-600"><FileClock className="size-4.5" /></span>
              </div>
              <p className="text-[24px] font-bold text-brand-primary">8</p>
              <p className="text-[11px] text-brand-secondary">Documents</p>
            </article>

            <article className="rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold text-[#8a96ab] uppercase">Drafts In Progress</span>
                <span className="p-1 rounded bg-amber-50 text-amber-600"><AlertTriangle className="size-4.5" /></span>
              </div>
              <p className="text-[24px] font-bold text-brand-primary">3</p>
              <p className="text-[11px] text-brand-secondary">Incomplete</p>
            </article>

            <article className="rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold text-[#8a96ab] uppercase">Previous Assessments</span>
                <span className="p-1 rounded bg-purple-50 text-purple-600"><History className="size-4.5" /></span>
              </div>
              <p className="text-[24px] font-bold text-brand-primary">24</p>
              <p className="text-[11px] text-brand-secondary cursor-pointer hover:underline text-[#4f79ff]" onClick={() => setIsPrevOpen(true)}>
                View Created Files
              </p>
            </article>
          </div>
        </div>
      )}

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
