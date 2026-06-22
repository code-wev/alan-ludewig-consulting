import React from "react";
import { Check, CheckCircle2, ChevronDown, Edit2, Info } from "lucide-react";
import {
  COSHH_EXPOSURE_ROUTES,
  COSHH_PERSONS_AT_RISK,
  type CoshhExposurePersons,
} from "./types";

interface ExposurePersonsStepProps {
  data: CoshhExposurePersons;
  onToggleExposureRoute: (routeId: string) => void;
  onTogglePersonAtRisk: (personId: string) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function ExposurePersonsStep({
  data,
  onToggleExposureRoute,
  onTogglePersonAtRisk,
  onSaveDraft,
  onNextStep,
}: ExposurePersonsStepProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1664px]">
      {/* Left Column */}
      <div className="flex flex-col gap-8 flex-1 w-full max-w-[1046px]">
        <h2 className="text-[20px] font-bold text-[#132651] leading-[32px]">
          Step 3: Exposure & Persons at Risk
        </h2>

        {/* Exposure Routes Section */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-6">
          <div className="flex flex-row items-center gap-2">
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L20 17H0L10 0ZM10 3.8L3.65 15H16.35L10 3.8ZM9 12H11V14H9V12ZM9 7H11V11H9V7Z" fill="#001137"/>
            </svg>
            <h3 className="text-[20px] font-bold text-[#132651]">Exposure Routes</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COSHH_EXPOSURE_ROUTES.map((route) => {
              const isSelected = data.selectedExposureRoutes.includes(route.id);
              return (
                <div
                  key={route.id}
                  onClick={() => onToggleExposureRoute(route.id)}
                  className={`flex flex-col items-center justify-center p-4 border rounded-md cursor-pointer relative transition-colors h-[100px] ${
                    isSelected ? "border-[#132651] bg-[#F8F9FA]" : "border-[#E3E6EC] bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    {/* Placeholder for the route images */}
                    {route.id !== "other" ? (
                      <div className="w-6 h-6 bg-[#E3E6EC] rounded object-cover flex items-center justify-center overflow-hidden">
                        <span className="text-[10px] text-gray-400">img</span>
                      </div>
                    ) : (
                      <div className="w-6 h-6 border-b-[4px] border-[#5A6886] rounded-sm mb-1" />
                    )}
                    <span className="text-sm text-[#5A6886] text-center">{route.title}</span>
                  </div>
                  {/* Checkbox */}
                  <div className={`absolute top-3 right-3 w-4 h-4 border rounded-sm flex items-center justify-center ${
                    isSelected ? "bg-[#1E3A8A] border-[#1E3A8A]" : "border-[#C5C6CD] bg-white"
                  }`}>
                    {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Persons at Risk Section */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
          <div className="flex flex-row items-center gap-2">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C11.79 0 10 1.79 10 4C10 6.21 11.79 8 14 8ZM14 2C15.1 2 16 2.9 16 4C16 5.1 15.1 6 14 6C12.9 6 12 5.1 12 4C12 2.9 12.9 2 14 2ZM14 10C11.33 10 6 11.34 6 14V16H22V14C22 11.34 16.67 10 14 10ZM8 14C8.2 13.31 11.14 12 14 12C16.86 12 19.8 13.31 20 14H8ZM4 8C6.21 8 8 6.21 8 4C8 1.79 6.21 0 4 0C1.79 0 0 1.79 0 4C0 6.21 1.79 8 4 8ZM4 2C5.1 2 6 2.9 6 4C6 5.1 5.1 6 4 6C2.9 6 2 5.1 2 4C2 2.9 2.9 2 4 2ZM4 10C3.06 10 2.06 10.15 1.09 10.42C2.17 11.19 3.2 12.03 4.14 12.94C4.05 13.28 4 13.63 4 14V16H0V14C0 11.34 2.67 10 4 10Z" fill="#132651"/>
            </svg>
            <h3 className="text-[20px] font-bold text-[#132651]">Persons at Risk</h3>
          </div>

          <div className="flex flex-row flex-wrap items-center gap-3">
            {COSHH_PERSONS_AT_RISK.map((person) => {
              const isSelected = data.selectedPersonsAtRisk.includes(person.id);
              return (
                <button
                  key={person.id}
                  onClick={() => onTogglePersonAtRisk(person.id)}
                  className={`px-4 py-2 rounded-md border text-xs font-bold transition-colors ${
                    isSelected
                      ? "bg-[#132651] border-[#132651] text-white"
                      : "bg-white border-[#E3E6EC] text-[#5A6886] hover:bg-gray-50"
                  }`}
                >
                  {person.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Exposure Assessment Section */}
        <div className="flex flex-col bg-white border-[1.5px] border-[#E3E6EC] rounded-xl overflow-hidden">
          <div className="flex flex-row justify-between items-center p-5 border-b border-[#E3E6EC]">
            <h2 className="text-[24px] leading-[32px] font-bold text-[#132651] font-inter">
              Exposure Assessment
            </h2>
            <button className="px-4 py-2 bg-[#132651] text-white text-xs font-bold rounded-md hover:bg-[#132651]/90 transition-colors">
              Add Exposure Route
            </button>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[1000px] text-left border-collapse">
              <thead>
                <tr className="bg-[#D6E9FF] border-b-[1.5px] border-[#F3F5F8]">
                  <th className="py-3 px-4 w-[40px]">
                    <div className="w-3.5 h-3.5 border border-[#C5C6CD] bg-white rounded-sm" />
                  </th>
                  <th className="py-3 px-2 text-sm font-bold text-[#132651]">Exposure Route</th>
                  <th className="py-3 px-2 text-sm font-bold text-[#132651]">Who is Exposed</th>
                  <th className="py-3 px-2 text-sm font-bold text-[#132651]">Frequency</th>
                  <th className="py-3 px-2 text-sm font-bold text-[#132651]">Likelihood</th>
                  <th className="py-3 px-2 text-sm font-bold text-[#132651]">Severity</th>
                  <th className="py-3 px-2 text-sm font-bold text-[#132651]">Initial Risk</th>
                  <th className="py-3 px-4 text-sm font-bold text-[#132651] w-[80px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.assessments.map((assessment, idx) => (
                  <tr key={assessment.id} className={idx !== data.assessments.length - 1 ? "border-b-[1.5px] border-[#F3F5F8]" : ""}>
                    <td className="py-5 px-4 w-[40px]">
                      <div className="w-3.5 h-3.5 border border-[#C5C6CD] bg-white rounded-sm" />
                    </td>
                    <td className="py-5 px-2">
                      <span className="text-sm text-[#132651]">{assessment.exposureRoute}</span>
                    </td>
                    <td className="py-5 px-2">
                      <span className="text-sm text-[#5A6886]">{assessment.whoIsExposed}</span>
                    </td>
                    <td className="py-5 px-2">
                      <span className="text-sm text-[#5A6886]">{assessment.frequency}</span>
                    </td>
                    <td className="py-5 px-2">
                      <span className="text-sm text-[#5A6886]">{assessment.likelihood}</span>
                    </td>
                    <td className="py-5 px-2">
                      <span className="text-sm text-[#5A6886]">{assessment.severity}</span>
                    </td>
                    <td className="py-5 px-2">
                      {assessment.initialRisk === "Low" && (
                        <div className="inline-flex px-2 py-[2px] border-[1.5px] border-transparent bg-[#5A6886] rounded-md items-center justify-center">
                          <span className="text-xs text-white">Low</span>
                        </div>
                      )}
                      {assessment.initialRisk === "Medium" && (
                        <div className="inline-flex px-2 py-[2px] border-[1.5px] border-transparent bg-[#F5A623] rounded-md items-center justify-center">
                          <span className="text-xs text-white">Medium</span>
                        </div>
                      )}
                      {assessment.initialRisk === "High" && (
                        <div className="inline-flex px-[9px] py-[2px] border-[1.5px] border-transparent bg-[#00BC7D] rounded-md items-center justify-center">
                          <span className="text-xs text-white">High</span>
                        </div>
                      )}
                    </td>
                    <td className="py-5 px-4 w-[80px]">
                      <button className="p-1.5 hover:bg-gray-100 rounded text-[#5A6886] transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
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
            className="px-4 py-4 bg-[#132651] text-white text-xs font-bold rounded-md hover:bg-[#132651]/90 transition-colors min-w-[129px]"
          >
            Next: Control Measures
          </button>
        </div>
      </div>

      {/* Right Column: Helper & Context */}
      <div className="flex flex-col gap-6 w-full max-w-[506px] pb-[173px]">
        {/* Exposure Guidance Info Box */}
        <div className="flex flex-col p-4 bg-[#E4EBFE] border border-[rgba(173,198,255,0.5)] rounded-lg gap-4 w-full">
          <div className="flex flex-row items-center gap-2">
            <Info className="w-5 h-5 text-[#132651]" />
            <h3 className="text-sm font-bold text-[#132651]">Exposure Guidance</h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#132651] leading-[1.6]">
              When assessing exposure, consider:
            </p>
            <p className="text-sm text-[#132651] leading-[1.6]">
              Normal Use: How is the substance typically handled during standard
              shifts?
              <br /><br />
              Accidental Release: What happens in the event of a spill or leak?
              <br /><br />
              Cleaning/Maintenance: People performing these tasks often face higher risks than operators.
              <br /><br />
              Enclosed Spaces: Are the routes of exposure intensified by the working
              environment?
            </p>
          </div>
          <div className="flex flex-col p-4 bg-white border border-[#E3E6EC] rounded gap-3 mt-2">
            <h4 className="text-[20px] font-bold text-[#132651]">Pro Tip</h4>
            <p className="text-sm text-[#5A6886] leading-[1.6]">
              Inhalation is the most common route for chemical exposure. Pay extra attention to dusts, mists, and
              vapors.
            </p>
          </div>
        </div>

        {/* Completed Steps */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
          <h2 className="text-[20px] font-bold text-[#132651]">Completed Steps</h2>
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-3">
              <CheckCircle2 className="w-[16.67px] h-[16.67px] text-[#00A63E]" />
              <span className="text-base text-[#5A6886]">1. Substance Details</span>
            </div>
            <div className="flex flex-row items-center gap-3">
              <CheckCircle2 className="w-[16.67px] h-[16.67px] text-[#00A63E]" />
              <span className="text-base text-[#5A6886]">2. Hazard Classification</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
