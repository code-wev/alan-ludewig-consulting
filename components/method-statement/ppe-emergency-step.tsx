"use client";

import React from "react";
import { ShieldAlert } from "lucide-react";
import { PPE_OPTIONS, type MethodStatementPpeEmergency } from "./types";

interface PpeEmergencyStepProps {
  data: MethodStatementPpeEmergency;
  onTogglePpe: (id: string) => void;
  onFieldChange: <K extends keyof MethodStatementPpeEmergency>(key: K, value: MethodStatementPpeEmergency[K]) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function PpeEmergencyStep({
  data,
  onTogglePpe,
  onFieldChange,
  onSaveDraft,
  onNextStep,
}: PpeEmergencyStepProps) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
      <div className="flex flex-col bg-white border-[1.5px] border-[#E3E6EC] rounded-[12px] p-8 shadow-[0_1px_1px_rgba(15,23,42,0.04)] gap-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-[8px] bg-[#eef2ff] text-brand-primary">
            <ShieldAlert className="size-5" />
          </div>
          <h2 className="text-[20px] font-bold text-[#132651]">Step 5: PPE &amp; Emergency</h2>
        </div>

        <div className="flex flex-col gap-8">
          {/* PPE Grid */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#132651]">Required Personal Protective Equipment (PPE)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {PPE_OPTIONS.map((opt) => {
                const isSelected = data.selectedPpe.includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition select-none ${
                      isSelected
                        ? "border-brand-primary bg-[#eef2ff]/30"
                        : "border-[#e3e6ec] bg-white hover:bg-[#fafbfd]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onTogglePpe(opt.id)}
                      className="size-4 rounded border border-[#c5c6cd] accent-brand-primary cursor-pointer"
                    />
                    <span className="text-sm font-semibold text-brand-primary">{opt.title}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Emergency details */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-[#132651]">Emergency Arrangements</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold text-[#132651]">First Aid Facilities</label>
                <textarea
                  value={data.firstAid}
                  onChange={(e) => onFieldChange("firstAid", e.target.value)}
                  placeholder="e.g. First Aid kit on site, site supervisor holds keys..."
                  className="w-full p-3 border border-[#d7dce5] rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#8a96ab] transition resize-none min-h-[68px]"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold text-[#132651]">Emergency Evacuation &amp; Rescue Procedures</label>
                <textarea
                  value={data.emergencyProcedures}
                  onChange={(e) => onFieldChange("emergencyProcedures", e.target.value)}
                  placeholder="Detail the evacuation route, assembly point, and response plan..."
                  className="w-full p-3 border border-[#d7dce5] rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#8a96ab] transition resize-none min-h-[68px]"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold text-[#132651]">Fire Fighting Equipment</label>
                <textarea
                  value={data.fireFighting}
                  onChange={(e) => onFieldChange("fireFighting", e.target.value)}
                  placeholder="Describe located extinguishers, fire hose, fire watch requirements..."
                  className="w-full p-3 border border-[#d7dce5] rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#8a96ab] transition resize-none min-h-[68px]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#132651]">Nominated First Aider(s)</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe, Jane Smith"
                  value={data.firstAider}
                  onChange={(e) => onFieldChange("firstAider", e.target.value)}
                  className="w-full p-3 border border-[#d7dce5] rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#8a96ab] transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#132651]">Nearest A&amp;E Hospital</label>
                <input
                  type="text"
                  placeholder="e.g. St Thomas' Hospital, SE1 7EH"
                  value={data.nearestHospital}
                  onChange={(e) => onFieldChange("nearestHospital", e.target.value)}
                  className="w-full p-3 border border-[#d7dce5] rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#8a96ab] transition"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-4 mt-4 pt-6 border-t border-[#f3f5f8]">
          <button
            type="button"
            onClick={onSaveDraft}
            className="h-10 rounded-[6px] border border-[#132651] bg-white px-5 text-sm font-bold text-[#132651] transition hover:bg-brand-bg-main"
          >
            Save Draft
          </button>
          <button
            type="button"
            onClick={onNextStep}
            className="h-10 rounded-[6px] bg-[#132651] px-5 text-sm font-bold text-white transition hover:bg-[#132651]/90"
          >
            Next: Review &amp; Generate
          </button>
        </div>
      </div>
    </div>
  );
}
