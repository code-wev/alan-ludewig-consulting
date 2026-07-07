import React from "react";
import { 
  X, MousePointer2, Hand, Route, ArrowUpRight, 
  Users, BriefcaseMedical, FireExtinguisher, TriangleAlert, 
  Plus, Minus, Maximize, Upload, Info, Layers
} from "lucide-react";
import Image from "next/image";

interface SitePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SitePlanModal({ isOpen, onClose }: SitePlanModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[95vw] max-w-[1464px] h-[95vh] max-h-[972px] bg-white rounded-[12px] border-[1.5px] border-[#e3e6ec] flex flex-col p-[24px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Absolute Top Right */}
        <div className="absolute top-[18px] right-[18px] w-[30px] h-[30px] flex items-center justify-center cursor-pointer text-brand-secondary hover:text-brand-primary transition-colors rounded-full z-10" onClick={onClose}>
          <X className="size-[14px]" />
        </div>

        {/* Modal Inner Container */}
        <div className="flex flex-col w-full h-full gap-[24px] overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center w-full h-[55px] shrink-0">
            <div className="flex flex-col gap-[4px] w-full pr-[40px]">
              <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Site Plan & Emergency Route</h2>
              <p className="text-[14px] text-brand-secondary leading-[1.6] truncate">
                Upload, annotate and attach site plans showing emergency routes, assembly points and key safety locations.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-1 items-start justify-between w-full min-h-0 overflow-hidden gap-[16px] lg:gap-0">
            
            {/* Left Workspace (Map Area) */}
            <div className="flex flex-col flex-1 h-full bg-[#f3f5f8] lg:rounded-l-[12px] lg:border-r border-[#e3e6ec] overflow-hidden">
              
              {/* Toolbar */}
              <div className="h-[70px] border-b border-[#e3e6ec] relative w-full flex items-center px-[8px] overflow-x-auto no-scrollbar shrink-0">
                
                {/* Pointer / Hand toggles */}
                <div className="flex items-center h-[41px] bg-white border border-[#e3e6ec] rounded-[6px] p-[3px] shadow-sm ml-[8px] shrink-0">
                  <button className="flex items-center justify-center w-[34px] h-full bg-white hover:bg-[#f1f5f9] transition-colors rounded-[2px]">
                    <MousePointer2 className="size-[18px] text-brand-primary" />
                  </button>
                  <button className="flex items-center justify-center w-[36px] h-full text-brand-secondary hover:text-brand-primary hover:bg-[#f1f5f9] transition-colors rounded-[2px]">
                    <Hand className="size-[20px]" />
                  </button>
                </div>
                
                {/* Tools */}
                <div className="flex items-center gap-[8px] ml-[32px] shrink-0">
                  <button className="flex items-center gap-[8px] px-[13px] py-[9px] bg-white border border-[#e3e6ec] rounded-[6px] shadow-sm hover:bg-slate-50 transition-colors whitespace-nowrap">
                    <Route className="size-[18px] text-brand-primary" />
                    <span className="text-[12px] text-brand-primary">Add Emergency Route</span>
                  </button>
                  <button className="flex items-center gap-[8px] px-[13px] py-[9px] bg-white border border-[#e3e6ec] rounded-[6px] shadow-sm hover:bg-slate-50 transition-colors whitespace-nowrap">
                    <ArrowUpRight className="size-[15px] text-brand-primary" />
                    <span className="text-[12px] text-brand-primary">Add Arrow</span>
                  </button>
                  <button className="flex items-center gap-[8px] px-[13px] py-[9px] bg-white border border-[#e3e6ec] rounded-[6px] shadow-sm hover:bg-slate-50 transition-colors whitespace-nowrap">
                    <Users className="size-[18px] text-brand-primary" />
                    <span className="text-[12px] text-brand-primary">Add Assembly Point</span>
                  </button>
                  <button className="flex items-center gap-[8px] px-[13px] py-[9px] bg-white border border-[#e3e6ec] rounded-[6px] shadow-sm hover:bg-slate-50 transition-colors whitespace-nowrap">
                    <BriefcaseMedical className="size-[20px] text-brand-primary" />
                    <span className="text-[12px] text-brand-primary">Add First Aid</span>
                  </button>
                  <button className="flex items-center gap-[8px] px-[13px] py-[9px] bg-white border border-[#e3e6ec] rounded-[6px] shadow-sm hover:bg-slate-50 transition-colors whitespace-nowrap">
                    <FireExtinguisher className="size-[20px] text-brand-primary" />
                    <span className="text-[12px] text-brand-primary">Add Fire Point</span>
                  </button>
                  <button className="flex items-center gap-[8px] px-[13px] py-[9px] bg-white border border-[#e3e6ec] rounded-[6px] shadow-sm hover:bg-slate-50 transition-colors whitespace-nowrap">
                    <TriangleAlert className="size-[19px] text-brand-primary" />
                    <span className="text-[12px] text-brand-primary">Add Hazard Marker</span>
                  </button>
                </div>
              </div>

              {/* Canvas Area */}
              <div className="flex-1 w-full relative p-[24px] bg-[repeating-linear-gradient(90deg,rgba(208,212,220,0.2)_0px,rgba(208,212,220,0)_2px,transparent_20px),repeating-linear-gradient(rgba(208,212,220,0.2)_0px,rgba(208,212,220,0)_2px,transparent_20px)] overflow-hidden">
                <div className="w-full h-full relative border-2 border-dashed border-[#e3e6ec] rounded-[2px] overflow-hidden bg-white flex items-center justify-center">
                  
                  {/* Faded Background Image */}
                  <Image 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000"
                    alt="Plan"
                    fill
                    sizes=""
                    className="object-cover opacity-40 mix-blend-multiply pointer-events-none"
                  />
                  {/* Fake Annotations (Assembly Point A) */}
                  <div className="absolute top-1/2 left-1/4 -translate-y-1/2 flex flex-col items-center">
                    <div className="bg-brand-primary px-[16px] py-[8px] rounded-[6px] text-white text-[12px] font-bold z-10 whitespace-nowrap">
                      Assembly Point A
                    </div>
                    <div className="w-[2px] h-[150px] border-l-2 border-dashed border-brand-primary"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-brand-primary"></div>
                  </div>

                  {/* Drop Center Box */}
                  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-[24px]">
                    <div className="w-[80px] h-[80px] bg-[#dae2ff] rounded-[12px] flex items-center justify-center mb-[16px] shrink-0">
                      <Upload className="size-[30px] text-[#3730a3]" />
                    </div>
                    <h3 className="text-[16px] font-bold text-brand-primary mb-[8px] text-center">Drop New Site Plan Here</h3>
                    <p className="text-[14px] text-brand-secondary text-center max-w-[384px] leading-[1.6]">
                      Support formats: PDF, DWG, PNG, JPG (Max 50MB).<br />
                      Current plan: Project_Alpha_Site_V2.pdf
                    </p>
                  </div>

                  {/* Zoom Controls (Bottom Left) */}
                  <div className="absolute left-[24px] bottom-[24px] flex flex-col gap-[8px]">
                    <div className="flex flex-col bg-white border border-[#c5c6d0] rounded-[2px] shadow-sm w-[44px]">
                      <button className="h-[46px] flex items-center justify-center border-b border-[#c5c6d0] text-brand-primary hover:bg-[#f1f5f9]">
                        <Plus className="size-[14px]" />
                      </button>
                      <div className="h-[35px] flex items-center justify-center text-[12px] font-bold text-brand-secondary">
                        100%
                      </div>
                      <button className="h-[34px] flex items-center justify-center border-t border-[#c5c6d0] text-brand-primary hover:bg-[#f1f5f9]">
                        <Minus className="size-[14px]" />
                      </button>
                    </div>
                    <button className="w-[44px] h-[44px] flex items-center justify-center bg-white border border-[#c5c6d0] rounded-[2px] shadow-sm text-brand-primary hover:bg-[#f1f5f9]">
                      <Maximize className="size-[18px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Configuration Panel */}
            <div className="w-[324px] shrink-0 h-full bg-[#f3f5f8] lg:rounded-r-[12px] overflow-y-auto overflow-x-hidden no-scrollbar">
              <div className="flex flex-col p-[16px] gap-[32px] w-full min-h-max">
                
                {/* Plan Information */}
                <div className="flex flex-col gap-[16px] w-full">
                  <div className="flex items-center gap-[8px]">
                    <Info className="size-[15px] text-brand-primary shrink-0" />
                    <h3 className="text-[16px] font-bold text-brand-primary">Plan Information</h3>
                  </div>

                  <div className="flex flex-col gap-[16px] w-full">
                    <div className="flex flex-col gap-[8px] w-full">
                      <label className="text-[14px] text-brand-primary">Plan Title</label>
                      <input 
                        type="text" 
                        defaultValue="Alpha Phase Construction Plan"
                        className="w-full h-[51px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                    
                    <div className="flex gap-[12px] w-full">
                      <div className="flex flex-col gap-[8px] flex-1 min-w-0">
                        <label className="text-[14px] text-brand-primary">Reference</label>
                        <input 
                          type="text" 
                          defaultValue="REF-2024-001"
                          className="w-full h-[51px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary min-w-0"
                        />
                      </div>
                      <div className="flex flex-col gap-[8px] flex-1 min-w-0">
                        <label className="text-[14px] text-brand-primary">Revision</label>
                        <input 
                          type="text" 
                          defaultValue="v1.2"
                          className="w-full h-[51px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary min-w-0"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-[8px] w-full">
                      <label className="text-[14px] text-brand-primary">Site Area</label>
                      <input 
                        type="text" 
                        defaultValue="North Wing Construction"
                        className="w-full h-[51px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
                      />
                    </div>

                    <div className="flex flex-col gap-[8px] w-full">
                      <label className="text-[14px] text-brand-primary">Internal Notes</label>
                      <textarea 
                        defaultValue={"Emergency exit through Zone B must remain clear of scaffolding materials at all times during Revision 1 phase."}
                        className="w-full min-h-[103px] py-[12px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary resize-none overflow-hidden"
                      />
                    </div>
                  </div>
                </div>

                {/* Annotation Legend Section */}
                <div className="flex flex-col gap-[16px] w-full pt-[25px] border-t border-[#e3e6ec]">
                  <div className="flex items-center gap-[8px]">
                    <Layers className="size-[15px] text-brand-primary shrink-0" />
                    <h3 className="text-[16px] font-bold text-brand-primary">Annotation Legend</h3>
                  </div>

                  <div className="flex flex-col gap-[12px] w-full mt-[4px]">
                    <div className="flex items-center px-[9px] py-[9px]">
                      <div className="w-[32px] shrink-0 h-[4px] bg-brand-primary rounded-full flex items-center justify-center"></div>
                      <span className="ml-[12px] text-[14px] text-brand-primary">Emergency Route</span>
                    </div>
                    <div className="flex items-center px-[9px] py-[9px]">
                      <Users className="size-[20px] text-brand-primary shrink-0" />
                      <span className="ml-[12px] text-[14px] text-brand-primary">Assembly Point (2)</span>
                    </div>
                    <div className="flex items-center px-[9px] py-[9px]">
                      <TriangleAlert className="size-[20px] text-brand-primary shrink-0" />
                      <span className="ml-[12px] text-[14px] text-brand-primary">Live Hazard (1)</span>
                    </div>
                  </div>

                  <div className="mt-[16px] text-[13px] text-brand-secondary leading-[1.6]">
                    Annotations added here will be automatically included in the printable PDF export for site distribution.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer (outside Body) */}
          <div className="flex items-center justify-between w-full h-[34px] shrink-0 mt-auto">
            <div className="flex items-center gap-[16px] overflow-hidden pr-2">
              <button className="flex shrink-0 items-center justify-center h-[34px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] font-bold text-brand-primary hover:bg-slate-50 transition-colors whitespace-nowrap">
                Save Annotated Draft
              </button>
              <button className="flex shrink-0 items-center justify-center h-[34px] px-[16px] bg-brand-primary rounded-[6px] text-[14px] font-bold text-white hover:bg-[#0a1532] transition-colors whitespace-nowrap">
                Save & Close Plan
              </button>
            </div>
            <button className="flex shrink-0 items-center justify-center h-[34px] px-[16px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] font-bold text-brand-primary hover:bg-slate-50 transition-colors whitespace-nowrap">
              Upload New Version
            </button>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
