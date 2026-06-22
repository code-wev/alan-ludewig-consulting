"use client";

import { CircleAlert, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { SelectField } from "@/components/saved-files/components/select-field";
import {
  JOB_SITE_DETAILS_NOTICE,
  PERMIT_GUIDANCE_ITEMS,
  PERMIT_TYPE_OPTIONS,
  type PermitTemplateJobSiteDetails,
} from "./types";
import { PermitFormField } from "./permit-form-field";
import { PermitStepActions } from "./permit-step-actions";
import { PermitUploadCard } from "./permit-upload-card";

const fieldClassName =
  "h-[51px] w-full rounded-[6px] border-[1.5px] border-[#dce0e7] bg-white px-4 font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary";

type JobSiteDetailsStepProps = {
  selectedPermitTypeId: string;
  jobSiteDetails: PermitTemplateJobSiteDetails;
  onPermitTypeChange: (value: string) => void;
  onFieldChange: <Key extends keyof PermitTemplateJobSiteDetails>(
    key: Key,
    value: PermitTemplateJobSiteDetails[Key],
  ) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
};

export function JobSiteDetailsStep({
  selectedPermitTypeId,
  jobSiteDetails,
  onPermitTypeChange,
  onFieldChange,
  onSaveDraft,
  onNextStep,
}: JobSiteDetailsStepProps) {
  const selectedPermitTypeTitle =
    PERMIT_TYPE_OPTIONS.find((option) => option.id === selectedPermitTypeId)
      ?.title ?? PERMIT_TYPE_OPTIONS[0].title;

  return (
    <section className="space-y-6">
      <h2 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
        Step 2: Job / Site Details
      </h2>

      <section className="flex items-start gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] px-4.25 py-4.25">
        <CircleAlert className="mt-0.5 size-5 shrink-0 text-brand-primary" />
        <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
          <span className="font-bold">Mandatory Compliance Notice :</span>{" "}
          {JOB_SITE_DETAILS_NOTICE}
        </p>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.85fr)_minmax(280px,0.9fr)] xl:items-start">
        <div className="space-y-6">
          <section className="rounded-[10px] border-[1.5px] border-brand-light-grey bg-white px-8 py-7 shadow-[0_1px_1px_rgba(15,23,42,0.04)]">
            <div className="space-y-4">
              <PermitFormField label="Project / Site Name">
                <input
                  value={jobSiteDetails.projectSiteName}
                  onChange={(event) =>
                    onFieldChange("projectSiteName", event.target.value)
                  }
                  placeholder="Enter formal project title"
                  className={fieldClassName}
                />
              </PermitFormField>

              <PermitFormField label="Work Location">
                <input
                  value={jobSiteDetails.workLocation}
                  onChange={(event) =>
                    onFieldChange("workLocation", event.target.value)
                  }
                  placeholder="Specific floor, room number, or site coordinates"
                  className={fieldClassName}
                />
              </PermitFormField>

              <PermitFormField label="Work Description">
                <textarea
                  value={jobSiteDetails.workDescription}
                  onChange={(event) =>
                    onFieldChange("workDescription", event.target.value)
                  }
                  placeholder="Detailed scope of works to be performed..."
                  rows={3}
                  className={cn(
                    fieldClassName,
                    "h-19.5 resize-none py-3 align-top",
                  )}
                />
              </PermitFormField>

              <div className="grid gap-4 md:grid-cols-2">
                <PermitFormField label="Contractor / Person Carrying Out Work">
                  <input
                    value={jobSiteDetails.contractorName}
                    onChange={(event) =>
                      onFieldChange("contractorName", event.target.value)
                    }
                    placeholder="Name or Company"
                    className={fieldClassName}
                  />
                </PermitFormField>
                <PermitFormField label="Supervisor">
                  <input
                    value={jobSiteDetails.supervisor}
                    onChange={(event) =>
                      onFieldChange("supervisor", event.target.value)
                    }
                    placeholder="Site Supervisor Name"
                    className={fieldClassName}
                  />
                </PermitFormField>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <PermitFormField label="Permit Issuer">
                  <input
                    value={jobSiteDetails.permitIssuer}
                    onChange={(event) =>
                      onFieldChange("permitIssuer", event.target.value)
                    }
                    placeholder="Authorized Issuer"
                    className={fieldClassName}
                  />
                </PermitFormField>
                <PermitFormField label="Permit Receiver">
                  <input
                    value={jobSiteDetails.permitReceiver}
                    onChange={(event) =>
                      onFieldChange("permitReceiver", event.target.value)
                    }
                    placeholder="Responsible Receiver"
                    className={fieldClassName}
                  />
                </PermitFormField>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <PermitFormField label="Related RAMS Reference">
                  <input
                    value={jobSiteDetails.relatedRamsReference}
                    onChange={(event) =>
                      onFieldChange(
                        "relatedRamsReference",
                        event.target.value,
                      )
                    }
                    placeholder="RAMS-2024-XXX"
                    className={fieldClassName}
                  />
                </PermitFormField>
                <PermitFormField label="Related Risk Assessment Reference">
                  <input
                    value={jobSiteDetails.relatedRiskAssessmentReference}
                    onChange={(event) =>
                      onFieldChange(
                        "relatedRiskAssessmentReference",
                        event.target.value,
                      )
                    }
                    placeholder="RA-2024-XXX"
                    className={fieldClassName}
                  />
                </PermitFormField>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <PermitFormField label="Permit Type">
                  <SelectField
                    value={selectedPermitTypeTitle}
                    onChange={(value) => {
                      const nextOption = PERMIT_TYPE_OPTIONS.find(
                        (option) => option.title === value,
                      );
                      onPermitTypeChange(
                        nextOption?.id ?? PERMIT_TYPE_OPTIONS[0].id,
                      );
                    }}
                    options={PERMIT_TYPE_OPTIONS.map((option) => option.title)}
                    selectClassName="h-[51px] border-[1.5px] border-[#dce0e7] bg-white font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary focus:border-brand-primary"
                  />
                </PermitFormField>
                <PermitFormField label="Date">
                  <input
                    type="date"
                    value={jobSiteDetails.date}
                    onChange={(event) =>
                      onFieldChange("date", event.target.value)
                    }
                    className={cn(
                      fieldClassName,
                      "text-brand-primary scheme-light",
                      jobSiteDetails.date ? "" : "text-[#a3acba]",
                    )}
                  />
                </PermitFormField>
              </div>
            </div>
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            <PermitUploadCard
              title="Supporting Document"
              hint="PDF, DOCX up to 10MB"
              fileName={jobSiteDetails.supportingDocumentName}
              type="document"
              accept=".pdf,.doc,.docx"
              onSelectFile={(fileName) =>
                onFieldChange("supportingDocumentName", fileName)
              }
            />
            <PermitUploadCard
              title="Site Image"
              hint="JPG, PNG for site record"
              fileName={jobSiteDetails.siteImageName}
              type="image"
              accept=".jpg,.jpeg,.png"
              onSelectFile={(fileName) =>
                onFieldChange("siteImageName", fileName)
              }
            />
          </div>
        </div>

        <aside className="space-y-6">
          <section className="rounded-[12px] border border-[#e3e6ec] bg-white p-6.25">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-5 text-brand-primary" />
              <h3 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
                Permit Guidance
              </h3>
            </div>
            <p className="mt-4 font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
              Permit details should be accurate and checked. Ensure all
              personnel listed hold valid certifications for the specific work
              being performed.
            </p>
            <div className="mt-4 space-y-3">
              {PERMIT_GUIDANCE_ITEMS.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-0.75 flex size-3.75 items-center justify-center rounded-full border border-[#c3cddd] text-[10px] text-brand-secondary">
                    •
                  </span>
                  <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[12px] border border-[#e3e6ec] bg-[#dfe3e8]">
            <div className="h-48 bg-[linear-gradient(135deg,#5f6771_0%,#8c949d_45%,#6d7680_100%)]">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(19,38,81,0.12),rgba(19,38,81,0.32))]" />
              <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[32px_32px]" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="font-['Sansation'] text-[11px] tracking-[1.1px] text-white/70 uppercase">
                    Site Preview
                  </p>
                  <p className="mt-1 font-['Sansation'] text-[13px] leading-[1.6] text-white">
                    Preview panel for the selected work area.
                  </p>
                </div>
                <div className="rounded-full border border-white/30 bg-white/10 px-3 py-1 font-['Sansation'] text-[11px] uppercase tracking-[1px] text-white/80">
                  Reference
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>

      <PermitStepActions
        nextLabel="Next: Hazards & Controls"
        onSaveDraft={onSaveDraft}
        onNext={onNextStep}
      />
    </section>
  );
}
