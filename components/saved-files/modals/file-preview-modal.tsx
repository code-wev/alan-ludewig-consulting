import { useSavedFiles } from "../use-saved-files";
import React from "react";
import {
  X,
  FileText,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Download,
  Maximize2,
  Pencil,
  FolderInput,
  UploadCloud,
  Trash2,
  Lock,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function FilePreviewModal({
  state,
}: {
  state: ReturnType<typeof useSavedFiles>;
}) {
  const { isFilePreviewModalOpen, closeFilePreviewModal, filePreviewTarget } =
    state;

  if (!isFilePreviewModalOpen || !filePreviewTarget) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
      onClick={closeFilePreviewModal}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="file-preview-title"
        className="flex max-h-[90vh] w-full max-w-[1064px] flex-col overflow-hidden rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-[#e3e6ec] p-6">
          <div className="flex items-center gap-3">
            <FileText className="size-5 text-brand-primary" />
            <h2
              id="file-preview-title"
              className="text-[20px] font-bold leading-[1.6] text-brand-primary"
            >
              File Preview Modal
            </h2>
          </div>
          <button
            type="button"
            onClick={closeFilePreviewModal}
            className="flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
            aria-label="Close file preview modal"
          >
            <X className="size-4.5" />
          </button>
        </div>

        {/* Content Split */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Panel (70%) - Document Preview */}
          <div className="flex w-[65%] flex-col bg-[#eceef2]">
            {/* Toolbar */}
            <div className="flex h-12 shrink-0 items-center justify-between border-b border-[#e3e6ec] bg-[#f3f5f8] px-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex items-center justify-center rounded-[2px] p-1 text-brand-primary hover:bg-[#e3e6ec]"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <span className="text-[12px] leading-[1.6] text-brand-primary">
                  Page 1 / 12
                </span>
                <button
                  type="button"
                  className="flex items-center justify-center rounded-[2px] p-1 text-brand-primary hover:bg-[#e3e6ec]"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-[2px] border border-brand-light-grey bg-white px-2 py-1">
                  <button
                    type="button"
                    className="flex items-center justify-center text-brand-primary hover:text-brand-secondary"
                  >
                    <Minus className="size-3" />
                  </button>
                  <span className="w-12 text-center text-[12px] leading-[1.6] text-brand-primary">
                    100%
                  </span>
                  <button
                    type="button"
                    className="flex items-center justify-center text-brand-primary hover:text-brand-secondary"
                  >
                    <Plus className="size-3" />
                  </button>
                </div>
                <div className="h-4 w-px bg-[#c5c6d0]" />
                <button
                  type="button"
                  className="flex items-center justify-center text-brand-primary hover:text-brand-secondary"
                >
                  <Download className="size-4" />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center text-brand-primary hover:text-brand-secondary"
                >
                  <Maximize2 className="size-4.5" />
                </button>
              </div>
            </div>

            {/* Canvas Area */}
            <div className="relative flex flex-1 items-start justify-center overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none p-8">
              {/* Document Mockup */}
              <div className="relative flex min-h-[842px] w-[595px] shrink-0 flex-col bg-white p-12 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
                {/* Watermark */}
                <div className="absolute right-8 top-8 flex w-[129px] flex-col items-end opacity-20">
                  <span className="text-right text-[20px] font-bold leading-[1.6] text-brand-primary">
                    AL Consulting
                  </span>
                  <span className="text-right text-[11px] font-medium leading-[14px] text-[#191c1f]">
                    Compliance & Safety
                  </span>
                </div>

                <div className="flex w-full flex-col border-b-4 border-[#001137] pb-5">
                  <h1 className="text-[20px] font-bold leading-[1.6] text-brand-primary">
                    Structural RAMS
                  </h1>
                  <p className="text-[16px] leading-[1.6] text-brand-secondary">
                    Risk Assessment & Method Statement
                  </p>
                </div>

                <div className="mt-8 flex w-full flex-col gap-6">
                  <div className="flex w-full gap-4">
                    <div className="flex flex-1 flex-col gap-1 rounded-[6px] border border-[#e3e6ec] bg-[#f3f5f8] p-3">
                      <span className="text-[12px] leading-[1.6] text-brand-secondary">
                        Project Name
                      </span>
                      <span className="text-[14px] font-bold leading-[1.6] text-[#191c1f]">
                        London HQ - Phase 1
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-1 rounded-[6px] border border-[#e3e6ec] bg-[#f3f5f8] p-3">
                      <span className="text-[12px] leading-[1.6] text-brand-secondary">
                        Document REF
                      </span>
                      <span className="text-[14px] font-bold leading-[1.6] text-[#191c1f]">
                        RAMS-LDN-001-V2
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-4">
                    <div className="h-4 w-full rounded-[2px] bg-[#f3f5f8]" />
                    <div className="h-4 w-[449px] rounded-[2px] bg-[#f3f5f8]" />
                    <div className="h-4 w-[474px] rounded-[2px] bg-[#f3f5f8]" />
                    <div className="h-4 w-[199px] rounded-[2px] bg-[#f3f5f8]" />
                  </div>

                  <div className="flex w-full flex-col gap-4">
                    <div className="border-b border-[#c5c6d0] pb-1.25">
                      <span className="text-[14px] leading-[1.6] text-brand-primary">
                        1.0 Hazard Identification
                      </span>
                    </div>
                    <div className="flex w-full flex-col gap-3">
                      <div className="flex w-full gap-4">
                        <div className="mt-1 size-4 shrink-0 rounded-[2px] bg-[#d92d20]" />
                        <div className="h-3 w-[399px] rounded-[2px] bg-[#f3f5f8]" />
                      </div>
                      <div className="flex w-full gap-4">
                        <div className="mt-1 size-4 shrink-0 rounded-[2px] bg-[#d92d20]" />
                        <div className="h-3 w-[349px] rounded-[2px] bg-[#f3f5f8]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-4 opacity-40">
                    <div className="border-b border-[#e3e6ec] pb-1.25">
                      <span className="text-[14px] leading-[1.6] text-brand-primary">
                        2.0 Risk Mitigation
                      </span>
                    </div>
                    <div className="flex w-full flex-col gap-3">
                      <div className="h-3 w-full rounded-[2px] bg-[#f3f5f8]" />
                      <div className="h-3 w-full rounded-[2px] bg-[#f3f5f8]" />
                      <div className="h-3 w-full rounded-[2px] bg-[#f3f5f8]" />
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex w-full flex-col pt-36">
                  <div className="flex w-full items-end justify-between border-t border-[#c5c6d0] pt-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold leading-[15px] text-[#45464f]">
                        APPROVED BY
                      </span>
                      <span className="text-[14px] italic leading-[20px] text-[#191c1f]">
                        Alan Ludewig
                      </span>
                    </div>
                    <span className="text-[10px] leading-[15px] text-[#45464f]">
                      Page 1 of 12
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel (35%) - File Details */}
          <div className="flex w-[35%] flex-col border-l border-[#e3e6ec] bg-white">
            <div className="flex flex-1 flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
              <div className="flex flex-col p-6">
                <h3 className="mb-6 text-[14px] font-bold leading-[1.6] text-brand-primary">
                File Details
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] leading-[1.6] text-brand-secondary">
                    File Name
                  </span>
                  <span className="text-[14px] leading-[1.6] text-brand-primary">
                    Structural_RAMS_LondonHQ_V2.pdf
                  </span>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="text-[12px] leading-[1.6] text-brand-secondary">
                      Category
                    </span>
                    <span className="text-[14px] leading-[1.6] text-brand-primary">
                      RAMS
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="text-[12px] leading-[1.6] text-brand-secondary">
                      Document Type
                    </span>
                    <span className="text-[14px] leading-[1.6] text-brand-primary">
                      PDF
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[12px] leading-[1.6] text-brand-secondary">
                    Project
                  </span>
                  <span className="text-[14px] leading-[1.6] text-brand-primary">
                    London HQ Development
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[12px] leading-[1.6] text-brand-secondary">
                    Uploaded By
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#ccdafd] text-[10px] font-bold text-[#515f7d]">
                      SJ
                    </div>
                    <span className="text-[14px] leading-[1.6] text-brand-primary">
                      Sarah Jenkins
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="text-[12px] leading-[1.6] text-brand-secondary">
                      Date
                    </span>
                    <span className="text-[14px] leading-[1.6] text-brand-primary">
                      Oct 12, 2023
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="text-[12px] leading-[1.6] text-brand-secondary">
                      File Size
                    </span>
                    <span className="text-[14px] leading-[1.6] text-brand-primary">
                      1.2 MB
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[12px] leading-[1.6] text-brand-secondary">
                    Access Level
                  </span>
                  <div className="flex items-center gap-2">
                    <Lock className="size-3.5 text-brand-primary" />
                    <span className="text-[14px] leading-[1.6] text-brand-primary">
                      Internal Admin
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-medium leading-[14px] text-[#45464f]">
                    Status
                  </span>
                  <div className="flex">
                    <span className="rounded-[6px] bg-[#00bc7d] px-[9px] py-[2px] text-[12px] leading-[1.6] text-white">
                      Active
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[12px] leading-[1.6] text-brand-secondary">
                    Tags
                  </span>
                  <div className="flex flex-wrap gap-1">
                    <span className="rounded-[3px] bg-[#f3f5f8] px-2 py-0.5 text-[12px] leading-[1.6] text-brand-secondary">
                      Compliance
                    </span>
                    <span className="rounded-[3px] bg-[#f3f5f8] px-2 py-0.5 text-[12px] leading-[1.6] text-brand-secondary">
                      Safety
                    </span>
                    <span className="rounded-[3px] bg-[#f3f5f8] px-2 py-0.5 text-[12px] leading-[1.6] text-brand-secondary">
                      Structural
                    </span>
                  </div>
                </div>
                  </div>
                </div>
              
              <div className="flex shrink-0 flex-col gap-4 border-t border-[#e3e6ec] p-6">
                <span className="text-[12px] leading-[1.6] text-brand-secondary">
                  Actions
                </span>

                <Button className="h-[34px] w-full rounded-[6px] bg-brand-primary text-[12px] font-bold text-white hover:bg-[#0d1b3a]">
                  Download Document
                </Button>

                <div className="flex gap-2">
                  <Button className="flex h-[34px] flex-1 items-center justify-center gap-2.5 rounded-[6px] border border-brand-primary bg-white text-[12px] font-bold text-brand-primary hover:bg-[#f3f5f8]">
                    <Pencil className="size-3.5" />
                    Rename
                  </Button>
                  <Button className="flex h-[34px] flex-1 items-center justify-center gap-2.5 rounded-[6px] border border-brand-primary bg-white text-[12px] font-bold text-brand-primary hover:bg-[#f3f5f8]">
                    <FolderInput className="size-3.5" />
                    Move
                  </Button>
                </div>

                <Button className="flex h-[34px] w-full items-center justify-center gap-2.5 rounded-[6px] border border-brand-primary bg-white text-[12px] font-bold text-brand-primary hover:bg-[#f3f5f8]">
                  <UploadCloud className="size-3.5" />
                  Replace Version
                </Button>

                <button className="mt-2 flex items-center justify-center gap-2 text-[12px] font-bold leading-[1.6] text-[#d92d20] hover:text-red-700">
                  <Trash2 className="size-3.5" />
                  Delete Permanently
                </button>
              </div>
            </div>
            
            <div className="mt-auto flex h-[46px] shrink-0 items-center justify-between border-t border-[#e3e6ec] bg-[#f3f5f8] px-4 py-[13px]">
              <div className="flex items-center gap-2">
                <Info className="size-3.5 text-brand-secondary" />
                <span className="text-[11px] leading-[14px] text-[#45464f]">
                  All viewing actions are logged for compliance monitoring.
                </span>
              </div>
              <span className="text-[11px] leading-[14px] text-[#45464f]">
                Internal Ref: #9822-PREVIEW-MOD
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
