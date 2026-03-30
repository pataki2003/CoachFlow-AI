"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import type { SiteDictionary } from "@/lib/dictionaries";
import type { LanguageCode } from "@/lib/site-preferences";
import { QualificationForm } from "@/components/funnel/qualification-form";
import { RecommendationPreview } from "@/components/funnel/recommendation-preview";
import {
  aiPlanSchema,
  getQualificationFormSchema,
} from "@/lib/validations/funnel";
import type { AiPlan, AiSummaryRequest, QualificationFormValues } from "@/types/funnel";

const defaultValues: QualificationFormValues = {
  goal: "",
  currentLevel: "",
  biggestStruggle: "",
  timeCommitment: "",
  budget: "",
};

function getApiErrorMessage(payload: unknown, fallback: string) {
  if (
    payload &&
    typeof payload === "object" &&
    "error" in payload &&
    typeof payload.error === "string"
  ) {
    return payload.error;
  }

  return fallback;
}

type QualificationFunnelProps = {
  bookingUrl: string | null;
  copy: SiteDictionary["freePlan"];
  instagramUrl: string | null;
  language: LanguageCode;
};

export function QualificationFunnel({
  bookingUrl,
  copy,
  instagramUrl,
  language,
}: QualificationFunnelProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [plan, setPlan] = useState<AiPlan | null>(null);
  const [submittedValues, setSubmittedValues] =
    useState<QualificationFormValues | null>(null);
  const qualificationFormSchema = getQualificationFormSchema({
    options: copy.form.options,
    validation: copy.form.validation,
  });

  const form = useForm<QualificationFormValues>({
    defaultValues,
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(qualificationFormSchema),
  });

  async function handleSubmit(values: QualificationFormValues) {
    const requestBody: AiSummaryRequest = { answers: values, language };

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
      setErrorMessage(getApiErrorMessage(payload, copy.messages.genericError));
      return;
    }

    const parsedPlan = aiPlanSchema.safeParse(payload);

    if (!parsedPlan.success) {
      setErrorMessage(copy.messages.incompleteResponse);
      return;
    }

    setSubmittedValues(values);
    setPlan(parsedPlan.data);
  }

  return (
    <div className="mt-10 rounded-[1.75rem] border border-dashed border-slate-300/90 bg-white/68 p-5 dark:border-white/10 dark:bg-slate-950/60 sm:mt-12 sm:p-6 lg:p-10">
      {plan && submittedValues ? (
        <RecommendationPreview
          bookingUrl={bookingUrl}
          copy={copy.result}
          instagramUrl={instagramUrl}
          plan={plan}
          values={submittedValues}
        />
      ) : (
        <QualificationForm
          copy={copy.form}
          errorMessage={errorMessage}
          form={form}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
