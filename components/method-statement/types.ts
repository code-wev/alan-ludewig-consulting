export type MethodStatementStepId =
  | "project-details"
  | "scope-of-works"
  | "sequence-of-works"
  | "plant-tools"
  | "ppe-emergency"
  | "review-generate";

export const METHOD_STATEMENT_STEPS: { id: MethodStatementStepId; title: string }[] = [
  { id: "project-details", title: "1. Project Details" },
  { id: "scope-of-works", title: "2. Scope of Works" },
  { id: "sequence-of-works", title: "3.Sequence of Works" },
  { id: "plant-tools", title: "4. Plant / Tools / Equipment" },
  { id: "ppe-emergency", title: "5. PPE & Emergency" },
  { id: "review-generate", title: "6. Review & Generate" },
];

export interface MethodStatementProjectDetails {
  projectName: string;
  clientContractor: string;
  siteAddress: string;
  workActivity: string;
  preparedBy: string;
  approvedBy: string;
  plannedStartDate: string;
  estimatedDuration: string;
  numberOfOperatives: string;
}

export const INITIAL_PROJECT_DETAILS: MethodStatementProjectDetails = {
  projectName: "",
  clientContractor: "",
  siteAddress: "",
  workActivity: "",
  preparedBy: "Alan Ludewig",
  approvedBy: "",
  plannedStartDate: "2026-06-23",
  estimatedDuration: "",
  numberOfOperatives: "",
};

export interface MethodStatementScopeOfWorks {
  descriptionOfWorks: string;
  workAreaLocation: string;
  accessEgress: string;
  exclusionsLimitations: string;
  siteSpecificNotes: string;
}

export const INITIAL_SCOPE_OF_WORKS: MethodStatementScopeOfWorks = {
  descriptionOfWorks: "",
  workAreaLocation: "",
  accessEgress: "",
  exclusionsLimitations: "",
  siteSpecificNotes: "",
};

export interface SequenceStep {
  id: string;
  stepNumber: number;
  title: string;
  descriptionOfWork: string;
  responsiblePerson: string;
  requiredEquipment: string;
  riskNotes: string;
}

export interface MethodStatementSequenceOfWorks {
  steps: SequenceStep[];
}

export const INITIAL_SEQUENCE_OF_WORKS: MethodStatementSequenceOfWorks = {
  steps: [
    {
      id: "1",
      stepNumber: 1,
      title: "Site Setup / Preparation",
      descriptionOfWork: "Ensure all exclusion zones are marked and signages are displayed.",
      responsiblePerson: "Site Supervisor",
      requiredEquipment: "Traffic cones, tape",
      riskNotes: "Specific hazards to avoid during this step",
    },
    {
      id: "2",
      stepNumber: 2,
      title: "Main Work Activity",
      descriptionOfWork: "Detailed breakdown of the core task.",
      responsiblePerson: "Lead Engineer",
      requiredEquipment: "Specific plant or tools",
      riskNotes: "PPE requirements or critical stop points",
    },
  ],
};

export interface MethodStatementPlantTools {
  selectedPlant: string[];
  selectedPowerTools: string[];
  selectedHandTools: string[];
  customItems: string[];
}

export const INITIAL_PLANT_TOOLS: MethodStatementPlantTools = {
  selectedPlant: [],
  selectedPowerTools: [],
  selectedHandTools: [],
  customItems: [],
};

export interface MethodStatementPpeEmergency {
  selectedPpe: string[];
  firstAid: string;
  emergencyProcedures: string;
  fireFighting: string;
  firstAider: string;
  nearestHospital: string;
}

export const INITIAL_PPE_EMERGENCY: MethodStatementPpeEmergency = {
  selectedPpe: [],
  firstAid: "First Aid Kit located in the main site office / supervisor's vehicle.",
  emergencyProcedures: "In case of emergency, sound the alarm and evacuate to the designated assembly point.",
  fireFighting: "Fire extinguishers are positioned at work areas and exit points.",
  firstAider: "",
  nearestHospital: "",
};

export interface MethodStatementFinalApproval {
  assessorName: string;
  position: string;
  assessmentDate: string;
  signatureImage: string | null;
  isDeclared: boolean;
}

export const INITIAL_FINAL_APPROVAL: MethodStatementFinalApproval = {
  assessorName: "Alan Ludewig",
  position: "",
  assessmentDate: "2026-06-23",
  signatureImage: null,
  isDeclared: false,
};

export interface MethodStatementDraft {
  currentStepId: MethodStatementStepId;
  projectDetails: MethodStatementProjectDetails;
  scopeOfWorks: MethodStatementScopeOfWorks;
  sequenceOfWorks: MethodStatementSequenceOfWorks;
  plantTools: MethodStatementPlantTools;
  ppeEmergency: MethodStatementPpeEmergency;
  finalApproval: MethodStatementFinalApproval;
  updatedAt: string | null;
}

export const INITIAL_METHOD_STATEMENT_DRAFT: MethodStatementDraft = {
  currentStepId: "project-details",
  projectDetails: INITIAL_PROJECT_DETAILS,
  scopeOfWorks: INITIAL_SCOPE_OF_WORKS,
  sequenceOfWorks: INITIAL_SEQUENCE_OF_WORKS,
  plantTools: INITIAL_PLANT_TOOLS,
  ppeEmergency: INITIAL_PPE_EMERGENCY,
  finalApproval: INITIAL_FINAL_APPROVAL,
  updatedAt: null,
};

export const METHOD_STATEMENT_STORAGE_KEY = "method_statement_draft_v1";

export const PLANT_OPTIONS = [
  { id: "scaffold", title: "Scaffold / Towers" },
  { id: "mewp", title: "Mobile Elevating Work Platforms (MEWP)" },
  { id: "forklift", title: "Forklift Truck" },
  { id: "excavator", title: "Excavators" },
  { id: "cranes", title: "Cranes / Hoists" },
  { id: "ladders", title: "Ladders / Stepladders" },
];

export const POWER_TOOL_OPTIONS = [
  { id: "cartridge", title: "Cartridge Tools" },
  { id: "grinder", title: "Angle Grinders" },
  { id: "drill", title: "Drills / Screwdrivers" },
  { id: "saws", title: "Jig Saws / Circular Saws" },
  { id: "hammers", title: "Hammers (Rotary/Demolition)" },
  { id: "hot-work", title: "Hot Work Equipment" },
];

export const HAND_TOOL_OPTIONS = [
  { id: "hammers", title: "Hammers" },
  { id: "chisels-screwdrivers", title: "Chisels / Screwdrivers" },
  { id: "hand-saws", title: "Hand Saws / Knives" },
  { id: "spanners", title: "Spanners / Wrenches" },
  { id: "pliers", title: "Pliers / Wire Cutters" },
];

export const PPE_OPTIONS = [
  { id: "gloves", title: "Gloves" },
  { id: "eye-protection", title: "Eye Protection" },
  { id: "face-shield", title: "Face Shield" },
  { id: "respiratory", title: "Respiratory (RPE)" },
  { id: "protective-clothing", title: "Protective Clothing" },
  { id: "safety-boots", title: "Safety Boots" },
  { id: "hard-hat", title: "Hard Hat" },
  { id: "hi-vis", title: "Hi-vis Clothing" },
  { id: "ear-protection", title: "Ear Protection" },
  { id: "other", title: "Other" },
];
