import { Plus } from "lucide-react";

const faqItems = [
  "What is included in the retained services membership?",
  "Can I create RAMS through the portal?",
  "Can I download documents?",
  "Can I save generated documents?",
  "Can I book site visits?",
  "Can I upgrade my plan later?",
  "Can I buy bespoke RAMS or custom checklists?"
];

export default function RetainedFAQ() {
  return (
    <section className="bg-[#f7f8fa] w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-center gap-[60px]">
        {/* HEADER */}
        <div className="flex flex-col gap-[24px] items-center text-center">
          <h2 className="text-[40px] font-bold text-[#132651] leading-[1.2]">Frequently Asked Questions</h2>
          <p className="text-[16px] text-[#5a6886] max-w-[638px]">
            Common questions about the retained services membership and member portal.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-[12px] w-full max-w-[768px]">
          {faqItems.map((question, i) => (
            <div 
              key={i} 
              className="bg-white border border-[#dce0e7] rounded-[14px] shadow-[0px_1px_6px_rgba(19,38,81,0.04)]"
            >
              <button className="w-full flex items-center justify-between px-6 py-4 relative">
                <span className="text-[16px] font-bold text-[#132651] text-left">
                  {question}
                </span>
                <Plus className="relative shrink-0 w-4 h-4 text-[#132651]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
