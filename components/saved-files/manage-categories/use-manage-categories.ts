"use client";

import { useState } from "react";
import { INITIAL_CATEGORIES, FILES, CategoryEntry } from "../types";

export type ManagedCategory = CategoryEntry & {
  parent: string;
  filesSaved: number;
  createdAt: string;
};

export function useManageCategories() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // We map INITIAL_CATEGORIES to have the fields required by Figma
  const [categories] = useState<ManagedCategory[]>(() => {
    return INITIAL_CATEGORIES.map((category, index) => ({
      ...category,
      parent: ["None", "Safety Documents", "Project Records"][index % 3],
      filesSaved: FILES.filter((file) => file.category === category.name).length,
      createdAt: `1${index % 9 + 0} May 2026`,
      status: category.status ?? (index % 4 === 3 ? "Archived" : "Active"),
    }));
  });

  const filteredCategories = categories;

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
    selectedIds,
    toggleSelection,
    toggleSelectAll,
    allVisibleSelected,
    filteredCategories,
  };
}
