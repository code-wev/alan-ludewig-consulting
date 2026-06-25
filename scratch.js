const fs = require('fs');
const path = 'components/saved-files/use-saved-files.ts';
let code = fs.readFileSync(path, 'utf8');

// Remove isManageCategoriesModalOpen state
code = code.replace(/  const \[isManageCategoriesModalOpen, setIsManageCategoriesModalOpen\] =\n    useState\(false\);\n/, '');

// Remove manageCategory states
code = code.replace(/  const \[manageCategorySearch, setManageCategorySearch\] = useState\(""\);\n  const \[manageCategoryTypeFilter, setManageCategoryTypeFilter\] =\n    useState\("All Categories"\);\n  const \[manageCategoryStatusFilter, setManageCategoryStatusFilter\] =\n    useState\("All Status"\);\n/, '');

// Remove isManageCategoriesModalOpen from useEffect condition
code = code.replace(/      !isDeleteFileModalOpen &&\n      !isManageCategoriesModalOpen/g, '      !isDeleteFileModalOpen');

// Remove isManageCategoriesModalOpen from useEffect dependencies
code = code.replace(/    isDeleteFileModalOpen,\n    isManageCategoriesModalOpen,\n/g, '    isDeleteFileModalOpen,\n');

// Remove setIsManageCategoriesModalOpen(false) from handleEscape
code = code.replace(/        setIsManageCategoriesModalOpen\(false\);\n/g, '');

// Remove openManageCategoriesModal and closeManageCategoriesModal
code = code.replace(/  const openManageCategoriesModal = \(\) => {[\s\S]*?};\n\n  const closeManageCategoriesModal = \(\) => {[\s\S]*?};\n\n/g, '');

// Remove handleOpenCategoryModalFromManage
code = code.replace(/  const handleOpenCategoryModalFromManage = \(\) => {[\s\S]*?};\n\n/g, '');

// Remove options and managedCategories derivation
code = code.replace(/  const manageCategoryTypeOptions = \[[\s\S]*?return matchesSearch && matchesType && matchesStatus;\n    }\);\n/g, '');

// Remove from return object
code = code.replace(/    isManageCategoriesModalOpen,\n    setIsManageCategoriesModalOpen,\n/g, '');
code = code.replace(/    manageCategorySearch,\n    setManageCategorySearch,\n    manageCategoryTypeFilter,\n    setManageCategoryTypeFilter,\n    manageCategoryStatusFilter,\n    setManageCategoryStatusFilter,\n/g, '');
code = code.replace(/    openManageCategoriesModal,\n    closeManageCategoriesModal,\n    handleOpenCategoryModalFromManage,\n/g, '');
code = code.replace(/    manageCategoryTypeOptions,\n    manageCategoryStatusOptions,\n    managedCategories,\n/g, '');

fs.writeFileSync(path, code);
