import { 
  X, Plus, Minus, Maximize, Users, BriefcaseMedical, FireExtinguisher, Route, TriangleAlert, Info
} from "lucide-react";
import Image from "next/image";

interface EmergencyMapHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmergencyMapHubModal({ isOpen, onClose }: EmergencyMapHubModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[95vw] max-w-[1016px] h-[95vh] max-h-[906px] bg-white rounded-[12px] border-[1.5px] border-[#e3e6ec] flex flex-col p-[24px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Absolute Top Right */}
        <div className="absolute top-[18px] right-[18px] w-[30px] h-[30px] flex items-center justify-center cursor-pointer text-brand-secondary hover:text-brand-primary transition-colors rounded-full z-10" onClick={onClose}>
          <X className="size-[14px]" />
        </div>

        {/* Modal Inner Container */}
        <div className="flex flex-col w-full h-full gap-[32px] overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center w-full h-[55px] shrink-0">
            <div className="flex flex-col gap-[4px] w-full pr-[40px]">
              <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Emergency Map Hub</h2>
              <p className="text-[14px] text-brand-secondary leading-[1.6] truncate">
                Manage emergency locations, routes and mapped safety points for this RAMS project.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-1 items-start justify-between w-full min-h-0 overflow-hidden gap-[20px]">
            
            {/* Left Workspace: Map Area */}
            <div className="flex flex-col flex-1 h-full rounded-[12px] overflow-hidden relative shadow-sm border border-[#e3e6ec]">
              {/* Map Image (Simulated) */}
              <div className="absolute inset-0">
                <Image 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000"
                  alt="Site Map"
                  fill
                  sizes=""
                  className="object-cover opacity-80 mix-blend-multiply"
                />
              </div>

              {/* Fake Map Markers */}
              {/* Fire Point 1 */}
              <div className="absolute top-[30%] left-[60%] flex flex-col items-center">
                <div className="bg-brand-primary p-[8px] rounded-[6px] shadow-md z-10">
                  <FireExtinguisher className="size-[14px] text-white" />
                </div>
              </div>
              {/* Assembly Point */}
              <div className="absolute top-[50%] left-[30%] flex flex-col items-center">
                <div className="bg-[#16a34a] p-[8px] rounded-[6px] shadow-md z-10">
                  <Users className="size-[14px] text-white" />
                </div>
              </div>
              {/* First Aid Point */}
              <div className="absolute top-[70%] left-[80%] flex flex-col items-center">
                <div className="bg-[#d92d20] p-[8px] rounded-[6px] shadow-md z-10">
                  <BriefcaseMedical className="size-[14px] text-white" />
                </div>
              </div>

              {/* Floating Map Controls (Top Left) */}
              <div className="absolute top-[16px] left-[16px] flex gap-[8px]">
                <div className="flex items-center bg-white/80 backdrop-blur-sm border border-[#e3e6ec] rounded-[4px] p-[4px] shadow-sm">
                  <button className="px-[12px] py-[4px] bg-brand-primary rounded-[2px] text-[12px] font-bold text-white whitespace-nowrap">
                    2D View
                  </button>
                  <button className="px-[12px] py-[4px] bg-transparent rounded-[2px] text-[12px] font-bold text-brand-secondary hover:bg-slate-100 transition-colors whitespace-nowrap">
                    3D Orbit
                  </button>
                </div>
                <div className="flex items-center gap-[8px] px-[12px] bg-white/80 backdrop-blur-sm border border-[#e3e6ec] rounded-[4px] shadow-sm">
                  <div className="size-[8px] rounded-full bg-green-500"></div>
                  <span className="text-[12px] text-brand-secondary whitespace-nowrap">Last saved 2m ago</span>
                </div>
              </div>

              {/* Zoom Controls (Bottom Right) */}
              <div className="absolute bottom-[24px] right-[24px] flex flex-col gap-[8px]">
                <div className="flex flex-col bg-white border border-[#c5c6d0] rounded-[4px] shadow-sm w-[40px]">
                  <button className="h-[40px] flex items-center justify-center border-b border-[#c5c6d0] text-brand-primary hover:bg-[#f1f5f9]">
                    <Plus className="size-[14px]" />
                  </button>
                  <button className="h-[40px] flex items-center justify-center border-b border-[#c5c6d0] text-brand-primary hover:bg-[#f1f5f9]">
                    <Minus className="size-[14px]" />
                  </button>
                  <button className="h-[40px] flex items-center justify-center text-brand-primary hover:bg-[#f1f5f9]">
                    <Maximize className="size-[16px]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-[360px] h-full flex flex-col bg-white border border-[#e3e6ec] rounded-[12px] overflow-hidden shrink-0">
              
              {/* Tabs */}
              <div className="flex w-full h-[46px] border-b border-[#e3e6ec] shrink-0">
                <button className="flex-1 flex items-center justify-center h-full border-b-2 border-brand-primary text-[14px] font-bold text-brand-primary transition-colors">
                  Manage
                </button>
                <button className="flex-1 flex items-center justify-center h-full border-b-2 border-transparent text-[14px] font-bold text-brand-secondary hover:bg-slate-50 transition-colors">
                  Settings
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex flex-col w-full min-h-0 overflow-y-auto no-scrollbar p-[16px] gap-[24px]">
                
                {/* Map Layers */}
                <div className="flex flex-col gap-[12px] w-full">
                  <h3 className="text-[12px] font-bold text-brand-primary uppercase tracking-wide">Map Layers</h3>
                  
                  <div className="flex flex-col gap-[12px]">
                    {['Site Boundary', 'Emergency Routes', 'Assembly Points'].map((layer, i) => (
                      <label key={i} className="flex items-center gap-[12px] cursor-pointer">
                        <div className="size-[16px] rounded-[2px] bg-brand-primary border border-brand-primary flex items-center justify-center">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-[13px] text-brand-secondary">{layer}</span>
                      </label>
                    ))}
                    <label className="flex items-center gap-[12px] cursor-pointer">
                      <div className="size-[16px] rounded-[2px] bg-white border border-[#c5c6d0]"></div>
                      <span className="text-[13px] text-brand-secondary">First Aid</span>
                    </label>
                    <label className="flex items-center gap-[12px] cursor-pointer">
                      <div className="size-[16px] rounded-[2px] bg-brand-primary border border-brand-primary flex items-center justify-center">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[13px] text-brand-secondary">Fire Equipment</span>
                    </label>
                  </div>
                </div>

                {/* Emergency Locations List */}
                <div className="flex flex-col gap-[12px] w-full pt-[24px] border-t border-[#e3e6ec]">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-[12px] font-bold text-brand-primary uppercase tracking-wide">Emergency Locations</h3>
                    <div className="px-[8px] py-[2px] bg-[#f3f5f8] rounded-[6px] text-[11px] font-bold text-brand-secondary">
                      4 Points
                    </div>
                  </div>

                  <div className="flex flex-col gap-[8px] w-full">
                    {/* Item 1 */}
                    <div className="flex items-center gap-[12px] p-[12px] bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px]">
                      <div className="size-[32px] rounded-[12px] bg-[#dcfce7] flex items-center justify-center shrink-0">
                        <Users className="size-[14px] text-[#16a34a]" />
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-[13px] font-bold text-brand-primary truncate">Assembly Point A</span>
                        <span className="text-[11px] text-brand-secondary truncate">North Perimeter Wall</span>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center gap-[12px] p-[12px] bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px]">
                      <div className="size-[32px] rounded-[12px] bg-[#ffdad6] flex items-center justify-center shrink-0">
                        <BriefcaseMedical className="size-[14px] text-[#d92d20]" />
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-[13px] font-bold text-brand-primary truncate">Medical Cabin 1</span>
                        <span className="text-[11px] text-brand-secondary truncate">Main Entrance Gate 1</span>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center gap-[12px] p-[12px] bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px]">
                      <div className="size-[32px] rounded-[12px] bg-brand-primary flex items-center justify-center shrink-0">
                        <FireExtinguisher className="size-[14px] text-white" />
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-[13px] font-bold text-brand-primary truncate">Fire Station Alpha</span>
                        <span className="text-[11px] text-brand-secondary truncate">Storage Zone B</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Actions Grid */}
                <div className="flex flex-col gap-[12px] w-full pt-[24px] border-t border-[#e3e6ec]">
                  <h3 className="text-[12px] font-bold text-brand-primary uppercase tracking-wide">Add New Map Point</h3>
                  <div className="grid grid-cols-2 gap-[8px]">
                    <button className="flex items-center gap-[8px] px-[12px] py-[8px] bg-white border border-[#e3e6ec] rounded-[4px] hover:bg-slate-50 transition-colors">
                      <Users className="size-[14px] text-brand-primary" />
                      <span className="text-[12px] text-brand-primary whitespace-nowrap">Assembly Point</span>
                    </button>
                    <button className="flex items-center gap-[8px] px-[12px] py-[8px] bg-white border border-[#e3e6ec] rounded-[4px] hover:bg-slate-50 transition-colors">
                      <BriefcaseMedical className="size-[14px] text-brand-primary" />
                      <span className="text-[12px] text-brand-primary whitespace-nowrap">First Aid</span>
                    </button>
                    <button className="flex items-center gap-[8px] px-[12px] py-[8px] bg-white border border-[#e3e6ec] rounded-[4px] hover:bg-slate-50 transition-colors">
                      <FireExtinguisher className="size-[14px] text-brand-primary" />
                      <span className="text-[12px] text-brand-primary whitespace-nowrap">Fire Point</span>
                    </button>
                    <button className="flex items-center gap-[8px] px-[12px] py-[8px] bg-white border border-[#e3e6ec] rounded-[4px] hover:bg-slate-50 transition-colors">
                      <TriangleAlert className="size-[14px] text-brand-primary" />
                      <span className="text-[12px] text-brand-primary whitespace-nowrap">Hazard</span>
                    </button>
                  </div>
                  <button className="flex items-center justify-center gap-[8px] w-full py-[10px] bg-brand-primary rounded-[6px] hover:bg-[#0a1532] transition-colors mt-[4px]">
                    <Route className="size-[14px] text-white" />
                    <span className="text-[12px] font-bold text-white">Draw Route</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="flex items-center justify-between w-full h-[34px] shrink-0 mt-auto">
            <div className="flex items-center gap-[16px] overflow-hidden pr-2">
              <button className="flex shrink-0 items-center justify-center h-[34px] px-[16px] bg-white border-[1.5px] border-brand-primary rounded-[6px] text-[12px] font-bold text-brand-primary hover:bg-slate-50 transition-colors whitespace-nowrap">
                Save Map
              </button>
              <button className="flex shrink-0 items-center justify-center h-[34px] px-[16px] bg-brand-primary rounded-[6px] text-[12px] font-bold text-white hover:bg-[#0a1532] transition-colors whitespace-nowrap">
                Save & Close
              </button>
            </div>
            
            <div className="flex items-center gap-[8px] shrink-0">
              <Info className="size-[16px] text-brand-primary" />
              <span className="text-[12px] text-brand-primary">Click map to place selected markers</span>
            </div>
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
