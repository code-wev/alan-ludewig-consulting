"use client";

import { ChevronRight, Search, ChevronDown, Eye, Download, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function InspectionChecklistPage() {
  return (
    <div className="flex flex-col gap-10 w-full max-w-[1664px] mx-auto pb-10">
      {/* Breadcrumb */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-xs text-[#5A6886] font-sans">
          <Link href="/dashboard" className="hover:text-[#132651] transition-colors">Dashboard</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/document-library" className="hover:text-[#132651] transition-colors">Document Library</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="hover:text-[#132651] transition-colors cursor-pointer">RAMS Builder</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#132651]">Inspection</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-[-16px]">
        {/* Header & Toggle Actions */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
          <div className="flex flex-col gap-2 max-w-[1327px]">
            <h1 className="text-[30px] font-bold text-[#132651] leading-tight font-sans">Inspection Templates</h1>
            <p className="text-base text-[#5A6886] font-sans">
              Browse and start inspection, checklist, and audit forms for various tasks.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button variant="outline" className="h-[34px] px-4 border-[#132651] text-[#132651] font-bold hover:bg-slate-50 rounded-md">
              Checklists
            </Button>
            <Button className="h-[34px] px-4 bg-[#132651] text-white font-bold hover:bg-[#132651]/90 rounded-md">
              Question Sets
            </Button>
          </div>
        </div>

        {/* Search & Filter Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 bg-white border border-[#E2E8F0] shadow-sm rounded-xl mt-4">
          
          <div className="flex items-center gap-2 w-full lg:max-w-[408px] h-9 px-4 border border-[#E3E6EC] rounded-md bg-white">
            <Search className="w-5 h-5 text-[#A3ACBA]" />
            <input 
              type="text" 
              placeholder="Search by template name, ID, or keywords"
              className="w-full text-sm text-[#5A6886] placeholder:text-[#A3ACBA] outline-none bg-transparent"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <select className="h-9 pl-4 pr-10 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#5A6886] outline-none appearance-none bg-white cursor-pointer hover:border-[#132651] transition-colors">
                <option>All Types</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A6886] pointer-events-none" />
            </div>

            <div className="relative">
              <select className="h-9 pl-4 pr-10 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#5A6886] outline-none appearance-none bg-white cursor-pointer hover:border-[#132651] transition-colors">
                <option>All Formats</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A6886] pointer-events-none" />
            </div>

            <div className="relative">
              <select className="h-9 pl-4 pr-10 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#5A6886] outline-none appearance-none bg-white cursor-pointer hover:border-[#132651] transition-colors">
                <option>All Status</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A6886] pointer-events-none" />
            </div>

            <div className="relative">
              <select className="h-9 pl-4 pr-10 border-[1.5px] border-[#E3E6EC] rounded-md text-sm text-[#5A6886] outline-none appearance-none bg-white cursor-pointer hover:border-[#132651] transition-colors">
                <option>Sort: Recently Used</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A6886] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Templates Table Section */}
        <div className="flex flex-col gap-4 mt-2">
          
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-bold text-[#132651] font-sans">Recently Updated</h2>
            <button className="text-sm font-bold text-[#132651] hover:underline font-sans">
              View History
            </button>
          </div>

          <div className="w-full overflow-x-auto bg-white border border-[#E3E6EC] rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#D6E9FF] border-b-[1.5px] border-[#F3F5F8]">
                  <th className="py-3 px-6 text-sm font-bold text-[#132651] whitespace-nowrap">Name</th>
                  <th className="py-3 px-6 text-sm font-bold text-[#132651] whitespace-nowrap">Id/Refference</th>
                  <th className="py-3 px-6 text-sm font-bold text-[#132651] whitespace-nowrap">Questions</th>
                  <th className="py-3 px-6 text-sm font-bold text-[#132651] whitespace-nowrap">Last Updated</th>
                  <th className="py-3 px-6 text-sm font-bold text-[#132651] whitespace-nowrap">Status</th>
                  <th className="py-3 px-6 text-sm font-bold text-[#132651] whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                <TableRow 
                  name="Daily Site Safety Inspection" 
                  desc="General high-risk activity monitoring"
                  idRef="ALC-CK-001"
                  questions="24 Items"
                  date="10 May 2026" 
                  status="Updated" 
                />
                <TableRow 
                  name="Fire Equipment Audit v2" 
                  desc="Monthly extinguisher and alarm testing"
                  idRef="ALC-CK-001"
                  questions="24 Items"
                  date="10 May 2026" 
                  status="Updated" 
                />
                <TableRow 
                  name="Heavy Machinery Pre-Start" 
                  desc="Standardized operator verification list"
                  idRef="ALC-CK-001"
                  questions="24 Items"
                  date="10 May 2026" 
                  status="Updated" 
                />
                <TableRow 
                  name="Daily Site Safety Inspection" 
                  desc="General high-risk activity monitoring"
                  idRef="ALC-CK-001"
                  questions="24 Items"
                  date="10 May 2026" 
                  status="New" 
                />
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

// Subcomponents

function TableRow({ name, desc, idRef, questions, date, status }: { name: string, desc: string, idRef: string, questions: string, date: string, status: string }) {
  const isNew = status === "New";
  return (
    <tr className="border-b-[1.5px] border-[#F3F5F8] last:border-0 hover:bg-slate-50/50 transition-colors">
      <td className="py-4 px-6">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold text-[#132651] font-sans truncate">{name}</span>
          <span className="text-xs text-[#5A6886] font-sans truncate">{desc}</span>
        </div>
      </td>
      <td className="py-4 px-6 text-sm text-[#5A6886] font-sans">{idRef}</td>
      <td className="py-4 px-6 text-sm text-[#5A6886] font-sans">{questions}</td>
      <td className="py-4 px-6 text-sm text-[#5A6886] font-sans">{date}</td>
      <td className="py-4 px-6">
        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-sans ${isNew ? 'bg-[#132651] text-white' : 'bg-[#00BC7D] text-white'}`}>
          {status}
        </span>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 rounded text-[#5A6886] transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 rounded text-[#5A6886] transition-colors">
            <Download className="w-4 h-4" />
          </button>
          <button className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 rounded text-[#5A6886] transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
