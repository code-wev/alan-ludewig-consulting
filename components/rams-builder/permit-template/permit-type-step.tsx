"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Flame,
  DoorOpen,
  ArrowUpDown,
  Construction,
  Zap,
  FileText,
  Plus,
  Check,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CreateCustomPermitModal } from "./create-custom-permit-modal";

interface PermitTypeStepProps {
  onNext: () => void;
}

type PermitType =
  | "Hot Works"
  | "Confined Space"
  | "Work at Height"
  | "Excavation"
  | "Electrical Isolation"
  | "General Permit"
  | "Custom";

const PERMIT_OPTIONS = [
  {
    id: "Hot Works",
    title: "Hot Works Permit",
    descLine1: "Welding, cutting, or grinding activities",
    descLine2: "creating heat/sparks.",
    icon: Flame,
    iconBg: "bg-[#ffedd5]",
    iconColor: "text-[#f97316]", // orange-500
    insight:
      "Hot Works involves welding or grinding activities creating heat or sparks. This will activate fire safety and spark containment controls in Step 3.",
  },
  {
    id: "Confined Space",
    title: "Confined Space Permit",
    descLine1: "Entry into tanks, vessels, or poorly",
    descLine2: "ventilated spaces.",
    icon: DoorOpen,
    iconBg: "bg-[#dbeafe]",
    iconColor: "text-[#3b82f6]", // blue-500
    insight:
      "Confined Space entry requires atmospheric testing and a rescue plan. Controls for gas monitoring will be added to Step 3.",
  },
  {
    id: "Work at Height",
    title: "Work at Height Permit",
    descLine1: "Working on scaffolding, roofs, or",
    descLine2: "elevated platforms.",
    icon: ArrowUpDown,
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#10b981]", // green-500
    insight:
      "Work at Height triggers mandatory fall protection and edge protection reviews in the hazard assessment.",
  },
  {
    id: "Excavation",
    title: "Excavation Permit",
    descLine1: "Ground breaking activities including",
    descLine2: "trenches and pits.",
    icon: Construction,
    iconBg: "bg-[#fef9c3]",
    iconColor: "text-[#eab308]", // yellow-500
    insight:
      "Excavation permits require underground service checks and shoring details. These sections will appear in upcoming steps.",
  },
  {
    id: "Electrical Isolation",
    title: "Electrical Isolation Permit",
    descLine1: "Lock-out tag-out of electrical systems",
    descLine2: "and circuitry.",
    icon: Zap,
    iconBg: "bg-[#f3e8ff]",
    iconColor: "text-[#a855f7]", // purple-500
    insight:
      "Electrical Isolation will prompt you for LOTO (Lock-out/Tag-out) procedures and designated authorized persons in Step 4.",
  },
  {
    id: "General Permit",
    title: "General Permit to Work",
    descLine1: "Standard controlled activities not",
    descLine2: "covered by specialists.",
    icon: FileText,
    iconBg: "bg-[#f3f4f6]",
    iconColor: "text-[#6b7280]", // gray-500
    insight:
      "General Permit to Work allows you to build a custom set of hazard controls without prescriptively forcing specific modules.",
  },
];

export function PermitTypeStep({ onNext }: PermitTypeStepProps) {
  const [selectedPermit, setSelectedPermit] = useState<PermitType | null>(
    "Hot Works",
  );
  const [isCustomPermitModalOpen, setIsCustomPermitModalOpen] = useState(false);

  const selectedInsight = PERMIT_OPTIONS.find(
    (p) => p.id === selectedPermit,
  )?.insight;

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-300 w-full font-['Sansation']">
      <div className="bg-white p-4 rounded-lg">
        {/* Grid of Permit Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          {PERMIT_OPTIONS.map((permit) => {
            const isSelected = selectedPermit === permit.id;
            const Icon = permit.icon;

            return (
              <div
                key={permit.id}
                onClick={() => setSelectedPermit(permit.id as PermitType)}
                className={cn(
                  "p-[25px] rounded-[12px] flex flex-col gap-2 relative cursor-pointer transition-all duration-200",
                  isSelected
                    ? "border-2 border-brand-primary bg-[#eff6ff]/30 shadow-sm p-[24px]"
                    : "border border-[#e3e6ec] bg-white hover:border-brand-primary/50 hover:bg-[#f8f9fc]/50",
                )}
              >
                <div className="flex items-start justify-between mb-2">
                  <div
                    className={cn(
                      "size-12 rounded-[8px] flex items-center justify-center shrink-0",
                      permit.iconBg,
                    )}
                  >
                    <Icon className={cn("size-5", permit.iconColor)} />
                  </div>
                  {isSelected && (
                    <div className="size-6 bg-brand-primary rounded-full flex items-center justify-center shrink-0">
                      <Check className="size-3.5 text-white" strokeWidth={3} />
                    </div>
                  )}
                </div>

                <h3 className="text-[16px] font-bold text-brand-primary mt-1">
                  {permit.title}
                </h3>
                <div className="text-[14px] text-brand-secondary leading-[1.6]">
                  <p>{permit.descLine1}</p>
                  <p>{permit.descLine2}</p>
                </div>
              </div>
            );
          })}

          {/* Add Custom Permit Card */}
          <div
            onClick={() => setIsCustomPermitModalOpen(true)}
            className="px-[25px] py-[27px] rounded-[12px] border border-[#e3e6ec] border-dashed bg-white flex flex-col items-center justify-center min-h-[160px] cursor-pointer hover:bg-[#f3f5f8]/50 transition-colors"
          >
            <div className="size-12 rounded-full border border-[#c6c5cf] bg-white flex items-center justify-center mb-4">
              <Plus className="size-5 text-brand-primary" />
            </div>
            <h3 className="text-[16px] font-bold text-brand-primary mb-1">
              Add Custom Permit
            </h3>
            <p className="text-[14px] text-brand-secondary">
              Opens configuration modal
            </p>
          </div>
        </div>

        {/* Selection Insight Box */}
        <div className="bg-[#f3f5f8] rounded-[12px] p-6 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <Lightbulb className="size-[18px] text-brand-primary" />
            </div>
            <h3 className="text-[16px] font-bold text-brand-primary">
              Selection Insight
            </h3>
          </div>
          <p className="text-[14px] text-brand-secondary leading-[1.6]">
            {selectedInsight ||
              "Select a permit type to view configuration details."}
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center gap-3 mt-4">
        <Button
          variant="outline"
          className="h-[34px] px-4 rounded-[6px] border-[#e3e6ec] text-brand-primary font-bold text-[13px] hover:bg-[#f8f9fc]"
        >
          Save Draft
        </Button>
        <Button
          onClick={onNext}
          className="h-[34px] px-4 rounded-[6px] bg-brand-primary text-white font-bold text-[13px] hover:bg-[#0f1d3e]"
          disabled={!selectedPermit}
        >
          Next: Job / Site Details
        </Button>
      </div>

      <CreateCustomPermitModal 
        isOpen={isCustomPermitModalOpen}
        onClose={() => setIsCustomPermitModalOpen(false)}
        onSave={() => {
          setSelectedPermit("Custom");
          setIsCustomPermitModalOpen(false);
        }}
      />
    </div>
  );
}
