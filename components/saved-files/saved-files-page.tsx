"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  CircleAlert,
  Eye,
  FileBadge2,
  FolderInput,
  Pencil,
  Search,
  Trash2,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSavedFiles } from "./use-saved-files";
import { SelectField } from "./components/select-field";
import {
  TABS,
  SUMMARY_CARDS,
  TOOLBAR_ACTIONS,
  STORAGE_USED_GB,
  STORAGE_LIMIT_GB,
  STORAGE_PERCENTAGE,
  TABLE_COLUMN_LAYOUT,
} from "./types";
import { formatLabelCount } from "./utils";

import { AddCategoryModal } from "./modals/add-category-modal";
import { SaveTemplateModal } from "./modals/save-template-modal";
import { MoveFileModal } from "./modals/move-file-modal";
import { EditFileModal } from "./modals/edit-file-modal";
import { DeleteFileModal } from "./modals/delete-file-modal";

const actionButtonClass =
  "h-[34px] rounded-[6px] border-[#132651] px-4 text-[12px] font-medium text-[#132651] shadow-none";

export function SavedFilesPage() {
  const router = useRouter();
  const state = useSavedFiles();
  const {
    activeTab,
    setActiveTab,
    searchTerm,
    setSearchTerm,
    projectFilter,
    setProjectFilter,
    categoryFilter,
    setCategoryFilter,
    formatFilter,
    setFormatFilter,
    sourceFilter,
    setSourceFilter,
    sortFilter,
    setSortFilter,
    selectedIds,
    filteredFiles,
    allVisibleSelected,
    toggleSelection,
    toggleSelectAll,
    openAddCategoryModal,
    openSaveTemplateModal,
    openMoveFileModal,
    openEditFileModal,
    openDeleteFileModal,
    projectOptions,
    categoryOptions,
    formatOptions,
    sourceOptions,
    sortOptions,
  } = state;

  return (
    <div className="flex flex-col gap-6 text-brand-primary">
      <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary">
        <span>Dashboard</span>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span className="text-brand-primary">My Saved Files</span>
      </div>

      <div className="space-y-2">
        <h1 className="text-[30px] font-bold leading-[1.2] text-brand-primary">
          My Saved Files
        </h1>
        <p className="max-w-275 text-[16px] leading-6 text-brand-secondary">
          All saved RAMS, COSHH assessments, permits, method statements,
          inspection reports, risk assessments, purchased documents, uploaded
          files, and downloaded working files are stored here.
        </p>
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
        {SUMMARY_CARDS.map(({ label, value, description, icon: Icon }) => (
          <article
            key={label}
            className="rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-[0_1px_0_rgba(10,25,47,0.02)]"
          >
            <div className="flex items-center justify-between">
              <p className="text-[14px] text-[#64748b]">{label}</p>
              <Icon className="size-4.5 text-brand-secondary" />
            </div>
            <div className="mt-6 space-y-1">
              <p className="text-[28px] font-bold leading-none text-brand-primary">
                {value}
              </p>
              <p className="text-[12px] text-brand-secondary">{description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="space-y-6">
        <div className="rounded-[12px] bg-[#f3f5f8] p-0.75">
          <div className="flex gap-1 overflow-x-auto no-scrollbar">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "rounded-[8px] px-3 py-1.5 text-[14px] whitespace-nowrap transition",
                  activeTab === tab
                    ? "bg-white text-brand-primary shadow-[0_1px_2px_rgba(15,23,42,0.08)]"
                    : "text-brand-primary",
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <p className="pt-1 text-[14px] leading-[1.6] text-brand-secondary">
              Manage your saved documents, uploaded files, and project folders.
            </p>

            <div className="flex flex-wrap gap-3 xl:justify-end">
              {TOOLBAR_ACTIONS.map(({ label, hasChevron }) => (
                <Button
                  key={label}
                  variant="outline"
                  onClick={
                    label === "Manage Categories"
                      ? () => router.push("/my-saved-files/manage-categories")
                      : label === "Add Category"
                        ? openAddCategoryModal
                        : label === "Save Template Copy"
                          ? openSaveTemplateModal
                          : undefined
                  }
                  className={cn(actionButtonClass, "bg-white")}
                >
                  {label}
                  {hasChevron ? <ChevronDown className="size-4" /> : null}
                </Button>
              ))}
              <Button className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-medium text-white hover:bg-[#0d1b3a]">
                Upload File
              </Button>
            </div>
          </div>

          <section className="rounded-[12px] border border-[#d9dde5] bg-white p-4.25 shadow-[0_1px_1px_rgba(15,23,42,0.04)]">
            <div className="grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_repeat(5,minmax(0,0.45fr))]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-brand-secondary" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search files..."
                  className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-brand-bg-main pl-12 pr-4 text-[12px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
                />
              </div>

              <SelectField
                value={projectFilter}
                onChange={setProjectFilter}
                options={projectOptions}
              />
              <SelectField
                value={categoryFilter}
                onChange={setCategoryFilter}
                options={categoryOptions}
              />
              <SelectField
                value={formatFilter}
                onChange={setFormatFilter}
                options={formatOptions}
              />
              <SelectField
                value={sourceFilter}
                onChange={setSourceFilter}
                options={sourceOptions}
              />
              <SelectField
                value={sortFilter}
                onChange={setSortFilter}
                options={sortOptions}
              />
            </div>

            <div className="mt-4 flex flex-col gap-3 border-t border-[#edf0f4] pt-3 md:flex-row md:items-center md:justify-between">
              <p className="text-[12px] font-semibold text-brand-primary">
                {formatLabelCount(filteredFiles.length)}
              </p>

              <div className="flex items-center gap-3 self-end md:self-auto">
                <div className="h-1.5 w-42 overflow-hidden rounded-full bg-[#d3d7df]">
                  <div
                    className="h-full rounded-full bg-brand-primary"
                    style={{ width: `${STORAGE_PERCENTAGE}%` }}
                  />
                </div>
                <span className="text-[12px] text-brand-secondary">
                  {STORAGE_USED_GB} GB / {STORAGE_LIMIT_GB} GB
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="overflow-hidden rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_1px_1px_rgba(15,23,42,0.04)]">
        <div className="overflow-x-auto">
          <div className="min-w-386.5">
            <div
              className="grid items-center gap-4 border-b-[1.5px] border-[#f3f5f8] bg-[#d6e9ff] px-6 py-2.75"
              style={{ gridTemplateColumns: TABLE_COLUMN_LAYOUT }}
            >
              <div className="flex items-center gap-4">
                <div className="flex w-12 justify-center px-3">
                  <input
                    type="checkbox"
                    checked={allVisibleSelected}
                    onChange={toggleSelectAll}
                    aria-label="Select all visible files"
                    className="size-3.5 rounded-lg border border-[#c5c6cd] accent-brand-primary"
                  />
                </div>
                <span className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                  File Name
                </span>
              </div>
              {[
                "Project / Location",
                "Category",
                "Type",
                "Source",
                "Version",
                "Date Saved",
                "Actions",
              ].map((heading) => (
                <span
                  key={heading}
                  className="text-[14px] font-bold leading-[1.6] text-brand-primary"
                >
                  {heading}
                </span>
              ))}
            </div>

            {filteredFiles.length > 0 ? (
              filteredFiles.map((file) => (
                <div
                  key={file.id}
                  className="grid items-center gap-4 border-b-[1.5px] border-[#f3f5f8] px-6 transition hover:bg-[#fafbfd]"
                  style={{ gridTemplateColumns: TABLE_COLUMN_LAYOUT }}
                >
                  <div className="flex min-h-15.5 items-center gap-4">
                    <div className="flex w-12 justify-center px-3">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(file.id)}
                        onChange={() => toggleSelection(file.id)}
                        aria-label={`Select ${file.name}`}
                        className="size-3.5 rounded-lg border border-[#c5c6cd] accent-brand-primary"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <FileBadge2 className="size-5 shrink-0 text-[#4f79ff]" />
                      <span className="text-[16px] leading-[1.6] text-brand-primary">
                        {file.name}
                      </span>
                    </div>
                  </div>

                  <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                    {file.project}
                  </div>
                  <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                    {file.category}
                  </div>
                  <div className="py-4.5">
                    <span className="inline-flex rounded-lg bg-[#f3f5f8] px-1.75 py-0.5 text-[12px] leading-[1.6] text-brand-primary">
                      {file.format}
                    </span>
                  </div>
                  <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                    {file.source}
                  </div>
                  <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                    {file.version}
                  </div>
                  <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                    {file.dateSaved}
                  </div>
                  <div className="py-4.5">
                    <div className="flex h-7 items-center gap-2">
                      <button
                        type="button"
                        className="flex size-7 items-center justify-center rounded-lg text-[#4f79ff] transition hover:bg-[#eef4ff]"
                        aria-label={`Preview ${file.name}`}
                      >
                        <Eye className="size-4.5" />
                      </button>
                      <button
                        type="button"
                        className="flex size-7 items-center justify-center rounded-lg text-[#2ea44f] transition hover:bg-[#eefbf2]"
                        aria-label={`Download ${file.name}`}
                      >
                        <Upload className="size-4.5 rotate-180" />
                      </button>
                      <button
                        type="button"
                        onClick={() => openMoveFileModal(file)}
                        className="flex size-7 items-center justify-center rounded-lg text-brand-primary transition hover:bg-[#f3f5f8]"
                        aria-label={`Move ${file.name}`}
                      >
                        <FolderInput className="size-4.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => openEditFileModal(file)}
                        className="flex size-7 items-center justify-center rounded-lg text-[#f97316] transition hover:bg-[#fff5eb]"
                        aria-label={`Edit ${file.name}`}
                      >
                        <Pencil className="size-4.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => openDeleteFileModal(file)}
                        className="flex size-7 items-center justify-center rounded-lg text-[#ef4444] transition hover:bg-[#fff1f2]"
                        aria-label={`Delete ${file.name}`}
                      >
                        <Trash2 className="size-4.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-16 text-center text-[14px] text-brand-secondary">
                No files match the current tab and filters.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <p className="text-[14px] text-brand-secondary">
          Showing 1 to {filteredFiles.length} of {filteredFiles.length} files
        </p>

        <div className="flex items-center gap-2 self-start xl:self-auto">
          <Button
            variant="outline"
            className="h-9.5 rounded-[6px] border-[#d9dde5] px-4 text-[14px] text-brand-secondary opacity-50"
            disabled
          >
            Previous
          </Button>
          <Button className="h-9.5 min-w-9.5 rounded-[6px] bg-brand-primary px-4 text-[14px] text-white hover:bg-[#0d1b3a]">
            1
          </Button>
          <Button
            variant="outline"
            className="h-9.5 rounded-[6px] border-[#d9dde5] px-4 text-[14px] text-brand-primary opacity-50"
            disabled
          >
            Next
          </Button>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="flex flex-col gap-6 rounded-[8px] border border-[#e5e7eb] bg-white p-5.25 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[20px] font-bold text-brand-primary">
              Storage Used
            </h2>
            <p className="text-[14px] text-brand-secondary">
              {STORAGE_USED_GB} GB / {STORAGE_LIMIT_GB} GB
            </p>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-[#c8d0dd]">
            <div
              className="h-full rounded-full bg-brand-primary"
              style={{ width: `${STORAGE_PERCENTAGE}%` }}
            />
          </div>

          <div className="flex flex-col gap-2 text-[12px] md:flex-row md:items-center md:justify-between">
            <p className="text-brand-secondary">
              Retention: Files stored for 6 months
            </p>
            <button type="button" className="text-left text-[#2563eb]">
              Upgrade storage from Buy Extras
            </button>
          </div>
        </article>

        <article className="rounded-[8px] border border-[#e5e7eb] bg-white p-5.25 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
          <h2 className="text-[20px] font-bold text-brand-primary">
            Account Overview
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              { label: "PROJECTS", value: "6" },
              { label: "SAVED FILES", value: "24" },
              { label: "UPLOADED FILES", value: "3" },
            ].map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 text-center",
                  index < 2 ? "md:border-r md:border-[#d7dce5]" : "",
                )}
              >
                <span className="text-[20px] font-bold text-[#0a192f]">
                  {item.value}
                </span>
                <span className="text-[12px] text-brand-secondary">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <AddCategoryModal state={state} />
      <SaveTemplateModal state={state} />
      <MoveFileModal state={state} />
      <EditFileModal state={state} />
      <DeleteFileModal state={state} />
    </div>
  );
}
