import React from "react";
import { X, AlertTriangle, CheckCircle2, AlertCircle, FileText, Info, Upload, RotateCw, ZoomIn, ZoomOut, Maximize, Trash2, FileIcon, CloudUpload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface DeleteHazardModalProps {
  deleteHazardId: any;
  setDeleteHazardId: any;
  cleanupOptions: any;
  setCleanupOptions: any;
}

export function DeleteHazardModal({ deleteHazardId, setDeleteHazardId, cleanupOptions, setCleanupOptions }: DeleteHazardModalProps) {
  return (
    <>
      {deleteHazardId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-[12px] w-full max-w-[640px] shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4 shrink-0">
              <h3 className="text-[18px] font-bold text-[#132651]">Delete Hazard</h3>
              <button
                onClick={() => setDeleteHazardId(null)}
                className="text-[#95a0b6] hover:text-[#132651] hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
              >
                <X className="size-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              {/* Ref Card */}
              <div className="bg-[#f8f9fc] border border-[#e3e6ec] rounded-[8px] p-4 flex items-start gap-3">
                <AlertTriangle className="size-4 text-[#5a6886] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] font-bold text-[#5a6886] uppercase tracking-wider mb-1">HAZARD REF: HZ-042</p>
                  <p className="text-[14px] font-bold text-[#132651] mb-1">Working at Height: Scaffold Operations</p>
                  <p className="text-[13px] font-medium text-[#5a6886]">Severity: 4 | Likelihood: 3 (High Risk)</p>
                </div>
              </div>

              {/* Warning Alert */}
              <div className="bg-red-50 border border-red-200 rounded-[8px] p-4 flex items-start gap-3">
                <AlertTriangle className="size-5 text-[#e11d48] shrink-0" />
                <p className="text-[13px] font-medium text-[#e11d48] leading-relaxed">
                  <span className="font-bold">Action Required:</span> Removing this hazard will also invalidate 6 linked control measures and 2 method statements currently in the safety draft.
                </p>
              </div>

              {/* Advanced Cleanup Options */}
              <div className="pt-2">
                <h4 className="text-[14px] font-bold text-[#132651] mb-3">Advanced Cleanup Options</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="size-4.5 rounded border-[#c5c6cd] accent-[#132651]" 
                      checked={cleanupOptions.controls}
                      onChange={(e) => setCleanupOptions({...cleanupOptions, controls: e.target.checked})}
                    />
                    <span className="text-[13px] font-medium text-[#132651]">Delete linked controls</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="size-4.5 rounded border-[#c5c6cd] accent-[#132651]" 
                      checked={cleanupOptions.evidence}
                      onChange={(e) => setCleanupOptions({...cleanupOptions, evidence: e.target.checked})}
                    />
                    <span className="text-[13px] font-medium text-[#132651]">Remove evidence</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="size-4.5 rounded border-[#c5c6cd] accent-[#132651]" 
                      checked={cleanupOptions.audit}
                      onChange={(e) => setCleanupOptions({...cleanupOptions, audit: e.target.checked})}
                    />
                    <span className="text-[13px] font-medium text-[#132651]">Keep audit log (Required for ISO 45001)</span>
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  className="h-10 rounded-[6px] bg-[#132651] px-6 text-[14px] font-bold text-white hover:bg-[#0d1b3a] transition-all"
                  onClick={() => {
                    toast.success("Hazard deleted successfully.");
                    setDeleteHazardId(null);
                  }}
                >
                  Delete Hazard
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
