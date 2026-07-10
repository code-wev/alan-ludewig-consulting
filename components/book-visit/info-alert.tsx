'use client';

import { Info } from 'lucide-react';

export function InfoAlert() {
  return (
    <div className="bg-[#e4ebfe] border border-[#adc6ff]/50 rounded-[8px] p-[17px] flex items-start gap-4 w-full">
      <Info className="size-5 text-[#132651] shrink-0 mt-0.5" />
      <p className="font-['Sansation'] text-[14px] text-[#132651] leading-[1.6] [word-break:break-word]">
        <span className="font-bold">Booking Rules:</span> Bookings require at least 1 week notice. Site visits may block a full day depending on visit type. Teams calls usually reserve a 1-hour slot.
      </p>
    </div>
  );
}
