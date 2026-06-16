import Image from "next/image";

const testimonials = [
  {
    text: "Having documents, RAMS tools, and support in one place makes it easier to stay organised and respond quickly when project requirements change.",
    author: "Construction Business Owner",
    role: "Member",
    initial: "C",
    bg: "bg-[#e8eaee]",
    textColor: "text-[#132651]"
  },
  {
    text: "The portal gives us a clearer way to access documents, updates, and support without searching through old files.",
    author: "Operations Manager",
    role: "Member",
    initial: "O",
    bg: "bg-[#e0f2fe]",
    textColor: "text-[#0284c7]"
  },
  {
    text: "The retained support model helps us manage health and safety more consistently across projects.",
    author: "Project Manager",
    role: "Member",
    initial: "P",
    bg: "bg-[#ccfbf1]",
    textColor: "text-[#0f766e]"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#f7f8fa] w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-center gap-[60px]">
        {/* HEADER */}
        <div className="flex flex-col gap-6 items-center text-center">
          <h2 className="text-[40px] font-bold text-[#132651] leading-[1.2] max-w-[850px]">
            Practical Support for Businesses That Need Clear Health & Safety Guidance
          </h2>
          <p className="text-[16px] text-[#5a6886] leading-[1.6] max-w-[679px]">
            Stay informed and support your team with training options, updates, and helpful resources.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-white border border-[#dce0e7] rounded-[12px] p-[21px] flex flex-col gap-5 shadow-[0px_2px_6px_rgba(19,38,81,0.06)] h-full"
            >
              {/* STARS */}
              <div className="flex gap-[6px]">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="relative w-[18px] h-[18px]">
                    <Image src="/images/star-icon.png" alt="" fill />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-8 flex-1">
                <p className="text-[18px] text-[#132651] leading-[1.6] min-h-[116px]">
                  &quot;{t.text}&quot;
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <div className={`${t.bg} w-9 h-9 rounded-full flex items-center justify-center shrink-0`}>
                    <span className={`text-[14px] font-bold ${t.textColor}`}>{t.initial}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-[#132651]">{t.author}</span>
                    <span className="text-[14px] text-[#5a6886]">{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
