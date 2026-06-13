import { Container } from "../ui/Container";

const TESTIMONIALS = [
  {
    quote: "Having documents, RAMS tools, and support in one place makes it easier to stay organised and respond quickly when project requirements change.",
    author: "Construction Business Owner",
    role: "Member",
    initial: "C",
    bg: "bg-[#e8eaee]",
    textColor: "text-[#132651]",
  },
  {
    quote: "The portal gives us a clearer way to access documents, updates, and support without searching through old files.",
    author: "Operations Manager",
    role: "Member",
    initial: "O",
    bg: "bg-[#e0f2fe]",
    textColor: "text-[#0284c7]",
  },
  {
    quote: "The retained support model helps us manage health and safety more consistently across projects.",
    author: "Project Manager",
    role: "Member",
    initial: "P",
    bg: "bg-[#ccfbf1]",
    textColor: "text-[#0f766e]",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-bg-main py-[100px]">
      <Container className="flex flex-col gap-16 items-center">
        <div className="text-center flex flex-col gap-4 max-w-[850px]">
          <h2 className="text-primary text-[40px] font-bold leading-[1.2]">
            Practical Support for Businesses That Need Clear Health & Safety Guidance
          </h2>
          <p className="text-secondary text-base leading-relaxed max-w-[679px] mx-auto">
            Stay informed and support your team with training options, updates, and helpful resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#dce0e7] p-[21px] rounded-[12px] shadow-[0px_2px_6px_rgba(19,38,81,0.06)] flex flex-col gap-8 h-full"
            >
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="https://www.figma.com/api/mcp/asset/fc7429ad-5fd1-4837-bc51-6869e0761dc4"
                    alt="Star"
                    className="w-[18px] h-[18px]"
                  />
                ))}
              </div>

              <p className="text-primary text-lg leading-relaxed italic">
                &quot;{t.quote}&quot;
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <div className={`${t.bg} w-9 h-9 rounded-full flex items-center justify-center shrink-0`}>
                  <span className={`${t.textColor} text-sm font-bold font-inter`}>{t.initial}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary text-sm font-bold leading-tight">{t.author}</span>
                  <span className="text-secondary text-sm leading-tight">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
