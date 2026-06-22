import React from "react";
import { Building2 } from "lucide-react";

export function CompanyProfile() {
  return (
    <div className="flex flex-col p-6 bg-white border border-[#D0D4DC] rounded-xl gap-8 w-full">
      <div className="flex items-center gap-3">
        <Building2 className="w-6 h-6 text-[#132651]" />
        <h2 className="text-xl font-bold text-[#132651]">Company Profile</h2>
      </div>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#132651]">Company Name</label>
          <input 
            type="text" 
            defaultValue="Alan Ludewig Consulting" 
            className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#132651]">Company Address</label>
          <input 
            type="text" 
            defaultValue="123 Business Park, London, UK" 
            className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#132651]">City</label>
            <input 
              type="text" 
              defaultValue="London" 
              className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#132651]">County</label>
            <input 
              type="text" 
              defaultValue="Greater London" 
              className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#132651]">Postcode</label>
            <input 
              type="text" 
              defaultValue="SW1A 1AA" 
              className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors"
            />
          </div>
        </div>
      </div>

      <button className="bg-[#132651] text-white font-bold text-sm px-6 py-4 rounded-md hover:bg-[#132651]/90 transition-colors w-fit">
        Save Company Changes
      </button>
    </div>
  );
}
