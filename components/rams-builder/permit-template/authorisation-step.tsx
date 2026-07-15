"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Target, ShieldCheck } from "lucide-react";

interface AuthorisationStepProps {
  onPrevious: () => void;
  onNext: () => void;
  onAssignPermitIssuer?: () => void;
}

export function AuthorisationStep({ onPrevious, onNext, onAssignPermitIssuer }: AuthorisationStepProps) {
  return (
    <div className="flex flex-col gap-6 w-full font-['Sansation']">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 w-full items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          
          {/* 1. Permit Issuer */}
          <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-6 flex flex-col gap-5 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between border-b border-[#e3e6ec] pb-4">
              <h3 className="text-[18px] font-bold text-brand-primary leading-[1.6]">1. Permit Issuer</h3>
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-[#12b76a] text-white text-[12px] font-bold rounded-[4px]">Approved</span>
                <span 
                  className="text-[13px] font-bold text-brand-primary cursor-pointer hover:underline"
                  onClick={onAssignPermitIssuer}
                >
                  Assign Permit Issuer
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-brand-primary">Full Name</label>
                <input type="text" placeholder="e.g. John Smith" className="h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-brand-primary">Position</label>
                <input type="text" placeholder="e.g. HSE Manager" className="h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-brand-primary">Contractor / Person Carrying Out Work</label>
                <div className="h-[80px] rounded-[6px] border border-dashed border-[#c2c9d6] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-[13px] text-brand-secondary">Click to sign or upload image</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-brand-primary">Date & Time</label>
                <input type="text" placeholder="dd/mm/yyyy" className="h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary" />
              </div>
            </div>
          </div>

          {/* 2. Permit Receiver */}
          <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-6 flex flex-col gap-5 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between border-b border-[#e3e6ec] pb-4">
              <h3 className="text-[18px] font-bold text-brand-primary leading-[1.6]">2. Permit Receiver</h3>
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-brand-primary cursor-pointer hover:underline">Assigned Permit Holder</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-brand-primary">Full Name</label>
                <input type="text" placeholder="e.g. Michael Roe" className="h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-brand-primary">Company</label>
                <input type="text" placeholder="e.g. ABC Contracting Ltd" className="h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-brand-primary">Signature</label>
                <div className="h-[80px] rounded-[6px] border border-dashed border-[#c2c9d6] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-[13px] text-brand-secondary">Click to sign or upload image</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-brand-primary">Date & Time</label>
                <input type="text" placeholder="dd/mm/yyyy" className="h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary" />
              </div>
            </div>
          </div>

          {/* 3. Supervisor Approval */}
          <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-6 flex flex-col gap-5 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between border-b border-[#e3e6ec] pb-4">
              <h3 className="text-[18px] font-bold text-brand-primary leading-[1.6]">3. Supervisor Approval</h3>
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-[#f59e0b] text-white text-[12px] font-bold rounded-[4px]">Assigned</span>
                <span className="text-[13px] font-bold text-brand-primary cursor-pointer hover:underline">Re-assign</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-brand-primary">Supervisor Name</label>
                <input type="text" placeholder="e.g. Michael Roe" className="h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-brand-primary">Position</label>
                <input type="text" placeholder="e.g. ABC Contracting Ltd" className="h-[44px] rounded-[6px] border border-[#e3e6ec] px-3 text-[14px] focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-brand-primary">Signature</label>
                <div className="h-[80px] rounded-[6px] border border-dashed border-[#c2c9d6] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-[13px] text-brand-secondary">Click to sign or upload image</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-brand-primary">Approval Notes / Remarks</label>
                <textarea placeholder="Detailed scope of works to be performed..." className="h-[80px] rounded-[6px] border border-[#e3e6ec] p-3 text-[14px] focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary resize-none" />
              </div>
            </div>
          </div>

          {/* 4. Additional Conditions */}
          <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-6 flex flex-col gap-5 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <h3 className="text-[18px] font-bold text-brand-primary leading-[1.6]">4. Additional Conditions</h3>
            <p className="text-[13px] text-brand-secondary">Enter any specific site rules or additional PPE requirements not covered in the standard RAMS document.</p>
            <textarea placeholder="Describe additional safety measures or constraints..." className="h-[100px] w-full rounded-[6px] border border-[#e3e6ec] p-3 text-[14px] focus:outline-none focus:border-brand-primary placeholder:text-[#a1a9b8] resize-none" />
            
            <label className="flex items-center gap-3 bg-[#eff4ff] border border-[#d6e4ff] rounded-[8px] p-4 cursor-pointer mt-2 group">
              <div className="size-5 rounded-[4px] border-2 border-[#b5c7ed] bg-white group-hover:border-brand-primary transition-colors flex items-center justify-center shrink-0"></div>
              <span className="text-[13px] text-brand-primary font-bold">I confirm that I have verified the identities of all signees and that the work environment has been inspected and deemed safe.</span>
            </label>
          </div>

        </div>

        {/* Right Column (Sidebar) */}
        <div className="flex flex-col gap-6">
          
          {/* Permit Progress */}
          <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-6 flex flex-col gap-5 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between border-b border-[#e3e6ec] pb-4">
              <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6]">Permit Progress</h3>
              <span className="text-[16px] font-bold text-brand-primary">66%</span>
            </div>
            
            <div className="w-full bg-[#f3f5f8] h-2 rounded-full overflow-hidden mb-2">
              <div className="bg-[#0f214a] h-full rounded-full" style={{ width: '66%' }}></div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-[18px] text-[#12b76a]" strokeWidth={2.5} />
                <span className="text-[13px] text-brand-secondary">Project Details</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-[18px] text-[#12b76a]" strokeWidth={2.5} />
                <span className="text-[13px] text-brand-secondary">Work Activities</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-[18px] text-[#12b76a]" strokeWidth={2.5} />
                <span className="text-[13px] text-brand-secondary">Hazards & Controls</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="size-[18px] text-[#0453cd]" strokeWidth={2.5} />
                <span className="text-[13px] font-bold text-brand-primary">Authorisation</span>
              </div>
              <div className="flex items-center gap-3">
                <Circle className="size-[18px] text-[#c2c9d6]" strokeWidth={2.5} />
                <span className="text-[13px] text-brand-secondary">Validity Period</span>
              </div>
            </div>
          </div>

          {/* Authorization Guidance */}
          <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-6 flex flex-col gap-6 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <h3 className="text-[16px] font-bold text-brand-primary leading-[1.6] border-b border-[#e3e6ec] pb-4">Authorization Guidance</h3>
            
            <div className="flex flex-col gap-1.5">
              <h4 className="text-[13px] font-bold text-brand-primary">Permit Issuer</h4>
              <p className="text-[12px] text-brand-secondary leading-[1.6]">Must be a person authorised by the site management to issue permits. They are responsible for ensuring the work site is ready and all isolation is in place.</p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h4 className="text-[13px] font-bold text-brand-primary">Permit Receiver</h4>
              <p className="text-[12px] text-brand-secondary leading-[1.6]">The person in direct charge of the work. By signing, they accept responsibility for the safety of the work crew and adherence to controls.</p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h4 className="text-[13px] font-bold text-brand-primary">Supervisor</h4>
              <p className="text-[12px] text-brand-secondary leading-[1.6]">Required for high-risk activities. The supervisor provides an independent check of the safety measures in place before work starts.</p>
            </div>

            <div className="bg-[#0f214a] rounded-[8px] p-4 flex gap-3 mt-2 text-white">
              <ShieldCheck className="size-4 shrink-0 mt-0.5 text-white opacity-80" strokeWidth={2} />
              <div className="flex flex-col gap-2">
                <span className="text-[13px] font-bold">Audit Trail</span>
                <span className="text-[11px] leading-normal text-white/80">This permit will generate a unique hash upon completion to ensure non-repudiation of signatures.</span>
                <span className="text-[10px] font-mono mt-1 text-white/50 break-all">SHA-256: 8f3c...b2ef</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" className="h-[34px] min-w-[100px] rounded-[6px] border-brand-primary text-brand-primary font-bold text-[12px] hover:bg-gray-50" onClick={onPrevious}>
            Save Draft
          </Button>
          <Button className="h-[34px] min-w-[150px] rounded-[6px] bg-brand-primary text-white font-bold text-[12px] hover:bg-opacity-90" onClick={onNext}>
            Next: Validity Period
          </Button>
        </div>
        <Button variant="outline" className="h-[34px] rounded-[6px] border-brand-primary text-brand-primary font-bold text-[12px] px-6 hover:bg-gray-50">
          Request Permit Approval
        </Button>
      </div>

    </div>
  );
}
