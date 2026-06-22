"use client";

import { CalendarClock, ShieldCheck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { type PermitTemplateValidityPeriod } from "./types";
import { PermitFormField } from "./permit-form-field";
import { PermitStepActions } from "./permit-step-actions";

const inputClassName =
  "h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary";

type ValidityPeriodStepProps = {
  validityPeriod: PermitTemplateValidityPeriod;
  onFieldChange: <Key extends keyof PermitTemplateValidityPeriod>(
    key: Key,
    value: PermitTemplateValidityPeriod[Key]
  ) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
};

export function ValidityPeriodStep({
  validityPeriod,
  onFieldChange,
  onSaveDraft,
  onNextStep,
}: ValidityPeriodStepProps) {
  return (
    <section className="space-y-6">
      <h2 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
        Step 5: Validity Period
      </h2>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_400px] xl:items-start">
        <div className="space-y-6">
          <section className="rounded-[10px] border-[1.5px] border-brand-light-grey bg-white shadow-[0_1px_1px_rgba(15,23,42,0.04)]">
            <div className="flex justify-between items-center rounded-t-[10px] border-b border-[#e3e6ec] bg-[#f3f5f8] px-6 py-4">
              <h3 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
                Validity Details
              </h3>
              <CalendarClock className="size-4.5 text-brand-primary" />
            </div>

            <div className="mt-6 space-y-8 px-8 py-7">
              <div className="grid gap-6 md:grid-cols-2">
                <PermitFormField label="Start Date & Time">
                  <input
                    type="datetime-local"
                    value={validityPeriod.startDateTime}
                    onChange={(e) =>
                      onFieldChange("startDateTime", e.target.value)
                    }
                    className={cn(inputClassName, "scheme-light")}
                  />
                </PermitFormField>
                <PermitFormField label="Expiry Date & Time">
                  <input
                    type="datetime-local"
                    value={validityPeriod.expiryDateTime}
                    onChange={(e) =>
                      onFieldChange("expiryDateTime", e.target.value)
                    }
                    className={cn(inputClassName, "scheme-light")}
                  />
                </PermitFormField>
              </div>

              <div className="rounded-[6px] border border-[#e3e6ec] bg-[#f3f5f8] p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                        Current Duration
                      </span>
                      <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                        9 Hours 0 Minutes
                      </span>
                    </div>
                    
                    <div className="h-2 w-full rounded-[12px] bg-[#c5c6d0]">
                      <div className="h-full w-[56%] rounded-[12px] bg-brand-primary" />
                    </div>
                    
                    <div className="flex items-center justify-between font-['Sansation'] text-[12px] leading-[1.6] text-brand-secondary">
                      <span>08:00 AM</span>
                      <span>12:30 PM (CURRENT)</span>
                      <span>05:00 PM</span>
                    </div>
                  </div>

                  <div className="border-l border-[#c5c6d0] pl-8">
                    <div className="space-y-1 text-center">
                      <span className="block font-['Sansation'] text-[12px] leading-[1.6] text-brand-secondary">
                        Total Capacity
                      </span>
                      <span className="block font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                        100%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 border-t border-[#e3e6ec] pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                      Extension Requirement
                    </h4>
                    <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                      Is this permit eligible for a validity extension beyond its initial expiry?
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={validityPeriod.isEligibleForExtension}
                    onClick={() =>
                      onFieldChange(
                        "isEligibleForExtension",
                        !validityPeriod.isEligibleForExtension
                      )
                    }
                    className={cn(
                      "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2",
                      validityPeriod.isEligibleForExtension
                        ? "bg-brand-primary"
                        : "bg-[#c5c6d0]"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                        validityPeriod.isEligibleForExtension
                          ? "translate-x-5"
                          : "translate-x-0"
                      )}
                    />
                  </button>
                </div>

                {validityPeriod.isEligibleForExtension && (
                  <div className="grid gap-6 md:grid-cols-2">
                    <PermitFormField label="Max Extension Count">
                      <div className="relative">
                        <input
                          value={validityPeriod.maxExtensionCount}
                          onChange={(e) =>
                            onFieldChange("maxExtensionCount", e.target.value)
                          }
                          className={inputClassName}
                        />
                      </div>
                    </PermitFormField>
                    <PermitFormField label="Extension Lead Time">
                      <div className="relative">
                        <input
                          value={validityPeriod.extensionLeadTime}
                          onChange={(e) =>
                            onFieldChange("extensionLeadTime", e.target.value)
                          }
                          className={inputClassName}
                        />
                      </div>
                    </PermitFormField>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="overflow-hidden rounded-[12px] border border-[#e3e6ec] bg-white">
            <div className="border-b border-[#e3e6ec] bg-[#f3f5f8] px-6 py-4">
              <h3 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
                Validity Status
              </h3>
            </div>
            
            <div className="space-y-6 p-6">
              <div className="flex items-center justify-between border-b border-[#e3e6ec] pb-3">
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  Permit Status
                </span>
                <span className="rounded-[6px] bg-[#00bc7d] px-2.25 py-0.5 font-['Sansation'] text-[12px] leading-[1.6] text-white">
                  Active
                </span>
              </div>
              
              <div className="flex items-center justify-between border-b border-[#e3e6ec] pb-3">
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  Time Remaining
                </span>
                <span className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                  04h : 30m
                </span>
              </div>
              
              <div className="flex items-center justify-between border-b border-[#e3e6ec] pb-3">
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  Extension Status
                </span>
                <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                  Eligible (2 Allowed)
                </span>
              </div>
              
              <div className="flex gap-3 rounded-[6px] border border-[#e3e6ec] bg-[#f3f5f8] p-4">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-primary" />
                <div>
                  <h4 className="font-['Sansation'] text-[14px] font-bold leading-[1.6] text-brand-primary">
                    Auto-Renewal Notice
                  </h4>
                  <p className="mt-1 font-['Sansation'] text-[12px] leading-[1.6] text-brand-secondary">
                    This permit does not support auto-renewal. Manual submission required.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] p-4">
            <div className="flex items-center gap-2 pb-4">
              <ShieldCheck className="size-4.5 text-brand-primary" />
              <h3 className="font-['Sansation'] text-[14px] font-bold leading-[1.6] text-brand-primary">
                Validity Guidance
              </h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-['Sansation'] text-[12px] font-bold leading-[1.6] text-brand-primary">
                  Minimum Duration
                </h4>
                <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                  Permits should not exceed a single shift (12 hours) without a formal extension review.
                </p>
              </div>
              
              <div>
                <h4 className="font-['Sansation'] text-[12px] font-bold leading-[1.6] text-brand-primary">
                  Extension Policy
                </h4>
                <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                  Extensions require the Authorising Officer to re-inspect the worksite to ensure all control measures remain effective.
                </p>
              </div>
              
              <div>
                <h4 className="font-['Sansation'] text-[12px] font-bold leading-[1.6] text-brand-primary">
                  Night Works
                </h4>
                <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                  Permits crossing over midnight require additional lighting and fatigue management protocols to be documented in RAMS.
                </p>
              </div>
            </div>
            
            <div className="mt-4 flex items-center gap-1">
              <a href="#" className="font-['Sansation'] text-[12px] font-bold leading-[1.6] text-brand-primary hover:underline">
                View Full Compliance Policy
              </a>
            </div>
          </section>
        </aside>
      </div>

      <PermitStepActions
        nextLabel="Next: Close Out/Review"
        onSaveDraft={onSaveDraft}
        onNext={onNextStep}
      />
    </section>
  );
}
