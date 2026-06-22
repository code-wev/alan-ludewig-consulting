"use client";

import { useRef } from "react";
import { Upload, X, FileText, Image as ImageIcon, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type RiskAssessmentJobDetails } from "./types";

interface StepJobDetailsProps {
  jobDetails: RiskAssessmentJobDetails;
  onFieldChange: (field: keyof RiskAssessmentJobDetails, value: any) => void;
  onSaveDraft: () => void;
  onNextStep: () => void;
}

export function StepJobDetails({
  jobDetails,
  onFieldChange,
  onSaveDraft,
  onNextStep,
}: StepJobDetailsProps) {
  const logoInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const docInputRef = useRef<HTMLInputElement>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        onFieldChange("companyLogoUrl", uploadEvent.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const nextImages = [...jobDetails.uploadedSiteImages, uploadEvent.target?.result as string];
        onFieldChange("uploadedSiteImages", nextImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDocUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const nextDocs = [
        ...jobDetails.uploadedSupportingDocs,
        { name: file.name, size: `${(file.size / (1024 * 1024)).toFixed(2)} MB` },
      ];
      onFieldChange("uploadedSupportingDocs", nextDocs);
    }
  };

  const removeImage = (index: number) => {
    const nextImages = jobDetails.uploadedSiteImages.filter((_, i) => i !== index);
    onFieldChange("uploadedSiteImages", nextImages);
  };

  const removeDoc = (index: number) => {
    const nextDocs = jobDetails.uploadedSupportingDocs.filter((_, i) => i !== index);
    onFieldChange("uploadedSupportingDocs", nextDocs);
  };

  return (
    <div className="space-y-8 font-sans w-full">
      {/* Step Header */}
      <div className="space-y-1">
        <h2 className="text-[20px] font-bold text-brand-primary leading-[1.6]">
          Step 1 — Job Details
        </h2>
        <p className="text-[14px] text-brand-secondary leading-[1.6]">
          Add the company, project, and site details for this RAMS document.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        {/* Left Column: Company & Branding */}
        <section className="xl:col-span-1 rounded-[12px] border border-[#e3e6ec] bg-white p-6 space-y-6">
          <h3 className="text-[16px] font-bold text-brand-primary">Company &amp; Branding</h3>

          {/* Logo Uploader */}
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-brand-primary block">
              Upload Company Logo
            </label>
            <input
              type="file"
              ref={logoInputRef}
              onChange={handleLogoUpload}
              accept="image/*"
              className="hidden"
            />
            {jobDetails.companyLogoUrl ? (
              <div className="relative w-full h-[120px] rounded-lg border border-[#e3e6ec] bg-[#fafbfd] flex items-center justify-center p-4">
                <img
                  src={jobDetails.companyLogoUrl}
                  alt="Company Logo Preview"
                  className="max-h-full max-w-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => onFieldChange("companyLogoUrl", null)}
                  className="absolute top-2 right-2 p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                >
                  <X className="size-4" />
                </button>
              </div>
            ) : (
              <div
                onClick={() => logoInputRef.current?.click()}
                className="w-full h-[120px] rounded-lg border-2 border-dashed border-[#c5c6cd] hover:border-brand-primary bg-[#fafbfd] cursor-pointer flex flex-col items-center justify-center gap-2 p-4 transition-all"
              >
                <Upload className="size-6 text-brand-secondary" />
                <span className="text-[14px] font-medium text-brand-primary">Drag &amp; drop logo here</span>
                <span className="text-[11px] text-brand-secondary">PNG, JPG up to 5MB</span>
              </div>
            )}
          </div>

          {/* Company Fields */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Company Name
              </label>
              <input
                type="text"
                value={jobDetails.companyName}
                onChange={(e) => onFieldChange("companyName", e.target.value)}
                placeholder="enter your company name"
                className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Company Address
              </label>
              <textarea
                value={jobDetails.companyAddress}
                onChange={(e) => onFieldChange("companyAddress", e.target.value)}
                placeholder="enter your company address"
                rows={3}
                className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary resize-none"
              />
            </div>
          </div>
        </section>

        {/* Right Column: Project & Contact Details */}
        <section className="xl:col-span-2 rounded-[12px] border border-[#e3e6ec] bg-white p-6 space-y-6">
          <h3 className="text-[16px] font-bold text-brand-primary">Project &amp; Contact Details</h3>

          {/* 2-Column fields */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Contact Name
              </label>
              <input
                type="text"
                value={jobDetails.contactName}
                onChange={(e) => onFieldChange("contactName", e.target.value)}
                placeholder="enter your contact name"
                className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Contact Number
              </label>
              <input
                type="text"
                value={jobDetails.contactNumber}
                onChange={(e) => onFieldChange("contactNumber", e.target.value)}
                placeholder="enter your contact number"
                className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Email Address
              </label>
              <input
                type="email"
                value={jobDetails.emailAddress}
                onChange={(e) => onFieldChange("emailAddress", e.target.value)}
                placeholder="enter your email address"
                className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Project Name
              </label>
              <input
                type="text"
                value={jobDetails.projectName}
                onChange={(e) => onFieldChange("projectName", e.target.value)}
                placeholder="enter your project name"
                className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Project Reference Number
              </label>
              <input
                type="text"
                value={jobDetails.projectRefNumber}
                onChange={(e) => onFieldChange("projectRefNumber", e.target.value)}
                placeholder="enter your project reference number"
                className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Client/Principal Contractor
              </label>
              <input
                type="text"
                value={jobDetails.clientPrincipalContractor}
                onChange={(e) => onFieldChange("clientPrincipalContractor", e.target.value)}
                placeholder="client/principal contractor"
                className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Number of Operatives
              </label>
              <input
                type="text"
                value={jobDetails.numOperatives}
                onChange={(e) => onFieldChange("numOperatives", e.target.value)}
                placeholder="number of operatives"
                className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Planned Start Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={jobDetails.plannedStartDate}
                  onChange={(e) => onFieldChange("plannedStartDate", e.target.value)}
                  className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition focus:border-brand-primary cursor-pointer"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Estimated Duration
              </label>
              <input
                type="text"
                value={jobDetails.estimatedDuration}
                onChange={(e) => onFieldChange("estimatedDuration", e.target.value)}
                placeholder="e.g. 5 Working Days"
                className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-brand-primary block">
                Prepared By
              </label>
              <input
                type="text"
                value={jobDetails.preparedBy}
                onChange={(e) => onFieldChange("preparedBy", e.target.value)}
                placeholder="enter name"
                className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
              />
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <label className="text-[12px] font-bold text-brand-primary block">
                Approved By
              </label>
              <input
                type="text"
                value={jobDetails.approvedBy}
                onChange={(e) => onFieldChange("approvedBy", e.target.value)}
                placeholder="name"
                className="h-9.5 w-full rounded-[6px] border border-[#d7dce5] bg-white px-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary"
              />
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <label className="text-[12px] font-bold text-brand-primary block">
                Site Address
              </label>
              <textarea
                value={jobDetails.siteAddress}
                onChange={(e) => onFieldChange("siteAddress", e.target.value)}
                placeholder="enter your site address"
                rows={3}
                className="w-full rounded-[6px] border border-[#d7dce5] bg-white p-3 text-[14px] text-brand-primary outline-none transition placeholder:text-[#8a96ab] focus:border-brand-primary resize-none"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Attachments Section */}
      <section className="rounded-[12px] border border-[#e3e6ec] bg-white p-6 space-y-6">
        <div className="space-y-1">
          <h3 className="text-[16px] font-bold text-brand-primary">Documentation &amp; Media</h3>
          <p className="text-[12px] text-brand-secondary">
            Uploaded documents and images may be included in the final RAMS review where relevant.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Image Uploader */}
          <div className="space-y-3">
            <label className="text-[12px] font-bold text-brand-primary block">
              Upload Site Images
            </label>
            <input
              type="file"
              ref={imageInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            
            <div className="grid grid-cols-3 gap-3">
              {jobDetails.uploadedSiteImages.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-lg border border-[#e3e6ec] bg-[#fafbfd] flex items-center justify-center p-1 group"
                >
                  <img
                    src={img}
                    alt={`Site Image ${index + 1}`}
                    className="max-h-full max-w-full object-contain rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 p-0.5 rounded-full bg-red-100 text-red-600 hover:bg-red-200 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <X className="size-3" />
                  </button>
                </div>
              ))}

              <div
                onClick={() => imageInputRef.current?.click()}
                className="aspect-video rounded-lg border-2 border-dashed border-[#c5c6cd] hover:border-brand-primary bg-[#fafbfd] cursor-pointer flex flex-col items-center justify-center gap-1 p-2 transition-all text-center"
              >
                <ImageIcon className="size-5 text-brand-secondary" />
                <span className="text-[11px] font-medium text-brand-primary">Add Image</span>
              </div>
            </div>
          </div>

          {/* Docs Uploader */}
          <div className="space-y-3">
            <label className="text-[12px] font-bold text-brand-primary block">
              Upload Supporting Documents
            </label>
            <input
              type="file"
              ref={docInputRef}
              onChange={handleDocUpload}
              accept=".pdf,.doc,.docx,.txt,.xls,.xlsx"
              className="hidden"
            />

            <div className="space-y-2">
              <div
                onClick={() => docInputRef.current?.click()}
                className="w-full h-11.5 rounded-[6px] border border-[#d7dce5] hover:border-brand-primary bg-white px-4 cursor-pointer flex items-center gap-3 transition-all"
              >
                <Upload className="size-4.5 text-brand-secondary" />
                <span className="text-[12px] text-[#8a96ab]">Attach floorplans, permits, or specs...</span>
              </div>

              {jobDetails.uploadedSupportingDocs.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-[6px] bg-[#fafbfd] border border-[#e3e6ec]"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="size-5 text-[#5a6886]" />
                    <div>
                      <p className="text-[13px] font-medium text-brand-primary truncate max-w-[200px] sm:max-w-xs">
                        {doc.name}
                      </p>
                      <p className="text-[11px] text-brand-secondary">{doc.size}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeDoc(index)}
                    className="p-1 text-[#8a96ab] hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="flex items-center justify-between border-t border-[#e3e6ec] pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onSaveDraft}
          className="h-8.5 px-4 rounded-[6px] border-brand-primary bg-white text-[12px] font-bold text-brand-primary shadow-none hover:bg-[#fafbfd]"
        >
          Save Draft
        </Button>
        <Button
          type="button"
          onClick={onNextStep}
          className="h-8.5 px-4 rounded-[6px] bg-brand-primary text-[12px] font-bold text-white hover:bg-brand-primary/95"
        >
          Next: Work Type
        </Button>
      </footer>
    </div>
  );
}
