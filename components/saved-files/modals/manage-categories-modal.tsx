import { useSavedFiles } from "../use-saved-files";
import React from "react";
import {
  Archive,
  CircleAlert,
  FolderInput,
  Pencil,
  Search,
  Trash2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectField } from "../components/select-field";
import {
  CATEGORY_TABLE_COLUMN_LAYOUT,
} from "../types";

export function ManageCategoriesModal({
  state,
}: {
  state: ReturnType<typeof useSavedFiles>;
}) {
  const {
    isManageCategoriesModalOpen,
    manageCategorySearch,
    setManageCategorySearch,
    manageCategoryTypeFilter,
    setManageCategoryTypeFilter,
    manageCategoryStatusFilter,
    setManageCategoryStatusFilter,
    closeManageCategoriesModal,
    handleOpenCategoryModalFromManage,
    manageCategoryTypeOptions,
    manageCategoryStatusOptions,
    managedCategories,
  } = state;

  if (!isManageCategoriesModalOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
        onClick={closeManageCategoriesModal}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="manage-categories-title"
          className="w-full max-w-392.25 max-h-[90vh] overflow-y-auto no-scrollbar rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative flex flex-col gap-6 px-6 py-6">
            <div className="flex items-end justify-between gap-6 border-b border-transparent pb-5 pr-12">
              <div className="space-y-1.5">
                <h2
                  id="manage-categories-title"
                  className="text-[20px] font-bold leading-[1.6] text-brand-primary"
                >
                  Manage My Categories
                </h2>
                <p className="text-[14px] leading-[1.6] text-brand-secondary">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <Button
                type="button"
                onClick={handleOpenCategoryModalFromManage}
                className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
              >
                Add Category
              </Button>
            </div>

            <button
              type="button"
              onClick={closeManageCategoriesModal}
              className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
              aria-label="Close manage categories modal"
            >
              <X className="size-4.5" />
            </button>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 rounded-[12px] p-4 shadow-[0_1px_1px_rgba(0,0,0,0.05)] xl:flex-row xl:items-center xl:justify-between">
                <div className="relative w-full max-w-102">
                  <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-brand-secondary" />
                  <input
                    value={manageCategorySearch}
                    onChange={(event) =>
                      setManageCategorySearch(event.target.value)
                    }
                    placeholder="Search category name..."
                    className="h-9 w-full rounded-[6px] border border-[#e3e6ec] bg-white pl-11 pr-4 text-[14px] text-brand-primary outline-none transition placeholder:text-brand-secondary focus:border-brand-primary"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <SelectField
                    value={manageCategoryTypeFilter}
                    onChange={setManageCategoryTypeFilter}
                    options={manageCategoryTypeOptions}
                    className="w-44.5"
                    selectClassName="h-9 rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-secondary"
                  />
                  <SelectField
                    value={manageCategoryStatusFilter}
                    onChange={setManageCategoryStatusFilter}
                    options={manageCategoryStatusOptions}
                    className="w-36.75"
                    selectClassName="h-9 rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-secondary"
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white">
                <div className="overflow-x-auto">
                  <div className="min-w-259.75">
                    <div
                      className="grid items-center gap-4 border-b-[1.5px] border-[#f3f5f8] bg-[#d6e9ff] px-6 py-2.5"
                      style={{
                        gridTemplateColumns: CATEGORY_TABLE_COLUMN_LAYOUT,
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex w-12 justify-center px-3">
                          <input
                            type="checkbox"
                            aria-label="Select all categories"
                            className="size-3.5 rounded-lg border border-[#c5c6cd] accent-brand-primary"
                          />
                        </div>
                        <span className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                          Category Name
                        </span>
                      </div>
                      {[
                        "Category Type",
                        "Default Project / Location",
                        "Files Saved",
                        "Status",
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

                    {managedCategories.length > 0 ? (
                      managedCategories.map((category) => (
                        <div
                          key={category.id}
                          className="grid items-center gap-4 border-b-[1.5px] border-[#f3f5f8] px-6"
                          style={{
                            gridTemplateColumns: CATEGORY_TABLE_COLUMN_LAYOUT,
                          }}
                        >
                          <div className="flex min-h-15.5 items-center gap-4">
                            <div className="flex w-12 justify-center px-3">
                              <input
                                type="checkbox"
                                aria-label={`Select ${category.name}`}
                                className="size-3.5 rounded-lg border border-[#c5c6cd] accent-brand-primary"
                              />
                            </div>
                            <span className="text-[14px] leading-[1.6] text-brand-primary">
                              {category.name}
                            </span>
                          </div>
                          <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                            {category.type}
                          </div>
                          <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                            {category.projectLocation}
                          </div>
                          <div className="py-5 text-[14px] leading-[1.6] text-brand-secondary">
                            {category.filesSaved}
                          </div>
                          <div className="py-4.5">
                            <span
                              className={cn(
                                "inline-flex rounded-[6px] px-2.25 py-0.5 text-[12px] leading-[1.6] text-white",
                                category.status === "Archived"
                                  ? "bg-[#a3acba]"
                                  : "bg-[#00bc7d]",
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

              <div className="flex items-start gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] px-4.25 py-4.25">
                <CircleAlert className="mt-0.5 size-5 shrink-0 text-brand-primary" />
                <p className="text-[14px] leading-[1.6] text-brand-primary">
                  Deleting a category will unassign all associated files. We
                  recommend archiving categories instead to preserve document
                  historical trails and audit integrity.
                </p>
              </div>
            </div>

            <div className="pt-1">
              <Button
                type="button"
                className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
