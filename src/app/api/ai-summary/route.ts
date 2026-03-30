import { APIError } from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { NextResponse } from "next/server";

import {
  AI_SUMMARY_MODEL,
  AI_SUMMARY_REASONING_EFFORT,
  getOpenAIClient,
} from "@/lib/openai";
import {
  aiRecommendationSchema,
  aiSummaryRequestSchema,
} from "@/lib/validations/funnel";

const AI_SUMMARY_PROMPT = `
You are Alex Carter's concise business growth audit assistant.

Use the submitted answers to write a short personalized growth audit summary for an online expert who may be a fit for Alex Carter's business growth coaching.

Rules:
- Return valid JSON only.
- Do not include markdown, code fences, bullets, or extra keys.
- Use exactly these keys: title, summary, nextStep.
- Title should usually be 4 to 8 words.
- Summary should be 2 to 4 sentences.
- NextStep should be 1 to 2 sentences.
- Reflect the user's goal, challenge, what they have tried, timeline, and budget when relevant.
- Identify the most likely business bottleneck without sounding alarmist.
- When relevant, frame the bottleneck around positioning, offer clarity, lead quality, or conversion flow.
- Keep the tone clear, practical, concise, premium, and professional.
- Write like a trusted business growth coach, not a generic SaaS tool.
- Make the next step feel like a useful coaching move, not a hard sell.
- Avoid hype, guaranteed outcomes, manipulative phrasing, medical claims, legal claims, financial promises, or extreme language.
`.trim();

function formatAnswersForPrompt(body: {
  goal: string;
  challenge: string;
  triedBefore: string;
  timeline: string;
  budget: string;
}) {
  return [
    `Goal: ${body.goal}`,
    `Challenge: ${body.challenge}`,
    `Tried before: ${body.triedBefore}`,
    `Timeline: ${body.timeline}`,
    `Budget: ${body.budget}`,
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
      { error: "Please complete all qualification answers." },
      { status: 400 },
    );
  }

  let openaiClient;

  try {
    openaiClient = getOpenAIClient();
  } catch (error) {
    console.error("OpenAI client configuration error:", error);

    return NextResponse.json(
      { error: "AI recommendations are not configured yet." },
      { status: 500 },
    );
  }

  try {
    const completion = await openaiClient.chat.completions.parse({
      model: AI_SUMMARY_MODEL,
      reasoning_effort: AI_SUMMARY_REASONING_EFFORT,
      max_completion_tokens: 240,
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
      response_format: zodResponseFormat(
        aiRecommendationSchema,
        "coach_funnel_recommendation",
      ),
    });

    const recommendation = completion.choices[0]?.message.parsed;

    if (!recommendation) {
      return NextResponse.json(
        {
          error:
            "The recommendation could not be generated in the expected format.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json(aiRecommendationSchema.parse(recommendation));
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
          { error: "AI recommendations are not configured correctly." },
          { status: 500 },
        );
      }
    }

    if (error instanceof Error && error.message.includes("OPENAI_API_KEY")) {
      return NextResponse.json(
        { error: "AI recommendations are not configured yet." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: "Unable to generate a recommendation right now." },
      { status: 502 },
    );
  }
}
