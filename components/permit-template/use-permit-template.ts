"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  DEFAULT_PERMIT_QUESTION_TEMPLATES,
  INITIAL_HAZARDS_CONTROLS,
  INITIAL_JOB_SITE_DETAILS,
  INITIAL_PERMIT_TEMPLATE_DRAFT,
  PERMIT_HAZARD_OPTIONS,
  PERMIT_TEMPLATE_STORAGE_KEY,
  PERMIT_TEMPLATE_STEPS,
  PERMIT_TYPE_OPTIONS,
  type PermitControlItem,
  type PermitQuestionResponse,
  type PermitTemplateDraft,
  type PermitTemplateHazardsControls,
  type PermitTemplateJobSiteDetails,
  type PermitTemplateStepId,
} from "./types";

const requiredJobSiteDetailKeys: Array<keyof PermitTemplateJobSiteDetails> = [
  "projectSiteName",
  "workLocation",
  "workDescription",
  "contractorName",
  "supervisor",
  "permitIssuer",
  "permitReceiver",
  "date",
];

function isPermitTemplateStepId(value: unknown): value is PermitTemplateStepId {
  return PERMIT_TEMPLATE_STEPS.some((step) => step.id === value);
}

function buildHazardsControlsState(
  partial?: Partial<PermitTemplateHazardsControls>,
): PermitTemplateHazardsControls {
  const selectedHazardIds =
    partial?.selectedHazardIds?.filter((hazardId) =>
      PERMIT_HAZARD_OPTIONS.some((option) => option.id === hazardId),
    ) ?? INITIAL_HAZARDS_CONTROLS.selectedHazardIds;

  const focusedHazardId =
    partial?.focusedHazardId &&
    PERMIT_HAZARD_OPTIONS.some((option) => option.id === partial.focusedHazardId)
      ? partial.focusedHazardId
      : selectedHazardIds[0] ?? INITIAL_HAZARDS_CONTROLS.focusedHazardId;

  return {
    selectedHazardIds,
    focusedHazardId,
    questionResponses: {
      ...INITIAL_HAZARDS_CONTROLS.questionResponses,
      ...partial?.questionResponses,
    },
    customQuestions: partial?.customQuestions ?? INITIAL_HAZARDS_CONTROLS.customQuestions,
    requiredPpe: partial?.requiredPpe ?? INITIAL_HAZARDS_CONTROLS.requiredPpe,
    controlMeasures:
      partial?.controlMeasures ?? INITIAL_HAZARDS_CONTROLS.controlMeasures,
    controlItems: partial?.controlItems ?? INITIAL_HAZARDS_CONTROLS.controlItems,
  };
}

function parseStoredDraft(): PermitTemplateDraft {
  if (typeof window === "undefined") {
    return INITIAL_PERMIT_TEMPLATE_DRAFT;
  }

  const savedDraft = window.localStorage.getItem(PERMIT_TEMPLATE_STORAGE_KEY);

  if (!savedDraft) {
    return INITIAL_PERMIT_TEMPLATE_DRAFT;
  }

  try {
    const parsedDraft = JSON.parse(savedDraft) as Partial<PermitTemplateDraft>;
    const permitTypeExists = PERMIT_TYPE_OPTIONS.some(
      (option) => option.id === parsedDraft.permitTypeId,
    );

    return {
      currentStepId: isPermitTemplateStepId(parsedDraft.currentStepId)
        ? parsedDraft.currentStepId
        : "permit-type",
      permitTypeId: permitTypeExists
        ? (parsedDraft.permitTypeId as string)
        : INITIAL_PERMIT_TEMPLATE_DRAFT.permitTypeId,
      jobSiteDetails: {
        ...INITIAL_JOB_SITE_DETAILS,
        ...parsedDraft.jobSiteDetails,
      },
      hazardsControls: buildHazardsControlsState(parsedDraft.hazardsControls),
      updatedAt: parsedDraft.updatedAt ?? null,
    };
  } catch {
    window.localStorage.removeItem(PERMIT_TEMPLATE_STORAGE_KEY);
    return INITIAL_PERMIT_TEMPLATE_DRAFT;
  }
}

function getDefaultHazardsForPermitType(permitTypeId: string) {
  if (permitTypeId === "hot-works") {
    return ["fire-hot-work", "work-at-height", "electrical-systems"];
  }

  if (permitTypeId === "confined-space") {
    return ["confined-space", "hazardous-substances"];
  }

  if (permitTypeId === "electrical-isolation") {
    return ["electrical-systems", "plant-machinery"];
  }

  if (permitTypeId === "work-at-height") {
    return ["work-at-height", "plant-machinery"];
  }

  return INITIAL_HAZARDS_CONTROLS.selectedHazardIds;
}

export function usePermitTemplate() {
  const [draft, setDraft] = useState<PermitTemplateDraft>(parseStoredDraft);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(
      PERMIT_TEMPLATE_STORAGE_KEY,
      JSON.stringify(draft),
    );
  }, [draft]);

  const selectedPermitType = useMemo(
    () =>
      PERMIT_TYPE_OPTIONS.find((option) => option.id === draft.permitTypeId) ??
      PERMIT_TYPE_OPTIONS[0],
    [draft.permitTypeId],
  );

  const focusedHazardQuestions = useMemo(() => {
    const templateQuestions = DEFAULT_PERMIT_QUESTION_TEMPLATES.filter(
      (question) => question.hazardId === draft.hazardsControls.focusedHazardId,
    );
    const customQuestions = draft.hazardsControls.customQuestions.filter(
      (question) => question.hazardId === draft.hazardsControls.focusedHazardId,
    );

    return [...templateQuestions, ...customQuestions];
  }, [
    draft.hazardsControls.customQuestions,
    draft.hazardsControls.focusedHazardId,
  ]);

  const visibleControlItems = useMemo(() => {
    return draft.hazardsControls.controlItems.filter(
      (item) =>
        draft.hazardsControls.selectedHazardIds.includes(item.hazardId) ||
        item.isCustom,
    );
  }, [draft.hazardsControls.controlItems, draft.hazardsControls.selectedHazardIds]);

  const setSelectedPermitTypeId = (permitTypeId: string) => {
    setDraft((current) => ({
      ...current,
      permitTypeId,
    }));
  };

  const updateJobSiteDetails = <
    Key extends keyof PermitTemplateJobSiteDetails,
  >(
    key: Key,
    value: PermitTemplateJobSiteDetails[Key],
  ) => {
    setDraft((current) => ({
      ...current,
      jobSiteDetails: {
        ...current.jobSiteDetails,
        [key]: value,
      },
    }));
  };

  const goToStep = (stepId: PermitTemplateStepId) => {
    setDraft((current) => ({
      ...current,
      currentStepId: stepId,
    }));
  };

  const setFocusedHazardId = (hazardId: string) => {
    setDraft((current) => ({
      ...current,
      hazardsControls: {
        ...current.hazardsControls,
        focusedHazardId: hazardId,
      },
    }));
  };

  const toggleHazardSelection = (hazardId: string) => {
    setDraft((current) => {
      const isSelected = current.hazardsControls.selectedHazardIds.includes(hazardId);
      const selectedHazardIds = isSelected
        ? current.hazardsControls.selectedHazardIds.filter((id) => id !== hazardId)
        : [...current.hazardsControls.selectedHazardIds, hazardId];

      return {
        ...current,
        hazardsControls: {
          ...current.hazardsControls,
          selectedHazardIds,
          focusedHazardId: isSelected
            ? selectedHazardIds[0] ?? hazardId
            : hazardId,
        },
      };
    });
  };

  const updateQuestionResponse = (
    questionId: string,
    patch: Partial<PermitQuestionResponse>,
  ) => {
    setDraft((current) => ({
      ...current,
      hazardsControls: {
        ...current.hazardsControls,
        questionResponses: {
          ...current.hazardsControls.questionResponses,
          [questionId]: {
            ...(current.hazardsControls.questionResponses[questionId] ?? {
              answer: null,
              comment: "",
              actionRequired: false,
            }),
            ...patch,
          },
        },
      },
    }));
  };

  const addCustomQuestion = () => {
    const questionId = `custom-question-${Date.now()}`;

    setDraft((current) => ({
      ...current,
      hazardsControls: {
        ...current.hazardsControls,
        customQuestions: [
          ...current.hazardsControls.customQuestions,
          {
            id: questionId,
            hazardId: current.hazardsControls.focusedHazardId,
            text: "New permit question",
          },
        ],
      },
    }));
  };

  const updateCustomQuestion = (questionId: string, text: string) => {
    setDraft((current) => ({
      ...current,
      hazardsControls: {
        ...current.hazardsControls,
        customQuestions: current.hazardsControls.customQuestions.map((question) =>
          question.id === questionId ? { ...question, text } : question,
        ),
      },
    }));
  };

  const removeCustomQuestion = (questionId: string) => {
    setDraft((current) => {
      const nextResponses = { ...current.hazardsControls.questionResponses };
      delete nextResponses[questionId];

      return {
        ...current,
        hazardsControls: {
          ...current.hazardsControls,
          customQuestions: current.hazardsControls.customQuestions.filter(
            (question) => question.id !== questionId,
          ),
          questionResponses: nextResponses,
        },
      };
    });
  };

  const addChipValue = (
    key: "requiredPpe" | "controlMeasures",
    value: string,
  ) => {
    const normalized = value.trim();

    if (!normalized) {
      return;
    }

    setDraft((current) => {
      const currentValues = current.hazardsControls[key];

      if (currentValues.includes(normalized)) {
        return current;
      }

      return {
        ...current,
        hazardsControls: {
          ...current.hazardsControls,
          [key]: [...currentValues, normalized],
        },
      };
    });
  };

  const removeChipValue = (
    key: "requiredPpe" | "controlMeasures",
    value: string,
  ) => {
    setDraft((current) => ({
      ...current,
      hazardsControls: {
        ...current.hazardsControls,
        [key]: current.hazardsControls[key].filter((item) => item !== value),
      },
    }));
  };

  const addControlItem = () => {
    const controlId = `custom-control-${Date.now()}`;

    setDraft((current) => ({
      ...current,
      hazardsControls: {
        ...current.hazardsControls,
        controlItems: [
          ...current.hazardsControls.controlItems,
          {
            id: controlId,
            hazardId: current.hazardsControls.focusedHazardId,
            title: "New control measure",
            description: "Describe the control requirement.",
            relatedCheck: "Custom Question",
            responsiblePerson:
              current.jobSiteDetails.supervisor ||
              current.jobSiteDetails.permitIssuer ||
              "Assign responsible person",
            confirmed: false,
            isCustom: true,
          },
        ],
      },
    }));
  };

  const updateControlItem = (
    controlId: string,
    patch: Partial<PermitControlItem>,
  ) => {
    setDraft((current) => ({
      ...current,
      hazardsControls: {
        ...current.hazardsControls,
        controlItems: current.hazardsControls.controlItems.map((item) =>
          item.id === controlId ? { ...item, ...patch } : item,
        ),
      },
    }));
  };

  const saveDraft = (description: string) => {
    setDraft((current) => ({
      ...current,
      updatedAt: new Date().toISOString(),
    }));

    toast.success("Permit template draft saved.", {
      description,
    });
  };

  const handleSaveDraft = () => {
    const descriptions: Record<PermitTemplateStepId, string> = {
      "permit-type": `${selectedPermitType.title} is saved and ready for the next steps.`,
      "job-site-details":
        "Job, site, and permit references are stored in the draft for the next step.",
      "hazards-controls":
        "Hazards, permit questions, and control measures are saved for authorisation.",
      authorisation: "Draft saved.",
      "validity-period": "Draft saved.",
      "close-out-review": "Draft saved.",
    };

    saveDraft(descriptions[draft.currentStepId]);
  };

  const handlePermitTypeNextStep = () => {
    setDraft((current) => ({
      ...current,
      currentStepId: "job-site-details",
      updatedAt: new Date().toISOString(),
    }));
  };

  const handleJobSiteDetailsNextStep = () => {
    const missingFields = requiredJobSiteDetailKeys.filter(
      (key) => draft.jobSiteDetails[key].trim().length === 0,
    );

    if (missingFields.length > 0) {
      toast.error("Complete the required job and site details first.", {
        description:
          "Project, location, work description, responsible people, and date are all required before continuing.",
      });
      return;
    }

    setDraft((current) => ({
      ...current,
      currentStepId: "hazards-controls",
      hazardsControls:
        current.hazardsControls.selectedHazardIds.length === 0
          ? {
              ...current.hazardsControls,
              selectedHazardIds: getDefaultHazardsForPermitType(
                current.permitTypeId,
              ),
              focusedHazardId:
                getDefaultHazardsForPermitType(current.permitTypeId)[0] ??
                current.hazardsControls.focusedHazardId,
            }
          : current.hazardsControls,
      updatedAt: new Date().toISOString(),
    }));
  };

  const handleHazardsControlsNextStep = () => {
    if (draft.hazardsControls.selectedHazardIds.length === 0) {
      toast.error("Select at least one hazard before continuing.", {
        description:
          "Hazard identification is required so the permit can carry the correct checks and controls.",
      });
      return;
    }

    toast.message("Step 4 is the next build target.", {
      description:
        "Authorisation can be connected next using the saved hazards and control measures.",
    });
  };

  return {
    currentStepId: draft.currentStepId,
    selectedPermitTypeId: draft.permitTypeId,
    selectedPermitType,
    jobSiteDetails: draft.jobSiteDetails,
    hazardsControls: draft.hazardsControls,
    focusedHazardQuestions,
    visibleControlItems,
    setSelectedPermitTypeId,
    updateJobSiteDetails,
    goToStep,
    setFocusedHazardId,
    toggleHazardSelection,
    updateQuestionResponse,
    addCustomQuestion,
    updateCustomQuestion,
    removeCustomQuestion,
    addRequiredPpe: (value: string) => addChipValue("requiredPpe", value),
    removeRequiredPpe: (value: string) => removeChipValue("requiredPpe", value),
    addControlMeasure: (value: string) => addChipValue("controlMeasures", value),
    removeControlMeasure: (value: string) =>
      removeChipValue("controlMeasures", value),
    addControlItem,
    updateControlItem,
    handleSaveDraft,
    handlePermitTypeNextStep,
    handleJobSiteDetailsNextStep,
    handleHazardsControlsNextStep,
  };
}
