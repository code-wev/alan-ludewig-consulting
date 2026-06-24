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
  const [images, setImages] = useState([
    {
      id: "1",
      name: "Gantry_North_1.jpg",
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "2",
      name: "Machinery_Focus.png",
      url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "3",
      name: "Scaffold_Layout.jpg",
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
    },
  ]);

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

  const handleAddCategory = () => {
    const category = prompt("Enter new Category for People at Risk:");
    if (category && category.trim()) {
      if (peopleAtRisk.includes(category.trim())) {
        toast.error("Category already exists");
        return;
      }
      setPeopleAtRisk([...peopleAtRisk, category.trim()]);
      toast.success(`Added "${category.trim()}" to People at Risk`);
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
          <h1 className="text-[30px] font-bold leading-[1.2] text-brand-primary">
            Risk Assessment Completion
          </h1>
          <p className="max-w-[700px] text-[16px] leading-6 text-brand-secondary">
            Identify hazards, apply control measures, and calculate residual risk.
          </p>
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleSaveDraft}
            className="h-8.5 rounded-[6px] border-brand-primary bg-white px-4 text-[12px] font-bold text-brand-primary hover:bg-brand-bg-main shadow-none transition-all duration-200"
          >
            Save Draft
          </Button>
          <Button
            type="button"
            onClick={handlePreview}
            className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a] transition-all duration-200"
          >
            Preview
          </Button>
        </div>
      </div>

      {/* Tabs list matching Figma layout */}
      <div className="bg-[#f3f5f8] p-1 flex flex-wrap gap-1 rounded-[12px] max-w-max border border-[#e3e6ec]">
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
                  onClick={handleAddCategory}
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
              <button
                type="button"
                onClick={handleUploadImage}
                className="flex items-center gap-1.5 text-[14px] font-semibold text-brand-primary hover:underline transition-all duration-150"
              >
                <Upload className="size-4" />
                Upload New
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Upload image box */}
              <button
                type="button"
                onClick={handleUploadImage}
                className="h-28.5 flex flex-col items-center justify-center gap-2 rounded-[6px] border-2 border-dashed border-[#d0d4dc] hover:border-brand-primary bg-[#f7f8fa] text-[#5a6886] hover:text-brand-primary transition-all duration-250"
              >
                <div className="flex size-9 items-center justify-center rounded-full bg-white shadow-sm border border-[#e3e6ec]">
                  <Upload className="size-4 text-brand-secondary" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  ADD IMAGE
                </span>
              </button>

              {/* Thumbnails */}
              {images.map((img) => (
                <div
                  key={img.id}
                  className="group relative h-28.5 rounded-[6px] overflow-hidden border border-[#e3e6ec] bg-[#f7f8fa]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.url}
                    alt={img.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 filter saturate-90"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setImages(images.filter((i) => i.id !== img.id))
                      }
                      className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
                      title="Delete Image"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 px-2.5 py-1">
                    <p className="text-[10px] text-white truncate font-medium">
                      {img.name}
                    </p>
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
    </div>
  );
}
