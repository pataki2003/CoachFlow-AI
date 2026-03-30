import type { UseFormReturn } from "react-hook-form";

import { cn } from "@/lib/utils";
import {
  budgetOptions,
  currentLevelOptions,
  timeCommitmentOptions,
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
            CoachFlow AI plan
          </span>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Tell Alex what you want help with
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base">
              Answer a few focused questions and CoachFlow AI will turn them
              into a personalized client-growth plan you can act on right away.
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          <label
            htmlFor="goal"
            className="text-sm font-semibold tracking-tight text-slate-900"
          >
            What result do you want most from your coaching business?
          </label>
          <textarea
            id="goal"
            rows={4}
            placeholder="For example: sign more qualified clients without constantly posting more or chasing cold leads."
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
            htmlFor="currentLevel"
            className="text-sm font-semibold tracking-tight text-slate-900"
          >
            Which stage best describes you right now?
          </label>
          <select
            id="currentLevel"
            className={getFieldClasses(Boolean(errors.currentLevel))}
            {...register("currentLevel")}
          >
            <option value="">Select your current level</option>
            {currentLevelOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.currentLevel ? (
            <p className="text-sm font-medium text-rose-700">
              {errors.currentLevel.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2.5">
          <label
            htmlFor="biggestStruggle"
            className="text-sm font-semibold tracking-tight text-slate-900"
          >
            What is your biggest struggle right now?
          </label>
          <textarea
            id="biggestStruggle"
            rows={4}
            placeholder="For example: inconsistent leads, unclear messaging, a weak offer, or trouble turning interest into booked calls."
            className={cn(
              getFieldClasses(Boolean(errors.biggestStruggle)),
              "leading-7",
            )}
            {...register("biggestStruggle")}
          />
          {errors.biggestStruggle ? (
            <p className="text-sm font-medium text-rose-700">
              {errors.biggestStruggle.message}
            </p>
          ) : null}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <div className="space-y-2.5">
            <label
              htmlFor="timeCommitment"
              className="text-sm font-semibold tracking-tight text-slate-900"
            >
              How much time can you realistically commit each week?
            </label>
            <select
              id="timeCommitment"
              className={getFieldClasses(Boolean(errors.timeCommitment))}
              {...register("timeCommitment")}
            >
              <option value="">Select your time commitment</option>
              {timeCommitmentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.timeCommitment ? (
              <p className="text-sm font-medium text-rose-700">
                {errors.timeCommitment.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2.5">
            <label
              htmlFor="budget"
              className="text-sm font-semibold tracking-tight text-slate-900"
            >
              What budget feels realistic for support right now?
            </label>
            <select
              id="budget"
              className={getFieldClasses(Boolean(errors.budget))}
              {...register("budget")}
            >
              <option value="">Select a budget range (optional)</option>
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
            {isSubmitting ? "Building your plan..." : "Get my plan"}
          </button>
          <p aria-live="polite" className="text-sm leading-6 text-muted">
            {isSubmitting
              ? "Generating Alex Carter's personalized plan from your answers."
              : "This step creates your personalized plan. When it feels aligned, the next move is simple: book a call or start the conversation in DMs."}
          </p>
        </div>
      </fieldset>
    </form>
  );
}
