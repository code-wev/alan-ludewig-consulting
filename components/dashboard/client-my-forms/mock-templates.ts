import { QuestionSetTemplate } from "./types";

export const QUESTION_SET_TEMPLATES: QuestionSetTemplate[] = [
  {
    id: "QS-001",
    name: "Weekly Site Inspection",
    category: "Site Safety",
    inspectionsType: "Daily Walkaround",
    access: "All Access",
    status: "Published",
    questionsCount: 45,
    version: "2.4",
    duration: "30 mins",
    accentColor: "#4caf50",
    description: "A comprehensive weekly inspection for construction sites covering safety, PPE compliance, housekeeping, and hazard controls.",
    questions: [
      {
        section: "1. Site Setup",
        items: [
          { text: "Is the site perimeter fencing secure and appropriate for the area?", required: true, evidence: true },
          { text: "Are all required H&S posters and notices clearly displayed?", required: true }
        ]
      },
      {
        section: "2. PPE Compliance",
        items: [
          { text: "Is mandatory PPE being worn by all operatives on site?", required: false },
          { text: "Is mandatory PPE being worn by all operatives on site? (Detailed Check)", required: false },
          { text: "Is PPE in good condition and fit for purpose?", required: false, comment: "Comment Mandatory if \"No\"" }
        ]
      },
      {
        section: "3. Housekeeping",
        items: [
          { text: "Are emergency exits and walkways clear of debris?", required: true }
        ]
      }
    ]
  },
  {
    id: "QS-002",
    name: "COSHH Cabinet Check",
    category: "COSHH Assessments",
    inspectionsType: "Monthly Check",
    access: "All Access",
    status: "Under Review",
    questionsCount: 18,
    version: "1.0",
    duration: "15 mins",
    accentColor: "#f59e0b",
    description: "Monthly verification of COSHH storage cabinets, including inventory updates and material safety data sheets verification.",
    questions: [
      {
        section: "1. Storage Conditions",
        items: [
          { text: "Are all cabinets locked and secure when not in use?", required: true },
          { text: "Is the ventilation in the storage area functioning properly?", required: true }
        ]
      },
      {
        section: "2. Labeling & Safety Sheets",
        items: [
          { text: "Are all chemical containers clearly labeled with warnings?", required: true },
          { text: "Are safety data sheets accessible near the cabinet?", required: false }
        ]
      }
    ]
  },
  {
    id: "QS-003",
    name: "Daily Vehicle Pre-Start",
    category: "Equipment Check",
    inspectionsType: "Daily Walkaround",
    access: "All Access",
    status: "Published",
    questionsCount: 12,
    version: "3.1",
    duration: "10 mins",
    accentColor: "#4caf50",
    description: "Required daily checks for heavy equipment, machinery, and vehicles before starting operations.",
    questions: [
      {
        section: "1. Fluid & Leak Checks",
        items: [
          { text: "Are engine oil and coolant levels within operating range?", required: true },
          { text: "Is there any visible fluid leakage beneath the machine?", required: true }
        ]
      },
      {
        section: "2. Safety Devices",
        items: [
          { text: "Are seatbelts, horns, and backup alarms functional?", required: true }
        ]
      }
    ]
  },
  {
    id: "QS-004",
    name: "Office Fire Marshal Walk",
    category: "Office Audit",
    inspectionsType: "Weekly Check",
    access: "Pro Only",
    status: "Published",
    questionsCount: 15,
    version: "1.1",
    duration: "10 mins",
    accentColor: "#4caf50",
    description: "Routine check of office escape routes, fire extinguishers, emergency lighting, and alarm panels.",
    questions: [
      {
        section: "1. Escape Routes",
        items: [
          { text: "Are all fire doors closed and free of obstructions?", required: true },
          { text: "Are exit signs illuminated and clearly visible?", required: true }
        ]
      }
    ]
  },
  {
    id: "QS-005",
    name: "Scaffolding Pre-Use Check",
    category: "Site Safety",
    inspectionsType: "Statutory 7-Day",
    access: "All Access",
    status: "Published",
    questionsCount: 20,
    version: "2.0",
    duration: "15 mins",
    accentColor: "#4caf50",
    description: "Statutory 7-day inspection of erected scaffolding before work commences at height.",
    questions: [
      {
        section: "1. Foundations & Structure",
        items: [
          { text: "Is scaffolding erected on firm, level foundations with sole boards?", required: true }
        ]
      }
    ]
  },
  {
    id: "QS-006",
    name: "Working at Height Briefing",
    category: "Toolbox Talks",
    inspectionsType: "Briefing",
    access: "All Access",
    status: "Published",
    questionsCount: 5,
    version: "1.0",
    duration: "5 mins",
    accentColor: "#4caf50",
    description: "Safety briefing covering harness inspections, anchor points, rescue plans, and weather triggers.",
    questions: [
      {
        section: "1. Equipment Check",
        items: [
          { text: "Have harnesses been visually inspected for fraying or damage?", required: true }
        ]
      }
    ]
  }
];

export const Q_CATEGORIES = [
  { name: "Site Safety", count: 12 },
  { name: "Toolbox Talks", count: 8 },
  { name: "COSHH Assessments", count: 5 },
  { name: "Equipment Check", count: 14 },
  { name: "Office Audit", count: 3 }
];
