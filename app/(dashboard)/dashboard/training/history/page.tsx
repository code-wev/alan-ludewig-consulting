"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Search,
  Eye,
  Download,
  MoreVertical,
  ChevronDown,
  FileText,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TrainingHistoryPage() {
  const tableData = [
    {
      courseName: "Fire Safety Marshal Level 2",
      module: "Workplace Compliance",
      completionDate: "Oct 12, 2023",
      certificate: "CERT-99210-F5",
      expiry: "Oct 12, 2025",
      status: "Active",
      score: "98%",
    },
    {
      courseName: "Fire Safety Marshal Level 2",
      module: "Workplace Compliance",
      completionDate: "Oct 12, 2023",
      certificate: "CERT-99210-F5",
      expiry: "Oct 12, 2025",
      status: "Active",
      score: "100%",
    },
    {
      courseName: "Fire Safety Marshal Level 2",
      module: "Workplace Compliance",
      completionDate: "Oct 12, 2023",
      certificate: "CERT-99210-F5",
      expiry: "May 22, 2024",
      status: "Expiring Soon",
      score: "100%",
    },
    {
      courseName: "Fire Safety Marshal Level 2",
      module: "Workplace Compliance",
      completionDate: "Oct 12, 2023",
      certificate: "CERT-99210-F5",
      expiry: "Oct 12, 2025",
      status: "Active",
      score: "98%",
    },
    {
      courseName: "Fire Safety Marshal Level 2",
      module: "Workplace Compliance",
      completionDate: "Oct 12, 2023",
      certificate: "CERT-99210-F5",
      expiry: "Oct 12, 2025",
      status: "Active",
      score: "95%",
    },
    {
      courseName: "Fire Safety Marshal Level 2",
      module: "Workplace Compliance",
      completionDate: "Oct 12, 2023",
      certificate: "CERT-99210-F5",
      expiry: "Oct 12, 2025",
      status: "Active",
      score: "45%",
    },
    {
      courseName: "Fire Safety Marshal Level 2",
      module: "Workplace Compliance",
      completionDate: "Oct 12, 2023",
      certificate: "CERT-99210-F5",
      expiry: "-",
      status: "In Progress",
      score: "45%",
    },
  ];

  return (
    <div className="flex flex-col gap-8 text-brand-primary pb-10">
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
        <span className="text-brand-primary">Training History & Certificates</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-[30px] font-bold leading-[1.2] text-brand-primary">
            Training History & Certificates
          </h1>
          <p className="max-w-[1170px] text-[16px] leading-normal text-brand-secondary">
            View, download, manage and review completed inspections, assessments and compliance documents.
          </p>
        </div>
        <div className="flex shrink-0 items-center">
          <Button className="h-[34px] rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]">
            Export Records
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Completed */}
        <div className="flex flex-col justify-between rounded-[12px] border border-[#e3e6ec] bg-white p-6 shadow-sm h-[155px]">
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-brand-secondary">Total Completed</span>
            <CheckCircle2 className="size-5 text-brand-primary" fill="#132651" stroke="white" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[28px] font-bold text-brand-primary">1,284</span>
            <div className="flex items-center gap-1 text-[12px]">
              <span className="font-bold text-[#00a63e]">&uarr; 12%</span>
              <span className="text-brand-secondary">this year</span>
            </div>
          </div>
        </div>

        {/* Active Certificates */}
        <div className="flex flex-col justify-between rounded-[12px] border border-[#e3e6ec] bg-white p-6 shadow-sm h-[155px]">
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-brand-secondary">Active Certificates</span>
            <CheckCircle2 className="size-5 text-brand-primary" fill="#132651" stroke="white" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[28px] font-bold text-brand-primary">942</span>
            <span className="text-[12px] text-brand-secondary">Active Now</span>
          </div>
        </div>

        {/* Expiring Soon */}
        <div className="flex flex-col justify-between rounded-[12px] border border-[#e3e6ec] bg-white p-6 shadow-sm h-[155px]">
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-brand-secondary">Expiring Soon</span>
            <AlertTriangle className="size-5 text-[#d92d20]" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[28px] font-bold text-[#d92d20]">14</span>
            <span className="text-[12px] text-[#d92d20]">Action Required</span>
          </div>
        </div>

        {/* In Progress */}
        <div className="flex flex-col justify-between rounded-[12px] border border-[#e3e6ec] bg-white p-6 shadow-sm h-[155px]">
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-brand-secondary">In Progress</span>
            <Clock className="size-5 text-brand-secondary" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[28px] font-bold text-brand-primary">27</span>
            <span className="text-[12px] text-brand-secondary">In Queue</span>
          </div>
        </div>
      </div>

      {/* Main Table Section */}
      <div className="flex flex-col rounded-[12px] border border-[#e3e6ec] bg-white shadow-sm overflow-hidden">
        {/* Filters */}
        <div className="flex flex-col gap-4 border-b border-[#e3e6ec] p-4 lg:flex-row lg:items-end lg:justify-between bg-white">
          <div className="flex w-full flex-col gap-2 lg:w-[380px]">
            <span className="text-[14px] text-brand-primary">Search</span>
            <div className="flex h-9 items-center gap-2 rounded-[6px] border border-[#e3e6ec] bg-white px-3">
              <Search className="size-4 text-brand-secondary" />
              <input
                type="text"
                placeholder="Filter by course, certificate #, or employee..."
                className="flex-1 bg-transparent text-[14px] outline-none placeholder:text-brand-secondary"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex flex-col gap-2">
              <span className="text-[14px] text-brand-primary">Status</span>
              <div className="flex h-9 w-[178px] items-center justify-between rounded-[6px] border border-[#e3e6ec] bg-white px-3 cursor-pointer">
                <span className="text-[14px] text-brand-secondary">All Statuses</span>
                <ChevronDown className="size-4 text-brand-secondary" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[14px] text-brand-primary">Date Range</span>
              <div className="flex h-9 w-[178px] items-center justify-between rounded-[6px] border border-[#e3e6ec] bg-white px-3 cursor-pointer">
                <span className="text-[14px] text-brand-secondary">mm/dd/yyyy</span>
                <ChevronDown className="size-4 text-brand-secondary" />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left text-[14px]">
            <thead>
              <tr className="bg-[#e6f0ff] text-[12px] font-bold text-brand-primary border-b border-[#e3e6ec]">
                <th className="w-12 px-6 py-3 text-center">
                  <input type="checkbox" className="size-3.5 rounded border-gray-300" />
                </th>
                <th className="px-4 py-3">Course Name</th>
                <th className="px-4 py-3">Completion Date</th>
                <th className="px-4 py-3">Certificate</th>
                <th className="px-4 py-3">Expiry</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Score</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e3e6ec]">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 bg-white">
                  <td className="px-6 py-4 text-center">
                    <input type="checkbox" className="size-3.5 rounded border-gray-300" />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[14px] font-bold text-brand-primary">{row.courseName}</span>
                      <span className="text-[12px] text-brand-secondary">Module: {row.module}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-[14px] text-brand-secondary">{row.completionDate}</td>
                  <td className="px-4 py-4 text-[14px] text-brand-secondary">{row.certificate}</td>
                  <td className={`px-4 py-4 text-[14px] ${row.expiry === 'May 22, 2024' ? 'text-[#d92d20]' : 'text-brand-secondary'}`}>
                    {row.expiry}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center rounded-[4px] px-2.5 py-0.5 text-[12px] font-bold text-white ${
                        row.status === "Active"
                          ? "bg-[#00bc7d]"
                          : row.status === "Expiring Soon"
                          ? "bg-[#d92d20]"
                          : "bg-brand-primary"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-[14px] text-brand-secondary">{row.score}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="flex size-7 items-center justify-center rounded-[6px] text-[#155dfc] hover:bg-blue-50">
                        <Eye className="size-4" />
                      </button>
                      <button className="flex size-7 items-center justify-center rounded-[6px] text-[#10b981] hover:bg-green-50">
                        <Download className="size-4" />
                      </button>
                      <button className="flex size-7 items-center justify-center rounded-[6px] text-brand-secondary hover:bg-gray-100">
                        <MoreVertical className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Assign Course Banner */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[12px] bg-brand-primary p-8 text-white shadow-sm h-[180px]">
          <div className="relative z-10 flex flex-col gap-2">
            <h2 className="text-[18px] font-bold">Need to assign a new course?</h2>
            <p className="text-[14px] text-white/70 max-w-[340px] leading-normal">
              You can bulk-assign regulatory training to your team members directly from the staff portal.
            </p>
          </div>
          <div className="relative z-10">
            <Button className="h-[34px] rounded-[6px] bg-white px-4 text-[12px] font-bold text-brand-primary hover:bg-gray-100">
              Open Staff Portal
            </Button>
          </div>
          {/* Abstract hat icon in bottom right */}
          <div className="absolute -bottom-8 -right-8 opacity-10">
            <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
        </div>

        {/* Compliance Reporting */}
        <div className="flex flex-col justify-between rounded-[12px] border border-[#e3e6ec] bg-white p-8 shadow-sm h-[180px]">
          <div className="flex flex-col gap-2">
            <h2 className="text-[18px] font-bold text-brand-primary">Compliance Reporting</h2>
            <p className="text-[14px] leading-normal text-brand-secondary max-w-[400px]">
              Generate executive summaries and auditor-ready compliance logs in PDF or XLSX format.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-[14px] font-bold text-brand-primary hover:underline">
              <FileText className="size-4" />
              Auditor&apos;s Export
            </button>
            <button className="flex items-center gap-2 text-[14px] font-bold text-brand-primary hover:underline">
              <RotateCcw className="size-4" />
              Export History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
