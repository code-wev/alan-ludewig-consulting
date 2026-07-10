'use client';

import React, { useState, useEffect } from 'react';
import { X, Download, Check } from 'lucide-react';
import { toast } from 'sonner';
import { type BookingHistoryItem } from './types';

interface ConfirmationModalProps {
  booking: BookingHistoryItem | null;
  onClose: () => void;
}

export function ConfirmationModal({
  booking,
  onClose,
}: ConfirmationModalProps) {
  const [downloadPdf, setDownloadPdf] = useState(true);
  const [addToCalendar, setAddToCalendar] = useState(true);
  const [includePrepNotes, setIncludePrepNotes] = useState(false);
  const [includeLocationMap, setIncludeLocationMap] = useState(false);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (booking) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [booking]);

  if (!booking) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedFiles: string[] = [];
    if (downloadPdf) selectedFiles.push('PDF Certificate');
    if (addToCalendar) selectedFiles.push('Calendar Invite (.ics)');
    if (includePrepNotes) selectedFiles.push('Preparation Notes');
    if (includeLocationMap) selectedFiles.push('Location Map');

    if (selectedFiles.length === 0) {
      toast.error('Please select at least one option to download.');
      return;
    }

    toast.success(`Exporting: ${selectedFiles.join(', ')}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
      {/* Modal Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-[894px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-6 md:p-8 space-y-6 shadow-2xl z-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
        {/* Close Button top-right */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <X className="size-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4">
          <div className="bg-[#132651] flex items-center justify-center rounded-[4px] shrink-0 size-10 text-white">
            <Download className="size-5" />
          </div>
          <div className="font-['Sansation']">
            <h2 className="text-[20px] font-bold text-[#132651] leading-tight">
              Download Booking Confirmation
            </h2>
            <span className="text-[12px] text-[#5a6886] block mt-0.5">
              Administrative Document Export
            </span>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-[#f3f5f8] border border-[#c5c6d0] rounded-[6px] p-6 space-y-4 font-['Sansation']">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-[16px]">
            <div className="space-y-1">
              <span className="text-[#5a6886] block text-sm opacity-70">Ref</span>
              <span className="text-[#132651] font-semibold block">
                {booking.ref || 'ALC-2026-8892'}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[#5a6886] block text-sm opacity-70">Type</span>
              <span className="text-[#132651] font-semibold block">
                {booking.visitType}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[#5a6886] block text-sm opacity-70">Date & Time</span>
              <span className="text-[#132651] font-semibold block">
                {booking.date} • {booking.time}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[#5a6886] block text-sm opacity-70">Site</span>
              <span className="text-[#132651] font-semibold block">
                {booking.siteLocation || 'Central Terminal Hub'}
              </span>
            </div>
          </div>
        </div>

        {/* Option Choices Checklist */}
        <form onSubmit={handleDownload} className="space-y-6">
          <div className="space-y-4 font-['Sansation']">
            {/* Option 1: PDF */}
            <div
              onClick={() => setDownloadPdf(!downloadPdf)}
              className="flex items-start gap-3 cursor-pointer select-none"
            >
              <div
                className={`w-[20px] h-[20px] flex items-center justify-center rounded-[4px] border border-[#e3e6ec] mt-0.5 transition-colors ${
                  downloadPdf ? 'bg-[#001137] border-[#001137] text-white' : 'bg-white'
                }`}
              >
                {downloadPdf && <Check className="size-3.5 stroke-[3px]" />}
              </div>
              <div className="space-y-0.5">
                <span className="text-[14px] font-bold text-[#132651] block leading-tight">
                  Download PDF
                </span>
                <span className="text-[12px] text-[#5a6886] block">
                  Formal compliance certificate (2.4 MB)
                </span>
              </div>
            </div>

            {/* Option 2: ICS */}
            <div
              onClick={() => setAddToCalendar(!addToCalendar)}
              className="flex items-start gap-3 cursor-pointer select-none"
            >
              <div
                className={`w-[20px] h-[20px] flex items-center justify-center rounded-[4px] border border-[#e3e6ec] mt-0.5 transition-colors ${
                  addToCalendar ? 'bg-[#001137] border-[#001137] text-white' : 'bg-white'
                }`}
              >
                {addToCalendar && <Check className="size-3.5 stroke-[3px]" />}
              </div>
              <div className="space-y-0.5">
                <span className="text-[14px] font-bold text-[#132651] block leading-tight">
                  Add to Calendar (.ICS)
                </span>
                <span className="text-[12px] text-[#5a6886] block">
                  Outlook, Apple, and Google compatible
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#e3e6ec] w-full" />

            {/* Option 3: Prep Notes */}
            <div
              onClick={() => setIncludePrepNotes(!includePrepNotes)}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <div
                className={`w-[20px] h-[20px] flex items-center justify-center rounded-[4px] border transition-colors ${
                  includePrepNotes
                    ? 'bg-[#001137] border-[#001137] text-white'
                    : 'bg-white border-[#e3e6ec]'
                }`}
              >
                {includePrepNotes && <Check className="size-3.5 stroke-[3px]" />}
              </div>
              <span className="text-[14px] text-[#5a6886]">
                Include prep notes
              </span>
            </div>

            {/* Option 4: Location Map */}
            <div
              onClick={() => setIncludeLocationMap(!includeLocationMap)}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <div
                className={`w-[20px] h-[20px] flex items-center justify-center rounded-[4px] border transition-colors ${
                  includeLocationMap
                    ? 'bg-[#001137] border-[#001137] text-white'
                    : 'bg-white border-[#e3e6ec]'
                }`}
              >
                {includeLocationMap && <Check className="size-3.5 stroke-[3px]" />}
              </div>
              <span className="text-[14px] text-[#5a6886]">
                Include location & site map
              </span>
            </div>
          </div>

          {/* Download Action Button */}
          <div className="flex justify-start pt-2">
            <button
              type="submit"
              className="bg-[#132651] hover:bg-[#1e3264] text-white font-['Sansation'] font-bold text-[12px] h-[34px] px-6 rounded-[6px] flex items-center justify-center transition-colors cursor-pointer"
            >
              Download Selected Files
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
