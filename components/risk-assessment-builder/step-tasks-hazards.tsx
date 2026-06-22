"use client";

import { useState } from "react";
import { Plus, Trash2, ShieldAlert, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TASK_OPTIONS, HAZARD_OPTIONS, type RiskAssessmentTasksHazards, type SelectedHazardRow } from "./types";
import { cn } from "@/lib/utils";

interface StepTasksHazardsProps {
  tasksHazards: RiskAssessmentTasksHazards;
  onToggleTask: (task: string) => void;
  onToggleHazard: (hazard: string) => void;
  onAddCustomHazard: (hazard: string) => void;
  onRemoveCustomHazard: (hazard: string) => void;
  onUpdateRow: (index: number, updatedRow: Partial<SelectedHazardRow>) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
}

export function StepTasksHazards({
  tasksHazards,
  onToggleTask,
  onToggleHazard,
  onAddCustomHazard,
  onRemoveCustomHazard,
  onUpdateRow,
  onSaveDraft,
  onNextStep,
  onPrevStep,
}: StepTasksHazardsProps) {
  const [customInput, setCustomInput] = useState("");

  const handleAddCustom = () => {
    if (customInput.trim()) {
      onAddCustomHazard(customInput.trim());
      setCustomInput("");
    }
  };

  const getRiskBadgeStyles = (risk: SelectedHazardRow["initialRisk"]) => {
    switch (risk) {
      case "High":
        return "bg-red-100 text-red-800 border border-red-200";
      case "Medium":
        return "bg-amber-100 text-amber-800 border border-amber-200";
      case "Low":
        return "bg-emerald-100 text-emerald-800 border border-emerald-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  return (
    <div className="space-y-8 font-sans w-full">
      {/* Step Header */}
      <div className="space-y-1">
        <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">
          Step 3 — Tasks &amp; Hazards
        </h2>
        <p className="text-[14px] text-brand-secondary leading-[1.6]">
          Choose the tasks and hazards related to this activity. Default control measures will be auto-suggested.
        </p>
      </div>

      {/* Grid Selection */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Task Selection Column */}
        <section className="rounded-[12px] border border-[#e3e6ec] bg-white p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#f3f5f8] pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4.5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary">Task Selection</h3>
              </div>
              <span className="inline-flex rounded-full bg-[#fef3c7] px-2 py-0.5 text-[11px] font-bold text-[#92400e]">
                Required
              </span>
            </div>

            <div className="space-y-2">
              {TASK_OPTIONS.map((task) => {
                const isChecked = tasksHazards.selectedTasks.includes(task);
                return (
                  <label
                    key={task}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-[#fafbfd] transition-all",
                      isChecked ? "border-brand-primary bg-[#f4f7ff]" : "border-[#e3e6ec]"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onToggleTask(task)}
                      className="size-4.5 rounded border-[#c5c6cd] text-brand-primary focus:ring-brand-primary accent-brand-primary"
                    />
                    <span className="text-[13px] font-medium text-brand-primary">{task}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="border-t border-[#f3f5f8] pt-3 text-[11px] text-brand-secondary italic">
            6 standard tasks pre-indexed for high-compliance environments.
          </div>
        </section>

        {/* Hazard Selection Column */}
        <section className="rounded-[12px] border border-[#e3e6ec] bg-white p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#f3f5f8] pb-3">
              <div className="flex items-center gap-2">
                <ShieldAlert className="size-4.5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary">Hazard Selection</h3>
              </div>
            </div>

            {/* Custom Hazard Add Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddCustom()}
                placeholder="Add Custom Hazard..."
                className="h-9.5 flex-1 rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[13px] text-brand-primary outline-none transition focus:border-brand-primary"
              />
              <Button
                type="button"
                onClick={handleAddCustom}
                className="h-9.5 w-9.5 rounded-[6px] bg-brand-primary p-0 text-white hover:bg-brand-primary/95 flex items-center justify-center shrink-0"
              >
                <Plus className="size-4.5" />
              </Button>
            </div>

            <div className="space-y-2 overflow-y-auto max-h-[300px] pr-1">
              {/* Custom Hazards list */}
              {tasksHazards.customHazards.map((hazard) => (
                <div
                  key={hazard}
                  className="flex items-center justify-between p-3 rounded-lg border border-[#e3e6ec] bg-[#fdf2f2]"
                >
                  <span className="text-[13px] font-medium text-red-900">{hazard}</span>
                  <button
                    type="button"
                    onClick={() => onRemoveCustomHazard(hazard)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}

              {/* Standard Hazards */}
              {HAZARD_OPTIONS.map((hazard) => {
                const isChecked = tasksHazards.selectedHazards.includes(hazard);
                return (
                  <label
                    key={hazard}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-[#fafbfd] transition-all",
                      isChecked ? "border-brand-primary bg-[#f4f7ff]" : "border-[#e3e6ec]"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onToggleHazard(hazard)}
                      className="size-4.5 rounded border-[#c5c6cd] text-brand-primary focus:ring-brand-primary accent-brand-primary"
                    />
                    <span className="text-[13px] font-medium text-brand-primary">{hazard}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="border-t border-[#f3f5f8] pt-3 text-[11px] text-brand-secondary italic">
            Selected hazards will automatically suggest control measures in the next step.
          </div>
        </section>
      </div>

      {/* Assessed Hazards & Control Table */}
      <section className="rounded-[12px] border border-[#e3e6ec] bg-white overflow-hidden shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
        <div className="border-b border-[#f3f5f8] px-6 py-4.5 bg-[#fafbfd] flex items-center justify-between">
          <div>
            <h3 className="text-[16px] font-bold text-brand-primary">Assessed Hazards &amp; Proposed Control Measures</h3>
            <p className="text-[11px] text-brand-secondary mt-0.5">Auto-suggesting controls based on task selections</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#d6e9ff] border-b border-[#e3e6ec]">
                <th className="py-3 px-5 text-[13px] font-bold text-brand-primary">Hazard</th>
                <th className="py-3 px-5 text-[13px] font-bold text-brand-primary w-[160px]">Persons at Risk</th>
                <th className="py-3 px-5 text-[13px] font-bold text-brand-primary w-[140px]">Initial Risk</th>
                <th className="py-3 px-5 text-[13px] font-bold text-brand-primary">Suggested Controls</th>
                <th className="py-3 px-5 text-[13px] font-bold text-brand-primary w-[80px] text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasksHazards.assessedHazards.map((row, index) => (
                <tr key={index} className="border-b border-[#f3f5f8] last:border-0 hover:bg-[#fafbfd]/50">
                  {/* Hazard Title */}
                  <td className="py-4 px-5 text-[13px] font-bold text-brand-primary">
                    {row.hazard}
                  </td>

                  {/* Persons at risk selector */}
                  <td className="py-4 px-5">
                    <select
                      value={row.personsAtRisk}
                      onChange={(e) => onUpdateRow(index, { personsAtRisk: e.target.value })}
                      className="h-8 w-full rounded border border-[#d7dce5] bg-white px-2 text-[12px] text-brand-primary outline-none focus:border-brand-primary"
                    >
                      <option value="Regulatory">Regulatory</option>
                      <option value="Internal">Internal</option>
                      <option value="Vendor">Vendor</option>
                    </select>
                  </td>

                  {/* Risk Badge selector */}
                  <td className="py-4 px-5">
                    <select
                      value={row.initialRisk}
                      onChange={(e) => onUpdateRow(index, { initialRisk: e.target.value as SelectedHazardRow["initialRisk"] })}
                      className={cn(
                        "h-8 w-full rounded px-2 text-[12px] font-bold outline-none cursor-pointer",
                        getRiskBadgeStyles(row.initialRisk)
                      )}
                    >
                      <option value="High" className="bg-white text-red-800 font-medium">High</option>
                      <option value="Medium" className="bg-white text-amber-800 font-medium">Medium</option>
                      <option value="Low" className="bg-white text-emerald-800 font-medium">Low</option>
                    </select>
                  </td>

                  {/* Control description editor */}
                  <td className="py-4 px-5">
                    <textarea
                      value={row.suggestedControls}
                      onChange={(e) => onUpdateRow(index, { suggestedControls: e.target.value })}
                      rows={2}
                      className="w-full rounded border border-[#d7dce5] bg-white p-2 text-[12px] text-brand-primary outline-none focus:border-brand-primary resize-y font-normal"
                    />
                  </td>

                  {/* Delete action */}
                  <td className="py-4 px-5 text-center">
                    <button
                      type="button"
                      onClick={() => onToggleHazard(row.hazard)}
                      className="p-1 text-[#8a96ab] hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                      title="Remove hazard row"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </td>
                </tr>
              ))}

              {tasksHazards.assessedHazards.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-[13px] text-brand-secondary">
                    Please select or add hazards above to generate assessment rows.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

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
          onClick={onNextStep}
          disabled={tasksHazards.assessedHazards.length === 0}
          className="h-8.5 px-4 rounded-[6px] bg-brand-primary text-[12px] font-bold text-white hover:bg-brand-primary/95 disabled:opacity-50"
        >
          Next: Controls &amp; PPE
        </Button>
      </footer>
    </div>
  );
}
