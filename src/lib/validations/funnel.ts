import { z } from "zod";

export const qualificationFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  email: z.string().trim().email("Enter a valid email address"),
  primaryGoal: z.string().trim().min(1, "Primary goal is required").max(500),
});

export const leadCaptureSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
});

export const aiSummaryRequestSchema = z.object({
  answers: z.record(z.string(), z.unknown()),
});
