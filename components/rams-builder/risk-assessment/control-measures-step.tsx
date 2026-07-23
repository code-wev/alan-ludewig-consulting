import React from "react";
import { Shield, AlertTriangle, AlertCircle, TrendingDown, CheckCircle2, XCircle, Edit2, Trash2 } from "lucide-react";

interface ControlMeasuresStepProps {
  setIsAddControlMeasureOpen: (open: boolean) => void;
  setDeleteControlMeasureId: (id: string | null) => void;
}

export function ControlMeasuresStep({ setIsAddControlMeasureOpen, setDeleteControlMeasureId }: ControlMeasuresStepProps) {
  const dummyControls = [
    {
      id: "cm1",
      measure: "Automatic Cut-off Sensors",
      category: "Engineering",
      hazard: "Structural Masonry",
      responsible: "12 May 2026",
      preWork: true,
      impact: { label: "High", color: "#10b981", percent: 80 },
      status: "Pending Installation",
      statusColor: "bg-[#f1f5f9] text-[#64748b]"
    },
    {
      id: "cm2",
      measure: "Automatic Cut-off Sensors",
      category: "PPE",
      hazard: "Structural Masonry",
      responsible: "12 May 2026",
      preWork: true,
      impact: { label: "Medium", color: "#f59e0b", percent: 50 },
      status: "In Progress",
      statusColor: "bg-[#1e293b] text-white"
    },
    {
      id: "cm3",
      measure: "Automatic Cut-off Sensors",
      category: "Elimination",
      hazard: "Structural Masonry",
      responsible: "12 May 2026",
      preWork: false,
      impact: { label: "High", color: "#10b981", percent: 80 },
      status: "Implemented",
      statusColor: "bg-[#10b981] text-white"
    },
    {
      id: "cm4",
      measure: "Automatic Cut-off Sensors",
      category: "Elimination",
      hazard: "Structural Masonry",
      responsible: "12 May 2026",
      preWork: false,
      impact: { label: "Medium", color: "#f59e0b", percent: 50 },
      status: "Implemented",
      statusColor: "bg-[#10b981] text-white"
    },
    {
      id: "cm5",
      measure: "Automatic Cut-off Sensors",
      category: "Engineering",
      hazard: "Structural Masonry",
      responsible: "12 May 2026",
      preWork: true,
      impact: { label: "Critical", color: "#e11d48", percent: 95 },
      status: "In Progress",
      statusColor: "bg-[#1e293b] text-white"
    },
    {
      id: "cm6",
      measure: "Automatic Cut-off Sensors",
      category: "Administrative",
      hazard: "Structural Masonry",
      responsible: "12 May 2026",
      preWork: true,
      impact: { label: "Low", color: "#64748b", percent: 20 },
      status: "Implemented",
      statusColor: "bg-[#10b981] text-white"
    }
  ];

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Top 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-[12px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div className="flex flex-col gap-3">
             <Shield className="size-6 text-[#132651]" />
             <div>
               <p className="text-[13px] font-medium text-[#5a6886] mb-1">Controls Added</p>
               <p className="text-[28px] font-bold text-[#132651] leading-none mt-2">12</p>
             </div>
          </div>
        </div>
        
        <div className="bg-white rounded-[12px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div className="flex flex-col gap-3">
             <AlertTriangle className="size-6 text-[#132651]" />
             <div>
               <p className="text-[13px] font-medium text-[#5a6886] mb-1">Hazards Covered</p>
               <p className="text-[28px] font-bold text-[#132651] leading-none mt-2">8/10</p>
             </div>
          </div>
        </div>
        
        <div className="bg-white rounded-[12px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div className="flex flex-col gap-3">
             <AlertCircle className="size-6 text-[#e11d48]" />
             <div>
               <p className="text-[13px] font-medium text-[#5a6886] mb-1">Required Before Work</p>
               <p className="text-[28px] font-bold text-[#e11d48] leading-none mt-2">03</p>
             </div>
          </div>
        </div>
        
        <div className="bg-white rounded-[12px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div className="flex flex-col gap-3">
             <TrendingDown className="size-6 text-[#10b981]" />
             <div>
               <p className="text-[13px] font-medium text-[#5a6886] mb-1">Residual Risk Reduction</p>
               <p className="text-[28px] font-bold text-[#132651] leading-none mt-2">65%</p>
             </div>
          </div>
        </div>
      </div>

      {/* Control Measure Register Table */}
      <div className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <div className="px-6 py-5 border-b border-[#e3e6ec]">
           <h3 className="text-[16px] font-bold text-[#132651]">Control Measure Register</h3>
        </div>
        <div className="overflow-x-auto">
           <table className="w-full text-left border-collapse min-w-[1100px]">
              <thead>
                 <tr className="bg-[#eef4ff] border-b border-[#e3e6ec]">
                    <th className="p-4 pl-6 w-12"><input type="checkbox" className="rounded border-[#c5c6cd]" /></th>
                    <th className="p-4 text-[12px] font-bold text-[#132651]">Control Measure</th>
                    <th className="p-4 text-[12px] font-bold text-[#132651]">Category</th>
                    <th className="p-4 text-[12px] font-bold text-[#132651]">Related Hazard</th>
                    <th className="p-4 text-[12px] font-bold text-[#132651]">Responsible</th>
                    <th className="p-4 text-[12px] font-bold text-[#132651] text-center">Required Pre-Work</th>
                    <th className="p-4 text-[12px] font-bold text-[#132651]">Residual Risk Impact</th>
                    <th className="p-4 text-[12px] font-bold text-[#132651]">Status</th>
                    <th className="p-4 text-[12px] font-bold text-[#132651] text-center">Actions</th>
                 </tr>
              </thead>
              <tbody>
                 {dummyControls.map((ctrl) => (
                    <tr key={ctrl.id} className="border-b border-[#e3e6ec] hover:bg-[#f9fafc]">
                       <td className="p-4 pl-6"><input type="checkbox" className="rounded border-[#c5c6cd]" /></td>
                       <td className="p-4 text-[13px] text-[#5a6886]">{ctrl.measure}</td>
                       <td className="p-4 text-[13px] text-[#5a6886]">{ctrl.category}</td>
                       <td className="p-4 text-[13px] text-[#5a6886]">{ctrl.hazard}</td>
                       <td className="p-4 text-[13px] text-[#5a6886]">{ctrl.responsible}</td>
                       <td className="p-4 text-center">
                          {ctrl.preWork ? (
                            <CheckCircle2 className="size-4 text-[#10b981] mx-auto" />
                          ) : (
                            <XCircle className="size-4 text-[#e11d48] mx-auto" />
                          )}
                       </td>
                       <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-1 bg-[#e3e6ec] rounded-full overflow-hidden">
                              <div className="h-full rounded-full" style={{ width: `${ctrl.impact.percent}%`, backgroundColor: ctrl.impact.color }}></div>
                            </div>
                            <span className="text-[12px] font-medium" style={{ color: ctrl.impact.color }}>
                              {ctrl.impact.label}
                            </span>
                          </div>
                       </td>
                       <td className="p-4">
                          <span className={`px-2.5 py-1 text-[11px] font-bold rounded-[4px] inline-block ${ctrl.statusColor}`}>
                            {ctrl.status}
                          </span>
                       </td>
                       <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                             <button
                               onClick={() => setIsAddControlMeasureOpen(true)}
                               className="text-[#10b981] hover:bg-[#ecfdf5] p-1.5 rounded transition-colors"
                             >
                                <Edit2 className="size-4" />
                             </button>
                             <button
                               onClick={() => setDeleteControlMeasureId(ctrl.id)}
                               className="text-[#e11d48] hover:bg-[#fff1f2] p-1.5 rounded transition-colors"
                             >
                                <Trash2 className="size-4" />
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
  );
}
