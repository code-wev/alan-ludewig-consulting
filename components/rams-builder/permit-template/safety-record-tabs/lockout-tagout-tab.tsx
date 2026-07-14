import React from "react";
import { Lock, ChevronDown, Check } from "lucide-react";

export function LockoutTagoutTab() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header Section */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Lock className="size-5 text-[#0453cd]" strokeWidth={2.5} />
          <h3 className="text-[18px] font-bold text-brand-primary leading-[1.2]">
            Lockout / Tagout Details
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-secondary">
              Reference
            </label>
            <input
              type="text"
              defaultValue="LOTO-PTW-2023-014"
              className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-secondary">
              Energy Type
            </label>
            <div className="relative">
              <select className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 appearance-none text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary bg-white">
                <option>Electrical (Low Voltage)</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-brand-secondary">
              Lockout Method
            </label>
            <div className="relative">
              <select className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 appearance-none text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary bg-white">
                <option>Individual Padlock & Tag</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Checklist Section */}
      <div className="bg-[#f3f5f8] rounded-[12px] p-6 flex flex-col gap-5">
        <h4 className="text-[16px] font-bold text-brand-primary">
          Energy Isolation Checklist
        </h4>

        <div className="flex flex-col gap-1">
          <label className="flex items-center justify-between py-3 border-b border-[#e3e6ec] cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-bold text-[#8a94a6]">
                01
              </span>
              <span className="text-[14px] text-brand-secondary">
                Identify all energy sources and isolating devices
              </span>
            </div>
            <div className="size-5 rounded-[4px] bg-[#0f214a] flex items-center justify-center">
              <Check
                className="size-3.5 text-white"
                strokeWidth={3}
              />
            </div>
          </label>

          <label className="flex items-center justify-between py-3 border-b border-[#e3e6ec] cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-bold text-[#8a94a6]">
                02
              </span>
              <span className="text-[14px] text-brand-secondary">
                Notify all affected personnel of the planned lockout
              </span>
            </div>
            <div className="size-5 rounded-[4px] bg-[#0f214a] flex items-center justify-center">
              <Check
                className="size-3.5 text-white"
                strokeWidth={3}
              />
            </div>
          </label>

          <label className="flex items-center justify-between py-3 cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-bold text-[#8a94a6]">
                03
              </span>
              <span className="text-[14px] text-brand-secondary">
                Verify that equipment is completely de-energized
              </span>
            </div>
            <div className="size-5 rounded-[4px] border border-[#a1a9b8] bg-white flex items-center justify-center"></div>
          </label>
        </div>
      </div>

      {/* Verification Cards */}
      <div className="grid grid-cols-2 gap-6">
        {/* Responsible Person Card */}
        <div className="bg-[#f3f5f8] rounded-[12px] rounded-l-[4px] border-l-4 border-l-[#0f214a] p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h4 className="text-[16px] font-bold text-brand-primary">
              Responsible Person
            </h4>
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="size-[18px] rounded-[4px] border border-[#a1a9b8] bg-white" />
              <span className="text-[14px] text-brand-secondary">
                Confirmed De-energized
              </span>
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[13px] text-brand-secondary">
              Full Name
            </span>
            <span className="text-[14px] text-brand-primary">
              Michael Henderson
            </span>
          </div>
        </div>

        {/* Verification Card */}
        <div className="bg-[#f3f5f8] rounded-[12px] rounded-l-[4px] border-l-4 border-l-[#0f214a] p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h4 className="text-[16px] font-bold text-brand-primary">
              Verification
            </h4>
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="size-[18px] rounded-[4px] border border-[#a1a9b8] bg-white" />
              <span className="text-[14px] text-brand-secondary">
                Zero Energy State Verified
              </span>
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[13px] text-brand-secondary">
              Verification Timestamp
            </span>
            <span className="text-[14px] text-brand-primary">
              Pending Confirmation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
