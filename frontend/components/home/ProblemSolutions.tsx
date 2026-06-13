import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const PROBLEMS = [
  {
    title: "Compliance Risk",
    desc: "Stay prepared with structured documents, RAMS, policies, checklists, and professional guidance.",
    icon: "b4c907d4-92ba-48f0-ab29-ed5196d31794",
    bg: "bg-[#e8eaee]",
  },
  {
    title: "Costly Delays",
    desc: "Reduce time spent searching for templates, rewriting documents, or fixing missing information.",
    icon: "da2a969d-83cf-4bd5-bfd8-50cda056e346",
    bg: "bg-[#e0f2fe]",
  },
  {
    title: "Competent Support",
    desc: "Access practical health and safety guidance from experienced construction industry professionals.",
    icon: "d06685f2-babc-42a0-a0ec-f8d64b614d0a",
    bg: "bg-[#ccfbf1]",
  },
];

export const ProblemSolutions = () => {
  return (
    <section className="bg-primary py-[100px]">
      <Container className="flex flex-col items-center gap-16">
        <div className="text-center flex flex-col gap-6 max-w-[967px]">
          <h2 className="text-bg-main text-[40px] font-bold leading-[1.2] max-w-[754px] mx-auto">
            Don’t Wait Until a Health & Safety Issue Becomes a Costly Problem
          </h2>
          <p className="text-bg-main/80 text-lg leading-relaxed max-w-[868px] mx-auto">
            Without the right support in place, businesses can face delays, compliance problems, site risks, and unnecessary costs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {PROBLEMS.map((problem, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#dce0e7] p-[21px] rounded-[12px] shadow-[0px_2px_6px_rgba(19,38,81,0.06)] flex flex-col gap-3"
            >
              <div className={`${problem.bg} w-12 h-12 rounded-[14px] flex items-center justify-center`}>
                <img
                  src={`https://www.figma.com/api/mcp/asset/${problem.icon}`}
                  alt={problem.title}
                  className="w-6 h-6"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-primary text-xl font-bold leading-relaxed">{problem.title}</h3>
                <p className="text-secondary text-base leading-relaxed h-[78px] flex items-center">
                  {problem.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button size="lg" className="w-[350px] bg-white text-primary hover:bg-white/90">
          Get the Right Support in Place
        </Button>
      </Container>
    </section>
  );
};
