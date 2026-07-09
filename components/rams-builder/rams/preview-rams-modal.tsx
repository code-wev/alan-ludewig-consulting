import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  X, 
  ZoomOut, 
  ZoomIn, 
  Printer, 
  Maximize,
  FileText,
  Target,
  ClipboardList,
  HardHat,
  ListOrdered,
  Leaf,
  AlertTriangle,
  Paperclip
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PreviewRamsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SIDEBAR_NAV = [
  { id: "cover", label: "Cover Page", icon: FileText },
  { id: "scope", label: "Scope of Work", icon: Target },
  { id: "arrangements", label: "Arrangements", icon: ClipboardList },
  { id: "ppe", label: "PPE Requirements", icon: HardHat },
  { id: "methodology", label: "Methodology", icon: ListOrdered },
  { id: "env", label: "Env / Emergency", icon: Leaf },
  { id: "risk", label: "Risk Assessment", icon: AlertTriangle },
  { id: "attachments", label: "Attachments", icon: Paperclip },
];

export function PreviewRamsModal({ isOpen, onClose }: PreviewRamsModalProps) {
  const [activeTab, setActiveTab] = useState("cover");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 backdrop-blur-sm p-4 md:p-8 overflow-y-auto">
      {/* Modal Container */}
      <div className="bg-white rounded-[12px] w-full max-w-[1200px] h-[85vh] flex flex-col relative shadow-2xl my-auto overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e3e6ec] bg-white shrink-0">
          <div className="flex items-center gap-4 pl-2">
            <h2 className="text-[20px] font-bold text-brand-primary">RAMS Document Preview</h2>
            <div className="bg-[#dbeafe] text-[#1e40af] font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">
              Draft V2.4
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Zoom Controls */}
            <div className="flex items-center bg-[#f0f2f5] rounded-[6px] p-1 text-brand-primary">
              <button className="p-1 hover:bg-white rounded-[4px] transition-colors"><ZoomOut className="size-4" /></button>
              <span className="text-[13px] font-bold w-12 text-center">100%</span>
              <button className="p-1 hover:bg-white rounded-[4px] transition-colors"><ZoomIn className="size-4" /></button>
            </div>

            <div className="flex items-center gap-4 text-brand-primary">
              <button className="flex items-center gap-1.5 hover:bg-slate-100 px-2 py-1 rounded-[4px] transition-colors text-[13px] font-bold">
                <Printer className="size-4" /> Print
              </button>
              <button className="p-1 hover:bg-slate-100 rounded-[4px] transition-colors">
                <Maximize className="size-4" />
              </button>
              <div className="w-px h-6 bg-[#e3e6ec] mx-2" />
              <button 
                onClick={onClose}
                className="p-1 rounded-full hover:bg-slate-100 transition-colors text-brand-secondary hover:text-brand-primary"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Left Sidebar */}
          <div className="w-[260px] bg-white border-r border-[#e3e6ec] flex flex-col shrink-0">
            <div className="p-6 pb-2">
              <span className="text-[11px] font-bold text-[#95a0b6] uppercase tracking-wider">Document Sections</span>
            </div>
            
            <div className="flex flex-col px-4 gap-1 overflow-y-auto flex-1">
              {SIDEBAR_NAV.map(nav => {
                const isActive = activeTab === nav.id;
                const Icon = nav.icon;
                return (
                  <button
                    key={nav.id}
                    onClick={() => setActiveTab(nav.id)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-[6px] transition-colors text-[14px] font-bold text-left",
                      isActive 
                        ? "bg-brand-primary text-white" 
                        : "text-brand-secondary hover:bg-slate-50 hover:text-brand-primary"
                    )}
                  >
                    <Icon className="size-5" />
                    {nav.label}
                  </button>
                );
              })}
            </div>

            <div className="p-6 border-t border-[#e3e6ec] flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#16a34a]" />
                <span className="text-[12px] font-bold text-[#64748b]">All fields validated</span>
              </div>
              <span className="text-[11px] text-[#95a0b6]">Last edited by Alan L. at 14:32 Today</span>
            </div>
          </div>

          {/* Right: PDF Viewer Canvas */}
          <div className="flex-1 bg-[#f8f9fc] overflow-auto flex justify-center p-8 lg:p-12">
            
            {/* A4 Paper Mockup */}
            <div className="w-full max-w-[800px] min-h-[1100px] bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.06)] border border-[#e3e6ec] flex flex-col p-16 relative">
              
              <div className="flex justify-between items-start pt-8">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[28px] font-bold text-brand-primary tracking-tight">ALAN LUDEWIG</h1>
                  <span className="text-[14px] font-bold text-brand-primary">Consulting Ltd</span>
                </div>
                <div className="flex flex-col items-end gap-1 text-[#95a0b6]">
                  <span className="text-[11px] font-bold uppercase tracking-wider">REF: RAMS-2024-0892</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider">DATE: 24 OCT 2023</span>
                </div>
              </div>

              <div className="w-full h-1 bg-brand-primary mt-16 mb-12" />

              <div className="flex flex-col gap-4">
                <h2 className="text-[32px] font-bold text-brand-primary leading-tight tracking-tight uppercase">
                  RISK ASSESSMENT & METHOD STATEMENT
                </h2>
                <h3 className="text-[18px] font-medium text-brand-secondary">
                  Structural Maintenance - Terminal 4 Expansion
                </h3>
              </div>

              <div className="w-full h-1 bg-brand-primary mt-12 mb-16" />

              <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#95a0b6]">Project Location</span>
                  <div className="flex flex-col">
                    <span className="text-[16px] font-bold text-brand-primary">Heathrow Airport, Longford TW6 3XA</span>
                    <span className="text-[14px] text-brand-secondary">Site Zone: Alpha-7 Restricted</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#95a0b6]">Client</span>
                  <span className="text-[16px] font-bold text-brand-primary">HAL Infrastructure Dept.</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#95a0b6]">Contractor</span>
                  <span className="text-[16px] font-bold text-brand-primary">Alan Ludewig Consulting Ltd</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#95a0b6]">Supervisor</span>
                  <span className="text-[16px] font-bold text-brand-primary">Mark Richardson (SMSTS)</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-[#e3e6ec] bg-white shrink-0">
          <Button 
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-brand-primary text-brand-primary font-bold text-[14px] hover:bg-slate-50"
            onClick={onClose}
          >
            Generate RAMS PDF
          </Button>
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-white font-bold text-[14px] hover:bg-[#0a1530]"
            onClick={onClose}
          >
            Submit for Review
          </Button>
        </div>

      </div>
    </div>
  );
}
