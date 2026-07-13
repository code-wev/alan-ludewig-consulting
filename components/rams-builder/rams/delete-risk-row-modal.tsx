import React from "react";
import { Button } from "@/components/ui/button";
import { X, TriangleAlert, Info } from "lucide-react";

interface DeleteRiskRowModalProps {
  isOpen: boolean;
  onClose: () => void;
  // We can pass data here later, for now we hardcode it to match the design
}

export function DeleteRiskRowModal({ isOpen, onClose }: DeleteRiskRowModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/30 backdrop-blur-sm">
      <div className="bg-white rounded-[12px] w-[95vw] max-w-[850px] flex flex-col relative overflow-hidden border-[1.5px] border-[#e3e6ec] p-6 shadow-xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-brand-primary"
        >
          <X className="size-5" />
        </button>

        <div className="flex flex-col gap-8 w-full max-w-[800px] mx-auto mt-2">
          
          {/* Header & Warning Icon */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ffdad6] flex items-center justify-center shrink-0">
              <TriangleAlert className="size-6 text-[#d92d20]" />
            </div>
            <div className="flex flex-col gap-1.5 mt-1">
              <h2 className="text-[20px] font-bold text-[#191c1e]">Delete Risk Assessment Item?</h2>
              <p className="text-[14px] text-brand-secondary">Are you sure you want to delete this risk assessment item?</p>
            </div>
          </div>

          {/* Item Details Box */}
          <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px] p-6 w-full">
            <div className="grid grid-cols-2 gap-y-4">
              
              {/* Activity */}
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-bold text-brand-secondary">Activity</span>
                <span className="text-[14px] font-bold text-brand-primary">Work at Height</span>
              </div>
              
              {/* Current Rating */}
              <div className="flex flex-col items-end gap-1">
                <span className="text-[12px] font-bold text-brand-secondary">Current Rating</span>
                <div className="px-2 py-0.5 bg-[#ffdad6] rounded-full">
                  <span className="text-[12px] font-bold text-[#d92d20]">HIGH (15)</span>
                </div>
              </div>
              
              {/* Hazard */}
              <div className="col-span-2 flex flex-col gap-1">
                <span className="text-[12px] font-bold text-brand-secondary">Hazard</span>
                <span className="text-[14px] text-brand-primary">Falling from ladder while installing perimeter sensors</span>
              </div>
              
            </div>
          </div>

          {/* Info Box */}
          <div className="flex items-start gap-4 p-4 rounded-[8px] bg-[#e4ebfe] border border-[#adc6ff80]">
            <Info className="size-[20px] text-brand-primary shrink-0 mt-0.5" />
            <p className="text-[14px] text-brand-primary leading-[1.6]">
              This action cannot be undone. Removing this item may affect your RAMS risk assessment output and compliance scoring.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline"
                className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
                onClick={onClose}
              >
                Cancel
              </Button>
            </div>
            <Button 
              className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-white font-bold text-[14px] hover:bg-brand-primary/90"
              onClick={onClose}
            >
              Delete Risk Item
            </Button>
          </div>

        </div>

      </div>
    </div>
  );
}
