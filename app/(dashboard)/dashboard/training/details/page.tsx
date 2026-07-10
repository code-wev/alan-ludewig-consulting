"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  CheckCircle2,
  PlayCircle,
  Lock,
  Award,
  BookOpen,
  CircleAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CourseDetailsPage() {
  return (
    <div className="flex flex-col gap-6 text-brand-primary pb-10">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-[12px]">
        <Link href="/dashboard" className="text-brand-secondary hover:text-brand-primary transition-colors">
          Dashboard
        </Link>
        <ChevronRight className="size-3.5 text-brand-secondary" />
        <Link href="/dashboard/training" className="text-brand-secondary hover:text-brand-primary transition-colors">
          Training
        </Link>
        <ChevronRight className="size-3.5 text-brand-secondary" />
        <span className="text-brand-primary">Course Details</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between mt-2">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="rounded-[6px] bg-[#00bc7d] px-2.5 py-1 text-[12px] text-white">
              Available
            </span>
            <div className="flex items-center gap-1 text-[12px] text-brand-secondary">
              <Clock className="size-3.5" />
              <span>45 mins</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[30px] font-bold leading-[1.2] text-brand-primary">
              Working at Height Awareness
            </h1>
            <p className="max-w-[996px] text-[16px] leading-normal text-brand-secondary">
              Essential safety protocols and legal requirements for personnel involved in planning, supervising, or carrying out work at height.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <Button
            variant="outline"
            className="h-[34px] rounded-[6px] border-brand-primary px-4 text-[12px] font-bold text-brand-primary hover:bg-gray-50"
          >
            Download Course Guide
          </Button>
          <Button className="h-[34px] rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]">
            Start Training
          </Button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="mt-4 grid gap-8 xl:grid-cols-12">
        {/* Left Column */}
        <div className="flex flex-col gap-8 xl:col-span-9">
          
          {/* Atmospheric Banner */}
          <div className="relative flex h-[256px] w-full flex-col justify-end overflow-hidden rounded-[12px] border border-[#e3e6ec] bg-brand-primary">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_30%,#132651_100%)] z-10" />
            <div className="absolute inset-0 bg-linear-to-r from-brand-primary to-[#3a558a] opacity-50 z-0" />
            {/* Adding an abstract shape or pattern since we don't have the image asset */}
            <div className="absolute inset-0 z-0 opacity-20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <div className="relative z-20 flex flex-col gap-1 p-8">
              <span className="text-[12px] text-[#a3acba]">Industry Certification</span>
              <h2 className="text-[20px] font-bold text-white">CITB & HSE Compliant Module</h2>
            </div>
          </div>

          {/* Description & Learning Outcomes */}
          <div className="flex flex-col gap-8 rounded-[20px] border border-[#e3e6ec] bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-3">
              <h3 className="text-[16px] font-bold text-brand-primary tracking-wide">
                Course Description
              </h3>
              <p className="text-[14px] leading-[1.6] text-brand-secondary">
                This comprehensive module covers the fundamental safety requirements of the Work at Height Regulations 2005. Designed for anyone working in environments where a fall could cause personal injury, this course provides the critical knowledge needed to assess risks, select appropriate equipment, and implement effective safety controls.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <h3 className="text-[16px] font-bold text-brand-primary uppercase tracking-wide">
                  LEARNING OUTCOMES
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Identify work at height activities and legal duties.",
                    "Apply the hierarchy of control measures.",
                    "Conduct a robust risk assessment for height work.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#10b981]" />
                      <span className="text-[14px] text-brand-secondary leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[16px] font-bold text-brand-primary uppercase tracking-wide">
                  CORE COMPETENCIES
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Equipment inspection and selection criteria.",
                    "Emergency planning and rescue procedures.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#10b981]" />
                      <span className="text-[14px] text-brand-secondary leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Course Curriculum */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-bold text-brand-primary">
                Course Curriculum
              </h3>
              <span className="text-[12px] text-brand-secondary">
                6 Modules • 45m Total
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {/* Module 1 */}
              <div className="flex items-center gap-4 rounded-[6px] border border-[#e3e6ec] bg-white p-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-[16px] font-bold text-brand-primary">
                  01
                </div>
                <div className="flex flex-1 flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-bold text-brand-primary">Introduction to Height Safety</span>
                    <span className="text-[12px] font-bold text-[#15803d]">100% Complete</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e5e7eb]">
                    <div className="h-full bg-[#15803d]" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="ml-2 flex size-6 shrink-0 items-center justify-center">
                  <CheckCircle2 className="size-5 text-[#15803d]" />
                </div>
              </div>

              {/* Module 2 */}
              <div className="flex items-center gap-4 rounded-[6px] border border-[#e3e6ec] bg-white p-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-[16px] font-bold text-brand-primary">
                  02
                </div>
                <div className="flex flex-1 flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-bold text-brand-primary">Risks & Hazards Assessment</span>
                    <span className="text-[12px] font-bold text-brand-primary">40% Complete</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e5e7eb]">
                    <div className="h-full bg-brand-primary" style={{ width: "40%" }} />
                  </div>
                </div>
                <div className="ml-2 flex size-6 shrink-0 items-center justify-center">
                  <PlayCircle className="size-5 text-brand-primary" />
                </div>
              </div>

              {/* Modules 3-6 Locked */}
              {[
                { num: "03", title: "Equipment Selection" },
                { num: "04", title: "Control Measures" },
                { num: "05", title: "Emergency & Rescue" },
                { num: "06", title: "Knowledge Check" },
              ].map((mod) => (
                <div key={mod.num} className="flex items-center gap-4 rounded-[6px] border border-[#e3e6ec] bg-white p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f3f5f8] text-[16px] font-bold text-brand-secondary">
                    {mod.num}
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-bold text-brand-secondary">{mod.title}</span>
                      <span className="text-[12px] text-brand-secondary">Locked</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e5e7eb]" />
                  </div>
                  <div className="ml-2 flex size-6 shrink-0 items-center justify-center">
                    <Lock className="size-4 text-brand-secondary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 xl:col-span-3">
          
          {/* Course Progress */}
          <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-6 shadow-sm">
            <h3 className="text-[16px] font-bold text-brand-primary">Course Progress</h3>
            <div className="flex justify-center py-2">
              <div className="relative flex size-[100px] items-center justify-center rounded-full">
                {/* SVG Ring background */}
                <svg className="absolute inset-0 size-full -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="transparent"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  {/* SVG Ring progress */}
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="transparent"
                    stroke="#132651"
                    strokeWidth="8"
                    strokeDasharray="289.026"
                    strokeDashoffset="216.77" /* 75% offset meaning 25% shown */
                  />
                </svg>
                <span className="text-[20px] font-bold text-brand-primary">25%</span>
              </div>
            </div>
            <p className="text-center text-[12px] text-brand-secondary">
              Estimated 35 minutes remaining to finish this course.
            </p>
            <Button className="h-[34px] w-full rounded-[6px] bg-brand-primary text-[12px] font-bold text-white hover:bg-[#0d1b3a]">
              Resume Course
            </Button>
          </div>

          {/* Certification */}
          <div className="flex flex-col gap-5 rounded-[12px] border border-[#e3e6ec] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-[8px] bg-[#eff6ff]">
                <Award className="size-5 text-[#155dfc]" />
              </div>
              <h3 className="text-[16px] font-bold text-brand-primary">Certification</h3>
            </div>
            <div className="flex flex-col gap-2 rounded-[8px] bg-[#f8fafc] p-4 border border-[#e3e6ec]/50">
              <div className="flex items-center gap-2">
                <CircleAlert className="size-4 text-[#ef4444]" />
                <span className="text-[14px] font-bold text-brand-primary">Not yet eligible</span>
              </div>
              <p className="text-[12px] leading-[1.6] text-brand-secondary">
                You must complete all modules and achieve a minimum score of 80% in the Knowledge Check to unlock your certificate.
              </p>
            </div>
          </div>

          {/* Provider Details */}
          <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-6 shadow-sm">
            <h3 className="text-[16px] font-bold text-brand-primary">Provider Details</h3>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-primary text-[14px] font-bold text-white">
                ALC
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-brand-primary">Alan Ludewig Consulting</span>
                <span className="text-[12px] text-brand-secondary">Accredited Safety Training</span>
              </div>
            </div>
            <div className="flex flex-col text-[12px]">
              <div className="flex items-center justify-between border-b border-[#e3e6ec] py-3 first:pt-0">
                <span className="text-brand-secondary">Accreditation</span>
                <span className="font-bold text-brand-primary">HSE / CITB</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#e3e6ec] py-3">
                <span className="text-brand-secondary">Validity</span>
                <span className="font-bold text-brand-primary">3 Years</span>
              </div>
              <div className="flex items-center justify-between pt-3">
                <span className="text-brand-secondary">Support</span>
                <Link href="#" className="font-bold text-brand-primary hover:underline">Get Help</Link>
              </div>
            </div>
          </div>

          {/* Safety Handbook */}
          <div className="flex flex-col gap-4 rounded-[12px] bg-brand-primary p-6 text-white shadow-sm">
            <BookOpen className="size-6 text-white/80" />
            <div className="flex flex-col gap-2">
              <h3 className="text-[16px] font-bold text-white">Safety Handbook 2024</h3>
              <p className="text-[12px] leading-[1.6] text-white/70">
                Essential reading for all site personnel regarding height safety and legislation.
              </p>
            </div>
            <Link href="#" className="mt-2 text-[14px] font-bold flex items-center gap-2 text-white hover:underline">
              Read Now <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
