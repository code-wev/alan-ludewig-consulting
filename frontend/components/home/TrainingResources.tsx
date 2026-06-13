import { Container } from "../ui/Container";

const RESOURCE_CARDS = [
  {
    title: "Small and Growing Businesses",
    desc: "Ideal for businesses that need support, templates, guidance and documents without employing an in-house health and safety manager.",
    icon: "9512f634-e7e2-4a3b-a3d8-5e09d22d3f1a",
    bg: "bg-primary",
    iconBg: "bg-[#e8eaee]",
    textColor: "text-bg-main",
    descColor: "text-light-grey",
  },
  {
    title: "Contractors and Construction Teams",
    desc: "Helpful for project teams that need RAMS, inspections, document access, checklists and practical site-based support.",
    icon: "e1387958-98b5-4d74-818f-684207ebdedb",
    bg: "bg-white",
    iconBg: "bg-[#dbeafe]",
    textColor: "text-primary",
    descColor: "text-secondary",
  },
  {
    title: "Businesses Managing Tender Requirements",
    desc: "Useful for companies that need organised documentation, competent person support and evidence for clients, PQQs or tenders.",
    icon: "5b6b42f6-e0b9-4d0b-b9ca-40c84f3c8ce3",
    bg: "bg-white",
    iconBg: "bg-[#ede9fe]",
    textColor: "text-primary",
    descColor: "text-secondary",
  },
];

export const TrainingResources = () => {
  return (
    <section className="bg-[#f3f5f8] py-[100px]">
      <Container className="flex flex-col gap-16 items-center">
        <div className="text-center flex flex-col gap-4 max-w-[749px]">
          <h2 className="text-primary text-4xl font-bold leading-tight font-inter">
            Built for Businesses That Need Practical Health & Safety Support
          </h2>
          <p className="text-secondary text-base leading-relaxed">
            Whether you are a growing contractor, SME, site-based business or organisation needing ongoing support, the retained service gives you structured access to guidance, documents and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {RESOURCE_CARDS.map((card, idx) => (
            <div
              key={idx}
              className={`${card.bg} border border-[#e3e6ec] p-[21px] rounded-[12px] shadow-[0px_2px_6px_rgba(19,38,81,0.06)] flex flex-col gap-3 h-full`}
            >
              <div className={`${card.iconBg} w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0`}>
                <img
                  src={`https://www.figma.com/api/mcp/asset/${card.icon}`}
                  alt={card.title}
                  className="w-6 h-6"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className={`${card.textColor} text-xl font-bold leading-relaxed h-[64px] flex items-center`}>
                  {card.title}
                </h3>
                <p className={`${card.descColor} text-base leading-relaxed`}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
