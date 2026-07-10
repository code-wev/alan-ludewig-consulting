'use client';

import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { VISIT_TYPES, TIME_SLOTS } from './types';
import { useBookVisit } from './use-book-visit';

interface BookingFormProps {
  state: ReturnType<typeof useBookVisit>;
}

export function BookingForm({ state }: BookingFormProps) {
  const {
    credits,
    visitType,
    setVisitType,
    preferredDate,
    setPreferredDate,
    preferredTime,
    setPreferredTime,
    siteLocation,
    setSiteLocation,
    reason,
    setReason,
    additionalNotes,
    setAdditionalNotes,
    confirmBooking,
    isDateValid,
  } = state;

  // Compute validation helper message
  const dateError = preferredDate && !isDateValid(preferredDate);

  // Format date for summary
  const getFormattedDateForSummary = () => {
    if (!preferredDate) return '';
    const date = new Date(preferredDate);
    const day = date.getDate();
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return `${day} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const formattedDate = getFormattedDateForSummary();
  const summaryDateTime = formattedDate && preferredTime
    ? `${formattedDate}, ${preferredTime}`
    : '-';

  const duration = visitType === 'Teams Consultation' ? '1 Hour' : 'Full Day';
  const creditsUsed = visitType ? '1 credit' : '-';
  const creditsRemaining = visitType ? `${credits - 1} credit${credits - 1 !== 1 ? 's' : ''}` : '-';

  return (
    <form
      onSubmit={confirmBooking}
      className="bg-white border-[1.5px] border-[#e3e6ec] rounded-[12px] p-8 space-y-6 w-full shadow-[0_1px_0_rgba(10,25,47,0.02)]"
    >
      <h2 className="font-['Sansation'] text-[20px] font-bold text-[#132651]">
        New Booking
      </h2>

      <div className="space-y-5">
        {/* Visit Type Dropdown */}
        <div className="flex flex-col gap-1">
          <label className="font-['Sansation'] text-[14px] font-bold text-[#132651]">
            Visit Type
          </label>
          <div className="relative">
            <select
              value={visitType}
              onChange={(e) => setVisitType(e.target.value)}
              className="appearance-none w-full h-[51px] border-[1.5px] border-[#d0d4dc] rounded-[6px] px-4 font-['Sansation'] text-[14px] text-[#132651] outline-none focus:border-[#132651] bg-white cursor-pointer"
            >
              <option value="" disabled>Select visit type...</option>
              {VISIT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#a3acba]">
              <ChevronDown className="size-4.5" />
            </div>
          </div>
          <div className="flex items-center gap-1.5 pt-1 text-[12px] text-[#5a6886]">
            <HelpCircle className="size-3.5 text-[#a3acba]" />
            <span className="font-['Sansation'] leading-[1.6]">
              {visitType === 'Teams Consultation'
                ? 'Teams Consultation reserves a 1-hour slot.'
                : 'This visit type will reserve the full working day.'}
            </span>
          </div>
        </div>

        {/* Preferred Date */}
        <div className="flex flex-col gap-1">
          <label className="font-['Sansation'] text-[14px] font-bold text-[#132651]">
            Preferred Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full h-[51px] border-[1.5px] border-[#d0d4dc] rounded-[6px] px-4 font-['Sansation'] text-[14px] text-[#132651] outline-none focus:border-[#132651] bg-white cursor-pointer relative"
              style={{ colorScheme: 'light' }}
            />
          </div>
          <div className="flex items-center gap-1 pt-1 text-[12px]">
            <span
              className={`font-['Sansation'] leading-[1.6] ${
                dateError ? 'text-red-500 font-semibold' : 'text-[#d97706]'
              }`}
            >
              Only dates 7+ days from today are available.
            </span>
          </div>
        </div>

        {/* Preferred Time Grid */}
        <div className="flex flex-col gap-2">
          <label className="font-['Sansation'] text-[14px] font-bold text-[#132651]">
            Preferred Time
          </label>
          <div className="grid grid-cols-3 gap-4">
            {TIME_SLOTS.map((slot) => {
              const isSelected = preferredTime === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setPreferredTime(slot)}
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

        {/* Site / Location */}
        <div className="flex flex-col gap-1">
          <label className="font-['Sansation'] text-[14px] font-bold text-[#132651]">
            Site / Location
          </label>
          <input
            type="text"
            placeholder="Enter site address..."
            value={siteLocation}
            onChange={(e) => setSiteLocation(e.target.value)}
            className="w-full h-[51px] border-[1.5px] border-[#d0d4dc] rounded-[6px] px-4 font-['Sansation'] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#a3acba] bg-white"
          />
        </div>

        {/* Reason for Visit */}
        <div className="flex flex-col gap-1">
          <label className="font-['Sansation'] text-[14px] font-bold text-[#132651]">
            Reason for Visit
          </label>
          <textarea
            placeholder="Brief description of what you need assistance with..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full h-[99px] border-[1.5px] border-[#d0d4dc] rounded-[6px] p-4 font-['Sansation'] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#a3acba] bg-white resize-none"
          />
        </div>

        {/* Additional Notes */}
        <div className="flex flex-col gap-1">
          <label className="font-['Sansation'] text-[14px] font-bold text-[#132651]">
            Additional Notes (Optional)
          </label>
          <textarea
            placeholder="Any special requirements, access information, or specific concerns..."
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            className="w-full h-[99px] border-[1.5px] border-[#d0d4dc] rounded-[6px] p-4 font-['Sansation'] text-[14px] text-[#132651] outline-none focus:border-[#132651] placeholder:text-[#a3acba] bg-white resize-none"
          />
        </div>

        {/* Booking Summary Box */}
        <div className="bg-[#eff6ff] border-[1.5px] border-[#bedbff] rounded-[6px] p-6 space-y-4">
          <h3 className="font-['Sansation'] text-[20px] font-bold text-[#132651]">
            Booking Summary
          </h3>
          <div className="space-y-2 text-[14px] font-['Sansation']">
            <div className="flex justify-between items-center pb-2 border-b border-[#bedbff]/50">
              <span className="text-[#5a6886]">Visit Type:</span>
              <span className="font-bold text-[#132651]">
                {visitType || '-'}
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-[#bedbff]/50">
              <span className="text-[#5a6886]">Date & Time:</span>
              <span className="font-bold text-[#132651]">{summaryDateTime}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-[#bedbff]/50">
              <span className="text-[#5a6886]">Duration:</span>
              <span className="font-bold text-[#132651]">
                {visitType ? duration : '-'}
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-[#bedbff]/50">
              <span className="text-[#5a6886]">Credits Used:</span>
              <span className="font-bold text-[#132651]">{creditsUsed}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#5a6886]">Credits Remaining After:</span>
              <span className="font-bold text-[#132651]">{creditsRemaining}</span>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          type="submit"
          className="w-full bg-[#132651] hover:bg-[#1e3264] text-white font-['Sansation'] font-bold text-[14px] h-[51px] rounded-[6px] flex items-center justify-center transition-colors cursor-pointer"
        >
          Confirm Booking
        </button>
      </div>
    </form>
  );
}
