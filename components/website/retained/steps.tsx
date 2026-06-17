import { CheckSquare, LogIn, FileText, Download } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Choose a Membership Plan",
    description: "Select the support level that fits your business needs.",
    iconBg: "bg-[#e8eaee]",
    icon: <CheckSquare className="w-5 h-5 text-[#132651]" />
  },
  {
    num: "2",
    title: "Access the Member Portal",
    description: "Log in to view your tools, documents, credits, saved files, and support options.",
    iconBg: "bg-[#e0f2fe]",
    icon: <LogIn className="w-5 h-5 text-[#0284c7]" />
  },
  {
    num: "3",
    title: "Use Documents, AI Guidance and RAMS Tools",
    description: "Find documents, ask the AI Agent for guidance, create assessments, complete checklists, and save your work.",
    iconBg: "bg-[#ccfbf1]",
    icon: <FileText className="w-5 h-5 text-[#0f766e]" />
  },
  {
    num: "4",
    title: "Download, Export or Book Support",
    description: "Download documents in the available format, export generated files, or book site visits and additional support when required.",
    iconBg: "bg-[#ede9fe]",
    icon: <Download className="w-5 h-5 text-[#7c3aed]" />
  }
];

export default function RetainedSteps() {
  return (
    <section className="bg-[#f7f8fa] w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-center gap-[60px]">
        {/* HEADER */}
        <div className="flex flex-col gap-[24px] items-center text-center">
          <h2 className="text-[40px] font-bold text-[#132651] leading-[1.2] max-w-[754px]">
            How the Member Portal Works
          </h2>
          <p className="text-[16px] text-[#5a6886] leading-[1.6] max-w-[679px]">
            A simple process designed to keep your health and safety documents, support, and compliance tasks organised
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="relative flex flex-col lg:flex-row gap-[20px] items-end w-full max-w-[1492px] justify-center">
          
          {/* CONNECTING LINES (Hidden on mobile/tablet) */}
          <div className="hidden lg:block absolute top-[31px] left-[260px] w-[110px] h-[2px] bg-[#e3e6ec]" />
          <div className="hidden lg:block absolute top-[31px] left-[638px] w-[110px] h-[2px] bg-[#e3e6ec]" />
          <div className="hidden lg:block absolute top-[31px] left-[1016px] w-[110px] h-[2px] bg-[#e3e6ec]" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-[29px] w-full lg:w-[358px] z-10">
              {/* ICON & NUMBER */}
              <div className="relative w-[64px] h-[64px]">
                <div className={`absolute left-0 top-0 w-[64px] h-[64px] ${step.iconBg} border-2 border-[#dce0e7] rounded-[16px] flex items-center justify-center shadow-[0px_4px_8px_rgba(19,38,81,0.08)] bg-white`}>
                  {step.icon}
                </div>
                <div className="absolute left-[48px] top-[-8px] w-[24px] h-[24px] bg-[#132651] rounded-full flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">{step.num}</span>
                </div>
              </div>

              {/* CARD */}
              <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-[21px] flex flex-col items-center justify-center text-center shadow-[0px_2px_6px_rgba(19,38,81,0.06)] w-full max-w-[306px]">
                <h3 className="text-[18px] font-bold text-[#132651] leading-[1.6] mb-4 min-h-[58px] flex items-center justify-center">
                  {step.title}
                </h3>
                <p className="text-[16px] text-[#5a6886] leading-[1.6] min-h-[99px] flex items-start justify-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}