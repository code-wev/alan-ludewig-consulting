import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function SelectField<T extends string>({
  id,
  value,
  onChange,
  options,
  className,
  selectClassName,
}: {
  id?: string;
  value: T;
  onChange: (value: T) => void;
  options: readonly T[] | T[];
  className?: string;
  selectClassName?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
        className={cn(
          "h-9.5 w-full appearance-none rounded-[6px] border border-[#d7dce5] bg-white px-4 pr-10 text-[12px] text-brand-secondary outline-none transition focus:border-brand-primary",
          selectClassName,
        )}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-brand-secondary" />
    </div>
  );
}
