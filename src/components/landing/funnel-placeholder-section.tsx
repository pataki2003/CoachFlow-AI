import Link from "next/link";

import type { SiteDictionary } from "@/lib/dictionaries";

type FunnelPlaceholderSectionProps = {
  copy: SiteDictionary["home"]["freePlanTeaser"];
};

export function FunnelPlaceholderSection({
  copy,
}: FunnelPlaceholderSectionProps) {
  return (
    <section
      id="free-plan-preview"
      aria-labelledby="free-plan-preview-title"
      className="scroll-mt-24 py-6 sm:scroll-mt-28 sm:py-8"
    >
      <div className="rounded-[2rem] border border-sky-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(232,244,255,0.88))] p-6 shadow-[0_20px_60px_rgba(14,116,144,0.12)] dark:border-sky-900/50 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(8,15,28,0.92))] sm:p-8 lg:p-10">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800 dark:border-sky-900/60 dark:bg-sky-950/60 dark:text-sky-200">
            {copy.badge}
          </span>
          <h2
            id="free-plan-preview-title"
            className="text-3xl font-semibold tracking-tight text-balance text-slate-950 dark:text-slate-50 sm:text-4xl"
          >
            {copy.title}
          </h2>
          <p className="text-base leading-7 text-muted dark:text-slate-300 sm:text-lg">
            {copy.body}
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row">
          <Link
            href="/free-plan"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
          >
            {copy.primaryLabel}
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
          >
            {copy.secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
