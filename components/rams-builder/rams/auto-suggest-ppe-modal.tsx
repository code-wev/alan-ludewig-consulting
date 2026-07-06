import React from "react";
import { X, Info, Search, ChevronDown, CheckCircle2, Eye, ShieldAlert, Pencil, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface AutoSuggestPPEModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewPPE?: () => void;
}

export function AutoSuggestPPEModal({ isOpen, onClose, onViewPPE }: AutoSuggestPPEModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[900px] max-w-full bg-white rounded-[12px] shadow-lg border border-[#e3e6ec] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-[24px] font-bold text-brand-primary">Auto-Suggest PPE</h2>
            <p className="text-[14px] text-brand-secondary mt-1">
              Review suggested personal protective equipment based on your selected work type, arrangements, methodology and risk assessment.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-brand-secondary hover:text-brand-primary transition-colors mt-1"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 flex flex-col gap-6 overflow-y-auto max-h-[80vh] no-scrollbar">
          
          {/* PPE Suggestion Context */}
          <div className="flex flex-col rounded-[12px] bg-[#eef2ff] border border-[#d6e0ff] p-5 shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <Info className="size-5 text-[#1e3a8a]" />
              <h3 className="text-[16px] font-bold text-[#1e3a8a]">PPE Suggestion Context</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-between text-[13px] text-[#1e3a8a]/80">
                <span>Work Type</span>
                <span className="font-bold text-[#1e3a8a]">Steel Framework</span>
              </div>
              <div className="flex items-center justify-between text-[13px] text-[#1e3a8a]/80">
                <span>Associated Permit</span>
                <span className="font-bold text-[#1e3a8a]">Permit to Work</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <span className="text-[12px] text-[#1e3a8a]/80">Related Activities</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-[#c7d2fe] rounded-[4px] text-[12px] text-[#1e3a8a]">Working at Height</span>
                <span className="px-3 py-1 bg-white border border-[#c7d2fe] rounded-[4px] text-[12px] text-[#1e3a8a]">Manual Handling</span>
                <span className="px-3 py-1 bg-white border border-[#c7d2fe] rounded-[4px] text-[12px] text-[#1e3a8a]">Electrical Works</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pb-4 border-b border-[#c7d2fe]">
              <span className="text-[12px] text-[#1e3a8a]/80">Key Hazards Identified</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444]"></div>
                <span className="text-[14px] text-[#1e3a8a]">Falling Objects, Sharp Edges, Dust, Noise</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2 text-[#1e3a8a]/80">
                <CheckCircle2 className="size-4" />
                <span className="text-[12px]">Suggestions derived from Site Rule AI Analysis</span>
              </div>
              <span className="text-[12px] text-[#1e3a8a]/80">
                Existing PPE Items: <strong className="text-[#1e3a8a]">2</strong>
              </span>
            </div>
          </div>

          {/* Table Container */}
          <div className="flex flex-col rounded-[12px] border border-[#e3e6ec] bg-white overflow-hidden shrink-0">
            {/* Table Controls */}
            <div className="flex items-center justify-between p-4 border-b border-[#e3e6ec]">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative flex items-center cursor-pointer">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="h-[18px] w-[18px] rounded-[4px] border-[1.5px] border-[#1e293b] bg-[#1e293b] flex items-center justify-center transition-colors">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-100">
                        <path d="M3.5 7.5L0.5 4.5L1.91421 3.08579L3.5 4.67157L8.08579 0.0857864L9.5 1.5L3.5 7.5Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[14px] text-brand-primary">Select All</span>
                </label>
                <span className="text-[14px] text-brand-secondary cursor-pointer hover:text-brand-primary">Deselect All</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Search className="size-4 text-[#a3acba]" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search suggested PPE..."
                    className="h-[38px] w-[220px] rounded-[6px] border-[1.5px] border-[#e3e6ec] pl-9 pr-4 text-[13px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary bg-white"
                  />
                </div>
                <div className="relative">
                  <select className="h-[38px] w-[160px] rounded-[6px] border-[1.5px] border-[#e3e6ec] pl-4 pr-8 text-[13px] outline-none text-brand-primary focus:border-brand-primary appearance-none bg-white">
                    <option>All Suggestions</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
                </div>
              </div>
            </div>

            {/* HTML Table Implementation */}
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="bg-[#dbeafe] text-[13px] font-bold text-brand-primary">
                  <tr>
                    <th className="py-4 pl-4 pr-2 w-[40px]">
                      <div className="h-[18px] w-[18px] rounded-[4px] border-[1.5px] border-[#c4cce0] bg-white"></div>
                    </th>
                    <th className="p-4 w-[25%] font-bold">PPE Type</th>
                    <th className="p-4 w-[25%] font-bold">Reason/Hazard</th>
                    <th className="p-4 w-[10%] font-bold">Mandatory</th>
                    <th className="p-4 w-[15%] font-bold">Styp</th>
                    <th className="p-4 w-[120px] font-bold">Status</th>
                    <th className="py-4 pr-4 pl-2 w-[120px] font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e3e6ec] bg-white">
                  
                  {/* Row 1 */}
                  <tr>
                    <td className="py-4 pl-4 pr-2 align-middle">
                      <div className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" defaultChecked />
                        <div className="h-[18px] w-[18px] rounded-[4px] border-[1.5px] border-[#c4cce0] bg-white peer-checked:bg-[#1e293b] peer-checked:border-[#1e293b] flex items-center justify-center transition-colors">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 peer-checked:opacity-100">
                            <path d="M3.5 7.5L0.5 4.5L1.91421 3.08579L3.5 4.67157L8.08579 0.0857864L9.5 1.5L3.5 7.5Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-9 rounded-[6px] border border-[#e3e6ec] bg-white shrink-0">
                          <Eye className="size-5 text-brand-primary" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[13px] font-bold text-[#1e293b]">Impact Resistant Goggles</span>
                          <span className="text-[12px] text-[#64748b]">Eye Protection</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="text-[13px] text-[#64748b] leading-tight pr-4">
                        Metal shards during framework assembly
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <Switch />
                    </td>
                    <td className="p-4 align-middle">
                      <div className="text-[13px] text-[#64748b]">
                        2.1 Assembly
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center justify-center h-[26px] px-3 rounded-[4px] bg-[#1e293b] text-white text-[12px] w-[110px]">
                        Recommended
                      </span>
                    </td>
                    <td className="py-4 pr-4 pl-2 align-middle">
                      <div className="flex items-center gap-3">
                        <button onClick={onViewPPE} className="text-[#2563eb] hover:text-[#1d4ed8]"><Eye className="size-4" /></button>
                        <button className="text-[#22c55e] hover:text-[#16a34a]"><Pencil className="size-4" /></button>
                        <button className="text-[#0d1b2a] hover:text-black"><Plus className="size-5 font-bold stroke-3" /></button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td className="py-4 pl-4 pr-2 align-middle">
                      <div className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="h-[18px] w-[18px] rounded-[4px] border-[1.5px] border-[#c4cce0] bg-white peer-checked:bg-[#1e293b] peer-checked:border-[#1e293b] flex items-center justify-center transition-colors">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 peer-checked:opacity-100">
                            <path d="M3.5 7.5L0.5 4.5L1.91421 3.08579L3.5 4.67157L8.08579 0.0857864L9.5 1.5L3.5 7.5Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-9 rounded-[6px] border border-[#e3e6ec] bg-white shrink-0">
                          <Eye className="size-5 text-brand-primary" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[13px] font-bold text-[#1e293b]">Impact Resistant Goggles</span>
                          <span className="text-[12px] text-[#64748b]">Eye Protection</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="text-[13px] text-[#64748b] leading-tight pr-4">
                        Metal shards during framework assembly
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <Switch />
                    </td>
                    <td className="p-4 align-middle">
                      <div className="text-[13px] text-[#64748b]">
                        1.4 Material Handling
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center justify-center h-[26px] px-3 rounded-[4px] bg-[#10b981] text-white text-[12px] w-[110px]">
                        Completed
                      </span>
                    </td>
                    <td className="py-4 pr-4 pl-2 align-middle">
                      <div className="flex items-center gap-3">
                        <button onClick={onViewPPE} className="text-[#2563eb] hover:text-[#1d4ed8]"><Eye className="size-4" /></button>
                        <button className="text-[#22c55e] hover:text-[#16a34a]"><Pencil className="size-4" /></button>
                        <button className="text-[#0d1b2a] hover:text-black"><Plus className="size-5 font-bold stroke-3" /></button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr>
                    <td className="py-4 pl-4 pr-2 align-middle">
                      <div className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" defaultChecked />
                        <div className="h-[18px] w-[18px] rounded-[4px] border-[1.5px] border-[#c4cce0] bg-white peer-checked:bg-[#1e293b] peer-checked:border-[#1e293b] flex items-center justify-center transition-colors">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 peer-checked:opacity-100">
                            <path d="M3.5 7.5L0.5 4.5L1.91421 3.08579L3.5 4.67157L8.08579 0.0857864L9.5 1.5L3.5 7.5Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-9 rounded-[6px] border border-[#e3e6ec] bg-white shrink-0">
                          <Eye className="size-5 text-brand-primary" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[13px] font-bold text-[#1e293b]">Impact Resistant Goggles</span>
                          <span className="text-[12px] text-[#64748b]">Eye Protection</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="text-[13px] text-[#64748b] leading-tight pr-4">
                        Metal shards during framework assembly
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" defaultChecked />
                        <div className="h-[18px] w-[18px] rounded-[4px] border-[1.5px] border-[#1e293b] bg-[#1e293b] flex items-center justify-center transition-colors">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-100">
                            <path d="M3.5 7.5L0.5 4.5L1.91421 3.08579L3.5 4.67157L8.08579 0.0857864L9.5 1.5L3.5 7.5Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="text-[13px] text-[#64748b] leading-tight">
                        General Site Rule
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center justify-center h-[26px] px-3 rounded-[4px] bg-[#1e293b] text-white text-[12px] w-[110px]">
                        Recommended
                      </span>
                    </td>
                    <td className="py-4 pr-4 pl-2 align-middle">
                      <div className="flex items-center gap-3">
                        <button onClick={onViewPPE} className="text-[#2563eb] hover:text-[#1d4ed8]"><Eye className="size-4" /></button>
                        <button className="text-[#22c55e] hover:text-[#16a34a]"><Pencil className="size-4" /></button>
                        <button className="text-[#0d1b2a] hover:text-black"><Plus className="size-5 font-bold stroke-3" /></button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr>
                    <td className="py-4 pl-4 pr-2 align-middle">
                      <div className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="h-[18px] w-[18px] rounded-[4px] border-[1.5px] border-[#c4cce0] bg-white peer-checked:bg-[#1e293b] peer-checked:border-[#1e293b] flex items-center justify-center transition-colors">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 peer-checked:opacity-100">
                            <path d="M3.5 7.5L0.5 4.5L1.91421 3.08579L3.5 4.67157L8.08579 0.0857864L9.5 1.5L3.5 7.5Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-9 rounded-[6px] border border-[#e3e6ec] bg-white shrink-0">
                          <Eye className="size-5 text-brand-primary" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[13px] font-bold text-[#1e293b]">Impact Resistant Goggles</span>
                          <span className="text-[12px] text-[#64748b]">Eye Protection</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="text-[13px] text-[#64748b] leading-tight pr-4">
                        Metal shards during framework assembly
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <Switch />
                    </td>
                    <td className="p-4 align-middle">
                      <div className="text-[13px] text-[#64748b]">
                        All Steps
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center justify-center h-[26px] px-3 rounded-[4px] bg-[#1e293b] text-white text-[12px] w-[110px]">
                        Recommended
                      </span>
                    </td>
                    <td className="py-4 pr-4 pl-2 align-middle">
                      <div className="flex items-center gap-3">
                        <button onClick={onViewPPE} className="text-[#2563eb] hover:text-[#1d4ed8]"><Eye className="size-4" /></button>
                        <button className="text-[#22c55e] hover:text-[#16a34a]"><Pencil className="size-4" /></button>
                        <button className="text-[#0d1b2a] hover:text-black"><Plus className="size-5 font-bold stroke-3" /></button>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_300px] gap-6 shrink-0">
            
            {/* Compliance Disclaimer */}
            <div className="flex gap-4 rounded-[12px] border border-[#e3e6ec] bg-white p-5">
              <div className="flex items-center justify-center size-10 rounded-[8px] bg-[#f8fafc] text-brand-primary border border-[#e3e6ec] shrink-0">
                <ShieldAlert className="size-5" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[14px] font-bold text-brand-primary">Compliance Disclaimer</h4>
                <p className="text-[13px] text-brand-secondary leading-relaxed">
                  Suggestions are based on typical industry risks associated with your project inputs. Final responsibility for PPE selection lies with the Site Supervisor and Principal Contractor. Ensure all PPE is CE/UKCA marked and fits correctly.
                </p>
              </div>
            </div>

            {/* Selection Summary */}
            <div className="rounded-[12px] bg-[#0d1b2a] p-5 flex flex-col justify-between">
              <h4 className="text-[14px] font-bold text-white mb-2">Selection Summary</h4>
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center justify-between text-[13px] text-white/80">
                  <span>Suggested Items</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between text-[13px] text-white/80">
                  <span>Already Added</span>
                  <span className="font-bold text-white">2</span>
                </div>
                <div className="flex items-center justify-between text-[13px] text-white/80">
                  <span>Selected to Add</span>
                  <span className="font-bold text-white">4</span>
                </div>
              </div>
              <div className="pt-3 border-t border-white/20 flex items-center justify-between text-[14px] font-bold text-white">
                <span>Total Mandatory</span>
                <span>4</span>
              </div>
            </div>

          </div>

          {/* Footer actions */}
          <div className="flex items-center gap-4 mt-2">
            <Button variant="outline" onClick={onClose} className="h-[42px] px-6 rounded-[6px] border-[#e3e6ec] bg-white text-[14px] font-bold text-brand-primary hover:bg-gray-50">
              Save Draft
            </Button>
            <Button className="h-[42px] px-6 rounded-[6px] bg-[#0d1b2a] text-[14px] font-bold text-white hover:bg-[#1e3a8a]">
              Add Selected PPE
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
