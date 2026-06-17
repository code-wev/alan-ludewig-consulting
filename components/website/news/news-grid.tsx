import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    title: "HSE Updates CDM Guidance for Small Contractors",
    category: "Legislation",
    categoryBg: "bg-[#fef3c7]",
    categoryText: "text-[#d97706]",
    date: "2 May 2026",
    description: "The Health and Safety Executive has issued revised guidance on CDM 2015 obligations for contractors working on smaller domestic and commercial projects.",
    link: "/news/hse-updates-cdm"
  },
  {
    title: "New Silica Dust Controls: What Construction Firms Need to Know",
    category: "Industry News",
    categoryBg: "bg-[#e0f2fe]",
    categoryText: "text-[#0369a1]",
    date: "18 Apr 2026",
    description: "New enforcement priorities around respirable crystalline silica mean that site supervisors must review existing dust controls and update COSHH assessments before summer.",
    link: "/news/silica-dust-controls"
  },
  {
    title: "How One SME Reduced Incidents by 60% with Retained H&S Support",
    category: "Case Study",
    categoryBg: "bg-[#f5f3ff]",
    categoryText: "text-[#7c3aed]",
    date: "5 Apr 2026",
    description: "A Midlands-based groundworks contractor shares how a retained health & safety service transformed their compliance culture and reduced near-miss reports.",
    link: "/news/sme-case-study"
  },
  {
    title: "RIDDOR Reporting Threshold Changes: April 2026",
    category: "Legislation",
    categoryBg: "bg-[#fef3c7]",
    categoryText: "text-[#d97706]",
    date: "22 Mar 2026",
    description: "Upcoming changes to RIDDOR reporting thresholds will affect how businesses log and report work-related injuries. Here's what you need to do before the deadline.",
    link: "/news/riddor-reporting-changes"
  },
  {
    title: "Fire Safety Act 2021: Two Years On – Are You Still Compliant?",
    category: "Guidance",
    categoryBg: "bg-[#d1fae5]",
    categoryText: "text-[#059669]",
    date: "10 Mar 2026",
    description: "With the Fire Safety Act now fully in force, we look at the practical steps building owners and principal contractors must take to remain compliant.",
    link: "/news/fire-safety-act"
  },
  {
    title: "Free Toolbox Talk Series Launched for Spring 2026",
    category: "Training",
    categoryBg: "bg-[#e0f2fe]",
    categoryText: "text-[#0284c7]",
    date: "1 Mar 2026",
    description: "We've released six new toolbox talk resources covering excavation safety, working at height, and manual handling — free to download for all registered members.",
    link: "/news/toolbox-talk-series"
  }
];

export default function NewsGrid() {
  return (
    <section className="bg-white w-full py-[80px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {newsItems.map((item, i) => (
            <div 
              key={i} 
              className="bg-white border border-[#e3e6ec] rounded-[16px] p-[32px] flex flex-col gap-[20px] shadow-[0px_4px_24px_rgba(19,38,81,0.04)] hover:shadow-[0px_4px_24px_rgba(19,38,81,0.08)] transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className={`${item.categoryBg} ${item.categoryText} px-[12px] py-[2px] rounded-full text-[12px] font-bold`}>
                  {item.category}
                </div>
                <div className="flex items-center gap-[6px] text-[#7b8496]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-[12px]">{item.date}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-[12px] flex-1">
                <h3 className="text-[18px] font-bold text-[#132651] leading-[1.4]">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#5a6886] leading-[1.6]">
                  {item.description}
                </p>
              </div>

              <Link 
                href={item.link}
                className="flex items-center gap-[8px] text-[14px] font-bold text-[#132651] hover:gap-[12px] transition-all"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
