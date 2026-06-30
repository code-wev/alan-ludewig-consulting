import React from "react";
import { SubscriptionPage } from "@/components/dashboard/subscription-page";

export const metadata = {
  title: "Manage Subscription | Dashboard",
  description: "View and manage your client portal subscription plans and billing details.",
};

export default function Page() {
  return <SubscriptionPage />;
}
