import React from "react";
import { ChevronDown, UploadCloud } from "lucide-react";
import type { CoshhSubstanceDetails } from "./types";

interface SubstanceDetailsStepProps {
  details: CoshhSubstanceDetails;
  onFieldChange: <K extends keyof CoshhSubstanceDetails>(key: K, value: CoshhSubstanceDetails[K]) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function SubstanceDetailsStep({
  details,
  onFieldChange,
  onSaveDraft,
  onNextStep,
}: SubstanceDetailsStepProps) {
  return (
    <div className="grid grid-cols-12 gap-8 w-full">
      {/* Left Column */}
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-8 w-full">
        <h2 className="text-xl font-bold text-[#132651]">Step 1: Substance Details</h2>

        <div className="flex flex-col bg-white border-[1.5px] border-[#D0D4DC] rounded-[10px] p-[30px] px-[33px] gap-[24px]">
          <h3 className="text-xl font-bold text-[#132651]">Substance Information</h3>
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651]">Substance Name</label>
              <input
                type="text"
                placeholder="e.g. Sodium Hypochlorite"
                value={details.substanceName}
                onChange={(e) => onFieldChange("substanceName", e.target.value)}
                className="w-full p-3 border-[1.5px] border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651]">Manufacturer / Supplier</label>
              <input
                type="text"
                placeholder="Enter company name"
                value={details.manufacturer}
                onChange={(e) => onFieldChange("manufacturer", e.target.value)}
                className="w-full p-3 border-[1.5px] border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
              />
            </div>

            <div className="flex flex-row gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm text-[#132651]">COSHH Reference</label>
                <input
                  type="text"
                  placeholder="REF-001"
                  value={details.coshhReference}
                  onChange={(e) => onFieldChange("coshhReference", e.target.value)}
                  className="w-full p-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm text-[#132651]">SDS Attached</label>
                <div className="relative w-full">
                  <select
                    value={details.sdsAttached}
                    onChange={(e) => onFieldChange("sdsAttached", e.target.value)}
                    className="w-full p-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] appearance-none bg-transparent cursor-pointer"
                  >
                    <option value="" disabled className="text-[#A3ACBA]">Select Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3ACBA] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white border-[1.5px] border-[#D0D4DC] rounded-[10px] p-[30px] px-[33px] gap-[24px]">
          <h3 className="text-xl font-bold text-[#132651]">Usage Context</h3>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651]">Task / Activity</label>
              <textarea
                placeholder="Describe the specific activity where the substance is used..."
                value={details.taskActivity}
                onChange={(e) => onFieldChange("taskActivity", e.target.value)}
                className="w-full p-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] resize-none min-h-[78px]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651]">Location / Area of Use</label>
              <input
                type="text"
                placeholder="e.g. Ground Floor Laboratory"
                value={details.location}
                onChange={(e) => onFieldChange("location", e.target.value)}
                className="w-full p-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
              />
            </div>

            <div className="flex flex-row gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm text-[#132651]">Frequency of Use</label>
                <input
                  type="text"
                  placeholder="Daily, Weekly etc."
                  value={details.frequency}
                  onChange={(e) => onFieldChange("frequency", e.target.value)}
                  className="w-full p-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm text-[#132651]">Quantity Used</label>
                <input
                  type="text"
                  placeholder="e.g. 500ml per task"
                  value={details.quantity}
                  onChange={(e) => onFieldChange("quantity", e.target.value)}
                  className="w-full p-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
                />
              </div>
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
              Next: Hazard Classification
            </button>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 w-full items-start">
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-lg gap-6 w-full">
          <h4 className="text-xl font-bold text-[#132651]">Assessment Administration</h4>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651]">Assessor Name</label>
              <input
                type="text"
                value={details.assessorName}
                onChange={(e) => onFieldChange("assessorName", e.target.value)}
                className="w-full p-3 border-[1.5px] border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#132651]">Assessment Date</label>
                <input
                  type="date"
                  value={details.assessmentDate}
                  onChange={(e) => onFieldChange("assessmentDate", e.target.value)}
                  className="w-full p-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#132651]">Review Date</label>
                <input
                  type="date"
                  value={details.reviewDate}
                  onChange={(e) => onFieldChange("reviewDate", e.target.value)}
                  className="w-full p-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-6 w-full">
          <h4 className="text-xl font-bold text-[#132651]">Documentation</h4>
          <div className="flex flex-col p-8 items-center justify-center border-2 border-dashed border-[#E3E6EC] rounded-lg cursor-pointer hover:bg-gray-50 transition-colors text-center w-full">
            <div className="w-12 h-12 bg-[#001137]/5 rounded-xl flex items-center justify-center mb-4">
              <UploadCloud className="w-6 h-8 text-[#001137]" />
            </div>
            <h5 className="text-base font-bold text-[#132651] mb-1">Upload Safety Data Sheet</h5>
            <p className="text-sm text-[#5A6886] mb-4">Supported format: PDF, DOCX, JPG, PNG</p>
            <p className="text-xs text-[#A3ACBA] mb-6">Max file size: 10MB</p>
            <button className="px-4 py-3 border border-[#132651] text-[#132651] text-xs font-bold rounded-md bg-white hover:bg-gray-50 transition-colors">
              Select File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
