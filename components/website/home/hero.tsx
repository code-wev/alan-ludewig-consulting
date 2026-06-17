import Image from "next/image";
import Link from "next/link";

const heroFeatures = [
  { icon: "/images/hero-icon-0.png", text: "Nearly 20 years construction industry experience" },
  { icon: "/images/hero-icon-1.png", text: "Competent person support" },
  { icon: "/images/hero-icon-2.png", text: "RAMS, documents and checklist tools" },
  { icon: "/images/hero-icon-3.png", text: "Site inspections and audits" },
];

export default function Hero() {
  return (
    <section className="bg-white w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col lg:flex-row items-center gap-[60px] lg:gap-[100px]">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-[60px] w-full lg:max-w-[870px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5 items-start">
              <div className="bg-[#e8eaee] border border-[#d0d4dc] px-[15px] py-[5px] rounded-full">
                <span className="text-[14px] font-bold text-[#132651] whitespace-nowrap">
                  Retained Health & Safety Services
                </span>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <h1 className="text-[40px] md:text-[48px] font-bold text-[#132651] leading-[1.2] max-w-[754px]">
                    Stay Compliant, Save Time and Get Competent Health & Safety Support
                  </h1>
                  <p className="text-[16px] md:text-[18px] text-[#5a6886] leading-[1.6]">
                    Access competent person support, RAMS tools, document templates, checklists, site visit credits, training resources, and practical guidance from one organised member portal
                  </p>
                </div>
                <p className="text-[14px] text-[#7b8496] leading-[1.6]">
                  Alan Ludewig Consulting helps construction businesses manage health and safety with practical, professional support. The retained services platform gives members one simple place to access documents, create assessments, book support, and stay prepared
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Link
                href="/plans"
                className="w-full sm:w-[276px] h-[60px] bg-[#132651] text-white font-bold rounded-[6px] flex items-center justify-center hover:bg-[#1e3264] transition-colors"
              >
                View Membership Plans
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-[276px] h-[60px] bg-white border border-[#132651] text-[#132651] font-bold rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                Send Enquiry
              </Link>
            </div>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
            {heroFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="relative w-4 h-4 shrink-0">
                  <Image src={feature.icon} alt="" fill className="object-contain" />
                </div>
                <span className="text-[13px] font-medium text-[#5a6886] whitespace-nowrap">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE/PORTAL PREVIEW */}
        <div className="relative w-full lg:w-[529px] h-[520px] hidden md:block">
          {/* MOCKUP PORTAL */}
          <div className="bg-white border border-[#dce0e7] rounded-[16px] shadow-[0px_24px_60px_0px_rgba(19,38,81,0.18)] overflow-hidden h-full flex flex-col">
            {/* BROWSER TOP BAR */}
            <div className="bg-[#1e3264] border-b border-[#2a4080] h-[50px] flex items-center px-4 relative">
              <div className="flex gap-2 mr-6">
                <div className="w-3 h-3 bg-[#ff6467] rounded-full opacity-80" />
                <div className="w-3 h-3 bg-[#fdc700] rounded-full opacity-80" />
                <div className="w-3 h-3 bg-[#05df72] rounded-full opacity-80" />
              </div>
              <div className="bg-[#132651] h-[25px] rounded-[8px] flex items-center px-3 flex-1 max-w-[381px]">
                <span className="text-[11px] text-[#8ca0c8]">portal.alanludewigconsulting.com</span>
              </div>
              <div className="ml-auto relative w-[14px] h-[14px]">
                <Image src="/images/hero-icon-4.png" alt="" fill />
              </div>
            </div>

            {/* PORTAL CONTENT */}
            <div className="bg-[#f0f2f8] flex-1 p-5 flex flex-col gap-4">
              <div className="flex justify-between items-center h-9">
                <div>
                  <h3 className="text-[13px] font-bold text-[#132651]">Member Portal</h3>
                  <p className="text-[11px] text-[#7b8496]">Welcome back</p>
                </div>
                <div className="flex gap-2">
                  <span className="bg-[#d1fae5] text-[#027a48] text-[10px] font-semibold px-2 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#027a48] rounded-full" /> Active Member
                  </span>
                  <span className="bg-[#ede9fe] text-[#7c3aed] text-[10px] font-semibold px-2 py-1 rounded-full whitespace-nowrap flex items-center">
                    Comply Pro
                  </span>
                </div>
              </div>

              {/* DASHBOARD CARDS */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-3 flex flex-col gap-1">
                  <span className="text-[10px] font-medium text-[#7b8496]">RAMS Credits</span>
                  <span className="text-[22px] font-bold text-[#132651]">8</span>
                  <span className="text-[10px] text-[#027a48]">Available this month</span>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-3 flex flex-col gap-1">
                  <span className="text-[10px] font-medium text-[#7b8496]">Site Visit Credits</span>
                  <span className="text-[22px] font-bold text-[#132651]">2</span>
                  <span className="text-[10px] text-[#027a48]">Available to book</span>
                </div>
              </div>

              {/* ACTION TILES */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-3 flex flex-col gap-2">
                  <div className="w-7 h-7 bg-[#eef2ff] rounded-[10px] flex items-center justify-center">
                    <div className="relative w-3.5 h-3.5"><Image src="/images/hero-icon-5.png" alt="" fill /></div>
                  </div>
                  <h4 className="text-[11px] font-semibold text-[#132651]">Create RAMS</h4>
                  <p className="text-[10px] text-[#7b8496] leading-tight">Risk Assessment & Method Statement</p>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-3 flex flex-col gap-2">
                  <div className="w-7 h-7 bg-[#e0f2fe] rounded-[10px] flex items-center justify-center">
                    <div className="relative w-3.5 h-3.5"><Image src="/images/hero-icon-6.png" alt="" fill /></div>
                  </div>
                  <h4 className="text-[11px] font-semibold text-[#132651]">Document Library</h4>
                  <p className="text-[10px] text-[#7b8496] leading-tight">Access policies, forms & checklists</p>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-3 flex flex-col gap-2">
                  <div className="w-7 h-7 bg-[#f5f3ff] rounded-[10px] flex items-center justify-center">
                    <div className="relative w-3.5 h-3.5"><Image src="/images/hero-icon-7.png" alt="" fill /></div>
                  </div>
                  <h4 className="text-[11px] font-semibold text-[#132651]">Book Site Visit</h4>
                  <p className="text-[10px] text-[#7b8496] leading-tight">Schedule inspection or audit</p>
                </div>
                <div className="bg-white border border-[#dce0e7] rounded-[14px] p-3 flex flex-col gap-2">
                  <div className="w-7 h-7 bg-[#fff7ed] rounded-[10px] flex items-center justify-center">
                    <div className="relative w-3.5 h-3.5"><Image src="/images/hero-icon-8.png" alt="" fill /></div>
                  </div>
                  <h4 className="text-[11px] font-semibold text-[#132651]">My Saved Files</h4>
                  <p className="text-[10px] text-[#7b8496] leading-tight">Access your saved documents</p>
                </div>
              </div>

              {/* NOTIFICATION */}
              <div className="bg-white border border-[#dce0e7] rounded-[14px] px-3 py-2 flex items-center gap-3">
                <div className="w-6 h-6 bg-[#d1fae5] rounded-[10px] flex items-center justify-center">
                   <div className="relative w-3.5 h-3.5"><Image src="/images/hero-icon-9.png" alt="" fill /></div>
                </div>
                <div className="flex-1 flex flex-col">
                  <span className="text-[11px] font-medium text-[#132651]">New document available</span>
                  <span className="text-[10px] text-[#7b8496]">Site Inspection Checklist v1.4</span>
                </div>
                <span className="bg-[#d1fae5] text-[#027a48] text-[9px] font-semibold px-2 py-0.5 rounded-full">New</span>
              </div>
            </div>
          </div>

          {/* FLOATING CARD */}
          <div className="absolute -left-4 bottom-4 bg-white border border-[#dce0e7] rounded-[14px] px-4 py-2 flex items-center gap-2 shadow-[0px_10px_7.5px_rgba(0,0,0,0.1)]">
            <div className="relative w-5 h-5">
              <Image src="/images/hero-icon-10.png" alt="" fill />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#132651]">Competent Support</span>
              <span className="text-[10px] text-[#7b8496]">Professional H&S guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
