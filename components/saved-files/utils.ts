import { SavedFile, TABS } from "./types";

export function filterByTab(file: SavedFile, tab: (typeof TABS)[number]) {
  switch (tab) {
    case "All Files":
      return true;
    case "Generated Documents":
      return file.source === "Builder" || file.source === "Template Copy";
    case "Completed Checklists":
      return file.name.includes("Checklist") || file.category === "Inspection";
    case "Risk Assessments":
      return file.category === "Risk Assessment";
    case "Drafts":
      return false;
    case "Uploaded Files":
      return file.source === "Uploaded";
    case "Purchased Documents":
      return file.source === "Purchased";
    case "Permits":
      return file.category === "Permit";
    case "COSHH":
      return file.category === "COSHH";
    case "Method Statements":
      return file.category === "Method Statement";
    default:
      return true;
  }
}

export function formatLabelCount(count: number) {
  return `${count} ${count === 1 ? "file" : "files"} stored`;
}

export function slugifyCategoryName(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
