export const currentLevelOptions = [
  "Just getting started",
  "Back into training after a break",
  "Training inconsistently",
  "Training regularly but not seeing results",
] as const;

export const budgetOptions = [
  "Under 30,000 HUF/month",
  "30,000-80,000 HUF/month",
  "80,000-150,000 HUF/month",
  "150,000+ HUF/month",
  "Not sure yet",
] as const;

export const timeCommitmentOptions = [
  "2 workouts a week",
  "3 workouts a week",
  "4 workouts a week",
  "5+ workouts a week",
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
