"use client";

import React, { useEffect } from "react";
import { 
  X, 
  ShieldCheck, 
  LayoutGrid, 
  AlertTriangle, 
  FileText, 
  Cloud,
  CheckCircle2,
  Eye,
  Edit2,
  Trash2,
  Plus,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuggestedControlsModalProps {
  onClose: () => void;
}

export function SuggestedControlsModal({ onClose }: SuggestedControlsModalProps) {
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
      <div className="bg-white rounded-[12px] w-full max-w-[1200px] max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-brand-secondary hover:text-brand-primary transition-colors"
        >
          <X className="size-6" />
        </button>

        {/* Header */}
        <div className="flex flex-col gap-4 p-8 pb-6 border-b border-[#e3e6ec] shrink-0">
          <div className="flex items-start gap-4">
            <div className="size-[48px] bg-brand-primary rounded-[12px] flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="size-[28px] text-white" strokeWidth={1.5} />
            </div>
            
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-3">
                <h2 className="text-[20px] font-bold text-[#050f36] leading-[1.2]">Suggested Permit Controls</h2>
                <span className="px-3 py-1 bg-[#0453cd]/10 border border-[#0453cd]/20 rounded-full text-[12px] font-bold text-[#0453cd]">
                  DRAFT: PTW-2024-089
                </span>
              </div>
              
              <div className="flex items-center gap-6 mt-1 flex-wrap">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="size-4 text-brand-primary" />
                  <span className="text-[12px] font-bold text-brand-primary">Permit Type:</span>
                  <span className="text-[12px] text-brand-secondary">Hot Works - Level 2</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <AlertTriangle className="size-4 text-brand-primary" />
                  <span className="text-[12px] font-bold text-brand-primary">Hazards:</span>
                  <span className="text-[12px] text-brand-secondary">Electrocution, Fire, Gas Leak</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <FileText className="size-4 text-brand-primary" />
                  <span className="text-[12px] font-bold text-brand-primary">RAMS Ref:</span>
                  <span className="text-[12px] text-brand-secondary">RAMS-CON-992-B</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Cloud className="size-4 text-brand-primary" />
                  <span className="text-[12px] font-bold text-brand-primary">Conditions:</span>
                  <span className="text-[12px] text-brand-secondary">Indoor / High Humidity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-8 flex flex-col gap-6 no-scrollbar">
          
          {/* Controls Table */}
          <div className="border border-[#e3e6ec] rounded-[12px] overflow-hidden bg-white shadow-sm flex flex-col">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#d6e9ff] border-b border-[#e3e6ec] px-4 py-3 items-center">
              <div className="col-span-3 flex items-center gap-4">
                <input type="checkbox" className="size-3.5 rounded-[4px] border-[#c5c6cd] accent-brand-primary" />
                <span className="text-[13px] font-bold text-brand-primary">Control Name</span>
              </div>
              <div className="col-span-2 text-[13px] font-bold text-brand-primary">Related Hazard</div>
              <div className="col-span-2 text-[13px] font-bold text-brand-primary">Category</div>
              <div className="col-span-1 text-[13px] font-bold text-brand-primary">Req. Before Work</div>
              <div className="col-span-1 text-[13px] font-bold text-brand-primary">Source</div>
              <div className="col-span-2 text-[13px] font-bold text-brand-primary pl-2">Control Type</div>
              <div className="col-span-1 text-[13px] font-bold text-brand-primary">Action</div>
            </div>

            {/* Rows */}
            <div className="flex flex-col">
              
              {/* Row 1 */}
              <div className="grid grid-cols-12 px-4 py-4 border-b border-[#e3e6ec] items-center">
                <div className="col-span-3 flex items-start gap-4">
                  <input type="checkbox" className="size-3.5 rounded-[4px] border-[#c5c6cd] mt-1 accent-brand-primary" />
                  <div className="flex flex-col pr-4">
                    <span className="text-[14px] font-bold text-brand-primary leading-[1.4]">Electrical Isolation (LOTO)</span>
                    <span className="text-[12px] text-brand-secondary leading-[1.4]">Verify isolation at main DB 42</span>
                  </div>
                </div>
                <div className="col-span-2 text-[13px] text-brand-secondary">Electrocution</div>
                <div className="col-span-2 text-[13px] text-brand-secondary">Engineering</div>
                <div className="col-span-1 flex items-center pl-2">
                  <CheckCircle2 className="size-5 text-[#12b76a]" strokeWidth={2.5} />
                </div>
                <div className="col-span-1 text-[13px] text-brand-secondary">System Logic</div>
                <div className="col-span-2 flex items-center pl-2">
                  <span className="px-2.5 py-1 bg-brand-primary text-white text-[12px] rounded-[6px]">Recommended</span>
                </div>
                <div className="col-span-1 flex items-center gap-3">
                  <button className="text-[#0453cd] hover:opacity-80 transition-opacity">
                    <Eye className="size-[18px]" />
                  </button>
                  <button className="text-[#12b76a] hover:opacity-80 transition-opacity">
                    <Edit2 className="size-[18px]" />
                  </button>
                  <button className="text-[#d92d20] hover:opacity-80 transition-opacity">
                    <Trash2 className="size-[18px]" />
                  </button>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-12 px-4 py-4 border-b border-[#e3e6ec] items-center">
                <div className="col-span-3 flex items-start gap-4">
                  <input type="checkbox" className="size-3.5 rounded-[4px] border-[#c5c6cd] mt-1 accent-brand-primary" />
                  <div className="flex flex-col pr-4">
                    <span className="text-[14px] font-bold text-brand-primary leading-[1.4]">Atmospheric Gas Test Clarke</span>
                    <span className="text-[12px] text-brand-secondary leading-[1.4]">a.clarke@safetyfirst.co.uk</span>
                  </div>
                </div>
                <div className="col-span-2 text-[13px] text-brand-secondary">Gas Leak</div>
                <div className="col-span-2 text-[13px] text-brand-secondary">Monitoring</div>
                <div className="col-span-1 flex items-center pl-2">
                  <CheckCircle2 className="size-5 text-[#12b76a]" strokeWidth={2.5} />
                </div>
                <div className="col-span-1 text-[13px] text-brand-secondary">RAMS Ref</div>
                <div className="col-span-2 flex items-center pl-2">
                  <span className="px-2.5 py-1 bg-[#f3f5f8] text-brand-secondary text-[12px] rounded-[6px]">Mandatory</span>
                </div>
                <div className="col-span-1 flex items-center gap-3">
                  <button className="text-[#0453cd] hover:opacity-80 transition-opacity">
                    <Eye className="size-[18px]" />
                  </button>
                  <button className="text-[#12b76a] hover:opacity-80 transition-opacity">
                    <Edit2 className="size-[18px]" />
                  </button>
                  <button className="text-[#d92d20] hover:opacity-80 transition-opacity">
                    <Trash2 className="size-[18px]" />
                  </button>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-12 px-4 py-4 border-b border-[#e3e6ec] items-center">
                <div className="col-span-3 flex items-start gap-4">
                  <input type="checkbox" className="size-3.5 rounded-[4px] border-[#c5c6cd] mt-1 accent-brand-primary" />
                  <div className="flex flex-col pr-4">
                    <span className="text-[14px] font-bold text-brand-primary leading-[1.4]">Secondary Fire Extinguisher</span>
                    <span className="text-[12px] text-brand-secondary leading-[1.4]">CO2 type within 2 meters</span>
                  </div>
                </div>
                <div className="col-span-2 text-[13px] text-brand-secondary">Fire Hazard</div>
                <div className="col-span-2 text-[13px] text-brand-secondary">PPE / Equipment</div>
                <div className="col-span-1 flex items-center pl-2">
                  <CheckCircle2 className="size-5 text-[#12b76a]" strokeWidth={2.5} />
                </div>
                <div className="col-span-1 text-[13px] text-brand-secondary">Suggested</div>
                <div className="col-span-2 flex items-center pl-2">
                  <span className="px-2.5 py-1 bg-[#f3f5f8] text-brand-secondary text-[12px] rounded-[6px]">Mandatory</span>
                </div>
                <div className="col-span-1 flex items-center gap-3">
                  <button className="text-[#0453cd] hover:opacity-80 transition-opacity">
                    <Eye className="size-[18px]" />
                  </button>
                  <button className="text-[#12b76a] hover:opacity-80 transition-opacity">
                    <Edit2 className="size-[18px]" />
                  </button>
                  <button className="text-[#d92d20] hover:opacity-80 transition-opacity">
                    <Trash2 className="size-[18px]" />
                  </button>
                </div>
              </div>

            </div>

            {/* Add Custom Control Button */}
            <div className="bg-[#f3f5f8] p-4 flex items-center justify-center">
              <button className="flex items-center gap-2 border border-dashed border-brand-primary rounded-[8px] px-4 py-2 hover:bg-white transition-colors">
                <Plus className="size-4 text-brand-primary" />
                <span className="text-[14px] font-bold text-brand-primary">Add Individual Custom Control</span>
              </button>
            </div>
            
          </div>

          {/* Compliance Note */}
          <div className="bg-[#e4ebfe] border border-[#adc6ff]/50 rounded-[8px] p-4 flex items-start gap-4">
            <Info className="size-5 text-brand-primary mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <span className="text-[14px] font-bold text-brand-primary">Compliance Note</span>
              <p className="text-[12px] text-brand-secondary leading-[1.6]">
                Mandatory controls marked based on the selected RAMS (RAMS-CON-992-B) cannot be deselected without supervisor override. Recommended controls are based on historical site data for &quot;High Humidity&quot; conditions.
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 p-6 border-t border-[#e3e6ec] shrink-0 bg-white">
          <Button 
            variant="outline"
            className="h-[40px] px-6 rounded-[8px] border-brand-primary text-brand-primary font-bold text-[14px] hover:bg-gray-50"
            onClick={onClose}
          >
            Save Draft
          </Button>
          <Button 
            className="h-[40px] px-6 rounded-[8px] bg-brand-primary text-white font-bold text-[14px] hover:bg-opacity-90"
            onClick={onClose}
          >
            Apply Selected Controls
          </Button>
        </div>

      </div>
    </div>
  );
}
