'use client';

import { Calendar } from 'lucide-react';
import Link from 'next/link';

interface CreditsBannerProps {
  credits: number;
}

export function CreditsBanner({ credits }: CreditsBannerProps) {
  return (
    <div className="bg-gradient-to-r from-[#ad46ff] to-[#9810fa] rounded-[12px] p-6 text-white shadow-[0_1px_0_rgba(10,25,47,0.02)] relative overflow-hidden flex justify-between items-center w-full">
      <div className="space-y-3 z-10">
        <div className="flex items-center gap-2">
          <Calendar className="size-6 text-white" />
          <h2 className="font-['Sansation'] text-[24px] font-bold leading-[1.2]">
            Credits Available
          </h2>
        </div>
        <p className="font-['Sansation'] text-[24px] font-bold leading-[1.2]">
          {credits} Booking Credit{credits !== 1 ? 's' : ''}
        </p>
        <p className="font-['Sansation'] text-[14px] text-[#ecfdf5] leading-[1.6]">
          Extra booking credits can be purchased in{' '}
          <Link
            href="/buy-extras"
            className="underline hover:text-white transition-colors"
          >
            Buy Extras
          </Link>
        </p>
      </div>

      <div className="absolute right-6 opacity-20 pointer-events-none hidden md:block">
        <Calendar className="w-16 h-16 text-white stroke-[1.2]" />
      </div>
    </div>
  );
}
