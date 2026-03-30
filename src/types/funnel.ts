export const timelineOptions = [
  "As soon as possible",
  "Within 30 days",
  "In the next 2-3 months",
  "Just exploring for now",
] as const;

export const budgetOptions = [
  "Under $100",
  "$100-$300",
  "$300-$1000",
  "$1000+",
  "Not sure yet",
] as const;

export type FunnelStep =
  | "qualification"
  | "email-capture"
  | "ready-for-booking";

export type QualificationFormValues = {
  goal: string;
  challenge: string;
  triedBefore: string;
  timeline: string;
  budget: string;
};

export type EmailCaptureValues = {
  email: string;
};

export type AiRecommendation = {
  title: string;
  summary: string;
  nextStep: string;
};

export type AiSummaryRequest = {
  answers: QualificationFormValues;
};
