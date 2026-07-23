"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  Plus,
  X,
  Upload,
  Info,
  AlertTriangle,
  FileText,
  Eye,
  CheckCircle2,
  Trash2,
  Edit2,
  Search,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize,
  FileIcon,
  AlertCircle,
  CloudUpload,
  Bell,
  Users,
  BarChart2,
  ArrowDown,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface HazardItem {
  id: string;
  name: string;
  l: number;
  s: number;
  level: "Critical" | "High" | "Medium" | "Low";
  score: number;
}

export function RiskAssessmentCompletionPage() {
  // Form State
  const [assessmentTitle, setAssessmentTitle] = useState(
    "Structural Steel Inspection - Block 4"
  );
  const [projectSite, setProjectSite] = useState(
    "London Gateway Infrastructure"
  );
  const [location, setLocation] = useState("Sector B-12, High-level Gantry");
  const [assessorName, setAssessorName] = useState("James Wilson");
  const [assessmentDate, setAssessmentDate] = useState("2026-11-21");
  const [reviewDate, setReviewDate] = useState("2026-05-21");

  // People at risk state
  const [peopleAtRisk, setPeopleAtRisk] = useState<string[]>([
    "Employees",
    "Contractors",
    "Site Visitors",
  ]);

  // Site images state
  interface SiteImage {
    id: string;
    name: string;
    url: string;
    type: string;
    relatedHazard: string;
    section: string;
    size: string;
    resolution: string;
    uploadedBy: string;
    uploadedAt: string;
    lastModified: string;
    notes: string;
  }

  const [images, setImages] = useState<SiteImage[]>([
    {
      id: "1",
      name: "Gantry_North_1.jpg",
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80",
      type: "Image (JPG)",
      relatedHazard: "Falls from Height",
      section: "Sector B-12, High-level Gantry",
      size: "1.2 MB",
      resolution: "1920x1080",
      uploadedBy: "James Wilson",
      uploadedAt: "Nov 21, 2026 at 10:48 AM",
      lastModified: "Nov 21, 2026 - 02:12 PM",
      notes: "Gantry inspection photo.",
    },
    {
      id: "2",
      name: "Machinery_Focus.png",
      url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80",
      type: "Image (PNG)",
      relatedHazard: "Manual Handling",
      section: "Sector B-12",
      size: "2.1 MB",
      resolution: "1920x1080",
      uploadedBy: "James Wilson",
      uploadedAt: "Nov 21, 2026 at 11:15 AM",
      lastModified: "Nov 21, 2026 - 02:12 PM",
      notes: "Machinery details.",
    },
    {
      id: "3",
      name: "Scaffold_Layout.jpg",
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
      type: "Image (JPG)",
      relatedHazard: "Falling Objects",
      section: "Sector B-12",
      size: "3.4 MB",
      resolution: "2400x1600",
      uploadedBy: "James Wilson",
      uploadedAt: "Nov 21, 2026 at 11:30 AM",
      lastModified: "Nov 21, 2026 - 02:12 PM",
      notes: "Scaffold layout overview.",
    },
  ]);

  const [registerHazards, setRegisterHazards] = useState([
    { id: "hz1", activity: "Manual Handling", category: "Working at Height", who: "Operatives, Contractors", controls: "Edge protection", l: 5, s: 5, risk: "Critical", status: "Needs Controls" },
    { id: "hz2", activity: "Falls from Height", category: "Manual Handling", who: "Operatives", controls: "Team lift", l: 4, s: 4, risk: "High", status: "Controls Required" },
    { id: "hz3", activity: "Falling Objects", category: "Work at Height", who: "Operatives, Public", controls: "Isolation", l: 4, s: 4, risk: "Medium", status: "Controls Required" },
    { id: "hz4", activity: "Falls from Height", category: "Electrical", who: "Electricians, Staff", controls: "SOPs", l: 3, s: 3, risk: "High", status: "Needs Controls" },
    { id: "hz5", activity: "Hazardous Substances", category: "Engineering", who: "Operatives", controls: "Team lift", l: 5, s: 5, risk: "Medium", status: "Needs Review" },
  ]);

  const [deleteHazardId, setDeleteHazardId] = useState<string | null>(null);
  const [cleanupOptions, setCleanupOptions] = useState({ controls: false, evidence: false, audit: false });

  const [isRiskMatrixModalOpen, setIsRiskMatrixModalOpen] = useState(false);
  // Modal States
  const [isAddSiteImageOpen, setIsAddSiteImageOpen] = useState(false);
  const [editImageId, setEditImageId] = useState<string | null>(null);
  const [deleteImageId, setDeleteImageId] = useState<string | null>(null);
  const [previewImageId, setPreviewImageId] = useState<string | null>(null);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  // Step state
  const steps = [
    { id: "details", title: "Assessment Details" },
    { id: "hazards", title: "Hazards" },
    { id: "matrix", title: "Risk Matrix" },
    { id: "control", title: "Control Measures" },
    { id: "review", title: "Review & Sign-Off" },
  ];
  const [activeStep, setActiveStep] = useState("details");

  // Sidebar checklist state
  const [selectedHazards, setSelectedHazards] = useState<string[]>([
    "falls",
    "manual",
  ]);

  const [hazardOptions, setHazardOptions] = useState([
    { id: "falls", label: "Falls from height" },
    { id: "manual", label: "Manual handling" },
    { id: "objects", label: "Falling objects" },
    { id: "electrical", label: "Electrical hazards" },
    { id: "substances", label: "Hazardous substances" },
  ]);

  // Dynamic Hazard table based on selection
  const [hazardDetails, setHazardDetails] = useState<Record<string, HazardItem>>({
    falls: {
      id: "falls",
      name: "Falls from Height",
      l: 3,
      s: 3,
      level: "Critical",
      score: 9,
    },
    manual: {
      id: "manual",
      name: "Manual Handling",
      l: 2,
      s: 2,
      level: "Medium",
      score: 4,
    },
    objects: {
      id: "objects",
      name: "Falling Objects",
      l: 2,
      s: 3,
      level: "High",
      score: 6,
    },
    electrical: {
      id: "electrical",
      name: "Electrical Hazards",
      l: 1,
      s: 4,
      level: "High",
      score: 4,
    },
    substances: {
      id: "substances",
      name: "Hazardous Substances",
      l: 2,
      s: 2,
      level: "Medium",
      score: 4,
    },
  });

  // Modal State
  const [isAddHazardOpen, setIsAddHazardOpen] = useState(false);
  const [modalHazardName, setModalHazardName] = useState("");
  const [modalWhoHarmed, setModalWhoHarmed] = useState<string[]>(["Employees"]);
  const [modalDescription, setModalDescription] = useState("");
  const [modalLikelihood, setModalLikelihood] = useState<number | "">("");
  const [modalSeverity, setModalSeverity] = useState<number | "">("");
  const [modalControlMeasures, setModalControlMeasures] = useState("");

  const currentHazards = selectedHazards
    .map((id) => hazardDetails[id])
    .filter(Boolean);

  const toggleHazardOption = (id: string) => {
    setSelectedHazards((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const category = newCategoryName.trim();
    if (category) {
      if (peopleAtRisk.includes(category)) {
        toast.error("Category already exists");
        return;
      }
      setPeopleAtRisk([...peopleAtRisk, category]);
      toast.success(`Added "${category}" to People at Risk`);
      setIsAddCategoryOpen(false);
      setNewCategoryName("");
    }
  };

  const handleRemoveCategory = (cat: string) => {
    setPeopleAtRisk(peopleAtRisk.filter((c) => c !== cat));
  };

  const getRiskLevel = (l: number, s: number) => {
    const score = l * s;
    if (score >= 9) return "Critical";
    if (score >= 6 || s >= 4) return "High";
    if (score >= 3) return "Medium";
    return "Low";
  };

  const handleOpenAddHazardModal = () => {
    setModalHazardName("");
    setModalWhoHarmed(["Employees"]);
    setModalDescription("");
    setModalLikelihood("");
    setModalSeverity("");
    setModalControlMeasures("");
    setIsAddHazardOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalHazardName.trim()) {
      toast.error("Please enter a hazard name");
      return;
    }
    if (modalLikelihood === "" || modalSeverity === "") {
      toast.error("Please select both Likelihood and Severity levels");
      return;
    }

    const id = "custom-" + Date.now();
    const l = Number(modalLikelihood);
    const s = Number(modalSeverity);
    const score = l * s;
    const level = getRiskLevel(l, s);

    const newHazard: HazardItem = {
      id,
      name: modalHazardName.trim(),
      l,
      s,
      level,
      score,
    };

    setHazardDetails((prev) => ({
      ...prev,
      [id]: newHazard,
    }));

    setHazardOptions((prev) => [
      ...prev,
      { id, label: modalHazardName.trim() },
    ]);

    setSelectedHazards((prev) => [...prev, id]);
    setIsAddHazardOpen(false);
    toast.success(`Custom hazard "${modalHazardName.trim()}" added successfully!`);
  };

  const handleWhoHarmedToggle = (who: string) => {
    setModalWhoHarmed((prev) =>
      prev.includes(who) ? prev.filter((item) => item !== who) : [...prev, who]
    );
  };

  const handleSaveDraft = () => {
    toast.success("Draft saved successfully!", {
      description: "Your changes have been saved to local draft storage.",
    });
  };

  const handlePreview = () => {
    toast.info("Opening assessment preview...");
  };

  const handleUploadImage = () => {
    toast.message("Upload image flow", {
      description: "Here you can choose image files to attach to this assessment.",
    });
  };

  return (
    <div className="flex flex-col gap-8 text-brand-primary pb-16">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary">
        <span>Dashboard</span>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span>RAMS Builder</span>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span className="text-brand-primary font-semibold">
          Risk Assessment Completion
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-2">
          <h1 className="text-[24px] sm:text-[30px] font-bold leading-[1.2] text-[#132651]">
            Risk Assessment Completion
          </h1>
          <p className="max-w-[700px] text-[14px] sm:text-[16px] leading-6 text-[#5a6886]">
            {activeStep === "details" 
              ? "Identify hazards, apply control measures, and calculate residual risk."
              : "Finalize control strategies for Project: Alpha Infrastructure (Phase 2)"}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleSaveDraft}
            className="h-10 sm:h-8.5 w-full sm:w-auto rounded-[6px] border-[#132651] bg-white px-4 text-[13px] sm:text-[12px] font-bold text-[#132651] hover:bg-brand-bg-main shadow-none transition-all duration-200"
          >
            Save Draft
          </Button>
          {activeStep === "details" ? (
            <Button
              type="button"
              onClick={handlePreview}
              className="h-10 sm:h-8.5 w-full sm:w-auto rounded-[6px] bg-[#132651] px-4 text-[13px] sm:text-[12px] font-bold text-white hover:bg-[#0d1b3a] transition-all duration-200 shadow-sm"
            >
              Preview
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleOpenAddHazardModal}
              className="h-10 sm:h-8.5 w-full sm:w-auto rounded-[6px] bg-[#132651] px-4 text-[13px] sm:text-[12px] font-bold text-white hover:bg-[#0d1b3a] transition-all duration-200 shadow-sm"
            >
              Add Hazard
            </Button>
          )}
        </div>
      </div>

      {/* Tabs list matching Figma layout */}
      <div className="bg-[#f3f5f8] p-1 flex flex-wrap gap-1 rounded-[12px] max-w-max border border-[#e3e6ec] mx-0 mt-2 mb-4">
        {steps.map((step) => {
          const isActive = step.id === activeStep;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={cn(
                "px-5 py-2 text-[14px] font-medium rounded-[8px] transition-all duration-200",
                isActive
                  ? "bg-white text-brand-primary shadow-[0_2px_4px_rgba(0,0,0,0.04)] border-[1.5px] border-[#e3e6ec]"
                  : "text-[#5a6886] hover:text-brand-primary hover:bg-[#e8eaee]"
              )}
            >
              {step.title}
            </button>
          );
        })}
      </div>

      {activeStep === "details" ? (
        <>
        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Content */}
        <div className="xl:col-span-7 flex flex-col gap-6">
          {/* Step 1: Details Card */}
          <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-6.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex items-center gap-2 border-b border-[#e3e6ec] pb-4">
              <div className="flex size-7 items-center justify-center rounded-[6px] bg-[#eef2ff] text-brand-primary">
                <FileText className="size-4" />
              </div>
              <h2 className="text-[20px] font-bold text-brand-primary">
                Step 1: Assessment Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Title input */}
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary">
                  Assessment Title
                </label>
                <input
                  type="text"
                  value={assessmentTitle}
                  onChange={(e) => setAssessmentTitle(e.target.value)}
                  className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all duration-200"
                />
              </div>

              {/* Project/Site input */}
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary">
                  Project/Site
                </label>
                <input
                  type="text"
                  value={projectSite}
                  onChange={(e) => setProjectSite(e.target.value)}
                  className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all duration-200"
                />
              </div>

              {/* Location input */}
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all duration-200"
                />
              </div>

              {/* Assessor Name */}
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary">
                  Assessor Name
                </label>
                <input
                  type="text"
                  value={assessorName}
                  onChange={(e) => setAssessorName(e.target.value)}
                  className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all duration-200"
                />
              </div>

              {/* Assessment Date */}
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary">
                  Assessment Date
                </label>
                <input
                  type="date"
                  value={assessmentDate}
                  onChange={(e) => setAssessmentDate(e.target.value)}
                  className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all duration-200"
                />
              </div>

              {/* Review Date */}
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary">
                  Review Date
                </label>
                <input
                  type="date"
                  value={reviewDate}
                  onChange={(e) => setReviewDate(e.target.value)}
                  className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all duration-200"
                />
              </div>
            </div>

            {/* People at Risk Tags */}
            <div className="space-y-3 pt-2">
              <label className="text-[14px] font-bold text-brand-primary block">
                People at Risk
              </label>
              <div className="flex flex-wrap gap-2.5 items-center">
                {peopleAtRisk.map((person) => (
                  <span
                    key={person}
                    className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#f3f5f8] border border-[#e3e6ec] pl-3 pr-2 py-1 text-[12px] font-medium text-brand-secondary"
                  >
                    {person}
                    <button
                      type="button"
                      onClick={() => handleRemoveCategory(person)}
                      className="text-[#95a0b6] hover:text-brand-primary hover:bg-[#e3e6ec] p-0.5 rounded transition-all duration-150"
                    >
                      <X className="size-3.5" />
                    </button>
                  </span>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAddCategoryOpen(true)}
                  className="h-7.5 rounded-[6px] border-dashed border-brand-primary bg-transparent px-3 text-[12px] font-bold text-brand-primary hover:bg-brand-bg-main gap-1.5 shadow-none transition-all duration-200"
                >
                  <Plus className="size-3.5" />
                  Add Category
                </Button>
              </div>
            </div>
          </div>

          {/* Site Images & Documents Card */}
          <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-6.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-bold text-brand-primary">
                Site Images &amp; Documents
              </h3>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAddSiteImageOpen(true)}
                  className="h-8.5 rounded-[6px] border-brand-primary bg-white px-4 text-[12px] font-bold text-brand-primary hover:bg-brand-bg-main shadow-none transition-all duration-200"
                >
                  Add Document
                </Button>
                <Button
                  type="button"
                  onClick={() => setIsAddSiteImageOpen(true)}
                  className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a] transition-all duration-200"
                >
                  Upload New
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Thumbnails */}
              {images.map((img) => (
                <div
                  key={img.id}
                  className="flex flex-col rounded-[8px] border border-[#e3e6ec] bg-white overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
                >
                  <div className="relative h-[110px] w-full bg-[#f3f5f8]">
                    <img src={img.url} className="h-full w-full object-cover" alt={img.name} />
                    <div className="absolute top-2 right-2 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-bold text-brand-primary shadow-sm border border-white/50">
                      {img.relatedHazard}
                    </div>
                  </div>
                  <div className="p-3 space-y-1.5 border-t border-[#e3e6ec]">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[12px] font-bold text-brand-primary truncate" title={img.name}>
                        {img.name}
                      </span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => setPreviewImageId(img.id)}
                          className="text-[#4f79ff] hover:opacity-80 transition-opacity"
                        >
                          <Eye className="size-3.5" />
                        </button>
                        <button
                          onClick={() => setEditImageId(img.id)}
                          className="text-emerald-500 hover:opacity-80 transition-opacity"
                        >
                          <Edit2 className="size-3.5" />
                        </button>
                        <button
                          onClick={() => setDeleteImageId(img.id)}
                          className="text-red-500 hover:opacity-80 transition-opacity"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    </div>
                    <div className="text-[11px] font-medium text-brand-secondary">
                      Site Photo
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Initial Hazard Overview */}
          <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-6.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-bold text-brand-primary">
                Initial Hazard Overview
              </h3>
              <button
                type="button"
                onClick={() => toast.info("Opening interactive Risk Matrix...")}
                className="text-[14px] font-semibold text-[#4f79ff] hover:underline"
              >
                View Matrix
              </button>
            </div>

            <div className="overflow-x-auto rounded-[6px] border border-[#e3e6ec]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f3f5f8] border-b border-[#e3e6ec]">
                    <th className="p-3 text-[12px] font-bold text-brand-secondary tracking-wider uppercase">
                      Hazard
                    </th>
                    <th className="p-3 text-[12px] font-bold text-brand-secondary tracking-wider uppercase text-center w-16">
                      L
                    </th>
                    <th className="p-3 text-[12px] font-bold text-brand-secondary tracking-wider uppercase text-center w-16">
                      S
                    </th>
                    <th className="p-3 text-[12px] font-bold text-brand-secondary tracking-wider uppercase text-right pr-6 w-32">
                      Risk Level
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentHazards.length > 0 ? (
                    currentHazards.map((hz) => (
                      <tr
                        key={hz.id}
                        className="border-b border-[#e3e6ec] hover:bg-[#fafbfd] transition-all"
                      >
                        <td className="p-3 text-[14px] font-medium text-brand-primary">
                          {hz.name}
                        </td>
                        <td className="p-3 text-[14px] text-[#5a6886] text-center font-medium">
                          {hz.l}
                        </td>
                        <td className="p-3 text-[14px] text-[#5a6886] text-center font-medium">
                          {hz.s}
                        </td>
                        <td className="p-3 text-right pr-6">
                          <span
                            className={cn(
                              "inline-block px-2.5 py-0.5 rounded-[4px] text-[12px] font-semibold",
                              hz.level === "Critical"
                                ? "bg-red-50 text-red-600 border border-red-200"
                                : hz.level === "High"
                                ? "bg-orange-50 text-orange-600 border border-orange-200"
                                : hz.level === "Medium"
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-green-50 text-green-600 border border-green-200"
                            )}
                          >
                            {hz.level} ({hz.score})
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        className="p-8 text-center text-[14px] text-brand-secondary"
                      >
                        No hazards selected. Choose hazards from the sidebar checklist.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar Contextual Panels */}
        <div className="xl:col-span-5 flex flex-col gap-6">
          {/* Card 1: Hazard Checklist */}
          <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-6.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
            <h3 className="text-[18px] font-bold text-brand-primary">
              Step 2: Hazard Identification
            </h3>

            <div className="space-y-2.5">
              {hazardOptions.map((opt) => {
                const isChecked = selectedHazards.includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-[6px] border cursor-pointer select-none transition-all duration-200",
                      isChecked
                        ? "border-brand-primary bg-[#f4f7fc]"
                        : "border-[#e3e6ec] bg-white hover:bg-brand-bg-main"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleHazardOption(opt.id)}
                      className="size-4.5 rounded border border-[#c5c6cd] accent-brand-primary"
                    />
                    <span className="text-[14px] font-medium text-brand-primary">
                      {opt.label}
                    </span>
                  </label>
                );
              })}
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleOpenAddHazardModal}
              className="h-8.5 w-full rounded-[6px] border-brand-primary bg-transparent text-[12px] font-bold text-brand-primary hover:bg-brand-bg-main gap-1.5 shadow-none transition-all duration-200"
            >
              <Plus className="size-4" />
              Add Custom Hazard
            </Button>
          </div>

          {/* Card 2: Guidance Banner */}
          <div className="bg-[#132651] rounded-[12px] p-6 text-white space-y-4 shadow-[0_4px_12px_rgba(19,38,81,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 opacity-5 pointer-events-none">
              <Info className="size-40" />
            </div>

            <div className="flex items-center gap-2">
              <Info className="size-5 text-[#b4c5fa]" />
              <h4 className="text-[16px] font-bold text-white tracking-wide">
                Assessor Guidance
              </h4>
            </div>

            <p className="text-[14px] leading-6 text-[#b4c5fa] font-medium">
              Ensure all site images are timestamped. For hazards rated
              &apos;Critical&apos;, specific Method Statements must be attached in Step
              5 before submission.
            </p>

            <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
              <span className="text-[11px] font-bold tracking-wider text-[#7d8ebf]">
                POLICY REF: H&amp;S-2023-V2
              </span>
              <button
                type="button"
                onClick={() =>
                  toast.message("Viewing Safety Policy Document...")
                }
                className="text-[12px] font-bold text-white hover:underline decoration-white/30 underline-offset-4"
              >
                Read Policy
              </button>
            </div>
          </div>

          {/* Card 3: Completion Progress */}
          <div className="bg-[#f3f5f8] rounded-[12px] border border-[#e3e6ec] p-6.5 space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-bold tracking-wider text-brand-primary uppercase">
                COMPLETION PROGRESS
              </span>
              <span className="text-[14px] font-bold text-brand-primary">20%</span>
            </div>

            {/* Progress bar container */}
            <div className="h-2 w-full bg-[#e3e6ec] rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-primary rounded-full transition-all duration-500 ease-out"
                style={{ width: "20%" }}
              />
            </div>

            <p className="text-[12px] text-brand-secondary font-medium leading-relaxed">
              Next step: Initial Hazard Evaluation
            </p>
          </div>
        </div>
      </div>

            </>
      ) : activeStep === "hazards" ? (
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="size-10 bg-[#f4f6fa] rounded-[6px] flex items-center justify-center mb-4 border border-[#e8eaef]">
                <AlertTriangle className="size-5 text-[#132651]" />
              </div>
              <p className="text-[12px] font-medium text-[#5a6886] mb-1">Total Hazards</p>
              <p className="text-[28px] font-bold text-[#132651]">10</p>
            </div>
            <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="size-10 bg-[#fff5f6] rounded-[6px] flex items-center justify-center mb-4 border border-[#ffe0e6]">
                <Bell className="size-5 text-[#e11d48]" />
              </div>
              <p className="text-[12px] font-medium text-[#5a6886] mb-1">High/Critical Risks</p>
              <p className="text-[28px] font-bold text-[#132651]">04</p>
            </div>
            <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="size-10 bg-[#f4f6fa] rounded-[6px] flex items-center justify-center mb-4 border border-[#e8eaef]">
                <Users className="size-5 text-[#132651]" />
              </div>
              <p className="text-[12px] font-medium text-[#5a6886] mb-1">Persons at Risk</p>
              <p className="text-[28px] font-bold text-[#132651]">05 <span className="text-[14px] font-medium text-[#5a6886] ml-1">Groups</span></p>
            </div>
            <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="size-10 bg-[#f4f6fa] rounded-[6px] flex items-center justify-center mb-4 border border-[#e8eaef]">
                <BarChart2 className="size-5 text-[#132651]" />
              </div>
              <p className="text-[12px] font-medium text-[#5a6886] mb-1">Initial Risk Average</p>
              <p className="text-[28px] font-bold text-[#132651]">14.2</p>
            </div>
          </div>

          {/* Hazard Register */}
          <div className="bg-white rounded-[12px] border border-[#e3e6ec] p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-5">
            <h3 className="text-[18px] font-bold text-[#132651]">Hazard Register</h3>
            
            <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
              <div className="relative w-full xl:w-[320px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#95a0b6]" />
                <input type="text" placeholder="Search hazards..." className="h-10 w-full pl-9 pr-3 rounded-[6px] border border-[#d7dce5] text-[13px] text-[#132651] outline-none focus:border-[#132651] bg-white" />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full xl:w-auto">
                <select className="h-10 w-full sm:w-[180px] rounded-[6px] border border-[#d7dce5] px-3 text-[13px] text-[#5a6886] outline-none bg-white focus:border-[#132651]">
                  <option>Hazard Category</option>
                </select>
                <select className="h-10 w-full sm:w-[180px] rounded-[6px] border border-[#d7dce5] px-3 text-[13px] text-[#5a6886] outline-none bg-white focus:border-[#132651]">
                  <option>Persons at Risk</option>
                </select>
                <select className="h-10 w-full sm:w-[180px] rounded-[6px] border border-[#d7dce5] px-3 text-[13px] text-[#5a6886] outline-none bg-white focus:border-[#132651]">
                  <option>Initial Risk Level</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto rounded-[8px] border border-[#e3e6ec]">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-[#eef4ff] border-b border-[#e3e6ec]">
                    <th className="p-3 w-10 text-center">
                      <input type="checkbox" className="size-4 rounded border-[#c5c6cd] accent-[#132651]" />
                    </th>
                    <th className="p-3 text-[12px] font-bold text-[#132651]">Hazard Activity</th>
                    <th className="p-3 text-[12px] font-bold text-[#132651]">Category</th>
                    <th className="p-3 text-[12px] font-bold text-[#132651]">Who May be Harmed</th>
                    <th className="p-3 text-[12px] font-bold text-[#132651]">Existing Controls</th>
                    <th className="p-3 text-[12px] font-bold text-[#132651] text-center w-12">L</th>
                    <th className="p-3 text-[12px] font-bold text-[#132651] text-center w-12">S</th>
                    <th className="p-3 text-[12px] font-bold text-[#132651] text-center w-28">Initial Risk</th>
                    <th className="p-3 text-[12px] font-bold text-[#132651] text-center w-36">Status</th>
                    <th className="p-3 text-[12px] font-bold text-[#132651] text-center w-24">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {registerHazards.map((hz) => (
                    <tr key={hz.id} className="border-b border-[#e3e6ec] hover:bg-[#fafbfd] bg-white transition-all">
                      <td className="p-3 text-center">
                        <input type="checkbox" className="size-4 rounded border-[#c5c6cd] accent-[#132651]" />
                      </td>
                      <td className="p-3 text-[13px] font-bold text-[#132651]">{hz.activity}</td>
                      <td className="p-3 text-[13px] text-[#5a6886]">{hz.category}</td>
                      <td className="p-3 text-[13px] text-[#5a6886]">{hz.who}</td>
                      <td className="p-3 text-[13px] text-[#5a6886]">{hz.controls}</td>
                      <td className="p-3 text-[13px] font-medium text-[#5a6886] text-center">{hz.l}</td>
                      <td className="p-3 text-[13px] font-medium text-[#5a6886] text-center">{hz.s}</td>
                      <td className="p-3 text-center">
                        <span className={cn(
                          "inline-block w-full max-w-[80px] py-1 rounded-[4px] text-[11px] font-bold",
                          hz.risk === "Critical" ? "bg-[#e11d48] text-white" :
                          hz.risk === "High" ? "bg-emerald-500 text-white" :
                          "bg-[#eab308] text-white"
                        )}>
                          {hz.risk}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <span className={cn(
                          "inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border",
                          hz.status === "Needs Controls" ? "bg-red-50 text-[#e11d48] border-red-100" :
                          hz.status === "Controls Required" ? "bg-amber-50 text-[#d97706] border-amber-100" :
                          "bg-[#132651] text-white border-[#132651]"
                        )}>
                          {hz.status}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <div className="flex items-center justify-center gap-2.5">
                          <button onClick={handleOpenAddHazardModal} className="text-emerald-500 hover:opacity-80 transition-opacity">
                            <Edit2 className="size-4" />
                          </button>
                          <button onClick={() => setDeleteHazardId(hz.id)} className="text-[#e11d48] hover:opacity-80 transition-opacity">
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-64 border-2 border-dashed border-[#e3e6ec] rounded-[12px]">
          <p className="text-[14px] font-medium text-[#5a6886]">This section is under construction.</p>
        </div>
      )}

      {/* Modal: Add Hazard */}
      {isAddHazardOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
          <div className="bg-white rounded-[12px] w-full max-w-[640px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transition-all duration-300 transform scale-100">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4.5 shrink-0">
              <h3 className="text-[20px] font-bold text-brand-primary">Add Hazard</h3>
              <button
                type="button"
                onClick={() => setIsAddHazardOpen(false)}
                className="text-[#95a0b6] hover:text-brand-primary hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleModalSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Hazard Name */}
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary block">
                  Hazard Name
                </label>
                <input
                  type="text"
                  value={modalHazardName}
                  onChange={(e) => setModalHazardName(e.target.value)}
                  placeholder="e.g. Slips, Trips and Falls"
                  className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all placeholder:text-[#a3acba]"
                  required
                />
              </div>

              {/* Who May Be Harmed */}
              <div className="space-y-3">
                <label className="text-[14px] font-bold text-brand-primary block">
                  Who May Be Harmed?*
                </label>
                <div className="grid grid-cols-2 gap-3.5">
                  {["Employees", "Visitors", "Contractors", "Public"].map((who) => {
                    const isChecked = modalWhoHarmed.includes(who);
                    return (
                      <label
                        key={who}
                        className={cn(
                          "flex items-center gap-3 px-4 py-2.5 rounded-[6px] border cursor-pointer select-none transition-all duration-150",
                          isChecked
                            ? "border-brand-primary bg-[#f4f7fc]"
                            : "border-[#e3e6ec] bg-white hover:bg-brand-bg-main"
                        )}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleWhoHarmedToggle(who)}
                          className="size-4 rounded border border-[#c5c6cd] accent-brand-primary"
                        />
                        <span className="text-[14px] font-medium text-brand-primary">
                          {who}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Hazard Description */}
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary block">
                  Hazard Description
                </label>
                <textarea
                  value={modalDescription}
                  onChange={(e) => setModalDescription(e.target.value)}
                  placeholder="Describe how the hazard could cause injury..."
                  rows={3}
                  className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all placeholder:text-[#a3acba]"
                />
              </div>

              {/* Likelihood & Severity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">
                    Initial Likelihood (1-5)
                  </label>
                  <select
                    value={modalLikelihood}
                    onChange={(e) => setModalLikelihood(e.target.value === "" ? "" : Number(e.target.value))}
                    className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all"
                    required
                  >
                    <option value="">Select Level</option>
                    {[1, 2, 3, 4, 5].map((val) => (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">
                    Initial Severity (1-5)
                  </label>
                  <select
                    value={modalSeverity}
                    onChange={(e) => setModalSeverity(e.target.value === "" ? "" : Number(e.target.value))}
                    className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all"
                    required
                  >
                    <option value="">Select Level</option>
                    {[1, 2, 3, 4, 5].map((val) => (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Suggested Control Measures */}
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary block">
                  Suggested Control Measures
                </label>
                <textarea
                  value={modalControlMeasures}
                  onChange={(e) => setModalControlMeasures(e.target.value)}
                  placeholder="List existing and proposed actions to reduce risk..."
                  rows={3}
                  className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all placeholder:text-[#a3acba]"
                />
                <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary pt-1">
                  <Info className="size-3.5 shrink-0 text-[#95a0b6]" />
                  <span>
                    Suggested measures will be used to calculate Residual Risk in the final document.
                  </span>
                </div>
              </div>

              {/* Blue Alert Box */}
              <div className="flex items-start gap-3 p-3.5 bg-[#eef2ff] border border-[#d0dbff] rounded-[6px]">
                <Info className="size-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-[13px] text-brand-primary font-medium leading-relaxed">
                  Ensure all data is accurate before adding to the assessment.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-2 shrink-0">
                <Button
                  type="submit"
                  className="h-10.5 rounded-[6px] bg-brand-primary px-6 text-[14px] font-bold text-white hover:bg-[#0d1b3a] transition-all duration-200"
                >
                  Add Hazard
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* Modal: Add/Edit Site Image or Document */}
      {(isAddSiteImageOpen || editImageId) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
          <div className="bg-white rounded-[12px] w-full max-w-[640px] shadow-2xl flex flex-col my-8 max-h-[90vh] overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4.5 shrink-0">
              <h3 className="text-[20px] font-bold text-brand-primary">
                {editImageId ? "Edit Site Image or Document" : "Add Site Image or Document"}
              </h3>
              <button
                onClick={() => { setIsAddSiteImageOpen(false); setEditImageId(null); }}
                className="text-[#95a0b6] hover:text-brand-primary hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">File Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Ground Floor Structural Crack"
                    className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all placeholder:text-[#a3acba]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">File Type</label>
                  <select className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all">
                    <option>Image (JPG, PNG)</option>
                    <option>Document (PDF, DOCX)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">Related Hazard</label>
                  <select className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all">
                    <option>Select associated hazard...</option>
                    <option>Structural Integrity (Critical)</option>
                    <option>Falls from Height</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">Related Assessment Section</label>
                  <select className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all">
                    <option>Select section...</option>
                    <option>North Wing - Ground Level</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary block">Document Upload</label>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#d0d4dc] rounded-[8px] bg-white py-10 px-6 gap-3 hover:border-brand-primary transition-all duration-200">
                  <CloudUpload className="size-8 text-brand-primary" />
                  <div className="text-center">
                    <p className="text-[14px] font-bold text-brand-primary">Drag and drop files here</p>
                    <p className="text-[12px] text-brand-secondary mt-1">Supports PDF, JPG, PNG, DOCX (Max 20MB)</p>
                  </div>
                  <Button variant="outline" className="h-8.5 rounded-[6px] border-brand-primary text-[12px] font-bold text-brand-primary mt-2">
                    Select Files
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">Capture Date</label>
                  <input
                    type="date"
                    className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">Notes</label>
                  <textarea
                    placeholder="Additional context for the reviewer..."
                    className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 py-2.5 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all placeholder:text-[#a3acba] resize-none"
                  />
                </div>
              </div>

              <div className="space-y-3.5 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 size-4 rounded border border-[#c5c6cd] accent-brand-primary" />
                  <div>
                    <p className="text-[14px] font-medium text-brand-primary group-hover:text-brand-primary/80">Include in final PDF appendix</p>
                    <p className="text-[12px] text-brand-secondary">This file will be automatically formatted and included in the client-facing report.</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 size-4 rounded border border-[#c5c6cd] accent-brand-primary" />
                  <div>
                    <p className="text-[14px] font-medium text-brand-primary group-hover:text-brand-primary/80">Link to selected hazard</p>
                    <p className="text-[12px] text-brand-secondary">Ensure evidence is visible within the context of the related risk profile.</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 size-4 rounded border border-[#c5c6cd] accent-brand-primary" />
                  <div>
                    <p className="text-[14px] font-medium text-brand-primary group-hover:text-brand-primary/80">Reviewers only evidence</p>
                    <p className="text-[12px] text-brand-secondary">Hide from client but keep visible for internal audit and verification.</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-start gap-3 px-6 py-4.5 border-t border-[#e3e6ec] bg-[#f9fafb]">
              <Button variant="outline" className="h-10 rounded-[6px] border-brand-primary bg-white px-6 text-[14px] font-bold text-brand-primary hover:bg-brand-bg-main" onClick={() => { setIsAddSiteImageOpen(false); setEditImageId(null); }}>
                Save Draft
              </Button>
              <Button className="h-10 rounded-[6px] bg-brand-primary px-6 text-[14px] font-bold text-white hover:bg-[#0d1b3a]" onClick={() => { setIsAddSiteImageOpen(false); setEditImageId(null); }}>
                {editImageId ? "Save Changes" : "Add File"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Delete Confirmation */}
      {deleteImageId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-[12px] w-full max-w-[500px] shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
            <div className="p-6 space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-3 items-start">
                  <div className="flex size-10 items-center justify-center rounded-[8px] bg-red-50 text-red-600 shrink-0">
                    <AlertTriangle className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-brand-primary">Delete Site Image or Document?</h3>
                    <p className="text-[14px] text-brand-secondary mt-1">
                      Deleting this file will remove it from the assessment and the generated document appendix.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setDeleteImageId(null)}
                  className="text-[#95a0b6] hover:text-brand-primary hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all shrink-0 mt-1"
                >
                  <X className="size-4" />
                </button>
              </div>

              {(() => {
                const img = images.find(i => i.id === deleteImageId);
                if (!img) return null;
                return (
                  <div className="bg-[#f8f9fc] rounded-[8px] border border-[#e3e6ec] p-4 flex items-center justify-between">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-[#5a6886]">
                        <FileIcon className="size-4" />
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-brand-primary">{img.name}</p>
                        <p className="text-[12px] text-brand-secondary mt-0.5">Related Hazard: {img.relatedHazard}</p>
                      </div>
                    </div>
                    <span className="text-[13px] font-medium text-brand-secondary">{img.size}</span>
                  </div>
                );
              })()}

              <Button
                className="h-10 rounded-[6px] bg-[#e11d48] px-6 text-[14px] font-bold text-white hover:bg-[#be123c] w-auto transition-all"
                onClick={() => {
                  setImages(images.filter(i => i.id !== deleteImageId));
                  setDeleteImageId(null);
                }}
              >
                Delete File
              </Button>
            </div>
          </div>
        </div>
      )}

      
      {/* Modal: Delete Hazard */}
      {deleteHazardId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-[12px] w-full max-w-[640px] shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4 shrink-0">
              <h3 className="text-[18px] font-bold text-[#132651]">Delete Hazard</h3>
              <button
                onClick={() => setDeleteHazardId(null)}
                className="text-[#95a0b6] hover:text-[#132651] hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
              >
                <X className="size-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              {/* Ref Card */}
              <div className="bg-[#f8f9fc] border border-[#e3e6ec] rounded-[8px] p-4 flex items-start gap-3">
                <AlertTriangle className="size-4 text-[#5a6886] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] font-bold text-[#5a6886] uppercase tracking-wider mb-1">HAZARD REF: HZ-042</p>
                  <p className="text-[14px] font-bold text-[#132651] mb-1">Working at Height: Scaffold Operations</p>
                  <p className="text-[13px] font-medium text-[#5a6886]">Severity: 4 | Likelihood: 3 (High Risk)</p>
                </div>
              </div>

              {/* Warning Alert */}
              <div className="bg-red-50 border border-red-200 rounded-[8px] p-4 flex items-start gap-3">
                <AlertTriangle className="size-5 text-[#e11d48] shrink-0" />
                <p className="text-[13px] font-medium text-[#e11d48] leading-relaxed">
                  <span className="font-bold">Action Required:</span> Removing this hazard will also invalidate 6 linked control measures and 2 method statements currently in the safety draft.
                </p>
              </div>

              {/* Advanced Cleanup Options */}
              <div className="pt-2">
                <h4 className="text-[14px] font-bold text-[#132651] mb-3">Advanced Cleanup Options</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="size-4.5 rounded border-[#c5c6cd] accent-[#132651]" 
                      checked={cleanupOptions.controls}
                      onChange={(e) => setCleanupOptions({...cleanupOptions, controls: e.target.checked})}
                    />
                    <span className="text-[13px] font-medium text-[#132651]">Delete linked controls</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="size-4.5 rounded border-[#c5c6cd] accent-[#132651]" 
                      checked={cleanupOptions.evidence}
                      onChange={(e) => setCleanupOptions({...cleanupOptions, evidence: e.target.checked})}
                    />
                    <span className="text-[13px] font-medium text-[#132651]">Remove evidence</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="size-4.5 rounded border-[#c5c6cd] accent-[#132651]" 
                      checked={cleanupOptions.audit}
                      onChange={(e) => setCleanupOptions({...cleanupOptions, audit: e.target.checked})}
                    />
                    <span className="text-[13px] font-medium text-[#132651]">Keep audit log (Required for ISO 45001)</span>
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  className="h-10 rounded-[6px] bg-[#132651] px-6 text-[14px] font-bold text-white hover:bg-[#0d1b3a] transition-all"
                  onClick={() => {
                    toast.success("Hazard deleted successfully.");
                    setDeleteHazardId(null);
                  }}
                >
                  Delete Hazard
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Preview */}
      {previewImageId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 overflow-y-auto">
          <div className="bg-white rounded-[12px] w-full max-w-[1000px] shadow-2xl flex flex-col my-8 h-[90vh] sm:h-[85vh] overflow-hidden transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#e3e6ec] px-4 sm:px-6 py-4 sm:py-4.5 shrink-0 bg-white">
              <div className="flex items-center gap-2.5 text-brand-primary">
                <FileIcon className="size-5 text-[#132651]" />
                <h3 className="text-[16px] sm:text-[18px] font-bold text-[#132651]">
                  Document Preview: {images.find(i => i.id === previewImageId)?.name}
                </h3>
              </div>
              <button
                onClick={() => setPreviewImageId(null)}
                className="text-[#5a6886] hover:text-[#132651] hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden bg-white">
              {/* Left Viewer */}
              <div className="flex-1 bg-[#f3f5f8] border-b lg:border-b-0 lg:border-r border-[#e3e6ec] flex flex-col overflow-hidden relative min-h-[300px] lg:min-h-0">
                {/* Toolbar */}
                <div className="h-12 border-b border-[#e3e6ec] bg-white flex items-center justify-between px-2 sm:px-4 shrink-0 overflow-x-auto">
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 text-[#5a6886] hover:text-[#132651] transition-colors"><ZoomOut className="size-4" /></button>
                    <div className="px-2 py-1 bg-[#f3f5f8] rounded-[4px] text-[13px] font-medium text-[#132651]">100%</div>
                    <button className="p-1.5 text-[#5a6886] hover:text-[#132651] transition-colors"><ZoomIn className="size-4" /></button>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button className="p-1 text-[#95a0b6] hover:text-[#132651] transition-colors">
                      <ChevronRight className="size-4 rotate-180" />
                    </button>
                    <span className="text-[12px] sm:text-[13px] font-medium text-[#132651] whitespace-nowrap">Page 1 of 4</span>
                    <button className="p-1 text-[#5a6886] hover:text-[#132651] transition-colors">
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 text-[#5a6886] hover:text-[#132651] transition-colors"><RotateCw className="size-4" /></button>
                    <button className="p-1.5 text-[#5a6886] hover:text-[#132651] transition-colors"><Maximize className="size-4" /></button>
                  </div>
                </div>
                {/* Image Area */}
                <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-start justify-center">
                  <img
                    src={images.find(i => i.id === previewImageId)?.url}
                    alt="Preview"
                    className="max-w-full shadow-md bg-white border border-[#e3e6ec]"
                  />
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-full lg:w-[320px] bg-white flex flex-col overflow-y-auto shrink-0">
                {(() => {
                  const img = images.find(i => i.id === previewImageId);
                  if (!img) return null;
                  return (
                    <div className="p-5 sm:p-6 space-y-6 sm:space-y-7">
                      {/* File Information */}
                      <div>
                        <h4 className="text-[14px] font-bold text-[#132651] mb-3.5">File Information</h4>
                        <div className="space-y-3.5">
                          <div>
                            <p className="text-[11px] text-[#5a6886] mb-1">File Name</p>
                            <p className="text-[13px] font-medium text-[#132651] break-all">{img.name}</p>
                          </div>
                          <div>
                            <p className="text-[11px] text-[#5a6886] mb-1">Type</p>
                            <p className="text-[13px] font-medium text-[#132651]">{img.type}</p>
                          </div>
                          <div className="flex gap-8">
                            <div>
                              <p className="text-[11px] text-[#5a6886] mb-1">Size</p>
                              <p className="text-[13px] font-medium text-[#132651]">{img.size}</p>
                            </div>
                            <div>
                              <p className="text-[11px] text-[#5a6886] mb-1">Resolution</p>
                              <p className="text-[13px] font-medium text-[#132651]">{img.resolution}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr className="border-[#e3e6ec]" />

                      {/* Context & Relation */}
                      <div>
                        <h4 className="text-[14px] font-bold text-[#132651] mb-3.5">Context &amp; Relation</h4>
                        <div className="space-y-3.5">
                          <div>
                            <p className="text-[11px] text-[#5a6886] mb-1.5">Related Hazard</p>
                            <div className="flex items-center gap-2">
                              <div className="size-1.5 rounded-full bg-[#e11d48]" />
                              <p className="text-[13px] font-medium text-[#132651]">{img.relatedHazard}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-[11px] text-[#5a6886] mb-1">Section</p>
                            <p className="text-[13px] font-medium text-[#132651]">{img.section}</p>
                          </div>
                        </div>
                      </div>

                      <hr className="border-[#e3e6ec]" />

                      {/* Lifecycle */}
                      <div>
                        <h4 className="text-[14px] font-bold text-[#132651] mb-4">Lifecycle</h4>
                        <div className="space-y-5">
                          <div className="flex items-start gap-3">
                            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#132651] text-white text-[11px] font-bold">
                              {img.uploadedBy.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="text-[11px] text-[#5a6886] mb-0.5">Uploaded By</p>
                              <p className="text-[13px] font-bold text-[#132651] leading-tight">{img.uploadedBy}</p>
                              <p className="text-[11px] text-[#5a6886] mt-1">{img.uploadedAt}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 pl-1">
                            <RotateCw className="size-4 text-[#95a0b6] mt-0.5" />
                            <div>
                              <p className="text-[11px] text-[#5a6886] mb-1">Last Modified</p>
                              <p className="text-[13px] font-medium text-[#132651]">{img.lastModified}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr className="border-[#e3e6ec]" />

                      {/* Internal Notes */}
                      <div>
                        <h4 className="text-[14px] font-bold text-[#132651] mb-3">Internal Notes</h4>
                        <div className="bg-[#f8f9fc] rounded-[8px] border border-[#e3e6ec] p-4 text-[13px] text-[#5a6886] leading-relaxed shadow-sm">
                          "{img.notes}"
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#e3e6ec] p-4 sm:px-6 sm:py-4.5 bg-white shrink-0 gap-3 sm:gap-0">
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Button variant="outline" className="h-10 w-full sm:w-auto rounded-[6px] border-[#c5c6cd] bg-white px-6 text-[14px] font-bold text-[#132651] hover:bg-brand-bg-main shadow-sm">
                  Replace File
                </Button>
                <Button className="h-10 w-full sm:w-auto rounded-[6px] bg-[#132651] px-6 text-[14px] font-bold text-white hover:bg-[#0d1b3a] shadow-sm">
                  Download File
                </Button>
              </div>
              <Button
                className="h-10 w-full sm:w-auto rounded-[6px] bg-[#e11d48] px-6 text-[14px] font-bold text-white hover:bg-[#be123c] shadow-sm"
                onClick={() => {
                  setDeleteImageId(previewImageId);
                  setPreviewImageId(null);
                }}
              >
                Delete File
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Add Category */}
      {isAddCategoryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-[12px] w-full max-w-[400px] shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4.5 shrink-0">
              <h3 className="text-[18px] font-bold text-brand-primary">Add Category</h3>
              <button
                onClick={() => setIsAddCategoryOpen(false)}
                className="text-[#95a0b6] hover:text-brand-primary hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
              >
                <X className="size-5" />
              </button>
            </div>
            <form onSubmit={handleAddCategorySubmit} className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary block">Category Name</label>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="e.g. Public, General Staff"
                  className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all placeholder:text-[#a3acba]"
                  autoFocus
                  required
                />
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <Button type="button" variant="outline" className="h-10 rounded-[6px] border-brand-primary bg-white px-5 text-[14px] font-bold text-brand-primary hover:bg-brand-bg-main" onClick={() => setIsAddCategoryOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="h-10 rounded-[6px] bg-brand-primary px-5 text-[14px] font-bold text-white hover:bg-[#0d1b3a]">
                  Add
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
