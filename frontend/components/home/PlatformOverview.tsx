import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const FEATURES = [
  {
    title: "Competent Support",
    desc: "Get practical guidance to help your business meet health and safety responsibilities.",
    icon: "30ee9df6-2a7e-45de-bfd9-719a77139890",
    bg: "bg-[#e8eaee]",
  },
  {
    title: "Document Access",
    desc: "Use a structured member library for policies, forms, checklists, audit forms, procedures, and templates.",
    icon: "e9cb04a4-669e-47a9-91d5-73ec5c70f026",
    bg: "bg-[#e0f2fe]",
  },
  {
    title: "RAMS & Assessments",
    desc: "Create RAMS, Fire Risk Assessments, COSHH assessments, and checklist-based documents.",
    icon: "7d70a2af-ae8d-408f-a385-d361f23f49f8",
    bg: "bg-[#ccfbf1]",
  },
  {
    title: "Site Visits & Extras",
    desc: "Book inspections, audits, meetings, or additional support when your business needs extra help",
    icon: "c12d400b-749d-4c52-a80b-aae5e89e6174",
    bg: "bg-[#ede9fe]",
  },
];

export const PlatformOverview = () => {
  return (
    <section className="bg-white py-[100px]">
      <Container className="flex flex-col items-center gap-16">
        <div className="text-center flex flex-col gap-6 max-w-[967px]">
          <h2 className="text-primary text-[40px] font-bold leading-[1.2]">
            Retained Health & Safety Support Without Hiring In House
          </h2>
          <p className="text-secondary text-lg leading-relaxed mx-auto max-w-[868px]">
            A practical way to access competent advice, essential documents, RAMS tools, site visit support, and updates without the cost of a full-time internal health and safety role
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#dce0e7] p-[21px] rounded-[12px] shadow-[0px_2px_6px_rgba(19,38,81,0.06)] flex flex-col gap-3"
            >
              <div className={`${feature.bg} w-12 h-12 rounded-[14px] flex items-center justify-center`}>
                <img
                  src={`https://www.figma.com/api/mcp/asset/${feature.icon}`}
                  alt={feature.title}
                  className="w-6 h-6"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-primary text-xl font-bold leading-relaxed">{feature.title}</h3>
                <p className="text-secondary text-base leading-relaxed h-[78px] flex items-center">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button size="lg" className="w-[350px]">
          Explore Membership Options
        </Button>
      </Container>
    </section>
  );
};
