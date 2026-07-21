"use client";

import React from "react";
import { X, CheckCircle2, PlayCircle, AlertCircle, Clock, MapPin, Eye, RefreshCw, PlusCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PermitHistoryModalProps {
  onClose: () => void;
}

export function PermitHistoryModal({ onClose }: PermitHistoryModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] w-full max-w-365 max-h-[95vh] flex flex-col relative shadow-xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4.5 right-4.5 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="size-4 text-brand-secondary" />
        </button>

        <div className="p-6 flex flex-col gap-8 h-full overflow-hidden">
          
          <div className="flex flex-col gap-8 h-full overflow-y-auto pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            
            {/* Header - Top Toolbar */}
            <div className="flex items-center justify-between shrink-0 mr-12">
              <div className="flex items-center gap-8 w-full">
                <div className="flex flex-col gap-1.5 w-79 shrink-0">
                  <h1 className="text-[20px] font-bold text-brand-primary leading-tight">
                    Permit Reference PTW-2026-0042
                  </h1>
                  <p className="text-[16px] text-brand-secondary leading-tight">
                    Alan Ludewig Consulting Ltd
                  </p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[14px] text-brand-secondary leading-tight">Permit Type</span>
                    <span className="text-[14px] text-brand-primary leading-tight">Hot Works / High Voltage</span>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[14px] text-brand-secondary leading-tight">Project / Site</span>
                    <span className="text-[14px] text-brand-primary leading-tight">North Hub Facility A1</span>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[14px] text-brand-secondary leading-tight">Current Status</span>
                    <div className="bg-[#d1fae5] px-2 py-0.5 rounded-[12px] flex items-center gap-1.5">
                      <div className="size-1.5 rounded-full bg-[#00a63e]" />
                      <span className="text-[14px] text-[#00a63e] leading-tight">Active / Issued</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Section: Timeline & Version/Activity */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 shrink-0">
              
              {/* LEFT: Permit Timeline */}
              <div className="flex flex-col gap-6 w-full lg:w-203.75 shrink-0">
                <div className="flex items-center justify-between border-b border-transparent pb-2">
                  <h2 className="text-[16px] font-bold text-brand-primary">Permit Timeline</h2>
                  <span className="text-[14px] text-brand-secondary">Showing last 14 events</span>
                </div>
                
                <div className="flex gap-6 relative px-6">
                  {/* Vertical Line */}
                  <div className="absolute left-8.5 top-2 bottom-2 w-0.5 bg-[#e3e6ec]" />
                  
                  {/* Timeline Nodes */}
                  <div className="flex flex-col gap-22 relative z-10 w-8 shrink-0 mt-2">
                    <div className="size-6 rounded-full bg-brand-primary shadow-[0_0_0_4px_white] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="size-3 text-white" />
                    </div>
                    <div className="size-6 rounded-full bg-[#10b981] shadow-[0_0_0_4px_white] flex items-center justify-center shrink-0">
                      <PlayCircle className="size-3 text-white" />
                    </div>
                    <div className="size-6 rounded-full bg-[#f59e0b] shadow-[0_0_0_4px_white] flex items-center justify-center shrink-0">
                      <AlertCircle className="size-3 text-white" />
                    </div>
                    <div className="size-6 rounded-full bg-brand-primary shadow-[0_0_0_4px_white] flex items-center justify-center shrink-0">
                      <Clock className="size-3 text-white" />
                    </div>
                  </div>
                  
                  {/* Timeline Cards */}
                  <div className="flex flex-col gap-8 w-full">
                    
                    {/* Event: Closed */}
                    <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px] p-4.25 flex flex-col gap-1 w-full">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-bold text-brand-primary">Permit Closed</span>
                        <span className="text-[12px] text-brand-secondary">Oct 24, 2026 • 17:00</span>
                      </div>
                      <div className="text-[14px] pb-1">
                        <span className="text-brand-primary">Mark Stevenson</span>
                        <span className="text-brand-secondary"> (Project Lead) — Completed inspection of site works.</span>
                      </div>
                      <div className="bg-white border border-[#e3e6ec] rounded-[6px] px-2.25 py-1.25 flex items-center h-12.75 mt-1">
                        <span className="text-[14px] text-brand-secondary">&quot;All equipment cleared and isolations restored.&quot;</span>
                      </div>
                    </div>

                    {/* Event: Resumed */}
                    <div className="bg-white border border-[#e3e6ec] rounded-[6px] p-4.25 flex flex-col gap-1 w-full">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-bold text-brand-primary">Permit Resumed</span>
                        <span className="text-[12px] text-brand-secondary">Oct 24, 2026 • 13:15</span>
                      </div>
                      <div className="text-[14px]">
                        <span className="text-brand-primary">System Agent</span>
                        <span className="text-brand-secondary"> — Automated status update upon verification.</span>
                      </div>
                    </div>

                    {/* Event: Suspended */}
                    <div className="bg-white border border-[#e3e6ec] rounded-[6px] p-4.25 flex flex-col gap-1 w-full">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-bold text-brand-primary">Permit Suspended</span>
                        <span className="text-[12px] text-brand-secondary">Oct 24, 2026 • 12:00</span>
                      </div>
                      <div className="text-[14px]">
                        <span className="text-brand-primary">Jane Doe</span>
                        <span className="text-brand-secondary"> (Safety Officer) — Mandatory break / site safety sweep.</span>
                      </div>
                    </div>

                    {/* Event: Extended */}
                    <div className="bg-white border border-[#e3e6ec] rounded-[6px] p-4.25 flex flex-col gap-1 w-full">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-bold text-brand-primary">Permit Extended</span>
                        <span className="text-[12px] text-brand-secondary">Oct 23, 2026 • 16:30</span>
                      </div>
                      <div className="text-[14px]">
                        <span className="text-brand-primary">Alan Ludewig</span>
                        <span className="text-brand-secondary"> (Issuer) — Validated 4hr extension for welding completion.</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* RIGHT: Version & Activity Summary */}
              <div className="flex flex-col gap-6 w-full lg:flex-1 shrink-0">
                
                {/* Version Summary */}
                <div className="flex flex-col gap-6 w-full">
                  <h2 className="text-[16px] font-bold text-brand-primary pb-2">Version Summary</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-[#e3e6ec] rounded-[6px] p-4.25 flex flex-col gap-1 h-21.5">
                      <span className="text-[14px] text-brand-secondary">Current Version</span>
                      <span className="text-[14px] font-bold text-brand-primary">v2.4</span>
                    </div>
                    <div className="border border-[#e3e6ec] rounded-[6px] p-4.25 flex flex-col gap-1 h-21.5">
                      <span className="text-[14px] text-brand-secondary">Original Issue</span>
                      <span className="text-[14px] font-bold text-brand-primary">Oct 20, 2026</span>
                    </div>
                    <div className="col-span-2 bg-brand-primary rounded-[6px] p-4 flex flex-col gap-1">
                      <span className="text-[12px] text-white opacity-70">Latest Validity Period</span>
                      <div className="flex items-center gap-3">
                        <Clock className="size-4.5 text-white" />
                        <span className="text-[14px] font-bold text-white">Oct 24, 08:00 — Oct 24, 18:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activity Counters */}
                <div className="flex flex-col gap-2 w-full mt-2">
                  <h2 className="text-[16px] font-bold text-brand-primary pb-2">Activity Counters</h2>
                  
                  <div className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-3">
                      <RefreshCw className="size-4 text-brand-primary" />
                      <span className="text-[14px] text-brand-primary">Total Revalidations</span>
                    </div>
                    <div className="bg-[#dfe3eb]/30 px-3 py-1 rounded-[6px] flex items-center justify-center">
                      <span className="text-[14px] text-brand-primary">04</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-3">
                      <PlusCircle className="size-5 text-brand-primary" />
                      <span className="text-[14px] text-brand-primary">Total Extensions</span>
                    </div>
                    <div className="bg-[#dfe3eb]/30 px-3 py-1 rounded-[6px] flex items-center justify-center">
                      <span className="text-[14px] text-brand-primary">02</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="size-5 text-brand-primary" />
                      <span className="text-[14px] text-brand-primary">Total Suspensions</span>
                    </div>
                    <div className="bg-[#dfe3eb]/30 px-3 py-1 rounded-[6px] flex items-center justify-center w-10.5">
                      <span className="text-[14px] text-brand-primary">01</span>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="border border-[#dfe3eb] rounded-xs p-px w-full mt-4">
                  <div className="bg-[#e6e8ea] h-32 rounded-[6px] relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1541888086225-ee1ea407c0b2?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-luminosity" />
                    <div className="relative z-10 flex flex-col items-center">
                      <MapPin className="size-5 text-brand-primary" />
                      <div className="bg-white/90 px-2 py-0.5 rounded-xs mt-1">
                        <span className="text-[12px] text-brand-primary">Zone A-12 Sector North</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* BOTTOM: Permit Activity Log */}
            <div className="flex flex-col gap-6 w-full shrink-0">
              <h2 className="text-[16px] font-bold text-brand-primary">Permit Activity Log</h2>
              
              <div className="border-[1.5px] border-[#e3e6ec] rounded-[12px] w-full overflow-hidden flex flex-col">
                
                {/* Table Header */}
                <div className="bg-[#d6e9ff] border-b-[1.5px] border-[#f3f5f8] px-5 py-2.5 flex items-center">
                  <div className="w-50 shrink-0 font-bold text-[14px] text-brand-primary">Date / Time</div>
                  <div className="w-32.5 shrink-0 font-bold text-[14px] text-brand-primary">Activity</div>
                  <div className="w-50 shrink-0 font-bold text-[14px] text-brand-primary">User</div>
                  <div className="flex-1 min-w-69 font-bold text-[14px] text-brand-primary">Notes</div>
                  <div className="w-35.75 shrink-0 font-bold text-[14px] text-brand-primary">Actions</div>
                </div>
                
                {/* Table Body */}
                <div className="flex flex-col w-full">
                  
                  {/* Row 1 */}
                  <div className="border-b-[1.5px] border-[#f3f5f8] px-5 flex items-center">
                    <div className="w-50 shrink-0 py-4 text-[14px] text-brand-primary">Oct 24, 2026 17:00</div>
                    <div className="w-32.5 shrink-0 py-4.5">
                      <span className="bg-brand-primary text-white text-[12px] px-2.25 py-0.5 rounded-[6px]">Close</span>
                    </div>
                    <div className="w-50 shrink-0 py-5 text-[14px] text-brand-secondary">Mark Stevenson</div>
                    <div className="flex-1 min-w-69 py-5 text-[14px] text-brand-secondary">Permit handback successful. No incidents reported.</div>
                    <div className="w-35.75 shrink-0 py-5 flex items-center">
                      <button className="size-7 flex items-center justify-center hover:bg-slate-100 rounded transition-colors">
                        <Eye className="size-4.5 text-brand-primary" />
                      </button>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="border-b-[1.5px] border-[#f3f5f8] px-5 flex items-center">
                    <div className="w-50 shrink-0 py-4 text-[14px] text-brand-primary">Oct 24, 2026 17:00</div>
                    <div className="w-32.5 shrink-0 py-4.5">
                      <span className="bg-[#00a63e] text-white text-[12px] px-2.25 py-0.5 rounded-[6px]">Resume</span>
                    </div>
                    <div className="w-50 shrink-0 py-5 text-[14px] text-brand-secondary">System Agent</div>
                    <div className="flex-1 min-w-69 py-5 text-[14px] text-brand-secondary">Gas level monitoring cleared for entry.</div>
                    <div className="w-35.75 shrink-0 py-5 flex items-center">
                      <button className="size-7 flex items-center justify-center hover:bg-slate-100 rounded transition-colors">
                        <Eye className="size-4.5 text-brand-primary" />
                      </button>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="border-b-[1.5px] border-[#f3f5f8] px-5 flex items-center">
                    <div className="w-50 shrink-0 py-4 text-[14px] text-brand-primary">Oct 24, 2026 17:00</div>
                    <div className="w-32.5 shrink-0 py-4.5">
                      <span className="bg-[#f57f17] text-white text-[12px] px-2.25 py-0.5 rounded-[6px]">Suspend</span>
                    </div>
                    <div className="w-50 shrink-0 py-5 text-[14px] text-brand-secondary">Mark Stevenson</div>
                    <div className="flex-1 min-w-69 py-5 text-[14px] text-brand-secondary">Safety re-evaluation required for elevated works.</div>
                    <div className="w-35.75 shrink-0 py-5 flex items-center">
                      <button className="size-7 flex items-center justify-center hover:bg-slate-100 rounded transition-colors">
                        <Eye className="size-4.5 text-brand-primary" />
                      </button>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="border-b-[1.5px] border-[#f3f5f8] px-5 flex items-center">
                    <div className="w-50 shrink-0 py-4 text-[14px] text-brand-primary">Oct 24, 2026 17:00</div>
                    <div className="w-32.5 shrink-0 py-4.5">
                      <span className="bg-brand-primary text-white text-[12px] px-2.25 py-0.5 rounded-[6px]">Close</span>
                    </div>
                    <div className="w-50 shrink-0 py-5 text-[14px] text-brand-secondary">Jane Doe</div>
                    <div className="flex-1 min-w-69 py-5 text-[14px] text-brand-secondary">Permit handback successful. No incidents reported.</div>
                    <div className="w-35.75 shrink-0 py-5 flex items-center">
                      <button className="size-7 flex items-center justify-center hover:bg-slate-100 rounded transition-colors">
                        <Eye className="size-4.5 text-brand-primary" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
          
          {/* Footer Actions */}
          <div className="flex items-center justify-start gap-5 shrink-0 mt-2">
            <Button
              variant="outline"
              className="h-8.5 rounded-[6px] border-brand-primary px-4 text-[12px] font-bold text-brand-primary hover:bg-slate-50"
            >
              Preview Current Permit
            </Button>
            <Button
              className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0a1530]"
            >
              Download Permit History
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
