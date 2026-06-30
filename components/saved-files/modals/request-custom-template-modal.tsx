import React, { useState } from "react";
import { X, ChevronDown, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface RequestCustomTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    templateName: string;
    category: string;
    description: string;
    uploadedFile: File | null;
    message: string;
  }) => void;
  initialCategory?: string;
}

export function RequestCustomTemplateModal({
  isOpen,
  onClose,
  onSubmit,
  initialCategory = "Site Safety",
}: RequestCustomTemplateModalProps) {
  const [templateName, setTemplateName] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [description, setDescription] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size exceeds 10MB limit.");
        return;
      }
      setUploadedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size exceeds 10MB limit.");
        return;
      }
      setUploadedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!templateName.trim()) {
      toast.error("Template name is required.");
      return;
    }

    if (onSubmit) {
      onSubmit({
        templateName,
        category,
        description,
        uploadedFile,
        message,
      });
    } else {
      toast.success(`Custom request for "${templateName}" submitted successfully!`);
    }

    // Reset fields
    setTemplateName("");
    setCategory(initialCategory);
    setDescription("");
    setUploadedFile(null);
    setMessage("");
    onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
        onClick={onClose}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="request-template-title"
          className="w-full max-w-223.5 max-h-[90vh] overflow-y-auto no-scrollbar rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative flex flex-col gap-6 px-6 py-6 md:px-6 md:py-6">
            
            {/* Header */}
            <div className="flex min-h-8 items-start pr-12">
              <h2
                id="request-template-title"
                className="text-[20px] font-bold leading-[1.6] text-brand-primary font-sans"
              >
                Request Custom Template
              </h2>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary cursor-pointer"
              aria-label="Close request template modal"
            >
              <X className="size-4.5" />
            </button>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full font-sans">
              
              {/* Template Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="template-name"
                  className="text-[14px] leading-[1.6] text-brand-primary font-medium font-sans font-sans"
                >
                  Template Name<span className="text-[#d92d20]">*</span>
                </label>
                <input
                  id="template-name"
                  type="text"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  placeholder="e.g. Scaffolding Inspection Log"
                  className="h-12.75 w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary font-sans"
                  required
                />
              </div>

              {/* Category */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="template-cat"
                  className="text-[14px] leading-[1.6] text-brand-primary font-medium font-sans font-sans"
                >
                  Category
                </label>
                <div className="relative w-full">
                  <select
                    id="template-cat"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="h-12.75 w-full rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none appearance-none cursor-pointer focus:border-brand-primary font-sans pr-10"
                  >
                    <option value="Site Safety">Site Safety</option>
                    <option value="Toolbox Talks">Toolbox Talks</option>
                    <option value="COSHH Assessments">COSHH Assessments</option>
                    <option value="Equipment Check">Equipment Check</option>
                    <option value="Office Audit">Office Audit</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#5a6886] pointer-events-none" />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="template-desc"
                  className="text-[14px] leading-[1.6] text-brand-primary font-medium font-sans font-sans"
                >
                  Description
                </label>
                <textarea
                  id="template-desc"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Detail the specific fields and logic required for this template..."
                  rows={3}
                  className="min-h-[78px] w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary font-sans"
                />
              </div>

              {/* Drag & Drop File Zone */}
              <div className="flex flex-col gap-2">
                <span className="text-[14px] leading-[1.6] text-brand-primary font-medium font-sans font-sans">
                  Upload Example (PDF/DOCX)
                </span>
                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("file-upload")?.click()}
                  className="border-2 border-dashed border-[#e3e6ec] rounded-[8px] p-6 flex flex-col items-center justify-center gap-2 bg-[#fcfdfe] hover:bg-slate-50/50 cursor-pointer transition relative"
                >
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf,.docx,.doc"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Upload className="w-[26px] h-[26px] text-brand-primary" />
                  <div className="flex flex-col items-center">
                    <span className="text-[14px] font-bold text-brand-primary font-sans">
                      {uploadedFile ? uploadedFile.name : "Drag and drop file or browse"}
                    </span>
                    <span className="text-[12px] text-brand-secondary uppercase mt-1 font-sans">
                      MAX FILE SIZE 10MB
                    </span>
                  </div>
                  {uploadedFile && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setUploadedFile(null);
                      }}
                      className="absolute right-4 top-4 p-1 rounded-full bg-slate-100 hover:bg-slate-200 text-brand-secondary hover:text-brand-primary"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Message to Consultant */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="consultant-msg"
                  className="text-[14px] leading-[1.6] text-brand-primary font-medium font-sans font-sans"
                >
                  Message to Consultant
                </label>
                <textarea
                  id="consultant-msg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any additional context..."
                  rows={3}
                  className="min-h-[78px] w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary font-sans"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2">
                <Button
                  type="submit"
                  className="h-[34px] rounded-[6px] bg-brand-primary px-5 text-[12px] font-bold text-white hover:bg-[#0d1b3a] font-sans"
                >
                  Submit Request
                </Button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
