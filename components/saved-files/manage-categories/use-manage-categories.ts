"use client";

import { useState } from "react";
import { INITIAL_CATEGORIES, FILES, CategoryEntry } from "../types";

export type ManagedCategory = CategoryEntry & {
  parent: string;
  filesSaved: number;
  createdAt: string;
};

export function useManageCategories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // We map INITIAL_CATEGORIES to have the fields required by Figma
  const [categories, setCategories] = useState<ManagedCategory[]>(() => {
    return INITIAL_CATEGORIES.map((category, index) => ({
      ...category,
      parent: ["None", "Safety Documents", "Project Records"][index % 3],
      filesSaved: FILES.filter((file) => file.category === category.name).length,
      createdAt: `1${index % 9 + 0} May 2026`,
      status: category.status ?? (index % 4 === 3 ? "Archived" : "Active"),
      type: category.type ?? ["Regulatory", "Internal", "Vendor", "Operational"][index % 4],
    }));
  });

  const typeOptions = [
    "All Categories",
    ...Array.from(new Set(categories.map((c) => c.type ?? "General Documents"))),
  ];
  const statusOptions = ["All Status", "Active", "Archived"];

  const filteredCategories = categories.filter((category) => {
    const matchesSearch =
      searchTerm.trim().length === 0 ||
      category.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
    const matchesType =
      typeFilter === "All Categories" || category.type === typeFilter;
    const matchesStatus =
      statusFilter === "All Status" || category.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  const allVisibleSelected =
    filteredCategories.length > 0 &&
    filteredCategories.every((category) => selectedIds.includes(category.id));

  const toggleSelection = (categoryId: string) => {
    setSelectedIds((current) =>
      current.includes(categoryId)
        ? current.filter((id) => id !== categoryId)
        : [...current, categoryId],
    );
  };

  const toggleSelectAll = () => {
    if (allVisibleSelected) {
      setSelectedIds((current) =>
        current.filter(
          (id) => !filteredCategories.some((category) => category.id === id),
        ),
      );
      return;
    }

    const nextSelection = new Set(selectedIds);
    filteredCategories.forEach((category) => nextSelection.add(category.id));
    setSelectedIds(Array.from(nextSelection));
  };

  return {
    searchTerm,
    setSearchTerm,
    typeFilter,
    setTypeFilter,
    statusFilter,
    setStatusFilter,
    selectedIds,
    toggleSelection,
    toggleSelectAll,
    allVisibleSelected,
    filteredCategories,
    typeOptions,
    statusOptions,
  };
}
