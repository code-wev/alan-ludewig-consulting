"use client";

import { useState, useMemo } from "react";
import { X, Search, ChevronDown, Eye, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RAMS_RECENT_ACTIVITY } from "../rams-builder/types";
import { cn } from "@/lib/utils";

interface ModalPreviousListProps {
  isOpen: boolean;
  onClose: () => void;
  onPreview: (projectName: string) => void;
}

export function ModalPreviousList({
  isOpen,
  onClose,
  onPreview,
}: ModalPreviousListProps) {
  const [searchVal, setSearchVal] = useState("");

  const filtered = useMemo(() => {
    return RAMS_RECENT_ACTIVITY.filter((item) =>
      `${item.projectName} ${item.siteAddress} ${item.documentType}`
        .toLowerCase()
        .includes(searchVal.toLowerCase())
    );
  }, [searchVal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/30 backdrop-blur-sm p-4 font-sans">
      <div className="w-full max-w-[1000px] rounded-xl border border-[#e3e6ec] bg-white p-6 shadow-2xl space-y-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#f3f5f8] pb-3">
          <div className="space-y-0.5">
            <h3 className="text-[18px] font-bold text-brand-primary">Recent RAMS Activity</h3>
            <p className="text-[12px] text-brand-secondary">View and inspect previous risk assessments and statements.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-brand-secondary hover:bg-slate-100 hover:text-brand-primary transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Search & Filter Row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand-secondary" />
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search by name, ID or keywords..."
              className="h-9 w-full rounded-[6px] border border-[#d7dce5] bg-white pl-9 pr-4 text-[12px] text-brand-primary outline-none focus:border-brand-primary"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {["All Categories", "All Types", "All Status", "Date Range"].map((label) => (
              <div
                key={label}
                className="h-9 px-3 rounded-[6px] border border-[#d7dce5] bg-[#fafbfd] flex items-center justify-between gap-4 text-[12px] text-brand-primary cursor-pointer hover:bg-white transition-colors"
              >
                <span>{label}</span>
                <ChevronDown className="size-3.5 text-brand-secondary" />
              </div>
            ))}
          </div>
        </div>

        {/* Table Area */}
        <div className="overflow-x-auto border border-[#e3e6ec] rounded-lg">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#d6e9ff] border-b border-[#e3e6ec] text-[13px] text-brand-primary font-bold">
                <th className="py-3 px-4">Project Name</th>
                <th className="py-3 px-4">Site Address</th>
                <th className="py-3 px-4">Work Type</th>
                <th className="py-3 px-4 w-[110px]">Status</th>
                <th className="py-3 px-4 w-[110px]">Created Date</th>
                <th className="py-3 px-4 w-[80px]">Version</th>
                <th className="py-3 px-4 w-[100px] text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, index) => (
                <tr key={index} className="border-b border-[#f3f5f8] last:border-0 text-[13px] text-brand-primary hover:bg-[#fafbfd]">
                  <td className="py-3.5 px-4 font-semibold">
                    <div className="flex items-center gap-2">
                      <FileText className="size-4 text-brand-secondary" />
                      <div>
                        <span>{item.projectName}</span>
                        <span className="text-[10px] text-brand-secondary block">ID: {item.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-brand-secondary">{item.siteAddress}</td>
                  <td className="py-3.5 px-4 text-brand-secondary">{item.documentType}</td>
                  <td className="py-3.5 px-4">
                    <span className={cn(
                      "inline-flex px-2 py-0.5 rounded text-[11px] font-bold",
                      item.status === "Completed" ? "bg-[#00bc7d] text-white" :
                      item.status === "Requires Review" ? "bg-[#fef3c7] text-[#92400e]" : "bg-[#667085] text-white"
                    )}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-brand-secondary">{item.createdDate}</td>
                  <td className="py-3.5 px-4 text-brand-secondary">{item.version}</td>
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        type="button"
                        onClick={() => onPreview(item.projectName)}
                        className="p-1 rounded text-[#4f79ff] hover:bg-[#eef4ff] transition-colors"
                        title="Preview"
                      >
                        <Eye className="size-4" />
                      </button>
                      <button
                        type="button"
                        className="p-1 rounded text-[#16a34a] hover:bg-[#eefbf2] transition-colors"
                        title="Download"
                      >
                        <Download className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-brand-secondary">
                    No matching assessments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end border-t border-[#f3f5f8] pt-4">
          <Button
            type="button"
            onClick={onClose}
            className="h-8.5 px-4 rounded-[6px] bg-brand-primary text-[12px] font-bold text-white hover:bg-brand-primary/95"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
