import { X, Info, ChevronDown, UserSquare2, GraduationCap, Eye, FileText, CalendarCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface AddRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: any) => void;
}

export function AddRoleModal({ isOpen, onClose }: AddRoleModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[800px] max-w-full bg-white rounded-[12px] shadow-lg border border-[#e3e6ec] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-[24px] font-bold text-brand-primary">Add Labour Requirement</h2>
            <p className="text-[14px] text-brand-secondary mt-1">
              Define the personnel, competency and supervision requirements for this RAMS.
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
        <div className="px-8 pb-8 flex flex-col gap-8 overflow-y-auto max-h-[80vh] no-scrollbar">
          
          {/* Section 1: Role Information */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <UserSquare2 className="size-4 text-brand-primary" />
              <h3 className="text-[14px] font-bold text-brand-primary">Section 1: Role Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Role / Trade <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none text-[#a3acba] focus:border-brand-primary appearance-none bg-white">
                    <option>Select Role</option>
                    <option>Site Supervisor</option>
                    <option>Electrician</option>
                    <option>Plumber</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Number of Operatives <span className="text-red-500">*</span></label>
                <input 
                  type="number" 
                  placeholder="0"
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Employment Type</label>
              <div className="relative">
                <select className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                  <option>Direct Employee</option>
                  <option>Subcontractor</option>
                  <option>Agency Worker</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Section 2: Competency & Training */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="size-4 text-brand-primary" />
              <h3 className="text-[14px] font-bold text-brand-primary">Section 2: Competency & Training</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Required Competency / Qualification</label>
                <div className="relative">
                  <select className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                    <option>Level 2 NVQ</option>
                    <option>Level 3 NVQ</option>
                    <option>Degree</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <div className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 flex items-center justify-between">
                  <span className="text-[14px] text-brand-primary">CSCS / CPCS / NPORS Card Required</span>
                  <Switch />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Required Training / Certification</label>
              <textarea 
                placeholder="e.g. Asbestos Awareness, Manual Handling, Working at Heights..."
                rows={2}
                className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
              />
            </div>

            <div className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarCheck2 className="size-4 text-brand-secondary" />
                <span className="text-[14px] text-brand-primary font-medium">Expiry Date Check Required (Compliance Check)</span>
              </div>
              <Switch />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Required PPE Notes</label>
              <textarea 
                placeholder="List specific PPE beyond standard site requirements (e.g. FFP3 Mask, Chem-suit)..."
                rows={2}
                className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
              />
            </div>
          </div>

          {/* Section 3: Supervision & Responsibilities */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Eye className="size-4 text-brand-primary" />
              <h3 className="text-[14px] font-bold text-brand-primary">Section 3: Supervision & Responsibilities</h3>
            </div>
            
            <div className="w-full rounded-[6px] bg-[#eef2ff] border border-[#d6e0ff] p-4 flex items-center justify-between border-l-[3px] border-l-[#3b82f6]">
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-[#1e3a8a]">Supervisor Required</span>
                <span className="text-[13px] text-[#1e3a8a]/70">Mandatory for high-risk operations</span>
              </div>
              <Switch />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-1/2 pr-3">
              <label className="text-[14px] text-brand-primary">Required Competency / Qualification</label>
              <div className="relative">
                <select className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                  <option>Level 2 NVQ</option>
                  <option>Level 3 NVQ</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Main Duty / Responsibility</label>
              <textarea 
                placeholder="Briefly describe the core function of this role in the context of this RAMS..."
                rows={2}
                className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-bold text-brand-primary">Related Methodology Step (Multi-select)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 rounded-[6px] bg-[#f8fafc] border border-[#e3e6ec] p-4">
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative flex items-center cursor-pointer">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="h-4 w-4 rounded-[3px] border border-[#c4cce0] bg-white peer-checked:bg-brand-primary peer-checked:border-brand-primary flex items-center justify-center transition-colors">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/org/2000/svg" className="opacity-0 peer-checked:opacity-100">
                        <path d="M3.5 7.5L0.5 4.5L1.91421 3.08579L3.5 4.67157L8.08579 0.0857864L9.5 1.5L3.5 7.5Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[14px] text-brand-secondary">Step 1: Mobilization & Site Setup</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative flex items-center cursor-pointer">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="h-4 w-4 rounded-[3px] border border-[#c4cce0] bg-white peer-checked:bg-brand-primary peer-checked:border-brand-primary flex items-center justify-center transition-colors">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/org/2000/svg" className="opacity-0 peer-checked:opacity-100">
                        <path d="M3.5 7.5L0.5 4.5L1.91421 3.08579L3.5 4.67157L8.08579 0.0857864L9.5 1.5L3.5 7.5Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[14px] text-brand-secondary">Step 2: Structural Demolition</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative flex items-center cursor-pointer">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="h-4 w-4 rounded-[3px] border border-[#c4cce0] bg-white peer-checked:bg-brand-primary peer-checked:border-brand-primary flex items-center justify-center transition-colors">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/org/2000/svg" className="opacity-0 peer-checked:opacity-100">
                        <path d="M3.5 7.5L0.5 4.5L1.91421 3.08579L3.5 4.67157L8.08579 0.0857864L9.5 1.5L3.5 7.5Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[14px] text-brand-secondary">Step 3: Waste Removal</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative flex items-center cursor-pointer">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="h-4 w-4 rounded-[3px] border border-[#c4cce0] bg-white peer-checked:bg-brand-primary peer-checked:border-brand-primary flex items-center justify-center transition-colors">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/org/2000/svg" className="opacity-0 peer-checked:opacity-100">
                        <path d="M3.5 7.5L0.5 4.5L1.91421 3.08579L3.5 4.67157L8.08579 0.0857864L9.5 1.5L3.5 7.5Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[14px] text-brand-secondary">Step 4: Making Safe</span>
                </label>

              </div>
            </div>
          </div>

          {/* Section 4: Additional Notes */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FileText className="size-4 text-brand-primary" />
              <h3 className="text-[14px] font-bold text-brand-primary">Section 4: Additional Notes</h3>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary">Labour Requirement Notes</label>
              <textarea 
                placeholder="Add any shift pattern, access requirement, induction requirement or specialist supervision notes..."
                rows={3}
                className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
              />
            </div>
          </div>

          {/* Info Banner */}
          <div className="flex items-start gap-3 bg-[#eef2ff] border border-[#d6e0ff] rounded-[8px] p-4">
            <Info className="size-5 text-[#1e3a8a] shrink-0 mt-0.5" />
            <p className="text-[13px] text-[#1e3a8a] leading-relaxed">
              Labour requirements will be shown in the RAMS arrangements section and may be referenced in relevant methodology steps.
            </p>
          </div>

          {/* Footer actions */}
          <div className="flex items-center gap-4 border-t border-[#e3e6ec] pt-6">
            <Button variant="outline" className="h-[42px] px-6 rounded-[6px] border-[#e3e6ec] bg-white text-[14px] font-bold text-brand-primary hover:bg-gray-50">
              Save Draft
            </Button>
            <Button className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-[14px] font-bold text-white hover:bg-[#0d1b3a]">
              Add Labour Role
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
