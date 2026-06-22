import React from "react";
import { MoreHorizontal, FileText, FileSearch, ArrowRight } from "lucide-react";

export function FormAndAssessmentProgress() {
  const data = [
    {
      name: "Fire Safety Checklist",
      type: "Form",
      site: "Central Plaza Office",
      status: "In Progress",
      dueDate: "15 Oct 2024",
    },
    {
      name: "Working at Height Risk Assessment",
      type: "Assessment",
      site: "Southside Development",
      status: "In Progress",
      dueDate: "15 Oct 2024",
    },
    {
      name: "COSHH Assessment Form",
      type: "Assessment",
      site: "Laboratory Alpha",
      status: "Pending",
      dueDate: "15 Oct 2024",
    },
    {
      name: "Site Induction Checklist",
      type: "Form",
      site: "Main Warehouse",
      status: "Submitted",
      dueDate: "15 Oct 2024",
    },
  ];

  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "In Progress":
        return (
          <span className="bg-[#00BC7D] text-white px-2 py-1 rounded-md text-xs font-medium">
            In Progress
          </span>
        );
      case "Pending":
        return (
          <span className="bg-[#FF6900] text-white px-2 py-1 rounded-md text-xs font-medium">
            Pending
          </span>
        );
      case "Submitted":
        return (
          <span className="bg-[#132651] text-white px-2 py-1 rounded-md text-xs font-medium">
            Submitted
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col bg-white border border-[#E3E6EC] rounded-xl overflow-hidden w-full">
      <div className="flex justify-between items-center p-5 border-b border-[#E3E6EC]">
        <h2 className="text-xl font-bold text-[#132651]">Form & Assessment Progress</h2>
        <button className="text-[#5A6886] hover:bg-gray-100 p-2 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-[#D6E9FF] border-b border-[#E3E6EC]">
              <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Name</th>
              <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Type</th>
              <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Site/Project</th>
              <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Status</th>
              <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Due Date</th>
              <th className="p-4 font-bold text-[#132651] text-sm whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-b border-[#E3E6EC] last:border-0 hover:bg-gray-50/50">
                <td className="p-4 text-[#132651] text-sm font-medium">{row.name}</td>
                <td className="p-4 text-[#5A6886] text-sm flex items-center gap-2">
                  {row.type === "Form" ? <FileText className="w-4 h-4" /> : <FileSearch className="w-4 h-4" />}
                  {row.type}
                </td>
                <td className="p-4 text-[#5A6886] text-sm">{row.site}</td>
                <td className="p-4">{renderStatusBadge(row.status)}</td>
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
  );
}
