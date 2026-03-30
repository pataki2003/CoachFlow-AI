import type { UseFormReturn } from "react-hook-form";

import type { SiteDictionary } from "@/lib/dictionaries";
import { cn } from "@/lib/utils";
import type { QualificationFormValues } from "@/types/funnel";

type QualificationFormProps = {
  copy: SiteDictionary["freePlan"]["form"];
  errorMessage?: string | null;
  form: UseFormReturn<QualificationFormValues>;
  onSubmit: (values: QualificationFormValues) => Promise<void>;
};

function getFieldClasses(hasError: boolean) {
  return cn(
    "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:shadow-none dark:focus-visible:ring-sky-500/70",
    "placeholder:text-slate-400",
    hasError
      ? "border-rose-300 focus-visible:ring-rose-200 dark:border-rose-800 dark:focus-visible:ring-rose-500/60"
      : "border-white/80 focus-visible:border-sky-200 dark:focus-visible:border-sky-500/70",
  );
}

export function QualificationForm({
  copy,
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
      className="rounded-[1.75rem] border border-white/80 bg-white/82 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-950/80 sm:p-8 lg:p-10"
    >
      <fieldset disabled={isSubmitting} className="space-y-6 sm:space-y-7">
        <div className="space-y-4">
          <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800 dark:border-sky-900/60 dark:bg-sky-950/60 dark:text-sky-200">
            {copy.badge}
          </span>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-3xl">
              {copy.title}
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-muted dark:text-slate-300 sm:text-base">
              {copy.body}
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          <label
            htmlFor="goal"
            className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100"
          >
            {copy.fields.goal.label}
          </label>
          <textarea
            id="goal"
            rows={4}
            placeholder={copy.fields.goal.placeholder}
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
            className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100"
          >
            {copy.fields.currentLevel.label}
          </label>
          <select
            id="currentLevel"
            className={getFieldClasses(Boolean(errors.currentLevel))}
            {...register("currentLevel")}
          >
            <option value="">{copy.fields.currentLevel.placeholder}</option>
            {copy.options.currentLevel.map((option) => (
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
            className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100"
          >
            {copy.fields.biggestStruggle.label}
          </label>
          <textarea
            id="biggestStruggle"
            rows={4}
            placeholder={copy.fields.biggestStruggle.placeholder}
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
              className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100"
            >
              {copy.fields.timeCommitment.label}
            </label>
            <select
              id="timeCommitment"
              className={getFieldClasses(Boolean(errors.timeCommitment))}
              {...register("timeCommitment")}
            >
              <option value="">{copy.fields.timeCommitment.placeholder}</option>
              {copy.options.timeCommitment.map((option) => (
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
              className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100"
            >
              {copy.fields.budget.label}
            </label>
            <select
              id="budget"
              className={getFieldClasses(Boolean(errors.budget))}
              {...register("budget")}
            >
              <option value="">{copy.fields.budget.placeholder}</option>
              {copy.options.budget.map((option) => (
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
              className="rounded-2xl border border-rose-200 bg-rose-50/90 px-4 py-3 text-sm font-medium text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/60 dark:text-rose-200"
            >
              {errorMessage}
            </div>
          ) : null}
          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-wait disabled:bg-sky-400 dark:focus-visible:ring-offset-slate-950"
          >
            {isSubmitting
              ? copy.submitting
              : copy.submit}
          </button>
          <p
            aria-live="polite"
            className="text-sm leading-6 text-muted dark:text-slate-400"
          >
            {isSubmitting
              ? copy.submittingNote
              : copy.note}
          </p>
        </div>
      </fieldset>
    </form>
  );
}
