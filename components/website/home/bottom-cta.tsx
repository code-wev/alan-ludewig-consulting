
import LinkNext from "next/link";

export default function BottomCTA() {
  return (
    <section className="bg-[#132651] w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-center gap-[60px]">
        {/* HEADER */}
        <div className="flex flex-col gap-6 items-center text-center">
          <h2 className="text-[40px] font-bold text-[#f7f8fa] leading-[1.2] max-w-[586px]">
            Need health and safety support for your business?
          </h2>
          <p className="text-[16px] text-[#f3f5f8] leading-[1.6] max-w-[800px]">
            Whether you need short-term project support, retained services, documentation, training, RAMS or site inspections, Alan Ludewig Consulting can help you find the right level of support.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col gap-[34px] items-center">
          <div className="flex flex-col sm:flex-row gap-[25px] items-center">
            <LinkNext
              href="/contact"
              className="w-full sm:w-[276px] h-[60px] bg-white text-[#132651] font-bold rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              Send Enquiry
            </LinkNext>
            <LinkNext
              href="/retained-services"
              className="w-full sm:w-[276px] h-[60px] border border-[#f7f8fa] text-[#f7f8fa] font-bold rounded-[6px] flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              View Retained Services
            </LinkNext>
          </div>
          
          <p className="text-[13px] text-[#8ca0c8]">
            Already a member?{" "}
            <LinkNext href="/login" className="text-white font-semibold underline underline-offset-4">
              Login to your portal.
            </LinkNext>
          </p>
        </div>
      </div>
    </section>
  );
}
