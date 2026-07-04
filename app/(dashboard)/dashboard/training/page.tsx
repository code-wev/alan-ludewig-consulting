"use client";

import React from "react";
import {
  Tag,
  GraduationCap,
  Users,
  Building2,
  CircleAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TrainingPage() {
  return (
    <div className="flex flex-col gap-8 text-brand-primary pb-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-[30px] font-bold leading-[1.2] text-brand-primary">
            Training
          </h1>
          <p className="text-[16px] leading-normal text-brand-secondary">
            Access accredited training resources and claim your member discount.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <Link href="/dashboard/training/history">
            <Button
              variant="outline"
              className="h-[34px] rounded-[6px] border-brand-primary px-4 text-[12px] font-bold text-brand-primary hover:bg-gray-50"
            >
              Training History & Certificates
            </Button>
          </Link>
          <Button className="h-[34px] rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]">
            Browse Training
          </Button>
        </div>
      </div>

      {/* Banner */}
      <div className="relative flex w-full flex-col items-start justify-center overflow-hidden rounded-[12px] bg-linear-to-r from-[#00bc7d] to-[#009966] p-6 shadow-sm sm:h-[171px]">
        <GraduationCap className="absolute -right-4 top-1/2 size-40 -translate-y-1/2 text-white opacity-20 sm:right-10 sm:size-48" />
        
        <div className="relative z-10 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Tag className="size-6 text-white" />
            <h2 className="text-[24px] font-bold text-white">
              Exclusive Member Discount
            </h2>
          </div>
          <p className="mt-1 text-[16px] text-[#ecfdf5]">
            As a Comply Pro member, you receive an exclusive 40% discount on eligible training.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-[14px] text-[#ecfdf5]">Discount Code:</span>
            <div className="flex items-center justify-center rounded-[6px] border-[1.5px] border-white/30 bg-white/20 px-3 py-1.5">
              <span className="text-[12px] font-bold tracking-wide text-white">
                DISCOUNT40
              </span>
            </div>
            <button
              type="button"
              className="rounded-[6px] bg-white px-3 py-1.5 text-[14px] font-medium text-[#009966] transition-colors hover:bg-gray-100"
            >
              Copy Code
            </button>
          </div>
        </div>
      </div>

      {/* Account Types */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Personal Account Training */}
        <div className="flex flex-col rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-sm">
          <div className="flex size-16 items-center justify-center rounded-[10px] bg-[#eff6ff]">
            <Users className="size-8 text-[#155dfc]" />
          </div>
          <h2 className="mt-5 text-[20px] font-bold text-brand-primary">
            Personal Account Training
          </h2>
          <p className="mt-2 text-[16px] text-brand-secondary">
            Individual training courses for one-off bookings and personal development.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {[
              "Self-paced online courses",
              "Certificate on completion",
              "Instant access to materials",
              "Member discount applied at checkout",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-[#155dfc]" />
                <span className="text-[14px] text-brand-secondary">{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/dashboard/training/details" className="mt-8">
            <Button className="h-12.75 w-full rounded-[6px] bg-brand-primary text-[14px] font-bold text-white hover:bg-[#0d1b3a]">
              Access Courses
            </Button>
          </Link>
        </div>

        {/* Business Account Training */}
        <div className="flex flex-col rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-sm">
          <div className="flex size-16 items-center justify-center rounded-[10px] bg-[#faf5ff]">
            <Building2 className="size-8 text-[#9810fa]" />
          </div>
          <h2 className="mt-5 text-[20px] font-bold text-brand-primary">
            Business Account Training
          </h2>
          <p className="mt-2 text-[16px] text-brand-secondary">
            Manage team training, track compliance, and access bulk booking discounts.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {[
              "Multiple user management",
              "Centralized training records",
              "Compliance tracking dashboard",
              "Volume discounts available",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-[#9810fa]" />
                <span className="text-[14px] text-brand-secondary">{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/dashboard/training/details" className="mt-8">
            <Button className="h-12.75 w-full rounded-[6px] bg-brand-primary text-[14px] font-bold text-white hover:bg-[#0d1b3a]">
              Access Courses
            </Button>
          </Link>
        </div>
      </div>

      {/* How to Use Your Training Discount */}
      <div className="flex flex-col rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-sm">
        <h2 className="text-[20px] font-bold text-brand-primary">
          How to Use Your Training Discount
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-[#eff6ff] text-[16px] font-bold text-[#155dfc]">
              1
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-bold text-brand-primary">
                Choose Your Account Type
              </h3>
              <p className="text-[14px] leading-[1.6] text-brand-secondary">
                Select Personal Account for individual courses or Business
                Account for team training.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-[#eff6ff] text-[16px] font-bold text-[#155dfc]">
              2
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-bold text-brand-primary">
                Browse & Select Courses
              </h3>
              <p className="text-[14px] leading-[1.6] text-brand-secondary">
                You&apos;ll be redirected to our training partner&apos;s platform to browse
                available courses.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-[#eff6ff] text-[16px] font-bold text-[#155dfc]">
              3
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-bold text-brand-primary">
                Apply Discount Code
              </h3>
              <p className="text-[14px] leading-[1.6] text-brand-secondary">
                Enter code DISCOUNT40 checkout to receive your 40%
                discount.
              </p>
            </div>
          </div>
        </div>

        {/* Alert Box */}
        <div className="mt-12 flex items-start gap-3 rounded-[8px] border-[1.5px] border-[#bfdbfe] bg-[#eff6ff] p-4">
          <CircleAlert className="mt-0.5 size-5 shrink-0 text-[#155dfc]" />
          <div className="flex flex-col gap-1">
            <span className="text-[14px] font-bold text-brand-primary">
              External Training Provider
            </span>
            <span className="text-[14px] text-[#155dfc]">
              Training is delivered through our accredited partner. You will need to create a separate account on their platform using the links above.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
