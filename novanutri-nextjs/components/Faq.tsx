"use client";

import { useSiteMessages } from "@/components/LanguageProvider";

export default function Faq() {
  const faq = useSiteMessages().faq;

  return (
    <section id="faq" className="w-full bg-background py-20 md:py-24 px-6 border-t border-line" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-accent font-bold uppercase tracking-wider text-sm mb-3">{faq.kicker}</p>
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-6">
            {faq.titleLead}
            <span className="text-accent">{faq.titleEmphasis}</span>
          </h2>
          <p className="text-lg text-body">{faq.intro}</p>
        </div>

        <div className="flex flex-col gap-6">
          {faq.items.map((item) => (
            <article key={item.q} className="card p-7">
              <h3 className="text-xl font-bold text-heading mb-3">{item.q}</h3>
              <p className="text-body leading-relaxed">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
