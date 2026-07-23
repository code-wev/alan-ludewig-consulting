import React from "react";
import { X, AlertTriangle, CheckCircle2, AlertCircle, FileText, Info, Upload, RotateCw, ZoomIn, ZoomOut, Maximize, Trash2, FileIcon, CloudUpload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface AddSiteImageModalProps {
  isAddSiteImageOpen: any;
  setIsAddSiteImageOpen: any;
  editImageId: any;
  setEditImageId: any;
  setIsAddCategoryOpen: any;
  images: any;
  hazardOptions: any;
}

export function AddSiteImageModal({ isAddSiteImageOpen, setIsAddSiteImageOpen, editImageId, setEditImageId, setIsAddCategoryOpen, images, hazardOptions }: AddSiteImageModalProps) {
  return (
    <>
      {(isAddSiteImageOpen || editImageId) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
          <div className="bg-white rounded-[12px] w-full max-w-[640px] shadow-2xl flex flex-col my-8 max-h-[90vh] overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4.5 shrink-0">
              <h3 className="text-[20px] font-bold text-brand-primary">
                {editImageId ? "Edit Site Image or Document" : "Add Site Image or Document"}
              </h3>
              <button
                onClick={() => { setIsAddSiteImageOpen(false); setEditImageId(null); }}
                className="text-[#95a0b6] hover:text-brand-primary hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">File Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Ground Floor Structural Crack"
                    className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all placeholder:text-[#a3acba]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">File Type</label>
                  <select className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all">
                    <option>Image (JPG, PNG)</option>
                    <option>Document (PDF, DOCX)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">Related Hazard</label>
                  <select className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all">
                    <option>Select associated hazard...</option>
                    <option>Structural Integrity (Critical)</option>
                    <option>Falls from Height</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">Related Assessment Section</label>
                  <select className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all">
                    <option>Select section...</option>
                    <option>North Wing - Ground Level</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary block">Document Upload</label>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#d0d4dc] rounded-[8px] bg-white py-10 px-6 gap-3 hover:border-brand-primary transition-all duration-200">
                  <CloudUpload className="size-8 text-brand-primary" />
                  <div className="text-center">
                    <p className="text-[14px] font-bold text-brand-primary">Drag and drop files here</p>
                    <p className="text-[12px] text-brand-secondary mt-1">Supports PDF, JPG, PNG, DOCX (Max 20MB)</p>
                  </div>
                  <Button variant="outline" className="h-8.5 rounded-[6px] border-brand-primary text-[12px] font-bold text-brand-primary mt-2">
                    Select Files
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">Capture Date</label>
                  <input
                    type="date"
                    className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">Notes</label>
                  <textarea
                    placeholder="Additional context for the reviewer..."
                    className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 py-2.5 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all placeholder:text-[#a3acba] resize-none"
                  />
                </div>
              </div>

              <div className="space-y-3.5 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 size-4 rounded border border-[#c5c6cd] accent-brand-primary" />
                  <div>
                    <p className="text-[14px] font-medium text-brand-primary group-hover:text-brand-primary/80">Include in final PDF appendix</p>
                    <p className="text-[12px] text-brand-secondary">This file will be automatically formatted and included in the client-facing report.</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 size-4 rounded border border-[#c5c6cd] accent-brand-primary" />
                  <div>
                    <p className="text-[14px] font-medium text-brand-primary group-hover:text-brand-primary/80">Link to selected hazard</p>
                    <p className="text-[12px] text-brand-secondary">Ensure evidence is visible within the context of the related risk profile.</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 size-4 rounded border border-[#c5c6cd] accent-brand-primary" />
                  <div>
                    <p className="text-[14px] font-medium text-brand-primary group-hover:text-brand-primary/80">Reviewers only evidence</p>
                    <p className="text-[12px] text-brand-secondary">Hide from client but keep visible for internal audit and verification.</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-start gap-3 px-6 py-4.5 border-t border-[#e3e6ec] bg-[#f9fafb]">
              <Button variant="outline" className="h-10 rounded-[6px] border-brand-primary bg-white px-6 text-[14px] font-bold text-brand-primary hover:bg-brand-bg-main" onClick={() => { setIsAddSiteImageOpen(false); setEditImageId(null); }}>
                Save Draft
              </Button>
              <Button className="h-10 rounded-[6px] bg-brand-primary px-6 text-[14px] font-bold text-white hover:bg-[#0d1b3a]" onClick={() => { setIsAddSiteImageOpen(false); setEditImageId(null); }}>
                {editImageId ? "Save Changes" : "Add File"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
