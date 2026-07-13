import React from "react";
import { Button } from "@/components/ui/button";
import { X, UploadCloud, FileText, RefreshCw, Trash2, Info, Check } from "lucide-react";

interface AddAttachmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddAttachmentModal({ isOpen, onClose }: AddAttachmentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 backdrop-blur-sm p-4 md:p-8 overflow-y-auto">
      {/* Modal Container */}
      <div className="bg-white rounded-[12px] w-full max-w-[800px] flex flex-col relative shadow-2xl my-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#e3e6ec] bg-white rounded-t-[12px]">
          <div className="flex flex-col gap-1">
            <h2 className="text-[20px] font-bold text-brand-primary">Add Supporting Attachment</h2>
            <p className="text-[14px] text-brand-secondary">
              Attach supporting documents, drawings, plans or evidence to this RAMS.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 transition-colors text-brand-primary"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col gap-8 overflow-y-auto max-h-[70vh]">
          
          {/* Section 1: File Information */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#e0e7ff] text-brand-primary font-bold text-[12px] flex items-center justify-center shrink-0">
                1
              </div>
              <h3 className="text-[14px] font-bold text-brand-primary">File Information</h3>
            </div>
            
            <div className="flex flex-col gap-4 pl-9">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-brand-primary">
                  Attachment Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Site Layout Plan - Zone A"
                  className="w-full h-10 px-3 rounded-[6px] border border-[#c5c6d0] text-[13px] text-brand-primary placeholder:text-[#95a0b6] focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-bold text-brand-primary">
                    File Type <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full h-10 px-3 rounded-[6px] border border-[#c5c6d0] text-[13px] text-brand-secondary bg-white focus:outline-none focus:border-brand-primary appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2395a0b6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-size-[16px_16px] bg-position-[right_12px_center] bg-no-repeat pr-8">
                    <option value="" disabled selected>Select file type...</option>
                    <option value="pdf">PDF Document</option>
                    <option value="image">Image (JPG/PNG)</option>
                    <option value="excel">Spreadsheet</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-bold text-brand-primary">
                    Related RAMS Section <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full h-10 px-3 rounded-[6px] border border-[#c5c6d0] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2395a0b6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-size-[16px_16px] bg-position-[right_12px_center] bg-no-repeat pr-8">
                    <option value="general">General RAMS Attachment</option>
                    <option value="scope">Scope of Works</option>
                    <option value="methodology">Methodology</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-bold text-brand-primary">Reference Number</label>
                  <input 
                    type="text" 
                    placeholder="e.g. DWG-102-A"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#c5c6d0] text-[13px] text-brand-primary placeholder:text-[#95a0b6] focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-bold text-brand-primary">Revision</label>
                  <input 
                    type="text" 
                    defaultValue="v1.0"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#c5c6d0] text-[13px] text-brand-primary placeholder:text-[#95a0b6] focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-bold text-brand-primary">Doc Date</label>
                  <input 
                    type="text" 
                    placeholder="mm/dd/yyyy"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#c5c6d0] text-[13px] text-brand-primary placeholder:text-[#95a0b6] focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: File upload */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#e0e7ff] text-brand-primary font-bold text-[12px] flex items-center justify-center shrink-0">
                2
              </div>
              <h3 className="text-[14px] font-bold text-brand-primary">File upload</h3>
            </div>
            
            <div className="flex flex-col gap-4 pl-9">
              {/* Drag Drop Area */}
              <div className="w-full border-2 border-dashed border-[#c5c6d0] rounded-[8px] bg-white py-10 flex flex-col items-center justify-center gap-4 transition-colors hover:bg-slate-50">
                <div className="w-12 h-12 bg-[#e0e7ff] rounded-[10px] flex items-center justify-center">
                  <UploadCloud className="size-6 text-brand-primary" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h4 className="text-[14px] font-bold text-brand-primary">Drag and drop your file here</h4>
                  <p className="text-[12px] text-brand-secondary">Supported files: PDF, DOCX, XLSX, JPG, PNG. Maximum file size: 20MB.</p>
                </div>
                <Button variant="outline" className="h-9 px-6 text-[12px] font-bold text-brand-primary border-brand-primary hover:bg-slate-50 mt-2">
                  Browse Files
                </Button>
              </div>

              {/* Uploaded File Item */}
              <div className="w-full bg-[#f8f9fc] border border-[#e3e6ec] rounded-[8px] p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-[#e3e6ec] rounded-[6px] flex items-center justify-center shadow-sm">
                    <FileText className="size-5 text-[#ef4444]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-brand-primary">Site_Layout_Plan_v2.pdf</span>
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="text-brand-secondary">4.2 MB</span>
                      <span className="text-brand-secondary">•</span>
                      <span className="text-[#16a34a] font-bold flex items-center gap-1">
                        <Check className="size-3" />
                        Upload Complete
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-[#64748b] hover:text-brand-primary transition-colors">
                    <RefreshCw className="size-4" />
                  </button>
                  <button className="text-[#ef4444] hover:text-[#dc2626] transition-colors">
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Attachment Notes */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#e0e7ff] text-brand-primary font-bold text-[12px] flex items-center justify-center shrink-0">
                3
              </div>
              <h3 className="text-[14px] font-bold text-brand-primary">Attachment Notes</h3>
            </div>
            
            <div className="pl-9">
              <textarea 
                placeholder="Add information about why this attachment is included or any instructions for the reviewer..."
                className="w-full min-h-[100px] p-3 rounded-[8px] border border-[#c5c6d0] text-[13px] text-brand-primary placeholder:text-[#95a0b6] focus:outline-none focus:border-brand-primary resize-none"
              />
            </div>
          </div>

          {/* Section 4: Output Options */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#e0e7ff] text-brand-primary font-bold text-[12px] flex items-center justify-center shrink-0">
                4
              </div>
              <h3 className="text-[14px] font-bold text-brand-primary">Output Options</h3>
            </div>
            
            <div className="flex flex-col gap-3 pl-9">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary w-4 h-4" />
                <span className="text-[13px] text-brand-secondary">Include in generated RAMS PDF attachment pack</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary w-4 h-4" />
                <span className="text-[13px] text-brand-secondary">Include attachment reference in the selected RAMS section</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary w-4 h-4" />
                <span className="text-[13px] text-brand-secondary">Mark as reviewer-only supporting evidence</span>
              </label>

              <div className="mt-2 bg-[#e0e7ff]/50 border border-[#e0e7ff] rounded-[8px] p-4 flex items-center gap-3">
                <Info className="size-5 text-brand-primary shrink-0" />
                <p className="text-[12px] text-brand-secondary">
                  Attachments will be stored securely with this RAMS and can be previewed before document generation.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-[#e3e6ec] bg-white rounded-b-[12px]">
          <Button 
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-brand-primary text-brand-primary font-bold text-[14px] hover:bg-slate-50"
            onClick={onClose}
          >
            Save Draft
          </Button>
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-white font-bold text-[14px] hover:bg-[#0f1d3e]"
            onClick={onClose}
          >
            Add Attachment
          </Button>
        </div>

      </div>
    </div>
  );
}
