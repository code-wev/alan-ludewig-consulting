import { useSavedFiles } from "../use-saved-files";
import React from "react";
import {
  Check,
  CircleAlert,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectField } from "../components/select-field";
import {
  DEFAULT_LOCATION_OPTIONS,
} from "../types";

export function EditFileModal({
  state,
}: {
  state: ReturnType<typeof useSavedFiles>;
}) {
  const {
    categories,
    isEditFileModalOpen,
    editFileTarget,
    editFileName,
    setEditFileName,
    editFileProjectLocation,
    setEditFileProjectLocation,
    editFileCategory,
    setEditFileCategory,
    editFileStatus,
    setEditFileStatus,
    editFileNotes,
    setEditFileNotes,
    editNotifyOnUpdate,
    setEditNotifyOnUpdate,
    editKeepLatestVersion,
    setEditKeepLatestVersion,
    editFileError,
    setEditFileError,
    closeEditFileModal,
    handleSaveEditedFile,
  } = state;

  if (!(isEditFileModalOpen && editFileTarget)) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
        onClick={closeEditFileModal}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-file-title"
          aria-describedby="edit-file-description"
          className="w-full max-w-223.5 rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative flex flex-col gap-6 px-6 py-6">
            <div className="flex min-h-8 items-start pr-12">
              <h2
                id="edit-file-title"
                className="text-[20px] font-bold leading-[1.6] text-brand-primary"
              >
                Edit Saved File
              </h2>
              <p id="edit-file-description" className="sr-only">
                Edit how this file appears inside your saved files area.
              </p>
            </div>

            <button
              type="button"
              onClick={closeEditFileModal}
              className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
              aria-label="Close edit saved file modal"
            >
              <X className="size-4.5" />
            </button>

            <div className="rounded-[6px] border border-[#c5c6d0] bg-[#f3f5f8] px-4.25 py-4.25">
              <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
                <div className="space-y-0.5">
                  <p className="text-[12px] leading-[1.6] text-brand-secondary">
                    File Name
                  </p>
                  <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                    {editFileTarget.name}
                  </p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[12px] leading-[1.6] text-brand-secondary">
                    Current Category
                  </p>
                  <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                    {editFileTarget.category}
                  </p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[12px] leading-[1.6] text-brand-secondary">
                    Project/Location
                  </p>
                  <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                    {editFileTarget.project}
                  </p>
                </div>
                <div className="flex flex-wrap gap-6">
                  <div className="space-y-0.5">
                    <p className="text-[12px] leading-[1.6] text-brand-secondary">
                      Type
                    </p>
                    <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                      {editFileTarget.format}
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[12px] leading-[1.6] text-brand-secondary">
                      Source
                    </p>
                    <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                      {editFileTarget.source}
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[12px] leading-[1.6] text-brand-secondary">
                      Version
                    </p>
                    <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                      {editFileTarget.version}
                    </p>
                  </div>
                </div>
                <div className="space-y-0.5 md:col-span-2">
                  <p className="text-[12px] leading-[1.6] text-brand-secondary">
                    Date Saved
                  </p>
                  <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                    {editFileTarget.dateSaved}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="edit-file-name"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                File Name
              </label>
              <input
                id="edit-file-name"
                value={editFileName}
                onChange={(event) => {
                  setEditFileName(event.target.value);
                  if (editFileError) {
                    setEditFileError("");
                  }
                }}
                className={cn(
                  "h-12.75 w-full rounded-[6px] border-[1.5px] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition focus:border-brand-primary",
                  editFileError ? "border-[#d92d20]" : "border-[#e3e6ec]",
                )}
              />
              {editFileError ? (
                <p className="text-[13px] font-medium text-[#b42318]">
                  {editFileError}
                </p>
              ) : null}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="edit-file-project-location"
                  className="text-[14px] leading-[1.6] text-brand-primary"
                >
                  Category Type
                </label>
                <SelectField
                  id="edit-file-project-location"
                  value={editFileProjectLocation}
                  onChange={setEditFileProjectLocation}
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
                  htmlFor="edit-file-category"
                  className="text-[14px] leading-[1.6] text-brand-primary"
                >
                  Category
                </label>
                <SelectField
                  id="edit-file-category"
                  value={editFileCategory}
                  onChange={setEditFileCategory}
                  options={categories.map((category) => category.name)}
                  className="w-full"
                  selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="edit-file-status"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Status
              </label>
              <SelectField
                id="edit-file-status"
                value={editFileStatus}
                onChange={setEditFileStatus}
                options={["Active", "Archived", "Draft"]}
                className="w-full"
                selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="edit-file-notes"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Notes
              </label>
              <textarea
                id="edit-file-notes"
                value={editFileNotes}
                onChange={(event) => setEditFileNotes(event.target.value)}
                placeholder="Add any internal notes about this file..."
                rows={3}
                className="min-h-19.5 w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>

            <button
              type="button"
              onClick={() => setEditNotifyOnUpdate((current) => !current)}
              className="flex items-center gap-2 py-1.5 text-left"
              role="checkbox"
              aria-checked={editNotifyOnUpdate}
            >
              <span
                className={cn(
                  "flex size-5 items-center justify-center rounded-lg border transition",
                  editNotifyOnUpdate
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-[#e3e6ec] bg-white text-transparent",
                )}
              >
                <Check className="size-3.5" />
              </span>
              <span className="text-[14px] leading-[1.6] text-brand-secondary">
                Notify me if the original document is updated
              </span>
            </button>

            <button
              type="button"
              onClick={() => setEditKeepLatestVersion((current) => !current)}
              className="flex items-center gap-2 py-1.5 text-left"
              role="checkbox"
              aria-checked={editKeepLatestVersion}
            >
              <span
                className={cn(
                  "flex size-5 items-center justify-center rounded-lg border transition",
                  editKeepLatestVersion
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-[#e3e6ec] bg-white text-transparent",
                )}
              >
                <Check className="size-3.5" />
              </span>
              <span className="text-[14px] leading-[1.6] text-brand-secondary">
                Keep latest version by default
              </span>
            </button>

            <div className="flex items-start gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] px-4.25 py-4.25">
              <CircleAlert className="mt-0.5 size-5 shrink-0 text-brand-primary" />
              <p className="text-[14px] leading-[1.6] text-brand-primary">
                Editing this saved file only changes how it appears in your My
                Saved Files area. It will not change the original document in
                the Document Library.
              </p>
            </div>

            <div className="pt-1">
              <Button
                type="button"
                onClick={handleSaveEditedFile}
                className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
