import React from "react";
import { Button } from "@/components/ui/button";
import { X, MessageSquare, FileText, Plus, File, Image as ImageIcon, FileCode, Info } from "lucide-react";

interface SubmitReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubmitReviewModal({ isOpen, onClose }: SubmitReviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 backdrop-blur-sm p-4 md:p-8 overflow-y-auto">
      {/* Modal Container */}
      <div className="bg-white rounded-[12px] w-full max-w-[700px] flex flex-col relative shadow-2xl my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e3e6ec] bg-white rounded-t-[12px]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-[8px] bg-[#fff7ed] flex items-center justify-center border border-[#ffedd5]">
              <MessageSquare className="size-5 text-[#f97316]" />
            </div>
            <h2 className="text-[20px] font-bold text-brand-primary">Submit RAMS for Review</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 transition-colors text-brand-secondary hover:text-brand-primary"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col gap-8 overflow-y-auto max-h-[70vh]">
          
          {/* Section 1: Document Summary */}
          <div className="bg-[#f8f9fc] rounded-[8px] border border-[#e3e6ec] flex flex-col p-5 gap-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white border border-[#e3e6ec] rounded-[6px] flex items-center justify-center shadow-sm">
                  <FileText className="size-5 text-brand-secondary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] text-brand-secondary">Document Summary</span>
                  <span className="text-[14px] font-bold text-brand-primary">MS-2024-001 High Level Cladding Work</span>
                </div>
              </div>
              <div className="bg-[#e2e8f0] text-brand-primary font-bold text-[11px] px-2.5 py-1 rounded-[4px]">
                Draft
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-[12px] text-brand-secondary">Project</span>
                <span className="text-[13px] font-bold text-brand-primary">City Plaza Redevelopment</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[12px] text-brand-secondary">Reference</span>
                <span className="text-[13px] font-bold text-brand-primary">AL-RAMS-2023-089</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[12px] text-brand-secondary">Version</span>
                <span className="text-[13px] font-bold text-brand-primary">v1.0.4</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[12px] text-brand-secondary">Prepared By</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="w-5 h-5 rounded-full bg-brand-primary text-white flex items-center justify-center text-[9px] font-bold">
                    AL
                  </div>
                  <span className="text-[13px] font-bold text-brand-primary">Alan Ludewig</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-[#e3e6ec]">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-brand-secondary">Attached Files (3)</span>
                <button className="flex items-center gap-1 text-[12px] font-bold text-brand-primary hover:underline">
                  <Plus className="size-3.5" />
                  Add File
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#e3e6ec] rounded-[4px] shadow-sm">
                  <File className="size-3.5 text-brand-secondary" />
                  <span className="text-[11px] text-brand-primary">Site_Map_A1.pdf</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#e3e6ec] rounded-[4px] shadow-sm">
                  <ImageIcon className="size-3.5 text-brand-secondary" />
                  <span className="text-[11px] text-brand-primary">Excavator_Cert.jpg</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#e3e6ec] rounded-[4px] shadow-sm">
                  <FileCode className="size-3.5 text-brand-secondary" />
                  <span className="text-[11px] text-brand-primary">Emergency_Contact_List.docx</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Review Routing */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[14px] font-bold text-brand-primary">Review Routing</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-brand-primary">Reviewer</label>
                <select className="w-full h-10 px-3 rounded-[6px] border border-[#c5c6d0] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2395a0b6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-size-[16px_16px] bg-position-[right_12px_center] bg-no-repeat pr-8">
                  <option value="" disabled selected>Select internal or external reviewer...</option>
                  <option value="1">John Doe (Internal)</option>
                  <option value="2">Jane Smith (External)</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-brand-primary">Priority</label>
                <select className="w-full h-10 px-3 rounded-[6px] border border-[#c5c6d0] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2395a0b6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-size-[16px_16px] bg-position-[right_12px_center] bg-no-repeat pr-8">
                  <option value="standard">Standard</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 w-1/2 pr-2">
              <label className="text-[13px] text-brand-primary">Required Completion Date</label>
              <input 
                type="text" 
                defaultValue="11/20/2024"
                className="w-full h-10 px-3 rounded-[6px] border border-[#c5c6d0] text-[13px] text-brand-primary placeholder:text-[#95a0b6] focus:outline-none focus:border-brand-primary"
              />
            </div>

            <div className="flex flex-col gap-1.5 mt-2">
              <label className="text-[13px] text-brand-primary">Message for Reviewer (Optional)</label>
              <textarea 
                placeholder="Provide any additional context for the reviewer..."
                className="w-full min-h-[100px] p-3 rounded-[8px] border border-[#c5c6d0] text-[13px] text-brand-primary placeholder:text-[#95a0b6] focus:outline-none focus:border-brand-primary resize-none"
              />
            </div>
          </div>

          {/* Section 3: Submission Checklist */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[14px] font-bold text-brand-primary">Submission Checklist</h3>
            
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary w-4 h-4" />
                <span className="text-[13px] text-brand-secondary">I confirm all site-specific risks have been identified.</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary w-4 h-4" />
                <span className="text-[13px] text-brand-secondary">All mandatory equipment certifications are attached.</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary w-4 h-4" />
                <span className="text-[13px] text-brand-secondary">Emergency procedures are current and project-accurate.</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary w-4 h-4" />
                <span className="text-[13px] text-brand-secondary">Method statements have been reviewed for technical accuracy.</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary w-4 h-4" />
                <span className="text-[13px] text-brand-secondary">Required personnel lists are completed and verified.</span>
              </label>

              <div className="mt-4 bg-[#e0e7ff]/50 border border-[#e0e7ff] rounded-[8px] p-4 flex items-start gap-3">
                <Info className="size-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-[12px] text-brand-secondary leading-[1.6]">
                  I confirm that this RAMS is ready for competent person review and all identified high-level risks have been mitigated according to the Hierarchy of Controls.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-[#e3e6ec] bg-white rounded-b-[12px]">
          <Button 
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
            onClick={onClose}
          >
            Save Draft
          </Button>
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-white font-bold text-[14px] hover:bg-[#0a1530]"
            onClick={onClose}
          >
            Confirm & Submit
          </Button>
        </div>

      </div>
    </div>
  );
}
