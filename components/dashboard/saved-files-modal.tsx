import React, { useState } from "react";
import { X, Search, Eye, Download, MoreVertical } from "lucide-react";

interface SavedFilesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SavedFilesModal({ isOpen, onClose }: SavedFilesModalProps) {
  const [activeTab, setActiveTab] = useState("All Files");

  if (!isOpen) return null;

  const tabs = [
    "All Files",
    "Generated Documents",
    "Completed Checklists",
    "Risk Assessments",
    "Drafts",
    "Uploaded Files",
  ];

  const files = [
    {
      name: "Fire Safety Procedure v2",
      type: "PDF",
      project: "Central Plaza Office",
      status: "Draft",
      statusConfig: "bg-[#9FA8B7] text-white",
      lastUpdated: "Oct 12, 2023",
    },
    {
      name: "Site Inspection Report",
      type: "Word",
      project: "Main Warehouse",
      status: "Completed",
      statusConfig: "bg-[#00BC7D] text-white",
      lastUpdated: "Oct 12, 2023",
    },
    {
      name: "RAMS Working At Height",
      type: "PDF",
      project: "Southside Development",
      status: "Pending",
      statusConfig: "bg-[#FF6900] text-white",
      lastUpdated: "Oct 12, 2023",
    },
    {
      name: "COSHH Assessment",
      type: "PDF",
      project: "Laboratory Alpha",
      status: "Submitted",
      statusConfig: "bg-[#132651] text-white",
      lastUpdated: "Oct 12, 2023",
    },
    {
      name: "Manual Handling Policy",
      type: "Word",
      project: "Central Plaza Office",
      status: "Under Review",
      statusConfig: "bg-[#FEF9C3] text-[#B45309]",
      lastUpdated: "Oct 12, 2023",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-[1200px] flex flex-col relative my-auto">
        
        <div className="flex flex-col gap-2 p-6 pb-0">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-[#5A6886]" />
          </button>
          
          <h2 className="text-xl font-bold text-[#132651]">Saved Files</h2>
          <p className="text-sm text-[#5A6886]">
            Manage and access your safety documentation and reports.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6 py-4">
          <div className="flex flex-wrap items-center gap-2 bg-[#F3F5F8] p-1 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  activeTab === tab
                    ? "bg-white text-[#132651] shadow-sm font-medium"
                    : "text-[#5A6886] hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#5A6886] absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search templates..." 
              className="w-full pl-9 pr-3 py-2 border border-[#E3E6EC] rounded-md text-sm outline-none focus:border-[#132651]"
            />
          </div>
        </div>

        <div className="px-6 pb-6 overflow-hidden">
          <div className="flex flex-col bg-white border border-[#E3E6EC] rounded-xl overflow-hidden w-full">
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-[#D6E9FF] border-b border-[#E3E6EC]">
                    <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">File Name</th>
                    <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Type</th>
                    <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Project/Location</th>
                    <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Status</th>
                    <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Last Updated</th>
                    <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file, idx) => (
                    <tr key={idx} className="border-b border-[#E3E6EC] last:border-0 hover:bg-gray-50/50">
                      <td className="p-4 text-[#132651] text-sm font-medium">{file.name}</td>
                      <td className="p-4 text-[#5A6886] text-sm">{file.type}</td>
                      <td className="p-4 text-[#5A6886] text-sm">{file.project}</td>
                      <td className="p-4">
                        <span className={`${file.statusConfig} px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap`}>
                          {file.status}
                        </span>
                      </td>
                      <td className="p-4 text-[#5A6886] text-sm">{file.lastUpdated}</td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-1">
                          <button className="text-[#5A6886] hover:bg-gray-100 p-1.5 rounded-md transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-[#5A6886] hover:bg-gray-100 p-1.5 rounded-md transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="text-[#5A6886] hover:bg-gray-100 p-1.5 rounded-md transition-colors">
                            <MoreVertical className="w-4 h-4" />
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

      </div>
    </div>
  );
}
