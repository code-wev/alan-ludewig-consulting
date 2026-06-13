import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const SOLUTIONS = [
  {
    title: "New and Growing Businesses",
    desc: "Practical guidance for companies that need to build reliable health and safety systems from the start.",
    icon: "5a56af95-9cd0-48e5-9dbc-3f3860684a33",
    bg: "bg-[#d1fae5]",
  },
  {
    title: "Contractors and Project Teams",
    desc: "Site-focused support for construction projects, contractors, inspections, audits and documentation.",
    icon: "994dbf3c-4589-4cf5-8377-35529771ef5c",
    bg: "bg-[#e8eaee]",
  },
  {
    title: "Established Organisations",
    desc: "Ongoing support for businesses that need retained advice, training, RAMS, policies and compliance documentation.",
    icon: "aef4faaf-f9b4-4f69-8e7b-3b19fc5ed0da",
    bg: "bg-[#ede9fe]",
  },
];

export const BusinessSolutions = () => {
  return (
    <section className="bg-[#f3f5f8] py-[100px]">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col gap-8 max-w-[870px]">
          <div className="flex flex-col gap-5 items-start">
            <span className="bg-[#e8eaee] px-3 py-1 rounded-full text-secondary font-bold text-sm">
              Business to Business Solutions
            </span>
            <div className="flex flex-col gap-6">
              <h2 className="text-primary text-[40px] font-bold leading-[1.2]">
                Support for SMEs, Contractors and Growing Construction Businesses
              </h2>
              <p className="text-secondary text-base leading-relaxed">
                Whether you are a newly formed SME, a growing contractor or a larger organisation looking for health and safety advice, inspections or ongoing construction project support, Alan Ludewig Consulting can provide practical assistance that fits your business needs.
              </p>
            </div>
          </div>
          <p className="text-text-muted text-sm leading-relaxed">
            The aim is to take the stress out of understanding health and safety legislation and provide an open, honest and practical service that helps your business stay organised, informed and compliant.
          </p>
          <Button size="lg" className="w-[276px]">
            Discuss Your Requirements
          </Button>
        </div>

        <div className="flex flex-col gap-5 max-w-[612px] mx-auto lg:mx-0">
          {SOLUTIONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#dce0e7] p-[29px] rounded-[16px] shadow-[0px_2px_6px_rgba(19,38,81,0.05)] flex gap-5 items-start"
            >
              <div className={`${item.bg} w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0`}>
                <img
                  src={`https://www.figma.com/api/mcp/asset/${item.icon}`}
                  alt={item.title}
                  className="w-6 h-6"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-primary text-base font-bold leading-relaxed">{item.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
