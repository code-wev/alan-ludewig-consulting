"use client";

import { X, Download, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ModalPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
}

export function ModalPreview({
  isOpen,
  onClose,
  projectName,
}: ModalPreviewProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/30 backdrop-blur-sm p-4 font-sans">
      <div className="w-full max-w-[1000px] rounded-xl border border-[#e3e6ec] bg-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#f3f5f8] px-6 py-4">
          <h3 className="text-[18px] font-bold text-brand-primary">Risk Assessment Preview</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-brand-secondary hover:bg-slate-100 hover:text-brand-primary transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#fafbfd] flex gap-6 flex-col md:flex-row">
          {/* Main Paper Sheet (A4 Style mockup) */}
          <div className="flex-1 bg-white border border-[#d7dce5] shadow-md p-8 space-y-6 text-brand-primary text-[12px] rounded-sm">
            <header className="flex justify-between items-start border-b border-[#e3e6ec] pb-4">
              <div className="space-y-1">
                <h4 className="text-[16px] font-extrabold tracking-tight text-brand-primary">RISK ASSESSMENT</h4>
                <span className="text-[10px] font-bold text-brand-secondary uppercase">
                  REF: RA-2026-0894-B
                </span>
              </div>
              <div className="text-right">
                <div className="h-8 w-24 bg-[#f3f5f8] rounded flex items-center justify-center text-[9px] text-brand-secondary font-bold border border-[#e3e6ec]">
                  ALC LOGO
                </div>
                <p className="font-bold text-[10px] mt-1">Allan Ludewig Consulting</p>
              </div>
            </header>

            <section className="grid gap-4 grid-cols-2 bg-[#fafbfd] border border-[#e3e6ec] p-3 rounded">
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-brand-secondary uppercase block">Project / Site</span>
                <span className="font-bold text-brand-primary">{projectName || "Terminal 5 - Structural Steel Phase"}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-brand-secondary uppercase block">Assessment Title</span>
                <span className="font-bold text-brand-primary">Work at Height: Gantry Installation</span>
              </div>
              <div className="space-y-0.5 col-span-2 mt-2">
                <span className="text-[9px] font-bold text-brand-secondary uppercase block">Work Activity Description</span>
                <span className="text-brand-secondary">
                  Installation of structural steel gantry using mobile crane and MEWP platforms. Includes bolting and initial alignment checks at elevations exceeding 15 meters.
                </span>
              </div>
            </section>

            {/* Hazards summary */}
            <section className="space-y-2">
              <h5 className="text-[10px] font-bold text-brand-secondary uppercase tracking-wider">1. Hazards &amp; Control Measures</h5>
              <div className="border border-[#e3e6ec] rounded overflow-hidden">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-[#f3f5f8] border-b border-[#e3e6ec] text-[10px] text-brand-primary">
                      <th className="py-2 px-3 font-bold">Hazard</th>
                      <th className="py-2 px-3 font-bold">Risk</th>
                      <th className="py-2 px-3 font-bold">Suggested Controls</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#f3f5f8] last:border-0">
                      <td className="py-2 px-3 font-bold">Falls from Height</td>
                      <td className="py-2 px-3"><span className="text-red-700 bg-red-50 px-1.5 py-0.5 rounded font-bold text-[9px]">High</span></td>
                      <td className="py-2 px-3 text-brand-secondary">Edge protection, harnesses, exclusion zones, trained personnel only.</td>
                    </tr>
                    <tr className="border-b border-[#f3f5f8] last:border-0">
                      <td className="py-2 px-3 font-bold">Manual Handling</td>
                      <td className="py-2 px-3"><span className="text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-bold text-[9px]">Medium</span></td>
                      <td className="py-2 px-3 text-brand-secondary">Two-person lift, mechanical aids, kinetic lifting techniques.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* PPE requirements */}
            <section className="space-y-2">
              <h5 className="text-[10px] font-bold text-brand-secondary uppercase tracking-wider">2. PPE Requirements</h5>
              <div className="flex gap-1.5 flex-wrap">
                {["Hard Hat", "Hi-Vis Jacket", "Steel Toe Boots", "Protective Gloves", "Fall Arrest Harness"].map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-[#f3f5f8] border border-[#e3e6ec] text-brand-primary rounded text-[10px] font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            {/* Signatures */}
            <footer className="grid grid-cols-2 border-t border-[#e3e6ec] pt-4 text-[9px] text-brand-secondary gap-4">
              <div>
                <p>Prepared By: <span className="font-bold text-brand-primary">Alan Ludewig</span></p>
                <div className="h-8 border-b border-[#d7dce5]" />
              </div>
              <div>
                <p>Approved By: <span className="font-bold text-brand-primary">Client Inspector</span></p>
                <div className="h-8 border-b border-[#d7dce5]" />
              </div>
            </footer>
          </div>

          {/* Sidebar controls */}
          <div className="w-full md:w-[260px] space-y-4">
            <div className="rounded-lg border border-[#e3e6ec] bg-white p-4 space-y-2">
              <span className="text-[10px] font-bold text-brand-secondary uppercase block">Document Status</span>
              <div className="inline-flex rounded-full bg-[#eefbf2] px-2 py-0.5 text-[11px] font-bold text-[#16a34a]">
                Published
              </div>
              <p className="text-[11px] text-brand-secondary leading-normal">
                This document is live and accessible under saved files list history.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                type="button"
                className="h-9 w-full rounded-[6px] bg-brand-primary text-[12px] font-bold text-white hover:bg-brand-primary/95 flex items-center justify-center gap-2"
              >
                <Download className="size-4" />
                Download PDF
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="h-9 w-full rounded-[6px] border-[#d7dce5] bg-white text-[12px] font-bold text-brand-secondary hover:bg-slate-50"
              >
                Close Preview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
