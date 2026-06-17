import { FileText, Lock } from "lucide-react";
import Link from "next/link";

const freeDownloads = [
  {
    title: "Site Safety Induction Checklist",
    description: "A printable checklist for site managers to use when inducting new workers onto any construction site.",
    icon: <FileText className="w-5 h-5 text-[#f97316]" />,
    iconBg: "bg-[#fff7ed]",
    buttonText: "Download PDF"
  },
  {
    title: "Near Miss Reporting Form",
    description: "A straightforward one-page near miss report template with guidance notes for operatives.",
    icon: <FileText className="w-5 h-5 text-[#0369a1]" />,
    iconBg: "bg-[#f0f9ff]",
    buttonText: "Download Word"
  },
  {
    title: "Toolbox Talk: Working at Height",
    description: "A ready-to-deliver toolbox talk covering ladder safety, edge protection, and harness use.",
    icon: <FileText className="w-5 h-5 text-[#059669]" />,
    iconBg: "bg-[#f0fdf4]",
    buttonText: "Download PDF"
  },
  {
    title: "COSHH Assessment Template",
    description: "A blank COSHH assessment template compliant with current HSE guidance for construction substances.",
    icon: <FileText className="w-5 h-5 text-[#7c3aed]" />,
    iconBg: "bg-[#f5f3ff]",
    buttonText: "Download Excel"
  }
];

const memberOnlyResources = [
  {
    title: "Full RAMS Template Library (40+ documents)",
    description: "Professionally drafted method statements and risk assessments covering all major trades."
  },
  {
    title: "CDM Principal Contractor Pack",
    description: "Pre-construction information, construction phase plan, and site rules templates."
  },
  {
    title: "Monthly H&S Law Update Briefings",
    description: "Plain-English summaries of legislation changes delivered to your inbox every month."
  },
  {
    title: "Toolbox Talk Series (30+ topics)",
    description: "Editable toolbox talk slides and scripts covering hazards across all construction disciplines."
  }
];

export default function FreeDownloads() {
  return (
    <section className="bg-white w-full py-[80px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col gap-[80px]">
        {/* FREE DOWNLOADS GRID */}
        <div className="flex flex-col gap-[40px]">
          <h2 className="text-[32px] font-bold text-[#132651]">Free Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {freeDownloads.map((item, i) => (
              <div 
                key={i} 
                className="bg-white border border-[#e3e6ec] rounded-[16px] p-[24px] flex flex-col gap-[20px] shadow-[0px_4px_24px_rgba(19,38,81,0.04)]"
              >
                <div className={`${item.iconBg} w-[40px] h-[40px] rounded-[10px] flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div className="flex flex-col gap-[12px] flex-1">
                  <h3 className="text-[18px] font-bold text-[#132651] leading-[1.4]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#5a6886] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
                <button className="w-full h-[44px] bg-[#132651] text-white text-[14px] font-bold rounded-[6px] hover:bg-[#1e3264] transition-colors">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* MEMBER ONLY SECTION */}
        <div className="flex flex-col gap-[40px] items-center">
          <div className="flex flex-col gap-[12px] items-center text-center">
            <div className="bg-[#f3f5f8] w-[48px] h-[48px] rounded-[12px] flex items-center justify-center mb-2">
              <Lock className="w-5 h-5 text-[#132651]" />
            </div>
            <h2 className="text-[28px] font-bold text-[#132651]">Member-Only Resource Library</h2>
            <p className="text-[16px] text-[#5a6886]">
              Unlock 100+ premium documents and templates with a retained services membership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full max-w-[1100px]">
            {memberOnlyResources.map((item, i) => (
              <div 
                key={i} 
                className="bg-[#fcfcfd] border border-[#e3e6ec] rounded-[16px] p-[24px] flex gap-[20px] items-start"
              >
                <Lock className="w-4 h-4 text-[#a3acba] mt-1 shrink-0" />
                <div className="flex flex-col gap-[8px]">
                  <h4 className="text-[16px] font-bold text-[#132651]">{item.title}</h4>
                  <p className="text-[14px] text-[#7b8496] leading-[1.6]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link 
            href="/plans"
            className="mt-4 h-[56px] px-[40px] bg-[#132651] text-white font-bold rounded-[6px] flex items-center justify-center hover:bg-[#1e3264] transition-colors"
          >
            View Membership Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
