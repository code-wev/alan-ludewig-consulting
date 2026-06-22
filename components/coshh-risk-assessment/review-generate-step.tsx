import React from "react";
import { Edit2, CheckCircle2 } from "lucide-react";
import {
  type CoshhDraft,
  type CoshhFinalApproval,
  COSHH_HAZARD_OPTIONS,
} from "./types";

interface ReviewGenerateStepProps {
  draft: CoshhDraft;
  onUpdateFinalApproval: <Key extends keyof CoshhFinalApproval>(key: Key, value: CoshhFinalApproval[Key]) => void;
  onSaveDraft: () => void;
  onGeneratePdf: () => void;
  onSubmitReview: () => void;
  onEditStep: (stepId: string) => void;
}

export function ReviewGenerateStep({
  draft,
  onUpdateFinalApproval,
  onSaveDraft,
  onGeneratePdf,
  onSubmitReview,
  onEditStep,
}: ReviewGenerateStepProps) {
  const { substanceDetails, hazardClassification, exposurePersons, controlMeasures, ppeStorage, finalApproval } = draft;

  const selectedHazardsFull = COSHH_HAZARD_OPTIONS.filter((h) => hazardClassification.selectedHazards.includes(h.id));

  return (
    <div className="flex flex-col gap-[32px] w-full max-w-[1584px] mx-auto pb-10">
      <div className="flex flex-row items-center gap-3">
        <h2 className="text-[20px] font-bold text-[#132651] leading-[32px]">
          Step 6: Review & Generate
        </h2>
      </div>

      {/* 2-Column Grid of Review Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Card 1: Substance Details */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
          <div className="flex flex-row justify-between items-center pb-2 border-b border-[#E3E6EC]">
            <h3 className="text-[20px] font-bold text-[#132651]">Substance Details</h3>
            <button onClick={() => onEditStep("substance-details")} className="flex flex-row items-center gap-1 text-[#132651] hover:underline">
              <Edit2 className="w-3 h-3" />
              <span className="text-sm">Edit</span>
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="text-base text-[#45464F] uppercase tracking-wide font-['Hanken_Grotesk']">NAME:</span>
              </div>
              <div className="flex flex-col col-span-2">
                <span className="text-base font-semibold text-[#191C1F] font-['Hanken_Grotesk']">{substanceDetails.substanceName || "Industrial Grade Acetone"}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="text-base text-[#45464F] uppercase tracking-wide font-['Hanken_Grotesk']">TASK:</span>
              </div>
              <div className="flex flex-col col-span-2">
                <span className="text-base text-[#191C1F] font-['Hanken_Grotesk']">{substanceDetails.taskActivity || "Surface degreasing prior to adhesive application."}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="text-base text-[#45464F] uppercase tracking-wide font-['Hanken_Grotesk']">LOCATION:</span>
              </div>
              <div className="flex flex-col col-span-2">
                <span className="text-base text-[#191C1F] font-['Hanken_Grotesk']">{substanceDetails.location || "Workshop Unit 4, Spray Booth Area."}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Hazard Classification */}
        <div className="flex flex-col p-[24px] justify-between items-stretch bg-white border border-[#E3E6EC] rounded-[12px] h-[227px]">
          <div className="flex flex-row justify-between items-center pb-[8px] border-b border-[#E3E6EC]">
            <h3 className="text-[20px] font-bold text-[#132651] leading-[1.6em]">Hazard Classification</h3>
            <button onClick={() => onEditStep("hazard-classification")} className="flex flex-row items-center gap-1 text-[#132651] hover:underline">
              <Edit2 className="w-[12px] h-[12px]" />
              <span className="text-[14px] leading-[1.6em]">Edit</span>
            </button>
          </div>
          <div className="flex flex-row overflow-x-auto gap-[16px] w-full h-[121px] items-start">
            {selectedHazardsFull.length > 0 ? (
              selectedHazardsFull.map((hazard) => (
                <div key={hazard.id} className="flex flex-col items-center justify-center p-[8px] border border-[#E3E6EC] rounded-[6px] w-[230px] h-[115px] bg-white shrink-0 mt-[4px]">
                  {hazard.iconPath ? (
                     <div className="w-[40px] h-[40px] flex items-center justify-center overflow-hidden">
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                       <img src={hazard.iconPath} alt={hazard.title} className="max-w-full max-h-full object-contain" />
                     </div>
                  ) : (
                     <div className="w-[40px] h-[40px] bg-gray-200 rounded-[6px]" />
                  )}
                  <div className="pt-[4px] flex flex-col items-center">
                    <span className="text-[12px] text-[#132651] text-center leading-[1.6em]">
                      {hazard.title}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <span className="text-[14px] text-[#5A6886] mt-[4px]">No hazards selected.</span>
            )}
          </div>
        </div>

        {/* Card 3: Exposure & Persons */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
          <div className="flex flex-row justify-between items-center pb-2 border-b border-[#E3E6EC]">
            <h3 className="text-[20px] font-bold text-[#132651]">Exposure & Persons</h3>
            <button onClick={() => onEditStep("exposure-persons")} className="flex flex-row items-center gap-1 text-[#132651] hover:underline">
              <Edit2 className="w-3 h-3" />
              <span className="text-sm">Edit</span>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#5A6886]">Exposure Routes:</span>
              <div className="flex flex-row flex-wrap gap-2">
                {exposurePersons.selectedExposureRoutes.length > 0 ? (
                  exposurePersons.selectedExposureRoutes.map((route) => (
                    <div key={route} className="px-2 py-1 bg-[#F3F5F8] rounded-sm text-xs text-[#5A6886] capitalize">
                      {route.replace("-", " ")}
                    </div>
                  ))
                ) : (
                  <span className="text-xs text-gray-400">None selected</span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#5A6886]">Persons at Risk:</span>
              <div className="flex flex-row flex-wrap gap-2">
                {exposurePersons.selectedPersonsAtRisk.length > 0 ? (
                  exposurePersons.selectedPersonsAtRisk.map((person) => (
                    <div key={person} className="px-2 py-1 bg-[#DFE3EB] rounded-sm text-xs text-[#5A6886] capitalize">
                      {person.replace("-", " ")}
                    </div>
                  ))
                ) : (
                  <span className="text-xs text-gray-400">None selected</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Control Measures */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
          <div className="flex flex-row justify-between items-center pb-2 border-b border-[#E3E6EC]">
            <h3 className="text-[20px] font-bold text-[#132651]">Engineering Controls</h3>
            <button onClick={() => onEditStep("control-measures")} className="flex flex-row items-center gap-1 text-[#132651] hover:underline">
              <Edit2 className="w-3 h-3" />
              <span className="text-sm">Edit</span>
            </button>
          </div>
          <div className="flex flex-col gap-[7.5px] mt-2">
             {controlMeasures.selectedSuggestedControls.length > 0 ? (
                controlMeasures.selectedSuggestedControls.map((control) => (
                  <div key={control} className="flex flex-row items-center gap-[15px]">
                     <span className="text-sm text-[#5A6886] capitalize leading-[1.6em]">{control.replace("-", " ")}</span>
                  </div>
                ))
             ) : (
                <span className="text-sm text-[#5A6886]">No controls specified.</span>
             )}
          </div>
        </div>

        {/* Card 5: PPE, Storage & Emergency */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4 lg:col-span-2">
          <div className="flex flex-row justify-between items-center pb-2 border-b border-[#E3E6EC]">
            <h3 className="text-[20px] font-bold text-[#132651]">PPE, Storage & Emergency</h3>
            <button onClick={() => onEditStep("ppe-storage")} className="flex flex-row items-center gap-1 text-[#132651] hover:underline">
              <Edit2 className="w-3 h-3" />
              <span className="text-sm">Edit</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            <div className="flex flex-col gap-2">
              <span className="text-base text-[#5A6886]">Required PPE</span>
              <div className="flex flex-row flex-wrap gap-2">
                {ppeStorage.selectedPpe.length > 0 ? (
                  ppeStorage.selectedPpe.map((ppe) => (
                    <span key={ppe} className="text-sm text-[#132651] capitalize font-medium">{ppe.replace("-", " ")}</span>
                  ))
                ) : (
                  <span className="text-sm text-gray-400">None</span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-base text-[#5A6886]">Storage Requirements</span>
              <span className="text-sm text-[#5A6886]">
                {ppeStorage.storageLocation || ppeStorage.containerRequirements 
                  ? `${ppeStorage.storageLocation} ${ppeStorage.containerRequirements}` 
                  : '"Store in original containers in a cool, dry, locked flammable safety cabinet."'}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-base text-[#5A6886]">Emergency Action</span>
              <span className="text-sm text-[#5A6886]">
                {ppeStorage.firstAid || ppeStorage.spillProcedure
                  ? `${ppeStorage.firstAid} ${ppeStorage.spillProcedure}`
                  : "Flush eyes/skin with water. In case of spill, use inert absorbent. Notify H&S Lead."}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Summary Preview Table */}
      <div className="flex flex-col bg-white border-[1.5px] border-[#E3E6EC] rounded-xl w-full overflow-hidden">
        <div className="flex flex-row justify-between items-center p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] z-10 relative">
          <h2 className="text-[24px] font-bold text-[#132651] leading-[32px] font-['Inter']">Assessment Summary Preview</h2>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left border-collapse">
            <thead>
              <tr className="bg-[#D6E9FF] border-b-[1.5px] border-[#E3E6EC]">
                <th className="py-2.5 px-5 text-[14px] font-bold text-[#132651]">Substance/Task</th>
                <th className="py-2.5 px-5 text-[14px] font-bold text-[#132651]">Exposure Route</th>
                <th className="py-2.5 px-5 text-[14px] font-bold text-[#132651]">Persons at Risk</th>
                <th className="py-2.5 px-5 text-[14px] font-bold text-[#132651]">Initial Risk</th>
                <th className="py-2.5 px-5 text-[14px] font-bold text-[#132651]">Control Measures</th>
                <th className="py-2.5 px-5 text-[14px] font-bold text-[#132651]">Residual Risk</th>
                <th className="py-2.5 px-5 text-[14px] font-bold text-[#132651]">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Mock row matching Figma text perfectly */}
              <tr className="border-b-[1.5px] border-[#E3E6EC]">
                <td className="py-5 px-5 text-[14px] text-[#5A6886]">{substanceDetails.substanceName || "Acetone/Degreasing"}</td>
                <td className="py-5 px-5 text-[14px] text-[#132651]">
                  {exposurePersons.selectedExposureRoutes.length > 0 ? exposurePersons.selectedExposureRoutes.join(", ") : "Inhalation, Skin"}
                </td>
                <td className="py-5 px-5 text-[14px] text-[#5A6886]">
                  {exposurePersons.selectedPersonsAtRisk.length > 0 ? exposurePersons.selectedPersonsAtRisk.join(", ") : "Emp,Cont"}
                </td>
                <td className="py-5 px-5">
                  <span className="text-[14px] text-[#D92D20]">High</span>
                </td>
                <td className="py-5 px-5 text-[14px] text-[#5A6886]">
                  M. Thompson
                </td>
                <td className="py-5 px-5 text-[14px] text-[#5A6886]">Low</td>
                <td className="py-5 px-5">
                  <div className="inline-flex items-center justify-center px-[9px] py-[2px] bg-[#00BC7D] rounded-[6px]">
                    <span className="text-[12px] text-white">Compliant</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Final Approval Section */}
      <div className="flex flex-col p-6 lg:p-8 bg-white border border-[#E3E6EC] rounded-xl gap-6">
        <div className="flex flex-row items-center gap-2">
          <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 2H2.5C1.4 2 0.5 2.9 0.5 4V16C0.5 17.1 1.4 18 2.5 18H18.5C19.6 18 20.5 17.1 20.5 16V4C20.5 2.9 19.6 2 18.5 2ZM18.5 16H2.5V4H18.5V16ZM14.5 13H6.5V14H14.5V13ZM16.5 10H4.5V11H16.5V10ZM16.5 7H4.5V8H16.5V7Z" fill="#132651"/>
          </svg>
          <h3 className="text-[20px] font-bold text-[#132651]">Final Approval & Declaration</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651]">Assessor Name</label>
              <input
                type="text"
                value={finalApproval.assessorName}
                onChange={(e) => onUpdateFinalApproval("assessorName", e.target.value)}
                className="w-full h-[51px] px-4 py-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651]">Position</label>
              <input
                type="text"
                value={finalApproval.position}
                onChange={(e) => onUpdateFinalApproval("position", e.target.value)}
                placeholder="Senior Safety Consultant"
                className="w-full h-[51px] px-4 py-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651]">Date of Assessment</label>
              <input
                type="date"
                value={finalApproval.assessmentDate}
                onChange={(e) => onUpdateFinalApproval("assessmentDate", e.target.value)}
                className="w-full h-[51px] px-4 py-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-[#132651]">Digital Signature</label>
            <div className="flex flex-col items-center justify-center w-full h-[128px] border-2 border-[#E3E6EC] border-dashed rounded-[4px] relative overflow-hidden bg-[#F8FAFC]/50">
              {finalApproval.signatureImage ? (
                 // eslint-disable-next-line @next/next/no-img-element
                 <img src={finalApproval.signatureImage} alt="Signature" className="object-contain w-full h-full p-2" />
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <span className="text-[16px] text-[#5A6886] opacity-50">Sign here or upload image</span>
                  <button className="h-[34px] px-4 flex items-center justify-center bg-white border border-[#132651] text-[#132651] text-[12px] font-bold rounded-[6px]">
                    Upload
                  </button>
                </div>
              )}
            </div>
            <span className="text-[12px] text-[#5A6886] mt-1">
              By signing, you confirm that the above assessment is accurate and all control measures have been implemented.
            </span>
          </div>
        </div>

        {/* Info Box / Declaration */}
        <div className="flex flex-row items-start p-[16px] bg-[#E4EBFE] border border-[rgba(173,198,255,0.5)] rounded-[8px] gap-4">
          <input
            type="checkbox"
            className="w-5 h-5 rounded border-[#E3E6EC] text-[#132651] focus:ring-[#132651] mt-0.5"
            checked={finalApproval.isDeclared}
            onChange={(e) => onUpdateFinalApproval("isDeclared", e.target.checked)}
          />
          <p className="text-[14px] text-[#132651] leading-[1.6]">
            I hereby declare that this COSHH Assessment has been conducted with due diligence and reflects the actual hazards and risks present in the workplace. I confirm that all nominated employees have been briefed on these findings and the required control measures.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row items-center gap-4 pt-2">
        <button
          onClick={onSaveDraft}
          className="h-[34px] px-4 flex items-center justify-center bg-white border border-[#132651] text-[#132651] text-[12px] font-bold rounded-[6px] hover:bg-gray-50 transition-colors"
        >
          Save Draft
        </button>
        <button
          onClick={onGeneratePdf}
          className="h-[34px] px-4 flex items-center justify-center bg-[#132651] text-white text-[12px] font-bold rounded-[6px] hover:bg-[#132651]/90 transition-colors"
        >
          Generate PDF
        </button>
        <button
          onClick={onSubmitReview}
          className="h-[34px] px-4 flex items-center justify-center bg-white border border-[#132651] text-[#132651] text-[12px] font-bold rounded-[6px] hover:bg-gray-50 transition-colors"
        >
          Submit for Review
        </button>
      </div>
    </div>
  );
}
