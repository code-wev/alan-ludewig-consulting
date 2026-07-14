import React from "react";
import { BarChart2, Gavel, ChevronDown, CameraIcon } from "lucide-react";
import Image from "next/image";

export function GasTestRecordTab() {
  return (
    <div className="flex flex-col gap-8">
      {/* Section 1: Atmospheric Test Details */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <BarChart2
            className="size-5 text-brand-primary"
            strokeWidth={2}
          />
          <h3 className="text-[16px] font-bold text-brand-primary leading-[1.2]">
            Atmospheric Test Details
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#f3f5f8] rounded-[8px] p-4 flex flex-col gap-1">
            <span className="text-[12px] text-brand-secondary">
              Reference
            </span>
            <span className="text-[14px] font-bold text-brand-primary">
              GAS-PTW-2023-441
            </span>
          </div>
          <div className="bg-[#f3f5f8] rounded-[8px] p-4 flex flex-col gap-1">
            <span className="text-[12px] text-brand-secondary">
              Location
            </span>
            <span className="text-[14px] font-bold text-brand-primary">
              Tank 04 access hatch
            </span>
          </div>
          <div className="bg-[#f3f5f8] rounded-[8px] p-4 flex flex-col gap-1">
            <span className="text-[12px] text-brand-secondary">
              Name
            </span>
            <span className="text-[14px] font-bold text-brand-primary">
              James Wilson
            </span>
          </div>
          <div className="bg-[#f3f5f8] rounded-[8px] p-4 flex flex-col gap-1">
            <span className="text-[12px] text-brand-secondary">
              Competency
            </span>
            <span className="text-[14px] font-bold text-brand-primary">
              GT-2204
            </span>
          </div>
        </div>
      </div>

      {/* Section 2: Atmospheric Readings */}
      <div className="border border-[#e3e6ec] rounded-[12px] overflow-hidden flex flex-col">
        <div className="bg-brand-primary px-6 py-4">
          <h4 className="text-[15px] font-bold text-white">
            Atmospheric Readings
          </h4>
        </div>
        <div className="grid grid-cols-5 bg-[#d6e9ff] px-6 py-3 border-b border-[#e3e6ec]">
          <span className="text-[13px] font-bold text-brand-primary">
            Gas Type
          </span>
          <span className="text-[13px] font-bold text-brand-primary">
            Unit
          </span>
          <span className="text-[13px] font-bold text-brand-primary">
            Save Range
          </span>
          <span className="text-[13px] font-bold text-brand-primary">
            Measured
          </span>
          <span className="text-[13px] font-bold text-brand-primary">
            Result
          </span>
        </div>
        <div className="grid grid-cols-5 px-6 py-5 border-b border-[#e3e6ec] items-center">
          <span className="text-[14px] text-brand-secondary">
            Oxygen (O2)
          </span>
          <span className="text-[14px] text-brand-secondary">
            % Vol
          </span>
          <span className="text-[14px] text-brand-secondary">
            19.5 - 23.5
          </span>
          <span className="text-[14px] text-brand-secondary">
            20.9
          </span>
          <div>
            <span className="px-3 py-1 bg-[#12b76a] text-white text-[12px] font-bold rounded-[6px]">
              Pass
            </span>
          </div>
        </div>
        <div className="grid grid-cols-5 px-6 py-5 items-center">
          <span className="text-[14px] text-brand-secondary">
            Flammable Gas (LEL)
          </span>
          <span className="text-[14px] text-brand-secondary">
            % LEL
          </span>
          <span className="text-[14px] text-brand-secondary">
            &lt; 10%
          </span>
          <span className="text-[14px] text-brand-secondary">0%</span>
          <div>
            <span className="px-3 py-1 bg-[#12b76a] text-white text-[12px] font-bold rounded-[6px]">
              Pass
            </span>
          </div>
        </div>
      </div>

      {/* Section 3: Split Columns */}
      <div className="grid grid-cols-2 gap-8">
        {/* Test Decision */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Gavel
              className="size-5 text-brand-primary"
              strokeWidth={2}
            />
            <h3 className="text-[16px] font-bold text-brand-primary leading-[1.2]">
              Test Decision
            </h3>
          </div>
          <div className="bg-[#f3f5f8] rounded-[12px] p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-secondary">
                Final Test Result
              </label>
              <div className="relative">
                <select className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] bg-white px-4 appearance-none text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary">
                  <option>Safe for Entry</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-brand-secondary">
                Retest Frequency
              </label>
              <div className="relative">
                <select className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] bg-white px-4 appearance-none text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary">
                  <option>Every 2 Hours</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
              </div>
            </div>
            <span className="text-[13px] text-brand-secondary">
              Atmosphere tested and verified as per protocol
            </span>
          </div>
        </div>

        {/* Supporting Evidence */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <CameraIcon
              className="size-5 text-brand-primary"
              strokeWidth={2}
            />
            <h3 className="text-[16px] font-bold text-brand-primary leading-[1.2]">
              Supporting Evidence
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Image 1 */}
            <div className="h-[120px] rounded-[12px] overflow-hidden relative border border-[#e3e6ec]">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Detector"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#2d3142]/90 p-2">
                <span className="text-[11px] font-bold text-white">
                  Gas Detector Reading
                </span>
              </div>
            </div>

            {/* Image 2 */}
            <div className="h-[120px] rounded-[12px] overflow-hidden relative border border-[#e3e6ec]">
              <Image
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80"
                alt="Entry Point"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#2d3142]/90 p-2">
                <span className="text-[11px] font-bold text-white">
                  Tank 04 Entry Point
                </span>
              </div>
            </div>

            {/* Add Evidence */}
            <div className="h-[120px] border-2 border-dashed border-[#dce1eb] rounded-[12px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors">
              <CameraIcon
                className="size-6 text-brand-secondary"
                strokeWidth={1.5}
              />
              <span className="text-[13px] text-brand-secondary font-bold">
                Add Evidence
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
