"use client";

import { Check, AlertTriangle, FileText, Download, ShieldCheck, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type RiskAssessmentDraft } from "./types";
import { cn } from "@/lib/utils";

interface StepReviewGenerateProps {
  draft: RiskAssessmentDraft;
  onSaveDraft: () => void;
  onPublish: () => void;
  onPrevStep: () => void;
}

export function StepReviewGenerate({
  draft,
  onSaveDraft,
  onPublish,
  onPrevStep,
}: StepReviewGenerateProps) {
  const { jobDetails, workTypeId, tasksHazards, controlsPpe, methodStatement, emergencyDetails } = draft;

  // Validation Checks
  const checks = [
    { label: "Company details provided", passed: !!jobDetails.companyName && !!jobDetails.companyAddress },
    { label: "Project & Site details set", passed: !!jobDetails.projectName && !!jobDetails.siteAddress },
    { label: "Primary Work Activity selected", passed: !!workTypeId },
    { label: "Assessed Hazards list generated", passed: tasksHazards.assessedHazards.length > 0 },
    { label: "Emergency Contact details filled", passed: !!emergencyDetails.emergencyContactNumber },
  ];

  const allPassed = checks.every((c) => c.passed);

  return (
    <div className="space-y-8 font-sans w-full">
      {/* Step Header */}
      <div className="space-y-1">
        <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">
          Step 7 — Review &amp; Generate
        </h2>
        <p className="text-[14px] text-brand-secondary leading-[1.6]">
          Review compliance checks and inspect your final risk assessment document preview before publishing.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        {/* Left Side: Paper-Like Document Preview (A4 Mockup) */}
        <section className="xl:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[16px] font-bold text-brand-primary">Document Review</h3>
            <span className="text-[12px] text-brand-secondary">A4 Export Sheet Layout</span>
          </div>

          <div className="rounded-[12px] border border-[#e3e6ec] bg-[#fafbfd] p-6.5 flex justify-center">
            {/* Sheet Page */}
            <article className="w-full max-w-[800px] bg-white border border-[#d7dce5] shadow-lg rounded-sm p-8 space-y-8 text-brand-primary min-h-[900px] text-[12px]">
              {/* Paper Header */}
              <header className="flex justify-between items-start border-b border-[#e3e6ec] pb-5">
                <div className="space-y-1">
                  <h4 className="text-[18px] font-black tracking-tight text-brand-primary">RISK ASSESSMENT</h4>
                  <span className="text-[11px] font-bold text-brand-secondary uppercase tracking-wider">
                    REF: RA-{new Date().getFullYear()}-0894
                  </span>
                </div>
                <div className="text-right">
                  {jobDetails.companyLogoUrl ? (
                    <img src={jobDetails.companyLogoUrl} alt="Logo" className="h-10 object-contain ml-auto" />
                  ) : (
                    <div className="h-10 w-28 bg-[#f3f5f8] rounded flex items-center justify-center text-[10px] text-brand-secondary font-bold border border-[#e3e6ec]">
                      {jobDetails.companyName || "COMPANY LOGO"}
                    </div>
                  )}
                  <p className="font-bold text-[11px] mt-1">{jobDetails.companyName || "Global Safety Corp"}</p>
                </div>
              </header>

              {/* Grid 1: Project Details */}
              <section className="grid gap-4 sm:grid-cols-3 bg-[#fafbfd] border border-[#e3e6ec] p-4 rounded-lg">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-brand-secondary uppercase block">Project / Site</span>
                  <span className="font-bold text-brand-primary leading-tight block">
                    {jobDetails.projectName || "T5 - Structural Steel"}
                  </span>
                  <span className="text-brand-secondary text-[11px] block">{jobDetails.siteAddress || "Site Location"}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-brand-secondary uppercase block">Assessment Title</span>
                  <span className="font-bold text-brand-primary block">
                    {workTypeId ? `${workTypeId} Assessment` : "Site Work Safety Assessment"}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-brand-secondary uppercase block">Contact Details</span>
                  <span className="text-brand-primary block">{jobDetails.contactName || "Alan Ludewig"}</span>
                  <span className="text-brand-secondary text-[10px] block">{jobDetails.emailAddress || "email@address.com"}</span>
                </div>
              </section>

              {/* Description */}
              <section className="space-y-1.5">
                <h5 className="text-[11px] font-bold text-brand-secondary uppercase tracking-wider">Work Activity Description</h5>
                <p className="text-brand-primary leading-[1.6]">
                  {methodStatement.sequenceOfOperations || "Sequence of tasks description details will render here."}
                </p>
              </section>

              {/* Hazard Table */}
              <section className="space-y-3">
                <h5 className="text-[11px] font-bold text-brand-secondary uppercase tracking-wider">1. Hazards &amp; Control Measures</h5>
                <div className="overflow-x-auto border border-[#e3e6ec] rounded-lg">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#f3f5f8] border-b border-[#e3e6ec] text-[10px] text-brand-primary">
                        <th className="py-2.5 px-4 font-bold">Hazard Identified</th>
                        <th className="py-2.5 px-4 font-bold w-[120px]">Persons at Risk</th>
                        <th className="py-2.5 px-4 font-bold w-[90px]">Risk Rating</th>
                        <th className="py-2.5 px-4 font-bold">Implemented Controls</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasksHazards.assessedHazards.map((row, i) => (
                        <tr key={i} className="border-b border-[#f3f5f8] last:border-0 text-[11px]">
                          <td className="py-3 px-4 font-bold">{row.hazard}</td>
                          <td className="py-3 px-4">{row.personsAtRisk}</td>
                          <td className="py-3 px-4">
                            <span className={cn(
                              "inline-block px-2 py-0.5 rounded text-[10px] font-bold",
                              row.initialRisk === "High" ? "bg-red-100 text-red-800" :
                              row.initialRisk === "Medium" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                            )}>
                              {row.initialRisk}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-brand-secondary leading-[1.5]">{row.suggestedControls}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* PPE Requirements */}
              <section className="space-y-3">
                <h5 className="text-[11px] font-bold text-brand-secondary uppercase tracking-wider">2. PPE Requirements</h5>
                <div className="flex flex-wrap gap-2">
                  {controlsPpe.selectedPpe.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded bg-[#f3f5f8] border border-[#e3e6ec] text-brand-primary text-[11px] font-medium"
                    >
                      {item}
                    </span>
                  ))}
                  {controlsPpe.selectedPpe.length === 0 && (
                    <span className="text-brand-secondary text-[11px] italic">No PPE selected</span>
                  )}
                </div>
              </section>

              {/* Emergency Arrangements */}
              <section className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <h5 className="text-[11px] font-bold text-brand-secondary uppercase tracking-wider">3. Emergency Assembly Point</h5>
                  <p className="text-brand-primary">{emergencyDetails.emergencyAssemblyPoint || "TBD"}</p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-[11px] font-bold text-brand-secondary uppercase tracking-wider">4. Emergency Contact Number</h5>
                  <p className="text-brand-primary">{emergencyDetails.emergencyContactNumber || "TBD"}</p>
                </div>
              </section>

              {/* Footer / Signatures */}
              <footer className="grid gap-6 sm:grid-cols-2 border-t border-[#e3e6ec] pt-6 text-[10px] text-brand-secondary">
                <div className="space-y-2">
                  <p>Prepared By: <span className="font-bold text-brand-primary">{jobDetails.preparedBy || "Alan Ludewig"}</span></p>
                  <div className="h-10 w-full border-b border-[#d7dce5] italic text-[#8a96ab] pt-5">Signature</div>
                </div>
                <div className="space-y-2">
                  <p>Approved By: <span className="font-bold text-brand-primary">{jobDetails.approvedBy || "Client Manager"}</span></p>
                  <div className="h-10 w-full border-b border-[#d7dce5] italic text-[#8a96ab] pt-5">Signature</div>
                </div>
              </footer>
            </article>
          </div>
        </section>

        {/* Right Side: Compliance & Publishing Panel */}
        <section className="xl:col-span-1 space-y-6">
          {/* Document Status */}
          <div className="rounded-[12px] border border-[#e3e6ec] bg-white p-5 space-y-3">
            <h4 className="text-[14px] font-bold text-brand-primary">Document Status</h4>
            <div className="flex items-center gap-2">
              <span className="inline-flex rounded-full bg-[#fef3c7] px-2.25 py-0.5 text-[12px] font-bold text-[#92400e]">
                Draft
              </span>
              <span className="text-[11px] text-brand-secondary">Not Published Yet</span>
            </div>
            <p className="text-[12px] text-brand-secondary leading-[1.6]">
              This document is visible only to internal team members until published.
            </p>
          </div>

          {/* Compliance Check card */}
          <div className="rounded-[12px] border border-[#e3e6ec] bg-white p-5 space-y-4">
            <h4 className="text-[14px] font-bold text-brand-primary">Compliance Check</h4>
            
            <div className="space-y-3">
              {checks.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  {item.passed ? (
                    <Check className="size-4 text-[#16a34a] mt-0.5 shrink-0" />
                  ) : (
                    <AlertTriangle className="size-4 text-amber-500 mt-0.5 shrink-0" />
                  )}
                  <span className={cn(
                    "text-[13px]",
                    item.passed ? "text-brand-primary" : "text-brand-secondary font-medium"
                  )}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <footer className="flex items-center justify-between border-t border-[#e3e6ec] pt-6">
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onPrevStep}
            className="h-8.5 px-4 rounded-[6px] border-brand-primary bg-white text-[12px] font-bold text-brand-primary shadow-none hover:bg-[#fafbfd]"
          >
            Back
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onSaveDraft}
            className="h-8.5 px-4 rounded-[6px] border-[#d7dce5] bg-white text-[12px] font-bold text-brand-secondary shadow-none hover:bg-[#fafbfd]"
          >
            Save Draft
          </Button>
        </div>
        <Button
          type="button"
          onClick={onPublish}
          disabled={!allPassed}
          className="h-8.5 px-4 rounded-[6px] bg-[#00bc7d] text-[12px] font-bold text-white hover:bg-[#00bc7d]/95 flex items-center gap-2 disabled:opacity-50"
        >
          <ShieldCheck className="size-4.5" />
          Publish &amp; Export
        </Button>
      </footer>
    </div>
  );
}
