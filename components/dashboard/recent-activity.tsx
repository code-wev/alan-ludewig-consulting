import React from "react";
import { FileText, Calendar, CheckSquare, Download, Clock } from "lucide-react";

export function RecentActivity() {
  const activities = [
    {
      title: "RAMS document created",
      description: "Site Risk Assessment - ABC Construction",
      time: "2 hours ago",
      icon: <FileText className="w-5 h-5 text-[#132651]" />,
      bg: "bg-[#F3F5F8]",
    },
    {
      title: "Checklist draft saved",
      description: "Fire Safety Compliance - Zone B",
      time: "2 hours ago",
      icon: <CheckSquare className="w-5 h-5 text-[#EA580C]" />,
      bg: "bg-[#FFF7ED]",
    },
    {
      title: "COSHH assessment saved",
      description: "Chemical Degreaser Risk Assessment",
      time: "3 hours ago",
      icon: <FileText className="w-5 h-5 text-[#132651]" />,
      bg: "bg-[#F3F5F8]",
    },
    {
      title: "Membership certificate downloaded",
      description: "Competent Person CV",
      time: "5 hours ago",
      icon: <Download className="w-5 h-5 text-[#132651]" />,
      bg: "bg-[#F3F5F8]",
    },
    {
      title: "Site visit booked",
      description: "Workshop Inspection - 24 May 2026",
      time: "1 day ago",
      icon: <Calendar className="w-5 h-5 text-[#132651]" />,
      bg: "bg-[#F3F5F8]",
    },
  ];

  return (
    <div className="flex flex-col bg-white border border-[#E3E6EC] rounded-xl p-6 gap-6 w-full">
      <h2 className="text-xl font-bold text-[#132651]">Recent Activity</h2>
      
      <div className="flex flex-col gap-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-4 pb-4 border-b border-[#E3E6EC] last:border-0 last:pb-0">
            <div className={`${activity.bg} p-2.5 rounded-lg flex items-center justify-center shrink-0`}>
              {activity.icon}
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full md:items-center gap-2">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-base text-[#132651]">{activity.title}</span>
                <span className="text-sm text-[#5A6886]">{activity.description}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#5A6886] shrink-0">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-xs">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
