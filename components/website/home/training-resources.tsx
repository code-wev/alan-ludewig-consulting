import Image from "next/image";

const trainingCards = [
  {
    icon: "/images/training-icon-0.png",
    bg: "bg-[#132651]",
    iconBg: "bg-[#e8eaee]",
    title: "Small and Growing Businesses",
    titleColor: "text-[#f7f8fa]",
    description: "Ideal for businesses that need support, templates, guidance and documents without employing an in-house health and safety manager.",
    descColor: "text-[#d0d4dc]"
  },
  {
    icon: "/images/training-icon-1.png",
    bg: "bg-white",
    iconBg: "bg-[#dbeafe]",
    title: "Contractors and Construction Teams",
    titleColor: "text-[#132651]",
    description: "Helpful for project teams that need RAMS, inspections, document access, checklists and practical site-based support.",
    descColor: "text-[#5a6886]"
  },
  {
    icon: "/images/training-icon-2.png",
    bg: "bg-white",
    iconBg: "bg-[#ede9fe]",
    title: "Businesses Managing Tender Requirements",
    titleColor: "text-[#132651]",
    description: "Useful for companies that need organised documentation, competent person support and evidence for clients, PQQs or tenders.",
    descColor: "text-[#5a6886]"
  }
];

export default function TrainingResources() {
  return (
    <section className="bg-[#f3f5f8] w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-center gap-[60px]">
        {/* HEADER */}
        <div className="flex flex-col gap-4 items-center text-center max-w-[750px]">
          <h2 className="text-[36px] font-bold text-[#132651] leading-[1.1]">
            Built for Businesses That Need Practical Health & Safety Support
          </h2>
          <p className="text-[16px] text-[#5a6886] leading-[1.6]">
            Whether you are a growing contractor, SME, site-based business or organisation needing ongoing support, the retained service gives you structured access to guidance, documents and tools.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
          {trainingCards.map((card, i) => (
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
                <h3 className={`text-[20px] font-bold ${card.titleColor} leading-[1.6] min-h-[64px]`}>
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
