import React from "react";
import { X, AlertTriangle, CheckCircle2, AlertCircle, FileText, Info, Upload, RotateCw, ZoomIn, ZoomOut, Maximize, Trash2, FileIcon, CloudUpload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface RiskMatrixModalProps {
  isRiskMatrixModalOpen: any;
  setIsRiskMatrixModalOpen: any;
}

export function RiskMatrixModal({ isRiskMatrixModalOpen, setIsRiskMatrixModalOpen }: RiskMatrixModalProps) {
  return (
    <>
      {isRiskMatrixModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
          <div className="bg-white rounded-[12px] w-full max-w-[900px] shadow-2xl flex flex-col my-8 max-h-[90vh] overflow-hidden transition-all duration-300">
             {/* Header */}
             <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4.5 shrink-0">
               <div className="flex items-center gap-2">
                 <FileText className="size-5 text-brand-primary" />
                 <h3 className="text-[18px] font-bold text-brand-primary">Inspection Checklist Preview</h3>
               </div>
               <button
                 onClick={() => setIsRiskMatrixModalOpen(false)}
                 className="text-[#95a0b6] hover:text-brand-primary hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
               >
                 <X className="size-5" />
               </button>
             </div>
             
             {/* Content */}
             <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8 bg-[#f9fafc]">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left: Dynamic Matrix */}
                  <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                     <div className="flex items-center justify-between mb-6">
                        <h4 className="text-[14px] font-bold text-[#132651]">Dynamic Risk Matrix</h4>
                        <div className="flex items-center gap-3 text-[11px] font-bold text-[#5a6886]">
                           <span className="flex items-center gap-1.5"><div className="size-3 bg-[#ecfdf5] rounded-sm border border-[#a7f3d0]"></div>Low</span>
                           <span className="flex items-center gap-1.5"><div className="size-3 bg-[#fefce8] rounded-sm border border-[#fef08a]"></div>Med</span>
                           <span className="flex items-center gap-1.5"><div className="size-3 bg-[#fff7ed] rounded-sm border border-[#fed7aa]"></div>High</span>
                           <span className="flex items-center gap-1.5"><div className="size-3 bg-[#9f1239] rounded-sm border border-[#9f1239]"></div>Crit</span>
                        </div>
                     </div>
                     <div className="flex">
                        <div className="flex flex-col justify-between pr-4 pb-4 items-end text-[10px] font-medium text-[#5a6886] shrink-0 h-[220px]">
                           <span className="text-center w-full transform -rotate-90 origin-left relative top-8 whitespace-nowrap">Likelihood (1-5)</span>
                           <span>5</span>
                           <span>4</span>
                           <span>3</span>
                           <span>2</span>
                           <span>1</span>
                        </div>
                        <div className="flex-1">
                           <div className="grid grid-cols-5 gap-1.5 h-[220px]">
                              {/* Row 5 */}
                              <div className="bg-[#fefce8] rounded flex items-center justify-center text-[#d97706] font-bold">5</div>
                              <div className="bg-[#fff7ed] rounded flex items-center justify-center text-[#ea580c] font-bold">10</div>
                              <div className="bg-[#ffe4e6] rounded flex items-center justify-center text-[#e11d48] font-bold">15</div>
                              <div className="bg-[#9f1239] rounded flex items-center justify-center text-white font-bold">20</div>
                              <div className="bg-[#9f1239] rounded flex items-center justify-center text-white font-bold relative">
                                 <div className="size-6 rounded-full border-2 border-white bg-transparent flex items-center justify-center text-[11px]">1</div>
                              </div>

                              {/* Row 4 */}
                              <div className="bg-[#ecfdf5] rounded flex items-center justify-center text-[#10b981] font-bold">4</div>
                              <div className="bg-[#fefce8] rounded flex items-center justify-center text-[#d97706] font-bold">8</div>
                              <div className="bg-[#fff7ed] rounded flex items-center justify-center text-[#ea580c] font-bold">12</div>
                              <div className="bg-[#ffe4e6] rounded flex items-center justify-center text-[#e11d48] font-bold relative">
                                 <div className="size-6 rounded-full bg-white text-[#132651] flex items-center justify-center text-[11px] font-bold border border-[#132651]">2</div>
                              </div>
                              <div className="bg-[#9f1239] rounded flex items-center justify-center text-white font-bold">20</div>

                              {/* Row 3 */}
                              <div className="bg-[#ecfdf5] rounded flex items-center justify-center text-[#10b981] font-bold">3</div>
                              <div className="bg-[#ecfdf5] rounded flex items-center justify-center text-[#10b981] font-bold">6</div>
                              <div className="bg-[#fefce8] rounded flex items-center justify-center text-[#d97706] font-bold">9</div>
                              <div className="bg-[#fff7ed] rounded flex items-center justify-center text-[#ea580c] font-bold">12</div>
                              <div className="bg-[#ffe4e6] rounded flex items-center justify-center text-[#e11d48] font-bold">15</div>

                              {/* Row 2 */}
                              <div className="bg-[#ecfdf5] rounded flex items-center justify-center text-[#10b981] font-bold">2</div>
                              <div className="bg-[#ecfdf5] rounded flex items-center justify-center text-[#10b981] font-bold">4</div>
                              <div className="bg-[#ecfdf5] rounded flex items-center justify-center text-[#10b981] font-bold">6</div>
                              <div className="bg-[#fefce8] rounded flex items-center justify-center text-[#d97706] font-bold">8</div>
                              <div className="bg-[#fff7ed] rounded flex items-center justify-center text-[#ea580c] font-bold">10</div>

                              {/* Row 1 */}
                              <div className="bg-[#ecfdf5] rounded flex items-center justify-center text-[#10b981] font-bold">1</div>
                              <div className="bg-[#ecfdf5] rounded flex items-center justify-center text-[#10b981] font-bold">2</div>
                              <div className="bg-[#ecfdf5] rounded flex items-center justify-center text-[#10b981] font-bold">3</div>
                              <div className="bg-[#ecfdf5] rounded flex items-center justify-center text-[#10b981] font-bold">4</div>
                              <div className="bg-[#fefce8] rounded flex items-center justify-center text-[#d97706] font-bold">5</div>
                           </div>
                           <div className="grid grid-cols-5 gap-1.5 mt-3 text-center text-[10px] font-medium text-[#5a6886]">
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                              <span>4</span>
                              <span>5</span>
                           </div>
                        </div>
                     </div>
                     <div className="text-center mt-2 text-[10px] font-medium text-[#5a6886]">
                        Severity (1-5)
                     </div>
                  </div>

                  {/* Right: Selected Hazard Detail */}
                  <div className="flex flex-col gap-4">
                     <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                        <div className="flex items-center justify-between mb-4">
                           <h4 className="text-[14px] font-bold text-[#132651]">Selected Hazard Detail</h4>
                           <span className="px-2.5 py-0.5 rounded-[4px] bg-[#fff1f2] border border-[#fecdd3] text-[#e11d48] text-[11px] font-bold">Uncontrolled</span>
                        </div>
                        <div className="space-y-4">
                           <div>
                              <p className="text-[11px] text-[#5a6886] mb-1">Hazard Name</p>
                              <p className="text-[14px] font-bold text-[#132651]">Falls from Height during Scaffold Assembly</p>
                           </div>
                           
                           <div className="grid grid-cols-2 gap-4">
                              <div className="border border-[#e3e6ec] bg-[#f8f9fc] p-3 rounded-[8px]">
                                 <p className="text-[11px] text-[#5a6886] mb-1">Initial Score</p>
                                 <p className="text-[20px] font-bold text-[#e11d48]">25 (E)</p>
                              </div>
                              <div className="border border-[#132651] bg-[#132651] p-3 rounded-[8px]">
                                 <p className="text-[11px] text-[#b4c5fa] mb-1">Residual Score</p>
                                 <p className="text-[20px] font-bold text-white">5 (L)</p>
                              </div>
                           </div>

                           <div>
                              <p className="text-[11px] text-[#5a6886] mb-2">Key Mitigation Rules</p>
                              <div className="flex flex-wrap gap-2">
                                 <span className="px-2.5 py-1 rounded-[4px] border border-[#a7f3d0] text-[#059669] text-[11px] font-bold bg-[#ecfdf5] flex items-center gap-1.5"><CheckCircle2 className="size-3" /> Harness Inspection</span>
                                 <span className="px-2.5 py-1 rounded-[4px] border border-[#a7f3d0] text-[#059669] text-[11px] font-bold bg-[#ecfdf5] flex items-center gap-1.5"><CheckCircle2 className="size-3" /> TBT Conducted</span>
                                 <span className="px-2.5 py-1 rounded-[4px] border border-[#fed7aa] text-[#d97706] text-[11px] font-bold bg-[#fff7ed] flex items-center gap-1.5"><AlertCircle className="size-3" /> Permit to Work</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="bg-[#f4f6fa] border border-[#e3e6ec] rounded-[12px] p-5">
                        <p className="text-[12px] leading-relaxed text-[#5a6886]">
                           "Primary risk involves falls exceeding 2 meters. Residual risk calculation assumes full compliance with SG4:22 guidelines and collective fall protection implementation."
                        </p>
                     </div>
                  </div>
               </div>

               {/* Table */}
               <div className="bg-white border border-[#e3e6ec] rounded-[12px] overflow-x-auto shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                     <thead>
                        <tr className="bg-[#eef4ff] border-b border-[#e3e6ec]">
                           <th className="p-4 text-[12px] font-bold text-[#132651]">ID</th>
                           <th className="p-4 text-[12px] font-bold text-[#132651]">Hazard Description</th>
                           <th className="p-4 text-[12px] font-bold text-[#132651] text-center">Likelihood</th>
                           <th className="p-4 text-[12px] font-bold text-[#132651] text-center">Severity</th>
                           <th className="p-4 text-[12px] font-bold text-[#132651]">Risk Rating</th>
                           <th className="p-4 text-[12px] font-bold text-[#132651] text-center">Status</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr className="border-b border-[#e3e6ec]">
                           <td className="p-4 text-[13px] font-bold text-[#132651]">Workshop Inspection</td>
                           <td className="p-4 text-[13px] text-[#5a6886]">24 May 2026</td>
                           <td className="p-4 text-[13px] text-[#5a6886] text-center">5</td>
                           <td className="p-4 text-[13px] text-[#5a6886] text-center">5</td>
                           <td className="p-4 text-[13px] text-[#5a6886]">Sarah Mitchell</td>
                           <td className="p-4 text-center"><AlertTriangle className="size-4 text-[#e11d48] mx-auto" /></td>
                        </tr>
                        <tr className="border-b border-[#e3e6ec]">
                           <td className="p-4 text-[13px] font-bold text-[#132651]">Teams Consultation</td>
                           <td className="p-4 text-[13px] text-[#5a6886]">24 May 2026</td>
                           <td className="p-4 text-[13px] text-[#5a6886] text-center">4</td>
                           <td className="p-4 text-[13px] text-[#5a6886] text-center">3</td>
                           <td className="p-4 text-[13px] text-[#5a6886]">Sarah Mitchell</td>
                           <td className="p-4 text-center"><AlertTriangle className="size-4 text-[#f97316] mx-auto" /></td>
                        </tr>
                        <tr>
                           <td className="p-4 text-[13px] font-bold text-[#132651]">Follow-up Call</td>
                           <td className="p-4 text-[13px] text-[#5a6886]">24 May 2026</td>
                           <td className="p-4 text-[13px] text-[#5a6886] text-center">2</td>
                           <td className="p-4 text-[13px] text-[#5a6886] text-center">2</td>
                           <td className="p-4 text-[13px] text-[#5a6886]">Sarah Mitchell</td>
                           <td className="p-4 text-center"><CheckCircle2 className="size-4 text-[#10b981] mx-auto" /></td>
                        </tr>
                     </tbody>
                  </table>
               </div>
             </div>
             
             {/* Footer Buttons */}
             <div className="p-6 border-t border-[#e3e6ec] flex items-center gap-4 bg-white shrink-0">
               <Button
                 variant="outline"
                 onClick={() => setIsRiskMatrixModalOpen(false)}
                 className="h-10 rounded-[6px] border-[#132651] text-[#132651] font-bold text-[14px]"
               >
                 Back to Assessment
               </Button>
               <Button
                 className="h-10 rounded-[6px] bg-[#132651] text-white font-bold text-[14px]"
               >
                 View Control Measures
               </Button>
             </div>
          </div>
        </div>
      )}
    </>
  );
}
