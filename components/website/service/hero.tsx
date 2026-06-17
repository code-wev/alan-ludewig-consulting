import Link from "next/link";
import { CheckCircle, HardHat, ClipboardCheck, FileText, User, Search, FileSignature, GraduationCap, FolderOpen } from "lucide-react";

export default function ServiceHero() {
  return (
    <section className="bg-white w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col lg:flex-row items-center gap-[156px]">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-[60px] w-full lg:max-w-[870px] shrink-0">
          <div className="flex flex-col gap-[32px] w-full">
            <div className="flex flex-col gap-5 items-start">
              <div className="bg-[#e8eaee] border border-[#d0d4dc] px-[15px] py-[5px] rounded-full">
                <span className="text-[14px] font-bold text-[#132651] whitespace-nowrap">
                  Retained Health & Safety Services
                </span>
              </div>
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col gap-6">
                  <h1 className="text-[40px] font-bold text-[#132651] leading-[1.2] max-w-[754px]">
                    Health & Safety Management Services for Construction Businesses
                  </h1>
                  <p className="text-[16px] text-[#5a6886] leading-[1.6]">
                    Short to long-term contracting solutions, training, documentation, site safety management, emergency preparedness, and tender support.
                  </p>
                </div>
                <p className="text-[14px] text-[#7b8496] leading-[1.6]">
                  Alan Ludewig Consulting provides practical health, safety and environmental support for construction businesses that need competent advice, clear documentation, site-based guidance and reliable retained support.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Link
                href="/contact"
                className="w-full sm:w-[276px] h-[60px] bg-[#132651] text-white font-bold rounded-[6px] flex items-center justify-center hover:bg-[#1e3264] transition-colors"
              >
                Send Enquiry
              </Link>
              <Link
                href="/retained-services"
                className="w-full sm:w-[276px] h-[60px] bg-white border border-[#132651] text-[#132651] font-bold rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                View Retained Services
              </Link>
            </div>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-3 w-full lg:w-[529px]">
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
              <span className="text-[13px] font-medium text-[#5a6886]">
                Site inspections and audits
              </span>
            </div>
            <div className="flex items-center gap-[8px]">
              <FileText className="w-4 h-4 text-[#5a6886]" />
              <span className="text-[13px] font-medium text-[#5a6886]">
                Documentation and RAMS support
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE/CARD */}
        <div className="relative w-full lg:w-[612px] h-[452px] hidden lg:block shrink-0">
          <div className="w-full h-full border border-[#dce0e7] rounded-[16px] overflow-hidden shadow-[0px_24px_60px_0px_rgba(19,38,81,0.16)] flex flex-col p-[32px] justify-between" style={{ backgroundImage: "linear-gradient(143.5deg, rgb(19, 38, 81) 0%, rgb(30, 58, 107) 100%)" }}>
            
            {/* TOP BAR */}
            <div className="flex justify-between items-start w-full">
              <div className="bg-white/10 rounded-[10px] px-3 py-1.5">
                <span className="text-[11px] font-semibold text-[#a5b4d4]">
                  Alan Ludewig Consulting Ltd
                </span>
              </div>
              <User className="w-5 h-5 text-white/50" />
            </div>

            {/* CENTER CONTENT */}
            <div className="flex flex-col items-center mt-10">
              <div className="bg-white/10 w-[80px] h-[80px] rounded-[16px] flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-[18px] font-bold text-white mb-1">Health & Safety Services</h3>
              <p className="text-[13px] text-[#8ca0c8]">Construction industry specialists</p>
              
              <div className="flex gap-6 mt-8">
                <div className="flex flex-col items-center">
                  <span className="text-[20px] font-bold text-white">20+</span>
                  <span className="text-[10px] text-[#6b82a8] uppercase tracking-wide">Years Experience</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[20px] font-bold text-white">6</span>
                  <span className="text-[10px] text-[#6b82a8] uppercase tracking-wide">Core Services</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[20px] font-bold text-white">UK</span>
                  <span className="text-[10px] text-[#6b82a8] uppercase tracking-wide">Based Consultancy</span>
                </div>
              </div>
            </div>

            {/* BOTTOM CARDS */}
            <div className="flex justify-between w-full mt-auto">
              <div className="bg-white/5 border border-white/10 rounded-[14px] p-[13px] flex flex-col items-center gap-2 w-[127.5px]">
                <div className="bg-[#e8eaee] w-8 h-8 rounded-[10px] flex items-center justify-center">
                  <Search className="w-4 h-4 text-[#132651]" />
                </div>
                <span className="text-[10px] font-medium text-white">Site Audit</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[14px] p-[13px] flex flex-col items-center gap-2 w-[127.5px]">
                <div className="bg-[#e0f2fe] w-8 h-8 rounded-[10px] flex items-center justify-center">
                  <FileSignature className="w-4 h-4 text-[#0284c7]" />
                </div>
                <span className="text-[10px] font-medium text-white">RAMS</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[14px] p-[13px] flex flex-col items-center gap-2 w-[127.5px]">
                <div className="bg-[#d1fae5] w-8 h-8 rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-[#059669]" />
                </div>
                <span className="text-[10px] font-medium text-white">Training</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[14px] p-[13px] flex flex-col items-center gap-2 w-[127.5px]">
                <div className="bg-[#ede9fe] w-8 h-8 rounded-[10px] flex items-center justify-center">
                  <FolderOpen className="w-4 h-4 text-[#7c3aed]" />
                </div>
                <span className="text-[10px] font-medium text-white">Documentation</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
