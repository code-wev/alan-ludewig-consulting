"use client";

import { useId } from "react";

type SignatureUploadFieldProps = {
  label: string;
  fileName: string;
  onSelectFile: (fileName: string) => void;
};

export function SignatureUploadField({
  label,
  fileName,
  onSelectFile,
}: SignatureUploadFieldProps) {
  const inputId = useId();

  return (
    <label className="flex flex-col gap-2">
      <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
        {label}
      </span>
      <input
        id={inputId}
        type="file"
        accept=".png,.jpg,.jpeg"
        className="sr-only"
        onChange={(event) =>
          onSelectFile(event.target.files?.[0]?.name ?? "")
        }
      />
      <label
        htmlFor={inputId}
        className="flex h-20 cursor-pointer items-center justify-center rounded-[6px] border border-dashed border-[#e3e6ec] bg-white px-4 text-center font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary transition hover:border-brand-primary hover:bg-[#fafbfd]"
      >
        {fileName || "Click to sign or upload image"}
      </label>
    </label>
  );
}
