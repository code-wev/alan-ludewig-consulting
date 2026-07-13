"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Info, 
  MapPin, 
  Users, 
  Link as LinkIcon,
  UploadCloud,
  Image as ImageIcon,
  FileText,
  Eye,
  Trash2,
  CheckCircle2,
  ArrowRight,
  Lightbulb
} from "lucide-react";

interface JobDetailsStepProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function JobDetailsStep({ onPrevious, onNext }: JobDetailsStepProps) {
  return (
    <div className="flex flex-col gap-6 w-full font-['Sansation']">
      
      {/* Notice Box */}
      <div className="bg-[#e4ebfe] border border-[rgba(173,198,255,0.5)] rounded-[8px] p-[17px] flex gap-4 items-start w-full">
        <div className="rounded-full border border-brand-primary size-5 flex items-center justify-center shrink-0 mt-[2px]">
          <Info className="size-3.5 text-brand-primary" />
        </div>
        <p className="text-[14px] text-brand-primary leading-[1.6]">
          <span className="font-bold">Mandatory Compliance Notice :</span> All information provided must be verified against the physical site conditions before work commences. Incomplete details may result in the automatic suspension of the permit.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 w-full items-start">
        
        {/* Left Column (Form Controls) */}
        <div className="xl:col-span-8 flex flex-col gap-6 w-full">
          
          {/* Box 1: Core Information */}
          <div className="bg-white border-[1.5px] border-brand-light-grey rounded-[10px] p-[30px] md:px-[33px] flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="size-5 text-brand-primary" />
              <h3 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Core Information</h3>
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label className="text-[14px] text-brand-primary leading-[1.6]">Project / Site Name</label>
              <input 
                type="text" 
                placeholder="Enter formal project title"
                className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#dce0e7] px-[16px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
              />
              <button className="h-[33px] px-[13px] rounded-[6px] border border-brand-primary border-dashed text-brand-primary text-[12px] hover:bg-gray-50 mt-1">
                + Add New Site
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary leading-[1.6]">Work Location</label>
              <input 
                type="text" 
                placeholder="Specific floor, room number, or site coordinates"
                className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#dce0e7] px-[16px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary leading-[1.6]">Work Description</label>
              <textarea 
                placeholder="Detailed scope of works to be performed..."
                className="w-full min-h-[78px] rounded-[6px] border-[1.5px] border-[#e3e6ec] p-[16px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary resize-none"
              />
            </div>
          </div>

          {/* Box 2: Responsible Parties */}
          <div className="bg-white border-[1.5px] border-brand-light-grey rounded-[10px] p-[30px] md:px-[33px] flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="size-5 text-brand-primary" />
              <h3 className="text-[20px] font-bold text-brand-primary leading-[1.6]">Responsible Parties</h3>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary leading-[1.6]">Principle Contractor</label>
              <input 
                type="text" 
                placeholder="Organisation Name"
                className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#dce0e7] px-[16px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary leading-[1.6]">Performing Organisation</label>
              <input 
                type="text" 
                placeholder="Sub-contractor or Dept"
                className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#dce0e7] px-[16px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label className="text-[14px] text-brand-primary leading-[1.6]">Permit Holder/Applicant</label>
              <input 
                type="text" 
                placeholder="Person in Charge"
                className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#dce0e7] px-[16px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
              />
              <button className="h-[33px] px-[13px] rounded-[6px] border border-brand-primary border-dashed text-brand-primary text-[12px] hover:bg-gray-50 mt-1">
                + Add Permit Holder
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-primary leading-[1.6]">Site Contact/Supervisor</label>
              <input 
                type="text" 
                placeholder="Emergency Contact Name"
                className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#dce0e7] px-[16px] text-[14px] text-brand-primary placeholder:text-[#a3acba] focus:outline-none focus:border-brand-primary"
              />
            </div>
          </div>

          {/* Box 3: Linked Compliance Documents */}
          <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-[21px] flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LinkIcon className="size-5 text-brand-primary" />
                <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">Linked Compliance Documents</h3>
              </div>
              <button className="flex items-center gap-1.5 text-[#0453cd] hover:underline">
                <LinkIcon className="size-3.5" />
                <span className="text-[12px]">Link RAMS / Risk Assessment</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary leading-[1.6]">Related RAMS Reference</label>
                <input 
                  type="text" 
                  defaultValue="RAMS-2024-0812-BLDR"
                  className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#dce0e7] px-[16px] text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary leading-[1.6]">Risk Assessment Reference</label>
                <input 
                  type="text" 
                  defaultValue="RA-HOT-0094-UK"
                  className="w-full h-[51px] rounded-[6px] border-[1.5px] border-[#dce0e7] px-[16px] text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>
          </div>

          {/* Box 4: Upload Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Supporting Document */}
            <div className="bg-white border border-[#a3acba] border-dashed rounded-[6px] p-[33px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors h-[156px]">
              <UploadCloud className="size-8 text-brand-secondary mb-3" />
              <span className="text-[14px] font-bold text-brand-secondary leading-[1.6]">Supporting Document</span>
              <span className="text-[12px] text-[#a3acba] leading-[1.6]">PDF, DOCX up to 10MB</span>
            </div>
            {/* Site Image */}
            <div className="bg-white border border-[#a3acba] border-dashed rounded-[6px] p-[33px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors h-[156px]">
              <ImageIcon className="size-8 text-brand-secondary mb-3" />
              <span className="text-[14px] font-bold text-brand-secondary leading-[1.6]">Site Image</span>
              <span className="text-[12px] text-[#a3acba] leading-[1.6]">JPG, PNG for site record</span>
            </div>
          </div>

          {/* Box 5: Uploaded Site Documents */}
          <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-[21px] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FileText className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">Uploaded Site Documents</h3>
            </div>
            
            <div className="flex flex-col gap-3">
              {/* File 1 */}
              <div className="flex items-center justify-between bg-[#f3f5f8] rounded-[6px] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="size-[38px] rounded-[6px] bg-[#fef3f2] flex items-center justify-center">
                    <FileText className="size-[18px] text-[#d92d20]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] text-brand-primary font-bold leading-[1.6]">site_layout_plan_v2.pdf</span>
                    <span className="text-[12px] text-brand-secondary leading-[1.6]">2.4 MB • Uploaded 2 mins ago</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-[#0453cd] hover:opacity-80">
                    <Eye className="size-4" />
                  </button>
                  <button className="text-[#d92d20] hover:opacity-80">
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>

              {/* File 2 */}
              <div className="flex items-center justify-between bg-[#f3f5f8] rounded-[6px] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="size-[38px] rounded-[6px] bg-[#eff8ff] flex items-center justify-center">
                    <ImageIcon className="size-[18px] text-[#0453cd]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] text-brand-primary font-bold leading-[1.6]">excavation_point_A.jpg</span>
                    <span className="text-[12px] text-brand-secondary leading-[1.6]">4.1 MB • Uploaded 5 mins ago</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-[#0453cd] hover:opacity-80">
                    <Eye className="size-4" />
                  </button>
                  <button className="text-[#d92d20] hover:opacity-80">
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Right Sidebar (Guidance & Context) */}
        <div className="xl:col-span-4 flex flex-col gap-6 w-full">
          {/* Permit Guidance */}
          <div className="bg-white rounded-[10px] p-[24px] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Lightbulb className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">Permit Guidance</h3>
            </div>
            <p className="text-[14px] text-brand-secondary leading-[1.6]">
              Permit details should be accurate and checked. Ensure all personnel listed hold valid certifications for the specific work being performed.
            </p>
            <div className="flex flex-col gap-3 mt-1">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="size-[15px] text-brand-primary mt-[3px] shrink-0" />
                <span className="text-[14px] text-brand-secondary leading-[1.6]">Check local site rules before entry.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="size-[15px] text-brand-primary mt-[3px] shrink-0" />
                <span className="text-[14px] text-brand-secondary leading-[1.6]">Validate RAMS reference matches.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="size-[15px] text-brand-primary mt-[3px] shrink-0" />
                <span className="text-[14px] text-brand-secondary leading-[1.6]">Issuer must be on the approved list.</span>
              </div>
            </div>
          </div>

          {/* Current Site Context */}
          <div className="bg-white rounded-[10px] p-[24px] flex flex-col gap-3">
            <div className="w-full h-[160px] rounded-[6px] overflow-hidden bg-gray-200 relative shrink-0">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-[12px] text-brand-secondary leading-[1.6]">Current Site Context</h4>
              <p className="text-[14px] font-bold text-brand-primary leading-[1.6]">Site Area: Main Logistics Hall A</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-brand-primary rounded-[10px] p-[24px] flex flex-col gap-4">
            <h4 className="text-[16px] font-bold text-white leading-[1.6]">Quick Site Check</h4>
            <div className="flex flex-col gap-3">
              <button className="w-full bg-[#2c3d68] hover:bg-[#394d7c] rounded-[6px] h-[40px] flex items-center justify-between px-[16px] transition-colors">
                <span className="text-[14px] text-white font-['Sansation']">Check Weather Data</span>
                <ArrowRight className="size-4 text-white" />
              </button>
              <button className="w-full bg-[#2c3d68] hover:bg-[#394d7c] rounded-[6px] h-[40px] flex items-center justify-between px-[16px] transition-colors">
                <span className="text-[14px] text-white font-['Sansation']">Access Site Blueprints</span>
                <ArrowRight className="size-4 text-white" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Actions */}
      <div className="flex items-center gap-3 pt-4">
        <Button
          variant="outline"
          onClick={onPrevious}
          className="h-[34px] px-4 rounded-[6px] border-[#e3e6ec] text-brand-primary font-bold text-[13px] hover:bg-[#f8f9fc]"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          className="h-[34px] px-4 rounded-[6px] border-[#e3e6ec] text-brand-primary font-bold text-[13px] hover:bg-[#f8f9fc]"
        >
          Save Draft
        </Button>
        <Button
          onClick={onNext}
          className="h-[34px] px-4 rounded-[6px] bg-brand-primary text-white font-bold text-[13px] hover:bg-[#0f1d3e]"
        >
          Next: Hazards & Controls
        </Button>
      </div>

    </div>
  );
}
