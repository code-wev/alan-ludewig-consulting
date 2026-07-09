import React, { useState } from "react";
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  Download, 
  Trash2, 
  FileText,
  AlertTriangle,
  Users,
  HardHat,
  ListOrdered,
  Info,
  Clock,
  UserPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PreviewRiskOutputModal } from "./preview-risk-output-modal";
import { AddAttachmentModal } from "./add-attachment-modal";
import { ViewAttachmentModal } from "./view-attachment-modal";
import { SubmitReviewModal } from "./submit-review-modal";
import { PreviewRamsModal } from "./preview-rams-modal";
import { RamsReviewCommentsModal } from "./rams-review-comments-modal";

interface ReviewGenerateStepProps {
  onPrevious: () => void;
  onNext: () => void;
}

const SECTION_STATUSES = [
  { id: 1, name: "1. Project Details", isComplete: true },
  { id: 2, name: "2. Scope of Works", isComplete: true },
  { id: 3, name: "3. Arrangements", isComplete: true },
  { id: 4, name: "4. PPE", isComplete: true },
  { id: 5, name: "5. Methodology", isComplete: true },
  { id: 6, name: "6. Env / Emergency", isComplete: true },
  { id: 7, name: "7. Risk Assessment", isComplete: true },
];

const ACCORDION_ITEMS = [
  {
    id: 1,
    icon: <Info className="size-5 text-brand-secondary" />,
    title: "Project Details",
    description: "Steel Frame Refurbishment — Horizon Developers — RAMS-2023-0042",
    isComplete: true
  },
  {
    id: 2,
    icon: <FileText className="size-5 text-brand-secondary" />,
    title: "Scope of Works",
    description: "External façade replacement and structural bracing.",
    isComplete: true
  },
  {
    id: 3,
    icon: <Users className="size-5 text-brand-secondary" />,
    title: "Arrangements, Plant & Equipment",
    description: "4 reference documents, 3 labour roles, 6 plant/equipment items and 2 associated permits.",
    isComplete: true
  },
  {
    id: 4,
    icon: <HardHat className="size-5 text-brand-secondary" />,
    title: "PPE",
    description: "Eye protection, cut-resistant gloves, hard hat, high-visibility vest and safety boots.",
    isComplete: true
  },
  {
    id: 5,
    icon: <ListOrdered className="size-5 text-brand-secondary" />,
    title: "Methodology / Sequence of Works",
    description: "6 work steps, 3 attached visuals and 2 supporting documents.",
    isComplete: true
  },
  {
    id: 6,
    icon: <AlertTriangle className="size-5 text-brand-secondary" />,
    title: "Environment, Hold Points & Emergency Arrangements",
    description: "Waste controls, hold points, first aid, fire arrangements, emergency contacts, nearest A&E and emergency route plan included.",
    isComplete: true
  },
  {
    id: 7,
    icon: <AlertTriangle className="size-5 text-brand-secondary" />,
    title: "Risk Assessment",
    description: "12 hazards assessed. 0 critical risks remaining and 3 medium risks under control.",
    isComplete: true
  }
];

export function ReviewGenerateStep({ onPrevious }: ReviewGenerateStepProps) {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isAddAttachmentModalOpen, setIsAddAttachmentModalOpen] = useState(false);
  const [isViewAttachmentModalOpen, setIsViewAttachmentModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isPreviewRamsModalOpen, setIsPreviewRamsModalOpen] = useState(false);
  const [isReviewCommentsModalOpen, setIsReviewCommentsModalOpen] = useState(false);

  const toggleSection = (id: number) => {
    setExpandedSections(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedSections(ACCORDION_ITEMS.map(item => item.id));
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <PreviewRiskOutputModal isOpen={isPreviewModalOpen} onClose={() => setIsPreviewModalOpen(false)} />
      <AddAttachmentModal isOpen={isAddAttachmentModalOpen} onClose={() => setIsAddAttachmentModalOpen(false)} />
      
      {/* Main 2-Column Grid */}
      <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 flex-1 w-full min-w-0">
          
          {/* Card 1: RAMS Document Readiness */}
          <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-6 shadow-sm flex flex-col gap-4">
            <h3 className="text-[16px] font-bold text-brand-primary flex items-center gap-2">
              <Check className="size-5" />
              RAMS Document Readiness
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {SECTION_STATUSES.map(status => (
                <div key={status.id} className="bg-[#f8f9fc] rounded-[8px] p-3 flex items-center justify-between border border-transparent hover:border-[#e3e6ec] transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#dcfce7] flex items-center justify-center shrink-0">
                      <Check className="size-3 text-[#166534]" />
                    </div>
                    <span className="text-[14px] font-bold text-brand-primary">{status.name}</span>
                    <span className="text-[12px] text-[#16a34a] font-bold ml-1">Complete</span>
                  </div>
                  <button className="text-[#95a0b6] hover:text-brand-primary transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Review RAMS Content */}
          <div className="bg-[#f8f9fc] rounded-[12px] border border-[#e3e6ec] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-[#e3e6ec] bg-white">
              <h3 className="text-[16px] font-bold text-brand-primary">
                Review RAMS Content
              </h3>
              <button 
                onClick={expandAll}
                className="text-[14px] font-bold text-brand-primary hover:underline"
              >
                Expand All
              </button>
            </div>
            
            <div className="flex flex-col">
              {ACCORDION_ITEMS.map((item, index) => {
                const isExpanded = expandedSections.includes(item.id);
                return (
                  <div key={item.id} className={cn(
                    "flex flex-col bg-white border-b border-[#e3e6ec]",
                    index === ACCORDION_ITEMS.length - 1 && "border-b-0"
                  )}>
                    <div 
                      className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition-colors group"
                      onClick={() => toggleSection(item.id)}
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className="bg-[#f0f2f5] p-2 rounded-[8px] shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex flex-col gap-1 pr-4">
                          <span className="text-[14px] font-bold text-brand-primary">{item.title}</span>
                          <span className="text-[12px] text-brand-secondary leading-[1.4] line-clamp-2">{item.description}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="text-[12px] font-bold text-[#16a34a]">Complete</span>
                        <button className="text-[#95a0b6] hover:text-brand-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                        </button>
                        {isExpanded ? (
                          <ChevronUp className="size-5 text-brand-secondary" />
                        ) : (
                          <ChevronDown className="size-5 text-brand-secondary" />
                        )}
                      </div>
                    </div>
                    
                    {isExpanded && (
                      <div className="p-4 pl-14 pr-8 bg-[#fafafc] border-t border-[#f0f2f5] text-[12px] text-brand-secondary">
                        <div className="w-full h-16 border-2 border-dashed border-brand-light-grey rounded-[8px] flex items-center justify-center">
                          <span className="text-[#95a0b6] font-medium">Detailed content preview placeholder</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 3: Risk Assessment Summary */}
          <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-6 flex flex-col gap-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <h3 className="text-[16px] font-bold text-brand-primary">Risk Assessment Summary</h3>
                <p className="text-[12px] text-brand-secondary">Distribution of identified site hazards and mitigation levels.</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[24px] font-bold text-brand-primary leading-none">12</span>
                <span className="text-[11px] text-brand-secondary font-medium">Total Hazards</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              <div className="flex flex-col items-center justify-center p-3 rounded-[8px] bg-[#f0fdf4] border border-[#bbf7d0]">
                <span className="text-[20px] font-bold text-[#166534]">4</span>
                <span className="text-[12px] font-bold text-[#166534]">Low Risk</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-[8px] bg-[#fefce8] border border-[#fef08a]">
                <span className="text-[20px] font-bold text-[#a16207]">6</span>
                <span className="text-[12px] font-bold text-[#a16207]">Medium Risk</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-[8px] bg-[#fff7ed] border border-[#fed7aa]">
                <span className="text-[20px] font-bold text-[#c2410c]">2</span>
                <span className="text-[12px] font-bold text-[#c2410c]">High Risk</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-[8px] bg-[#fef2f2] border border-[#fecaca]">
                <span className="text-[20px] font-bold text-[#b91c1c]">0</span>
                <span className="text-[12px] font-bold text-[#b91c1c]">Critical</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex w-full h-3 rounded-full overflow-hidden">
                <div className="h-full bg-[#22c55e]" style={{ width: '33%' }} />
                <div className="h-full bg-[#eab308]" style={{ width: '50%' }} />
                <div className="h-full bg-[#f97316]" style={{ width: '17%' }} />
              </div>
              <div className="flex justify-between text-[11px] font-bold text-brand-secondary mt-1">
                <span>33% Low</span>
                <span>50% Medium</span>
                <span>17% High</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[12px]">
              <span className="text-brand-secondary">Initial Risk vs Residual Risk</span>
              <span className="text-[#16a34a] font-bold">0 Critical Risks Remaining</span>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <button 
                onClick={() => setIsPreviewModalOpen(true)}
                className="flex items-center gap-1.5 text-[12px] font-bold text-brand-primary hover:underline"
              >
                <Eye className="size-4" />
                Preview Risk Assessment Table
              </button>
              <button 
                className="flex items-center gap-1.5 text-[12px] text-brand-secondary hover:text-brand-primary hover:underline transition-colors"
                onClick={onPrevious}
              >
                &larr; Return to Risk Assessment
              </button>
            </div>
          </div>

          {/* Card 4: Attachments & Supporting Documents */}
          <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-bold text-brand-primary">Attachments & Supporting Documents</h3>
              <Button 
                className="h-[34px] px-4 text-[12px] font-bold bg-brand-primary text-white hover:bg-black rounded-[6px]"
                onClick={() => setIsAddAttachmentModalOpen(true)}
              >
                Add Attachment
              </Button>
            </div>

            <div className="w-full overflow-x-auto border border-[#e3e6ec] rounded-[8px]">
              <table className="w-full text-left text-[12px] border-collapse">
                <thead>
                  <tr className="bg-[#e2e8f0] text-brand-primary font-bold">
                    <th className="p-3 w-10 text-center border-b border-[#e3e6ec]">
                      <input type="checkbox" className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary" />
                    </th>
                    <th className="p-3 border-b border-[#e3e6ec]">File Name</th>
                    <th className="p-3 border-b border-[#e3e6ec]">Type</th>
                    <th className="p-3 border-b border-[#e3e6ec]">Related Section</th>
                    <th className="p-3 border-b border-[#e3e6ec]">Date</th>
                    <th className="p-3 border-b border-[#e3e6ec] text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-[#e3e6ec] hover:bg-slate-50">
                    <td className="p-3 text-center">
                      <input type="checkbox" className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary" />
                    </td>
                    <td className="p-3 text-brand-primary">Site Layout Plan.pdf</td>
                    <td className="p-3 text-brand-secondary">PDF<br/>Document</td>
                    <td className="p-3 text-brand-secondary">Method<br/>Statement</td>
                    <td className="p-3 text-brand-secondary">Oct 24, 2023</td>
                    <td className="p-3">
                      <div className="flex items-center justify-center gap-3 text-brand-primary">
                        <button 
                          className="hover:text-[#2563eb]"
                          onClick={() => setIsViewAttachmentModalOpen(true)}
                        >
                          <Eye className="size-4" />
                        </button>
                        <button className="hover:text-[#16a34a]"><Download className="size-4" /></button>
                        <button className="hover:text-[#dc2626] text-[#ef4444]"><Trash2 className="size-4" /></button>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-[#f8f9fc] hover:bg-slate-50">
                    <td className="p-3 text-center">
                      <input type="checkbox" className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary" />
                    </td>
                    <td className="p-3 text-brand-primary">Scaffold Inspection<br/>Record.pdf</td>
                    <td className="p-3 text-brand-secondary">PDF<br/>Document</td>
                    <td className="p-3 text-brand-secondary">Certifications</td>
                    <td className="p-3 text-brand-secondary">Oct 24, 2023</td>
                    <td className="p-3">
                      <div className="flex items-center justify-center gap-3 text-brand-primary">
                        <button 
                          className="hover:text-[#2563eb]"
                          onClick={() => setIsViewAttachmentModalOpen(true)}
                        >
                          <Eye className="size-4" />
                        </button>
                        <button className="hover:text-[#16a34a]"><Download className="size-4" /></button>
                        <button className="hover:text-[#dc2626] text-[#ef4444]"><Trash2 className="size-4" /></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Card 5: Final Declaration */}
          <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-6 shadow-sm flex flex-col gap-6">
            <h3 className="text-[16px] font-bold text-brand-primary">Final Declaration</h3>
            
            <div className="flex flex-col gap-3">
              <label className="flex items-start gap-3 p-4 rounded-[8px] bg-[#f8f9fc] border border-[#e3e6ec] cursor-pointer">
                <input type="checkbox" className="mt-0.5 rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary w-4 h-4 shrink-0" />
                <span className="text-[13px] text-brand-secondary leading-normal">
                  I confirm that I have reviewed all sections of this RAMS and that the control measures specified are appropriate for the site conditions.
                </span>
              </label>
              <label className="flex items-start gap-3 p-4 rounded-[8px] bg-[#f8f9fc] border border-[#e3e6ec] cursor-pointer">
                <input type="checkbox" className="mt-0.5 rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary w-4 h-4 shrink-0" />
                <span className="text-[13px] text-brand-secondary leading-normal">
                  I confirm that the information contained within this RAMS is accurate, based on a specific site assessment, and reflects the safe system of work to be implemented on-site.
                </span>
              </label>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-brand-primary">Final Notes for Reviewer (Optional)</label>
              <textarea 
                placeholder="Add any additional context for the approving authority..."
                className="w-full rounded-[8px] border border-[#c5c6d0] p-4 text-[13px] min-h-[100px] resize-none focus:outline-none focus:border-brand-primary placeholder:text-[#95a0b6]"
              />
            </div>

            <div className="flex items-start gap-3 p-4 rounded-[8px] bg-[#f0f2f5] border border-[#e3e6ec]">
              <Info className="size-5 text-brand-secondary shrink-0 mt-0.5" />
              <p className="text-[12px] text-brand-secondary leading-normal">
                <span className="font-bold text-brand-primary">Compliance Notice:</span> Digital generation of this document logs the user identity, timestamp, and IP address for audit trail purposes in accordance with ISO 45001 standards.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 w-full lg:w-[320px] shrink-0">
          
          {/* Project Summary Card */}
          <div className="bg-brand-primary rounded-[12px] p-6 text-white flex flex-col gap-6 relative overflow-hidden shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-medium opacity-80">Project Summary</span>
              <Info className="size-4 opacity-60" />
            </div>
            
            <h3 className="text-[18px] font-bold leading-tight">Steel Frame Refurbishment</h3>
            
            <div className="flex flex-col gap-3 text-[12px]">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="opacity-70">Client:</span>
                <span className="font-bold">Horizon Developers</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="opacity-70">Current Version:</span>
                <span className="font-bold">V 1.0</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="opacity-70">Prepared By:</span>
                <span className="font-bold">Alan Ludewig</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="opacity-70">Last Updated:</span>
                <span className="font-bold">Just now</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-70">Status:</span>
                <span className="bg-[#16a34a] text-white font-bold px-2 py-0.5 rounded-[4px] text-[10px]">Ready to Generate</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <div className="flex justify-between text-[12px] font-bold">
                <span>Progress</span>
                <span>100%</span>
              </div>
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-full rounded-full" />
              </div>
            </div>
          </div>

          {/* Output Configuration Card */}
          <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-6 shadow-sm flex flex-col gap-5">
            <h3 className="text-[13px] font-bold text-brand-primary">Output Configuration</h3>
            
            <div className="flex flex-col gap-3">
              <label className="flex items-center justify-between p-3 rounded-[8px] bg-[#f8f9fc] border border-[#e3e6ec] cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="size-4 text-brand-secondary" />
                  <span className="text-[13px] font-bold text-brand-primary">Main RAMS PDF</span>
                </div>
                <input type="checkbox" defaultChecked className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary w-4 h-4" />
              </label>
              
              <label className="flex items-center justify-between p-3 rounded-[8px] bg-[#f8f9fc] border border-[#e3e6ec] cursor-pointer">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="size-4 text-brand-secondary" />
                  <span className="text-[13px] font-bold text-brand-primary">Risk Appendix</span>
                </div>
                <input type="checkbox" defaultChecked className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary w-4 h-4" />
              </label>

              <label className="flex items-center justify-between p-3 rounded-[8px] bg-white border border-[#e3e6ec] cursor-pointer opacity-70">
                <div className="flex items-center gap-3">
                  <FileText className="size-4 text-brand-secondary" />
                  <span className="text-[13px] font-bold text-brand-primary">Attachment Pack</span>
                </div>
                <input type="checkbox" className="rounded-[4px] border-[#c5c6d0] text-brand-primary focus:ring-brand-primary w-4 h-4" />
              </label>
            </div>

            <p className="text-[10px] text-brand-secondary leading-normal">
              * Risk Assessment register will be added at the back of the generated RAMS PDF.
            </p>
          </div>

          {/* Review Status Card */}
          <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-6 shadow-sm flex flex-col gap-4">
            <h3 className="text-[13px] font-bold text-brand-primary uppercase tracking-wider">REVIEW STATUS</h3>
            
            <div className="flex items-start gap-3 bg-[#f8f9fc] p-4 rounded-[8px]">
              <div className="bg-white border border-[#e3e6ec] p-1.5 rounded-[4px]">
                <Clock className="size-4 text-brand-secondary" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-bold text-brand-primary">Not submitted for review</span>
                <span className="text-[11px] text-brand-secondary">Reviewer: Not assigned</span>
              </div>
            </div>

            <Button variant="outline" className="w-full gap-2 text-[13px] font-bold text-brand-primary border-[#c5c6d0] h-[38px]">
              <UserPlus className="size-4" />
              Assign Reviewer
            </Button>
          </div>

        </div>

      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#e3e6ec]">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
            onClick={onPrevious}
          >
            Save Draft
          </Button>
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-[#0d1b2a] text-white font-bold text-[14px] hover:bg-black"
            onClick={() => setIsSubmitModalOpen(true)}
          >
            Submit for Review
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
            onClick={() => setIsPreviewRamsModalOpen(true)}
          >
            Preview RAMS
          </Button>
          <Button 
            variant="outline"  
            className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
          >
            Generate RAMS PDF
          </Button>
        </div>
      </div>

      <PreviewRiskOutputModal 
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
      />

      <AddAttachmentModal
        isOpen={isAddAttachmentModalOpen}
        onClose={() => setIsAddAttachmentModalOpen(false)}
      />

      <ViewAttachmentModal
        isOpen={isViewAttachmentModalOpen}
        onClose={() => setIsViewAttachmentModalOpen(false)}
      />

      <SubmitReviewModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />

      <PreviewRamsModal
        isOpen={isPreviewRamsModalOpen}
        onClose={() => setIsPreviewRamsModalOpen(false)}
        onSubmit={() => {
          setIsPreviewRamsModalOpen(false);
          setIsReviewCommentsModalOpen(true);
        }}
      />

      <RamsReviewCommentsModal
        isOpen={isReviewCommentsModalOpen}
        onClose={() => setIsReviewCommentsModalOpen(false)}
      />

    </div>
  );
}
