import { Button } from "@/components/ui/button";
import { X, Check, Info } from "lucide-react";

interface GenerateRamsPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GenerateRamsPdfModal({ isOpen, onClose }: GenerateRamsPdfModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 backdrop-blur-sm p-4 md:p-8 overflow-y-auto">
      {/* Modal Container */}
      <div className="bg-white rounded-[12px] w-full max-w-[800px] flex flex-col relative shadow-2xl my-auto overflow-hidden">
        
        {/* Close Button (Absolute Top Right) */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 rounded-full hover:bg-slate-100 transition-colors text-brand-secondary hover:text-brand-primary z-10"
        >
          <X className="size-5" />
        </button>

        {/* Content Body */}
        <div className="flex flex-col items-center pt-12 pb-8 px-8 md:px-12 gap-8">
          
          {/* Header Area */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-[16px] bg-[#f0fdf4] flex items-center justify-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center">
                <Check className="size-5 text-white stroke-3" />
              </div>
            </div>
            <h2 className="text-[24px] font-bold text-brand-primary">
              Your RAMS PDF is Ready
            </h2>
            <p className="text-[15px] text-brand-secondary max-w-[400px]">
              The completed RAMS document has been generated and saved securely to your account.
            </p>
          </div>

          {/* Details Box */}
          <div className="w-full bg-[#f8f9fc] rounded-[8px] border border-[#e3e6ec] p-6">
            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
              <div className="flex flex-col gap-1.5">
                <span className="text-[12px] text-brand-secondary">RAMS Reference</span>
                <span className="text-[15px] font-bold text-brand-primary">RAMS-2023-0042</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[12px] text-brand-secondary">Project</span>
                <span className="text-[15px] font-bold text-brand-primary">Steel Frame Refurbishment</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[12px] text-brand-secondary">Version/Date</span>
                <span className="text-[15px] font-bold text-brand-primary">V1.0 / Oct 24, 2023</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[12px] text-brand-secondary">File Type/Status</span>
                <div className="flex items-center gap-3">
                  <span className="text-[15px] font-bold text-brand-primary">PDF</span>
                  <span className="bg-[#10b981] text-white px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold tracking-wide">
                    Generated
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="w-full bg-[#eff6ff] border border-[#bfdbfe] rounded-[8px] p-4 flex items-center gap-3">
            <Info className="size-5 text-brand-primary shrink-0" />
            <span className="text-[14px] text-brand-primary">
              The Risk Assessment register has been included at the back of the final RAMS PDF.
            </span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-[#e3e6ec] bg-white">
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-white font-bold text-[14px] hover:bg-[#0a1530]"
            onClick={onClose}
          >
            Download PDF
          </Button>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="h-[42px] px-4 rounded-[6px] border-brand-primary text-brand-primary font-bold text-[13px] hover:bg-slate-50"
              onClick={onClose}
            >
              Go to My Saved Files
            </Button>
            <Button 
              variant="outline" 
              className="h-[42px] px-4 rounded-[6px] border-brand-primary text-brand-primary font-bold text-[13px] hover:bg-slate-50"
              onClick={onClose}
            >
              Go to Previous RAMS
            </Button>
            <Button 
              variant="outline" 
              className="h-[42px] px-4 rounded-[6px] border-brand-primary text-brand-primary font-bold text-[13px] hover:bg-slate-50"
              onClick={onClose}
            >
              Preview Document
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
