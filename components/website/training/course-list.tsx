import { Clock, MapPin, Users, CheckCircle2 } from "lucide-react";

const courses = [
  {
    title: "Health & Safety Awareness (CSCS)",
    badge: "CITB Approved",
    badgeBg: "bg-[#fff7ed]",
    badgeText: "text-[#d97706]",
    borderColor: "border-l-[#f97316]",
    description: "Provides the knowledge needed to obtain a CSCS card and work safely on a construction site. Covers hazard identification, PPE, fire safety, and emergency procedures.",
    duration: "1 day",
    location: "Onsite or classroom",
    audience: "All site workers",
    outcomes: [
      "CSCS card qualification",
      "Hazard awareness",
      "Emergency procedures",
      "PPE requirements"
    ]
  },
  {
    title: "SMSTS – Site Management Safety Training Scheme",
    badge: "CPD Certified",
    badgeBg: "bg-[#f5f3ff]",
    badgeText: "text-[#7c3aed]",
    borderColor: "border-l-[#8b5cf6]",
    description: "The industry-recognised standard for site managers. Covers CDM 2015, risk assessment, method statements, fire safety, and legal responsibilities of a duty holder.",
    duration: "5 days",
    location: "Classroom",
    audience: "Site managers & foremen",
    outcomes: [
      "CDM 2015 obligations",
      "Risk & COSHH assessment",
      "Method statements",
      "Legal duty holder duties"
    ]
  },
  {
    title: "Manual Handling & Ergonomics",
    badge: "In-house",
    badgeBg: "bg-[#f0fdf4]",
    badgeText: "text-[#059669]",
    borderColor: "border-l-[#10b981]",
    description: "Practical training on safe manual handling techniques tailored to the construction environment. Includes demonstration, assessment, and certification for each participant.",
    duration: "Half day",
    location: "Onsite",
    audience: "Operatives",
    outcomes: [
      "Safe lifting techniques",
      "Ergonomic risk reduction",
      "Individual certification",
      "Customised to your site"
    ]
  },
  {
    title: "Toolbox Talk Facilitation",
    badge: "Bespoke",
    badgeBg: "bg-[#eff6ff]",
    badgeText: "text-[#2563eb]",
    borderColor: "border-l-[#3b82f6]",
    description: "We facilitate toolbox talks on any topic relevant to your site: working at height, asbestos awareness, noise, vibration, or any specific hazard you need to address.",
    duration: "1-2 hours",
    location: "Onsite",
    audience: "All workers",
    outcomes: [
      "Tailored to your hazards",
      "Signed attendance records",
      "Printable handouts",
      "Follow-up Q&A"
    ]
  }
];

export default function CourseList() {
  return (
    <section className="bg-white w-full py-[80px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20">
        <div className="flex flex-col gap-[32px] max-w-[1240px] mx-auto">
          {courses.map((course, i) => (
            <div 
              key={i} 
              className={`bg-white border border-[#e3e6ec] border-l-[6px] ${course.borderColor} rounded-[16px] overflow-hidden shadow-[0px_4px_24px_rgba(19,38,81,0.04)] flex flex-col lg:flex-row`}
            >
              {/* LEFT CONTENT */}
              <div className="p-[32px] flex-1 flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[16px]">
                  <div className={`${course.badgeBg} ${course.badgeText} px-[12px] py-[2px] rounded-full text-[12px] font-bold w-fit`}>
                    {course.badge}
                  </div>
                  <h3 className="text-[24px] font-bold text-[#132651]">{course.title}</h3>
                  <p className="text-[16px] text-[#5a6886] leading-[1.6]">
                    {course.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-[24px] text-[14px] text-[#7b8496]">
                  <div className="flex items-center gap-[8px]">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <MapPin className="w-4 h-4" />
                    <span>{course.location}</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Users className="w-4 h-4" />
                    <span>{course.audience}</span>
                  </div>
                </div>

                <button className="w-full sm:w-[210px] h-[48px] bg-[#132651] text-white font-bold rounded-[6px] hover:bg-[#1e3264] transition-colors">
                  Enquire About This Course
                </button>
              </div>

              {/* RIGHT OUTCOMES */}
              <div className="bg-[#fcfcfd] lg:w-[320px] p-[32px] border-l border-[#e3e6ec] flex flex-col gap-[20px]">
                <h4 className="text-[14px] font-bold text-[#132651]">Learning Outcomes</h4>
                <div className="flex flex-col gap-[12px]">
                  {course.outcomes.map((outcome, j) => (
                    <div key={j} className="flex items-start gap-[10px]">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" />
                      <span className="text-[14px] text-[#5a6886]">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
