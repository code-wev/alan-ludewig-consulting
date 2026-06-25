"use client";

import React from "react";
import Link from "next/link";
import {
  Archive,
  ChevronRight,
  CircleAlert,
  Clock,
  FileCheck2,
  FileWarning,
  FolderInput,
  FolderKanban,
  Pencil,
  Search,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectField } from "../components/select-field";
import { useManageCategories } from "./use-manage-categories";

const CATEGORY_TABLE_COLUMN_LAYOUT =
  "minmax(320px, 1fr) minmax(144px, 144px) minmax(131px, 131px) minmax(125px, 125px) minmax(150px, 150px) minmax(112px, 112px)";

export function ManageCategoriesPage() {
  const {
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
  } = useManageCategories();

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
          <Button className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-medium text-white hover:bg-[#0d1b3a]">
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

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-4 shadow-[0_1px_1px_rgba(0,0,0,0.05)] xl:flex-row xl:items-center xl:justify-between">
          <div className="relative w-full max-w-102">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-brand-secondary" />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search category name..."
              className="h-9 w-full rounded-[6px] border border-[#e3e6ec] bg-white pl-11 pr-4 text-[14px] text-brand-primary outline-none transition placeholder:text-brand-secondary focus:border-brand-primary"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <SelectField
              value={typeFilter}
              onChange={setTypeFilter}
              options={typeOptions}
              className="w-44.5"
              selectClassName="h-9 rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-secondary"
            />
            <SelectField
              value={statusFilter}
              onChange={setStatusFilter}
              options={statusOptions}
              className="w-36.75"
              selectClassName="h-9 rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-secondary"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-bold text-brand-primary">Category Directory</h2>
          <Button variant="outline" className="size-7 p-0 rounded-lg border border-[#e3e6ec]">
            <Search className="size-4.5 text-brand-primary" />
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
                      <span className="text-[16px] leading-[1.6] text-brand-primary font-medium">
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
                          className="flex size-7 items-center justify-center rounded-lg text-[#16a34a] transition hover:bg-[#eefbf2]"
                          aria-label={`Edit category ${category.name}`}
                        >
                          <Pencil className="size-4.5" />
                        </button>
                        <button
                          type="button"
                          className="flex size-7 items-center justify-center rounded-lg text-brand-primary transition hover:bg-[#f3f5f8]"
                          aria-label={`Move category ${category.name}`}
                        >
                          <FolderInput className="size-4.5" />
                        </button>
                        <button
                          type="button"
                          className="flex size-7 items-center justify-center rounded-lg text-[#16a34a] transition hover:bg-[#eefbf2]"
                          aria-label={`Archive category ${category.name}`}
                        >
                          <Archive className="size-4.5" />
                        </button>
                        <button
                          type="button"
                          className="flex size-7 items-center justify-center rounded-lg text-[#ef4444] transition hover:bg-[#fff1f2]"
                          aria-label={`Delete category ${category.name}`}
                        >
                          <Trash2 className="size-4.5" />
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
      </section>
    </div>
  );
}
