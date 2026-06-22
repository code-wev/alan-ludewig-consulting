"use client";

import { ChevronRight, Info, Eye, Download, MoreHorizontal, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CustomRAModal } from "./custom-ra-modal";

export function RiskAssessmentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-10 w-full max-w-416 mx-auto pb-10">
      {/* Breadcrumb */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-xs text-[#5A6886] font-sans">
          <Link href="/dashboard" className="hover:text-brand-primary transition-colors">Dashboard</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/document-library" className="hover:text-brand-primary transition-colors">Document Library</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-primary">Risk Assessment Templates</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 -mt-4">
        {/* Header & Main Action */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
          <div className="flex flex-col gap-2 max-w-331.75">
            <h1 className="text-[30px] font-bold text-brand-primary leading-tight font-sans">Risk Assessment Templates</h1>
            <p className="text-base text-[#5A6886] font-sans">
              Browse and start from our library of task-specific risk assessment templates. These are pre-populated with common hazards and control measures to ensure consistent safety standards across all consulting sites.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="h-8.5 px-4 bg-brand-primary text-white font-bold hover:bg-brand-primary/90 rounded-md"
            >
              Create Custom RA
            </Button>
          </div>
        </div>

        {/* Info Box */}
        <div className="flex items-start gap-4 p-4 bg-[#E4EBFE] border border-[#ADC6FF80] rounded-lg mt-2">
          <div className="pt-0.5">
            <Info className="w-5 h-5 text-brand-primary" />
          </div>
          <p className="text-sm text-brand-primary font-sans">
            3 new Risk Assessment templates have been added to the library this month. View Latest Updates.
          </p>
        </div>

        {/* Templates Table Section */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="w-full overflow-x-auto bg-white border border-[#E3E6EC] rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#D6E9FF] border-b-[1.5px] border-[#F3F5F8]">
                  <th className="py-3 px-6 text-sm font-bold text-brand-primary whitespace-nowrap">Document Name</th>
                  <th className="py-3 px-6 text-sm font-bold text-brand-primary whitespace-nowrap">Format</th>
                  <th className="py-3 px-6 text-sm font-bold text-brand-primary whitespace-nowrap">Version</th>
                  <th className="py-3 px-6 text-sm font-bold text-brand-primary whitespace-nowrap">Last Updated</th>
                  <th className="py-3 px-6 text-sm font-bold text-brand-primary whitespace-nowrap">Status</th>
                  <th className="py-3 px-6 text-sm font-bold text-brand-primary whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                <TableRow 
                  name="Working at Heights Assessment" 
                  format="PDF / Editable" 
                  version="v2.4" 
                  date="10 May 2026" 
                  status="Updated" 
                />
                <TableRow 
                  name="Electrical Safety Checklist" 
                  format="Interactive Form" 
                  version="v1.8" 
                  date="10 May 2026" 
                  status="Updated" 
                />
                <TableRow 
                  name="COSHH Substance Review" 
                  format="MS Word (.docx)" 
                  version="v2.0" 
                  date="10 May 2026" 
                  status="Updated" 
                />
                <TableRow 
                  name="Heavy Machinery Operation" 
                  format="Question Set" 
                  version="v2.4" 
                  date="10 May 2026" 
                  status="New" 
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Secondary CTA Footer */}
        <div className="flex flex-col items-center justify-center gap-4 py-10 mt-6">
          <p className="text-base text-[#5A6886] font-sans text-center">
            Can&apos;t find a specific template for your industry?
          </p>
          <Button 
            onClick={() => setIsModalOpen(true)}
            variant="outline" 
            className="h-8.5 px-4 border-brand-primary text-brand-primary font-bold hover:bg-slate-50 rounded-md"
          >
            Request a Custom Template
          </Button>
        </div>
      </div>
      
      <CustomRAModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

// Subcomponents

function TableRow({ name, format, version, date, status }: { name: string, format: string, version: string, date: string, status: string }) {
  const isNew = status === "New";
  return (
    <tr className="border-b-[1.5px] border-[#F3F5F8] last:border-0 hover:bg-slate-50/50 transition-colors">
      <td className="py-4 px-6 text-sm text-brand-primary font-sans">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#5A6886] shrink-0" />
          <span className="truncate">{name}</span>
        </div>
      </td>
      <td className="py-4 px-6 text-sm text-[#5A6886] font-sans">{format}</td>
      <td className="py-4 px-6 text-sm text-[#5A6886] font-sans">{version}</td>
      <td className="py-4 px-6 text-sm text-[#5A6886] font-sans">{date}</td>
      <td className="py-4 px-6">
        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-sans ${isNew ? 'bg-brand-primary text-white' : 'bg-[#00BC7D] text-white'}`}>
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
