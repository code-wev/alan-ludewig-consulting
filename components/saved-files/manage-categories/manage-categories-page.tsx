"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  CircleAlert,
  Clock,
  FileCheck2,
  FileWarning,
  FolderKanban,
  Pencil,
  SlidersHorizontal,
  Download,
  Eye,
  MoreVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useManageCategories } from "./use-manage-categories";
import { useSavedFiles } from "../use-saved-files";
import { AddCategoryModal } from "../modals/add-category-modal";

const CATEGORY_TABLE_COLUMN_LAYOUT =
  "minmax(280px, 1fr) minmax(130px, 144px) minmax(110px, 131px) minmax(110px, 125px) minmax(110px, 150px) minmax(112px, 112px)";

const CategoryTreeItem = ({
  name,
  count,
  level = 0,
  hasChildren = false,
}: {
  name: string;
  count: number;
  level?: number;
  hasChildren?: boolean;
}) => (
  <div
    className="flex items-center gap-2 rounded-sm py-2 pr-3 text-brand-primary transition hover:bg-[#f3f5f8]"
    style={{ paddingLeft: `${level * 16 + 12}px` }}
  >
    {hasChildren ? (
      <ChevronRight className="size-3.5 shrink-0 text-brand-secondary" />
    ) : (
      <div className="size-3.5 shrink-0" />
    )}
    <FolderKanban className="size-4 shrink-0 text-brand-secondary" />
    <span className="flex-1 text-[14px] leading-[1.6] text-brand-primary">{name}</span>
    <span className="text-[14px] leading-[1.6] text-brand-secondary">{count}</span>
  </div>
);

export function ManageCategoriesPage() {
  const {
    selectedIds,
    toggleSelection,
    toggleSelectAll,
    allVisibleSelected,
    filteredCategories,
  } = useManageCategories();

  const savedFilesState = useSavedFiles();

  return (
    <div className="flex flex-col gap-6 text-brand-primary">
      <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary">
        <span>Dashboard</span>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <Link href="/my-saved-files" className="hover:text-brand-primary">
          My Saved Files
        </Link>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span className="text-brand-primary">Manage My Categories</span>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <h1 className="text-[30px] font-bold leading-[1.2] text-brand-primary">
            Manage My Categories
          </h1>
          <p className="max-w-275 text-[16px] leading-6 text-brand-secondary">
            Create and organise categories for your saved documents and compliance records.
          </p>
        </div>
        <div className="flex shrink-0">
          <Button
            onClick={savedFilesState.openAddCategoryModal}
            className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-medium text-white hover:bg-[#0d1b3a]"
          >
            Add New Category
          </Button>
        </div>
      </div>

      <section className="flex items-start gap-3 rounded-[12px] border-[1.5px] border-[#fee685] bg-[#fffbeb] px-6 py-5">
        <CircleAlert className="mt-0.5 size-5 shrink-0 text-[#f97316]" />
        <div className="space-y-2 text-[14px] leading-[1.6]">
          <p className="font-semibold text-[#7b3306]">
            Files are stored for 12 months under your current plan.
          </p>
          <p className="text-[#bb4d00]">
            Need more storage? Upgrade storage from Buy Extras.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-[0_1px_0_rgba(10,25,47,0.02)]">
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-[#64748b]">Total Categories</p>
            <FolderKanban className="size-4.5 text-brand-secondary" />
          </div>
          <div className="mt-6 space-y-1">
            <p className="text-[28px] font-bold leading-none text-brand-primary">12</p>
            <p className="text-[12px] text-brand-secondary">
              <span className="font-bold text-[#00a63e]">+2</span> from last month
            </p>
          </div>
        </article>

        <article className="rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-[0_1px_0_rgba(10,25,47,0.02)]">
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-[#64748b]">Files Categorised</p>
            <FileCheck2 className="size-4.5 text-brand-secondary" />
          </div>
          <div className="mt-6 space-y-1">
            <p className="text-[28px] font-bold leading-none text-brand-primary">842</p>
            <p className="text-[12px] text-brand-secondary">
              <span className="font-bold text-brand-primary">98.2%</span> of total library
            </p>
          </div>
        </article>

        <article className="rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-[0_1px_0_rgba(10,25,47,0.02)]">
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-[#64748b]">Uncategorised Files</p>
            <FileWarning className="size-4.5 text-brand-secondary" />
          </div>
          <div className="mt-6 space-y-1">
            <p className="text-[28px] font-bold leading-none text-[#d92d20]">15</p>
            <p className="text-[12px] text-brand-secondary">Requires immediate attention</p>
          </div>
        </article>

        <article className="rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-[0_1px_0_rgba(10,25,47,0.02)]">
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-[#64748b]">Recently Updated</p>
            <Clock className="size-4.5 text-brand-secondary" />
          </div>
          <div className="mt-6 space-y-1">
            <p className="text-[28px] font-bold leading-none text-brand-primary">03</p>
            <p className="text-[12px] text-brand-secondary">Changes in last 48 hours</p>
          </div>
        </article>
      </section>

      <section className="flex flex-col gap-8 xl:flex-row xl:items-start">
        {/* Main Table Area */}
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-bold text-brand-primary">Category Directory</h2>
            <Button variant="outline" className="size-7 rounded-lg border border-[#e3e6ec] p-0">
              <Download className="size-4.5 text-brand-primary" />
            </Button>
          </div>

          <div className="overflow-hidden rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_1px_1px_rgba(15,23,42,0.04)]">
            <div className="overflow-x-auto">
              <div className="min-w-250">
                <div
                  className="grid items-center gap-4 border-b-[1.5px] border-[#f3f5f8] bg-[#d6e9ff] px-6 py-2.75"
                  style={{ gridTemplateColumns: CATEGORY_TABLE_COLUMN_LAYOUT }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex w-12 justify-center px-3">
                      <input
                        type="checkbox"
                        checked={allVisibleSelected}
                        onChange={toggleSelectAll}
                        aria-label="Select all visible categories"
                        className="size-3.5 rounded-lg border border-[#c5c6cd] accent-brand-primary"
                      />
                    </div>
                    <span className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                      Category Name
                    </span>
                  </div>
                  {["Parent", "Files", "Created", "Status", "Actions"].map((heading) => (
                    <span
                      key={heading}
                      className="text-[14px] font-bold leading-[1.6] text-brand-primary"
                    >
                      {heading}
                    </span>
                  ))}
                </div>

                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category) => (
                    <div
                      key={category.id}
                      className="grid items-center gap-4 border-b-[1.5px] border-[#f3f5f8] px-6 transition hover:bg-[#fafbfd]"
                      style={{ gridTemplateColumns: CATEGORY_TABLE_COLUMN_LAYOUT }}
                    >
                      <div className="flex min-h-15.5 items-center gap-4">
                        <div className="flex w-12 justify-center px-3">
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(category.id)}
                            onChange={() => toggleSelection(category.id)}
                            aria-label={`Select ${category.name}`}
                            className="size-3.5 rounded-lg border border-[#c5c6cd] accent-brand-primary"
                          />
                        </div>
                        <span className="font-medium text-[16px] leading-[1.6] text-brand-primary">
                          {category.name}
                        </span>
                      </div>

                      <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                        {category.parent}
                      </div>
                      <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                        {category.filesSaved}
                      </div>
                      <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                        {category.createdAt}
                      </div>
                      <div className="py-4.5">
                        <span
                          className={cn(
                            "inline-flex rounded-[6px] px-2.25 py-0.5 text-[12px] leading-[1.6] text-white",
                            category.status === "Archived" ? "bg-[#a3acba]" : "bg-[#00bc7d]"
                          )}
                        >
                          {category.status}
                        </span>
                      </div>
                      <div className="py-4.5">
                        <div className="flex h-7 items-center gap-2">
                          <button
                            type="button"
                            className="flex size-7 items-center justify-center rounded-lg text-brand-primary transition hover:bg-[#f3f5f8]"
                            aria-label={`View category ${category.name}`}
                          >
                            <Eye className="size-4.5" />
                          </button>
                          <button
                            type="button"
                            className="flex size-7 items-center justify-center rounded-lg text-[#16a34a] transition hover:bg-[#eefbf2]"
                            aria-label={`Edit category ${category.name}`}
                          >
                            <Pencil className="size-4.5" />
                          </button>
                          <button
                            type="button"
                            className="flex size-7 items-center justify-center rounded-lg text-brand-primary transition hover:bg-[#f3f5f8]"
                            aria-label={`More actions for ${category.name}`}
                          >
                            <MoreVertical className="size-4.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-16 text-center text-[14px] text-brand-secondary">
                    No categories match the current filters.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Tree Structure */}
        <aside className="flex h-127.5 w-full shrink-0 flex-col overflow-hidden rounded-[12px] border border-[#e3e6ec] bg-white xl:max-w-[320px]">
          <div className="flex items-center justify-between border-b border-[#c5c6d0] px-4 py-4">
            <h3 className="font-sans text-[16px] font-semibold leading-6 text-[#001137]">
              Category Tree
            </h3>
            <button className="text-brand-secondary">
              <SlidersHorizontal className="size-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="mb-4 flex items-center justify-between rounded-[6px] border border-[#ba1a1a33] bg-[#ffdad633] p-3.25">
              <div className="flex items-center gap-2 text-[#d92d20]">
                <FileWarning className="size-5" />
                <span className="text-[12px] font-bold">Uncategorised Files</span>
              </div>
              <span className="flex h-5 items-center justify-center rounded-[12px] bg-[#d92d20] px-2 text-[12px] text-white">
                15
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <CategoryTreeItem name="Site Inspections" count={142} hasChildren />
              <CategoryTreeItem name="Daily Logs" count={45} level={1} />
              <CategoryTreeItem name="Safety Checklists" count={97} level={1} />
              <CategoryTreeItem name="Risk Assessments" count={300} hasChildren />
              <CategoryTreeItem name="Site A" count={150} level={1} />
              <CategoryTreeItem name="Site B" count={150} level={1} />
              <CategoryTreeItem name="Method Statements" count={85} />
              <CategoryTreeItem name="COSHH Records" count={315} />
            </div>
          </div>
        </aside>
      </section>

      <AddCategoryModal state={savedFilesState} />
    </div>
  );
}
