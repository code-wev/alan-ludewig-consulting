import Image from "next/image";

const trustItems = [
  { icon: "/images/trust-icon-0.png", text: "Nearly 20 years construction industry experience" },
  { icon: "/images/trust-icon-1.png", text: "Competent health and safety support" },
  { icon: "/images/trust-icon-2.png", text: "Practical site-based approach" },
  { icon: "/images/trust-icon-3.png", text: "Training and document resources" },
];

export default function TrustStrip() {
  return (
    <div className="w-full bg-white border-y border-[#e3e6ec] py-[30px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-center">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-[11px]">
              <div className="bg-[#e8eaee] w-[60px] h-[60px] rounded-[10px] flex items-center justify-center shrink-0">
                <div className="relative w-10 h-10">
                  <Image src={item.icon} alt="" fill className="object-contain" />
                </div>
              </div>
              <p className="text-[18px] text-[#132651] leading-[1.6] max-w-[253px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
