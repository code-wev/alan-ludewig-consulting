'use client';

import React, { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';
import { type BookingHistoryItem } from './types';

interface RescheduleModalProps {
  booking: BookingHistoryItem | null;
  onClose: () => void;
  onSubmit: (id: string, newDate: string, newTime: string) => boolean;
  isDateValid: (dateString: string) => boolean;
}

export function RescheduleModal({
  booking,
  onClose,
  onSubmit,
  isDateValid,
}: RescheduleModalProps) {
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('10:00 AM');
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
    const success = onSubmit(booking.id, newDate, newTime);
    if (success) {
      setNewDate('');
      setReason('');
      onClose();
    }
  };

  const dateError = newDate && !isDateValid(newDate);

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
      {/* Modal Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-[894px] bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-6 md:p-8 space-y-6 shadow-2xl z-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
        {/* Modal Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-['Sansation'] text-[20px] font-bold text-[#132651]">
            Reschedule Booking
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Current Booking Summary Card */}
        <div className="bg-[#f3f5f8] border border-[#e3e6ec] rounded-[8px] p-6 space-y-4">
          <h4 className="font-['Sansation'] text-[14px] font-bold text-[#5a6886]">
            Current Booking
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-['Sansation']">
            <div className="space-y-1">
              <span className="text-[14px] text-[#5a6886] block">Visit Type</span>
              <span className="text-[14px] font-bold text-[#132651] block [word-break:break-word]">
                {booking.visitType}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[14px] text-[#5a6886] block">Current Date</span>
              <span className="text-[14px] font-bold text-[#132651] block">
                {booking.date}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[14px] text-[#5a6886] block">Current Time</span>
              <span className="text-[14px] font-bold text-[#132651] block">
                {booking.time}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[14px] text-[#5a6886] block">Duration</span>
              <span className="text-[14px] font-bold text-[#132651] block">
                {booking.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Reschedule Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-5">
            {/* New Preferred Date */}
            <div className="flex flex-col gap-1">
              <label className="font-['Sansation'] text-[14px] font-bold text-[#132651]">
                New Preferred Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full h-[51px] border-[1.5px] border-[#d0d4dc] rounded-[6px] px-4 font-['Sansation'] text-[14px] text-[#132651] outline-none focus:border-[#132651] bg-white cursor-pointer relative"
                  style={{ colorScheme: 'light' }}
                  required
                />
              </div>
              <div className="flex items-center gap-1 pt-1 text-[12px]">
                <span
                  className={`font-['Sansation'] leading-[1.6] ${
                    dateError ? 'text-red-500 font-semibold' : 'text-[#5a6886]'
                  }`}
                >
                  Only dates 7+ days from today are available.
                </span>
              </div>
            </div>

            {/* New Time slots grid */}
            <div className="flex flex-col gap-2">
              <label className="font-['Sansation'] text-[14px] font-bold text-[#132651]">
                New Available Time Slot
              </label>
              <div className="grid grid-cols-3 gap-4">
                {timeSlots.map((slot) => {
                  const isSelected = newTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setNewTime(slot)}
                      className={`h-[42px] rounded-[6px] border-[1.5px] font-['Sansation'] text-[14px] flex items-center justify-center transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#f3f5f8] border-[#132651] text-[#132651] font-bold shadow-sm'
                          : 'border-[#e3e6ec] bg-white text-[#132651] hover:bg-gray-50'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reason for Reschedule */}
            <div className="flex flex-col gap-1">
              <label className="font-['Sansation'] text-[14px] font-bold text-[#132651]">
                Reason for Reschedule
              </label>
              <textarea
                placeholder="Optional reason or note..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full h-[78px] border-[1.5px] border-[#e3e6ec] rounded-[6px] p-4 font-['Sansation'] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#a3acba] bg-white resize-none"
              />
            </div>

            {/* Blue Info Box Alert */}
            <div className="bg-[#e4ebfe] border border-[#adc6ff]/50 rounded-[8px] p-[17px] flex items-start gap-4 w-full">
              <Info className="size-5 text-[#132651] shrink-0 mt-0.5" />
              <p className="font-['Sansation'] text-[14px] text-[#132651] leading-[1.6] [word-break:break-word]">
                If your question is urgent or requires site-specific advice, you may also book a site visit or consultation.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-[#132651] hover:bg-[#1e3264] text-white font-['Sansation'] font-bold text-[12px] h-[34px] px-6 rounded-[6px] flex items-center justify-center transition-colors cursor-pointer"
            >
              Submit Reschedule Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
