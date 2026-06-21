"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  AGENT_RESPONSES,
  SUPPORT_BOOKING_TIME_OPTIONS,
  SUPPORT_BOOKING_TYPE_OPTIONS,
  DEFAULT_AGENT_RESPONSE,
  INITIAL_AGENT_MESSAGE,
  QUICK_ACTIONS,
  SUGGESTED_QUESTIONS,
  SUPPORT_TICKET_CATEGORY_OPTIONS,
  type AgentMessage,
  type BookingTimeSlot,
  type TicketPriority,
} from "./types";

const buildAssistantReply = (question: string) => {
  const normalizedQuestion = question.toLowerCase();

  const matchedResponse = AGENT_RESPONSES.find(({ keywords }) =>
    keywords.some((keyword) => normalizedQuestion.includes(keyword)),
  );

  return matchedResponse?.response ?? DEFAULT_AGENT_RESPONSE;
};

export function useVirtualAgent() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<AgentMessage[]>([
    {
      id: "assistant-initial",
      role: "assistant",
      content: INITIAL_AGENT_MESSAGE,
    },
  ]);
  const [isSupportTicketModalOpen, setIsSupportTicketModalOpen] =
    useState(false);
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketCategory, setTicketCategory] = useState<string>(
    SUPPORT_TICKET_CATEGORY_OPTIONS[0],
  );
  const [ticketPriority, setTicketPriority] =
    useState<TicketPriority>("Normal");
  const [ticketMessage, setTicketMessage] = useState("");
  const [ticketAttachment, setTicketAttachment] = useState<File | null>(null);
  const [ticketError, setTicketError] = useState("");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingSupportType, setBookingSupportType] = useState<string>(
    SUPPORT_BOOKING_TYPE_OPTIONS[0],
  );
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState<BookingTimeSlot>(
    SUPPORT_BOOKING_TIME_OPTIONS[0],
  );
  const [bookingTopic, setBookingTopic] = useState("");
  const [bookingError, setBookingError] = useState("");

  useEffect(() => {
    if (!isSupportTicketModalOpen && !isBookingModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSupportTicketModalOpen(false);
        setIsBookingModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isSupportTicketModalOpen, isBookingModalOpen]);

  const submitQuestion = (nextQuestion: string) => {
    const trimmedQuestion = nextQuestion.trim();
    if (!trimmedQuestion) return;

    const assistantReply = buildAssistantReply(trimmedQuestion);

    setMessages((current) => [
      ...current,
      {
        id: `user-${current.length + 1}`,
        role: "user",
        content: trimmedQuestion,
      },
      {
        id: `assistant-${current.length + 2}`,
        role: "assistant",
        content: assistantReply,
      },
    ]);
    setQuestion("");
  };

  const handleSuggestedQuestion = (nextQuestion: string) => {
    submitQuestion(nextQuestion);
  };

  const handleQuickAction = (action: (typeof QUICK_ACTIONS)[number]) => {
    const mappedQuestions: Record<(typeof QUICK_ACTIONS)[number], string> = {
      "Ask about RAMS": "What should be included in a method statement?",
      "Ask about COSHH": "How do I complete a COSHH assessment?",
      "Ask about PPE": "What PPE is required for abrasive wheel work?",
      "Ask about Policies":
        "How often should risk assessments be reviewed?",
      "Ask about Site Visits":
        "What documents do I need for a site inspection?",
    };

    submitQuestion(mappedQuestions[action]);
  };

  const openSupportTicketModal = () => {
    setTicketSubject("");
    setTicketCategory(SUPPORT_TICKET_CATEGORY_OPTIONS[0]);
    setTicketPriority("Normal");
    setTicketMessage("");
    setTicketAttachment(null);
    setTicketError("");
    setIsSupportTicketModalOpen(true);
  };

  const closeSupportTicketModal = () => {
    setIsSupportTicketModalOpen(false);
    setTicketError("");
  };

  const openBookingModal = () => {
    setBookingSupportType(SUPPORT_BOOKING_TYPE_OPTIONS[0]);
    setBookingDate("");
    setBookingTime(SUPPORT_BOOKING_TIME_OPTIONS[0]);
    setBookingTopic("");
    setBookingError("");
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setBookingError("");
  };

  const submitSupportTicket = () => {
    if (!ticketSubject.trim()) {
      setTicketError("Subject is required.");
      return;
    }

    setIsSupportTicketModalOpen(false);
    setTicketError("");
    toast.success("Support ticket submitted.", {
      description:
        ticketPriority === "Urgent"
          ? "Your urgent request has been flagged for follow-up."
          : "Your request has been recorded for review.",
    });
  };

  const submitBookingRequest = () => {
    if (!bookingDate.trim()) {
      setBookingError("Preferred date is required.");
      return;
    }

    setIsBookingModalOpen(false);
    setBookingError("");
    toast.success("Booking request submitted.", {
      description: "Your expert support request has been sent for scheduling.",
    });
  };

  const canSend = question.trim().length > 0;
  const hasTicketAttachment = Boolean(ticketAttachment);

  const suggestedQuestions = useMemo(() => [...SUGGESTED_QUESTIONS], []);
  const quickActions = useMemo(() => [...QUICK_ACTIONS], []);
  const ticketCategoryOptions = useMemo(
    () => [...SUPPORT_TICKET_CATEGORY_OPTIONS],
    [],
  );
  const bookingSupportTypeOptions = useMemo(
    () => [...SUPPORT_BOOKING_TYPE_OPTIONS],
    [],
  );
  const bookingTimeOptions = useMemo(
    () => [...SUPPORT_BOOKING_TIME_OPTIONS],
    [],
  );

  return {
    question,
    setQuestion,
    messages,
    canSend,
    suggestedQuestions,
    quickActions,
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
    hasTicketAttachment,
    ticketCategoryOptions,
    bookingSupportTypeOptions,
    bookingTimeOptions,
    submitQuestion,
    handleSuggestedQuestion,
    handleQuickAction,
    openSupportTicketModal,
    closeSupportTicketModal,
    submitSupportTicket,
    openBookingModal,
    closeBookingModal,
    submitBookingRequest,
  };
}
