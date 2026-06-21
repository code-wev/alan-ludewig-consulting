import React from "react";
import { X, Calendar, ChevronRight } from "lucide-react";

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SiteVisitModal({ isOpen, onClose }: SiteVisitModalProps) {
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

        <h2 className="text-xl font-bold text-[#001137]">Site Visit Credits</h2>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 w-full">
            
            {/* Big stats box */}
            <div className="relative h-[160px] border border-[#E3E6EC] bg-[#F3F5F8] rounded-lg overflow-hidden flex items-center justify-center">
              <span className="text-[64px] font-bold text-[#A3ACBA] leading-none">02</span>
              
              <div className="absolute bottom-0 left-0 p-4 flex flex-col w-full bg-gradient-to-t from-[#F3F5F8] via-[#F3F5F8]/80 to-transparent">
                <span className="text-xs text-[#505E7C]">Available Credits</span>
                <span className="text-xl font-bold text-[#132651]">High-Priority Visits</span>
              </div>
            </div>

            {/* Booking history link */}
            <button className="flex items-center justify-between w-full p-4 border border-[#E3E6EC] rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-center gap-3">
                <Calendar className="w-[18px] h-[18px] text-[#5A6886]" />
                <span className="text-sm text-[#132651]">Booking history</span>
              </div>
              <ChevronRight className="w-[18px] h-[18px] text-[#5A6886] group-hover:text-[#132651] transition-colors" />
            </button>

          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={onClose}
              className="bg-[#132651] text-white font-bold text-xs px-4 py-2.5 rounded-md hover:bg-[#132651]/90 transition-colors w-fit"
            >
              Book Site Visit
            </button>
            <span className="text-xs text-[#5A6886]">
              Next available slot: Tomorrow, 09:00 AM
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
