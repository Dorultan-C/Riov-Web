"use client";

import { useSiteMessages } from "@/components/LanguageProvider";

export default function CollaborationsView() {
  const t = useSiteMessages().collaborations;

  return (
    <main id="content" className="w-full bg-background flex-1">
      <section className="w-full bg-background py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-bold uppercase tracking-wider text-sm mb-3 block">
              {t.kicker}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6">
              {t.headlineLead}
              <span className="text-accent">{t.headlineHighlight}</span>
            </h1>
          </div>

          <div className="card tint p-8 max-w-3xl mx-auto">
            <p className="text-lg text-body leading-relaxed">{t.pitch}</p>
            <div className="mt-8">
              <a href="/#contact" className="btn">
                {t.cta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
