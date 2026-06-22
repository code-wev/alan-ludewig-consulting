"use client";

import { useMemo, useState } from "react";
import { NewsletterCard, type NewsletterCardProps } from "./newsletter-card";
import { NewsletterFilters } from "./newsletter-filters";
import { NewsletterTabs, type NewsletterTab } from "./newsletter-tabs";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NEWSLETTERS: NewsletterCardProps[] = [
  {
    bannerBg: "#DBEAFE",
    iconColor: "#1D4ED8",
    bannerDate: "10 May 2026",
    category: "Regulatory Updates",
    date: "10 May 2026",
    title: "New CDM Regulations 2026 - What You Need to Know",
    description:
      "Essential updates to Construction Design and Management regulations affecting all construction projects from June 2026.",
    readUrl: "#",
    pdfUrl: "#",
  },
  {
    bannerBg: "#F3E8FF",
    iconColor: "#7E22CE",
    bannerDate: "28 Apr 2026",
    category: "Industry Updates",
    date: "28 Apr 2026",
    title: "Health & Safety at Work Act – 2026 Amendments",
    description:
      "Key amendments to the Health & Safety at Work Act introducing stricter duties for principal contractors and designers.",
    readUrl: "#",
    pdfUrl: "#",
  },
  {
    bannerBg: "#D0FAE5",
    iconColor: "#15803D",
    bannerDate: "15 Apr 2026",
    category: "Company News",
    date: "15 Apr 2026",
    title: "Alan Ludewig Consulting Launches New Virtual Agent",
    description:
      "We are excited to announce the launch of our AI-powered Virtual Agent to help clients with compliance questions 24/7.",
    readUrl: "#",
    pdfUrl: "#",
  },
  {
    bannerBg: "#DBEAFE",
    iconColor: "#1D4ED8",
    bannerDate: "2 Apr 2026",
    category: "Regulatory Updates",
    date: "2 Apr 2026",
    title: "PUWER Regulations Update – Inspection Frequency Changes",
    description:
      "HSE has updated guidance on inspection frequencies under PUWER, with new minimum requirements for high-risk equipment.",
    readUrl: "#",
    pdfUrl: "#",
  },
  {
    bannerBg: "#F3E8FF",
    iconColor: "#7E22CE",
    bannerDate: "18 Mar 2026",
    category: "Industry Updates",
    date: "18 Mar 2026",
    title: "Mental Health & Wellbeing in Construction – New HSE Guidance",
    description:
      "HSE releases new industry guidance on mental health obligations for construction employers, including toolbox talk resources.",
    readUrl: "#",
    pdfUrl: "#",
  },
  {
    bannerBg: "#D0FAE5",
    iconColor: "#15803D",
    bannerDate: "5 Mar 2026",
    category: "Company News",
    date: "5 Mar 2026",
    title: "Q1 2026 Client Update & Platform Enhancements",
    description:
      "A roundup of platform improvements made in Q1 2026 including new document templates, improved RAMS builder, and bug fixes.",
    readUrl: "#",
    pdfUrl: "#",
  },
  {
    bannerBg: "#DBEAFE",
    iconColor: "#1D4ED8",
    bannerDate: "20 Feb 2026",
    category: "Regulatory Updates",
    date: "20 Feb 2026",
    title: "COSHH Compliance: Updated Exposure Limits for 2026",
    description:
      "The EH40 Workplace Exposure Limits document has been updated with new limits for hazardous substances effective from April 2026.",
    readUrl: "#",
    pdfUrl: "#",
  },
  {
    bannerBg: "#F3E8FF",
    iconColor: "#7E22CE",
    bannerDate: "8 Feb 2026",
    category: "Industry Updates",
    date: "8 Feb 2026",
    title: "Working at Height – Best Practice Guidance 2026",
    description:
      "Updated best practice guide for working at height, covering scaffolding, ladder safety, and mobile elevated work platforms.",
    readUrl: "#",
    pdfUrl: "#",
  },
  {
    bannerBg: "#D0FAE5",
    iconColor: "#15803D",
    bannerDate: "25 Jan 2026",
    category: "Company News",
    date: "25 Jan 2026",
    title: "Welcome to 2026 – Our Year in Review",
    description:
      "Reflecting on a record year for Alan Ludewig Consulting with highlights from 2025 and what's coming in 2026.",
    readUrl: "#",
    pdfUrl: "#",
  },
];

// ─── Grid ─────────────────────────────────────────────────────────────────────

export function NewsletterGrid() {
  const [activeTab, setActiveTab] = useState<NewsletterTab>("All");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [year, setYear] = useState("All Years");
  const [sort, setSort] = useState("Sort: Latest First");

  const filtered = useMemo(() => {
    let list = [...NEWSLETTERS];

    if (activeTab !== "All") {
      list = list.filter((n) => n.category === activeTab);
    }
    if (category !== "All Categories") {
      list = list.filter((n) => n.category === category);
    }
    if (year !== "All Years") {
      list = list.filter((n) => n.date.includes(year));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.description.toLowerCase().includes(q) ||
          n.category.toLowerCase().includes(q),
      );
    }
    if (sort === "Sort: Oldest First") list = list.reverse();
    else if (sort === "Sort: A-Z")
      list = list.sort((a, b) => a.title.localeCompare(b.title));

    return list;
  }, [activeTab, search, category, year, sort]);

  return (
    <div className='flex flex-col gap-6 w-full'>
      {/* Tabs */}
      <NewsletterTabs active={activeTab} onChange={setActiveTab} />

      {/* Filters */}
      <NewsletterFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        year={year}
        onYearChange={setYear}
        sort={sort}
        onSortChange={setSort}
      />

      {/* Cards
          ─ mobile  (< 640px)  → 1 column
          ─ tablet  (640-1023) → 2 columns
          ─ desktop (≥ 1024px) → 3 columns            */}
      {filtered.length === 0 ? (
        <div className='flex items-center justify-center py-20'>
          <p
            style={{
              fontFamily: "Sansation, sans-serif",
              fontSize: "14px",
              color: "#5A6886",
            }}>
            No newsletters found matching your criteria.
          </p>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 items-start'>
          {filtered.map((card, i) => (
            <NewsletterCard key={i} {...card} />
          ))}
        </div>
      )}
    </div>
  );
}
