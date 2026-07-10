'use client';

import React, { useEffect } from 'react';
import { X, Calendar, Clock, Mail, AlertTriangle, FileText, Download, Shield } from 'lucide-react';
import { toast } from 'sonner';
import { type BookingHistoryItem } from './types';

interface DetailsModalProps {
  booking: BookingHistoryItem | null;
  onClose: () => void;
  onRescheduleClick: (booking: BookingHistoryItem) => void;
  onCancelClick: (booking: BookingHistoryItem) => void;
}

export function DetailsModal({
  booking,
  onClose,
  onRescheduleClick,
  onCancelClick,
}: DetailsModalProps) {
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

  const isConfirmed = booking.status === 'Confirmed';
  const consultantEmail = booking.consultant === 'Marcus H. Richardson'
    ? 'm.richardson@alconsulting.com'
    : 's.mitchell@alconsulting.com';
  const consultantTitle = booking.consultant === 'Marcus H. Richardson'
    ? 'Senior Safety Inspector (NEBOSH Cert.)'
    : 'Senior Health & Safety Consultant (CMIOSH)';
  const consultantAvatar = booking.consultant === 'Marcus H. Richardson'
    ? '/marcus_avatar.png'
    : '/sarah_avatar.png';

  const handleDownloadPdf = () => {
    toast.success('Downloading compliance certificate PDF...');
  };

  const handleDownloadAttachment = (filename: string) => {
    toast.success(`Downloading attachment: ${filename}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
      {/* Modal Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-[1080px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] shadow-2xl z-10 max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e3e6ec] bg-white">
          <div className="flex items-center gap-3 font-['Sansation']">
            <FileText className="size-5 text-[#132651]" />
            <h2 className="text-[20px] font-bold text-[#132651]">
              Inspection Checklist Preview
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Scrollable Content (Split Layout) */}
        <div className="flex-1 overflow-y-auto flex flex-col lg:flex-row min-h-0">
          {/* Left Column (approx 67%) */}
          <div className="flex-1 bg-[#f3f5f8] border-r border-[#e3e6ec] p-6 space-y-6 md:p-8">
            {/* Visit Information Section */}
            <div className="space-y-4">
              <h3 className="font-['Sansation'] text-[16px] font-bold text-[#132651]">
                Visit Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-['Sansation'] text-[14px]">
                <div className="space-y-1">
                  <span className="text-[12px] text-[#5a6886] block">Type of Visit</span>
                  <span className="text-[#132651] font-semibold block">{booking.visitType}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[12px] text-[#5a6886] block">Project Code</span>
                  <span className="text-[#132651] font-semibold block">{booking.projectCode || 'PRJ-LON-004-24'}</span>
                </div>

                <div className="md:col-span-2 space-y-1">
                  <span className="text-[12px] text-[#5a6886] block">Site Address</span>
                  <div className="flex flex-col sm:flex-row gap-4 items-start justify-between">
                    <span className="text-[#132651] font-semibold leading-relaxed">
                      {booking.siteLocation || 'Canary Wharf Phase 4 Development Office\nLevel 12, One Canada Square, London, E14 5AB'}
                    </span>
                    <div className="w-[128px] h-[80px] rounded-[6px] overflow-hidden border border-[#e3e6ec] bg-gray-200 shrink-0">
                      <img
                        alt="Location Map Preview"
                        className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform"
                        src="/london_map_preview.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-2 pt-2 border-t border-[#e3e6ec]/50">
                  <span className="text-[12px] text-[#5a6886] block">Date & Time</span>
                  <div className="flex flex-col sm:flex-row gap-4 font-semibold text-[#132651]">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4 text-[#132651] shrink-0" />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4 text-[#5a6886] shrink-0" />
                      <span className="text-[#5a6886]">{booking.time} ({booking.duration})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultant Info Section */}
            <div className="space-y-4 pt-4 border-t border-[#e3e6ec]/50">
              <h3 className="font-['Sansation'] text-[16px] font-bold text-[#132651]">
                Assigned Consultant
              </h3>
              <div className="bg-white border border-[#e3e6ec] rounded-[12px] p-6 flex flex-col sm:flex-row items-center gap-4 font-['Sansation']">
                <img
                  alt={booking.consultant}
                  className="size-14 rounded-[6px] object-cover border border-[#c5c6d0] shrink-0"
                  src={consultantAvatar}
                />
                <div className="space-y-1 text-center sm:text-left flex-1 min-w-0">
                  <h4 className="text-[16px] font-bold text-[#132651]">{booking.consultant}</h4>
                  <p className="text-[12px] text-[#5a6886]">{consultantTitle}</p>
                  <a
                    href={`mailto:${consultantEmail}`}
                    className="flex items-center justify-center sm:justify-start gap-1.5 text-[14px] text-[#132651] hover:underline pt-1 truncate"
                  >
                    <Mail className="size-4 shrink-0 text-[#132651]" />
                    <span>{consultantEmail}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Visit Notes Section */}
            <div className="space-y-4 pt-4 border-t border-[#e3e6ec]/50">
              <h3 className="font-['Sansation'] text-[16px] font-bold text-[#132651]">
                Visit Notes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-['Sansation']">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[#132651] text-[15px]">
                    <Shield className="size-4.5 text-[#132651] shrink-0" />
                    <span>Access Instructions</span>
                  </div>
                  <div className="border-l-2 border-[#132651] pl-4">
                    <p className="text-[12px] text-[#5a6886] leading-relaxed italic">
                      &quot;{booking.accessInstructions || 'Enter via North Gate Security. Provide Booking Ref. Temporary visitor badge required for Floor access.'}&quot;
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-red-600 text-[15px]">
                    <AlertTriangle className="size-4.5 text-red-600 shrink-0" />
                    <span>Key Risks / Hazards</span>
                  </div>
                  <div className="border-l-2 border-red-500/50 pl-4">
                    <p className="text-[12px] text-[#5a6886] leading-relaxed italic">
                      &quot;{booking.keyRisks || 'None.'}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents & Attachments Section */}
            <div className="space-y-4 pt-4 border-t border-[#e3e6ec]/50">
              <h3 className="font-['Sansation'] text-[16px] font-bold text-[#132651]">
                Documents & Attachments (2)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-['Sansation'] text-[14px]">
                <div
                  onClick={() => handleDownloadAttachment('Site_Safety_Plan_v2.pdf')}
                  className="border border-[#e3e6ec] bg-white rounded-[6px] p-3 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3 truncate">
                    <FileText className="size-5 text-[#5a6886] shrink-0" />
                    <span className="text-[#191c1f] truncate font-medium">Site_Safety_Plan_v2.pdf</span>
                  </div>
                  <Download className="size-4.5 text-[#132651] shrink-0 ml-2" />
                </div>

                <div
                  onClick={() => handleDownloadAttachment('Risk_Assessment_Archive.zip')}
                  className="border border-[#e3e6ec] bg-white rounded-[6px] p-3 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3 truncate">
                    <FileText className="size-5 text-[#5a6886] shrink-0" />
                    <span className="text-[#191c1f] truncate font-medium">Risk_Assessment_Archive.zip</span>
                  </div>
                  <Download className="size-4.5 text-[#132651] shrink-0 ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (approx 33%) */}
          <div className="w-full lg:w-[345px] p-6 space-y-8 font-['Sansation']">
            {/* Billing Summary Card */}
            <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[12px] p-6 space-y-4">
              <h4 className="text-[14px] font-bold text-[#132651]">Billing Summary</h4>
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[28px] font-bold text-[#132651] leading-none block">
                    1.0
                  </span>
                  <span className="text-[12px] text-[#5a6886] block mt-1">
                    Credits to be deducted
                  </span>
                </div>
                <div className="bg-[#e3e6ec] p-2 rounded-md shrink-0">
                  <Shield className="size-6 text-[#132651]" />
                </div>
              </div>
              <div className="border-t border-[#e3e6ec] pt-4 flex items-center justify-between text-[16px]">
                <span className="text-[#5a6886]">Balance After Visit</span>
                <span className="font-bold text-[#132651]">{booking.status === 'Cancelled' ? 'N/A' : 'Refunded/Used'}</span>
              </div>
            </div>

            {/* Booking Lifecycle Timeline */}
            <div className="space-y-4">
              <h4 className="text-[16px] font-bold text-[#132651]">Booking Lifecycle</h4>
              <div className="relative pl-6 space-y-6">
                {/* Timeline vertical bar */}
                <div className="absolute left-[5px] top-1.5 bottom-1.5 w-[2px] bg-[#e3e6ec]" />

                {/* Step 1 */}
                <div className="relative space-y-1">
                  <div className="absolute left-[-25px] top-1 size-3 rounded-full bg-[#00a63e] border-4 border-white ring-4 ring-[#f3f5f8] shrink-0" />
                  <span className="text-[14px] font-medium text-[#132651] block leading-tight">
                    Booking Confirmed
                  </span>
                  <span className="text-[12px] text-[#5a6886] block">
                    02 Aug, 14:15 - System
                  </span>
                </div>

                {/* Step 2 */}
                <div className="relative space-y-1">
                  <div className="absolute left-[-25px] top-1 size-3 rounded-full bg-[#00a63e] border-4 border-white ring-4 ring-[#f3f5f8] shrink-0" />
                  <span className="text-[14px] font-medium text-[#132651] block leading-tight">
                    Consultant Assigned
                  </span>
                  <span className="text-[12px] text-[#5a6886] block">
                    03 Aug, 09:30 - Admin
                  </span>
                </div>

                {/* Step 3 */}
                <div className="relative space-y-1">
                  <div className={`absolute left-[-25px] top-1 size-3 rounded-full border-4 border-white ring-4 ring-[#f3f5f8] shrink-0 ${
                    booking.status === 'Completed' ? 'bg-[#00a63e]' : 'bg-[#5a6886]'
                  }`} />
                  <span className="text-[14px] font-medium text-[#132651] block leading-tight">
                    {booking.status === 'Completed' ? 'Visit Completed' : 'Audit Preparation'}
                  </span>
                  <span className="text-[12px] text-[#5a6886] block">
                    {booking.status === 'Completed' ? '14 Aug, 13:30 - Marcus' : 'Pending start'}
                  </span>
                </div>
              </div>
            </div>

            {/* Policy Notice Section */}
            <div className="border-t border-[#e3e6ec] pt-6 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#132651] text-[12px]">
                <Clock className="size-3.5 text-[#132651]" />
                <span>POLICY NOTICE</span>
              </div>
              <p className="text-[10px] text-[#5a6886] leading-relaxed">
                Cancellations within 48 hours of visit start time incur a 50% credit penalty. Rescheduling more than 72 hours in advance is free of charge.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-[#e3e6ec] flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
          <div className="flex items-center gap-3 w-full sm:w-auto font-['Sansation']">
            {isConfirmed && (
              <>
                <button
                  onClick={() => {
                    onCancelClick(booking);
                    onClose();
                  }}
                  className="flex-1 sm:flex-initial bg-white hover:bg-red-50 text-[#132651] border border-[#132651] font-bold text-[12px] h-[34px] px-6 rounded-[6px] transition-colors cursor-pointer"
                >
                  Cancel Booking
                </button>
                <button
                  onClick={() => {
                    onRescheduleClick(booking);
                    onClose();
                  }}
                  className="flex-1 sm:flex-initial bg-[#132651] hover:bg-[#1e3264] text-white font-bold text-[12px] h-[34px] px-6 rounded-[6px] transition-colors cursor-pointer"
                >
                  Reschedule Visit
                </button>
              </>
            )}
          </div>
          <button
            onClick={handleDownloadPdf}
            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#132651] border border-[#132651] font-['Sansation'] font-bold text-[12px] h-[34px] px-6 rounded-[6px] transition-colors cursor-pointer"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
