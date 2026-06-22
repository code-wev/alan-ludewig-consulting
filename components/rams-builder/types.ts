import {
  AlertTriangle,
  Beaker,
  Briefcase,
  ClipboardList,
  FileCheck2,
  FileClock,
  FileText,
  FolderKanban,
  History,
  ReceiptText,
  type LucideIcon,
} from "lucide-react";

export type RamsSummaryCard = {
  label: string;
  value: string;
  icon: LucideIcon;
  iconColor: string;
};

export type RamsDocumentTypeCard = {
  title: string;
  description: string;
  buttonLabel: string;
  icon: LucideIcon;
  iconContainerClassName: string;
  iconClassName: string;
  variant?: "primary" | "secondary";
};

export type RamsActivityStatus =
  | "Completed"
  | "Draft"
  | "Requires Review";

export type RamsActivity = {
  id: string;
  projectName: string;
  siteAddress: string;
  documentType: string;
  status: RamsActivityStatus;
  createdDate: string;
  version: string;
};

export const RAMS_CREDITS_REMAINING = 2;

export const RAMS_SUMMARY_CARDS: RamsSummaryCard[] = [
  {
    label: "Draft Documents",
    value: "12",
    icon: FileClock,
    iconColor: "text-[#f59e0b]",
  },
  {
    label: "Completed Documents",
    value: "84",
    icon: FileCheck2,
    iconColor: "text-[#16a34a]",
  },
  {
    label: "Requires Review",
    value: "03",
    icon: AlertTriangle,
    iconColor: "text-[#ef4444]",
  },
  {
    label: "Recently Generated",
    value: "07",
    icon: History,
    iconColor: "text-[#4f79ff]",
  },
];

export const PRIMARY_DOCUMENT_TYPE_CARDS: RamsDocumentTypeCard[] = [
  {
    title: "RAMS",
    description: "Risk Assessment & Method Statement for specific tasks and sites",
    buttonLabel: "Start Building",
    icon: Briefcase,
    iconContainerClassName: "bg-brand-primary text-white",
    iconClassName: "size-5",
  },
  {
    title: "Risk Assessment",
    description: "Standalone risk assessment templates",
    buttonLabel: "Start Building",
    icon: AlertTriangle,
    iconContainerClassName: "bg-[#eef2ff] text-brand-primary",
    iconClassName: "size-5",
  },
  {
    title: "Method Statement",
    description: "Safe systems of work procedures",
    buttonLabel: "Start Building",
    icon: FileText,
    iconContainerClassName: "bg-[#eef2ff] text-brand-primary",
    iconClassName: "size-5",
  },
  {
    title: "COSHH Risk Assessment",
    description: "Chemical substance assessments for site safety compliance",
    buttonLabel: "Start Building",
    icon: Beaker,
    iconContainerClassName: "bg-[#eef2ff] text-brand-primary",
    iconClassName: "size-5",
  },
  {
    title: "Inspection / Forms",
    description: "Dynamic inspection and audit forms",
    buttonLabel: "Start Building",
    icon: ClipboardList,
    iconContainerClassName: "bg-[#eef2ff] text-brand-primary",
    iconClassName: "size-5",
  },
  {
    title: "Permit Template",
    description: "Hot work, confined space, and work permits",
    buttonLabel: "Start Building",
    icon: ReceiptText,
    iconContainerClassName: "bg-[#eef2ff] text-brand-primary",
    iconClassName: "size-5",
  },
];

export const SECONDARY_DOCUMENT_TYPE_CARDS: RamsDocumentTypeCard[] = [
  {
    title: "Continue Draft",
    description:
      "Continue your saved RAMS drafts and pick up exactly where you left off.",
    buttonLabel: "Continue Drafts",
    icon: FolderKanban,
    iconContainerClassName: "bg-[#eef2ff] text-brand-primary",
    iconClassName: "size-5",
    variant: "secondary",
  },
  {
    title: "Previous RAMS",
    description:
      "View, duplicate, download, or email your previous RAMS documents.",
    buttonLabel: "Previous Documents",
    icon: History,
    iconContainerClassName: "bg-[#eef2ff] text-brand-primary",
    iconClassName: "size-5",
    variant: "secondary",
  },
];

export const RAMS_RECENT_ACTIVITY: RamsActivity[] = [
  {
    id: "#R-98231",
    projectName: "London Bridge Refurbishment",
    siteAddress: "Southwark, London SE1 9AL",
    documentType: "Structural Masonry",
    status: "Completed",
    createdDate: "14 May 2026",
    version: "v1.2",
  },
  {
    id: "#R-98231",
    projectName: "London Bridge Refurbishment",
    siteAddress: "Southwark, London SE1 9AL",
    documentType: "Structural Masonry",
    status: "Completed",
    createdDate: "14 May 2026",
    version: "v1.0",
  },
  {
    id: "#R-98420",
    projectName: "Riverside Apartments",
    siteAddress: "Greenwich, London SE10 0ER",
    documentType: "Roofing Works",
    status: "Draft",
    createdDate: "12 May 2026",
    version: "v2.0",
  },
  {
    id: "#R-98314",
    projectName: "Wembley Retail Fit-Out",
    siteAddress: "Brent, London HA9 0WS",
    documentType: "Interior Strip-Out",
    status: "Completed",
    createdDate: "11 May 2026",
    version: "v2.0",
  },
  {
    id: "#R-98102",
    projectName: "Camden School Extension",
    siteAddress: "Camden, London NW1 8NH",
    documentType: "Groundworks",
    status: "Completed",
    createdDate: "10 May 2026",
    version: "v2.0",
  },
  {
    id: "#R-98077",
    projectName: "Manchester Depot Upgrade",
    siteAddress: "Trafford, Manchester M17 1AB",
    documentType: "Permit to Work",
    status: "Requires Review",
    createdDate: "09 May 2026",
    version: "v1.0",
  },
];

export const RAMS_ACTIVITY_STATUS_OPTIONS = [
  "All Status",
  "Completed",
  "Draft",
  "Requires Review",
] as const;

export const RAMS_ACTIVITY_CATEGORY_OPTIONS = [
  "All Categories",
  "RAMS",
  "Risk Assessment",
  "Method Statement",
  "COSHH",
  "Inspection / Forms",
  "Permit Template",
] as const;

export const RAMS_ACTIVITY_TYPE_OPTIONS = [
  "All Types",
  ...Array.from(new Set(RAMS_RECENT_ACTIVITY.map((item) => item.documentType))),
] as const;

export const RAMS_ACTIVITY_DATE_RANGE_OPTIONS = [
  "Date Range",
  "Last 7 Days",
  "Last 30 Days",
  "Last 90 Days",
] as const;

export const RAMS_TABLE_COLUMN_LAYOUT =
  "48px minmax(250px,1.6fr) minmax(230px,1.2fr) minmax(180px,1fr) minmax(120px,0.8fr) minmax(140px,0.8fr) minmax(100px,0.6fr) minmax(120px,0.8fr)";
