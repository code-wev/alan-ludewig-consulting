"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PERMIT_HAZARD_OPTIONS } from "./types";

type HazardSelectionCardProps = {
  selectedHazardIds: string[];
  focusedHazardId: string;
  onToggleHazard: (hazardId: string) => void;
  onFocusHazard: (hazardId: string) => void;
};

export function HazardSelectionCard({
  selectedHazardIds,
  focusedHazardId,
  onToggleHazard,
  onFocusHazard,
}: HazardSelectionCardProps) {
  return (
    <section className="overflow-hidden rounded-[12px] border border-[#e3e6ec] bg-white">
      <div className="border-b border-[#c5c6d0] bg-[#f2f4f8] px-6 py-4.25">
        <h3 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
          Hazard Identification
        </h3>
        <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
          Select all hazards relevant to this permit.
        </p>
      </div>

      <div className="space-y-4 px-6 py-6">
        {PERMIT_HAZARD_OPTIONS.map(({ id, label, icon: Icon, iconClassName }) => {
          const isSelected = selectedHazardIds.includes(id);
          const isFocused = focusedHazardId === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => {
                onFocusHazard(id);
                onToggleHazard(id);
              }}
              className={cn(
                "flex w-full items-center justify-between rounded-lg border px-3.25 py-3.25 text-left transition",
                isFocused
                  ? "border-brand-primary bg-[#f8fbff]"
                  : "border-[#e3e6ec] bg-white hover:border-[#c7cfdd]",
              )}
            >
              <span className="flex items-center gap-3">
                <Icon className={cn("size-4", iconClassName)} />
                <span className="font-['Sansation'] text-[16px] leading-[1.6] text-brand-primary">
                  {label}
                </span>
              </span>

              <span
                className={cn(
                  "flex size-4.5 items-center justify-center rounded-lg border",
                  isSelected
                    ? "border-[#1e3a8a] bg-[#1e3a8a] text-white"
                    : "border-[#e3e6ec] bg-white text-transparent",
                )}
              >
                <Check className="size-3.5" />
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
