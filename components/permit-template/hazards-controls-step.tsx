"use client";

import { CircleAlert } from "lucide-react";
import { HAZARDS_CONTROLS_NOTICE, type PermitControlItem, type PermitQuestionResponse, type PermitTemplateHazardsControls } from "./types";
import { HazardSelectionCard } from "./hazard-selection-card";
import { PermitControlMeasuresTable } from "./permit-control-measures-table";
import { PermitQuestionSetCard } from "./permit-question-set-card";
import { PermitStepActions } from "./permit-step-actions";

type HazardsControlsStepProps = {
  hazardsControls: PermitTemplateHazardsControls;
  focusedHazardQuestions: Array<{ id: string; text: string; hazardId: string }>;
  visibleControlItems: PermitControlItem[];
  onSetFocusedHazard: (hazardId: string) => void;
  onToggleHazard: (hazardId: string) => void;
  onQuestionResponseChange: (
    questionId: string,
    patch: Partial<PermitQuestionResponse>,
  ) => void;
  onAddCustomQuestion: () => void;
  onUpdateCustomQuestion: (questionId: string, text: string) => void;
  onRemoveCustomQuestion: (questionId: string) => void;
  onAddRequiredPpe: (value: string) => void;
  onRemoveRequiredPpe: (value: string) => void;
  onAddControlMeasure: (value: string) => void;
  onRemoveControlMeasure: (value: string) => void;
  onAddControl: () => void;
  onUpdateControl: (controlId: string, patch: Partial<PermitControlItem>) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
};

export function HazardsControlsStep({
  hazardsControls,
  focusedHazardQuestions,
  visibleControlItems,
  onSetFocusedHazard,
  onToggleHazard,
  onQuestionResponseChange,
  onAddCustomQuestion,
  onUpdateCustomQuestion,
  onRemoveCustomQuestion,
  onAddRequiredPpe,
  onRemoveRequiredPpe,
  onAddControlMeasure,
  onRemoveControlMeasure,
  onAddControl,
  onUpdateControl,
  onSaveDraft,
  onNextStep,
}: HazardsControlsStepProps) {
  return (
    <section className="space-y-6">
      <h2 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
        Step 3: Hazards &amp; Controls
      </h2>

      <section className="flex items-start gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] px-4.25 py-4.25">
        <CircleAlert className="mt-0.5 size-5 shrink-0 text-brand-primary" />
        <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
          <span className="font-bold">Mandatory Safety Compliance :</span>{" "}
          {HAZARDS_CONTROLS_NOTICE}
        </p>
      </section>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,0.98fr)_minmax(0,1fr)] xl:items-start">
        <HazardSelectionCard
          selectedHazardIds={hazardsControls.selectedHazardIds}
          focusedHazardId={hazardsControls.focusedHazardId}
          onToggleHazard={onToggleHazard}
          onFocusHazard={onSetFocusedHazard}
        />

        <PermitQuestionSetCard
          focusedHazardQuestions={focusedHazardQuestions}
          questionResponses={hazardsControls.questionResponses}
          requiredPpe={hazardsControls.requiredPpe}
          controlMeasures={hazardsControls.controlMeasures}
          onQuestionResponseChange={onQuestionResponseChange}
          onAddCustomQuestion={onAddCustomQuestion}
          onUpdateCustomQuestion={onUpdateCustomQuestion}
          onRemoveCustomQuestion={onRemoveCustomQuestion}
          onAddRequiredPpe={onAddRequiredPpe}
          onRemoveRequiredPpe={onRemoveRequiredPpe}
          onAddControlMeasure={onAddControlMeasure}
          onRemoveControlMeasure={onRemoveControlMeasure}
          onAddControl={onAddControl}
        />
      </div>

      <PermitControlMeasuresTable
        controlItems={visibleControlItems}
        onAddControl={onAddControl}
        onUpdateControl={onUpdateControl}
      />

      <PermitStepActions
        nextLabel="Next: Authorisation"
        onSaveDraft={onSaveDraft}
        onNext={onNextStep}
      />
    </section>
  );
}
