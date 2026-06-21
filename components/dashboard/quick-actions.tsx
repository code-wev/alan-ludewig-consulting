"use client";

import React, { useState } from "react";
import { FilePlus2, Download, Calendar, Library, CheckSquare, Bot } from "lucide-react";
import { AssignedChecklistModal } from "./assigned-checklist-modal";
import { SavedFilesModal } from "./saved-files-modal";

export function QuickActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSavedFilesModalOpen, setIsSavedFilesModalOpen] = useState(false);

  const actions = [
    {
      title: "Open RAMS Builder",
      description: "Create RAMS, risk assessments, COSHH assessments, permits, and checklists.",
      icon: <FilePlus2 className="w-6 h-6 text-blue-600" />,
      bg: "bg-[#EFF6FF]",
      border: "border-transparent"
    },
    {
      title: "Download Documents",
      description: "Access your saved files",
      icon: <Download className="w-6 h-6 text-emerald-600" />,
      bg: "bg-[#ECFDF5]",
      border: "border-[#D0D4DC]",
      onClick: () => setIsSavedFilesModalOpen(true)
    },
    {
      title: "Book Site Visit",
      description: "Schedule an inspection",
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      bg: "bg-[#FAF5FF]",
      border: "border-transparent"
    },
    {
      title: "Document Library",
      description: "Browse templates & guides",
      icon: <Library className="w-6 h-6 text-amber-600" />,
      bg: "bg-[#FFFBEB]",
      border: "border-transparent"
    },
    {
      title: "My Forms / Checklists",
      description: "Complete assigned question sets",
      icon: <CheckSquare className="w-6 h-6 text-cyan-600" />,
      bg: "bg-[#ECFEFF]",
      border: "border-transparent",
      onClick: () => setIsModalOpen(true)
    },
    {
      title: "Virtual Agent",
      description: "Get instant H&S support",
      icon: <Bot className="w-6 h-6 text-indigo-600" />,
      bg: "bg-[#EEF2FF]",
      border: "border-transparent"
    }
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-[#132651]">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <div
              key={index}
              onClick={action.onClick}
              className={`flex flex-col p-6 bg-white border ${action.border === 'border-transparent' ? 'border-[#D0D4DC]' : action.border} rounded-xl gap-4 cursor-pointer hover:shadow-md transition-shadow`}
            >
              <div className={`${action.bg} p-3 rounded-xl flex items-center justify-center w-12 h-12`}>
                {action.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-lg text-[#132651]">{action.title}</h3>
                <p className="text-sm text-[#5A6886]">{action.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AssignedChecklistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <SavedFilesModal 
        isOpen={isSavedFilesModalOpen}
        onClose={() => setIsSavedFilesModalOpen(false)}
      />
    </>
  );
}
