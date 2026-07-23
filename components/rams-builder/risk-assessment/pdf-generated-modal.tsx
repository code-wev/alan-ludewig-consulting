import React from "react";
import { X, CheckCircle2, FileText, Folder, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PdfGeneratedModalProps {
  isPdfGeneratedOpen: boolean;
  setIsPdfGeneratedOpen: (open: boolean) => void;
}

export function PdfGeneratedModal({
  isPdfGeneratedOpen,
  setIsPdfGeneratedOpen
}: PdfGeneratedModalProps) {
  if (!isPdfGeneratedOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-[12px] w-full max-w-[600px] shadow-2xl flex flex-col my-8 max-h-[90vh] overflow-hidden transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-end px-4 py-4 shrink-0 absolute top-0 right-0 z-10 w-full pointer-events-none">
          <button
            onClick={() => setIsPdfGeneratedOpen(false)}
            className="text-[#95a0b6] hover:text-[#132651] hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all pointer-events-auto"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center gap-6 mt-4">
          <div className="flex flex-col items-center text-center">
             <div className="mb-4 text-[#10b981]">
                <CheckCircle2 className="size-12" strokeWidth={2.5} />
             </div>
             <h3 className="text-[20px] font-bold text-[#132651] mb-2">Risk Assessment PDF Generated</h3>
             <p className="text-[13px] text-[#5a6886]">
               The risk assessment has been generated and saved to your account.
             </p>
          </div>

          <div className="w-full bg-[#f8f9fc] border border-[#e3e6ec] rounded-[8px] overflow-hidden mt-2">
             <div className="bg-[#eef4ff] px-5 py-3 border-b border-[#e3e6ec]">
               <h4 className="text-[12px] font-bold text-[#132651]">Document Summary</h4>
             </div>
             <div className="p-5 grid grid-cols-2 gap-y-5 gap-x-8">
                <div>
                   <p className="text-[11px] text-[#5a6886] mb-1 uppercase tracking-wider">Reference</p>
                   <p className="text-[13px] font-medium text-[#132651]">RA-2024-0012</p>
                </div>
                <div>
                   <p className="text-[11px] text-[#5a6886] mb-1 uppercase tracking-wider">Project/Site</p>
                   <p className="text-[13px] font-medium text-[#132651]">Metro Logistics Center - Phase II</p>
                </div>
                <div>
                   <p className="text-[11px] text-[#5a6886] mb-1 uppercase tracking-wider">Version</p>
                   <p className="text-[13px] font-medium text-[#132651]">v2.1 [Final]</p>
                </div>
                <div>
                   <p className="text-[11px] text-[#5a6886] mb-1 uppercase tracking-wider">Date</p>
                   <p className="text-[13px] font-medium text-[#132651]">May 24, 2024</p>
                </div>
             </div>
          </div>

          <div className="w-full flex items-center gap-6 px-1">
             <button className="flex items-center gap-2 text-[12px] font-medium text-[#5a6886] hover:text-[#132651] transition-colors">
               <ArrowUpRight className="size-4" /> Go to Previous Risk Assessments
             </button>
             <button className="flex items-center gap-2 text-[12px] font-medium text-[#5a6886] hover:text-[#132651] transition-colors">
               <Folder className="size-4" /> Go to My Saved Files
             </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-start border-t border-[#e3e6ec] p-6 bg-white shrink-0 gap-3 mt-4">
          <Button
            variant="outline"
            onClick={() => setIsPdfGeneratedOpen(false)}
            className="h-10 rounded-[6px] border-[#c5c6cd] bg-white px-8 text-[14px] font-bold text-[#132651] hover:bg-[#f3f5f8] shadow-none"
          >
            Preview Assessment
          </Button>
          <Button
            className="h-10 rounded-[6px] bg-[#132651] px-8 text-[14px] font-bold text-white hover:bg-[#0d1b3a] shadow-none"
            onClick={() => setIsPdfGeneratedOpen(false)}
          >
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
