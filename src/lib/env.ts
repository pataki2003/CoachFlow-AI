import { z } from "zod";

const emptyStringToUndefined = (value: unknown) => {
  if (typeof value !== "string") {
    return value;
  }

  const trimmedValue = value.trim();

  return trimmedValue === "" ? undefined : trimmedValue;
};

const optionalStringSchema = z.preprocess(
  emptyStringToUndefined,
  z.string().min(1).optional(),
);

const optionalUrlSchema = z.preprocess(
  emptyStringToUndefined,
  z.string().url().optional(),
);

const publicEnvSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_BOOKING_URL: optionalUrlSchema,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: optionalStringSchema,
  NEXT_PUBLIC_SUPABASE_URL: optionalUrlSchema,
});

const serverEnvSchema = z.object({
  OPENAI_API_KEY: optionalStringSchema,
  RESEND_API_KEY: optionalStringSchema,
  SUPABASE_SERVICE_ROLE_KEY: optionalStringSchema,
});

export type PublicEnv = z.infer<typeof publicEnvSchema>;
export type ServerEnv = z.infer<typeof serverEnvSchema>;

export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_APP_URL:
    emptyStringToUndefined(process.env.NEXT_PUBLIC_APP_URL) ??
    "http://localhost:3000",
  NEXT_PUBLIC_BOOKING_URL: process.env.NEXT_PUBLIC_BOOKING_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
});

export function getServerEnv(): ServerEnv {
  if (typeof window !== "undefined") {
    throw new Error("getServerEnv() can only be called on the server.");
  }

  return serverEnvSchema.parse({
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  });
}
