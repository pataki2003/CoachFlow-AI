import Image from "next/image";

import type { SiteDictionary } from "@/lib/dictionaries";

const galleryImages = [
  "/gallery/coaching-floor.svg",
  "/gallery/habit-planning.svg",
  "/gallery/training-atmosphere.svg",
  "/gallery/lifestyle-progress.svg",
] as const;

type GallerySectionProps = {
  copy: SiteDictionary["home"]["gallery"];
};

export function GallerySection({ copy }: GallerySectionProps) {
  return (
    <section aria-labelledby="gallery-title" className="pt-8 sm:pt-12">
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted dark:text-slate-400">
            {copy.badge}
          </p>
          <h2
            id="gallery-title"
            className="text-3xl font-semibold tracking-tight text-balance text-slate-950 dark:text-slate-50 sm:text-4xl"
          >
            {copy.title}
          </h2>
          <p className="text-base leading-7 text-muted dark:text-slate-300">
            {copy.body}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {copy.items.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1.75rem] border border-panel-border bg-white/80 shadow-[0_16px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-950/75"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  src={galleryImages[index]}
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-muted dark:text-slate-300 sm:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
