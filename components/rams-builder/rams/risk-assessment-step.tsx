import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Info, Grid, Download, Plus, Pencil, Trash2, Lightbulb, BarChart3, Sparkles, CheckCircle2
} from "lucide-react";
import { AddRiskRowModal } from "./add-risk-row-modal";
import { DeleteRiskRowModal } from "./delete-risk-row-modal";

interface RiskAssessmentStepProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function RiskAssessmentStep({ onPrevious, onNext }: RiskAssessmentStepProps) {
  const [isAddRowModalOpen, setIsAddRowModalOpen] = useState(false);
  const [isDeleteRowModalOpen, setIsDeleteRowModalOpen] = useState(false);

  const quickTemplates = [
    "Working at Height", "Manual Handling", "Electrical", "Plant",
    "Slips & Falls", "Excavation", "Dust", "COSHH",
    "Public", "Lifting"
  ];

  const riskRows = [
    {
      hazard: "Working at Height - Fall from height",
      persons: "Operatives",
      initialControls: "Edge protection, harnesses",
      initialL: 4,
      initialS: 5,
      initialR: 20,
      initialRColor: "bg-[#dc2626] text-white", // Red
      additionalControls: "Daily inspections, training certs checked",
      resL: 2,
      resS: 5,
      resR: 10,
      resRColor: "bg-[#f97316] text-white", // Orange
      responsible: "Site Manager"
    },
    {
      hazard: "Plant Operation - Collision",
      persons: "Operatives, Public",
      initialControls: "Banksman, segregated routes",
      initialL: 4,
      initialS: 4,
      initialR: 16,
      initialRColor: "bg-[#f97316] text-white", // Orange
      additionalControls: "Flashing beacons, exclusion zones",
      resL: 2,
      resS: 4,
      resR: 8,
      resRColor: "bg-[#facc15] text-[#132651]", // Yellow
      responsible: "Foreman"
    },
    {
      hazard: "Manual Handling - Musculoskeletal injury",
      persons: "Operatives",
      initialControls: "Team lift, trolleys, training",
      initialL: 5,
      initialS: 5,
      initialR: 9,
      initialRColor: "bg-[#facc15] text-[#132651]", // Yellow (Actually 25, but matching design context '9' for visual accuracy)
      additionalControls: "Use mechanical aids; stretch breaks",
      resL: 2,
      resS: 2,
      resR: 6,
      resRColor: "bg-[#22c55e] text-white", // Green
      responsible: "Foreman"
    }
  ];

  return (
    <div className="flex flex-col w-full text-brand-primary gap-[24px]">
      
      {/* Info Box */}
      <div className="flex items-start gap-4 p-4 rounded-[8px] bg-[#e4ebfe] border border-[#adc6ff80]">
        <Info className="size-[20px] text-brand-primary shrink-0 mt-0.5" />
        <p className="text-[14px] text-brand-secondary leading-[1.6]">
          Hazards and suggested control measures are generated from selected activities, plant/equipment, permits and approved RAMS content library.
        </p>
      </div>

      {/* Grid Content: Matrix and Templates */}
      <div className="grid grid-cols-12 gap-6 items-start">
        
        {/* Risk Matrix Card (Left) */}
        <div className="col-span-12 xl:col-span-8 flex flex-col gap-6 p-6 bg-white border border-[#c5c6d0] rounded-[8px] shadow-sm">
          
          <div className="flex items-center gap-2">
            <Grid className="size-5 text-brand-primary" />
            <h3 className="text-[16px] font-bold text-brand-primary">Risk Matrix (5×5)</h3>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* The Matrix Grid */}
            <div className="flex items-stretch shrink-0">
              {/* Y-Axis Label */}
              <div className="flex flex-col justify-center pr-4">
                <span className="text-[12px] text-brand-secondary -rotate-90 whitespace-nowrap">
                  Severity (1-5)
                </span>
              </div>
              
              <div className="flex flex-col gap-2">
                {/* 5x5 Blocks */}
                <div className="grid grid-cols-5 gap-1 w-[280px] sm:w-[320px]">
                  {/* Col 1 */}
                  <div className="flex flex-col gap-1">
                    <div className="h-[40px] bg-[#bbf7d0] rounded-[2px]" />
                    <div className="h-[40px] bg-[#bbf7d0] rounded-[2px]" />
                    <div className="h-[40px] bg-[#dcfce7] rounded-[2px]" />
                    <div className="h-[40px] bg-[#dcfce7] rounded-[2px]" />
                    <div className="h-[40px] bg-[#dcfce7] rounded-[2px]" />
                  </div>
                  {/* Col 2 */}
                  <div className="flex flex-col gap-1">
                    <div className="h-[40px] bg-[#86efac] rounded-[2px]" />
                    <div className="h-[40px] bg-[#86efac] rounded-[2px]" />
                    <div className="h-[40px] bg-[#bbf7d0] rounded-[2px]" />
                    <div className="h-[40px] bg-[#dcfce7] rounded-[2px]" />
                    <div className="h-[40px] bg-[#dcfce7] rounded-[2px]" />
                  </div>
                  {/* Col 3 */}
                  <div className="flex flex-col gap-1">
                    <div className="h-[40px] bg-[#fef08a] rounded-[2px]" />
                    <div className="h-[40px] bg-[#fef08a] rounded-[2px]" />
                    <div className="h-[40px] bg-[#fef9c3] rounded-[2px]" />
                    <div className="h-[40px] bg-[#bbf7d0] rounded-[2px]" />
                    <div className="h-[40px] bg-[#dcfce7] rounded-[2px]" />
                  </div>
                  {/* Col 4 */}
                  <div className="flex flex-col gap-1">
                    <div className="h-[40px] bg-[#fdba74] rounded-[2px]" />
                    <div className="h-[40px] bg-[#fdba74] rounded-[2px]" />
                    <div className="h-[40px] bg-[#fed7aa] rounded-[2px]" />
                    <div className="h-[40px] bg-[#fef08a] rounded-[2px]" />
                    <div className="h-[40px] bg-[#bbf7d0] rounded-[2px]" />
                  </div>
                  {/* Col 5 */}
                  <div className="flex flex-col gap-1">
                    <div className="h-[40px] bg-[#f87171] rounded-[2px]" />
                    <div className="h-[40px] bg-[#f87171] rounded-[2px]" />
                    <div className="h-[40px] bg-[#fb923c] rounded-[2px]" />
                    <div className="h-[40px] bg-[#fdba74] rounded-[2px]" />
                    <div className="h-[40px] bg-[#fef08a] rounded-[2px]" />
                  </div>
                </div>
                
                {/* X-Axis Numbers */}
                <div className="flex items-center justify-between px-6 w-[280px] sm:w-[320px]">
                  <span className="text-[10px] font-bold text-brand-secondary">1</span>
                  <span className="text-[10px] font-bold text-brand-secondary">2</span>
                  <span className="text-[10px] font-bold text-brand-secondary">3</span>
                  <span className="text-[10px] font-bold text-brand-secondary">4</span>
                  <span className="text-[10px] font-bold text-brand-secondary">5</span>
                </div>
                
                {/* X-Axis Label */}
                <div className="flex justify-center w-[280px] sm:w-[320px]">
                  <span className="text-[12px] text-brand-secondary">Likelihood (1-5)</span>
                </div>
              </div>
            </div>

            {/* Risk Legend */}
            <div className="flex flex-col justify-between h-full py-2 gap-4 md:pl-8 md:border-l border-[#f1f5f9]">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#22c55e] shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-brand-primary">1-4 Low Risk</span>
                  <span className="text-[14px] text-brand-secondary">Acceptable – monitor and review controls.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#facc15] shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-brand-primary">5-9 Medium Risk</span>
                  <span className="text-[14px] text-brand-secondary">Manage – implement controls to reduce risk.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#f97316] shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-brand-primary">10-16 High Risk</span>
                  <span className="text-[14px] text-brand-secondary">Action required – additional controls needed.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#dc2626] shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold text-brand-primary">17-25 Very High Risk</span>
                  <span className="text-[14px] text-brand-secondary">Stop work – immediate action required.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Templates (Right) */}
        <div className="col-span-12 xl:col-span-4 flex flex-col gap-4 p-6 bg-white border border-[#e3e6ec] rounded-[8px] h-full">
          <h3 className="text-[16px] font-bold text-brand-primary">Quick Templates</h3>
          <div className="flex flex-wrap gap-2">
            {quickTemplates.map((template, idx) => (
              <button 
                key={idx}
                className="px-3 py-1.5 border border-[#e3e6ec] rounded-[12px] text-[12px] text-brand-secondary hover:bg-slate-50 transition-colors"
              >
                {template}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Risk Register Table */}
      <div className="flex flex-col bg-white border border-[#d9e1ee] rounded-[8px] shadow-sm overflow-hidden">
        
        {/* Table Header Row */}
        <div className="flex items-center justify-between p-4 bg-[#f8fafc80] border-b border-[#d9e1ee]">
          <h3 className="text-[16px] font-bold text-brand-primary">Risk Assessment Register</h3>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="h-[34px] text-[12px] font-bold text-brand-primary border-brand-primary">
              <Download className="size-4 mr-2" />
              Export CSV
            </Button>
            <Button 
              className="h-[34px] text-[12px] font-bold bg-brand-primary text-white"
              onClick={() => setIsAddRowModalOpen(true)}
            >
              <Plus className="size-4 mr-2" />
              Add New Row
            </Button>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[1200px]">
            <thead>
              <tr className="border-b border-[#d9e1ee] bg-[#f8fafc80]">
                <th className="py-3 px-4 text-[13px] font-bold text-brand-primary border-r border-[#d9e1ee]">Hazard</th>
                <th className="py-3 px-4 text-[13px] font-bold text-brand-primary border-r border-[#d9e1ee]">Persons at Risk</th>
                <th className="py-3 px-4 text-[13px] font-bold text-brand-primary border-r border-[#d9e1ee]">Current Controls</th>
                <th className="py-3 px-2 text-[13px] font-bold text-brand-primary w-[50px] text-center border-r border-[#d9e1ee]">L</th>
                <th className="py-3 px-2 text-[13px] font-bold text-brand-primary w-[50px] text-center border-r border-[#d9e1ee]">S</th>
                <th className="py-3 px-2 text-[13px] font-bold text-brand-primary w-[60px] text-center border-r border-[#d9e1ee]">R</th>
                <th className="py-3 px-4 text-[13px] font-bold text-brand-primary border-r border-[#d9e1ee]">Additional Controls</th>
                <th className="py-3 px-2 text-[13px] font-bold text-brand-primary w-[50px] text-center border-r border-[#d9e1ee]">L</th>
                <th className="py-3 px-2 text-[13px] font-bold text-brand-primary w-[50px] text-center border-r border-[#d9e1ee]">S</th>
                <th className="py-3 px-2 text-[13px] font-bold text-brand-primary w-[60px] text-center border-r border-[#d9e1ee]">R</th>
                <th className="py-3 px-4 text-[13px] font-bold text-brand-primary border-r border-[#d9e1ee]">Responsible</th>
                <th className="py-3 px-4 text-[13px] font-bold text-brand-primary w-[80px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {riskRows.map((row, i) => (
                <tr key={i} className="border-b border-[#e3e6ec] hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-[14px] text-brand-secondary border-r border-[#e3e6ec] align-top">{row.hazard}</td>
                  <td className="py-4 px-4 text-[14px] text-brand-secondary border-r border-[#e3e6ec] align-top">{row.persons}</td>
                  <td className="py-4 px-4 text-[14px] text-brand-secondary border-r border-[#e3e6ec] align-top">{row.initialControls}</td>
                  <td className="py-4 px-2 text-[14px] text-brand-secondary text-center border-r border-[#e3e6ec] align-top">{row.initialL}</td>
                  <td className="py-4 px-2 text-[14px] text-brand-secondary text-center border-r border-[#e3e6ec] align-top">{row.initialS}</td>
                  <td className="py-4 px-2 border-r border-[#e3e6ec] align-top">
                    <div className="flex justify-center">
                      <div className={`w-[32px] h-[32px] rounded-[4px] flex items-center justify-center text-[12px] font-bold ${row.initialRColor}`}>
                        {row.initialR}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[14px] text-brand-secondary border-r border-[#e3e6ec] align-top">{row.additionalControls}</td>
                  <td className="py-4 px-2 text-[14px] text-brand-secondary text-center border-r border-[#e3e6ec] align-top">{row.resL}</td>
                  <td className="py-4 px-2 text-[14px] text-brand-secondary text-center border-r border-[#e3e6ec] align-top">{row.resS}</td>
                  <td className="py-4 px-2 border-r border-[#e3e6ec] align-top">
                    <div className="flex justify-center">
                      <div className={`w-[32px] h-[32px] rounded-[4px] flex items-center justify-center text-[12px] font-bold ${row.resRColor}`}>
                        {row.resR}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[14px] text-brand-secondary border-r border-[#e3e6ec] align-top">{row.responsible}</td>
                  <td className="py-4 px-4 align-top">
                    <div className="flex items-center gap-2">
                      <button className="text-brand-secondary hover:text-brand-primary transition-colors">
                        <Pencil className="size-4" />
                      </button>
                      <button 
                        className="text-brand-secondary hover:text-red-500 transition-colors"
                        onClick={() => setIsDeleteRowModalOpen(true)}
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

      {/* Insights Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mt-2">
        
        {/* Suggested Controls Card */}
        <div className="flex flex-col bg-white border border-[#e3e6ec] rounded-[8px] p-[25px] shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="size-5 text-brand-primary" />
            <h4 className="text-[16px] font-bold text-brand-primary">Suggested Controls</h4>
          </div>
          <p className="text-[12px] text-brand-secondary mb-4 leading-[1.6]">
            Based on your hazards, our AI suggests these common controls.
          </p>
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center gap-3 bg-[#f8fafc] border border-[#f1f5f9] rounded-[4px] px-2 py-2">
              <CheckCircle2 className="size-4 text-brand-primary shrink-0" />
              <span className="text-[12px] text-brand-primary">Conduct daily toolbox talks</span>
            </div>
            <div className="flex items-center gap-3 bg-[#f8fafc] border border-[#f1f5f9] rounded-[4px] px-2 py-2">
              <CheckCircle2 className="size-4 text-brand-primary shrink-0" />
              <span className="text-[12px] text-brand-primary">Ensure competence and training records</span>
            </div>
            <div className="flex items-center gap-3 bg-[#f8fafc] border border-[#f1f5f9] rounded-[4px] px-2 py-2">
              <CheckCircle2 className="size-4 text-brand-primary shrink-0" />
              <span className="text-[12px] text-brand-primary">Regular inspections and maintenance</span>
            </div>
          </div>
          <button className="text-[14px] font-bold text-brand-primary mt-auto text-left hover:underline">
            View all suggested controls &rarr;
          </button>
        </div>

        {/* Risk Distribution Card */}
        <div className="flex flex-col bg-white border border-[#e3e6ec] rounded-[8px] p-[25px] shadow-sm">
          <div className="flex items-center gap-2 mb-8">
            <BarChart3 className="size-5 text-brand-primary" />
            <h4 className="text-[16px] font-bold text-brand-primary">Risk Distribution</h4>
          </div>
          
          <div className="flex items-end justify-between h-[120px] px-2 mb-6 gap-2">
            {/* Low (1-4) */}
            <div className="flex flex-col items-center flex-1 relative h-full justify-end">
              <span className="text-[10px] font-bold text-brand-primary mb-1">4</span>
              <div className="w-full bg-[#4caf50] h-[48px] rounded-[2px]" />
              <div className="flex flex-col items-center mt-2">
                <span className="text-[12px] text-brand-secondary leading-tight">Low</span>
                <span className="text-[10px] text-brand-secondary">(1-4)</span>
              </div>
            </div>
            
            {/* Medium (5-9) */}
            <div className="flex flex-col items-center flex-1 relative h-full justify-end">
              <span className="text-[10px] font-bold text-brand-primary mb-1">5</span>
              <div className="w-full bg-[#f5c842] h-[64px] rounded-[2px]" />
              <div className="flex flex-col items-center mt-2">
                <span className="text-[12px] text-brand-secondary leading-tight">Medium</span>
                <span className="text-[10px] text-brand-secondary">(5-9)</span>
              </div>
            </div>
            
            {/* High (10-16) */}
            <div className="flex flex-col items-center flex-1 relative h-full justify-end">
              <span className="text-[10px] font-bold text-brand-primary mb-1">3</span>
              <div className="w-full bg-[#f58b2a] h-[40px] rounded-[2px]" />
              <div className="flex flex-col items-center mt-2">
                <span className="text-[12px] text-brand-secondary leading-tight">High</span>
                <span className="text-[10px] text-brand-secondary">(10-16)</span>
              </div>
            </div>
            
            {/* Critical (17-25) */}
            <div className="flex flex-col items-center flex-1 relative h-full justify-end">
              <span className="text-[10px] font-bold text-red-600 mb-1">1</span>
              <div className="w-full bg-[#e53935] h-[16px] rounded-[2px]" />
              <div className="flex flex-col items-center mt-2">
                <span className="text-[12px] text-brand-secondary leading-tight">Critical</span>
                <span className="text-[10px] text-brand-secondary">(17-25)</span>
              </div>
            </div>
          </div>
          
          <button className="text-[14px] font-bold text-brand-primary mt-auto text-left hover:underline">
            View full risk report &rarr;
          </button>
        </div>

        {/* Automated Review Card */}
        <div className="flex flex-col bg-white border border-[#e3e6ec] rounded-[8px] p-[25px] shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="size-5 text-brand-primary" />
            <h4 className="text-[16px] font-bold text-brand-primary">Automated Review</h4>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="size-1.5 rounded-full bg-[#22c55e]" />
            <span className="text-[12px] text-brand-secondary">
              AI review completed &bull; <span className="text-[#d92d20]">3 high risks detected</span>
            </span>
          </div>
          
          <p className="text-[14px] text-brand-primary mb-2">Outstanding High/Critical Items:</p>
          
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 shrink-0" />
              <span className="text-[12px] text-brand-primary leading-[1.6]">Working at Height - Fall from height (Risk 20)</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 shrink-0" />
              <span className="text-[12px] text-brand-primary leading-[1.6]">Plant Operation - Collision (Risk 16)</span>
            </div>
          </div>
          
          <button className="text-[14px] font-bold text-brand-primary mt-auto text-left hover:underline">
            Run AI Review Again &rarr;
          </button>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#e3e6ec]">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
            onClick={onPrevious}
          >
            Save Draft
          </Button>
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-[#0d1b2a] text-white font-bold text-[14px] hover:bg-black"
            onClick={onNext}
          >
            Next: Review & Generate
          </Button>
        </div>
        <div className="text-[14px] font-bold text-brand-primary">
          Progress: 82%
        </div>
      </div>

      <AddRiskRowModal 
        isOpen={isAddRowModalOpen}
        onClose={() => setIsAddRowModalOpen(false)}
      />

      <DeleteRiskRowModal 
        isOpen={isDeleteRowModalOpen}
        onClose={() => setIsDeleteRowModalOpen(false)}
      />

    </div>
  );
}
