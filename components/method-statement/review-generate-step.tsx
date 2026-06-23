"use client";

import React, { useRef, useState, useEffect } from "react";
import { Edit2, Shield, Wrench, ClipboardList, Info, Check, Eye, X, FileText } from "lucide-react";
import { PPE_OPTIONS, type MethodStatementDraft, type MethodStatementFinalApproval, type MethodStatementStepId } from "./types";

interface ReviewGenerateStepProps {
  draft: MethodStatementDraft;
  onUpdateFinalApproval: <Key extends keyof MethodStatementFinalApproval>(key: Key, value: MethodStatementFinalApproval[Key]) => void;
  onSaveDraft: () => void;
  onGeneratePdf: () => void;
  onSubmitReview: () => void;
  onEditStep: (stepId: MethodStatementStepId) => void;
}

// Interactive Drawing Canvas Signature Pad Component
function SignaturePad({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (val: string | null) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  // Get mouse/touch coordinates relative to the canvas
  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ("touches" in e) {
      if (e.touches.length === 0) return { x: 0, y: 0 };
      const touch = e.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = "#132651";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas && hasDrawn) {
      const dataUrl = canvas.toDataURL("image/png");
      onChange(dataUrl);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    setHasDrawn(false);
    onChange(null);
  };

  // Adjust canvas size to parent container
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    // Use parent dimensions
    canvas.width = parent.clientWidth || 350;
    canvas.height = 140; // Fixed height

    // Redraw if cleared/re-opened
    if (!value) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      setHasDrawn(false);
    }
  }, [value]);

  if (value) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[140px] border border-[#E3E6EC] border-dashed rounded-[4px] relative overflow-hidden bg-[#F8FAFC]">
        <img src={value} alt="Signature" className="object-contain w-full h-full p-2" />
        <button
          onClick={clearCanvas}
          type="button"
          className="absolute top-2 right-2 bg-white border border-[#E3E6EC] hover:bg-[#132651] hover:text-white px-2.5 py-1 text-[11px] font-bold rounded-[4px] shadow-sm transition-all"
        >
          Sign Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col items-center justify-center w-full h-[140px] border border-[#E3E6EC] border-dashed rounded-[4px] relative overflow-hidden bg-[#F8FAFC] cursor-crosshair">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-full absolute inset-0"
        />
        <div className="flex flex-col items-center gap-1 pointer-events-none select-none opacity-40">
          <span className="text-[12px] text-[#5A6886] font-medium">Click &amp; draw signature here</span>
        </div>
      </div>
    </div>
  );
}

export function ReviewGenerateStep({
  draft,
  onUpdateFinalApproval,
  onSaveDraft,
  onGeneratePdf,
  onSubmitReview,
  onEditStep,
}: ReviewGenerateStepProps) {
  const { projectDetails, scopeOfWorks, sequenceOfWorks, plantTools, ppeEmergency, finalApproval } = draft;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Format step helper to print double digits (01, 02, etc.)
  const formatStepNumber = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto pb-16 text-brand-primary">
      <div className="flex items-center gap-3">
        <h2 className="text-[20px] font-bold text-[#132651] leading-[32px] font-inter">
          Step 6: Review &amp; Generate
        </h2>
      </div>

      {/* Grid of Review Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        
        {/* Card 1: Project Details */}
        <div className="flex flex-col bg-white border border-[#E3E6EC] rounded-xl overflow-hidden shadow-sm">
          <div className="flex justify-between items-center p-5 border-b border-[#E3E6EC] bg-slate-50/50">
            <div className="flex items-center gap-2.5">
              <ClipboardList className="w-5 h-5 text-[#132651]" />
              <h3 className="text-base font-bold text-[#132651] font-inter">Project Details</h3>
            </div>
            <button
              onClick={() => onEditStep("project-details")}
              className="flex items-center gap-1 px-3 py-1.5 border border-[#E3E6EC] rounded-[6px] text-xs font-bold text-[#132651] bg-white hover:bg-slate-50 transition-colors"
            >
              <Edit2 className="w-3 h-3 text-[#132651]" />
              <span>Edit</span>
            </button>
          </div>
          <div className="p-5 flex flex-col gap-4 text-sm">
            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-[#F3F5F8]">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Project:</span>
              <span className="col-span-2 text-[#132651] font-bold">{projectDetails.projectName || "N/A"}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-[#F3F5F8]">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Client:</span>
              <span className="col-span-2 text-[#132651]">{projectDetails.clientContractor || "N/A"}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-[#F3F5F8]">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Address:</span>
              <span className="col-span-2 text-[#132651]">{projectDetails.siteAddress || "N/A"}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-[#F3F5F8]">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Activity:</span>
              <span className="col-span-2 text-[#132651]">{projectDetails.workActivity || "N/A"}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-[#F3F5F8]">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Start Date:</span>
              <span className="col-span-2 text-[#132651]">{projectDetails.plannedStartDate || "N/A"}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-[#F3F5F8]">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Duration:</span>
              <span className="col-span-2 text-[#132651]">{projectDetails.estimatedDuration || "N/A"}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1.5">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Operatives:</span>
              <span className="col-span-2 text-[#132651]">{projectDetails.numberOfOperatives || "N/A"}</span>
            </div>
          </div>
        </div>

        {/* Card 2: Scope of Works */}
        <div className="flex flex-col bg-white border border-[#E3E6EC] rounded-xl overflow-hidden shadow-sm">
          <div className="flex justify-between items-center p-5 border-b border-[#E3E6EC] bg-slate-50/50">
            <div className="flex items-center gap-2.5">
              <ClipboardList className="w-5 h-5 text-[#132651]" />
              <h3 className="text-base font-bold text-[#132651] font-inter">Scope of Works</h3>
            </div>
            <button
              onClick={() => onEditStep("scope-of-works")}
              className="flex items-center gap-1 px-3 py-1.5 border border-[#E3E6EC] rounded-[6px] text-xs font-bold text-[#132651] bg-white hover:bg-slate-50 transition-colors"
            >
              <Edit2 className="w-3 h-3 text-[#132651]" />
              <span>Edit</span>
            </button>
          </div>
          <div className="p-5 flex flex-col gap-4 text-sm overflow-y-auto max-h-[380px]">
            <div className="flex flex-col gap-1 py-1.5 border-b border-[#F3F5F8]">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Description of Works:</span>
              <p className="text-[#132651] leading-relaxed">{scopeOfWorks.descriptionOfWorks || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-1 py-1.5 border-b border-[#F3F5F8]">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Work Area / Location:</span>
              <p className="text-[#132651] leading-relaxed">{scopeOfWorks.workAreaLocation || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-1 py-1.5 border-b border-[#F3F5F8]">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Access / Egress Arrangements:</span>
              <p className="text-[#132651] leading-relaxed">{scopeOfWorks.accessEgress || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-1 py-1.5 border-b border-[#F3F5F8]">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Exclusions / Limitations:</span>
              <p className="text-[#132651] leading-relaxed">{scopeOfWorks.exclusionsLimitations || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Site-Specific Notes:</span>
              <p className="text-[#132651] leading-relaxed">{scopeOfWorks.siteSpecificNotes || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Card 3: Plant & Tools */}
        <div className="flex flex-col bg-white border border-[#E3E6EC] rounded-xl overflow-hidden shadow-sm">
          <div className="flex justify-between items-center p-5 border-b border-[#E3E6EC] bg-slate-50/50">
            <div className="flex items-center gap-2.5">
              <Wrench className="w-5 h-5 text-[#132651]" />
              <h3 className="text-base font-bold text-[#132651] font-inter">Plant &amp; Tools</h3>
            </div>
            <button
              onClick={() => onEditStep("plant-tools")}
              className="flex items-center gap-1 px-3 py-1.5 border border-[#E3E6EC] rounded-[6px] text-xs font-bold text-[#132651] bg-white hover:bg-slate-50 transition-colors"
            >
              <Edit2 className="w-3 h-3 text-[#132651]" />
              <span>Edit</span>
            </button>
          </div>
          <div className="p-5 flex flex-col gap-4 text-sm">
            {plantTools.items.length > 0 ? (
              <div className="flex flex-wrap gap-2.5">
                {plantTools.items.map((item) => (
                  <div key={item.id} className="flex flex-col gap-1 border border-[#E3E6EC] rounded-lg p-3 bg-[#F8FAFC] w-full">
                    <div className="flex justify-between items-start">
                      <span className="text-[#132651] font-bold text-sm">{item.name}</span>
                      <span className="text-[10px] uppercase font-bold text-[#5A6886] bg-slate-200/50 px-2 py-0.5 rounded">
                        {item.compUser || "General User"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-[#5A6886] mt-1.5">
                      <div>
                        <span className="font-semibold text-slate-400">Purpose: </span>
                        {item.purpose || "N/A"}
                      </div>
                      {item.notes && (
                        <div>
                          <span className="font-semibold text-slate-400">Notes: </span>
                          {item.notes}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <span className="text-brand-secondary py-4 text-center italic">No equipment or tools listed.</span>
            )}
          </div>
        </div>

        {/* Card 4: PPE & Emergency */}
        <div className="flex flex-col bg-white border border-[#E3E6EC] rounded-xl overflow-hidden shadow-sm">
          <div className="flex justify-between items-center p-5 border-b border-[#E3E6EC] bg-slate-50/50">
            <div className="flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-[#132651]" />
              <h3 className="text-base font-bold text-[#132651] font-inter">PPE &amp; Emergency</h3>
            </div>
            <button
              onClick={() => onEditStep("ppe-emergency")}
              className="flex items-center gap-1 px-3 py-1.5 border border-[#E3E6EC] rounded-[6px] text-xs font-bold text-[#132651] bg-white hover:bg-slate-50 transition-colors"
            >
              <Edit2 className="w-3 h-3 text-[#132651]" />
              <span>Edit</span>
            </button>
          </div>
          <div className="p-5 flex flex-col gap-4.5 text-sm overflow-y-auto max-h-[380px]">
            <div className="flex flex-col gap-1.5 py-1">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Required PPE:</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {ppeEmergency.selectedPpe.length > 0 ? (
                  ppeEmergency.selectedPpe.map((id) => (
                    <span key={id} className="inline-flex items-center px-2.5 py-1 border border-[#E3E6EC] bg-[#F8FAFC] rounded-[4px] text-xs font-semibold text-[#132651]">
                      {PPE_OPTIONS.find((o) => o.id === id)?.title || id}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-400 italic text-xs">None selected</span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4.5 border-t border-[#F3F5F8] pt-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Emergency Contact:</span>
                <p className="text-[#132651] font-semibold">{ppeEmergency.emergencyContactName || "N/A"}</p>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Contact Number:</span>
                <p className="text-[#132651] font-semibold">{ppeEmergency.emergencyContactNumber || "N/A"}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 border-t border-[#F3F5F8] pt-3">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">First Aid arrangements:</span>
              <p className="text-[#132651]">{ppeEmergency.firstAid || "N/A"}</p>
            </div>
            <div className="flex flex-col gap-1 border-t border-[#F3F5F8] pt-3">
              <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Nearest Hospital / A&amp;E:</span>
              <p className="text-[#132651]">{ppeEmergency.nearestHospital || "N/A"}</p>
            </div>
            <div className="grid grid-cols-2 gap-4.5 border-t border-[#F3F5F8] pt-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Environmental:</span>
                <p className="text-[#132651] text-xs">{ppeEmergency.environmentalControls || "N/A"}</p>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[#5A6886] font-semibold text-xs uppercase tracking-wider">Waste Control:</span>
                <p className="text-[#132651] text-xs">{ppeEmergency.wasteControls || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sequence of Works Preview Table Card */}
      <div className="flex flex-col bg-white border border-[#E3E6EC] rounded-xl overflow-hidden shadow-sm">
        <div className="flex justify-between items-center p-5 border-b border-[#E3E6EC] bg-slate-50/50">
          <h3 className="text-base font-bold text-[#132651] font-inter">
            Method Statement Preview — Sequence of Works
          </h3>
          <button
            onClick={() => onEditStep("sequence-of-works")}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E3E6EC] rounded-[6px] text-xs font-bold text-[#132651] bg-white hover:bg-slate-50 transition-colors"
          >
            <Edit2 className="w-3 h-3 text-[#132651]" />
            <span>Edit Sequence</span>
          </button>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-[#E3E6EC] text-[#132651]">
                <th className="p-4 text-xs font-bold uppercase tracking-wider w-[80px]">Step</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider min-w-[300px]">Required Control</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider">Responsible Person</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider">Required Equipment</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider">Safety Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E3E6EC]">
              {sequenceOfWorks.steps.map((step, idx) => (
                <tr key={step.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 align-top font-bold text-[#132651] text-sm">
                    {formatStepNumber(step.stepNumber || idx + 1)}
                  </td>
                  <td className="p-4 align-top text-sm font-medium text-[#132651] leading-relaxed max-w-[360px] whitespace-pre-line">
                    <span className="font-bold text-[#132651] block mb-1">{step.title}</span>
                    {step.descriptionOfWork || "N/A"}
                  </td>
                  <td className="p-4 align-top text-sm text-[#5A6886]">
                    {step.responsiblePerson || "N/A"}
                  </td>
                  <td className="p-4 align-top text-sm text-[#5A6886]">
                    {step.requiredEquipment || "N/A"}
                  </td>
                  <td className="p-4 align-top text-sm text-amber-800 bg-amber-50/30 font-medium">
                    {step.riskNotes || "N/A"}
                  </td>
                </tr>
              ))}
              {sequenceOfWorks.steps.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-400 italic text-sm">
                    No sequences added yet. Go back to Step 3 to add one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Final Declaration & Approval Panel */}
      <div className="flex flex-col bg-white border border-[#E3E6EC] rounded-xl overflow-hidden shadow-sm p-6 md:p-8 gap-8">
        <div className="flex items-center gap-3 pb-4 border-b border-[#E3E6EC]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15H7V16.5H15V15ZM17 11.5H7V13H17V11.5ZM17 8H7V9.5H17V8Z" fill="#132651"/>
          </svg>
          <h3 className="text-[18px] font-bold text-[#132651] font-inter">Final Declaration &amp; Approval</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651] font-semibold">Prepared By</label>
              <input
                type="text"
                value={finalApproval.assessorName}
                onChange={(e) => onUpdateFinalApproval("assessorName", e.target.value)}
                className="w-full px-4 py-3 border border-[#E3E6EC] rounded-md text-sm text-[#132651] bg-[#F8FAFC] outline-none focus:border-[#132651] focus:bg-white focus:ring-1 focus:ring-[#132651] transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651] font-semibold">Position</label>
              <input
                type="text"
                value={finalApproval.position}
                onChange={(e) => onUpdateFinalApproval("position", e.target.value)}
                placeholder="Principal Consultant"
                className="w-full px-4 py-3 border border-[#E3E6EC] rounded-md text-sm text-[#132651] bg-[#F8FAFC] outline-none focus:border-[#132651] focus:bg-white focus:ring-1 focus:ring-[#132651] transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651] font-semibold">Date</label>
              <input
                type="date"
                value={finalApproval.assessmentDate}
                onChange={(e) => onUpdateFinalApproval("assessmentDate", e.target.value)}
                className="w-full px-4 py-3 border border-[#E3E6EC] rounded-md text-sm text-[#132651] bg-[#F8FAFC] outline-none focus:border-[#132651] focus:bg-white focus:ring-1 focus:ring-[#132651] transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-[#132651] font-semibold">Digital Signature</label>
            
            <SignaturePad
              value={finalApproval.signatureImage}
              onChange={(val) => onUpdateFinalApproval("signatureImage", val)}
            />

            <span className="text-[12px] text-[#5A6886] leading-relaxed mt-2.5">
              By signing, you confirm that this Method Statement details a safe system of work to be followed by all operatives on site.
            </span>
          </div>
        </div>

        {/* Declaration check box styled as modern alert box */}
        <div className="flex flex-row items-start p-4 bg-[#E4EBFE] border border-[rgba(173,198,255,0.5)] rounded-[8px] gap-4.5 transition-all">
          <div className="relative flex items-center h-5 mt-0.5">
            <input
              id="isDeclaredCheckbox"
              type="checkbox"
              className="peer w-5 h-5 rounded border-[#E3E6EC] text-[#132651] focus:ring-[#132651] cursor-pointer accent-[#132651]"
              checked={finalApproval.isDeclared}
              onChange={(e) => onUpdateFinalApproval("isDeclared", e.target.checked)}
            />
          </div>
          <label htmlFor="isDeclaredCheckbox" className="text-[14px] text-[#132651] leading-[1.6] select-none cursor-pointer font-medium">
            I hereby declare that this Method Statement has been prepared in accordance with current health and safety legislation and site-specific requirements. All personnel involved in the works will be briefed on its contents and safety protocols prior to commencement.
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E3E6EC]">
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button
            onClick={onSaveDraft}
            className="flex-1 sm:flex-initial h-11 px-6 flex items-center justify-center bg-white border border-[#132651] text-[#132651] text-xs font-bold uppercase tracking-wider rounded-[6px] hover:bg-slate-50 active:bg-slate-100 transition-colors"
          >
            Save Draft
          </button>
          <button
            onClick={onGeneratePdf}
            className="flex-1 sm:flex-initial h-11 px-6 flex items-center justify-center bg-[#132651] text-white text-xs font-bold uppercase tracking-wider rounded-[6px] hover:bg-[#1b3263] active:bg-[#0c1836] transition-colors shadow-sm"
          >
            Generate PDF Document
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="flex-1 sm:flex-initial h-11 px-6 flex items-center justify-center bg-white border border-[#132651] text-[#132651] text-xs font-bold uppercase tracking-wider rounded-[6px] hover:bg-slate-50 transition-colors"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview Method Statement
          </button>
          <button
            onClick={onSubmitReview}
            className="flex-1 sm:flex-initial h-11 px-6 flex items-center justify-center bg-white border border-[#132651] text-[#132651] text-xs font-bold uppercase tracking-wider rounded-[6px] hover:bg-slate-50 transition-colors"
          >
            Submit for Review
          </button>
        </div>
      </div>

      {/* Full Screen Document Preview Modal (WOW Factor) */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden border border-[#E3E6EC]">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 border-b border-[#E3E6EC] bg-slate-50">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#132651]" />
                <h3 className="text-base font-bold text-[#132651]">Live Document Print Preview</h3>
              </div>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Live Document Paper */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-100">
              <div className="bg-white mx-auto max-w-[210mm] min-h-[297mm] p-[20mm] border border-[#E3E6EC] shadow-md flex flex-col gap-8 font-serif text-slate-800 text-sm leading-relaxed">
                
                {/* Paper Header */}
                <div className="flex justify-between items-start border-b-2 border-[#132651] pb-6">
                  <div className="flex flex-col">
                    <span className="font-sans font-black text-2xl tracking-tight text-[#132651]">ALAN LUDEWIG</span>
                    <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-[#5A6886] uppercase">Consulting &amp; Management</span>
                  </div>
                  <div className="text-right font-sans text-xs text-[#5A6886] flex flex-col gap-0.5">
                    <span className="font-bold text-[#132651]">METHOD STATEMENT</span>
                    <span>Ref: MS-{projectDetails.projectName.substring(0, 3).toUpperCase() || "NEW"}-2026</span>
                    <span>Date: {finalApproval.assessmentDate || "TBD"}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="text-center my-4">
                  <h1 className="font-sans font-bold text-xl uppercase tracking-wider text-[#132651] border-b border-double border-[#132651] pb-2 inline-block">
                    Safe System of Work / Method Statement
                  </h1>
                </div>

                {/* Section 1: Project Details */}
                <div className="flex flex-col gap-3 font-sans">
                  <h4 className="font-bold text-[#132651] text-xs uppercase tracking-wider border-b border-[#E3E6EC] pb-1">1. Project &amp; Client Details</h4>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
                    <div className="flex justify-between border-b border-slate-100 py-1">
                      <span className="font-semibold text-[#5A6886]">Project Name:</span>
                      <span className="text-[#132651] font-bold">{projectDetails.projectName || "N/A"}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 py-1">
                      <span className="font-semibold text-[#5A6886]">Client/Contractor:</span>
                      <span className="text-[#132651]">{projectDetails.clientContractor || "N/A"}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 py-1">
                      <span className="font-semibold text-[#5A6886]">Site Address:</span>
                      <span className="text-[#132651] text-right">{projectDetails.siteAddress || "N/A"}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 py-1">
                      <span className="font-semibold text-[#5A6886]">Work Activity:</span>
                      <span className="text-[#132651]">{projectDetails.workActivity || "N/A"}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 py-1">
                      <span className="font-semibold text-[#5A6886]">Start Date:</span>
                      <span className="text-[#132651]">{projectDetails.plannedStartDate || "N/A"}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 py-1">
                      <span className="font-semibold text-[#5A6886]">Est. Duration:</span>
                      <span className="text-[#132651]">{projectDetails.estimatedDuration || "N/A"}</span>
                    </div>
                  </div>
                </div>

                {/* Section 2: Scope of Works */}
                <div className="flex flex-col gap-2 font-sans">
                  <h4 className="font-bold text-[#132651] text-xs uppercase tracking-wider border-b border-[#E3E6EC] pb-1">2. Scope of Works</h4>
                  <div className="flex flex-col gap-3 text-xs leading-relaxed">
                    <div>
                      <span className="font-semibold text-[#5A6886] block text-[10px] uppercase">Description:</span>
                      <p className="text-slate-700 italic">{scopeOfWorks.descriptionOfWorks || "No description provided."}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-semibold text-[#5A6886] block text-[10px] uppercase">Location of Work Area:</span>
                        <p className="text-slate-700">{scopeOfWorks.workAreaLocation || "N/A"}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-[#5A6886] block text-[10px] uppercase">Access / Egress:</span>
                        <p className="text-slate-700">{scopeOfWorks.accessEgress || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Equipment & PPE */}
                <div className="grid grid-cols-2 gap-6 font-sans">
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-[#132651] text-xs uppercase tracking-wider border-b border-[#E3E6EC] pb-1">3. Equipment &amp; Plant</h4>
                    <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                      {plantTools.items.map((item) => (
                        <li key={item.id}>
                          <span className="font-semibold">{item.name}</span> ({item.purpose || "General"})
                        </li>
                      ))}
                      {plantTools.items.length === 0 && <li className="italic text-slate-400">None specified</li>}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-[#132651] text-xs uppercase tracking-wider border-b border-[#E3E6EC] pb-1">4. Required PPE</h4>
                    <div className="flex flex-wrap gap-1 text-[11px]">
                      {ppeEmergency.selectedPpe.length > 0 ? (
                        ppeEmergency.selectedPpe.map((id) => (
                          <span key={id} className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-slate-700 font-medium">
                            {PPE_OPTIONS.find((o) => o.id === id)?.title || id}
                          </span>
                        ))
                      ) : (
                        <span className="italic text-slate-400">Standard PPE Only</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 4: Sequence Table */}
                <div className="flex flex-col gap-2 font-sans">
                  <h4 className="font-bold text-[#132651] text-xs uppercase tracking-wider border-b border-[#E3E6EC] pb-1">5. Sequence of Works</h4>
                  <table className="w-full text-left text-xs border border-slate-300 border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-300 font-bold text-[#132651]">
                        <th className="p-2 border-r border-slate-300 w-[50px] text-center">Step</th>
                        <th className="p-2 border-r border-slate-300">Method &amp; Control Details</th>
                        <th className="p-2 border-r border-slate-300 w-[120px]">Responsibility</th>
                        <th className="p-2 w-[120px]">Safety / Risk Controls</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {sequenceOfWorks.steps.map((step, idx) => (
                        <tr key={step.id}>
                          <td className="p-2 border-r border-slate-300 text-center font-bold">{formatStepNumber(step.stepNumber || idx + 1)}</td>
                          <td className="p-2 border-r border-slate-300">
                            <span className="font-semibold block mb-0.5 text-[#132651]">{step.title}</span>
                            {step.descriptionOfWork || "N/A"}
                          </td>
                          <td className="p-2 border-r border-slate-300">{step.responsiblePerson || "N/A"}</td>
                          <td className="p-2 text-red-900 bg-red-50/10 italic">{step.riskNotes || "N/A"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Section 5: Sign off */}
                <div className="mt-8 border-t border-[#E3E6EC] pt-6 font-sans flex flex-col gap-6">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2 text-xs">
                      <div>
                        <span className="font-semibold text-[#5A6886]">Prepared By:</span>
                        <span className="ml-2 font-bold text-[#132651]">{finalApproval.assessorName}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#5A6886]">Position:</span>
                        <span className="ml-2 text-[#132651]">{finalApproval.position || "Principal Consultant"}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#5A6886]">Date of Sign-off:</span>
                        <span className="ml-2 text-[#132651]">{finalApproval.assessmentDate || "TBD"}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#5A6886]">Declaration Status:</span>
                        <span className="ml-2 inline-flex items-center text-green-700 font-bold">
                          {finalApproval.isDeclared ? (
                            <>
                              <Check className="w-3.5 h-3.5 mr-1" />
                              Accepted &amp; Signed
                            </>
                          ) : (
                            <span className="text-amber-600 font-normal">Pending Declaration Box Check</span>
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-1.5">
                      <span className="text-xs font-semibold text-[#5A6886]">Signature</span>
                      <div className="w-[180px] h-[75px] border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden rounded">
                        {finalApproval.signatureImage ? (
                          <img src={finalApproval.signatureImage} alt="Assessor Signature" className="max-w-full max-h-full p-1" />
                        ) : (
                          <span className="text-[10px] text-slate-400 italic">No signature drawn</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-[#5A6886] leading-relaxed text-center border-t border-slate-100 pt-4 italic">
                    Alan Ludewig Consulting &amp; Management template. Document is subject to local site controls and health &amp; safety inspection prior to execution.
                  </p>
                </div>

              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#E3E6EC] bg-slate-50 flex justify-end gap-3">
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="h-10 px-5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold uppercase rounded-[6px] transition-colors"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  setIsPreviewOpen(false);
                  onGeneratePdf();
                }}
                className="h-10 px-5 bg-[#132651] hover:bg-[#1b3263] text-white text-xs font-bold uppercase rounded-[6px] transition-colors shadow-sm"
              >
                Download PDF Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
