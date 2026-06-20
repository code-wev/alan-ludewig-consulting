import { useSavedFiles } from "../use-saved-files";
import React from "react";
import {
  Check,
  CircleAlert,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DeleteFileModal({
  state,
}: {
  state: ReturnType<typeof useSavedFiles>;
}) {
  const {
    isDeleteFileModalOpen,
    deleteFileTarget,
    confirmDeleteFile,
    setConfirmDeleteFile,
    deleteFileError,
    setDeleteFileError,
    closeDeleteFileModal,
    handleDeleteFile,
  } = state;

  if (!(isDeleteFileModalOpen && deleteFileTarget)) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
        onClick={closeDeleteFileModal}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-file-title"
          aria-describedby="delete-file-description"
          className="w-full max-w-223.5 max-h-[90vh] overflow-y-auto no-scrollbar rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative flex flex-col gap-6 px-6 py-6">
            <div className="flex min-h-8 items-start pr-12">
              <h2
                id="delete-file-title"
                className="text-[20px] font-bold leading-[1.6] text-brand-primary"
              >
                Delete Saved File?
              </h2>
              <p id="delete-file-description" className="sr-only">
                Confirm removal of this saved file from your saved files area.
              </p>
            </div>

            <button
              type="button"
              onClick={closeDeleteFileModal}
              className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
              aria-label="Close delete saved file modal"
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
                    {deleteFileTarget.name}
                  </p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[12px] leading-[1.6] text-brand-secondary">
                    Current Category
                  </p>
                  <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                    {deleteFileTarget.category}
                  </p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[12px] leading-[1.6] text-brand-secondary">
                    Project/Location
                  </p>
                  <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                    {deleteFileTarget.project}
                  </p>
                </div>
                <div className="flex flex-wrap gap-6">
                  <div className="space-y-0.5">
                    <p className="text-[12px] leading-[1.6] text-brand-secondary">
                      Type
                    </p>
                    <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                      {deleteFileTarget.format}
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[12px] leading-[1.6] text-brand-secondary">
                      Source
                    </p>
                    <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                      {deleteFileTarget.source}
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[12px] leading-[1.6] text-brand-secondary">
                      Version
                    </p>
                    <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                      {deleteFileTarget.version}
                    </p>
                  </div>
                </div>
                <div className="space-y-0.5 md:col-span-2">
                  <p className="text-[12px] leading-[1.6] text-brand-secondary">
                    Date Saved
                  </p>
                  <p className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                    {deleteFileTarget.dateSaved}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 py-1.5 text-left">
              <CircleAlert className="mt-0.5 size-4.5 shrink-0 text-[#dc2626]" />
              <p className="text-[14px] leading-[1.6] text-brand-secondary">
                Once deleted, this saved copy will no longer appear in your
                saved files.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setConfirmDeleteFile((current) => !current);
                if (deleteFileError) {
                  setDeleteFileError("");
                }
              }}
              className="flex items-center gap-2 py-1.5 text-left"
              role="checkbox"
              aria-checked={confirmDeleteFile}
            >
              <span
                className={cn(
                  "flex size-5 items-center justify-center rounded-lg border transition",
                  confirmDeleteFile
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-[#e3e6ec] bg-white text-transparent",
                )}
              >
                <Check className="size-3.5" />
              </span>
              <span className="text-[14px] leading-[1.6] text-brand-secondary">
                I understand this action cannot be undone.
              </span>
            </button>
            {deleteFileError ? (
              <p className="text-[13px] font-medium text-[#b42318]">
                {deleteFileError}
              </p>
            ) : null}

            <div className="pt-1">
              <Button
                type="button"
                onClick={handleDeleteFile}
                className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
              >
                Delete File
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
