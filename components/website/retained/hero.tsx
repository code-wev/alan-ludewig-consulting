import Link from "next/link";
import { CheckCircle, HardHat, ClipboardCheck, FileText, User, FolderOpen, FileSignature, MapPin, Bookmark, GraduationCap, CheckSquare, Search, Settings } from "lucide-react";

export default function RetainedHero() {
  return (
    <section className="bg-white w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col lg:flex-row items-center gap-[156px]">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-[60px] w-full lg:max-w-[870px] shrink-0">
          <div className="flex flex-col gap-[32px] w-full">
            <div className="flex flex-col gap-[20px] items-start">
              <div className="bg-[#e8eaee] border border-[#d0d4dc] px-[15px] py-[5px] rounded-full">
                <span className="text-[14px] font-bold text-[#132651] whitespace-nowrap">
                  Retained Health & Safety Services
                </span>
              </div>
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col gap-[24px]">
                  <h1 className="text-[40px] font-bold text-[#132651] leading-[1.2] max-w-[754px]">
                    Health & Safety Support Without the Cost of Hiring In-House
                  </h1>
                  <p irt className="text-[16px] text-[#5a6886] leading-[1.6]">
                    Access practical support, essential documents, RAMS tools, site visit options, training resources, newsletters and member-only guidance through one organised portal.
                  </p>
                </div>
                <p className="text-[14px] text-[#7b8496] leading-[1.6]">
                  Choose a membership level, access your documents, create RAMS and assessments, book support and stay organised.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <Link
                href="/plans"
                className="w-full sm:w-[276px] h-[60px] bg-[#132651] text-white font-bold rounded-[6px] flex items-center justify-center hover:bg-[#1e3264] transition-colors"
              >
                View Membership Plans
              </Link>
            </div>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-3 w-full lg:w[529px]">
            <div className="flex items-center gap-[8px]">
              <CheckCircle className="w-4 h-4 text-[#5a6886]" />
              <span className="text-[13px] font-medium text-[#5a6886]">
                Competent health and safety support
              </span>
            </div>
            <div className="flex items-center gap-[8px]">
              <HardHat className="w-4 h-4 text-[#5a6886]" />
              <span className="text-[13px] font-medium text-[#5a6886]">
                Construction industry focused
              </span>
            </div>
            <div className="flex items-center gap-[8px]">
              <ClipboardCheck className="w-4 h-4 text-[#5a6886]" />
              <span className="text-[16px] font-medium text-[#5a6886]">
                Documents, RAMS and checklists
              </span>
            </div>
            <div className="flex items-center gap-[8px]">
              <FileText className="w-4 h-4 text-[#5a6886]" />
              <span className="text-[13px] font-medium text-[#5a6886]">
                Practical portal access
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE/PORTAL MOCKUP */}
        <div className="relative w-full lg:w-[608px] h-[416px] hidden lg:block shrink-0">
          <div className="bg-white border border-[#dce0e7] rounded-[16px] overflow-hidden shadow-[0px_20px_60px_0px_rgba(19,38,81,0.12),0px_4px_16px_0px_rgba(19,38,81,0.06)] h-full flex flex-col">
            
            {/* BROWSER TOP BAR */}
            <div className="bg-[#f0f2f5] border-b border-[#dce0e7] h-[55.5px] flex items-center px-4 relative shrink-0">
              <div className="flex gap-2 mr-6">
                <div className="w-3 h-3 bg-[#fc6058] rounded-full" />
                <div className="w-3 h-3 bg-[#fec02f] rounded-full" />
                <div className="w-3 h-3 bg-[#2aca44] rounded-full" />
              </div>
              <div className="bg-white border border-[#dce0e7] h-[30.5px] rounded-[10px] flex items-center px-3 flex-1 max-w-[490px] gap-2">
                <div className="w-2 h-2 bg-[#d1fae5] border border-[#86efac] rounded-full" />
                <span className="text-[11px] font-medium text-[#7b8496]">portal.alanludewigconsulting.com</span>
              </div>
            </div>

            {/* PORTAL CONTENT */}
            <div className="bg-[#f7f8fa] flex-1 p-5 flex flex-col gap-4">
              {/* TOP PROFILE BANNER */}
              <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex justify-between items-center shrink-0 h-[60.5px]">
                <div className="flex items-center gap-[10px]">
                  <div className="bg-[#e8eaee] w-7 h-7 rounded-[10px] flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-[#132651]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[13px] font-bold text-[#132651] leading-tight">Member Portal</span>
                    <span className="text-[10px] text-[#7b8496] leading-tight mt-0.5">Comply Pro · Active</span>
                  </div>
                </div>
                <div className="bg-[#d1fae5] px-2 py-1 rounded-full flex items-center shrink-0">
                  <span className="text-[10px] font-semibold text-[#027a48]">Active</span>
                </div>
              </div>

              {/* CREDITS ROW */}
              <div className="flex gap-[10px]">
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex items-center gap-[12px] flex-1 h-[60.5px]">
                  <div className="bg-[#e8eaee] w-7 h-7 rounded-[10px] flex items-center justify-center shrink-0">
                    <FileSignature className="w-4 h-4 text-[#132651]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] text-[#7b8496] leading-tight">RAMS Credits</span>
                    <span className="text-[13px] font-bold text-[#132651] leading-tight mt-0.5">3 Available</span>
                  </div>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex items-center gap-[12px] flex-1 h-[60.5px]">
                  <div className="bg-[#ede9fe] w-7 h-7 rounded-[10px] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#7c3aed]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] text-[#7b8496] leading-tight">Site Visit Credits</span>
                    <span className="text-[13px] font-bold text-[#132651] leading-tight mt-0.5">2 Available</span>
                  </div>
                </div>
              </div>

              {/* GRID ITEMS */}
              <div className="grid grid-cols-4 gap-2 shrink-0">
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center gap-[8px] h-[78px] justify-center">
                  <div className="bg-[#dbeafe] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <FolderOpen className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center leading-tight">Document Library</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center gap-[8px] h-[78px] justify-center">
                  <div className="bg-[#e8eaee] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <FileSignature className="w-4 h-4 text-[#132651]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center leading-tight">Create RAMS</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center gap-[8px] h-[78px] justify-center">
                  <div className="bg-[#ede9fe] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#7c3aed]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center leading-tight">Book Site Visit</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center gap-[8px] h-[78px] justify-center">
                  <div className="bg-[#fef3c7] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <Bookmark className="w-4 h-4 text-[#d97706]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center leading-tight">My Saved Files</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center gap-[8px] h-[78px] justify-center">
                  <div className="bg-[#d1fae5] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-[#059669]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center leading-tight">Training</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center gap-[8px] h-[78px] justify-center">
                  <div className="bg-[#eff6ff] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <CheckSquare className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center leading-tight">Newsletters</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center gap-[8px] h-[78px] justify-center">
                  <div className="bg-[#fff7ed] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <Search className="w-4 h-4 text-[#ea580c]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center leading-tight">Buy Extras</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center gap-[8px] h-[78px] justify-center">
                  <div className="bg-[#f1f3f7] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <Settings className="w-4 h-4 text-[#475569]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center leading-tight">Manage Subscription</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
