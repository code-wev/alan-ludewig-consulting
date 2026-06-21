import { ImagePlus, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectField } from "@/components/saved-files/components/select-field";
import { useVirtualAgent } from "./use-virtual-agent";

export function OpenSupportTicketModal({
  state,
}: {
  state: ReturnType<typeof useVirtualAgent>;
}) {
  const {
    isSupportTicketModalOpen,
    ticketSubject,
    setTicketSubject,
    ticketCategory,
    setTicketCategory,
    ticketPriority,
    setTicketPriority,
    ticketMessage,
    setTicketMessage,
    ticketAttachment,
    setTicketAttachment,
    ticketError,
    setTicketError,
    hasTicketAttachment,
    ticketCategoryOptions,
    closeSupportTicketModal,
    submitSupportTicket,
  } = state;

  if (!isSupportTicketModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
      onClick={closeSupportTicketModal}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="support-ticket-title"
        className="w-full max-w-223.5 max-h-[90vh] overflow-y-auto no-scrollbar rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative flex flex-col gap-6 px-6 py-6">
          <div className="flex min-h-8 items-start pr-12">
            <h2
              id="support-ticket-title"
              className="text-[20px] font-bold leading-[1.6] text-brand-primary"
            >
              Open Support Ticket
            </h2>
          </div>

          <button
            type="button"
            onClick={closeSupportTicketModal}
            className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
            aria-label="Close support ticket modal"
          >
            <X className="size-4.5" />
          </button>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="support-ticket-subject"
              className="text-[14px] leading-[1.6] text-brand-primary"
            >
              Subject
            </label>
            <input
              id="support-ticket-subject"
              value={ticketSubject}
              onChange={(event) => {
                setTicketSubject(event.target.value);
                if (ticketError) setTicketError("");
              }}
              placeholder="Briefly describe your question"
              className={cn(
                "h-12.75 w-full rounded-[6px] border-[1.5px] bg-white px-4 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary",
                ticketError ? "border-[#d92d20]" : "border-[#e3e6ec]",
              )}
            />
            {ticketError ? (
              <p className="text-[13px] font-medium text-[#b42318]">
                {ticketError}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="support-ticket-category"
              className="text-[14px] leading-[1.6] text-brand-primary"
            >
              Default Category
            </label>
            <SelectField
              id="support-ticket-category"
              value={ticketCategory}
              onChange={setTicketCategory}
              options={ticketCategoryOptions}
              className="w-full"
              selectClassName="h-[51px] rounded-[6px] border-[1.5px] border-[#e3e6ec] text-[14px] leading-[1.6] text-brand-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[14px] leading-[1.6] text-brand-primary">
              Priority
            </span>
            <div className="flex flex-wrap items-center gap-8">
              {(["Normal", "Urgent"] as const).map((priority) => {
                const isSelected = ticketPriority === priority;

                return (
                  <button
                    key={priority}
                    type="button"
                    onClick={() => setTicketPriority(priority)}
                    className="flex items-center gap-2 text-left"
                    role="radio"
                    aria-checked={isSelected}
                  >
                    <span
                      className={cn(
                        "flex size-4.5 items-center justify-center rounded-full border transition",
                        isSelected
                          ? "border-brand-primary bg-brand-primary"
                          : "border-brand-secondary bg-white",
                      )}
                    >
                      {isSelected ? (
                        <span className="size-2 rounded-full bg-white" />
                      ) : null}
                    </span>
                    <span
                      className={cn(
                        "text-[14px] leading-[1.6]",
                        isSelected ? "text-brand-primary" : "text-brand-secondary",
                      )}
                    >
                      {priority}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="support-ticket-message"
              className="text-[14px] leading-[1.6] text-brand-primary"
            >
              Message
            </label>
            <textarea
              id="support-ticket-message"
              value={ticketMessage}
              onChange={(event) => setTicketMessage(event.target.value)}
              placeholder="Add a short note about this project or folder"
              rows={4}
              className="min-h-19.5 w-full resize-none rounded-[6px] border-[1.5px] border-[#e3e6ec] bg-white px-4 py-3 text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] leading-[1.6] text-brand-primary">
              Address / Location Details
            </label>
            <label className="cursor-pointer rounded-[8px] border-2 border-dashed border-[#e3e6ec] px-6 py-6.5 text-center transition hover:border-[#c9d3e5]">
              <input
                type="file"
                className="sr-only"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={(event) =>
                  setTicketAttachment(event.target.files?.[0] ?? null)
                }
              />
              <div className="flex flex-col items-center gap-1">
                <ImagePlus className="size-6.5 text-[#2563eb]" />
                <p className="pt-1 text-[14px] font-bold leading-[1.6] text-brand-primary">
                  {hasTicketAttachment
                    ? ticketAttachment?.name
                    : "Upload supporting file or screenshot"}
                </p>
                <p className="text-[12px] leading-[1.6] text-brand-secondary">
                  Supported formats: PDF, DOCX, JPG, PNG
                </p>
              </div>
            </label>
          </div>

          <div className="flex items-start gap-4 rounded-[8px] border border-[rgba(173,198,255,0.5)] bg-[#e4ebfe] px-4.25 py-4.25">
            <Info className="mt-0.5 size-5 shrink-0 text-brand-primary" />
            <p className="text-[14px] leading-[1.6] text-brand-primary">
              If your question is urgent or requires site-specific advice, you
              may also book a site visit or consultation.
            </p>
          </div>

          <div className="pt-1">
            <Button
              type="button"
              onClick={submitSupportTicket}
              className="h-8.5 rounded-[6px] bg-brand-primary px-4 text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
            >
              Submit Ticket
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
