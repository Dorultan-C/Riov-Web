"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { useLanguage, useSiteMessages } from "@/components/LanguageProvider";
import { APP_SHOT_IDS, appShotSrc, type AppShotId } from "@/lib/appShots";

const CAPTION_KEY: Record<AppShotId, "home" | "planner" | "basket" | "search" | "recipes" | "recipe" | "generate" | "menu"> = {
  "01-home": "home",
  "02-planner": "planner",
  "03-basket": "basket",
  "04-search": "search",
  "05-recipes": "recipes",
  "05b-recipe-detail": "recipe",
  "06-meal-plan-generate": "generate",
  "07-menu": "menu",
};

const AUTOPLAY_MS = 3000;
const SLIDE_EPS = 3;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollBehavior(): ScrollBehavior {
  return prefersReducedMotion() ? "auto" : "smooth";
}

function slidePositions(row: HTMLElement) {
  const slides = [...row.querySelectorAll<HTMLElement>(":scope > .shot")];
  const max = Math.max(0, row.scrollWidth - row.clientWidth);
  const positions = slides.map((slide) => Math.min(Math.max(0, slide.offsetLeft), max));
  return { max, positions };
}

function nearestIndex(left: number, positions: number[]) {
  let best = 0;
  let bestDist = Number.POSITIVE_INFINITY;
  for (let i = 0; i < positions.length; i++) {
    const dist = Math.abs(positions[i] - left);
    if (dist < bestDist) {
      bestDist = dist;
      best = i;
    }
  }
  return best;
}

function ShotChevron({ direction }: { direction: "prev" | "next" }) {
  const d = direction === "prev" ? "M12.25 4.75 6.75 10l5.5 5.25" : "M7.75 4.75 13.25 10l-5.5 5.25";
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const t = useSiteMessages().hero;
  const carouselRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const animTimerRef = useRef<number | null>(null);
  const reasonsRef = useRef(new Set<string>());
  const aliveRef = useRef(true);
  const targetRef = useRef(0);
  const animatingRef = useRef(false);
  const pointersRef = useRef(new Set<number>());
  const scrollByDirRef = useRef<(direction: 1 | -1) => void>(() => {});
  const scheduleRef = useRef<() => void>(() => {});

  const shots = APP_SHOT_IDS.map((id) => {
    const caption = t.shots[CAPTION_KEY[id]];
    return {
      id,
      src: appShotSrc(lang, id),
      caption,
      alt: `${caption}. ${t.mockupAlt}`,
    };
  });

  const clearTimer = useCallback(() => {
    if (timerRef.current != null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const schedule = useCallback(() => {
    clearTimer();
    if (!aliveRef.current) return;
    if (reasonsRef.current.size > 0) return;
    if (prefersReducedMotion() || document.hidden) return;
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      if (!aliveRef.current || reasonsRef.current.size > 0) return;
      if (prefersReducedMotion() || document.hidden) return;
      scrollByDirRef.current(1);
      scheduleRef.current();
    }, AUTOPLAY_MS);
  }, [clearTimer]);

  const pause = useCallback(
    (reason: string) => {
      reasonsRef.current.add(reason);
      clearTimer();
    },
    [clearTimer],
  );

  const resume = useCallback(
    (reason: string) => {
      if (!reasonsRef.current.delete(reason)) return;
      schedule();
    },
    [schedule],
  );

  scheduleRef.current = schedule;

  scrollByDirRef.current = (direction) => {
    const row = rowRef.current;
    if (!row) return;
    const { positions } = slidePositions(row);
    const count = positions.length;
    if (count === 0) return;

    let current = targetRef.current;
    if (!animatingRef.current || current < 0 || current >= count) {
      current = nearestIndex(row.scrollLeft, positions);
    }

    let next: number;
    if (direction === 1) {
      const candidate = current + 1;
      const cannotAdvance = candidate >= count || positions[candidate] <= positions[current] + SLIDE_EPS;
      next = cannotAdvance ? 0 : candidate;
    } else if (current <= 0) {
      next = count - 1;
    } else {
      next = current - 1;
    }

    targetRef.current = next;
    animatingRef.current = true;
    if (animTimerRef.current != null) window.clearTimeout(animTimerRef.current);
    row.scrollTo({ left: positions[next], behavior: scrollBehavior() });
    animTimerRef.current = window.setTimeout(() => {
      animatingRef.current = false;
    }, scrollBehavior() === "auto" ? 80 : 900);
  };

  useEffect(() => {
    aliveRef.current = true;
    const row = rowRef.current;
    const carousel = carouselRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotion = () => {
      if (motion.matches) pause("motion");
      else resume("motion");
    };
    const syncVisibility = () => {
      if (document.hidden) pause("hidden");
      else resume("hidden");
    };
    const onScrollEnd = () => {
      animatingRef.current = false;
      if (!row) return;
      const { positions } = slidePositions(row);
      if (positions.length === 0) return;
      targetRef.current = nearestIndex(row.scrollLeft, positions);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!carousel?.contains(event.target as Node)) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      pointersRef.current.add(event.pointerId);
      const onButton = event.target instanceof Element && !!event.target.closest(".shot-nav");
      if (!onButton) animatingRef.current = false;
      if (pointersRef.current.size === 1) pause("pointer");
    };
    const onPointerUp = (event: PointerEvent) => {
      if (!pointersRef.current.has(event.pointerId)) return;
      pointersRef.current.delete(event.pointerId);
      if (pointersRef.current.size === 0) resume("pointer");
    };

    if (motion.matches) pause("motion");
    if (document.hidden) pause("hidden");
    schedule();

    motion.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncVisibility);
    row?.addEventListener("scrollend", onScrollEnd);
    window.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("pointerup", onPointerUp, true);
    window.addEventListener("pointercancel", onPointerUp, true);

    return () => {
      aliveRef.current = false;
      clearTimer();
      if (animTimerRef.current != null) window.clearTimeout(animTimerRef.current);
      pointersRef.current.clear();
      motion.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncVisibility);
      row?.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("pointerdown", onPointerDown, true);
      window.removeEventListener("pointerup", onPointerUp, true);
      window.removeEventListener("pointercancel", onPointerUp, true);
    };
  }, [clearTimer, pause, resume, schedule]);

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-grid">
          <div
            className="shot-carousel"
            ref={carouselRef}
            onMouseEnter={() => {
              if (window.matchMedia("(hover: hover)").matches) pause("hover");
            }}
            onMouseLeave={() => resume("hover")}
            onFocusCapture={() => pause("focus")}
            onBlurCapture={(event) => {
              const next = event.relatedTarget;
              if (next instanceof Node && event.currentTarget.contains(next)) return;
              resume("focus");
            }}
          >
            <div className="shot-row" id="hero-shots" ref={rowRef} role="region" aria-label={t.shotsLabel} tabIndex={0}>
              {shots.map((shot, index) => (
                <figure className="shot" key={shot.src}>
                  <div className="shot-frame">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(min-width: 960px) 220px, 80vw"
                      className="object-cover object-top"
                      {...(index === 0
                        ? { priority: true }
                        : { loading: index < 3 ? ("eager" as const) : ("lazy" as const) })}
                      quality={70}
                    />
                  </div>
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              ))}
            </div>

            <div className="shot-nav-rail">
              <button
                type="button"
                className="btn shot-nav"
                aria-label={t.prevShot}
                aria-controls="hero-shots"
                onClick={() => scrollByDirRef.current(-1)}
              >
                <ShotChevron direction="prev" />
              </button>
              <button
                type="button"
                className="btn shot-nav"
                aria-label={t.nextShot}
                aria-controls="hero-shots"
                onClick={() => scrollByDirRef.current(1)}
              >
                <ShotChevron direction="next" />
              </button>
            </div>
          </div>

          <div className="hero-copy">
            <div className="hero-badge">
              <span aria-hidden="true">🚀</span>
              {t.badge}
            </div>

            <h1>
              {t.line1}
              <br />
              <span className="text-accent">{t.line2}</span>
              <br />
              {t.line3}
            </h1>

            <p className="hero-lead">{t.body}</p>

            <div className="hero-cta">
              <div className="store-col">
                <a
                  href="https://play.google.com/store/apps/details?id=com.riov.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge"
                >
                  <Image src="/google-play-badge.png" alt={t.googlePlayAlt} fill sizes="192px" className="object-contain" />
                </a>
                <a
                  href="https://apps.apple.com/us/app/riov-mediterranean-meal-plan/id6770679057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge"
                >
                  <Image src="/app-store-badge.svg" alt={t.appStoreAlt} fill sizes="192px" className="object-contain" />
                </a>
              </div>

              <div className="qr-block">
                <div className="relative size-36 shrink-0 rounded-2xl bg-white p-2 shadow-md">
                  <Image src="/qr-code.svg" alt={t.qrAlt} fill sizes="144px" className="object-contain" />
                </div>
                <span className="max-w-24 text-sm font-bold uppercase tracking-wider text-muted">{t.scan}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
