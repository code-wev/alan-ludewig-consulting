"use client";

import { 
  Building, 
  Home, 
  Zap, 
  Hammer, 
  Activity, 
  Trash2, 
  Paintbrush, 
  Droplet, 
  Scissors, 
  Layers, 
  Grid, 
  Flame, 
  MoreHorizontal,
  Lightbulb,
  FileSpreadsheet
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WORK_TYPE_CARDS, type WorkTypeCard, type RiskAssessmentJobDetails } from "./types";
import { cn } from "@/lib/utils";

interface StepWorkTypeProps {
  selectedWorkTypeId: string | null;
  jobDetails: RiskAssessmentJobDetails;
  onSelectWorkType: (id: string) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
}

const iconMap: Record<string, any> = {
  Building,
  Home,
  Zap,
  Hammer,
  Activity,
  Trash2,
  Paintbrush,
  Droplet,
  Scissors,
  Layers,
  Grid,
  Flame,
  MoreHorizontal,
};

export function StepWorkType({
  selectedWorkTypeId,
  jobDetails,
  onSelectWorkType,
  onSaveDraft,
  onNextStep,
  onPrevStep,
}: StepWorkTypeProps) {

  return (
    <div className="space-y-8 font-sans w-full">
      {/* Step Header */}
      <div className="space-y-1">
        <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">
          Step 2 — Work Type
        </h2>
        <p className="text-[14px] text-brand-secondary leading-[1.6]">
          Select the primary work activity. This will help load relevant tasks, hazards, and control measures for your RAMS document.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        {/* Selection Grid */}
        <div className="xl:col-span-2 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {WORK_TYPE_CARDS.map((card) => {
              const IconComp = iconMap[card.iconName] || MoreHorizontal;
              const isSelected = selectedWorkTypeId === card.title || selectedWorkTypeId === card.id;

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => onSelectWorkType(card.title)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-3 p-6 rounded-[12px] border-[1.5px] bg-white transition-all text-center h-[120px] hover:border-brand-primary hover:shadow-[0_2px_4px_rgba(19,38,81,0.05)]",
                    isSelected 
                      ? "border-brand-primary ring-2 ring-brand-primary/10 shadow-[0_2px_8px_rgba(19,38,81,0.08)]" 
                      : "border-[#e3e6ec]"
                  )}
                >
                  <div className={cn(
                    "p-2.5 rounded-lg",
                    isSelected ? "bg-brand-primary text-white" : "bg-[#f3f5f8] text-[#5a6886]"
                  )}>
                    <IconComp className="size-5" />
                  </div>
                  <span className="text-[13px] font-bold text-brand-primary leading-tight">
                    {card.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sidebar Info Panels */}
        <div className="xl:col-span-1 space-y-6">
          {/* Smart Loading Info Card */}
          <div className="rounded-[12px] border border-[#e3e6ec] bg-white p-5 flex items-start gap-4 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
            <div className="p-2 rounded-lg bg-[#EFF6FF] text-[#1D4ED8] shrink-0">
              <Lightbulb className="size-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-[14px] font-bold text-brand-primary">Smart Loading</h4>
              <p className="text-[12px] text-brand-secondary leading-[1.6]">
                You can still edit suggested tasks, hazards, controls and PPE in later steps.
              </p>
            </div>
          </div>

          {/* Project Preview Info Card */}
          <div className="rounded-[12px] border border-[#e3e6ec] bg-white p-5 space-y-4 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
            <div className="flex items-center gap-2 border-b border-[#f3f5f8] pb-3">
              <FileSpreadsheet className="size-4.5 text-brand-secondary" />
              <h4 className="text-[14px] font-bold text-brand-primary">Project Preview</h4>
            </div>

            <div className="space-y-3">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-brand-secondary uppercase block">Client</span>
                <span className="text-[13px] font-medium text-brand-primary">
                  {jobDetails.clientPrincipalContractor || "Acme Corporation"}
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-brand-secondary uppercase block">Project Name</span>
                <span className="text-[13px] font-medium text-brand-primary">
                  {jobDetails.projectName || "HVAC Maintenance Q4"}
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-brand-secondary uppercase block">Site Location</span>
                <span className="text-[13px] font-medium text-brand-primary line-clamp-2">
                  {jobDetails.siteAddress || "Manchester Distribution Hub"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="flex items-center justify-between border-t border-[#e3e6ec] pt-6">
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onPrevStep}
            className="h-8.5 px-4 rounded-[6px] border-brand-primary bg-white text-[12px] font-bold text-brand-primary shadow-none hover:bg-[#fafbfd]"
          >
            Back
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onSaveDraft}
            className="h-8.5 px-4 rounded-[6px] border-[#d7dce5] bg-white text-[12px] font-bold text-brand-secondary shadow-none hover:bg-[#fafbfd]"
          >
            Save Draft
          </Button>
        </div>
        <Button
          type="button"
          onClick={onNextStep}
          disabled={!selectedWorkTypeId}
          className="h-8.5 px-4 rounded-[6px] bg-brand-primary text-[12px] font-bold text-white hover:bg-brand-primary/95 disabled:opacity-50"
        >
          Next: Tasks &amp; Hazards
        </Button>
      </footer>
    </div>
  );
}
