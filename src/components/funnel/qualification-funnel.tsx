"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { QualificationForm } from "@/components/funnel/qualification-form";
import { RecommendationPreview } from "@/components/funnel/recommendation-preview";
import { aiPlanSchema, qualificationFormSchema } from "@/lib/validations/funnel";
import type { AiPlan, AiSummaryRequest, QualificationFormValues } from "@/types/funnel";

const defaultValues: QualificationFormValues = {
  goal: "",
  currentLevel: "",
  biggestStruggle: "",
  timeCommitment: "",
  budget: "",
};

function getApiErrorMessage(payload: unknown) {
  if (
    payload &&
    typeof payload === "object" &&
    "error" in payload &&
    typeof payload.error === "string"
  ) {
    return payload.error;
  }

  return "Unable to generate a plan right now. Please try again.";
}

type QualificationFunnelProps = {
  bookingUrl: string | null;
  instagramUrl: string | null;
};

export function QualificationFunnel({
  bookingUrl,
  instagramUrl,
}: QualificationFunnelProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [plan, setPlan] = useState<AiPlan | null>(null);
  const [submittedValues, setSubmittedValues] =
    useState<QualificationFormValues | null>(null);

  const form = useForm<QualificationFormValues>({
    defaultValues,
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(qualificationFormSchema),
  });

  async function handleSubmit(values: QualificationFormValues) {
    const requestBody: AiSummaryRequest = { answers: values };

    setErrorMessage(null);

    const response = await fetch("/api/ai-summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const payload: unknown = await response.json().catch(() => null);

    if (!response.ok) {
      setErrorMessage(getApiErrorMessage(payload));
      return;
    }

    const parsedPlan = aiPlanSchema.safeParse(payload);

    if (!parsedPlan.success) {
      setErrorMessage("The plan response was incomplete. Please try again.");
      return;
    }

    setSubmittedValues(values);
    setPlan(parsedPlan.data);
  }

  return (
    <div className="mt-10 rounded-[1.75rem] border border-dashed border-slate-300/90 bg-white/68 p-5 sm:mt-12 sm:p-6 lg:p-10">
      {plan && submittedValues ? (
        <RecommendationPreview
          bookingUrl={bookingUrl}
          instagramUrl={instagramUrl}
          plan={plan}
          values={submittedValues}
        />
      ) : (
        <QualificationForm
          errorMessage={errorMessage}
          form={form}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
