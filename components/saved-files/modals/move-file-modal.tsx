import { useSavedFiles } from "../use-saved-files";
import React from "react";
import {
  Building2,
  FileText,
  FolderOpen,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SelectField } from "../components/select-field";
import {
  DEFAULT_LOCATION_OPTIONS,
} from "../types";

export function MoveFileModal({
  state,
}: {
  state: ReturnType<typeof useSavedFiles>;
}) {
  const {
    categories,
    isMoveFileModalOpen,
    moveFileTarget,
    moveFileCategory,
    setMoveFileCategory,
    moveFileProjectLocation,
    setMoveFileProjectLocation,
    moveFileNote,
    setMoveFileNote,
    moveFileError,
    setMoveFileError,
    closeMoveFileModal,
    handleMoveFile,
  } = state;

  if (!(isMoveFileModalOpen && moveFileTarget)) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
        onClick={closeMoveFileModal}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="move-file-title"
          aria-describedby="move-file-description"
          className="w-full max-w-223.5 rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative flex flex-col gap-6 px-6 py-6">
            <div className="flex min-h-8 items-start pr-12">
              <h2
                id="move-file-title"
                className="text-[20px] font-bold leading-[1.6] text-brand-primary"
              >
                Move File
              </h2>
              <p id="move-file-description" className="sr-only">
                Move this file into a different category or project location.
              </p>
            </div>

            <button
              type="button"
              onClick={closeMoveFileModal}
              className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
              aria-label="Close move file modal"
            >
              <X className="size-4.5" />
            </button>

            <div className="rounded-[6px] border border-[#c5c6d0] bg-[#f3f5f8] px-4.25 py-4.25">
              <div className="flex items-start gap-4">
                <div className="flex size-10 items-center justify-center rounded-[6px] bg-[#ffdad6] text-[#ef4444]">
                  <FileText className="size-6" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <h3 className="text-[16px] font-bold leading-[1.6] text-brand-primary">
                    {moveFileTarget.name}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] leading-[1.6] text-brand-secondary">
                    <span className="inline-flex items-center gap-1">
                      <FolderOpen className="size-3.5" />
                      {moveFileTarget.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Building2 className="size-3.5" />
                      {moveFileTarget.project}
                    </span>
                    <span>Version: {moveFileTarget.version}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="move-file-category"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Move to Category
              </label>
              <SelectField
                id="move-file-category"
                value={moveFileCategory}
                onChange={(value) => {
                  setMoveFileCategory(value);
                  if (moveFileError) {
                    setMoveFileError("");
                  }
                }}
                options={categories.map((category) => category.name)}
                className="w-full"
                selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
              />
              {moveFileError ? (
                <p className="text-[13px] font-medium text-[#b42318]">
                  {moveFileError}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="move-file-project-location"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Project/Location
              </label>
              <SelectField
                id="move-file-project-location"
                value={moveFileProjectLocation}
                onChange={setMoveFileProjectLocation}
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
                htmlFor="move-file-note"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Optional Note
              </label>
              <textarea
                id="move-file-note"
                value={moveFileNote}
                onChange={(event) => setMoveFileNote(event.target.value)}
                placeholder="Reason for move or additional context..."
                rows={3}
                className="min-h-19.5 w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>

            <div className="pt-1">
              <Button
                type="button"
                onClick={handleMoveFile}
                className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
              >
                Move File
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
