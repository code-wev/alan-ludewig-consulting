import { useSavedFiles } from "../use-saved-files";
import React from "react";
import { X, Upload, Trash2, Image as ImageIcon, X as XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SelectField } from "../components/select-field";

export function UploadFileModal({
  state,
}: {
  state: ReturnType<typeof useSavedFiles>;
}) {
  const {
    isUploadFileModalOpen,
    closeUploadFileModal,
    uploadFileName,
    setUploadFileName,
    uploadFileDocumentDate,
    setUploadFileDocumentDate,
    uploadFileReviewDate,
    setUploadFileReviewDate,
    uploadFileFileType,
    setUploadFileFileType,
    uploadFileTags,
    setUploadFileTags,
    uploadFileProjectLocation,
    setUploadFileProjectLocation,
    uploadFileDescription,
    setUploadFileDescription,
    uploadFileInternalNote,
    setUploadFileInternalNote,
  } = state;

  if (!isUploadFileModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
      onClick={closeUploadFileModal}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="upload-file-title"
        className="no-scrollbar max-h-[90vh] w-full max-w-[846px] overflow-y-auto rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <h2
              id="upload-file-title"
              className="text-[20px] font-bold leading-[1.6] text-brand-primary"
            >
              Upload File
            </h2>
            <button
              type="button"
              onClick={closeUploadFileModal}
              className="flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
              aria-label="Close upload file modal"
            >
              <X className="size-4.5" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#c5c6d0] bg-[#f2f4f8] p-[42px]">
                <div className="mb-4 flex size-16 items-center justify-center rounded-[12px] bg-[rgba(19,38,81,0.1)]">
                  <Upload className="size-6 text-brand-primary" />
                </div>
                <p className="text-[16px] font-semibold leading-[24px] text-[#001137]">
                  Drag and drop files here, or browse your device
                </p>
                <p className="mt-1 text-[12px] font-semibold tracking-[0.6px] text-[#45464f]">
                  Maximum file size 25MB
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-[6px] border border-[#e3e6ec] bg-white p-[17px]">
                <div className="flex size-10 items-center justify-center rounded-[4px] bg-[#f3f5f8]">
                  <ImageIcon className="size-5 text-brand-secondary" />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-bold leading-[1.6] text-[#001137]">
                      site_inspection_photo.jpg
                    </span>
                    <span className="text-[14px] leading-[1.6] text-brand-secondary">
                      4.2MB • 100%
                    </span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-[#f3f5f8]">
                    <div className="h-full w-full bg-brand-primary" />
                  </div>
                </div>
                <button type="button" className="text-[#d92d20] hover:text-red-700">
                  <Trash2 className="size-4.5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="upload-file-name"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                File Name
              </label>
              <input
                id="upload-file-name"
                value={uploadFileName}
                onChange={(event) => setUploadFileName(event.target.value)}
                className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="upload-file-document-date"
                  className="text-[14px] leading-[1.6] text-brand-primary"
                >
                  Document Date
                </label>
                <input
                  id="upload-file-document-date"
                  value={uploadFileDocumentDate}
                  onChange={(event) => setUploadFileDocumentDate(event.target.value)}
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="upload-file-review-date"
                  className="text-[14px] leading-[1.6] text-brand-primary"
                >
                  Review Date
                </label>
                <input
                  id="upload-file-review-date"
                  value={uploadFileReviewDate}
                  onChange={(event) => setUploadFileReviewDate(event.target.value)}
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-[1.6] text-brand-primary">
                  File Type
                </label>
                <SelectField
                  id="upload-file-file-type"
                  value={uploadFileFileType}
                  onChange={setUploadFileFileType}
                  options={[
                    "Image (JPG/PNG)",
                    "Document (PDF/DOC)",
                    "Spreadsheet (XLS/CSV)",
                  ]}
                  className="w-full"
                  selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-[1.6] text-brand-primary">
                  Tags (Multi-select)
                </label>
                <div className="flex min-h-[51px] w-full flex-wrap items-center gap-1 rounded-[6px] border border-[#e3e6ec] bg-white p-1">
                  <div className="flex items-center gap-1 rounded-[3px] bg-brand-primary px-2 py-0.5 text-white">
                    <span className="text-[12px] leading-[1.6]">Compliance</span>
                    <button type="button" className="text-white hover:text-gray-200">
                      <XIcon className="size-2" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1 rounded-[3px] bg-brand-primary px-2 py-0.5 text-white">
                    <span className="text-[12px] leading-[1.6]">On-site</span>
                    <button type="button" className="text-white hover:text-gray-200">
                      <XIcon className="size-2" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={uploadFileTags}
                    onChange={(event) => setUploadFileTags(event.target.value)}
                    placeholder="Add..."
                    className="h-full min-w-[60px] flex-1 bg-transparent px-1 py-1.5 text-[14px] leading-[1.6] text-brand-secondary outline-none placeholder:text-brand-secondary"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_411px]">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-[1.6] text-brand-primary">
                  Project / Site
                </label>
                <SelectField
                  id="upload-file-project-location"
                  value={uploadFileProjectLocation}
                  onChange={setUploadFileProjectLocation}
                  options={[
                    "Central London High Rise - Phase 2",
                    "North Region Operations",
                    "Head Office",
                  ]}
                  className="w-full"
                  selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="upload-file-description"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Description
              </label>
              <textarea
                id="upload-file-description"
                value={uploadFileDescription}
                onChange={(event) => setUploadFileDescription(event.target.value)}
                placeholder="Provide a brief summary of the file's contents..."
                rows={3}
                className="min-h-[78px] w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="upload-file-internal-note"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Internal Note (Private)
              </label>
              <textarea
                id="upload-file-internal-note"
                value={uploadFileInternalNote}
                onChange={(event) => setUploadFileInternalNote(event.target.value)}
                placeholder="Optional notes for internal tracking only..."
                rows={3}
                className="min-h-[78px] w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>

            <div className="flex items-center gap-5 pt-2">
              <Button
                type="button"
                onClick={closeUploadFileModal}
                className="h-[34px] w-[150px] rounded-[6px] border border-brand-primary bg-white px-4 text-[12px] font-bold text-brand-primary hover:bg-[#f3f5f8]"
              >
                Save as Draft
              </Button>
              <Button
                type="button"
                onClick={closeUploadFileModal}
                className="h-[34px] w-[130px] rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
              >
                Upload File
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
