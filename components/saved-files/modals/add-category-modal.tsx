import { useSavedFiles } from "../use-saved-files";
import React from "react";
import {
  Check,
  CircleAlert,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectField } from "../components/select-field";
import {
  CATEGORY_TYPE_OPTIONS,
  DEFAULT_LOCATION_OPTIONS,
  CATEGORY_ICON_OPTIONS,
  CATEGORY_COLOR_OPTIONS,
} from "../types";

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
    newCategoryType,
    setNewCategoryType,
    newCategoryProjectLocation,
    setNewCategoryProjectLocation,
    selectedCategoryIcon,
    setSelectedCategoryIcon,
    selectedCategoryColor,
    setSelectedCategoryColor,
    isDefaultCategory,
    setIsDefaultCategory,
    categoryError,
    setCategoryError,
    closeAddCategoryModal,
    handleCreateCategory,
  } = state;

  if (!isAddCategoryModalOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
        onClick={closeAddCategoryModal}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="add-category-title"
          aria-describedby="add-category-description"
          className="w-full max-w-223.5 rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative flex flex-col gap-6 px-6 py-6 md:px-6 md:py-6">
            <div className="flex min-h-8 items-start pr-12">
              <h2
                id="add-category-title"
                className="text-[20px] font-bold leading-[1.6] text-brand-primary"
              >
                Add New Category
              </h2>
              <p id="add-category-description" className="sr-only">
                Create a personal category for your saved files.
              </p>
            </div>

            <button
              type="button"
              onClick={closeAddCategoryModal}
              className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
              aria-label="Close add category modal"
            >
              <X className="size-4.5" />
            </button>

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
                  if (categoryError) {
                    setCategoryError("");
                  }
                }}
                placeholder="e.g. Monthly Safety Audits"
                className={cn(
                  "h-12.75 w-full rounded-[6px] border-[1.5px] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary",
                  categoryError ? "border-[#d92d20]" : "border-[#e3e6ec]",
                )}
              />
              {categoryError ? (
                <p className="text-[13px] font-medium text-[#b42318]">
                  {categoryError}
                </p>
              ) : null}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="category-type"
                  className="text-[14px] leading-[1.6] text-brand-primary"
                >
                  Category Type
                </label>
                <SelectField
                  id="category-type"
                  value={newCategoryType}
                  onChange={setNewCategoryType}
                  options={[...CATEGORY_TYPE_OPTIONS]}
                  className="w-full"
                  selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="default-project-location"
                  className="text-[14px] leading-[1.6] text-brand-primary"
                >
                  Default Project/Location
                </label>
                <SelectField
                  id="default-project-location"
                  value={newCategoryProjectLocation}
                  onChange={setNewCategoryProjectLocation}
                  options={[...DEFAULT_LOCATION_OPTIONS]}
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
                <div className="grid grid-cols-5 gap-2 sm:w-max">
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
                  Default Project/Location
                </p>
                <div className="flex flex-wrap gap-2">
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
                            ? "ring-2 ring-white ring-offset-2 ring-offset-brand-primary outline-2 outline-brand-primary"
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

            <button
              type="button"
              onClick={() => setIsDefaultCategory((current) => !current)}
              className="flex items-center gap-2 py-2 text-left"
              role="checkbox"
              aria-checked={isDefaultCategory}
            >
              <span
                className={cn(
                  "flex size-5 items-center justify-center rounded-lg border transition",
                  isDefaultCategory
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-[#e3e6ec] bg-white text-transparent",
                )}
              >
                <Check className="size-3.5" />
              </span>
              <span className="text-[14px] leading-[1.6] text-brand-secondary">
                Set this as my default save category
              </span>
            </button>

            <div className="flex items-start gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] px-4.25 py-4.25">
              <CircleAlert className="mt-0.5 size-5 shrink-0 text-brand-primary" />
              <p className="text-[14px] leading-[1.6] text-brand-primary">
                Personal categories are only visible to your account. Global
                organization settings will not be affected by these changes.
              </p>
            </div>

            <div className="pt-1">
              <Button
                type="button"
                onClick={handleCreateCategory}
                className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
              >
                Create Category
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
