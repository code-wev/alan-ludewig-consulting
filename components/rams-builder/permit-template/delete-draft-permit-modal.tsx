"use client";

import React from "react";
import { X, AlertTriangle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeleteDraftPermitModalProps {
  onClose: () => void;
}

export function DeleteDraftPermitModal({ onClose }: DeleteDraftPermitModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] w-full max-w-223.5 flex flex-col relative shadow-xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[18.5px] right-[18.5px] p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="size-4 text-brand-secondary" />
        </button>

        <div className="p-6 flex flex-col gap-8">
          
          {/* Header */}
          <div className="flex gap-4 items-start">
            <div className="bg-[#ffdad6] rounded-[12px] size-12 flex items-center justify-center shrink-0">
              <AlertTriangle className="size-6 text-[#ba1a1a]" />
            </div>
            <div className="flex flex-col gap-0.75">
              <h2 className="text-[20px] font-semibold text-[#191c1e]">Delete Draft Permit?</h2>
              <p className="text-[14px] text-brand-secondary">
                This draft permit and any unsaved work will be permanently removed.
              </p>
            </div>
          </div>

          {/* Entity Details Card */}
          <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[12px] p-4.25 flex flex-col gap-2.25">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[1.5px] w-1/2">
                <span className="text-[14px] text-brand-secondary">Permit Reference</span>
                <span className="text-[14px] text-brand-primary">PTW-2026-0019</span>
              </div>
              <div className="flex flex-col gap-[1.5px] w-1/2">
                <span className="text-[14px] text-brand-secondary">Permit Type</span>
                <span className="text-[14px] text-brand-primary">Hot Works Permit</span>
              </div>
            </div>
            <div className="flex flex-col gap-[1.5px]">
              <span className="text-[14px] text-brand-secondary">Project/Site</span>
              <span className="text-[14px] text-brand-primary">London South Hub - Roof Refurbishment</span>
            </div>
            <div className="flex flex-col gap-[1.5px]">
              <span className="text-[14px] text-brand-secondary">Last Saved Date/Time</span>
              <span className="text-[14px] text-brand-primary">October 24, 2023 at 14:45 GMT</span>
            </div>
          </div>

          {/* Helper Text */}
          <div className="bg-[#dae2ff] border border-[#e3e6ec] border-dashed rounded-[6px] p-4.25 flex gap-3 items-start">
            <Info className="size-4 text-brand-secondary shrink-0" />
            <p className="text-[12px] text-brand-secondary leading-[1.6]">
              Only Draft permits can be permanently deleted. Issued or closed permits must be archived to preserve compliance history.
            </p>
          </div>

          {/* Footer */}
          <div>
            <Button
              className="h-8.5 rounded-[6px] bg-[#d92d20] px-4 text-[12px] font-bold text-white hover:bg-red-700"
            >
              Delete Draft
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
