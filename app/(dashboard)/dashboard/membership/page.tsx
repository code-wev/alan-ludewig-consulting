import React from "react";
import { MembershipPage } from "@/components/dashboard/membership-page";

export const metadata = {
  title: "My Membership | Dashboard",
  description: "View your current membership details, key benefits, and retained health & safety documents.",
};

export default function Page() {
  return <MembershipPage />;
}
