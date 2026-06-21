"use client";

import {
  BadgeInfo,
  Bot,
  ChevronRight,
  Send,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookExpertSupportModal } from "./book-expert-support-modal";
import { OpenSupportTicketModal } from "./open-support-ticket-modal";
import { useVirtualAgent } from "./use-virtual-agent";
import {
  DISCLAIMER_TEXT,
  SUPPORT_HELPER_TEXT,
  SUPPORT_OPTIONS,
} from "./types";

const supportLinks: Record<string, string> = {
  "Email Support": "mailto:hello@alanludewigconsulting.com",
};

export function VirtualAgentPage() {
  const state = useVirtualAgent();
  const {
    question,
    setQuestion,
    messages,
    canSend,
    suggestedQuestions,
    quickActions,
    submitQuestion,
    handleSuggestedQuestion,
    handleQuickAction,
    openSupportTicketModal,
    openBookingModal,
  } = state;

  return (
    <>
      <div className="flex flex-col gap-8 text-brand-primary">
        <div className="flex items-center gap-1.5 text-[12px] text-brand-secondary">
          <span>Dashboard</span>
          <ChevronRight className="size-3.5 text-[#95a0b6]" />
          <span className="text-brand-primary">
            Virtual Health &amp; Safety Agent
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-[30px] font-bold leading-[1.2] text-brand-primary">
            Virtual Health &amp; Safety Agent
          </h1>
          <p className="max-w-230 text-[16px] leading-6 text-brand-secondary">
            Ask questions about regulations, control measures, documents, or safe
            systems of work.
          </p>
        </div>

        {/* <section className="rounded-[8px] border border-[#dbeafe] bg-[#eff6ff] px-4.25 py-4">
          <div className="flex items-center gap-2 text-[#1e3a8a]">
            <BadgeInfo className="size-4 shrink-0" />
            <h2 className="text-[14px] font-semibold leading-5">
              Before using the Virtual Agent
            </h2>
          </div>
          <p className="mt-2 text-[14px] leading-[1.6] text-[#1e40af]">
            {DISCLAIMER_TEXT}
          </p>
        </section> */}

        <section className="grid gap-6 xl:grid-cols-[minmax(0,543px)_minmax(0,1fr)]">
          <div className="flex flex-col gap-4">
            <article className="rounded-[12px] border border-[#e3e6ec] bg-white p-4.25 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-['Sansation'] text-[18px] font-bold leading-[1.6] text-brand-primary">
                  Suggested Questions
                </h2>
                <span className="rounded-lg bg-[#f3f4f6] px-2 py-1 font-['Sansation'] text-[12px] leading-[1.6] text-brand-secondary">
                  Managed by admin
                </span>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                {suggestedQuestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleSuggestedQuestion(suggestion)}
                    className="rounded-[6px] border border-[#e3e6ec] bg-[#f3f5f8] px-3.25 py-2.75 text-left font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary transition hover:border-[#c7cfdd] hover:text-brand-primary"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </article>

            <article className="rounded-[12px] bg-[#eff6ff] p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-[#dbeafe] text-[#2563eb]">
                  <ShieldCheck className="size-4" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-['Sansation'] text-[16px] font-bold leading-[1.6] text-brand-primary">
                    Need Expert Support?
                  </h2>
                  <p className="max-w-117.5 font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                    {SUPPORT_HELPER_TEXT}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                {SUPPORT_OPTIONS.map(({ label, variant, icon: Icon }) => {
                  const className = cn(
                    "h-8.5 justify-center rounded-[6px] border-brand-primary px-4 font-['Sansation'] text-[12px] font-bold shadow-none",
                    variant === "primary"
                      ? "bg-brand-primary text-white hover:bg-[#0d1b3a]"
                      : "bg-white text-brand-primary hover:bg-brand-bg-main",
                  );

                  if (label === "Open Support Ticket") {
                    return (
                      <Button
                        key={label}
                        type="button"
                        variant={variant === "primary" ? "default" : "outline"}
                        onClick={openSupportTicketModal}
                        className={className}
                      >
                        <Icon className="size-3.5" />
                        {label}
                      </Button>
                    );
                  }

                  if (label === "Book a Site Visit") {
                    return (
                      <Button
                        key={label}
                        type="button"
                        variant={variant === "primary" ? "default" : "outline"}
                        onClick={openBookingModal}
                        className={className}
                      >
                        <Icon className="size-3.5" />
                        {label}
                      </Button>
                    );
                  }

                  return (
                    <Button
                      key={label}
                      asChild
                      variant={variant === "primary" ? "default" : "outline"}
                      className={className}
                    >
                      <Link href={supportLinks[label]}>
                        <Icon className="size-3.5" />
                        {label}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </article>
          </div>

          <article className="flex min-h-198.25 flex-col overflow-hidden rounded-[12px] border-[1.5px] border-brand-light-grey bg-white">
            <div className="flex-1 space-y-4 px-6 pt-6">
              {messages.map((message) => {
                const isAssistant = message.role === "assistant";

                return (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-3",
                      isAssistant ? "justify-start" : "justify-end",
                    )}
                  >
                    {isAssistant ? (
                      <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#dbeafe] text-[#2563eb]">
                        <Bot className="size-5" />
                      </div>
                    ) : null}

                    <div
                      className={cn(
                        "max-w-2xl rounded-[10px] px-4 py-4 font-['Sansation'] text-[14px] leading-[1.6]",
                        isAssistant
                          ? "bg-[#f3f5f8] text-brand-primary"
                          : "bg-brand-primary text-white",
                      )}
                    >
                      {message.content}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-[#e3e6ec] px-4 py-4">
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    type="button"
                    onClick={() => handleQuickAction(action)}
                    className="rounded-full border border-[#e3e6ec] bg-[#f3f5f8] px-3.25 py-1.75 font-['Sansation'] text-[12px] leading-[1.6] text-brand-secondary transition hover:border-[#cad3e3] hover:text-brand-primary"
                  >
                    {action}
                  </button>
                ))}
              </div>

              <form
                className="mt-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  submitQuestion(question);
                }}
              >
                <div className="flex items-center gap-3">
                  <input
                    value={question}
                    onChange={(event) => setQuestion(event.target.value)}
                    placeholder="Type your question here..."
                    className="h-8.5 min-w-0 flex-1 rounded-[6px] border-[1.5px] border-[#f3f5f8] px-4 font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary outline-none transition placeholder:text-[#a3acba] focus:border-brand-light-grey"
                  />
                  <Button
                    type="submit"
                    disabled={!canSend}
                    className="h-8.5 rounded-[6px] bg-brand-primary px-4 font-['Sansation'] text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
                  >
                    <Send className="size-4.5" />
                    Send
                  </Button>
                </div>
              </form>

              <p className="mt-2 font-['Sansation'] text-[12px] leading-[1.6] text-brand-secondary">
                The Virtual Agent provides general guidance. Always verify with
                competent advice for specific situations.
              </p>
            </div>
          </article>
        </section>
      </div>

      <OpenSupportTicketModal state={state} />
      <BookExpertSupportModal state={state} />
    </>
  );
}
