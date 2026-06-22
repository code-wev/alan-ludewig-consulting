"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";

export interface ExtraCardProps {
  /** Icon component to render (48x48 area) */
  icon: React.ReactNode;
  /** Background color for the card header section */
  headerBg: string;
  /** Price label e.g. "£195" or "£25/mo" */
  price: string;
  /** Color used for the price text */
  accentColor: string;
  /** Card title */
  title: string;
  /** Short description under the title */
  description: string;
  /** Feature list items (shown with ✓ checkmark) */
  features: string[];
  /** Called when Buy Now is clicked */
  onBuyNow?: () => void;
}

export function ExtraCard({
  icon,
  headerBg,
  price,
  accentColor,
  title,
  description,
  features,
  onBuyNow,
}: ExtraCardProps) {
  return (
    <div className='flex flex-col bg-white border border-[#D0D4DC] rounded-xl overflow-hidden'>
      {/* Header: icon + price */}
      <div
        className='flex flex-row items-center justify-between px-6 py-6'
        style={{ backgroundColor: headerBg, minHeight: "104px" }}>
        {/* Icon */}
        <div className='w-12 h-12 flex items-center justify-center shrink-0'>
          {icon}
        </div>

        {/* Price */}
        <div className='flex flex-col items-end'>
          <span
            className='text-xs font-normal opacity-80'
            style={{
              fontFamily: "Sansation, sans-serif",
              color: accentColor,
              lineHeight: "160%",
            }}>
            From
          </span>
          <span
            className='font-bold text-right'
            style={{
              fontFamily: "Sansation, sans-serif",
              fontSize: "28px",
              lineHeight: "160%",
              color: accentColor,
            }}>
            {price}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className='flex flex-col gap-4 px-6 py-6'>
        {/* Title */}
        <h3
          className='font-bold w-full'
          style={{
            fontFamily: "Sansation, sans-serif",
            fontSize: "20px",
            lineHeight: "160%",
            color: "#132651",
          }}>
          {title}
        </h3>

        {/* Description */}
        <p
          className='text-sm w-full'
          style={{
            fontFamily: "Sansation, sans-serif",
            fontSize: "14px",
            lineHeight: "160%",
            color: "#5A6886",
            minHeight: "44px",
            display: "flex",
            alignItems: "center",
          }}>
          {description}
        </p>

        {/* What's included */}
        <div
          className='flex flex-col gap-2 w-full'
          style={{ minHeight: "128px" }}>
          <p
            className='font-bold'
            style={{
              fontFamily: "Sansation, sans-serif",
              fontSize: "14px",
              lineHeight: "160%",
              color: "#132651",
            }}>
            What&apos;s included:
          </p>
          <ul className='flex flex-col gap-1'>
            {features.map((feature, i) => (
              <li key={i} className='flex items-start gap-3'>
                <span
                  className='shrink-0 font-normal'
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#009966",
                    marginTop: "1px",
                  }}>
                  ✓
                </span>
                <span
                  style={{
                    fontFamily: "Sansation, sans-serif",
                    fontSize: "14px",
                    lineHeight: "160%",
                    color: "#5A6886",
                  }}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buy Now button */}
        <button
          onClick={onBuyNow}
          className='flex items-center justify-center gap-2.5 w-full py-4 rounded-md transition-opacity hover:opacity-90 active:opacity-80 cursor-pointer'
          style={{
            backgroundColor: "#132651",
            minHeight: "54px",
          }}>
          <ShoppingCart className='w-4.5 h-4.5 text-white shrink-0' />
          <span
            className='font-bold'
            style={{
              fontFamily: "Sansation, sans-serif",
              fontSize: "12px",
              lineHeight: "160%",
              color: "#FFFFFF",
            }}>
            Buy Now
          </span>
        </button>
      </div>
    </div>
  );
}
