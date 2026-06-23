"use client";

import React, { useState, useRef } from "react";
import {
  Hammer,
  Plus,
  X,
  Info,
  CheckCircle2,
  Eye,
  Pencil,
  Trash2,
  UploadCloud,
  FileCheck,
} from "lucide-react";
import type { MethodStatementPlantTools, PlantToolItem } from "./types";

interface PlantToolsStepProps {
  data: MethodStatementPlantTools;
  onAddPlantToolItem: (item: Omit<PlantToolItem, "id">) => void;
  onRemovePlantToolItem: (id: string) => void;
  onUpdatePlantToolItem: (
    id: string,
    field: keyof Omit<PlantToolItem, "id">,
    value: string
  ) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function PlantToolsStep({
  data,
  onAddPlantToolItem,
  onRemovePlantToolItem,
  onUpdatePlantToolItem,
  onSaveDraft,
  onNextStep,
}: PlantToolsStepProps) {
  // Modal / Form state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PlantToolItem | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
    indpReq: "",
    compUser: "",
    notes: "",
  });

  // Mock document file names
  const [inspectionFile, setInspectionFile] = useState<string | null>(null);
  const [calibrationFile, setCalibrationFile] = useState<string | null>(null);
  const [manualFile, setManualFile] = useState<string | null>(null);

  const inspectionRef = useRef<HTMLInputElement>(null);
  const calibrationRef = useRef<HTMLInputElement>(null);
  const manualRef = useRef<HTMLInputElement>(null);

  const openAddModal = () => {
    setEditingItem(null);
    setFormData({
      name: "",
      purpose: "",
      indpReq: "",
      compUser: "",
      notes: "",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (item: PlantToolItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      purpose: item.purpose,
      indpReq: item.indpReq,
      compUser: item.compUser,
      notes: item.notes,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.purpose.trim()) return;

    if (editingItem) {
      // Edit mode: update individual fields
      onUpdatePlantToolItem(editingItem.id, "name", formData.name.trim());
      onUpdatePlantToolItem(editingItem.id, "purpose", formData.purpose.trim());
      onUpdatePlantToolItem(editingItem.id, "indpReq", formData.indpReq.trim());
      onUpdatePlantToolItem(editingItem.id, "compUser", formData.compUser.trim());
      onUpdatePlantToolItem(editingItem.id, "notes", formData.notes.trim());
    } else {
      // Add mode
      onAddPlantToolItem({
        name: formData.name.trim(),
        purpose: formData.purpose.trim(),
        indpReq: formData.indpReq.trim(),
        compUser: formData.compUser.trim(),
        notes: formData.notes.trim(),
      });
    }

    closeModal();
  };

  return (
    <div className="grid grid-cols-12 gap-8 w-full items-start">
      {/* Left Column - Form & Table Card */}
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-6 w-full">
        <div className="flex flex-col bg-white border-[1.5px] border-[#E3E6EC] rounded-[12px] pt-10 px-8 pb-12 shadow-[0_1px_1px_rgba(15,23,42,0.04)] gap-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Hammer className="size-7 text-[#132651]" />
              <h2 className="text-[20px] font-bold text-[#132651] font-inter">
                Step 4: Plant / Tools / Equipment
              </h2>
            </div>
            <button
              type="button"
              onClick={openAddModal}
              className="flex items-center gap-1.5 h-[34px] px-4 bg-[#132651] text-white text-[12px] font-bold rounded-[6px] hover:opacity-90 transition font-inter"
            >
              <Plus className="size-4" /> Add Equipment / Tool
            </button>
          </div>

          {/* Equipment Table Wrapper */}
          <div className="w-full overflow-x-auto border border-[#E3E6EC] rounded-[8px] bg-white mt-2">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FAFBFD] border-b border-[#E3E6EC]">
                  <th className="p-4 text-[14px] font-bold text-[#132651] font-inter">
                    Equipment/Tool
                  </th>
                  <th className="p-4 text-[14px] font-bold text-[#132651] font-inter">
                    Purpose
                  </th>
                  <th className="p-4 text-[14px] font-bold text-[#132651] font-inter">
                    Indp. Req?
                  </th>
                  <th className="p-4 text-[14px] font-bold text-[#132651] font-inter">
                    Comp User?
                  </th>
                  <th className="p-4 text-[14px] font-bold text-[#132651] font-inter">
                    Notes
                  </th>
                  <th className="p-4 text-[14px] font-bold text-[#132651] text-right font-inter">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3E6EC]">
                {data.items.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-[#FAFBFD] transition-colors"
                  >
                    <td className="p-4 text-[14px] font-bold text-[#132651] font-inter whitespace-pre-line">
                      {item.name}
                    </td>
                    <td className="p-4 text-[14px] text-[#5A6886] font-inter whitespace-pre-line">
                      {item.purpose}
                    </td>
                    <td className="p-4 text-[14px] text-[#5A6886] font-inter">
                      {item.indpReq || "—"}
                    </td>
                    <td className="p-4 text-[14px] text-[#5A6886] font-inter">
                      {item.compUser || "—"}
                    </td>
                    <td className="p-4 text-[14px] text-[#5A6886] font-inter whitespace-pre-line">
                      {item.notes || "—"}
                    </td>
                    <td className="p-4 text-[14px] text-right whitespace-nowrap font-inter">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => openEditModal(item)}
                          className="p-1.5 rounded-[4px] border border-[#DCE0E7] text-[#5A6886] hover:text-[#132651] hover:bg-[#F3F5F8] transition"
                          title="Edit item"
                        >
                          <Pencil className="size-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => onRemovePlantToolItem(item.id)}
                          className="p-1.5 rounded-[4px] border border-[#DCE0E7] text-[#ef4444] hover:bg-[#fff1f2] transition"
                          title="Delete item"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {data.items.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="p-8 text-center text-[#5A6886] text-[14px] font-inter"
                    >
                      No equipment or tools listed. Click "Add Equipment / Tool" to register one.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Supporting Documents Section */}
          <div className="flex flex-col gap-4 mt-6">
            <h3 className="text-[18px] font-bold text-[#132651] font-inter">
              Supporting Documents
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Box 1: Inspection Certificate */}
              <div
                onClick={() => inspectionRef.current?.click()}
                className={`border-2 border-dashed rounded-[8px] p-6 flex flex-col items-center justify-center text-center cursor-pointer transition min-h-[140px] ${
                  inspectionFile
                    ? "border-[#16a34a] bg-[#16a34a]/5 text-[#16a34a]"
                    : "border-[#DCE0E7] bg-white hover:border-[#132651] text-[#5A6886]"
                }`}
              >
                <input
                  type="file"
                  ref={inspectionRef}
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setInspectionFile(file.name);
                  }}
                />
                {inspectionFile ? (
                  <div className="flex flex-col items-center gap-2">
                    <FileCheck className="size-8 text-[#16a34a]" />
                    <span className="text-[12px] font-bold text-[#132651] max-w-[180px] truncate font-inter">
                      {inspectionFile}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setInspectionFile(null);
                      }}
                      className="text-[11px] text-red-500 hover:underline font-bold font-inter"
                    >
                      Remove file
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <UploadCloud className="size-8 text-[#A3ACBA]" />
                    <span className="text-[12px] font-semibold text-[#132651] font-inter">
                      Upload equipment inspection certificate
                    </span>
                  </div>
                )}
              </div>

              {/* Box 2: Calibration Certificate */}
              <div
                onClick={() => calibrationRef.current?.click()}
                className={`border-2 border-dashed rounded-[8px] p-6 flex flex-col items-center justify-center text-center cursor-pointer transition min-h-[140px] ${
                  calibrationFile
                    ? "border-[#16a34a] bg-[#16a34a]/5 text-[#16a34a]"
                    : "border-[#DCE0E7] bg-white hover:border-[#132651] text-[#5A6886]"
                }`}
              >
                <input
                  type="file"
                  ref={calibrationRef}
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setCalibrationFile(file.name);
                  }}
                />
                {calibrationFile ? (
                  <div className="flex flex-col items-center gap-2">
                    <FileCheck className="size-8 text-[#16a34a]" />
                    <span className="text-[12px] font-bold text-[#132651] max-w-[180px] truncate font-inter">
                      {calibrationFile}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCalibrationFile(null);
                      }}
                      className="text-[11px] text-red-500 hover:underline font-bold font-inter"
                    >
                      Remove file
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <UploadCloud className="size-8 text-[#A3ACBA]" />
                    <span className="text-[12px] font-semibold text-[#132651] font-inter">
                      Upload calibration certificate
                    </span>
                  </div>
                )}
              </div>

              {/* Box 3: Tool Manual */}
              <div
                onClick={() => manualRef.current?.click()}
                className={`border-2 border-dashed rounded-[8px] p-6 flex flex-col items-center justify-center text-center cursor-pointer transition min-h-[140px] ${
                  manualFile
                    ? "border-[#16a34a] bg-[#16a34a]/5 text-[#16a34a]"
                    : "border-[#DCE0E7] bg-white hover:border-[#132651] text-[#5A6886]"
                }`}
              >
                <input
                  type="file"
                  ref={manualRef}
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setManualFile(file.name);
                  }}
                />
                {manualFile ? (
                  <div className="flex flex-col items-center gap-2">
                    <FileCheck className="size-8 text-[#16a34a]" />
                    <span className="text-[12px] font-bold text-[#132651] max-w-[180px] truncate font-inter">
                      {manualFile}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setManualFile(null);
                      }}
                      className="text-[11px] text-red-500 hover:underline font-bold font-inter"
                    >
                      Remove file
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <UploadCloud className="size-8 text-[#A3ACBA]" />
                    <span className="text-[12px] font-semibold text-[#132651] font-inter">
                      Upload tool manual
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[#f3f5f8]">
            <button
              type="button"
              onClick={onSaveDraft}
              className="h-[34px] px-4 rounded-[6px] border border-[#132651] bg-white text-[#132651] text-[12px] font-bold transition hover:bg-brand-bg-main font-inter"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={onNextStep}
              className="h-[34px] px-4 rounded-[6px] bg-[#132651] text-white text-[12px] font-bold transition hover:opacity-90 font-inter"
            >
              Next: PPE &amp; Emergency
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Helper Side */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 w-full">
        {/* Info Box / Equipment Guidance */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-[12px] gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#132651] shrink-0 mt-0.5" />
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-bold text-[#132651] font-inter">
                Equipment Guidance
              </h4>
              <p className="text-[14px] leading-[1.6] text-[#5A6886] font-inter">
                Include tools and plant that require inspection. This ensures that
                maintenance logs are kept up to date and safety standards are adhered
                to on site.
              </p>
            </div>
          </div>
          <ul className="flex flex-col gap-2.5 pl-8 list-disc text-[14px] text-[#5A6886] font-inter">
            <li>Check for valid PAT testing on all electrical items.</li>
            <li>Ensure lifting equipment has a current 6-monthly LOLER certificate.</li>
            <li>Ladders must be inspected prior to use and marked as fit for purpose.</li>
          </ul>
        </div>

        {/* Builder Progress Card */}
        <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-[12px] gap-6">
          <h4 className="text-[20px] font-bold text-[#132651] font-inter">
            Builder Progress
          </h4>

          <div className="flex flex-col gap-4">
            {/* Step 1 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] text-[#5A6886] font-inter">
                Project Details
              </span>
              <CheckCircle2 className="size-5 text-[#16a34a]" />
            </div>

            {/* Step 2 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] text-[#5A6886] font-inter">
                Scope of Works
              </span>
              <CheckCircle2 className="size-5 text-[#16a34a]" />
            </div>

            {/* Step 3 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] text-[#5A6886] font-inter">
                Sequence of Works
              </span>
              <CheckCircle2 className="size-5 text-[#16a34a]" />
            </div>

            {/* Step 4 Progress */}
            <div className="flex items-center justify-between border-b border-[#F3F5F8] pb-3">
              <span className="text-[16px] font-bold text-[#132651] font-inter">
                Plant / Tools / Equipment
              </span>
              <div className="size-5 rounded-full border-2 border-[#132651] bg-[#132651]/10 flex items-center justify-center">
                <div className="size-2 rounded-full bg-[#132651]" />
              </div>
            </div>

            {/* Step 5 Progress */}
            <div className="flex items-center justify-between pb-1 opacity-60">
              <span className="text-[16px] text-[#5A6886] font-inter">
                PPE &amp; Emergency
              </span>
              <div className="size-5 rounded-full border border-[#E3E6EC]" />
            </div>
          </div>

          {/* Action button */}
          <button
            type="button"
            onClick={onSaveDraft}
            className="flex items-center justify-center gap-2 h-[34px] w-full rounded-[6px] border border-[#132651] bg-white text-[#132651] text-[12px] font-bold transition hover:bg-brand-bg-main font-inter"
          >
            <Eye className="size-4" /> Preview Draft
          </button>
        </div>
      </div>

      {/* Modal Dialog for Add / Edit Equipment */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[12px] border border-[#E3E6EC] shadow-2xl w-full max-w-lg flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F3F5F8]">
              <h3 className="text-[18px] font-bold text-[#132651] font-inter">
                {editingItem ? "Edit Equipment / Tool" : "Add Equipment / Tool"}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-[#5A6886] hover:text-[#132651] transition"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 p-6">
              {/* Equipment/Tool Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-bold text-[#132651] font-inter">
                  Equipment / Tool Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Scaffold / Access Equipment, Power Tools"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-[44px] px-3 border border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition font-inter"
                />
              </div>

              {/* Purpose */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-bold text-[#132651] font-inter">
                  Purpose
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Work at height access, General drilling"
                  value={formData.purpose}
                  onChange={(e) =>
                    setFormData({ ...formData, purpose: e.target.value })
                  }
                  className="w-full h-[44px] px-3 border border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition font-inter"
                />
              </div>

              {/* Indp. Req? */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-bold text-[#132651] font-inter">
                  Independent Requirement?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Site Audit, Compliance, None"
                  value={formData.indpReq}
                  onChange={(e) =>
                    setFormData({ ...formData, indpReq: e.target.value })
                  }
                  className="w-full h-[44px] px-3 border border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition font-inter"
                />
              </div>

              {/* Comp User? */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-bold text-[#132651] font-inter">
                  Competent User / Location?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Central Plaza Dev., North Tower, Site Supervisor"
                  value={formData.compUser}
                  onChange={(e) =>
                    setFormData({ ...formData, compUser: e.target.value })
                  }
                  className="w-full h-[44px] px-3 border border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition font-inter"
                />
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-bold text-[#132651] font-inter">
                  Notes
                </label>
                <textarea
                  placeholder="e.g. Must be PASMA tagged, PAT tested only"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full h-[80px] p-3 border border-[#DCE0E7] bg-white rounded-[6px] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#A3ACBA] transition resize-none font-inter"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-[#F3F5F8]">
                <button
                  type="button"
                  onClick={closeModal}
                  className="h-[38px] px-4 rounded-[6px] border border-[#132651] bg-white text-[#132651] text-[12px] font-bold transition hover:bg-brand-bg-main font-inter"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-[38px] px-4 rounded-[6px] bg-[#132651] text-white text-[12px] font-bold transition hover:opacity-90 font-inter"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
