'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import {
  type BookingHistoryItem,
  INITIAL_HISTORY,
} from './types';

const STORAGE_KEY_CREDITS = 'alc_booking_credits_v1';
const STORAGE_KEY_HISTORY = 'alc_booking_history_v1';

export function useBookVisit() {
  // Credits State
  const [credits, setCredits] = useState<number>(() => {
    if (typeof window === 'undefined') return 2;
    const saved = window.localStorage.getItem(STORAGE_KEY_CREDITS);
    return saved !== null ? parseInt(saved, 10) : 2;
  });

  // Form State
  const [visitType, setVisitType] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('10:00 AM');
  const [siteLocation, setSiteLocation] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

  // Booking History State
  const [bookingHistory, setBookingHistory] = useState<BookingHistoryItem[]>(() => {
    if (typeof window === 'undefined') return INITIAL_HISTORY;
    const saved = window.localStorage.getItem(STORAGE_KEY_HISTORY);
    if (saved !== null) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_HISTORY;
      }
    }
    return INITIAL_HISTORY;
  });

  // Reschedule Target Modal State
  const [rescheduleTarget, setRescheduleTarget] = useState<BookingHistoryItem | null>(null);

  // Cancel Target Modal State
  const [cancelTarget, setCancelTarget] = useState<BookingHistoryItem | null>(null);

  // Confirmation Target Modal State (for newly created booking)
  const [justCreatedBooking, setJustCreatedBooking] = useState<BookingHistoryItem | null>(null);

  // View Details Target Modal State
  const [viewTarget, setViewTarget] = useState<BookingHistoryItem | null>(null);

  // Sync state to local storage when state changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY_CREDITS, credits.toString());
  }, [credits]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(bookingHistory));
  }, [bookingHistory]);

  // Helper to check if a date is 7+ days from today
  const isDateValid = (dateString: string) => {
    if (!dateString) return false;
    const selected = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + 7);
    
    return selected >= minDate;
  };

  // Format date for history (e.g. "2026-07-24" -> "24 Jul 2026")
  const formatDateString = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = date.getDate();
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Form submission
  const confirmBooking = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!visitType) {
      toast.error('Please select a visit type.');
      return;
    }
    if (!preferredDate) {
      toast.error('Please select a preferred date.');
      return;
    }
    if (!isDateValid(preferredDate)) {
      toast.error('Selected date must be at least 7 days from today.');
      return;
    }
    if (!preferredTime) {
      toast.error('Please select a preferred time.');
      return;
    }
    if (!siteLocation.trim()) {
      toast.error('Please enter a site / location address.');
      return;
    }
    if (!reason.trim()) {
      toast.error('Please enter the reason for the visit.');
      return;
    }

    if (credits <= 0) {
      toast.error('You do not have enough booking credits.');
      return;
    }

    // Determine duration
    const duration = visitType === 'Teams Consultation' ? '1 Hour' : 'Full Day';

    const refNum = Math.floor(1000 + Math.random() * 9000);
    const bookingYear = preferredDate ? new Date(preferredDate).getFullYear() : new Date().getFullYear();
    const ref = `ALC-${bookingYear}-${refNum}`;
    const projectCode = `PRJ-LON-${refNum}-26`;

    const newBooking: BookingHistoryItem = {
      id: Math.random().toString(36).substring(2, 9),
      visitType,
      date: formatDateString(preferredDate),
      time: preferredTime,
      duration,
      status: 'Confirmed',
      consultant: 'Sarah Mitchell',
      siteLocation: siteLocation.trim(),
      ref,
      projectCode,
      accessInstructions: 'Enter via North Gate Security. Provide Booking Ref. Temporary visitor badge required for Floor access.',
      keyRisks: 'None.',
    };

    setBookingHistory([newBooking, ...bookingHistory]);
    setCredits(credits - 1);
    setJustCreatedBooking(newBooking);

    toast.success('Booking confirmed successfully!');

    // Reset Form fields
    setVisitType('');
    setPreferredDate('');
    setPreferredTime('10:00 AM');
    setSiteLocation('');
    setReason('');
    setAdditionalNotes('');
  };

  const deleteBooking = (id: string) => {
    const updatedHistory = bookingHistory.filter((item) => item.id !== id);
    setBookingHistory(updatedHistory);
    toast.success('Booking record deleted.');
  };

  const openRescheduleModal = (booking: BookingHistoryItem) => {
    setRescheduleTarget(booking);
  };

  const closeRescheduleModal = () => {
    setRescheduleTarget(null);
  };

  const submitReschedule = (id: string, newDate: string, newTime: string) => {
    if (!newDate) {
      toast.error('Please select a new preferred date.');
      return false;
    }
    if (!isDateValid(newDate)) {
      toast.error('Selected date must be at least 7 days from today.');
      return false;
    }
    if (!newTime) {
      toast.error('Please select a preferred time slot.');
      return false;
    }

    const updatedHistory = bookingHistory.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          date: formatDateString(newDate),
          time: newTime,
        };
      }
      return item;
    });

    setBookingHistory(updatedHistory);
    toast.success('Reschedule request submitted successfully!');
    closeRescheduleModal();
    return true;
  };

  const openCancelModal = (booking: BookingHistoryItem) => {
    setCancelTarget(booking);
  };

  const closeCancelModal = () => {
    setCancelTarget(null);
  };

  const submitCancel = (id: string) => {
    const updatedHistory = bookingHistory.map((item) => {
      if (item.id === id) {
        return { ...item, status: 'Cancelled' as const };
      }
      return item;
    });

    setBookingHistory(updatedHistory);
    // Refund credit
    setCredits((prev) => prev + 1);

    toast.success('Booking cancelled and credit returned.');
    closeCancelModal();
    return true;
  };

  const closeConfirmationModal = () => {
    setJustCreatedBooking(null);
  };

  const openViewModal = (booking: BookingHistoryItem) => {
    setViewTarget(booking);
  };

  const closeViewModal = () => {
    setViewTarget(null);
  };

  return {
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
    bookingHistory,
    confirmBooking,
    deleteBooking,
    isDateValid,
    rescheduleTarget,
    openRescheduleModal,
    closeRescheduleModal,
    submitReschedule,
    cancelTarget,
    openCancelModal,
    closeCancelModal,
    submitCancel,
    justCreatedBooking,
    closeConfirmationModal,
    viewTarget,
    openViewModal,
    closeViewModal,
  };
}
export type UseBookVisitReturn = ReturnType<typeof useBookVisit>;
