"use client";

import React, { useState, useRef } from "react";
import { Plus, X, Eye, Download, UploadCloud, FileCheck } from "lucide-react";
import type { MethodStatementPlantTools, PlantToolItem } from "./types";

interface PlantToolsStepProps {
  data: MethodStatementPlantTools;
  onAddPlantToolItem: (item: Omit<PlantToolItem, "id">) => void;
  onRemovePlantToolItem: (id: string) => void;
  onUpdatePlantToolItem: (
    id: string,
    field: keyof Omit<PlantToolItem, "id">,
    value: string,
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PlantToolItem | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
    indpReq: "",
    compUser: "",
    notes: "",
  });

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
      onUpdatePlantToolItem(editingItem.id, "name", formData.name.trim());
      onUpdatePlantToolItem(editingItem.id, "purpose", formData.purpose.trim());
      onUpdatePlantToolItem(editingItem.id, "indpReq", formData.indpReq.trim());
      onUpdatePlantToolItem(
        editingItem.id,
        "compUser",
        formData.compUser.trim(),
      );
      onUpdatePlantToolItem(editingItem.id, "notes", formData.notes.trim());
    } else {
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

  const completedSteps = 2;
  const totalSteps = 4;
  const progressPct = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div className='flex flex-col gap-5 w-full'>
      {/* ── Disclaimer Banner ── */}
      <div className='flex flex-col gap-1 px-5 py-3.5 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px]'>
        <div className='flex items-center gap-2'>
          {/* Warning triangle icon */}
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            className='shrink-0'>
            <path
              d='M9 1.5L16.5 15H1.5L9 1.5Z'
              stroke='#DC2626'
              strokeWidth='1.6'
              strokeLinejoin='round'
            />
            <path
              d='M9 7v3.5'
              stroke='#DC2626'
              strokeWidth='1.6'
              strokeLinecap='round'
            />
            <circle cx='9' cy='13' r='0.75' fill='#DC2626' />
          </svg>
          <p className='text-[13px] font-bold text-[#DC2626] font-inter'>
            Disclaimer: Ensure All Equipment Listed Appropriate for the task and
            subject to site-specific inspection
          </p>
        </div>
        <p className='text-[12.5px] text-[#DC2626]/80 font-inter pl-6'>
          Users must be trained and competent in the use of any plant or
          equipment specified below.
        </p>
      </div>

      {/* ── Two-column layout ── */}
      <div className='grid grid-cols-12 gap-6 w-full items-start'>
        {/* ─── Left Column — Main Card ─── */}
        <div className='col-span-12 lg:col-span-8 flex flex-col gap-5'>
          <div className='flex flex-col bg-white border border-[#E3E6EC]/60 rounded-[16px] pt-8 px-8 pb-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] gap-6'>
            {/* Card Header */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                {/* Notebook SVG icon */}
                <svg
                  width='28'
                  height='28'
                  viewBox='0 0 28 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='shrink-0'>
                  <path
                    d='M3 6.5H5.5'
                    stroke='#132651'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                  />
                  <path
                    d='M3 11.5H5.5'
                    stroke='#132651'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                  />
                  <path
                    d='M3 16.5H5.5'
                    stroke='#132651'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                  />
                  <path
                    d='M3 21.5H5.5'
                    stroke='#132651'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                  />
                  <rect
                    x='5.5'
                    y='2.5'
                    width='19.5'
                    height='23'
                    rx='2.5'
                    stroke='#132651'
                    strokeWidth='2.5'
                  />
                  <path
                    d='M10.5 8.5H19.5'
                    stroke='#132651'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <path
                    d='M10.5 13.5H19.5'
                    stroke='#132651'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <path
                    d='M10.5 18.5H15.5'
                    stroke='#132651'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
                <h2 className='text-[20px] font-bold text-brand-primary font-inter'>
                  Step 4: Plant / Tools / Equipment
                </h2>
              </div>
              <button
                type='button'
                onClick={openAddModal}
                className='flex items-center gap-1.5 h-9 px-4 bg-brand-primary text-white text-[12.5px] font-bold rounded-[6px] hover:opacity-90 transition font-inter cursor-pointer shrink-0'>
                <Plus className='size-3.5' strokeWidth={2.5} />
                Add Equipment / Tool
              </button>
            </div>

            {/* Equipment Table */}
            <div className='w-full overflow-x-auto border border-[#E3E6EC] rounded-[8px] bg-white'>
              <table className='w-full text-left border-collapse'>
                <thead>
                  <tr className='bg-[#FAFBFD] border-b border-[#E3E6EC]'>
                    {[
                      "Equipment/Tool",
                      "Purpose",
                      "Indp. Req*",
                      "Comp User*",
                      "Notes",
                      "Actions",
                    ].map((col, i) => (
                      <th
                        key={col}
                        className={`px-4 py-3 text-[12.5px] font-bold text-brand-primary font-inter whitespace-nowrap ${
                          i === 5 ? "text-right" : ""
                        }`}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className='divide-y divide-[#F3F5F8]'>
                  {data.items.map((item) => (
                    <tr
                      key={item.id}
                      className='hover:bg-[#FAFBFD] transition-colors'>
                      <td className='px-4 py-3 text-[12.5px] font-bold text-brand-primary font-inter max-w-35'>
                        {item.name}
                      </td>
                      <td className='px-4 py-3 text-[12.5px] text-[#5A6886] font-inter max-w-27.5'>
                        {item.purpose}
                      </td>
                      <td className='px-4 py-3 text-[12.5px] text-[#5A6886] font-inter whitespace-nowrap'>
                        {item.indpReq || "—"}
                      </td>
                      <td className='px-4 py-3 text-[12.5px] text-[#5A6886] font-inter whitespace-nowrap'>
                        {item.compUser || "—"}
                      </td>
                      <td className='px-4 py-3 text-[12.5px] text-[#5A6886] font-inter max-w-30'>
                        {item.notes || "—"}
                      </td>
                      <td className='px-4 py-3 text-right whitespace-nowrap'>
                        <div className='flex items-center justify-end gap-2'>
                          <button
                            type='button'
                            onClick={() => openEditModal(item)}
                            className='p-1.5 rounded-lg text-[#5A6886] hover:text-brand-primary hover:bg-[#F3F5F8] transition cursor-pointer'
                            title='View / Edit'>
                            <Eye className='size-3.5' />
                          </button>
                          <button
                            type='button'
                            onClick={() => onRemovePlantToolItem(item.id)}
                            className='p-1.5 rounded-lg text-[#5A6886] hover:text-brand-primary hover:bg-[#F3F5F8] transition cursor-pointer'
                            title='Download / Remove'>
                            <Download className='size-3.5' />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {data.items.length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className='px-4 py-8 text-center text-[12.5px] text-[#A3ACBA] font-inter'>
                        No equipment or tools listed. Click &quot;Add Equipment
                        / Tool&quot; to register one.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Supporting Documents */}
            <div className='flex flex-col gap-4 mt-2'>
              <h3 className='text-[16px] font-bold text-brand-primary font-inter'>
                Supporting Documents
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {[
                  {
                    ref: inspectionRef,
                    file: inspectionFile,
                    setFile: setInspectionFile,
                    label: "Upload equipment inspection certificate",
                  },
                  {
                    ref: calibrationRef,
                    file: calibrationFile,
                    setFile: setCalibrationFile,
                    label: "Upload calibration certificate",
                  },
                  {
                    ref: manualRef,
                    file: manualFile,
                    setFile: setManualFile,
                    label: "Upload tool manual",
                  },
                ].map(({ ref, file, setFile, label }) => (
                  <div
                    key={label}
                    onClick={() => ref.current?.click()}
                    className={`border-2 border-dashed rounded-[10px] p-5 flex flex-col items-center justify-center text-center cursor-pointer transition min-h-30 gap-2 ${
                      file
                        ? "border-[#22c55e] bg-[#f0fdf4]"
                        : "border-[#DCE0E7] bg-white hover:border-brand-primary"
                    }`}>
                    <input
                      type='file'
                      ref={ref}
                      className='hidden'
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) setFile(f.name);
                      }}
                    />
                    {file ? (
                      <>
                        <FileCheck className='size-7 text-[#22c55e]' />
                        <span className='text-[11.5px] font-bold text-brand-primary max-w-40 truncate font-inter'>
                          {file}
                        </span>
                        <button
                          type='button'
                          onClick={(e) => {
                            e.stopPropagation();
                            setFile(null);
                          }}
                          className='text-[11px] text-red-500 hover:underline font-bold font-inter'>
                          Remove file
                        </button>
                      </>
                    ) : (
                      <>
                        <UploadCloud className='size-7 text-[#A3ACBA]' />
                        <span className='text-[11.5px] font-semibold text-brand-primary font-inter leading-[1.4]'>
                          {label}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Buttons — outside card */}
          <div className='flex items-center gap-3'>
            <button
              type='button'
              onClick={onSaveDraft}
              className='h-9.5 px-5 rounded-[6px] border border-brand-primary bg-white text-brand-primary text-[13px] font-bold transition hover:bg-[#F3F5F8] cursor-pointer font-inter'>
              Save Draft
            </button>
            <button
              type='button'
              onClick={onNextStep}
              className='h-9.5 px-5 rounded-[6px] bg-brand-primary text-white text-[13px] font-bold transition hover:opacity-90 cursor-pointer font-inter'>
              Next: Plant / Tools
            </button>
          </div>
        </div>

        {/* ─── Right Column — Sidebar ─── */}
        <div className='col-span-12 lg:col-span-4 flex flex-col gap-5'>
          {/* Equipment Guidance Card */}
          <div className='flex flex-col p-5 bg-[#E8F0FE] border border-[#ADC6FF]/30 rounded-[12px] gap-3'>
            <div className='flex items-center gap-2'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                className='shrink-0'>
                <circle
                  cx='10'
                  cy='10'
                  r='9'
                  stroke='#1a73e8'
                  strokeWidth='1.8'
                />
                <path
                  d='M10 9v5'
                  stroke='#1a73e8'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                />
                <circle cx='10' cy='6.5' r='0.9' fill='#1a73e8' />
              </svg>
              <h4 className='text-[13.5px] font-bold text-brand-primary font-inter'>
                Equipment Guidance
              </h4>
            </div>

            <p className='text-[13px] leading-[1.65] text-brand-primary font-inter'>
              Include tools and plant that require inspection. This ensures that
              maintenance logs are kept up to date and safety standards are
              adhered to on site.
            </p>

            <ul className='flex flex-col gap-1.5 text-[13px] text-brand-primary font-inter'>
              {[
                "Check for valid PAT testing on all electrical items.",
                "Ensure lifting equipment has a current 6-monthly LOLER certificate.",
                "Ladders must be inspected prior to use and marked as fit for purpose.",
              ].map((text, i) => (
                <li key={i} className='flex items-start gap-2'>
                  <span className='mt-1.5 size-1.5 rounded-full bg-brand-primary shrink-0' />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Section Progress Card */}
          <div className='flex flex-col p-6 bg-white border border-[#E3E6EC]/60 rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] gap-4'>
            <h4 className='text-[18px] font-bold text-brand-primary font-inter'>
              Section Progress
            </h4>

            <div className='flex flex-col gap-3'>
              <div className='flex items-center justify-between'>
                <span className='text-[13px] text-[#5A6886] font-inter'>
                  Completed Steps
                </span>
                <span className='text-[13px] font-bold text-brand-primary font-inter'>
                  {completedSteps}/{totalSteps}
                </span>
              </div>

              {/* Progress bar */}
              <div className='w-full h-2 bg-[#E3E6EC] rounded-full overflow-hidden'>
                <div
                  className='h-full bg-brand-primary rounded-full transition-all duration-500'
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Add / Edit Modal ── */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'>
          <div className='bg-white rounded-[12px] border border-[#E3E6EC] shadow-2xl w-full max-w-lg flex flex-col overflow-hidden'>
            {/* Modal Header */}
            <div className='flex items-center justify-between px-6 py-4 border-b border-[#F3F5F8]'>
              <h3 className='text-[18px] font-bold text-brand-primary font-inter'>
                {editingItem ? "Edit Equipment / Tool" : "Add Equipment / Tool"}
              </h3>
              <button
                type='button'
                onClick={closeModal}
                className='text-[#5A6886] hover:text-brand-primary transition cursor-pointer'>
                <X className='size-5' />
              </button>
            </div>

            {/* Modal Form */}
            <form
              onSubmit={handleFormSubmit}
              className='flex flex-col gap-4 p-6'>
              {[
                {
                  label: "Equipment / Tool Name",
                  key: "name",
                  placeholder: "e.g. Scaffold / Access Equipment, Power Tools",
                  required: true,
                },
                {
                  label: "Purpose",
                  key: "purpose",
                  placeholder: "e.g. Work at height access, General drilling",
                  required: true,
                },
                {
                  label: "Independent Requirement?",
                  key: "indpReq",
                  placeholder: "e.g. Site Audit, Compliance, None",
                  required: false,
                },
                {
                  label: "Competent User / Location?",
                  key: "compUser",
                  placeholder:
                    "e.g. Central Plaza Dev., North Tower, Supervisor",
                  required: false,
                },
              ].map(({ label, key, placeholder, required }) => (
                <div key={key} className='flex flex-col gap-1.5'>
                  <label className='text-[13.5px] font-bold text-brand-primary font-inter'>
                    {label}
                  </label>
                  <input
                    type='text'
                    required={required}
                    placeholder={placeholder}
                    value={formData[key as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData({ ...formData, [key]: e.target.value })
                    }
                    className='w-full h-11 px-3 border border-[#DCE0E7] bg-white rounded-[6px] text-[13.5px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition font-inter'
                  />
                </div>
              ))}

              <div className='flex flex-col gap-1.5'>
                <label className='text-[13.5px] font-bold text-brand-primary font-inter'>
                  Notes
                </label>
                <textarea
                  placeholder='e.g. Must be PASMA tagged, PAT tested only'
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className='w-full h-20 p-3 border border-[#DCE0E7] bg-white rounded-[6px] text-[13.5px] text-brand-primary outline-none focus:border-brand-primary placeholder:text-[#A3ACBA] transition resize-none font-inter'
                />
              </div>

              <div className='flex items-center justify-end gap-3 mt-2 pt-4 border-t border-[#F3F5F8]'>
                <button
                  type='button'
                  onClick={closeModal}
                  className='h-9.5 px-4 rounded-[6px] border border-brand-primary bg-white text-brand-primary text-[12.5px] font-bold transition hover:bg-[#F3F5F8] font-inter cursor-pointer'>
                  Cancel
                </button>
                <button
                  type='submit'
                  className='h-9.5 px-4 rounded-[6px] bg-brand-primary text-white text-[12.5px] font-bold transition hover:opacity-90 font-inter cursor-pointer'>
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
