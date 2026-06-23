"use client";

import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
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
  const [location, setLocation] = useState("");
  const [workType, setWorkType] = useState("");
  const [useTemplate, setUseTemplate] = useState("Blank Assessment (Start From Scratch)");
  const [saveAsDraft, setSaveAsDraft] = useState(true);

  if (!isOpen) return null;

  const handleStart = () => {
    if (title.trim()) {
      onStart(title.trim(), location || "Manchester Distribution Hub", workType || "Roofing Works", useTemplate);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 backdrop-blur-sm p-4 font-sans">
      <div className="w-full max-w-[600px] rounded-xl border border-[#e3e6ec] bg-white p-8 shadow-2xl space-y-6 relative">
        
        {/* Close Button - Top Right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 p-1.5 rounded-full text-brand-secondary hover:bg-slate-100 hover:text-brand-primary transition-colors cursor-pointer"
        >
          <X className="size-5" />
        </button>

        {/* Modal Title */}
        <div>
          <h3 className="text-[20px] font-bold text-brand-primary">Start New Risk Assessment</h3>
        </div>

        {/* Modal Body */}
        <div className="space-y-5">
          {/* Assessment Title */}
          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-brand-primary block">
              Assessment Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Roof Inspection - Block A"
              className="h-11 w-full rounded-[6px] border border-[#DCE0E7] bg-white px-3.5 text-[14px] text-brand-primary outline-none transition placeholder:text-[#A3ACBA] focus:border-brand-primary"
            />
          </div>

          {/* Project/Location & Work Type - 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Project/Location select */}
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-brand-primary block">
                Project/Location
              </label>
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-11 w-full rounded-[6px] border border-[#DCE0E7] bg-white px-3.5 text-[14px] text-brand-primary outline-none transition focus:border-brand-primary appearance-none pr-10 cursor-pointer"
                >
                  <option value="">Select Location</option>
                  <option value="Manchester Distribution Hub">Manchester Distribution Hub</option>
                  <option value="London Bridge Refurbishment">London Bridge Refurbishment</option>
                  <option value="Riverside Apartments">Riverside Apartments</option>
                  <option value="Wembley Retail Fit-Out">Wembley Retail Fit-Out</option>
                  <option value="Camden School Extension">Camden School Extension</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-[#8a96ab] pointer-events-none" />
              </div>
            </div>

            {/* Work Type select */}
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-brand-primary block">
                Work Type
              </label>
              <div className="relative">
                <select
                  value={workType}
                  onChange={(e) => setWorkType(e.target.value)}
                  className="h-11 w-full rounded-[6px] border border-[#DCE0E7] bg-white px-3.5 text-[14px] text-brand-primary outline-none transition focus:border-brand-primary appearance-none pr-10 cursor-pointer"
                >
                  <option value="">Select Work Type</option>
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
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-[#8a96ab] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Use Template select */}
          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-brand-primary block">
              Use Template
            </label>
            <div className="relative">
              <select
                value={useTemplate}
                onChange={(e) => setUseTemplate(e.target.value)}
                className="h-11 w-full rounded-[6px] border border-[#DCE0E7] bg-white px-3.5 text-[14px] text-brand-primary outline-none transition focus:border-brand-primary appearance-none pr-10 cursor-pointer"
              >
                <option value="Blank Assessment (Start From Scratch)">Blank Assessment (Start From Scratch)</option>
                <option value="Standard HSE Work at Height Template">Standard HSE Work at Height Template</option>
                <option value="General Groundworks Safety Template">General Groundworks Safety Template</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-[#8a96ab] pointer-events-none" />
            </div>
          </div>

          {/* Save as draft checkbox */}
          <div className="pt-2">
            <label className="flex items-center gap-3 cursor-pointer select-none w-fit">
              <input
                type="checkbox"
                checked={saveAsDraft}
                onChange={(e) => setSaveAsDraft(e.target.checked)}
                className="size-4.5 rounded border-[#DCE0E7] text-brand-primary focus:ring-brand-primary cursor-pointer accent-brand-primary"
              />
              <span className="text-[13.5px] font-medium text-brand-secondary">
                Save as draft while I work
              </span>
            </label>
          </div>
        </div>

        {/* Start Builder Button - Bottom Left aligned */}
        <div className="flex items-center justify-start pt-2">
          <Button
            type="button"
            onClick={handleStart}
            disabled={!title.trim()}
            className="h-10 px-5 rounded-[6px] bg-brand-primary text-[13px] font-bold text-white hover:bg-[#0d1b3a] disabled:opacity-50 cursor-pointer"
          >
            Start Builder
          </Button>
        </div>

      </div>
    </div>
  );
}
