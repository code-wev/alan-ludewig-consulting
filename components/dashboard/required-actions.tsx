"use client";

import React, { useState } from "react";
import { AlertCircle, Clock, FileText } from "lucide-react";
import { UpdatedDocumentsModal } from "./updated-documents-modal";
import { RiskAssessmentModal } from "./risk-assessment-modal";

export function RequiredActions() {
  const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);
  const [isRiskAssessmentModalOpen, setIsRiskAssessmentModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-[#132651] flex items-center gap-2">
          <span className="text-[#D92D20]">!</span> Required Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="flex flex-col p-6 bg-white border border-[#D0D4DC] rounded-xl gap-4">
            <div className="flex justify-between items-start">
              <div className="bg-[#FAF5FF] p-3 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-[#9810FA]" />
              </div>
              <div className="bg-[#FFDAD6] px-2 py-0.5 rounded-md text-xs text-[#BA1A1A]">
                2 Waiting
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-lg text-[#132651]">Renew Expiring Documents</h3>
              <p className="text-sm text-[#5A6886]">
                Status: <span className="text-[#D92D20]">Pending</span>
              </p>
            </div>
            <button className="mt-auto border border-[#132651] text-[#132651] rounded-md py-2 px-4 font-bold text-sm hover:bg-gray-50 transition-colors self-start">
              Open Builder
            </button>
          </div>

          {/* Card 2 */}
          <div 
            className="flex flex-col p-6 bg-white border border-[#D0D4DC] rounded-xl gap-4 shadow-sm shadow-[#001137]/10 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setIsRiskAssessmentModalOpen(true)}
          >
            <div className="flex justify-between items-start">
              <div className="bg-[#001137]/10 p-3 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#001137]" />
              </div>
              <div className="bg-[#DCFCE7] px-2 py-0.5 rounded-md text-xs text-[#00A63E]">
                1 In Progress
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-lg text-[#132651]">Complete Risk Assessment</h3>
              <p className="text-sm text-[#5A6886]">
                Status: <span className="text-[#00A63E]">In Progress</span>
              </p>
            </div>
            <button 
              className="mt-auto border border-[#132651] text-[#132651] rounded-md py-2 px-4 font-bold text-sm hover:bg-gray-50 transition-colors self-start"
              onClick={(e) => {
                e.stopPropagation();
                setIsRiskAssessmentModalOpen(true);
              }}
            >
              Continue Assessment
            </button>
          </div>

          {/* Card 3 */}
          <div 
            className="flex flex-col p-6 bg-white border border-[#D0D4DC] rounded-xl gap-4 cursor-pointer hover:shadow-md transition-shadow" 
            onClick={() => setIsDocumentsModalOpen(true)}
          >
            <div className="flex justify-between items-start">
              <div className="bg-[#FAF5FF] p-3 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#9810FA]" />
              </div>
              <div className="bg-[#DAE2FF] px-2 py-0.5 rounded-md text-xs text-[#132651]">
                3 New
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-lg text-[#132651]">Review Updated Documents</h3>
              <p className="text-sm text-[#5A6886]">
                Status: <span className="text-[#132651]">New</span>
              </p>
            </div>
            <button 
              className="mt-auto border border-[#132651] text-[#132651] rounded-md py-2 px-4 font-bold text-sm hover:bg-gray-50 transition-colors self-start"
              onClick={(e) => {
                e.stopPropagation();
                setIsDocumentsModalOpen(true);
              }}
            >
              View Documents
            </button>
          </div>
        </div>
      </div>

      <UpdatedDocumentsModal 
        isOpen={isDocumentsModalOpen} 
        onClose={() => setIsDocumentsModalOpen(false)} 
      />

      <RiskAssessmentModal 
        isOpen={isRiskAssessmentModalOpen}
        onClose={() => setIsRiskAssessmentModalOpen(false)}
      />
    </>
  );
}
