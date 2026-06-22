"use client";

import React from "react";
import { Bell } from "lucide-react";

export function NotificationSettings() {
  const notifications = [
    { id: "email-new-docs", label: "Email notifications for new documents", defaultChecked: true },
    { id: "membership-renewals", label: "Membership renewal reminders", defaultChecked: true },
    { id: "newsletter-updates", label: "Newsletter and industry updates", defaultChecked: true },
    { id: "training-discounts", label: "Training discount notifications", defaultChecked: false },
    { id: "site-visits", label: "Site visit booking confirmations", defaultChecked: true },
    { id: "doc-expiry", label: "Document expiry reminders", defaultChecked: true },
    { id: "credit-low", label: "Credit low warnings", defaultChecked: true },
  ];

  return (
    <div className="flex flex-col p-6 bg-white border border-[#E3E6EC] rounded-xl gap-8 w-full">
      <div className="flex items-center gap-3">
        <Bell className="w-6 h-6 text-[#132651]" />
        <h2 className="text-xl font-bold text-[#132651]">Notification Settings</h2>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {notifications.map((notif) => (
          <div key={notif.id} className="flex items-center justify-between w-full">
            <label htmlFor={notif.id} className="text-sm text-[#132651] cursor-pointer">
              {notif.label}
            </label>
            <input 
              type="checkbox" 
              id={notif.id}
              defaultChecked={notif.defaultChecked}
              className="w-5 h-5 rounded border-[#DCE0E7] text-[#132651] focus:ring-[#132651] cursor-pointer"
            />
          </div>
        ))}
      </div>

      <button className="bg-[#132651] text-white font-bold text-sm px-6 py-4 rounded-md hover:bg-[#132651]/90 transition-colors w-fit">
        Save RAMS Settings
      </button>
    </div>
  );
}
