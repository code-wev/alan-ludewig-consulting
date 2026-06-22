import React from "react";
import { FileText } from "lucide-react";

export function DefaultRamsSettings() {
  return (
    <div className="flex flex-col p-6 bg-white border border-[#D0D4DC] rounded-xl gap-6 w-full">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-[#132651]" />
          <h2 className="text-xl font-bold text-[#132651]">Default RAMS Settings</h2>
        </div>
        <p className="text-sm text-[#5A6886]">
          Set default values to speed up RAMS creation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#132651]">Default Company Name for RAMS</label>
          <input 
            type="text" 
            defaultValue="Alan Ludewig Consulting" 
            className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#132651]">Default Contact Number</label>
          <input 
            type="text" 
            defaultValue="+44 7700 900123" 
            className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#132651]">Default Emergency Contact</label>
          <input 
            type="text" 
            defaultValue="999" 
            className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#132651]">Preferred Output Format</label>
          <input 
            type="text" 
            placeholder="e.g. PDF" 
            className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors"
          />
        </div>
      </div>

      <button className="bg-[#132651] text-white font-bold text-sm px-6 py-4 rounded-md hover:bg-[#132651]/90 transition-colors w-fit mt-2">
        Save RAMS Settings
      </button>
    </div>
  );
}
