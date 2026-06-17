import { Check, FileText, Flame, FlaskConical, CheckSquare } from "lucide-react";
import Link from "next/link";

const highlightCards = [
  {
    title: "RAMS Builder",
    headerBg: "bg-[#132651]",
    icon: <FileText className="w-5 h-5 text-white" />,
    features: [
      "Risk Assessment",
      "Method Statement",
      "Job details",
      "Work activities",
      "Tasks",
      "Hazards and controls",
      "PPE and equipment",
      "Signature",
      "PDF generation"
    ]
  },
  {
    title: "Fire Risk Assessment",
    headerBg: "bg-[#f97316]",
    icon: <Flame className="w-5 h-5 text-white" />,
    features: [
      "Risk Assessment",
      "Method Statement",
      "Job details",
      "Work type",
      "Tasks",
      "Hazards and controls",
      "PPE and equipment",
      "Signature",
      "PDF generation"
    ]
  },
  {
    title: "COSHH Risk Assessment",
    headerBg: "bg-[#0f766e]",
    icon: <FlaskConical className="w-5 h-5 text-white" />,
    features: [
      "Risk Assessment",
      "Method Statement",
      "Job details",
      "Work type",
      "Tasks",
      "Hazards and controls",
      "PPE and equipment",
      "Signature",
      "PDF generation"
    ]
  },
  {
    title: "Forms & Checklists",
    headerBg: "bg-[#0284c7]",
    icon: <CheckSquare className="w-5 h-5 text-white" />,
    features: [
      "Risk Assessment",
      "Method Statement",
      "Job details",
      "Work type",
      "Tasks",
      "Hazards and controls",
      "PPE and equipment",
      "Signature",
      "PDF generation"
    ]
  }
];

export default function RAMSHighlight() {
  return (
    <section className="bg-[#f3f5f8] w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-center gap-[60px]">
        {/* HEADER */}
        <div className="flex flex-col gap-[24px] items-center text-center">
          <h2 className="text-[40px] font-bold text-[#132651] leading-[1.2] max-w-[1008px]">
            Create RAMS, Assessments and Checklists Faster
          </h2>
          <div className="flex flex-col gap-[24px] max-w-[904px]">
            <p className="text-[16px] text-[#5a6886] leading-[1.6]">
              Members can complete guided forms, use standard templates, edit fields where allowed, and generate professional documents ready to review, save, download, or export
            </p>
            <p className="text-[16px] text-[#5a6886] leading-[1.6]">
              The builder can support RAMS, Fire Risk Assessments, COSHH assessments, and forms or checklist documents. Users can complete structured fields, select hazards and controls, add project information, and download the finished document in the available format.
            </p>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] w-full max-w-[1628px]">
          {highlightCards.map((card, i) => (
            <div 
              key={i} 
              className="bg-white border-2 border-[#e3e6ec] rounded-[12px] shadow-[0px_2px_6px_rgba(19,38,81,0.05)] overflow-hidden flex flex-col h-full"
            >
              {/* CARD HEADER */}
              <div className={`${card.headerBg} px-[20px] py-[16px] flex items-center gap-[12px]`}>
                <div className="bg-white/20 w-[36px] h-[36px] rounded-[10px] flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <h3 className="text-[20px] lg:text-[24px] font-bold text-white leading-[1.6] truncate">
                  {card.title}
                </h3>
              </div>

              {/* CARD BODY */}
              <div className="p-[20px] flex flex-col gap-[12px] flex-1">
                {card.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-[8px]">
                    <div className="bg-[#e8eaee] w-[16px] h-[16px] rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-[10px] h-[10px] text-[#059669]" />
                    </div>
                    <span className="text-[14px] text-[#5a6886] leading-[1.6]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <Link
          href="/plans"
          className="w-full sm:w-[276px] h-[60px] bg-[#132651] text-white font-bold rounded-[6px] flex items-center justify-center hover:bg-[#1e3264] transition-colors"
        >
          Explore Membership Options
        </Link>
      </div>
    </section>
  );
}
