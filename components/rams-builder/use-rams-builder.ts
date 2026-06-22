'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';
import {
  PRIMARY_DOCUMENT_TYPE_CARDS,
  RAMS_ACTIVITY_CATEGORY_OPTIONS,
  RAMS_ACTIVITY_DATE_RANGE_OPTIONS,
  RAMS_ACTIVITY_STATUS_OPTIONS,
  RAMS_ACTIVITY_TYPE_OPTIONS,
  RAMS_RECENT_ACTIVITY,
} from './types';

const documentTypeCategoryMap: Record<string, string> = {
  'Structural Masonry': 'RAMS',
  'Roofing Works': 'RAMS',
  'Interior Strip-Out': 'Method Statement',
  Groundworks: 'Risk Assessment',
  'Permit to Work': 'Permit Template',
};

export function useRamsBuilder() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [dateRangeFilter, setDateRangeFilter] = useState('Date Range');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filteredActivity = useMemo(() => {
    return RAMS_RECENT_ACTIVITY.filter((item) => {
      const matchesSearch =
        searchTerm.trim().length === 0 ||
        `${item.projectName} ${item.id} ${item.siteAddress} ${item.documentType}`
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase());

      const derivedCategory = documentTypeCategoryMap[item.documentType] ?? 'RAMS';

      const matchesCategory =
        categoryFilter === 'All Categories' || derivedCategory === categoryFilter;
      const matchesType = typeFilter === 'All Types' || item.documentType === typeFilter;
      const matchesStatus = statusFilter === 'All Status' || item.status === statusFilter;
      const matchesDateRange = dateRangeFilter === 'Date Range' || true;

      return matchesSearch && matchesCategory && matchesType && matchesStatus && matchesDateRange;
    });
  }, [searchTerm, categoryFilter, typeFilter, statusFilter, dateRangeFilter]);

  const allVisibleSelected =
    filteredActivity.length > 0 && filteredActivity.every((item) => selectedIds.includes(item.id));

  const toggleSelection = (activityId: string) => {
    setSelectedIds((current) =>
      current.includes(activityId)
        ? current.filter((id) => id !== activityId)
        : [...current, activityId],
    );
  };

  const toggleSelectAll = () => {
    if (allVisibleSelected) {
      setSelectedIds((current) =>
        current.filter((id) => !filteredActivity.some((item) => item.id === id)),
      );
      return;
    }

    const nextSelection = new Set(selectedIds);
    filteredActivity.forEach((item, index) => nextSelection.add(`${item.id}-${index}`));
    setSelectedIds(Array.from(nextSelection));
  };

  const startBuilding = (title: (typeof PRIMARY_DOCUMENT_TYPE_CARDS)[number]['title']) => {
    if (title === 'Permit Template') {
      router.push('/rams-builder/permit-template');
      return;
    }
    if (title === 'COSHH Risk Assessment') {
      router.push('/rams-builder/coshh-risk-assessment');
      return;
    }
    if (title === "Risk Assessment") {
      router.push("/rams-builder/risk-assessment");
      return;
    }

    toast.message(`${title} builder flow coming next.`, {
      description:
        'This landing page is in place. The multi-step document builder can be wired from here.',
    });
  };

  const handleCreateNewDocument = () => {
    startBuilding('RAMS');
  };

  const handleContinueDrafts = () => {
    toast.message('Draft recovery flow coming next.', {
      description:
        'This action will route into saved draft documents once the builder steps are connected.',
    });
  };

  const handlePreviousDocuments = () => {
    toast.message('Previous RAMS history is stubbed.', {
      description: 'This action can later open saved documents or My Saved Files history.',
    });
  };

  const handlePreview = (projectName: string) => {
    toast.message(`Preview requested for ${projectName}.`);
  };

  const handleDownload = (projectName: string) => {
    toast.message(`Download requested for ${projectName}.`);
  };

  const handleDelete = (projectName: string) => {
    toast.message(`Delete requested for ${projectName}.`);
  };

  return {
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
    categoryOptions: [...RAMS_ACTIVITY_CATEGORY_OPTIONS],
    typeOptions: [...RAMS_ACTIVITY_TYPE_OPTIONS],
    statusOptions: [...RAMS_ACTIVITY_STATUS_OPTIONS],
    dateRangeOptions: [...RAMS_ACTIVITY_DATE_RANGE_OPTIONS],
  };
}
