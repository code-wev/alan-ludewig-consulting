import { LucideIcon } from "lucide-react";

export type RiskAssessmentStepId =
  | "job-details"
  | "work-type"
  | "tasks-hazards"
  | "controls-ppe"
  | "method-statement"
  | "emergency-details"
  | "review-generate";

export interface RiskAssessmentStep {
  id: RiskAssessmentStepId;
  label: string;
}

export const RISK_ASSESSMENT_STEPS: RiskAssessmentStep[] = [
  { id: "job-details", label: "1. Job Details" },
  { id: "work-type", label: "2. Work Type" },
  { id: "tasks-hazards", label: "3. Tasks & Hazards" },
  { id: "controls-ppe", label: "4. Controls & PPE" },
  { id: "method-statement", label: "5. Method Statement" },
  { id: "emergency-details", label: "6. Emergency Details" },
  { id: "review-generate", label: "7. Review & Generate" },
];

export interface RiskAssessmentJobDetails {
  companyLogoUrl: string | null;
  companyName: string;
  companyAddress: string;
  contactName: string;
  contactNumber: string;
  emailAddress: string;
  projectName: string;
  projectRefNumber: string;
  siteAddress: string;
  clientPrincipalContractor: string;
  numOperatives: string;
  plannedStartDate: string;
  estimatedDuration: string;
  preparedBy: string;
  approvedBy: string;
  uploadedSiteImages: string[]; // base64 / blob URLs
  uploadedSupportingDocs: { name: string; size: string }[];
}

export interface SelectedHazardRow {
  hazard: string;
  personsAtRisk: string; // 'Regulatory' | 'Internal' | 'Vendor'
  initialRisk: "Low" | "Medium" | "High";
  suggestedControls: string;
}

export interface RiskAssessmentTasksHazards {
  selectedTasks: string[];
  selectedHazards: string[];
  customHazards: string[];
  assessedHazards: SelectedHazardRow[];
}

export interface RiskAssessmentControlsPpe {
  selectedPpe: string[];
  customControls: string;
}

export interface RiskAssessmentMethodStatement {
  sequenceOfOperations: string;
  preWorkChecks: string;
  postWorkClearance: string;
}

export interface RiskAssessmentEmergencyDetails {
  firstAidArrangements: string;
  nearestHospital: string;
  emergencyAssemblyPoint: string;
  fireFightingArrangements: string;
  emergencyContactNumber: string;
}

export interface RiskAssessmentDraft {
  currentStepId: RiskAssessmentStepId;
  jobDetails: RiskAssessmentJobDetails;
  workTypeId: string | null;
  tasksHazards: RiskAssessmentTasksHazards;
  controlsPpe: RiskAssessmentControlsPpe;
  methodStatement: RiskAssessmentMethodStatement;
  emergencyDetails: RiskAssessmentEmergencyDetails;
  updatedAt: string | null;
}

export const INITIAL_JOB_DETAILS: RiskAssessmentJobDetails = {
  companyLogoUrl: null,
  companyName: "",
  companyAddress: "",
  contactName: "",
  contactNumber: "",
  emailAddress: "",
  projectName: "",
  projectRefNumber: "",
  siteAddress: "",
  clientPrincipalContractor: "",
  numOperatives: "",
  plannedStartDate: "2026-11-06",
  estimatedDuration: "",
  preparedBy: "Alan Ludewig",
  approvedBy: "",
  uploadedSiteImages: [],
  uploadedSupportingDocs: [],
};

export const INITIAL_TASKS_HAZARDS: RiskAssessmentTasksHazards = {
  selectedTasks: ["Working at height", "Manual handling materials", "Use of power tools"],
  selectedHazards: ["Falls from height", "Manual handling injury", "Use of power tools"],
  customHazards: [],
  assessedHazards: [
    {
      hazard: "Falls from Height",
      personsAtRisk: "Regulatory",
      initialRisk: "High",
      suggestedControls: "Edge protection, harnesses, exclusion zones, trained personnel only.",
    },
    {
      hazard: "Manual Handling",
      personsAtRisk: "Internal",
      initialRisk: "Medium",
      suggestedControls: "Two-person lift, mechanical aids, kinetic lifting techniques.",
    },
    {
      hazard: "Use of Power Tools",
      personsAtRisk: "Regulatory",
      initialRisk: "Medium",
      suggestedControls: "Edge protection, harnesses, exclusion zones, trained personnel only.",
    },
    {
      hazard: "Slips, Trips and Falls",
      personsAtRisk: "Vendor",
      initialRisk: "Low",
      suggestedControls: "Edge protection, harnesses, exclusion zones, trained personnel only.",
    },
    {
      hazard: "Electrical Hazards",
      personsAtRisk: "Regulatory",
      initialRisk: "High",
      suggestedControls: "Edge protection, harnesses, exclusion zones, trained personnel only.",
    },
  ],
};

export const INITIAL_CONTROLS_PPE: RiskAssessmentControlsPpe = {
  selectedPpe: ["Hard Hat", "Hi-Vis", "Steel Toe", "Gloves", "Fall Arrest"],
  customControls: "",
};

export const INITIAL_METHOD_STATEMENT: RiskAssessmentMethodStatement = {
  sequenceOfOperations: "1. Mobilise tools and equipment to work area.\n2. Set up mobile scaffold and MEWPs.\n3. Conduct pre-lift checks on crane.\n4. Lift steel gantry pieces into alignment.\n5. Secure bolting at elevation.\n6. De-mobilise scaffolding and clear site.",
  preWorkChecks: "Verify MEWP inspection logs, check weather forecast (wind speed limits), review permit to work.",
  postWorkClearance: "Clear all waste, return unused materials, check gantry torque markers, sign off permit.",
};

export const INITIAL_EMERGENCY_DETAILS: RiskAssessmentEmergencyDetails = {
  firstAidArrangements: "Fully stocked first aid kit on site, 2 designated trained first aiders.",
  nearestHospital: "Manchester General Hospital, Emergency Wing. Contact: 0161-555-0199",
  emergencyAssemblyPoint: "Assembly Point A - South Car Park Main Gate.",
  fireFightingArrangements: "CO2 and Water Extinguishers placed at active working platforms.",
  emergencyContactNumber: "+44 (0) 7700 900077",
};

export const INITIAL_RISK_ASSESSMENT_DRAFT: RiskAssessmentDraft = {
  currentStepId: "job-details",
  jobDetails: INITIAL_JOB_DETAILS,
  workTypeId: "Roofing Works",
  tasksHazards: INITIAL_TASKS_HAZARDS,
  controlsPpe: INITIAL_CONTROLS_PPE,
  methodStatement: INITIAL_METHOD_STATEMENT,
  emergencyDetails: INITIAL_EMERGENCY_DETAILS,
  updatedAt: null,
};

export const RISK_ASSESSMENT_STORAGE_KEY = "alc_risk_assessment_draft_v1";

export interface WorkTypeCard {
  id: string;
  title: string;
  iconName: string;
}

export const WORK_TYPE_CARDS: WorkTypeCard[] = [
  { id: "gen-building", title: "General Building Works", iconName: "Building" },
  { id: "roofing", title: "Roofing Works", iconName: "Home" },
  { id: "electrical", title: "Electrical Works", iconName: "Zap" },
  { id: "groundworks", title: "Groundworks", iconName: "Hammer" },
  { id: "excavation", title: "Excavation Works", iconName: "Activity" },
  { id: "demolition", title: "Demolition / Strip-Out", iconName: "Trash2" },
  { id: "painting", title: "Painting / Decorating", iconName: "Paintbrush" },
  { id: "plumbing", title: "Plumbing / Heating Works", iconName: "Droplet" },
  { id: "carpentry", title: "Carpentry / Joinery", iconName: "Scissors" },
  { id: "flooring", title: "Flooring", iconName: "Layers" },
  { id: "bricklaying", title: "Bricklaying / Blockwork", iconName: "Grid" },
  { id: "hot-works", title: "Hot Works", iconName: "Flame" },
  { id: "other", title: "Other", iconName: "MoreHorizontal" },
];

export const TASK_OPTIONS = [
  "Working at height",
  "Access / egress",
  "Manual handling materials",
  "Use of ladders",
  "Use of scaffold",
  "Use of power tools",
];

export const HAZARD_OPTIONS = [
  "Falls from height",
  "Falling materials",
  "Manual handling injury",
  "Slips, trips and falls",
  "Use of power tools",
  "Electrical hazards",
  "Noise exposure",
  "Vibration injury",
];

export const PPE_OPTIONS = [
  { id: "Hard Hat", label: "Hard Hat" },
  { id: "Hi-Vis", label: "Hi-Vis Jacket" },
  { id: "Steel Toe", label: "Steel Toe Boots" },
  { id: "Gloves", label: "Protective Gloves" },
  { id: "Fall Arrest", label: "Safety Harness / Fall Arrest" },
  { id: "Goggles", label: "Safety Goggles" },
  { id: "Ear Protection", label: "Ear Protection" },
  { id: "Mask", label: "Dust Mask" },
];
