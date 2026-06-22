"use client";

import { cn } from "@/lib/utils";
import { type PermitTypeOption } from "./types";

type PermitTypeOptionCardProps = {
  option: PermitTypeOption;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

export function PermitTypeOptionCard({
  option,
  isSelected,
  onSelect,
}: PermitTypeOptionCardProps) {
  const Icon = option.icon;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={() => onSelect(option.id)}
      className={cn(
        "flex min-h-45.5 flex-col justify-between rounded-[6px] border bg-white p-6.25 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/20",
        isSelected
          ? "border-brand-primary shadow-[0_0_0_1px_rgba(19,38,81,0.08)]"
          : "border-[#e3e6ec] hover:border-[#c7cfdd]",
      )}
    >
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-12 items-center justify-center rounded-[3px] bg-[#f3f5f8] text-brand-primary">
            <Icon className="size-6" />
          </div>
          <span
            className={cn(
              "flex size-5 items-center justify-center rounded-full border transition",
              isSelected
                ? "border-brand-primary bg-brand-primary"
                : "border-[#e3e6ec] bg-white",
            )}
          >
            {isSelected ? <span className="size-2 rounded-full bg-white" /> : null}
          </span>
        </div>

        <div className="space-y-1">
          <h3 className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
            {option.title}
          </h3>
          <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
            {option.description}
          </p>
        </div>
      </div>
    </button>
  );
}
