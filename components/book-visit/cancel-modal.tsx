'use client';

import React, { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';
import { type BookingHistoryItem } from './types';

interface CancelModalProps {
  booking: BookingHistoryItem | null;
  onClose: () => void;
  onSubmit: (id: string) => boolean;
}

export function CancelModal({
  booking,
  onClose,
  onSubmit,
}: CancelModalProps) {
  const [reason, setReason] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onSubmit(booking.id);
    if (success) {
      setReason('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
      {/* Modal Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-[894px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-6 md:p-8 space-y-6 shadow-2xl z-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
        {/* Modal Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-['Sansation'] text-[20px] font-bold text-[#132651]">
            Cancel Booking
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Current Booking Summary Card */}
        <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[8px] p-[17px] space-y-4 font-['Sansation']">
          <div className="grid grid-cols-[150px_1fr] gap-y-3 gap-x-4 max-w-xl text-[14px]">
            <span className="text-[#5a6886]">Visit Type</span>
            <span className="font-bold text-[#132651] [word-break:break-word]">{booking.visitType}</span>

            <span className="text-[#5a6886]">Date</span>
            <span className="font-bold text-[#132651]">{booking.date}</span>

            <span className="text-[#5a6886]">Time</span>
            <span className="font-bold text-[#132651]">{booking.time}</span>

            <span className="text-[#5a6886]">Consultant</span>
            <span className="font-bold text-[#132651]">{booking.consultant}</span>
          </div>
        </div>

        {/* Alert rules box */}
        <div className="bg-[#e4ebfe] border border-[#adc6ff]/50 rounded-[8px] p-[17px] flex items-start gap-4 w-full">
          <Info className="size-5 text-[#132651] shrink-0 mt-0.5" />
          <p className="font-['Sansation'] text-[14px] text-[#132651] leading-[1.6] [word-break:break-word]">
            If cancelled within the allowed cancellation period, the booking credit will be returned to your account. Otherwise, it may require admin review.
          </p>
        </div>

        {/* Cancel Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Cancellation Reason */}
            <div className="flex flex-col gap-1">
              <label className="font-['Sansation'] text-[14px] font-bold text-[#132651]">
                Cancellation Reason (Optional)
              </label>
              <textarea
                placeholder="Add cancellation reason..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full h-[78px] border-[1.5px] border-[#e3e6ec] rounded-[6px] p-4 font-['Sansation'] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#a3acba] bg-white resize-none"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-[#132651] hover:bg-[#1e3264] text-white font-['Sansation'] font-bold text-[12px] h-[34px] px-6 rounded-[6px] flex items-center justify-center transition-colors cursor-pointer"
            >
              Cancel Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
