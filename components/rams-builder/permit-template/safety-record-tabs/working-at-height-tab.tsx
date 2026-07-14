import React from "react";
import { ArrowUpDown, ChevronDown, Check, Upload, Info } from "lucide-react";
import Image from "next/image";

export function WorkingAtHeightTab() {
  return (
    <div className="grid grid-cols-[1fr_340px] gap-8">
      {/* Left Column */}
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-[6px] bg-[#e0e7ff] flex items-center justify-center">
              <ArrowUpDown
                className="size-[18px] text-[#0453cd]"
                strokeWidth={2.5}
              />
            </div>
            <h3 className="text-[18px] font-bold text-brand-primary leading-[1.2]">
              Working at Height Safety Check
            </h3>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white border border-[#e3e6ec] rounded-[8px] p-4 flex flex-col gap-2">
              <span className="text-[12px] text-brand-secondary">
                Reference
              </span>
              <span className="text-[14px] text-brand-primary leading-[1.4]">
                WAH-PTW-
                <br />
                2023-118
              </span>
            </div>
            <div className="bg-white border border-[#e3e6ec] rounded-[8px] p-4 flex flex-col gap-2">
              <span className="text-[12px] text-brand-secondary">
                Location
              </span>
              <span className="text-[14px] text-brand-primary leading-[1.4]">
                North Wing -<br />
                Sector 4
              </span>
            </div>
            <div className="bg-white border border-[#e3e6ec] rounded-[8px] p-4 flex flex-col gap-2">
              <span className="text-[12px] text-brand-secondary">
                Height
              </span>
              <span className="text-[14px] text-brand-primary leading-[1.4]">
                8.0m
              </span>
            </div>
            <div className="bg-white border border-[#e3e6ec] rounded-[8px] p-4 flex flex-col gap-2">
              <span className="text-[12px] text-brand-secondary">
                Access Method
              </span>
              <span className="text-[14px] text-brand-primary leading-[1.4]">
                Scaffolding
              </span>
            </div>
          </div>
        </div>

        {/* Fall Protection Arrangements */}
        <div className="flex flex-col rounded-[12px] border border-[#e3e6ec] overflow-hidden">
          <div className="bg-brand-primary px-6 py-4">
            <h4 className="text-[15px] font-bold text-white">
              Fall Protection Arrangements
            </h4>
          </div>
          <div className="bg-white p-6 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-secondary">
                  Primary Fall Prevention Method
                </label>
                <div className="relative">
                  <select className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 appearance-none text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary bg-white">
                    <option>Guardrails / Edge Protection</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-secondary">
                  Certified Anchor Point
                </label>
                <input
                  type="text"
                  defaultValue="AP-NW4-882"
                  className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            <div className="bg-[#f8fafd] rounded-[8px] border border-[#e3e6ec] p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-6 bg-[#12b76a] rounded-full flex items-center justify-center">
                  <Check
                    className="size-3.5 text-white"
                    strokeWidth={3}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-bold text-brand-primary">
                    Harness Inspection Status
                  </span>
                  <span className="text-[12px] text-brand-secondary">
                    Validated for user: J. DOE (ID: 9928)
                  </span>
                </div>
              </div>
              <div className="px-3 py-1 bg-[#12b76a] rounded-full">
                <span className="text-[12px] font-bold text-white">
                  Compliant
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Checklists and Observations */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-[14px] font-bold text-brand-primary">
              Work At Height Checklist
            </label>
            <textarea
              placeholder="Confirm all safety checks performed..."
              className="w-full h-[120px] rounded-[8px] border border-[#e3e6ec] p-4 text-[14px] text-brand-primary placeholder:text-[#a0abxc] focus:outline-none focus:border-brand-primary resize-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[14px] font-bold text-brand-primary">
              Safety Observations
            </label>
            <textarea
              placeholder="Note any specific hazards or conditions encountered..."
              className="w-full h-[120px] rounded-[8px] border border-[#e3e6ec] p-4 text-[14px] text-brand-primary placeholder:text-[#a0abxc] focus:outline-none focus:border-brand-primary resize-none"
            />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        {/* Supporting Evidence */}
        <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h4 className="text-[16px] font-bold text-brand-primary">
              Supporting Evidence
            </h4>
            <button className="flex items-center gap-1.5 text-[#0453cd] font-bold text-[12px] hover:opacity-80 transition-opacity">
              <Upload className="size-[14px]" />
              UPLOAD
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="h-[90px] rounded-[8px] overflow-hidden border border-[#e3e6ec]">
                <Image
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80"
                  alt="Tag"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[90px] rounded-[8px] overflow-hidden border border-[#e3e6ec]">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
                  alt="Harness"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="h-[160px] rounded-[8px] overflow-hidden border border-[#e3e6ec]">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356f12?w=800&q=80"
                alt="Scaffold"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Compliance Reminder */}
        <div className="bg-[#c2caff] rounded-[12px] p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Info
              className="size-[18px] text-brand-primary"
              strokeWidth={2}
            />
            <h4 className="text-[14px] font-bold text-brand-primary">
              Compliance Reminder
            </h4>
          </div>
          <p className="text-[13px] text-brand-secondary leading-[1.6]">
            All Fall Arrest equipment must be inspected prior to
            entry. Records must be synchronized with the central asset
            register (Comply Pro) within 2 hours of entry.
          </p>
        </div>

        {/* Record Progress */}
        <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-5 flex flex-col gap-6">
          <h4 className="text-[16px] font-bold text-brand-primary">
            Record Progress
          </h4>

          <div className="flex flex-col relative">
            {/* Line connecting nodes */}
            <div className="absolute left-[5px] top-[8px] bottom-[24px] w-[2px] bg-[#f3f5f8]" />

            <div className="flex items-start gap-4 pb-6 relative z-10">
              <div className="size-3 rounded-full bg-[#12b76a] mt-1 shrink-0 ring-4 ring-white" />
              <div className="flex flex-col gap-1">
                <span className="text-[13px] text-brand-secondary">
                  Draft Created
                </span>
                <span className="text-[12px] text-[#8a94a6]">
                  Today, 09:12 AM by A. Ludewig
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-6 relative z-10">
              <div className="size-3 rounded-full bg-[#0453cd] mt-1 shrink-0 ring-4 ring-white" />
              <div className="flex flex-col gap-1">
                <span className="text-[13px] text-brand-secondary">
                  Control Measures
                </span>
                <span className="text-[12px] text-[#8a94a6]">
                  In Progress - Current User
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 relative z-10">
              <div className="size-3 rounded-full bg-[#dce1eb] mt-1 shrink-0 ring-4 ring-white" />
              <div className="flex flex-col gap-1">
                <span className="text-[13px] text-[#b3b9c7]">
                  Final Review
                </span>
                <span className="text-[12px] text-[#dce1eb]">
                  Pending Submission
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
