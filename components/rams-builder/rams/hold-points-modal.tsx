import React from "react";
import { 
  X, List, PlusCircle, CloudUpload, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HoldPointsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HoldPointsModal({ isOpen, onClose }: HoldPointsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[1100px] max-w-full max-h-[90vh] bg-white rounded-[12px] shadow-lg border border-[#e3e6ec] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-[24px] font-bold text-brand-primary">Hold Points</h2>
            <p className="text-[14px] text-brand-secondary mt-1">
              Define work stages that must stop for inspection, approval or formal release before work continues.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-brand-secondary hover:text-brand-primary transition-colors mt-1"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 flex flex-col gap-8 overflow-y-auto flex-1 no-scrollbar">
          
          {/* Section 1: Existing Hold Points */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2">
              <List className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary">Existing Hold Points</h3>
            </div>
            
            <div className="flex flex-col rounded-[12px] border border-[#e3e6ec] overflow-hidden">
              <div className="grid grid-cols-[40px_80px_200px_1fr_150px_150px_80px_120px] gap-4 px-4 py-3 bg-[#dbeafe] text-[#1e3a8a] text-[12px] font-bold items-center">
                <div className="flex justify-center">
                  <input type="checkbox" className="rounded-[4px] border-[#c4cce0] text-brand-primary focus:ring-brand-primary" />
                </div>
                <div>Ref</div>
                <div>Title</div>
                <div>Description</div>
                <div>Related Step</div>
                <div>Responsible</div>
                <div>Insp. Req</div>
                <div>Status</div>
              </div>
              
              {/* Row 1 */}
              <div className="grid grid-cols-[40px_80px_200px_1fr_150px_150px_80px_120px] gap-4 px-4 py-4 bg-white border-t border-[#e3e6ec] text-[13px] text-brand-primary items-center">
                <div className="flex justify-center">
                  <input type="checkbox" className="rounded-[4px] border-[#c4cce0] text-brand-primary focus:ring-brand-primary" />
                </div>
                <div className="font-medium">HP-001</div>
                <div>Foundation Inspection</div>
                <div className="text-brand-secondary pr-4 truncate">Verify reinforcement placement as per design before pouring...</div>
                <div>2.1 Excavation</div>
                <div>J. Smith (Site Mgr)</div>
                <div>Yes</div>
                <div>
                  <span className="inline-flex items-center px-2 py-1 rounded-[4px] bg-[#22c55e] text-white text-[11px] font-bold truncate max-w-full">
                    Approved to proceed
                  </span>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="grid grid-cols-[40px_80px_200px_1fr_150px_150px_80px_120px] gap-4 px-4 py-4 bg-white border-t border-[#e3e6ec] text-[13px] text-brand-primary items-center">
                <div className="flex justify-center">
                  <input type="checkbox" className="rounded-[4px] border-[#c4cce0] text-brand-primary focus:ring-brand-primary" />
                </div>
                <div className="font-medium">HP-002</div>
                <div>Weld Test Results</div>
                <div className="text-brand-secondary pr-4 truncate">NDT results must be signed off by 3rd party...</div>
                <div>3.4 Structural Steel</div>
                <div>A. Carter (QA)</div>
                <div>Yes</div>
                <div>
                  <span className="inline-flex items-center px-2 py-1 rounded-[4px] bg-[#fef08a] text-[#854d0e] text-[11px] font-bold truncate max-w-full">
                    Awaiting Inspection
                  </span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-[40px_80px_200px_1fr_150px_150px_80px_120px] gap-4 px-4 py-4 bg-white border-t border-[#e3e6ec] text-[13px] text-brand-primary items-center">
                <div className="flex justify-center">
                  <input type="checkbox" className="rounded-[4px] border-[#c4cce0] text-brand-primary focus:ring-brand-primary" />
                </div>
                <div className="font-medium">HP-003</div>
                <div>Fire Stop Sealing</div>
                <div className="text-brand-secondary pr-4 truncate">Confirm all penetration seals meet standard...</div>
                <div>5.2 Partitioning</div>
                <div>M. Lee (Fire Safety)</div>
                <div>Yes</div>
                <div>
                  <span className="inline-flex items-center px-2 py-1 rounded-[4px] bg-[#94a3b8] text-white text-[11px] font-bold truncate max-w-full">
                    Not Started
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Add New Hold Point Card */}
          <div className="flex flex-col rounded-[12px] border border-[#e3e6ec] p-6 shadow-sm gap-6 mt-4">
            <div className="flex items-center gap-2">
              <PlusCircle className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary">Add New Hold Point</h3>
            </div>
            
            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Row 1 */}
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Hold Point Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Roof Trusses Inspection"
                  className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Related Methodology Step</label>
                <div className="relative">
                  <select className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-10 focus:outline-none focus:border-brand-primary">
                    <option>Select methodology step...</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Responsible Person</label>
                <div className="relative">
                  <select className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none pr-10 focus:outline-none focus:border-brand-primary">
                    <option>Select person...</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Description</label>
                <textarea 
                  placeholder="Define exactly what must be inspected and why work must stop..."
                  className="w-full h-[120px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none placeholder:text-brand-secondary/60"
                ></textarea>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Approval Authority</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Local Council Inspector"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Required Evidence / Attachment</label>
                  <div className="w-full h-[50px] rounded-[6px] border border-dashed border-[#cbd5e1] flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors">
                    <CloudUpload className="size-4 text-[#64748b]" />
                    <span className="text-[13px] text-[#64748b]">Click to upload or drag & drop</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-2">
              <Button className="h-[42px] px-6 rounded-[6px] bg-[#0d1b2a] text-white font-bold text-[14px] hover:bg-black">
                Add New Hold Point
              </Button>
            </div>
          </div>
          
        </div>

        {/* Footer */}
        <div className="flex items-center justify-start gap-4 px-8 py-5 border-t border-[#e3e6ec] bg-white rounded-b-[12px]">
          <Button 
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
          >
            Save Draft
          </Button>
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-[#0d1b2a] text-white font-bold text-[14px] hover:bg-black"
          >
            Save & Close
          </Button>
        </div>
      </div>
    </div>
  );
}
