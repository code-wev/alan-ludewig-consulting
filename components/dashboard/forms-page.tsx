"use client";

import React, { useState, useMemo } from "react";
import { toast } from "sonner";
import { ComplianceForm, ActiveInspection, QuestionSetTemplate } from "./client-my-forms/types";
import { getChecklistQuestions } from "./client-my-forms/mock-questions";
import { QUESTION_SET_TEMPLATES, Q_CATEGORIES } from "./client-my-forms/mock-templates";
import { QuestionSetsView } from "./client-my-forms/question-sets-view";
import { CompleteInspectionView } from "./client-my-forms/complete-inspection-view";
import { MainFormsView } from "./client-my-forms/main-forms-view";

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

  // Categories list
  const [categories, setCategories] = useState<string[]>([
    "Central Plaza Dev.",
    "North Tower",
    "River Bridge Site",
    "Depot 4"
  ]);

  // View states
  const [currentView, setCurrentView] = useState<"list" | "question-sets" | "complete-inspection">("list");
  
  // Active inspection checklist state
  const [activeInspection, setActiveInspection] = useState<ActiveInspection | null>(null);

  // Question Sets states
  const [qSearchQuery, setQSearchQuery] = useState("");
  const [selectedQCategory, setSelectedQCategory] = useState("Site Safety");
  const [filterInspectionsType, setFilterInspectionsType] = useState("Daily Walkaround");
  const [filterMembershipAccess, setFilterMembershipAccess] = useState("All Access");
  const [filterStatus, setFilterStatus] = useState("Published");
  const [isCustomRequestModalOpen, setIsCustomRequestModalOpen] = useState(false);
  const [customRequestCategory, setCustomRequestCategory] = useState("Site Safety");
  const [selectedPreviewTemplate, setSelectedPreviewTemplate] = useState<QuestionSetTemplate | null>(QUESTION_SET_TEMPLATES[0]);

  // Filtered Templates memo logic
  const filteredQTemplates = useMemo(() => {
    return QUESTION_SET_TEMPLATES.filter(template => {
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
  }, [selectedQCategory, qSearchQuery, filterMembershipAccess, filterStatus]);

  // Handler to start a new inspection
  const handleStartInspection = (templateName: string, category: string) => {
    const template = QUESTION_SET_TEMPLATES.find(t => t.name === templateName);
    const activeQuestions = getChecklistQuestions();

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

    setCurrentView("complete-inspection");
    toast.success(`Checklist inspection "${templateName}" started!`);
  };

  // Handler to edit a form
  const handleEditForm = (name: string) => {
    const form = forms.find(f => f.name === name);
    if (!form) return;

    const activeQuestions = getChecklistQuestions();

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

    setCurrentView("complete-inspection");
    toast.info(`Editing inspection checklist "${name}"...`);
  };

  // Render correct view based on state
  if (currentView === "question-sets") {
    return (
      <QuestionSetsView
        currentView={currentView}
        setCurrentView={setCurrentView}
        qSearchQuery={qSearchQuery}
        setQSearchQuery={setQSearchQuery}
        selectedQCategory={selectedQCategory}
        setSelectedQCategory={setSelectedQCategory}
        filterInspectionsType={filterInspectionsType}
        setFilterInspectionsType={setFilterInspectionsType}
        filterMembershipAccess={filterMembershipAccess}
        setFilterMembershipAccess={setFilterMembershipAccess}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        isCustomRequestModalOpen={isCustomRequestModalOpen}
        setIsCustomRequestModalOpen={setIsCustomRequestModalOpen}
        customRequestCategory={customRequestCategory}
        setCustomRequestCategory={setCustomRequestCategory}
        selectedPreviewTemplate={selectedPreviewTemplate}
        setSelectedPreviewTemplate={setSelectedPreviewTemplate}
        questionSetTemplates={QUESTION_SET_TEMPLATES}
        qCategories={Q_CATEGORIES}
        filteredQTemplates={filteredQTemplates}
        handleStartInspection={handleStartInspection}
      />
    );
  }

  if (currentView === "complete-inspection" && activeInspection) {
    return (
      <CompleteInspectionView
        activeInspection={activeInspection}
        setActiveInspection={setActiveInspection}
        setCurrentView={setCurrentView}
        setForms={setForms}
        handleStartInspection={handleStartInspection}
      />
    );
  }

  return (
    <MainFormsView
      forms={forms}
      setForms={setForms}
      categories={categories}
      setCategories={setCategories}
      setCurrentView={setCurrentView}
      handleEditForm={handleEditForm}
    />
  );
}
