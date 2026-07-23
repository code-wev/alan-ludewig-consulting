import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddControlMeasureModalProps {
  isAddControlMeasureOpen: boolean;
  setIsAddControlMeasureOpen: (open: boolean) => void;
}

export function AddControlMeasureModal({ isAddControlMeasureOpen, setIsAddControlMeasureOpen }: AddControlMeasureModalProps) {
  if (!isAddControlMeasureOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-[12px] w-full max-w-[800px] shadow-2xl flex flex-col my-8 max-h-[90vh] overflow-hidden transition-all duration-300">
        <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4.5 shrink-0">
          <h3 className="text-[20px] font-bold text-[#132651]">Add Control Measure</h3>
          <button
            onClick={() => setIsAddControlMeasureOpen(false)}
            className="text-[#95a0b6] hover:text-[#132651] hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          <div>
            <label className="block text-[13px] font-bold text-[#132651] mb-2">Control Measure <span className="text-[#e11d48]">*</span></label>
            <input
              type="text"
              placeholder="e.g., Installation of perimeter edge protection"
              className="w-full h-11 px-4 rounded-[6px] border border-[#c5c6cd] text-[14px] text-[#132651] placeholder:text-[#95a0b6] focus:outline-none focus:border-[#132651] focus:ring-1 focus:ring-[#132651] transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[13px] font-bold text-[#132651] mb-2">Category</label>
              <select className="w-full h-11 px-4 rounded-[6px] border border-[#c5c6cd] text-[14px] text-[#132651] bg-white focus:outline-none focus:border-[#132651] focus:ring-1 focus:ring-[#132651] transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2395a0b6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_12px_center] bg-no-repeat pr-10">
                <option>Elimination</option>
                <option>Substitution</option>
                <option>Engineering Controls</option>
                <option>Administrative Controls</option>
                <option>PPE</option>
              </select>
            </div>
            <div>
              <label className="block text-[13px] font-bold text-[#132651] mb-2">Related Hazard</label>
              <select className="w-full h-11 px-4 rounded-[6px] border border-[#c5c6cd] text-[14px] text-[#132651] bg-white focus:outline-none focus:border-[#132651] focus:ring-1 focus:ring-[#132651] transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2395a0b6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_12px_center] bg-no-repeat pr-10">
                <option>Fall from Height</option>
                <option>Manual Handling</option>
                <option>Electrical Shock</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[13px] font-bold text-[#132651] mb-3">Control Type</label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input type="radio" name="controlType" className="peer sr-only" defaultChecked />
                    <div className="size-4 rounded-full border border-[#c5c6cd] peer-checked:border-[#132651] peer-checked:border-4 transition-all"></div>
                  </div>
                  <span className="text-[14px] text-[#132651]">Existing</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input type="radio" name="controlType" className="peer sr-only" />
                    <div className="size-4 rounded-full border border-[#c5c6cd] peer-checked:border-[#132651] peer-checked:border-4 transition-all"></div>
                  </div>
                  <span className="text-[14px] text-[#132651]">Additional</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-bold text-[#132651] mb-2">Responsible Role</label>
              <input
                type="text"
                placeholder="e.g., Site Supervisor"
                className="w-full h-11 px-4 rounded-[6px] border border-[#c5c6cd] text-[14px] text-[#132651] placeholder:text-[#95a0b6] focus:outline-none focus:border-[#132651] focus:ring-1 focus:ring-[#132651] transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-[#f8f9fc] border border-[#e3e6ec] rounded-[8px] p-4 flex items-center justify-between">
              <span className="text-[14px] font-bold text-[#132651]">Required Before Work Starts</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-[#e3e6ec] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#132651]"></div>
              </label>
            </div>
            <div className="flex-1 bg-[#f8f9fc] border border-[#e3e6ec] rounded-[8px] p-4 flex items-center justify-between">
              <span className="text-[14px] font-bold text-[#132651]">Verification Required</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-[#e3e6ec] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#132651]"></div>
              </label>
            </div>
          </div>

          <div className="bg-[#f8f9fc] rounded-[8px] border border-[#e3e6ec] overflow-hidden">
            <div className="bg-[#eef4ff] px-4 py-3 border-b border-[#e3e6ec]">
              <h4 className="text-[13px] font-bold text-[#132651]">Residual Risk Impact Assessment</h4>
            </div>
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end">
              <div>
                <label className="block text-[13px] font-bold text-[#5a6886] mb-2">Likelihood</label>
                <select className="w-full h-11 px-4 rounded-[6px] border border-[#c5c6cd] text-[14px] text-[#132651] bg-white focus:outline-none focus:border-[#132651] focus:ring-1 focus:ring-[#132651] transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2395a0b6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_12px_center] bg-no-repeat pr-10">
                  <option>3 - Possible</option>
                  <option>2 - Unlikely</option>
                  <option>1 - Rare</option>
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#5a6886] mb-2">Severity</label>
                <select className="w-full h-11 px-4 rounded-[6px] border border-[#c5c6cd] text-[14px] text-[#132651] bg-white focus:outline-none focus:border-[#132651] focus:ring-1 focus:ring-[#132651] transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2395a0b6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_12px_center] bg-no-repeat pr-10">
                  <option>4 - Major</option>
                  <option>3 - Moderate</option>
                  <option>2 - Minor</option>
                </select>
              </div>
              <div className="h-11 bg-[#132651] rounded-[6px] flex items-center justify-between px-4 sm:px-6">
                <span className="text-[13px] text-white/80">Risk Score</span>
                <span className="text-[20px] font-bold text-[#f59e0b]">12</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-start border-t border-[#e3e6ec] p-6 bg-white shrink-0 gap-3">
          <Button
            variant="outline"
            onClick={() => setIsAddControlMeasureOpen(false)}
            className="h-10 w-full sm:w-auto rounded-[6px] border-[#c5c6cd] bg-white px-6 text-[14px] font-bold text-[#132651] hover:bg-[#f3f5f8] shadow-none"
          >
            Save Draft
          </Button>
          <Button
            className="h-10 w-full sm:w-auto rounded-[6px] bg-[#132651] px-6 text-[14px] font-bold text-white hover:bg-[#0d1b3a] shadow-none"
          >
            Add Control Measure
          </Button>
        </div>
      </div>
    </div>
  );
}
