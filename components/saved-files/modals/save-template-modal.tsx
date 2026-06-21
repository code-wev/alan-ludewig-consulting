import { useSavedFiles } from "../use-saved-files";
import React from "react";
import {
  Check,
  CircleAlert,
  File,
  FileText,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectField } from "../components/select-field";
import {
  DEFAULT_LOCATION_OPTIONS,
  TEMPLATE_COPY_PREVIEW,
} from "../types";

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
    saveTemplateNotes,
    setSaveTemplateNotes,
    notifyOnDocumentUpdate,
    setNotifyOnDocumentUpdate,
    saveLatestVersionByDefault,
    setSaveLatestVersionByDefault,
    saveTemplateError,
    setSaveTemplateError,
    closeSaveTemplateModal,
    handleOpenCategoryModalFromSaveTemplate,
    handleSaveTemplateCopy,
  } = state;

  if (!isSaveTemplateModalOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
        onClick={closeSaveTemplateModal}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="save-template-title"
          aria-describedby="save-template-description"
          className="w-full max-w-223.5 max-h-[90vh] overflow-y-auto no-scrollbar rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative flex flex-col gap-6 px-6 py-6">
            <div className="flex min-h-8 items-start pr-12">
              <h2
                id="save-template-title"
                className="text-[20px] font-bold leading-[1.6] text-brand-primary"
              >
                Save to My Saved Files
              </h2>
              <p id="save-template-description" className="sr-only">
                Save this template copy into one of your personal categories.
              </p>
            </div>

            <button
              type="button"
              onClick={closeSaveTemplateModal}
              className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
              aria-label="Close save template copy modal"
            >
              <X className="size-4.5" />
            </button>

            <div className="rounded-[6px] border border-[#c5c6d0] bg-[#f3f5f8] px-4.25 py-4.25">
              <div className="flex items-start gap-4">
                <div className="flex size-10 items-center justify-center rounded-xs border border-brand-primary bg-brand-primary text-white">
                  <File className="size-4.25" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <h3 className="text-[16px] font-bold leading-[1.6] text-brand-primary">
                    {TEMPLATE_COPY_PREVIEW.name}
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-[12px] leading-[1.6] text-brand-secondary">
                    <span>Category: {TEMPLATE_COPY_PREVIEW.category}</span>
                    <span>Format: {TEMPLATE_COPY_PREVIEW.format}</span>
                    <span>Version: {TEMPLATE_COPY_PREVIEW.version}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[12px] leading-[1.6] text-brand-secondary">
                    <FileText className="size-3.5" />
                    <span>Source: {TEMPLATE_COPY_PREVIEW.source}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="save-template-category"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Save under Category
              </label>
              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_127px] md:items-end">
                <SelectField
                  id="save-template-category"
                  value={saveTemplateCategory}
                  onChange={(value) => {
                    setSaveTemplateCategory(value);
                    if (saveTemplateError) {
                      setSaveTemplateError("");
                    }
                  }}
                  options={[
                    "Select category",
                    ...categories.map((category) => category.name),
                  ]}
                  className="w-full"
                  selectClassName={cn(
                    "h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6]",
                    saveTemplateCategory === "Select category"
                      ? "text-[#a3acba]"
                      : "text-brand-primary",
                  )}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleOpenCategoryModalFromSaveTemplate}
                  className="h-12.75 rounded-[6px] border-[#e3e6ec] bg-white px-3.25 text-[14px] font-normal text-brand-secondary hover:bg-[#f8fafc]"
                >
                  Add Category
                </Button>
              </div>
              {saveTemplateError ? (
                <p className="text-[13px] font-medium text-[#b42318]">
                  {saveTemplateError}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="save-template-project-location"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Project/Location
              </label>
              <SelectField
                id="save-template-project-location"
                value={saveTemplateProjectLocation}
                onChange={setSaveTemplateProjectLocation}
                options={[
                  ...DEFAULT_LOCATION_OPTIONS.filter(
                    (option) => option !== "None",
                  ),
                ]}
                className="w-full"
                selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
              />
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
                placeholder="Add a short note for this saved file."
                rows={3}
                className="min-h-19.5 w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>

            <button
              type="button"
              onClick={() => setNotifyOnDocumentUpdate((current) => !current)}
              className="flex items-center gap-2 py-1.5 text-left"
              role="checkbox"
              aria-checked={notifyOnDocumentUpdate}
            >
              <span
                className={cn(
                  "flex size-5 items-center justify-center rounded-lg border transition",
                  notifyOnDocumentUpdate
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-[#e3e6ec] bg-white text-transparent",
                )}
              >
                <Check className="size-3.5" />
              </span>
              <span className="text-[14px] leading-[1.6] text-brand-secondary">
                Notify me if this document is updated
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                setSaveLatestVersionByDefault((current) => !current)
              }
              className="flex items-center gap-2 py-1.5 text-left"
              role="checkbox"
              aria-checked={saveLatestVersionByDefault}
            >
              <span
                className={cn(
                  "flex size-5 items-center justify-center rounded-lg border transition",
                  saveLatestVersionByDefault
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-[#e3e6ec] bg-white text-transparent",
                )}
              >
                <Check className="size-3.5" />
              </span>
              <span className="text-[14px] leading-[1.6] text-brand-secondary">
                Save latest version by default
              </span>
            </button>

            <div className="flex items-start gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] px-4.25 py-4.25">
              <CircleAlert className="mt-0.5 size-5 shrink-0 text-brand-primary" />
              <p className="text-[14px] leading-[1.6] text-brand-primary">
                Categories are personal to your account and do not affect the
                main Document Library.
              </p>
            </div>

            <div className="pt-1">
              <Button
                type="button"
                onClick={handleSaveTemplateCopy}
                className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
              >
                Save File
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
