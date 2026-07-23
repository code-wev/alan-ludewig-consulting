import React from "react";
import { X, AlertTriangle, CheckCircle2, AlertCircle, FileText, Info, Upload, RotateCw, ZoomIn, ZoomOut, Maximize, Trash2, FileIcon, CloudUpload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface AddCategoryModalProps {
  isAddCategoryOpen: any;
  setIsAddCategoryOpen: any;
  newCategoryName: any;
  setNewCategoryName: any;
  handleAddCategorySubmit: any;
}

export function AddCategoryModal({ isAddCategoryOpen, setIsAddCategoryOpen, newCategoryName, setNewCategoryName, handleAddCategorySubmit }: AddCategoryModalProps) {
  return (
    <>
      {isAddCategoryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-[12px] w-full max-w-[400px] shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between border-b border-[#e3e6ec] px-6 py-4.5 shrink-0">
              <h3 className="text-[18px] font-bold text-brand-primary">Add Category</h3>
              <button
                onClick={() => setIsAddCategoryOpen(false)}
                className="text-[#95a0b6] hover:text-brand-primary hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all"
              >
                <X className="size-5" />
              </button>
            </div>
            <form onSubmit={handleAddCategorySubmit} className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-brand-primary block">Category Name</label>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="e.g. Public, General Staff"
                  className="h-10.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary transition-all placeholder:text-[#a3acba]"
                  autoFocus
                  required
                />
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <Button type="button" variant="outline" className="h-10 rounded-[6px] border-brand-primary bg-white px-5 text-[14px] font-bold text-brand-primary hover:bg-brand-bg-main" onClick={() => setIsAddCategoryOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="h-10 rounded-[6px] bg-brand-primary px-5 text-[14px] font-bold text-white hover:bg-[#0d1b3a]">
                  Add
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
