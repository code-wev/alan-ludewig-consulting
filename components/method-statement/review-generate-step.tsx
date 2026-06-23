"use client";

import React from "react";
import { Edit2 } from "lucide-react";
import type { MethodStatementDraft, MethodStatementFinalApproval, MethodStatementStepId } from "./types";

interface ReviewGenerateStepProps {
  draft: MethodStatementDraft;
  onUpdateFinalApproval: <Key extends keyof MethodStatementFinalApproval>(key: Key, value: MethodStatementFinalApproval[Key]) => void;
  onSaveDraft: () => void;
  onGeneratePdf: () => void;
  onSubmitReview: () => void;
  onEditStep: (stepId: MethodStatementStepId) => void;
}

export function ReviewGenerateStep({
  draft,
  onUpdateFinalApproval,
  onSaveDraft,
  onGeneratePdf,
  onSubmitReview,
  onEditStep,
}: ReviewGenerateStepProps) {
  const { projectDetails, scopeOfWorks, sequenceOfWorks, plantTools, ppeEmergency, finalApproval } = draft;

  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto pb-10">
      <div className="flex items-center gap-3">
        <h2 className="text-[20px] font-bold text-[#132651] leading-[32px]">
          Step 6: Review &amp; Generate
        </h2>
      </div>

      {/* Grid of Review Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        
        {/* Card 1: Project Details */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
          <div className="flex justify-between items-center pb-2 border-b border-[#E3E6EC]">
            <h3 className="text-base font-bold text-[#132651]">Project Details</h3>
            <button onClick={() => onEditStep("project-details")} className="flex items-center gap-1 text-[#132651] hover:underline">
              <Edit2 className="w-3 h-3" />
              <span className="text-xs font-semibold">Edit</span>
            </button>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="grid grid-cols-3 gap-2">
              <span className="text-[#5A6886] font-semibold">PROJECT:</span>
              <span className="col-span-2 text-brand-primary font-bold">{projectDetails.projectName || "N/A"}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="text-[#5A6886] font-semibold">CLIENT:</span>
              <span className="col-span-2 text-brand-primary">{projectDetails.clientContractor || "N/A"}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="text-[#5A6886] font-semibold">ADDRESS:</span>
              <span className="col-span-2 text-brand-primary">{projectDetails.siteAddress || "N/A"}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="text-[#5A6886] font-semibold">ACTIVITY:</span>
              <span className="col-span-2 text-brand-primary">{projectDetails.workActivity || "N/A"}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="text-[#5A6886] font-semibold">START:</span>
              <span className="col-span-2 text-brand-primary">{projectDetails.plannedStartDate || "N/A"}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="text-[#5A6886] font-semibold">DURATION:</span>
              <span className="col-span-2 text-brand-primary">{projectDetails.estimatedDuration || "N/A"}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="text-[#5A6886] font-semibold">OPERATIVES:</span>
              <span className="col-span-2 text-brand-primary">{projectDetails.numberOfOperatives || "N/A"}</span>
            </div>
          </div>
        </div>

        {/* Card 2: Scope of Works */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
          <div className="flex justify-between items-center pb-2 border-b border-[#E3E6EC]">
            <h3 className="text-base font-bold text-[#132651]">Scope of Works</h3>
            <button onClick={() => onEditStep("scope-of-works")} className="flex items-center gap-1 text-[#132651] hover:underline">
              <Edit2 className="w-3 h-3" />
              <span className="text-xs font-semibold">Edit</span>
            </button>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-[#5A6886] font-semibold">Description of Works:</span>
              <p className="text-brand-primary leading-relaxed">{scopeOfWorks.descriptionOfWorks || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#5A6886] font-semibold">Work Area / Location:</span>
              <p className="text-brand-primary leading-relaxed">{scopeOfWorks.workAreaLocation || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#5A6886] font-semibold">Access / Egress Arrangements:</span>
              <p className="text-brand-primary leading-relaxed">{scopeOfWorks.accessEgress || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#5A6886] font-semibold">Exclusions / Limitations:</span>
              <p className="text-brand-primary leading-relaxed">{scopeOfWorks.exclusionsLimitations || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#5A6886] font-semibold">Site-Specific Notes:</span>
              <p className="text-brand-primary leading-relaxed">{scopeOfWorks.siteSpecificNotes || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Card 3: Sequence of Works */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4 md:col-span-2">
          <div className="flex justify-between items-center pb-2 border-b border-[#E3E6EC]">
            <h3 className="text-base font-bold text-[#132651]">Sequence of Works</h3>
            <button onClick={() => onEditStep("sequence-of-works")} className="flex items-center gap-1 text-[#132651] hover:underline">
              <Edit2 className="w-3 h-3" />
              <span className="text-xs font-semibold">Edit</span>
            </button>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            {sequenceOfWorks.steps.map((step, idx) => (
              <div key={step.id} className="p-3 border border-[#E3E6EC] rounded-[6px] bg-[#fafbfd]">
                <span className="font-bold text-[#132651]">Step {idx + 1}: {step.title || "Untitled Step"}</span>
                <p className="text-[#5A6886] mt-1 leading-relaxed">{step.description || "No description provided."}</p>
              </div>
            ))}
            {sequenceOfWorks.steps.length === 0 && (
              <span className="text-brand-secondary">No steps defined.</span>
            )}
          </div>
        </div>

        {/* Card 4: Plant &amp; Tools */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
          <div className="flex justify-between items-center pb-2 border-b border-[#E3E6EC]">
            <h3 className="text-base font-bold text-[#132651]">Plant &amp; Tools</h3>
            <button onClick={() => onEditStep("plant-tools")} className="flex items-center gap-1 text-[#132651] hover:underline">
              <Edit2 className="w-3 h-3" />
              <span className="text-xs font-semibold">Edit</span>
            </button>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-[#5A6886] font-semibold">Plant / Heavy Machinery:</span>
              <p className="text-brand-primary">{plantTools.selectedPlant.join(", ") || "None selected"}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#5A6886] font-semibold">Power Tools:</span>
              <p className="text-brand-primary">{plantTools.selectedPowerTools.join(", ") || "None selected"}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#5A6886] font-semibold">Hand Tools:</span>
              <p className="text-brand-primary">{plantTools.selectedHandTools.join(", ") || "None selected"}</p>
            </div>
            {plantTools.customItems.length > 0 && (
              <div className="flex flex-col gap-1">
                <span className="text-[#5A6886] font-semibold">Other:</span>
                <p className="text-brand-primary">{plantTools.customItems.join(", ")}</p>
              </div>
            )}
          </div>
        </div>

        {/* Card 5: PPE &amp; Emergency */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
          <div className="flex justify-between items-center pb-2 border-b border-[#E3E6EC]">
            <h3 className="text-base font-bold text-[#132651]">PPE &amp; Emergency</h3>
            <button onClick={() => onEditStep("ppe-emergency")} className="flex items-center gap-1 text-[#132651] hover:underline">
              <Edit2 className="w-3 h-3" />
              <span className="text-xs font-semibold">Edit</span>
            </button>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-[#5A6886] font-semibold">Required PPE:</span>
              <p className="text-brand-primary font-bold">{ppeEmergency.selectedPpe.join(", ") || "None selected"}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#5A6886] font-semibold">First Aid Arrangements:</span>
              <p className="text-brand-primary">{ppeEmergency.firstAid || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#5A6886] font-semibold">Evacuation &amp; Rescue:</span>
              <p className="text-brand-primary">{ppeEmergency.emergencyProcedures || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#5A6886] font-semibold">Hospital &amp; First Aider:</span>
              <p className="text-brand-primary">
                First Aider: {ppeEmergency.firstAider || "N/A"} | Hospital: {ppeEmergency.nearestHospital || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Approval &amp; Declaration */}
      <div className="flex flex-col p-8 bg-white border border-[#E3E6EC] rounded-xl gap-6">
        <div className="flex items-center gap-2">
          <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 2H2.5C1.4 2 0.5 2.9 0.5 4V16C0.5 17.1 1.4 18 2.5 18H18.5C19.6 18 20.5 17.1 20.5 16V4C20.5 2.9 19.6 2 18.5 2ZM18.5 16H2.5V4H18.5V16ZM14.5 13H6.5V14H14.5V13ZM16.5 10H4.5V11H16.5V10ZM16.5 7H4.5V8H16.5V7Z" fill="#132651"/>
          </svg>
          <h3 className="text-[20px] font-bold text-[#132651]">Final Approval &amp; Declaration</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651] font-semibold">Assessor Name</label>
              <input
                type="text"
                value={finalApproval.assessorName}
                onChange={(e) => onUpdateFinalApproval("assessorName", e.target.value)}
                className="w-full px-4 py-3 border border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651] font-semibold">Position</label>
              <input
                type="text"
                value={finalApproval.position}
                onChange={(e) => onUpdateFinalApproval("position", e.target.value)}
                placeholder="Senior Operations Manager"
                className="w-full px-4 py-3 border border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651] font-semibold">Date of Review</label>
              <input
                type="date"
                value={finalApproval.assessmentDate}
                onChange={(e) => onUpdateFinalApproval("assessmentDate", e.target.value)}
                className="w-full px-4 py-3 border border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-[#132651] font-semibold">Digital Signature</label>
            <div className="flex flex-col items-center justify-center w-full h-[128px] border border-[#E3E6EC] border-dashed rounded-[4px] relative overflow-hidden bg-[#F8FAFC]/50">
              {finalApproval.signatureImage ? (
                <img src={finalApproval.signatureImage} alt="Signature" className="object-contain w-full h-full p-2" />
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[14px] text-[#5A6886] opacity-50">Sign here or upload image</span>
                  <button className="h-[34px] px-4 flex items-center justify-center bg-white border border-[#132651] text-[#132651] text-[12px] font-bold rounded-[6px]">
                    Upload
                  </button>
                </div>
              )}
            </div>
            <span className="text-[12px] text-[#5A6886] mt-1">
              By signing, you confirm that this Method Statement details a safe system of work to be followed by all operatives on site.
            </span>
          </div>
        </div>

        {/* Declaration check box */}
        <div className="flex flex-row items-start p-4 bg-[#E4EBFE] border border-[rgba(173,198,255,0.5)] rounded-[8px] gap-4">
          <input
            type="checkbox"
            className="w-5 h-5 rounded border-[#E3E6EC] text-[#132651] focus:ring-[#132651] mt-0.5"
            checked={finalApproval.isDeclared}
            onChange={(e) => onUpdateFinalApproval("isDeclared", e.target.checked)}
          />
          <p className="text-[14px] text-[#132651] leading-[1.6]">
            I hereby declare that this Method Statement has been prepared in accordance with the relevant health and safety standards. I confirm that all nominated employees and operatives will be fully briefed on the procedures and control measures detailed herein before commencing the work activity.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4 pt-2">
        <button
          onClick={onSaveDraft}
          className="h-10 px-5 flex items-center justify-center bg-white border border-[#132651] text-[#132651] text-sm font-bold rounded-[6px] hover:bg-gray-50 transition-colors"
        >
          Save Draft
        </button>
        <button
          onClick={onGeneratePdf}
          className="h-10 px-5 flex items-center justify-center bg-[#132651] text-white text-sm font-bold rounded-[6px] hover:bg-[#132651]/90 transition-colors"
        >
          Generate PDF
        </button>
        <button
          onClick={onSubmitReview}
          className="h-10 px-5 flex items-center justify-center bg-white border border-[#132651] text-[#132651] text-sm font-bold rounded-[6px] hover:bg-gray-50 transition-colors"
        >
          Submit for Review
        </button>
      </div>
    </div>
  );
}
