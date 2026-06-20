"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  CircleAlert,
  Copy,
  Eye,
  FileBadge2,
  FileText,
  FolderKanban,
  Grid2X2,
  Search,
  Share2,
  Trash2,
  Upload,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SavedFile = {
  id: string;
  name: string;
  project: string;
  category: string;
  format: string;
  source: string;
  version: string;
  dateSaved: string;
};

const TABS = [
  "All Files",
  "Generated Documents",
  "Completed Checklists",
  "Risk Assessments",
  "Drafts",
  "Uploaded Files",
  "Purchased Documents",
  "Permits",
  "COSHH",
  "Method Statements",
] as const;

const FILES: SavedFile[] = [
  {
    id: "abc-construction-rams",
    name: "ABC Construction RAMS",
    project: "ABC Construction",
    category: "RAMS",
    format: "PDF",
    source: "Builder",
    version: "v2",
    dateSaved: "10 May 2026",
  },
  {
    id: "workshop-inspection-checklist",
    name: "Workshop Inspection Checklist",
    project: "Workshop Site",
    category: "Inspection",
    format: "PDF",
    source: "Uploaded",
    version: "v1",
    dateSaved: "8 May 2026",
  },
  {
    id: "coshh-assessment-degreaser",
    name: "COSHH Assessment - Degreaser",
    project: "Factory Unit",
    category: "COSHH",
    format: "PDF",
    source: "Builder",
    version: "v2",
    dateSaved: "5 May 2026",
  },
  {
    id: "site-risk-assessment",
    name: "Site Risk Assessment",
    project: "Site A",
    category: "Risk Assessment",
    format: "PDF",
    source: "Builder",
    version: "v1",
    dateSaved: "10 May 2026",
  },
  {
    id: "completed-site-inspection-report",
    name: "Completed Site Inspection Report",
    project: "Main Office",
    category: "Inspection",
    format: "PDF",
    source: "Template Copy",
    version: "v3",
    dateSaved: "12 May 2026",
  },
  {
    id: "method-statement-scaffolding",
    name: "Method Statement - Scaffolding",
    project: "Project Alpha",
    category: "Method Statement",
    format: "DOCX",
    source: "Uploaded",
    version: "v2",
    dateSaved: "5 May 2026",
  },
];

const SUMMARY_CARDS = [
  {
    label: "Projects",
    value: "06",
    description: "Active client locations",
    icon: FolderKanban,
  },
  {
    label: "Categories",
    value: "08",
    description: "Personal organization tags",
    icon: Grid2X2,
  },
  {
    label: "Saved Files",
    value: "24",
    description: "Personal organization tags",
    icon: FileText,
  },
  {
    label: "Uploaded",
    value: "03",
    description: "Personal organization tags",
    icon: Upload,
  },
] as const;

const TOOLBAR_ACTIONS = [
  { label: "Manage Categories", hasChevron: true },
  { label: "Save Template Copy", hasChevron: false },
  { label: "Add Category", hasChevron: false },
  { label: "Add Project / Location", hasChevron: false },
  { label: "Create From Template", hasChevron: false },
] as const;

const STORAGE_USED_GB = 2.4;
const STORAGE_LIMIT_GB = 10;
const STORAGE_PERCENTAGE = (STORAGE_USED_GB / STORAGE_LIMIT_GB) * 100;

const actionButtonClass =
  "h-[34px] rounded-[6px] border-[#132651] px-4 text-[12px] font-medium text-[#132651] shadow-none";

function filterByTab(file: SavedFile, tab: (typeof TABS)[number]) {
  switch (tab) {
    case "All Files":
      return true;
    case "Generated Documents":
      return file.source === "Builder" || file.source === "Template Copy";
    case "Completed Checklists":
      return file.name.includes("Checklist") || file.category === "Inspection";
    case "Risk Assessments":
      return file.category === "Risk Assessment";
    case "Drafts":
      return false;
    case "Uploaded Files":
      return file.source === "Uploaded";
    case "Purchased Documents":
      return file.source === "Purchased";
    case "Permits":
      return file.category === "Permit";
    case "COSHH":
      return file.category === "COSHH";
    case "Method Statements":
      return file.category === "Method Statement";
    default:
      return true;
  }
}

function formatLabelCount(count: number) {
  return `${count} ${count === 1 ? "file" : "files"} stored`;
}

function SelectField({
  value,
  onChange,
  options,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-9.5 w-full appearance-none rounded-[6px] border border-[#d7dce5] bg-white px-4 pr-10 text-[12px] text-brand-secondary outline-none transition focus:border-brand-primary">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-brand-secondary" />
    </div>
  );
}

export function SavedFilesPage() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("All Files");
  const [searchTerm, setSearchTerm] = useState("");
  const [projectFilter, setProjectFilter] = useState("All Types");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [formatFilter, setFormatFilter] = useState("All Type");
  const [sourceFilter, setSourceFilter] = useState("All Sources");
  const [sortFilter, setSortFilter] = useState("Sort: Most Recent");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filteredFiles = FILES.filter((file) => {
    const matchesTab = filterByTab(file, activeTab);
    const matchesSearch =
      searchTerm.trim().length === 0 ||
      `${file.name} ${file.project} ${file.category} ${file.source}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesProject =
      projectFilter === "All Types" || file.project === projectFilter;
    const matchesCategory =
      categoryFilter === "All Categories" || file.category === categoryFilter;
    const matchesFormat = formatFilter === "All Type" || file.format === formatFilter;
    const matchesSource =
      sourceFilter === "All Sources" || file.source === sourceFilter;

    return (
      matchesTab &&
      matchesSearch &&
      matchesProject &&
      matchesCategory &&
      matchesFormat &&
      matchesSource
    );
  }).sort((left, right) => {
    if (sortFilter === "Sort: Oldest First") {
      return new Date(left.dateSaved).getTime() - new Date(right.dateSaved).getTime();
    }

    if (sortFilter === "Sort: Name A-Z") {
      return left.name.localeCompare(right.name);
    }

    return new Date(right.dateSaved).getTime() - new Date(left.dateSaved).getTime();
  });

  const allVisibleSelected =
    filteredFiles.length > 0 &&
    filteredFiles.every((file) => selectedIds.includes(file.id));

  const toggleSelection = (fileId: string) => {
    setSelectedIds((current) =>
      current.includes(fileId)
        ? current.filter((id) => id !== fileId)
        : [...current, fileId]
    );
  };

  const toggleSelectAll = () => {
    if (allVisibleSelected) {
      setSelectedIds((current) =>
        current.filter((id) => !filteredFiles.some((file) => file.id === id))
      );
      return;
    }

    const nextSelection = new Set(selectedIds);
    filteredFiles.forEach((file) => nextSelection.add(file.id));
    setSelectedIds(Array.from(nextSelection));
  };

  const projectOptions = [
    "All Types",
    ...Array.from(new Set(FILES.map((file) => file.project))),
  ];
  const categoryOptions = [
    "All Categories",
    ...Array.from(new Set(FILES.map((file) => file.category))),
  ];
  const formatOptions = [
    "All Type",
    ...Array.from(new Set(FILES.map((file) => file.format))),
  ];
  const sourceOptions = [
    "All Sources",
    ...Array.from(new Set(FILES.map((file) => file.source))),
  ];
  const sortOptions = [
    "Sort: Most Recent",
    "Sort: Oldest First",
    "Sort: Name A-Z",
  ];

  return (
    <div className="flex flex-col gap-6 text-brand-primary">
      <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary">
        <span>Dashboard</span>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span className="text-brand-primary">My Saved Files</span>
      </div>

      <div className="space-y-2">
        <h1 className="text-[30px] font-bold leading-[1.2] text-brand-primary">
          My Saved Files
        </h1>
        <p className="max-w-275 text-[16px] leading-6 text-brand-secondary">
          All saved RAMS, COSHH assessments, permits, method statements,
          inspection reports, risk assessments, purchased documents, uploaded
          files, and downloaded working files are stored here.
        </p>
      </div>

      <section className="flex items-start gap-3 rounded-[12px] border-[1.5px] border-[#fee685] bg-[#fffbeb] px-6 py-5">
        <CircleAlert className="mt-0.5 size-5 shrink-0 text-[#f97316]" />
        <div className="space-y-2 text-[14px] leading-[1.6]">
          <p className="font-semibold text-[#7b3306]">
            Files are stored for 12 months under your current plan.
          </p>
          <p className="text-[#bb4d00]">
            Need more storage? Upgrade storage from Buy Extras.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {SUMMARY_CARDS.map(({ label, value, description, icon: Icon }) => (
          <article
            key={label}
            className="rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-[0_1px_0_rgba(10,25,47,0.02)]">
            <div className="flex items-center justify-between">
              <p className="text-[14px] text-[#64748b]">{label}</p>
              <Icon className="size-4.5 text-brand-secondary" />
            </div>
            <div className="mt-6 space-y-1">
              <p className="text-[28px] font-bold leading-none text-brand-primary">
                {value}
              </p>
              <p className="text-[12px] text-brand-secondary">{description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="space-y-6">
        <div className="rounded-[12px] bg-[#f3f5f8] p-0.75">
          <div className="flex gap-1 overflow-x-auto no-scrollbar">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "rounded-[8px] px-3 py-1.5 text-[14px] whitespace-nowrap transition",
                  activeTab === tab
                    ? "bg-white text-brand-primary shadow-[0_1px_2px_rgba(15,23,42,0.08)]"
                    : "text-brand-primary"
                )}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <p className="pt-1 text-[14px] leading-[1.6] text-brand-secondary">
              Manage your saved documents, uploaded files, and project folders.
            </p>

            <div className="flex flex-wrap gap-3 xl:justify-end">
              {TOOLBAR_ACTIONS.map(({ label, hasChevron }) => (
                <Button
                  key={label}
                  variant="outline"
                  className={cn(actionButtonClass, "bg-white")}>
                  {label}
                  {hasChevron ? <ChevronDown className="size-4" /> : null}
                </Button>
              ))}
              <Button className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-medium text-white hover:bg-[#0d1b3a]">
                Upload File
              </Button>
            </div>
          </div>

          <section className="rounded-[12px] border border-[#d9dde5] bg-white p-4.25 shadow-[0_1px_1px_rgba(15,23,42,0.04)]">
            <div className="grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_repeat(5,minmax(0,0.45fr))]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-brand-secondary" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search files..."
                  className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-brand-bg-main pl-12 pr-4 text-[12px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
                />
              </div>

              <SelectField
                value={projectFilter}
                onChange={setProjectFilter}
                options={projectOptions}
              />
              <SelectField
                value={categoryFilter}
                onChange={setCategoryFilter}
                options={categoryOptions}
              />
              <SelectField
                value={formatFilter}
                onChange={setFormatFilter}
                options={formatOptions}
              />
              <SelectField
                value={sourceFilter}
                onChange={setSourceFilter}
                options={sourceOptions}
              />
              <SelectField
                value={sortFilter}
                onChange={setSortFilter}
                options={sortOptions}
              />
            </div>

            <div className="mt-4 flex flex-col gap-3 border-t border-[#edf0f4] pt-3 md:flex-row md:items-center md:justify-between">
              <p className="text-[12px] font-semibold text-brand-primary">
                {formatLabelCount(filteredFiles.length)}
              </p>

              <div className="flex items-center gap-3 self-end md:self-auto">
                <div className="h-1.5 w-42 overflow-hidden rounded-full bg-[#d3d7df]">
                  <div
                    className="h-full rounded-full bg-brand-primary"
                    style={{ width: `${STORAGE_PERCENTAGE}%` }}
                  />
                </div>
                <span className="text-[12px] text-brand-secondary">
                  {STORAGE_USED_GB} GB / {STORAGE_LIMIT_GB} GB
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="overflow-hidden rounded-[12px] border border-[#d9dde5] bg-white shadow-[0_1px_1px_rgba(15,23,42,0.04)]">
        <div className="overflow-x-auto">
          <table className="min-w-310 w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-[#cfe1fa] text-left text-[12px] font-semibold uppercase tracking-[0.02em] text-[#4d648b]">
                <th className="w-14 px-6 py-5">
                  <input
                    type="checkbox"
                    checked={allVisibleSelected}
                    onChange={toggleSelectAll}
                    aria-label="Select all visible files"
                    className="size-3.5 rounded-lg border border-[#c5c6cd] accent-brand-primary"
                  />
                </th>
                <th className="min-w-[320px] px-4 py-5">File Name</th>
                <th className="min-w-50 px-4 py-5">Type</th>
                <th className="min-w-40 px-4 py-5">Category</th>
                <th className="min-w-37.5 px-4 py-5">Type</th>
                <th className="min-w-35 px-4 py-5">Source</th>
                <th className="min-w-30 px-4 py-5">Version</th>
                <th className="min-w-40 px-4 py-5">Date Saved</th>
                <th className="min-w-50 px-4 py-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFiles.length > 0 ? (
                filteredFiles.map((file) => (
                  <tr
                    key={file.id}
                    className="text-[14px] text-brand-secondary transition hover:bg-[#fafbfd]">
                    <td className="border-b border-[#edf0f4] px-6 py-5 align-middle">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(file.id)}
                        onChange={() => toggleSelection(file.id)}
                        aria-label={`Select ${file.name}`}
                        className="size-3.5 rounded-lg border border-[#c5c6cd] accent-brand-primary"
                      />
                    </td>
                    <td className="border-b border-[#edf0f4] px-4 py-5">
                      <div className="flex items-center gap-3 text-brand-primary">
                        <FileBadge2 className="size-5 shrink-0 text-[#2962ff]" />
                        <span className="font-medium">{file.name}</span>
                      </div>
                    </td>
                    <td className="border-b border-[#edf0f4] px-4 py-5">
                      {file.project}
                    </td>
                    <td className="border-b border-[#edf0f4] px-4 py-5">
                      {file.category}
                    </td>
                    <td className="border-b border-[#edf0f4] px-4 py-5">
                      <span className="inline-flex rounded-lg bg-[#f3f5f8] px-1.75 py-0.5 text-[12px] text-brand-primary">
                        {file.format}
                      </span>
                    </td>
                    <td className="border-b border-[#edf0f4] px-4 py-5">
                      {file.source}
                    </td>
                    <td className="border-b border-[#edf0f4] px-4 py-5">
                      {file.version}
                    </td>
                    <td className="border-b border-[#edf0f4] px-4 py-5">
                      {file.dateSaved}
                    </td>
                    <td className="border-b border-[#edf0f4] px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="text-brand-primary hover:bg-[#f3f5f8]"
                          aria-label={`Preview ${file.name}`}>
                          <Eye className="size-4.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="text-brand-primary hover:bg-[#f3f5f8]"
                          aria-label={`Download ${file.name}`}>
                          <Upload className="size-4.5 rotate-180" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="text-brand-primary hover:bg-[#f3f5f8]"
                          aria-label={`Duplicate ${file.name}`}>
                          <Copy className="size-4.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="text-brand-primary hover:bg-[#f3f5f8]"
                          aria-label={`Share ${file.name}`}>
                          <Share2 className="size-4.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="text-brand-primary hover:bg-[#f3f5f8]"
                          aria-label={`Delete ${file.name}`}>
                          <Trash2 className="size-4.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={9}
                    className="px-6 py-16 text-center text-[14px] text-brand-secondary">
                    No files match the current tab and filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <p className="text-[14px] text-brand-secondary">
          Showing 1 to {filteredFiles.length} of {filteredFiles.length} files
        </p>

        <div className="flex items-center gap-2 self-start xl:self-auto">
          <Button
            variant="outline"
            className="h-9.5 rounded-[6px] border-[#d9dde5] px-4 text-[14px] text-brand-secondary opacity-50"
            disabled>
            Previous
          </Button>
          <Button className="h-9.5 min-w-9.5 rounded-[6px] bg-brand-primary px-4 text-[14px] text-white hover:bg-[#0d1b3a]">
            1
          </Button>
          <Button
            variant="outline"
            className="h-9.5 rounded-[6px] border-[#d9dde5] px-4 text-[14px] text-brand-primary opacity-50"
            disabled>
            Next
          </Button>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="flex flex-col gap-6 rounded-[8px] border border-[#e5e7eb] bg-white p-5.25 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[20px] font-bold text-brand-primary">Storage Used</h2>
            <p className="text-[14px] text-brand-secondary">
              {STORAGE_USED_GB} GB / {STORAGE_LIMIT_GB} GB
            </p>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-[#c8d0dd]">
            <div
              className="h-full rounded-full bg-brand-primary"
              style={{ width: `${STORAGE_PERCENTAGE}%` }}
            />
          </div>

          <div className="flex flex-col gap-2 text-[12px] md:flex-row md:items-center md:justify-between">
            <p className="text-brand-secondary">Retention: Files stored for 6 months</p>
            <button type="button" className="text-left text-[#2563eb]">
              Upgrade storage from Buy Extras
            </button>
          </div>
        </article>

        <article className="rounded-[8px] border border-[#e5e7eb] bg-white p-5.25 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
          <h2 className="text-[20px] font-bold text-brand-primary">Account Overview</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              { label: "PROJECTS", value: "6" },
              { label: "SAVED FILES", value: "24" },
              { label: "UPLOADED FILES", value: "3" },
            ].map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 text-center",
                  index < 2 ? "md:border-r md:border-[#d7dce5]" : ""
                )}>
                <span className="text-[20px] font-bold text-[#0a192f]">
                  {item.value}
                </span>
                <span className="text-[12px] text-brand-secondary">{item.label}</span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
