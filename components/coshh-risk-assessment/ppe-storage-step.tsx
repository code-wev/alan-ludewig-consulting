import React from "react";
import { Check, Info, CheckCircle2 } from "lucide-react";
import {
  COSHH_PPE_OPTIONS,
  type CoshhPpeStorage,
} from "./types";

interface PpeStorageStepProps {
  data: CoshhPpeStorage;
  onUpdatePpeStorage: (key: keyof CoshhPpeStorage, value: string) => void;
  onTogglePpeSelection: (ppeId: string) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function PpeStorageStep({
  data,
  onUpdatePpeStorage,
  onTogglePpeSelection,
  onSaveDraft,
  onNextStep,
}: PpeStorageStepProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1664px]">
      {/* Left Column */}
      <div className="flex flex-col gap-8 flex-1 w-full max-w-[1046px]">
        <h2 className="text-[20px] font-bold text-[#132651] leading-[32px]">
          Step 5: PPE / Storage / Emergency
        </h2>

        <div className="flex flex-col gap-4">
          {/* Section: PPE Selection */}
          <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-6">
            <div className="flex flex-row items-center gap-2">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M8 0L0 3V9.1C0 14.1 3.4 18.6 8 20C12.6 18.6 16 14.1 16 9.1V3L8 0ZM8 17.9C4.6 16.6 2 13 2 9.1V4.6L8 2.4L14 4.6V9.1C14 13 11.4 16.6 8 17.9Z" fill="#001137"/>
              </svg>
              <h3 className="text-base font-semibold text-[#001137] tracking-[0.05em] uppercase">REQUIRED PPE</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {COSHH_PPE_OPTIONS.map((ppe) => {
                const isSelected = data.selectedPpe.includes(ppe.id);
                return (
                  <div
                    key={ppe.id}
                    onClick={() => onTogglePpeSelection(ppe.id)}
                    className={`flex flex-col items-center justify-center p-4 border rounded-md cursor-pointer transition-colors relative h-[122px] gap-3 ${
                      isSelected ? "bg-[#F3F5F8] border-[#132651]" : "bg-white border-[#E3E6EC] hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-10 h-10 bg-[#45464F] rounded-md overflow-hidden flex items-center justify-center">
                      {/* Image placeholder */}
                      <span className="text-[10px] text-white">IMG</span>
                    </div>
                    <span className={`text-xs text-center leading-[1.6] ${isSelected ? "text-[#132651] font-bold" : "text-[#5A6886] font-normal"}`}>
                      {ppe.title}
                    </span>
                    {isSelected && (
                      <div className="absolute top-2 right-2 flex px-2 py-0.5 bg-[#001137] rounded-xl">
                        <span className="text-[10px] text-white">Selected</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Storage & Handling */}
          <div className="flex flex-col p-8 bg-white border-[1.5px] border-[#D0D4DC] rounded-xl gap-6">
            <div className="flex flex-row items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2H2C0.9 2 0 2.9 0 4V14C0 15.1 0.9 16 2 16H16C17.1 16 18 15.1 18 14V4C18 2.9 17.1 2 16 2ZM16 14H2V4H16V14ZM9 5C7.3 5 6 6.3 6 8C6 9.7 7.3 11 9 11C10.7 11 12 9.7 12 8C12 6.3 10.7 5 9 5Z" fill="#132651"/>
              </svg>
              <h3 className="text-[20px] font-bold text-[#132651]">Storage & Handling</h3>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="flex flex-col gap-2 w-full max-w-[480px]">
                  <label className="text-sm text-[#132651] font-normal">Storage Location</label>
                  <input
                    type="text"
                    value={data.storageLocation}
                    onChange={(e) => onUpdatePpeStorage("storageLocation", e.target.value)}
                    placeholder="e.g. Flam vault, Floor 1"
                    className="w-full h-[51px] px-4 py-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full max-w-[480px]">
                  <label className="text-sm text-[#132651] font-normal">Segregation</label>
                  <input
                    type="text"
                    value={data.segregation}
                    onChange={(e) => onUpdatePpeStorage("segregation", e.target.value)}
                    placeholder="Keep away from..."
                    className="w-full h-[51px] px-4 py-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="flex flex-col gap-2 w-full max-w-[480px]">
                  <label className="text-sm text-[#132651] font-normal">Max Quantity</label>
                  <input
                    type="text"
                    value={data.maxQuantity}
                    onChange={(e) => onUpdatePpeStorage("maxQuantity", e.target.value)}
                    placeholder="0 Litres"
                    className="w-full h-[51px] px-4 py-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full max-w-[480px]">
                  <label className="text-sm text-[#132651] font-normal">Container Requirements</label>
                  <input
                    type="text"
                    value={data.containerRequirements}
                    onChange={(e) => onUpdatePpeStorage("containerRequirements", e.target.value)}
                    placeholder="Original packaging only..."
                    className="w-full h-[51px] px-4 py-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section: Emergency Procedures */}
          <div className="flex flex-col p-8 bg-white border-[1.5px] border-[#D0D4DC] rounded-xl gap-6">
            <div className="flex flex-row items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2H2C0.9 2 0 2.9 0 4V14C0 15.1 0.9 16 2 16H16C17.1 16 18 15.1 18 14V4C18 2.9 17.1 2 16 2ZM16 14H2V4H16V14ZM9 5C7.3 5 6 6.3 6 8C6 9.7 7.3 11 9 11C10.7 11 12 9.7 12 8C12 6.3 10.7 5 9 5Z" fill="#132651"/>
              </svg>
              <h3 className="text-[20px] font-bold text-[#132651]">Emergency Procedures</h3>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm text-[#132651] font-normal">First Aid</label>
                <textarea
                  value={data.firstAid}
                  onChange={(e) => onUpdatePpeStorage("firstAid", e.target.value)}
                  placeholder="Ingestion, inhalation, skin contact..."
                  className="w-full h-[78px] px-4 py-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] resize-none placeholder:text-[#A3ACBA]"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="flex flex-col gap-2 w-full max-w-[480px]">
                  <label className="text-sm text-[#132651] font-normal">Spill Procedure</label>
                  <input
                    type="text"
                    value={data.spillProcedure}
                    onChange={(e) => onUpdatePpeStorage("spillProcedure", e.target.value)}
                    placeholder="Containment and clean up..."
                    className="w-full h-[51px] px-4 py-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full max-w-[480px]">
                  <label className="text-sm text-[#132651] font-normal">Fire Fighting</label>
                  <input
                    type="text"
                    value={data.fireFighting}
                    onChange={(e) => onUpdatePpeStorage("fireFighting", e.target.value)}
                    placeholder="Suitable extinguishing media..."
                    className="w-full h-[51px] px-4 py-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="flex flex-col gap-2 w-full max-w-[480px]">
                  <label className="text-sm text-[#132651] font-normal">Disposal Method</label>
                  <input
                    type="text"
                    value={data.disposalMethod}
                    onChange={(e) => onUpdatePpeStorage("disposalMethod", e.target.value)}
                    placeholder="Special waste disposal codes..."
                    className="w-full h-[51px] px-4 py-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full max-w-[480px]">
                  <label className="text-sm text-[#132651] font-normal">Emergency Contact</label>
                  <input
                    type="text"
                    value={data.emergencyContact}
                    onChange={(e) => onUpdatePpeStorage("emergencyContact", e.target.value)}
                    placeholder="+44 (0) 123 456 789"
                    className="w-full h-[51px] px-4 py-3 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA]"
                  />
                </div>
              </div>
            </div>
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
            className="px-4 py-4 bg-[#132651] text-white text-xs font-bold rounded-md hover:bg-[#132651]/90 transition-colors min-w-[134px]"
          >
            Next: Review & Generate
          </button>
        </div>
      </div>

      {/* Right Column: Helper & Context */}
      <div className="flex flex-col gap-6 w-full max-w-[506px]">
        {/* Emergency Guidance Info Box */}
        <div className="flex flex-col p-4 bg-[#E4EBFE] border border-[rgba(173,198,255,0.5)] rounded-lg gap-4 w-full">
          <div className="flex flex-row items-center gap-2">
            <Info className="w-5 h-5 text-[#132651]" />
            <h3 className="text-sm font-bold text-[#132651]">Emergency Guidance</h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#132651] leading-[1.6]">
              Ensure all emergency contact numbers are verified and the specified fire extinguishers are available in the storage vicinity.
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex flex-row items-start gap-2">
               <CheckCircle2 className="w-4 h-4 text-[#00A63E] mt-0.5 shrink-0" />
               <p className="text-sm text-[#132651] leading-[1.6]">
                 PPE must be CE marked and maintained in good order.
               </p>
            </div>
            <div className="flex flex-row items-start gap-2">
               <CheckCircle2 className="w-4 h-4 text-[#00A63E] mt-0.5 shrink-0" />
               <p className="text-sm text-[#132651] leading-[1.6]">
                 PPE must be CE marked and maintained in good order.
               </p>
            </div>
            <div className="flex flex-row items-start gap-2">
               <CheckCircle2 className="w-4 h-4 text-[#00A63E] mt-0.5 shrink-0" />
               <p className="text-sm text-[#132651] leading-[1.6]">
                 PPE must be CE marked and maintained in good order.
               </p>
            </div>
          </div>
        </div>

        {/* Document Summary */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
          <h2 className="text-[20px] font-bold text-[#132651]">Document Summary</h2>
          
          <div className="flex flex-col gap-4">
             <div className="flex flex-col gap-1">
                <span className="text-xs text-[#5A6886] uppercase tracking-wide">SUBSTANCE</span>
                <span className="text-sm font-bold text-[#132651]">Toluene Diisocyanate (TDI)</span>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-xs text-[#5A6886] uppercase tracking-wide">PROCESS</span>
                <span className="text-sm font-bold text-[#132651]">Polyurethane Spray Application</span>
             </div>

             <div className="border-t border-[#E3E6EC] pt-4 flex flex-col gap-2">
               <div className="flex flex-row justify-between items-center">
                 <span className="text-sm text-[#5A6886]">Step 1: Details</span>
                 <CheckCircle2 className="w-3 h-3 text-[#00A63E]" strokeWidth={3} />
               </div>
               <div className="flex flex-row justify-between items-center">
                 <span className="text-sm text-[#5A6886]">Step 2: Hazards</span>
                 <CheckCircle2 className="w-3 h-3 text-[#00A63E]" strokeWidth={3} />
               </div>
               <div className="flex flex-row justify-between items-center">
                 <span className="text-sm text-[#5A6886]">Step 3: Exposure</span>
                 <CheckCircle2 className="w-3 h-3 text-[#00A63E]" strokeWidth={3} />
               </div>
               <div className="flex flex-row justify-between items-center">
                 <span className="text-sm text-[#5A6886]">Step 4: Controls</span>
                 <CheckCircle2 className="w-3 h-3 text-[#00A63E]" strokeWidth={3} />
               </div>
               <div className="flex flex-row justify-between items-center py-1">
                 <span className="text-sm font-bold text-[#132651]">Step 5: Emergency</span>
                 <div className="w-4 h-4 rounded-full border-2 border-[#132651]" />
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
