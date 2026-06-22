"use client";

import { CheckCircle2, Circle, CircleAlert, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AUTHORISATION_GUIDANCE,
  AUTHORISATION_NOTICE,
  PERMIT_PROGRESS_STEPS,
  type PermitTemplateAuthorisation,
} from "./types";
import { PermitFormField } from "./permit-form-field";
import { PermitStepActions } from "./permit-step-actions";
import { SignatureUploadField } from "./signature-upload-field";

const inputClassName =
  "h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary";

type AuthorisationStepProps = {
  authorisation: PermitTemplateAuthorisation;
  onFieldChange: <
    Section extends "permitIssuer" | "permitReceiver" | "supervisorApproval",
    Key extends keyof PermitTemplateAuthorisation[Section],
  >(
    section: Section,
    key: Key,
    value: PermitTemplateAuthorisation[Section][Key],
  ) => void;
  onRootFieldChange: (
    key: "additionalConditions" | "identityConfirmationChecked",
    value: string | boolean,
  ) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
};

export function AuthorisationStep({
  authorisation,
  onFieldChange,
  onRootFieldChange,
  onSaveDraft,
  onNextStep,
}: AuthorisationStepProps) {
  return (
    <section className="space-y-6">
      <h2 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
        Step 4: Authorisation
      </h2>

      <section className="flex items-start gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] px-4.25 py-4.25">
        <CircleAlert className="mt-0.5 size-5 shrink-0 text-brand-primary" />
        <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
          <span className="font-bold">Global Compliance Reminder :</span>{" "}
          {AUTHORISATION_NOTICE}
        </p>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_302px] xl:items-start">
        <div className="space-y-6">
          <AuthorisationPanel title="1. Permit Issuer">
            <div className="grid gap-4 md:grid-cols-2">
              <PermitFormField label="Full Name">
                <input
                  value={authorisation.permitIssuer.fullName}
                  onChange={(event) =>
                    onFieldChange(
                      "permitIssuer",
                      "fullName",
                      event.target.value,
                    )
                  }
                  placeholder="e.g. John Smith"
                  className={inputClassName}
                />
              </PermitFormField>
              <PermitFormField label="Position">
                <input
                  value={authorisation.permitIssuer.role}
                  onChange={(event) =>
                    onFieldChange("permitIssuer", "role", event.target.value)
                  }
                  placeholder="e.g. HSE Manager"
                  className={inputClassName}
                />
              </PermitFormField>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <SignatureUploadField
                label="Contractor / Person Carrying Out Work"
                fileName={authorisation.permitIssuer.signatureFileName}
                onSelectFile={(fileName) =>
                  onFieldChange("permitIssuer", "signatureFileName", fileName)
                }
              />
              <PermitFormField label="Date & Time">
                <input
                  type="datetime-local"
                  value={authorisation.permitIssuer.dateTime}
                  onChange={(event) =>
                    onFieldChange("permitIssuer", "dateTime", event.target.value)
                  }
                  className={cn(
                    inputClassName,
                    "scheme-light",
                  )}
                />
              </PermitFormField>
            </div>
          </AuthorisationPanel>

          <AuthorisationPanel title="2. Permit Receiver">
            <div className="grid gap-4 md:grid-cols-2">
              <PermitFormField label="Full Name">
                <input
                  value={authorisation.permitReceiver.fullName}
                  onChange={(event) =>
                    onFieldChange(
                      "permitReceiver",
                      "fullName",
                      event.target.value,
                    )
                  }
                  placeholder="e.g. Michael Roe"
                  className={inputClassName}
                />
              </PermitFormField>
              <PermitFormField label="Company">
                <input
                  value={authorisation.permitReceiver.company}
                  onChange={(event) =>
                    onFieldChange(
                      "permitReceiver",
                      "company",
                      event.target.value,
                    )
                  }
                  placeholder="e.g. ABC Contracting Ltd"
                  className={inputClassName}
                />
              </PermitFormField>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <SignatureUploadField
                label="Signature"
                fileName={authorisation.permitReceiver.signatureFileName}
                onSelectFile={(fileName) =>
                  onFieldChange("permitReceiver", "signatureFileName", fileName)
                }
              />
              <PermitFormField label="Date & Time">
                <input
                  type="datetime-local"
                  value={authorisation.permitReceiver.dateTime}
                  onChange={(event) =>
                    onFieldChange(
                      "permitReceiver",
                      "dateTime",
                      event.target.value,
                    )
                  }
                  className={cn(
                    inputClassName,
                    "scheme-light",
                  )}
                />
              </PermitFormField>
            </div>
          </AuthorisationPanel>

          <AuthorisationPanel title="3. Supervisor Approval">
            <div className="grid gap-4 md:grid-cols-2">
              <PermitFormField label="Full Name">
                <input
                  value={authorisation.supervisorApproval.fullName}
                  onChange={(event) =>
                    onFieldChange(
                      "supervisorApproval",
                      "fullName",
                      event.target.value,
                    )
                  }
                  placeholder="e.g. Michael Roe"
                  className={inputClassName}
                />
              </PermitFormField>
              <PermitFormField label="Position">
                <input
                  value={authorisation.supervisorApproval.position}
                  onChange={(event) =>
                    onFieldChange(
                      "supervisorApproval",
                      "position",
                      event.target.value,
                    )
                  }
                  placeholder="e.g. ABC Contracting Ltd"
                  className={inputClassName}
                />
              </PermitFormField>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <SignatureUploadField
                label="Signature"
                fileName={authorisation.supervisorApproval.signatureFileName}
                onSelectFile={(fileName) =>
                  onFieldChange(
                    "supervisorApproval",
                    "signatureFileName",
                    fileName,
                  )
                }
              />
              <PermitFormField label="Approval Notes / Remarks">
                <textarea
                  value={authorisation.supervisorApproval.approvalNotes}
                  onChange={(event) =>
                    onFieldChange(
                      "supervisorApproval",
                      "approvalNotes",
                      event.target.value,
                    )
                  }
                  placeholder="Detailed scope of works to be performed..."
                  rows={3}
                  className={cn(inputClassName, "h-19.5 resize-none py-3")}
                />
              </PermitFormField>
            </div>
          </AuthorisationPanel>

          <AuthorisationPanel title="4. Additional Conditions">
            <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
              Enter any specific site rules or additional PPE requirements not
              covered in the standard RAMS document.
            </p>
            <textarea
              value={authorisation.additionalConditions}
              onChange={(event) =>
                onRootFieldChange("additionalConditions", event.target.value)
              }
              placeholder="Describe additional safety measures or constraints..."
              rows={3}
              className={cn(inputClassName, "h-19.5 resize-none py-3")}
            />

            <button
              type="button"
              onClick={() =>
                onRootFieldChange(
                  "identityConfirmationChecked",
                  !authorisation.identityConfirmationChecked,
                )
              }
              className="flex w-full items-start gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] px-4.25 py-4.25 text-left"
            >
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-lg border border-[#e3e6ec] bg-white">
                {authorisation.identityConfirmationChecked ? (
                  <span className="size-2.5 rounded-xs bg-brand-primary" />
                ) : null}
              </span>
              <span className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                I confirm that I have verified the identities of all signees and
                that the work environment has been inspected and deemed safe to
                proceed under the conditions specified above.
              </span>
            </button>
          </AuthorisationPanel>
        </div>

        <aside className="space-y-6">
          <section className="overflow-hidden rounded-[12px] border border-[#e3e6ec] bg-white">
            <div className="border-b border-[#e3e6ec] bg-[#f3f5f8] px-4 py-4.25">
              <h3 className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                Authorization Guidance
              </h3>
            </div>
            <div className="space-y-6 p-5">
              {AUTHORISATION_GUIDANCE.map((item, index) => (
                <div
                  key={item.title}
                  className={cn(
                    "space-y-2",
                    index > 0 ? "border-t border-[#e3e6ec] pt-4.25" : "",
                  )}
                >
                  <h4 className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                    {item.title}
                  </h4>
                  <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                    {item.description}
                  </p>
                </div>
              ))}

              <div className="rounded-[6px] bg-brand-primary p-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-white" />
                  <h4 className="font-['Sansation'] text-[14px] font-bold leading-[1.6] text-white">
                    Audit Trail
                  </h4>
                </div>
                <p className="mt-2 font-['Sansation'] text-[12px] leading-[1.6] text-white/80">
                  This permit will generate a unique hash upon completion to
                  ensure non-repudiation of signatures.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[12px] border border-[#e3e6ec] bg-white p-6.25">
            <div className="flex items-center justify-between">
              <h3 className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                Permit Progress
              </h3>
              <span className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                80%
              </span>
            </div>
            <div className="mt-2 h-2 rounded-[12px] bg-[#eceef2]">
              <div className="h-full w-4/5 rounded-[12px] bg-[#001137]" />
            </div>
            <div className="mt-4 space-y-2">
              {PERMIT_PROGRESS_STEPS.map((step) => {
                const isComplete = step !== "Validity Period";
                const isCurrent = step === "Authorisation";

                return (
                  <div key={step} className="flex items-center gap-2">
                    {isComplete ? (
                      <CheckCircle2 className="size-3.5 text-[#22c55e]" />
                    ) : isCurrent ? (
                      <CheckCircle2 className="size-3.5 text-brand-primary" />
                    ) : (
                      <Circle className="size-3.5 text-brand-secondary" />
                    )}
                    <span
                      className={cn(
                        "font-['Sansation'] text-[14px] leading-[1.6]",
                        isCurrent ? "text-brand-primary" : "text-brand-secondary",
                      )}
                    >
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        </aside>
      </div>

      <PermitStepActions
        nextLabel="Next: Validity Period"
        onSaveDraft={onSaveDraft}
        onNext={onNextStep}
      />
    </section>
  );
}

function AuthorisationPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[10px] border-[1.5px] border-brand-light-grey bg-white px-8 py-7 shadow-[0_1px_1px_rgba(15,23,42,0.04)]">
      <h3 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
        {title}
      </h3>
      <div className="mt-6 space-y-4">{children}</div>
    </section>
  );
}
