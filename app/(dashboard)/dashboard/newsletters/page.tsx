import { NewsletterGrid } from "@/components/newsletter/newsletter-grid";
import { ChevronRight } from "lucide-react";

export default function NewslettersPage() {
  return (
    <div className="flex flex-col w-full gap-8 font-sans">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
        <span
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
          style={{
            fontFamily: "Sansation, sans-serif",
            fontSize: "12px",
            lineHeight: "160%",
            color: "#132651",
          }}
        >
          Newsletters
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
          Newsletters &amp; Updates
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#5A6886",
          }}
        >
          Stay informed with the latest industry guidance, regulatory updates, and health &amp; safety news.
        </p>
      </div>

      {/* Newsletter grid (tabs + filters + cards) */}
      <NewsletterGrid />
    </div>
  );
}
