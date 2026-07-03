"use client";

import React from "react";
import { 
  ChevronRight, 
  Search, 
  ChevronDown, 
  Plus, 
  FileText, 
  Clock, 
  RotateCcw, 
  MoreVertical, 
  Wrench, 
  Shield, 
  CheckSquare, 
  Camera, 
  AlertCircle, 
  X,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { RequestCustomTemplateModal } from "@/components/saved-files/modals/request-custom-template-modal";
import { QuestionSetTemplate, TemplateSection, TemplateItem } from "./types";

interface QuestionSetsViewProps {
  currentView: "list" | "question-sets" | "complete-inspection";
  setCurrentView: (view: "list" | "question-sets" | "complete-inspection") => void;
  qSearchQuery: string;
  setQSearchQuery: (query: string) => void;
  selectedQCategory: string;
  setSelectedQCategory: (cat: string) => void;
  filterInspectionsType: string;
  setFilterInspectionsType: (type: string) => void;
  filterMembershipAccess: string;
  setFilterMembershipAccess: (access: string) => void;
  filterStatus: string;
  setFilterStatus: (status: string) => void;
  isCustomRequestModalOpen: boolean;
  setIsCustomRequestModalOpen: (open: boolean) => void;
  customRequestCategory: string;
  setCustomRequestCategory: (cat: string) => void;
  selectedPreviewTemplate: QuestionSetTemplate | null;
  setSelectedPreviewTemplate: (template: QuestionSetTemplate | null) => void;
  questionSetTemplates: QuestionSetTemplate[];
  qCategories: Array<{ name: string; count: number }>;
  filteredQTemplates: QuestionSetTemplate[];
  handleStartInspection: (templateName: string, category: string) => void;
}

export function QuestionSetsView({
  setCurrentView,
  qSearchQuery,
  setQSearchQuery,
  selectedQCategory,
  setSelectedQCategory,
  filterInspectionsType,
  setFilterInspectionsType,
  filterMembershipAccess,
  setFilterMembershipAccess,
  filterStatus,
  setFilterStatus,
  isCustomRequestModalOpen,
  setIsCustomRequestModalOpen,
  customRequestCategory,
  setCustomRequestCategory,
  selectedPreviewTemplate,
  setSelectedPreviewTemplate,
  questionSetTemplates,
  qCategories,
  filteredQTemplates,
  handleStartInspection,
}: QuestionSetsViewProps) {
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
              className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-secondary hover:text-brand-primary cursor-pointer animate-in fade-in duration-100"
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
                  <h4 className="text-[18px] font-bold text-[#132651] mt-1 font-sans">
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
                {selectedPreviewTemplate.questions?.map((section: TemplateSection, sIdx: number) => (
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
                      {section.items.map((item: TemplateItem, iIdx: number) => (
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
}
