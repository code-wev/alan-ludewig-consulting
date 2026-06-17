import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-[#f7f8fa] w-full py-[80px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col lg:flex-row gap-[48px] items-start justify-center">
        
        {/* LEFT COLUMN: CONTACT DETAILS */}
        <div className="flex flex-col gap-[24px] w-full lg:max-w-[412px]">
          <div className="bg-white border border-[#e3e6ec] rounded-[16px] p-[30px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] flex flex-col gap-[32px]">
            <h2 className="text-[20px] font-bold text-[#132651]">Contact Details</h2>
            
            <div className="flex flex-col gap-[24px]">
              {/* Phone */}
              <div className="flex gap-[16px] items-start">
                <div className="bg-[#fef3c7] p-[12px] rounded-[14px]">
                  <Phone className="w-[16px] h-[16px] text-[#d97706]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-[#5a6886]">Phone</span>
                  <span className="text-[14px] font-bold text-[#132651]">0330 133 4304</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-[16px] items-start">
                <div className="bg-[#e0f2fe] p-[12px] rounded-[14px]">
                  <Mail className="w-[16px] h-[16px] text-[#0369a1]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-[#5a6886]">Email</span>
                  <span className="text-[14px] font-bold text-[#132651]">hello@alanludewigconsulting.com</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-[16px] items-start">
                <div className="bg-[#d1fae5] p-[12px] rounded-[14px]">
                  <MapPin className="w-[16px] h-[16px] text-[#059669]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-[#5a6886]">Location</span>
                  <span className="text-[14px] font-bold text-[#132651]">England & Wales (national coverage)</span>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-[16px] items-start">
                <div className="bg-[#f5f3ff] p-[12px] rounded-[14px]">
                  <Clock className="w-[16px] h-[16px] text-[#7c3aed]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-[#5a6886]">Office Hours</span>
                  <span className="text-[14px] font-bold text-[#132651]">Mon–Fri, 08:00–17:30</span>
                </div>
              </div>
            </div>
          </div>

          {/* EMERGENCY BOX */}
          <div className="bg-[#132651] rounded-[16px] p-[28px] flex flex-col gap-[16px]">
            <h3 className="text-[16px] font-bold text-white">Emergency H&S Advice</h3>
            <p className="text-[14px] text-[#8ba7c8] leading-[1.6]">
              Retained clients have access to out-of-hours emergency telephone support. Call the number above and follow the prompt.
            </p>
            <p className="text-[12px] text-[#5a7090]">
              Not yet a retained client? <Link href="/retained-services" className="text-[#f0a500] font-bold hover:underline">View our plans</Link>
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <div className="bg-white border border-[#e3e6ec] rounded-[16px] p-[32px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] w-full lg:max-w-[640px]">
          <h2 className="text-[20px] font-bold text-[#132651] mb-[32px]">Send Us a Message</h2>
          <form className="flex flex-col gap-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              <div className="flex flex-col gap-[6px]">
                <label className="text-[12px] font-bold text-[#132651]">Full Name <span className="text-[#d92d20]">*</span></label>
                <input type="text" placeholder="John Smith" className="bg-[#fafbfc] border border-[#d1d8e4] rounded-[14px] px-[16px] py-[10px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#132651]/10" />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-[12px] font-bold text-[#132651]">Company Name</label>
                <input type="text" placeholder="ABC Contractors Ltd" className="bg-[#fafbfc] border border-[#d1d8e4] rounded-[14px] px-[16px] py-[10px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#132651]/10" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              <div className="flex flex-col gap-[6px]">
                <label className="text-[12px] font-bold text-[#132651]">Email Address <span className="text-[#d92d20]">*</span></label>
                <input type="email" placeholder="john@example.com" className="bg-[#fafbfc] border border-[#d1d8e4] rounded-[14px] px-[16px] py-[10px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#132651]/10" />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-[12px] font-bold text-[#132651]">Phone Number</label>
                <input type="tel" placeholder="07700 900000" className="bg-[#fafbfc] border border-[#d1d8e4] rounded-[14px] px-[16px] py-[10px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#132651]/10" />
              </div>
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] font-bold text-[#132651]">I&apos;m interested in…</label>
              <select className="bg-[#fafbfc] border border-[#d1d8e4] rounded-[14px] px-[16px] py-[10px] text-[14px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#132651]/10">
                <option>Select an option</option>
                <option>Retained H&S Service</option>
                <option>One-off Consultation</option>
                <option>Training Courses</option>
                <option>Other Enquiry</option>
              </select>
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] font-bold text-[#132651]">Message</label>
              <textarea placeholder="Tell us about your business and what you need…" rows={5} className="bg-[#fafbfc] border border-[#d1d8e4] rounded-[14px] px-[16px] py-[10px] text-[14px] resize-none focus:outline-none focus:ring-2 focus:ring-[#132651]/10"></textarea>
            </div>

            <button type="submit" className="w-full h-[56px] bg-[#132651] text-white font-bold rounded-[6px] flex items-center justify-center hover:bg-[#1e3264] transition-colors mt-[12px]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
