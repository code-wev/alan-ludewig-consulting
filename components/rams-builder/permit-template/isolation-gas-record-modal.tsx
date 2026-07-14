"use client";

import React, { useEffect, useState } from "react";
import {
  X,
  ShieldCheck,
  ChevronDown,
  Upload,
  Camera,
  CheckCircle2,
  Check,
  BarChart2,
  Gavel,
  CameraIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface IsolationGasRecordModalProps {
  onClose: () => void;
  initialTab?: string;
}

export function IsolationGasRecordModal({
  onClose,
  initialTab = "electrical",
}: IsolationGasRecordModalProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/70 backdrop-blur-sm p-4 font-['Sansation']">
      {/* Modal Container */}
      <div className="bg-white rounded-[12px] w-full max-w-[1000px] max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-brand-secondary hover:text-brand-primary transition-colors"
        >
          <X className="size-6" />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col no-scrollbar">
          {/* Header */}
          <div className="flex flex-col gap-4 p-8 pb-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-7 text-[#0453cd]" strokeWidth={2} />
              <h2 className="text-[24px] font-bold text-brand-primary leading-[1.2]">
                Safety Record Entry
              </h2>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-[14px] text-brand-secondary">
                Document specific control measures for
              </span>
              <span className="px-2 py-0.5 bg-[#f3f5f8] rounded-[4px] text-[12px] font-bold text-brand-primary border border-[#e3e6ec]">
                PTW-2023-8821
              </span>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 mt-4 bg-[#f3f5f8] p-1.5 rounded-[8px] w-fit">
              <button
                onClick={() => setActiveTab("electrical")}
                className={`px-4 py-2 rounded-[6px] text-[14px] font-bold transition-colors ${
                  activeTab === "electrical"
                    ? "bg-white shadow-sm text-brand-primary"
                    : "text-brand-secondary hover:text-brand-primary"
                }`}
              >
                Electrical Isolation
              </button>
              <button
                onClick={() => setActiveTab("gas")}
                className={`px-4 py-2 rounded-[6px] text-[14px] font-bold transition-colors ${
                  activeTab === "gas"
                    ? "bg-white shadow-sm text-brand-primary"
                    : "text-brand-secondary hover:text-brand-primary"
                }`}
              >
                Gas Test / Atmosphere
              </button>
              <button
                onClick={() => setActiveTab("lockout")}
                className={`px-4 py-2 rounded-[6px] text-[14px] font-bold transition-colors ${
                  activeTab === "lockout"
                    ? "bg-white shadow-sm text-brand-primary"
                    : "text-brand-secondary hover:text-brand-primary"
                }`}
              >
                Lockout / Tagout
              </button>
              <button
                onClick={() => setActiveTab("height")}
                className={`px-4 py-2 rounded-[6px] text-[14px] font-bold transition-colors ${
                  activeTab === "height"
                    ? "bg-white shadow-sm text-brand-primary"
                    : "text-brand-secondary hover:text-brand-primary"
                }`}
              >
                Working at Height
              </button>
            </div>
          </div>

          <div className="px-8 flex flex-col gap-8 pb-8">
            {activeTab === "electrical" && (
              <div className="flex flex-col gap-8">
                {/* Section 1: Isolation Point Details */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-[4px] h-[24px] bg-brand-primary rounded-r-[4px]" />
                    <h3 className="text-[18px] font-bold text-brand-primary leading-[1.2]">
                      Isolation Point Details
                    </h3>
                  </div>

                  <div className="flex flex-col gap-6">
                    {/* Grid 1: Reference, Equipment, Location, Method */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[14px] font-bold text-brand-primary">
                          Reference Number
                        </label>
                        <input
                          type="text"
                          defaultValue="ISO-EL-2023-441"
                          className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[14px] font-bold text-brand-primary">
                          Equipment Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. HV Main Cabinet A4"
                          className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary placeholder:text-[#a0abxc] focus:outline-none focus:border-brand-primary"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[14px] font-bold text-brand-primary">
                          Location / Zone
                        </label>
                        <input
                          type="text"
                          defaultValue="Substation West 02"
                          className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[14px] font-bold text-brand-primary">
                          Method of Isolation
                        </label>
                        <div className="relative">
                          <select className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 appearance-none text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary">
                            <option>Circuit Breaker - Locked Open</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Grid 2: Lock Number, Tag Color, Verified Box */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[14px] font-bold text-brand-primary">
                          Lock Number(s)
                        </label>
                        <input
                          type="text"
                          defaultValue="L-9982, L-9983"
                          className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[14px] font-bold text-brand-primary">
                          Tag Color/Serial
                        </label>
                        <input
                          type="text"
                          defaultValue="Red / TAG-4421"
                          className="w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 text-[14px] text-brand-primary focus:outline-none focus:border-brand-primary"
                        />
                      </div>

                      <div className="flex flex-col gap-2 pt-[28px]">
                        <label className="flex items-center gap-3 w-full h-[44px] rounded-[8px] border border-[#e3e6ec] px-4 cursor-pointer">
                          <div className="size-4 rounded-[4px] border border-[#c5c6cd] flex items-center justify-center bg-white" />
                          <span className="text-[14px] font-bold text-brand-primary">
                            Verified De-energized
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Verification Box */}
                    <div className="bg-[#f8fafd] border border-[#e3e6ec] rounded-[8px] p-5 flex flex-col gap-3 relative">
                      <div className="absolute right-5 top-5 px-3 py-1 bg-[#ecfdf3] border border-[#d1fadf] rounded-full flex items-center gap-1.5">
                        <CheckCircle2
                          className="size-3.5 text-[#027a48]"
                          strokeWidth={2.5}
                        />
                        <span className="text-[12px] font-bold text-[#027a48]">
                          Compliance Met
                        </span>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="size-6 bg-brand-primary rounded-[6px] flex items-center justify-center shrink-0 mt-0.5">
                          <Check
                            className="size-4 text-white"
                            strokeWidth={3}
                          />
                        </div>
                        <div className="flex flex-col gap-1 pr-[140px]">
                          <h4 className="text-[15px] font-bold text-brand-primary leading-[1.4]">
                            Verified De-energized
                          </h4>
                          <p className="text-[13px] text-brand-secondary leading-normal">
                            Confirmed zero potential energy using calibrated
                            multimeter at terminals A, B, and C.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Supporting Evidence */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-[4px] h-[24px] bg-brand-primary rounded-r-[4px]" />
                      <h3 className="text-[18px] font-bold text-brand-primary leading-[1.2]">
                        Supporting Evidence
                      </h3>
                    </div>
                    <button className="flex items-center gap-2 text-brand-primary font-bold text-[14px] hover:opacity-80 transition-opacity">
                      <Camera className="size-[18px]" />
                      Add Media
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {/* Upload Box */}
                    <div className="h-[200px] border-2 border-dashed border-[#dce1eb] rounded-[12px] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
                      <Upload
                        className="size-8 text-brand-secondary"
                        strokeWidth={1.5}
                      />
                      <span className="text-[14px] text-brand-secondary font-bold">
                        Upload Photo
                      </span>
                    </div>

                    {/* Image 1 */}
                    <div className="h-[200px] rounded-[12px] overflow-hidden relative border border-[#e3e6ec] group">
                      <Image
                        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80"
                        alt="LOTO"
                        width={800}
                        height={800}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-[#2d3142]/90 p-3">
                        <span className="text-[12px] font-bold text-white">
                          Gas Detector Reading
                        </span>
                      </div>
                    </div>

                    {/* Image 2 */}
                    <div className="h-[200px] rounded-[12px] overflow-hidden relative border border-[#e3e6ec] group">
                      <Image
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                        alt="Detector"
                        width={800}
                        height={800}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-[#2d3142]/90 p-3">
                        <span className="text-[12px] font-bold text-white">
                          Gas Detector Reading
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "gas" && (
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
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 p-6 border-t border-[#e3e6ec] shrink-0 bg-white shadow-[0px_-2px_10px_rgba(0,0,0,0.02)]">
          <Button
            variant="outline"
            className="h-[44px] px-8 rounded-[8px] border-brand-primary text-brand-primary font-bold text-[14px] hover:bg-gray-50"
            onClick={onClose}
          >
            Save Draft
          </Button>
          <Button
            className="h-[44px] px-8 rounded-[8px] bg-brand-primary text-white font-bold text-[14px] hover:bg-opacity-90"
            onClick={onClose}
          >
            Add Review Action
          </Button>
        </div>
      </div>
    </div>
  );
}
