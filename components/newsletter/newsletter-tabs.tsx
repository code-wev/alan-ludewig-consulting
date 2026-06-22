"use client";

import React from "react";

const TABS = ["All", "Industry Updates", "Regulatory Updates", "Company News"] as const;
export type NewsletterTab = (typeof TABS)[number];

interface NewsletterTabsProps {
  active: NewsletterTab;
  onChange: (tab: NewsletterTab) => void;
}

export function NewsletterTabs({ active, onChange }: NewsletterTabsProps) {
  return (
    <div
      className="flex items-center gap-0 p-[3px] rounded-xl"
      style={{ backgroundColor: "#F3F5F8" }}
    >
      {TABS.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className="flex items-center justify-center gap-1.5 px-2 py-1 rounded-md transition-all"
            style={{
              height: "29px",
              backgroundColor: isActive ? "#FFFFFF" : "transparent",
              // Figma: active tab has white bg, others transparent
              fontFamily: "Sansation, sans-serif",
              fontSize: "14px",
              lineHeight: "160%",
              fontWeight: isActive ? 700 : 400,
              color: "#132651",
              whiteSpace: "nowrap",
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
