"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Clock, MapPin, Calendar, Menu, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STEPPER_STEPS = [
  "Project Details",
  "Scope of Works",
  "Arrangements",
  "PPE",
  "Methodology",
  "Env / Emergency",
  "Risk Assessment",
  "Review & Generate"
];

export function CreateRamsPage() {
  return (
    <div className="flex flex-col gap-8 pb-12 w-full text-brand-primary">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary">
        <Link href="/dashboard" className="hover:text-brand-primary transition-colors">
          Dashboard
        </Link>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <Link href="/dashboard/rams-builder" className="hover:text-brand-primary transition-colors">
          RAMS Builder
        </Link>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span className="text-brand-primary">Create New RAMS</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-[30px] font-bold leading-[1.2] text-brand-primary">
            Create New RAMS
          </h1>
          <p className="max-w-[800px] text-[16px] leading-normal text-brand-secondary">
            Complete each step to generate a professional RAMS document.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Clock className="size-5 text-brand-secondary" />
          <span className="text-[16px] text-brand-primary">Autosave: Just now</span>
        </div>
      </div>

      {/* Stepper Navigation */}
      <div className="w-full">
        <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar pb-2">
          {STEPPER_STEPS.map((step, index) => {
            const isActive = index === 0;
            return (
              <div key={step} className="flex flex-col gap-2 min-w-[150px] flex-1">
                <div 
                  className={cn(
                    "h-2 w-full rounded-full",
                    isActive ? "bg-brand-primary" : "bg-[#f3f5f8]"
                  )} 
                />
                <span 
                  className={cn(
                    "text-[16px] whitespace-nowrap",
                    isActive ? "font-bold text-brand-primary" : "text-brand-secondary"
                  )}
                >
                  {index + 1}. {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Header - Section Intro */}
      <div className="flex flex-col gap-1 border-b border-[#e3e6ec] pb-6">
        <h2 className="text-[28px] font-bold text-brand-primary">
          Step 1 — Project Details
        </h2>
        <p className="text-[18px] text-brand-secondary">
          Initialize your Risk Assessment and Method Statement.
        </p>
      </div>

      {/* Main Content Split Layout */}
      <div className="flex flex-col xl:flex-row gap-8 items-start">
        
        {/* Left: Form Section */}
        <div className="flex flex-col gap-6 w-full xl:w-[70%]">
          
          {/* Project Identification */}
          <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8">
            <div className="flex items-center gap-3 border-b border-[#e3e6ec] pb-4">
              <ClipboardList className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary">Project Identification</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Project Name</label>
                <input 
                  type="text" 
                  placeholder="enter your project name"
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">RAMS Reference Number</label>
                <input 
                  type="text" 
                  defaultValue="RAMS-2023-0042"
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary bg-[#f3f5f8] opacity-70"
                />
                <span className="text-[12px] text-brand-secondary mt-1">
                  Auto-generated reference number. You may edit this to use your own internal client / project reference.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Client / Company Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Horizon Developers"
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Principal Contractor</label>
                <input 
                  type="text" 
                  placeholder="Primary contractor name"
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
            </div>
          </div>

          {/* Site Information */}
          <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8">
            <div className="flex items-center gap-3 border-b border-[#e3e6ec] pb-4">
              <MapPin className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary">Site Information</h3>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Site Name</label>
                <input 
                  type="text" 
                  placeholder="Specific site or building name"
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Full Site Address</label>
                <textarea 
                  placeholder="Street, City, Postal Code"
                  rows={3}
                  className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">Site Contact Name</label>
                  <input 
                    type="text" 
                    placeholder="Primary contact person"
                    className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-brand-primary">Site Contact Number</label>
                  <input 
                    type="text" 
                    placeholder="+44 0000 000000"
                    className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Timing & Accountability */}
          <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8">
            <div className="flex items-center gap-3 border-b border-[#e3e6ec] pb-4">
              <Calendar className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary">Timing & Accountability</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Responsible Person</label>
                <input 
                  type="text" 
                  placeholder="Safety officer or lead"
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">RAMS Author</label>
                <input 
                  type="text" 
                  defaultValue="Alan Ludewig"
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] text-brand-primary outline-none focus:border-brand-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Project Start Date</label>
                <input 
                  type="text" 
                  placeholder="mm/dd/yyyy"
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Estimated Duration</label>
                <input 
                  type="text" 
                  placeholder="e.g. 3 Months"
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-brand-primary">Review Date</label>
                <input 
                  type="text" 
                  placeholder="mm/dd/yyyy"
                  className="h-[51px] w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] px-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                />
              </div>
            </div>
          </div>

          {/* Project Notes */}
          <div className="flex flex-col gap-6 rounded-[12px] border border-[#e3e6ec] bg-white p-8">
            <div className="flex items-center gap-3 border-b border-[#e3e6ec] pb-4">
              <Menu className="size-5 text-brand-primary" />
              <h3 className="text-[16px] font-bold text-brand-primary">Project Notes</h3>
            </div>
            
            <div className="flex flex-col gap-2">
              <textarea 
                placeholder="Add any specific considerations or high-level project objectives here..."
                rows={4}
                className="w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] p-4 text-[14px] outline-none placeholder:text-[#a3acba] focus:border-brand-primary resize-none"
              />
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center gap-4 mt-2">
            <Button variant="outline" className="h-[42px] px-6 rounded-[6px] border-[#e3e6ec] bg-white text-[14px] font-bold text-brand-primary hover:bg-gray-50">
              Save Draft
            </Button>
            <Button className="h-[42px] px-6 rounded-[6px] bg-brand-primary text-[14px] font-bold text-white hover:bg-[#0d1b3a]">
              Next: Scope of Works
            </Button>
          </div>

        </div>

        {/* Right: RAMS Summary Sidebar */}
        <div className="flex flex-col w-full xl:w-[30%] rounded-[12px] bg-brand-primary p-6 text-white sticky top-6">
          <h3 className="text-[16px] font-bold mb-6">RAMS Summary</h3>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 border-b border-white/20 pb-4">
              <span className="text-[10px] text-white/70">Project Name</span>
              <span className="text-[14px] font-bold">Unnamed Project</span>
            </div>
            
            <div className="flex flex-col gap-1 border-b border-white/20 pb-4">
              <span className="text-[10px] text-white/70">Reference</span>
              <span className="text-[14px] font-bold">RAMS-2023-0042</span>
            </div>

            <div className="flex flex-col gap-2 border-b border-white/20 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold">Completion</span>
                <span className="text-[12px] font-bold">12.5%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/20 overflow-hidden">
                <div className="h-full bg-white" style={{ width: "12.5%" }} />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-white/70">Current Step</span>
                <span className="text-[14px] font-bold">01 / 08</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-white/70">Draft Status</span>
                <div className="flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-[#10b981]" />
                  <span className="text-[14px] font-bold">Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 relative overflow-hidden rounded-[8px] bg-white/10 aspect-video flex flex-col justify-end p-4">
            {/* Visual site planner placeholder image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888086925-0c1332dd0946?q=80&w=2940&auto=format&fit=crop')" }}>
               <div className="absolute inset-0 bg-linear-to-t from-brand-primary/90 to-transparent" />
            </div>
            <span className="relative z-10 text-[12px] font-bold">Visual Site Planner Placeholder</span>
          </div>

        </div>

      </div>
    </div>
  );
}
