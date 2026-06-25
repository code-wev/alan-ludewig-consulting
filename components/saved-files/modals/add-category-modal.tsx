import { useSavedFiles } from "../use-saved-files";
import React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectField } from "../components/select-field";
import { CATEGORY_ICON_OPTIONS, CATEGORY_COLOR_OPTIONS } from "../types";

export function AddCategoryModal({
  state,
}: {
  state: ReturnType<typeof useSavedFiles>;
}) {
  const {
    isAddCategoryModalOpen,
    newCategoryName,
    setNewCategoryName,
    newCategoryDescription,
    setNewCategoryDescription,
    newCategoryParent,
    setNewCategoryParent,
    newCategoryDefaultFileType,
    setNewCategoryDefaultFileType,
    newCategoryAccessLevel,
    setNewCategoryAccessLevel,
    newCategoryStatus,
    setNewCategoryStatus,
    selectedCategoryIcon,
    setSelectedCategoryIcon,
    selectedCategoryColor,
    setSelectedCategoryColor,
    newCategoryAutoMove,
    setNewCategoryAutoMove,
    newCategoryShowInForms,
    setNewCategoryShowInForms,
    categoryError,
    setCategoryError,
    closeAddCategoryModal,
    handleCreateCategory,
  } = state;

  if (!isAddCategoryModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
      onClick={closeAddCategoryModal}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-category-title"
        className="no-scrollbar max-h-[90vh] w-full max-w-223.5 overflow-y-auto rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <h2
              id="add-category-title"
              className="text-[20px] font-bold leading-[1.6] text-brand-primary"
            >
              Add New Category
            </h2>
            <button
              type="button"
              onClick={closeAddCategoryModal}
              className="flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
              aria-label="Close add category modal"
            >
              <X className="size-4.5" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="category-name"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Category Name<span className="text-[#d92d20]">*</span>
              </label>
              <input
                id="category-name"
                value={newCategoryName}
                onChange={(event) => {
                  setNewCategoryName(event.target.value);
                  if (categoryError) setCategoryError("");
                }}
                placeholder="e.g. Monthly Safety Audits"
                className={cn(
                  "h-12.75 w-full rounded-[6px] border-[1.5px] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary",
                  categoryError ? "border-[#d92d20]" : "border-[#e3e6ec]",
                )}
              />
              {categoryError && (
                <p className="text-[13px] font-medium text-[#b42318]">
                  {categoryError}
                </p>
              )}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-[1.6] text-brand-primary">
                  Parent Category
                </label>
                <SelectField
                  id="parent-category"
                  value={newCategoryParent}
                  onChange={setNewCategoryParent}
                  options={[
                    "None",
                    "Site Inspections",
                    "Daily Logs",
                    "Safety Checklists",
                    "Risk Assessments",
                  ]}
                  className="w-full"
                  selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-[1.6] text-brand-primary">
                  Default File Type
                </label>
                <SelectField
                  id="default-file-type"
                  value={newCategoryDefaultFileType}
                  onChange={setNewCategoryDefaultFileType}
                  options={[
                    "General Document",
                    "Safety Policy",
                    "Inspection Form",
                    "Training Record",
                    "RAMS",
                  ]}
                  className="w-full"
                  selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="category-description"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Description (Optional)
              </label>
              <textarea
                id="category-description"
                value={newCategoryDescription}
                onChange={(event) =>
                  setNewCategoryDescription(event.target.value)
                }
                placeholder="Brief overview of the scope and safety requirements..."
                rows={3}
                className="min-h-19.5 w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <p className="text-[14px] leading-[1.6] text-brand-primary">
                  Category Type
                </p>
                <div className="flex flex-wrap gap-2 rounded-[6px]">
                  {CATEGORY_ICON_OPTIONS.map(({ id, icon: Icon, label }) => {
                    const isSelected = selectedCategoryIcon === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setSelectedCategoryIcon(id)}
                        aria-label={`Select ${label} icon`}
                        aria-pressed={isSelected}
                        className={cn(
                          "flex size-10 items-center justify-center rounded-xs border transition",
                          isSelected
                            ? "border-brand-primary bg-brand-primary text-white"
                            : "border-[#e3e6ec] bg-white text-brand-primary hover:border-[#c7d0e1]",
                        )}
                      >
                        <Icon className="size-4.25" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[14px] leading-[1.6] text-brand-primary">
                  Category Appearance
                </p>
                <div className="flex h-8 flex-wrap items-center gap-2">
                  {CATEGORY_COLOR_OPTIONS.map((color) => {
                    const isSelected = selectedCategoryColor === color;
                    return (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedCategoryColor(color)}
                        aria-label={`Select category color ${color}`}
                        aria-pressed={isSelected}
                        className={cn(
                          "relative flex size-8 items-center justify-center rounded-[6px]",
                          isSelected
                            ? "outline-2 outline-brand-primary ring-2 ring-white ring-offset-2 ring-offset-brand-primary"
                            : "",
                        )}
                        style={{ backgroundColor: color }}
                      >
                        <span className="sr-only">{color}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-[1.6] text-brand-primary">
                  Access Level
                </label>
                <SelectField
                  id="access-level"
                  value={newCategoryAccessLevel}
                  onChange={setNewCategoryAccessLevel}
                  options={[
                    "Team (Department Wide)",
                    "Company Wide",
                    "Private",
                  ]}
                  className="w-full"
                  selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-[1.6] text-brand-primary">
                  Status
                </label>
                <SelectField
                  id="status"
                  value={newCategoryStatus}
                  onChange={setNewCategoryStatus}
                  options={["Active", "Archived"]}
                  className="w-full"
                  selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => setNewCategoryAutoMove(!newCategoryAutoMove)}
                className="group flex items-center gap-2 py-5 text-left"
                role="checkbox"
                aria-checked={newCategoryAutoMove}
              >
                <span
                  className={cn(
                    "flex size-5 shrink-0 items-center justify-center rounded-lg border transition",
                    newCategoryAutoMove
                      ? "border-brand-primary bg-brand-primary text-white"
                      : "border-[#e3e6ec] bg-white text-transparent group-hover:border-[#c7d0e1]",
                  )}
                >
                  <Check className="size-3.5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                    Automatically move matching future documents
                  </span>
                  <span className="text-[14px] leading-[1.6] text-brand-secondary">
                    Rules-based sorting for newly uploaded safety files.
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() =>
                  setNewCategoryShowInForms(!newCategoryShowInForms)
                }
                className="group flex items-center gap-2 py-5 text-left"
                role="checkbox"
                aria-checked={newCategoryShowInForms}
              >
                <span
                  className={cn(
                    "flex size-5 shrink-0 items-center justify-center rounded-lg border transition",
                    newCategoryShowInForms
                      ? "border-brand-primary bg-brand-primary text-white"
                      : "border-[#e3e6ec] bg-white text-transparent group-hover:border-[#c7d0e1]",
                  )}
                >
                  <Check className="size-3.5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold leading-[1.6] text-brand-primary">
                    Show this category in My Forms / Inspections
                  </span>
                  <span className="text-[14px] leading-[1.6] text-brand-secondary">
                    Make visible in the mobile inspection application.
                  </span>
                </div>
              </button>
            </div>

            <div className="pt-2">
              <Button
                type="button"
                onClick={handleCreateCategory}
                className="h-8.5 w-30 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
              >
                Create Category
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
