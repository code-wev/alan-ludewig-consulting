import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const HIDDEN_COSTS = [
  "Sick pay",
  "Temporary employee replacements",
  "Overtime or additional pay",
  "Loss of contracts",
  "Delayed or reduced production output",
  "Investigation time",
  "Fines",
  "Replacement plant or equipment",
  "Clean-up costs",
  "Legal costs",
];

export const WhyChoose = () => {
  return (
    <section className="bg-[#fcfaf7] py-[100px]">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-8 max-w-[870px]">
          <div className="flex flex-col gap-5 items-start">
            <span className="bg-[#fffaeb] px-[22px] py-[2px] rounded-full text-[#f97316] font-bold text-sm">
              Risk and Responsibility
            </span>
            <div className="flex flex-col gap-6">
              <h2 className="text-primary text-[40px] font-bold leading-[1.2] max-w-[754px]">
                Can Your Business Afford the Hidden Cost of Incidents?
              </h2>
              <p className="text-secondary text-lg leading-relaxed max-w-[870px]">
                Workplace incidents can create significant operational, financial and reputational impact. Practical health and safety management helps businesses identify risks, improve awareness and reduce the chance of costly disruption.
              </p>
            </div>
          </div>
          <Button size="lg" className="w-[276px]">
            View Document Library
          </Button>
        </div>

        <div className="bg-white border border-[#fffaeb] rounded-[16px] shadow-sm p-7 flex flex-col gap-8 max-w-[612px] mx-auto lg:mx-0">
          <div className="flex items-center gap-3">
            <div className="bg-[#f4ebe0] w-10 h-10 rounded-[14px] flex items-center justify-center">
              <img src="https://www.figma.com/api/mcp/asset/890e085c-8a27-43ef-ad23-2a31c167d549" alt="Icon" className="w-5 h-5" />
            </div>
            <div>
              <p className="text-primary text-sm font-bold font-inter leading-tight">Hidden costs of a workplace incident</p>
              <p className="text-text-muted text-xs font-inter leading-tight">These costs are often uninsured or underestimated</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIDDEN_COSTS.map((cost, idx) => (
              <div key={idx} className="bg-[#fdfaf5] border border-[#ede4d7] p-3.5 rounded-[14px] flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#f97316] rounded-full shrink-0" />
                <span className="text-primary text-[13px] font-medium font-inter">{cost}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#f7f2eb] border border-[#fedf89] p-4 rounded-[14px] flex gap-3">
            <img src="https://www.figma.com/api/mcp/asset/c0920a82-9f78-41d5-8d1d-a3d8bd851c1e" alt="Icon" className="w-4 h-4 mt-1 shrink-0" />
            <p className="text-[#f97316] text-xs font-inter leading-relaxed">
              <span className="font-bold">HSE guidance:</span>
              {` The uninsured costs of a workplace accident can be 8–36 times the direct costs. Investing in proactive health and safety support reduces risk and protects your business.`}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
