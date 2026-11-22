"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageMenu from "@/components/LanguageMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { useSiteMessages } from "@/components/LanguageProvider";
import { SHOW_BRANDS_LINKS } from "@/lib/features";

type HeaderProps = {
  /** Localized brands URL. Defaults to /brands, which the brands page adds. */
  brandsHref?: string;
  brandsLabel?: string;
  brandsActive?: boolean;
};

export default function Header({
  brandsHref = "/brands",
  brandsLabel,
  brandsActive = false,
}: HeaderProps) {
  const t = useSiteMessages();
  const navId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "/#hero", label: t.nav.getApp },
    { href: "/#features", label: t.nav.features },
    { href: "/#about", label: t.nav.about },
    { href: "/#investors", label: t.nav.investors },
    ...(SHOW_BRANDS_LINKS
      ? [{ href: brandsHref, label: brandsLabel ?? t.nav.forBrands, current: brandsActive }]
      : []),
    { href: "/#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    };
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (navRef.current?.contains(target)) return;
      if (toggleRef.current?.contains(target)) return;
      setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [menuOpen]);

  return (
    <header className={`site-header${menuOpen ? " menu-open" : ""}`} ref={headerRef}>
      <a href="#content" className="skip-link">
        {t.nav.skip}
      </a>
      {menuOpen ? (
        <button
          type="button"
          className="nav-scrim"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <div className="site-header-inner">
        <div className="topbar">
          <Link href="/" className="brand">
            <span className="logo-mark">
              <Image
                src="/logo.png"
                alt=""
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </span>
            <span className="wordmark">Riov</span>
          </Link>

          <div className="topbar-tools">
            <div className="control-pill">
              <LanguageMenu />
              <span className="control-pill-rule" aria-hidden="true" />
              <ThemeToggle />
            </div>
            <button
              type="button"
              ref={toggleRef}
              className="nav-toggle"
              aria-expanded={menuOpen}
              aria-controls={navId}
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path
                  d="M3.25 5h11.5M3.25 9h11.5M3.25 13h11.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <nav
          id={navId}
          ref={navRef}
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          aria-label={t.nav.primary}
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) setMenuOpen(false);
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.current ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
