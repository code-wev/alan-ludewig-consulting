"use client";

import {
  FileText,
  MapPin,
  ClipboardCheck,
  CalendarClock,
  UserCheck,
  Info,
  ArrowRight,
  HardHat,
  Glasses,
  HandMetal,
  Footprints,
  Image as ImageIcon,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { type PermitTemplateCloseOut } from "./types";
import Link from "next/link";

type CloseOutReviewStepProps = {
  closeOut: PermitTemplateCloseOut;
  onFieldChange: <Key extends keyof PermitTemplateCloseOut>(
    key: Key,
    value: PermitTemplateCloseOut[Key]
  ) => void;
  onSaveDraft: () => void;
  onSubmit: () => void;
};

export function CloseOutReviewStep({
  closeOut,
  onFieldChange,
  onSaveDraft,
  onSubmit,
}: CloseOutReviewStepProps) {
  const inputClassName =
    "flex h-[51px] w-full items-center rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus-within:border-brand-primary focus:border-brand-primary";

  return (
    <section className="space-y-6.25">
      <h2 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary -mb-1.25">
        Step 6: Close Out / Review
      </h2>

      {/* Review Summary Cards (Bento-style Grid) */}
      <div className="flex flex-col gap-6.25 mt-6">
        {/* Row 1: Permit Type & Site Details */}
        <div className="grid grid-cols-2 gap-4 xl:gap-4">
          {/* Permit Type */}
          <div className="flex flex-col justify-center rounded-[12px] border border-[#e3e6ec] bg-white p-5 pb-10 xl:p-5 xl:pb-10">
            <div className="flex items-center gap-2 pb-4">
              <FileText className="size-5 text-brand-primary" />
              <h3 className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                Permit Type
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  Reference
                </span>
                <span className="font-['Sansation'] text-[14px] font-bold leading-[1.6] text-brand-primary">
                  PER-2023-889
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  Category
                </span>
                <span className="rounded-[3px] bg-[#f3f5f8] px-2 py-0.5 font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  Hot Works
                </span>
              </div>
            </div>
          </div>

          {/* Site Details */}
          <div className="flex flex-col justify-center rounded-[12px] border border-[#e3e6ec] bg-white p-5 pb-10 xl:p-5 xl:pb-10">
            <div className="flex items-center gap-2 pb-4">
              <MapPin className="size-5 text-brand-primary" />
              <h3 className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                JOB & SITE DETAILS
              </h3>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-x-12 gap-y-2">
              <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                Site Manager
              </span>
              <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                Marcus Holloway
              </span>
              <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                Location
              </span>
              <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                Server Room 4A, Level 2
              </span>
              <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                Emergency Contact
              </span>
              <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                +44 7700 900123
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Hazards & High-Level Controls Modal */}
        <div className="rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white">
          <div className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-2">
              <Info className="size-4.75 text-[#ba1a1a]" />
              <h3 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
                Hazards & High-Level Controls
              </h3>
            </div>
            <button className="flex items-center gap-1 font-['Sansation'] text-[16px] text-brand-primary">
              <span className="mt-0.5">Full Risk Assessment</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
          <div className="overflow-x-auto rounded-b-[12px] border-t-[1.5px] border-[#e3e6ec]">
            <table className="w-full min-w-200 text-left font-['Sansation'] text-[14px] leading-[1.6]">
              <thead className="bg-[#d6e9ff]">
                <tr>
                  <th className="border-b-[1.5px] border-[#f3f5f8] px-5 py-2.5 font-bold text-brand-primary">
                    Hazard Identified
                  </th>
                  <th className="border-b-[1.5px] border-[#f3f5f8] px-0 py-2.5 font-bold text-brand-primary">
                    Primary Control Measure
                  </th>
                  <th className="border-b-[1.5px] border-[#f3f5f8] px-0 py-2.5 font-bold text-brand-primary w-32.5">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border-b-[1.5px] border-[#f3f5f8] px-5 py-4 text-brand-primary">
                    Ignition Source in Restricted Area
                  </td>
                  <td className="border-b-[1.5px] border-[#f3f5f8] px-0 py-4 text-brand-secondary">
                    Gas monitoring and fire watch maintained for duration of works.
                  </td>
                  <td className="border-b-[1.5px] border-[#f3f5f8] px-0 py-4">
                    <span className="inline-flex items-center justify-center rounded-[6px] bg-[#00bc7d] px-2.25 py-0.5 text-[12px] text-white">
                      Implemented
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-brand-primary">
                    Restricted Workspace / Ergonomics
                  </td>
                  <td className="px-0 py-4 text-brand-secondary">
                    Task rotation every 45 minutes and mechanical lift for equipment.
                  </td>
                  <td className="px-0 py-4">
                    <span className="inline-flex items-center justify-center rounded-[6px] bg-[#00bc7d] px-2.25 py-0.5 text-[12px] text-white">
                      Implemented
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Row 3: Required PPE */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-[6px] border border-[#c5c6d0] bg-white p-5">
          <div className="flex w-full items-center gap-2">
            <Info className="size-4.5 text-brand-primary" />
            <h3 className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
              Required PPE
            </h3>
          </div>
          <div className="flex w-full max-w-249.25 items-stretch justify-between gap-4 overflow-x-auto pb-2">
            {[
              { label: "Hard Hat", Icon: HardHat },
              { label: "Eye Protection", Icon: Glasses },
              { label: "Gloves", Icon: HandMetal },
              { label: "Safety Boots", Icon: Footprints },
            ].map((ppe, i) => (
              <div
                key={i}
                className="flex w-59 flex-col items-center justify-center gap-3 rounded-[6px] border border-[#e3e6ec] bg-white p-4"
              >
                <div className="flex size-10 items-center justify-center rounded bg-[#f3f5f8]">
                  <ppe.Icon className="size-6 text-brand-primary" />
                </div>
                <span className="text-center font-['Sansation'] text-[12px] text-brand-secondary">
                  {ppe.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4: Validity Period & Authorisation */}
        <div className="grid grid-cols-2 gap-4 xl:gap-4">
          <div className="flex flex-col justify-between rounded-[12px] border border-[#e3e6ec] bg-white p-5">
            <div className="flex items-center gap-2 pb-4">
              <CalendarClock className="size-5 text-brand-primary" />
              <h3 className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                Validity Period
              </h3>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  Valid From
                </span>
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                  24 Oct 2023, 08:00
                </span>
              </div>
              <div className="h-8 w-px bg-[#e3e6ec]" />
              <div className="flex flex-col">
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  Valid Until
                </span>
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                  24 Oct 2023, 17:00
                </span>
              </div>
            </div>
            <div className="mt-4 border-t border-[#c5c6d0] pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3 text-[#16a34a]" />
                <span className="font-['Sansation'] text-[16px] leading-[1.6] text-brand-secondary">
                  Active & Within timeframe
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-[12px] border border-[#e3e6ec] bg-white p-5">
            <div className="flex items-center gap-2">
              <UserCheck className="size-5 text-brand-primary" />
              <h3 className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                Authorisation
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center rounded-[6px] bg-[#f3f5f8]">
                <UserCheck className="size-4 text-brand-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-['Sansation'] text-[14px] font-bold leading-[1.6] text-brand-primary">
                  David Sterling
                </span>
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  Authorized Issuer (H&S Officer)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center rounded-[6px] bg-[#f3f5f8]">
                <UserCheck className="size-4 text-brand-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-['Sansation'] text-[14px] font-bold leading-[1.6] text-brand-primary">
                  Permit Holder
                </span>
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  Awating Electronic Signature
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 5: Required Control Measures Modal */}
        <div className="rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white">
          <div className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-2">
              <Info className="size-4.75 text-[#ba1a1a]" />
              <h3 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
                Required Control Measures
              </h3>
            </div>
            <button className="flex items-center gap-1 font-['Sansation'] text-[16px] text-brand-primary">
              <span className="mt-0.5">Full Risk Assessment</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
          <div className="overflow-x-auto rounded-b-[12px] border-t-[1.5px] border-[#e3e6ec]">
            <table className="w-full min-w-200 text-left font-['Sansation'] text-[14px] leading-[1.6]">
              <thead className="bg-[#d6e9ff]">
                <tr>
                  <th className="border-b-[1.5px] border-[#f3f5f8] px-5 py-2.5 font-bold text-brand-primary w-50">
                    Control Measures
                  </th>
                  <th className="border-b-[1.5px] border-[#f3f5f8] px-0 py-2.5 font-bold text-brand-primary w-101.25">
                    Responsible Person
                  </th>
                  <th className="border-b-[1.5px] border-[#f3f5f8] px-0 py-2.5 font-bold text-brand-primary w-41">
                    Confirmed
                  </th>
                  <th className="border-b-[1.5px] border-[#f3f5f8] px-0 py-2.5 font-bold text-brand-primary w-32.5">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border-b-[1.5px] border-[#f3f5f8] px-5 py-4 text-brand-primary">
                    Continuous Gas Monitoring
                  </td>
                  <td className="border-b-[1.5px] border-[#f3f5f8] px-0 py-4 text-brand-secondary">
                    Marcus Holloway
                  </td>
                  <td className="border-b-[1.5px] border-[#f3f5f8] px-0 py-4">
                    <div className="flex size-4.5 items-center justify-center rounded-lg border border-transparent bg-[#1e3a8a]">
                      <CheckCircle2 className="size-3 text-white" />
                    </div>
                  </td>
                  <td className="border-b-[1.5px] border-[#f3f5f8] px-0 py-4">
                    <span className="inline-flex items-center justify-center rounded-[6px] bg-[#00bc7d] px-2.25 py-0.5 text-[12px] text-white">
                      Implemented
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-brand-primary">
                    Fire Watch (30 mins post-work)
                  </td>
                  <td className="px-0 py-4 text-brand-secondary">
                    Alan Ludewig
                  </td>
                  <td className="px-0 py-4">
                    <div className="flex size-4.5 items-center justify-center rounded-lg border border-transparent bg-[#1e3a8a]">
                      <CheckCircle2 className="size-3 text-white" />
                    </div>
                  </td>
                  <td className="px-0 py-4">
                    <span className="inline-flex items-center justify-center rounded-[6px] bg-[#00bc7d] px-2.25 py-0.5 text-[12px] text-white">
                      Implemented
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section - Close-out Checklist */}
      <section className="rounded-[12px] border border-[#e3e6ec] bg-white">
        <div className="border-b border-[#e3e6ec] bg-[#f3f5f8] px-4 py-4">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="size-5 text-brand-primary" />
            <h3 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
              Close-Out Checklist
            </h3>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-between gap-5 p-6">
          <div className="flex flex-1 flex-col gap-5">
            <label className="flex cursor-pointer items-start gap-4 rounded-[6px] border border-[#e3e6ec] p-4 transition-colors hover:bg-brand-light-grey/50">
              <input
                type="checkbox"
                checked={closeOut.workCompleted}
                onChange={(e) => onFieldChange("workCompleted", e.target.checked)}
                className="mt-1 size-5 rounded-lg border-[#e3e6ec] text-brand-primary focus:ring-brand-primary"
              />
              <div className="flex flex-col gap-1">
                <span className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                  Work Completed
                </span>
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  Confirm all specified works within this permit are finished.
                </span>
              </div>
            </label>

            <label className="flex cursor-pointer items-start gap-4 rounded-[6px] border border-[#e3e6ec] p-4 transition-colors hover:bg-brand-light-grey/50">
              <input
                type="checkbox"
                checked={closeOut.toolsWasteRemoved}
                onChange={(e) => onFieldChange("toolsWasteRemoved", e.target.checked)}
                className="mt-1 size-5 rounded-lg border-[#e3e6ec] text-brand-primary focus:ring-brand-primary"
              />
              <div className="flex flex-col gap-1">
                <span className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                  Tools & Waste Removed
                </span>
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  All equipment has been cleared and waste disposed of correctly.
                </span>
              </div>
            </label>
          </div>

          <div className="flex flex-1 flex-col gap-5">
            <label className="flex cursor-pointer items-start gap-4 rounded-[6px] border border-[#e3e6ec] p-4 transition-colors hover:bg-brand-light-grey/50">
              <input
                type="checkbox"
                checked={closeOut.areaInspected}
                onChange={(e) => onFieldChange("areaInspected", e.target.checked)}
                className="mt-1 size-5 rounded-lg border-[#e3e6ec] text-brand-primary focus:ring-brand-primary"
              />
              <div className="flex flex-col gap-1">
                <span className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                  Area Inspected
                </span>
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  The work area has been checked for fire/safety hazards post-work.
                </span>
              </div>
            </label>

            <label className="flex cursor-pointer items-start gap-4 rounded-[6px] border border-[#e3e6ec] p-4 transition-colors hover:bg-brand-light-grey/50">
              <input
                type="checkbox"
                checked={closeOut.safetySystemsRestored}
                onChange={(e) => onFieldChange("safetySystemsRestored", e.target.checked)}
                className="mt-1 size-5 rounded-lg border-[#e3e6ec] text-brand-primary focus:ring-brand-primary"
              />
              <div className="flex flex-col gap-1">
                <span className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                  Safety Systems Restored
                </span>
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  Isolations removed and fire detection systems re-enabled.
                </span>
              </div>
            </label>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 rounded-[10px] border-[1.5px] border-brand-light-grey bg-white px-8.25 py-7.5">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
              Permit Closed By
            </label>
            <input
              value={closeOut.closedBy}
              onChange={(e) => onFieldChange("closedBy", e.target.value)}
              placeholder="Select individual..."
              className={inputClassName}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                Date & Time
              </label>
              <input
                type="datetime-local"
                value={closeOut.dateTime}
                onChange={(e) => onFieldChange("dateTime", e.target.value)}
                className={cn(inputClassName, "scheme-light text-[#a3acba]")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                digital Signature
              </label>
              <button
                type="button"
                onClick={() => onFieldChange("signatureFileName", "signature_uploaded.png")}
                className={cn(
                  inputClassName,
                  "justify-between bg-white text-left",
                  !closeOut.signatureFileName && "text-[#a3acba]"
                )}
              >
                {closeOut.signatureFileName || "Click to sign electronically..."}
                <ImageIcon className="size-4.5 text-[#001137]" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
              Additional Close-Out Notes
            </label>
            <textarea
              value={closeOut.additionalNotes}
              onChange={(e) => onFieldChange("additionalNotes", e.target.value)}
              placeholder="Enter any handover details, remaining risks, or observations..."
              rows={3}
              className={cn(inputClassName, "h-19.5 resize-none py-3 align-top")}
            />
          </div>

          <label className="flex cursor-pointer items-center gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] p-4 transition-colors">
            <input
              type="checkbox"
              checked={closeOut.declarationAccepted}
              onChange={(e) => onFieldChange("declarationAccepted", e.target.checked)}
              className="size-5 rounded-lg border-[#e3e6ec] text-brand-primary focus:ring-brand-primary"
            />
            <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
              I declare that the work is complete, the area is safe, and I am formally closing this permit.
            </span>
          </label>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onSaveDraft}
            className="flex h-8.5 items-center justify-center rounded-[6px] border border-brand-primary bg-white px-4 font-['Sansation'] text-[12px] font-bold text-brand-primary transition-colors hover:bg-brand-light-grey"
          >
            Save Draft
          </button>
          <Link href={"/rams-builder"} className="flex h-8.5 items-center justify-center rounded-[6px] bg-brand-primary px-4 font-['Sansation'] text-[12px] font-bold text-white transition-opacity hover:opacity-90">
            Generate PDF
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex h-8.5 items-center justify-center rounded-[6px] border border-brand-primary bg-white px-4 font-['Sansation'] text-[12px] font-bold text-brand-primary transition-colors hover:bg-brand-light-grey">
            Preview Permit
          </button>
          <button
            onClick={onSubmit}
            className="flex h-8.5 items-center justify-center rounded-[6px] border border-brand-primary bg-white px-4 font-['Sansation'] text-[12px] font-bold text-brand-primary transition-colors hover:bg-brand-light-grey"
          >
            Submit for Review
          </button>
        </div>
      </div>
    </section>
  );
}
