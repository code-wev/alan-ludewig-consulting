"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  INITIAL_JOB_SITE_DETAILS,
  INITIAL_PERMIT_TEMPLATE_DRAFT,
  PERMIT_TEMPLATE_STORAGE_KEY,
  PERMIT_TEMPLATE_STEPS,
  PERMIT_TYPE_OPTIONS,
  type PermitTemplateDraft,
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
      updatedAt: parsedDraft.updatedAt ?? null,
    };
  } catch {
    window.localStorage.removeItem(PERMIT_TEMPLATE_STORAGE_KEY);
    return INITIAL_PERMIT_TEMPLATE_DRAFT;
  }
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
      "hazards-controls": "Draft saved.",
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
      updatedAt: new Date().toISOString(),
    }));

    toast.message("Step 3 is the next build target.", {
      description:
        "Hazards & Controls can be connected next using the saved job and site details.",
    });
  };

  return {
    currentStepId: draft.currentStepId,
    selectedPermitTypeId: draft.permitTypeId,
    selectedPermitType,
    jobSiteDetails: draft.jobSiteDetails,
    setSelectedPermitTypeId,
    updateJobSiteDetails,
    goToStep,
    handleSaveDraft,
    handlePermitTypeNextStep,
    handleJobSiteDetailsNextStep,
  };
}
