import { useState, useEffect } from "react";
import {
  FILES,
  INITIAL_CATEGORIES,
  CATEGORY_TYPE_OPTIONS,
  DEFAULT_LOCATION_OPTIONS,
  CATEGORY_ICON_OPTIONS,
  CATEGORY_COLOR_OPTIONS,
  TEMPLATE_COPY_PREVIEW,
  TABS,
  SavedFile,
} from "./types";
import { filterByTab, slugifyCategoryName } from "./utils";

export function useSavedFiles() {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]>("All Files");
  const [searchTerm, setSearchTerm] = useState("");
  const [projectFilter, setProjectFilter] = useState("All Types");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [formatFilter, setFormatFilter] = useState("All Type");
  const [sourceFilter, setSourceFilter] = useState("All Sources");
  const [sortFilter, setSortFilter] = useState("Sort: Most Recent");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isSaveTemplateModalOpen, setIsSaveTemplateModalOpen] = useState(false);
  const [isMoveFileModalOpen, setIsMoveFileModalOpen] = useState(false);
  const [isEditFileModalOpen, setIsEditFileModalOpen] = useState(false);
  const [isDeleteFileModalOpen, setIsDeleteFileModalOpen] = useState(false);
  const [isManageCategoriesModalOpen, setIsManageCategoriesModalOpen] =
    useState(false);
  const [moveFileTarget, setMoveFileTarget] = useState<SavedFile | null>(null);
  const [editFileTarget, setEditFileTarget] = useState<SavedFile | null>(null);
  const [deleteFileTarget, setDeleteFileTarget] = useState<SavedFile | null>(
    null,
  );
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryDescription, setNewCategoryDescription] = useState("");
  const [newCategoryType, setNewCategoryType] = useState<string>(
    CATEGORY_TYPE_OPTIONS[0],
  );
  const [newCategoryProjectLocation, setNewCategoryProjectLocation] =
    useState<string>(DEFAULT_LOCATION_OPTIONS[0]);
  const [selectedCategoryIcon, setSelectedCategoryIcon] = useState<string>(
    CATEGORY_ICON_OPTIONS[0].id,
  );
  const [selectedCategoryColor, setSelectedCategoryColor] = useState<string>(
    CATEGORY_COLOR_OPTIONS[0],
  );
  const [isDefaultCategory, setIsDefaultCategory] = useState(false);
  const [categoryError, setCategoryError] = useState("");
  const [saveTemplateCategory, setSaveTemplateCategory] =
    useState("Select category");
  const [saveTemplateProjectLocation, setSaveTemplateProjectLocation] =
    useState<string>(TEMPLATE_COPY_PREVIEW.projectLocation);
  const [saveTemplateNotes, setSaveTemplateNotes] = useState("");
  const [notifyOnDocumentUpdate, setNotifyOnDocumentUpdate] = useState(false);
  const [saveLatestVersionByDefault, setSaveLatestVersionByDefault] =
    useState(false);
  const [saveTemplateError, setSaveTemplateError] = useState("");
  const [
    returnToSaveTemplateAfterCategory,
    setReturnToSaveTemplateAfterCategory,
  ] = useState(false);
  const [moveFileCategory, setMoveFileCategory] = useState("");
  const [moveFileProjectLocation, setMoveFileProjectLocation] = useState("");
  const [moveFileNote, setMoveFileNote] = useState("");
  const [moveFileError, setMoveFileError] = useState("");
  const [editFileName, setEditFileName] = useState("");
  const [editFileProjectLocation, setEditFileProjectLocation] = useState("");
  const [editFileCategory, setEditFileCategory] = useState("");
  const [editFileStatus, setEditFileStatus] = useState("Active");
  const [editFileNotes, setEditFileNotes] = useState("");
  const [editNotifyOnUpdate, setEditNotifyOnUpdate] = useState(false);
  const [editKeepLatestVersion, setEditKeepLatestVersion] = useState(false);
  const [editFileError, setEditFileError] = useState("");
  const [confirmDeleteFile, setConfirmDeleteFile] = useState(false);
  const [deleteFileError, setDeleteFileError] = useState("");
  const [manageCategorySearch, setManageCategorySearch] = useState("");
  const [manageCategoryTypeFilter, setManageCategoryTypeFilter] =
    useState("All Categories");
  const [manageCategoryStatusFilter, setManageCategoryStatusFilter] =
    useState("All Status");

  useEffect(() => {
    if (
      !isAddCategoryModalOpen &&
      !isSaveTemplateModalOpen &&
      !isMoveFileModalOpen &&
      !isEditFileModalOpen &&
      !isDeleteFileModalOpen &&
      !isManageCategoriesModalOpen
    ) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAddCategoryModalOpen(false);
        setIsSaveTemplateModalOpen(false);
        setIsMoveFileModalOpen(false);
        setIsEditFileModalOpen(false);
        setIsDeleteFileModalOpen(false);
        setIsManageCategoriesModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [
    isAddCategoryModalOpen,
    isSaveTemplateModalOpen,
    isMoveFileModalOpen,
    isEditFileModalOpen,
    isDeleteFileModalOpen,
    isManageCategoriesModalOpen,
  ]);

  const filteredFiles = FILES.filter((file) => {
    const matchesTab = filterByTab(file, activeTab);
    const matchesSearch =
      searchTerm.trim().length === 0 ||
      `${file.name} ${file.project} ${file.category} ${file.source}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesProject =
      projectFilter === "All Types" || file.project === projectFilter;
    const matchesCategory =
      categoryFilter === "All Categories" || file.category === categoryFilter;
    const matchesFormat =
      formatFilter === "All Type" || file.format === formatFilter;
    const matchesSource =
      sourceFilter === "All Sources" || file.source === sourceFilter;

    return (
      matchesTab &&
      matchesSearch &&
      matchesProject &&
      matchesCategory &&
      matchesFormat &&
      matchesSource
    );
  }).sort((left, right) => {
    if (sortFilter === "Sort: Oldest First") {
      return (
        new Date(left.dateSaved).getTime() - new Date(right.dateSaved).getTime()
      );
    }

    if (sortFilter === "Sort: Name A-Z") {
      return left.name.localeCompare(right.name);
    }

    return (
      new Date(right.dateSaved).getTime() - new Date(left.dateSaved).getTime()
    );
  });

  const allVisibleSelected =
    filteredFiles.length > 0 &&
    filteredFiles.every((file) => selectedIds.includes(file.id));

  const toggleSelection = (fileId: string) => {
    setSelectedIds((current) =>
      current.includes(fileId)
        ? current.filter((id) => id !== fileId)
        : [...current, fileId],
    );
  };

  const toggleSelectAll = () => {
    if (allVisibleSelected) {
      setSelectedIds((current) =>
        current.filter((id) => !filteredFiles.some((file) => file.id === id)),
      );
      return;
    }

    const nextSelection = new Set(selectedIds);
    filteredFiles.forEach((file) => nextSelection.add(file.id));
    setSelectedIds(Array.from(nextSelection));
  };

  const openAddCategoryModal = () => {
    setCategoryError("");
    setNewCategoryName("");
    setNewCategoryDescription("");
    setNewCategoryType(CATEGORY_TYPE_OPTIONS[0]);
    setNewCategoryProjectLocation(DEFAULT_LOCATION_OPTIONS[0]);
    setSelectedCategoryIcon(CATEGORY_ICON_OPTIONS[0].id);
    setSelectedCategoryColor(CATEGORY_COLOR_OPTIONS[0]);
    setIsDefaultCategory(false);
    setIsAddCategoryModalOpen(true);
  };

  const openSaveTemplateModal = () => {
    setSaveTemplateCategory("Select category");
    setSaveTemplateProjectLocation(TEMPLATE_COPY_PREVIEW.projectLocation);
    setSaveTemplateNotes("");
    setNotifyOnDocumentUpdate(false);
    setSaveLatestVersionByDefault(false);
    setSaveTemplateError("");
    setIsSaveTemplateModalOpen(true);
  };

  const closeAddCategoryModal = () => {
    setIsAddCategoryModalOpen(false);
    setCategoryError("");
    setReturnToSaveTemplateAfterCategory(false);
  };

  const closeSaveTemplateModal = () => {
    setIsSaveTemplateModalOpen(false);
    setSaveTemplateError("");
  };

  const openMoveFileModal = (file: SavedFile) => {
    setMoveFileTarget(file);
    setMoveFileCategory(file.category);
    setMoveFileProjectLocation(file.project);
    setMoveFileNote("");
    setMoveFileError("");
    setIsMoveFileModalOpen(true);
  };

  const closeMoveFileModal = () => {
    setIsMoveFileModalOpen(false);
    setMoveFileError("");
    setMoveFileTarget(null);
  };

  const openEditFileModal = (file: SavedFile) => {
    setEditFileTarget(file);
    setEditFileName(file.name);
    setEditFileProjectLocation(file.project);
    setEditFileCategory(file.category);
    setEditFileStatus("Active");
    setEditFileNotes("");
    setEditNotifyOnUpdate(false);
    setEditKeepLatestVersion(false);
    setEditFileError("");
    setIsEditFileModalOpen(true);
  };

  const closeEditFileModal = () => {
    setIsEditFileModalOpen(false);
    setEditFileError("");
    setEditFileTarget(null);
  };

  const openDeleteFileModal = (file: SavedFile) => {
    setDeleteFileTarget(file);
    setConfirmDeleteFile(false);
    setDeleteFileError("");
    setIsDeleteFileModalOpen(true);
  };

  const closeDeleteFileModal = () => {
    setIsDeleteFileModalOpen(false);
    setConfirmDeleteFile(false);
    setDeleteFileError("");
    setDeleteFileTarget(null);
  };

  const openManageCategoriesModal = () => {
    setManageCategorySearch("");
    setManageCategoryTypeFilter("All Categories");
    setManageCategoryStatusFilter("All Status");
    setIsManageCategoriesModalOpen(true);
  };

  const closeManageCategoriesModal = () => {
    setIsManageCategoriesModalOpen(false);
  };

  const handleOpenCategoryModalFromManage = () => {
    closeManageCategoriesModal();
    openAddCategoryModal();
  };

  const handleOpenCategoryModalFromSaveTemplate = () => {
    setReturnToSaveTemplateAfterCategory(true);
    closeSaveTemplateModal();
    openAddCategoryModal();
  };

  const handleCreateCategory = () => {
    const trimmedName = newCategoryName.trim();
    const trimmedDescription = newCategoryDescription.trim();

    if (!trimmedName) {
      setCategoryError("Category name is required.");
      return;
    }

    const duplicateCategory = categories.some(
      (category) => category.name.toLowerCase() === trimmedName.toLowerCase(),
    );

    if (duplicateCategory) {
      setCategoryError("This category already exists.");
      return;
    }

    setCategories((current) => [
      ...current,
      {
        id:
          slugifyCategoryName(trimmedName) || `category-${current.length + 1}`,
        name: trimmedName,
        description: trimmedDescription,
        type: newCategoryType,
        projectLocation: newCategoryProjectLocation,
        icon: selectedCategoryIcon,
        color: selectedCategoryColor,
        isDefault: isDefaultCategory,
      },
    ]);
    setCategoryFilter(trimmedName);
    if (returnToSaveTemplateAfterCategory) {
      setSaveTemplateCategory(trimmedName);
      setSaveTemplateError("");
      setIsSaveTemplateModalOpen(true);
      setReturnToSaveTemplateAfterCategory(false);
    }
    closeAddCategoryModal();
  };

  const handleSaveTemplateCopy = () => {
    if (saveTemplateCategory === "Select category") {
      setSaveTemplateError("Please select a category before saving.");
      return;
    }

    closeSaveTemplateModal();
  };

  const handleMoveFile = () => {
    if (!moveFileCategory) {
      setMoveFileError("Please select a category before moving this file.");
      return;
    }

    closeMoveFileModal();
  };

  const handleSaveEditedFile = () => {
    if (!editFileName.trim()) {
      setEditFileError("File name is required.");
      return;
    }

    closeEditFileModal();
  };

  const handleDeleteFile = () => {
    if (!confirmDeleteFile) {
      setDeleteFileError(
        "Please confirm that you understand this action cannot be undone.",
      );
      return;
    }

    closeDeleteFileModal();
  };

  const projectOptions = [
    "All Types",
    ...Array.from(new Set(FILES.map((file) => file.project))),
  ];
  const categoryOptions = [
    "All Categories",
    ...categories.map((category) => category.name),
  ];
  const formatOptions = [
    "All Type",
    ...Array.from(new Set(FILES.map((file) => file.format))),
  ];
  const sourceOptions = [
    "All Sources",
    ...Array.from(new Set(FILES.map((file) => file.source))),
  ];
  const sortOptions = [
    "Sort: Most Recent",
    "Sort: Oldest First",
    "Sort: Name A-Z",
  ];
  const manageCategoryTypeOptions = [
    "All Categories",
    ...Array.from(
      new Set(
        categories.map((category) => category.type ?? "General Documents"),
      ),
    ),
  ];
  const manageCategoryStatusOptions = ["All Status", "Active", "Archived"];
  const managedCategories = categories
    .map((category, index) => ({
      ...category,
      type:
        category.type ??
        ["Regulatory", "Internal", "Vendor", "Operational"][index % 4],
      projectLocation:
        category.projectLocation ??
        ["Global Standard", "London HQ", "Fleet Management", "Compliance Team"][
          index % 4
        ],
      filesSaved: FILES.filter((file) => file.category === category.name)
        .length,
      status: category.status ?? (index % 4 === 3 ? "Archived" : "Active"),
    }))
    .filter((category) => {
      const matchesSearch =
        manageCategorySearch.trim().length === 0 ||
        category.name
          .toLowerCase()
          .includes(manageCategorySearch.trim().toLowerCase());
      const matchesType =
        manageCategoryTypeFilter === "All Categories" ||
        category.type === manageCategoryTypeFilter;
      const matchesStatus =
        manageCategoryStatusFilter === "All Status" ||
        category.status === manageCategoryStatusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });

  return {
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
    setSelectedIds,
    categories,
    setCategories,
    isAddCategoryModalOpen,
    setIsAddCategoryModalOpen,
    isSaveTemplateModalOpen,
    setIsSaveTemplateModalOpen,
    isMoveFileModalOpen,
    setIsMoveFileModalOpen,
    isEditFileModalOpen,
    setIsEditFileModalOpen,
    isDeleteFileModalOpen,
    setIsDeleteFileModalOpen,
    isManageCategoriesModalOpen,
    setIsManageCategoriesModalOpen,
    moveFileTarget,
    setMoveFileTarget,
    editFileTarget,
    setEditFileTarget,
    deleteFileTarget,
    setDeleteFileTarget,
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
    saveTemplateCategory,
    setSaveTemplateCategory,
    saveTemplateProjectLocation,
    setSaveTemplateProjectLocation,
    saveTemplateNotes,
    setSaveTemplateNotes,
    notifyOnDocumentUpdate,
    setNotifyOnDocumentUpdate,
    saveLatestVersionByDefault,
    setSaveLatestVersionByDefault,
    saveTemplateError,
    setSaveTemplateError,
    returnToSaveTemplateAfterCategory,
    setReturnToSaveTemplateAfterCategory,
    moveFileCategory,
    setMoveFileCategory,
    moveFileProjectLocation,
    setMoveFileProjectLocation,
    moveFileNote,
    setMoveFileNote,
    moveFileError,
    setMoveFileError,
    editFileName,
    setEditFileName,
    editFileProjectLocation,
    setEditFileProjectLocation,
    editFileCategory,
    setEditFileCategory,
    editFileStatus,
    setEditFileStatus,
    editFileNotes,
    setEditFileNotes,
    editNotifyOnUpdate,
    setEditNotifyOnUpdate,
    editKeepLatestVersion,
    setEditKeepLatestVersion,
    editFileError,
    setEditFileError,
    confirmDeleteFile,
    setConfirmDeleteFile,
    deleteFileError,
    setDeleteFileError,
    manageCategorySearch,
    setManageCategorySearch,
    manageCategoryTypeFilter,
    setManageCategoryTypeFilter,
    manageCategoryStatusFilter,
    setManageCategoryStatusFilter,
    filteredFiles,
    allVisibleSelected,
    toggleSelection,
    toggleSelectAll,
    openAddCategoryModal,
    openSaveTemplateModal,
    closeAddCategoryModal,
    closeSaveTemplateModal,
    openMoveFileModal,
    closeMoveFileModal,
    openEditFileModal,
    closeEditFileModal,
    openDeleteFileModal,
    closeDeleteFileModal,
    openManageCategoriesModal,
    closeManageCategoriesModal,
    handleOpenCategoryModalFromManage,
    handleOpenCategoryModalFromSaveTemplate,
    handleCreateCategory,
    handleSaveTemplateCopy,
    handleMoveFile,
    handleSaveEditedFile,
    handleDeleteFile,
    projectOptions,
    categoryOptions,
    formatOptions,
    sourceOptions,
    sortOptions,
    manageCategoryTypeOptions,
    manageCategoryStatusOptions,
    managedCategories,
  };
}
