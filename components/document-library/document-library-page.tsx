"use client";

import { ChevronRight, Info, Search, ChevronDown, Eye, Download, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function DocumentLibraryPage() {
  return (
    <div className="flex flex-col gap-10 w-full max-w-[1664px] mx-auto pb-10">
      {/* Breadcrumb & Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-xs text-[#5A6886] font-sans">
          <Link href="/dashboard" className="hover:text-[#132651] transition-colors">Dashboard</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#132651]">Document Library</span>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <h1 className="text-[30px] font-bold text-[#132651] leading-tight font-sans">Document Library</h1>
          <p className="text-base text-[#5A6886] font-sans max-w-[800px]">
            Browse and access your documents, RAMS, forms, inspection checklists, question sets, and risk assessment templates.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Info Box */}
        <div className="flex items-start gap-4 p-4 bg-[#E4EBFE] border border-[#ADC6FF80] rounded-lg">
          <div className="pt-0.5">
            <Info className="w-5 h-5 text-[#132651]" />
          </div>
          <p className="text-sm text-[#132651] font-sans">
            Use the Document Library to access approved templates, inspection checklists, question sets, RAMS documents, and risk assessment resources assigned to your account.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-5">
          <Button variant="outline" className="h-[34px] px-4 border-[#132651] text-[#001137] font-bold hover:bg-slate-50">
            Complete an Inspection
          </Button>
          <Button variant="outline" className="h-[34px] px-4 border-[#132651] text-[#001137] font-bold hover:bg-slate-50">
            Start Risk Assessment
          </Button>
          <Button variant="outline" className="h-[34px] px-4 border-[#132651] text-[#001137] font-bold hover:bg-slate-50">
            View My Forms / Inspections
          </Button>
          <Button className="h-[34px] px-4 bg-[#132651] text-white font-bold hover:bg-[#132651]/90">
            View Saved Files
          </Button>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-wrap items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm gap-4 mt-2">
          <div className="flex items-center gap-2 border border-[#E3E6EC] rounded-md px-4 py-2 w-full md:w-[408px]">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, ID or keywords..."
              className="outline-none text-sm w-full text-[#5A6886] placeholder:text-[#5A6886]/70"
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <FilterDropdown label="All Categories" />
            <FilterDropdown label="All Types" />
            <FilterDropdown label="All Formats" />
            <FilterDropdown label="Sort: Recently Updated" className="w-[250px]" />
          </div>
        </div>

        {/* Recently Updated Section */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-bold text-[#132651] font-sans">Recently Updated</h2>
            <button className="text-xs font-bold text-[#132651] hover:underline">View History</button>
          </div>

          <div className="w-full overflow-x-auto bg-white border border-[#E3E6EC] rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#D6E9FF] border-b-[1.5px] border-[#F3F5F8]">
                  <th className="py-3 px-6 text-sm font-bold text-[#132651] whitespace-nowrap">Document Name</th>
                  <th className="py-3 px-6 text-sm font-bold text-[#132651] whitespace-nowrap">Category</th>
                  <th className="py-3 px-6 text-sm font-bold text-[#132651] whitespace-nowrap">ID</th>
                  <th className="py-3 px-6 text-sm font-bold text-[#132651] whitespace-nowrap">Type</th>
                  <th className="py-3 px-6 text-sm font-bold text-[#132651] whitespace-nowrap">Date</th>
                  <th className="py-3 px-6 text-sm font-bold text-[#132651] whitespace-nowrap">Status</th>
                  <th className="py-3 px-6 text-sm font-bold text-[#132651] whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  name="Fire Safety Checklist"
                  category="Risk Assessment"
                  id="RA-WAH-001"
                  type="PDF"
                  date="10 May 2026"
                  status="Updated"
                />
                <TableRow
                  name="Working at Height Risk Assessment"
                  category="Inspection Checklists"
                  id="RA-WAH-001"
                  type="Inspection Checklist"
                  date="10 May 2026"
                  status="Updated"
                />
                <TableRow
                  name="COSHH Assessment Form"
                  category="Policy"
                  id="RA-WAH-001"
                  type="PDF"
                  date="10 May 2026"
                  status="Updated"
                />
                <TableRow
                  name="Site Induction Checklist"
                  category="Inspection Checklists"
                  id="RA-WAH-001"
                  type="PDF"
                  date="10 May 2026"
                  status="New"
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Browse by Category Section */}
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-bold text-[#132651] font-sans">Browse by Category</h2>
            <button className="text-xs font-bold text-[#132651] hover:underline">View History</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/risk-assessments">
              <CategoryCard
                icon="/icons/document-library/risk-assessments.svg"
                title="Risk Assessments"
                description="Access risk assessment templates and start a new risk assessment using guided category, hazard, and control measure selection."
                count="42 documents"
                primaryAction="Start Risk Assessment"
                secondaryAction="Browse Templates"
              />
            </Link>
            <CategoryCard
              icon="/icons/document-library/inspection-checklists.svg"
              title="Inspection Checklists"
              description="Browse inspection checklist templates and complete site inspections using assigned question sets."
              count="38 documents"
              primaryAction="Complete an Inspection"
              secondaryAction="Browse Inspection Checklist"
            />
            <CategoryCard
              icon="/icons/document-library/audit-forms.svg"
              title="Audit Forms"
              description="Site audit and compliance verification forms"
              count="24 documents"
              secondaryAction="Browse Templates"
            />
            <CategoryCard
              icon="/icons/document-library/policies.svg"
              title="Policies"
              description="Health & safety policy templates"
              count="16 documents"
              secondaryAction="Browse Templates"
            />
            <CategoryCard
              icon="/icons/document-library/procedures.svg"
              title="Procedures"
              description="Safe systems of work and operational procedures"
              count="31 documents"
              secondaryAction="Browse Templates"
            />
            <CategoryCard
              icon="/icons/document-library/permit-templates.svg"
              title="Permit Templates"
              description="Hot work, confined space, and other permit forms"
              count="12 documents"
              secondaryAction="Browse Templates"
            />

            <CategoryCard
              icon="/icons/document-library/question-sets.svg"
              title="Question Sets"
              description="Structured question sets for completing checklists, RAMS, and risk assessments."
              count="19 Sets"
              primaryAction="Complete an Inspection"
              secondaryAction="Browse Templates"
              iconBgColor="bg-[#155DFC]/10"
            />
            <CategoryCard
              icon="/icons/document-library/coshh.svg"
              title="COSHH"
              description="Chemical substance risk assessment templates"
              count="15 documents"
              secondaryAction="Browse Templates"
            />

            {/* Admin Lite Upgrade Card */}
            <div className="flex flex-col p-6 gap-4 border-[1.5px] border-[#D0D4DC] rounded-xl bg-white relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                  <Image src="/icons/document-library/admin-lite.svg" alt="Admin Lite" width={24} height={24} />
                </div>
              </div>
              <h3 className="text-[18px] font-bold text-[#132651] font-sans">Admin Lite</h3>
              <p className="text-sm text-[#5A6886] leading-relaxed">Business admin and compliance documents</p>
              <div className="text-sm text-[#5A6886] font-medium">22 documents</div>

              {/* Overlay for Upgrade */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] flex flex-col items-center justify-center gap-2">
                <Image src="/icons/document-library/upgrade-lock.svg" alt="Lock" width={32} height={32} />
                <span className="text-sm font-medium text-[#132651]">Upgrade to Access</span>
                <Button className="h-9 mt-1 px-4 bg-[#132651] text-white hover:bg-[#132651]/90 rounded-lg">View Plans</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 pt-8 border-t border-[#E3E6EC] flex justify-center">
          <p className="text-sm text-[#5A6886]">
            Can't find a specific document? <a href="#" className="text-[#132651] font-medium hover:underline">Request a Custom Template</a>
          </p>
        </div>
      </div>
    </div>
  );
}

// Subcomponents

function FilterDropdown({ label, className }: { label: string, className?: string }) {
  return (
    <button className={`flex items-center justify-between px-4 py-2 bg-white border-[1.5px] border-[#E3E6EC] rounded-md gap-3 hover:bg-slate-50 transition-colors ${className}`}>
      <span className="text-sm text-[#5A6886] font-sans">{label}</span>
      <ChevronDown className="w-4 h-4 text-[#5A6886]" />
    </button>
  );
}

function TableRow({ name, category, id, type, date, status }: { name: string, category: string, id: string, type: string, date: string, status: string }) {
  const isNew = status === "New";
  return (
    <tr className="border-b-[1.5px] border-[#F3F5F8] last:border-0 hover:bg-slate-50/50 transition-colors">
      <td className="py-4 px-6 text-sm text-[#132651] font-sans max-w-[200px] truncate">{name}</td>
      <td className="py-4 px-6 text-sm text-[#5A6886] font-sans">{category}</td>
      <td className="py-4 px-6 text-sm text-[#5A6886] font-sans">{id}</td>
      <td className="py-4 px-6 text-sm text-[#5A6886] font-sans">{type}</td>
      <td className="py-4 px-6 text-sm text-[#5A6886] font-sans">{date}</td>
      <td className="py-4 px-6">
        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-sans ${isNew ? 'bg-[#132651] text-white' : 'bg-[#00BC7D] text-white'}`}>
          {status}
        </span>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 rounded text-[#5A6886]">
            <Eye className="w-4 h-4" />
          </button>
          <button className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 rounded text-[#5A6886]">
            <Download className="w-4 h-4" />
          </button>
          <button className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 rounded text-[#5A6886]">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

function CategoryCard({
  icon,
  title,
  description,
  count,
  primaryAction,
  secondaryAction,
  iconBgColor = "bg-[#EFF6FF]"
}: {
  icon: string;
  title: string;
  description: string;
  count: string;
  primaryAction?: string;
  secondaryAction?: string;
  iconBgColor?: string;
}) {
  return (
    <div className="flex flex-col p-6 gap-4 border-[1.5px] border-[#E3E6EC] rounded-xl bg-white hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-start">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBgColor}`}>
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-[#ECFDF5] rounded text-xs font-medium text-[#007A55]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Included
        </div>
      </div>
      <h3 className="text-[18px] font-bold text-[#132651] font-sans mt-1">{title}</h3>
      <p className="text-sm text-[#5A6886] min-h-[44px] leading-relaxed font-sans">{description}</p>
      <div className="text-sm text-[#5A6886] font-sans">{count}</div>

      <div className="flex flex-wrap gap-3 mt-2">
        {secondaryAction && (
          <Button variant="outline" className="h-[34px] px-4 border-[#132651] text-[#132651] font-bold hover:bg-slate-50 w-full sm:w-auto flex-1">
            {secondaryAction}
          </Button>
        )}
        {primaryAction && (
          <Button className="h-[34px] px-4 bg-[#132651] text-white font-bold hover:bg-[#132651]/90 w-full sm:w-auto flex-1">
            {primaryAction}
          </Button>
        )}
      </div>
    </div>
  );
}
