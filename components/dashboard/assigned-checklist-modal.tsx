import React from "react";
import { X, ArrowRight } from "lucide-react";

interface AssignedChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AssignedChecklistModal({ isOpen, onClose }: AssignedChecklistModalProps) {
  if (!isOpen) return null;

  const data = [
    {
      name: "Alan Ludewig",
      site: "Central Plaza Office",
      status: "In Progress",
      statusColor: "bg-[#00BC7D]",
      dueDate: "15 Oct 2024",
    },
    {
      name: "Sarah Mitchell",
      site: "Main Warehouse",
      status: "Draft",
      statusColor: "bg-[#9FA8B7]",
      dueDate: "15 Oct 2024",
    },
    {
      name: "Mark Evans",
      site: "Southside Development",
      status: "Not Started",
      statusColor: "bg-[#D0D4DC]",
      dueDate: "15 Oct 2024",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-6 flex flex-col gap-6 relative my-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-[#5A6886]" />
        </button>

        <h2 className="text-xl font-bold text-[#001137]">Complete Assigned Checklist</h2>

        <div className="flex flex-col gap-8 overflow-hidden">
          <div className="flex flex-col bg-white border border-[#E3E6EC] rounded-xl overflow-hidden w-full">
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#D6E9FF] border-b border-[#E3E6EC]">
                    <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Checklist Name</th>
                    <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Site Location</th>
                    <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Status</th>
                    <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Due Date</th>
                    <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, idx) => (
                    <tr key={idx} className="border-b border-[#E3E6EC] last:border-0 hover:bg-gray-50/50">
                      <td className="p-4 text-[#132651] text-sm font-medium">{row.name}</td>
                      <td className="p-4 text-[#5A6886] text-sm">{row.site}</td>
                      <td className="p-4">
                        <span className={`${row.statusColor} text-white px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="p-4 text-[#5A6886] text-sm">{row.dueDate}</td>
                      <td className="p-4">
                        <button className="text-[#132651] hover:bg-gray-100 p-1.5 rounded-md border border-transparent hover:border-gray-200 transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <button 
            onClick={onClose}
            className="bg-[#132651] text-white font-bold text-xs px-4 py-2.5 rounded-md hover:bg-[#132651]/90 transition-colors"
          >
            View All Forms & Checklists
          </button>
        </div>
      </div>
    </div>
  );
}
