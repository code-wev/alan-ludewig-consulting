"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  ShieldCheck, 
  Users, 
  Plus, 
  FileText, 
  Briefcase, 
  Mail, 
  GraduationCap, 
  Calendar, 
  Headphones, 
  Award, 
  FolderArchive, 
  UserCheck, 
  Eye, 
  Download, 
  TrendingUp, 
  CreditCard,
  Search
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AddUserModal } from "@/components/saved-files/modals/add-user-modal";
import { ManageUsersModal } from "@/components/saved-files/modals/manage-users-modal";

// Types
interface UserMember {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Pending";
}

export function MembershipPage() {
  // State for interactive features
  const [users, setUsers] = useState<UserMember[]>([
    { id: "1", name: "Alan Ludewig", email: "alan@company.com", role: "Owner/Admin", status: "Active" },
    { id: "2", name: "Sarah Mitchell", email: "sarah@company.com", role: "Staff", status: "Active" },
    { id: "3", name: "Mark Evans", email: "mark@company.com", role: "Staff", status: "Pending" },
  ]);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  // Dynamic calculations for seats and users
  const totalSeats = 5;
  const usedSeats = users.length;
  const activeStaffCount = users.filter(u => u.role === "Staff" && u.status === "Active").length;
  const owner = users.find(u => u.role === "Owner/Admin") || { name: "Alan Ludewig", email: "alan@company.com" };

  // Filtered users for table
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add User handler
  const handleAddUser = (userData: { name: string; email: string; role: string; status: "Active" | "Pending" }) => {
    if (users.length >= totalSeats) {
      toast.error("Seat limit reached! Upgrade your plan to add more users.");
      return;
    }

    const newUser: UserMember = {
      id: Math.random().toString(36).substr(2, 9),
      name: userData.name,
      email: userData.email,
      role: userData.role,
      status: userData.status,
    };

    setUsers([...users, newUser]);
    
    toast.success(
      userData.status === "Pending"
        ? `Invitation email sent! ${newUser.name} is now pending.`
        : `${newUser.name} has been added successfully!`
    );
  };

  const handleDocumentAction = (action: "View" | "Download", docName: string) => {
    if (action === "View") {
      toast.success(`Opening ${docName} in viewer...`);
    } else {
      toast.success(`Downloading ${docName} PDF...`);
    }
  };

  return (
    <div className="flex flex-col gap-[32px] w-full max-w-[1584px] mx-auto pb-10">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-[6px] text-[12px] font-sans">
        <Link 
          href="/dashboard" 
          className="text-brand-secondary hover:text-brand-primary transition-colors font-medium"
        >
          Dashboard
        </Link>
        <ChevronRight size={14} className="text-brand-secondary/60" />
        <span className="text-brand-primary font-bold">My Membership</span>
      </div>

      {/* Heading Section */}
      <div className="flex flex-col gap-[8px]">
        <h1 className="text-[30px] font-extrabold text-brand-primary leading-tight font-sans">
          My Membership
        </h1>
        <p className="text-[16px] text-brand-secondary font-sans">
          View your current membership details, key benefits, and important retained health & safety documentation.
        </p>
      </div>

      {/* Membership Overview Card */}
      <div className="bg-white border-[1.5px] border-[#d0d4dc] rounded-[12px] p-6 md:p-[33.5px] flex flex-col gap-[24px] shadow-[0px_4px_20px_rgba(19,38,81,0.04)]">
        <div className="flex items-center gap-[12px]">
          <ShieldCheck className="w-[28px] h-[28px] text-brand-primary shrink-0" />
          <h2 className="text-[24px] font-bold text-brand-primary font-sans leading-none">
            Membership Overview
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-12 lg:gap-y-8 mt-2">
          {/* Company Name */}
          <div className="flex flex-col gap-1">
            <span className="text-[14px] text-brand-secondary font-sans">Company Name</span>
            <span className="text-[16px] font-semibold text-brand-primary font-sans">
              Alan Ludewig Consulting
            </span>
          </div>

          {/* Account Owner */}
          <div className="flex flex-col gap-1">
            <span className="text-[14px] text-brand-secondary font-sans">Account Owner</span>
            <span className="text-[16px] font-semibold text-brand-primary font-sans">
              {owner.name}
            </span>
          </div>

          {/* Membership Level */}
          <div className="flex flex-col gap-1">
            <span className="text-[14px] text-brand-secondary font-sans">Membership Level</span>
            <span className="text-[16px] font-semibold text-brand-primary font-sans">
              Comply Pro
            </span>
          </div>

          {/* Membership Expiry */}
          <div className="flex flex-col gap-1">
            <span className="text-[14px] text-brand-secondary font-sans">Membership Expiry</span>
            <span className="text-[16px] font-semibold text-brand-primary font-sans">
              28 June 2026
            </span>
          </div>

          {/* Billing Cycle */}
          <div className="flex flex-col gap-1">
            <span className="text-[14px] text-brand-secondary font-sans">Billing Cycle</span>
            <span className="text-[16px] font-semibold text-brand-primary font-sans">
              Monthly
            </span>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-1">
            <span className="text-[14px] text-brand-secondary font-sans mb-1">Status</span>
            <span className="bg-[#00bc7d] text-white text-[12px] font-semibold px-[9px] py-[2px] rounded-[6px] w-fit shadow-sm font-sans">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Account Users Section */}
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-6 flex flex-col gap-[24px] shadow-[0px_4px_20px_rgba(19,38,81,0.04)]">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-[12px]">
            <Users className="w-[24px] h-[24px] text-brand-primary shrink-0" />
            <h2 className="text-[20px] font-bold text-brand-primary font-sans leading-none">
              Account Users
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-[220px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-secondary" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-8 pl-9 pr-3 text-xs bg-brand-bg-main border border-brand-light-grey rounded-lg text-brand-primary placeholder:text-brand-secondary/60 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
              />
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsManageModalOpen(true)}
              className="h-8 text-xs font-semibold font-sans border-brand-primary text-brand-primary hover:bg-[#eff6ff]"
            >
              Manage Users
            </Button>
            
            <Button 
              size="sm"
              onClick={() => setIsAddModalOpen(true)}
              className="h-8 text-xs font-semibold bg-brand-primary text-white hover:bg-brand-primary/95 font-sans hover:cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 mr-1" />
              Add User
            </Button>
          </div>
        </div>

        {/* Gray Info Overview Panel */}
        <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[8px] p-4.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Account Owner Info */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[12px] text-brand-secondary font-sans">Account Owner</span>
              <span className="text-[14px] font-bold text-brand-primary font-sans leading-snug">
                {owner.name}
              </span>
              <span className="text-[12px] text-brand-secondary font-sans">
                {owner.email}
              </span>
            </div>

            {/* Role Info */}
            <div className="flex flex-col gap-1">
              <span className="text-[12px] text-brand-secondary font-sans">Role</span>
              <span className="text-[14px] font-bold text-brand-primary font-sans mt-0.5">
                Owner/Admin
              </span>
            </div>

            {/* Staff Users Info */}
            <div className="flex flex-col gap-1">
              <span className="text-[12px] text-brand-secondary font-sans">Staff Users</span>
              <span className="text-[14px] font-bold text-brand-primary font-sans mt-0.5">
                {activeStaffCount} Active
              </span>
            </div>

            {/* Available Seats Info & Progress */}
            <div className="flex flex-col gap-1">
              <span className="text-[12px] text-brand-secondary font-sans">Available Seats</span>
              <span className="text-[14px] font-bold text-brand-primary font-sans mt-0.5">
                {usedSeats} of {totalSeats} used
              </span>
              <div className="bg-[#a3acba] h-[6px] rounded-full w-full mt-1.5 overflow-hidden">
                <div 
                  className="bg-brand-primary h-full rounded-full transition-all duration-500"
                  style={{ width: `${(usedSeats / totalSeats) * 100}%` }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Responsive Table Container */}
        <div className="border border-[#e3e6ec] rounded-[12px] overflow-hidden bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#d6e9ff] border-b border-[#e3e6ec]">
                  <th className="px-6 py-3.5 text-[14px] font-bold text-brand-primary font-sans">User</th>
                  <th className="px-6 py-3.5 text-[14px] font-bold text-brand-primary font-sans">Role</th>
                  <th className="px-6 py-3.5 text-[14px] font-bold text-brand-primary font-sans">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f5f8]">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-6 py-8 text-center text-brand-secondary font-sans">
                      No users found.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-[16px] font-normal text-brand-primary font-sans">
                            {user.name}
                          </span>
                          <span className="text-[13px] text-brand-secondary font-sans leading-none mt-0.5">
                            {user.email}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[14px] text-brand-secondary font-sans">
                        {user.role}
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "text-[12px] font-normal px-[9px] py-[2px] rounded-[6px] shadow-sm font-sans w-fit block",
                          user.status === "Active" 
                            ? "bg-[#00bc7d] text-white" 
                            : "bg-[#ff6900] text-white"
                        )}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Membership Benefits Section */}
      <div className="flex flex-col gap-[16px]">
        <h3 className="text-[20px] font-bold text-brand-primary font-sans leading-none">
          Membership Benefits
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Benefit 1 */}
          <div className="bg-white border-[1.5px] border-[#d0d4dc] rounded-[12px] p-[24px] flex flex-col gap-[10px] items-start shadow-[0px_4px_16px_rgba(19,38,81,0.02)]">
            <div className="bg-[#eff6ff] w-[48px] h-[48px] rounded-[10px] flex items-center justify-center shrink-0">
              <FileText className="w-[24px] h-[24px] text-brand-primary" />
            </div>
            <h4 className="text-[18px] font-bold text-brand-primary font-sans leading-tight mt-1">
              Access to document library
            </h4>
            <p className="text-[14px] text-brand-secondary font-sans leading-normal">
              Unlimited downloads
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white border-[1.5px] border-[#d0d4dc] rounded-[12px] p-[24px] flex flex-col gap-[10px] items-start shadow-[0px_4px_16px_rgba(19,38,81,0.02)]">
            <div className="bg-[#eff6ff] w-[48px] h-[48px] rounded-[10px] flex items-center justify-center shrink-0">
              <Briefcase className="w-[24px] h-[24px] text-brand-primary" />
            </div>
            <h4 className="text-[18px] font-bold text-brand-primary font-sans leading-tight mt-1">
              RAMS builder usage
            </h4>
            <p className="text-[14px] text-brand-secondary font-sans leading-normal">
              12 credits per month
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white border-[1.5px] border-[#d0d4dc] rounded-[12px] p-[24px] flex flex-col gap-[10px] items-start shadow-[0px_4px_16px_rgba(19,38,81,0.02)]">
            <div className="bg-[#eff6ff] w-[48px] h-[48px] rounded-[10px] flex items-center justify-center shrink-0">
              <Mail className="w-[24px] h-[24px] text-brand-primary" />
            </div>
            <h4 className="text-[18px] font-bold text-brand-primary font-sans leading-tight mt-1">
              Newsletter access
            </h4>
            <p className="text-[14px] text-brand-secondary font-sans leading-normal">
              Monthly updates
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white border-[1.5px] border-[#d0d4dc] rounded-[12px] p-[24px] flex flex-col gap-[10px] items-start shadow-[0px_4px_16px_rgba(19,38,81,0.02)]">
            <div className="bg-[#eff6ff] w-[48px] h-[48px] rounded-[10px] flex items-center justify-center shrink-0">
              <GraduationCap className="w-[24px] h-[24px] text-brand-primary" />
            </div>
            <h4 className="text-[18px] font-bold text-brand-primary font-sans leading-tight mt-1">
              Discounted training
            </h4>
            <p className="text-[14px] text-brand-secondary font-sans leading-normal">
              40% off courses
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-white border-[1.5px] border-[#d0d4dc] rounded-[12px] p-[24px] flex flex-col gap-[10px] items-start shadow-[0px_4px_16px_rgba(19,38,81,0.02)]">
            <div className="bg-[#eff6ff] w-[48px] h-[48px] rounded-[10px] flex items-center justify-center shrink-0">
              <Calendar className="w-[24px] h-[24px] text-brand-primary" />
            </div>
            <h4 className="text-[18px] font-bold text-brand-primary font-sans leading-tight mt-1">
              Site visit booking credits
            </h4>
            <p className="text-[14px] text-brand-secondary font-sans leading-normal">
              2 visits per month
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-white border-[1.5px] border-[#d0d4dc] rounded-[12px] p-[24px] flex flex-col gap-[10px] items-start shadow-[0px_4px_16px_rgba(19,38,81,0.02)]">
            <div className="bg-[#eff6ff] w-[48px] h-[48px] rounded-[10px] flex items-center justify-center shrink-0">
              <Headphones className="w-[24px] h-[24px] text-brand-primary" />
            </div>
            <h4 className="text-[18px] font-bold text-brand-primary font-sans leading-tight mt-1">
              Priority support
            </h4>
            <p className="text-[14px] text-brand-secondary font-sans leading-normal">
              24-hour response time
            </p>
          </div>

        </div>
      </div>

      {/* Membership Documents Section */}
      <div className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-6 md:p-[33.5px] flex flex-col gap-[24px] shadow-[0px_4px_20px_rgba(19,38,81,0.04)]">
        <div className="flex items-center gap-[12px]">
          <h2 className="text-[20px] font-bold text-brand-primary font-sans leading-none">
            Membership Documents
          </h2>
        </div>

        <div className="flex flex-col gap-[16px]">
          
          {/* Document 1: Membership Certificate */}
          <div className="border-[#d0d4dc] border-[1.5px] border-solid rounded-[10px] p-[17.5px] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-[16px]">
              <div className="bg-[#eff6ff] w-[48px] h-[48px] rounded-[10px] flex items-center justify-center shrink-0">
                <Award className="w-[24px] h-[24px] text-brand-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-semibold text-brand-primary font-sans leading-snug">
                  Membership Certificate
                </span>
                <div className="flex items-center gap-1.5 text-[14px] text-brand-secondary font-sans mt-0.5">
                  <span>PDF</span>
                  <span>•</span>
                  <span>Last updated: 13 May 2026</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[16px] sm:self-auto self-end">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleDocumentAction("View", "Membership Certificate")}
                className="h-[34px] px-4 text-xs font-bold text-brand-primary border-brand-primary hover:bg-[#eff6ff]"
              >
                <Eye className="w-3.5 h-3.5 mr-1" />
                View
              </Button>
              <Button 
                size="sm"
                onClick={() => handleDocumentAction("Download", "Membership Certificate")}
                className="h-[34px] px-4 text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary/95"
              >
                <Download className="w-3.5 h-3.5 mr-1" />
                Download
              </Button>
            </div>
          </div>

          {/* Document 2: Competent Person CV */}
          <div className="border-[#d0d4dc] border-[1.5px] border-solid rounded-[10px] p-[17.5px] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-[16px]">
              <div className="bg-[#eff6ff] w-[48px] h-[48px] rounded-[10px] flex items-center justify-center shrink-0">
                <UserCheck className="w-[24px] h-[24px] text-brand-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-semibold text-brand-primary font-sans leading-snug">
                  Competent Person CV
                </span>
                <div className="flex items-center gap-1.5 text-[14px] text-brand-secondary font-sans mt-0.5">
                  <span>PDF</span>
                  <span>•</span>
                  <span>Last updated: 13 May 2026</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[16px] sm:self-auto self-end">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleDocumentAction("View", "Competent Person CV")}
                className="h-[34px] px-4 text-xs font-bold text-brand-primary border-brand-primary hover:bg-[#eff6ff]"
              >
                <Eye className="w-3.5 h-3.5 mr-1" />
                View
              </Button>
              <Button 
                size="sm"
                onClick={() => handleDocumentAction("Download", "Competent Person CV")}
                className="h-[34px] px-4 text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary/95"
              >
                <Download className="w-3.5 h-3.5 mr-1" />
                Download
              </Button>
            </div>
          </div>

          {/* Document 3: Retained H&S Agreement / Qualifications */}
          <div className="border-[#d0d4dc] border-[1.5px] border-solid rounded-[10px] p-[17.5px] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-[16px]">
              <div className="bg-[#eff6ff] w-[48px] h-[48px] rounded-[10px] flex items-center justify-center shrink-0">
                <FolderArchive className="w-[24px] h-[24px] text-brand-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-semibold text-brand-primary font-sans leading-snug">
                  Qualifications & Certificates
                </span>
                <div className="flex items-center gap-1.5 text-[14px] text-brand-secondary font-sans mt-0.5">
                  <span>ZIP</span>
                  <span>•</span>
                  <span>Last updated: 13 May 2026</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[16px] sm:self-auto self-end">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleDocumentAction("View", "Qualifications & Certificates")}
                className="h-[34px] px-4 text-xs font-bold text-brand-primary border-brand-primary hover:bg-[#eff6ff]"
              >
                <Eye className="w-3.5 h-3.5 mr-1" />
                View
              </Button>
              <Button 
                size="sm"
                onClick={() => handleDocumentAction("Download", "Qualifications & Certificates")}
                className="h-[34px] px-4 text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary/95"
              >
                <Download className="w-3.5 h-3.5 mr-1" />
                Download
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Upgrade / Manage Subscription Promotion cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        {/* Upgrade Plan Promotion */}
        <div 
          onClick={() => toast.success("Opening upgrade options portal...")}
          className="rounded-[12px] p-6 md:p-8 flex flex-col gap-[6px] cursor-pointer transition hover:shadow-lg group relative overflow-hidden text-white"
          style={{ 
            backgroundImage: "linear-gradient(90deg, #132651 0%, #1e3264 50%, #5a6886 100%)" 
          }}
        >
          <div className="absolute right-[-20px] top-[-20px] opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-300">
            <TrendingUp size={160} />
          </div>
          <h4 className="text-[18px] font-bold text-white font-sans flex items-center gap-2">
            Upgrade Plan
          </h4>
          <p className="text-[14px] text-brand-bg-main/80 font-sans group-hover:text-white transition-colors">
            Access more features and increase your monthly inspection credits.
          </p>
        </div>

        {/* Manage Subscription Promotion */}
        <Link
          href="/dashboard/subscription"
          className="bg-white border-[#d0d4dc] border-[1.5px] rounded-[12px] p-6 md:p-8 flex flex-col gap-[6px] cursor-pointer transition hover:shadow-lg hover:border-brand-primary group relative overflow-hidden"
        >
          <div className="absolute right-[-20px] top-[-20px] opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-300 text-brand-primary">
            <CreditCard size={160} />
          </div>
          <h4 className="text-[18px] font-bold text-brand-primary font-sans flex items-center gap-2">
            Manage Subscription
          </h4>
          <p className="text-[14px] text-brand-secondary font-sans group-hover:text-brand-primary transition-colors">
            Update billing details, change plan, or view past invoices.
          </p>
        </Link>
      </div>

      {/* Add User Modal */}
      <AddUserModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddUser={handleAddUser}
        totalSeats={totalSeats}
        usedSeats={usedSeats}
      />

      {/* Manage Users Modal */}
      <ManageUsersModal
        isOpen={isManageModalOpen}
        onClose={() => setIsManageModalOpen(false)}
        users={users}
        setUsers={setUsers}
      />

    </div>
  );
}
