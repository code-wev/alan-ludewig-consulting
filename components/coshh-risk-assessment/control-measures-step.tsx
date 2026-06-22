import React from "react";
import { Check, Edit2, Info, Eye } from "lucide-react";
import {
  COSHH_SUGGESTED_CONTROLS,
  type CoshhControlMeasures,
} from "./types";

interface ControlMeasuresStepProps {
  data: CoshhControlMeasures;
  onToggleSuggestedControl: (controlId: string) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function ControlMeasuresStep({
  data,
  onToggleSuggestedControl,
  onSaveDraft,
  onNextStep,
}: ControlMeasuresStepProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1664px]">
      {/* Left Column */}
      <div className="flex flex-col gap-8 flex-1 w-full max-w-[1046px]">
        <h2 className="text-[20px] font-bold text-[#132651] leading-[32px]">
          Step 4: Control Measures
        </h2>

        {/* Suggested Controls Section */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
          <h3 className="text-[20px] font-bold text-[#132651]">Suggested Controls</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {COSHH_SUGGESTED_CONTROLS.map((control) => {
              const isSelected = data.selectedSuggestedControls.includes(control.id);
              return (
                <div
                  key={control.id}
                  onClick={() => onToggleSuggestedControl(control.id)}
                  className={`flex flex-col items-center justify-center p-3 border rounded-md cursor-pointer relative transition-colors text-center h-[88px] gap-2 ${
                    isSelected ? "border-[#132651] bg-[#F8F9FA]" : "border-[#E3E6EC] bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center w-full h-full gap-2">
                    {/* Placeholder icon */}
                    <div className="w-5 h-5 flex items-center justify-center bg-transparent">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5A6886" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                       </svg>
                    </div>
                    <span className="text-xs text-[#5A6886] leading-[1.6] px-1">{control.title}</span>
                  </div>
                  {/* Checkbox */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-3.5 h-3.5 bg-[#1E3A8A] rounded-sm flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Defined Control Measures Section */}
        <div className="flex flex-col bg-white border-[1.5px] border-[#E3E6EC] rounded-xl overflow-hidden">
          <div className="flex flex-row justify-between items-center p-5 border-b border-[#E3E6EC]">
            <h2 className="text-[24px] leading-[32px] font-bold text-[#132651] font-inter">
              Defined Control Measures
            </h2>
            <button className="px-4 py-2 bg-[#132651] text-white text-xs font-bold rounded-md hover:bg-[#132651]/90 transition-colors">
              Add Control Measure
            </button>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[1000px] text-left border-collapse">
              <thead>
                <tr className="bg-[#D6E9FF] border-b-[1.5px] border-[#F3F5F8]">
                  <th className="py-2.5 px-4 w-[40px]">
                    <div className="w-3.5 h-3.5 border border-[#C5C6CD] bg-white rounded-sm" />
                  </th>
                  <th className="py-2.5 px-2 text-sm font-bold text-[#132651]">Control Measure</th>
                  <th className="py-2.5 px-2 text-sm font-bold text-[#132651]">Related Exposure Route</th>
                  <th className="py-2.5 px-2 text-sm font-bold text-[#132651]">Responsible Person</th>
                  <th className="py-2.5 px-2 text-sm font-bold text-[#132651]">Likelihood</th>
                  <th className="py-2.5 px-2 text-sm font-bold text-[#132651]">Status</th>
                  <th className="py-2.5 px-4 text-sm font-bold text-[#132651] w-[80px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.measures.map((measure, idx) => (
                  <tr key={measure.id} className={idx !== data.measures.length - 1 ? "border-b-[1.5px] border-[#F3F5F8]" : ""}>
                    <td className="py-5 px-4 w-[40px]">
                      <div className="w-3.5 h-3.5 border border-[#C5C6CD] bg-white rounded-sm" />
                    </td>
                    <td className="py-5 px-2">
                      <span className="text-sm text-[#132651]">{measure.controlMeasure}</span>
                    </td>
                    <td className="py-5 px-2">
                      <span className="text-sm text-[#5A6886]">{measure.relatedExposureRoute}</span>
                    </td>
                    <td className="py-5 px-2">
                      <span className="text-sm text-[#5A6886]">{measure.responsiblePerson}</span>
                    </td>
                    <td className="py-5 px-2">
                      <span className="text-sm text-[#5A6886]">{measure.likelihood}</span>
                    </td>
                    <td className="py-5 px-2">
                      <div className="inline-flex px-[9px] py-[2px] bg-[#00BC7D] rounded-md items-center justify-center">
                        <span className="text-xs text-white">Active</span>
                      </div>
                    </td>
                    <td className="py-5 px-4 w-[80px]">
                      <div className="flex gap-2">
                        <button className="p-1 hover:bg-gray-100 rounded text-[#5A6886] transition-colors">
                          <Eye className="w-[18px] h-[18px]" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded text-[#5A6886] transition-colors">
                          <Edit2 className="w-[18px] h-[18px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={onSaveDraft}
            className="px-4 py-4 bg-white border border-[#132651] text-[#132651] text-xs font-bold rounded-md hover:bg-gray-50 transition-colors"
          >
            Save Draft
          </button>
          <button
            onClick={onNextStep}
            className="px-4 py-4 bg-[#132651] text-white text-xs font-bold rounded-md hover:bg-[#132651]/90 transition-colors min-w-[180px]"
          >
            Next: PPE / Storage / Emergency
          </button>
        </div>
      </div>

      {/* Right Column: Helper & Context */}
      <div className="flex flex-col gap-6 w-full max-w-[506px] pb-[173px]">
        {/* Control Guidance Info Box */}
        <div className="flex flex-col p-4 bg-[#E4EBFE] border border-[rgba(173,198,255,0.5)] rounded-lg gap-4 w-full">
          <div className="flex flex-row items-center gap-2">
            <Info className="w-5 h-5 text-[#132651]" />
            <h3 className="text-sm font-bold text-[#132651]">Control Guidance</h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#132651] leading-[1.6]">
              Apply the Hierarchy of Controls when selecting measures:
            </p>
            <p className="text-sm text-[#132651] leading-[1.6]">
              Elimination: Removing the hazard entirely.
              <br /><br />
              Substitution: Using a less hazardous substance.
              <br /><br />
              Engineering: LEV, barriers, isolation.
              <br /><br />
              Administrative: Training, rotations, signs.
              <br /><br />
              PPE: Last line of defense (gloves,masks).
            </p>
          </div>
          <div className="border-t border-[#E3E6EC] pt-4 mt-2">
            <p className="text-xs text-[#5A6886] leading-[1.6]">
              Ensure controls address the specific exposure routes identified in Step 3.
            </p>
          </div>
        </div>

        {/* Asset Preview Box */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-3">
          <h2 className="text-[20px] font-bold text-[#132651]">Asset Preview</h2>
          
          <div className="relative w-full aspect-video bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
            {/* Fake Image Background */}
            <div className="absolute inset-0 bg-[#D9D9D9] opacity-50"></div>
            {/* Overlay Icon */}
            <div className="absolute inset-0 bg-[rgba(0,17,55,0.2)] flex items-center justify-center">
               <svg width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 0C8.5 0 2 6 0 11.5C2 17 8.5 23 16.5 23C24.5 23 31 17 33 11.5C31 6 24.5 0 16.5 0ZM16.5 19C12.36 19 9 15.64 9 11.5C9 7.36 12.36 4 16.5 4C20.64 4 24 7.36 24 11.5C24 15.64 20.64 19 16.5 19ZM16.5 7.5C14.29 7.5 12.5 9.29 12.5 11.5C12.5 13.71 14.29 15.5 16.5 15.5C18.71 15.5 20.5 13.71 20.5 11.5C20.5 9.29 18.71 7.5 16.5 7.5Z" fill="white"/>
               </svg>
            </div>
          </div>
          <div className="w-full text-center mt-1">
            <span className="text-xs text-[#5A6886]">Safety Data Sheet Visual Reference</span>
          </div>
        </div>
      </div>
    </div>
  );
}
