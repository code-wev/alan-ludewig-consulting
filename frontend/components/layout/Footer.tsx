import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 text-secondary">
      {/* Newsletter Section */}
      <div className="relative mb-20">
        <div className="absolute top-0 left-0 w-full h-[77px] bg-soft-grey opacity-10" />
        <Container className="relative pt-5">
          <div className="bg-secondary p-8 rounded-[12px] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-light-grey text-2xl font-bold mb-2">Subscribe To get updated</h3>
              <p className="text-light-grey text-base">Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-light-grey rounded-[6px] px-4 py-3 text-light-grey placeholder:text-light-grey/60 min-w-[280px] focus:outline-none focus:ring-1 focus:ring-light-grey"
              />
              <Button variant="outline" className="bg-white border-primary text-primary hover:bg-white/90 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="https://www.figma.com/api/mcp/asset/87d0151d-181a-495d-9199-83fb21410229"
                alt="ALC Logo"
                className="h-[50px] w-auto"
              />
            </Link>
            <p className="text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis enim cursus vulputate amet. Lobortis mi platea aliquam senectus tempus mauris neque.
            </p>
            <div className="flex gap-4">
              <img src="https://www.figma.com/api/mcp/asset/69f5b3dc-382e-49f5-aafd-a533496e47af" alt="Facebook" className="w-8 h-8" />
              <img src="https://www.figma.com/api/mcp/asset/655b6dee-29d4-4a88-bc71-bf2d866c750c" alt="Instagram" className="w-8 h-8" />
              <img src="https://www.figma.com/api/mcp/asset/c1e09b31-75f6-4d7a-8c81-7983e5f674a1" alt="LinkedIn" className="w-8 h-8" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-bg-main text-xl font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {["Home", "Services", "Retained Services", "News & Updates", "Free Resources", "Training", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-bg-main transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Member Links */}
          <div>
            <h4 className="text-bg-main text-xl font-bold mb-6">Member Links</h4>
            <ul className="flex flex-col gap-3">
              {["Member Login", "View Plans", "Terms & Conditions", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-bg-main transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-bg-main text-xl font-bold mb-6">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <div className="bg-white/10 p-2 rounded-[10px] shrink-0">
                  <img src="https://www.figma.com/api/mcp/asset/197b6190-811f-4512-b2f1-a79a021beb69" alt="Email" className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm">Email</span>
                  <Link href="mailto:hello@alanludewigconsulting.com" className="text-xs hover:text-bg-main transition-colors">hello@alanludewigconsulting.com</Link>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-white/10 p-2 rounded-[10px] shrink-0">
                  <img src="https://www.figma.com/api/mcp/asset/cb98fcf2-9afb-4bb2-bc3c-1648d6be87eb" alt="Phone" className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm">Phone</span>
                  <Link href="tel:03301334304" className="text-xs hover:text-bg-main transition-colors">0330 133 4304</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs">Non Copyrighted © 2022 Design and upload by rich technologies</p>
        </div>
      </Container>
    </footer>
  );
};
