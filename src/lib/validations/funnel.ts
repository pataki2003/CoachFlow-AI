import { z } from "zod";

import { budgetOptions, timelineOptions } from "@/types/funnel";

export const qualificationFormSchema = z.object({
  goal: z
    .string()
    .trim()
    .min(10, "Enter at least 10 characters.")
    .max(500, "Keep this under 500 characters."),
  challenge: z
    .string()
    .trim()
    .min(10, "Enter at least 10 characters.")
    .max(500, "Keep this under 500 characters."),
  triedBefore: z
    .string()
    .trim()
    .min(5, "Enter at least 5 characters.")
    .max(500, "Keep this under 500 characters."),
  timeline: z
    .string()
    .trim()
    .min(1, "Select a timeline.")
    .refine(
      (value) => (timelineOptions as readonly string[]).includes(value),
      "Select a timeline.",
    ),
  budget: z
    .string()
    .trim()
    .min(1, "Select a budget.")
    .refine(
      (value) => (budgetOptions as readonly string[]).includes(value),
      "Select a budget.",
    ),
});

export const leadCaptureSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
});

export const aiSummaryRequestSchema = z.object({
  answers: z.record(z.string(), z.unknown()),
});
