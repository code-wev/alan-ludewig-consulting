import React from "react";
import { CheckCircle2, ChevronRight, Info } from "lucide-react";
import { COSHH_HAZARD_OPTIONS, type CoshhHazardClassification } from "./types";

interface HazardClassificationStepProps {
  classification: CoshhHazardClassification;
  onFieldChange: <K extends keyof CoshhHazardClassification>(key: K, value: CoshhHazardClassification[K]) => void;
  onToggleHazard: (hazardId: string) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function HazardClassificationStep({
  classification,
  onFieldChange,
  onToggleHazard,
  onSaveDraft,
  onNextStep,
}: HazardClassificationStepProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1664px]">
      {/* Left Column */}
      <div className="flex flex-col gap-8 flex-1 w-full max-w-[1046px]">
        <h2 className="text-[20px] font-bold text-[#132651] leading-[32px]">
          Step 2: Hazard Classification
        </h2>

        {/* Legal Disclaimer Box */}
        <div className="flex flex-col p-4 bg-[#E4EBFE] border border-[rgba(173,198,255,0.5)] rounded-lg gap-4">
          <div className="flex flex-row items-center gap-2">
            <Info className="w-4 h-5 text-[#132651]" />
            <h3 className="text-sm font-bold text-[#132651]">Legal Disclaimer</h3>
          </div>
          <p className="text-sm text-[#132651] leading-[1.6]">
            This tool is for guidance purposes. It is the legal responsibility of the employer to ensure COSHH assessments are accurate and that all controls identified are implemented on site. Refer to the manufacturer&apos;s SDS for technical data.
          </p>
        </div>

        {/* Hazard Grid Section */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-6">
          <div className="flex flex-row items-center gap-2">
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 0L22 19H0L11 0ZM11 4.23L4.23 16H17.77L11 4.23ZM10 13H12V15H10V13ZM10 8H12V12H10V8Z" fill="#132651"/>
            </svg>
            <h3 className="text-[20px] font-bold text-[#132651]">Hazard Classifications</h3>
          </div>

          <div className="flex flex-row flex-wrap gap-[16px]">
            {COSHH_HAZARD_OPTIONS.map((hazard) => {
              const isSelected = classification.selectedHazards.includes(hazard.id);
              return (
                <button
                  key={hazard.id}
                  onClick={() => onToggleHazard(hazard.id)}
                  className={`flex flex-col items-center justify-center py-6 px-4 w-full max-w-[197px] h-[124px] rounded-md border ${
                    isSelected ? "border-[#132651] bg-[#F8F9FA]" : "border-[#E3E6EC] bg-white"
                  } hover:bg-gray-50 transition-colors relative overflow-hidden flex-1 min-w-[150px]`}
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    {hazard.id === "other" ? (
                      <div className="w-[40px] h-[40px] flex items-center justify-center font-bold text-[#A3ACBA] border-2 border-dashed border-[#A3ACBA] rounded">
                        ?
                      </div>
                    ) : (
                      <div className="w-[40px] h-[40px] bg-[#F3F5F8] border border-[#E3E6EC] rounded transform rotate-45 flex items-center justify-center overflow-hidden">
                        {/* Placeholder for red diamond icons */}
                        <div className="w-full h-full border-2 border-red-500 rounded-sm"></div>
                      </div>
                    )}
                    <span className={`text-sm text-center ${isSelected ? "text-[#132651] font-bold" : "text-[#A3ACBA]"}`}>
                      {hazard.title}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="absolute top-2 right-2">
                      <CheckCircle2 className="w-5 h-5 text-[#132651]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Administration Fields */}
        <div className="flex flex-col p-[30px] px-[33px] bg-white border border-[#D0D4DC] rounded-[10px] gap-6">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[977px]">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#132651]">Signal Word</label>
                <input
                  type="text"
                  placeholder="Warning"
                  value={classification.signalWord}
                  onChange={(e) => onFieldChange("signalWord", e.target.value)}
                  className="w-full p-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#132651]">Safety Data Sheet Reference</label>
                <input
                  type="text"
                  placeholder="e.g. SDS-001-ALPHA"
                  value={classification.sdsReference}
                  onChange={(e) => onFieldChange("sdsReference", e.target.value)}
                  className="w-full p-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-[977px]">
              <label className="text-sm text-[#132651]">Hazard Statement (H-Codes)</label>
              <textarea
                placeholder="Identify the hazard statements as listed on the SDS (e.g., H315: Causes skin irritation)"
                value={classification.hazardStatement}
                onChange={(e) => onFieldChange("hazardStatement", e.target.value)}
                className="w-full p-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] min-h-[78px] resize-none"
              />
            </div>

            <div className="flex flex-col gap-2 w-full max-w-[977px]">
              <label className="text-sm text-[#132651]">Precautionary Statement (P-Codes)</label>
              <textarea
                placeholder="Identify precautionary statements (e.g., P280: Wear protective gloves/clothing)"
                value={classification.precautionaryStatement}
                onChange={(e) => onFieldChange("precautionaryStatement", e.target.value)}
                className="w-full p-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] min-h-[78px] resize-none"
              />
            </div>

            <div className="flex flex-col gap-2 w-full max-w-[977px]">
              <label className="text-sm text-[#132651]">Hazard Notes</label>
              <textarea
                placeholder="Add any additional notes regarding the classification or specific chemical behavior..."
                value={classification.hazardNotes}
                onChange={(e) => onFieldChange("hazardNotes", e.target.value)}
                className="w-full p-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] min-h-[78px] resize-none"
              />
            </div>
          </div>

          <div className="flex flex-row items-center gap-4 mt-2">
            <button
              onClick={onSaveDraft}
              className="px-4 py-3 bg-white border border-[#132651] text-[#132651] text-xs font-bold rounded-md hover:bg-gray-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              onClick={onNextStep}
              className="px-4 py-3 bg-[#132651] text-white text-xs font-bold rounded-md hover:bg-[#132651]/90 transition-colors"
            >
              Next: Exposure & Persons at Risk
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: SDS Guidance */}
      <div className="flex flex-col p-6 bg-[#F3F5F8] border border-[#E3E6EC] rounded-xl gap-4 w-full max-w-[506px]">
        <div className="flex flex-row items-center gap-3">
          <Info className="w-5 h-4 text-[#132651]" />
          <h4 className="text-[20px] font-bold text-[#132651]">SDS Guidance</h4>
        </div>
        
        <p className="text-sm text-[#5A6886] leading-[1.6]">
          Use the supplier Safety Data Sheet to confirm classifications. You should typically find this information in Section 2: Hazard Identification of the SDS document.
        </p>

        <div className="flex flex-col p-5 bg-white border border-[#E3E6EC] rounded-md gap-1 mt-2">
          <h5 className="text-[20px] font-bold text-[#132651] mb-2">CHECKLIST</h5>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <CheckCircle2 className="w-[13px] h-[13px] text-[#5A6886]" />
              <span className="text-base text-[#5A6886]">Compare pictograms</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <CheckCircle2 className="w-[13px] h-[13px] text-[#5A6886]" />
              <span className="text-base text-[#5A6886]">Verify H & P codes</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <CheckCircle2 className="w-[13px] h-[13px] text-[#5A6886]" />
              <span className="text-base text-[#5A6886]">Check Signal Word</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E3E6EC] pt-5 mt-2">
          <div className="flex flex-col items-center justify-center bg-white border border-[#C5C6D0] rounded-sm relative overflow-hidden">
            {/* Fake SDS Preview Layout */}
            <div className="w-full h-[150px] bg-[#f9f9f9] flex flex-col p-4 gap-2">
              <div className="w-1/3 h-4 bg-gray-200"></div>
              <div className="w-full h-2 bg-gray-200"></div>
              <div className="w-5/6 h-2 bg-gray-200"></div>
              <div className="flex flex-row gap-2 mt-4">
                <div className="w-8 h-8 bg-gray-300 transform rotate-45 m-2"></div>
                <div className="w-8 h-8 bg-gray-300 transform rotate-45 m-2"></div>
              </div>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgba(0,17,55,0.1)] flex items-center justify-center">
              <div className="px-3 py-1 bg-white border border-[#E3E6EC] rounded-xl">
                <span className="text-sm text-[#132651]">Preview SDS Layout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
