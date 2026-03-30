export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-16 sm:px-10">
      <section className="w-full rounded-[2rem] border border-panel-border bg-panel p-8 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur sm:p-12">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
            Setup complete
          </span>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
              MVP foundation
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              AI Coach Funnel Demo
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
              The base Next.js app structure, environment setup, validation
              placeholders, and API stubs are ready for the next phase of the
              funnel build.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
