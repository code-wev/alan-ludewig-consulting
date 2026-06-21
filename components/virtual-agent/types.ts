import { ClipboardPlus, Mail, ShieldCheck } from "lucide-react";

export type AgentMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

export type SupportOption = {
  label: string;
  action: "modal" | "link";
  variant: "primary" | "outline";
  icon: typeof ShieldCheck;
};

export type TicketPriority = "Normal" | "Urgent";
export type BookingTimeSlot =
  | "Morning (09:00 - 12:00)"
  | "Afternoon (13:00 - 17:00)";

export const SUGGESTED_QUESTIONS = [
  "What control measures should I use for working at height?",
  "What PPE is required for abrasive wheel work?",
  "How do I complete a COSHH assessment?",
  "What should be included in a method statement?",
  "How often should risk assessments be reviewed?",
  "What documents do I need for a site inspection?",
] as const;

export const QUICK_ACTIONS = [
  "Ask about RAMS",
  "Ask about COSHH",
  "Ask about PPE",
  "Ask about Policies",
  "Ask about Site Visits",
] as const;

export const SUPPORT_OPTIONS: SupportOption[] = [
  {
    label: "Open Support Ticket",
    action: "modal",
    variant: "primary",
    icon: ClipboardPlus,
  },
  {
    label: "Book a Site Visit",
    action: "modal",
    variant: "outline",
    icon: ShieldCheck,
  },
  {
    label: "Email Support",
    action: "link",
    variant: "outline",
    icon: Mail,
  },
] as const;

export const SUPPORT_TICKET_CATEGORY_OPTIONS = [
  "RAMS / Method Statement",
  "COSHH Assessment",
  "Risk Assessment",
  "Site Inspection",
  "Training",
  "General Support",
] as const;

export const SUPPORT_BOOKING_TYPE_OPTIONS = [
  "Site Visit / Inspection",
  "Consultation Call",
  "Compliance Review",
  "RAMS Support Session",
] as const;

export const SUPPORT_BOOKING_TIME_OPTIONS = [
  "Morning (09:00 - 12:00)",
  "Afternoon (13:00 - 17:00)",
] as const;

export const INITIAL_AGENT_MESSAGE =
  "Hello, I’m your Virtual Health & Safety Agent. I can help with regulations, control measures, documents, and safe systems of work. How can I assist you today?";

export const DISCLAIMER_TEXT =
  "This Virtual Agent provides general health & safety guidance based on available resources. Responses should not replace competent professional advice for site-specific risks. Users must review guidance and ensure it is suitable for their workplace. For urgent, high-risk, or complex matters, contact Alan Ludewig Consulting directly. Chat history may be reviewed to improve support and identify common client questions. Do not enter sensitive personal data unless required for support.";

export const AGENT_RESPONSES: Array<{
  keywords: string[];
  response: string;
}> = [
  {
    keywords: ["height", "working at height", "ladder", "scaffold"],
    response:
      "For work at height, start by avoiding the task where possible, then use the safest access equipment reasonably practicable. Confirm the work area is planned, supervised, and carried out by competent people. Check edge protection, platform condition, inspection status, rescue arrangements, and weather exposure before work starts.",
  },
  {
    keywords: ["ppe", "abrasive wheel", "wheel", "grinding"],
    response:
      "Abrasive wheel work usually needs task-specific eye protection, hearing protection, suitable gloves where entanglement risk is controlled, and durable workwear or face protection depending on spark and fragment exposure. The key point is that PPE must match the wheel, the material, and the guarding arrangement rather than being selected generically.",
  },
  {
    keywords: ["coshh", "substance", "chemical"],
    response:
      "A COSHH assessment should identify the substance, how workers are exposed, what health harm could result, and which controls keep exposure as low as reasonably practicable. Include storage, handling, PPE, emergency arrangements, disposal, and whether safer substitution is possible. The assessment should reflect the real task, not just the product data sheet.",
  },
  {
    keywords: ["method statement", "statement", "safe system"],
    response:
      "A method statement should explain the sequence of work, the equipment and materials involved, the control measures from the risk assessment, who is responsible, and what to do if conditions change. It should be clear enough for the people doing the work to follow it safely on site.",
  },
  {
    keywords: ["review", "risk assessment", "assessments"],
    response:
      "Risk assessments should be reviewed whenever the work changes, after an incident or near miss, when controls are no longer effective, or when new information becomes available. Even without a trigger event, they should be checked periodically to confirm the controls still reflect site conditions.",
  },
  {
    keywords: ["site inspection", "inspection", "documents"],
    response:
      "For a site inspection, you would usually want the relevant RAMS, key risk assessments, induction records, training or competency evidence where needed, inspection registers, permit records, and any recent actions from previous visits. The exact document set depends on the work scope and client requirements.",
  },
];

export const DEFAULT_AGENT_RESPONSE =
  "I can help you structure the question, but this is still general guidance. Include the task, environment, equipment, and key risk factors involved, and I’ll give a more focused health and safety answer.";

export const SUPPORT_HELPER_TEXT =
  "If the Virtual Agent cannot fully answer your question, choose one of the support options below.";
