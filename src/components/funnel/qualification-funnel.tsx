"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { QualificationForm } from "@/components/funnel/qualification-form";
import { RecommendationPreview } from "@/components/funnel/recommendation-preview";
import { qualificationFormSchema } from "@/lib/validations/funnel";
import type {
  QualificationFormValues,
  RecommendationPreviewData,
} from "@/types/funnel";

const defaultValues: QualificationFormValues = {
  goal: "",
  challenge: "",
  triedBefore: "",
  timeline: "",
  budget: "",
};

function shortenText(value: string, limit: number) {
  const trimmedValue = value.trim();

  if (trimmedValue.length <= limit) {
    return trimmedValue;
  }

  return `${trimmedValue.slice(0, limit).trimEnd()}...`;
}

function buildRecommendationPreview(
  values: QualificationFormValues,
): RecommendationPreviewData {
  const goal = shortenText(values.goal, 90);
  const challenge = shortenText(values.challenge, 90);

  return {
    badge: "Preview result",
    title: "Recommended next step",
    summary: `Based on your goal of ${goal.toLowerCase()} and your challenge with ${challenge.toLowerCase()}, the best next move is a more focused support system with a clear action plan instead of another disconnected tactic.`,
    nextStep:
      "In the next phase, this recommendation will be generated dynamically with AI. For now, this preview shows the structure the live result will follow before email capture and booking are added.",
  };
}

export function QualificationFunnel() {
  const [submittedValues, setSubmittedValues] =
    useState<QualificationFormValues | null>(null);

  const form = useForm<QualificationFormValues>({
    defaultValues,
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(qualificationFormSchema),
  });

  async function handleSubmit(values: QualificationFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 350));
    setSubmittedValues(values);
  }

  return (
    <div className="mt-8 rounded-[1.75rem] border border-dashed border-slate-300/90 bg-white/68 p-5 sm:p-6 lg:p-8">
      {submittedValues ? (
        <RecommendationPreview
          recommendation={buildRecommendationPreview(submittedValues)}
          values={submittedValues}
        />
      ) : (
        <QualificationForm form={form} onSubmit={handleSubmit} />
      )}
    </div>
  );
}
