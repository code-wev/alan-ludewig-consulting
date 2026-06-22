"use client";

import { useId } from "react";
import { FileText, ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";

type PermitUploadCardProps = {
  title: string;
  hint: string;
  fileName: string;
  type: "document" | "image";
  accept: string;
  onSelectFile: (fileName: string) => void;
};

export function PermitUploadCard({
  title,
  hint,
  fileName,
  type,
  accept,
  onSelectFile,
}: PermitUploadCardProps) {
  const inputId = useId();
  const Icon = type === "document" ? FileText : ImagePlus;

  return (
    <label
      htmlFor={inputId}
      className={cn(
        "flex min-h-38 cursor-pointer flex-col items-center justify-center rounded-[6px] border border-dashed border-[#a3acba] bg-white px-6 py-8 text-center transition hover:border-brand-primary hover:bg-[#fafbfd]",
        fileName ? "border-brand-primary bg-[#f8fbff]" : "",
      )}
    >
      <input
        id={inputId}
        type="file"
        accept={accept}
        className="sr-only"
        onChange={(event) =>
          onSelectFile(event.target.files?.[0]?.name ?? "")
        }
      />

      <Icon className="size-8 text-brand-primary" />
      <p className="mt-3 font-['Sansation'] text-[14px] font-bold leading-[1.6] text-brand-secondary">
        {title}
      </p>
      <p className="mt-1 font-['Sansation'] text-[12px] leading-[1.6] text-[#a3acba]">
        {fileName || hint}
      </p>
    </label>
  );
}
