"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  CreditCard, 
  AlertTriangle, 
  TrendingUp, 
  RefreshCw, 
  Eye, 
  Download,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Dummy booking history matching the design screenshot
const BOOKING_HISTORY = [
  {
    id: "B-001",
    type: "Workshop Inspection",
    date: "24 May 2026",
    time: "10:00 AM",
    status: "Paid",
  },
  {
    id: "B-002",
    type: "Workshop Inspection",
    date: "24 May 2026",
    time: "10:00 AM",
    status: "Paid",
  },
  {
    id: "B-003",
    type: "Workshop Inspection",
    date: "24 May 2026",
    time: "10:00 AM",
    status: "Paid",
  },
];

export function SubscriptionPage() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const handleAction = (action: string) => {
    setSelectedAction(action);
    if (action === "upgrade") {
      toast.success("Upgrade flow initiated. Directing to plan options...");
    } else if (action === "change") {
      toast.info("Change plan options loaded. Choose your new tier.");
    } else if (action === "cancel") {
      toast.warning("Cancel plan warning. Please read cancellation details below.");
    }
  };

  return (
    <div className="flex flex-col gap-[32px] w-full max-w-[1584px] mx-auto pb-10">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-[6px] text-[12px] font-sans">
        <Link 
          href="/dashboard" 
          className="text-brand-secondary hover:text-brand-primary transition-colors font-medium"
        >
          Dashboard
        </Link>
        <ChevronRight size={14} className="text-brand-secondary/60" />
        <span className="text-brand-primary font-bold">Manage Subscription</span>
      </div>

      {/* Heading Section */}
      <div className="flex flex-col gap-[8px]">
        <h1 className="text-[30px] font-extrabold text-brand-primary leading-tight font-sans">
          Manage Subscription
        </h1>
        <p className="text-[16px] text-brand-secondary font-sans">
          View your current plan and manage upgrades, downgrades, or billing actions.
        </p>
      </div>

      {/* Gradient Card - Current Plan Details */}
      <div 
        className="w-full rounded-[10px] p-6 md:p-[40px] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 shadow-[0px_4px_20px_rgba(19,38,81,0.08)] relative overflow-hidden"
        style={{ 
          backgroundImage: "linear-gradient(90deg, #132651 0%, #1e3264 50%, #5a6886 100%)" 
        }}
      >
        {/* Background Credit Card graphic accent */}
        <div className="absolute right-[-40px] top-[-40px] opacity-10 pointer-events-none hidden md:block">
          <CreditCard size={260} className="text-white rotate-12" />
        </div>

        <div className="flex flex-col gap-[24px] z-10 w-full lg:max-w-[780px]">
          {/* Header row */}
          <div className="flex items-center gap-[8px]">
            <CheckCircle2 className="w-[24px] h-[24px] text-white shrink-0" />
            <h2 className="text-[24px] font-bold text-white font-sans leading-none">
              Comply Pro
            </h2>
          </div>

          {/* Details columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12 mt-2">
            <div className="flex flex-col gap-1">
              <span className="text-[14px] text-brand-bg-main/80 font-sans">Monthly Price</span>
              <span className="text-[24px] font-bold text-white font-sans">£165</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px] text-brand-bg-main/80 font-sans font-medium">Billing Date</span>
              <span className="text-[20px] md:text-[24px] font-bold text-white font-sans">1st of month</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px] text-brand-bg-main/80 font-sans">Next Billing</span>
              <span className="text-[20px] md:text-[24px] font-bold text-white font-sans">1 June 2026</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px] text-brand-bg-main/80 font-sans">Status</span>
              <span className="bg-[#00bc7d] text-white text-[12px] font-bold px-[12px] py-[4px] rounded-[6px] w-fit mt-1 shadow-sm font-sans">
                Active
              </span>
            </div>
          </div>

          {/* Alert banner inside card */}
          <div className="bg-white/10 border border-white/20 rounded-[8px] p-4 flex items-start gap-[12px] mt-4">
            <AlertTriangle className="w-[20px] h-[20px] text-amber-300 shrink-0 mt-0.5" />
            <p className="text-[13px] text-brand-bg-main font-sans leading-[1.6]">
              Your subscription will automatically renew on the billing date. Cancel anytime before then to avoid the next charge.
            </p>
          </div>
        </div>
      </div>

      {/* Subscription Management Actions (Three Tiles) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Upgrade Plan */}
        <div 
          onClick={() => handleAction("upgrade")}
          className={cn(
            "bg-white border-2 rounded-[12px] p-[26px] flex flex-col gap-[8px] items-start cursor-pointer transition duration-200 group hover:shadow-md",
            selectedAction === "upgrade" ? "border-brand-primary shadow-sm" : "border-brand-primary"
          )}
        >
          <div className="bg-[#f0f4ff] group-hover:bg-[#132651] transition-colors p-[10px] rounded-[10px] mb-2 shrink-0">
            <TrendingUp className="w-[20px] h-[20px] text-[#132651] group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-[18px] font-bold text-brand-primary font-sans">
            Upgrade Plan
          </h3>
          <p className="text-[14px] text-brand-secondary font-sans leading-relaxed">
            Access more features and increase your monthly inspection credits.
          </p>
        </div>

        {/* Change Plan */}
        <div 
          onClick={() => handleAction("change")}
          className={cn(
            "bg-white border-[1.5px] rounded-[12px] p-[26px] flex flex-col gap-[8px] items-start cursor-pointer transition duration-200 group hover:shadow-md",
            selectedAction === "change" ? "border-brand-primary shadow-sm" : "border-[#e3e6ec]"
          )}
        >
          <div className="bg-slate-100 group-hover:bg-[#132651] transition-colors p-[10px] rounded-[10px] mb-2 shrink-0">
            <RefreshCw className="w-[20px] h-[20px] text-brand-secondary group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-[18px] font-bold text-brand-primary font-sans">
            Change Plan
          </h3>
          <p className="text-[14px] text-brand-secondary font-sans leading-relaxed">
            Switch to a different membership tier (Annual billing or Standard plans).
          </p>
        </div>

        {/* Cancel Plan */}
        <div 
          onClick={() => handleAction("cancel")}
          className={cn(
            "bg-white border-[1.5px] rounded-[12px] p-[26px] flex flex-col gap-[8px] items-start cursor-pointer transition duration-200 group hover:shadow-md",
            selectedAction === "cancel" ? "border-[#d92d20] shadow-sm" : "border-[#e3e6ec] hover:border-red-200"
          )}
        >
          <div className="bg-red-50 group-hover:bg-[#d92d20] transition-colors p-[10px] rounded-[10px] mb-2 shrink-0">
            <AlertTriangle className="w-[20px] h-[20px] text-[#d92d20] group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-[18px] font-bold text-[#d92d20] font-sans">
            Cancel Plan
          </h3>
          <p className="text-[14px] text-[#d92d20]/80 font-sans leading-relaxed">
            End your membership subscription and restrict portal access.
          </p>
        </div>
      </div>

      {/* Two-Column Billing details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Payment Method */}
        <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-6 md:p-[25.5px] flex flex-col gap-[16px] shadow-[0px_1px_2px_rgba(0,0,0,0.02)]">
          <h2 className="text-[20px] font-bold text-brand-primary font-sans">
            Payment Method
          </h2>
          
          <div className="bg-[#f3f5f8] border-[1.5px] border-[#e3e6ec] rounded-[6px] p-[17.5px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-[16px]">
              <div className="bg-[#155dfc] w-[48px] h-[32px] rounded-[6px] flex items-center justify-center shrink-0 shadow-sm text-white font-extrabold italic text-[14px] select-none">
                VISA
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-bold text-brand-primary font-sans leading-snug">
                  Visa ending in 4242
                </span>
                <span className="text-[14px] text-brand-secondary font-sans">
                  Expires 12/2027
                </span>
              </div>
            </div>

            <button 
              onClick={() => toast.success("Opening secure card update portal...")}
              className="px-4 py-[6px] text-[14px] font-bold text-brand-primary bg-white border-[1.5px] border-[#dce0e7] rounded-[4px] hover:bg-slate-50 hover:border-brand-primary transition-all duration-200"
            >
              Update
            </button>
          </div>
        </div>

        {/* Latest Invoice */}
        <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-6 md:p-[25.5px] flex flex-col gap-[16px] shadow-[0px_1px_2px_rgba(0,0,0,0.02)]">
          <h2 className="text-[20px] font-bold text-brand-primary font-sans">
            Latest Invoice
          </h2>

          <div className="bg-[#ecfdf5] border-[1.5px] border-[#a4f4cf] rounded-[6px] p-[17.5px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[16px] font-bold text-brand-primary font-sans leading-snug">
                INV-2026-05
              </span>
              <span className="text-[14px] text-brand-secondary font-sans">
                1 May 2026
              </span>
            </div>

            <div className="flex items-center gap-[16px] sm:self-auto self-end">
              <span className="text-[24px] font-bold text-brand-primary font-sans">
                £165.00
              </span>
              <span className="bg-[#ecfdf5] border border-[#007a55] text-[#007a55] text-[12px] font-semibold px-2 py-[2px] rounded-full font-sans select-none">
                Paid
              </span>
            </div>
          </div>

          <button 
            onClick={() => toast.success("Downloading invoice INV-2026-05 (PDF)...")}
            className="w-full py-[10px] text-[16px] font-bold text-brand-primary bg-white border-[1.5px] border-[#d0d4dc] hover:border-brand-primary rounded-[6px] flex items-center justify-center gap-[10px] transition-all duration-200 hover:bg-slate-50"
          >
            <Download size={16} />
            Download Invoice
          </button>
        </div>
      </div>

      {/* Booking History Table */}
      <div className="bg-white border-[1.5px] border-[#d0d4dc] rounded-[10px] p-6 md:p-[40px] flex flex-col gap-[24px] shadow-[0px_1px_2px_rgba(0,0,0,0.02)]">
        <h2 className="text-[24px] font-bold text-brand-primary font-sans">
          Booking History
        </h2>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-[12px] border-[1.5px] border-[#e3e6ec]">
          <table className="w-full border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#d6e9ff] border-b-[1.5px] border-[#e3e6ec] text-[14px] font-bold text-brand-primary font-sans">
                <th className="px-6 py-[12px] text-left">Booking / Visit</th>
                <th className="px-6 py-[12px] text-left">Date</th>
                <th className="px-6 py-[12px] text-left">Time</th>
                <th className="px-6 py-[12px] text-left">Status</th>
                <th className="px-6 py-[12px] text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {BOOKING_HISTORY.map((booking, idx) => (
                <tr 
                  key={idx} 
                  className="border-b-[1.5px] border-[#f3f5f8] hover:bg-[#fafbfd] transition text-[15px] text-brand-primary font-sans"
                >
                  <td className="px-6 py-4 font-semibold">{booking.type}</td>
                  <td className="px-6 py-4 text-brand-secondary">{booking.date}</td>
                  <td className="px-6 py-4 text-brand-secondary">{booking.time}</td>
                  <td className="px-6 py-4">
                    <span className="bg-[#ecfdf5] border border-[#007a55] text-[#007a55] text-[12px] font-semibold px-2 py-[2px] rounded-full select-none">
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-[8px]">
                      <button 
                        onClick={() => toast.info(`Viewing details for ${booking.type}...`)}
                        className="p-1.5 rounded-lg text-[#4f79ff] hover:bg-[#eef4ff] transition-colors"
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                      <button 
                        onClick={() => toast.success(`Downloading booking receipt (PDF)...`)}
                        className="p-1.5 rounded-lg text-[#2ea44f] hover:bg-[#eefbf2] transition-colors"
                        title="Download Receipt"
                      >
                        <Download size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Pagination / Summary Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <p className="text-[14px] text-brand-secondary font-sans">
            Showing 1 to {BOOKING_HISTORY.length} of {BOOKING_HISTORY.length} bookings
          </p>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <Button
              variant="outline"
              className="h-[36px] rounded-[6px] border-[#d9dde5] px-4 text-[14px] text-brand-secondary opacity-50 cursor-not-allowed hover:bg-transparent"
              disabled
            >
              Previous
            </Button>
            <Button className="h-[36px] min-w-[36px] rounded-[6px] bg-brand-primary px-3 text-[14px] text-white font-bold hover:bg-brand-primary/95">
              1
            </Button>
            <Button
              variant="outline"
              className="h-[36px] rounded-[6px] border-[#d9dde5] px-4 text-[14px] text-brand-secondary opacity-50 cursor-not-allowed hover:bg-transparent"
              disabled
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* Important: Cancellation Info */}
      <div className="bg-[#fef2f2] border-[1.5px] border-[#ffc9c9] rounded-[10px] p-6 md:p-[25.5px] flex items-start gap-[16px] shadow-[0px_1px_2px_rgba(0,0,0,0.02)]">
        <AlertCircle className="w-[24px] h-[24px] text-[#82181a] shrink-0 mt-0.5" />
        <div className="flex flex-col gap-[10px] w-full">
          <h3 className="text-[18px] font-bold text-[#82181a] font-sans leading-none">
            Important: Cancellation Information
          </h3>
          <div className="flex flex-col gap-[6px] text-[14px] text-[#9f0712] font-sans leading-relaxed">
            <p>
              • If you cancel your subscription, you will retain access to all portal features until the end of your current billing period.
            </p>
            <p>
              • After cancellation, access to the document library, RAMS builder, saved files, and member documents will be restricted.
            </p>
            <p>
              • You can reactivate your subscription at any time to restore full access to all features and your saved content.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
