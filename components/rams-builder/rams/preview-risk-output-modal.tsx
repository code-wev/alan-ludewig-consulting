import React from "react";
import { Button } from "@/components/ui/button";

interface PreviewRiskOutputModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PreviewRiskOutputModal({ isOpen, onClose }: PreviewRiskOutputModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 md:p-8 overflow-y-auto">
      {/* Modal Container */}
      <div className="bg-white rounded-[12px] w-full max-w-[1100px] flex flex-col relative shadow-2xl my-auto">
        
        {/* Main Content Area */}
        <div className="p-10 flex flex-col gap-8 w-full">
          
          {/* Document Header */}
          <div className="flex items-start justify-between border-b-2 border-brand-primary pb-6 w-full">
            {/* Left Title */}
            <div className="flex flex-col gap-1">
              <h1 className="text-[20px] font-bold text-brand-primary">Risk Assessment Appendix</h1>
              <p className="text-[14px] text-brand-secondary">Documenting hazards and controls for Construction Phase RAMS</p>
            </div>
            
            {/* Right Details */}
            <div className="flex flex-col items-end gap-3">
              <div className="bg-brand-primary text-white text-[12px] font-bold px-4 py-2 rounded-[6px] text-center leading-tight min-w-[160px]">
                ALAN LUDEWIG<br/>CONSULTING LTD
              </div>
              <div className="grid grid-cols-[auto_auto] gap-x-4 gap-y-1 text-right mt-1">
                <span className="text-[12px] font-bold text-brand-secondary">RAMS REF:</span>
                <span className="text-[12px] text-brand-primary">AL-RA-2024-089</span>
                <span className="text-[12px] font-bold text-brand-secondary">VERSION:</span>
                <span className="text-[12px] text-brand-primary">2.1 (Final)</span>
              </div>
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-0 w-full mb-2">
            <div className="flex flex-col border-b border-[#e3e6ec] py-3">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold text-brand-primary">Project Name:</span>
                <span className="text-[14px] text-brand-secondary">Canary Wharf Site Ext - Phase 3</span>
              </div>
            </div>
            <div className="flex flex-col border-b border-[#e3e6ec] py-3">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold text-brand-primary">Location:</span>
                <span className="text-[14px] text-brand-secondary">Docklands, London E14</span>
              </div>
            </div>
            <div className="flex flex-col border-b border-[#e3e6ec] py-3">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold text-brand-primary">Client:</span>
                <span className="text-[14px] text-brand-secondary">Sterling Build Group</span>
              </div>
            </div>
            <div className="flex flex-col border-b border-[#e3e6ec] py-3">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold text-brand-primary">Date:</span>
                <span className="text-[14px] text-brand-secondary">24th May 2024</span>
              </div>
            </div>
          </div>

          {/* Professional Landscape Table */}
          <div className="w-full overflow-x-auto rounded-[8px] border border-[#e3e6ec]">
            <table className="w-full min-w-[1200px] border-collapse text-[12px]">
              <thead>
                <tr className="bg-[#f0f2f5] text-brand-primary font-bold">
                  <th className="border-b border-r border-[#e3e6ec] p-3 text-center w-12 align-middle" rowSpan={2}>NO.</th>
                  <th className="border-b border-r border-[#e3e6ec] p-3 text-left align-middle min-w-[180px]" rowSpan={2}>ACTIVITY / TASK</th>
                  <th className="border-b border-r border-[#e3e6ec] p-3 text-left align-middle min-w-[220px]" rowSpan={2}>HAZARD DESCRIPTION</th>
                  <th className="border-b border-r border-[#e3e6ec] p-3 text-left align-middle" rowSpan={2}>PERSONS AT RISK</th>
                  <th className="border-b border-r border-[#e3e6ec] p-2 text-center" colSpan={3}>INITIAL RISK</th>
                  <th className="border-b border-r border-[#e3e6ec] p-3 text-left align-middle min-w-[280px]" rowSpan={2}>EXISTING & ADDITIONAL<br/>CONTROLS</th>
                  <th className="border-b border-[#e3e6ec] p-2 text-center" colSpan={4}>RESIDUAL RISK</th>
                </tr>
                <tr className="bg-[#f0f2f5] text-brand-primary font-bold">
                  {/* Initial Risk Sub-headers */}
                  <th className="border-b border-r border-[#e3e6ec] p-2 text-center w-8">L</th>
                  <th className="border-b border-r border-[#e3e6ec] p-2 text-center w-8">S</th>
                  <th className="border-b border-r border-[#e3e6ec] p-2 text-center w-10">SC</th>
                  
                  {/* Residual Risk Sub-headers */}
                  <th className="border-b border-r border-[#e3e6ec] p-2 text-center w-8">L</th>
                  <th className="border-b border-r border-[#e3e6ec] p-2 text-center w-8">S</th>
                  <th className="border-b border-r border-[#e3e6ec] p-2 text-center w-10">SC</th>
                  <th className="border-b border-[#e3e6ec] p-2 text-center w-16">RAT.</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                
                {/* Row 1 */}
                <tr className="bg-white">
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center font-bold text-[#191c1e] align-top">1.1</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 font-bold text-brand-primary align-top">
                    Work at Height:<br/>Scaffold Erection
                  </td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-brand-secondary align-top">
                    Falls from height, falling objects/materials striking personnel below.
                  </td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-brand-secondary align-top">
                    Operatives, Public
                  </td>
                  
                  {/* Initial Risk */}
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">4</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">5</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center font-bold text-brand-primary align-top">20</td>
                  
                  {/* Controls */}
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-brand-secondary align-top">
                    <div className="flex flex-col gap-3">
                      <p>Full body harness and 100% tie-off mandatory.</p>
                      <p>Exclusion zones established below work area.</p>
                      <p>Advanced guardrail systems to be used during build.</p>
                      <p>Only trained/certified scaffolders (CISRS) permitted.</p>
                    </div>
                  </td>
                  
                  {/* Residual Risk */}
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">2</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">4</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center font-bold text-brand-primary align-top">8</td>
                  <td className="border-b border-[#e3e6ec] p-3 align-top">
                    <div className="bg-[#fef3c7] text-[#b45309] font-bold text-center py-1 rounded-[2px] w-full text-[11px]">Med</div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="bg-[#fafafc]">
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center font-bold text-[#191c1e] align-top">1.2</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 font-bold text-brand-primary align-top">
                    Manual Handling:<br/>Timber Frames
                  </td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-brand-secondary align-top">
                    Musculoskeletal injuries, crushing, splinters.
                  </td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-brand-secondary align-top">
                    Operatives
                  </td>
                  
                  {/* Initial Risk */}
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">3</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">3</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center font-bold text-brand-primary align-top">9</td>
                  
                  {/* Controls */}
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-brand-secondary align-top">
                    <div className="flex flex-col gap-3">
                      <p>Team lifting for all loads over 20kg.</p>
                      <p>Mechanical aid (HIAB) used for positioning where possible.</p>
                      <p>Wearing of heavy-duty rigger gloves mandatory.</p>
                    </div>
                  </td>
                  
                  {/* Residual Risk */}
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">1</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">3</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center font-bold text-brand-primary align-top">3</td>
                  <td className="border-b border-[#e3e6ec] p-3 align-top">
                    <div className="bg-[#dcfce7] text-[#166534] font-bold text-center py-1 rounded-[2px] w-full text-[11px]">Low</div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="bg-white">
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center font-bold text-[#191c1e] align-top">2.1</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 font-bold text-brand-primary align-top">
                    Power Tool Usage<br/>(Saws)
                  </td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-brand-secondary align-top">
                    Cuts, noise, vibration (HAVS), airborne dust.
                  </td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-brand-secondary align-top">
                    Operatives
                  </td>
                  
                  {/* Initial Risk */}
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">4</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">4</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center font-bold text-brand-primary align-top">16</td>
                  
                  {/* Controls */}
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-brand-secondary align-top">
                    <div className="flex flex-col gap-3">
                      <p>M-Class extraction mandatory on all tools.</p>
                      <p>Hearing protection zones established.</p>
                      <p>Daily vibration monitoring via HAVS tags.</p>
                      <p>Weekly equipment inspection logs maintained.</p>
                    </div>
                  </td>
                  
                  {/* Residual Risk */}
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">2</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">3</td>
                  <td className="border-b border-r border-[#e3e6ec] p-3 text-center font-bold text-brand-primary align-top">6</td>
                  <td className="border-b border-[#e3e6ec] p-3 align-top">
                    <div className="bg-[#dcfce7] text-[#166534] font-bold text-center py-1 rounded-[2px] w-full text-[11px]">Low</div>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="bg-[#fafafc]">
                  <td className="border-r border-[#e3e6ec] p-3 text-center font-bold text-[#191c1e] align-top">3.1</td>
                  <td className="border-r border-[#e3e6ec] p-3 font-bold text-brand-primary align-top">
                    Electrical Connection
                  </td>
                  <td className="border-r border-[#e3e6ec] p-3 text-brand-secondary align-top">
                    Electrocution, fire, equipment damage.
                  </td>
                  <td className="border-r border-[#e3e6ec] p-3 text-brand-secondary align-top">
                    Electricians, Site Staff
                  </td>
                  
                  {/* Initial Risk */}
                  <td className="border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">2</td>
                  <td className="border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">5</td>
                  <td className="border-r border-[#e3e6ec] p-3 text-center font-bold text-brand-primary align-top">10</td>
                  
                  {/* Controls */}
                  <td className="border-r border-[#e3e6ec] p-3 text-brand-secondary align-top">
                    <div className="flex flex-col gap-3">
                      <p>LOTO procedures strictly enforced.</p>
                      <p>Testing for dead before every connection.</p>
                      <p>All portable tools to be 110V.</p>
                    </div>
                  </td>
                  
                  {/* Residual Risk */}
                  <td className="border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">1</td>
                  <td className="border-r border-[#e3e6ec] p-3 text-center text-brand-primary align-top">5</td>
                  <td className="border-r border-[#e3e6ec] p-3 text-center font-bold text-brand-primary align-top">5</td>
                  <td className="p-3 align-top">
                    <div className="bg-[#dcfce7] text-[#166534] font-bold text-center py-1 rounded-[2px] w-full text-[11px]">Low</div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Risk Scoring Legend & Footer info */}
          <div className="flex items-end justify-between mt-4">
            
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#f8f9fc] rounded-[4px] py-2 px-3 min-w-[200px]">
                  <p className="text-[11px] font-bold text-brand-primary mb-1 uppercase">Likelihood (L)</p>
                  <p className="text-[10px] text-brand-secondary uppercase leading-tight">1: Rare | 2: Unlikely | 3: Possible | 4: Likely | 5: Almost Certain</p>
                </div>
                <div className="bg-[#f8f9fc] rounded-[4px] py-2 px-3 min-w-[200px]">
                  <p className="text-[11px] font-bold text-brand-primary mb-1 uppercase">Severity (S)</p>
                  <p className="text-[10px] text-brand-secondary uppercase leading-tight">1: Insignificant | 2: Minor | 3: Moderate | 4: Major | 5: Catastrophic</p>
                </div>
                <div className="bg-[#f8f9fc] rounded-[4px] py-2 px-3 min-w-[200px]">
                  <p className="text-[11px] font-bold text-brand-primary mb-1 uppercase">Rating (Score)</p>
                  <p className="text-[10px] text-brand-secondary uppercase leading-tight">1-6: Low | 8-12: Medium | 15-25: High / Stop Work</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1 text-[11px] text-brand-secondary">
              <p>Prepared by: <span className="font-bold text-brand-primary">Alan Ludewig</span></p>
              <p>Timestamp: 2024-05-24 14:22:10 GMT</p>
              <p>Page 1 of 4</p>
            </div>
          </div>

          {/* Small Footer Text */}
          {/* Removed as per Figma layout focusing on the main structure */}
          
        </div>

        {/* Modal Button Actions Bar */}
        <div className="flex items-center justify-between p-6 bg-white border-t border-[#e3e6ec] rounded-b-[12px] w-full">
          <Button 
            className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-white font-bold text-[14px] hover:bg-[#0f1d3e]"
            onClick={onClose}
          >
            Continue to Review & Generate
          </Button>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="h-[42px] px-6 rounded-[6px] border-[#c5c6d0] text-brand-primary font-bold text-[14px] hover:bg-slate-50"
            >
              Print Preview
            </Button>
            <Button 
              variant="outline" 
              className="h-[42px] px-6 rounded-[6px] border-[#c5c6d0] text-brand-primary font-bold text-[14px] hover:bg-slate-50"
            >
              Download CSV
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
