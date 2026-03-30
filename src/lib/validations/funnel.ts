import { z } from "zod";

type QualificationFormSchemaConfig = {
  options: {
    budget: readonly string[];
    currentLevel: readonly string[];
    timeCommitment: readonly string[];
  };
  validation: {
    biggestStruggleMax: string;
    biggestStruggleMin: string;
    budgetInvalid: string;
    currentLevelRequired: string;
    goalMax: string;
    goalMin: string;
    timeCommitmentRequired: string;
  };
};

export function getQualificationFormSchema(
  config: QualificationFormSchemaConfig,
) {
  return z.object({
    goal: z
      .string()
      .trim()
      .min(10, config.validation.goalMin)
      .max(500, config.validation.goalMax),
    currentLevel: z
      .string()
      .trim()
      .min(1, config.validation.currentLevelRequired)
      .refine(
        (value) => config.options.currentLevel.includes(value),
        config.validation.currentLevelRequired,
      ),
    biggestStruggle: z
      .string()
      .trim()
      .min(10, config.validation.biggestStruggleMin)
      .max(500, config.validation.biggestStruggleMax),
    timeCommitment: z
      .string()
      .trim()
      .min(1, config.validation.timeCommitmentRequired)
      .refine(
        (value) => config.options.timeCommitment.includes(value),
        config.validation.timeCommitmentRequired,
      ),
    budget: z
      .string()
      .trim()
      .refine(
        (value) => value === "" || config.options.budget.includes(value),
        config.validation.budgetInvalid,
      ),
  });
}

export const aiSummaryRequestSchema = z.object({
  answers: z.object({
    goal: z.string().trim().min(10).max(500),
    currentLevel: z.string().trim().min(1).max(120),
    biggestStruggle: z.string().trim().min(10).max(500),
    timeCommitment: z.string().trim().min(1).max(120),
    budget: z.string().trim().max(120),
  }),
  language: z.enum(["en", "hu"]),
});

export const aiPlanSchema = z.object({
  goalClarity: z
    .string()
    .trim()
    .min(20, "Goal clarity is too short.")
    .max(240, "Goal clarity is too long."),
  biggestBottleneck: z
    .string()
    .trim()
    .min(20, "Biggest bottleneck is too short.")
    .max(260, "Biggest bottleneck is too long."),
  focusNext7Days: z
    .string()
    .trim()
    .min(20, "Focus for the next 7 days is too short.")
    .max(260, "Focus for the next 7 days is too long."),
  simplePlan: z
    .string()
    .trim()
    .min(40, "Simple plan is too short.")
    .max(520, "Simple plan is too long."),
  softCta: z
    .string()
    .trim()
    .min(10, "Soft CTA is too short.")
    .max(220, "Soft CTA is too long."),
});
