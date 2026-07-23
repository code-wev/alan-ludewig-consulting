import React from "react";
import { X, AlertTriangle, Shield, Lightbulb, CheckCircle, Circle, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuggestedControlsModalProps {
  isSuggestedControlsOpen: boolean;
  setIsSuggestedControlsOpen: (open: boolean) => void;
  setIsApplySuggestedControlsOpen: (open: boolean) => void;
}

export function SuggestedControlsModal({
  isSuggestedControlsOpen,
  setIsSuggestedControlsOpen,
  setIsApplySuggestedControlsOpen
}: SuggestedControlsModalProps) {
  if (!isSuggestedControlsOpen) return null;

  const dummySuggestions = [
    {
      id: "sc1",
      control: "Falls from Height",
      sub: "Scaffolding assembly an dismantling",
      hazard: "Gas Leakage (Cat A)",
      hazardColor: "text-[#dc2626]",
      category: "Engineering",
      reduction: 45,
      preWork: true,
      status: "Mandatory",
      statusColor: "bg-[#e11d48] text-white"
    },
    {
      id: "sc2",
      control: "Falls from Height",
      sub: "Scaffolding assembly an dismantling",
      hazard: "Chemical Exposure",
      hazardColor: "text-[#5a6886]",
      category: "Administrative",
      reduction: 85,
      preWork: true,
      status: "Mandatory",
      statusColor: "bg-[#e11d48] text-white"
    },
    {
      id: "sc3",
      control: "Falls from Height",
      sub: "Scaffolding assembly an dismantling",
      hazard: "Low Visibility Trips",
      hazardColor: "text-[#5a6886]",
      category: "Workplace",
      reduction: 45,
      preWork: false,
      status: "Recommended",
      statusColor: "bg-[#132651] text-white"
    },
    {
      id: "sc4",
      control: "Falls from Height",
      sub: "Scaffolding assembly an dismantling",
      hazard: "Electrocution Risk",
      hazardColor: "text-[#dc2626]",
      category: "Behavioral",
      reduction: 45,
      preWork: true,
      status: "Mandatory",
      statusColor: "bg-[#e11d48] text-white"
    },
    {
      id: "sc5",
      control: "Falls from Height",
      sub: "Scaffolding assembly an dismantling",
      hazard: "Hearing Fatigue",
      hazardColor: "text-[#5a6886]",
      category: "Environment",
      reduction: 65,
      preWork: false,
      status: "Optional",
      statusColor: "bg-[#f1f5f9] text-[#5a6886] border border-[#e3e6ec]"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-[12px] w-full max-w-[1100px] shadow-2xl flex flex-col my-8 max-h-[90vh] overflow-hidden transition-all duration-300">
        <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4.5 shrink-0">
          <div>
            <h3 className="text-[20px] font-bold text-[#132651]">Suggested Control Measures</h3>
            <p className="text-[13px] text-[#5a6886] mt-1">Refining controls for Assessment ID: SEC-2024-009 (North Wing Facility Maintenance)</p>
          </div>
          <button
            onClick={() => setIsSuggestedControlsOpen(false)}
            className="text-[#95a0b6] hover:text-[#132651] hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
             <div className="bg-[#f8f9fc] rounded-[8px] border border-[#e3e6ec] p-4 flex items-center gap-4">
               <AlertTriangle className="size-6 text-[#5a6886]" />
               <div>
                  <p className="text-[12px] text-[#5a6886]">Identified Hazards</p>
                  <p className="text-[16px] font-bold text-[#132651]">12 Critical</p>
               </div>
             </div>
             <div className="bg-[#f8f9fc] rounded-[8px] border border-[#e3e6ec] p-4 flex items-center gap-4">
               <Shield className="size-6 text-[#5a6886]" />
               <div>
                  <p className="text-[12px] text-[#5a6886]">Existing Controls</p>
                  <p className="text-[16px] font-bold text-[#132651]">08 Active</p>
               </div>
             </div>
             <div className="bg-[#f8f9fc] rounded-[8px] border border-[#e3e6ec] p-4 flex items-center gap-4">
               <Lightbulb className="size-6 text-[#5a6886]" />
               <div>
                  <p className="text-[12px] text-[#5a6886]">New Suggestions</p>
                  <p className="text-[16px] font-bold text-[#132651]">15 Items</p>
               </div>
             </div>
          </div>

          <div className="border border-[#e3e6ec] rounded-[8px] overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[900px]">
                   <thead>
                      <tr className="bg-[#eef4ff] border-b border-[#e3e6ec]">
                         <th className="p-4 pl-6 w-12"><input type="checkbox" className="rounded border-[#c5c6cd]" /></th>
                         <th className="p-4 text-[12px] font-bold text-[#132651]">Suggested Control</th>
                         <th className="p-4 text-[12px] font-bold text-[#132651]">Related Hazard</th>
                         <th className="p-4 text-[12px] font-bold text-[#132651]">Category</th>
                         <th className="p-4 text-[12px] font-bold text-[#132651]">Risk Reduction</th>
                         <th className="p-4 text-[12px] font-bold text-[#132651] text-center">Required Pre-Work</th>
                         <th className="p-4 text-[12px] font-bold text-[#132651]">Status</th>
                         <th className="p-4 text-[12px] font-bold text-[#132651] text-center">Actions</th>
                      </tr>
                   </thead>
                   <tbody>
                      {dummySuggestions.map((item) => (
                         <tr key={item.id} className="border-b border-[#e3e6ec] hover:bg-[#f9fafc]">
                            <td className="p-4 pl-6"><input type="checkbox" className="rounded border-[#c5c6cd]" /></td>
                            <td className="p-4">
                               <p className="text-[13px] font-bold text-[#132651]">{item.control}</p>
                               <p className="text-[11px] text-[#5a6886] mt-0.5">{item.sub}</p>
                            </td>
                            <td className={`p-4 text-[13px] font-medium ${item.hazardColor}`}>{item.hazard}</td>
                            <td className="p-4 text-[13px] text-[#5a6886]">{item.category}</td>
                            <td className="p-4">
                               <div className="flex items-center gap-3">
                                 <div className="w-12 h-1 bg-[#e3e6ec] rounded-full overflow-hidden">
                                   <div className="h-full bg-[#132651] rounded-full" style={{ width: `${item.reduction}%` }}></div>
                                 </div>
                                 <span className="text-[12px] font-bold text-[#5a6886]">{item.reduction}%</span>
                               </div>
                            </td>
                            <td className="p-4 text-center">
                               {item.preWork ? (
                                 <CheckCircle className="size-5 text-[#e11d48] fill-[#e11d48] text-white mx-auto" strokeWidth={1.5} />
                               ) : (
                                 <Circle className="size-5 text-[#c5c6cd] mx-auto" />
                               )}
                            </td>
                            <td className="p-4">
                               <span className={`px-2.5 py-1 text-[11px] font-bold rounded-[4px] inline-block ${item.statusColor}`}>
                                 {item.status}
                               </span>
                            </td>
                            <td className="p-4 text-center">
                               <button className="text-[#10b981] hover:bg-[#ecfdf5] p-1.5 rounded transition-colors">
                                  <Edit2 className="size-4" />
                               </button>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        </div>

        <div className="flex items-center justify-start border-t border-[#e3e6ec] p-6 bg-white shrink-0 gap-3">
          <Button
            variant="outline"
            className="h-10 rounded-[6px] border-[#c5c6cd] bg-white px-6 text-[14px] font-bold text-[#132651] hover:bg-[#f3f5f8] shadow-none"
            onClick={() => setIsSuggestedControlsOpen(false)}
          >
            Previous Assessment
          </Button>
          <Button
            className="h-10 rounded-[6px] bg-[#132651] px-6 text-[14px] font-bold text-white hover:bg-[#0d1b3a] shadow-none"
            onClick={() => {
              setIsSuggestedControlsOpen(false);
              setIsApplySuggestedControlsOpen(true);
            }}
          >
            Apply Selected Controls
          </Button>
        </div>
      </div>
    </div>
  );
}
