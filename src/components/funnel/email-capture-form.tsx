"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { emailCaptureSchema } from "@/lib/validations/funnel";
import type { EmailCaptureValues } from "@/types/funnel";

type EmailCaptureFormProps = {
  onSubmit: (values: EmailCaptureValues) => Promise<void>;
};

function getFieldClasses(hasError: boolean) {
  return cn(
    "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300",
    "placeholder:text-slate-400",
    hasError
      ? "border-rose-300 focus-visible:ring-rose-200"
      : "border-white/80 focus-visible:border-sky-200",
  );
}

export function EmailCaptureForm({ onSubmit }: EmailCaptureFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailCaptureValues>({
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(emailCaptureSchema),
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[1.75rem] border border-white/80 bg-white/78 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10"
    >
      <fieldset disabled={isSubmitting} className="space-y-6">
        <div className="space-y-4">
          <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
            Next step
          </span>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Get your full recommendation + next steps
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base">
              Enter your email to receive your personalized plan and continue to
              the final step.
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          <label
            htmlFor="email"
            className="text-sm font-semibold tracking-tight text-slate-900"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={getFieldClasses(Boolean(errors.email))}
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-sm font-medium text-rose-700">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-3">
          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-wait disabled:bg-sky-400"
          >
            {isSubmitting ? "Saving your next step..." : "Continue"}
          </button>
          <p aria-live="polite" className="text-sm leading-6 text-muted">
            {isSubmitting
              ? "Saving your email locally so the funnel can continue."
              : "No spam. Just your recommendation and the next action."}
          </p>
        </div>
      </fieldset>
    </form>
  );
}
