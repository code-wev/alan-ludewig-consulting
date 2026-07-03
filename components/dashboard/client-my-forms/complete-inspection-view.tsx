"use client";

import React, { useState } from "react";
import { 
  ChevronRight, 
  ChevronDown, 
  Wrench, 
  Shield, 
  CheckSquare, 
  AlertCircle, 
  Camera, 
  X, 
  Edit 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { ComplianceForm, ActiveInspection } from "./types";

interface CompleteInspectionViewProps {
  activeInspection: ActiveInspection;
  setActiveInspection: React.Dispatch<React.SetStateAction<ActiveInspection | null>>;
  setCurrentView: (view: "list" | "question-sets" | "complete-inspection") => void;
  setForms: React.Dispatch<React.SetStateAction<ComplianceForm[]>>;
  handleStartInspection: (templateName: string, category: string) => void;
}

export function CompleteInspectionView({
  activeInspection,
  setActiveInspection,
  setCurrentView,
  setForms,
  handleStartInspection,
}: CompleteInspectionViewProps) {
  // Local states that only affect this view
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "1.0 Site Setup": true,
    "2.0 Access & Egress": false,
    "3.0 Personal Protective Equipment (PPE)": false,
    "4.0 Fire Safety": false,
    "5.0 Electrical & Hand Tools": false,
    "6.0 Hazardous Substances (COSHH)": false
  });

  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
  const [typedSignature, setTypedSignature] = useState(activeInspection.signatureName || "Alex Henderson");
  const [selectedSignatureStyle, setSelectedSignatureStyle] = useState("cursive");

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
                    {sIdx % 3 === 0 ? (
                      <Wrench className="w-5 h-5" />
                    ) : sIdx % 3 === 1 ? (
                      <Shield className="w-5 h-5" />
                    ) : (
                      <CheckSquare className="w-5 h-5" />
                    )}
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
}
