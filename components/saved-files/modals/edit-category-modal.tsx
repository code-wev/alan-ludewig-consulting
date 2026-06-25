import { useSavedFiles } from "../use-saved-files";
import React from "react";
import { Check, X, FileBadge2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectField } from "../components/select-field";
import { CATEGORY_ICON_OPTIONS, CATEGORY_COLOR_OPTIONS, FILES } from "../types";

export function EditCategoryModal({
  state,
}: {
  state: ReturnType<typeof useSavedFiles>;
}) {
  const {
    isEditCategoryModalOpen,
    editCategoryTarget,
    editCategoryName,
    setEditCategoryName,
    editCategoryDescription,
    setEditCategoryDescription,
    editCategoryParent,
    setEditCategoryParent,
    editCategoryDefaultFileType,
    setEditCategoryDefaultFileType,
    editCategoryAccessLevel,
    setEditCategoryAccessLevel,
    editCategoryStatus,
    setEditCategoryStatus,
    editCategoryIcon,
    setEditCategoryIcon,
    editCategoryAutoMove,
    setEditCategoryAutoMove,
    editCategoryShowInForms,
    setEditCategoryShowInForms,
    editCategoryAllowSubcategories,
    setEditCategoryAllowSubcategories,
    editCategoryMoveExisting,
    setEditCategoryMoveExisting,
    editCategoryError,
    setEditCategoryError,
    closeEditCategoryModal,
    handleSaveEditedCategory,
  } = state;

  if (!isEditCategoryModalOpen || !editCategoryTarget) return null;

  const currentIconDef =
    CATEGORY_ICON_OPTIONS.find((opt) => opt.id === editCategoryTarget.icon) ||
    CATEGORY_ICON_OPTIONS[0];
  const CurrentIcon = currentIconDef.icon;

  const filesCount = FILES.filter(
    (file) => file.category === editCategoryTarget.name,
  ).length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
      onClick={closeEditCategoryModal}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-category-title"
        className="no-scrollbar max-h-[90vh] w-full max-w-211.5 overflow-y-auto rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <h2
              id="edit-category-title"
              className="text-[20px] font-bold leading-[1.6] text-brand-primary"
            >
              Edit Saved File
            </h2>
            <button
              type="button"
              onClick={closeEditCategoryModal}
              className="flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
              aria-label="Close edit category modal"
            >
              <X className="size-4.5" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 border border-[#e3e6ec] bg-[#f3f5f8] p-4.25">
              <div
                className="flex size-12 shrink-0 items-center justify-center rounded-xs"
                style={{
                  backgroundColor:
                    editCategoryTarget.color || CATEGORY_COLOR_OPTIONS[0],
                }}
              >
                <CurrentIcon className="size-5 text-white" />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <span className="text-[16px] font-bold leading-[1.6] text-brand-primary">
                  {editCategoryTarget.name}
                </span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-[14px] leading-[1.6] text-brand-secondary">
                    <FileBadge2 className="size-3.5" />
                    <span>{filesCount} Files Total</span>
                  </div>
                  <div className="flex items-center gap-1 text-[14px] leading-[1.6] text-brand-secondary">
                    <Clock className="size-3.5" />
                    <span>Updated 2 hours ago</span>
                  </div>
                </div>
              </div>
              <span
                className={cn(
                  "shrink-0 rounded-[6px] px-2.25 py-0.5 text-[12px] leading-[1.6] text-white",
                  editCategoryTarget.status === "Archived"
                    ? "bg-[#a3acba]"
                    : "bg-[#00bc7d]",
                )}
              >
                {editCategoryTarget.status || "Active"}
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="edit-category-name"
                  className="text-[14px] leading-[1.6] text-brand-primary"
                >
                  Name
                </label>
                <input
                  id="edit-category-name"
                  value={editCategoryName}
                  onChange={(event) => {
                    setEditCategoryName(event.target.value);
                    if (editCategoryError) setEditCategoryError("");
                  }}
                  placeholder="e.g. Monthly Safety Audits"
                  className={cn(
                    "h-12.75 w-full rounded-[6px] border-[1.5px] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary",
                    editCategoryError ? "border-[#d92d20]" : "border-[#e3e6ec]",
                  )}
                />
                {editCategoryError && (
                  <p className="text-[13px] font-medium text-[#b42318]">
                    {editCategoryError}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-[1.6] text-brand-primary">
                  Parent Category
                </label>
                <SelectField
                  id="edit-parent-category"
                  value={editCategoryParent}
                  onChange={setEditCategoryParent}
                  options={[
                    "None",
                    "Main Portal",
                    "Site Inspections",
                    "Daily Logs",
                    "Safety Checklists",
                    "Risk Assessments",
                  ]}
                  className="w-full"
                  selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="edit-category-description"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Description
              </label>
              <textarea
                id="edit-category-description"
                value={editCategoryDescription}
                onChange={(event) =>
                  setEditCategoryDescription(event.target.value)
                }
                placeholder="Brief overview of the scope and safety requirements..."
                rows={3}
                className="min-h-19.5 w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-[1.6] text-brand-primary">
                  Default File Type
                </label>
                <SelectField
                  id="edit-default-file-type"
                  value={editCategoryDefaultFileType}
                  onChange={setEditCategoryDefaultFileType}
                  options={[
                    "General Document",
                    "PDF Document",
                    "Safety Policy",
                    "Inspection Form",
                    "Training Record",
                    "RAMS",
                  ]}
                  className="w-full"
                  selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-[1.6] text-brand-primary">
                  Access Level
                </label>
                <SelectField
                  id="edit-access-level"
                  value={editCategoryAccessLevel}
                  onChange={setEditCategoryAccessLevel}
                  options={[
                    "Team (Department Wide)",
                    "All Team Members",
                    "Company Wide",
                    "Private",
                  ]}
                  className="w-full"
                  selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] leading-[1.6] text-brand-primary">
                  Status
                </label>
                <SelectField
                  id="edit-status"
                  value={editCategoryStatus}
                  onChange={setEditCategoryStatus}
                  options={["Active", "Archived"]}
                  className="w-full"
                  selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                />
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-[14px] leading-[1.6] text-brand-primary">
                  Colour/Icon Theme
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex size-12.75 shrink-0 items-center justify-center rounded-[6px] bg-brand-primary border border-[#e3e6ec]">
                    <CurrentIcon className="size-5 text-white" />
                  </div>
                  <SelectField
                    id="edit-icon-theme"
                    value={editCategoryIcon}
                    onChange={setEditCategoryIcon}
                    options={CATEGORY_ICON_OPTIONS.map((opt) => opt.id)}
                    className="flex-1"
                    selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[14px] leading-[1.6] text-brand-primary">
                Status
              </p>
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setEditCategoryAutoMove(!editCategoryAutoMove)}
                  className="flex items-center gap-2 py-1.5 text-left"
                  role="checkbox"
                  aria-checked={editCategoryAutoMove}
                >
                  <div
                    className={cn(
                      "flex size-5 shrink-0 items-center justify-center rounded-lg border",
                      editCategoryAutoMove
                        ? "border-brand-primary bg-brand-primary"
                        : "border-[#e3e6ec] bg-white",
                    )}
                  >
                    {editCategoryAutoMove && (
                      <Check className="size-3.5 text-white" />
                    )}
                  </div>
                  <span className="text-[14px] leading-[1.6] text-brand-secondary">
                    Auto-move matching file names to this category
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setEditCategoryShowInForms(!editCategoryShowInForms)
                  }
                  className="flex items-center gap-2 py-1.5 text-left"
                  role="checkbox"
                  aria-checked={editCategoryShowInForms}
                >
                  <div
                    className={cn(
                      "flex size-5 shrink-0 items-center justify-center rounded-lg border",
                      editCategoryShowInForms
                        ? "border-brand-primary bg-brand-primary"
                        : "border-[#e3e6ec] bg-white",
                    )}
                  >
                    {editCategoryShowInForms && (
                      <Check className="size-3.5 text-white" />
                    )}
                  </div>
                  <span className="text-[14px] leading-[1.6] text-brand-secondary">
                    Show this category in mobile inspection forms
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setEditCategoryAllowSubcategories(
                      !editCategoryAllowSubcategories,
                    )
                  }
                  className="flex items-center gap-2 py-1.5 text-left"
                  role="checkbox"
                  aria-checked={editCategoryAllowSubcategories}
                >
                  <div
                    className={cn(
                      "flex size-5 shrink-0 items-center justify-center rounded-lg border",
                      editCategoryAllowSubcategories
                        ? "border-brand-primary bg-brand-primary"
                        : "border-[#e3e6ec] bg-white",
                    )}
                  >
                    {editCategoryAllowSubcategories && (
                      <Check className="size-3.5 text-white" />
                    )}
                  </div>
                  <span className="text-[14px] leading-[1.6] text-brand-secondary">
                    Allow team members to create sub-categories
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between border border-[#e3e6ec] bg-[#f3f5f8] p-4.25">
              <div className="flex items-center gap-3">
                <FileBadge2 className="size-5 text-brand-primary" />
                <span className="text-[16px] font-bold leading-[1.6] text-[#191c1f]">
                  Move Existing Files
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  role="switch"
                  aria-checked={editCategoryMoveExisting}
                  onClick={() =>
                    setEditCategoryMoveExisting(!editCategoryMoveExisting)
                  }
                  className={cn(
                    "relative h-6 w-11 rounded-full transition-colors",
                    editCategoryMoveExisting ? "bg-brand-primary" : "bg-[#c5c6cd]",
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-0.5 top-0.5 size-5 rounded-full bg-white transition-transform",
                      editCategoryMoveExisting ? "translate-x-5" : "translate-x-0",
                    )}
                  />
                </button>
                <span className="text-[12px] font-bold leading-[1.6] text-brand-primary">
                  {editCategoryMoveExisting ? "Enable" : "Disable"}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="button"
                onClick={handleSaveEditedCategory}
                className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
