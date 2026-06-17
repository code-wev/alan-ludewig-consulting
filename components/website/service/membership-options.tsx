import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Comply",
    description: "Essential portal access for businesses that need practical document support and basic retained tools.",
    bestFor: "Best for small businesses that need document access and light support.",
    features: [
      "Member portal access",
      "Core document library",
      "News and regulatory updates",
      "Basic retained support tools",
      "Buy extras when needed"
    ],
    buttonText: "View Plan",
    buttonBg: "bg-[#132651]",
    buttonColor: "text-white",
    cardBg: "bg-white",
    textColor: "text-[#132651]",
    descColor: "text-[#5a6886]",
    borderColor: "border-[#e3e6ec]",
    checkColor: "text-[#5a6886]"
  },
  {
    name: "Comply+",
    description: "Expanded access for businesses that need more tools, saved files, assessment support, and flexible add-ons.",
    bestFor: "Best for growing businesses that need regular document and RAMS support.",
    features: [
      "Expanded document access",
      "RAMS or assessment allowance",
      "Forms and checklist access",
      "My Saved Files",
      "Booking support options",
      "Add-on purchase access"
    ],
    badge: "Best Value",
    badgeBg: "bg-[#0284c7]",
    buttonText: "Choose Comply+",
    buttonBg: "bg-[#132651]",
    buttonColor: "text-white",
    cardBg: "bg-white",
    textColor: "text-[#132651]",
    descColor: "text-[#5a6886]",
    borderColor: "border-[#e3e6ec]",
    checkColor: "text-[#5a6886]"
  },
  {
    name: "Comply Pro",
    description: "The fullest support option for businesses that need stronger retained support, site visit credits, and priority tools.",
    bestFor: "Best for businesses needing ongoing support, stronger compliance structure, and site-based assistance.",
    features: [
      "Most complete portal access",
      "Higher RAMS and assessment allowance",
      "Site visit credits",
      "Training discount",
      "Priority support tools",
      "AI Agent support",
      "Extra service access"
    ],
    badge: "Most Popular",
    badgeBg: "bg-[#7c3aed]",
    buttonText: "Choose Comply Pro",
    buttonBg: "bg-white",
    buttonColor: "text-[#132651]",
    cardBg: "bg-[#132651]",
    textColor: "text-[#f7f8fa]",
    descColor: "text-[#e8eaee]",
    bestForDescColor: "text-[#f3f5f8]",
    borderColor: "border-[#132651]",
    checkColor: "text-[#e8eaee]"
  }
];

export default function MembershipOptions() {
  return (
    <section className="bg-white w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-center gap-[60px]">
        {/* HEADER */}
        <div className="flex flex-col gap-[20px] items-center text-center">
          <div className="bg-[#e8eaee] px-[12px] py-[4px] rounded-full">
            <span className="text-[14px] font-bold text-[#5a6886]">
              Membership Options
            </span>
          </div>
          <div className="flex flex-col gap-[24px]">
            <h2 className="text-[40px] font-bold text-[#132651] leading-[1.2] max-w-[1008px]">
              Choose the Support Level That Fits Your Business
            </h2>
            <p className="text-[16px] text-[#5a6886] leading-[1.6] max-w-[926px] mx-auto">
              Membership options are designed to give construction businesses practical access to documents, support tools, RAMS features, AI guidance, and additional services
            </p>
          </div>
        </div>

        {/* PRICING CARDS */}
        <div className="flex flex-col lg:flex-row gap-[20px] items-stretch w-full justify-center">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={"relative " + plan.cardBg + " border-2 " + plan.borderColor + " rounded-[12px] p-[20px] flex flex-col w-full lg:w-[425px] shadow-[0px_2px_6px_rgba(19,38,81,0.05)]"}
            >
              {/* BADGE */}
              {plan.badge && (
                <div className={"absolute top-[18px] right-[20px] " + plan.badgeBg + " px-[12px] py-[4px] rounded-full"}>
                  <span className="text-[11px] font-bold text-white leading-[16.5px]">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* CARD TOP CONTENT */}
              <div className="flex flex-col gap-[32px] mb-8 flex-1">
                <div className="flex flex-col gap-[12px]">
                  <h3 className={"text-[36px] font-bold " + plan.textColor + " leading-[1.6]"}>
                    {plan.name}
                  </h3>
                  <p className={"text-[18px] " + plan.descColor + " leading-[1.6] min-h-[58px]"}>
                    {plan.description}
                  </p>
                  <div className="flex flex-col gap-[6px] mt-4 min-h-[85px]">
                    <span className={"text-[18px] font-bold " + plan.textColor}>Best For:</span>
                    <span className={"text-[16px] " + (plan.bestForDescColor || plan.descColor)}>
                      {plan.bestFor}
                    </span>
                  </div>
                </div>

                {/* FEATURES LIST */}
                <div className="flex flex-col gap-[12px]">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-[8px]">
                      <Check className={"w-4 h-4 shrink-0 mt-0.5 " + plan.checkColor} />
                      <span className={"text-[14px] leading-[1.6] " + plan.checkColor}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BUTTON */}
              <Link
                href="/plans"
                className={"w-full h-[60px] " + plan.buttonBg + " " + plan.buttonColor + " font-bold rounded-[6px] flex items-center justify-center hover:opacity-90 transition-opacity border " + (plan.name === "Comply Pro" ? "border-[#132651]" : "border-transparent")}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
