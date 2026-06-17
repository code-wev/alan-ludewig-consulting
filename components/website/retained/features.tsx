import { FileText, FileSignature, Flame, FlaskConical, CheckSquare, Bot, MapPin, GraduationCap } from "lucide-react";

const features = [
  {
    title: "Document Library",
    description: "Access policies, procedures, risk assessments, audit forms, checklists, and essential health and safety documents.",
    icon: <FileText className="w-6 h-6 text-white" />,
    iconBg: "bg-[#2a4080]",
    cardBg: "bg-[#132651]",
    textColor: "text-white",
    descColor: "text-[#d0d4dc]",
    badgeText: "Documents",
    badgeBg: "bg-white",
    badgeTextColor: "text-[#132651]"
  },
  {
    title: "RAMS Builder",
    description: "Create guided Risk Assessment and Method Statement documents using structured project details, hazards, controls, PPE, and work activities.",
    icon: <FileSignature className="w-6 h-6 text-[#132651]" />,
    iconBg: "bg-[#eef2ff]",
    cardBg: "bg-white",
    textColor: "text-[#132651]",
    descColor: "text-[#5a6886]",
    badgeText: "RAMS",
    badgeBg: "bg-[#e8eaee]",
    badgeTextColor: "text-[#132651]"
  },
  {
    title: "Fire Risk Assessment",
    description: "Complete fire hazard details, people at risk, existing controls, emergency routes, equipment, and action plans.",
    icon: <Flame className="w-6 h-6 text-[#b54708]" />,
    iconBg: "bg-[#fff7ed]",
    cardBg: "bg-white",
    textColor: "text-[#132651]",
    descColor: "text-[#5a6886]",
    badgeText: "Fire",
    badgeBg: "bg-[#fef3c7]",
    badgeTextColor: "text-[#b54708]"
  },
  {
    title: "COSHH Risk Assessment",
    description: "Record substance details, exposure routes, controls, PPE, storage, disposal, and emergency actions.",
    icon: <FlaskConical className="w-6 h-6 text-[#0f766e]" />,
    iconBg: "bg-[#ccfbf1]",
    cardBg: "bg-white",
    textColor: "text-[#132651]",
    descColor: "text-[#5a6886]",
    badgeText: "COSHH",
    badgeBg: "bg-[#ccfbf1]",
    badgeTextColor: "text-[#0f766e]"
  },
  {
    title: "Forms & Checklists",
    description: "Use standard pre-defined forms and checklists, with editable fields where applicable before saving or downloading.",
    icon: <CheckSquare className="w-6 h-6 text-[#0284c7]" />,
    iconBg: "bg-[#e0f2fe]",
    cardBg: "bg-white",
    textColor: "text-[#132651]",
    descColor: "text-[#5a6886]",
    badgeText: "Checklists",
    badgeBg: "bg-[#e0f2fe]",
    badgeTextColor: "text-[#0284c7]"
  },
  {
    title: "AI Agent Support",
    description: "Get quick guidance, document suggestions, checklist help, and support while using the member portal.",
    icon: <Bot className="w-6 h-6 text-[#7c3aed]" />,
    iconBg: "bg-[#ede9fe]",
    cardBg: "bg-white",
    textColor: "text-[#132651]",
    descColor: "text-[#5a6886]",
    badgeText: "Booking",
    badgeBg: "bg-[#ede9fe]",
    badgeTextColor: "text-[#7c3aed]"
  },
  {
    title: "Book Site Visits",
    description: "Use available credits to request audits, inspections, meetings, or site support.",
    icon: <MapPin className="w-6 h-6 text-[#2563eb]" />,
    iconBg: "bg-[#eff6ff]",
    cardBg: "bg-white",
    textColor: "text-[#132651]",
    descColor: "text-[#5a6886]",
    badgeText: "Updates",
    badgeBg: "bg-[#eff6ff]",
    badgeTextColor: "text-[#2563eb]"
  },
  {
    title: "Training & Updates",
    description: "View training information, member resources, HSE updates, and practical guidance.",
    icon: <GraduationCap className="w-6 h-6 text-[#132651]" />,
    iconBg: "bg-[#e8eaee]",
    cardBg: "bg-white",
    textColor: "text-[#132651]",
    descColor: "text-[#5a6886]",
    badgeText: "Training",
    badgeBg: "bg-[#e8eaee]",
    badgeTextColor: "text-[#132651]"
  }
];

export default function RetainedFeatures() {
  return (
    <section className="bg-[#f3f5f8] w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-start gap-[60px]">
        {/* HEADER */}
        <div className="flex flex-col gap-[24px] items-center text-center w-full">
          <h2 className="text-[40px] font-bold text-[#132651] leading-[1.2] max-w-[754px]">
            Everything Your Business Needs to Stay Organised, Compliant and Supported
          </h2>
          <p className="text-[16px] text-[#5a6886] leading-[1.6] max-w-[679px]">
            Access practical tools, competent support, documents, AI guidance, assessments, and site visit options through one clean member portal
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className={`${feature.cardBg} border border-[#e3e6ec] rounded-[12px] p-[21px] flex flex-col items-start shadow-[0px_2px_6px_rgba(19,38,81,0.06)] h-full relative overflow-hidden`}
            >
              {/* BADGE */}
              <div className={`absolute top-0 right-[20px] ${feature.badgeBg} px-[8px] py-[2px] rounded-b-[6px]`}>
                <span className={`text-[10px] font-semibold ${feature.badgeTextColor}`}>
                  {feature.badgeText}
                </span>
              </div>

              <div className="flex flex-col gap-[12px] w-full h-full mt-2">
                <div className={`${feature.iconBg} w-[48px] h-[48px] rounded-[14px] flex items-center justify-center shrink-0`}>
                  {feature.icon}
                </div>
                
                <div className="flex flex-col gap-[16px] mt-2 h-full">
                  <h3 className={`text-[20px] font-bold ${feature.textColor} leading-[1.6]`}>
                    {feature.title}
                  </h3>
                  <p className={`text-[16px] ${feature.descColor} leading-[1.6]`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
