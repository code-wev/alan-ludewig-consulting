"use client";

import React from "react";
import {
  BookOpen,
  Download,
  FileText,
} from "lucide-react";

export type NewsletterCategory =
  | "Regulatory Updates"
  | "Industry Updates"
  | "Company News";

export interface NewsletterCardProps {
  /** Background color of the card banner */
  bannerBg: string;
  /** Color of the newsletter icon in banner */
  iconColor: string;
  /** Date string shown in banner, e.g. "10 May 2026" */
  bannerDate: string;
  /** Category badge label */
  category: NewsletterCategory;
  /** Publication date string e.g. "10 May 2026" */
  date: string;
  /** Article title */
  title: string;
  /** Short excerpt / description */
  description: string;
  /** URL to read the newsletter */
  readUrl?: string;
  /** URL to download the PDF */
  pdfUrl?: string;
}

// Map category → badge bg / text color
const CATEGORY_STYLES: Record<
  NewsletterCategory,
  { bg: string; text: string }
> = {
  "Regulatory Updates": { bg: "#EFF6FF", text: "#1447E6" },
  "Industry Updates":  { bg: "#F0FDF4", text: "#15803D" },
  "Company News":      { bg: "#FFF7ED", text: "#C2410C" },
};

export function NewsletterCard({
  bannerBg,
  iconColor,
  bannerDate,
  category,
  date,
  title,
  description,
  readUrl = "#",
  pdfUrl = "#",
}: NewsletterCardProps) {
  const badge = CATEGORY_STYLES[category];

  return (
    <div className="flex flex-col bg-white border border-[#D0D4DC] rounded-xl overflow-hidden h-full">
      {/* Banner / image area */}
      <div
        className="flex items-center justify-center w-full relative"
        style={{ backgroundColor: bannerBg, height: "160px" }}
      >
        {/* Centered icon + date column */}
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-lg"
            style={{ backgroundColor: `${iconColor}22` }}
          >
            <FileText className="w-7 h-7" style={{ color: iconColor }} />
          </div>
          <span
            className="text-sm font-normal text-center"
            style={{
              fontFamily: "Sansation, sans-serif",
              fontSize: "14px",
              lineHeight: "160%",
              color: "#132651",
            }}
          >
            {bannerDate}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        {/* Badge + date row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="px-2.5 py-1 rounded text-xs font-medium"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              lineHeight: "16px",
              backgroundColor: badge.bg,
              color: badge.text,
            }}
          >
            {category}
          </span>
          <span
            className="text-xs"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              lineHeight: "16px",
              color: "#5A6886",
            }}
          >
            {date}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-bold"
          style={{
            fontFamily: "Sansation, sans-serif",
            fontSize: "20px",
            lineHeight: "160%",
            color: "#132651",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="flex-1"
          style={{
            fontFamily: "Sansation, sans-serif",
            fontSize: "14px",
            lineHeight: "160%",
            color: "#5A6886",
          }}
        >
          {description}
        </p>

        {/* Actions row */}
        <div className="flex items-center gap-4 pt-1">
          {/* Read button — outlined */}
          <a
            href={readUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 h-[34px] rounded-md border border-[#132651] bg-white hover:bg-[#132651]/5 transition-colors cursor-pointer"
            style={{ minHeight: "34px" }}
          >
            <BookOpen className="w-[18px] h-[18px] text-[#132651] flex-shrink-0" />
            <span
              className="font-bold"
              style={{
                fontFamily: "Sansation, sans-serif",
                fontSize: "12px",
                lineHeight: "160%",
                color: "#132651",
              }}
            >
              Read
            </span>
          </a>

          {/* Download PDF button — filled */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 h-[34px] rounded-md bg-[#132651] hover:bg-[#132651]/90 transition-colors cursor-pointer"
            style={{ minHeight: "34px" }}
          >
            <Download className="w-[18px] h-[18px] text-white flex-shrink-0" />
            <span
              className="font-bold"
              style={{
                fontFamily: "Sansation, sans-serif",
                fontSize: "12px",
                lineHeight: "160%",
                color: "#FFFFFF",
              }}
            >
              Download PDF
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
