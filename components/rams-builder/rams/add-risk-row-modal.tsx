import React from "react";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";

interface AddRiskRowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddRiskRowModal({ isOpen, onClose }: AddRiskRowModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/30 backdrop-blur-sm">
      <div className="bg-white rounded-[12px] w-[95vw] max-w-[1200px] h-[95vh] max-h-[900px] flex flex-col relative overflow-hidden border-[1.5px] border-[#e3e6ec]">
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#e3e6ec] shrink-0">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[20px] font-bold text-brand-primary">Add Risk Assessment Item</h2>
            <p className="text-[16px] text-brand-secondary">Define hazards and mitigation strategies for RAMS document generation.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 transition-colors text-brand-primary"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Main Content Split */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Left Form Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8 no-scrollbar">
            
            {/* Section: Activity & Hazard */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-brand-primary rounded-full" />
                <h3 className="text-[16px] font-bold text-brand-primary">Activity & Hazard</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">Activity / Task</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Working at Height"
                    className="h-[51px] px-4 py-3 border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] outline-none focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">Category</label>
                  <input 
                    type="text" 
                    placeholder="Physical Hazards"
                    className="h-[51px] px-4 py-3 border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label className="text-[11px] font-bold text-[#757780] tracking-[0.55px] uppercase">Hazard Description</label>
                <textarea 
                  placeholder="Describe the specific hazard and its potential impact..."
                  className="min-h-[100px] px-4 py-3 border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] outline-none focus:border-brand-primary resize-y"
                />
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <label className="text-[12px] font-bold text-brand-primary">Who Might be Harmed?</label>
                <div className="flex flex-wrap gap-2">
                  <button className="px-[17px] py-[5px] bg-[#dae2ff] border border-brand-primary text-brand-primary text-[12px] rounded-full">
                    Employees
                  </button>
                  <button className="px-[17px] py-[5px] border border-[#e3e6ec] text-brand-secondary text-[12px] rounded-full hover:bg-slate-50 transition-colors">
                    Contractors
                  </button>
                  <button className="px-[17px] py-[5px] border border-[#e3e6ec] text-brand-secondary text-[12px] rounded-full hover:bg-slate-50 transition-colors">
                    Public
                  </button>
                  <button className="px-[17px] py-[5px] border border-[#e3e6ec] text-brand-secondary text-[12px] rounded-full hover:bg-slate-50 transition-colors">
                    Visitors
                  </button>
                  <button className="px-[17px] py-[5px] border border-brand-primary border-dashed text-brand-primary text-[12px] rounded-full hover:bg-slate-50 transition-colors">
                    + Add Other
                  </button>
                </div>
              </div>
            </div>

            {/* Section: Existing Controls */}
            <div className="flex flex-col gap-4 border-t border-[#e3e6ec] pt-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-brand-primary rounded-full" />
                <h3 className="text-[16px] font-bold text-brand-primary">Existing Controls</h3>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-4 p-3 border border-transparent hover:border-[#e3e6ec] rounded-[4px] transition-colors">
                  <div className="w-5 h-5 rounded-[4px] border border-[#e3e6ec] bg-white shrink-0 mt-0.5 flex items-center justify-center cursor-pointer">
                    {/* Placeholder for checkbox logic */}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[14px] text-brand-primary leading-tight">Personal Protective Equipment (PPE)</span>
                    <span className="text-[12px] text-brand-secondary leading-tight">Standard site PPE including hard hats, hi-vis, and safety boots.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-3 border border-transparent hover:border-[#e3e6ec] rounded-[4px] transition-colors">
                  <div className="w-5 h-5 rounded-[4px] border border-[#e3e6ec] bg-white shrink-0 mt-0.5 flex items-center justify-center cursor-pointer" />
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[14px] text-brand-primary leading-tight">Exclusion Zones</span>
                    <span className="text-[12px] text-brand-secondary leading-tight">Physical barriers and signage to prevent unauthorized access.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label className="text-[11px] font-bold text-[#757780] tracking-[0.55px] uppercase">Custom Control Notes</label>
                <textarea 
                  placeholder="Add specific onsite controls..."
                  className="min-h-[80px] px-4 py-3 border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] outline-none focus:border-brand-primary resize-y"
                />
              </div>
            </div>

            {/* Section: Initial Risk */}
            <div className="flex flex-col gap-4 p-4 bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-[16px] font-bold text-brand-primary">Initial Risk Calculation</h3>
                </div>
                <div className="px-[17px] py-[5px] bg-white border border-[#c5c6d0] rounded-[6px]">
                  <span className="text-[16px] text-brand-primary">Score: 0</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">Likelihood (1-5)</label>
                  <select className="h-[51px] px-4 border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary outline-none focus:border-brand-primary bg-white appearance-none">
                    <option value="">Select....</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">Severity (1-5)</label>
                  <select className="h-[51px] px-4 border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary outline-none focus:border-brand-primary bg-white appearance-none">
                    <option value="">Select....</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section: Additional Controls */}
            <div className="flex flex-col gap-4 border-t border-[#e3e6ec] pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-brand-primary rounded-full" />
                  <h3 className="text-[16px] font-bold text-brand-primary">Additional Controls Required</h3>
                </div>
                <button className="flex items-center gap-1.5 text-[14px] font-bold text-brand-primary hover:underline">
                  <Plus className="size-4" />
                  Add Control
                </button>
              </div>

              <div className="flex items-center gap-4">
                <input 
                  type="text" 
                  placeholder="e.g. Mandatory fall arrest training for all workers...."
                  className="flex-1 h-[51px] px-4 border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            {/* Section: Residual Risk */}
            <div className="flex flex-col gap-4 p-4 bg-[#f3f5f8] border border-[#e3e6ec] rounded-[6px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-[16px] font-bold text-brand-primary">Residual Risk Calculation</h3>
                </div>
                <div className="px-[17px] py-[5px] bg-white border border-[#c5c6d0] rounded-[6px]">
                  <span className="text-[16px] text-brand-primary">Score: 0</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">Residual Likelihood (1-5)</label>
                  <select className="h-[51px] px-4 border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary outline-none focus:border-brand-primary bg-white appearance-none">
                    <option value="">Select....</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">Residual Severity (1-5)</label>
                  <select className="h-[51px] px-4 border-[1.5px] border-[#e3e6ec] rounded-[6px] text-[14px] text-brand-primary outline-none focus:border-brand-primary bg-white appearance-none">
                    <option value="">Select....</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="w-[320px] bg-[#f3f5f8] border-l border-[#e3e6ec] flex flex-col p-6 shrink-0 overflow-y-auto no-scrollbar gap-8">
            
            {/* Risk Score Summary */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[14px] font-bold text-brand-primary">Risk Score Summary</h4>
              <div className="flex gap-2">
                <div className="flex-1 bg-white border border-[#e3e6ec] rounded-[6px] p-2 flex flex-col items-center">
                  <span className="text-[12px] font-bold text-brand-secondary">Initial</span>
                  <span className="text-[20px] font-bold text-brand-primary">0</span>
                </div>
                <div className="flex-1 bg-white border border-[#e3e6ec] rounded-[6px] p-2 flex flex-col items-center">
                  <span className="text-[12px] font-bold text-brand-secondary">Residual</span>
                  <span className="text-[20px] font-bold text-brand-primary">0</span>
                </div>
              </div>
            </div>

            {/* 5x5 Matrix */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h4 className="text-[12px] font-bold text-[#757780]">5X5 Risk Matrix</h4>
                <span className="text-[12px] text-brand-secondary">Likelihood x Severity</span>
              </div>
              <div className="grid grid-cols-5 gap-1 grid-rows-5 w-full">
                
                {/* Row 5 (Top, Severity=5) */}
                <div className="aspect-square bg-[#ff6b6b] rounded-[4px] flex items-center justify-center text-white text-[12px]">5</div>
                <div className="aspect-square bg-[#ff6b6b] rounded-[4px] flex items-center justify-center text-white text-[12px]">10</div>
                <div className="aspect-square bg-[#ff4d4d] rounded-[4px] flex items-center justify-center text-white text-[12px]">15</div>
                <div className="aspect-square bg-[#d90429] rounded-[4px] flex items-center justify-center text-white text-[12px]">20</div>
                <div className="aspect-square bg-[#d90429] rounded-[4px] flex items-center justify-center text-white text-[12px]">25</div>

                {/* Row 4 (Severity=4) */}
                <div className="aspect-square bg-[#ffd93d] rounded-[4px] flex items-center justify-center text-[#191c1e] text-[12px]">4</div>
                <div className="aspect-square bg-[#ffb703] rounded-[4px] flex items-center justify-center text-white text-[12px]">8</div>
                <div className="aspect-square bg-[#ff6b6b] rounded-[4px] flex items-center justify-center text-white text-[12px]">12</div>
                <div className="aspect-square bg-[#ff4d4d] rounded-[4px] flex items-center justify-center text-white text-[12px]">16</div>
                <div className="aspect-square bg-[#d90429] rounded-[4px] flex items-center justify-center text-white text-[12px]">20</div>

                {/* Row 3 (Severity=3) */}
                <div className="aspect-square bg-[#fff8b0] rounded-[4px] flex items-center justify-center text-[#191c1e] text-[12px]">3</div>
                <div className="aspect-square bg-[#ffd93d] rounded-[4px] flex items-center justify-center text-[#191c1e] text-[12px]">6</div>
                <div className="aspect-square bg-[#ffb703] rounded-[4px] flex items-center justify-center text-[#191c1e] text-[12px]">9</div>
                <div className="aspect-square bg-[#ff6b6b] rounded-[4px] flex items-center justify-center text-white text-[12px]">12</div>
                <div className="aspect-square bg-[#ff4d4d] rounded-[4px] flex items-center justify-center text-white text-[12px]">15</div>

                {/* Row 2 (Severity=2) */}
                <div className="aspect-square bg-[#c3f2cb] rounded-[4px] flex items-center justify-center text-[#191c1e] text-[12px]">2</div>
                <div className="aspect-square bg-[#ffd93d] rounded-[4px] flex items-center justify-center text-[#191c1e] text-[12px]">4</div>
                <div className="aspect-square bg-[#ffd93d] rounded-[4px] flex items-center justify-center text-[#191c1e] text-[12px]">6</div>
                <div className="aspect-square bg-[#ffb703] rounded-[4px] flex items-center justify-center text-[#191c1e] text-[12px]">8</div>
                <div className="aspect-square bg-[#ff6b6b] rounded-[4px] flex items-center justify-center text-white text-[12px]">10</div>

                {/* Row 1 (Bottom, Severity=1) */}
                <div className="aspect-square bg-[#c3f2cb] rounded-[4px] flex items-center justify-center text-[#191c1e] text-[12px]">1</div>
                <div className="aspect-square bg-[#c3f2cb] rounded-[4px] flex items-center justify-center text-[#191c1e] text-[12px]">2</div>
                <div className="aspect-square bg-[#fff8b0] rounded-[4px] flex items-center justify-center text-[#191c1e] text-[12px]">3</div>
                <div className="aspect-square bg-[#ffd93d] rounded-[4px] flex items-center justify-center text-[#191c1e] text-[12px]">4</div>
                <div className="aspect-square bg-[#ff6b6b] rounded-[4px] flex items-center justify-center text-white text-[12px]">5</div>

              </div>
            </div>

          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-end gap-4 p-6 border-t border-[#e3e6ec] shrink-0 bg-white">
          <Button 
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-white font-bold text-[14px]"
            onClick={onClose}
          >
            Save Hazard
          </Button>
        </div>

      </div>
    </div>
  );
}
