"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface SelectButtonProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function SelectButton({ label, value, options, onChange }: SelectButtonProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-[63px] h-9 px-3 bg-white border border-[#E3E6EC] rounded-md hover:border-[#132651] transition-colors"
      >
        <span
          className="whitespace-nowrap"
          style={{
            fontFamily: "Sansation, sans-serif",
            fontSize: "12px",
            lineHeight: "160%",
            color: "#132651",
          }}
        >
          {value || label}
        </span>
        <ChevronDown className="w-4 h-4 text-[#5A6886] opacity-50 flex-shrink-0" />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-[#E3E6EC] rounded-md shadow-lg z-20 min-w-full py-1">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-[#F3F5F8] transition-colors"
              style={{
                fontFamily: "Sansation, sans-serif",
                fontSize: "12px",
                lineHeight: "160%",
                color: "#132651",
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface NewsletterFiltersProps {
  search: string;
  onSearchChange: (v: string) => void;
  category: string;
  onCategoryChange: (v: string) => void;
  year: string;
  onYearChange: (v: string) => void;
  sort: string;
  onSortChange: (v: string) => void;
}

export function NewsletterFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  year,
  onYearChange,
  sort,
  onSortChange,
}: NewsletterFiltersProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        {/* Search input */}
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A6886]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search newsletters..."
            className="h-9 pl-10 pr-4 bg-white border border-[#E3E6EC] rounded-md outline-none focus:border-[#132651] transition-colors"
            style={{
              width: "457px",
              maxWidth: "100%",
              fontFamily: "Sansation, sans-serif",
              fontSize: "12px",
              lineHeight: "160%",
              color: "#132651",
            }}
          />
        </div>

        {/* Dropdowns */}
        <SelectButton
          label="All Categories"
          value={category}
          options={["All Categories", "Regulatory Updates", "Industry Updates", "Company News"]}
          onChange={onCategoryChange}
        />
        <SelectButton
          label="All Years"
          value={year}
          options={["All Years", "2026", "2025", "2024"]}
          onChange={onYearChange}
        />
        <SelectButton
          label="Sort: Latest First"
          value={sort}
          options={["Sort: Latest First", "Sort: Oldest First", "Sort: A-Z"]}
          onChange={onSortChange}
        />
      </div>

      {/* Helper note */}
      <p
        style={{
          fontFamily: "Sansation, sans-serif",
          fontSize: "12px",
          lineHeight: "160%",
          color: "#5A6886",
        }}
      >
        Note: Newsletters may open as PDF previews or external reading links depending on format.
      </p>
    </div>
  );
}
