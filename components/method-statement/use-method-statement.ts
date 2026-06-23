"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  METHOD_STATEMENT_STEPS,
  METHOD_STATEMENT_STORAGE_KEY,
  INITIAL_METHOD_STATEMENT_DRAFT,
  type MethodStatementDraft,
  type MethodStatementStepId,
  type MethodStatementProjectDetails,
  type MethodStatementScopeOfWorks,
  type SequenceStep,
  type MethodStatementPlantTools,
  type MethodStatementPpeEmergency,
  type MethodStatementFinalApproval,
  type PlantToolItem,
} from "./types";

function isMethodStatementStepId(value: unknown): value is MethodStatementStepId {
  return METHOD_STATEMENT_STEPS.some((step) => step.id === value);
}

function parseStoredDraft(): MethodStatementDraft {
  if (typeof window === "undefined") {
    return INITIAL_METHOD_STATEMENT_DRAFT;
  }

  const savedDraft = window.localStorage.getItem(METHOD_STATEMENT_STORAGE_KEY);
  if (!savedDraft) return INITIAL_METHOD_STATEMENT_DRAFT;

  try {
    const parsedDraft = JSON.parse(savedDraft) as Partial<MethodStatementDraft>;
    return {
      currentStepId: isMethodStatementStepId(parsedDraft.currentStepId)
        ? parsedDraft.currentStepId
        : "project-details",
      projectDetails: {
        ...INITIAL_METHOD_STATEMENT_DRAFT.projectDetails,
        ...parsedDraft.projectDetails,
      },
      scopeOfWorks: {
        ...INITIAL_METHOD_STATEMENT_DRAFT.scopeOfWorks,
        ...parsedDraft.scopeOfWorks,
      },
      sequenceOfWorks: {
        ...INITIAL_METHOD_STATEMENT_DRAFT.sequenceOfWorks,
        ...parsedDraft.sequenceOfWorks,
      },
      plantTools: {
        ...INITIAL_METHOD_STATEMENT_DRAFT.plantTools,
        ...parsedDraft.plantTools,
      },
      ppeEmergency: {
        ...INITIAL_METHOD_STATEMENT_DRAFT.ppeEmergency,
        ...parsedDraft.ppeEmergency,
      },
      finalApproval: {
        ...INITIAL_METHOD_STATEMENT_DRAFT.finalApproval,
        ...parsedDraft.finalApproval,
      },
      updatedAt: parsedDraft.updatedAt ?? null,
    };
  } catch {
    window.localStorage.removeItem(METHOD_STATEMENT_STORAGE_KEY);
    return INITIAL_METHOD_STATEMENT_DRAFT;
  }
}

export function useMethodStatement() {
  const [draft, setDraft] = useState<MethodStatementDraft>(parseStoredDraft);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(METHOD_STATEMENT_STORAGE_KEY, JSON.stringify(draft));
  }, [draft]);

  const updateProjectDetails = <Key extends keyof MethodStatementProjectDetails>(
    key: Key,
    value: MethodStatementProjectDetails[Key],
  ) => {
    setDraft((current) => ({
      ...current,
      projectDetails: {
        ...current.projectDetails,
        [key]: value,
      },
    }));
  };

  const updateScopeOfWorks = <Key extends keyof MethodStatementScopeOfWorks>(
    key: Key,
    value: MethodStatementScopeOfWorks[Key],
  ) => {
    setDraft((current) => ({
      ...current,
      scopeOfWorks: {
        ...current.scopeOfWorks,
        [key]: value,
      },
    }));
  };

  const addSequenceStep = () => {
    setDraft((current) => {
      const nextNum = current.sequenceOfWorks.steps.length + 1;
      const newStep: SequenceStep = {
        id: String(Date.now()),
        stepNumber: nextNum,
        title: nextNum === 1 ? "Site Setup / Preparation" : `Work Step ${nextNum}`,
        descriptionOfWork: "",
        responsiblePerson: "",
        requiredEquipment: "",
        riskNotes: "",
      };
      return {
        ...current,
        sequenceOfWorks: {
          steps: [...current.sequenceOfWorks.steps, newStep],
        },
      };
    });
  };

  const removeSequenceStep = (stepId: string) => {
    setDraft((current) => {
      const filtered = current.sequenceOfWorks.steps.filter((s) => s.id !== stepId);
      // Re-number
      const renumbered = filtered.map((s, idx) => ({
        ...s,
        stepNumber: idx + 1,
      }));
      return {
        ...current,
        sequenceOfWorks: {
          steps: renumbered,
        },
      };
    });
  };

  const updateSequenceStepField = (
    stepId: string,
    field: keyof Omit<SequenceStep, "id" | "stepNumber">,
    value: string
  ) => {
    setDraft((current) => {
      const updatedSteps = current.sequenceOfWorks.steps.map((s) => {
        if (s.id === stepId) {
          return { ...s, [field]: value };
        }
        return s;
      });
      return {
        ...current,
        sequenceOfWorks: {
          steps: updatedSteps,
        },
      };
    });
  };

  const addPlantToolItem = (item: Omit<PlantToolItem, "id">) => {
    setDraft((current) => {
      const newItem: PlantToolItem = {
        id: String(Date.now()),
        ...item,
      };
      return {
        ...current,
        plantTools: {
          items: [...current.plantTools.items, newItem],
        },
      };
    });
  };

  const removePlantToolItem = (itemId: string) => {
    setDraft((current) => ({
      ...current,
      plantTools: {
        items: current.plantTools.items.filter((item) => item.id !== itemId),
      },
    }));
  };

  const updatePlantToolItem = (
    itemId: string,
    field: keyof Omit<PlantToolItem, "id">,
    value: string
  ) => {
    setDraft((current) => {
      const updatedItems = current.plantTools.items.map((item) => {
        if (item.id === itemId) {
          return { ...item, [field]: value };
        }
        return item;
      });
      return {
        ...current,
        plantTools: {
          items: updatedItems,
        },
      };
    });
  };

  const updatePpeEmergency = <Key extends keyof MethodStatementPpeEmergency>(
    key: Key,
    value: MethodStatementPpeEmergency[Key],
  ) => {
    setDraft((current) => ({
      ...current,
      ppeEmergency: {
        ...current.ppeEmergency,
        [key]: value,
      },
    }));
  };

  const togglePpeSelection = (ppeId: string) => {
    setDraft((current) => {
      const isSelected = current.ppeEmergency.selectedPpe.includes(ppeId);
      const selectedPpe = isSelected
        ? current.ppeEmergency.selectedPpe.filter((id) => id !== ppeId)
        : [...current.ppeEmergency.selectedPpe, ppeId];
      return {
        ...current,
        ppeEmergency: {
          ...current.ppeEmergency,
          selectedPpe,
        },
      };
    });
  };

  const updateFinalApproval = <Key extends keyof MethodStatementFinalApproval>(
    key: Key,
    value: MethodStatementFinalApproval[Key],
  ) => {
    setDraft((current) => ({
      ...current,
      finalApproval: {
        ...current.finalApproval,
        [key]: value,
      },
    }));
  };

  const goToStep = (stepId: MethodStatementStepId) => {
    setDraft((current) => ({
      ...current,
      currentStepId: stepId,
    }));
  };

  const saveDraft = (description: string) => {
    setDraft((current) => ({
      ...current,
      updatedAt: new Date().toISOString(),
    }));
    toast.success("Method Statement draft saved.", { description });
  };

  const handleSaveDraft = () => {
    saveDraft("Progress saved.");
  };

  const handleProjectDetailsNextStep = () => {
    setDraft((current) => ({
      ...current,
      currentStepId: "scope-of-works",
      updatedAt: new Date().toISOString(),
    }));
  };

  const handleScopeOfWorksNextStep = () => {
    setDraft((current) => ({
      ...current,
      currentStepId: "sequence-of-works",
      updatedAt: new Date().toISOString(),
    }));
  };

  const handleSequenceOfWorksNextStep = () => {
    setDraft((current) => ({
      ...current,
      currentStepId: "plant-tools",
      updatedAt: new Date().toISOString(),
    }));
  };

  const handlePlantToolsNextStep = () => {
    setDraft((current) => ({
      ...current,
      currentStepId: "ppe-emergency",
      updatedAt: new Date().toISOString(),
    }));
  };

  const handlePpeEmergencyNextStep = () => {
    setDraft((current) => ({
      ...current,
      currentStepId: "review-generate",
      updatedAt: new Date().toISOString(),
    }));
  };

  return {
    currentStepId: draft.currentStepId,
    projectDetails: draft.projectDetails,
    scopeOfWorks: draft.scopeOfWorks,
    sequenceOfWorks: draft.sequenceOfWorks,
    plantTools: draft.plantTools,
    ppeEmergency: draft.ppeEmergency,
    finalApproval: draft.finalApproval,
    updateProjectDetails,
    updateScopeOfWorks,
    addSequenceStep,
    removeSequenceStep,
    updateSequenceStepField,
    addPlantToolItem,
    removePlantToolItem,
    updatePlantToolItem,
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
  };
}
