import Image from "next/image";
import Link from "next/link";

const complianceFeatures = [
  {
    icon: "/images/compliance-icon-0.png",
    bg: "bg-[#e8eaee]",
    title: "Compliance Risk",
    description: "Stay prepared with structured documents, RAMS, policies, checklists, and professional guidance."
  },
  {
    icon: "/images/compliance-icon-1.png",
    bg: "bg-[#e0f2fe]",
    title: "Costly Delays",
    description: "Reduce time spent searching for templates, rewriting documents, or fixing missing information."
  },
  {
    icon: "/images/compliance-icon-2.png",
    bg: "bg-[#ccfbf1]",
    title: "Competent Support",
    description: "Access practical health and safety guidance from experienced construction industry professionals."
  }
];

export default function ComplianceCTA() {
  return (
    <section className="bg-[#132651] w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-center gap-[60px]">
        {/* HEADER */}
        <div className="flex flex-col gap-6 items-center text-center max-w-[967px]">
          <h2 className="text-[40px] font-bold text-white leading-[1.2] max-w-[754px]">
            Don’t Wait Until a Health & Safety Issue Becomes a Costly Problem
          </h2>
          <p className="text-[16px] text-[#f7f8fa] leading-[1.6] max-w-[868px]">
            Without the right support in place, businesses can face delays, compliance problems, site risks, and unnecessary costs
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
          {complianceFeatures.map((feature, i) => (
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
          href="/contact"
          className="w-full sm:w-[350px] h-[60px] bg-white border border-[#132651] text-[#132651] font-bold rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          Get the Right Support in Place
        </Link>
      </div>
    </section>
  );
}
