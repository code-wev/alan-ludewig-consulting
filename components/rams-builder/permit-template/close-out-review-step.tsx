"use client";

import React from "react";
import { 
  FileText,
  MapPin,
  AlertTriangle,
  ExternalLink,
  HardHat,
  Eye,
  HandMetal,
  Footprints,
  Calendar,
  User,
  CheckSquare,
  ShieldCheck,
  UploadCloud,
  FileImage,
  Eye as EyeIcon,
  Trash2,
  ChevronDown,
  PenTool
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface CloseOutReviewStepProps {
  onPrevious: () => void;
}

export function CloseOutReviewStep({}: CloseOutReviewStepProps) {
  return (
    <div className="flex flex-col gap-[20px] w-full font-['Sansation']">
      {/* Permit Type & Job Site Details */}
      <div className="grid grid-cols-2 gap-[25px]">
        {/* Permit Type Card */}
        <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-[21px] flex flex-col justify-center gap-[16px] h-[206px]">
          <div className="flex items-center gap-[8px]">
            <FileText className="size-[20px] text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary">Permit Type</h3>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-brand-secondary">Reference</span>
              <span className="text-[14px] font-bold text-brand-primary">PER-2023-889</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-brand-secondary">Category</span>
              <div className="bg-[#f3f5f8] px-[8px] py-[2px] rounded-[3px]">
                <span className="text-[14px] text-brand-secondary">Hot Works</span>
              </div>
            </div>
          </div>
        </div>

        {/* Job & Site Details Card */}
        <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-[20px] flex flex-col gap-[20px] h-[206px]">
          <div className="flex items-center gap-[8px]">
            <MapPin className="size-[20px] text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary uppercase">Job & Site Details</h3>
          </div>
          <div className="grid grid-cols-2 gap-y-[8px] gap-x-[20px]">
            <div className="flex justify-between items-center h-[36px]">
              <span className="text-[14px] text-brand-secondary">Project</span>
              <span className="text-[14px] text-brand-primary text-right max-w-[150px] truncate">Apex Data Center Refurbishment</span>
            </div>
            <div className="flex justify-between items-center h-[36px]">
              <span className="text-[14px] text-brand-secondary">Site Manager</span>
              <span className="text-[14px] text-brand-primary">Marcus Holloway</span>
            </div>
            <div className="flex justify-between items-center h-[36px]">
              <span className="text-[14px] text-brand-secondary">Location</span>
              <span className="text-[14px] text-brand-primary text-right max-w-[150px] truncate">Server Room 4A, Level 2</span>
            </div>
            <div className="flex justify-between items-center h-[36px]">
              <span className="text-[14px] text-brand-secondary">Emergency Contact</span>
              <span className="text-[14px] text-brand-primary">+44 7700 900123</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hazards & High-Level Controls */}
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-[20px] py-[12px]">
          <div className="flex items-center gap-[8px]">
            <AlertTriangle className="size-[19px] text-brand-primary" />
            <h3 className="text-[20px] font-bold text-brand-primary">Hazards & High-Level Controls</h3>
          </div>
          <div className="flex items-center gap-[4px] cursor-pointer hover:opacity-80">
            <ExternalLink className="size-[12px] text-brand-primary" />
            <span className="text-[16px] text-brand-primary">Full Risk Assessment</span>
          </div>
        </div>
        <div className="w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#d6e9ff] border-b-[1.5px] border-[#f3f5f8]">
                <th className="px-[20px] py-[10px] text-[14px] font-bold text-brand-primary font-['Sansation'] w-[30%]">Hazard Identified</th>
                <th className="px-[20px] py-[10px] text-[14px] font-bold text-brand-primary font-['Sansation'] w-[50%]">Primary Control Measure</th>
                <th className="px-[20px] py-[10px] text-[14px] font-bold text-brand-primary font-['Sansation'] w-[20%]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-[1.5px] border-[#f3f5f8]">
                <td className="px-[20px] py-[20px] text-[14px] text-brand-primary">Ignition Source in Restricted Area</td>
                <td className="px-[20px] py-[20px] text-[14px] text-brand-secondary">Gas monitoring and fire watch maintained for duration of works.</td>
                <td className="px-[20px] py-[18px]">
                  <div className="bg-[#00bc7d] text-white text-[12px] px-[9px] py-[2px] rounded-[6px] inline-flex">Implemented</div>
                </td>
              </tr>
              <tr className="border-b-[1.5px] border-[#f3f5f8]">
                <td className="px-[20px] py-[20px] text-[14px] text-brand-primary">Restricted Workspace / Ergonomics</td>
                <td className="px-[20px] py-[20px] text-[14px] text-brand-secondary">Task rotation every 45 minutes and mechanical lift for equipment.</td>
                <td className="px-[20px] py-[18px]">
                  <div className="bg-[#00bc7d] text-white text-[12px] px-[9px] py-[2px] rounded-[6px] inline-flex">Implemented</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Required PPE */}
      <div className="bg-white border border-[#c5c6d0] rounded-[12px] p-[21px] flex flex-col gap-[16px]">
        <div className="flex items-center gap-[8px]">
          <ShieldCheck className="size-[18px] text-brand-primary" />
          <h3 className="text-[16px] font-bold text-brand-primary">Required PPE</h3>
        </div>
        <div className="grid grid-cols-4 gap-[20px]">
          <div className="border border-[#e3e6ec] rounded-[6px] p-[17px] flex flex-col items-center justify-center gap-[12px]">
            <HardHat className="size-[40px] text-[#0453cd]" strokeWidth={1} />
            <span className="text-[12px] text-brand-secondary">Hard Hat</span>
          </div>
          <div className="border border-[#e3e6ec] rounded-[6px] p-[17px] flex flex-col items-center justify-center gap-[12px]">
            <Eye className="size-[40px] text-[#0453cd]" strokeWidth={1} />
            <span className="text-[12px] text-brand-secondary">Eye Protection</span>
          </div>
          <div className="border border-[#e3e6ec] rounded-[6px] p-[17px] flex flex-col items-center justify-center gap-[12px]">
            <HandMetal className="size-[40px] text-[#0453cd]" strokeWidth={1} />
            <span className="text-[12px] text-brand-secondary">Gloves</span>
          </div>
          <div className="border border-[#e3e6ec] rounded-[6px] p-[17px] flex flex-col items-center justify-center gap-[12px]">
            <Footprints className="size-[40px] text-[#0453cd]" strokeWidth={1} />
            <span className="text-[12px] text-brand-secondary">Safety Boots</span>
          </div>
        </div>
      </div>

      {/* Validity Period & Authorisation */}
      <div className="grid grid-cols-2 gap-[16px]">
        {/* Validity Period Card */}
        <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-[21px] flex flex-col gap-[16px]">
          <div className="flex items-center gap-[8px]">
            <Calendar className="size-[20px] text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary">Validity Period</h3>
          </div>
          <div className="grid grid-cols-2 gap-[16px]">
            <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] text-brand-secondary">Valid From</span>
              <span className="text-[14px] text-brand-primary">24 Oct 2023, 08:00</span>
            </div>
            <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] text-brand-secondary">Valid Until</span>
              <span className="text-[14px] text-brand-primary">24 Oct 2023, 17:00</span>
            </div>
          </div>
          <div className="flex items-center gap-[8px] mt-2">
            <div className="size-[16px] rounded-full border-2 border-[#00bc7d] flex items-center justify-center">
              <div className="size-[8px] bg-[#00bc7d] rounded-full" />
            </div>
            <span className="text-[14px] text-brand-secondary">Active & Within timeframe</span>
          </div>
        </div>

        {/* Authorisation Card */}
        <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-[21px] flex flex-col gap-[16px]">
          <div className="flex items-center gap-[8px]">
            <ShieldCheck className="size-[20px] text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary">Authorisation</h3>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[12px]">
              <div className="size-[32px] bg-[#f3f5f8] rounded-full flex items-center justify-center shrink-0">
                <User className="size-[16px] text-brand-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-brand-primary">David Sterling</span>
                <span className="text-[12px] text-brand-secondary">Authorised Issuer (HSE Officer)</span>
              </div>
            </div>
            <div className="flex items-center gap-[12px]">
              <div className="size-[32px] bg-[#f3f5f8] rounded-full flex items-center justify-center shrink-0">
                <User className="size-[16px] text-brand-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-brand-primary">Permit Holder</span>
                <span className="text-[12px] text-brand-secondary">Awaiting Electronic Signature</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Required Control Measures */}
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-[20px] py-[12px]">
          <div className="flex items-center gap-[8px]">
            <ShieldCheck className="size-[19px] text-brand-primary" />
            <h3 className="text-[20px] font-bold text-brand-primary">Required Control Measures</h3>
          </div>
          <div className="flex items-center gap-[4px] cursor-pointer hover:opacity-80">
            <ExternalLink className="size-[12px] text-brand-primary" />
            <span className="text-[16px] text-brand-primary">Full Risk Assessment</span>
          </div>
        </div>
        <div className="w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#d6e9ff] border-b-[1.5px] border-[#f3f5f8]">
                <th className="px-[20px] py-[10px] text-[14px] font-bold text-brand-primary font-['Sansation'] w-[40%]">Control Measures</th>
                <th className="px-[20px] py-[10px] text-[14px] font-bold text-brand-primary font-['Sansation'] w-[30%]">Responsible Person</th>
                <th className="px-[20px] py-[10px] text-[14px] font-bold text-brand-primary font-['Sansation'] w-[15%]">Confirmed</th>
                <th className="px-[20px] py-[10px] text-[14px] font-bold text-brand-primary font-['Sansation'] w-[15%]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-[1.5px] border-[#f3f5f8]">
                <td className="px-[20px] py-[20px] text-[14px] text-brand-secondary">Continuous Gas Monitoring</td>
                <td className="px-[20px] py-[20px] text-[14px] text-brand-secondary">Marcus Holloway</td>
                <td className="px-[20px] py-[20px]">
                  <div className="size-[16px] bg-[#001137] rounded-[2px] flex items-center justify-center">
                    <CheckSquare className="size-[10px] text-white" />
                  </div>
                </td>
                <td className="px-[20px] py-[18px]">
                  <div className="bg-[#00bc7d] text-white text-[12px] px-[9px] py-[2px] rounded-[6px] inline-flex">Implemented</div>
                </td>
              </tr>
              <tr className="border-b-[1.5px] border-[#f3f5f8]">
                <td className="px-[20px] py-[20px] text-[14px] text-brand-secondary">Fire Watch (30 mins post work)</td>
                <td className="px-[20px] py-[20px] text-[14px] text-brand-secondary">Alan Ludewig</td>
                <td className="px-[20px] py-[20px]">
                  <div className="size-[16px] bg-[#001137] rounded-[2px] flex items-center justify-center">
                    <CheckSquare className="size-[10px] text-white" />
                  </div>
                </td>
                <td className="px-[20px] py-[18px]">
                  <div className="bg-[#00bc7d] text-white text-[12px] px-[9px] py-[2px] rounded-[6px] inline-flex">Implemented</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Close-Out Checklist */}
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-[20px] flex flex-col gap-[20px]">
        <div className="flex items-center gap-[8px]">
          <CheckSquare className="size-[20px] text-brand-primary" />
          <h3 className="text-[20px] font-bold text-brand-primary">Close-Out Checklist</h3>
        </div>
        <div className="grid grid-cols-2 gap-[16px]">
          <div className="border border-[#e3e6ec] rounded-[6px] p-[16px] flex items-start gap-[12px]">
            <div className="size-[20px] border-[1.5px] border-[#e3e6ec] rounded-[4px] mt-1 shrink-0" />
            <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] font-bold text-brand-primary">Work Completed</span>
              <span className="text-[14px] text-brand-secondary">Confirm all specified works within this permit are finished.</span>
            </div>
          </div>
          <div className="border border-[#e3e6ec] rounded-[6px] p-[16px] flex items-start gap-[12px]">
            <div className="size-[20px] border-[1.5px] border-[#e3e6ec] rounded-[4px] mt-1 shrink-0" />
            <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] font-bold text-brand-primary">Area Inspected</span>
              <span className="text-[14px] text-brand-secondary">The work area has been checked for fire/safety hazards post-work.</span>
            </div>
          </div>
          <div className="border border-[#e3e6ec] rounded-[6px] p-[16px] flex items-start gap-[12px]">
            <div className="size-[20px] border-[1.5px] border-[#e3e6ec] rounded-[4px] mt-1 shrink-0" />
            <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] font-bold text-brand-primary">Tools & Waste Removed</span>
              <span className="text-[14px] text-brand-secondary">All equipment has been cleared and waste disposed of correctly.</span>
            </div>
          </div>
          <div className="border border-[#e3e6ec] rounded-[6px] p-[16px] flex items-start gap-[12px]">
            <div className="size-[20px] border-[1.5px] border-[#e3e6ec] rounded-[4px] mt-1 shrink-0" />
            <div className="flex flex-col gap-[4px]">
              <span className="text-[14px] font-bold text-brand-primary">Safety Systems Restored</span>
              <span className="text-[14px] text-brand-secondary">Isolations removed and fire detection systems re-enabled.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Close-out Evidence Upload */}
      <div className="bg-white border border-[#e3e6ec] rounded-[12px] drop-shadow-[0px_4px_10px_rgba(0,0,0,0.02)] px-[25px] pt-[41px] pb-[25px] flex flex-col gap-[24px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[8px]">
            <UploadCloud className="size-[20px] text-brand-primary" />
            <h3 className="text-[20px] font-bold text-brand-primary">Close-out Evidence Upload</h3>
          </div>
          <Button className="bg-brand-primary text-white font-bold text-[12px] h-[34px] px-[16px] rounded-[6px] hover:bg-opacity-90">
            Upload Close Out Evidence
          </Button>
        </div>

        <div className="flex flex-col gap-[12px]">
          <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px] p-[13px] flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <div className="size-[48px] bg-[#fbf8fc] border border-[#e0e5f2] rounded-[4px] flex items-center justify-center shrink-0 overflow-hidden">
                <FileImage className="size-[24px] text-brand-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-brand-primary">Area_Clear_Photo_1.jpg</span>
                <span className="text-[14px] text-brand-secondary">1.2 MB • Uploaded 2 mins ago</span>
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <button className="size-[28px] rounded-[4px] flex items-center justify-center hover:bg-gray-200">
                <EyeIcon className="size-[16px] text-brand-primary" />
              </button>
              <button className="size-[28px] rounded-[4px] flex items-center justify-center hover:bg-gray-200">
                <Trash2 className="size-[16px] text-red-500" />
              </button>
            </div>
          </div>
          
          <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px] p-[13px] flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <div className="size-[48px] bg-[#fbf8fc] border border-[#e0e5f2] rounded-[4px] flex items-center justify-center shrink-0 overflow-hidden">
                <FileImage className="size-[24px] text-brand-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-brand-primary">Isolation_Check_Panel.jpg</span>
                <span className="text-[14px] text-brand-secondary">2.5 MB • Uploaded 1 min ago</span>
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <button className="size-[28px] rounded-[4px] flex items-center justify-center hover:bg-gray-200">
                <EyeIcon className="size-[16px] text-brand-primary" />
              </button>
              <button className="size-[28px] rounded-[4px] flex items-center justify-center hover:bg-gray-200">
                <Trash2 className="size-[16px] text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Permit Closed By Form */}
      <div className="bg-white border-[1.5px] border-brand-light-grey rounded-[10px] px-[33px] py-[30px] flex flex-col gap-[16px]">
        
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] text-brand-primary">Permit Closed By</label>
          <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] h-[51px] flex items-center justify-between cursor-pointer">
            <span className="text-[14px] text-[#a3acba]">Select individual...</span>
            <ChevronDown className="size-[18px] text-brand-primary" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <label className="text-[14px] text-brand-primary">Date & Time</label>
            <input 
              type="text" 
              placeholder="mm/dd/yyyy"
              className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] h-[51px] text-[14px] placeholder:text-[#a3acba] focus:outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[14px] text-brand-primary">digital Signature</label>
            <div className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] h-[51px] flex items-center justify-between cursor-pointer">
              <span className="text-[14px] text-[#a3acba]">Click to sign electronically...</span>
              <PenTool className="size-[18px] text-brand-primary" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] text-brand-primary">Additional Close-Out Notes</label>
          <textarea 
            placeholder="Enter any handover details, remaining risks, or observations..."
            className="border-[1.5px] border-[#e3e6ec] rounded-[6px] px-[16px] py-[12px] h-[78px] text-[14px] placeholder:text-[#a3acba] focus:outline-none w-full resize-none"
          />
        </div>

        <div className="bg-[#e4ebfe] border border-[#adc6ff]/50 rounded-[8px] p-[17px] flex items-start gap-[16px] mt-2">
          <div className="size-[20px] bg-white border border-[#e3e6ec] rounded-[4px] shrink-0 mt-0.5 cursor-pointer" />
          <p className="text-[14px] text-brand-primary leading-[1.6]">
            I declare that the work is complete, the area is safe, and I am formally closing this permit.
          </p>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="flex items-center justify-between pt-[10px]">
        <div className="flex gap-[16px]">
          <Button 
            variant="outline"
            className="h-[34px] w-[90px] border-brand-primary text-brand-primary font-bold text-[12px]"
          >
            Save Draft
          </Button>
          <Button 
            className="h-[34px] w-[110px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90"
          >
            Generate PDF
          </Button>
        </div>
        <div className="flex gap-[16px]">
          <Button 
            variant="outline"
            className="h-[34px] w-[116px] border-brand-primary text-brand-primary font-bold text-[12px]"
          >
            Preview Permit
          </Button>
          <Button 
            className="h-[34px] w-[132px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90"
          >
            Submit for Review
          </Button>
        </div>
      </div>

    </div>
  );
}
