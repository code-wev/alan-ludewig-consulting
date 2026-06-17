import { Check, Calendar, Clock, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";

const listItems = [
  "Credits displayed clearly in the member area",
  "Booking history available at all times",
  "Extra visits available through Buy Extras",
  "Suitable for inspections, audits, site reviews, and support meetings"
];

export default function SiteVisitsHighlight() {
  return (
    <section className="bg-[#f3f5f8] w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col lg:flex-row items-start justify-between gap-[60px]">
        {/* LEFT MOCKUPF */}
        <div className="relative w-full lg:w-[865px] h-auto lg:h-[594px] flex justify-center shrink-0">
          <div className="bg-white border border-[#dce0e7] rounded-[16px] shadow-[0px_12px_40px_0px_rgba(19,38,81,0.12)] w-full max-w-[616px] h-full overflow-hidden flex flex-col">
            
            {/* TOP BAR */}
            <div className="bg-[#132651] h-[76px] px-[24px] py-[20px] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-[12px]">
                <div className="bg-white/10 w-[36px] h-[36px] rounded-[10px] flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-white leading-tight">Book Site Visit</span>
                  <span className="text-[11px] text-[3ca0c8] leading-tight mt-0.5">Schedule your visit or inspection</span>
                </div>
              </div>
              <div className="bg-white/10 py-1 px-2.5 rounded-[10px]">
                <span className="text-[11px] font-semibold text-[#a5b4d4]">2 Credits Available</span>
              </div>
            </div>

            {/* FORM */}
            <div className="p-[24px] flex flex-col gap-[16px] flex-1">
              <div className="flex flex-col gap-[6px]">
                <label className="text-[12px] font-semibold text-[#132651]">Visit Type</label>
                <div className="bg-[#f7f8fa] border border-[#dce0e7] h-[41.5px] rounded-[12px] flex items-center justify-between p-3">
                  <span className="text-[13px] text-[#132651]">Site Visit</span>
                  <ChevronDown className="w-4 h-4 text-[#132651]" />
                </div>
              </div>

              <div className="flex gap-3 u-full">
                <div className="flex flex-col gap-[6px] flex-1">
                  <label className="text-[12px] font-semibold text-[#132651]">Preferred Date</label>
                  <div className="bg-[#f7f8fa] border border-[#dce0e7] h-[41.5px] rounded-[12px] flex items-center gap-2 p-3">
                    <Calendar className="w-3.5 h-3.5 text-[#132651]" />
                    <span className="text-[13px] text-[#132651]">20 May 2026</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] flex-1">
                  <label className="text-[12px] font-semibold text-[#132651]">Time Slot</label>
                  <div className="bg-[#f7f8fa] border border-[#dce0e7] h-[41.5px] rounded-[12px] flex items-center gap-2 p-3">
                    <Clock className="w-3.5 h-3.5 text-[#132651]" />
                    <span className="text-[13px] text-[#132651]">09:00 - 12:00</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-[12px] font-semibold text-[#132651]">Site Location</label>
                <div className="bg-[#f7f8fa] border border-[#dce0e7] h-[41.5px] rounded-[12px] flex items-center gap-2 p-3">
                  <MapPin className="w-3.5 h-3.5 text-[#5a6886]" />
                  <span className="text-[13px] text-[#5a6886]">Enter site address or postcode</span>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-2">
                <button className="bg-[#132651] h-[44px] rounded-[12px] text-white font-semibold text-[14px] flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Confirm Booking
                </button>
                <span className="text-[11px] text-[#7b8496] text-center">
                  1 credit will be used from your account
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-[32px] w-full lg:max-w-[870px] shrink-0">
          <div className="flex flex-col gap-[20px] items-start">
            <div className="bg-[#ede9fe] px-[22px] py-[2px] rounded-full">
              <span className="text-[14px] font-bold text-[#7c3aed]">
                Site Visit Support
              </span>
            </div>
            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[40px] font-bold text-[#132651] leading-[1.2] max-w-[754px]">
                Book Site Visits, Audits and Inspections
              </h2>
              <p className="text-[16px] text-[#5a6886] leading-[1.6]">
                Depending on the membership level, clients can use available credits to book site visits, audits, inspections, meetings, or support sessions
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[16px]">
            {listItems.map((item, i) => (
              <div key={i} className="flex items-center gap-[12px]">
                <div className="bg-[#d1fae5] w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#059669]" />
                </div>
                <span className="text-[14px] text-[#5a6886] leading-[1.6]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/plans"
            className="w[217px] h-[60px] bg-[#132651] text-white font-bold rounded-[6px] flex items-center justify-center hover:bg-[#1e3264] transition-colors"
          >
            View Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
