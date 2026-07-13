import React from "react";
import { Button } from "@/components/ui/button";
import { X, History, MessageSquare, ExternalLink, MoreHorizontal } from "lucide-react";

interface RamsReviewCommentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RamsReviewCommentsModal({ isOpen, onClose }: RamsReviewCommentsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 backdrop-blur-sm p-4 md:p-8 overflow-y-auto">
      {/* Modal Container */}
      <div className="bg-white rounded-[12px] w-full max-w-[1000px] flex flex-col relative shadow-2xl my-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#e3e6ec] bg-white rounded-t-[12px]">
          <div className="flex flex-col gap-1">
            <h2 className="text-[20px] font-bold text-brand-primary">RAMS Review Comments</h2>
            <p className="text-[13px] text-brand-secondary">
              Document ID: RAMS-2023-0842 <span className="mx-1">•</span> Project: Central Plaza Maintenance
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 transition-colors text-brand-secondary hover:text-brand-primary"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex flex-col md:flex-row h-[600px] bg-white">
          
          {/* Left Sidebar: Review History */}
          <div className="w-[300px] border-r border-[#e3e6ec] p-6 flex flex-col gap-6 overflow-y-auto shrink-0">
            <div className="flex items-center gap-2 text-brand-primary">
              <History className="size-5" />
              <h3 className="text-[14px] font-bold">Review History</h3>
            </div>

            <div className="flex flex-col relative pl-3 pt-2">
              {/* Vertical line connecting nodes */}
              <div className="absolute top-4 bottom-8 left-[15px] w-px bg-[#e3e6ec]" />

              {/* Timeline Item 1 */}
              <div className="flex gap-4 pb-8 relative z-10">
                <div className="w-2 h-2 rounded-full bg-[#ef4444] mt-1.5 shrink-0 ml-[0.5px]" />
                <div className="flex flex-col gap-1 w-full">
                  <span className="text-[10px] font-bold text-[#ef4444] uppercase tracking-wider">Returned</span>
                  <span className="text-[14px] font-bold text-brand-primary">Revision Required</span>
                  <span className="text-[12px] text-brand-secondary">Oct 24, 2023 • 14:20</span>
                  <div className="mt-2 bg-[#f8f9fc] border border-[#e3e6ec] rounded-[6px] p-3 text-[12px] text-brand-secondary italic">
                    &quot;Several critical safety gaps identified in the methodology section.&quot;
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-4 pb-8 relative z-10">
                <div className="w-2 h-2 rounded-full bg-[#93c5fd] mt-1.5 shrink-0 ml-[0.5px]" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-wider">Resubmitted</span>
                  <span className="text-[14px] font-bold text-brand-primary">Version 1.2 Submitted</span>
                  <span className="text-[12px] text-brand-secondary">Oct 22, 2023 • 09:15</span>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex gap-4 pb-8 relative z-10 opacity-60">
                <div className="w-2 h-2 rounded-full bg-[#c5c6d0] mt-1.5 shrink-0 ml-[0.5px]" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-wider">Reviewed</span>
                  <span className="text-[14px] font-bold text-brand-secondary">Initial Audit Completed</span>
                  <span className="text-[12px] text-brand-secondary">Oct 19, 2023 • 16:45</span>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex gap-4 relative z-10 opacity-60">
                <div className="w-2 h-2 rounded-full bg-[#c5c6d0] mt-1.5 shrink-0 ml-[0.5px]" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-wider">Submitted</span>
                  <span className="text-[14px] font-bold text-brand-secondary">Initial Submission</span>
                  <span className="text-[12px] text-brand-secondary">Oct 18, 2023 • 11:30</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Area: Reviewer Comments */}
          <div className="flex-1 bg-[#f8f9fc] flex flex-col overflow-y-auto">
            <div className="p-6 pb-4 flex items-center justify-between sticky top-0 bg-[#f8f9fc] z-20 border-b border-[#e3e6ec]/50">
              <div className="flex items-center gap-2 text-brand-primary">
                <MessageSquare className="size-5" />
                <h3 className="text-[14px] font-bold">Reviewer Comments</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-[#fef2f2] text-[#ef4444] px-2 py-1 rounded-full text-[10px] font-bold border border-[#fecaca]">
                  1 Critical Issue
                </span>
                <span className="bg-[#eff6ff] text-[#3b82f6] px-2 py-1 rounded-full text-[10px] font-bold border border-[#bfdbfe]">
                  2 Minor
                </span>
              </div>
            </div>

            <div className="p-6 pt-2 flex flex-col gap-4">
              
              {/* Comment Card 1: Critical */}
              <div className="bg-white rounded-[8px] border-2 border-[#ef4444] p-5 flex flex-col gap-4 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#ef4444]" />
                <div className="flex items-start justify-between pl-1">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[14px] font-bold text-brand-primary">Methodology & Risk Control</h4>
                    <span className="text-[12px] text-brand-secondary">Sarah Jenkins • Oct 24, 2023</span>
                  </div>
                  <span className="bg-[#ef4444] text-white px-2 py-0.5 rounded-[4px] text-[10px] font-bold">
                    Critical
                  </span>
                </div>
                <p className="text-[13px] text-brand-secondary leading-[1.6] pl-1">
                  The fallback protection plan for work at heights does not specify the anchor point ratings. This must be confirmed against the 12kN standard for two-person rescue loads.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#f0f2f5] pl-1">
                  <button className="flex items-center gap-1.5 text-[12px] font-bold text-brand-primary hover:underline">
                    <ExternalLink className="size-3.5" />
                    Open Related Section
                  </button>
                  <button className="text-[#95a0b6] hover:text-brand-primary transition-colors">
                    <MoreHorizontal className="size-4" />
                  </button>
                </div>
              </div>

              {/* Comment Card 2: Important */}
              <div className="bg-white rounded-[8px] border border-[#e3e6ec] p-5 flex flex-col gap-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[14px] font-bold text-brand-primary">Scope of Works</h4>
                    <span className="text-[12px] text-brand-secondary">Sarah Jenkins • Oct 24, 2023</span>
                  </div>
                  <span className="bg-[#dbeafe] text-[#1e40af] px-2 py-0.5 rounded-[4px] text-[10px] font-bold">
                    Important
                  </span>
                </div>
                <p className="text-[13px] text-brand-secondary leading-[1.6]">
                  Night-time illumination requirements are mentioned but the specific LUX levels for the loading bay area are missing. Please provide specific hardware specs for temporary lighting.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#f0f2f5]">
                  <button className="flex items-center gap-1.5 text-[12px] font-bold text-brand-primary hover:underline">
                    <ExternalLink className="size-3.5" />
                    Open Related Section
                  </button>
                  <button className="text-[#95a0b6] hover:text-brand-primary transition-colors">
                    <MoreHorizontal className="size-4" />
                  </button>
                </div>
              </div>

              {/* Comment Card 3: Minor */}
              <div className="bg-white rounded-[8px] border border-[#e3e6ec] p-5 flex flex-col gap-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[14px] font-bold text-brand-primary">Project Details</h4>
                    <span className="text-[12px] text-brand-secondary">System Audit • Oct 24, 2023</span>
                  </div>
                  <span className="bg-[#f0f2f5] text-[#475569] px-2 py-0.5 rounded-[4px] text-[10px] font-bold">
                    Minor
                  </span>
                </div>
                <p className="text-[13px] text-brand-secondary leading-[1.6]">
                  Contact phone number for the Primary Subcontractor appears to be missing a digit. Please verify.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#f0f2f5]">
                  <button className="flex items-center gap-1.5 text-[12px] font-bold text-brand-primary hover:underline">
                    <ExternalLink className="size-3.5" />
                    Open Related Section
                  </button>
                  <button className="text-[#95a0b6] hover:text-brand-primary transition-colors">
                    <MoreHorizontal className="size-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-4 p-6 border-t border-[#e3e6ec] bg-white rounded-b-[12px]">
          <Button 
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-brand-primary text-brand-primary font-bold text-[14px] hover:bg-slate-50"
            onClick={onClose}
          >
            Edit RAMS
          </Button>
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-white font-bold text-[14px] hover:bg-[#0a1530]"
            onClick={onClose}
          >
            Resubmit for Review
          </Button>
        </div>

      </div>
    </div>
  );
}
