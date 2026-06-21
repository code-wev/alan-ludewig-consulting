import { Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectField } from "@/components/saved-files/components/select-field";
import { useVirtualAgent } from "./use-virtual-agent";

export function BookExpertSupportModal({
  state,
}: {
  state: ReturnType<typeof useVirtualAgent>;
}) {
  const {
    isBookingModalOpen,
    bookingSupportType,
    setBookingSupportType,
    bookingDate,
    setBookingDate,
    bookingTime,
    setBookingTime,
    bookingTopic,
    setBookingTopic,
    bookingError,
    setBookingError,
    bookingSupportTypeOptions,
    bookingTimeOptions,
    closeBookingModal,
    submitBookingRequest,
  } = state;

  if (!isBookingModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
      onClick={closeBookingModal}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-support-title"
        className="w-full max-w-223.5 max-h-[90vh] overflow-y-auto no-scrollbar rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative flex flex-col gap-6 px-6 py-6">
          <div className="flex min-h-8 items-start pr-12">
            <h2
              id="book-support-title"
              className="text-[20px] font-bold leading-[1.6] text-brand-primary"
            >
              Book Expert Support
            </h2>
          </div>

          <button
            type="button"
            onClick={closeBookingModal}
            className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
            aria-label="Close expert support booking modal"
          >
            <X className="size-4.5" />
          </button>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="booking-support-type"
              className="text-[14px] leading-[1.6] text-brand-primary"
            >
              Support Type
            </label>
            <SelectField
              id="booking-support-type"
              value={bookingSupportType}
              onChange={setBookingSupportType}
              options={bookingSupportTypeOptions}
              className="w-full"
              selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="booking-date"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Preferred Date
              </label>
              <input
                id="booking-date"
                type="date"
                value={bookingDate}
                onChange={(event) => {
                  setBookingDate(event.target.value);
                  if (bookingError) setBookingError("");
                }}
                className={cn(
                  "h-12.75 w-full rounded-[6px] border-[1.5px] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition focus:border-brand-primary",
                  bookingError ? "border-[#d92d20]" : "border-[#e3e6ec]",
                )}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="booking-time"
                className="text-[14px] leading-[1.6] text-brand-primary"
              >
                Preferred Time
              </label>
              <SelectField
                id="booking-time"
                value={bookingTime}
                onChange={(value) =>
                  setBookingTime(
                    value as
                      | "Morning (09:00 - 12:00)"
                      | "Afternoon (13:00 - 17:00)",
                  )
                }
                options={bookingTimeOptions}
                className="w-full"
                selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
              />
            </div>
          </div>

          {bookingError ? (
            <p className="-mt-2 text-[13px] font-medium text-[#b42318]">
              {bookingError}
            </p>
          ) : null}

          <div className="flex flex-col gap-2">
            <label
              htmlFor="booking-topic"
              className="text-[14px] leading-[1.6] text-brand-primary"
            >
              Topic
            </label>
            <textarea
              id="booking-topic"
              value={bookingTopic}
              onChange={(event) => setBookingTopic(event.target.value)}
              placeholder="Briefly explain what you need help with"
              rows={4}
              className="min-h-19.5 w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
            />
          </div>

          <div className="flex items-start gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] px-4.25 py-4.25">
            <Info className="mt-0.5 size-5 shrink-0 text-brand-primary" />
            <div className="space-y-0.5 text-brand-primary">
              <p className="text-[14px] leading-[1.6]">
                Available site visit credits: 2.
              </p>
              <p className="text-[12px] leading-[1.6]">
                Priority support may require purchase from Buy Extras.
              </p>
            </div>
          </div>

          <div className="pt-1">
            <Button
              type="button"
              onClick={submitBookingRequest}
              className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
            >
              Continue to Booking
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
