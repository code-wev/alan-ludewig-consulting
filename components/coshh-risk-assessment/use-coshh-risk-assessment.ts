"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  COSHH_STEPS,
  COSHH_STORAGE_KEY,
  INITIAL_COSHH_DRAFT,
  type CoshhDraft,
  type CoshhStepId,
  type CoshhSubstanceDetails,
  type CoshhHazardClassification,
  type CoshhExposurePersons,
  type CoshhPpeStorage,
  type CoshhFinalApproval,
} from "./types";

function isCoshhStepId(value: unknown): value is CoshhStepId {
  return COSHH_STEPS.some((step) => step.id === value);
}

function parseStoredDraft(): CoshhDraft {
  if (typeof window === "undefined") {
    return INITIAL_COSHH_DRAFT;
  }

  const savedDraft = window.localStorage.getItem(COSHH_STORAGE_KEY);
  if (!savedDraft) return INITIAL_COSHH_DRAFT;

  try {
    const parsedDraft = JSON.parse(savedDraft) as Partial<CoshhDraft>;
    return {
      currentStepId: isCoshhStepId(parsedDraft.currentStepId)
        ? parsedDraft.currentStepId
        : "substance-details",
      substanceDetails: {
        ...INITIAL_COSHH_DRAFT.substanceDetails,
        ...parsedDraft.substanceDetails,
      },
      hazardClassification: {
        ...INITIAL_COSHH_DRAFT.hazardClassification,
        ...parsedDraft.hazardClassification,
      },
      exposurePersons: {
        ...INITIAL_COSHH_DRAFT.exposurePersons,
        ...parsedDraft.exposurePersons,
      },
      controlMeasures: {
        ...INITIAL_COSHH_DRAFT.controlMeasures,
        ...parsedDraft.controlMeasures,
      },
      ppeStorage: {
        ...INITIAL_COSHH_DRAFT.ppeStorage,
        ...parsedDraft.ppeStorage,
      },
      finalApproval: {
        ...INITIAL_COSHH_DRAFT.finalApproval,
        ...parsedDraft.finalApproval,
      },
      updatedAt: parsedDraft.updatedAt ?? null,
    };
  } catch {
    window.localStorage.removeItem(COSHH_STORAGE_KEY);
    return INITIAL_COSHH_DRAFT;
  }
}

export function useCoshhRiskAssessment() {
  const [draft, setDraft] = useState<CoshhDraft>(parseStoredDraft);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(COSHH_STORAGE_KEY, JSON.stringify(draft));
  }, [draft]);

  const updateSubstanceDetails = <Key extends keyof CoshhSubstanceDetails>(
    key: Key,
    value: CoshhSubstanceDetails[Key],
  ) => {
    setDraft((current) => ({
      ...current,
      substanceDetails: {
        ...current.substanceDetails,
        [key]: value,
      },
    }));
  };

  const updateHazardClassification = <Key extends keyof CoshhHazardClassification>(
    key: Key,
    value: CoshhHazardClassification[Key],
  ) => {
    setDraft((current) => ({
      ...current,
      hazardClassification: {
        ...current.hazardClassification,
        [key]: value,
      },
    }));
  };

  const toggleHazardSelection = (hazardId: string) => {
    setDraft((current) => {
      const isSelected = current.hazardClassification.selectedHazards.includes(hazardId);
      const selectedHazards = isSelected
        ? current.hazardClassification.selectedHazards.filter((id) => id !== hazardId)
        : [...current.hazardClassification.selectedHazards, hazardId];

      return {
        ...current,
        hazardClassification: {
          ...current.hazardClassification,
          selectedHazards,
        },
      };
    });
  };

  const toggleExposureRoute = (routeId: string) => {
    setDraft((current) => {
      const isSelected = current.exposurePersons.selectedExposureRoutes.includes(routeId);
      const selectedExposureRoutes = isSelected
        ? current.exposurePersons.selectedExposureRoutes.filter((id) => id !== routeId)
        : [...current.exposurePersons.selectedExposureRoutes, routeId];

      return {
        ...current,
        exposurePersons: {
          ...current.exposurePersons,
          selectedExposureRoutes,
        },
      };
    });
  };

  const togglePersonAtRisk = (personId: string) => {
    setDraft((current) => {
      const isSelected = current.exposurePersons.selectedPersonsAtRisk.includes(personId);
      const selectedPersonsAtRisk = isSelected
        ? current.exposurePersons.selectedPersonsAtRisk.filter((id) => id !== personId)
        : [...current.exposurePersons.selectedPersonsAtRisk, personId];

      return {
        ...current,
        exposurePersons: {
          ...current.exposurePersons,
          selectedPersonsAtRisk,
        },
      };
    });
  };

  const toggleSuggestedControl = (controlId: string) => {
    setDraft((current) => {
      const isSelected = current.controlMeasures.selectedSuggestedControls.includes(controlId);
      const selectedSuggestedControls = isSelected
        ? current.controlMeasures.selectedSuggestedControls.filter((id) => id !== controlId)
        : [...current.controlMeasures.selectedSuggestedControls, controlId];

      return {
        ...current,
        controlMeasures: {
          ...current.controlMeasures,
          selectedSuggestedControls,
        },
      };
    });
  };

  const updatePpeStorage = <Key extends keyof CoshhPpeStorage>(
    key: Key,
    value: CoshhPpeStorage[Key],
  ) => {
    setDraft((current) => ({
      ...current,
      ppeStorage: {
        ...current.ppeStorage,
        [key]: value,
      },
    }));
  };

  const togglePpeSelection = (ppeId: string) => {
    setDraft((current) => {
      const isSelected = current.ppeStorage.selectedPpe.includes(ppeId);
      const selectedPpe = isSelected
        ? current.ppeStorage.selectedPpe.filter((id) => id !== ppeId)
        : [...current.ppeStorage.selectedPpe, ppeId];

      return {
        ...current,
        ppeStorage: {
          ...current.ppeStorage,
          selectedPpe,
        },
      };
    });
  };

  const updateFinalApproval = <Key extends keyof CoshhFinalApproval>(
    key: Key,
    value: CoshhFinalApproval[Key],
  ) => {
    setDraft((current) => ({
      ...current,
      finalApproval: {
        ...current.finalApproval,
        [key]: value,
      },
    }));
  };

  const goToStep = (stepId: CoshhStepId) => {
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
    toast.success("COSHH assessment draft saved.", { description });
  };

  const handleSaveDraft = () => {
    saveDraft("Progress saved.");
  };

  const handleSubstanceDetailsNextStep = () => {
    setDraft((current) => ({
      ...current,
      currentStepId: "hazard-classification",
      updatedAt: new Date().toISOString(),
    }));
  };

  const handleHazardClassificationNextStep = () => {
    setDraft((current) => ({
      ...current,
      currentStepId: "exposure-persons",
      updatedAt: new Date().toISOString(),
    }));
  };

  const handleExposurePersonsNextStep = () => {
    setDraft((current) => ({
      ...current,
      currentStepId: "control-measures",
      updatedAt: new Date().toISOString(),
    }));
  };

  const handleControlMeasuresNextStep = () => {
    setDraft((current) => ({
      ...current,
      currentStepId: "ppe-storage",
      updatedAt: new Date().toISOString(),
    }));
  };

  const handlePpeStorageNextStep = () => {
    setDraft((current) => ({
      ...current,
      currentStepId: "review-generate",
      updatedAt: new Date().toISOString(),
    }));
  };

  return {
    currentStepId: draft.currentStepId,
    substanceDetails: draft.substanceDetails,
    hazardClassification: draft.hazardClassification,
    exposurePersons: draft.exposurePersons,
    controlMeasures: draft.controlMeasures,
    ppeStorage: draft.ppeStorage,
    finalApproval: draft.finalApproval,
    updateSubstanceDetails,
    updateHazardClassification,
    updatePpeStorage,
    updateFinalApproval,
    toggleHazardSelection,
    toggleExposureRoute,
    togglePersonAtRisk,
    toggleSuggestedControl,
    togglePpeSelection,
    goToStep,
    handleSaveDraft,
    handleSubstanceDetailsNextStep,
    handleHazardClassificationNextStep,
    handleExposurePersonsNextStep,
    handleControlMeasuresNextStep,
    handlePpeStorageNextStep,
  };
}
