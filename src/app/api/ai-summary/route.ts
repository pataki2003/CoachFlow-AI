import { APIError } from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { NextResponse } from "next/server";

import {
  AI_SUMMARY_MODEL,
  AI_SUMMARY_REASONING_EFFORT,
  getOpenAIClient,
} from "@/lib/openai";
import { aiPlanSchema, aiSummaryRequestSchema } from "@/lib/validations/funnel";

const AI_SUMMARY_PROMPT = `
You are Alex Carter, a concise online personal trainer.

Use the submitted answers to write a short personalized starter plan for a busy adult who wants to lose fat, build muscle, and stay consistent.

Rules:
- Return valid JSON only.
- Do not include markdown, code fences, bullets, or extra keys.
- Use exactly these keys: goalClarity, biggestBottleneck, focusNext7Days, simplePlan, softCta.
- Keep every field concise, readable, and action-oriented.
- Reflect the user's goal, current level, biggest struggle, time commitment, and budget when relevant.
- goalClarity should clarify what they actually need to achieve next in a realistic fitness context.
- biggestBottleneck should identify the most likely obstacle without sounding alarmist or judgmental.
- focusNext7Days should explain the highest-leverage focus for the next week.
- simplePlan should be a short practical plan, not a long essay.
- softCta should feel like a natural invitation to book a coaching call or DM Alex if they want help applying the plan.
- When relevant, frame the bottleneck around training structure, recovery, consistency, nutrition habits, or unrealistic expectations.
- Keep the tone clear, practical, concise, premium, and professional.
- Write like a trusted trainer giving a strong first-pass recommendation, not a generic app or system response.
- Do not promise results or use manipulative language.
- Avoid hype, guaranteed outcomes, medical claims, injury treatment advice, extreme dieting, or bodybuilding-style language.
`.trim();

function formatAnswersForPrompt(body: {
  goal: string;
  currentLevel: string;
  biggestStruggle: string;
  timeCommitment: string;
  budget?: string;
}) {
  return [
    `Goal: ${body.goal}`,
    `Current level: ${body.currentLevel}`,
    `Biggest struggle: ${body.biggestStruggle}`,
    `Time commitment: ${body.timeCommitment}`,
    `Budget: ${body.budget || "Not specified"}`,
  ].join("\n");
}

export async function POST(request: Request) {
  let requestBody: unknown;

  try {
    requestBody = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsedRequest = aiSummaryRequestSchema.safeParse(requestBody);

  if (!parsedRequest.success) {
    return NextResponse.json(
      { error: "Please complete all plan answers." },
      { status: 400 },
    );
  }

  let openaiClient;

  try {
    openaiClient = getOpenAIClient();
  } catch (error) {
    console.error("OpenAI client configuration error:", error);

    return NextResponse.json(
      { error: "AI plans are not configured yet." },
      { status: 500 },
    );
  }

  try {
    const completion = await openaiClient.chat.completions.parse({
      model: AI_SUMMARY_MODEL,
      reasoning_effort: AI_SUMMARY_REASONING_EFFORT,
      max_completion_tokens: 420,
      messages: [
        {
          role: "developer",
          content: AI_SUMMARY_PROMPT,
        },
        {
          role: "user",
          content: formatAnswersForPrompt(parsedRequest.data.answers),
        },
      ],
      response_format: zodResponseFormat(aiPlanSchema, "coachflow_ai_plan"),
    });

    const plan = completion.choices[0]?.message.parsed;

    if (!plan) {
      return NextResponse.json(
        {
          error: "The plan could not be generated in the expected format.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json(aiPlanSchema.parse(plan));
  } catch (error) {
    console.error("AI summary request failed:", error);

    if (error instanceof APIError) {
      if (error.status === 429) {
        return NextResponse.json(
          { error: "The AI service is busy right now. Please try again." },
          { status: 503 },
        );
      }

      if (error.status === 401 || error.status === 403) {
        return NextResponse.json(
          { error: "AI plans are not configured correctly." },
          { status: 500 },
        );
      }
    }

    if (error instanceof Error && error.message.includes("OPENAI_API_KEY")) {
      return NextResponse.json(
        { error: "AI plans are not configured yet." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: "Unable to generate a plan right now." },
      { status: 502 },
    );
  }
}
