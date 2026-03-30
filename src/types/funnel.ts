export type FunnelStep =
  | "landing"
  | "qualification"
  | "recommendation"
  | "email-capture"
  | "booking"
  | "success";

export type QualificationFormValues = {
  firstName: string;
  email: string;
  primaryGoal: string;
};

export type LeadCaptureValues = {
  email: string;
};

export type AiSummaryRequest = {
  answers: Record<string, unknown>;
};

export type AiRecommendation = {
  title: string;
  summary: string;
  nextStep: string;
};
