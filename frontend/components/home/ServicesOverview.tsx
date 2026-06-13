import { Container } from "../ui/Container";

const SERVICES = [
  {
    title: "Health & Safety Management Services",
    desc: "Short to long-term health and safety cover to help maintain compliance with statutory regulations and support safe site operations.",
    icon: "5bc9fa61-cc5c-4deb-9728-ae5fecec9f41",
    bg: "bg-primary",
    iconBg: "bg-[#e8eaee]",
    textColor: "text-bg-main",
    descColor: "text-light-grey",
  },
  {
    title: "E-learning / Training",
    desc: "Access professionally produced health and safety training options designed to support individuals, teams and organisations.",
    icon: "59888dba-7690-4d60-a43b-938ce2bae0fe",
    bg: "bg-white",
    iconBg: "bg-[#eff6ff]",
    textColor: "text-primary",
    descColor: "text-secondary",
  },
  {
    title: "Standard Documentation",
    desc: "Support with risk assessments, method statements, COSHH registers, toolbox talks, health and safety files, inductions and templates.",
    icon: "896003c5-d9b8-4552-9a0d-3204d89b07b6",
    bg: "bg-white",
    iconBg: "bg-[#e0f2fe]",
    textColor: "text-primary",
    descColor: "text-secondary",
  },
  {
    title: "Site Safety Management",
    desc: "Site supervision and support to help plan, manage and monitor contractors, activities and project safety requirements.",
    icon: "fb82e342-77aa-4096-bef7-44ce73c351e6",
    bg: "bg-white",
    iconBg: "bg-[#ede9fe]",
    textColor: "text-primary",
    descColor: "text-secondary",
  },
  {
    title: "Emergency Preparedness",
    desc: "Support with emergency procedures, policies, communication planning, PEEPs, exercises and review arrangements.",
    icon: "81cfc84c-ff65-47af-b0d2-c263750fc610",
    bg: "bg-white",
    iconBg: "bg-[#fff7ed]",
    textColor: "text-primary",
    descColor: "text-secondary",
  },
  {
    title: "PQQs / Tendering",
    desc: "Input, advice and guidance for public sector tenders, pre-qualification questionnaires, pre-construction surveys and supporting documentation.",
    icon: "d0cd818a-2650-4573-b930-7bcfee76d978",
    bg: "bg-white",
    iconBg: "bg-[#ccfbf1]",
    textColor: "text-primary",
    descColor: "text-secondary",
  },
];

export const ServicesOverview = () => {
  return (
    <section className="bg-bg-main py-[100px]">
      <Container className="flex flex-col items-center gap-16">
        <div className="text-center flex flex-col gap-5 items-center max-w-[870px]">
          <span className="bg-[#e8eaee] px-3 py-1 rounded-full text-secondary font-bold text-sm">
            What We Do
          </span>
          <div className="flex flex-col gap-6">
            <h2 className="text-primary text-[40px] font-bold leading-[1.2]">
              Competent Support at Every Stage of the Construction Process
            </h2>
            <p className="text-secondary text-base leading-relaxed">
              From one-off support to longer-term retained solutions, our services help businesses manage compliance, reduce risk, organise documentation and support safer working practices.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className={`${service.bg} border border-[#e3e6ec] p-[21px] rounded-[12px] shadow-[0px_2px_6px_rgba(19,38,81,0.06)] flex flex-col gap-3 h-full`}
            >
              <div className={`${service.iconBg} w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0`}>
                <img
                  src={`https://www.figma.com/api/mcp/asset/${service.icon}`}
                  alt={service.title}
                  className="w-6 h-6"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className={`${service.textColor} text-xl font-bold leading-relaxed h-[64px] flex items-center`}>
                  {service.title}
                </h3>
                <p className={`${service.descColor} text-base leading-relaxed h-[78px] flex items-center`}>
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
