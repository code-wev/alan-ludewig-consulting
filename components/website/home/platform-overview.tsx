import Image from "next/image";
import Link from "next/link";

const platformFeatures = [
  {
    icon: "/images/platform-icon-0.png",
    bg: "bg-[#e8eaee]",
    title: "Competent Support",
    description: "Get practical guidance to help your business meet health and safety responsibilities."
  },
  {
    icon: "/images/platform-icon-1.png",
    bg: "bg-[#e0f2fe]",
    title: "Document Access",
    description: "Use a structured member library for policies, forms, checklists, audit forms, procedures, and templates."
  },
  {
    icon: "/images/platform-icon-2.png",
    bg: "bg-[#ccfbf1]",
    title: "RAMS & Assessments",
    description: "Create RAMS, Fire Risk Assessments, COSHH assessments, and checklist-based documents."
  },
  {
    icon: "/images/platform-icon-3.png",
    bg: "bg-[#ede9fe]",
    title: "Site Visits & Extras",
    description: "Book inspections, audits, meetings, or additional support when your business needs extra help"
  }
];

export default function PlatformOverview() {
  return (
    <section className="bg-white w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-center gap-[60px]">
        {/* HEADER */}
        <div className="flex flex-col gap-6 items-center text-center max-w-[967px]">
          <h2 className="text-[40px] font-bold text-[#132651] leading-[1.2] max-w-[754px]">
            Retained Health & Safety Support Without Hiring In House
          </h2>
          <p className="text-[16px] text-[#5a6886] leading-[1.6] max-w-[868px]">
            A practical way to access competent advice, essential documents, RAMS tools, site visit support, and updates without the cost of a full-time internal health and safety role
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {platformFeatures.map((feature, i) => (
            <div 
              key={i} 
              className="bg-white border border-[#dce0e7] rounded-[12px] p-[21px] flex flex-col gap-3 shadow-[0px_2px_6px_rgba(19,38,81,0.06)] h-full"
            >
              <div className={`${feature.bg} w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0`}>
                <div className="relative w-6 h-6">
                  <Image src={feature.icon} alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] font-bold text-[#132651] leading-[1.6]">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-[#5a6886] leading-[1.6] min-h-[78px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/plans"
          className="w-full sm:w-[350px] h-[60px] bg-[#132651] text-white font-bold rounded-[6px] flex items-center justify-center hover:bg-[#1e3264] transition-colors"
        >
          Explore Membership Options
        </Link>
      </div>
    </section>
  );
}
