"use client";

import React from "react";
import { 
  PenTool, 
  CheckCircle, 
  ClipboardEdit, 
  AlertCircle, 
  UserCheck, 
  Folder 
} from "lucide-react";
import { toast } from "sonner";
import { OverviewCard } from "./overview-card";

interface OverviewCardsRowProps {
  stats: {
    draft: string;
    completed: string;
    review: string;
    assigned: string;
    created: string;
    categories: string;
  };
  setActiveTab: (tab: string) => void;
}

export function OverviewCardsRow({ stats, setActiveTab }: OverviewCardsRowProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-[16px] w-full">
      
      {/* Card 1: Draft Forms */}
      <OverviewCard
        onClick={() => setActiveTab("Drafts")}
        icon={<PenTool className="w-[20px] h-[20px] text-[#eab308]" />}
        tagText="Active"
        tagClass="bg-[#00a63e]"
        title="Draft Forms"
        value={stats.draft}
      />

      {/* Card 2: Completed Forms */}
      <OverviewCard
        onClick={() => setActiveTab("Completed")}
        icon={<CheckCircle className="w-[20px] h-[20px] text-[#00a63e]" />}
        tagText="New"
        tagClass="bg-[#132651]"
        title="Completed Forms"
        value={stats.completed}
      />

      {/* Card 3: Requires Review */}
      <OverviewCard
        onClick={() => setActiveTab("Requires Review")}
        icon={<ClipboardEdit className="w-[20px] h-[20px] text-[#f97316]" />}
        tagText="Pending"
        tagClass="bg-[#f97316]"
        title="Requires Review"
        value={stats.review}
      />

      {/* Card 4: Assigned to Me (In Figma it says "Requires Review" with red exclamation mark and "Assigned" badge) */}
      <OverviewCard
        onClick={() => setActiveTab("Assigned to Me")}
        icon={<AlertCircle className="w-[20px] h-[20px] text-[#d92d20]" />}
        tagText="Assigned"
        tagClass="bg-[#155dfc]"
        title="Requires Review"
        value={stats.assigned}
      />

      {/* Card 5: Documents Created */}
      <OverviewCard
        onClick={() => setActiveTab("All Forms")}
        icon={<UserCheck className="w-[20px] h-[20px] text-[#155dfc]" />}
        tagText="Verified"
        tagClass="bg-[#00a63e]"
        title="Documents Created"
        value={stats.created}
      />

      {/* Card 6: Categories */}
      <OverviewCard
        onClick={() => {
          setActiveTab("All Forms");
          toast.info("Filter by selecting a category dropdown in the table section.");
        }}
        icon={<Folder className="w-[20px] h-[20px] text-[#5a6886]" />}
        tagText="Total"
        tagClass="bg-[#5a6886]"
        title="Categories"
        value={stats.categories}
      />

    </div>
  );
}
