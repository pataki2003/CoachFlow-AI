import "server-only";

import OpenAI from "openai";

import { getServerEnv } from "@/lib/env";

let openaiClient: OpenAI | null = null;

export const AI_SUMMARY_MODEL = "gpt-5-mini";
export const AI_SUMMARY_REASONING_EFFORT = "minimal" as const;

export function getOpenAIClient() {
  if (openaiClient) {
    return openaiClient;
  }

  const { OPENAI_API_KEY } = getServerEnv();

  if (!OPENAI_API_KEY) {
    throw new Error(
      "OPENAI_API_KEY is required before the OpenAI client can be used.",
    );
  }

  openaiClient = new OpenAI({ apiKey: OPENAI_API_KEY });

  return openaiClient;
}
