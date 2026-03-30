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
      className="scroll-mt-24 py-8 sm:scroll-mt-28 sm:py-12"
    >
      <div className="surface-highlight rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="max-w-2xl space-y-4">
          <span className="badge-chip inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            {copy.badge}
          </span>
          <h2
            id="free-plan-preview-title"
            className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl"
          >
            {copy.title}
          </h2>
          <p className="text-base leading-7 text-muted sm:text-lg">
            {copy.body}
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row">
          <Link
            href="/free-plan"
            className="button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
          >
            {copy.primaryLabel}
          </Link>
          <Link
            href="/contact"
            className="button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
          >
            {copy.secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
