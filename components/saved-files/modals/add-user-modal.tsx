"use client";

import React, { useState } from "react";
import { X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (user: { name: string; email: string; role: string; status: "Active" | "Pending" }) => void;
  totalSeats: number;
  usedSeats: number;
}

export function AddUserModal({
  isOpen,
  onClose,
  onAddUser,
  totalSeats,
  usedSeats,
}: AddUserModalProps) {
  // New User Form State
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserJobTitle, setNewUserJobTitle] = useState("");
  const [newUserRole, setNewUserRole] = useState("");
  const [newUserPermissions, setNewUserPermissions] = useState({
    documentLibrary: true,
    ramsBuilder: true,
    savedFiles: false,
    bookVisit: false,
    training: false,
    billingView: false,
  });
  const [sendInvitationEmail, setSendInvitationEmail] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim() || !newUserEmail.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!newUserRole) {
      toast.error("Please select a role.");
      return;
    }

    if (usedSeats >= totalSeats) {
      toast.error("Seat limit reached! Upgrade your plan to add more users.");
      return;
    }

    onAddUser({
      name: newUserName,
      email: newUserEmail,
      role: newUserRole,
      status: sendInvitationEmail ? "Pending" : "Active",
    });

    // Reset Form
    setNewUserName("");
    setNewUserEmail("");
    setNewUserJobTitle("");
    setNewUserRole("");
    setNewUserPermissions({
      documentLibrary: true,
      ramsBuilder: true,
      savedFiles: false,
      bookVisit: false,
      training: false,
      billingView: false,
    });
    setSendInvitationEmail(true);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px] overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-[894px] max-h-[90vh] overflow-y-auto no-scrollbar rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="relative flex flex-col gap-6 p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-bold text-brand-primary font-sans leading-none">
              Add New User
            </h2>
            <button 
              type="button"
              onClick={onClose}
              className="flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-slate-100 hover:text-brand-primary"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Info Box */}
            <div className="bg-[#e4ebfe] border border-[#adc6ff]/50 rounded-[8px] p-[17px] flex items-center gap-[16px] text-brand-primary font-sans text-[14px]">
              <Info className="w-5 h-5 shrink-0" />
              <p className="leading-[1.6]">
                {totalSeats - usedSeats} seat{(totalSeats - usedSeats) !== 1 ? "s" : ""} available on your current Comply Pro membership.
              </p>
            </div>

            {/* Form fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-brand-primary font-sans">
                  Full Name <span className="text-[#d92d20]">*</span>
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g., Jane Doe"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  className="h-[51px] px-4 border border-[#e3e6ec] bg-white rounded-[6px] text-[14px] text-brand-primary outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition placeholder:text-[#a3acba] font-sans"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-brand-primary font-sans">
                  Email Address <span className="text-[#d92d20]">*</span>
                </label>
                <input 
                  type="email"
                  required
                  placeholder="jane.doe@example.com"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  className="h-[51px] px-4 border border-[#e3e6ec] bg-white rounded-[6px] text-[14px] text-brand-primary outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition placeholder:text-[#a3acba] font-sans"
                />
              </div>

              {/* Job Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-brand-primary font-sans">
                  Job Title
                </label>
                <input 
                  type="text"
                  placeholder="e.g. Site Manager, Supervisor"
                  value={newUserJobTitle}
                  onChange={(e) => setNewUserJobTitle(e.target.value)}
                  className="h-[51px] px-4 border border-[#e3e6ec] bg-white rounded-[6px] text-[14px] text-brand-primary outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition placeholder:text-[#a3acba] font-sans"
                />
              </div>

              {/* Role */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-brand-primary font-sans">
                  Role <span className="text-[#d92d20]">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={newUserRole}
                    onChange={(e) => setNewUserRole(e.target.value)}
                    className="w-full h-[51px] pl-4 pr-10 border border-[#e3e6ec] bg-white rounded-[6px] text-[14px] text-brand-primary outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition font-sans appearance-none"
                  >
                    <option value="" disabled hidden>Select a role...</option>
                    <option value="Staff">Staff</option>
                    <option value="Owner/Admin">Owner/Admin</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-secondary">
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Access Permissions Section */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-medium text-brand-primary font-sans">
                Access Permissions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { id: "documentLibrary", label: "Document Library" },
                  { id: "ramsBuilder", label: "RAMS / Assessment Builder" },
                  { id: "savedFiles", label: "My Saved Files" },
                  { id: "bookVisit", label: "Book Site Visit" },
                  { id: "training", label: "Training" },
                  { id: "billingView", label: "Billing & Subscription View" },
                ].map((perm) => (
                  <div 
                    key={perm.id}
                    onClick={() => {
                      setNewUserPermissions(prev => ({
                        ...prev,
                        [perm.id]: !prev[perm.id as keyof typeof prev]
                      }));
                    }}
                    className={cn(
                      "border border-[#e3e6ec] rounded-[6px] p-[17px] flex items-center gap-[16px] cursor-pointer hover:bg-slate-50 transition-colors select-none",
                      newUserPermissions[perm.id as keyof typeof newUserPermissions] && "border-brand-primary/50 bg-[#e4ebfe]/10"
                    )}
                  >
                    <div className={cn(
                      "w-[18px] h-[18px] rounded-[4px] flex items-center justify-center border shrink-0 transition-all duration-150",
                      newUserPermissions[perm.id as keyof typeof newUserPermissions] 
                        ? "bg-brand-primary border-brand-primary text-white" 
                        : "bg-white border-[#a3acba]"
                    )}>
                      {newUserPermissions[perm.id as keyof typeof newUserPermissions] && (
                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[14px] font-bold text-brand-primary font-sans leading-tight">
                      {perm.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Toggles Container */}
            <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[8px] p-[17px] flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-[12px] font-bold text-brand-primary font-sans">
                  Send Invitation Email
                    </span>
                <span className="text-[12px] text-brand-secondary font-sans">
                  User will receive an email invitation to create their login.
                </span>
              </div>
              
              {/* Switch toggle */}
              <div 
                onClick={() => setSendInvitationEmail(!sendInvitationEmail)}
                className={cn(
                  "w-[44px] h-[24px] rounded-full relative transition-colors duration-200 cursor-pointer shrink-0",
                  sendInvitationEmail ? "bg-brand-primary" : "bg-slate-300"
                )}
              >
                <div className={cn(
                  "w-[20px] h-[20px] rounded-full bg-white absolute top-[2px] transition-all duration-200",
                  sendInvitationEmail ? "left-[22px]" : "left-[2px]"
                )} />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button 
                type="submit"
                className="h-[34px] px-[16px] text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary/95 transition rounded-[6px]"
              >
                Send Invitation
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
