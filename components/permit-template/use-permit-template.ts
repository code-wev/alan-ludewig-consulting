"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  INITIAL_PERMIT_TEMPLATE_DRAFT,
  PERMIT_TEMPLATE_STORAGE_KEY,
  PERMIT_TYPE_OPTIONS,
  type PermitTemplateDraft,
} from "./types";

export function usePermitTemplate() {
  const [draft, setDraft] = useState<PermitTemplateDraft>(() => {
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
        currentStepId: parsedDraft.currentStepId ?? "permit-type",
        permitTypeId: permitTypeExists
          ? (parsedDraft.permitTypeId as string)
          : INITIAL_PERMIT_TEMPLATE_DRAFT.permitTypeId,
        updatedAt: parsedDraft.updatedAt ?? null,
      };
    } catch {
      window.localStorage.removeItem(PERMIT_TEMPLATE_STORAGE_KEY);
      return INITIAL_PERMIT_TEMPLATE_DRAFT;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(
      PERMIT_TEMPLATE_STORAGE_KEY,
      JSON.stringify(draft),
    );
  }, [draft]);

  const setSelectedPermitTypeId = (permitTypeId: string) => {
    setDraft((current) => ({
      ...current,
      permitTypeId,
    }));
  };

  const selectedPermitType = useMemo(
    () =>
      PERMIT_TYPE_OPTIONS.find((option) => option.id === draft.permitTypeId) ??
      PERMIT_TYPE_OPTIONS[0],
    [draft.permitTypeId],
  );

  const handleSaveDraft = () => {
    setDraft((current) => ({
      ...current,
      updatedAt: new Date().toISOString(),
    }));

    toast.success("Permit template draft saved.", {
      description: `${selectedPermitType.title} is saved and ready for the next steps.`,
    });
  };

  const handleNextStep = () => {
    setDraft((current) => ({
      ...current,
      updatedAt: new Date().toISOString(),
    }));

    toast.message("Step 2 is the next build target.", {
      description: `The ${selectedPermitType.title} draft is saved. Job / Site Details is the next screen to connect.`,
    });
  };

  return {
    currentStepId: draft.currentStepId,
    selectedPermitTypeId: draft.permitTypeId,
    setSelectedPermitTypeId,
    selectedPermitType,
    handleSaveDraft,
    handleNextStep,
  };
}
