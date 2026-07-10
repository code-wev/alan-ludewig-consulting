export type BookingStatus = 'Confirmed' | 'Completed' | 'Cancelled';

export interface BookingHistoryItem {
  id: string;
  visitType: string;
  date: string;
  time: string;
  duration: string;
  status: BookingStatus;
  consultant: string;
  siteLocation?: string;
  ref?: string;
  projectCode?: string;
  accessInstructions?: string;
  keyRisks?: string;
}

export interface BookingInput {
  visitType: string;
  preferredDate: string;
  preferredTime: string;
  siteLocation: string;
  reason: string;
  additionalNotes: string;
}

export const VISIT_TYPES = [
  'Site Visit / Inspection',
  'Teams Consultation',
  'Follow-up Call',
  'Health & Safety Audit',
  'Risk Assessment Review',
] as const;

export const TIME_SLOTS = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
] as const;

export const INITIAL_HISTORY: BookingHistoryItem[] = [
  {
    id: '1',
    visitType: 'Workshop Inspection',
    date: '24 May 2026',
    time: '10:00 AM',
    duration: 'Full Day',
    status: 'Confirmed',
    consultant: 'Sarah Mitchell',
    siteLocation: 'Canary Wharf Phase 4 Development Office',
    ref: 'ALC-2026-8892',
    projectCode: 'PRJ-LON-004-24',
    accessInstructions: 'Enter via North Gate Security. Provide Booking Ref BK-2024-0892. Temporary visitor badge required for Floor 12 access. Escort provided by Site Manager.',
    keyRisks: 'Active crane operations in zone B. Full PPE (Hard Hat, Hi-Vis, Boots) mandatory for site walk-through sections.',
  },
  {
    id: '2',
    visitType: 'Teams Consultation',
    date: '24 May 2026',
    time: '10:00 AM',
    duration: '1 Hour',
    status: 'Completed',
    consultant: 'Sarah Mitchell',
    siteLocation: 'Remote (Microsoft Teams)',
    ref: 'ALC-2026-1142',
    projectCode: 'PRJ-GEN-002-24',
    accessInstructions: 'Teams link will be sent in calendar invite. Ensure microphone and video are configured.',
    keyRisks: 'None.',
  },
  {
    id: '3',
    visitType: 'Follow-up Call',
    date: '24 May 2026',
    time: '10:00 AM',
    duration: 'Full Day',
    status: 'Cancelled',
    consultant: 'Sarah Mitchell',
    siteLocation: 'Remote Call',
    ref: 'ALC-2026-5120',
    projectCode: 'PRJ-GEN-009-24',
    accessInstructions: 'Consultant will call your primary contact number.',
    keyRisks: 'None.',
  },
];
