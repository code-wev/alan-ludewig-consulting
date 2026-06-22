import React from "react";
import { User } from "lucide-react";

export function ProfileInformation() {
  return (
    <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-8 w-full">
      <div className="flex items-center gap-3">
        <User className="w-6 h-6 text-[#132651]" />
        <h2 className="text-xl font-bold text-[#132651]">Profile Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#132651]">First Name</label>
          <input 
            type="text" 
            defaultValue="Alan" 
            className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#132651]">Last Name</label>
          <input 
            type="text" 
            defaultValue="Ludewig" 
            className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#132651]">Email</label>
          <input 
            type="email" 
            defaultValue="alan@example.com" 
            className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#132651]">Phone</label>
          <input 
            type="text" 
            defaultValue="88012548674532" 
            className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors"
          />
        </div>
      </div>

      <button className="bg-[#132651] text-white font-bold text-sm px-6 py-4 rounded-md hover:bg-[#132651]/90 transition-colors w-fit">
        Save Profile Changes
      </button>
    </div>
  );
}
