"use client";

import { useMemo, useState } from "react";
import {
  AGENT_RESPONSES,
  DEFAULT_AGENT_RESPONSE,
  INITIAL_AGENT_MESSAGE,
  QUICK_ACTIONS,
  SUGGESTED_QUESTIONS,
  type AgentMessage,
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

  const canSend = question.trim().length > 0;

  const suggestedQuestions = useMemo(() => [...SUGGESTED_QUESTIONS], []);
  const quickActions = useMemo(() => [...QUICK_ACTIONS], []);

  return {
    question,
    setQuestion,
    messages,
    canSend,
    suggestedQuestions,
    quickActions,
    submitQuestion,
    handleSuggestedQuestion,
    handleQuickAction,
  };
}
