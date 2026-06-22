"use client";

type PermitFormFieldProps = {
  label: string;
  children: React.ReactNode;
};

export function PermitFormField({
  label,
  children,
}: PermitFormFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
        {label}
      </span>
      {children}
    </label>
  );
}
