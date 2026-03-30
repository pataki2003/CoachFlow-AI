export const currentLevelOptions = [
  "Just getting started",
  "Getting some inquiries",
  "Signing clients inconsistently",
  "Booked but want better-fit clients",
] as const;

export const budgetOptions = [
  "Under $300",
  "$300-$1,000",
  "$1,000-$3,000",
  "$3,000+",
  "Not sure yet",
] as const;

export const timeCommitmentOptions = [
  "Under 3 hours a week",
  "3 to 5 hours a week",
  "5 to 10 hours a week",
  "10+ hours a week",
] as const;

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
};
