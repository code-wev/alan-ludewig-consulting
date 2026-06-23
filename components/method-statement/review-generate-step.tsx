"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Edit2,
  Shield,
  Wrench,
  ClipboardList,
  Check,
  X,
  FileText,
} from "lucide-react";
import {
  PPE_OPTIONS,
  type MethodStatementDraft,
  type MethodStatementFinalApproval,
  type MethodStatementStepId,
} from "./types";
import Image from "next/image";

interface ReviewGenerateStepProps {
  draft: MethodStatementDraft;
  onUpdateFinalApproval: <Key extends keyof MethodStatementFinalApproval>(
    key: Key,
    value: MethodStatementFinalApproval[Key],
  ) => void;
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const isLocalDrawingRef = useRef(false);

  // Setup canvas size & scale styling on mount & parent resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setupCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();

      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = 100 * window.devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `100px`;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.strokeStyle = "#132651";
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Redraw current signature if exists
        if (value) {
          const img = new window.Image();
          img.onload = () => {
            ctx.clearRect(0, 0, rect.width, 100);
            ctx.drawImage(img, 0, 0, rect.width, 100);
          };
          img.src = value;
        }
      }
    };

    setupCanvas();

    const observer = new ResizeObserver(() => {
      setupCanvas();
    });
    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []); // Run once on mount

  // Handle external value changes (loading from draft/resetting)
  useEffect(() => {
    if (isLocalDrawingRef.current) {
      isLocalDrawingRef.current = false;
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    if (value) {
      const img = new window.Image();
      img.onload = () => {
        ctx.clearRect(0, 0, rect.width, 100);
        ctx.drawImage(img, 0, 0, rect.width, 100);
      };
      img.src = value;
    } else {
      ctx.clearRect(0, 0, rect.width, 100);
    }
  }, [value]);

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

  const startDrawing = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
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
    if (canvas) {
      const dataUrl = canvas.toDataURL("image/png");
      isLocalDrawingRef.current = true;
      onChange(dataUrl);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, 100);
    }
    isLocalDrawingRef.current = true;
    onChange(null);
  };

  return (
    <div className='flex flex-col gap-2 w-full font-inter'>
      <div className='relative w-full h-25 border border-[#E3E6EC] rounded-[6px] bg-[#F8FAFC] overflow-hidden group cursor-crosshair'>
        {/* Active canvas for drawing */}
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className='w-full h-full absolute inset-0 z-0'
        />
        text-brand-primary
        {/* Centered stylus icon and description */}
        {!value && (
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-1.5 pointer-events-none select-none text-[#5A6886] opacity-60 z-0'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-5 h-5'>
              <path d='M12 20h9' />
              <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' />
            </svg>
            <span className='text-[12px] font-semibold text-brand-primary'>
              Click here to sign digitally
            </span>
          </div>
        )}
        {/* Clear/Reset signature button */}
        {value && (
          <button
            onClick={clearCanvas}
            type='button'
            className='absolute top-2.5 right-2.5 bg-white border border-[#E3E6EC] hover:bg-[#F8FAFC] text-[#5A6886] hover:text-[#DC2626] px-2.5 py-1 text-[11px] font-bold rounded-[6px] shadow-sm transition-all z-10 cursor-pointer'>
            Clear Signature
          </button>
        )}
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
  const {
    projectDetails,
    scopeOfWorks,
    sequenceOfWorks,
    plantTools,
    ppeEmergency,
    finalApproval,
  } = draft;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Format step helper to print double digits (01, 02, etc.)
  const formatStepNumber = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className='flex flex-col gap-8 w-full  mx-auto pb-16 text-brand-primary'>
      <div className='flex items-center gap-3'>
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='text-brand-primary'>
          <path
            d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15H7V16.5H15V15ZM17 11.5H7V13H17V11.5ZM17 8H7V9.5H17V8Z'
            fill='currentColor'
          />
        </svg>
        <h2 className='text-[20px] font-bold text-brand-primary leading-8 font-inter'>
          Step 6: Review &amp; Generate
        </h2>
      </div>

      {/* Grid of Review Summary Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
        {/* Card 1: Project Details */}
        <div className='flex flex-col bg-white border border-[#E3E6EC] rounded-[8px] overflow-hidden shadow-sm'>
          <div className='flex justify-between items-center p-5 border-b border-[#E3E6EC]'>
            <div className='flex items-center gap-2.5'>
              <ClipboardList className='w-5 h-5 text-brand-primary' />
              <h3 className='text-base font-bold text-brand-primary font-inter'>
                Project Details
              </h3>
            </div>
            <button
              onClick={() => onEditStep("project-details")}
              className='flex items-center gap-1.5 text-[#5A6886] hover:text-brand-primary text-[13px] font-semibold transition-colors'>
              <Edit2 className='w-3.5 h-3.5' />
              <span>Edit</span>
            </button>
          </div>
          <div className='p-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm font-inter'>
            <div className='flex flex-col gap-1'>
              <span className='text-[11px] font-semibold text-[#5A6886] uppercase tracking-wider'>
                Client Name
              </span>
              <span className='text-brand-primary font-semibold text-[14px]'>
                {projectDetails.clientContractor || "N/A"}
              </span>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-[11px] font-semibold text-[#5A6886] uppercase tracking-wider'>
                Project Ref
              </span>
              <span className='text-brand-primary font-semibold text-[14px]'>
                {projectDetails.projectName || "N/A"}
              </span>
            </div>
            <div className='flex flex-col gap-1 md:col-span-2'>
              <span className='text-[11px] font-semibold text-[#5A6886] uppercase tracking-wider'>
                Site Address
              </span>
              <span className='text-brand-primary text-[13px] leading-relaxed'>
                {projectDetails.siteAddress || "N/A"}
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Scope of Works */}
        <div className='flex flex-col bg-white border border-[#E3E6EC] rounded-[8px] overflow-hidden shadow-sm'>
          <div className='flex justify-between items-center p-5 border-b border-[#E3E6EC]'>
            <div className='flex items-center gap-2.5'>
              <ClipboardList className='w-5 h-5 text-brand-primary' />
              <h3 className='text-base font-bold text-brand-primary font-inter'>
                Scope of Works
              </h3>
            </div>
            <button
              onClick={() => onEditStep("scope-of-works")}
              className='flex items-center gap-1.5 text-[#5A6886] hover:text-brand-primary text-[13px] font-semibold transition-colors'>
              <Edit2 className='w-3.5 h-3.5' />
              <span>Edit</span>
            </button>
          </div>
          <div className='p-5 text-[13px] text-brand-primary leading-relaxed font-inter'>
            {scopeOfWorks.descriptionOfWorks || "N/A"}
          </div>
        </div>

        {/* Card 3: Plant & Tools */}
        <div className='flex flex-col bg-white border border-[#E3E6EC] rounded-[8px] overflow-hidden shadow-sm'>
          <div className='flex justify-between items-center p-5 border-b border-[#E3E6EC]'>
            <div className='flex items-center gap-2.5'>
              <Wrench className='w-5 h-5 text-brand-primary' />
              <h3 className='text-base font-bold text-brand-primary font-inter'>
                Plant &amp; Tools
              </h3>
            </div>
            <button
              onClick={() => onEditStep("plant-tools")}
              className='flex items-center gap-1.5 text-[#5A6886] hover:text-brand-primary text-[13px] font-semibold transition-colors'>
              <Edit2 className='w-3.5 h-3.5' />
              <span>Edit</span>
            </button>
          </div>
          <div className='p-5 flex flex-wrap gap-2 font-inter'>
            {plantTools.items.length > 0 ? (
              plantTools.items.map((item) => (
                <span
                  key={item.id}
                  className='px-3 py-1.5 border border-[#E3E6EC] rounded-lg text-[12px] font-medium text-brand-primary bg-[#F8FAFC]'>
                  {item.name}
                </span>
              ))
            ) : (
              <span className='text-[#5A6886] italic text-xs'>
                No equipment or tools listed.
              </span>
            )}
          </div>
        </div>

        {/* Card 4: PPE & Emergency */}
        <div className='flex flex-col bg-white border border-[#E3E6EC] rounded-[8px] overflow-hidden shadow-sm'>
          <div className='flex justify-between items-center p-5 border-b border-[#E3E6EC]'>
            <div className='flex items-center gap-2.5'>
              <Shield className='w-5 h-5 text-brand-primary' />
              <h3 className='text-base font-bold text-brand-primary font-inter'>
                PPE &amp; Emergency
              </h3>
            </div>
            <button
              onClick={() => onEditStep("ppe-emergency")}
              className='flex items-center gap-1.5 text-[#5A6886] hover:text-brand-primary text-[13px] font-semibold transition-colors'>
              <Edit2 className='w-3.5 h-3.5' />
              <span>Edit</span>
            </button>
          </div>
          <div className='p-5 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-inter'>
            <div className='flex flex-col gap-1'>
              <span className='text-[11px] font-semibold text-[#5A6886] uppercase tracking-wider'>
                Required PPE
              </span>
              <span className='text-brand-primary font-medium text-[13px] leading-relaxed'>
                {ppeEmergency.selectedPpe.length > 0
                  ? ppeEmergency.selectedPpe
                      .map(
                        (id) =>
                          PPE_OPTIONS.find((o) => o.id === id)?.title || id,
                      )
                      .join(", ")
                  : "None selected"}
              </span>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-[11px] font-semibold text-[#5A6886] uppercase tracking-wider'>
                First Aider
              </span>
              <span className='text-brand-primary font-semibold text-[14px]'>
                {ppeEmergency.firstAider || "James Thompson (Lead)"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sequence of Works Preview Table Card */}
      <div className='flex flex-col bg-white border border-[#E3E6EC] rounded-[8px] overflow-hidden shadow-sm'>
        <div className='flex justify-between items-center p-5 border-b border-[#E3E6EC]'>
          <h3 className='text-base font-bold text-brand-primary font-inter'>
            Method Statement Preview — Sequence of Works
          </h3>
          <button
            onClick={() => onEditStep("sequence-of-works")}
            className='flex items-center gap-1.5 text-[#5A6886] hover:text-brand-primary text-[13px] font-semibold transition-colors'>
            <Edit2 className='w-3.5 h-3.5' />
            <span>Edit Sequence</span>
          </button>
        </div>

        <div className='overflow-x-auto w-full'>
          <table className='w-full text-left border-collapse font-inter'>
            <thead>
              <tr className='bg-[#EBF2FF] border-b border-[#E3E6EC] text-brand-primary'>
                <th className='p-4 text-[11px] font-bold uppercase tracking-wider w-20'>
                  Step
                </th>
                <th className='p-4 text-[11px] font-bold uppercase tracking-wider min-w-75'>
                  Required Control
                </th>
                <th className='p-4 text-[11px] font-bold uppercase tracking-wider'>
                  Responsible Person
                </th>
                <th className='p-4 text-[11px] font-bold uppercase tracking-wider'>
                  Required Equipment
                </th>
                <th className='p-4 text-[11px] font-bold uppercase tracking-wider'>
                  Safety Notes
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-[#E3E6EC]'>
              {sequenceOfWorks.steps.map((step, idx) => {
                const stepNumStr = formatStepNumber(step.stepNumber || idx + 1);
                const isWarning =
                  step.riskNotes?.toLowerCase().includes("unauthorized") ||
                  step.riskNotes?.toLowerCase().includes("abort") ||
                  step.riskNotes?.toLowerCase().includes("winds") ||
                  step.riskNotes?.toLowerCase().includes("critical") ||
                  step.riskNotes?.toLowerCase().includes("no entry") ||
                  step.riskNotes?.toLowerCase().includes("stop");
                return (
                  <tr
                    key={step.id}
                    className='hover:bg-slate-50/50 transition-colors'>
                    <td className='p-4 align-top font-bold text-brand-primary text-sm'>
                      {stepNumStr}
                    </td>
                    <td className='p-4 align-top text-sm text-brand-primary leading-relaxed max-w-90 whitespace-pre-line'>
                      {step.descriptionOfWork || step.title || "N/A"}
                    </td>
                    <td className='p-4 align-top text-sm text-brand-primary'>
                      {step.responsiblePerson || "N/A"}text-brand-primary
                    </td>
                    <td className='p-4 align-top text-sm text-brand-primary'>
                      {step.requiredEquipment || "N/A"}
                    </td>
                    <td
                      className={`p-4 align-top text-sm font-medium ${isWarning ? "text-[#DC2626]" : "text-brand-primary"}`}>
                      {step.riskNotes || "N/A"}
                    </td>
                  </tr>
                );
              })}
              {sequenceOfWorks.steps.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className='p-8 text-center text-slate-400 italic text-sm'>
                    No sequences added yet. Go back to Step 3 to add one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Final Declaration & Approval Panel */}
      <div className='flex flex-col bg-white border border-[#E3E6EC] rounded-[8px] overflow-hidden shadow-sm p-6 md:p-8 gap-6 font-inter'>
        <div className='flex items-center gap-3 pb-4 border-b border-[#E3E6EC]'>
          <svg
            width='22'
            height='22'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15H7V16.5H15V15ZM17 11.5H7V13H17V11.5ZM17 8H7V9.5H17V8Z'
              fill='#132651'
            />
          </svg>
          <h3 className='text-[18px] font-bold text-brand-primary'>
            Final Declaration &amp; Approval
          </h3>
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <label className='text-[13px] text-brand-primary font-semibold'>
              Prepared By
            </label>
            <input
              type='text'
              value={finalApproval.assessorName}
              onChange={(e) =>
                onUpdateFinalApproval("assessorName", e.target.value)
              }
              className='w-full px-4 h-12.75 border border-[#E3E6EC] bg-white rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary transition-all'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-2'>
              <label className='text-[13px] text-brand-primary font-semibold'>
                Position
              </label>
              <input
                type='text'
                value={finalApproval.position}
                onChange={(e) =>
                  onUpdateFinalApproval("position", e.target.value)
                }
                placeholder='Principal Consultant'
                className='w-full px-4 h-12.75 border border-[#E3E6EC] bg-white rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary transition-all'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-[13px] text-brand-primary font-semibold'>
                Date
              </label>
              <input
                type='text'
                placeholder='dd/mm/yyyy'
                value={finalApproval.assessmentDate}
                onChange={(e) =>
                  onUpdateFinalApproval("assessmentDate", e.target.value)
                }
                className='w-full px-4 h-12.75 border border-[#E3E6EC] bg-white rounded-[6px] text-sm text-brand-primary outline-none focus:border-brand-primary transition-all'
              />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-[13px] text-brand-primary font-semibold'>
              Digital Signature
            </label>
            <SignaturePad
              value={finalApproval.signatureImage}
              onChange={(val) => onUpdateFinalApproval("signatureImage", val)}
            />
          </div>
        </div>

        {/* Declaration checkbox styled as modern blue banner */}
        <div className='flex flex-row items-start p-4 bg-[#E8F0FE] border border-[#ADC6FF]/30 rounded-[8px] gap-3.5 transition-all'>
          <div className='relative flex items-center h-5 mt-0.5'>
            <input
              id='isDeclaredCheckbox'
              type='checkbox'
              className='peer w-5 h-5 rounded border-[#E3E6EC] text-brand-primary focus:ring-brand-primary cursor-pointer accent-brand-primary'
              checked={finalApproval.isDeclared}
              onChange={(e) =>
                onUpdateFinalApproval("isDeclared", e.target.checked)
              }
            />
          </div>
          <label
            htmlFor='isDeclaredCheckbox'
            className='text-[13px] text-brand-primary leading-[1.6] select-none cursor-pointer font-medium'>
            I hereby declare that this Method Statement has been prepared in
            accordance with current health and safety legislation and
            site-specific requirements. All personnel involved in the works will
            be briefed on its contents and safety protocols prior to
            commencement.
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E3E6EC]'>
        <div className='flex flex-wrap items-center gap-3 w-full md:w-auto'>
          <button
            onClick={onSaveDraft}
            className='flex-1 md:flex-initial h-10 px-5 bg-white border border-[#DCE0E7] text-brand-primary text-[13px] font-semibold rounded-[6px] hover:bg-[#F8FAFC] transition-colors'>
            Save Draft
          </button>
          <button
            onClick={onGeneratePdf}
            className='flex-1 md:flex-initial h-10 px-5 bg-brand-primary text-white text-[13px] font-semibold rounded-[6px] hover:bg-[#1c336b] transition-colors shadow-sm'>
            Generate PDF Document
          </button>
        </div>

        <div className='flex flex-wrap items-center gap-3 w-full md:w-auto'>
          <button
            onClick={() => setIsPreviewOpen(true)}
            className='flex-1 md:flex-initial h-10 px-5 bg-white border border-[#DCE0E7] text-brand-primary text-[13px] font-semibold rounded-[6px] hover:bg-[#F8FAFC] transition-colors'>
            Preview Method Statement
          </button>
          <button
            onClick={onSubmitReview}
            className='flex-1 md:flex-initial h-10 px-5 bg-white border border-[#DCE0E7] text-brand-primary text-[13px] font-semibold rounded-[6px] hover:bg-[#F8FAFC] transition-colors'>
            Submit for Review
          </button>
        </div>
      </div>

      {/* Full Screen Document Preview Modal (WOW Factor) */}
      {isPreviewOpen && (
        <div className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fadeIn'>
          <div className='bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden border border-[#E3E6EC]'>
            {/* Modal Header */}
            <div className='flex justify-between items-center p-5 border-b border-[#E3E6EC] bg-slate-50'>
              <div className='flex items-center gap-2'>
                <FileText className='w-5 h-5 text-brand-primary' />
                <h3 className='text-base font-bold text-brand-primary'>
                  Live Document Print Preview
                </h3>
              </div>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className='p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-all'>
                <X className='w-6 h-6' />
              </button>
            </div>

            {/* Live Document Paper */}
            <div className='flex-1 overflow-y-auto p-6 md:p-10 bg-slate-100'>
              <div className='bg-white mx-auto max-w-[210mm] min-h-[297mm] p-[20mm] border border-[#E3E6EC] shadow-md flex flex-col gap-8 font-serif text-slate-800 text-sm leading-relaxed'>
                {/* Paper Header */}
                <div className='flex justify-between items-start border-b-2 border-brand-primary pb-6'>
                  <div className='flex flex-col'>
                    <span className='font-sans font-black text-2xl tracking-tight text-brand-primary'>
                      ALAN LUDEWIG
                    </span>
                    <span className='font-sans text-[10px] tracking-[0.2em] font-bold text-[#5A6886] uppercase'>
                      Consulting &amp; Management
                    </span>
                  </div>
                  <div className='text-right font-sans text-xs text-[#5A6886] flex flex-col gap-0.5'>
                    <span className='font-bold text-brand-primary'>
                      METHOD STATEMENT
                    </span>
                    <span>
                      Ref: MS-
                      {projectDetails.projectName
                        .substring(0, 3)
                        .toUpperCase() || "NEW"}
                      -2026
                    </span>
                    <span>Date: {finalApproval.assessmentDate || "TBD"}</span>
                  </div>
                </div>

                {/* Title */}
                <div className='text-center my-4'>
                  <h1 className='font-sans font-bold text-xl uppercase tracking-wider text-brand-primary border-b border-double border-brand-primary pb-2 inline-block'>
                    Safe System of Work / Method Statement
                  </h1>
                </div>

                {/* Section 1: Project Details */}
                <div className='flex flex-col gap-3 font-sans'>
                  <h4 className='font-bold text-brand-primary text-xs uppercase tracking-wider border-b border-[#E3E6EC] pb-1'>
                    1. Project &amp; Client Details
                  </h4>
                  <div className='grid grid-cols-2 gap-x-6 gap-y-2 text-xs'>
                    <div className='flex justify-between border-b border-slate-100 py-1'>
                      <span className='font-semibold text-[#5A6886]'>
                        Project Name:
                      </span>
                      <span className='text-brand-primary font-bold'>
                        {projectDetails.projectName || "N/A"}
                      </span>
                    </div>
                    <div className='flex justify-between border-b border-slate-100 py-1'>
                      <span className='font-semibold text-[#5A6886]'>
                        Client/Contractor:
                      </span>
                      <span className='text-brand-primary'>
                        {projectDetails.clientContractor || "N/A"}
                      </span>
                    </div>
                    <div className='flex justify-between border-b border-slate-100 py-1'>
                      <span className='font-semibold text-[#5A6886]'>
                        Site Address:
                      </span>
                      <span className='text-brand-primary text-right'>
                        {projectDetails.siteAddress || "N/A"}
                      </span>
                    </div>
                    <div className='flex justify-between border-b border-slate-100 py-1'>
                      <span className='font-semibold text-[#5A6886]'>
                        Work Activity:
                      </span>
                      <span className='text-brand-primary'>
                        {projectDetails.workActivity || "N/A"}
                      </span>
                    </div>
                    <div className='flex justify-between border-b border-slate-100 py-1'>
                      <span className='font-semibold text-[#5A6886]'>
                        Start Date:
                      </span>
                      <span className='text-brand-primary'>
                        {projectDetails.plannedStartDate || "N/A"}
                      </span>
                    </div>
                    <div className='flex justify-between border-b border-slate-100 py-1'>
                      <span className='font-semibold text-[#5A6886]'>
                        Est. Duration:
                      </span>
                      <span className='text-brand-primary'>
                        {projectDetails.estimatedDuration || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section 2: Scope of Works */}
                <div className='flex flex-col gap-2 font-sans'>
                  <h4 className='font-bold text-brand-primary text-xs uppercase tracking-wider border-b border-[#E3E6EC] pb-1'>
                    2. Scope of Works
                  </h4>
                  <div className='flex flex-col gap-3 text-xs leading-relaxed'>
                    <div>
                      <span className='font-semibold text-[#5A6886] block text-[10px] uppercase'>
                        Description:
                      </span>
                      <p className='text-slate-700 italic'>
                        {scopeOfWorks.descriptionOfWorks ||
                          "No description provided."}
                      </p>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <span className='font-semibold text-[#5A6886] block text-[10px] uppercase'>
                          Location of Work Area:
                        </span>
                        <p className='text-slate-700'>
                          {scopeOfWorks.workAreaLocation || "N/A"}
                        </p>
                      </div>
                      <div>
                        <span className='font-semibold text-[#5A6886] block text-[10px] uppercase'>
                          Access / Egress:
                        </span>
                        <p className='text-slate-700'>
                          {scopeOfWorks.accessEgress || "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Equipment & PPE */}
                <div className='grid grid-cols-2 gap-6 font-sans'>
                  <div className='flex flex-col gap-2'>
                    <h4 className='font-bold text-brand-primary text-xs uppercase tracking-wider border-b border-[#E3E6EC] pb-1'>
                      3. Equipment &amp; Plant
                    </h4>
                    <ul className='list-disc list-inside text-xs text-slate-700 space-y-1'>
                      {plantTools.items.map((item) => (
                        <li key={item.id}>
                          <span className='font-semibold'>{item.name}</span> (
                          {item.purpose || "General"})
                        </li>
                      ))}
                      {plantTools.items.length === 0 && (
                        <li className='italic text-slate-400'>
                          None specified
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h4 className='font-bold text-brand-primary text-xs uppercase tracking-wider border-b border-[#E3E6EC] pb-1'>
                      4. Required PPE
                    </h4>
                    <div className='flex flex-wrap gap-1 text-[11px]'>
                      {ppeEmergency.selectedPpe.length > 0 ? (
                        ppeEmergency.selectedPpe.map((id) => (
                          <span
                            key={id}
                            className='bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-slate-700 font-medium'>
                            {PPE_OPTIONS.find((o) => o.id === id)?.title || id}
                          </span>
                        ))
                      ) : (
                        <span className='italic text-slate-400'>
                          Standard PPE Only
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 4: Sequence Table */}
                <div className='flex flex-col gap-2 font-sans'>
                  <h4 className='font-bold text-brand-primary text-xs uppercase tracking-wider border-b border-[#E3E6EC] pb-1'>
                    5. Sequence of Works
                  </h4>
                  <table className='w-full text-left text-xs border border-slate-300 border-collapse'>
                    <thead>
                      <tr className='bg-slate-50 border-b border-slate-300 font-bold text-brand-primary'>
                        <th className='p-2 border-r border-slate-300 w-12.5 text-center'>
                          Step
                        </th>
                        <th className='p-2 border-r border-slate-300'>
                          Method &amp; Control Details
                        </th>
                        <th className='p-2 border-r border-slate-300 w-30'>
                          Responsibility
                        </th>
                        <th className='p-2 w-30'>Safety / Risk Controls</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200'>
                      {sequenceOfWorks.steps.map((step, idx) => (
                        <tr key={step.id}>
                          <td className='p-2 border-r border-slate-300 text-center font-bold'>
                            {formatStepNumber(step.stepNumber || idx + 1)}
                          </td>
                          <td className='p-2 border-r border-slate-300'>
                            <span className='font-semibold block mb-0.5 text-brand-primary'>
                              {step.title}
                            </span>
                            {step.descriptionOfWork || "N/A"}
                          </td>
                          <td className='p-2 border-r border-slate-300'>
                            {step.responsiblePerson || "N/A"}
                          </td>
                          <td className='p-2 text-red-900 bg-red-50/10 italic'>
                            {step.riskNotes || "N/A"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Section 5: Sign off */}
                <div className='mt-8 border-t border-[#E3E6EC] pt-6 font-sans flex flex-col gap-6'>
                  <div className='flex justify-between items-start'>
                    <div className='flex flex-col gap-2 text-xs'>
                      <div>
                        <span className='font-semibold text-[#5A6886]'>
                          Prepared By:
                        </span>
                        <span className='ml-2 font-bold text-brand-primary'>
                          {finalApproval.assessorName}
                        </span>
                        text-brand-primary
                      </div>
                      <div>
                        <span className='font-semibold text-[#5A6886]'>
                          Position:
                        </span>
                        <span className='ml-2 text-brand-primary'>
                          {finalApproval.position || "Principal Consultant"}
                        </span>
                      </div>
                      <div>
                        <span className='font-semibold text-[#5A6886]'>
                          Date of Sign-off:
                        </span>
                        <span className='ml-2 text-brand-primary'>
                          {finalApproval.assessmentDate || "TBD"}
                        </span>
                      </div>
                      <div>
                        <span className='font-semibold text-[#5A6886]'>
                          Declaration Status:
                        </span>
                        <span className='ml-2 inline-flex items-center text-green-700 font-bold'>
                          {finalApproval.isDeclared ? (
                            <>
                              <Check className='w-3.5 h-3.5 mr-1' />
                              Accepted &amp; Signed
                            </>
                          ) : (
                            <span className='text-amber-600 font-normal'>
                              Pending Declaration Box Check
                            </span>
                          )}
                        </span>
                      </div>
                    </div>

                    <div className='flex flex-col items-center gap-1.5'>
                      <span className='text-xs font-semibold text-[#5A6886]'>
                        Signature
                      </span>
                      <div className='w-45 h-18.75 border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden rounded'>
                        {finalApproval.signatureImage ? (
                          <Image
                            height={400}
                            width={400}
                            src={finalApproval.signatureImage}
                            alt='Assessor Signature'
                            className='max-w-full max-h-full p-1'
                          />
                        ) : (
                          <span className='text-[10px] text-slate-400 italic'>
                            No signature drawn
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className='text-[10px] text-[#5A6886] leading-relaxed text-center border-t border-slate-100 pt-4 italic'>
                    Alan Ludewig Consulting &amp; Management template. Document
                    is subject to local site controls and health &amp; safety
                    inspection prior to execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className='p-4 border-t border-[#E3E6EC] bg-slate-50 flex justify-end gap-3'>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className='h-10 px-5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold uppercase rounded-[6px] transition-colors'>
                Close Preview
              </button>
              <button
                onClick={() => {
                  setIsPreviewOpen(false);
                  onGeneratePdf();
                }}
                className='h-10 px-5 bg-brand-primary hover:bg-[#1b3263] text-white text-xs font-bold uppercase rounded-[6px] transition-colors shadow-sm'>
                Download PDF Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
