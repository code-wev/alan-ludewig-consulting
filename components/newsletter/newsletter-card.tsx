"use client";

import React from "react";
import { BookOpen, Download, FileText } from "lucide-react";

export type NewsletterCategory =
  | "Regulatory Updates"
  | "Industry Updates"
  | "Company News";

export interface NewsletterCardProps {
  bannerBg: string;
  iconColor: string;
  bannerDate: string;
  category: NewsletterCategory;
  date: string;
  title: string;
  description: string;
  readUrl?: string;
  pdfUrl?: string;
}

const CATEGORY_STYLES: Record<
  NewsletterCategory,
  { bg: string; text: string }
> = {
  "Regulatory Updates": { bg: "#EFF6FF", text: "#1447E6" },
  "Industry Updates": { bg: "#F0FDF4", text: "#15803D" },
  "Company News": { bg: "#FFF7ED", text: "#C2410C" },
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
    <div className='flex flex-col bg-white border border-[#D0D4DC] rounded-xl overflow-hidden h-full'>
      {/* ── Banner ── */}
      <div
        className='flex items-center justify-center w-full'
        style={{ backgroundColor: bannerBg, minHeight: "140px" }}>
        <div className='flex flex-col items-center gap-3 py-6'>
          <div
            className='w-12 h-12 flex items-center justify-center rounded-lg'
            style={{ backgroundColor: `${iconColor}22` }}>
            <FileText className='w-7 h-7' style={{ color: iconColor }} />
          </div>
          <span
            style={{
              fontFamily: "Sansation, sans-serif",
              fontSize: "14px",
              lineHeight: "160%",
              color: "#132651",
            }}>
            {bannerDate}
          </span>
        </div>
      </div>

      {/* ── Body ── */}
      <div className='flex flex-col gap-3 p-5 flex-1'>
        {/* Badge + date */}
        <div className='flex items-center gap-2 flex-wrap'>
          <span
            className='px-2.5 py-1 rounded font-medium'
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              lineHeight: "16px",
              backgroundColor: badge.bg,
              color: badge.text,
            }}>
            {category}
          </span>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              lineHeight: "16px",
              color: "#5A6886",
            }}>
            {date}
          </span>
        </div>

        {/* Title */}
        <h3
          className='font-bold'
          style={{
            fontFamily: "Sansation, sans-serif",
            fontSize: "18px",
            lineHeight: "160%",
            color: "#132651",
          }}>
          {title}
        </h3>

        {/* Description — grows to push buttons to bottom */}
        <p
          className='flex-1'
          style={{
            fontFamily: "Sansation, sans-serif",
            fontSize: "14px",
            lineHeight: "160%",
            color: "#5A6886",
          }}>
          {description}
        </p>

        {/* ── Action buttons ──
            On mobile: stack vertically (flex-col).
            On sm+: side by side (flex-row). Each button stretches
            equally so "Download PDF" never wraps awkwardly.        */}
        <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center gap-2 pt-1'>
          {/* Read — outlined */}
          <a
            href={readUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-brand-primary bg-white hover:bg-brand-primary/5 transition-colors cursor-pointer sm:flex-1'>
            <BookOpen className='w-4 h-4 text-brand-primary shrink-0' />
            <span
              className='font-bold whitespace-nowrap'
              style={{
                fontFamily: "Sansation, sans-serif",
                fontSize: "12px",
                lineHeight: "160%",
                color: "#132651",
              }}>
              Read
            </span>
          </a>

          {/* Download PDF — filled */}
          <a
            href={pdfUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-brand-primary hover:bg-brand-primary/90 transition-colors cursor-pointer sm:flex-1'>
            <Download className='w-4 h-4 text-white shrink-0' />
            <span
              className='font-bold whitespace-nowrap'
              style={{
                fontFamily: "Sansation, sans-serif",
                fontSize: "12px",
                lineHeight: "160%",
                color: "#FFFFFF",
              }}>
              Download PDF
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
