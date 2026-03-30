import { z } from "zod";

import {
  budgetOptions,
  currentLevelOptions,
  timeCommitmentOptions,
} from "@/types/funnel";

export const qualificationFormSchema = z.object({
  goal: z
    .string()
    .trim()
    .min(10, "Enter at least 10 characters.")
    .max(500, "Keep this under 500 characters."),
  currentLevel: z
    .string()
    .trim()
    .min(1, "Select your current level.")
    .refine(
      (value) => (currentLevelOptions as readonly string[]).includes(value),
      "Select your current level.",
    ),
  biggestStruggle: z
    .string()
    .trim()
    .min(10, "Enter at least 10 characters.")
    .max(500, "Keep this under 500 characters."),
  timeCommitment: z
    .string()
    .trim()
    .min(1, "Select your time commitment.")
    .refine(
      (value) => (timeCommitmentOptions as readonly string[]).includes(value),
      "Select your time commitment.",
    ),
  budget: z
    .string()
    .trim()
    .refine(
      (value) =>
        value === "" || (budgetOptions as readonly string[]).includes(value),
      "Select a valid budget range or leave it blank.",
    ),
});

export const aiSummaryRequestSchema = z.object({
  answers: qualificationFormSchema,
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
