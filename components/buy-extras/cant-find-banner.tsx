"use client";

import React from "react";
import { CustomRequestForm } from "./custom-request-form";

export function CantFindBanner() {
  return (
    <div
      className="flex flex-col w-full gap-6 p-8 rounded-[10px]"
      style={{
        background:
          "linear-gradient(135deg, rgba(239,246,255,1) 0%, rgba(238,242,255,1) 100%)",
        border: "1.5px solid #BEDBFF",
      }}
    >
      {/* Heading + paragraph */}
      <div className="flex flex-col gap-2">
        <h2
          className="font-bold"
          style={{
            fontFamily: "Sansation, sans-serif",
            fontSize: "20px",
            lineHeight: "160%",
            color: "#132651",
          }}
        >
          Can&apos;t Find What You Need?
        </h2>
        <p
          style={{
            fontFamily: "Sansation, sans-serif",
            fontSize: "16px",
            lineHeight: "160%",
            color: "#5A6886",
          }}
        >
          Submit a custom request and we&apos;ll provide a tailored quote for
          your specific requirements.
        </p>
      </div>

      {/* Custom Request Form */}
      <CustomRequestForm />
    </div>
  );
}
