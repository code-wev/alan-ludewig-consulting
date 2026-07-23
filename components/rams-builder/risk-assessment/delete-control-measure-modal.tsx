import React from "react";
import { X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeleteControlMeasureModalProps {
  deleteControlMeasureId: string | null;
  setDeleteControlMeasureId: (id: string | null) => void;
}

export function DeleteControlMeasureModal({ deleteControlMeasureId, setDeleteControlMeasureId }: DeleteControlMeasureModalProps) {
  if (!deleteControlMeasureId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-[12px] w-full max-w-[600px] shadow-2xl flex flex-col my-8 max-h-[90vh] overflow-hidden transition-all duration-300">
        <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4.5 shrink-0">
          <h3 className="text-[20px] font-bold text-[#132651]">Delete Control Measure</h3>
          <button
            onClick={() => setDeleteControlMeasureId(null)}
            className="text-[#95a0b6] hover:text-[#132651] hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          <div className="bg-[#f8f9fc] rounded-[8px] border border-[#e3e6ec] p-5">
            <h4 className="text-[14px] font-bold text-[#132651] mb-5">Risk Impact panel</h4>
            
            <div className="grid grid-cols-2 gap-6 mb-5">
              <div>
                <p className="text-[12px] text-[#5a6886] mb-1">Current Risk</p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="size-2.5 rounded-full bg-[#f59e0b]"></div>
                  <span className="text-[14px] font-bold text-[#132651]">Medium</span>
                </div>
                <p className="text-[12px] text-[#5a6886]">Score: 12(4*3)</p>
              </div>
              <div>
                <p className="text-[12px] text-[#5a6886] mb-1">Category</p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="size-2.5 rounded-full bg-[#e11d48]"></div>
                  <span className="text-[14px] font-bold text-[#132651]">High</span>
                </div>
                <p className="text-[12px] text-[#5a6886]">Score: 20(5*4)</p>
              </div>
            </div>

            <div className="w-full h-1.5 rounded-full flex overflow-hidden mb-2">
              <div className="h-full bg-[#f59e0b]" style={{ width: "60%" }}></div>
              <div className="h-full bg-[#e11d48]/30" style={{ width: "40%" }}></div>
            </div>
            <p className="text-[12px] text-[#5a6886]">Action required for High risk</p>
          </div>

          <div className="bg-[#fef2f2] border border-[#fca5a5] rounded-[8px] p-4 flex items-start gap-3">
             <AlertTriangle className="size-4 text-[#dc2626] shrink-0 mt-0.5" />
             <p className="text-[13px] text-[#dc2626]">
               This action will be logged in the compliance audit trail. Ensure an alternative control is in place if necessary.
             </p>
          </div>
        </div>

        <div className="flex items-center justify-start border-t border-[#e3e6ec] p-6 bg-white shrink-0">
          <Button
            className="h-10 w-full sm:w-auto rounded-[6px] bg-[#132651] px-6 text-[14px] font-bold text-white hover:bg-[#0d1b3a] shadow-none"
            onClick={() => setDeleteControlMeasureId(null)}
          >
            Delete Control Measure
          </Button>
        </div>
      </div>
    </div>
  );
}
