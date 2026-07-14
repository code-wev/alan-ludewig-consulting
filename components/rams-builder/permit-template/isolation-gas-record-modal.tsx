"use client";

import React, { useEffect, useState } from "react";
import { X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

import { ElectricalIsolationTab } from "./safety-record-tabs/electrical-isolation-tab";
import { GasTestRecordTab } from "./safety-record-tabs/gas-test-record-tab";
import { LockoutTagoutTab } from "./safety-record-tabs/lockout-tagout-tab";
import { WorkingAtHeightTab } from "./safety-record-tabs/working-at-height-tab";

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
            {activeTab === "electrical" && <ElectricalIsolationTab />}
            {activeTab === "gas" && <GasTestRecordTab />}
            {activeTab === "lockout" && <LockoutTagoutTab />}
            {activeTab === "height" && <WorkingAtHeightTab />}
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
