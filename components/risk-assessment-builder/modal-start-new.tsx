"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModalStartNewProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: (title: string, location: string, workType: string, useTemplate: string) => void;
}

export function ModalStartNew({
  isOpen,
  onClose,
  onStart,
}: ModalStartNewProps) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Manchester Distribution Hub");
  const [workType, setWorkType] = useState("Roofing Works");
  const [useTemplate, setUseTemplate] = useState("Blank Assessment (Start From Scratch)");
  const [saveAsDraft, setSaveAsDraft] = useState(true);

  if (!isOpen) return null;

  const handleStart = () => {
    if (title.trim()) {
      onStart(title.trim(), location, workType, useTemplate);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/30 backdrop-blur-sm p-4 font-sans">
      <div className="w-full max-w-[500px] rounded-xl border border-[#e3e6ec] bg-white p-6 shadow-2xl space-y-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#f3f5f8] pb-3">
          <h3 className="text-[18px] font-bold text-brand-primary">Start New Risk Assessment</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-brand-secondary hover:bg-slate-100 hover:text-brand-primary transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-4">
          {/* Assessment Title */}
          <div className="space-y-1.5">
            <label className="text-[12px] font-bold text-brand-primary block">
              Assessment Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Roof Inspection - Block A"
              className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
            />
          </div>

          {/* Project/Location select */}
          <div className="space-y-1.5">
            <label className="text-[12px] font-bold text-brand-primary block">
              Project/Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition focus:border-brand-primary cursor-pointer"
            >
              <option value="Manchester Distribution Hub">Manchester Distribution Hub</option>
              <option value="London Bridge Refurbishment">London Bridge Refurbishment</option>
              <option value="Riverside Apartments">Riverside Apartments</option>
              <option value="Wembley Retail Fit-Out">Wembley Retail Fit-Out</option>
              <option value="Camden School Extension">Camden School Extension</option>
            </select>
          </div>

          {/* Work Type select */}
          <div className="space-y-1.5">
            <label className="text-[12px] font-bold text-brand-primary block">
              Work Type
            </label>
            <select
              value={workType}
              onChange={(e) => setWorkType(e.target.value)}
              className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition focus:border-brand-primary cursor-pointer"
            >
              <option value="General Building Works">General Building Works</option>
              <option value="Roofing Works">Roofing Works</option>
              <option value="Electrical Works">Electrical Works</option>
              <option value="Groundworks">Groundworks</option>
              <option value="Excavation Works">Excavation Works</option>
              <option value="Demolition / Strip-Out">Demolition / Strip-Out</option>
              <option value="Painting / Decorating">Painting / Decorating</option>
              <option value="Plumbing / Heating Works">Plumbing / Heating Works</option>
              <option value="Carpentry / Joinery">Carpentry / Joinery</option>
              <option value="Flooring">Flooring</option>
              <option value="Bricklaying / Blockwork">Bricklaying / Blockwork</option>
              <option value="Hot Works">Hot Works</option>
            </select>
          </div>

          {/* Use Template select */}
          <div className="space-y-1.5">
            <label className="text-[12px] font-bold text-brand-primary block">
              Use Template
            </label>
            <select
              value={useTemplate}
              onChange={(e) => setUseTemplate(e.target.value)}
              className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition focus:border-brand-primary cursor-pointer"
            >
              <option value="Blank Assessment (Start From Scratch)">Blank Assessment (Start From Scratch)</option>
              <option value="Standard HSE Work at Height Template">Standard HSE Work at Height Template</option>
              <option value="General Groundworks Safety Template">General Groundworks Safety Template</option>
            </select>
          </div>

          {/* Save as draft checkbox */}
          <label className="flex items-center gap-3 cursor-pointer pt-2">
            <input
              type="checkbox"
              checked={saveAsDraft}
              onChange={(e) => setSaveAsDraft(e.target.checked)}
              className="size-4 rounded border-[#c5c6cd] text-brand-primary accent-brand-primary"
            />
            <span className="text-[13px] font-medium text-brand-primary">Save as draft while I work</span>
          </label>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-[#f3f5f8] pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="h-8.5 px-4 rounded-[6px] border-[#d7dce5] bg-white text-[12px] font-bold text-brand-secondary shadow-none hover:bg-slate-50"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleStart}
            disabled={!title.trim()}
            className="h-8.5 px-4 rounded-[6px] bg-brand-primary text-[12px] font-bold text-white hover:bg-brand-primary/95 disabled:opacity-50"
          >
            Start Builder
          </Button>
        </div>
      </div>
    </div>
  );
}
