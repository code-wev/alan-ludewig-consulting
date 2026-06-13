import { Container } from "../ui/Container";

const TRUST_ITEMS = [
  { icon: "f6f2331a-65bc-4ec0-919a-49e0a92863b2", text: "Nearly 20 years construction industry experience" },
  { icon: "e891a0ea-1aec-43cd-972e-0be4c37f6c5b", text: "Competent health and safety support" },
  { icon: "cecfdd79-598a-49c5-8607-907918e1feed", text: "Practical site-based approach" },
  { icon: "41056da3-5b2b-4a00-a767-fe86bd5eb626", text: "Training and document resources" },
];

export const TrustStrip = () => {
  return (
    <div className="bg-white border-y border-[#e3e6ec] py-8">
      <Container className="flex flex-wrap justify-between gap-8">
        {TRUST_ITEMS.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 max-w-[347px]">
            <div className="bg-soft-grey w-[60px] h-[60px] rounded-[10px] flex items-center justify-center shrink-0">
              <img
                src={`https://www.figma.com/api/mcp/asset/${item.icon}`}
                alt="Icon"
                className="w-10 h-10"
              />
            </div>
            <p className="text-primary text-lg leading-relaxed font-sansation">
              {item.text}
            </p>
          </div>
        ))}
      </Container>
    </div>
  );
};
