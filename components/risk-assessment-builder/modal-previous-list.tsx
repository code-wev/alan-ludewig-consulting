"use client";

import { useState, useMemo } from "react";
import { X, Search, ChevronDown, Eye, Bookmark, Download, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface ModalPreviousListProps {
  isOpen: boolean;
  onClose: () => void;
  onPreview: (projectName: string) => void;
}

interface AssessmentItem {
  id: string;
  title: string;
  location: string;
  workType: string;
  status: "Completed" | "In Review";
  dateCreated: string;
  lastUpdated: string;
  bookmarked?: boolean;
}

const INITIAL_MOCK_ASSESSMENTS: AssessmentItem[] = [
  { id: "1", title: "Roof Repair", location: "Main Site", workType: "Roofing", status: "Completed", dateCreated: "12 May 2026", lastUpdated: "14 May 2026", bookmarked: false },
  { id: "2", title: "Electrical Fit-out", location: "Factory B", workType: "Electrical", status: "Completed", dateCreated: "12 May 2026", lastUpdated: "14 May 2026", bookmarked: false },
  { id: "3", title: "HVAC Installation", location: "Central Mall", workType: "Mechanical", status: "Completed", dateCreated: "12 May 2026", lastUpdated: "14 May 2026", bookmarked: false },
  { id: "4", title: "Electrical Fit-out", location: "Main Site", workType: "Roofing", status: "In Review", dateCreated: "12 May 2026", lastUpdated: "14 May 2026", bookmarked: false },
  { id: "5", title: "Electrical Fit-out", location: "Central Mall", workType: "Mechanical", status: "Completed", dateCreated: "12 May 2026", lastUpdated: "14 May 2026", bookmarked: false },
  { id: "6", title: "Roof Repair", location: "Factory B", workType: "Roofing", status: "Completed", dateCreated: "12 May 2026", lastUpdated: "14 May 2026", bookmarked: false },
  { id: "7", title: "Electrical Fit-out", location: "North Wing", workType: "Electrical", status: "Completed", dateCreated: "12 May 2026", lastUpdated: "14 May 2026", bookmarked: false },
  { id: "8", title: "HVAC Installation", location: "Central Mall", workType: "Decorating", status: "In Review", dateCreated: "12 May 2026", lastUpdated: "14 May 2026", bookmarked: false },
];

export function ModalPreviousList({
  isOpen,
  onClose,
  onPreview,
}: ModalPreviousListProps) {
  const [assessments, setAssessments] = useState<AssessmentItem[]>(INITIAL_MOCK_ASSESSMENTS);
  const [searchVal, setSearchVal] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const toggleBookmark = (id: string) => {
    setAssessments((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newBookmarkState = !item.bookmarked;
          toast.success(newBookmarkState ? "Assessment bookmarked" : "Bookmark removed");
          return { ...item, bookmarked: newBookmarkState };
        }
        return item;
      })
    );
  };

  const deleteAssessment = (id: string) => {
    setAssessments((prev) => prev.filter((item) => item.id !== id));
    toast.error("Assessment deleted");
  };

  const filtered = useMemo(() => {
    return assessments.filter((item) => {
      const matchesSearch =
        `${item.title} ${item.location} ${item.workType}`
          .toLowerCase()
          .includes(searchVal.toLowerCase());
      
      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [assessments, searchVal, statusFilter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 backdrop-blur-sm p-4 font-sans">
      <div className="w-full max-w-[1100px] rounded-xl border border-[#e3e6ec] bg-white p-8 shadow-2xl space-y-6 relative flex flex-col">
        
        {/* Close Button - Top Right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 p-1.5 rounded-full text-brand-secondary hover:bg-slate-100 hover:text-brand-primary transition-colors cursor-pointer"
        >
          <X className="size-5" />
        </button>

        {/* Modal Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pr-10">
          <div>
            <h3 className="text-[20px] font-bold text-brand-primary">Previous Risk Assessments</h3>
          </div>
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-[220px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand-secondary" />
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Search assessments..."
                className="h-10 w-full rounded-[6px] border border-[#DCE0E7] bg-white pl-9 pr-4 text-[13px] text-brand-primary outline-none focus:border-brand-primary transition placeholder:text-[#A3ACBA]"
              />
            </div>
            {/* Status Dropdown */}
            <div className="relative w-full sm:w-[130px]">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-10 w-full rounded-[6px] border border-[#DCE0E7] bg-white pl-3.5 pr-8 text-[13px] text-brand-primary outline-none focus:border-brand-primary appearance-none cursor-pointer transition"
              >
                <option value="All">All Status</option>
                <option value="Completed">Completed</option>
                <option value="In Review">In Review</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-[#8a96ab] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Table Area */}
        <div className="overflow-x-auto border border-[#e3e6ec] rounded-lg">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[#E8F0FE] border-b border-[#e3e6ec] text-[13px] text-brand-primary font-bold">
                <th className="py-3 px-4 w-[48px]">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-[#DCE0E7] text-brand-primary focus:ring-brand-primary cursor-pointer accent-brand-primary"
                  />
                </th>
                <th className="py-3.5 px-4 font-bold">Assessment Title</th>
                <th className="py-3.5 px-4 font-bold">Project/Location</th>
                <th className="py-3.5 px-4 font-bold">Work Type</th>
                <th className="py-3.5 px-4 font-bold w-[120px]">Status</th>
                <th className="py-3.5 px-4 font-bold w-[140px]">Date Created</th>
                <th className="py-3.5 px-4 font-bold w-[140px]">Last Updated</th>
                <th className="py-3.5 px-4 font-bold w-[150px] text-right pr-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#f3f5f8] last:border-0 text-[13.5px] text-brand-primary hover:bg-[#fafbfd]"
                >
                  <td className="py-3.5 px-4">
                    <input
                      type="checkbox"
                      className="size-4 rounded border-[#DCE0E7] text-brand-primary focus:ring-brand-primary cursor-pointer accent-brand-primary"
                    />
                  </td>
                  <td className="py-3.5 px-4 font-semibold">
                    <button
                      type="button"
                      onClick={() => onPreview(item.title)}
                      className="hover:underline text-left text-brand-primary focus:outline-none"
                    >
                      {item.title}
                    </button>
                  </td>
                  <td className="py-3.5 px-4 text-brand-secondary">{item.location}</td>
                  <td className="py-3.5 px-4 text-brand-secondary">{item.workType}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold text-white leading-none ${
                        item.status === "Completed"
                          ? "bg-[#00c286]"
                          : "bg-[#FF7A00]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-brand-secondary">{item.dateCreated}</td>
                  <td className="py-3.5 px-4 text-brand-secondary">{item.lastUpdated}</td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center justify-end gap-3.5 pr-2">
                      <button
                        type="button"
                        onClick={() => onPreview(item.title)}
                        className="p-1 rounded text-[#1a73e8] hover:bg-[#eef4ff] transition-colors cursor-pointer"
                        title="Preview"
                      >
                        <Eye className="size-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleBookmark(item.id)}
                        className={`p-1 rounded transition-colors cursor-pointer ${
                          item.bookmarked
                            ? "text-[#1a73e8] bg-[#eef4ff]"
                            : "text-[#8a96ab] hover:text-brand-primary hover:bg-slate-50"
                        }`}
                        title="Bookmark"
                      >
                        <Bookmark
                          className={`size-4 ${
                            item.bookmarked ? "fill-[#1a73e8]" : ""
                          }`}
                        />
                      </button>
                      <button
                        type="button"
                        className="p-1 rounded text-[#00c286] hover:bg-[#eefbf2] transition-colors cursor-pointer"
                        title="Download"
                      >
                        <Download className="size-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteAssessment(item.id)}
                        className="p-1 rounded text-[#EF4444] hover:bg-[#ffeef0] transition-colors cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-brand-secondary text-[14px]">
                    No matching assessments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
