import {
  CircleDot,
  Cog,
  Flame,
  FlaskConical,
  HardHat,
  Volume2,
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

export type HazardOption = {
  id: string;
  label: string;
  icon: LucideIcon;
  iconClassName: string;
};

export type PermitQuestionTemplate = {
  id: string;
  hazardId: string;
  text: string;
};

export type PermitQuestionResponse = {
  answer: "yes" | "no" | "na" | null;
  comment: string;
  actionRequired: boolean;
};

export type CustomPermitQuestion = {
  id: string;
  hazardId: string;
  text: string;
};

export type PermitControlItem = {
  id: string;
  hazardId: string;
  title: string;
  description: string;
  relatedCheck: string;
  responsiblePerson: string;
  confirmed: boolean;
  isCustom?: boolean;
};

export type PermitTemplateHazardsControls = {
  selectedHazardIds: string[];
  focusedHazardId: string;
  questionResponses: Record<string, PermitQuestionResponse>;
  customQuestions: CustomPermitQuestion[];
  requiredPpe: string[];
  controlMeasures: string[];
  controlItems: PermitControlItem[];
};

export type PermitTemplateDraft = {
  currentStepId: PermitTemplateStepId;
  permitTypeId: string;
  jobSiteDetails: PermitTemplateJobSiteDetails;
  hazardsControls: PermitTemplateHazardsControls;
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
    icon: CircleDot,
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
    icon: Cog,
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
    icon: FlaskConical,
  },
];

export const PERMIT_HAZARD_OPTIONS: HazardOption[] = [
  {
    id: "fire-hot-work",
    label: "Fire & Hot Work",
    icon: Flame,
    iconClassName: "text-[#ef4444]",
  },
  {
    id: "work-at-height",
    label: "Work at Height",
    icon: HardHat,
    iconClassName: "text-brand-primary",
  },
  {
    id: "confined-space",
    label: "Confined Space",
    icon: CircleDot,
    iconClassName: "text-brand-primary",
  },
  {
    id: "electrical-systems",
    label: "Electrical Systems",
    icon: Zap,
    iconClassName: "text-brand-primary",
  },
  {
    id: "hazardous-substances",
    label: "Hazardous Substances",
    icon: FlaskConical,
    iconClassName: "text-brand-primary",
  },
  {
    id: "plant-machinery",
    label: "Plant & Machinery",
    icon: Cog,
    iconClassName: "text-brand-primary",
  },
  {
    id: "noise-pollution",
    label: "Noise Pollution",
    icon: Volume2,
    iconClassName: "text-brand-primary",
  },
];

export const DEFAULT_PERMIT_QUESTION_TEMPLATES: PermitQuestionTemplate[] = [
  {
    id: "fire-area-cleared",
    hazardId: "fire-hot-work",
    text: "Has the work area been cleared of combustible materials?",
  },
  {
    id: "fire-extinguisher-available",
    hazardId: "fire-hot-work",
    text: "Is a suitable fire extinguisher available at the work point?",
  },
  {
    id: "height-harness-checked",
    hazardId: "work-at-height",
    text: "Has the fall arrest harness been inspected and tagged?",
  },
  {
    id: "height-edge-protection",
    hazardId: "work-at-height",
    text: "Are edge protection and exclusion zones installed correctly?",
  },
  {
    id: "electrical-loto",
    hazardId: "electrical-systems",
    text: "Has lock out tag out been applied to the electrical source?",
  },
  {
    id: "electrical-test-dead",
    hazardId: "electrical-systems",
    text: "Has test-for-dead been completed and recorded before work starts?",
  },
  {
    id: "confined-atmosphere-test",
    hazardId: "confined-space",
    text: "Has the atmosphere been tested and recorded for safe entry?",
  },
  {
    id: "confined-rescue-plan",
    hazardId: "confined-space",
    text: "Is a rescue plan and standby person in place at the point of entry?",
  },
  {
    id: "substances-sds-available",
    hazardId: "hazardous-substances",
    text: "Are COSHH data sheets available and understood by the team?",
  },
  {
    id: "substances-spill-control",
    hazardId: "hazardous-substances",
    text: "Are spill kits and contamination controls available on site?",
  },
  {
    id: "plant-inspection-complete",
    hazardId: "plant-machinery",
    text: "Has pre-use inspection of the plant or machinery been completed?",
  },
  {
    id: "plant-operator-competent",
    hazardId: "plant-machinery",
    text: "Is the assigned operator competent and authorised for the equipment?",
  },
  {
    id: "noise-hearing-protection",
    hazardId: "noise-pollution",
    text: "Has hearing protection been issued where required?",
  },
  {
    id: "noise-monitoring-in-place",
    hazardId: "noise-pollution",
    text: "Are noise monitoring and time restrictions in place for the task?",
  },
];

export const PERMIT_TEMPLATE_REMINDER =
  "Documents generated using this tool are templates. Review and adapt them to your specific circumstances before issuing for use. Final responsibility for content rests with the user.";

export const JOB_SITE_DETAILS_NOTICE =
  "All information provided must be verified against the physical site conditions before work commences. Incomplete details may result in the automatic suspension of the permit.";

export const HAZARDS_CONTROLS_NOTICE =
  "Ensure all listed controls are verified on-site. Work must not commence until the Authorising Person has physically inspected the control measures.";

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

export const INITIAL_HAZARDS_CONTROLS: PermitTemplateHazardsControls = {
  selectedHazardIds: ["fire-hot-work", "work-at-height", "electrical-systems"],
  focusedHazardId: "fire-hot-work",
  questionResponses: {
    "fire-area-cleared": {
      answer: "yes",
      comment: "",
      actionRequired: false,
    },
    "fire-extinguisher-available": {
      answer: "yes",
      comment: "",
      actionRequired: false,
    },
  },
  customQuestions: [],
  requiredPpe: ["Hard Hat", "Hi-vis Vest", "Safety Glasses"],
  controlMeasures: ["Fire Watch", "Gas Monitoring"],
  controlItems: [
    {
      id: "control-fire-extinguisher",
      hazardId: "fire-hot-work",
      title: "Fire Extinguisher Present",
      description: "CO2 or Powder type at work point.",
      relatedCheck: "Question #2",
      responsiblePerson: "M. Thompson",
      confirmed: true,
    },
    {
      id: "control-fall-arrest",
      hazardId: "work-at-height",
      title: "Full Fall Arrest Harness",
      description: "Inspected and tagged within 6 months.",
      relatedCheck: "Question #2",
      responsiblePerson: "J. Aris",
      confirmed: true,
    },
    {
      id: "control-area-segregation",
      hazardId: "fire-hot-work",
      title: "Area Segregation",
      description: "Barrier tape and signage 5m radius.",
      relatedCheck: "Question #2",
      responsiblePerson: "S. Miller",
      confirmed: true,
    },
    {
      id: "control-loto",
      hazardId: "electrical-systems",
      title: "Lock Out Tag Out (LOTO)",
      description: "Circuit isolation confirmed at DB-02.",
      relatedCheck: "Question #2",
      responsiblePerson: "M. Thompson",
      confirmed: true,
    },
  ],
};

export const INITIAL_PERMIT_TEMPLATE_DRAFT: PermitTemplateDraft = {
  currentStepId: "permit-type",
  permitTypeId: PERMIT_TYPE_OPTIONS[0].id,
  jobSiteDetails: INITIAL_JOB_SITE_DETAILS,
  hazardsControls: INITIAL_HAZARDS_CONTROLS,
  updatedAt: null,
};
