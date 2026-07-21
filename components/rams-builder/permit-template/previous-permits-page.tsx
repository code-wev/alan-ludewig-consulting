"use client";

import {
  ChevronRight,
  Search,
  Eye,
  Trash2,
  Archive,
  ClipboardList,
  CheckCircle2,
  Bell,
  MoreVertical,
  PenSquare,
  Info,
  Calendar,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { PermitReviewCommentsModal } from "./permit-review-comments-modal";
import { ArchivePermitModal } from "./archive-permit-modal";
import { DeleteDraftPermitModal } from "./delete-draft-permit-modal";
import { SuspendPermitModal } from "./suspend-permit-modal";
import { RevalidatePermitModal } from "./revalidate-permit-modal";
import { Button } from "@/components/ui/button";
import { SelectField } from "@/components/saved-files/components/select-field";
import { cn } from "@/lib/utils";

const SUMMARY_CARDS = [
  {
    title: "Draft Permits",
    count: "5",
    description: "Continue incomplete permits",
    icon: PenSquare,
    iconColor: "text-[#64748b]",
  },
  {
    title: "Pending Approval",
    count: "3",
    description: "Awaiting authorisation",
    icon: ClipboardList,
    iconColor: "text-[#dc2626]",
  },
  {
    title: "Active Permits",
    count: "8",
    description: "Currently live on site",
    icon: CheckCircle2,
    iconColor: "text-[#16a34a]",
  },
  {
    title: "Expiring Soon",
    count: "2",
    description: "Require review or extension",
    icon: Bell,
    iconColor: "text-[#dc2626]",
  },
];

const TABLE_DATA = [
  {
    id: "PTW-2026-0042",
    type: "Hot Works Permit",
    site: "Horizon Site A",
    holder: "James Wilson",
    issuer: "Alan Ludewig",
    start: "18 May 2026",
    expiry: "17:00",
    status: "Active",
  },
  {
    id: "PTW-2026-0042",
    type: "Electrical Isolation Permit",
    site: "Riverside Development",
    holder: "James Wilson",
    issuer: "Mark Evans",
    start: "18 May 2026",
    expiry: "17:00",
    status: "Pending",
  },
  {
    id: "PTW-2026-0042",
    type: "Confined Space Permit",
    site: "Station House Maintenance",
    holder: "James Wilson",
    issuer: "Alan Ludewig",
    start: "18 May 2026",
    expiry: "17:00",
    status: "Expired",
  },
  {
    id: "PTW-2026-0042",
    type: "Work at Height Permit",
    site: "Southgate Offices",
    holder: "James Wilson",
    issuer: "Sarah Wilson",
    start: "18 May 2026",
    expiry: "17:00",
    status: "Closed",
  },
  {
    id: "PTW-2026-0042",
    type: "Excavation Permit",
    site: "Eastbrook Site",
    holder: "James Wilson",
    issuer: "Alan Ludewig",
    start: "18 May 2026",
    expiry: "17:00",
    status: "Draft",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-[#00bc7d] text-white";
    case "Pending":
      return "bg-[#fef3c7] text-[#92400e]";
    case "Expired":
      return "bg-[#fee2e2] text-[#991b1b]";
    case "Closed":
      return "bg-[#1e293b] text-white";
    case "Draft":
      return "bg-[#e2e8f0] text-[#475569]";
    default:
      return "bg-slate-500 text-white";
  }
};

export function PreviousPermitsPage() {
  const [showReviewComments, setShowReviewComments] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  const [showRevalidateModal, setShowRevalidateModal] = useState(false);
  const [activeDropdownRow, setActiveDropdownRow] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdownRow(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-8 text-brand-primary pb-12 w-full max-w-416">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary">
        <span>Dashboard</span>
        <ChevronRight className="size-3.5 text-brand-secondary" />
        <span>RAMS Builder</span>
        <ChevronRight className="size-3.5 text-brand-secondary" />
        <span className="text-brand-primary">
          Permit Template / Permit Completion
        </span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-[30px] font-bold leading-9 text-brand-primary">
            Previous Permits
          </h1>
          <p className="text-[16px] leading-6 text-brand-secondary">
            Manage draft, active, expired, closed and archived permit records.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="outline"
            className="h-8.5 rounded-[6px] border-brand-primary bg-white px-4 text-[12px] font-bold text-brand-primary shadow-none hover:bg-slate-50"
          >
            Export Permits
          </Button>
          <Button
            type="button"
            className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0a1530]"
          >
            Create New Permit
          </Button>
        </div>
      </div>

      {/* Reminder Callout */}
      <div className="bg-[#e4ebfe] border border-[#adc6ff]/50 rounded-[8px] p-4.25 flex items-center gap-4">
        <Info className="size-5 text-brand-primary" />
        <p className="text-[14px] text-brand-primary">
          <span className="font-bold">Reminder :</span>
          {
            " Documents generated using this tool are templates. Review and adapt them to your specific circumstances before issuing for use. Final responsibility for content rests with the user."
          }
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {SUMMARY_CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-[12px] p-5 flex flex-col gap-1 shadow-sm border border-transparent hover:border-gray-100"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="size-9 bg-slate-50 flex items-center justify-center rounded-[8px]">
                  <Icon className={cn("size-4.5", card.iconColor)} />
                </div>
                <div className="text-[28px] font-bold leading-none text-brand-primary">
                  {card.count}
                </div>
              </div>
              <div className="text-[16px] font-bold text-brand-primary mt-1">
                {card.title}
              </div>
              <div className="text-[14px] text-brand-secondary">
                {card.description}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Table Section */}
      <div className="bg-white rounded-[12px] border-[1.5px] border-[#e3e6ec] flex flex-col pt-[21.5px] gap-6">
        {/* Tab List */}
        <div className="px-6">
          <div className="bg-[#f3f5f8] h-9 rounded-[12px] p-0.75 flex items-center w-fit">
            {[
              "All Forms",
              "Drafts",
              "Pending Approval",
              "Active",
              "Suspended",
              "Expired",
              "Closed",
              "Archived",
            ].map((tab, idx) => (
              <div
                key={idx}
                className={cn(
                  "px-[9.5px] py-[5.5px] h-full flex items-center justify-center rounded-[6px] text-[14px] cursor-pointer",
                  idx === 0
                    ? "bg-white text-brand-primary shadow-sm"
                    : "text-brand-primary hover:bg-white/50",
                )}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* Search & Filters */}
        <div className="px-6">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
            <div className="relative w-116.25 h-9">
              <Search className="absolute left-4.25 top-1/2 -translate-y-1/2 size-4 text-brand-secondary" />
              <input
                type="text"
                placeholder="Search permit reference, site, permit holder or permit type..."
                className="w-full h-full rounded-[6px] border border-[#e3e6ec] bg-white pl-10.25 pr-4 text-[14px] text-brand-primary placeholder:text-brand-secondary focus:border-brand-primary focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <SelectField<string>
                options={["Project / Site"]}
                value="Project / Site"
                onChange={() => {}}
              />
              <SelectField<string>
                options={["Permit Holder"]}
                value="Permit Holder"
                onChange={() => {}}
              />
              <SelectField<string>
                options={["Permit Issuer"]}
                value="Permit Issuer"
                onChange={() => {}}
              />
              <SelectField<string>
                options={["Permit Type"]}
                value="Permit Type"
                onChange={() => {}}
              />
              <SelectField<string>
                options={["Status"]}
                value="Status"
                onChange={() => {}}
              />
              <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[6px] h-9 px-4 flex items-center justify-between gap-2 cursor-pointer w-35.25">
                <span className="text-[14px] text-brand-secondary">
                  Date Range
                </span>
                <Calendar className="size-3.5 text-brand-secondary" />
              </div>
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="w-full overflow-x-auto rounded-b-[12px]">
          <table className="w-full text-left min-w-300 border-collapse">
            <thead>
              <tr className="bg-[#d6e9ff] border-b-[1.5px] border-[#f3f5f8]">
                <th className="py-2.75 px-6 w-12">
                  <input
                    type="checkbox"
                    className="rounded-lg border-[#c5c6cd]"
                  />
                </th>
                <th className="py-2.75 pr-5 text-[14px] font-bold text-brand-primary">
                  Permit Reference
                </th>
                <th className="py-2.75 pr-5 text-[14px] font-bold text-brand-primary">
                  Permit Type
                </th>
                <th className="py-2.75 pr-5 text-[14px] font-bold text-brand-primary">
                  Project/Site
                </th>
                <th className="py-2.75 pr-5 text-[14px] font-bold text-brand-primary">
                  Permit Holder
                </th>
                <th className="py-2.75 pr-5 text-[14px] font-bold text-brand-primary">
                  Permit Issuer
                </th>
                <th className="py-2.75 pr-5 text-[14px] font-bold text-brand-primary">
                  Start Date/Time
                </th>
                <th className="py-2.75 pr-5 text-[14px] font-bold text-brand-primary">
                  Expiry Date/ Time
                </th>
                <th className="py-2.75 pr-5 text-[14px] font-bold text-brand-primary">
                  Status
                </th>
                <th className="py-2.75 pr-6 text-[14px] font-bold text-brand-primary">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((row, index) => (
                <tr
                  key={index}
                  className="border-b-[1.5px] border-[#f3f5f8] hover:bg-slate-50/50 relative"
                >
                  <td className="py-[19.5px] px-6">
                    <input
                      type="checkbox"
                      className="rounded-lg border-[#c5c6cd]"
                    />
                  </td>
                  <td className="py-[19.5px] pr-5 text-[14px] text-brand-primary">
                    {row.id}
                  </td>
                  <td className="py-[19.5px] pr-5 text-[14px] text-brand-secondary">
                    {row.type}
                  </td>
                  <td className="py-[19.5px] pr-5 text-[14px] text-brand-secondary">
                    {row.site}
                  </td>
                  <td className="py-[19.5px] pr-5 text-[14px] text-brand-secondary">
                    {row.holder}
                  </td>
                  <td className="py-[19.5px] pr-5 text-[14px] text-brand-secondary">
                    <span className="block">{row.issuer.split(" ")[0]}</span>
                    <span className="block">{row.issuer.split(" ")[1]}</span>
                  </td>
                  <td className="py-[19.5px] pr-5 text-[14px] text-brand-secondary">
                    {row.start}
                  </td>
                  <td className="py-[19.5px] pr-5 text-[14px] text-brand-secondary">
                    {row.expiry}
                  </td>
                  <td className="py-[19.5px] pr-5">
                    <span
                      className={cn(
                        "px-2.25 py-0.5 rounded-[6px] text-[12px]",
                        getStatusBadge(row.status),
                      )}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-[19.5px] pr-6">
                    <div className="flex items-center gap-2">
                      <button
                        className="text-brand-primary hover:text-blue-600"
                        onClick={() => setShowReviewComments(true)}
                      >
                        <Eye className="size-4.5" />
                      </button>
                      <button
                        className="text-brand-secondary hover:text-gray-900"
                        onClick={() => setShowArchiveModal(true)}
                      >
                        <Archive className="size-4.5" />
                      </button>
                      <button
                        className="text-brand-secondary hover:text-red-600"
                        onClick={() => setShowDeleteModal(true)}
                      >
                        <Trash2 className="size-4.5" />
                      </button>
                      <button 
                        className="text-brand-secondary hover:text-gray-900"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdownRow(activeDropdownRow === index ? null : index);
                        }}
                      >
                        <MoreVertical className="size-4.5" />
                      </button>
                      
                      {activeDropdownRow === index && (
                        <div 
                          ref={dropdownRef}
                          className="absolute right-6 top-16 z-10 w-45 bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden py-1"
                        >
                          <button 
                            className="w-full h-9 px-4 text-left text-[14px] text-brand-secondary hover:text-brand-primary hover:bg-slate-50"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowSuspendModal(true);
                              setActiveDropdownRow(null);
                            }}
                          >
                            Suspend Permit
                          </button>
                          <button 
                            className="w-full h-9 px-4 text-left text-[14px] text-brand-secondary hover:text-brand-primary hover:bg-slate-50"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowRevalidateModal(true);
                              setActiveDropdownRow(null);
                            }}
                          >
                            Revalidate Permit
                          </button>
                          <button className="w-full h-9 px-4 text-left text-[14px] text-brand-secondary hover:text-brand-primary hover:bg-slate-50">
                            Duplicate Permit
                          </button>
                          <button className="w-full h-9 px-4 text-left text-[14px] text-brand-secondary hover:text-brand-primary hover:bg-slate-50">
                            Permit History
                          </button>
                          <button className="w-full h-9 px-4 text-left text-[14px] text-brand-secondary hover:text-brand-primary hover:bg-slate-50">
                            Close Permit
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showReviewComments && (
        <PermitReviewCommentsModal
          onClose={() => setShowReviewComments(false)}
        />
      )}

      {showArchiveModal && (
        <ArchivePermitModal onClose={() => setShowArchiveModal(false)} />
      )}

      {showDeleteModal && (
        <DeleteDraftPermitModal onClose={() => setShowDeleteModal(false)} />
      )}

      {showSuspendModal && (
        <SuspendPermitModal onClose={() => setShowSuspendModal(false)} />
      )}

      {showRevalidateModal && (
        <RevalidatePermitModal onClose={() => setShowRevalidateModal(false)} />
      )}
    </div>
  );
}
