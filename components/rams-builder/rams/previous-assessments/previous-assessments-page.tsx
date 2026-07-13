"use client";

import {
  ChevronRight,
  Search,
  Download,
  Eye,
  MoreVertical,
  PenSquare,
  ClipboardList,
  CheckCircle2,
  Bell,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SelectField } from "@/components/saved-files/components/select-field";
import { cn } from "@/lib/utils";

const SUMMARY_CARDS = [
  {
    title: "Draft RAMS",
    count: "3",
    description: "Continue saved assessments",
    icon: PenSquare,
    iconColor: "text-[#64748b]",
  },
  {
    title: "Submitted for Review",
    count: "2",
    description: "Awaiting competent person feedback",
    icon: ClipboardList,
    iconColor: "text-[#dc2626]",
  },
  {
    title: "Approved RAMS",
    count: "18",
    description: "Ready for site use",
    icon: CheckCircle2,
    iconColor: "text-[#16a34a]",
  },
  {
    title: "Review Changes",
    count: "03",
    description: "Assessment renewal required",
    icon: Bell,
    iconColor: "text-[#dc2626]",
  },
];

const TABS = [
  "All RAMS",
  "Draft",
  "Generated",
  "Submitted",
  "Requires Changes",
  "Approved",
  "Archived",
];

const TABLE_DATA = [
  {
    id: "#R-98231",
    reference: "London Bridge Refurbishment",
    projectSite: "Southwark, London SE1 9AL",
    client: "Structural Masonry",
    createdBy: "12 May 2026",
    version: "v1.2",
    status: "Draft",
    lastUpdated: "12 May 2027",
  },
  {
    id: "#R-98232",
    reference: "London Bridge Refurbishment",
    projectSite: "Southwark, London SE1 9AL",
    client: "Structural Masonry",
    createdBy: "12 May 2026",
    version: "v1.0",
    status: "Submitted",
    lastUpdated: "12 May 2027",
  },
  {
    id: "#R-98233",
    reference: "London Bridge Refurbishment",
    projectSite: "Southwark, London SE1 9AL",
    client: "Structural Masonry",
    createdBy: "12 May 2026",
    version: "v2.0",
    status: "Changes Required",
    lastUpdated: "12 May 2027",
  },
  {
    id: "#R-98234",
    reference: "London Bridge Refurbishment",
    projectSite: "Southwark, London SE1 9AL",
    client: "Structural Masonry",
    createdBy: "12 May 2026",
    version: "v2.0",
    status: "Changes Required",
    lastUpdated: "12 May 2027",
  },
  {
    id: "#R-98235",
    reference: "London Bridge Refurbishment",
    projectSite: "Southwark, London SE1 9AL",
    client: "Structural Masonry",
    createdBy: "12 May 2026",
    version: "v2.0",
    status: "Review Due",
    lastUpdated: "12 May 2027",
  },
  {
    id: "#R-98236",
    reference: "London Bridge Refurbishment",
    projectSite: "Southwark, London SE1 9AL",
    client: "Structural Masonry",
    createdBy: "12 May 2026",
    version: "v1.0",
    status: "Approved",
    lastUpdated: "12 May 2027",
  },
  {
    id: "#R-98237",
    reference: "London Bridge Refurbishment",
    projectSite: "Southwark, London SE1 9AL",
    client: "Structural Masonry",
    createdBy: "12 May 2026",
    version: "v2.0",
    status: "Approved",
    lastUpdated: "12 May 2027",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Draft":
      return "bg-[#64748b] text-white";
    case "Submitted":
      return "bg-[#1e293b] text-white";
    case "Changes Required":
      return "bg-[#fef3c7] text-[#b45309]";
    case "Review Due":
      return "bg-[#ea580c] text-white";
    case "Approved":
      return "bg-[#22c55e] text-white";
    default:
      return "bg-slate-500 text-white";
  }
};

const getStatusDot = (status: string) => {
  switch (status) {
    case "Draft":
      return "bg-[#64748b]";
    case "Submitted":
      return "bg-[#1e293b]";
    case "Approved":
      return "bg-[#22c55e]";
    case "Review Due":
      return "bg-[#ea580c]";
    default:
      return "bg-slate-500";
  }
};

export function PreviousAssessmentsPage() {
  return (
    <div className="flex flex-col gap-6 text-brand-primary pb-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary">
        <span>Dashboard</span>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span>RAMS Builder</span>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span className="text-brand-primary">Previous Assessments</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div className="space-y-1">
          <h1 className="text-[24px] font-bold leading-[1.2] text-brand-primary">
            Previous RAMS Assessments
          </h1>
          <p className="text-[14px] text-brand-secondary">
            Manage your RAMS assessments, records, review status and renewal dates efficiently in this central hub.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 xl:justify-end">
          <Button
            type="button"
            variant="outline"
            className="h-[38px] rounded-[6px] border-brand-primary bg-white px-4 text-[13px] font-bold text-brand-primary shadow-none hover:bg-slate-50"
          >
            Export Records
          </Button>
          <Button
            type="button"
            className="h-[38px] rounded-[6px] bg-brand-primary px-4 text-[13px] font-bold text-white hover:bg-[#0a1530]"
          >
            Create New RAMS Assessment
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SUMMARY_CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div key={idx} className="bg-white rounded-[12px] p-5 flex flex-col justify-between border border-[#e3e6ec] h-[110px]">
              <div className="flex justify-between items-start">
                <span className="text-[13px] text-brand-secondary">{card.title}</span>
                <Icon className={cn("size-4", card.iconColor)} />
              </div>
              <div>
                <div className="text-[28px] font-bold leading-none mb-1 text-brand-primary">{card.count}</div>
                <div className="text-[11px] text-brand-secondary">{card.description}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Table Section */}
      <div className="bg-white rounded-[12px] border border-[#e3e6ec] flex flex-col overflow-hidden">
        {/* Table Header & Filters */}
        <div className="p-5 flex flex-col gap-4 border-b border-[#e3e6ec]">
          <h2 className="text-[16px] font-bold text-brand-primary">RAMS Assessment Records</h2>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="relative w-full max-w-[320px]">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand-secondary" />
              <input
                type="text"
                placeholder="Search by name, ID or site..."
                className="h-10 w-full rounded-[6px] border border-[#e3e6ec] bg-white pl-9 pr-4 text-[13px] text-brand-primary placeholder:text-brand-secondary focus:border-brand-primary focus:outline-none"
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <SelectField<string>
                options={["Document Types", "RAMS", "Risk Assessment", "Method Statement"]} 
                value="Document Types" 
                onChange={() => {}} 
              />
              <SelectField<string>
                options={["All Status", "Draft", "Submitted", "Approved"]} 
                value="All Status" 
                onChange={() => {}} 
              />
              <SelectField<string>
                options={["Site : All Projects", "London Bridge", "Kings Cross"]} 
                value="Site : All Projects" 
                onChange={() => {}} 
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            {TABS.map((tab, idx) => (
              <button 
                key={tab} 
                className={cn(
                  "px-3 py-1.5 rounded-[20px] text-[12px] font-medium transition-colors",
                  idx === 0 
                    ? "bg-[#f1f5f9] text-brand-primary" 
                    : "text-brand-secondary hover:bg-slate-50"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="bg-[#eef2ff] text-brand-primary">
                <th className="w-12 px-4 py-3 font-bold">
                  <input type="checkbox" className="w-4 h-4 rounded-[4px] border-[#c5c6d0] accent-brand-primary" />
                </th>
                <th className="px-4 py-3 font-bold">RAMS Reference</th>
                <th className="px-4 py-3 font-bold">Project/Site</th>
                <th className="px-4 py-3 font-bold">Client</th>
                <th className="px-4 py-3 font-bold">Created By</th>
                <th className="px-4 py-3 font-bold">Version</th>
                <th className="px-4 py-3 font-bold">Status</th>
                <th className="px-4 py-3 font-bold">Last Updated</th>
                <th className="px-4 py-3 font-bold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e3e6ec]">
              {TABLE_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-4">
                    <input type="checkbox" className="w-4 h-4 rounded-[4px] border-[#c5c6d0] accent-brand-primary" />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="text-brand-primary">{row.reference}</span>
                      <span className="text-[11px] text-brand-secondary">ID: {row.id}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-brand-secondary">{row.projectSite}</td>
                  <td className="px-4 py-4 text-brand-secondary">{row.client}</td>
                  <td className="px-4 py-4 text-brand-secondary">{row.createdBy}</td>
                  <td className="px-4 py-4 text-brand-secondary">{row.version}</td>
                  <td className="px-4 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-[4px] text-[11px] font-bold inline-block",
                      getStatusBadge(row.status)
                    )}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-brand-secondary">{row.lastUpdated}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-3 text-brand-primary">
                      <button className="hover:text-blue-600 transition-colors">
                        <Eye className="size-4" />
                      </button>
                      <button className="hover:text-blue-600 transition-colors">
                        <Download className="size-4" />
                      </button>
                      <button className="hover:text-blue-600 transition-colors">
                        <MoreVertical className="size-4 text-brand-secondary" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Status Guide */}
        <div className="p-5 border-t border-[#e3e6ec] flex items-center gap-6 text-[12px] text-brand-secondary">
          <span>Status Guide:</span>
          {["Draft", "Submitted", "Approved", "Review Due"].map((status) => (
            <div key={status} className="flex items-center gap-1.5">
              <div className={cn("size-2 rounded-full", getStatusDot(status))} />
              <span>{status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-2">
        {/* Status Reference Guide */}
        <div className="xl:col-span-2 bg-white rounded-[12px] border border-[#e3e6ec] p-6">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="size-5 text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary">Status Reference Guide</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex flex-col gap-1.5">
              <h4 className="text-[13px] font-bold text-[#64748b]">Draft</h4>
              <p className="text-[12px] leading-5 text-brand-secondary">Document is currently being edited and has not yet been finalized for review.</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-[13px] font-bold text-[#b45309]">Submitted</h4>
              <p className="text-[12px] leading-5 text-brand-secondary">Finalized document awaiting management or client review and sign-off.</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-[13px] font-bold text-[#16a34a]">Approved</h4>
              <p className="text-[12px] leading-5 text-brand-secondary">Fully validated document, ready for site distribution and active use.</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-[13px] font-bold text-[#dc2626]">Requires Changes</h4>
              <p className="text-[12px] leading-5 text-brand-secondary">Document was reviewed and requires amendments before it can be approved.</p>
            </div>
          </div>
        </div>

        {/* Custom Document CTA */}
        <div className="bg-[#0f172a] rounded-[12px] p-8 flex flex-col gap-4 text-white relative overflow-hidden">
          <h3 className="text-[18px] font-bold relative z-10">Need a custom document?</h3>
          <p className="text-[13px] leading-[1.6] text-slate-300 relative z-10 mb-2">
            Can&apos;t find the specific template or RAMS you&apos;re looking for? Request a custom document from our expert team.
          </p>
          <Button className="w-fit bg-white text-brand-primary hover:bg-slate-100 font-bold text-[12px] h-9 px-4 relative z-10">
            Request Template
          </Button>
          
          {/* Background Icon */}
          <ClipboardList className="absolute -bottom-6 -right-6 size-40 text-white/5" />
        </div>
      </div>
    </div>
  );
}
