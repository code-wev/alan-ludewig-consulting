import React from "react";
import { Lock } from "lucide-react";

export function PasswordSecurity() {
  return (
    <div className="flex flex-col p-6 bg-white border border-[#D0D4DC] rounded-xl gap-8 w-full">
      <div className="flex items-center gap-3">
        <Lock className="w-6 h-6 text-[#132651]" />
        <h2 className="text-xl font-bold text-[#132651]">Password & Security</h2>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#132651]">Current Password</label>
          <input 
            type="password" 
            placeholder="Enter current password" 
            className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors placeholder:text-[#5A6886]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#132651]">New Password</label>
          <input 
            type="password" 
            placeholder="Enter new password" 
            className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors placeholder:text-[#5A6886]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#132651]">Confirm New Password</label>
          <input 
            type="password" 
            placeholder="Confirm new password" 
            className="w-full px-4 py-3 border border-[#DCE0E7] rounded-md text-sm text-[#132651] outline-none focus:border-[#132651] transition-colors placeholder:text-[#5A6886]"
          />
        </div>
      </div>

      <button className="bg-[#132651] text-white font-bold text-sm px-6 py-4 rounded-md hover:bg-[#132651]/90 transition-colors w-fit">
        Update Password
      </button>
    </div>
  );
}
