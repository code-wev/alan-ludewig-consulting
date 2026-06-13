import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="bg-bg-main py-20 overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Content */}
        <div className="flex flex-col gap-8 max-w-[870px]">
          <div className="flex flex-col gap-5 items-start">
            <span className="bg-soft-grey border border-light-grey px-4 py-1.5 rounded-full text-primary font-bold text-sm">
              Retained Health & Safety Services
            </span>
            <div className="flex flex-col gap-8">
              <h1 className="text-primary text-[40px] font-bold leading-[1.2]">
                Stay Compliant, Save Time and Get Competent Health & Safety Support
              </h1>
              <p className="text-secondary text-lg leading-relaxed max-w-[754px]">
                Access competent person support, RAMS tools, document templates, checklists, site visit credits, training resources, and practical guidance from one organised member portal
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                Alan Ludewig Consulting helps construction businesses manage health and safety with practical, professional support. The retained services platform gives members one simple place to access documents, create assessments, book support, and stay prepared
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <Button size="lg" className="w-full sm:w-[276px]">
              View Membership Plans
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-[276px] bg-white">
              Send Enquiry
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 mt-4">
            {[
              { icon: "cf975045-4f14-452e-8e57-7ff208c97054", text: "Nearly 20 years construction industry experience" },
              { icon: "dc187648-3fd6-4af1-8fd0-5b3d8e5716fd", text: "Competent person support" },
              { icon: "8dc33b9b-9bcd-4666-a321-25693525a6a7", text: "RAMS, documents and checklist tools" },
              { icon: "4b1b07cf-854d-439b-950a-8e680c608e49", text: "Site inspections and audits" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <img
                  src={`https://www.figma.com/api/mcp/asset/${item.icon}`}
                  alt="Icon"
                  className="w-4 h-4"
                />
                <span className="text-secondary text-[13px] font-medium font-inter">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Portal Mockup */}
        <div className="relative">
          <div className="bg-white border border-[#dce0e7] rounded-[16px] shadow-[0px_24px_60px_0px_rgba(19,38,81,0.18)] overflow-hidden w-full max-w-[529px]">
            {/* Browser Bar */}
            <div className="bg-[#1e3264] border-b border-[#2a4080] h-[50px] flex items-center px-4 gap-2">
              <div className="flex gap-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-error opacity-80" />
                <div className="w-3 h-3 rounded-full bg-warning opacity-80" />
                <div className="w-3 h-3 rounded-full bg-info opacity-80" />
              </div>
              <div className="bg-primary h-6 px-3 rounded-lg flex items-center flex-1 max-w-[381px]">
                <span className="text-[#8ca0c8] text-[11px] font-inter">portal.alanludewigconsulting.com</span>
              </div>
              <img src="https://www.figma.com/api/mcp/asset/4efb09de-074b-4694-a365-01e3a1313bd0" alt="Icon" className="w-3.5 h-3.5" />
            </div>

            {/* Portal Content */}
            <div className="bg-[#f0f2f8] p-5 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-primary text-[13px] font-bold font-inter">Member Portal</h4>
                  <p className="text-text-muted text-[11px] font-inter">Welcome back</p>
                </div>
                <div className="flex gap-2">
                  <span className="bg-success-bg text-success text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 font-inter">
                    <span className="w-1.5 h-1.5 bg-success rounded-full" /> Active Member
                  </span>
                  <span className="bg-accent-bg text-accent text-[10px] font-semibold px-2 py-0.5 rounded-full font-inter">
                    Comply Pro
                  </span>
                </div>
              </div>

              {/* Credits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-[#dce0e7] p-3 rounded-[14px]">
                  <p className="text-text-muted text-[10px] font-medium font-inter">RAMS Credits</p>
                  <p className="text-primary text-[22px] font-bold font-inter">8</p>
                  <p className="text-success text-[10px] font-inter">Available this month</p>
                </div>
                <div className="bg-white border border-[#dce0e7] p-3 rounded-[14px]">
                  <p className="text-text-muted text-[10px] font-medium font-inter">Site Visit Credits</p>
                  <p className="text-primary text-[22px] font-bold font-inter">2</p>
                  <p className="text-success text-[10px] font-inter">Available to book</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Create RAMS", sub: "Risk Assessment & Method Statement", icon: "570edb32-7196-41fc-94b2-723c1810a6d4", bg: "bg-[#eef2ff]" },
                  { title: "Document Library", sub: "Access policies, forms & checklists", icon: "cce78f8c-0a68-4c64-87bb-b41cb59fb8c4", bg: "bg-[#e0f2fe]" },
                  { title: "Book Site Visit", sub: "Schedule inspection or audit", icon: "de556588-d347-44b7-b51a-3050e0f822c3", bg: "bg-[#f5f3ff]" },
                  { title: "My Saved Files", sub: "Access your saved documents", icon: "2b75d054-b6b6-4a8f-94e8-ff748b95ad3f", bg: "bg-[#fff7ed]" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-[#dce0e7] p-3 rounded-[14px]">
                    <div className={`${item.bg} w-7 h-7 rounded-[10px] flex items-center justify-center mb-2`}>
                      <img src={`https://www.figma.com/api/mcp/asset/${item.icon}`} alt="Icon" className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-primary text-[11px] font-semibold font-inter">{item.title}</p>
                    <p className="text-text-muted text-[10px] font-inter leading-tight">{item.sub}</p>
                  </div>
                ))}
              </div>

              {/* Notification */}
              <div className="bg-white border border-[#dce0e7] p-3 rounded-[14px] flex items-center gap-3">
                <div className="bg-success-bg w-6 h-6 rounded-[10px] flex items-center justify-center">
                  <img src="https://www.figma.com/api/mcp/asset/993a42a2-b0d8-4476-9155-c8308c63f5d7" alt="Icon" className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <p className="text-primary text-[11px] font-medium font-inter">New document available</p>
                  <p className="text-text-muted text-[10px] font-inter">Site Inspection Checklist v1.4 — updated today</p>
                </div>
                <span className="bg-success-bg text-success text-[9px] font-semibold px-1.5 py-0.5 rounded-full font-inter">New</span>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute left-[-16px] bottom-[-20px] bg-white border border-[#dce0e7] p-3 rounded-[14px] shadow-lg flex items-center gap-2 max-w-[186px]">
            <img src="https://www.figma.com/api/mcp/asset/7369e6f1-a3bf-488c-a58f-406821bb08b8" alt="Icon" className="w-5 h-5" />
            <div>
              <p className="text-primary text-[11px] font-bold font-inter">Competent Support</p>
              <p className="text-text-muted text-[10px] font-inter leading-tight">Professional H&S guidance</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
