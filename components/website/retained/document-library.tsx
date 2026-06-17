import { Search, FileText, Download } from "lucide-react";
import Link from "next/link";

export default function DocumentLibraryHighlight() {
  return (
    <section className="bg-white w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col lg:flex-row items-start justify-between gap-[60px]">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-[32px] w-full lg:max-w-[870px] shrink-0">
          <div className="flex flex-col gap-[20px] items-start">
            <div className="bg-[#e0f2fe] px-[22px] py-[2px] rounded-full">
              <span className="text-[14px] font-bold text-[#0284c7]">
                Document Library
              </span>
            </div>
            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[40px] font-bold text-[#132651] leading-[1.2] max-w-[754px]">
                Find, Save and Download the Right Health & Safety Documents
              </h2>
              <p className="text-[16px] text-[#5a6886] leading-[1.6]">
                Members can search, filter, save, and download documents from a structured library. Documents can be organised by category, membership access level, format, and version
              </p>
              <p className="text-[14px] text-[#7b8496] leading-[1.6]">
                Uploaded documents can remain available in their native format where applicable, including Word, Excel, PDF, and PowerPoint. New and updated documents can appear in the correct member library based on category and access level.
              </p>
            </div>
          </div>
          <Link
            href="/library"
            className="w-full sm:w-[276px] h-[60px] bg-[#132651] text-white font-bold rounded-[6px] flex items-center justify-center hover:bg-[#1e3264] transition-colors"
          >
            View Document Library
          </Link>
        </div>

        {/* RIGHT MOCKUP */}
        <div className="relative w-full lg:w-[745px] h-[539px] hidden lg:block shrink-0">
          <div className="bg-white border border-[#dce0e7] rounded-[16px] shadow-[0px_8px_32px_rgba(19,38,81,0.08)] h-full flex flex-col">
            
            {/* TOP BAR */}
            <div className="bg-[#132651] h-[62px] px-[20px] flex items-center justify-between shrink-0">
              <span className="text-[13px] font-semibold text-white">
                Document Library
              </span>
              <div className="flex items-center gap-[8px] w-[198px]">
                <div className="bg-white/10 rounded-[10px] px-[12px] py-[6px] flex items-center gap-[8px] flex-1">
                  <Search className="w-3.5 h-3.5 text-white/60" />
                  <span className="text-[12px] text-white/60 truncate">Search documents...</span>
                </div>
                <div className="bg-white/10 w-[28px] h-[28px] rounded-[10px] flex items-center justify-center shrink-0">
                  <FileText className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>

            {/* TABLE HEADER */}
            <div className="bg-[#f7f8fa] border-b border-[#e3e6ec] h-[36px] flex items-center px-[20px]">
              <div className="grid grid-cols-12 gap-2 w-full text-[10px] font-semibold text-[#7b8496] uppercase tracking-wider">
                <div className="col-span-4">Document Title</div>
                <div className="col-span-2">Category</div>
                <div className="col-span-2">Format</div>
                <div className="col-span-1">Version</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-2 text-right">Action</div>
              </div>
            </div>

            {/* TABLE ROWS */}
            <div className="flex flex-col">
              <Row 
                title="Risk Assessment Template" 
                tag="Risk Assessments" 
                format="PDF / DOCX" 
                version="v2.1" 
                status="Updated" 
                statusColor="text-[#2563eb] bg-[#eff6ff]" 
              />
              <Row 
                title="Site Inspection Checklist" 
                tag="Checklists" 
                format="PDF / DOCX" 
                version="v2.1" 
                status="New" 
                statusColor="text-[#027a48] bg-[#d1fae5]" 
              />
              <Row 
                title="Health & Safety Policy" 
                tag="Policies" 
                format="PDF / DOCX" 
                version="v2.1" 
                status="Updated" 
                statusColor="text-[#2563eb] bg-[#eff6ff]" 
              />
              <Row 
                title="Health & Safety Policy" 
                tag="Policies" 
                format="PDF / DOCX" 
                version="v2.1" 
                status="Updated" 
                statusColor="text-[#2563eb] bg-[#eff6ff]" 
              />
              <Row 
                title="Fire Risk Assessment Form" 
                tag="Audit Forms" 
                format="PDF / DOCX" 
                version="v2.1" 
                status="Updated" 
                statusColor="text-[#2563eb] bg-[#eff6ff]" 
              />
            </div>

            {/* FOOTER */}
            <div className="bg-[#f7f8fa] border-t border-[#e3e6ec] px-[20px] py-[12px] flex justify-between items-center mt-auto">
              <span className="text-[11px] text-[#7b8496]">Showing 4 of 48 documents</span>
              <span className="text-[11px] font-semibold text-[#132651]">View all documents →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ title, tag, format, version, status, statusColor }: { title: string, tag: string, format: string, version: string, status: string, statusColor: string }) {
  return (
    <div className="border-b border-black/10 h-[66.5px] flex items-center px-[20px]">
      <div className="grid grid-cols-12 gap-2 w-full items-center">
        <div className="col-span-4">
          <span className="text-[12.5px] font-semibold text-[#132651]">{title}</span>
        </div>
        <div className="col-span-2">
          <span className="bg-[#f7f8fa] border border-[#e3e6ec] rounded-[8px] px-2 py-0.5 text-[11px] text-[#5a6886]">{tag}</span>
        </div>
        <div className="col-span-2">
          <span className="text-[11px] text-[#7b8496]">{format}</span>
        </div>
        <div className="col-span-1">
          <span className="text-[11px] text-[#7b8496]">{version}</span>
        </div>
        <div className="col-span-1">
          <span className={`${statusColor} px-2 py-0.5 rounded-full text-[10px] font-semibold`}>{status}</span>
        </div>
        <div className="col-span-2 flex justify-end">
          <button className="bg-[#132651] text-white flex items-center gap-1 px-3 py-1 rounded-[10px]">
            <Download className="w-3 h-3" />
            <span className="text-[11px] font-semibold">Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}
