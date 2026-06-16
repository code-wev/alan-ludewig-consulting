import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Retained Services", href: "/retained-services" },
  { label: "News & Updates", href: "/news" },
  { label: "Free Resources", href: "/resources" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
];

const memberLinks = [
  { label: "Member Login", href: "/login" },
  { label: "View Plans", href: "/plans" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#132651] relative flex flex-col items-center">
      {/* SUBSCRIBE SECTION */}
      <div className="w-full h-[129px] relative">
        <div className="absolute bg-[#e8eaee] h-[77px] left-0 top-0 w-full" />
        <div className="absolute left-1/2 -translate-x-1/2 top-[21px] w-full max-w-[1458px] px-4 md:px-0">
          <div className="bg-[#5a6886] flex flex-col md:flex-row items-center justify-between p-[30px] rounded-[12px] w-full min-h-[108px] gap-6">
            <div className="text-white">
              <h3 className="font-bold text-[24px] leading-[1.6]">Subscribe To get updated</h3>
              <p className="font-normal text-[16px] leading-[1.6] text-[#d0d4dc]">
                Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 items-center w-full md:w-auto">
              <div className="border border-[#d0d4dc] flex items-center px-4 py-4 rounded-[6px] w-full sm:w-[300px]">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent text-[#d0d4dc] text-[14px] outline-none w-full placeholder:text-[#d0d4dc]"
                />
              </div>
              <button className="bg-white text-[#132651] font-bold text-[14px] px-6 py-4 rounded-[6px] transition-colors hover:bg-gray-100 whitespace-nowrap w-full sm:w-auto h-[54px]">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT SECTION */}
      <div className="w-full max-w-[1760px] px-4 md:px-20 mt-[80px] mb-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* BRAND INFO */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="h-[50px] relative w-[258px]">
              <Image 
                src="/images/logo.png" 
                alt="ALC Logo" 
                width={258} 
                height={50} 
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-[18px] leading-[1.6] text-[#5a6886] max-w-[488px]">
              Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis enim cursus vulputate amet. Lobortis mi platea aliquam senectus tempus mauris neque.
            </p>
            <div className="flex gap-4 items-center">
              <Link href="https://facebook.com" className="hover:opacity-80 transition-opacity">
                <Image src="/images/facebook.png" alt="Facebook" width={32} height={32} />
              </Link>
              <Link href="https://instagram.com" className="hover:opacity-80 transition-opacity">
                <Image src="/images/instagram.png" alt="Instagram" width={32} height={32} />
              </Link>
              <Link href="https://linkedin.com" className="hover:opacity-80 transition-opacity">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={32} height={32} />
              </Link>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-bold text-[20px] leading-[1.6] text-[#f7f8fa]">Quick Links</h4>
            <ul className="flex flex-col gap-1.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[14px] leading-[1.6] text-[#5a6886] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MEMBER LINKS */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="font-bold text-[20px] leading-[1.6] text-[#f7f8fa]">Member Links</h4>
            <ul className="flex flex-col gap-1.5">
              {memberLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[14px] leading-[1.6] text-[#5a6886] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-bold text-[20px] leading-[1.6] text-[#f7f8fa]">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-white/5 p-2 rounded-[10px] shrink-0">
                  <Image src="/images/email-icon.png" alt="Email" width={14} height={14} className="opacity-80" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] leading-[1.6] text-[#5a6886]">Email</span>
                  <Link href="mailto:hello@alanludewigconsulting.com" className="text-[12px] leading-[1.6] text-[#5a6886] hover:text-white">
                    hello@alanludewigconsulting.com
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/5 p-2 rounded-[10px] shrink-0">
                  <Image src="/images/phone-icon.png" alt="Phone" width={14} height={14} className="opacity-80" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] leading-[1.6] text-[#5a6886]">Phone</span>
                  <Link href="tel:03301334304" className="text-[12px] leading-[1.6] text-[#5a6886] hover:text-white">
                    0330 133 4304
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM DIVIDER AND COPYRIGHT */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col items-center gap-4">
          <p className="text-[12px] leading-[1.6] text-[#5a6886] text-center">
            Non Copyrighted © 2022 Design and upload by rich technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
