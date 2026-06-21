import React from "react";
import { X } from "lucide-react";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SupportModal({ isOpen, onClose }: SupportModalProps) {
  if (!isOpen) return null;

  const logs = [
    {
      id: "#LOG-2940",
      action: "Safety Audit Completed",
      user: "Sarah Connor",
      date: "24 Oct 2023",
      status: "Completed",
      statusColor: "bg-[#00BC7D]"
    },
    {
      id: "#LOG-2941",
      action: "Equipment Maintenance",
      user: "James Miller",
      date: "24 Oct 2023",
      status: "Completed",
      statusColor: "bg-[#00BC7D]"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-[1038px] p-6 flex flex-col gap-6 relative my-auto">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-[#5A6886]" />
        </button>

        <h2 className="text-xl font-bold text-[#001137] pb-4">Support Ticket Analytics</h2>

        <div className="flex flex-col gap-8">
          
          {/* Top metrics grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
              <span className="text-sm text-[#64748B]">Total Compliance Score</span>
              <span className="text-[28px] leading-[1.6] font-bold text-[#132651]">94.2%</span>
              <div className="flex items-center gap-1">
                <span className="text-xs text-[#00A63E]">+2.4%</span>
                <span className="text-xs text-[#5A6886]">vs LY</span>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
              <span className="text-sm text-[#64748B]">Active Inspections</span>
              <span className="text-[28px] leading-[1.6] font-bold text-[#132651]">12</span>
              <div className="flex items-center gap-1">
                <span className="text-xs text-[#5A6886]">4 Due Today</span>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-4">
              <span className="text-sm text-[#64748B]">Pending Tickets</span>
              <span className="text-[28px] leading-[1.6] font-bold text-[#132651]">03</span>
              <div className="flex items-center gap-1">
                <span className="text-xs text-[#D92D20]">2 High Priority</span>
              </div>
            </div>

          </div>

          {/* Table Card */}
          <div className="flex flex-col bg-white border border-[#E3E6EC] rounded-xl overflow-hidden">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 gap-4">
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-[#132651]">Recent Activity Log</h3>
                <p className="text-sm text-[#5A6886]">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <button className="bg-[#132651] text-white font-bold text-xs px-4 py-2 rounded-md hover:bg-[#132651]/90 transition-colors">
                Export Report
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto w-full border-t border-[#E3E6EC]">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#D6E9FF] border-b border-[#E3E6EC]">
                    <th className="px-6 py-3 font-bold text-[#132651] text-sm whitespace-nowrap">Id</th>
                    <th className="px-6 py-3 font-bold text-[#132651] text-sm whitespace-nowrap">Action</th>
                    <th className="px-6 py-3 font-bold text-[#132651] text-sm whitespace-nowrap">User</th>
                    <th className="px-6 py-3 font-bold text-[#132651] text-sm whitespace-nowrap">Created Date</th>
                    <th className="px-6 py-3 font-bold text-[#132651] text-sm whitespace-nowrap">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log, idx) => (
                    <tr key={idx} className="border-b border-[#E3E6EC] last:border-0 hover:bg-gray-50/50">
                      <td className="px-6 py-4 text-[#132651] text-sm font-medium">{log.id}</td>
                      <td className="px-6 py-4 text-[#5A6886] text-sm">{log.action}</td>
                      <td className="px-6 py-4 text-[#5A6886] text-sm">{log.user}</td>
                      <td className="px-6 py-4 text-[#5A6886] text-sm">{log.date}</td>
                      <td className="px-6 py-4">
                        <span className={`${log.statusColor} text-white px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap`}>
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onClose}
              className="border border-[#132651] text-[#132651] font-bold text-xs px-4 py-2.5 rounded-md hover:bg-gray-50 transition-colors"
            >
              Ask Agent
            </button>
            <button 
              onClick={onClose}
              className="bg-[#132651] text-white font-bold text-xs px-4 py-2.5 rounded-md hover:bg-[#132651]/90 transition-colors"
            >
              New Ticket
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
