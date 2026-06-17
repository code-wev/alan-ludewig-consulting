import { ROLES, type Role } from "../constants/roles";
import { LayoutDashboard, Users, Settings, Briefcase, FileText, type LucideIcon } from "lucide-react";

export const DASHBOARD_NAVIGATION: Record<Role, { label: string; href: string; icon: LucideIcon }[]> = {
  [ROLES.USER]: [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "My Profile", href: "/dashboard/profile", icon: Users },
  ],
  [ROLES.MANAGER]: [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Team", href: "/dashboard/team", icon: Users },
    { label: "Projects", href: "/dashboard/projects", icon: Briefcase },
  ],
  [ROLES.ADMIN]: [
    { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { label: "User Management", href: "/dashboard/users", icon: Users },
    { label: "System Logs", href: "/dashboard/logs", icon: FileText },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
  ],
};
