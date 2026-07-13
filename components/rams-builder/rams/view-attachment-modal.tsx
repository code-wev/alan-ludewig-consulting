import React from "react";
import { Button } from "@/components/ui/button";
import { 
  X, 
  Download, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight, 
  ZoomOut, 
  ZoomIn, 
  Maximize, 
  Printer, 
  Info, 
  AlignLeft, 
  FileText,
  Map
} from "lucide-react";

interface ViewAttachmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ViewAttachmentModal({ isOpen, onClose }: ViewAttachmentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 backdrop-blur-sm p-4 md:p-8 overflow-y-auto">
      {/* Modal Container */}
      <div className="bg-white rounded-[12px] w-full max-w-[1200px] flex flex-col relative shadow-2xl my-auto">
        
        {/* Top Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#e3e6ec] bg-white rounded-t-[12px] relative">
          
          {/* Left Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-[8px] bg-[#f0f2f5] flex items-center justify-center shrink-0 border border-[#e3e6ec]">
              <FileText className="size-6 text-brand-primary" fill="#132651" fillOpacity={0.1} />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[18px] font-bold text-brand-primary flex items-center gap-2">
                Supporting Attachment Preview 
                <span className="text-[#c5c6d0]">•</span> 
                Site Layout Plan.pdf
              </h2>
              <p className="text-[13px] text-brand-secondary">
                PDF Document <span className="mx-1">•</span> Environment & Emergency Arrangements <span className="mx-1">•</span> Uploaded 24 Oct 2026
              </p>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex flex-col items-end gap-2 absolute top-6 right-6">
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-slate-100 transition-colors text-brand-secondary hover:text-brand-primary"
            >
              <X className="size-5" />
            </button>
            <div className="flex items-center gap-4 text-brand-secondary mt-1">
              <button className="hover:text-brand-primary transition-colors">
                <Download className="size-5" />
              </button>
              <button className="hover:text-brand-primary transition-colors">
                <MoreVertical className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex flex-col lg:flex-row h-[600px] bg-white">
          
          {/* Left: PDF Viewer */}
          <div className="flex-1 flex flex-col border-r border-[#e3e6ec] bg-[#f8f9fc]">
            
            {/* Toolbar */}
            <div className="h-12 border-b border-[#e3e6ec] bg-[#f0f2f5] flex items-center justify-between px-4">
              {/* Pagination */}
              <div className="flex items-center gap-2 text-brand-primary">
                <button className="p-1 hover:bg-slate-200 rounded-[4px]"><ChevronLeft className="size-4" /></button>
                <div className="flex items-center bg-white border border-[#c5c6d0] rounded-[4px] px-2 h-7 text-[13px] font-bold">
                  1 <span className="text-brand-secondary font-normal mx-1">/ 3</span>
                </div>
                <button className="p-1 hover:bg-slate-200 rounded-[4px]"><ChevronRight className="size-4" /></button>
              </div>

              {/* Zoom */}
              <div className="flex items-center gap-3 text-brand-primary">
                <button className="p-1 hover:bg-slate-200 rounded-[4px]"><ZoomOut className="size-4" /></button>
                <select className="h-7 border border-[#c5c6d0] rounded-[4px] px-2 text-[13px] bg-white focus:outline-none focus:border-brand-primary appearance-none pr-6 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2395a0b6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-size-[14px_14px] bg-position-[right_4px_center] bg-no-repeat">
                  <option>100%</option>
                  <option>75%</option>
                  <option>50%</option>
                  <option>Fit Width</option>
                </select>
                <button className="p-1 hover:bg-slate-200 rounded-[4px]"><ZoomIn className="size-4" /></button>
              </div>

              {/* Tools */}
              <div className="flex items-center gap-2 text-brand-primary">
                <button className="p-1.5 hover:bg-slate-200 rounded-[4px]"><Maximize className="size-4" /></button>
                <button className="p-1.5 hover:bg-slate-200 rounded-[4px]"><Printer className="size-4" /></button>
              </div>
            </div>

            {/* Viewer Canvas */}
            <div className="flex-1 bg-[#e3e6ec] overflow-auto flex items-center justify-center p-8">
              
              {/* PDF Page Mockup */}
              <div className="w-full max-w-[700px] aspect-[1.414/1] bg-white shadow-md border border-[#c5c6d0] flex flex-col relative p-8">
                
                {/* PDF Header */}
                <div className="flex justify-between items-start border-b-2 border-brand-primary pb-4 mb-6">
                  <div className="w-20 h-12 bg-brand-light-grey flex items-center justify-center text-[10px] font-bold text-brand-primary tracking-widest">
                    LOGO
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <h3 className="text-[20px] font-bold text-brand-primary">Site Layout Plan</h3>
                    <span className="text-[10px] text-brand-secondary">Project Ref: LL-4902-B</span>
                    <span className="text-[10px] text-brand-secondary">Drawing: 001 Rev A</span>
                  </div>
                </div>

                {/* PDF Content (Map Placeholder) */}
                <div className="flex-1 border-2 border-dashed border-[#c5c6d0] relative flex items-center justify-center bg-[#f8f9fc]/50 overflow-hidden">
                  <Map className="size-20 text-[#c5c6d0] opacity-30" />
                  
                  {/* Mock tooltip */}
                  <div className="absolute top-4 right-4 bg-white border border-[#e3e6ec] shadow-sm rounded-[4px] px-3 py-1.5 text-[10px] text-brand-primary">
                    Coordinates: 51.5074° N, 0.1278° W
                  </div>
                  
                  {/* Mock map elements */}
                  <div className="absolute inset-x-12 bottom-12 h-32 border border-[#86efac] bg-[#dcfce7]/30"></div>
                  <div className="absolute left-16 top-16 w-24 h-24 border border-[#93c5fd] bg-[#dbeafe]/40"></div>
                </div>

                {/* PDF Footer */}
                <div className="mt-6 flex justify-between items-center text-[8px] text-brand-secondary">
                  <span>Alan Ludewig Consulting - For Information only</span>
                  <span>Page 1 of 3</span>
                </div>

              </div>

            </div>
          </div>

          {/* Right: Sidebar Info */}
          <div className="w-[340px] p-6 flex flex-col gap-6 bg-[#fafafc] overflow-y-auto shrink-0">
            
            {/* Attachment Details Card */}
            <div className="bg-[#f8f9fc] rounded-[8px] border border-[#e3e6ec] overflow-hidden">
              <div className="h-1 bg-brand-primary w-full" />
              <div className="p-4 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Info className="size-4 text-brand-primary" />
                  <h3 className="text-[14px] font-bold text-brand-primary">Attachment Details</h3>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-brand-secondary uppercase">Attachment Name</span>
                  <span className="text-[13px] text-brand-primary">Site Layout Plan.pdf</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-brand-secondary uppercase">File Type</span>
                    <span className="text-[13px] text-brand-primary">PDF<br/>Document</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-brand-secondary uppercase">Ref Number</span>
                    <span className="text-[13px] text-brand-primary">DWG-829-01</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-brand-secondary uppercase">Related RAMS Section</span>
                  <span className="text-[13px] text-brand-primary">Environment & Emergency</span>
                </div>
              </div>
            </div>

            {/* Notes Card */}
            <div className="bg-white rounded-[8px] border border-[#e3e6ec] p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlignLeft className="size-4 text-brand-primary" />
                  <h3 className="text-[14px] font-bold text-brand-primary">Notes</h3>
                </div>
                <button className="text-[11px] font-bold text-[#2563eb] hover:underline">
                  Edit Notes
                </button>
              </div>

              <div className="p-4 rounded-[6px] border border-[#f0f2f5] bg-white shadow-sm text-[13px] text-[#64748b] leading-[1.6] italic font-medium">
                &quot;Revised layout including the new emergency muster point B. Access routes verified by Site Manager on 23rd Oct. Please ensure this is printed in A3 format for site board.&quot;
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-[#e3e6ec] bg-white rounded-b-[12px]">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="h-[42px] px-6 rounded-[6px] border-brand-primary text-brand-primary font-bold text-[14px] hover:bg-slate-50"
            >
              Replace Attachment
            </Button>
            <Button 
              className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-white font-bold text-[14px] hover:bg-[#0f1d3e]"
            >
              Download File
            </Button>
          </div>
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-[#ef4444] text-white font-bold text-[14px] hover:bg-[#dc2626]"
          >
            Delete Attachment
          </Button>
        </div>

      </div>
    </div>
  );
}
