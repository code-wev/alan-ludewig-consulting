import React, { useState } from "react";
import { Folder, Clock, FileText, MapPin, Users, Wrench, Trash2, Upload, GripVertical, Pencil, X, ChevronDown, Check, MinusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { AddReferenceDocumentModal } from "./add-reference-document-modal";
import { AddRoleModal } from "./add-role-modal";

interface ArrangementsStepProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function ArrangementsStep({ onPrevious, onNext }: ArrangementsStepProps) {
  const [selectedArrangements, setSelectedArrangements] = useState<string[]>(["Induction", "Sign-in"]);
  const [isRefModalOpen, setIsRefModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

  const toggleArrangement = (label: string) => {
    setSelectedArrangements(prev => 
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  return (
    <div className="flex flex-col gap-6 w-full text-brand-primary">
      
      {/* Section A: Reference Documents */}
      <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e3e6ec] pb-4">
          <div className="flex items-center gap-3">
            <Folder className="size-5 text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary">Section A: Reference Documents</h3>
          </div>
          <Button onClick={() => setIsRefModalOpen(true)} className="h-[34px] px-4 rounded-[6px] bg-brand-primary text-[12px] font-bold text-white hover:bg-[#0d1b3a]">
            Add Reference Document
          </Button>
        </div>

        <div className="flex flex-col overflow-x-auto w-full">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-[minmax(180px,1fr)_minmax(180px,1fr)_minmax(140px,1fr)_minmax(200px,1fr)_minmax(200px,1fr)_60px] gap-4 mb-2 px-2">
              <span className="text-[12px] font-bold text-brand-primary">Document Title</span>
              <span className="text-[12px] font-bold text-brand-primary">Document Reference</span>
              <span className="text-[12px] font-bold text-brand-primary">Document Type</span>
              <span className="text-[12px] font-bold text-brand-primary">Attachment</span>
              <span className="text-[12px] font-bold text-brand-primary">Notes</span>
              <span className="text-[12px] font-bold text-brand-primary text-center">Action</span>
            </div>
            
            <div className="grid grid-cols-[minmax(180px,1fr)_minmax(180px,1fr)_minmax(140px,1fr)_minmax(200px,1fr)_minmax(200px,1fr)_60px] gap-4 items-center bg-[#f8fafc] p-2 rounded-[6px] border border-[#e3e6ec]">
              <input 
                type="text" 
                placeholder="Enter Document title"
                className="h-[42px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary bg-white"
              />
              <input 
                type="text" 
                defaultValue="e.g. Doc-001"
                className="h-[42px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary bg-white"
              />
              <div className="relative">
                <select className="h-[42px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] pl-3 pr-8 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                  <option>Drawing</option>
                  <option>Specification</option>
                  <option>Report</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
              </div>
              <div className="h-[42px] flex items-center justify-center gap-2 rounded-[6px] border-[1.5px] border-dashed border-[#e3e6ec] bg-white text-brand-secondary text-[12px] cursor-pointer hover:border-brand-primary hover:text-brand-primary transition-colors">
                <Upload className="size-4" />
                Upload file or drag & drop
              </div>
              <input 
                type="text" 
                placeholder="Add notes (optional)..."
                className="h-[42px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary bg-white"
              />
              <div className="flex items-center justify-center">
                <button className="text-[#ef4444] hover:bg-red-50 p-2 rounded-md transition-colors">
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section B: Programme & Work Timing */}
      <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3 border-b border-[#e3e6ec] pb-4">
          <Clock className="size-5 text-brand-primary" />
          <h3 className="text-[16px] font-bold text-brand-primary">Section B: Programme & Work Timing</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Start Date</label>
            <input 
              type="text" 
              placeholder="mm/dd/yyyy"
              className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Duration</label>
            <input 
              type="text" 
              defaultValue="10"
              className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Unit</label>
            <div className="relative">
              <select className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                <option>Days</option>
                <option>Weeks</option>
                <option>Months</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Working Hours</label>
            <input 
              type="text" 
              placeholder="e.g. 08:00 - 17:00"
              className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Constraints</label>
            <textarea 
              placeholder="Noise limits, shared access, etc."
              rows={3}
              className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-primary">Notes</label>
            <textarea 
              placeholder="Additional timing notes..."
              rows={3}
              className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
            />
          </div>
        </div>
      </div>

      {/* Section C: Associated Permits */}
      <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3 border-b border-[#e3e6ec] pb-4">
          <FileText className="size-5 text-brand-primary" />
          <h3 className="text-[16px] font-bold text-brand-primary">Section C: Associated Permits</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="rounded-[8px] border-[1.5px] border-brand-primary bg-[#f4f7fe] p-4 flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <span className="text-[14px] font-bold text-brand-primary">Permit to Work</span>
              <div className="flex items-center justify-center size-4 bg-brand-primary rounded-[3px]">
                <Check className="size-3 text-white" strokeWidth={3} />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-brand-primary">Reference</label>
              <input type="text" defaultValue="PTW-AUTO" className="h-[36px] w-full rounded-[4px] border border-[#e3e6ec] px-3 text-[12px] outline-none bg-white focus:border-brand-primary" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-brand-primary">Notes</label>
              <textarea 
                defaultValue="Works within operational yard, Banksman to be in place. Permit Signed by Site Supervisor"
                rows={3}
                className="w-full rounded-[4px] border border-[#e3e6ec] p-3 text-[12px] outline-none bg-white focus:border-brand-primary resize-none leading-relaxed"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[8px] border-[1.5px] border-[#e3e6ec] bg-[#f8fafc] p-4 flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <span className="text-[14px] font-bold text-brand-primary">Hot Works</span>
              <div className="flex items-center justify-center size-4 border border-[#c4cce0] rounded-[3px] bg-white"></div>
            </div>
            <div className="flex flex-col gap-1.5 opacity-60">
              <label className="text-[12px] text-brand-primary">Reference</label>
              <input type="text" className="h-[36px] w-full rounded-[4px] border border-[#e3e6ec] px-3 text-[12px] outline-none bg-white" disabled />
            </div>
            <div className="flex flex-col gap-1.5 opacity-60">
              <label className="text-[12px] text-brand-primary">Notes</label>
              <textarea 
                placeholder="Add permit-specific controls, restrictions, authorization conditions, and site requirements."
                rows={3}
                className="w-full rounded-[4px] border border-[#e3e6ec] p-3 text-[12px] outline-none bg-white resize-none"
                disabled
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-[8px] border-[1.5px] border-[#e3e6ec] bg-[#f8fafc] p-4 flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <span className="text-[14px] font-bold text-brand-primary">Confined Space</span>
              <div className="flex items-center justify-center size-4 border border-[#c4cce0] rounded-[3px] bg-white"></div>
            </div>
            <div className="flex flex-col gap-1.5 opacity-60">
              <label className="text-[12px] text-brand-primary">Reference</label>
              <input type="text" className="h-[36px] w-full rounded-[4px] border border-[#e3e6ec] px-3 text-[12px] outline-none bg-white" disabled />
            </div>
            <div className="flex flex-col gap-1.5 opacity-60">
              <label className="text-[12px] text-brand-primary">Notes</label>
              <textarea 
                placeholder="Add permit-specific controls, restrictions, authorization conditions, and site requirements."
                rows={3}
                className="w-full rounded-[4px] border border-[#e3e6ec] p-3 text-[12px] outline-none bg-white resize-none"
                disabled
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-[8px] border-[1.5px] border-[#e3e6ec] bg-[#f8fafc] p-4 flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <span className="text-[14px] font-bold text-brand-primary">Electrical Isolation</span>
              <div className="flex items-center justify-center size-4 border border-[#c4cce0] rounded-[3px] bg-white"></div>
            </div>
            <div className="flex flex-col gap-1.5 opacity-60">
              <label className="text-[12px] text-brand-primary">Reference</label>
              <input type="text" className="h-[36px] w-full rounded-[4px] border border-[#e3e6ec] px-3 text-[12px] outline-none bg-white" disabled />
            </div>
            <div className="flex flex-col gap-1.5 opacity-60">
              <label className="text-[12px] text-brand-primary">Notes</label>
              <textarea 
                placeholder="Add permit-specific controls, restrictions, authorization conditions, and site requirements."
                rows={3}
                className="w-full rounded-[4px] border border-[#e3e6ec] p-3 text-[12px] outline-none bg-white resize-none"
                disabled
              />
            </div>
          </div>

        </div>
      </div>

      {/* Section D: Site Arrangements */}
      <div className="flex flex-col xl:flex-row gap-6 w-full">
        {/* Left Form part */}
        <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8 shadow-sm flex-1">
          <div className="flex items-center gap-3 border-b border-[#e3e6ec] pb-4">
            <MapPin className="size-5 text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary">Section D: Site Arrangements</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-2">
            {["Induction", "Sign-in", "Welfare", "Parking", "Deliveries", "Traffic", "Restricted Areas", "Security", "Visitors"].map((label) => {
              const isChecked = selectedArrangements.includes(label);
              return (
                <div key={label} className="flex items-center gap-3 cursor-pointer" onClick={() => toggleArrangement(label)}>
                  <div className={cn("flex items-center justify-center size-4 rounded-[3px] shrink-0", isChecked ? "bg-brand-primary" : "border border-[#c4cce0] bg-white")}>
                    {isChecked && <Check className="size-3 text-white" strokeWidth={3} />}
                  </div>
                  <span className="text-[14px] text-brand-primary">{label}</span>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <span className="text-[14px] font-bold text-brand-primary">Standard Arrangement Statements</span>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-[6px] bg-[#f8fafc] border border-[#e3e6ec] px-4 py-2">
                <span className="text-[12px] text-brand-primary max-w-[250px] truncate">All operatives to report to the Site Supervisor on arrival.</span>
                <Pencil className="size-3.5 text-[#3b82f6] cursor-pointer" />
                <X className="size-3.5 text-[#ef4444] cursor-pointer" />
              </div>
              <div className="flex items-center gap-2 rounded-[6px] bg-[#f8fafc] border border-[#e3e6ec] px-4 py-2">
                <span className="text-[12px] text-brand-primary max-w-[250px] truncate">Access and egress routes to be kept clear at all times.</span>
                <Pencil className="size-3.5 text-[#3b82f6] cursor-pointer" />
                <X className="size-3.5 text-[#ef4444] cursor-pointer" />
              </div>
              <div className="flex items-center gap-2 rounded-[6px] bg-[#f8fafc] border border-[#e3e6ec] px-4 py-2">
                <span className="text-[12px] text-brand-primary max-w-[250px] truncate">Welfare facilities will be located in the designated compound.</span>
                <Pencil className="size-3.5 text-[#3b82f6] cursor-pointer" />
                <X className="size-3.5 text-[#ef4444] cursor-pointer" />
              </div>
              <div className="flex items-center gap-2 rounded-[6px] bg-[#f8fafc] border border-[#e3e6ec] px-4 py-2">
                <span className="text-[12px] text-brand-primary max-w-[250px] truncate">Waste to be segregated and stored in designated bins.</span>
                <Pencil className="size-3.5 text-[#3b82f6] cursor-pointer" />
                <X className="size-3.5 text-[#ef4444] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="flex flex-col justify-end xl:w-[350px] rounded-[12px] border border-[#e3e6ec] p-6 shadow-sm relative overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 z-0">
            {/* Using a placeholder gradient pattern for the abstract lines */}
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-yellow-500/10 via-black to-black opacity-80" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </div>
          
          <div className="relative z-10 flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-white">Safety Context</h4>
            <p className="text-[13px] text-white/80 leading-relaxed">
              Ensure all personnel are briefed on site-specific segregation and traffic management plans before starting works.
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-white/60">
              <Clock className="size-3.5" />
              <span className="text-[11px]">Updated 2 days ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section E: Labour Requirements */}
      <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e3e6ec] pb-4">
          <div className="flex items-center gap-3">
            <Users className="size-5 text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary">Section E: Labour Requirements</h3>
          </div>
          <Button onClick={() => setIsRoleModalOpen(true)} className="h-[34px] px-4 rounded-[6px] bg-brand-primary text-[12px] font-bold text-white hover:bg-[#0d1b3a]">
            Add Role
          </Button>
        </div>

        <div className="flex flex-col overflow-x-auto w-full">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-[minmax(200px,1fr)_minmax(120px,1fr)_minmax(250px,1fr)_60px_minmax(200px,1fr)_60px] gap-4 mb-2 px-2">
              <span className="text-[12px] font-bold text-brand-primary">Role/Trade</span>
              <span className="text-[12px] font-bold text-brand-primary">Operatives</span>
              <span className="text-[12px] font-bold text-brand-primary">Competency</span>
              <span className="text-[12px] font-bold text-brand-primary text-center">Sup.</span>
              <span className="text-[12px] font-bold text-brand-primary">Notes</span>
              <span className="text-[12px] font-bold text-brand-primary text-center"></span>
            </div>
            
            <div className="grid grid-cols-[minmax(200px,1fr)_minmax(120px,1fr)_minmax(250px,1fr)_60px_minmax(200px,1fr)_60px] gap-4 items-center bg-[#f8fafc] p-2 rounded-[6px] border border-[#e3e6ec]">
              <input 
                type="text" 
                defaultValue="Site Supervisor"
                className="h-[42px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none bg-white focus:border-brand-primary"
              />
              <input 
                type="text" 
                defaultValue="1"
                className="h-[42px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none bg-white focus:border-brand-primary"
              />
              <input 
                type="text" 
                defaultValue="SSSTS / CSCS Black Card"
                className="h-[42px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none bg-white focus:border-brand-primary"
              />
              <div className="flex items-center justify-center">
                <Switch defaultChecked />
              </div>
              <input 
                type="text" 
                defaultValue="1"
                className="h-[42px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none bg-white focus:border-brand-primary"
              />
              <div className="flex items-center justify-center">
                <button className="text-[#a3acba] hover:text-brand-primary p-2 transition-colors">
                  <MinusCircle className="size-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section F: Plant, Materials & Equipment */}
      <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3 border-b border-[#e3e6ec] pb-4">
          <Wrench className="size-5 text-brand-primary" />
          <h3 className="text-[16px] font-bold text-brand-primary">Section F: Plant, Materials & Equipment</h3>
        </div>

        <div className="flex items-center gap-6 border-b border-[#e3e6ec]">
          <div className="py-3 border-b-2 border-brand-primary text-[14px] font-bold text-brand-primary cursor-pointer">Plant</div>
          <div className="py-3 text-[14px] text-brand-secondary hover:text-brand-primary cursor-pointer transition-colors">Materials</div>
          <div className="py-3 text-[14px] text-brand-secondary hover:text-brand-primary cursor-pointer transition-colors">Equipment</div>
        </div>

        <div className="flex flex-col overflow-x-auto w-full mt-2">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-[minmax(250px,2fr)_minmax(80px,1fr)_100px_100px_minmax(250px,2fr)_60px] gap-4 mb-2 px-2 bg-[#f8fafc] py-2 rounded-t-[6px] border-b border-[#e3e6ec]">
              <span className="text-[12px] font-bold text-brand-secondary">Item</span>
              <span className="text-[12px] font-bold text-brand-secondary">Qty</span>
              <span className="text-[12px] font-bold text-brand-secondary text-center">Op Req</span>
              <span className="text-[12px] font-bold text-brand-secondary text-center">Insp Req</span>
              <span className="text-[12px] font-bold text-brand-secondary">Notes</span>
              <span className="text-[12px] font-bold text-brand-secondary"></span>
            </div>
            
            <div className="grid grid-cols-[minmax(250px,2fr)_minmax(80px,1fr)_100px_100px_minmax(250px,2fr)_60px] gap-4 items-center py-4 px-2 border-b border-[#e3e6ec]">
              <input 
                type="text" 
                defaultValue="2T Excavator"
                className="h-[42px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none bg-white focus:border-brand-primary"
              />
              <input 
                type="text" 
                defaultValue="1"
                className="h-[42px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none bg-white focus:border-brand-primary"
              />
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center size-4 bg-brand-primary rounded-[3px]">
                  <Check className="size-3 text-white" strokeWidth={3} />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center size-4 bg-brand-primary rounded-[3px]">
                  <Check className="size-3 text-white" strokeWidth={3} />
                </div>
              </div>
              <input 
                type="text" 
                className="h-[42px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-3 text-[14px] outline-none bg-white focus:border-brand-primary"
              />
              <div className="flex items-center justify-center text-[#a3acba] cursor-grab">
                <GripVertical className="size-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center gap-4 mt-2">
        <Button variant="outline" onClick={onPrevious} className="h-[42px] px-6 rounded-[6px] border-[#e3e6ec] bg-white text-[14px] font-bold text-brand-primary hover:bg-gray-50">
          Previous Step
        </Button>
        <Button variant="outline" className="h-[42px] px-6 rounded-[6px] border-[#e3e6ec] bg-white text-[14px] font-bold text-brand-primary hover:bg-gray-50 ml-auto">
          Save Draft
        </Button>
        <Button onClick={onNext} className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-[14px] font-bold text-white hover:bg-[#0d1b3a]">
          Next: PPE
        </Button>
      </div>

      <AddReferenceDocumentModal 
        isOpen={isRefModalOpen} 
        onClose={() => setIsRefModalOpen(false)} 
      />

      <AddRoleModal 
        isOpen={isRoleModalOpen}
        onClose={() => setIsRoleModalOpen(false)}
      />

    </div>
  );
}
