"use client";

import { DashboardShell } from "./dashboard-shell";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}
