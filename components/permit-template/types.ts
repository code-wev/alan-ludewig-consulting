import {
  Flame,
  HardHat,
  Pickaxe,
  ShieldCheck,
  TowerControl,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type PermitTemplateStepId =
  | "permit-type"
  | "job-site-details"
  | "hazards-controls"
  | "authorisation"
  | "validity-period"
  | "close-out-review";

export type PermitTemplateStep = {
  id: PermitTemplateStepId;
  label: string;
};

export type PermitTypeOption = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PermitTemplateJobSiteDetails = {
  projectSiteName: string;
  workLocation: string;
  workDescription: string;
  contractorName: string;
  supervisor: string;
  permitIssuer: string;
  permitReceiver: string;
  relatedRamsReference: string;
  relatedRiskAssessmentReference: string;
  date: string;
  supportingDocumentName: string;
  siteImageName: string;
};

export type PermitTemplateDraft = {
  currentStepId: PermitTemplateStepId;
  permitTypeId: string;
  jobSiteDetails: PermitTemplateJobSiteDetails;
  updatedAt: string | null;
};

export const PERMIT_TEMPLATE_STEPS: PermitTemplateStep[] = [
  { id: "permit-type", label: "1. Permit Type" },
  { id: "job-site-details", label: "2. Job / Site Details" },
  { id: "hazards-controls", label: "3. Hazards & Controls" },
  { id: "authorisation", label: "4. Authorisation" },
  { id: "validity-period", label: "5. Validity Period" },
  { id: "close-out-review", label: "6. Close Out / Review" },
];

export const PERMIT_TYPE_OPTIONS: PermitTypeOption[] = [
  {
    id: "hot-works",
    title: "Hot Works Permit",
    description:
      "Welding, cutting, or grinding activities creating heat/sparks.",
    icon: Flame,
  },
  {
    id: "confined-space",
    title: "Confined Space Permit",
    description:
      "Entry into tanks, vessels, or poorly ventilated spaces.",
    icon: TowerControl,
  },
  {
    id: "work-at-height",
    title: "Work at Height Permit",
    description:
      "Working on scaffolding, roofs, or elevated platforms.",
    icon: HardHat,
  },
  {
    id: "excavation",
    title: "Excavation Permit",
    description:
      "Ground breaking activities including trenches and pits.",
    icon: Pickaxe,
  },
  {
    id: "electrical-isolation",
    title: "Electrical Isolation Permit",
    description:
      "Lock-out tag-out of electrical systems and circuitry.",
    icon: Zap,
  },
  {
    id: "general-permit",
    title: "General Permit to Work",
    description:
      "Standard controlled activities not covered by specialists.",
    icon: ShieldCheck,
  },
];

export const PERMIT_TEMPLATE_REMINDER =
  "Documents generated using this tool are templates. Review and adapt them to your specific circumstances before issuing for use. Final responsibility for content rests with the user.";

export const JOB_SITE_DETAILS_NOTICE =
  "All information provided must be verified against the physical site conditions before work commences. Incomplete details may result in the automatic suspension of the permit.";

export const PERMIT_GUIDANCE_ITEMS = [
  "Check local site rules before entry.",
  "Validate RAMS reference matches.",
  "Issuer must be on the approved list.",
] as const;

export const PERMIT_TEMPLATE_STORAGE_KEY = "permit-template-draft";

export const INITIAL_JOB_SITE_DETAILS: PermitTemplateJobSiteDetails = {
  projectSiteName: "",
  workLocation: "",
  workDescription: "",
  contractorName: "",
  supervisor: "",
  permitIssuer: "",
  permitReceiver: "",
  relatedRamsReference: "RAMS-2024-XXX",
  relatedRiskAssessmentReference: "RA-2024-XXX",
  date: "",
  supportingDocumentName: "",
  siteImageName: "",
};

export const INITIAL_PERMIT_TEMPLATE_DRAFT: PermitTemplateDraft = {
  currentStepId: "permit-type",
  permitTypeId: PERMIT_TYPE_OPTIONS[0].id,
  jobSiteDetails: INITIAL_JOB_SITE_DETAILS,
  updatedAt: null,
};
