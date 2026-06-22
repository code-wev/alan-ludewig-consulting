import { ExtrasGrid } from "@/components/buy-extras/extras-grid";
import { CantFindBanner } from "@/components/buy-extras/cant-find-banner";
import { ChevronRight } from "lucide-react";

export default function BuyExtrasPage() {
  return (
    <div className="flex flex-col w-full gap-8 font-sans">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
        <span
          className="text-xs"
          style={{
            fontFamily: "Sansation, sans-serif",
            fontSize: "12px",
            lineHeight: "160%",
            color: "#5A6886",
          }}
        >
          Dashboard
        </span>
        <ChevronRight className="w-3.5 h-3.5 text-[#5A6886]" />
        <span
          className="text-xs"
          style={{
            fontFamily: "Sansation, sans-serif",
            fontSize: "12px",
            lineHeight: "160%",
            color: "#132651",
          }}
        >
          Buy Extras
        </span>
      </nav>

      {/* Page heading */}
      <div className="flex flex-col gap-2">
        <h1
          className="font-bold"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "30px",
            lineHeight: "36px",
            color: "#132651",
          }}
        >
          Buy Extras
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#5A6886",
          }}
        >
          Purchase one-off extras to extend your support, access, or usage.
        </p>
      </div>

      {/* Cards grid */}
      <div className="flex flex-col gap-6">
        <ExtrasGrid />
      </div>

      {/* Can't Find What You Need? section */}
      <CantFindBanner />
    </div>
  );
}
