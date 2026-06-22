"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  INITIAL_RISK_ASSESSMENT_DRAFT,
  RISK_ASSESSMENT_STORAGE_KEY,
  RISK_ASSESSMENT_STEPS,
  type RiskAssessmentDraft,
  type RiskAssessmentStepId,
  type RiskAssessmentJobDetails,
  type SelectedHazardRow,
  type RiskAssessmentControlsPpe,
  type RiskAssessmentMethodStatement,
  type RiskAssessmentEmergencyDetails,
} from "./types";

export function useRiskAssessment() {
  const router = useRouter();
  const [draft, setDraft] = useState<RiskAssessmentDraft>(INITIAL_RISK_ASSESSMENT_DRAFT);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem(RISK_ASSESSMENT_STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as Partial<RiskAssessmentDraft>;
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setDraft((prev) => ({
            ...prev,
            ...parsed,
            jobDetails: {
              ...prev.jobDetails,
              ...parsed.jobDetails,
            },
            tasksHazards: {
              ...prev.tasksHazards,
              ...parsed.tasksHazards,
            },
            controlsPpe: {
              ...prev.controlsPpe,
              ...parsed.controlsPpe,
            },
            methodStatement: {
              ...prev.methodStatement,
              ...parsed.methodStatement,
            },
            emergencyDetails: {
              ...prev.emergencyDetails,
              ...parsed.emergencyDetails,
            },
          }));
        } catch {
          window.localStorage.removeItem(RISK_ASSESSMENT_STORAGE_KEY);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Save to LocalStorage whenever draft changes
  const saveToStorage = (updated: RiskAssessmentDraft) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(RISK_ASSESSMENT_STORAGE_KEY, JSON.stringify(updated));
    }
  };

  const updateDraft = (updater: (prev: RiskAssessmentDraft) => RiskAssessmentDraft) => {
    setDraft((prev) => {
      const next = updater(prev);
      const withTimestamp = {
        ...next,
        updatedAt: new Date().toISOString(),
      };
      saveToStorage(withTimestamp);
      return withTimestamp;
    });
  };

  const setStep = (stepId: RiskAssessmentStepId) => {
    updateDraft((prev) => ({
      ...prev,
      currentStepId: stepId,
    }));
  };

  // Job Details handlers
  const updateJobDetails = (field: keyof RiskAssessmentJobDetails, value: unknown) => {
    updateDraft((prev) => ({
      ...prev,
      jobDetails: {
        ...prev.jobDetails,
        [field]: value,
      },
    }));
  };

  // Work Type handlers
  const setWorkType = (workTypeId: string) => {
    updateDraft((prev) => ({
      ...prev,
      workTypeId,
    }));
  };

  // Tasks & Hazards handlers
  const toggleTaskSelection = (task: string) => {
    updateDraft((prev) => {
      const selectedTasks = prev.tasksHazards.selectedTasks.includes(task)
        ? prev.tasksHazards.selectedTasks.filter((t) => t !== task)
        : [...prev.tasksHazards.selectedTasks, task];
      return {
        ...prev,
        tasksHazards: {
          ...prev.tasksHazards,
          selectedTasks,
        },
      };
    });
  };

  const toggleHazardSelection = (hazard: string) => {
    updateDraft((prev) => {
      const selectedHazards = prev.tasksHazards.selectedHazards.includes(hazard)
        ? prev.tasksHazards.selectedHazards.filter((h) => h !== hazard)
        : [...prev.tasksHazards.selectedHazards, hazard];

      // Automatically sync the assessedHazards rows
      let assessedHazards = [...prev.tasksHazards.assessedHazards];
      const isSelected = selectedHazards.includes(hazard);

      if (isSelected && !assessedHazards.some((r) => r.hazard.toLowerCase() === hazard.toLowerCase())) {
        // Add default row
        assessedHazards.push({
          hazard,
          personsAtRisk: "Internal",
          initialRisk: "Medium" as const,
          suggestedControls: "Standard safety briefing, appropriate supervision, and basic safety PPE.",
        });
      } else if (!isSelected) {
        // Remove row
        assessedHazards = assessedHazards.filter((r) => r.hazard.toLowerCase() !== hazard.toLowerCase());
      }

      return {
        ...prev,
        tasksHazards: {
          ...prev.tasksHazards,
          selectedHazards,
          assessedHazards,
        },
      };
    });
  };

  const addCustomHazard = (hazard: string) => {
    if (!hazard.trim()) return;
    updateDraft((prev) => {
      if (prev.tasksHazards.customHazards.includes(hazard)) return prev;
      const customHazards = [...prev.tasksHazards.customHazards, hazard];
      const assessedHazards = [
        ...prev.tasksHazards.assessedHazards,
        {
          hazard,
          personsAtRisk: "Internal",
          initialRisk: "Medium" as const,
          suggestedControls: "Specify safety control actions here.",
        },
      ];
      return {
        ...prev,
        tasksHazards: {
          ...prev.tasksHazards,
          customHazards,
          assessedHazards,
        },
      };
    });
  };

  const removeCustomHazard = (hazard: string) => {
    updateDraft((prev) => {
      const customHazards = prev.tasksHazards.customHazards.filter((h) => h !== hazard);
      const assessedHazards = prev.tasksHazards.assessedHazards.filter((r) => r.hazard !== hazard);
      return {
        ...prev,
        tasksHazards: {
          ...prev.tasksHazards,
          customHazards,
          assessedHazards,
        },
      };
    });
  };

  const updateAssessedHazardRow = (index: number, updatedRow: Partial<SelectedHazardRow>) => {
    updateDraft((prev) => {
      const assessedHazards = prev.tasksHazards.assessedHazards.map((row, i) =>
        i === index ? { ...row, ...updatedRow } : row
      );
      return {
        ...prev,
        tasksHazards: {
          ...prev.tasksHazards,
          assessedHazards,
        },
      };
    });
  };

  // Controls & PPE handlers
  const togglePpeSelection = (ppeId: string) => {
    updateDraft((prev) => {
      const selectedPpe = prev.controlsPpe.selectedPpe.includes(ppeId)
        ? prev.controlsPpe.selectedPpe.filter((p) => p !== ppeId)
        : [...prev.controlsPpe.selectedPpe, ppeId];
      return {
        ...prev,
        controlsPpe: {
          ...prev.controlsPpe,
          selectedPpe,
        },
      };
    });
  };

  const updateControlsPpe = (field: keyof RiskAssessmentControlsPpe, value: unknown) => {
    updateDraft((prev) => ({
      ...prev,
      controlsPpe: {
        ...prev.controlsPpe,
        [field]: value,
      },
    }));
  };

  // Method Statement handlers
  const updateMethodStatement = (field: keyof RiskAssessmentMethodStatement, value: string) => {
    updateDraft((prev) => ({
      ...prev,
      methodStatement: {
        ...prev.methodStatement,
        [field]: value,
      },
    }));
  };

  // Emergency Details handlers
  const updateEmergencyDetails = (field: keyof RiskAssessmentEmergencyDetails, value: string) => {
    updateDraft((prev) => ({
      ...prev,
      emergencyDetails: {
        ...prev.emergencyDetails,
        [field]: value,
      },
    }));
  };

  // Navigation action handlers
  const handleSaveDraft = () => {
    toast.success("Draft saved successfully!", {
      description: "Your changes have been stored and can be resumed at any time.",
    });
  };

  const handleNextStep = () => {
    const currentIndex = RISK_ASSESSMENT_STEPS.findIndex((s) => s.id === draft.currentStepId);
    if (currentIndex < RISK_ASSESSMENT_STEPS.length - 1) {
      const nextStepId = RISK_ASSESSMENT_STEPS[currentIndex + 1].id;
      setStep(nextStepId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevStep = () => {
    const currentIndex = RISK_ASSESSMENT_STEPS.findIndex((s) => s.id === draft.currentStepId);
    if (currentIndex > 0) {
      const prevStepId = RISK_ASSESSMENT_STEPS[currentIndex - 1].id;
      setStep(prevStepId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleReset = () => {
    updateDraft(() => INITIAL_RISK_ASSESSMENT_DRAFT);
    toast.message("Form reset.", {
      description: "All fields have been cleared.",
    });
  };

  const handlePublish = () => {
    toast.success("Risk Assessment Published!", {
      description: "Document successfully saved to My Saved Files.",
    });
    // Add logic to save draft into global saved files
    router.push("/rams-builder");
  };

  return {
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
  };
}
