"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  Search, 
  ChevronDown, 
  Plus, 
  FileText, 
  Shield, 
  Briefcase, 
  CheckSquare, 
  FolderPlus, 
  Folder, 
  UserCheck, 
  AlertCircle, 
  ClipboardCheck, 
  Eye, 
  Download, 
  Edit,
  Trash2, 
  X,
  Check,
  Clock,
  FilePlus2,
  FolderInput,
  MoreVertical,
  Camera,
  RotateCcw,
  HelpCircle,
  Wrench
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RequestCustomTemplateModal } from "@/components/saved-files/modals/request-custom-template-modal";

// TypeScript interfaces
interface ComplianceForm {
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

export function FormsPage() {
  // Main state holding the list of forms (loaded with Figma design data)
  const [forms, setForms] = useState<ComplianceForm[]>([
    {
      id: "FORM-001",
      name: "Monthly Fire Safety Audit",
      type: "Inspections",
      typeLabel: "Checklist",
      category: "Central Plaza Dev.",
      project: "Central Plaza Dev.",
      status: "Completed",
      created: "14 May 2026",
      lastUpdated: "14 May 2026",
      version: "v1.2"
    },
    {
      id: "FORM-002",
      name: "Monthly Fire Safety Audit",
      type: "Fire Risk",
      typeLabel: "Checklist",
      category: "North Tower",
      project: "North Tower",
      status: "Completed",
      created: "14 May 2026",
      lastUpdated: "14 May 2026",
      version: "v1.0"
    },
    {
      id: "FORM-003",
      name: "Monthly Fire Safety Audit",
      type: "Inspections",
      typeLabel: "Checklist",
      category: "River Bridge Site",
      project: "River Bridge Site",
      status: "Draft",
      created: "14 May 2026",
      lastUpdated: "14 May 2026",
      version: "v2.0"
    },
    {
      id: "FORM-004",
      name: "Monthly Fire Safety Audit",
      type: "Inspections",
      typeLabel: "Checklist",
      category: "River Bridge Site",
      project: "River Bridge Site",
      status: "Completed",
      created: "14 May 2026",
      lastUpdated: "14 May 2026",
      version: "v2.0"
    },
    {
      id: "FORM-005",
      name: "Monthly Fire Safety Audit",
      type: "COSHH",
      typeLabel: "Checklist",
      category: "Depot 4",
      project: "Depot 4",
      status: "Completed",
      created: "14 May 2026",
      lastUpdated: "14 May 2026",
      version: "v2.0"
    },
    {
      id: "FORM-006",
      name: "Monthly Fire Safety Audit",
      type: "Fire Risk",
      typeLabel: "Checklist",
      category: "North Tower",
      project: "North Tower",
      status: "Completed",
      created: "14 May 2026",
      lastUpdated: "14 May 2026",
      version: "v1.0"
    },
    {
      id: "FORM-007",
      name: "Monthly Fire Safety Audit",
      type: "COSHH",
      typeLabel: "Checklist",
      category: "Central Plaza Dev.",
      project: "Central Plaza Dev.",
      status: "Assigned",
      created: "14 May 2026",
      lastUpdated: "14 May 2026",
      version: "v2.0"
    }
  ]);

  // Filtering states
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All Forms");
  
  // Custom dropdown states
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedDateRange, setSelectedDateRange] = useState("Date Range");

  // Dropdown visibility states
  const [isCatDropdownOpen, setIsCatDropdownOpen] = useState(false);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);

  // Modals state
  const [isStartDocModalOpen, setIsStartDocModalOpen] = useState(false);
  const [isAddCatModalOpen, setIsAddCatModalOpen] = useState(false);

  // New Document form state
  const [newDocTitle, setNewDocTitle] = useState("");
  const [newDocType, setNewDocType] = useState("Inspections");
  const [newDocTypeLabel, setNewDocTypeLabel] = useState("Checklist");
  const [newDocCategory, setNewDocCategory] = useState("Central Plaza Dev.");
  const [newDocProject, setNewDocProject] = useState("Central Plaza Dev.");

  // New Category form state
  const [newCatName, setNewCatName] = useState("");
  const [newCatDesc, setNewCatDesc] = useState("");
  const [selectedCatColor, setSelectedCatColor] = useState("#3b82f6");

  // Move Modal states
  const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);
  const [selectedFormToMove, setSelectedFormToMove] = useState<ComplianceForm | null>(null);
  const [newCategoryForMovedForm, setNewCategoryForMovedForm] = useState("");

  // Delete Modal states
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedFormToDelete, setSelectedFormToDelete] = useState<ComplianceForm | null>(null);

  // View states
  const [currentView, setCurrentView] = useState<"list" | "question-sets" | "complete-inspection">("list");

  // Active inspection checklist state
  const [activeInspection, setActiveInspection] = useState<{
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
    questions: Array<{
      section: string;
      description?: string;
      items: Array<{
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
      }>;
    }>;
  } | null>(null);

  // Accordion open/collapse states
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "1.0 Site Setup": true,
    "2.0 Access & Egress": false,
    "3.0 Personal Protective Equipment (PPE)": false,
    "4.0 Fire Safety": false,
    "5.0 Electrical & Hand Tools": false,
    "6.0 Hazardous Substances (COSHH)": false
  });

  // Modal to create/type a digital signature
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
  const [typedSignature, setTypedSignature] = useState("Alex Henderson");
  const [selectedSignatureStyle, setSelectedSignatureStyle] = useState("cursive");

  // Question Sets states
  const [qSearchQuery, setQSearchQuery] = useState("");
  const [selectedQCategory, setSelectedQCategory] = useState("Site Safety");
  const [filterInspectionsType, setFilterInspectionsType] = useState("Daily Walkaround");
  const [filterMembershipAccess, setFilterMembershipAccess] = useState("All Access");
  const [filterStatus, setFilterStatus] = useState("Published");
  const [isCustomRequestModalOpen, setIsCustomRequestModalOpen] = useState(false);
  
  // Custom request form states
  const [customRequestCategory, setCustomRequestCategory] = useState("Site Safety");

  const [selectedPreviewTemplate, setSelectedPreviewTemplate] = useState<any | null>(null);

  const questionSetTemplates = useMemo(() => [
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
  ], []);

  const qCategories = [
    { name: "Site Safety", count: 12 },
    { name: "Toolbox Talks", count: 8 },
    { name: "COSHH Assessments", count: 5 },
    { name: "Equipment Check", count: 14 },
    { name: "Office Audit", count: 3 }
  ];

  const filteredQTemplates = useMemo(() => {
    return questionSetTemplates.filter(template => {
      if (selectedQCategory && selectedQCategory !== "All" && template.category !== selectedQCategory) {
        return false;
      }
      if (qSearchQuery) {
        const query = qSearchQuery.toLowerCase();
        const matchesName = template.name.toLowerCase().includes(query);
        const matchesDesc = template.description.toLowerCase().includes(query);
        const matchesCat = template.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }
      if (filterMembershipAccess !== "All Access" && template.access !== filterMembershipAccess) {
        return false;
      }
      if (filterStatus !== "Published" && template.status !== filterStatus) {
        return false;
      }
      return true;
    });
  }, [questionSetTemplates, selectedQCategory, qSearchQuery, filterMembershipAccess, filterStatus]);

  React.useEffect(() => {
    if (currentView === "question-sets" && !selectedPreviewTemplate) {
      setSelectedPreviewTemplate(questionSetTemplates[0]);
    }
  }, [currentView, questionSetTemplates, selectedPreviewTemplate]);

  const handleStartInspection = (templateName: string, category: string) => {
    const template = questionSetTemplates.find(t => t.name === templateName);
    
    // We will initialize activeInspection with 24 questions (11 answered, 2 issues, 4 evidence)
    const activeQuestions = [
      {
        section: "1.0 Site Setup",
        description: "General site conditions and environment",
        items: [
          {
            id: "1.1",
            text: "Is the site entrance clearly marked and secured?",
            subtext: "Check for appropriate signage and functional gating/locks.",
            answer: "Yes" as const,
            comment: "Main gate locked. Signage visible from primary road.",
            required: true,
            evidence: true,
            evidenceFile: "img_entrance.jpg"
          },
          {
            id: "1.2",
            text: "Are welfare facilities clean and adequate?",
            subtext: "Verify soap, water, and drying facilities are available.",
            answer: "No" as const,
            comment: "Hand sanitizer dispenser in Block B is empty. Cleaning logs haven't been updated since yesterday.",
            required: true,
            hasWarning: true,
            hasActionRequired: true,
            evidenceFile: "img_welfare.jpg"
          },
          {
            id: "1.3",
            text: "Is the site perimeter fencing secure and appropriate for the area?",
            subtext: "Ensure no breach and fencing is stable.",
            answer: "Yes" as const,
            comment: "No issues found with perimeter fencing.",
            required: true
          }
        ]
      },
      {
        section: "2.0 Access & Egress",
        description: "Safe movement of persons and vehicles",
        items: [
          {
            id: "2.1",
            text: "Are emergency exits and escape routes kept clear?",
            subtext: "Verify signs are illuminated and routes clear of debris.",
            answer: null,
            comment: "",
            required: true
          },
          {
            id: "2.2",
            text: "Is there adequate lighting throughout all access routes?",
            subtext: "Check during low light or night audits.",
            answer: null,
            comment: "",
            required: true
          },
          {
            id: "2.3",
            text: "Are traffic routes clearly segregated for pedestrians and vehicles?",
            subtext: "Observe signage, barriers, and crossing points.",
            answer: null,
            comment: "",
            required: false
          },
          {
            id: "2.4",
            text: "Are ladders/scaffolds inspected and safe for use?",
            subtext: "Check inspection tags and structural stability.",
            answer: null,
            comment: "",
            required: true
          }
        ]
      },
      {
        section: "3.0 Personal Protective Equipment (PPE)",
        description: "Compliance with safety gear requirements",
        items: [
          {
            id: "3.1",
            text: "Is mandatory PPE being worn by all operatives on site?",
            subtext: "Hard hat, hi-vis vest, and safety boots are minimum standard.",
            answer: null,
            comment: "",
            required: true
          },
          {
            id: "3.2",
            text: "Is mandatory PPE being worn by all operatives on site? (Detailed Check)",
            subtext: "Verify fit and condition of PPE.",
            answer: null,
            comment: "",
            required: false
          },
          {
            id: "3.3",
            text: "Is PPE in good condition and fit for purpose?",
            subtext: "Check for wear, tears, or structural damage.",
            answer: null,
            comment: "",
            required: true
          },
          {
            id: "3.4",
            text: "Are safety signs regarding mandatory PPE clearly displayed?",
            subtext: "Check signs at entrance points and work zones.",
            answer: null,
            comment: "",
            required: false
          },
          {
            id: "3.5",
            text: "Is damaged PPE reported and replaced promptly?",
            subtext: "Verify records or report procedures.",
            answer: null,
            comment: "",
            required: true
          }
        ]
      },
      {
        section: "4.0 Fire Safety",
        description: "Fire prevention controls and emergency gear",
        items: [
          {
            id: "4.1",
            text: "Are fire extinguishers in place, visible, and fully charged?",
            subtext: "Verify safety pins are intact and gauge is in the green.",
            answer: "Yes" as const,
            comment: "All site extinguishers checked.",
            required: true,
            evidenceFile: "img_extinguisher.jpg"
          },
          {
            id: "4.2",
            text: "Is the fire alarm system operational and tested weekly?",
            subtext: "Check test logs and verify sounders work.",
            answer: "Yes" as const,
            comment: "Weekly alarm test completed.",
            required: true
          },
          {
            id: "4.3",
            text: "Are fire wardens trained and their names displayed?",
            subtext: "Confirm poster on main notice board.",
            answer: "Yes" as const,
            comment: "Poster is current.",
            required: false
          },
          {
            id: "4.4",
            text: "Are hot work permits issued where required?",
            subtext: "Review permit folder and active site works.",
            answer: "Yes" as const,
            comment: "Active permit in place for welding area.",
            required: true
          }
        ]
      },
      {
        section: "5.0 Electrical & Hand Tools",
        description: "Safe usage and maintenance of work equipment",
        items: [
          {
            id: "5.1",
            text: "Are all electrical cables off the ground or covered?",
            subtext: "Ensure cables do not present trip or water exposure hazards.",
            answer: "Yes" as const,
            comment: "Slinging utilized for overhead lines.",
            required: true
          },
          {
            id: "5.2",
            text: "Are hand tools inspected for damage before use?",
            subtext: "Check handles, guards, and power cables.",
            answer: "Yes" as const,
            comment: "Daily toolbox talks highlight tool inspection.",
            required: true,
            evidenceFile: "img_tool_check.jpg"
          },
          {
            id: "5.3",
            text: "Is 110V equipment used for portable electric tools?",
            subtext: "Verify transformers are in place.",
            answer: "Yes" as const,
            comment: "Standard site transformers active.",
            required: true
          },
          {
            id: "5.4",
            text: "Are PAT testing records up to date?",
            subtext: "Check labels on tools and safety logs.",
            answer: "Yes" as const,
            comment: "All tools checked and tagged.",
            required: true
          }
        ]
      },
      {
        section: "6.0 Hazardous Substances (COSHH)",
        description: "Control of substances hazardous to health",
        items: [
          {
            id: "6.1",
            text: "Are COSHH assessments available for all substances in use?",
            subtext: "Verify folder access for site managers and operatives.",
            answer: null,
            comment: "",
            required: true
          },
          {
            id: "6.2",
            text: "Are hazardous substances stored securely in locked cabinets?",
            subtext: "Verify cabinet doors are locked when not in use.",
            answer: "No" as const,
            comment: "Cabinet in Sector 3 found unlocked.",
            required: true,
            hasWarning: true,
            hasActionRequired: true
          },
          {
            id: "6.3",
            text: "Is appropriate spill response kit available near storage?",
            subtext: "Check contents and positioning of spill kits.",
            answer: null,
            comment: "",
            required: true
          },
          {
            id: "6.4",
            text: "Are operatives trained in COSHH hazards?",
            subtext: "Verify training records or certificates.",
            answer: null,
            comment: "",
            required: false
          }
        ]
      }
    ];

    const newFormId = `FORM-00${forms.length + 1}`;
    const newForm: ComplianceForm = {
      id: newFormId,
      name: templateName,
      type: "Inspections",
      typeLabel: "Checklist",
      category: category,
      project: "Skyline Plaza Ph. 2",
      status: "Draft",
      created: "21 Jun 2026",
      lastUpdated: "21 Jun 2026",
      version: template?.version || "v1.0"
    };
    
    setForms(prev => [newForm, ...prev]);

    setActiveInspection({
      id: newFormId,
      name: templateName,
      category: category,
      project: "Skyline Plaza Ph. 2",
      type: "Weekly Site Inspection",
      dueDate: "Oct 24, 2023",
      assignedTo: "Alex Henderson",
      status: "In Progress",
      questions: activeQuestions,
      completedBy: "Alex Henderson",
      position: "Assistant Safety Manager",
      dateOfCompletion: "10/04/2026",
      isSigned: true,
      signatureName: "Alex Henderson",
      isDeclared: true
    });

    // Expand the first section by default
    setExpandedSections({
      "1.0 Site Setup": true,
      "2.0 Access & Egress": false,
      "3.0 Personal Protective Equipment (PPE)": false,
      "4.0 Fire Safety": false,
      "5.0 Electrical & Hand Tools": false,
      "6.0 Hazardous Substances (COSHH)": false
    });

    setCurrentView("complete-inspection");
    toast.success(`Checklist inspection "${templateName}" started!`);
  };



  // Categories list
  const [categories, setCategories] = useState<string[]>([
    "Central Plaza Dev.",
    "North Tower",
    "River Bridge Site",
    "Depot 4"
  ]);

  // Types list
  const types = ["Inspections", "Fire Risk", "COSHH", "RAMS", "Risk Assessments", "Permits", "Method Statements"];

  // Tab definitions
  const tabs = [
    "All Forms",
    "Drafts",
    "Completed",
    "Requires Review",
    "Assigned to Me",
    "RAMS",
    "Risk Assessments",
    "COSHH",
    "Permits",
    "Method Statements",
    "Inspections"
  ];

  // Dynamic statistics calculations
  const stats = useMemo(() => {
    const draftCount = forms.filter(f => f.status === "Draft").length;
    const completedCount = forms.filter(f => f.status === "Completed").length;
    const reviewCount = forms.filter(f => f.status === "Requires Review").length;
    const assignedCount = forms.filter(f => f.status === "Assigned").length;
    
    // Total documents created includes all items
    const docCreatedCount = forms.length;
    const catCount = categories.length;

    return {
      draft: draftCount.toString().padStart(2, "0"),
      completed: completedCount.toString().padStart(2, "0"),
      review: reviewCount.toString().padStart(2, "0"),
      assigned: assignedCount.toString().padStart(2, "0"),
      created: docCreatedCount.toString().padStart(2, "0"),
      categories: catCount.toString().padStart(2, "0")
    };
  }, [forms, categories]);

  // Close all filter dropdowns
  const closeAllDropdowns = () => {
    setIsCatDropdownOpen(false);
    setIsTypeDropdownOpen(false);
    setIsStatusDropdownOpen(false);
    setIsDateDropdownOpen(false);
  };

  // Filter forms list
  const filteredForms = useMemo(() => {
    return forms.filter(form => {
      // 1. Search Query Match
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        form.name.toLowerCase().includes(query) ||
        form.id.toLowerCase().includes(query) ||
        form.category.toLowerCase().includes(query) ||
        form.project.toLowerCase().includes(query) ||
        form.type.toLowerCase().includes(query) ||
        form.typeLabel.toLowerCase().includes(query);

      // 2. Tab Filter Match
      let matchesTab = true;
      if (activeTab === "Drafts") {
        matchesTab = form.status === "Draft";
      } else if (activeTab === "Completed") {
        matchesTab = form.status === "Completed";
      } else if (activeTab === "Requires Review") {
        matchesTab = form.status === "Requires Review";
      } else if (activeTab === "Assigned to Me") {
        matchesTab = form.status === "Assigned";
      } else if (activeTab === "RAMS") {
        matchesTab = form.type === "RAMS" || form.typeLabel.toLowerCase() === "rams";
      } else if (activeTab === "Risk Assessments") {
        matchesTab = form.type === "Risk Assessments" || form.type === "Fire Risk" || form.typeLabel.toLowerCase() === "risk assessment";
      } else if (activeTab === "COSHH") {
        matchesTab = form.type === "COSHH";
      } else if (activeTab === "Permits") {
        matchesTab = form.type === "Permits" || form.typeLabel.toLowerCase() === "permit";
      } else if (activeTab === "Method Statements") {
        matchesTab = form.type === "Method Statements" || form.typeLabel.toLowerCase() === "method statement";
      } else if (activeTab === "Inspections") {
        matchesTab = form.type === "Inspections" || form.typeLabel.toLowerCase() === "checklist" || form.typeLabel.toLowerCase() === "inspection";
      }

      // 3. Dropdown Filters Match
      const matchesCategory = selectedCategory === "All Categories" || form.category === selectedCategory;
      const matchesType = selectedType === "All Types" || form.type === selectedType;
      const matchesStatus = selectedStatus === "All Status" || form.status === selectedStatus;

      // Date Range Match Mock logic
      let matchesDate = true;
      if (selectedDateRange === "Last 7 Days") {
        // Mock matching logic (could integrate with actual date formatting)
        matchesDate = true;
      }

      return matchesSearch && matchesTab && matchesCategory && matchesType && matchesStatus && matchesDate;
    });
  }, [forms, searchQuery, activeTab, selectedCategory, selectedType, selectedStatus, selectedDateRange]);

  // Handler to delete a form
  const handleDeleteForm = (id: string, name: string) => {
    setForms(prev => prev.filter(f => f.id !== id));
    toast.success(`Form "${name}" has been deleted successfully.`);
  };

  // Handler to download a form
  const handleDownloadForm = (name: string) => {
    toast.success(`Initiating download for "${name}" (PDF)...`);
  };

  // Handler to view a form
  const handleViewForm = (name: string) => {
    toast.success(`Opening Document Viewer for "${name}"...`);
  };

  // Handler to edit a form
  const handleEditForm = (name: string) => {
    const form = forms.find(f => f.name === name);
    if (!form) return;

    // Use our high-fidelity 24-question checklist structure
    const activeQuestions = [
      {
        section: "1.0 Site Setup",
        description: "General site conditions and environment",
        items: [
          {
            id: "1.1",
            text: "Is the site entrance clearly marked and secured?",
            subtext: "Check for appropriate signage and functional gating/locks.",
            answer: "Yes" as const,
            comment: "Main gate locked. Signage visible from primary road.",
            required: true,
            evidence: true,
            evidenceFile: "img_entrance.jpg"
          },
          {
            id: "1.2",
            text: "Are welfare facilities clean and adequate?",
            subtext: "Verify soap, water, and drying facilities are available.",
            answer: "No" as const,
            comment: "Hand sanitizer dispenser in Block B is empty. Cleaning logs haven't been updated since yesterday.",
            required: true,
            hasWarning: true,
            hasActionRequired: true,
            evidenceFile: "img_welfare.jpg"
          },
          {
            id: "1.3",
            text: "Is the site perimeter fencing secure and appropriate for the area?",
            subtext: "Ensure no breach and fencing is stable.",
            answer: "Yes" as const,
            comment: "No issues found with perimeter fencing.",
            required: true
          }
        ]
      },
      {
        section: "2.0 Access & Egress",
        description: "Safe movement of persons and vehicles",
        items: [
          {
            id: "2.1",
            text: "Are emergency exits and escape routes kept clear?",
            subtext: "Verify signs are illuminated and routes clear of debris.",
            answer: null,
            comment: "",
            required: true
          },
          {
            id: "2.2",
            text: "Is there adequate lighting throughout all access routes?",
            subtext: "Check during low light or night audits.",
            answer: null,
            comment: "",
            required: true
          },
          {
            id: "2.3",
            text: "Are traffic routes clearly segregated for pedestrians and vehicles?",
            subtext: "Observe signage, barriers, and crossing points.",
            answer: null,
            comment: "",
            required: false
          },
          {
            id: "2.4",
            text: "Are ladders/scaffolds inspected and safe for use?",
            subtext: "Check inspection tags and structural stability.",
            answer: null,
            comment: "",
            required: true
          }
        ]
      },
      {
        section: "3.0 Personal Protective Equipment (PPE)",
        description: "Compliance with safety gear requirements",
        items: [
          {
            id: "3.1",
            text: "Is mandatory PPE being worn by all operatives on site?",
            subtext: "Hard hat, hi-vis vest, and safety boots are minimum standard.",
            answer: null,
            comment: "",
            required: true
          },
          {
            id: "3.2",
            text: "Is mandatory PPE being worn by all operatives on site? (Detailed Check)",
            subtext: "Verify fit and condition of PPE.",
            answer: null,
            comment: "",
            required: false
          },
          {
            id: "3.3",
            text: "Is PPE in good condition and fit for purpose?",
            subtext: "Check for wear, tears, or structural damage.",
            answer: null,
            comment: "",
            required: true
          },
          {
            id: "3.4",
            text: "Are safety signs regarding mandatory PPE clearly displayed?",
            subtext: "Check signs at entrance points and work zones.",
            answer: null,
            comment: "",
            required: false
          },
          {
            id: "3.5",
            text: "Is damaged PPE reported and replaced promptly?",
            subtext: "Verify records or report procedures.",
            answer: null,
            comment: "",
            required: true
          }
        ]
      },
      {
        section: "4.0 Fire Safety",
        description: "Fire prevention controls and emergency gear",
        items: [
          {
            id: "4.1",
            text: "Are fire extinguishers in place, visible, and fully charged?",
            subtext: "Verify safety pins are intact and gauge is in the green.",
            answer: "Yes" as const,
            comment: "All site extinguishers checked.",
            required: true,
            evidenceFile: "img_extinguisher.jpg"
          },
          {
            id: "4.2",
            text: "Is the fire alarm system operational and tested weekly?",
            subtext: "Check test logs and verify sounders work.",
            answer: "Yes" as const,
            comment: "Weekly alarm test completed.",
            required: true
          },
          {
            id: "4.3",
            text: "Are fire wardens trained and their names displayed?",
            subtext: "Confirm poster on main notice board.",
            answer: "Yes" as const,
            comment: "Poster is current.",
            required: false
          },
          {
            id: "4.4",
            text: "Are hot work permits issued where required?",
            subtext: "Review permit folder and active site works.",
            answer: "Yes" as const,
            comment: "Active permit in place for welding area.",
            required: true
          }
        ]
      },
      {
        section: "5.0 Electrical & Hand Tools",
        description: "Safe usage and maintenance of work equipment",
        items: [
          {
            id: "5.1",
            text: "Are all electrical cables off the ground or covered?",
            subtext: "Ensure cables do not present trip or water exposure hazards.",
            answer: "Yes" as const,
            comment: "Slinging utilized for overhead lines.",
            required: true
          },
          {
            id: "5.2",
            text: "Are hand tools inspected for damage before use?",
            subtext: "Check handles, guards, and power cables.",
            answer: "Yes" as const,
            comment: "Daily toolbox talks highlight tool inspection.",
            required: true,
            evidenceFile: "img_tool_check.jpg"
          },
          {
            id: "5.3",
            text: "Is 110V equipment used for portable electric tools?",
            subtext: "Verify transformers are in place.",
            answer: "Yes" as const,
            comment: "Standard site transformers active.",
            required: true
          },
          {
            id: "5.4",
            text: "Are PAT testing records up to date?",
            subtext: "Check labels on tools and safety logs.",
            answer: "Yes" as const,
            comment: "All tools checked and tagged.",
            required: true
          }
        ]
      },
      {
        section: "6.0 Hazardous Substances (COSHH)",
        description: "Control of substances hazardous to health",
        items: [
          {
            id: "6.1",
            text: "Are COSHH assessments available for all substances in use?",
            subtext: "Verify folder access for site managers and operatives.",
            answer: null,
            comment: "",
            required: true
          },
          {
            id: "6.2",
            text: "Are hazardous substances stored securely in locked cabinets?",
            subtext: "Verify cabinet doors are locked when not in use.",
            answer: "No" as const,
            comment: "Cabinet in Sector 3 found unlocked.",
            required: true,
            hasWarning: true,
            hasActionRequired: true
          },
          {
            id: "6.3",
            text: "Is appropriate spill response kit available near storage?",
            subtext: "Check contents and positioning of spill kits.",
            answer: null,
            comment: "",
            required: true
          },
          {
            id: "6.4",
            text: "Are operatives trained in COSHH hazards?",
            subtext: "Verify training records or certificates.",
            answer: null,
            comment: "",
            required: false
          }
        ]
      }
    ];

    setActiveInspection({
      id: form.id,
      name: form.name,
      category: form.category,
      project: form.project || "Skyline Plaza Ph. 2",
      type: "Weekly Site Inspection",
      dueDate: "Oct 24, 2023",
      assignedTo: "Alex Henderson",
      status: form.status === "Completed" ? "Completed" : "In Progress",
      questions: activeQuestions,
      completedBy: "Alex Henderson",
      position: "Assistant Safety Manager",
      dateOfCompletion: "10/04/2026",
      isSigned: form.status === "Completed" || form.status === "Draft",
      signatureName: "Alex Henderson",
      isDeclared: form.status === "Completed" || form.status === "Draft"
    });

    setExpandedSections({
      "1.0 Site Setup": true,
      "2.0 Access & Egress": false,
      "3.0 Personal Protective Equipment (PPE)": false,
      "4.0 Fire Safety": false,
      "5.0 Electrical & Hand Tools": false,
      "6.0 Hazardous Substances (COSHH)": false
    });

    setCurrentView("complete-inspection");
    toast.info(`Editing inspection checklist "${name}"...`);
  };

  // Create new document submission
  const handleCreateDocumentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDocTitle.trim()) {
      toast.error("Please enter a document title.");
      return;
    }

    const newForm: ComplianceForm = {
      id: `FORM-${(forms.length + 1).toString().padStart(3, "0")}`,
      name: newDocTitle,
      type: newDocType,
      typeLabel: newDocTypeLabel,
      category: newDocCategory,
      project: newDocProject,
      status: "Draft",
      created: "21 Jun 2026",
      lastUpdated: "21 Jun 2026",
      version: "v1.0"
    };

    setForms([newForm, ...forms]);
    setIsStartDocModalOpen(false);
    setNewDocTitle("");
    setActiveTab("Drafts"); // Automatically view drafts to see the new form
    toast.success(`Draft "${newForm.name}" created successfully.`);
  };

  // Create new category submission
  const handleCreateCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) {
      toast.error("Please enter a category name.");
      return;
    }

    if (categories.includes(newCatName.trim())) {
      toast.error("This category already exists.");
      return;
    }

    setCategories([...categories, newCatName.trim()]);
    setIsAddCatModalOpen(false);
    setNewCatName("");
    setNewCatDesc("");
    setSelectedCatColor("#3b82f6");
    toast.success(`Category "${newCatName}" added successfully.`);
  };

  // Open Move Modal
  const handleOpenMoveModal = (form: ComplianceForm) => {
    setSelectedFormToMove(form);
    setNewCategoryForMovedForm("");
    setIsMoveModalOpen(true);
  };

  // Submit Move Form
  const handleMoveFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFormToMove) return;
    if (!newCategoryForMovedForm) {
      toast.error("Please select a target category.");
      return;
    }

    setForms(prev => prev.map(f => {
      if (f.id === selectedFormToMove.id) {
        return { ...f, category: newCategoryForMovedForm };
      }
      return f;
    }));

    setIsMoveModalOpen(false);
    toast.success(`Form "${selectedFormToMove.name}" successfully moved to "${newCategoryForMovedForm}".`);
  };

  // Open Delete Modal
  const handleDeleteFormClick = (form: ComplianceForm) => {
    setSelectedFormToDelete(form);
    setIsDeleteModalOpen(true);
  };

  // Confirm and Execute Delete
  const handleConfirmDelete = () => {
    if (!selectedFormToDelete) return;
    setForms(prev => prev.filter(f => f.id !== selectedFormToDelete.id));
    setIsDeleteModalOpen(false);
    toast.success(`Form "${selectedFormToDelete.name}" has been deleted permanently.`);
  };

  // Render function for Question Set Details view
  const renderQuestionSetsView = () => {
    return (
      <div className="flex flex-col gap-[32px] w-full max-w-[1584px] mx-auto pb-10 font-sans">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-[6px] text-[12px] font-sans">
          <button 
            type="button"
            // onClick={() => setCurrentView("list")}
            className="text-brand-secondary hover:text-brand-primary transition-colors font-medium font-sans cursor-pointer bg-transparent border-none p-0"
          >
            Dashboard
          </button>
          <ChevronRight className="w-3 h-3 text-[#5a6886]" />
          <button 
            type="button"
            // onClick={() => setCurrentView("list")}
            className="text-brand-secondary hover:text-brand-primary transition-colors font-medium font-sans cursor-pointer bg-transparent border-none p-0"
          >
            My Forms / Inspections
          </button>
          <ChevronRight className="w-3 h-3 text-[#5a6886]" />
          <span className="text-[#132651] font-bold font-sans">
            Question Set Details
          </span>
        </div>

        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col gap-[8px]">
            <h1 className="text-[30px] font-extrabold text-[#132651] leading-tight font-sans">
              Question Set Details
            </h1>
            <p className="text-[16px] text-[#5a6886] font-sans">
              Select a category and checklist type to view or start a checklist.
            </p>
          </div>
          
          <div className="flex flex-row items-center gap-3 self-start md:self-auto">
            <Button 
              variant="outline" 
              onClick={() => toast.info("Exporting selected question sets...")}
              className="h-[38px] border-[1.5px] border-[#132651] text-[#132651] font-bold hover:bg-[#132651]/5 rounded-[6px] text-[14px]"
            >
              Export Selected
            </Button>
            <Button 
              onClick={() => {
                const targetTemplate = selectedPreviewTemplate || questionSetTemplates[0];
                handleStartInspection(targetTemplate.name, targetTemplate.category);
              }}
              className="h-[38px] bg-[#132651] text-white font-bold hover:bg-[#132651]/95 rounded-[6px] text-[14px] shadow-sm"
            >
              New Submission
            </Button>
          </div>
        </div>

        {/* Search & Filter Row */}
        <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-[16px] flex flex-col xl:flex-row xl:items-center gap-4 justify-between shadow-[0_1px_2px_rgba(0,0,0,0.05)] w-full font-sans">
          {/* Search bar */}
          <div className="relative flex-1 min-w-[280px] font-sans">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#5a6886]" />
            <input
              type="text"
              placeholder="Search by name, ID or keywords..."
              value={qSearchQuery}
              onChange={(e) => setQSearchQuery(e.target.value)}
              className="w-full h-[36px] pl-11 pr-8 border border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary placeholder:text-[#5a6886] focus:border-[#132651] outline-none font-sans transition-colors bg-white font-sans"
            />
            {qSearchQuery && (
              <button
                type="button"
                onClick={() => setQSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-secondary hover:text-brand-primary cursor-pointer"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filters Group */}
          <div className="flex flex-wrap items-center gap-4 font-sans">
            {/* Category Dropdown */}
            <div className="flex flex-col gap-[6px] min-w-[178px] font-sans">
              <span className="text-[14px] text-[#5a6886] font-sans">Category</span>
              <div className="relative font-sans">
                <select
                  value={selectedQCategory}
                  onChange={(e) => setSelectedQCategory(e.target.value)}
                  className="w-full h-[38px] border border-[#e3e6ec] rounded-[6px] px-[16px] py-[8px] pr-[40px] text-[14px] text-[#5a6886] bg-white font-sans outline-none appearance-none cursor-pointer focus:border-[#132651] transition"
                >
                  <option value="All">All Categories</option>
                  <option value="Site Safety">Site Safety</option>
                  <option value="Toolbox Talks">Toolbox Talks</option>
                  <option value="COSHH Assessments">COSHH Assessments</option>
                  <option value="Equipment Check">Equipment Check</option>
                  <option value="Office Audit">Office Audit</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#5a6886] pointer-events-none" />
              </div>
            </div>

            {/* Inspections Type Dropdown */}
            <div className="flex flex-col gap-[6px] min-w-[178px] font-sans">
              <span className="text-[14px] text-[#5a6886] font-sans">Inspections Type</span>
              <div className="relative font-sans">
                <select
                  value={filterInspectionsType}
                  onChange={(e) => setFilterInspectionsType(e.target.value)}
                  className="w-full h-[38px] border border-[#e3e6ec] rounded-[6px] px-[16px] py-[8px] pr-[40px] text-[14px] text-[#5a6886] bg-white font-sans outline-none appearance-none cursor-pointer focus:border-[#132651] transition"
                >
                  <option value="Daily Walkaround">Daily Walkaround</option>
                  <option value="Monthly Check">Monthly Check</option>
                  <option value="Weekly Check">Weekly Check</option>
                  <option value="Statutory 7-Day">Statutory 7-Day</option>
                  <option value="Briefing">Briefing</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#5a6886] pointer-events-none" />
              </div>
            </div>

            {/* Membership Access Dropdown */}
            <div className="flex flex-col gap-[6px] min-w-[178px] font-sans">
              <span className="text-[14px] text-[#5a6886] font-sans">Membership Access</span>
              <div className="relative font-sans">
                <select
                  value={filterMembershipAccess}
                  onChange={(e) => setFilterMembershipAccess(e.target.value)}
                  className="w-full h-[38px] border border-[#e3e6ec] rounded-[6px] px-[16px] py-[8px] pr-[40px] text-[14px] text-[#5a6886] bg-white font-sans outline-none appearance-none cursor-pointer focus:border-[#132651] transition"
                >
                  <option value="All Access">All Access</option>
                  <option value="Pro Only">Pro Only</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#5a6886] pointer-events-none" />
              </div>
            </div>

            {/* Status Dropdown */}
            <div className="flex flex-col gap-[6px] min-w-[178px] font-sans">
              <span className="text-[14px] text-[#5a6886] font-sans">Status</span>
              <div className="relative font-sans">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full h-[38px] border border-[#e3e6ec] rounded-[6px] px-[16px] py-[8px] pr-[40px] text-[14px] text-[#5a6886] bg-white font-sans outline-none appearance-none cursor-pointer focus:border-[#132651] transition"
                >
                  <option value="Published">Published</option>
                  <option value="Under Review">Under Review</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#5a6886] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
          
          {/* Left Categories Column */}
          <div className="w-full lg:w-[280px] xl:w-[319px] shrink-0 flex flex-col gap-6 font-sans">
            <h3 className="text-[20px] font-bold text-[#132651] font-sans">
              Categories
            </h3>
            
            {/* Scrollable pill strip on small screen, list on lg screen */}
            <div className="flex flex-row lg:flex-col gap-[6px] w-full overflow-x-auto pb-3 lg:pb-0 scrollbar-none snap-x shrink-0">
              {qCategories.map((cat) => {
                const isActive = selectedQCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => setSelectedQCategory(cat.name)}
                    className={cn(
                      "flex items-center justify-between p-[12px] rounded-[2px] transition-all text-left whitespace-nowrap cursor-pointer focus:outline-none snap-center lg:w-full border border-transparent font-sans",
                      isActive 
                        ? "bg-white border-[#e3e6ec] shadow-[0_2px_8px_rgba(19,38,81,0.06)] font-bold text-[#132651]" 
                        : "text-[#45464f] hover:bg-slate-50 hover:text-brand-primary font-medium"
                    )}
                  >
                    <span className="text-[14px] font-sans mr-4 lg:mr-0">{cat.name}</span>
                    <span 
                      className={cn(
                        "text-[14px] font-sans font-bold px-[8px] py-[2px] rounded-[12px] text-center shrink-0 min-w-[28px]",
                        isActive 
                          ? "bg-[#f3f5f8] text-[#132651]" 
                          : "bg-[#e0e3e5] text-[#45464f]"
                      )}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Custom Request Banner Card */}
            <div className="bg-[#f3f5f8] border border-dashed border-[#e3e6ec] rounded-[6px] p-[17px] flex flex-col items-center gap-[10px] text-center w-full font-sans">
              <div className="w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center text-brand-secondary shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-[#e3e6ec]">
                <Plus className="w-[14px] h-[14px] text-[#132651]" />
              </div>
              <div className="flex flex-col font-sans">
                <span className="text-[12px] font-sans text-[#5a6886] tracking-wider uppercase">
                  Need a custom set?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("request-custom-build-section");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    } else {
                      toast.info("Please use the 'Request Custom Build' button at the bottom of the list.");
                    }
                  }}
                  className="text-[16px] font-bold text-[#132651] hover:underline mt-1 cursor-pointer font-sans leading-snug bg-transparent border-none p-0"
                >
                  Request Custom Inspection Checklist
                </button>
              </div>
            </div>
          </div>

          {/* Cards & Right Sticky Preview Panel */}
          <div className="flex-1 w-full grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
            
            {/* Center Area Cards list */}
            <div className={cn(
              "flex flex-col gap-[20px] w-full",
              selectedPreviewTemplate ? "xl:col-span-1" : "xl:col-span-2"
            )}>
              {filteredQTemplates.length > 0 ? (
                filteredQTemplates.map((template) => (
                  <div 
                    key={template.id}
                    className="bg-white border border-[#e3e6ec] rounded-[6px] overflow-hidden relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col w-full font-sans"
                  >
                    {/* Top Stripe */}
                    <div 
                      className="h-[8px] w-full"
                      style={{ backgroundColor: template.accentColor || "#132651" }}
                    />
                    
                    <div className="p-6 flex flex-col gap-4 relative">
                      {/* Top Row: Title & Action Dot */}
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex flex-col font-sans">
                          <span className="text-[11px] font-bold text-[#5a6886] tracking-wider uppercase font-sans">
                            {template.category}
                          </span>
                          <h4 className="text-[18px] font-bold text-[#132651] mt-1 font-sans">
                            {template.name}
                          </h4>
                        </div>
                        <button 
                          type="button"
                          className="p-1.5 rounded-full text-brand-secondary hover:bg-slate-100 hover:text-brand-primary"
                        >
                          <MoreVertical size={18} />
                        </button>
                      </div>

                      {/* Description */}
                      <p className="text-[14px] text-[#5a6886] leading-relaxed font-sans font-medium">
                        {template.description}
                      </p>

                      <div className="w-full h-px bg-[#e3e6ec]" />

                      {/* Middle Stats Row */}
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[14px] text-[#5a6886] font-medium font-sans">
                        <div className="flex items-center gap-1.5 font-sans">
                          <FileText className="w-[16px] h-[16px] text-brand-secondary" />
                          <span>{template.questionsCount} Questions</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-sans">
                          <Clock className="w-[16px] h-[16px] text-brand-secondary" />
                          <span>~ {template.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-sans">
                          <RotateCcw className="w-[16px] h-[16px] text-brand-secondary" />
                          <span>Version {template.version}</span>
                        </div>
                        <span 
                          className={cn(
                            "px-2 py-0.5 rounded-[4px] text-[12px] font-bold border shrink-0 font-sans",
                            template.status === "Published" 
                              ? "bg-green-50 text-green-700 border-green-200" 
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          )}
                        >
                          {template.status}
                        </span>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <Button
                          onClick={() => handleStartInspection(template.name, template.category)}
                          className="h-[34px] px-4 bg-[#132651] hover:bg-[#132651]/95 text-white text-[12px] font-bold rounded-[6px]"
                        >
                          Start Inspection
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedPreviewTemplate(template)}
                          className="h-[34px] px-4 border-[#e3e6ec] text-[#132651] hover:border-[#132651] text-[12px] font-bold rounded-[6px]"
                        >
                          Preview Template
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => toast.success(`Saved "${template.name}" template.`)}
                          className="h-[34px] px-3 border-[#e3e6ec] text-[#132651] hover:border-[#132651] text-[12px] font-bold rounded-[6px]"
                        >
                          Save
                        </Button>
                      </div>

                      <div className="flex items-center mt-3">
                        <button
                          type="button"
                          onClick={() => {
                            const el = document.getElementById("request-custom-build-section");
                            if (el) {
                              el.scrollIntoView({ behavior: "smooth" });
                              setCustomRequestCategory(template.category);
                            } else {
                              toast.info("Please use the 'Request Custom Build' button at the bottom of the list.");
                            }
                          }}
                          className="text-[13px] font-bold text-[#132651] underline hover:text-[#132651]/80 transition cursor-pointer font-sans bg-transparent border-none p-0 text-left"
                        >
                          Request Custom Inspection Checklist
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center p-12 text-center bg-white border border-[#e3e6ec] rounded-[6px] w-full shadow-sm">
                  <Search className="w-12 h-12 text-slate-300 mb-3" />
                  <h3 className="text-[16px] font-bold text-[#132651] font-sans">No matching question sets found</h3>
                  <p className="text-[14px] text-[#5a6886] mt-1 font-sans">Try widening your filters or keywords</p>
                </div>
              )}

              {/* Bottom Custom Request Build Card */}
              <div 
                id="request-custom-build-section"
                className="bg-[#f3f5f8]/50 border border-dashed border-[#e3e6ec] rounded-[8px] p-6 flex flex-col items-center gap-4 text-center w-full font-sans shadow-[0_1px_3px_rgba(0,0,0,0.03)] mt-2"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#132651] shadow-[0_2px_6px_rgba(0,0,0,0.04)] border border-[#e3e6ec]">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div className="flex flex-col max-w-[400px]">
                  <h4 className="text-[16px] font-bold text-[#132651] font-sans">
                    Can&apos;t find what you need?
                  </h4>
                  <p className="text-[13px] text-[#5a6886] mt-2 font-medium leading-relaxed font-sans">
                    Our consultants can build a custom question set tailored to your specific site or industry standards.
                  </p>
                </div>
                <Button
                  onClick={() => {
                    setCustomRequestCategory(selectedQCategory !== "All" ? selectedQCategory : "Site Safety");
                    setIsCustomRequestModalOpen(true);
                  }}
                  className="h-[34px] px-5 bg-[#132651] hover:bg-[#132651]/95 text-white text-[12px] font-bold rounded-[6px]"
                >
                  Request Custom Build
                </Button>
              </div>
            </div>

            {/* Right Column Preview Panel */}
            {selectedPreviewTemplate && (
              <div className="bg-white border border-[#e3e6ec] rounded-[12px] overflow-hidden shadow-[0_24px_64px_rgba(19,38,81,0.12)] flex flex-col w-full xl:sticky xl:top-[90px] font-sans">
                {/* Preview Header */}
                <div className="bg-[#f3f5f8] border-b border-[#e3e6ec] py-[24px] px-[24px] flex justify-between items-center relative">
                  <div className="flex flex-col">
                    <span className="text-[14px] text-[#5a6886] tracking-wider uppercase font-sans font-medium">
                      TEMPLATE PREVIEW
                    </span>
                    <h4 className="text-[18px] font-bold text-[#132651] mt-1 font-sans font-sans">
                      {selectedPreviewTemplate.name}
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedPreviewTemplate(null)}
                    className="p-1.5 rounded-full text-[#5a6886] hover:bg-slate-200 hover:text-brand-primary transition cursor-pointer"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Preview Body */}
                <div className="p-6 flex flex-col gap-6 overflow-y-auto max-h-[500px]">
                  {selectedPreviewTemplate.questions?.map((section: any, sIdx: number) => (
                    <div key={sIdx} className="flex flex-col gap-4">
                      {/* Section Title */}
                      <div className="border-b border-[#e3e6ec] pb-[9px] flex items-center gap-[12px]">
                        {sIdx === 0 ? (
                          <Wrench className="w-[18px] h-[18px] text-[#132651]" />
                        ) : sIdx === 1 ? (
                          <Shield className="w-[18px] h-[18px] text-[#132651]" />
                        ) : (
                          <CheckSquare className="w-[18px] h-[18px] text-[#132651]" />
                        )}
                        <h5 className="text-[18px] font-bold text-[#132651] font-sans">
                          {section.section}
                        </h5>
                      </div>

                      {/* Questions List */}
                      <div className="flex flex-col gap-4">
                        {section.items.map((item: any, iIdx: number) => (
                          <div key={iIdx} className="flex flex-col gap-2.5 w-full">
                            <div className="flex items-start justify-between gap-4">
                              <p className="text-[14px] text-[#132651] font-medium leading-relaxed font-sans">
                                {item.text} {item.required && <span className="text-[#d92d20] font-bold">*</span>}
                              </p>
                              
                              {/* Yes / No / N/A Option Badge */}
                              <div className="bg-[#f3f5f8] rounded-[6px] px-[8px] py-[4px] text-[12px] font-medium text-[#132651] shrink-0 whitespace-nowrap">
                                Yes / No / N/A
                              </div>
                            </div>

                            {/* Extra Tags */}
                            {item.evidence && (
                              <div className="flex items-center gap-1 text-[12px] text-[#5a6886] font-sans mt-0.5">
                                <Camera className="w-[13px] h-[12px] text-brand-secondary" />
                                <span>Evidence Required</span>
                              </div>
                            )}
                            
                            {item.comment && (
                              <div className="flex items-center gap-1 text-[12px] text-[#5a6886] font-sans mt-0.5">
                                <AlertCircle className="w-[12px] h-[12px] text-brand-secondary" />
                                <span>{item.comment}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Collapse message */}
                  <div className="text-[#5a6886] opacity-60 text-[12px] text-left font-sans py-2 border-t border-[#e3e6ec] mt-2 font-medium">
                    Further sections collapsed for preview...
                  </div>
                </div>

                {/* Preview Footer */}
                <div className="border-t border-[#c5c6d0] py-[25px] px-[24px] flex items-center justify-between bg-slate-50/30">
                  <span className="text-[14px] text-[#5a6886] font-sans">
                    Questions: {selectedPreviewTemplate.questionsCount} / {selectedPreviewTemplate.questionsCount} shown
                  </span>
                  <Button
                    onClick={() => handleStartInspection(selectedPreviewTemplate.name, selectedPreviewTemplate.category)}
                    className="h-[34px] bg-[#132651] hover:bg-[#132651]/95 text-white text-[12px] font-bold rounded-[6px]"
                  >
                    Apply Template
                  </Button>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* MODAL 5: REQUEST CUSTOM BUILD */}
        <RequestCustomTemplateModal
          isOpen={isCustomRequestModalOpen}
          onClose={() => setIsCustomRequestModalOpen(false)}
          onSubmit={(data) => {
            toast.success(`Custom template request for "${data.templateName}" submitted successfully!`);
            setIsCustomRequestModalOpen(false);
          }}
          initialCategory={customRequestCategory}
        />

      </div>
    );
  };

  // Render function for Complete an Inspection view
  const renderCompleteInspectionView = () => {
    if (!activeInspection) return null;

    // Calculate dynamic stats
    const totalQuestions = activeInspection.questions.reduce((acc, s) => acc + s.items.length, 0);
    const answeredQuestions = activeInspection.questions.reduce((acc, s) => {
      return acc + s.items.filter(item => item.answer !== null).length;
    }, 0);
    const issuesCount = activeInspection.questions.reduce((acc, s) => {
      return acc + s.items.filter(item => item.answer === "No").length;
    }, 0);
    const evidenceCount = activeInspection.questions.reduce((acc, s) => {
      return acc + s.items.filter(item => !!item.evidenceFile).length;
    }, 0);

    const progressPercentage = totalQuestions > 0 ? Math.floor((answeredQuestions / totalQuestions) * 100) : 0;

    // Handlers
    const handleAnswerChange = (sectionIdx: number, itemIdx: number, value: "Yes" | "No" | "N/A" | null) => {
      setActiveInspection(prev => {
        if (!prev) return null;
        const newQuestions = [...prev.questions];
        const item = { ...newQuestions[sectionIdx].items[itemIdx] };
        
        item.answer = value;
        if (value === "No") {
          item.hasWarning = true;
          item.hasActionRequired = true;
        } else {
          item.hasWarning = false;
          item.hasActionRequired = false;
        }
        
        newQuestions[sectionIdx].items[itemIdx] = item;
        return { ...prev, questions: newQuestions };
      });
    };

    const handleCommentChange = (sectionIdx: number, itemIdx: number, value: string) => {
      setActiveInspection(prev => {
        if (!prev) return null;
        const newQuestions = [...prev.questions];
        newQuestions[sectionIdx].items[itemIdx] = {
          ...newQuestions[sectionIdx].items[itemIdx],
          comment: value
        };
        return { ...prev, questions: newQuestions };
      });
    };

    const handleActionChange = (sectionIdx: number, itemIdx: number, value: boolean) => {
      setActiveInspection(prev => {
        if (!prev) return null;
        const newQuestions = [...prev.questions];
        newQuestions[sectionIdx].items[itemIdx] = {
          ...newQuestions[sectionIdx].items[itemIdx],
          hasActionRequired: value
        };
        return { ...prev, questions: newQuestions };
      });
    };

    const handleUploadEvidence = (sectionIdx: number, itemIdx: number) => {
      setActiveInspection(prev => {
        if (!prev) return null;
        const newQuestions = [...prev.questions];
        const questionText = newQuestions[sectionIdx].items[itemIdx].text.toLowerCase();
        let fileName = "evidence_photo.jpg";
        if (questionText.includes("welfare")) fileName = "img_welfare.jpg";
        else if (questionText.includes("entrance")) fileName = "img_entrance.jpg";
        else if (questionText.includes("extinguisher")) fileName = "img_extinguisher.jpg";
        else if (questionText.includes("tool")) fileName = "img_tool_check.jpg";

        newQuestions[sectionIdx].items[itemIdx] = {
          ...newQuestions[sectionIdx].items[itemIdx],
          evidenceFile: fileName
        };
        return { ...prev, questions: newQuestions };
      });
      toast.success("Mock evidence file uploaded successfully.");
    };

    const handleRemoveEvidence = (sectionIdx: number, itemIdx: number) => {
      setActiveInspection(prev => {
        if (!prev) return null;
        const newQuestions = [...prev.questions];
        newQuestions[sectionIdx].items[itemIdx] = {
          ...newQuestions[sectionIdx].items[itemIdx],
          evidenceFile: undefined
        };
        return { ...prev, questions: newQuestions };
      });
      toast.info("Evidence file removed.");
    };

    const handleSaveDraft = () => {
      // Update form status in global state
      setForms(prev => prev.map(f => {
        if (f.id === activeInspection.id) {
          return {
            ...f,
            name: activeInspection.name,
            category: activeInspection.category,
            project: activeInspection.project,
            status: "Draft",
            lastUpdated: "21 Jun 2026"
          };
        }
        return f;
      }));
      setCurrentView("list");
      toast.success(`Draft checklist "${activeInspection.name}" saved successfully.`);
    };

    const handleSubmitChecklist = () => {
      if (!activeInspection.isSigned) {
        toast.error("Please sign the checklist before submission.");
        return;
      }
      if (!activeInspection.isDeclared) {
        toast.error("Please check the declaration checkbox before submission.");
        return;
      }

      // Update form status to Completed in global state
      setForms(prev => prev.map(f => {
        if (f.id === activeInspection.id) {
          return {
            ...f,
            name: activeInspection.name,
            category: activeInspection.category,
            project: activeInspection.project,
            status: "Completed" as const,
            lastUpdated: "21 Jun 2026"
          };
        }
        return f;
      }));
      setCurrentView("list");
      toast.success(`Checklist "${activeInspection.name}" submitted successfully!`);
    };

    const handleDownloadPDF = () => {
      toast.success(`Generating PDF for "${activeInspection.name}"... PDF download started.`);
    };

    return (
      <div className="flex flex-col gap-[32px] w-full max-w-[1584px] mx-auto pb-10 font-sans">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-[6px] text-[12px] font-sans">
          <button 
            type="button"
            onClick={() => setCurrentView("list")}
            className="text-brand-secondary hover:text-brand-primary transition-colors font-medium font-sans cursor-pointer bg-transparent border-none p-0"
          >
            Dashboard
          </button>
          <ChevronRight className="w-3 h-3 text-[#5a6886]" />
          <button 
            type="button"
            onClick={() => setCurrentView("list")}
            className="text-brand-secondary hover:text-brand-primary transition-colors font-medium font-sans cursor-pointer bg-transparent border-none p-0"
          >
            My Forms / Inspections
          </button>
          <ChevronRight className="w-3 h-3 text-[#5a6886]" />
          <span className="text-[#132651] font-bold font-sans">
            Complete an Inspection
          </span>
        </div>

        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col gap-[8px]">
            <h1 className="text-[30px] font-extrabold text-[#132651] leading-tight font-sans">
              Complete an Inspection
            </h1>
            <p className="text-[16px] text-[#5a6886] font-sans">
              Complete the selected checklist and submit it for your records.
            </p>
          </div>
          
          <div className="flex flex-row items-center gap-3 self-start md:self-auto">
            <Button 
              variant="outline" 
              onClick={() => setCurrentView("question-sets")}
              className="h-[38px] border-[1.5px] border-[#132651] text-[#132651] font-bold hover:bg-[#132651]/5 rounded-[6px] text-[14px]"
            >
              Browse Question Sets
            </Button>
            <Button 
              onClick={() => handleStartInspection(activeInspection.name, activeInspection.category)}
              className="h-[38px] bg-[#132651] text-white font-bold hover:bg-[#132651]/95 rounded-[6px] text-[14px] shadow-sm"
            >
              Start New Checklist
            </Button>
          </div>
        </div>

        {/* Bento Summary & Progress section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* Summary Card */}
          <div className="lg:col-span-2 bg-white border border-[#dfe3eb] rounded-[12px] p-6 lg:p-8 flex flex-col justify-center shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-4 text-left">
              <div>
                <span className="text-[12px] text-[#5a6886] font-medium font-sans">Category</span>
                <h4 className="text-[16px] font-bold text-[#132651] mt-1 font-sans">{activeInspection.category}</h4>
              </div>
              <div>
                <span className="text-[12px] text-[#5a6886] font-medium font-sans">Type</span>
                <h4 className="text-[16px] font-bold text-[#132651] mt-1 font-sans">{activeInspection.type}</h4>
              </div>
              <div>
                <span className="text-[12px] text-[#5a6886] font-medium font-sans block mb-1">Status</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-[4px] text-[12px] font-bold bg-[#00bc7d] text-white leading-tight font-sans">
                  {activeInspection.status}
                </span>
              </div>
              <div>
                <span className="text-[12px] text-[#5a6886] font-medium font-sans">Project</span>
                <h4 className="text-[16px] font-bold text-[#132651] mt-1 font-sans">{activeInspection.project}</h4>
              </div>
              <div>
                <span className="text-[12px] text-[#5a6886] font-medium font-sans">Due Date</span>
                <h4 className="text-[16px] font-bold text-[#132651] mt-1 font-sans">{activeInspection.dueDate}</h4>
              </div>
              <div>
                <span className="text-[12px] text-[#5a6886] font-medium font-sans">Assigned To</span>
                <h4 className="text-[16px] font-bold text-[#132651] mt-1 font-sans">{activeInspection.assignedTo}</h4>
              </div>
            </div>
          </div>

          {/* Progress Card */}
          <div className="bg-[#001137] text-white rounded-[12px] p-6 flex flex-col justify-between shadow-sm text-left">
            <div className="flex flex-col gap-4">
              <div className="flex items-end justify-between">
                <h4 className="text-[16px] font-bold text-slate-300 font-sans">Audit Progress</h4>
                <span className="text-[28px] font-bold leading-none text-white font-sans">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-[rgba(125,142,191,0.3)] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#00bc7d] h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-6 pt-4 border-t border-slate-700/50">
              <div>
                <span className="text-[12px] text-slate-400 font-sans">Questions</span>
                <h4 className="text-[18px] font-bold text-white mt-0.5 font-sans">{totalQuestions}</h4>
              </div>
              <div>
                <span className="text-[12px] text-slate-400 font-sans">Answered</span>
                <h4 className="text-[18px] font-bold text-white mt-0.5 font-sans">{answeredQuestions}</h4>
              </div>
              <div>
                <span className="text-[12px] text-slate-400 font-sans">Issues</span>
                <h4 className="text-[18px] font-bold text-rose-300 mt-0.5 font-sans">{issuesCount}</h4>
              </div>
              <div>
                <span className="text-[12px] text-slate-400 font-sans">Evidence</span>
                <h4 className="text-[18px] font-bold text-white mt-0.5 font-sans">{evidenceCount}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Questionnaire Sections */}
        <div className="flex flex-col gap-4 w-full">
          {activeInspection.questions.map((section, sIdx) => {
            const sectionCompletedCount = section.items.filter(item => item.answer !== null).length;
            const sectionTotalCount = section.items.length;
            const isOpen = expandedSections[section.section];

            return (
              <div 
                key={section.section} 
                className="bg-white border border-[#dfe3eb] rounded-[12px] overflow-hidden shadow-sm transition-all"
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => setExpandedSections(prev => ({ ...prev, [section.section]: !isOpen }))}
                  className="w-full flex items-center justify-between px-6 py-4 bg-[#fcfdfe] hover:bg-slate-50 transition cursor-pointer"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-full bg-[#f3f5f8] border border-[#e3e6ec] flex items-center justify-center text-[#132651] shrink-0">
                      {sIdx === 0 ? <Wrench className="w-5 h-5" /> : sIdx === 1 ? <Shield className="w-5 h-5" /> : <CheckSquare className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-[#132651] font-sans">{section.section}</h4>
                      <p className="text-[13px] text-[#5a6886] font-medium font-sans">{section.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-[12px] text-[#5a6886] font-bold font-sans">
                      {sectionCompletedCount} / {sectionTotalCount} Completed
                    </span>
                    <ChevronDown 
                      className={cn(
                        "w-5 h-5 text-[#5a6886] transition-transform duration-200", 
                        isOpen && "rotate-180"
                      )} 
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="border-t border-[#e3e6ec] divide-y divide-[#e3e6ec]">
                    {section.items.map((item, iIdx) => {
                      const isNo = item.answer === "No";
                      
                      return (
                        <div 
                          key={item.id} 
                          className={cn(
                            "p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start transition-colors",
                            isNo ? "bg-[rgba(217,45,32,0.03)]" : "bg-white"
                          )}
                        >
                          {/* Question Text */}
                          <div className="lg:col-span-5 flex flex-col gap-1.5 text-left">
                            <div className="flex items-start gap-2.5">
                              <span className="text-[16px] font-bold text-[#132651] font-sans">
                                {item.id} {item.text}
                              </span>
                              {(item.hasWarning || isNo) && (
                                <span className="text-red-500 mt-1 shrink-0">
                                  <AlertCircle className="w-[18px] h-[18px] fill-red-50" />
                                </span>
                              )}
                            </div>
                            {item.subtext && (
                              <p className="text-[13px] text-[#5a6886] font-medium font-sans">
                                {item.subtext}
                              </p>
                            )}
                          </div>

                          {/* Options Button Group */}
                          <div className="lg:col-span-3 flex justify-start lg:justify-center">
                            <div className="bg-[#f3f5f8] p-[4px] rounded-[6px] inline-flex items-center gap-1 border border-[#e3e6ec]">
                              {(["Yes", "No", "N/A"] as const).map(opt => {
                                const isSelected = item.answer === opt;
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    onClick={() => handleAnswerChange(sIdx, iIdx, opt)}
                                    className={cn(
                                      "px-4 py-1.5 text-[12px] font-bold rounded-[4px] transition-all cursor-pointer",
                                      isSelected
                                        ? opt === "No"
                                          ? "bg-[#d92d20] text-white shadow-sm"
                                          : "bg-[#132651] text-white shadow-sm"
                                        : "text-[#5a6886] hover:bg-slate-200/50"
                                    )}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Comments & Evidence */}
                          <div className="lg:col-span-4 flex flex-col gap-3">
                            <textarea
                              value={item.comment}
                              onChange={(e) => handleCommentChange(sIdx, iIdx, e.target.value)}
                              placeholder="Write a comment..."
                              rows={2}
                              className={cn(
                                "w-full p-3 border rounded-[6px] text-[14px] text-brand-primary placeholder:text-slate-400 outline-none transition focus:ring-1 focus:ring-[#132651] font-sans",
                                isNo ? "border-[#ba1a1a]" : "border-[#dfe3eb]"
                              )}
                            />

                            <div className="flex flex-wrap items-center justify-between gap-3 min-h-[34px]">
                              {/* Action Required Checkbox */}
                              {isNo ? (
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                  <input
                                    type="checkbox"
                                    checked={item.hasActionRequired || false}
                                    onChange={(e) => handleActionChange(sIdx, iIdx, e.target.checked)}
                                    className="w-4 h-4 rounded text-red-600 border-red-300 focus:ring-red-500 cursor-pointer"
                                  />
                                  <span className="text-[12px] font-bold text-[#d92d20] font-sans">
                                    Action Required
                                  </span>
                                </label>
                              ) : (
                                <div />
                              )}

                              {/* Evidence Upload */}
                              {item.evidenceFile ? (
                                <div className="flex items-center gap-2 bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px] py-1 px-2.5">
                                  <Camera className="w-3.5 h-3.5 text-[#5a6886]" />
                                  <span className="text-[12px] text-[#5a6886] font-medium font-sans max-w-[120px] truncate">
                                    {item.evidenceFile}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveEvidence(sIdx, iIdx)}
                                    className="text-[#5a6886] hover:text-red-500 cursor-pointer"
                                  >
                                    <X className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              ) : (
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={() => handleUploadEvidence(sIdx, iIdx)}
                                  className="h-[32px] px-3 border border-[#132651] text-[#132651] hover:bg-[#132651]/5 text-[12px] font-bold rounded-[6px]"
                                >
                                  Upload Evidence
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submission Sign-off */}
        <div className="bg-white border border-[#dfe3eb] rounded-[12px] p-6 lg:p-8 flex flex-col gap-6 shadow-sm w-full">
          <h4 className="text-[18px] font-bold text-[#132651] font-sans text-left border-b border-[#e3e6ec] pb-3">
            Submission Sign-off
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 text-left">
              <label className="text-[14px] text-[#132651] font-medium font-sans">Completed By</label>
              <input
                type="text"
                value={activeInspection.completedBy}
                onChange={(e) => {
                  const val = e.target.value;
                  setActiveInspection(prev => prev ? ({ ...prev, completedBy: val }) : null);
                }}
                className="h-[46px] border border-[#e3e6ec] rounded-[6px] px-4 text-[14px] text-[#132651] outline-none focus:border-[#132651] font-sans"
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-[14px] text-[#132651] font-medium font-sans">Position</label>
              <input
                type="text"
                value={activeInspection.position}
                onChange={(e) => {
                  const val = e.target.value;
                  setActiveInspection(prev => prev ? ({ ...prev, position: val }) : null);
                }}
                className="h-[46px] border border-[#e3e6ec] rounded-[6px] px-4 text-[14px] text-[#132651] outline-none focus:border-[#132651] font-sans"
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-[14px] text-[#132651] font-medium font-sans">Date of Completion</label>
              <input
                type="text"
                value={activeInspection.dateOfCompletion}
                onChange={(e) => {
                  const val = e.target.value;
                  setActiveInspection(prev => prev ? ({ ...prev, dateOfCompletion: val }) : null);
                }}
                className="h-[46px] border border-[#e3e6ec] rounded-[6px] px-4 text-[14px] text-[#132651] outline-none focus:border-[#132651] font-sans"
              />
            </div>
          </div>

          {/* Digital Signature Pad */}
          <div className="flex flex-col gap-2 text-left mt-2">
            <span className="text-[11px] font-bold tracking-[0.55px] uppercase text-[#45464f] font-sans">Digital Signature</span>
            
            {activeInspection.isSigned ? (
              <div 
                onClick={() => setIsSignatureModalOpen(true)}
                className="bg-[#fcfdfe] border border-[#e3e6ec] border-dashed rounded-[6px] h-32 flex flex-col items-center justify-center relative cursor-pointer group hover:border-[#132651] transition"
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition">
                  <span className="text-[11px] text-[#132651] font-bold">Edit Signature</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                  {/* Cursive rendered signature */}
                  <span 
                    className="text-[28px] font-semibold text-[#132651] select-none tracking-wide py-2 font-serif italic"
                    style={{
                      fontFamily: selectedSignatureStyle === "cursive" 
                        ? "'Brush Script MT', 'Comic Sans MS', cursive" 
                        : selectedSignatureStyle === "bold-script"
                        ? "'Segoe Print', cursive"
                        : "cursive"
                    }}
                  >
                    {activeInspection.signatureName}
                  </span>
                  <div className="h-px w-48 bg-[#e3e6ec] mt-1" />
                  <span className="text-[10px] text-slate-400 mt-1 uppercase font-sans tracking-widest">Digitally Signed</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveInspection(prev => prev ? ({ ...prev, isSigned: false, signatureName: "" }) : null);
                  }}
                  className="absolute bottom-2 right-2 text-red-500 hover:text-red-700 text-[12px] font-bold cursor-pointer"
                >
                  Clear Signature
                </button>
              </div>
            ) : (
              <div 
                onClick={() => {
                  setTypedSignature(activeInspection.completedBy || "Alex Henderson");
                  setIsSignatureModalOpen(true);
                }}
                className="bg-white border border-[#e3e6ec] border-dashed rounded-[6px] h-32 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#132651] transition"
              >
                <Edit className="w-6 h-6 text-[#132651] opacity-60" />
                <span className="text-[14px] font-bold text-[#132651] font-sans">
                  Click to sign or upload signature image
                </span>
              </div>
            )}
          </div>

          {/* Declaration check box */}
          <div 
            onClick={() => setActiveInspection(prev => prev ? ({ ...prev, isDeclared: !prev.isDeclared }) : null)}
            className="bg-[#e4ebfe]/60 border border-[rgba(173,198,255,0.5)] rounded-[8px] p-4 flex gap-4 items-start text-left cursor-pointer hover:bg-[#e4ebfe]/85 transition select-none"
          >
            <input
              type="checkbox"
              checked={activeInspection.isDeclared}
              onChange={() => {}} // toggled by parent div click
              className="w-5 h-5 rounded text-[#132651] border-slate-300 focus:ring-[#132651] cursor-pointer mt-0.5 shrink-0"
            />
            <p className="text-[14px] text-[#132651] leading-relaxed font-sans">
              Declaration: I hereby declare that the information provided in this checklist is true and accurate to the best of my knowledge and reflects the current safety conditions observed at the time of inspection.
            </p>
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full mt-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Button
              type="button"
              variant="outline"
              onClick={handleSaveDraft}
              className="w-full sm:w-auto h-[38px] px-6 border-[1.5px] border-[#132651] text-[#132651] hover:bg-[#132651]/5 text-[12px] font-bold rounded-[6px]"
            >
              Save Draft
            </Button>
            <Button
              type="button"
              onClick={handleSubmitChecklist}
              className="w-full sm:w-auto h-[38px] px-6 bg-[#132651] hover:bg-[#132651]/95 text-white text-[12px] font-bold rounded-[6px]"
            >
              Submit Checklist
            </Button>
          </div>
          
          <Button
            type="button"
            variant="outline"
            onClick={handleDownloadPDF}
            className="w-full sm:w-auto h-[38px] px-6 border-[1.5px] border-[#132651] text-[#132651] hover:bg-[#132651]/5 text-[12px] font-bold rounded-[6px]"
          >
            Download PDF
          </Button>
        </div>

        {/* Digital Signature Creator Modal */}
        {isSignatureModalOpen && (
          <div className="fixed inset-0 bg-[#132651]/40 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
            <div className="bg-white rounded-[12px] border border-[#e3e6ec] max-w-[480px] w-full p-6 shadow-2xl flex flex-col gap-5 text-left animate-in fade-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center border-b border-[#e3e6ec] pb-3">
                <h3 className="text-[18px] font-bold text-[#132651] font-sans">Create Digital Signature</h3>
                <button 
                  type="button" 
                  onClick={() => setIsSignatureModalOpen(false)}
                  className="p-1 rounded-full text-[#5a6886] hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-[#132651] font-medium font-sans">Type your name to sign</label>
                <input
                  type="text"
                  value={typedSignature}
                  onChange={(e) => setTypedSignature(e.target.value)}
                  className="h-[42px] border border-[#e3e6ec] rounded-[6px] px-3 text-[14px] text-[#132651] outline-none focus:border-[#132651]"
                  placeholder="e.g. Alex Henderson"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[14px] text-[#132651] font-medium font-sans">Select signature style</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "cursive", label: "Cursive Elegant" },
                    { id: "bold-script", label: "Bold Script" },
                    { id: "curly", label: "Curly" }
                  ].map(style => (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setSelectedSignatureStyle(style.id)}
                      className={cn(
                        "p-2.5 text-[12px] font-medium rounded-[6px] border transition cursor-pointer text-center",
                        selectedSignatureStyle === style.id
                          ? "border-[#132651] bg-[#132651]/5 text-[#132651] font-bold"
                          : "border-[#e3e6ec] hover:bg-slate-50 text-[#5a6886]"
                      )}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[12px] text-slate-400 font-sans">Signature Preview</span>
                <div className="bg-[#fcfdfe] border border-[#e3e6ec] border-dashed rounded-[6px] p-6 h-24 flex items-center justify-center">
                  <span 
                    className="text-[26px] text-[#132651] select-none font-serif italic"
                    style={{
                      fontFamily: selectedSignatureStyle === "cursive" 
                        ? "'Brush Script MT', 'Comic Sans MS', cursive" 
                        : selectedSignatureStyle === "bold-script"
                        ? "'Segoe Print', cursive"
                        : "cursive"
                    }}
                  >
                    {typedSignature || "Alex Henderson"}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsSignatureModalOpen(false)}
                  className="h-[36px] border border-[#e3e6ec] text-[#5a6886] hover:bg-slate-50 text-[12px] font-bold rounded-[6px]"
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setActiveInspection(prev => prev ? ({
                      ...prev,
                      isSigned: true,
                      signatureName: typedSignature || prev.completedBy || "Alex Henderson"
                    }) : null);
                    setIsSignatureModalOpen(false);
                    toast.success("Signature applied.");
                  }}
                  className="h-[36px] bg-[#132651] hover:bg-[#132651]/95 text-white text-[12px] font-bold rounded-[6px]"
                >
                  Apply Signature
                </Button>
              </div>
            </div>
          </div>
        )}

      </div>
    );
  };

  if (currentView === "question-sets") {
    return renderQuestionSetsView();
  }

  if (currentView === "complete-inspection") {
    return renderCompleteInspectionView();
  }

  return (
    <div className="flex flex-col gap-[32px] w-full max-w-[1584px] mx-auto pb-10">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-[6px] text-[12px] font-sans">
        <Link 
          href="/dashboard" 
          className="text-brand-secondary hover:text-brand-primary transition-colors font-medium font-sans"
        >
          Dashboard
        </Link>
        <ChevronRight size={14} className="text-brand-secondary/60" />
        <span className="text-brand-primary font-bold font-sans">My Forms / Inspections</span>
      </div>

      {/* Heading Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-[30px] font-extrabold text-brand-primary leading-tight font-sans">
            My Forms / Inspections
          </h1>
          <p className="text-[16px] text-brand-secondary font-sans">
            View your current membership details, key benefits
          </p>
        </div>
        
        {/* Header Action Buttons */}
        <div className="flex flex-row items-center gap-3 self-start md:self-auto">
          <Button 
            variant="outline" 
            onClick={() => setCurrentView("question-sets")}
            className="h-[38px] border-[1.5px] border-brand-primary text-brand-primary font-bold hover:bg-brand-primary/5 rounded-[6px] text-[14px]"
          >
            Browse Question Sets
          </Button>
          <Button 
            onClick={() => setIsStartDocModalOpen(true)}
            className="h-[38px] bg-brand-primary text-white font-bold hover:bg-brand-primary/95 rounded-[6px] text-[14px] shadow-sm"
          >
            Start New Inspections
          </Button>
        </div>
      </div>

      {/* Quick Actions Row */}
      <div className="flex flex-wrap items-center gap-[10px] w-full">
        <Button 
          variant="outline" 
          onClick={() => setIsStartDocModalOpen(true)}
          className="h-[34px] px-4 text-[13px] border-[#e3e6ec] bg-white text-brand-primary hover:border-brand-primary font-bold transition rounded-[6px]"
        >
          <Plus className="w-3.5 h-3.5 mr-1.5" />
          Start New Document
        </Button>
        
        <Button 
          variant="outline"
          asChild
          className="h-[34px] px-4 text-[13px] border-[#e3e6ec] bg-white text-brand-primary hover:border-brand-primary font-bold transition rounded-[6px]"
        >
          <Link href="/dashboard/risk-assessment">
            <Shield className="w-3.5 h-3.5 mr-1.5" />
            Start Risk Assessment
          </Link>
        </Button>

        <Button 
          variant="outline"
          asChild
          className="h-[34px] px-4 text-[13px] border-[#e3e6ec] bg-white text-brand-primary hover:border-brand-primary font-bold transition rounded-[6px]"
        >
          <Link href="/dashboard/risk-assessment">
            <CheckSquare className="w-3.5 h-3.5 mr-1.5" />
            Risk Assessment Completion
          </Link>
        </Button>

        <Button 
          variant="outline"
          asChild
          className="h-[34px] px-4 text-[13px] border-[#e3e6ec] bg-white text-brand-primary hover:border-brand-primary font-bold transition rounded-[6px]"
        >
          <Link href="/dashboard/rams">
            <Briefcase className="w-3.5 h-3.5 mr-1.5" />
            Create RAMS
          </Link>
        </Button>

        <Button 
          variant="outline" 
          onClick={() => setIsAddCatModalOpen(true)}
          className="h-[34px] px-4 text-[13px] border-[#e3e6ec] bg-white text-brand-primary hover:border-brand-primary font-bold transition rounded-[6px]"
        >
          <FolderPlus className="w-3.5 h-3.5 mr-1.5" />
          Add New Category
        </Button>
      </div>

      {/* Overview Cards Row */}
      <div className="w-full bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] shadow-[0px_4px_20px_rgba(19,38,81,0.02)] overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-[#e3e6ec]">
          
          {/* Card 1: Draft Forms */}
          <div 
            onClick={() => setActiveTab("Drafts")}
            className="p-[26px] flex flex-col gap-4 hover:bg-slate-50/50 cursor-pointer transition"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-brand-secondary bg-slate-50 p-2 rounded-[8px]">
                <Clock className="w-5 h-5" />
              </div>
              <span className="bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2 py-0.5 rounded-[4px] border border-emerald-100">
                Active
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-[14px] text-brand-secondary font-medium font-sans">Draft Forms</span>
              <span className="text-[32px] font-extrabold text-brand-primary font-sans leading-none mt-1">
                {stats.draft}
              </span>
            </div>
          </div>

          {/* Card 2: Completed Forms */}
          <div 
            onClick={() => setActiveTab("Completed")}
            className="p-[26px] flex flex-col gap-4 hover:bg-slate-50/50 cursor-pointer transition"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-blue-600 bg-blue-50/50 p-2 rounded-[8px]">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <span className="bg-blue-50 text-blue-700 text-[11px] font-bold px-2 py-0.5 rounded-[4px] border border-blue-100">
                New
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-[14px] text-brand-secondary font-medium font-sans">Completed Forms</span>
              <span className="text-[32px] font-extrabold text-brand-primary font-sans leading-none mt-1">
                {stats.completed}
              </span>
            </div>
          </div>

          {/* Card 3: Requires Review */}
          <div 
            onClick={() => setActiveTab("Requires Review")}
            className="p-[26px] flex flex-col gap-4 hover:bg-slate-50/50 cursor-pointer transition"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-amber-600 bg-amber-50/50 p-2 rounded-[8px]">
                <AlertCircle className="w-5 h-5" />
              </div>
              <span className="bg-amber-50 text-amber-700 text-[11px] font-bold px-2 py-0.5 rounded-[4px] border border-amber-100">
                Pending
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-[14px] text-brand-secondary font-medium font-sans">Requires Review</span>
              <span className="text-[32px] font-extrabold text-brand-primary font-sans leading-none mt-1">
                {stats.review}
              </span>
            </div>
          </div>

          {/* Card 4: Assigned to Me */}
          <div 
            onClick={() => setActiveTab("Assigned to Me")}
            className="p-[26px] flex flex-col gap-4 hover:bg-slate-50/50 cursor-pointer transition"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-purple-600 bg-purple-50/50 p-2 rounded-[8px]">
                <UserCheck className="w-5 h-5" />
              </div>
              <span className="bg-purple-50 text-purple-700 text-[11px] font-bold px-2 py-0.5 rounded-[4px] border border-purple-100">
                Assigned
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-[14px] text-brand-secondary font-medium font-sans">Assigned to Me</span>
              <span className="text-[32px] font-extrabold text-brand-primary font-sans leading-none mt-1">
                {stats.assigned}
              </span>
            </div>
          </div>

          {/* Card 5: Documents Created */}
          <div 
            onClick={() => setActiveTab("All Forms")}
            className="p-[26px] flex flex-col gap-4 hover:bg-slate-50/50 cursor-pointer transition"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-teal-600 bg-teal-50/50 p-2 rounded-[8px]">
                <FileText className="w-5 h-5" />
              </div>
              <span className="bg-teal-50 text-teal-700 text-[11px] font-bold px-2 py-0.5 rounded-[4px] border border-teal-100">
                Verified
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-[14px] text-brand-secondary font-medium font-sans">Documents Created</span>
              <span className="text-[32px] font-extrabold text-brand-primary font-sans leading-none mt-1">
                {stats.created}
              </span>
            </div>
          </div>

          {/* Card 6: Categories */}
          <div 
            onClick={() => {
              setActiveTab("All Forms");
              toast.info("Filter by selecting a category dropdown in the table section.");
            }}
            className="p-[26px] flex flex-col gap-4 hover:bg-slate-50/50 cursor-pointer transition"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-slate-600 bg-slate-100 p-2 rounded-[8px]">
                <Folder className="w-5 h-5" />
              </div>
              <span className="bg-slate-100 text-slate-700 text-[11px] font-bold px-2 py-0.5 rounded-[4px] border border-slate-200">
                Total
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-[14px] text-brand-secondary font-medium font-sans">Categories</span>
              <span className="text-[32px] font-extrabold text-brand-primary font-sans leading-none mt-1">
                {stats.categories}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Table Section Wrapper */}
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] shadow-[0px_4px_20px_rgba(19,38,81,0.02)] overflow-hidden">
        
        {/* Tabs Headers */}
        <div className="border-b border-[#e3e6ec] overflow-x-auto no-scrollbar">
          <div className="flex items-center px-4 h-[48px] gap-2 min-w-[900px]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    closeAllDropdowns();
                  }}
                  className={cn(
                    "h-full px-4 text-[14px] font-medium font-sans relative transition duration-150 whitespace-nowrap",
                    isActive 
                      ? "text-brand-primary font-bold border-b-2 border-brand-primary" 
                      : "text-brand-secondary hover:text-brand-primary"
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Filter Row */}
        <div className="p-4 border-b border-[#e3e6ec] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="flex items-center w-full md:w-[350px] h-[38px] bg-white border border-[#e3e6ec] rounded-[6px] px-3 gap-2 shadow-sm focus-within:border-brand-primary transition">
            <Search className="w-[16px] h-[16px] text-brand-secondary shrink-0" />
            <input
              type="text"
              placeholder="Search by name, ID or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-[13.5px] text-brand-primary w-full font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="text-brand-secondary hover:text-brand-primary p-0.5 rounded-full"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Interactive Filter Dropdowns */}
          <div className="grid grid-cols-2 gap-2 w-full sm:flex sm:flex-wrap sm:w-auto sm:items-center sm:gap-2 self-stretch md:self-auto">
            
            {/* 1. Category Dropdown */}
            <div className="relative w-full sm:w-auto shrink-0">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setIsCatDropdownOpen(!isCatDropdownOpen);
                }}
                className={cn(
                  "flex items-center justify-between h-[38px] w-full sm:w-auto sm:min-w-[140px] px-3 text-[13.5px] font-medium rounded-[6px] border bg-white transition gap-2 shadow-sm",
                  selectedCategory !== "All Categories" 
                    ? "border-brand-primary text-brand-primary font-bold" 
                    : "border-[#e3e6ec] text-brand-secondary hover:bg-slate-50"
                )}
              >
                <span className="truncate max-w-[110px]">{selectedCategory}</span>
                <ChevronDown size={14} className="opacity-70 shrink-0" />
              </button>
              
              {isCatDropdownOpen && (
                <div className="absolute left-0 top-[42px] z-30 bg-white border border-[#e3e6ec] rounded-[6px] shadow-lg py-1 w-full sm:w-[200px] anim-fade-in">
                  <button
                    onClick={() => {
                      setSelectedCategory("All Categories");
                      setIsCatDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between"
                  >
                    <span>All Categories</span>
                    {selectedCategory === "All Categories" && <Check className="w-3.5 h-3.5 text-brand-primary" />}
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsCatDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between"
                    >
                      <span className="truncate">{cat}</span>
                      {selectedCategory === cat && <Check className="w-3.5 h-3.5 text-brand-primary" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Type Dropdown */}
            <div className="relative w-full sm:w-auto shrink-0">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setIsTypeDropdownOpen(!isTypeDropdownOpen);
                }}
                className={cn(
                  "flex items-center justify-between h-[38px] w-full sm:w-auto sm:min-w-[120px] px-3 text-[13.5px] font-medium rounded-[6px] border bg-white transition gap-2 shadow-sm",
                  selectedType !== "All Types" 
                    ? "border-brand-primary text-brand-primary font-bold" 
                    : "border-[#e3e6ec] text-brand-secondary hover:bg-slate-50"
                )}
              >
                <span className="truncate max-w-[100px]">{selectedType}</span>
                <ChevronDown size={14} className="opacity-70 shrink-0" />
              </button>
              
              {isTypeDropdownOpen && (
                <div className="absolute left-0 top-[42px] z-30 bg-white border border-[#e3e6ec] rounded-[6px] shadow-lg py-1 w-full sm:w-[180px] anim-fade-in">
                  <button
                    onClick={() => {
                      setSelectedType("All Types");
                      setIsTypeDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between"
                  >
                    <span>All Types</span>
                    {selectedType === "All Types" && <Check className="w-3.5 h-3.5 text-brand-primary" />}
                  </button>
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        setIsTypeDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between"
                    >
                      <span>{type}</span>
                      {selectedType === type && <Check className="w-3.5 h-3.5 text-brand-primary" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Status Dropdown */}
            <div className="relative w-full sm:w-auto shrink-0">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setIsStatusDropdownOpen(!isStatusDropdownOpen);
                }}
                className={cn(
                  "flex items-center justify-between h-[38px] w-full sm:w-auto sm:min-w-[120px] px-3 text-[13.5px] font-medium rounded-[6px] border bg-white transition gap-2 shadow-sm",
                  selectedStatus !== "All Status" 
                    ? "border-brand-primary text-brand-primary font-bold" 
                    : "border-[#e3e6ec] text-brand-secondary hover:bg-slate-50"
                )}
              >
                <span className="truncate max-w-[100px]">{selectedStatus}</span>
                <ChevronDown size={14} className="opacity-70 shrink-0" />
              </button>
              
              {isStatusDropdownOpen && (
                <div className="absolute left-0 sm:left-auto sm:right-0 top-[42px] z-30 bg-white border border-[#e3e6ec] rounded-[6px] shadow-lg py-1 w-full sm:w-[160px] anim-fade-in">
                  <button
                    onClick={() => {
                      setSelectedStatus("All Status");
                      setIsStatusDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between"
                  >
                    <span>All Status</span>
                    {selectedStatus === "All Status" && <Check className="w-3.5 h-3.5 text-brand-primary" />}
                  </button>
                  {["Completed", "Draft", "Assigned", "Requires Review"].map((st) => (
                    <button
                      key={st}
                      onClick={() => {
                        setSelectedStatus(st);
                        setIsStatusDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between"
                    >
                      <span>{st}</span>
                      {selectedStatus === st && <Check className="w-3.5 h-3.5 text-brand-primary" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Date Range Dropdown */}
            <div className="relative w-full sm:w-auto shrink-0">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setIsDateDropdownOpen(!isDateDropdownOpen);
                }}
                className={cn(
                  "flex items-center justify-between h-[38px] w-full sm:w-auto sm:min-w-[130px] px-3 text-[13.5px] font-medium rounded-[6px] border bg-white transition gap-2 shadow-sm",
                  selectedDateRange !== "Date Range" 
                    ? "border-brand-primary text-brand-primary font-bold" 
                    : "border-[#e3e6ec] text-brand-secondary hover:bg-slate-50"
                )}
              >
                <span className="truncate max-w-[110px]">{selectedDateRange}</span>
                <ChevronDown size={14} className="opacity-70 shrink-0" />
              </button>
              
              {isDateDropdownOpen && (
                <div className="absolute left-0 sm:left-auto sm:right-0 top-[42px] z-30 bg-white border border-[#e3e6ec] rounded-[6px] shadow-lg py-1 w-full sm:w-[160px] anim-fade-in">
                  {["Date Range", "Last 7 Days", "Last 30 Days", "Last 12 Months"].map((range) => (
                    <button
                      key={range}
                      onClick={() => {
                        setSelectedDateRange(range);
                        setIsDateDropdownOpen(false);
                        if (range !== "Date Range") {
                          toast.info(`Filtering dates by: ${range}`);
                        }
                      }}
                      className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between"
                    >
                      <span>{range}</span>
                      {selectedDateRange === range && <Check className="w-3.5 h-3.5 text-brand-primary" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Table Area */}
        <div className="overflow-x-auto w-full custom-scrollbar">
          {filteredForms.length > 0 ? (
            <table className="w-full border-collapse min-w-[1100px] text-[14px]">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#e3e6ec] text-brand-primary font-bold text-[13.5px]">
                  <th className="px-6 py-4 text-left font-sans w-[28%] font-sans">Documentation / Form</th>
                  <th className="px-6 py-4 text-left font-sans w-[10%] font-sans">Type</th>
                  <th className="px-6 py-4 text-left font-sans w-[13%] font-sans">Category</th>
                  <th className="px-6 py-4 text-left font-sans w-[13%] font-sans">Project / Site</th>
                  <th className="px-6 py-4 text-left font-sans w-[10%] font-sans">Status</th>
                  <th className="px-6 py-4 text-left font-sans w-[9%] font-sans">Created</th>
                  <th className="px-6 py-4 text-left font-sans w-[9%] font-sans">Last Updated</th>
                  <th className="px-6 py-4 text-left font-sans w-[6%] text-center font-sans">Version</th>
                  <th className="px-6 py-4 text-center font-sans w-[12%] font-sans">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f5f8]">
                {filteredForms.map((form) => (
                  <tr 
                    key={form.id} 
                    className="hover:bg-slate-50/55 transition-colors text-brand-primary font-sans align-middle"
                  >
                    
                    {/* Documentation / Form Info */}
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-[#f0f4ff] p-2 rounded-[6px] text-brand-primary shrink-0 mt-0.5">
                          <FileText className="w-[18px] h-[18px]" />
                        </div>
                        <div className="flex flex-col">
                          <span 
                            onClick={() => handleViewForm(form.name)}
                            className="font-bold text-[14.5px] hover:text-brand-primary hover:underline cursor-pointer font-sans"
                          >
                            {form.name}
                          </span>
                          <span className="text-[12px] text-brand-secondary mt-1 font-sans">
                            Type: {form.typeLabel}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Type */}
                    <td className="px-6 py-4 text-brand-secondary font-medium font-sans">
                      {form.type}
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4 text-brand-secondary font-sans">
                      {form.category}
                    </td>

                    {/* Project / Site */}
                    <td className="px-6 py-4 text-brand-secondary font-sans">
                      {form.project}
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      <span className={cn(
                        "inline-flex items-center text-[12px] font-bold px-[10px] py-[3px] rounded-full border shadow-sm select-none font-sans",
                        form.status === "Completed" && "bg-emerald-50 text-emerald-700 border-emerald-200",
                        form.status === "Draft" && "bg-slate-100 text-slate-700 border-slate-200",
                        form.status === "Assigned" && "bg-purple-50 text-purple-700 border-purple-200",
                        form.status === "Requires Review" && "bg-amber-50 text-amber-700 border-amber-200"
                      )}>
                        {form.status}
                      </span>
                    </td>

                    {/* Created Date */}
                    <td className="px-6 py-4 text-brand-secondary text-[13.5px] font-sans">
                      {form.created}
                    </td>

                    {/* Last Updated Date */}
                    <td className="px-6 py-4 text-brand-secondary text-[13.5px] font-sans">
                      {form.lastUpdated}
                    </td>

                    {/* Version */}
                    <td className="px-6 py-4 text-center text-brand-primary font-semibold text-[13.5px] font-sans">
                      {form.version}
                    </td>

                    {/* Actions row buttons */}
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        
                        {/* View Button */}
                        <button
                          onClick={() => handleViewForm(form.name)}
                          title="View Document"
                          className="p-1.5 rounded-full hover:bg-slate-100 text-brand-secondary hover:text-brand-primary transition"
                        >
                          <Eye className="w-[16px] h-[16px]" />
                        </button>

                        {/* Download Button */}
                        <button
                          onClick={() => handleDownloadForm(form.name)}
                          title="Download PDF"
                          className="p-1.5 rounded-full hover:bg-slate-100 text-brand-secondary hover:text-brand-primary transition"
                        >
                          <Download className="w-[16px] h-[16px]" />
                        </button>

                        {/* Edit Button */}
                        <button
                          onClick={() => handleEditForm(form.name)}
                          title="Edit Document"
                          className="p-1.5 rounded-full hover:bg-slate-100 text-brand-secondary hover:text-brand-primary transition"
                        >
                          <Edit className="w-[16px] h-[16px]" />
                        </button>

                        {/* Move Button */}
                        <button
                          onClick={() => handleOpenMoveModal(form)}
                          title="Move Document"
                          className="p-1.5 rounded-full hover:bg-slate-100 text-brand-secondary hover:text-brand-primary transition"
                        >
                          <FolderInput className="w-[16px] h-[16px]" />
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDeleteFormClick(form)}
                          title="Delete"
                          className="p-1.5 rounded-full hover:bg-red-50 text-brand-secondary hover:text-red-600 transition"
                        >
                          <Trash2 className="w-[16px] h-[16px]" />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center bg-slate-50/50">
              <FilePlus2 className="w-12 h-12 text-slate-300 mb-3" />
              <h3 className="text-[16px] font-bold text-brand-primary font-sans">No matching forms found</h3>
              <p className="text-[14px] text-brand-secondary font-sans mt-1 max-w-[400px]">
                Try adjusting your search criteria, selecting another filter category, or creating a new document template.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setActiveTab("All Forms");
                  setSelectedCategory("All Categories");
                  setSelectedType("All Types");
                  setSelectedStatus("All Status");
                }}
                className="mt-4 bg-brand-primary text-white text-[13px] font-bold h-8"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>

      </div>

      {/* MODAL 1: START NEW DOCUMENT */}
      {isStartDocModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/30 px-4 py-6 backdrop-blur-[2px]">
          <div 
            className="w-full max-w-[500px] bg-white rounded-[12px] border border-[#e3e6ec] shadow-[0_24px_64px_rgba(19,38,81,0.15)] overflow-hidden anim-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e3e6ec]">
              <div className="flex items-center gap-2">
                <FilePlus2 className="w-5 h-5 text-brand-primary" />
                <h3 className="text-[18px] font-bold text-brand-primary font-sans">Start New Document</h3>
              </div>
              <button 
                onClick={() => setIsStartDocModalOpen(false)}
                className="text-brand-secondary hover:text-brand-primary p-1 rounded-full hover:bg-slate-100 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleCreateDocumentSubmit} className="p-6 flex flex-col gap-4">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[13.5px] font-bold text-brand-primary font-sans">
                  Document Title <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  placeholder="e.g. Monthly Fire Safety Audit"
                  value={newDocTitle}
                  onChange={(e) => setNewDocTitle(e.target.value)}
                  className="h-[38px] border border-[#e3e6ec] rounded-[6px] px-3 text-[14px] text-brand-primary font-sans outline-none focus:border-brand-primary transition w-full"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13.5px] font-bold text-brand-primary font-sans">
                    Form Type
                  </label>
                  <select 
                    value={newDocType}
                    onChange={(e) => setNewDocType(e.target.value)}
                    className="h-[38px] border border-[#e3e6ec] rounded-[6px] px-2 text-[14px] text-brand-primary font-sans outline-none bg-white focus:border-brand-primary transition w-full"
                  >
                    {types.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13.5px] font-bold text-brand-primary font-sans">
                    Document Subtype
                  </label>
                  <select 
                    value={newDocTypeLabel}
                    onChange={(e) => setNewDocTypeLabel(e.target.value)}
                    className="h-[38px] border border-[#e3e6ec] rounded-[6px] px-2 text-[14px] text-brand-primary font-sans outline-none bg-white focus:border-brand-primary transition w-full"
                  >
                    <option value="Checklist">Checklist</option>
                    <option value="Risk Assessment">Risk Assessment</option>
                    <option value="RAMS">RAMS</option>
                    <option value="Permit">Permit</option>
                    <option value="COSHH">COSHH</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13.5px] font-bold text-brand-primary font-sans">
                    Category
                  </label>
                  <select 
                    value={newDocCategory}
                    onChange={(e) => setNewDocCategory(e.target.value)}
                    className="h-[38px] border border-[#e3e6ec] rounded-[6px] px-2 text-[14px] text-brand-primary font-sans outline-none bg-white focus:border-brand-primary transition w-full"
                  >
                    {categories.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13.5px] font-bold text-brand-primary font-sans">
                    Project / Site Location
                  </label>
                  <select 
                    value={newDocProject}
                    onChange={(e) => setNewDocProject(e.target.value)}
                    className="h-[38px] border border-[#e3e6ec] rounded-[6px] px-2 text-[14px] text-brand-primary font-sans outline-none bg-white focus:border-brand-primary transition w-full"
                  >
                    {categories.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 mt-4 pt-4 border-t border-[#e3e6ec]">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setIsStartDocModalOpen(false)}
                  className="h-[36px] border-[#dce0e7] font-bold text-[13.5px]"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="h-[36px] bg-brand-primary text-white hover:bg-brand-primary/95 font-bold text-[13.5px]"
                >
                  Create Document
                </Button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: ADD NEW CATEGORY */}
      {isAddCatModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/30 px-4 py-6 backdrop-blur-[2px]">
          <div 
            className="w-full max-w-[894px] bg-white rounded-[12px] border-[1.5px] border-[#e3e6ec] shadow-[0_24px_64px_rgba(19,38,81,0.15)] overflow-hidden anim-fade-in relative p-6 md:p-[24px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button at top right */}
            <button 
              type="button"
              onClick={() => setIsAddCatModalOpen(false)}
              className="absolute right-6 top-6 flex size-8 items-center justify-center rounded-full text-brand-secondary hover:bg-[#f3f5f8] hover:text-brand-primary transition"
              aria-label="Close"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            {/* Modal Title */}
            <div className="mb-6">
              <h2 className="text-[20px] font-bold text-[#132651] font-sans">
                Add New Category
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleCreateCategorySubmit} className="flex flex-col gap-6 w-full font-sans">
              
              {/* Category Name Input */}
              <div className="flex flex-col gap-2 w-full font-sans">
                <label htmlFor="cat-name" className="text-[14px] text-[#132651] font-sans font-medium">
                  Category Name
                </label>
                <input 
                  id="cat-name"
                  type="text"
                  placeholder="e.g. Daily Inspections"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  className="h-[51px] border border-[#e3e6ec] rounded-[6px] px-4 py-3 text-[14px] text-brand-primary font-sans outline-none focus:border-brand-primary transition w-full"
                  required
                />
              </div>

              {/* Description Textarea */}
              <div className="flex flex-col gap-2 w-full font-sans">
                <label htmlFor="cat-desc" className="text-[14px] text-[#132651] font-sans font-medium">
                  Description
                </label>
                <textarea 
                  id="cat-desc"
                  placeholder="Briefly describe the purpose of this  category..."
                  value={newCatDesc}
                  onChange={(e) => setNewCatDesc(e.target.value)}
                  className="h-[78px] border border-[#e3e6ec] rounded-[6px] px-4 py-3 text-[14px] text-brand-primary font-sans outline-none focus:border-brand-primary transition w-full resize-none font-sans"
                />
              </div>

              {/* Color Selector */}
              <div className="flex flex-col gap-2 w-full font-sans">
                <label className="text-[14px] text-[#132651] font-sans font-medium">
                  Address / Location Details
                </label>
                <div className="flex items-center gap-3 h-[36px]">
                  {[
                    { hex: "#3b82f6", name: "Blue" },
                    { hex: "#22c55e", name: "Green" },
                    { hex: "#f59e0b", name: "Orange" },
                    { hex: "#ef4444", name: "Red" },
                    { hex: "#a855f7", name: "Purple" }
                  ].map((color) => {
                    const isSelected = selectedCatColor === color.hex;
                    return (
                      <button
                        key={color.hex}
                        type="button"
                        onClick={() => setSelectedCatColor(color.hex)}
                        className={cn(
                          "relative rounded-[12px] size-[32px] border-2 border-transparent transition cursor-pointer shrink-0 focus:outline-none"
                        )}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {isSelected && (
                          <div className="absolute inset-[-4px] rounded-[14px] border-[2px] border-[#3b82f6] shadow-sm" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-start mt-2 font-sans">
                <Button 
                  type="submit"
                  className="h-[34px] w-[120px] bg-[#132651] text-white hover:bg-[#132651]/95 text-[12px] font-bold rounded-[6px]"
                >
                  Create Category
                </Button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: MOVE FILE/FORM */}
      {isMoveModalOpen && selectedFormToMove && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/30 px-4 py-6 backdrop-blur-[2px]">
          <div 
            className="w-full max-w-[894px] bg-white rounded-[12px] border-[1.5px] border-[#e3e6ec] shadow-[0_24px_64px_rgba(19,38,81,0.15)] overflow-hidden anim-fade-in relative p-6 md:p-[24px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button at top right */}
            <button 
              type="button"
              onClick={() => setIsMoveModalOpen(false)}
              className="absolute right-6 top-6 flex size-8 items-center justify-center rounded-full text-brand-secondary hover:bg-[#f3f5f8] hover:text-brand-primary transition"
              aria-label="Close"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            {/* Modal Title */}
            <div className="mb-6">
              <h2 className="text-[20px] font-bold text-[#132651] font-sans">
                Move File/Form
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleMoveFormSubmit} className="flex flex-col gap-6 w-full font-sans">
              
              {/* Selected Form Banner */}
              <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[4px] p-[17px] flex items-center gap-[16px] w-full font-sans">
                <div className="text-[#132651] shrink-0">
                  <FileText className="w-[18px] h-[20px]" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-[11px] font-bold text-[#132651] tracking-wider uppercase">
                    SELECTED FORM
                  </span>
                  <span className="text-[14px] text-[#5a6886] mt-0.5 font-bold font-sans">
                    {selectedFormToMove.name}.pdf
                  </span>
                </div>
              </div>

              {/* Current Category (Disabled) */}
              <div className="flex flex-col gap-2 w-full font-sans">
                <label className="text-[14px] text-[#132651] font-sans font-medium">
                  Current Category
                </label>
                <div className="h-[51px] border border-[#e3e6ec] bg-[#f8fafc]/50 rounded-[6px] px-4 py-3 text-[14px] text-[#132651] font-sans flex items-center select-none w-full">
                  {selectedFormToMove.category}
                </div>
              </div>

              {/* New Category Selection */}
              <div className="flex flex-col gap-2 w-full font-sans">
                <label htmlFor="new-cat" className="text-[14px] text-[#132651] font-sans font-medium">
                  New Category
                </label>
                <div className="relative w-full font-sans">
                  <select
                    id="new-cat"
                    value={newCategoryForMovedForm}
                    onChange={(e) => setNewCategoryForMovedForm(e.target.value)}
                    className="h-[51px] border border-[#e3e6ec] rounded-[6px] px-4 py-3 text-[14px] text-[#132651] font-sans outline-none bg-white focus:border-brand-primary transition w-full appearance-none cursor-pointer pr-10"
                    required
                  >
                    <option value="" disabled>Select target...</option>
                    {categories
                      .filter(c => c !== selectedFormToMove.category)
                      .map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-secondary">
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-start mt-2">
                <Button 
                  type="submit"
                  className="h-[34px] w-[94px] bg-[#132651] text-white hover:bg-[#132651]/95 text-[12px] font-bold rounded-[6px]"
                >
                  Move Form
                </Button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: CONFIRM DELETION */}
      {isDeleteModalOpen && selectedFormToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/30 px-4 py-6 backdrop-blur-[2px]">
          <div 
            className="w-full max-w-[894px] bg-white rounded-[12px] border-[1.5px] border-[#e3e6ec] shadow-[0_24px_64px_rgba(19,38,81,0.15)] overflow-hidden anim-fade-in relative p-6 md:p-[24px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button at top right */}
            <button 
              type="button"
              onClick={() => setIsDeleteModalOpen(false)}
              className="absolute right-6 top-6 flex size-8 items-center justify-center rounded-full text-brand-secondary hover:bg-[#f3f5f8] hover:text-brand-primary transition"
              aria-label="Close"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            {/* Modal Title */}
            <div className="mb-6">
              <h2 className="text-[20px] font-bold text-[#132651] font-sans">
                Confirm Deletion
              </h2>
            </div>

            {/* Modal Body */}
            <div className="flex flex-col gap-6 w-full font-sans">
              
              {/* Alert Content Row */}
              <div className="flex items-start gap-[16px] w-full font-sans">
                {/* Warning Red Icon Box */}
                <div className="bg-[#ffdad6] w-[48px] h-[48px] rounded-[12px] flex items-center justify-center shrink-0">
                  <AlertCircle className="w-[24px] h-[24px] text-[#d92d20]" />
                </div>
                
                <div className="flex flex-col gap-[12px] w-full">
                  <div className="text-[16px] font-bold text-[#132651] leading-snug font-sans">
                    Are you sure you want to delete &apos;{selectedFormToDelete.name}&apos;?
                  </div>
                  <div className="text-[14px] text-[#5a6886] leading-[1.6] font-sans">
                    This action cannot be undone. All associated evidence and metadata will be permanently removed from the server.
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-start mt-2">
                <Button 
                  onClick={handleConfirmDelete}
                  className="h-[34px] w-[140px] bg-[#d92d20] hover:bg-[#d92d20]/90 text-white text-[12px] font-bold rounded-[6px]"
                >
                  Delete Permanently
                </Button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* MODAL 5: REQUEST CUSTOM BUILD */}
      <RequestCustomTemplateModal
        isOpen={isCustomRequestModalOpen}
        onClose={() => setIsCustomRequestModalOpen(false)}
        onSubmit={(data) => {
          toast.success(`Custom template request for "${data.templateName}" submitted successfully!`);
          setIsCustomRequestModalOpen(false);
        }}
        initialCategory={customRequestCategory}
      />

    </div>
  );
}
