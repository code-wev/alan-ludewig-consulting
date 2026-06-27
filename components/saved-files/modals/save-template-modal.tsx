import { useSavedFiles } from "../use-saved-files";
import React from "react";
import {
  Check,
  ShieldCheck,
  ClipboardList,
  FolderOpen,
  History,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectField } from "../components/select-field";

export function SaveTemplateModal({
  state,
}: {
  state: ReturnType<typeof useSavedFiles>;
}) {
  const {
    categories,
    isSaveTemplateModalOpen,
    saveTemplateCategory,
    setSaveTemplateCategory,
    saveTemplateProjectLocation,
    setSaveTemplateProjectLocation,
    saveTemplateName,
    setSaveTemplateName,
    saveTemplateTags,
    setSaveTemplateTags,
    saveTemplateAccessLevel,
    setSaveTemplateAccessLevel,
    saveTemplateNotes,
    setSaveTemplateNotes,
    saveTemplateIncludeQuestions,
    setSaveTemplateIncludeQuestions,
    saveTemplateIncludeBranding,
    setSaveTemplateIncludeBranding,
    saveTemplateEditableDraft,
    setSaveTemplateEditableDraft,
    saveTemplateNotifyTeam,
    setSaveTemplateNotifyTeam,
    saveTemplateError,
    setSaveTemplateError,
    closeSaveTemplateModal,
    handleSaveTemplateCopy,
  } = state;

  if (!isSaveTemplateModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
      onClick={closeSaveTemplateModal}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="save-template-title"
        className="no-scrollbar max-h-[90vh] w-full max-w-[846px] overflow-y-auto rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <h2
              id="save-template-title"
              className="text-[20px] font-bold leading-[1.6] text-brand-primary"
            >
              Save Template Copy
            </h2>
            <button
              type="button"
              onClick={closeSaveTemplateModal}
              className="flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
              aria-label="Close save template copy modal"
            >
              <X className="size-4.5" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-start justify-between rounded-[6px] border-b border-[#e3e6ec] bg-[#f3f5f8] p-6">
              <div className="flex flex-col gap-1">
                <div className="flex w-fit items-center rounded-[3px] bg-white px-2 py-0.5">
                  <span className="text-[12px] font-bold leading-[1.6] text-brand-secondary">
                    Source Template
                  </span>
                </div>
                <h3 className="text-[16px] font-bold leading-[1.6] text-brand-primary">
                  Standard Site Induction V4
                </h3>
                <div className="flex items-center gap-3 text-[14px] leading-[1.6] text-brand-secondary">
                  <div className="flex items-center gap-1">
                    <ClipboardList className="size-3.5" />
                    <span>Checklist</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FolderOpen className="size-3.5" />
                    <span>Operations</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <History className="size-3" />
                    <span>v4.2.1</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-[3px] border border-[#001137] bg-brand-primary px-3 py-1.5 text-white">
                <ShieldCheck className="size-3.5" />
                <span className="text-[12px] font-bold leading-[1.6]">
                  Membership Access
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="save-template-name"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                New Template Name
              </label>
              <input
                id="save-template-name"
                value={saveTemplateName}
                onChange={(event) => {
                  setSaveTemplateName(event.target.value);
                  if (saveTemplateError) setSaveTemplateError("");
                }}
                className={cn(
                  "h-12.75 w-full rounded-[6px] border-[1.5px] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary",
                  saveTemplateError ? "border-[#d92d20]" : "border-[#e3e6ec]",
                )}
              />
              {saveTemplateError && (
                <p className="text-[13px] font-medium text-[#b42318]">
                  {saveTemplateError}
                </p>
              )}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-[1.6] text-brand-primary">
                  Save to Category
                </label>
                <SelectField
                  id="save-template-category"
                  value={saveTemplateCategory}
                  onChange={setSaveTemplateCategory}
                  options={[
                    "Select category",
                    ...categories.map((category) => category.name),
                  ]}
                  className="w-full"
                  selectClassName="h-12.75 rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="save-template-project-location"
                  className="text-[14px] leading-[1.6] text-brand-primary"
                >
                  Project /Site
                </label>
                <input
                  id="save-template-project-location"
                  value={saveTemplateProjectLocation}
                  onChange={(event) => setSaveTemplateProjectLocation(event.target.value)}
                  placeholder="Select project or site..."
                  className="h-12.75 w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="save-template-tags"
                  className="text-[14px] leading-[1.6] text-brand-primary"
                >
                  Tags
                </label>
                <input
                  id="save-template-tags"
                  value={saveTemplateTags}
                  onChange={(event) => setSaveTemplateTags(event.target.value)}
                  placeholder="e.g. urgent, annual-review"
                  className="h-12.75 w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-[1.6] text-brand-primary">
                  Access Level
                </label>
                <SelectField
                  id="save-template-access-level"
                  value={saveTemplateAccessLevel}
                  onChange={setSaveTemplateAccessLevel}
                  options={[
                    "Organization Wide",
                    "Team (Department Wide)",
                    "Private",
                  ]}
                  className="w-full"
                  selectClassName="h-12.75 rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="save-template-notes"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Notes
              </label>
              <textarea
                id="save-template-notes"
                value={saveTemplateNotes}
                onChange={(event) => setSaveTemplateNotes(event.target.value)}
                placeholder="Optional comments regarding this copy..."
                rows={3}
                className="min-h-[78px] w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>

            <div className="flex flex-col gap-4 pb-8">
              <p className="text-[14px] leading-[1.6] text-brand-primary">
                Copy Settings
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setSaveTemplateIncludeQuestions(!saveTemplateIncludeQuestions)
                  }
                  className="flex items-center gap-2 text-left"
                  role="checkbox"
                  aria-checked={saveTemplateIncludeQuestions}
                >
                  <div
                    className={cn(
                      "flex size-5 shrink-0 items-center justify-center rounded-[4px] border",
                      saveTemplateIncludeQuestions
                        ? "border-brand-primary bg-brand-primary"
                        : "border-[#e3e6ec] bg-white",
                    )}
                  >
                    {saveTemplateIncludeQuestions && (
                      <Check className="size-3.5 text-white" />
                    )}
                  </div>
                  <span className="text-[14px] leading-[1.6] text-brand-secondary">
                    Include questions/structure
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSaveTemplateIncludeBranding(!saveTemplateIncludeBranding)
                  }
                  className="flex items-center gap-2 text-left"
                  role="checkbox"
                  aria-checked={saveTemplateIncludeBranding}
                >
                  <div
                    className={cn(
                      "flex size-5 shrink-0 items-center justify-center rounded-[4px] border",
                      saveTemplateIncludeBranding
                        ? "border-brand-primary bg-brand-primary"
                        : "border-[#e3e6ec] bg-white",
                    )}
                  >
                    {saveTemplateIncludeBranding && (
                      <Check className="size-3.5 text-white" />
                    )}
                  </div>
                  <span className="text-[14px] leading-[1.6] text-brand-secondary">
                    Include branding
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSaveTemplateEditableDraft(!saveTemplateEditableDraft)
                  }
                  className="flex items-center gap-2 text-left"
                  role="checkbox"
                  aria-checked={saveTemplateEditableDraft}
                >
                  <div
                    className={cn(
                      "flex size-5 shrink-0 items-center justify-center rounded-[4px] border",
                      saveTemplateEditableDraft
                        ? "border-brand-primary bg-brand-primary"
                        : "border-[#e3e6ec] bg-white",
                    )}
                  >
                    {saveTemplateEditableDraft && (
                      <Check className="size-3.5 text-white" />
                    )}
                  </div>
                  <span className="text-[14px] leading-[1.6] text-brand-secondary">
                    Create as editable draft
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSaveTemplateNotifyTeam(!saveTemplateNotifyTeam)
                  }
                  className="flex items-center gap-2 text-left"
                  role="checkbox"
                  aria-checked={saveTemplateNotifyTeam}
                >
                  <div
                    className={cn(
                      "flex size-5 shrink-0 items-center justify-center rounded-[4px] border",
                      saveTemplateNotifyTeam
                        ? "border-brand-primary bg-brand-primary"
                        : "border-[#e3e6ec] bg-white",
                    )}
                  >
                    {saveTemplateNotifyTeam && (
                      <Check className="size-3.5 text-white" />
                    )}
                  </div>
                  <span className="text-[14px] leading-[1.6] text-brand-secondary">
                    Notify team
                  </span>
                </button>
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="button"
                onClick={handleSaveTemplateCopy}
                className="h-[34px] rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
              >
                Save Template Copy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
