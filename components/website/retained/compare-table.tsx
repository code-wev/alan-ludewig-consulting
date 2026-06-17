import { Check as CheckIcon, Minus as MinusIcon } from "lucide-react";

const features = [
  { name: "Member portal access", comply: true, complyPlus: true, complyPro: true },
  { name: "Core document library", comply: true, complyPlus: true, complyPro: true },
  { name: "Expanded document library", comply: false, complyPlus: true, complyPro: true },
  { name: "My Saved Files", comply: false, complyPlus: true, complyPro: true },
  { name: "RAMS Builder access", comply: false, complyPlus: "Limited", complyPro: true },
  { name: "Fire Risk Assessment tool", comply: false, complyPlus: "Limited", complyPro: true },
  { name: "COSHH Risk Assessment tool", comply: false, complyPlus: "Limited", complyPro: true },
  { name: "Forms and Checklists", comply: "Limited", complyPlus: true, complyPro: true },
  { name: "Newsletters and updates", comply: true, complyPlus: true, complyPro: true },
  { name: "Training discount", comply: false, complyPlus: false, complyPro: true },
  { name: "Site visit credits", comply: false, complyPlus: false, complyPro: true },
  { name: "Buy Extras access", comply: true, complyPlus: true, complyPro: true },
  { name: "Support access", comply: true, complyPlus: true, complyPro: true },
  { name: "Manage subscription", comply: true, complyPlus: true, complyPro: true }
];

export default function CompareTable() {
  return (
    <section className="bg-[#f3f5f8] w-full py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-center gap-[60px]">
        {/* HEADER */}
        <div className="flex flex-col gap-[24px] items-center text-center">
          <h2 className="text-[36px] font-bold text-[#132651]">Compare What&apos;s Included</h2>
          <p className="text-[16px] text-[#5a6886] max-w-[750px]">
            See how the membership levels differ across document access, RAMS tools, saved files, site visits and support options.
          </p>
        </div>

        {/* TABLE CONTAINER */}
        <div className="w-full max-w-[896px] bg-white rounded-[16px] border border-[#e3e6ec] overflow-hidden shadow-[0px_4px_24px_rgba(19,38,81,0.06)]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[#e3e6ec] h-[53.5px]">
                <th className="text-left px-6 text-[16px] font-bold text-[#7b8496]">Feature</th>
                <th className="text-center px-4 text-[16px] font-bold text-[#132651] w-[120px]">Comply</th>
                <th className="text-center px-4 text-[16px] font-bold text-[#132651] w-[120px]">Comply+</th>
                <th className="text-center px-4 text-[16px] font-bold text-[#132651] w-[140px] bg-[#f5f3ff]">Comply Pro</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className={`border-b border-[#e3e6ec] h-[48px] ${i % 2 === 1 ? 'bg-[#fafbfc]' : 'bg-white'}`}>
                  <td className="px-6 text-[14px] text-[#132651]">{feature.name}</td>
                  <td className="text-center px-4">{ValueCell(feature.comply)}</td>
                  <td className="text-center px-4">{ValueCell(feature.complyPlus)}</td>
                  <td className="text-center px-4 bg-[oklch(0.97_0.014_285.66_/_0.3)]">{ValueCell(feature.complyPro, true)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ValueCell(value: boolean | string, isPro = false) {
  if (value === true) {
    return <CheckIcon className={`m-auto w-4 h-4 ${isPro ? 'text-[#7c3aed]' : 'text-[#059669]'}`} />;
  }
  if (value === false) {
    return <MinusIcon className="m-auto w-4 h-4 text-[#d0d4dc]" />;
  }
  if (value === "Limited") {
    return (
      <div className="m-auto bg-[#fff7ed] border border-[#fedf89] rounded-full px-2 py-0.5 w-fit">
        <span className="text-[9.5px] font-bold text-[#f97316]">Limited</span>
      </div>
    );
  }
  return null;
}
