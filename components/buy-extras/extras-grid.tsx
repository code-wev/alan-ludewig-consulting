"use client";

import React, { useState } from "react";
import { ExtraCard } from "./extra-card";
import {
  MapPin,
  Video,
  FileText,
  ClipboardList,
  Flame,
  BookOpen,
  Database,
} from "lucide-react";

const extras = [
  {
    icon: <MapPin className="w-8 h-8" style={{ color: "#155DFC" }} />,
    headerBg: "#EFF6FF",
    price: "£195",
    accentColor: "#155DFC",
    title: "Site Visit & Inspection",
    description:
      "On-site inspection, audit, or consultation with detailed report",
    features: [
      "2-3 hour site visit",
      "Detailed written report",
      "Improvement action plan",
      "Follow-up support call",
    ],
  },
  {
    icon: <Video className="w-8 h-8" style={{ color: "#9810FA" }} />,
    headerBg: "#FAF5FF",
    price: "£95",
    accentColor: "#9810FA",
    title: "1hr Teams Call",
    description:
      "Virtual consultation for advice, document review, or training",
    features: [
      "1-hour video call",
      "Expert H&S advisor",
      "Document review included",
      "Session notes provided",
    ],
  },
  {
    icon: <FileText className="w-8 h-8" style={{ color: "#009966" }} />,
    headerBg: "#ECFDF5",
    price: "£145",
    accentColor: "#009966",
    title: "Bespoke RAMS",
    description:
      "Custom risk assessment and method statement written for your task",
    features: [
      "Task-specific RAMS document",
      "Legal compliance review",
      "Revision included",
      "Digital delivery",
    ],
  },
  {
    icon: <ClipboardList className="w-8 h-8" style={{ color: "#E17100" }} />,
    headerBg: "#FFFBEB",
    price: "£120",
    accentColor: "#E17100",
    title: "Bespoke Form",
    description:
      "Custom checklist, form, or inspection template designed for you",
    features: [
      "Fully tailored template",
      "Digital & print-ready format",
      "Branded to your company",
      "Unlimited revisions",
    ],
  },
  {
    icon: <Flame className="w-8 h-8" style={{ color: "#DC2626" }} />,
    headerBg: "#FEF2F2",
    price: "£250",
    accentColor: "#DC2626",
    title: "Fire Inspection",
    description:
      "Complete fire safety inspection with detailed compliance report",
    features: [
      "Full fire risk assessment",
      "Compliance grading report",
      "Recommended actions list",
      "Certificate of inspection",
    ],
  },
  {
    icon: <BookOpen className="w-8 h-8" style={{ color: "#4F46E5" }} />,
    headerBg: "#EEF2FF",
    price: "£395",
    accentColor: "#4F46E5",
    title: "ISO45001 Suite",
    description:
      "Complete ISO45001 documentation package and implementation guidance",
    features: [
      "Full documentation package",
      "Implementation guidance",
      "Gap analysis report",
      "Audit-ready templates",
    ],
  },
  {
    icon: <Database className="w-8 h-8" style={{ color: "#0092B8" }} />,
    headerBg: "#ECFEFF",
    price: "£25/mo",
    accentColor: "#0092B8",
    title: "Extra Document Storage",
    description: "Additional 10GB storage for your saved files and documents",
    features: [
      "10GB extra storage",
      "Instant activation",
      "Access across all devices",
      "Cancel anytime",
    ],
  },
];

export function ExtrasGrid() {
  const [purchasedId, setPurchasedId] = useState<number | null>(null);

  return (
    <>
      {/* Row 1 – 3 cards */}
      <div className="flex flex-wrap gap-6">
        {extras.slice(0, 3).map((extra, i) => (
          <div key={i} className="flex-1 min-w-[300px]">
            <ExtraCard
              {...extra}
              onBuyNow={() => setPurchasedId(i)}
            />
          </div>
        ))}
      </div>

      {/* Row 2 – 3 cards */}
      <div className="flex flex-wrap gap-6">
        {extras.slice(3, 6).map((extra, i) => (
          <div key={i + 3} className="flex-1 min-w-[300px]">
            <ExtraCard
              {...extra}
              onBuyNow={() => setPurchasedId(i + 3)}
            />
          </div>
        ))}
      </div>

      {/* Row 3 – last single card (full width within its column) */}
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 min-w-[300px] max-w-[510px]">
          <ExtraCard
            {...extras[6]}
            onBuyNow={() => setPurchasedId(6)}
          />
        </div>
      </div>

      {/* Simple toast notification */}
      {purchasedId !== null && (
        <div
          className="fixed bottom-6 right-6 bg-[#132651] text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3"
          onClick={() => setPurchasedId(null)}
        >
          <span className="text-green-400">✓</span>
          <span className="text-sm font-semibold" style={{ fontFamily: "Sansation, sans-serif" }}>
            {extras[purchasedId].title} added to your order!
          </span>
        </div>
      )}
    </>
  );
}
