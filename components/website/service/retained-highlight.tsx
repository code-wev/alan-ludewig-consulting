import { Search, FileSignature, GraduationCap, FolderOpen, MapPin, User, Bookmark, CheckSquare, Settings } from "lucide-react";

export default function RetainedHighlight() {
  return (
    <section 
      className="w-full pt-[112px] px-4 md:px-[80px] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundImage: "linear-gradient(168deg, rgb(19, 38, 81) 8%, rgb(13, 27, 58) 54%, rgb(10, 22, 40) 91%)" }}
    >
      <div className="mx-auto max-w-[1760px] flex flex-col items-center text-center gap-[36px] w-full pb-[100px]">
        {/* HEADER */}
        <div className="bg-white/10 border border-white/10 px-[24px] py-[4px] rounded-full">
          <span className="text-[14px] font-bold text-[#a5c0e0]">
            Retained Support Platform
          </span>
        </div>
        
        <h2 className="text-[40px] font-bold text-white leading-[1.2] max-w-[754px]">
          Access Health & Safety Support Through a Simple Member Portal
        </h2>
        
        <p className="text-[16px] text-[#f7f8fa] leading-[1.6] max-w-[752px]">
          The retained services platform gives members a cleaner way to access documents, create RAMS and assessments, book site visits, receive updates and manage support in one organised place.
        </p>

        {/* PORTAL MOCKUP AND SIDE CARDS */}
        <div className="relative w-full max-w-[1280px] h-auto lg:h-[548px] mt-8 flex flex-col lg:flex-row gap-[56px] items-start">
          
          {/* MOCKUP UI */}
          <div className="bg-white border border-white/20 rounded-[20px] shadow-[0px_32px_80px_rgba(0,0,0,0.45),0px_8px_32px_rgba(0,0,0,0.3)] w-full lg:w-[612px] h-[517px] overflow-hidden flex flex-col shrink-0">
            {/* BROWSER BAR */}
            <div className="bg-[#f0f2f5] border-b border-[#dce0e7] h-[55.5px] flex items-center px-4 relative shrink-0">
              <div className="flex gap-2 mr-6">
                <div className="w-3 h-3 bg-[#fc6058] rounded-full" />
                <div className="w-3 h-3 bg-[#fec02f] rounded-full" />
                <div className="w-3 h-3 bg-[#2aca44] rounded-full" />
              </div>
              <div className="bg-white border border-[#dce0e7] h-[30px] rounded-[10px] flex items-center px-3 flex-1 max-w-[494px] gap-2">
                <div className="w-3 h-3 bg-[#d1fae5] border border-[#6ee7b7] rounded-full" />
                <span className="text-[11px] font-medium text-[#7b8496]">portal.alanludewigconsulting.com</span>
              </div>
            </div>

            {/* PORTAL CONTENT */}
            <div className="bg-[#f7f8fa] flex-1 p-5 flex flex-col gap-4 overflow-y-auto">
              {/* TOP PROFILE BANNER */}
              <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex justify-between items-center shrink-0">
                <div className="flex items-center gap-[10px]">
                  <div className="bg-[#e8eaee] w-7 h-7 rounded-[10px] flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-[#132651]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#132651]">Member Portal</span>
                    <span className="text-[10px] text-[#7b8496]">Comply Pro · Active</span>
                  </div>
                </div>
                <div className="bg-[#d1fae5] px-2 py-1 rounded-full flex items-center gap-1 shrink-0">
                  <div className="w-1.5 h-1.5 bg-[#027a48] rounded-full" />
                  <span className="text-[10px] font-semibold text-[#027a48]">Active</span>
                </div>
              </div>

              {/* GRID ITEMS */}
              <div className="grid grid-cols-4 gap-2 shrink-0">
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center justify-center gap-2 h-[78px]">
                  <div className="bg-[#e0f2fe] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <FolderOpen className="w-4 h-4 text-[#0284c7]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center">Document Library</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center justify-center gap-2 h-[78px]">
                  <div className="bg-[#e8eaee] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <FileSignature className="w-4 h-4 text-[#132651]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center">Create RAMS</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center justify-center gap-2 h-[78px]">
                  <div className="bg-[#ede9fe] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#7c3aed]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center">Book Site Visit</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center justify-center gap-2 h-[78px]">
                  <div className="bg-[#fef3c7] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <Bookmark className="w-4 h-4 text-[#d97706]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center">My Saved Files</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center justify-center gap-2 h-[78px]">
                  <div className="bg-[#d1fae5] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-[#059669]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center">Training</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center justify-center gap-2 h-[78px]">
                  <div className="bg-[#eff6ff] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <CheckSquare className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center">Newsletters</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center justify-center gap-2 h-[78px]">
                  <div className="bg-[#fff7ed] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <Search className="w-4 h-4 text-[#ea580c]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center">Buy Extras</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-[13px] flex flex-col items-center justify-center gap-2 h-[78px]">
                  <div className="bg-[#f1f3f7] w-8 h-8 rounded-[10px] flex items-center justify-center">
                    <Settings className="w-4 h-4 text-[#475569]" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#132651] text-center leading-tight">Manage Subscription</span>
                </div>
              </div>

              {/* RECENT ACTIVITY */}
              <div className="border border-[#dce0e7] rounded-[14px] overflow-hidden shrink-0 mt-2">
                <div className="bg-white border-b border-[#e8eaee] h-[45px] px-4 flex items-center">
                  <span className="text-[10px] font-bold text-[#7b8496] uppercase tracking-wide">Recent Activity</span>
                </div>
                <div className="bg-white flex flex-col">
                  <div className="flex items-center justify-between px-4 py-2.5">
                    <span className="text-[11px] text-[#5a6886] truncate max-w-[220px]">Site Inspection Checklist v1.4 — updated</span>
                    <span className="bg-[#d1fae5] text-[#027a48] text-[9px] font-bold px-2 py-0.5 rounded-full">New</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5 border-t border-[#f0f2f5]">
                    <span className="text-[11px] text-[#5a6886] truncate max-w-[230px]">RAMS created for Roofing Project — saved</span>
                    <span className="bg-[#dbeafe] text-[#0284c7] text-[9px] font-bold px-2 py-0.5 rounded-full">Saved</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5 border-t border-[#f0f2f5]">
                    <span className="text-[11px] text-[#5a6886] truncate max-w-[220px]">HSE Regulatory Update — October 2026</span>
                    <span className="bg-[#e8eaee] text-[#5a6886] text-[9px] font-bold px-2 py-0.5 rounded-full">Read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SIDE CARDS */}
          <div className="flex flex-col gap-4 w-full lg:w-[612px]">
            <div className="bg-white/5 border border-white/10 rounded-[16px] p-5 flex items-start gap-4">
              <div className="bg-[#e0f2fe] w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0">
                <Search className="w-5 h-5 text-[#0284c7]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-[16px] font-bold text-[#f7f8fa] leading-[1.6]">Find Documents Faster</h4>
                <p className="text-[14px] text-[#f3f5f8] leading-[1.6]">Search, filter, download and save health and safety documents by category and membership access.</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[16px] p-5 flex items-start gap-4">
              <div className="bg-[#e8eaee] w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0">
                <FileSignature className="w-5 h-5 text-[#132651]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-[16px] font-bold text-[#f7f8fa] leading-[1.6]">Create RAMS and Assessments</h4>
                <p className="text-[14px] text-[#f3f5f8] leading-[1.6]">Use guided forms to create RAMS, Fire Risk Assessments, COSHH assessments and checklists.</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[16px] p-5 flex items-start gap-4">
              <div className="bg-[#ede9fe] w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#7c3aed]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-[16px] font-bold text-[#f7f8fa] leading-[1.6]">Book Support When Needed</h4>
                <p className="text-[14px] text-[#f3f5f8] leading-[1.6]">Use available credits to book site visits, audits, inspections or meetings.</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[16px] p-5 flex items-start gap-4">
              <div className="bg-[#fff7ed] w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0">
                <Search className="w-5 h-5 text-[#ea580c]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-[16px] font-bold text-[#f7f8fa] leading-[1.6]">Buy Additional Services</h4>
                <p className="text-[14px] text-[#f3f5f8] leading-[1.6]">Request bespoke RAMS, site visits, calls, fire inspections or custom forms through the extras area.</p>
              </div>
            </div>

            <div className="flex gap-[25px] mt-2">
              <button className="w-full sm:w-[276px] h-[60px] bg-white border border-[#132651] text-[#132651] font-bold rounded-[6px] hover:bg-gray-50 transition-colors text-[16px]">
                View Retained Services
              </button>
              <button className="w-full sm:w-[276px] h-[60px] border border-[#f7f8fa] text-[#f7f8fa] font-bold rounded-[6px] hover:bg-white/5 transition-colors text-[16px]">
                Member Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
