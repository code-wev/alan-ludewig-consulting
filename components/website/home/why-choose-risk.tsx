import Image from "next/image";
import Link from "next/link";

const hiddenCosts = [
  "Sick pay",
  "Temporary employee replacements",
  "Overtime or additional pay",
  "Loss of contracts",
  "Delayed or reduced production output",
  "Investigation time",
  "Fines",
  "Replacement plant or equipment",
  "Clean-up costs",
  "Legal costs"
];

export default function WhyChooseRisk() {
  return (
    <section className="bg-[#fcfaf7] w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-[60px]">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-8 w-full lg:max-w-[870px]">
          <div className="flex flex-col gap-5 items-start">
            <div className="bg-[#fffaeb] px-[22px] py-[2px] rounded-full">
              <span className="text-[14px] font-bold text-[#f97316]">
                Risk and Responsibility
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-[40px] font-bold text-[#132651] leading-[1.2] max-w-[754px]">
                Can Your Business Afford the Hidden Cost of Incidents?
              </h2>
              <p className="text-[16px] text-[#5a6886] leading-[1.6]">
                Workplace incidents can create significant operational, financial and reputational impact. Practical health and safety management helps businesses identify risks, improve awareness and reduce the chance of costly disruption.
              </p>
            </div>
          </div>
          <Link
            href="/resources"
            className="w-full sm:w-[276px] h-[60px] bg-[#132651] text-white font-bold rounded-[6px] flex items-center justify-center hover:bg-[#1e3264] transition-colors"
          >
            View Document Library
          </Link>
        </div>

        {/* RIGHT CONTENT - COST CARD */}
        <div className="w-full lg:max-w-[865px] flex justify-center">
          <div className="bg-white border border-[#fffaeb] rounded-[16px] p-7 md:p-10 shadow-[0px_4px_14px_rgba(154,92,42,0.07)] w-full max-w-[612px] flex flex-col gap-8">
            <div className="flex gap-3 items-center">
              <div className="bg-[#f4ebe0] w-10 h-10 rounded-[14px] flex items-center justify-center shrink-0">
                <div className="relative w-5 h-5">
                  <Image src="/images/why-choose-icon-0.png" alt="" fill />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[14px] font-bold text-[#132651]">
                  Hidden costs of a workplace incident
                </h3>
                <p className="text-[12px] text-[#7b8496]">
                  These costs are often uninsured or underestimated
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {hiddenCosts.map((cost, i) => (
                <div key={i} className="bg-[#fdfaf5] border border-[#ede4d7] rounded-[14px] px-[17px] py-[13px] flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#f97316] rounded-full shrink-0" />
                  <span className="text-[13px] font-medium text-[#132651]">{cost}</span>
                </div>
              ))}
            </div>

            {/* HSE GUIDANCE BOX */}
            <div className="bg-[#f7f2eb] border border-[#fedf89] rounded-[14px] p-4 flex gap-3">
              <div className="relative w-4 h-4 shrink-0 mt-1">
                <Image src="/images/why-choose-icon-1.png" alt="" fill />
              </div>
              <p className="text-[12px] leading-[1.6]">
                <span className="font-bold text-[#f97316]">HSE guidance:</span>
                <span className="text-[#f97316]">
                  {` The uninsured costs of a workplace accident can be 8–36 times the direct costs. Investing in proactive health and safety support reduces risk and protects your business.`}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}