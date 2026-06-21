"use client";

import {
  ChevronRight,
  Download,
  Eye,
  Search,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectField } from "@/components/saved-files/components/select-field";
import {
  PRIMARY_DOCUMENT_TYPE_CARDS,
  RAMS_CREDITS_REMAINING,
  RAMS_SUMMARY_CARDS,
  RAMS_TABLE_COLUMN_LAYOUT,
  SECONDARY_DOCUMENT_TYPE_CARDS,
} from "./types";
import { useRamsBuilder } from "./use-rams-builder";

const getStatusBadgeClassName = (status: string) => {
  if (status === "Completed") {
    return "bg-[#00bc7d] text-white";
  }
  if (status === "Requires Review") {
    return "bg-[#fef3c7] text-[#92400e]";
  }
  return "bg-[#667085] text-white";
};

export function RamsBuilderPage() {
  const state = useRamsBuilder();
  const {
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    typeFilter,
    setTypeFilter,
    statusFilter,
    setStatusFilter,
    dateRangeFilter,
    setDateRangeFilter,
    filteredActivity,
    selectedIds,
    allVisibleSelected,
    toggleSelection,
    toggleSelectAll,
    startBuilding,
    handleCreateNewDocument,
    handleContinueDrafts,
    handlePreviousDocuments,
    handlePreview,
    handleDownload,
    handleDelete,
    categoryOptions,
    typeOptions,
    statusOptions,
    dateRangeOptions,
  } = state;

  return (
    <div className="flex flex-col gap-8 text-brand-primary">
      <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary">
        <span>Dashboard</span>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span className="text-brand-primary">RAMS Builder</span>
      </div>

      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div className="space-y-2">
          <h1 className="text-[30px] font-bold leading-[1.2] text-brand-primary">
            RAMS Builder
          </h1>
          <p className="max-w-305 text-[16px] leading-6 text-brand-secondary">
            Create site-specific health &amp; safety documents including RAMS,
            risk assessments, COSHH assessments, method statements,
            checklists/forms, and permit templates.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 xl:justify-end">
          <Button
            type="button"
            variant="outline"
            className="h-8.5 rounded-[6px] border-brand-primary bg-white px-4 text-[12px] font-bold text-brand-primary shadow-none hover:bg-brand-bg-main"
          >
            RAMS Credits: {RAMS_CREDITS_REMAINING} remaining
          </Button>
          <Button
            type="button"
            onClick={handleCreateNewDocument}
            className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
          >
            Create New Document
          </Button>
        </div>
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {RAMS_SUMMARY_CARDS.map(({ label, value, icon: Icon, iconColor }) => (
          <article
            key={label}
            className="rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6.5 shadow-[0_1px_0_rgba(10,25,47,0.02)]"
          >
            <div className="flex items-center justify-between">
              <Icon className={cn("size-6", iconColor)} />
            </div>
            <div className="mt-2 space-y-2">
              <p className="text-[14px] leading-[1.6] text-brand-secondary">
                {label}
              </p>
              <p className="text-[24px] font-bold leading-[1.6] text-brand-primary">
                {value}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-[20px] font-bold leading-[1.6] text-brand-primary">
          Choose Document Type
        </h2>

        <div className="grid gap-6 xl:grid-cols-3">
          {PRIMARY_DOCUMENT_TYPE_CARDS.map(
            ({
              title,
              description,
              buttonLabel,
              icon: Icon,
              iconContainerClassName,
              iconClassName,
            }) => (
              <article
                key={title}
                className="flex min-h-70 flex-col justify-between rounded-[12px] border border-[#e3e6ec] bg-white p-6.25"
              >
                <div className="space-y-6">
                  <div
                    className={cn(
                      "flex size-14 items-center justify-center rounded-[8px]",
                      iconContainerClassName,
                    )}
                  >
                    <Icon className={iconClassName} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-[20px] font-bold leading-[1.6] text-brand-primary">
                      {title}
                    </h3>
                    <p className="max-w-[320px] text-[14px] leading-[1.6] text-brand-secondary">
                      {description}
                    </p>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => startBuilding(title)}
                  className="h-8.5 rounded-[6px] border-brand-primary bg-white px-4 text-[12px] font-bold text-brand-primary shadow-none hover:bg-brand-bg-main"
                >
                  {buttonLabel}
                </Button>
              </article>
            ),
          )}
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {SECONDARY_DOCUMENT_TYPE_CARDS.map(
            ({ title, description, buttonLabel, icon: Icon, iconContainerClassName }) => (
              <article
                key={title}
                className="flex min-h-47.5 flex-col justify-between rounded-[12px] border border-[#e3e6ec] bg-white p-6.25"
              >
                <div className="space-y-6">
                  <div
                    className={cn(
                      "flex size-14 items-center justify-center rounded-[8px]",
                      iconContainerClassName,
                    )}
                  >
                    <Icon className="size-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-[20px] font-bold leading-[1.6] text-brand-primary">
                      {title}
                    </h3>
                    <p className="max-w-105 text-[14px] leading-[1.6] text-brand-secondary">
                      {description}
                    </p>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={
                    title === "Continue Draft"
                      ? handleContinueDrafts
                      : handlePreviousDocuments
                  }
                  className="h-8.5 rounded-[6px] border-brand-primary bg-white px-4 text-[12px] font-bold text-brand-primary shadow-none hover:bg-brand-bg-main"
                >
                  {buttonLabel}
                </Button>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="overflow-hidden rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_1px_1px_rgba(15,23,42,0.04)]">
        <div className="border-b border-[#f3f5f8] px-6 py-5">
          <h2 className="text-[20px] font-bold leading-[1.6] text-brand-primary">
            Recent Document Activity
          </h2>
        </div>

        <div className="space-y-4 px-6 py-5">
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.8fr)_repeat(4,minmax(0,0.45fr))]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-brand-secondary" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by name, ID or keyword"
                className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white pl-10 pr-4 text-[12px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
              />
            </div>

            <SelectField
              value={categoryFilter}
              onChange={setCategoryFilter}
              options={categoryOptions}
            />
            <SelectField
              value={typeFilter}
              onChange={setTypeFilter}
              options={typeOptions}
            />
            <SelectField
              value={statusFilter}
              onChange={setStatusFilter}
              options={statusOptions}
            />
            <SelectField
              value={dateRangeFilter}
              onChange={setDateRangeFilter}
              options={dateRangeOptions}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-310">
            <div
              className="grid items-center gap-4 border-b-[1.5px] border-[#f3f5f8] bg-[#d6e9ff] px-6 py-3"
              style={{ gridTemplateColumns: RAMS_TABLE_COLUMN_LAYOUT }}
            >
              <div className="flex justify-center">
                <input
                  type="checkbox"
                  checked={allVisibleSelected}
                  onChange={toggleSelectAll}
                  aria-label="Select all visible RAMS documents"
                  className="size-3.5 rounded border border-[#c5c6cd] accent-brand-primary"
                />
              </div>
              {[
                "Project Name",
                "Site Address",
                "Document Type",
                "Status",
                "Created Date",
                "Version",
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

            {filteredActivity.map((item, index) => {
              const rowId = `${item.id}-${index}`;

              return (
                <div
                  key={rowId}
                  className="grid items-center gap-4 border-b-[1.5px] border-[#f3f5f8] px-6 transition hover:bg-[#fafbfd]"
                  style={{ gridTemplateColumns: RAMS_TABLE_COLUMN_LAYOUT }}
                >
                  <div className="flex justify-center py-5">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(rowId)}
                      onChange={() => toggleSelection(rowId)}
                      aria-label={`Select ${item.projectName}`}
                      className="size-3.5 rounded border border-[#c5c6cd] accent-brand-primary"
                    />
                  </div>
                  <div className="py-5">
                    <p className="text-[14px] leading-[1.6] text-brand-primary">
                      {item.projectName}
                    </p>
                    <p className="text-[12px] leading-[1.6] text-brand-secondary">
                      ID: {item.id}
                    </p>
                  </div>
                  <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                    {item.siteAddress}
                  </div>
                  <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                    {item.documentType}
                  </div>
                  <div className="py-5">
                    <span
                      className={cn(
                        "inline-flex rounded-[6px] px-2.25 py-0.5 text-[12px] leading-[1.6]",
                        getStatusBadgeClassName(item.status),
                      )}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                    {item.createdDate}
                  </div>
                  <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                    {item.version}
                  </div>
                  <div className="py-5">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handlePreview(item.projectName)}
                        className="flex size-7 items-center justify-center rounded-lg text-[#4f79ff] transition hover:bg-[#eef4ff]"
                        aria-label={`Preview ${item.projectName}`}
                      >
                        <Eye className="size-4.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDownload(item.projectName)}
                        className="flex size-7 items-center justify-center rounded-lg text-[#16a34a] transition hover:bg-[#eefbf2]"
                        aria-label={`Download ${item.projectName}`}
                      >
                        <Download className="size-4.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(item.projectName)}
                        className="flex size-7 items-center justify-center rounded-lg text-[#ef4444] transition hover:bg-[#fff1f2]"
                        aria-label={`Delete ${item.projectName}`}
                      >
                        <Trash2 className="size-4.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredActivity.length === 0 ? (
              <div className="px-6 py-16 text-center text-[14px] text-brand-secondary">
                No RAMS activity matches the current filters.
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
