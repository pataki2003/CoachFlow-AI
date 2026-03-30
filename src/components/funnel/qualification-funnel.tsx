"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { BookingStep } from "@/components/funnel/booking-step";
import { EmailCaptureForm } from "@/components/funnel/email-capture-form";
import { QualificationForm } from "@/components/funnel/qualification-form";
import { RecommendationPreview } from "@/components/funnel/recommendation-preview";
import { SuccessState } from "@/components/funnel/success-state";
import {
  aiRecommendationSchema,
  qualificationFormSchema,
} from "@/lib/validations/funnel";
import type {
  AiRecommendation,
  AiSummaryRequest,
  EmailCaptureValues,
  FunnelStep,
  QualificationFormValues,
} from "@/types/funnel";

const defaultValues: QualificationFormValues = {
  goal: "",
  challenge: "",
  triedBefore: "",
  timeline: "",
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

  return "Unable to generate a recommendation right now. Please try again.";
}

type QualificationFunnelProps = {
  bookingUrl: string | null;
};

export function QualificationFunnel({
  bookingUrl,
}: QualificationFunnelProps) {
  const [capturedEmail, setCapturedEmail] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<AiRecommendation | null>(
    null,
  );
  const [step, setStep] = useState<FunnelStep>("qualification");
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

    const parsedRecommendation = aiRecommendationSchema.safeParse(payload);

    if (!parsedRecommendation.success) {
      setErrorMessage(
        "The recommendation response was incomplete. Please try again.",
      );
      return;
    }

    setSubmittedValues(values);
    setRecommendation(parsedRecommendation.data);
    setStep("email-capture");
  }

  async function handleEmailSubmit(values: EmailCaptureValues) {
    await new Promise((resolve) => setTimeout(resolve, 450));
    setCapturedEmail(values.email);
    setStep("booking");
  }

  function handleBookingComplete() {
    setStep("success");
  }

  return (
    <div className="mt-10 rounded-[1.75rem] border border-dashed border-slate-300/90 bg-white/68 p-5 sm:mt-12 sm:p-6 lg:p-10">
      {step === "qualification" ? (
        <QualificationForm
          errorMessage={errorMessage}
          form={form}
          onSubmit={handleSubmit}
        />
      ) : recommendation && submittedValues ? (
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <RecommendationPreview
            recommendation={recommendation}
            values={submittedValues}
          />

          {step === "email-capture" ? (
            <EmailCaptureForm onSubmit={handleEmailSubmit} />
          ) : step === "booking" ? (
            <BookingStep
              bookingUrl={bookingUrl}
              email={capturedEmail}
              onComplete={handleBookingComplete}
            />
          ) : (
            <SuccessState
              email={capturedEmail}
              recommendationTitle={recommendation.title}
            />
          )}
        </div>
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
