import React from "react";
import { FormsPage } from "@/components/dashboard/forms-page";

export const metadata = {
  title: "My Forms & Checklist | Dashboard",
  description: "View and manage your compliance checklists, risk assessments, inspections, and permits.",
};

export default function Page() {
  return <FormsPage />;
}
