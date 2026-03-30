import type { UseFormReturn } from "react-hook-form";

import { cn } from "@/lib/utils";
import {
  budgetOptions,
  timelineOptions,
  type QualificationFormValues,
} from "@/types/funnel";

type QualificationFormProps = {
  errorMessage?: string | null;
  form: UseFormReturn<QualificationFormValues>;
  onSubmit: (values: QualificationFormValues) => Promise<void>;
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

export function QualificationForm({
  errorMessage,
  form,
  onSubmit,
}: QualificationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[1.75rem] border border-white/80 bg-white/82 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10"
    >
      <fieldset disabled={isSubmitting} className="space-y-6 sm:space-y-7">
        <div className="space-y-4">
          <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
            Step 1 of 3
          </span>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Answer a few questions for your growth audit
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base">
              This mini-assessment helps Alex spot the likely bottleneck behind
              inconsistent leads, unclear positioning, or a weak conversion path
              before the next step.
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          <label
            htmlFor="goal"
            className="text-sm font-semibold tracking-tight text-slate-900"
          >
            What growth result matters most right now?
          </label>
          <textarea
            id="goal"
            rows={4}
            placeholder="For example: convert more of the right leads into booked calls without constantly chasing more traffic."
            className={cn(getFieldClasses(Boolean(errors.goal)), "leading-7")}
            {...register("goal")}
          />
          {errors.goal ? (
            <p className="text-sm font-medium text-rose-700">
              {errors.goal.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2.5">
          <label
            htmlFor="challenge"
            className="text-sm font-semibold tracking-tight text-slate-900"
          >
            What feels like the biggest bottleneck right now?
          </label>
          <textarea
            id="challenge"
            rows={4}
            placeholder="For example: the offer feels vague, leads are curious but not qualified, or the funnel loses momentum before the call."
            className={cn(
              getFieldClasses(Boolean(errors.challenge)),
              "leading-7",
            )}
            {...register("challenge")}
          />
          {errors.challenge ? (
            <p className="text-sm font-medium text-rose-700">
              {errors.challenge.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2.5">
          <label
            htmlFor="triedBefore"
            className="text-sm font-semibold tracking-tight text-slate-900"
          >
            What have you already tried to improve it?
          </label>
          <textarea
            id="triedBefore"
            rows={3}
            placeholder="Mention any messaging changes, funnels, offers, paid traffic, or sales process tweaks you have already tested."
            className={cn(
              getFieldClasses(Boolean(errors.triedBefore)),
              "leading-7",
            )}
            {...register("triedBefore")}
          />
          {errors.triedBefore ? (
            <p className="text-sm font-medium text-rose-700">
              {errors.triedBefore.message}
            </p>
          ) : null}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <div className="space-y-2.5">
            <label
              htmlFor="timeline"
              className="text-sm font-semibold tracking-tight text-slate-900"
            >
              How soon do you want this working better?
            </label>
            <select
              id="timeline"
              className={getFieldClasses(Boolean(errors.timeline))}
              {...register("timeline")}
            >
              <option value="">Select a timeline</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.timeline ? (
              <p className="text-sm font-medium text-rose-700">
                {errors.timeline.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2.5">
            <label
              htmlFor="budget"
              className="text-sm font-semibold tracking-tight text-slate-900"
            >
              What level of support are you considering?
            </label>
            <select
              id="budget"
              className={getFieldClasses(Boolean(errors.budget))}
              {...register("budget")}
            >
              <option value="">Select a budget range</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.budget ? (
              <p className="text-sm font-medium text-rose-700">
                {errors.budget.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="space-y-3 pt-3">
          {errorMessage ? (
            <div
              role="alert"
              className="rounded-2xl border border-rose-200 bg-rose-50/90 px-4 py-3 text-sm font-medium text-rose-700"
            >
              {errorMessage}
            </div>
          ) : null}
          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-wait disabled:bg-sky-400"
          >
            {isSubmitting
              ? "Building your growth audit..."
              : "Get my audit summary"}
          </button>
          <p aria-live="polite" className="text-sm leading-6 text-muted">
            {isSubmitting
              ? "Generating Alex Carter's concise audit summary from your answers."
              : "This step creates your tailored growth audit. Then you can save the summary, continue to the strategy call handoff, and complete the demo flow."}
          </p>
        </div>
      </fieldset>
    </form>
  );
}
