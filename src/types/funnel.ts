import type { LanguageCode } from "@/lib/site-preferences";

export type QualificationFormValues = {
  goal: string;
  currentLevel: string;
  biggestStruggle: string;
  timeCommitment: string;
  budget: string;
};

export type AiPlan = {
  goalClarity: string;
  biggestBottleneck: string;
  focusNext7Days: string;
  simplePlan: string;
  softCta: string;
};

export type AiSummaryRequest = {
  answers: QualificationFormValues;
  language: LanguageCode;
};
