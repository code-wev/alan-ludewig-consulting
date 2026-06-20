import {
  Building2,
  File,
  FileCog,
  FileText,
  Flame,
  FolderOpen,
  FolderKanban,
  Grid2X2,
  Shield,
  Upload,
  ListChecks,
} from "lucide-react";

export type SavedFile = {
  id: string;
  name: string;
  project: string;
  category: string;
  format: string;
  source: string;
  version: string;
  dateSaved: string;
};

export type CategoryEntry = {
  id: string;
  name: string;
  description: string;
  type?: string;
  projectLocation?: string;
  icon?: string;
  color?: string;
  isDefault?: boolean;
  status?: "Active" | "Archived";
};

export const TABS = [
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

export const FILES: SavedFile[] = [
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

export const INITIAL_CATEGORIES: CategoryEntry[] = [
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

export const SUMMARY_CARDS = [
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

export const TOOLBAR_ACTIONS = [
  { label: "Manage Categories", hasChevron: true },
  { label: "Save Template Copy", hasChevron: false },
  { label: "Add Category", hasChevron: false },
  { label: "Add Project / Location", hasChevron: false },
  { label: "Create From Template", hasChevron: false },
] as const;

export const STORAGE_USED_GB = 2.4;
export const STORAGE_LIMIT_GB = 10;
export const STORAGE_PERCENTAGE = (STORAGE_USED_GB / STORAGE_LIMIT_GB) * 100;

export const CATEGORY_TYPE_OPTIONS = [
  "General Documents",
  "Safety Documents",
  "Project Records",
  "Operational Files",
] as const;

export const DEFAULT_LOCATION_OPTIONS = [
  "None",
  ...Array.from(new Set(FILES.map((file) => file.project))),
] as const;

export const CATEGORY_ICON_OPTIONS = [
  { id: "folder", icon: FolderOpen, label: "Folder" },
  { id: "file", icon: File, label: "File" },
  { id: "checklist", icon: ListChecks, label: "Checklist" },
  { id: "process", icon: FileCog, label: "Process" },
  { id: "safety", icon: Flame, label: "Safety" },
  { id: "building", icon: Building2, label: "Building" },
  { id: "shield", icon: Shield, label: "Shield" },
] as const;

export const CATEGORY_COLOR_OPTIONS = [
  "#132651",
  "#505E7C",
  "#8B8E98",
  "#109A62",
  "#F56508",
] as const;

export const TEMPLATE_COPY_PREVIEW = {
  name: "Working at Height Risk Assessment",
  category: "Risk Assessment",
  format: "PDF/DOCX",
  version: "v2.4",
  source: "Document Library",
  projectLocation: "ABC Construction",
} as const;

export const TABLE_COLUMN_LAYOUT =
  "72px minmax(291px,291px) minmax(272px,272px) minmax(185px,185px) minmax(210px,210px) minmax(160px,160px) minmax(150px,150px) minmax(210px,210px) minmax(176px,176px)";

export const CATEGORY_TABLE_COLUMN_LAYOUT =
  "minmax(160px, 1fr) minmax(160px, 160px) minmax(200px, 200px) minmax(120px, 120px) minmax(100px, 100px) minmax(140px, 140px)";
