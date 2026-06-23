"use client";

import React, { useState } from "react";
import { Hammer, Plus, X } from "lucide-react";
import {
  PLANT_OPTIONS,
  POWER_TOOL_OPTIONS,
  HAND_TOOL_OPTIONS,
  type MethodStatementPlantTools,
} from "./types";

interface PlantToolsStepProps {
  data: MethodStatementPlantTools;
  onTogglePlant: (id: string) => void;
  onTogglePowerTool: (id: string) => void;
  onToggleHandTool: (id: string) => void;
  onAddCustomTool: (name: string) => void;
  onRemoveCustomTool: (name: string) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function PlantToolsStep({
  data,
  onTogglePlant,
  onTogglePowerTool,
  onToggleHandTool,
  onAddCustomTool,
  onRemoveCustomTool,
  onSaveDraft,
  onNextStep,
}: PlantToolsStepProps) {
  const [customInput, setCustomInput] = useState("");

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInput.trim()) {
      onAddCustomTool(customInput.trim());
      setCustomInput("");
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
      <div className="flex flex-col bg-white border-[1.5px] border-[#E3E6EC] rounded-[12px] p-8 shadow-[0_1px_1px_rgba(15,23,42,0.04)] gap-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-[8px] bg-[#eef2ff] text-brand-primary">
            <Hammer className="size-5" />
          </div>
          <h2 className="text-[20px] font-bold text-[#132651]">Step 4: Plant, Tools &amp; Equipment</h2>
        </div>

        {/* Selection Grids */}
        <div className="flex flex-col gap-8">
          {/* Plant & Machinery */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#132651]">Plant / Heavy Machinery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {PLANT_OPTIONS.map((opt) => {
                const isSelected = data.selectedPlant.includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition select-none ${
                      isSelected
                        ? "border-brand-primary bg-[#eef2ff]/30"
                        : "border-[#e3e6ec] bg-white hover:bg-[#fafbfd]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onTogglePlant(opt.id)}
                      className="size-4 rounded border border-[#c5c6cd] accent-brand-primary cursor-pointer"
                    />
                    <span className="text-sm font-semibold text-brand-primary">{opt.title}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Power Tools */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#132651]">Power Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {POWER_TOOL_OPTIONS.map((opt) => {
                const isSelected = data.selectedPowerTools.includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition select-none ${
                      isSelected
                        ? "border-brand-primary bg-[#eef2ff]/30"
                        : "border-[#e3e6ec] bg-white hover:bg-[#fafbfd]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onTogglePowerTool(opt.id)}
                      className="size-4 rounded border border-[#c5c6cd] accent-brand-primary cursor-pointer"
                    />
                    <span className="text-sm font-semibold text-brand-primary">{opt.title}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Hand Tools */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#132651]">Hand Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {HAND_TOOL_OPTIONS.map((opt) => {
                const isSelected = data.selectedHandTools.includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition select-none ${
                      isSelected
                        ? "border-brand-primary bg-[#eef2ff]/30"
                        : "border-[#e3e6ec] bg-white hover:bg-[#fafbfd]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onToggleHandTool(opt.id)}
                      className="size-4 rounded border border-[#c5c6cd] accent-brand-primary cursor-pointer"
                    />
                    <span className="text-sm font-semibold text-brand-primary">{opt.title}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Custom Items */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#132651]">Other / Custom Equipment</h3>
            
            <form onSubmit={handleAddCustom} className="flex gap-2 max-w-md">
              <input
                type="text"
                placeholder="e.g. Scissor Lift, Specialized Laser Meter"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                className="flex-1 p-2.5 border border-[#d7dce5] rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#8a96ab] transition"
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 h-10 rounded-[6px] bg-brand-primary px-4 text-xs font-bold text-white transition hover:opacity-90"
              >
                <Plus className="size-4" /> Add
              </button>
            </form>

            {data.customItems.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {data.customItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#eef2ff] px-3 py-1.5 text-xs font-bold text-brand-primary"
                  >
                    {item}
                    <button
                      type="button"
                      onClick={() => onRemoveCustomTool(item)}
                      className="text-brand-secondary hover:text-red-500 transition-colors"
                      aria-label={`Remove custom tool ${item}`}
                    >
                      <X className="size-3.5" />
                    </button>
                  </span>
                ))}
              </div>
            )}
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
            Next: PPE &amp; Emergency
          </button>
        </div>
      </div>
    </div>
  );
}
