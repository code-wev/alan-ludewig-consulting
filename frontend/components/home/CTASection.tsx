import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="bg-primary py-[100px]">
      <Container className="flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col gap-6 max-w-[800px]">
          <h2 className="text-bg-main text-[40px] font-bold leading-[1.2]">
            Need health and safety support for your business?
          </h2>
          <p className="text-[#f3f5f8] text-lg leading-relaxed">
            Whether you need short-term project support, retained services, documentation, training, RAMS or site inspections, Alan Ludewig Consulting can help you find the right level of support.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 w-full max-w-[768px]">
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="w-[276px] bg-white text-primary border-primary hover:bg-white/90">
              Send Enquiry
            </Button>
            <Button variant="outline" size="lg" className="w-[276px] border-bg-main text-bg-main hover:bg-white/5">
              View Retained Services
            </Button>
          </div>
          <p className="text-[#8ca0c8] text-sm">
            Already a member?{" "}
            <Link href="#" className="text-white font-semibold underline decoration-solid underline-offset-4">
              Login to your portal.
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};
