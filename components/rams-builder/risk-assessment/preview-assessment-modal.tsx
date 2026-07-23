import React from "react";
import { X, ZoomOut, ZoomIn, Maximize, Printer, Download, FileText, AlertTriangle, Grid, Shield, MapPin, Edit3, History, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PreviewAssessmentModalProps {
  isPreviewModalOpen: boolean;
  setIsPreviewModalOpen: (open: boolean) => void;
  onGeneratePdf: () => void;
  onSubmitForReview: () => void;
}

export function PreviewAssessmentModal({
  isPreviewModalOpen,
  setIsPreviewModalOpen,
  onGeneratePdf,
  onSubmitForReview
}: PreviewAssessmentModalProps) {
  if (!isPreviewModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-hidden">
      <div className="bg-white rounded-[12px] w-full max-w-[1200px] h-[90vh] shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4 shrink-0">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-[#f8f9fc] rounded-lg border border-[#e3e6ec]">
               <FileText className="size-5 text-[#132651]" />
            </div>
            <div>
               <h3 className="text-[18px] font-bold text-[#132651]">Risk Assessment Preview</h3>
               <p className="text-[12px] text-[#5a6886] mt-0.5">Project: High-Rise Facility Alpha-4</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-4 bg-[#f8f9fc] rounded-full px-4 py-1.5 border border-[#e3e6ec]">
                <button className="text-[#5a6886] hover:text-[#132651]"><ZoomOut className="size-4" /></button>
                <span className="text-[12px] font-bold text-[#132651] w-10 text-center">100%</span>
                <button className="text-[#5a6886] hover:text-[#132651]"><ZoomIn className="size-4" /></button>
             </div>
             <div className="flex items-center gap-4 border-l border-[#e3e6ec] pl-6">
                <button className="text-[#5a6886] hover:text-[#132651]"><Maximize className="size-4" /></button>
                <button className="text-[#5a6886] hover:text-[#132651]"><Printer className="size-4" /></button>
                <button className="text-[#5a6886] hover:text-[#132651]"><Download className="size-4" /></button>
             </div>
             <button
                onClick={() => setIsPreviewModalOpen(false)}
                className="text-[#95a0b6] hover:text-[#132651] ml-4 transition-colors"
             >
                <X className="size-5" />
             </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
           
           {/* Sidebar */}
           <div className="w-[280px] bg-[#fcfdfd] border-r border-[#e3e6ec] flex flex-col justify-between shrink-0">
              <div className="p-4 flex flex-col gap-1">
                 <h4 className="text-[11px] font-bold text-[#95a0b6] uppercase tracking-wider mb-2 px-3">Document Navigation</h4>
                 
                 <button className="flex items-center gap-3 px-3 py-2.5 bg-[#132651] text-white rounded-[6px] transition-colors">
                    <FileText className="size-4" />
                    <span className="text-[13px] font-bold">Cover Page</span>
                 </button>
                 <button className="flex items-center gap-3 px-3 py-2.5 text-[#5a6886] hover:bg-[#f3f5f8] rounded-[6px] transition-colors">
                    <AlertTriangle className="size-4" />
                    <span className="text-[13px] font-medium">Hazard Register</span>
                 </button>
                 <button className="flex items-center gap-3 px-3 py-2.5 text-[#5a6886] hover:bg-[#f3f5f8] rounded-[6px] transition-colors">
                    <Grid className="size-4" />
                    <span className="text-[13px] font-medium">Risk Matrix</span>
                 </button>
                 <button className="flex items-center gap-3 px-3 py-2.5 text-[#5a6886] hover:bg-[#f3f5f8] rounded-[6px] transition-colors">
                    <Shield className="size-4" />
                    <span className="text-[13px] font-medium">Control Measures</span>
                 </button>
                 <button className="flex items-center gap-3 px-3 py-2.5 text-[#5a6886] hover:bg-[#f3f5f8] rounded-[6px] transition-colors">
                    <MapPin className="size-4" />
                    <span className="text-[13px] font-medium">Site Location</span>
                 </button>
                 <button className="flex items-center gap-3 px-3 py-2.5 text-[#5a6886] hover:bg-[#f3f5f8] rounded-[6px] transition-colors">
                    <Edit3 className="size-4" />
                    <span className="text-[13px] font-medium">Signatories</span>
                 </button>
                 <button className="flex items-center gap-3 px-3 py-2.5 text-[#5a6886] hover:bg-[#f3f5f8] rounded-[6px] transition-colors">
                    <History className="size-4" />
                    <span className="text-[13px] font-medium">Revision Log</span>
                 </button>
              </div>

              <div className="p-6 border-t border-[#e3e6ec] bg-[#f8f9fc]">
                 <div className="flex items-center gap-2 mb-2">
                    <div className="size-2 rounded-full bg-[#3b82f6]"></div>
                    <span className="text-[13px] font-bold text-[#132651]">Status: Draft</span>
                 </div>
                 <p className="text-[11px] text-[#5a6886] leading-relaxed">
                   Last saved 5 minutes ago by<br/>Alan Ludewig
                 </p>
              </div>
           </div>

           {/* Preview Area */}
           <div className="flex-1 bg-[#f3f5f8] overflow-y-auto p-8 flex justify-center">
              <div className="w-full max-w-[700px] min-h-[900px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-12 relative flex flex-col">
                 {/* Watermark */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                    <span className="text-[140px] font-black text-[#132651] transform -rotate-45 select-none tracking-widest">DRAFT</span>
                 </div>

                 {/* Top row */}
                 <div className="flex justify-between items-start mb-20 relative z-10">
                    <div>
                       <h1 className="text-[20px] font-bold text-[#132651]">AL Consulting</h1>
                       <p className="text-[13px] text-[#5a6886] mt-1">Professional Risk Management</p>
                    </div>
                    <div className="text-right">
                       <p className="text-[13px] text-[#5a6886] font-medium">Report No: ARC-2024-001</p>
                       <p className="text-[13px] text-[#5a6886] mt-1">Date: October 24, 2023</p>
                    </div>
                 </div>

                 {/* Title block */}
                 <div className="border-l-4 border-[#132651] pl-6 mb-16 relative z-10">
                    <p className="text-[12px] font-bold text-[#5a6886] uppercase tracking-wider mb-2">Document Type</p>
                    <h2 className="text-[24px] font-bold text-[#132651] leading-snug">Strategic Site Risk Assessment<br/>& Hazard Register</h2>
                    <p className="text-[14px] text-[#5a6886] leading-relaxed mt-4 max-w-md">
                      A comprehensive evaluation of potential operational risks, safety protocols, and mitigation strategies for the High-Rise Facility Alpha-4 development site.
                    </p>
                 </div>

                 {/* Details block */}
                 <div className="grid grid-cols-2 gap-12 mb-auto relative z-10">
                    <div>
                       <p className="text-[12px] font-bold text-[#5a6886] uppercase tracking-wider mb-3">Client Information</p>
                       <h3 className="text-[16px] font-bold text-[#132651]">Nexus Development Corp.</h3>
                       <p className="text-[14px] text-[#5a6886] leading-relaxed mt-1">Level 42, Skyline Towers<br/>London, EC1A 1BB</p>
                    </div>
                    <div>
                       <p className="text-[12px] font-bold text-[#5a6886] uppercase tracking-wider mb-3">Assessor Details</p>
                       <h3 className="text-[16px] font-bold text-[#132651]">Alan Ludewig, GradIOSH</h3>
                       <p className="text-[14px] text-[#5a6886] leading-relaxed mt-1">Lead Safety Consultant<br/>AL Consulting Group</p>
                    </div>
                 </div>

                 {/* Footer */}
                 <div className="pt-8 border-t border-[#e3e6ec] flex justify-between items-center relative z-10">
                    <div className="flex items-center gap-3">
                       <Shield className="size-5 text-[#10b981]" />
                       <div>
                          <p className="text-[11px] text-[#5a6886]">Document verified via</p>
                          <p className="text-[12px] font-bold text-[#132651]">AL Blockchain Registry</p>
                       </div>
                    </div>
                    <p className="text-[13px] font-medium text-[#5a6886]">Page 1 of 24</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-[#e3e6ec] p-6 bg-white shrink-0">
          <Button
            variant="outline"
            onClick={onGeneratePdf}
            className="h-10 rounded-[6px] border-[#c5c6cd] bg-white px-8 text-[14px] font-bold text-[#132651] hover:bg-[#f3f5f8] shadow-none"
          >
            Generate PDF
          </Button>
          <Button
            onClick={onSubmitForReview}
            className="h-10 rounded-[6px] bg-[#132651] px-8 text-[14px] font-bold text-white hover:bg-[#0d1b3a] shadow-none"
          >
            Submit for Review
          </Button>
        </div>
      </div>
    </div>
  );
}
