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
  Eye, 
  Download, 
  Edit,
  Trash2, 
  X,
  Check,
  FilePlus2,
  FolderInput,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { ComplianceForm } from "./types";
import { OverviewCardsRow } from "./overview-cards-row";

interface MainFormsViewProps {
  forms: ComplianceForm[];
  setForms: React.Dispatch<React.SetStateAction<ComplianceForm[]>>;
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentView: (view: "list" | "question-sets" | "complete-inspection") => void;
  handleEditForm: (name: string) => void;
}

export function MainFormsView({
  forms,
  setForms,
  categories,
  setCategories,
  setCurrentView,
  handleEditForm,
}: MainFormsViewProps) {
  // Local Filtering states
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

  // Lists static data
  const types = ["Inspections", "Fire Risk", "COSHH", "RAMS", "Risk Assessments", "Permits", "Method Statements"];
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
        matchesDate = true;
      }

      return matchesSearch && matchesTab && matchesCategory && matchesType && matchesStatus && matchesDate;
    });
  }, [forms, searchQuery, activeTab, selectedCategory, selectedType, selectedStatus, selectedDateRange]);

  // Handlers
  const handleDownloadForm = (name: string) => {
    toast.success(`Initiating download for "${name}" (PDF)...`);
  };

  const handleViewForm = (name: string) => {
    toast.success(`Opening Document Viewer for "${name}"...`);
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
    setActiveTab("Drafts");
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

  // Move Modal handlers
  const handleOpenMoveModal = (form: ComplianceForm) => {
    setSelectedFormToMove(form);
    setNewCategoryForMovedForm("");
    setIsMoveModalOpen(true);
  };

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

  // Delete Modal handlers
  const handleDeleteFormClick = (form: ComplianceForm) => {
    setSelectedFormToDelete(form);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!selectedFormToDelete) return;
    setForms(prev => prev.filter(f => f.id !== selectedFormToDelete.id));
    setIsDeleteModalOpen(false);
    toast.success(`Form "${selectedFormToDelete.name}" has been deleted permanently.`);
  };

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
          <p className="text-base text-brand-secondary font-sans">
            Manage your created checklists, RAMS, risk assessments, COSHH assessments, permits, method statements, inspections, and saved form records in one place.
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
          Start New Document
        </Button>
        
        <Button 
          variant="outline"
          asChild
          className="h-[34px] px-4 text-[13px] border-[#e3e6ec] bg-white text-brand-primary hover:border-brand-primary font-bold transition rounded-[6px]"
        >
          <Link href="/dashboard/risk-assessment">
            Start Risk Assessment
          </Link>
        </Button>

        <Button 
          variant="outline"
          asChild
          className="h-[34px] px-4 text-[13px] border-[#e3e6ec] bg-white text-brand-primary hover:border-brand-primary font-bold transition rounded-[6px]"
        >
          <Link href="/dashboard/risk-assessment">
            Risk Assessment Completion
          </Link>
        </Button>

        <Button 
          variant="outline"
          asChild
          className="h-[34px] px-4 text-[13px] border-[#e3e6ec] bg-white text-brand-primary hover:border-brand-primary font-bold transition rounded-[6px]"
        >
          <Link href="/dashboard/rams">
            Create RAMS
          </Link> 
        </Button>

        <Button 
          variant="outline" 
          onClick={() => setIsAddCatModalOpen(true)}
          className="h-[34px] px-4 text-[13px] border-[#e3e6ec] bg-white text-brand-primary hover:border-brand-primary font-bold transition rounded-[6px]"
        >
          Add New Category
        </Button>
      </div>

      {/* Overview Cards Row */}
      <OverviewCardsRow stats={stats} setActiveTab={setActiveTab} />

      {/* Main Table Section Wrapper */}
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] shadow-[0px_4px_20px_rgba(19,38,81,0.02)] overflow-hidden">
        
        {/* Tabs Headers */}
        <div className="p-4 border-b border-[#e3e6ec] overflow-x-auto no-scrollbar">
          <div className="bg-[#f3f5f8] p-[3px] rounded-[12px] flex items-center gap-[4px] w-fit min-w-full lg:min-w-0">
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
                    "h-[29px] px-[12.5px] py-[5.5px] text-[14px] font-sans rounded-[9px] transition duration-150 whitespace-nowrap cursor-pointer flex items-center justify-center font-medium leading-[1.6]",
                    isActive 
                      ? "bg-white text-[#132651] font-bold shadow-[0_1px_3px_rgba(19,38,81,0.08)] border border-slate-200/40" 
                      : "text-[#5a6886] hover:text-[#132651] hover:bg-white/40"
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
                className="text-brand-secondary hover:text-brand-primary p-0.5 rounded-full cursor-pointer"
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
                  "flex items-center justify-between h-[38px] w-full sm:w-auto sm:min-w-[140px] px-3 text-[13.5px] font-medium rounded-[6px] border bg-white transition gap-2 shadow-sm cursor-pointer",
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
                    className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between cursor-pointer"
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
                      className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between cursor-pointer"
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
                  "flex items-center justify-between h-[38px] w-full sm:w-auto sm:min-w-[120px] px-3 text-[13.5px] font-medium rounded-[6px] border bg-white transition gap-2 shadow-sm cursor-pointer",
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
                    className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between cursor-pointer"
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
                      className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between cursor-pointer"
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
                  "flex items-center justify-between h-[38px] w-full sm:w-auto sm:min-w-[120px] px-3 text-[13.5px] font-medium rounded-[6px] border bg-white transition gap-2 shadow-sm cursor-pointer",
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
                    className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between cursor-pointer"
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
                      className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between cursor-pointer"
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
                  "flex items-center justify-between h-[38px] w-full sm:w-auto sm:min-w-[130px] px-3 text-[13.5px] font-medium rounded-[6px] border bg-white transition gap-2 shadow-sm cursor-pointer",
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
                      className="w-full text-left px-3 py-2 text-[13px] text-brand-primary hover:bg-slate-50 font-sans flex items-center justify-between cursor-pointer"
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
                <tr className="bg-[#D6E9FF] border-b border-[#e3e6ec] text-brand-primary font-bold text-[13.5px]">
                  <th className="px-6 py-4 text-left font-sans w-[28%]">Documentation / Form</th>
                  <th className="px-6 py-4 text-left font-sans w-[10%]">Type</th>
                  <th className="px-6 py-4 text-left font-sans w-[17%]">Category</th>
                  <th className="px-6 py-4 text-left font-sans w-[18%]">Project / Site</th>
                  <th className="px-6 py-4 text-left font-sans w-[6%]">Status</th>
                  <th className="px-6 py-4 text-left font-sans w-[8%]">Created</th>
                  <th className="px-6 py-4 text-left font-sans w-[17%]">Last Updated</th>
                  <th className="px-6 py-4 text-center font-sans w-[2%]">Version</th>
                  <th className="px-6 py-4 text-center font-sans w-[5%]">Actions</th>
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
                        "inline-flex items-center text-[12px] font-bold px-[10px] py-[3px] rounded-md border shadow-sm select-none font-sans",
                        form.status === "Completed" && "bg-green-600 text-white",
                        form.status === "Draft" && "bg-slate-700 text-white",
                        form.status === "Assigned" && "bg-blue-500 text-white",
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
                          type="button"
                          onClick={() => handleViewForm(form.name)}
                          title="View Document"
                          className="p-1.5 rounded-full hover:bg-slate-100 text-brand-secondary hover:text-brand-primary transition cursor-pointer"
                        >
                          <Eye className="w-[16px] h-[16px]" />
                        </button>

                        {/* Download Button */}
                        <button
                          type="button"
                          onClick={() => handleDownloadForm(form.name)}
                          title="Download PDF"
                          className="p-1.5 rounded-full hover:bg-slate-100 text-brand-secondary hover:text-brand-primary transition cursor-pointer"
                        >
                          <Download className="w-[16px] h-[16px]" />
                        </button>

                        {/* Move Button */}
                        <button
                          type="button"
                          onClick={() => handleOpenMoveModal(form)}
                          title="Move Document"
                          className="p-1.5 rounded-full hover:bg-slate-100 text-brand-secondary hover:text-brand-primary transition cursor-pointer"
                        >
                          <FolderInput className="w-[16px] h-[16px]" />
                        </button>

                        {/* Delete Button */}
                        <button
                          type="button"
                          onClick={() => handleDeleteFormClick(form)}
                          title="Delete"
                          className="p-1.5 rounded-full hover:bg-red-50 text-brand-secondary hover:text-red-600 transition cursor-pointer"
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
                type="button"
                onClick={() => setIsStartDocModalOpen(false)}
                className="text-brand-secondary hover:text-brand-primary p-1 rounded-full hover:bg-slate-100 transition cursor-pointer"
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
              className="absolute right-6 top-6 flex size-8 items-center justify-center rounded-full text-brand-secondary hover:bg-[#f3f5f8] hover:text-brand-primary transition cursor-pointer"
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
              className="absolute right-6 top-6 flex size-8 items-center justify-center rounded-full text-brand-secondary hover:bg-[#f3f5f8] hover:text-brand-primary transition cursor-pointer"
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
              className="absolute right-6 top-6 flex size-8 items-center justify-center rounded-full text-brand-secondary hover:bg-[#f3f5f8] hover:text-brand-primary transition cursor-pointer"
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
                  <div className="text-[16px] font-bold text-[#132651] leading-snug font-sans text-left">
                    Are you sure you want to delete &apos;{selectedFormToDelete.name}&apos;?
                  </div>
                  <div className="text-[14px] text-[#5a6886] leading-[1.6] font-sans text-left">
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

    </div>
  );
}
