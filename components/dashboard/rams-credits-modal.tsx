import React from "react";
import { X, Calendar } from "lucide-react";

interface RAMSCreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RAMSCreditsModal({ isOpen, onClose }: RAMSCreditsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-[894px] p-6 flex flex-col gap-6 relative my-auto">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-[#5A6886]" />
        </button>

        <h2 className="text-xl font-bold text-[#001137]">RAMS Credits</h2>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 w-full">
            
            {/* Top stats section */}
            <div className="flex justify-between items-end border-b border-[#E3E6EC] pb-6">
              <div className="flex flex-col">
                <span className="text-xs text-[#5A6886]">Remaining</span>
                <span className="text-[40px] leading-[1.2] font-bold text-[#132651]">12</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-[#5A6886] text-right">Used This Period</span>
                <span className="text-xl font-bold text-[#132651] text-right">08</span>
              </div>
            </div>

            {/* Info box */}
            <div className="flex items-center gap-3 bg-[#F3F5F8] border border-[#E3E6EC] p-4 rounded-lg">
              <Calendar className="w-[18px] h-[18px] text-[#5A6886]" />
              <div className="flex flex-col">
                <span className="text-xs text-[#5A6886]">Credit Reset Date</span>
                <span className="text-sm font-bold text-[#132651]">28 June 2026</span>
              </div>
            </div>

          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onClose}
              className="bg-[#132651] text-white font-bold text-xs px-4 py-2.5 rounded-md hover:bg-[#132651]/90 transition-colors"
            >
              Buy Extra Credits
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
