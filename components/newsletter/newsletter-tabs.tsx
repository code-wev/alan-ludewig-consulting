"use client";

import React from "react";

const TABS = [
  "All",
  "Industry Updates",
  "Regulatory Updates",
  "Company News",
] as const;
export type NewsletterTab = (typeof TABS)[number];

interface NewsletterTabsProps {
  active: NewsletterTab;
  onChange: (tab: NewsletterTab) => void;
}

export function NewsletterTabs({ active, onChange }: NewsletterTabsProps) {
  return (
    /* On mobile: allow horizontal scroll so tabs never stack/overflow */
    <div className='overflow-x-auto pb-0.5'>
      <div
        className='inline-flex items-center gap-0 p-0.75 rounded-xl min-w-max'
        style={{ backgroundColor: "#F3F5F8" }}>
        {TABS.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              type='button'
              onClick={() => onChange(tab)}
              className='flex items-center justify-center gap-1.5 px-3 py-1 rounded-md transition-all whitespace-nowrap'
              style={{
                height: "29px",
                backgroundColor: isActive ? "#FFFFFF" : "transparent",
                fontFamily: "Sansation, sans-serif",
                fontSize: "14px",
                lineHeight: "160%",
                fontWeight: isActive ? 700 : 400,
                color: "#132651",
                boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              }}>
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
