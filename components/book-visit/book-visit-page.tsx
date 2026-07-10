'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useBookVisit } from './use-book-visit';
import { CreditsBanner } from './credits-banner';
import { InfoAlert } from './info-alert';
import { BookingForm } from './booking-form';
import { ConsultantCard } from './consultant-card';
import { BookingHistory } from './booking-history';
import { RescheduleModal } from './reschedule-modal';
import { CancelModal } from './cancel-modal';
import { ConfirmationModal } from './confirmation-modal';
import { DetailsModal } from './details-modal';

export function BookVisitPage() {
  const state = useBookVisit();

  return (
    <div className="flex flex-col gap-6 text-brand-primary">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary">
        <span>Dashboard</span>
        <ChevronRight className="size-3.5 text-[#95a0b6]" />
        <span className="text-brand-primary">Book Site Visit</span>
      </div>

      {/* Header Info */}
      <div className="space-y-2">
        <h1 className="text-[30px] font-bold leading-[1.2] text-brand-primary">
          Book Site Visit
        </h1>
        <p className="max-w-275 text-[16px] leading-6 text-brand-secondary">
          Book a visit, inspection, audit, or consultation using your available credits.
        </p>
      </div>

      {/* Credits Card Banner */}
      <CreditsBanner credits={state.credits} />

      {/* Booking Rules Banner */}
      <InfoAlert />

      {/* Two Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form (Column span 7 of 12) */}
        <div className="lg:col-span-7">
          <BookingForm state={state} />
        </div>

        {/* Right Consultant Info (Column span 5 of 12) */}
        <div className="lg:col-span-5">
          <ConsultantCard />
        </div>
      </div>

      {/* Booking History Table */}
      <BookingHistory
        history={state.bookingHistory}
        onCancelClick={state.openCancelModal}
        onDelete={state.deleteBooking}
        onRescheduleClick={state.openRescheduleModal}
        onViewClick={state.openViewModal}
      />

      {/* Reschedule Modal */}
      <RescheduleModal
        booking={state.rescheduleTarget}
        onClose={state.closeRescheduleModal}
        onSubmit={state.submitReschedule}
        isDateValid={state.isDateValid}
      />

      {/* Cancel Modal */}
      <CancelModal
        booking={state.cancelTarget}
        onClose={state.closeCancelModal}
        onSubmit={state.submitCancel}
      />

      {/* Booking Confirmation Modal */}
      <ConfirmationModal
        booking={state.justCreatedBooking}
        onClose={state.closeConfirmationModal}
      />

      {/* Details Modal */}
      <DetailsModal
        booking={state.viewTarget}
        onClose={state.closeViewModal}
        onRescheduleClick={state.openRescheduleModal}
        onCancelClick={state.openCancelModal}
      />
    </div>
  );
}
