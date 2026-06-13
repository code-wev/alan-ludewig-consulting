import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const NAV_LINKS = [
  { label: "Services", href: "#" },
  { label: "Retained Services", href: "#" },
  { label: "News & Updates", href: "#" },
  { label: "Free Resources", href: "#" },
  { label: "Training", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const Navbar = () => {
  return (
    <nav className="bg-primary h-[100px] flex items-center sticky top-0 z-50">
      <Container className="flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <img
            src="https://www.figma.com/api/mcp/asset/4d53da53-fc8d-4d83-98e0-124c71b06493"
            alt="Alan Ludewig Consulting"
            className="h-[50px] w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-bg-main text-sm font-normal hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="outline" size="sm" className="bg-white border-primary text-primary hover:bg-white/90">
            Member Login
          </Button>
        </div>

        {/* Mobile menu button could go here */}
      </Container>
    </nav>
  );
};
