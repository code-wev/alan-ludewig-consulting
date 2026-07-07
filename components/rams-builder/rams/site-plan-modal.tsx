import React from "react";
import { 
  X, MousePointer2, Hand, Route, ArrowUpRight, 
  Users, BriefcaseMedical, FireExtinguisher, TriangleAlert, 
  Plus, Minus, Maximize, Upload, Info, Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SitePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SitePlanModal({ isOpen, onClose }: SitePlanModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[1400px] max-w-[95vw] h-[90vh] bg-white rounded-[12px] shadow-lg border border-[#e3e6ec] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-6 pb-4 border-b border-[#e3e6ec]">
          <div className="flex flex-col gap-1">
            <h2 className="text-[24px] font-bold text-brand-primary">Site Plan & Emergency Route</h2>
            <p className="text-[14px] text-brand-secondary mt-1">
              Upload, annotate and attach site plans showing emergency routes, assembly points and key safety locations.
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
        <div className="flex flex-1 overflow-hidden">
          
          {/* Left Column (Map Area) */}
          <div className="flex-1 flex flex-col p-6 overflow-hidden">
            
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 bg-white border border-[#e3e6ec] rounded-[6px] p-1">
                <button className="p-2 rounded-[4px] bg-[#f1f5f9] text-brand-primary hover:bg-[#e2e8f0] transition-colors">
                  <MousePointer2 className="size-4" />
                </button>
                <button className="p-2 rounded-[4px] text-brand-secondary hover:bg-[#f1f5f9] hover:text-brand-primary transition-colors">
                  <Hand className="size-4" />
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 h-9 px-3 bg-white border border-[#e3e6ec] rounded-[6px] text-[13px] font-bold text-brand-primary hover:bg-slate-50 transition-colors">
                  <Route className="size-4" /> Add Emergency Route
                </button>
                <button className="flex items-center gap-2 h-9 px-3 bg-white border border-[#e3e6ec] rounded-[6px] text-[13px] font-bold text-brand-primary hover:bg-slate-50 transition-colors">
                  <ArrowUpRight className="size-4" /> Add Arrow
                </button>
                <button className="flex items-center gap-2 h-9 px-3 bg-white border border-[#e3e6ec] rounded-[6px] text-[13px] font-bold text-brand-primary hover:bg-slate-50 transition-colors">
                  <Users className="size-4" /> Add Assembly Point
                </button>
                <button className="flex items-center gap-2 h-9 px-3 bg-white border border-[#e3e6ec] rounded-[6px] text-[13px] font-bold text-brand-primary hover:bg-slate-50 transition-colors">
                  <BriefcaseMedical className="size-4" /> Add First Aid
                </button>
                <button className="flex items-center gap-2 h-9 px-3 bg-white border border-[#e3e6ec] rounded-[6px] text-[13px] font-bold text-brand-primary hover:bg-slate-50 transition-colors">
                  <FireExtinguisher className="size-4" /> Add Fire Point
                </button>
                <button className="flex items-center gap-2 h-9 px-3 bg-white border border-[#e3e6ec] rounded-[6px] text-[13px] font-bold text-[#ef4444] hover:bg-red-50 transition-colors">
                  <TriangleAlert className="size-4" /> Add Hazard Marker
                </button>
              </div>
            </div>

            {/* Map Canvas */}
            <div className="flex-1 bg-[#f8fafc] rounded-[12px] border border-[#e3e6ec] relative overflow-hidden flex items-center justify-center">
              
              {/* Fake Map Image */}
              <div className="absolute inset-8 opacity-40 mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
              
              {/* Fake Annotation */}
              <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="bg-[#1e293b] text-white text-[12px] font-bold px-4 py-2 rounded-[6px] shadow-lg mb-2 relative">
                  Assembly Point A
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1e293b]"></div>
                </div>
                <div className="w-[2px] h-[150px] border-l-2 border-dashed border-[#1e293b]"></div>
                <div className="w-[12px] h-[12px] rounded-full bg-[#1e293b]"></div>
              </div>

              {/* Upload Box overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 text-center">
                <div className="w-[80px] h-[80px] bg-[#e0e7ff] rounded-[16px] flex items-center justify-center shadow-lg mb-4 cursor-pointer hover:scale-105 transition-transform">
                  <Upload className="size-8 text-[#3730a3]" />
                </div>
                <h3 className="text-[18px] font-bold text-[#1e293b]">Drop New Site Plan Here</h3>
                <p className="text-[14px] text-brand-secondary mt-1">Support formats: PDF, DWG, PNG, JPG (Max 50MB).</p>
                <p className="text-[13px] text-[#64748b] mt-1 italic">Current plan: Project_Alpha_Site_V2.pdf</p>
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                <div className="flex flex-col bg-white border border-[#e3e6ec] rounded-[8px] shadow-sm overflow-hidden">
                  <button className="p-3 text-brand-primary hover:bg-[#f1f5f9] transition-colors border-b border-[#e3e6ec]">
                    <Plus className="size-4" />
                  </button>
                  <div className="py-2 px-3 text-[12px] font-bold text-brand-secondary text-center">100%</div>
                  <button className="p-3 text-brand-primary hover:bg-[#f1f5f9] transition-colors border-t border-[#e3e6ec]">
                    <Minus className="size-4" />
                  </button>
                </div>
                <button className="p-3 bg-white border border-[#e3e6ec] rounded-[8px] text-brand-primary shadow-sm hover:bg-[#f1f5f9] transition-colors">
                  <Maximize className="size-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="w-[360px] flex flex-col p-6 bg-[#f8fafc] border-l border-[#e3e6ec] overflow-y-auto">
            
            {/* Plan Information */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-2 text-brand-primary">
                <Info className="size-5" />
                <h3 className="text-[15px] font-bold">Plan Information</h3>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Plan Title</label>
                <input 
                  type="text" 
                  defaultValue="Alpha Phase Construction Plan"
                  className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Reference</label>
                  <input 
                    type="text" 
                    defaultValue="REF-2024-001"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-brand-secondary">Revision</label>
                  <input 
                    type="text" 
                    defaultValue="v1.2"
                    className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Site Area</label>
                <input 
                  type="text" 
                  defaultValue="North Wing Construction"
                  className="w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] text-brand-secondary">Internal Notes</label>
                <textarea 
                  defaultValue="Emergency exit through Zone B must remain clear of scaffolding materials at all times during Revision 1 phase."
                  className="w-full h-[100px] p-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary resize-none"
                ></textarea>
              </div>
            </div>

            {/* Annotation Legend */}
            <div className="flex flex-col gap-4 pt-6 border-t border-[#e2e8f0]">
              <div className="flex items-center gap-2 text-brand-primary mb-2">
                <Layers className="size-5" />
                <h3 className="text-[15px] font-bold">Annotation Legend</h3>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-[28px] h-[4px] bg-[#1e293b] rounded-full"></div>
                  <span className="text-[13px] text-[#1e293b] font-medium">Emergency Route</span>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="size-5 text-[#1e293b] ml-1" />
                  <span className="text-[13px] text-[#1e293b] font-medium ml-1">Assembly Point (2)</span>
                </div>
                <div className="flex items-center gap-4">
                  <TriangleAlert className="size-5 text-[#ef4444] ml-1" />
                  <span className="text-[13px] text-[#1e293b] font-medium ml-1">Live Hazard (1)</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-slate-100 rounded-[8px] text-[11px] text-[#64748b] leading-relaxed text-center">
                Annotations added here will be automatically included in the printable PDF export for site distribution.
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-8 py-5 border-t border-[#e3e6ec] bg-white rounded-b-[12px]">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
            >
              Save Annotated Draft
            </Button>
            <Button 
              className="h-[42px] px-6 rounded-[6px] bg-[#0d1b2a] text-white font-bold text-[14px] hover:bg-black"
            >
              Save & Close Plan
            </Button>
          </div>
          
          <Button 
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
          >
            Upload New Version
          </Button>
        </div>
      </div>
    </div>
  );
}
