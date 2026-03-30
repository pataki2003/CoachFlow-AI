type BookingStepProps = {
  bookingUrl: string | null;
  email: string | null;
  onComplete: () => void;
};

export function BookingStep({
  bookingUrl,
  email,
  onComplete,
}: BookingStepProps) {
  const hasBookingUrl = Boolean(bookingUrl);

  return (
    <article className="rounded-[1.75rem] border border-white/80 bg-white/78 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
      <div className="space-y-6">
        <div className="space-y-4">
          <span
            className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
              hasBookingUrl
                ? "border border-sky-200 bg-sky-100 text-sky-800"
                : "border border-amber-200 bg-amber-50 text-amber-700"
            }`}
          >
            {hasBookingUrl ? "Final step" : "Strategy handoff"}
          </span>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {hasBookingUrl
                ? "Book your audit review call"
                : "Booking link ready to connect"}
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base">
              {hasBookingUrl
                ? "You've reviewed the likely bottleneck. The next step is a short strategy call with Alex Carter to review the audit, tighten the plan, and decide what to fix first."
                : "In a live client version, this is where Calendly or another scheduler would open so a qualified prospect could book with Alex immediately."}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/85 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Ready for the call step
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            {email
              ? `This audit summary has been prepared for ${email}, and the next click moves the prospect into the final strategy call handoff.`
              : "This audit summary is ready, and the next click moves the prospect into the final strategy call handoff."}
          </p>
        </div>

        {hasBookingUrl ? (
          <div className="space-y-3">
            <a
              href={bookingUrl ?? undefined}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Book your call with Alex
            </a>
            <button
              type="button"
              onClick={onComplete}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              I&apos;ve booked my call
            </button>
            <p className="text-sm leading-6 text-muted">
              After the scheduler opens in a new tab, come back here and confirm
              the booking to complete the audit journey.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <button
              type="button"
              onClick={onComplete}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Continue demo
            </button>
            <p className="text-sm leading-6 text-muted">
              This keeps the demo believable before a live scheduler is wired
              into the client version.
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
