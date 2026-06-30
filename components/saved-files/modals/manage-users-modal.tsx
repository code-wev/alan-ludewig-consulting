"use client";

import React, { useState, useMemo } from "react";
import { X, Search, Eye, Trash2, Mail, Download, CheckSquare, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface UserMember {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Pending";
}

interface ManageUsersModalProps {
  isOpen: boolean;
  onClose: () => void;
  users: UserMember[];
  setUsers: React.Dispatch<React.SetStateAction<UserMember[]>>;
}

export function ManageUsersModal({
  isOpen,
  onClose,
  users,
  setUsers,
}: ManageUsersModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Filter users based on search query and role filter
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRole = 
        roleFilter === "all" ||
        (roleFilter === "admin" && user.role === "Owner/Admin") ||
        (roleFilter === "staff" && user.role === "Staff");

      return matchesSearch && matchesRole;
    });
  }, [users, searchQuery, roleFilter]);

  // Checkbox selection helpers
  const isAllSelected = filteredUsers.length > 0 && selectedIds.length === filteredUsers.length;
  
  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredUsers.map(u => u.id));
    }
  };

  const toggleSelectUser = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(x => x !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Actions
  const handleDeleteUser = (id: string, name: string) => {
    const userToDelete = users.find(u => u.id === id);
    if (userToDelete?.role === "Owner/Admin") {
      toast.error("Cannot delete the Account Owner!");
      return;
    }
    setUsers(users.filter(u => u.id !== id));
    setSelectedIds(selectedIds.filter(x => x !== id));
    toast.success(`${name} has been removed from the account.`);
  };

  const handleBulkDelete = () => {
    const deletableIds = selectedIds.filter(id => {
      const u = users.find(x => x.id === id);
      return u && u.role !== "Owner/Admin";
    });

    if (deletableIds.length === 0) {
      toast.error("No deletable users selected (Account Owner cannot be deleted).");
      return;
    }

    setUsers(users.filter(u => !deletableIds.includes(u.id)));
    setSelectedIds([]);
    toast.success(`Removed ${deletableIds.length} user(s) from the account.`);
  };

  const handleActionClick = (action: "view" | "resend", user: UserMember) => {
    if (action === "view") {
      toast.info(`Viewing details and permissions for ${user.name}`);
    } else if (action === "resend") {
      if (user.status === "Pending") {
        toast.success(`Resent email invitation to ${user.email}`);
      } else {
        toast.info(`Downloading audit report log for ${user.name}`);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px] overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-[1200px] max-h-[90vh] overflow-y-auto no-scrollbar rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="relative flex flex-col gap-6 p-6 md:p-8">
          
          {/* Header section with close button */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1 pr-8">
              <h2 className="text-[20px] font-bold text-brand-primary font-sans leading-none">
                Manage Users
              </h2>
              <p className="text-[14px] text-brand-secondary font-sans leading-normal mt-1">
                View status, edit roles, resend email invitations, or delete staff user accounts.
              </p>
            </div>
            
            {/* Filters Row */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {/* Search */}
              <div className="relative w-full sm:w-[260px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-secondary" />
                <input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-9 pl-10 pr-3.5 text-xs bg-white border border-[#e3e6ec] rounded-[6px] text-brand-primary placeholder:text-brand-secondary/60 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                />
              </div>

              {/* Role Dropdown */}
              <div className="relative w-full sm:w-[160px]">
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="w-full h-9 pl-4 pr-10 border border-[#e3e6ec] bg-white rounded-[6px] text-xs text-brand-primary outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition font-sans appearance-none"
                >
                  <option value="all">All Roles</option>
                  <option value="admin">Owner/Admin</option>
                  <option value="staff">Staff</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-secondary">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Absolute close button */}
            <button 
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-slate-100 hover:text-brand-primary"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>
          </div>

          {/* Bulk Action Bar */}
          {selectedIds.length > 0 && (
            <div className="bg-[#f0f4ff] border border-brand-primary/20 rounded-[8px] p-3 flex items-center justify-between">
              <span className="text-[13px] text-brand-primary font-sans font-bold">
                {selectedIds.length} user{selectedIds.length !== 1 ? "s" : ""} selected
              </span>
              <Button 
                variant="destructive"
                onClick={handleBulkDelete}
                className="h-8 text-xs font-semibold px-4 py-1.5"
              >
                Delete Selected
              </Button>
            </div>
          )}

          {/* Responsive Table Container */}
          <div className="border border-[#e3e6ec] rounded-[12px] overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#d6e9ff] border-b border-[#e3e6ec]">
                    <th className="px-6 py-3.5 w-[60px] text-center">
                      <button 
                        type="button"
                        onClick={toggleSelectAll}
                        className="flex items-center justify-center mx-auto text-brand-primary transition"
                      >
                        {isAllSelected ? (
                          <CheckSquare size={16} className="text-brand-primary fill-brand-primary/10" />
                        ) : (
                          <Square size={16} className="text-brand-primary" />
                        )}
                      </button>
                    </th>
                    <th className="px-6 py-3.5 text-[14px] font-bold text-brand-primary font-sans">User</th>
                    <th className="px-6 py-3.5 text-[14px] font-bold text-brand-primary font-sans">Role</th>
                    <th className="px-6 py-3.5 text-[14px] font-bold text-brand-primary font-sans">Email</th>
                    <th className="px-6 py-3.5 text-[14px] font-bold text-brand-primary font-sans">Status</th>
                    <th className="px-6 py-3.5 text-[14px] font-bold text-brand-primary font-sans">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f3f5f8]">
                  {filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-brand-secondary font-sans">
                        No users match the search query or filters.
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((user) => {
                      const isSelected = selectedIds.includes(user.id);
                      return (
                        <tr key={user.id} className={cn("hover:bg-slate-50 transition-colors", isSelected && "bg-[#eff6ff]/20")}>
                          <td className="px-6 py-4 text-center">
                            <button 
                              type="button"
                              onClick={() => toggleSelectUser(user.id)}
                              className="flex items-center justify-center mx-auto text-brand-primary transition"
                            >
                              {isSelected ? (
                                <CheckSquare size={16} className="text-brand-primary fill-brand-primary/10" />
                              ) : (
                                <Square size={16} className="text-[#a3acba]" />
                              )}
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-[14px] font-semibold text-brand-primary font-sans">
                              {user.name}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-[14px] text-brand-secondary font-sans">
                            {user.role}
                          </td>
                          <td className="px-6 py-4 text-[14px] text-brand-secondary font-sans">
                            {user.email}
                          </td>
                          <td className="px-6 py-4">
                            <span className={cn(
                              "text-[12px] font-semibold px-[9px] py-[2px] rounded-[6px] shadow-sm font-sans w-fit block",
                              user.status === "Active" 
                                ? "bg-[#00bc7d] text-white" 
                                : "bg-[#ff6900] text-white"
                            )}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {/* View Action */}
                              <button
                                onClick={() => handleActionClick("view", user)}
                                className="p-1.5 rounded-md text-[#155dfc] hover:bg-[#155dfc]/10 transition"
                                title="View permissions"
                              >
                                <Eye size={16} />
                              </button>
                              
                              {/* Mail/Download Action */}
                              <button
                                onClick={() => handleActionClick("resend", user)}
                                className={cn(
                                  "p-1.5 rounded-md transition",
                                  user.status === "Pending" 
                                    ? "text-amber-600 hover:bg-amber-50" 
                                    : "text-emerald-600 hover:bg-emerald-50"
                                )}
                                title={user.status === "Pending" ? "Resend Invitation" : "Download Logs"}
                              >
                                {user.status === "Pending" ? (
                                  <Mail size={16} />
                                ) : (
                                  <Download size={16} />
                                )}
                              </button>

                              {/* Delete Action */}
                              {user.role !== "Owner/Admin" ? (
                                <button
                                  onClick={() => handleDeleteUser(user.id, user.name)}
                                  className="p-1.5 rounded-md text-red-500 hover:bg-red-50 transition"
                                  title="Delete User"
                                >
                                  <Trash2 size={16} />
                                </button>
                              ) : (
                                <div className="w-[28px] h-[28px] shrink-0" />
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
