import Image from "next/image";

const whatWeDoCards = [
  {
    icon: "/images/what-we-do-icon-0.png",
    bg: "bg-[#132651]",
    iconBg: "bg-[#e8eaee]",
    title: "Health & Safety Management Services",
    titleColor: "text-[#f7f8fa]",
    description: "Short to long-term health and safety cover to help maintain compliance with statutory regulations and support safe site operations.",
    descColor: "text-[#d0d4dc]"
  },
  {
    icon: "/images/what-we-do-icon-1.png",
    bg: "bg-white",
    iconBg: "bg-[#eff6ff]",
    title: "E-learning / Training",
    titleColor: "text-[#132651]",
    description: "Access professionally produced health and safety training options designed to support individuals, teams and organisations.",
    descColor: "text-[#5a6886]"
  },
  {
    icon: "/images/what-we-do-icon-2.png",
    bg: "bg-white",
    iconBg: "bg-[#e0f2fe]",
    title: "Standard Documentation",
    titleColor: "text-[#132651]",
    description: "Support with risk assessments, method statements, COSHH registers, toolbox talks, health and safety files, inductions and templates.",
    descColor: "text-[#5a6886]"
  },
  {
    icon: "/images/what-we-do-icon-3.png",
    bg: "bg-white",
    iconBg: "bg-[#ede9fe]",
    title: "Site Safety Management",
    titleColor: "text-[#132651]",
    description: "Site supervision and support to help plan, manage and monitor contractors, activities and project safety requirements.",
    descColor: "text-[#5a6886]"
  },
  {
    icon: "/images/what-we-do-icon-4.png",
    bg: "bg-white",
    iconBg: "bg-[#fff7ed]",
    title: "Emergency Preparedness",
    titleColor: "text-[#132651]",
    description: "Support with emergency procedures, policies, communication planning, PEEPs, exercises and review arrangements.",
    descColor: "text-[#5a6886]"
  },
  {
    icon: "/images/what-we-do-icon-5.png",
    bg: "bg-white",
    iconBg: "bg-[#ccfbf1]",
    title: "PQQs / Tendering",
    titleColor: "text-[#132651]",
    description: "Input, advice and guidance for public sector tenders, pre-qualification questionnaires, pre-construction surveys and supporting documentation.",
    descColor: "text-[#5a6886]"
  }
];

export default function WhatWeDo() {
  return (
    <section className="bg-white w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-center gap-[60px]">
        {/* HEADER */}
        <div className="flex flex-col gap-5 items-center text-center max-w-[870px]">
          <div className="bg-[#e8eaee] px-[12px] py-[4px] rounded-full">
            <span className="text-[14px] font-bold text-[#5a6886]">
              What We Do
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-[40px] font-bold text-[#132651] leading-[1.2]">
              Competent Support at Every Stage of the Construction Process
            </h2>
            <p className="text-[16px] text-[#5a6886] leading-[1.6]">
              From one-off support to longer-term retained solutions, our services help businesses manage compliance, reduce risk, organise documentation and support safer working practices.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {whatWeDoCards.map((card, i) => (
            <div 
              key={i} 
              className={`${card.bg} border border-[#e3e6ec] rounded-[12px] p-[21px] flex flex-col gap-3 shadow-[0px_2px_6px_rgba(19,38,81,0.06)] h-full`}
            >
              <div className={`${card.iconBg} w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0`}>
                <div className="relative w-6 h-6">
                  <Image src={card.icon} alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className={`text-[20px] font-bold ${card.titleColor} leading-[1.6]`}>
                  {card.title}
                </h3>
                <p className={`text-[16px] ${card.descColor} leading-[1.6] min-h-[78px]`}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

