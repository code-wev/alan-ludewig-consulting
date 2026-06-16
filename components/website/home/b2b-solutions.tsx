import Image from "next/image";
import Link from "next/link";

const b2bSolutions = [
  {
    icon: "/images/b2b-icon-0.png",
    bg: "bg-[#d1fae5]",
    title: "New and Growing Businesses",
    description: "Practical guidance for companies that need to build reliable health and safety systems from the start."
  },
  {
    icon: "/images/b2b-icon-1.png",
    bg: "bg-[#e8eaee]",
    title: "Contractors and Project Teams",
    description: "Site-focused support for construction projects, contractors, inspections, audits and documentation."
  },
  {
    icon: "/images/b2b-icon-2.png",
    bg: "bg-[#ede9fe]",
    title: "Established Organisations",
    description: "Ongoing support for businesses that need retained advice, training, RAMS, policies and compliance documentation."
  }
];

export default function B2BSolutions() {
  return (
    <section className="bg-[#f3f5f8] w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-[60px]">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-8 w-full lg:max-w-[870px]">
          <div className="flex flex-col gap-5 items-start">
            <div className="bg-[#e8eaee] px-[12px] py-[4px] rounded-full">
              <span className="text-[14px] font-bold text-[#5a6886]">
                Business to Business Solutions
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-[40px] font-bold text-[#132651] leading-[1.2] max-w-[754px]">
                Support for SMEs, Contractors and Growing Construction Businesses
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-[16px] text-[#5a6886] leading-[1.6]">
                  Whether you are a newly formed SME, a growing contractor or a larger organisation looking for health and safety advice, inspections or ongoing construction project support, Alan Ludewig Consulting can provide practical assistance that fits your business needs.
                </p>
                <p className="text-[14px] text-[#7b8496] leading-[1.6]">
                  The aim is to take the stress out of understanding health and safety legislation and provide an open, honest and practical service that helps your business stay organised, informed and compliant.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-[276px] h-[60px] bg-[#132651] text-white font-bold rounded-[6px] flex items-center justify-center hover:bg-[#1e3264] transition-colors"
          >
            Discuss Your Requirements
          </Link>
        </div>

        {/* RIGHT CONTENT - SOLUTIONS LIST */}
        <div className="w-full lg:max-w-[865px] flex justify-center">
          <div className="flex flex-col gap-5 w-full max-w-[612px]">
            {b2bSolutions.map((solution, i) => (
              <div 
                key={i} 
                className={`bg-white border border-[#dce0e7] rounded-[16px] p-7 md:p-[29px] flex gap-5 shadow-[0px_2px_6px_rgba(19,38,81,0.05)] h-full items-start`}
              >
                <div className={`${solution.bg} w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0`}>
                  <div className="relative w-6 h-6">
                    <Image src={solution.icon} alt="" fill className="object-contain" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[16px] font-bold text-[#132651] leading-[1.6]">
                    {solution.title}
                  </h3>
                  <p className="text-[14px] text-[#5a6886] leading-[1.6]">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}