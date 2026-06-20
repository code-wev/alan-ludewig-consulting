"use client";

import { useEffect, useState } from "react";
import {
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  CircleAlert,
  Copy,
  Eye,
  File,
  FileBadge2,
  FileCog,
  FileText,
  Flame,
  FolderOpen,
  FolderKanban,
  Grid2X2,
  Shield,
  Search,
  Share2,
  Trash2,
  Upload,
  X,
  ListChecks,
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

type CategoryEntry = {
  id: string;
  name: string;
  description: string;
  type?: string;
  projectLocation?: string;
  icon?: string;
  color?: string;
  isDefault?: boolean;
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

const INITIAL_CATEGORIES: CategoryEntry[] = [
  {
    id: "rams",
    name: "RAMS",
    description: "Risk assessment and method statement bundles.",
  },
  {
    id: "inspection",
    name: "Inspection",
    description: "Inspection checklists and completed site reports.",
  },
  {
    id: "coshh",
    name: "COSHH",
    description: "Chemical and hazardous-substance assessments.",
  },
  {
    id: "risk-assessment",
    name: "Risk Assessment",
    description: "Project and task-specific risk documents.",
  },
  {
    id: "method-statement",
    name: "Method Statement",
    description: "Procedural task statements and work instructions.",
  },
  {
    id: "permit",
    name: "Permit",
    description: "Permit-to-work forms and authorizations.",
  },
  {
    id: "template-copy",
    name: "Template Copy",
    description: "Copied files generated from internal templates.",
  },
  {
    id: "uploaded",
    name: "Uploaded",
    description: "User-uploaded working documents and attachments.",
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

const CATEGORY_TYPE_OPTIONS = [
  "General Documents",
  "Safety Documents",
  "Project Records",
  "Operational Files",
] as const;

const DEFAULT_LOCATION_OPTIONS = [
  "None",
  ...Array.from(new Set(FILES.map((file) => file.project))),
] as const;

const CATEGORY_ICON_OPTIONS = [
  { id: "folder", icon: FolderOpen, label: "Folder" },
  { id: "file", icon: File, label: "File" },
  { id: "checklist", icon: ListChecks, label: "Checklist" },
  { id: "process", icon: FileCog, label: "Process" },
  { id: "safety", icon: Flame, label: "Safety" },
  { id: "building", icon: Building2, label: "Building" },
  { id: "shield", icon: Shield, label: "Shield" },
] as const;

const CATEGORY_COLOR_OPTIONS = [
  "#132651",
  "#505E7C",
  "#8B8E98",
  "#109A62",
  "#F56508",
] as const;

const TEMPLATE_COPY_PREVIEW = {
  name: "Working at Height Risk Assessment",
  category: "Risk Assessment",
  format: "PDF/DOCX",
  version: "v2.4",
  source: "Document Library",
  projectLocation: "ABC Construction",
} as const;

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

function slugifyCategoryName(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function SelectField({
  id,
  value,
  onChange,
  options,
  className,
  selectClassName,
}: {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
  selectClassName?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "h-9.5 w-full appearance-none rounded-[6px] border border-[#d7dce5] bg-white px-4 pr-10 text-[12px] text-brand-secondary outline-none transition focus:border-brand-primary",
          selectClassName
        )}>
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
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isSaveTemplateModalOpen, setIsSaveTemplateModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryDescription, setNewCategoryDescription] = useState("");
  const [newCategoryType, setNewCategoryType] = useState<string>(
    CATEGORY_TYPE_OPTIONS[0]
  );
  const [newCategoryProjectLocation, setNewCategoryProjectLocation] =
    useState<string>(DEFAULT_LOCATION_OPTIONS[0]);
  const [selectedCategoryIcon, setSelectedCategoryIcon] = useState<string>(
    CATEGORY_ICON_OPTIONS[0].id
  );
  const [selectedCategoryColor, setSelectedCategoryColor] = useState<string>(
    CATEGORY_COLOR_OPTIONS[0]
  );
  const [isDefaultCategory, setIsDefaultCategory] = useState(false);
  const [categoryError, setCategoryError] = useState("");
  const [saveTemplateCategory, setSaveTemplateCategory] =
    useState("Select category");
  const [saveTemplateProjectLocation, setSaveTemplateProjectLocation] =
    useState<string>(TEMPLATE_COPY_PREVIEW.projectLocation);
  const [saveTemplateNotes, setSaveTemplateNotes] = useState("");
  const [notifyOnDocumentUpdate, setNotifyOnDocumentUpdate] = useState(false);
  const [saveLatestVersionByDefault, setSaveLatestVersionByDefault] =
    useState(false);
  const [saveTemplateError, setSaveTemplateError] = useState("");
  const [returnToSaveTemplateAfterCategory, setReturnToSaveTemplateAfterCategory] =
    useState(false);

  useEffect(() => {
    if (!isAddCategoryModalOpen && !isSaveTemplateModalOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAddCategoryModalOpen(false);
        setIsSaveTemplateModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isAddCategoryModalOpen, isSaveTemplateModalOpen]);

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

  const openAddCategoryModal = () => {
    setCategoryError("");
    setNewCategoryName("");
    setNewCategoryDescription("");
    setNewCategoryType(CATEGORY_TYPE_OPTIONS[0]);
    setNewCategoryProjectLocation(DEFAULT_LOCATION_OPTIONS[0]);
    setSelectedCategoryIcon(CATEGORY_ICON_OPTIONS[0].id);
    setSelectedCategoryColor(CATEGORY_COLOR_OPTIONS[0]);
    setIsDefaultCategory(false);
    setIsAddCategoryModalOpen(true);
  };

  const openSaveTemplateModal = () => {
    setSaveTemplateCategory("Select category");
    setSaveTemplateProjectLocation(TEMPLATE_COPY_PREVIEW.projectLocation);
    setSaveTemplateNotes("");
    setNotifyOnDocumentUpdate(false);
    setSaveLatestVersionByDefault(false);
    setSaveTemplateError("");
    setIsSaveTemplateModalOpen(true);
  };

  const closeAddCategoryModal = () => {
    setIsAddCategoryModalOpen(false);
    setCategoryError("");
    setReturnToSaveTemplateAfterCategory(false);
  };

  const closeSaveTemplateModal = () => {
    setIsSaveTemplateModalOpen(false);
    setSaveTemplateError("");
  };

  const handleOpenCategoryModalFromSaveTemplate = () => {
    setReturnToSaveTemplateAfterCategory(true);
    closeSaveTemplateModal();
    openAddCategoryModal();
  };

  const handleCreateCategory = () => {
    const trimmedName = newCategoryName.trim();
    const trimmedDescription = newCategoryDescription.trim();

    if (!trimmedName) {
      setCategoryError("Category name is required.");
      return;
    }

    const duplicateCategory = categories.some(
      (category) => category.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (duplicateCategory) {
      setCategoryError("This category already exists.");
      return;
    }

    setCategories((current) => [
      ...current,
      {
        id: slugifyCategoryName(trimmedName) || `category-${current.length + 1}`,
        name: trimmedName,
        description: trimmedDescription,
        type: newCategoryType,
        projectLocation: newCategoryProjectLocation,
        icon: selectedCategoryIcon,
        color: selectedCategoryColor,
        isDefault: isDefaultCategory,
      },
    ]);
    setCategoryFilter(trimmedName);
    if (returnToSaveTemplateAfterCategory) {
      setSaveTemplateCategory(trimmedName);
      setSaveTemplateError("");
      setIsSaveTemplateModalOpen(true);
      setReturnToSaveTemplateAfterCategory(false);
    }
    closeAddCategoryModal();
  };

  const handleSaveTemplateCopy = () => {
    if (saveTemplateCategory === "Select category") {
      setSaveTemplateError("Please select a category before saving.");
      return;
    }

    closeSaveTemplateModal();
  };

  const projectOptions = [
    "All Types",
    ...Array.from(new Set(FILES.map((file) => file.project))),
  ];
  const categoryOptions = [
    "All Categories",
    ...categories.map((category) => category.name),
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
                  onClick={
                    label === "Add Category"
                      ? openAddCategoryModal
                      : label === "Save Template Copy"
                        ? openSaveTemplateModal
                        : undefined
                  }
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

      {isAddCategoryModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
          onClick={closeAddCategoryModal}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-category-title"
            aria-describedby="add-category-description"
            className="w-full max-w-223.5 rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
            onClick={(event) => event.stopPropagation()}>
            <div className="relative flex flex-col gap-6 px-6 py-6 md:px-6 md:py-6">
              <div className="flex min-h-8 items-start pr-12">
                <h2
                  id="add-category-title"
                  className="text-[20px] font-bold leading-[1.6] text-brand-primary">
                  Add New Category
                </h2>
                <p id="add-category-description" className="sr-only">
                  Create a personal category for your saved files.
                </p>
              </div>

              <button
                type="button"
                onClick={closeAddCategoryModal}
                className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
                aria-label="Close add category modal">
                <X className="size-4.5" />
              </button>

              <div className="flex flex-col gap-3">
                <label
                  htmlFor="category-name"
                  className="text-[14px] leading-[1.6] text-brand-primary">
                  Category Name<span className="text-[#d92d20]">*</span>
                </label>
                <input
                  id="category-name"
                  value={newCategoryName}
                  onChange={(event) => {
                    setNewCategoryName(event.target.value);
                    if (categoryError) {
                      setCategoryError("");
                    }
                  }}
                  placeholder="e.g. Monthly Safety Audits"
                  className={cn(
                    "h-12.75 w-full rounded-[6px] border-[1.5px] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary",
                    categoryError ? "border-[#d92d20]" : "border-[#e3e6ec]"
                  )}
                />
                {categoryError ? (
                  <p className="text-[13px] font-medium text-[#b42318]">
                    {categoryError}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="category-type"
                    className="text-[14px] leading-[1.6] text-brand-primary">
                    Category Type
                  </label>
                  <SelectField
                    id="category-type"
                    value={newCategoryType}
                    onChange={setNewCategoryType}
                    options={[...CATEGORY_TYPE_OPTIONS]}
                    className="w-full"
                    selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="default-project-location"
                    className="text-[14px] leading-[1.6] text-brand-primary">
                    Default Project/Location
                  </label>
                  <SelectField
                    id="default-project-location"
                    value={newCategoryProjectLocation}
                    onChange={setNewCategoryProjectLocation}
                    options={[...DEFAULT_LOCATION_OPTIONS]}
                    className="w-full"
                    selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="category-description"
                  className="text-[14px] leading-[1.6] text-brand-primary">
                  Description (Optional)
                </label>
                <textarea
                  id="category-description"
                  value={newCategoryDescription}
                  onChange={(event) => setNewCategoryDescription(event.target.value)}
                  placeholder="Brief overview of the scope and safety requirements..."
                  rows={3}
                  className="min-h-19.5 w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] leading-[1.6] text-brand-primary">
                    Category Type
                  </p>
                  <div className="grid grid-cols-5 gap-2 sm:w-max">
                    {CATEGORY_ICON_OPTIONS.map(({ id, icon: Icon, label }) => {
                      const isSelected = selectedCategoryIcon === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setSelectedCategoryIcon(id)}
                          aria-label={`Select ${label} icon`}
                          aria-pressed={isSelected}
                          className={cn(
                            "flex size-10 items-center justify-center rounded-xs border transition",
                            isSelected
                              ? "border-brand-primary bg-brand-primary text-white"
                              : "border-[#e3e6ec] bg-white text-brand-primary hover:border-[#c7d0e1]"
                          )}>
                          <Icon className="size-4.25" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[14px] leading-[1.6] text-brand-primary">
                    Default Project/Location
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORY_COLOR_OPTIONS.map((color) => {
                      const isSelected = selectedCategoryColor === color;
                      return (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setSelectedCategoryColor(color)}
                          aria-label={`Select category color ${color}`}
                          aria-pressed={isSelected}
                          className={cn(
                            "relative flex size-8 items-center justify-center rounded-[6px]",
                            isSelected
                              ? "ring-2 ring-white ring-offset-2 ring-offset-brand-primary outline-2 outline-brand-primary"
                              : ""
                          )}
                          style={{ backgroundColor: color }}>
                          <span className="sr-only">{color}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsDefaultCategory((current) => !current)}
                className="flex items-center gap-2 py-2 text-left"
                role="checkbox"
                aria-checked={isDefaultCategory}>
                <span
                  className={cn(
                    "flex size-5 items-center justify-center rounded-lg border transition",
                    isDefaultCategory
                      ? "border-brand-primary bg-brand-primary text-white"
                      : "border-[#e3e6ec] bg-white text-transparent"
                  )}>
                  <Check className="size-3.5" />
                </span>
                <span className="text-[14px] leading-[1.6] text-brand-secondary">
                  Set this as my default save category
                </span>
              </button>

              <div className="flex items-start gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] px-4.25 py-4.25">
                <CircleAlert className="mt-0.5 size-5 shrink-0 text-brand-primary" />
                <p className="text-[14px] leading-[1.6] text-brand-primary">
                  Personal categories are only visible to your account. Global
                  organization settings will not be affected by these changes.
                </p>
              </div>

              <div className="pt-1">
                <Button
                  type="button"
                  onClick={handleCreateCategory}
                  className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]">
                  Create Category
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isSaveTemplateModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
          onClick={closeSaveTemplateModal}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="save-template-title"
            aria-describedby="save-template-description"
            className="w-full max-w-223.5 rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
            onClick={(event) => event.stopPropagation()}>
            <div className="relative flex flex-col gap-6 px-6 py-6">
              <div className="flex min-h-8 items-start pr-12">
                <h2
                  id="save-template-title"
                  className="text-[20px] font-bold leading-[1.6] text-brand-primary">
                  Save to My Saved Files
                </h2>
                <p id="save-template-description" className="sr-only">
                  Save this template copy into one of your personal categories.
                </p>
              </div>

              <button
                type="button"
                onClick={closeSaveTemplateModal}
                className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
                aria-label="Close save template copy modal">
                <X className="size-4.5" />
              </button>

              <div className="rounded-[6px] border border-[#c5c6d0] bg-[#f3f5f8] px-4.25 py-4.25">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-xs border border-brand-primary bg-brand-primary text-white">
                    <File className="size-4.25" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <h3 className="text-[16px] font-bold leading-[1.6] text-brand-primary">
                      {TEMPLATE_COPY_PREVIEW.name}
                    </h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-[12px] leading-[1.6] text-brand-secondary">
                      <span>Category: {TEMPLATE_COPY_PREVIEW.category}</span>
                      <span>Format: {TEMPLATE_COPY_PREVIEW.format}</span>
                      <span>Version: {TEMPLATE_COPY_PREVIEW.version}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[12px] leading-[1.6] text-brand-secondary">
                      <FileText className="size-3.5" />
                      <span>Source: {TEMPLATE_COPY_PREVIEW.source}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label
                  htmlFor="save-template-category"
                  className="text-[14px] leading-[1.6] text-brand-primary">
                  Save under Category
                </label>
                <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_127px] md:items-end">
                  <SelectField
                    id="save-template-category"
                    value={saveTemplateCategory}
                    onChange={(value) => {
                      setSaveTemplateCategory(value);
                      if (saveTemplateError) {
                        setSaveTemplateError("");
                      }
                    }}
                    options={[
                      "Select category",
                      ...categories.map((category) => category.name),
                    ]}
                    className="w-full"
                    selectClassName={cn(
                      "h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6]",
                      saveTemplateCategory === "Select category"
                        ? "text-[#a3acba]"
                        : "text-brand-primary"
                    )}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleOpenCategoryModalFromSaveTemplate}
                    className="h-12.75 rounded-[6px] border-[#e3e6ec] bg-white px-3.25 text-[14px] font-normal text-brand-secondary hover:bg-[#f8fafc]">
                    Add Category
                  </Button>
                </div>
                {saveTemplateError ? (
                  <p className="text-[13px] font-medium text-[#b42318]">
                    {saveTemplateError}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="save-template-project-location"
                  className="text-[14px] leading-[1.6] text-brand-primary">
                  Project/Location
                </label>
                <SelectField
                  id="save-template-project-location"
                  value={saveTemplateProjectLocation}
                  onChange={setSaveTemplateProjectLocation}
                  options={[...DEFAULT_LOCATION_OPTIONS.filter((option) => option !== "None")]}
                  className="w-full"
                  selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="save-template-notes"
                  className="text-[14px] leading-[1.6] text-brand-primary">
                  Notes
                </label>
                <textarea
                  id="save-template-notes"
                  value={saveTemplateNotes}
                  onChange={(event) => setSaveTemplateNotes(event.target.value)}
                  placeholder="Add a short note for this saved file."
                  rows={3}
                  className="min-h-19.5 w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>

              <button
                type="button"
                onClick={() => setNotifyOnDocumentUpdate((current) => !current)}
                className="flex items-center gap-2 py-1.5 text-left"
                role="checkbox"
                aria-checked={notifyOnDocumentUpdate}>
                <span
                  className={cn(
                    "flex size-5 items-center justify-center rounded-lg border transition",
                    notifyOnDocumentUpdate
                      ? "border-brand-primary bg-brand-primary text-white"
                      : "border-[#e3e6ec] bg-white text-transparent"
                  )}>
                  <Check className="size-3.5" />
                </span>
                <span className="text-[14px] leading-[1.6] text-brand-secondary">
                  Notify me if this document is updated
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSaveLatestVersionByDefault((current) => !current)}
                className="flex items-center gap-2 py-1.5 text-left"
                role="checkbox"
                aria-checked={saveLatestVersionByDefault}>
                <span
                  className={cn(
                    "flex size-5 items-center justify-center rounded-lg border transition",
                    saveLatestVersionByDefault
                      ? "border-brand-primary bg-brand-primary text-white"
                      : "border-[#e3e6ec] bg-white text-transparent"
                  )}>
                  <Check className="size-3.5" />
                </span>
                <span className="text-[14px] leading-[1.6] text-brand-secondary">
                  Save latest version by default
                </span>
              </button>

              <div className="flex items-start gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] px-4.25 py-4.25">
                <CircleAlert className="mt-0.5 size-5 shrink-0 text-brand-primary" />
                <p className="text-[14px] leading-[1.6] text-brand-primary">
                  Categories are personal to your account and do not affect the
                  main Document Library.
                </p>
              </div>

              <div className="pt-1">
                <Button
                  type="button"
                  onClick={handleSaveTemplateCopy}
                  className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]">
                  Save File
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
