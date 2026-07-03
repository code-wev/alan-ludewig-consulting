export interface ComplianceForm {
  id: string;
  name: string;
  type: string;
  typeLabel: string;
  category: string;
  project: string;
  status: "Completed" | "Draft" | "Assigned" | "Requires Review";
  created: string;
  lastUpdated: string;
  version: string;
}

export interface InspectionItem {
  id: string;
  text: string;
  subtext?: string;
  required?: boolean;
  evidence?: boolean;
  answer: "Yes" | "No" | "N/A" | null;
  comment: string;
  hasWarning?: boolean;
  hasActionRequired?: boolean;
  evidenceFile?: string;
}

export interface InspectionSection {
  section: string;
  description?: string;
  items: InspectionItem[];
}

export interface ActiveInspection {
  id?: string;
  name: string;
  category: string;
  project: string;
  type: string;
  dueDate: string;
  assignedTo: string;
  status: string;
  completedBy: string;
  position: string;
  dateOfCompletion: string;
  isSigned: boolean;
  signatureName: string;
  isDeclared: boolean;
  questions: InspectionSection[];
}

export interface TemplateItem {
  text: string;
  required?: boolean;
  evidence?: boolean;
  comment?: string;
}

export interface TemplateSection {
  section: string;
  items: TemplateItem[];
}

export interface QuestionSetTemplate {
  id: string;
  name: string;
  category: string;
  inspectionsType: string;
  access: string;
  status: string;
  questionsCount: number;
  version: string;
  duration: string;
  accentColor: string;
  description: string;
  questions: TemplateSection[];
}
