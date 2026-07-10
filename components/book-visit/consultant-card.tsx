'use client';

import { User, Check, AlertTriangle, ShoppingCart, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function ConsultantCard() {
  return (
    <div className="space-y-6 w-full lg:max-w-[697px]">
      {/* Your Consultant Card */}
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[10px] p-6 space-y-4 shadow-[0_1px_0_rgba(10,25,47,0.02)]">
        <h3 className="font-['Sansation'] text-[20px] font-bold text-[#132651]">
          Your Consultant
        </h3>
        
        <div className="flex items-center gap-4">
          <div className="bg-[#132651] text-white rounded-full size-[64px] flex items-center justify-center shrink-0">
            <User className="size-8" />
          </div>
          <div className="space-y-0.5">
            <h4 className="font-['Sansation'] text-[16px] font-bold text-[#132651]">
              Sarah Mitchell
            </h4>
            <p className="font-['Sansation'] text-[14px] text-[#5a6886]">
              Senior H&S Consultant
            </p>
          </div>
        </div>

        <p className="font-['Sansation'] text-[14px] text-[#5a6886] leading-[1.6]">
          NEBOSH Diploma holder with 15+ years experience in construction and manufacturing sectors.
        </p>
      </div>

      {/* Availability Rules Card */}
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[10px] p-6 space-y-4 shadow-[0_1px_0_rgba(10,25,47,0.02)]">
        <h3 className="font-['Sansation'] text-[20px] font-bold text-[#132651]">
          Availability Rules
        </h3>

        <ul className="space-y-3 font-['Sansation'] text-[12px] text-[#5a6886] leading-[1.6]">
          <li className="flex items-start gap-2">
            <Check className="size-4 text-[#109a62] shrink-0 mt-0.5" />
            <span>Calendar is live-synced with consultant&apos;s Outlook.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="size-4 text-[#109a62] shrink-0 mt-0.5" />
            <span>Minimum 7 days notice required for new bookings.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="size-4 text-[#109a62] shrink-0 mt-0.5" />
            <span>Cancellations within 48h may forfeit credit.</span>
          </li>
        </ul>
      </div>

      {/* Need More Visits Warning Box */}
      <div className="bg-[#fffbeb] border-[1.5px] border-[#fee685] rounded-[10px] p-[24px] space-y-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="size-5 text-[#f97316] shrink-0 mt-0.5" />
          <div className="space-y-2 font-['Sansation']">
            <h4 className="text-[14px] font-bold text-[#7b3306]">
              Need more visits?
            </h4>
            <p className="text-[14px] text-[#bb4d00] leading-[1.6]">
              Purchase additional booking credits or upgrade your plan for more included visits per month.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href="/buy-extras"
            className="w-full h-[38px] bg-[#132651] hover:bg-[#1e3264] text-white font-['Sansation'] font-bold text-[12px] rounded-[6px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <ShoppingCart className="size-4" />
            Buy More Credits
          </Link>
          
          <Link
            href="/dashboard/subscription"
            className="w-full h-[38px] bg-white border border-[#132651] hover:bg-gray-50 text-[#132651] font-['Sansation'] font-bold text-[12px] rounded-[6px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Sparkles className="size-4" />
            Upgrade Plan
          </Link>
        </div>
      </div>
    </div>
  );
}
