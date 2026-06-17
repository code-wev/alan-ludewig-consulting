import { FolderOpen, FileSignature, Bookmark, FileText, MapPin, Newspaper } from "lucide-react";

const features = [
  {
    title: "Reduce Document Confusion",
    description: "Keep key health and safety documents easier to find and use.",
    iconBg: "bg-[#dbeafe]",
    icon: <FolderOpen className="w-5 h-5 text-[#2563eb]" />
  },
  {
    title: "Save Time on RAMS",
    description: "Use guided forms and pre-built content to create structured assessments faster.",
    iconBg: "bg-[#e8eaee]",
    icon: <FileSignature className="w-5 h-5 text-[#132651]" />
  },
  {
    title: "Keep Files Organised",
    description: "Save generated RAMS, checklists and documents in the My Saved Files area.",
    iconBg: "bg-[#d1fae5]",
    icon: <Bookmark className="w-5 h-5 text-[#059669]" />
  },
  {
    title: "Support Tender Requirements",
    description: "Access membership documents, competent person information and relevant support files.",
    iconBg: "bg-[#ede9fe]",
    icon: <FileText className="w-5 h-5 text-[#7c3aed]" />
  },
  {
    title: "Book Help When Needed",
    description: "Use credits or extras to request inspections, visits, calls or bespoke documents.",
    iconBg: "bg-[#fff7ed]",
    icon: <MapPin className="w-5 h-5 text-[#ea580c]" />
  },
  {
    title: "Stay Updated",
    description: "Receive newsletters, regulatory updates and practical guidance through the portal.",
    iconBg: "bg-[#eff6ff]",
    icon: <Newspaper className="w-5 h-5 text-[#2563eb]" />
  }
];

export default function ServiceFeatures() {
  return (
    <section className="bg-[#f3f5f8] w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-center gap-[60px]">
        {/* HEADER */}
        <div className="flex flex-col gap-[20px] items-center text-center">
          <div className="bg-[#e8eaee] px-[12px] py-[4px] rounded-full">
            <span className="text-[14px] font-bold text-[#5a6886]">
              Why Retained Support Helps
            </span>
          </div>
          <div className="flex flex-col gap-[24px]">
            <h2 className="text-[40px] font-bold text-[#132651] leading-[1.2]">
              More Structure, Less Hassle
            </h2>
            <p className="text-[16px] text-[#5a6886] leading-[1.6] max-w-[502px] mx-auto">
              The retained services platform is designed to help businesses save time, stay organised and access support more easily.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full max-w-[1320px]">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="bg-white border border-[#e3e6ec] rounded-[12px] p-[21px] flex gap-[12px] items-start shadow-[0px_2px_6px_rgba(19,38,81,0.06)]"
            >
              <div className={feature.iconBg + " w-[40px] h-[40px] rounded-[14px] flex items-center justify-center shrink-0"}>
                {feature.icon}
              </div>
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-[20px] font-bold text-[#132651] leading-[1.6]">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-[#5a6886] leading-[1.6]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}