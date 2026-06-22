export type CoshhStepId = 
  | "substance-details"
  | "hazard-classification"
  | "exposure-persons"
  | "control-measures"
  | "ppe-storage"
  | "review-generate";

export const COSHH_STEPS: { id: CoshhStepId; title: string }[] = [
  { id: "substance-details", title: "1. Substance Details" },
  { id: "hazard-classification", title: "2. Hazard Classification" },
  { id: "exposure-persons", title: "3. Exposure & Persons" },
  { id: "control-measures", title: "4. Control Measures" },
  { id: "ppe-storage", title: "5. PPE & Storage" },
  { id: "review-generate", title: "6. Review & Generate" },
];

export interface CoshhSubstanceDetails {
  substanceName: string;
  manufacturer: string;
  coshhReference: string;
  sdsAttached: string;
  taskActivity: string;
  location: string;
  frequency: string;
  quantity: string;
  assessorName: string;
  assessmentDate: string;
  reviewDate: string;
}

export const INITIAL_SUBSTANCE_DETAILS: CoshhSubstanceDetails = {
  substanceName: "",
  manufacturer: "",
  coshhReference: "",
  sdsAttached: "",
  taskActivity: "",
  location: "",
  frequency: "",
  quantity: "",
  assessorName: "Alan Ludewig",
  assessmentDate: "2026-06-16",
  reviewDate: "2026-06-16",
};

export interface CoshhHazardClassification {
  selectedHazards: string[];
  signalWord: string;
  sdsReference: string;
  hazardStatement: string;
  precautionaryStatement: string;
  hazardNotes: string;
}

export const INITIAL_HAZARD_CLASSIFICATION: CoshhHazardClassification = {
  selectedHazards: [],
  signalWord: "",
  sdsReference: "",
  hazardStatement: "",
  precautionaryStatement: "",
  hazardNotes: "",
};

export interface CoshhExposureAssessment {
  id: string;
  exposureRoute: string;
  whoIsExposed: string;
  frequency: string;
  likelihood: string;
  severity: string;
  initialRisk: "Low" | "Medium" | "High";
}

export interface CoshhExposurePersons {
  selectedExposureRoutes: string[];
  selectedPersonsAtRisk: string[];
  assessments: CoshhExposureAssessment[];
}

export const INITIAL_EXPOSURE_PERSONS: CoshhExposurePersons = {
  selectedExposureRoutes: [],
  selectedPersonsAtRisk: [],
  assessments: [
    {
      id: "1",
      exposureRoute: "Power Tools",
      whoIsExposed: "General drilling/cutting",
      frequency: "-",
      likelihood: "-",
      severity: "-",
      initialRisk: "Low",
    },
    {
      id: "2",
      exposureRoute: "Hand Tools",
      whoIsExposed: "Basic assembly",
      frequency: "-",
      likelihood: "-",
      severity: "-",
      initialRisk: "High",
    },
  ],
};

export interface CoshhControlMeasureItem {
  id: string;
  controlMeasure: string;
  relatedExposureRoute: string;
  responsiblePerson: string;
  likelihood: string;
  status: "Active" | "Inactive";
}

export interface CoshhControlMeasures {
  selectedSuggestedControls: string[];
  measures: CoshhControlMeasureItem[];
}

export const INITIAL_CONTROL_MEASURES: CoshhControlMeasures = {
  selectedSuggestedControls: [],
  measures: [
    {
      id: "1",
      controlMeasure: "Power Tools",
      relatedExposureRoute: "General drilling/cutting",
      responsiblePerson: "Site Manager",
      likelihood: "North Tower",
      status: "Active",
    },
    {
      id: "2",
      controlMeasure: "Hand Tools",
      relatedExposureRoute: "Basic assembly",
      responsiblePerson: "All Staff",
      likelihood: "River Bridge Site",
      status: "Active",
    },
  ],
};

export interface CoshhPpeStorage {
  selectedPpe: string[];
  storageLocation: string;
  segregation: string;
  maxQuantity: string;
  containerRequirements: string;
  firstAid: string;
  spillProcedure: string;
  fireFighting: string;
  disposalMethod: string;
  emergencyContact: string;
}

export const INITIAL_PPE_STORAGE: CoshhPpeStorage = {
  selectedPpe: [],
  storageLocation: "",
  segregation: "",
  maxQuantity: "",
  containerRequirements: "",
  firstAid: "",
  spillProcedure: "",
  fireFighting: "",
  disposalMethod: "",
  emergencyContact: "",
};

export interface CoshhFinalApproval {
  assessorName: string;
  position: string;
  assessmentDate: string;
  signatureImage: string | null;
  isDeclared: boolean;
}

export const INITIAL_FINAL_APPROVAL: CoshhFinalApproval = {
  assessorName: "Alan Ludewig",
  position: "",
  assessmentDate: "2026-06-16",
  signatureImage: null,
  isDeclared: false,
};

export interface CoshhDraft {
  currentStepId: CoshhStepId;
  substanceDetails: CoshhSubstanceDetails;
  hazardClassification: CoshhHazardClassification;
  exposurePersons: CoshhExposurePersons;
  controlMeasures: CoshhControlMeasures;
  ppeStorage: CoshhPpeStorage;
  finalApproval: CoshhFinalApproval;
  updatedAt: string | null;
}

export const INITIAL_COSHH_DRAFT: CoshhDraft = {
  currentStepId: "substance-details",
  substanceDetails: INITIAL_SUBSTANCE_DETAILS,
  hazardClassification: INITIAL_HAZARD_CLASSIFICATION,
  exposurePersons: INITIAL_EXPOSURE_PERSONS,
  controlMeasures: INITIAL_CONTROL_MEASURES,
  ppeStorage: INITIAL_PPE_STORAGE,
  finalApproval: INITIAL_FINAL_APPROVAL,
  updatedAt: null,
};

export const COSHH_STORAGE_KEY = "coshh_draft_v1";

export const COSHH_SUGGESTED_CONTROLS = [
  { id: "ventilation", title: "Use in well- ventilated area" },
  { id: "ignition", title: "Store away from ignition" },
  { id: "containers", title: "Keep containers closed" },
  { id: "spill-kit", title: "Spill kit nearby" },
  { id: "breathing", title: "Avoid breathing vapour" },
  { id: "sds", title: "Follow SDS instructions" },
  { id: "skin", title: "Avoid skin contact" },
  { id: "dilution", title: "Correct dilution" },
];

export const COSHH_EXPOSURE_ROUTES = [
  { id: "inhalation", title: "Inhalation" },
  { id: "skin-contact", title: "Skin Contact" },
  { id: "eye-contact", title: "Eye Contact" },
  { id: "ingestion", title: "Ingestion" },
  { id: "injection-puncture", title: "Injection / Puncture" },
  { id: "other", title: "Other" },
];

export const COSHH_PERSONS_AT_RISK = [
  { id: "employees", title: "Employees" },
  { id: "contractors", title: "Contractors" },
  { id: "visitors", title: "Visitors" },
  { id: "public", title: "Public" },
  { id: "young-vulnerable", title: "Young / Vulnerable Workers" },
  { id: "pregnant", title: "Pregnant Workers" },
  { id: "other", title: "Other" },
];

export const COSHH_HAZARD_OPTIONS = [
  { id: "harmful-irritant", title: "Harmful / Irritant", iconPath: "/images/hazards/harmful.png" },
  { id: "corrosive", title: "Corrosive", iconPath: "/images/hazards/corrosive.png" },
  { id: "acute-toxic", title: "Acute Toxic", iconPath: "/images/hazards/toxic.png" },
  { id: "flammable", title: "Flammable", iconPath: "/images/hazards/flammable.png" },
  { id: "oxidising", title: "Oxidising", iconPath: "/images/hazards/oxidising.png" },
  { id: "environmental", title: "Environmental Hazard", iconPath: "/images/hazards/environmental.png" },
  { id: "compressed-gas", title: "Compressed Gas", iconPath: "/images/hazards/compressed-gas.png" },
  { id: "health-hazard", title: "Health Hazard", iconPath: "/images/hazards/health-hazard.png" },
  { id: "explosive", title: "Explosive", iconPath: "/images/hazards/explosive.png" },
  { id: "other", title: "Other", iconPath: "" },
];

export const COSHH_PPE_OPTIONS = [
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
