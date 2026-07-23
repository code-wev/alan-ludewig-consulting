import React from "react";
import { X, AlertTriangle, CheckCircle2, AlertCircle, FileText, Info, Upload, RotateCw, ZoomIn, ZoomOut, Maximize, Trash2, FileIcon, CloudUpload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface AddHazardModalProps {
  isAddHazardOpen: any;
  setIsAddHazardOpen: any;
  modalHazardName: any;
  setModalHazardName: any;
  modalWhoHarmed: any;
  setModalWhoHarmed: any;
  modalDescription: any;
  setModalDescription: any;
  modalLikelihood: any;
  setModalLikelihood: any;
  modalSeverity: any;
  setModalSeverity: any;
  modalControlMeasures: any;
  setModalControlMeasures: any;
  handleModalSubmit: any;
  handleWhoHarmedToggle: any;
}

export function AddHazardModal({ isAddHazardOpen, setIsAddHazardOpen, modalHazardName, setModalHazardName, modalWhoHarmed, setModalWhoHarmed, modalDescription, setModalDescription, modalLikelihood, setModalLikelihood, modalSeverity, setModalSeverity, modalControlMeasures, setModalControlMeasures, handleModalSubmit, handleWhoHarmedToggle }: AddHazardModalProps) {
  return (
    <>
      {isAddHazardOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
          <div className="bg-white rounded-[12px] w-full max-w-[640px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transition-all duration-300 transform scale-100">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4.5 shrink-0">
              <h3 className="text-[20px] font-bold text-brand-primary">Add Hazard</h3>
              <button
                type="button"
                onClick={() => setIsAddHazardOpen(false)}
                className="text-[#95a0b6] hover:text-brand-primary hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleModalSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Hazard Name */}
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary block">
                  Hazard Name
                </label>
                <input
                  type="text"
                  value={modalHazardName}
                  onChange={(e) => setModalHazardName(e.target.value)}
                  placeholder="e.g. Slips, Trips and Falls"
                  className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all placeholder:text-[#a3acba]"
                  required
                />
              </div>

              {/* Who May Be Harmed */}
              <div className="space-y-3">
                <label className="text-[14px] font-bold text-brand-primary block">
                  Who May Be Harmed?*
                </label>
                <div className="grid grid-cols-2 gap-3.5">
                  {["Employees", "Visitors", "Contractors", "Public"].map((who) => {
                    const isChecked = modalWhoHarmed.includes(who);
                    return (
                      <label
                        key={who}
                        className={cn(
                          "flex items-center gap-3 px-4 py-2.5 rounded-[6px] border cursor-pointer select-none transition-all duration-150",
                          isChecked
                            ? "border-brand-primary bg-[#f4f7fc]"
                            : "border-[#e3e6ec] bg-white hover:bg-brand-bg-main"
                        )}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleWhoHarmedToggle(who)}
                          className="size-4 rounded border border-[#c5c6cd] accent-brand-primary"
                        />
                        <span className="text-[14px] font-medium text-brand-primary">
                          {who}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Hazard Description */}
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary block">
                  Hazard Description
                </label>
                <textarea
                  value={modalDescription}
                  onChange={(e) => setModalDescription(e.target.value)}
                  placeholder="Describe how the hazard could cause injury..."
                  rows={3}
                  className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all placeholder:text-[#a3acba]"
                />
              </div>

              {/* Likelihood & Severity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">
                    Initial Likelihood (1-5)
                  </label>
                  <select
                    value={modalLikelihood}
                    onChange={(e) => setModalLikelihood(e.target.value === "" ? "" : Number(e.target.value))}
                    className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all"
                    required
                  >
                    <option value="">Select Level</option>
                    {[1, 2, 3, 4, 5].map((val) => (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-brand-primary block">
                    Initial Severity (1-5)
                  </label>
                  <select
                    value={modalSeverity}
                    onChange={(e) => setModalSeverity(e.target.value === "" ? "" : Number(e.target.value))}
                    className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all"
                    required
                  >
                    <option value="">Select Level</option>
                    {[1, 2, 3, 4, 5].map((val) => (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Suggested Control Measures */}
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary block">
                  Suggested Control Measures
                </label>
                <textarea
                  value={modalControlMeasures}
                  onChange={(e) => setModalControlMeasures(e.target.value)}
                  placeholder="List existing and proposed actions to reduce risk..."
                  rows={3}
                  className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all placeholder:text-[#a3acba]"
                />
                <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary pt-1">
                  <Info className="size-3.5 shrink-0 text-[#95a0b6]" />
                  <span>
                    Suggested measures will be used to calculate Residual Risk in the final document.
                  </span>
                </div>
              </div>

              {/* Blue Alert Box */}
              <div className="flex items-start gap-3 p-3.5 bg-[#eef2ff] border border-[#d0dbff] rounded-[6px]">
                <Info className="size-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-[13px] text-brand-primary font-medium leading-relaxed">
                  Ensure all data is accurate before adding to the assessment.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-2 shrink-0">
                <Button
                  type="submit"
                  className="h-10.5 rounded-[6px] bg-brand-primary px-6 text-[14px] font-bold text-white hover:bg-[#0d1b3a] transition-all duration-200"
                >
                  Add Hazard
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
