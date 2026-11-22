import type { SiteLang } from "@/lib/i18n/locales";

/**
 * Phone screenshots shipped under `public/app-shots/<lang>/`.
 * A language with its own folder is listed in `SHOT_FOLDERS`.
 * Every other site language uses the English set.
 */
export const APP_SHOT_IDS = [
  "01-home",
  "02-planner",
  "03-basket",
  "04-search",
  "05-recipes",
  "05b-recipe-detail",
  "06-meal-plan-generate",
  "07-menu",
] as const;

export type AppShotId = (typeof APP_SHOT_IDS)[number];

const SHOT_FOLDERS = ["en", "es", "da"] as const;
type ShotFolder = (typeof SHOT_FOLDERS)[number];

const FOLDER_SET = new Set<string>(SHOT_FOLDERS);

export function appShotFolder(lang: SiteLang): ShotFolder {
  return FOLDER_SET.has(lang) ? (lang as ShotFolder) : "en";
}

export function appShotSrc(lang: SiteLang, id: AppShotId): string {
  return `/app-shots/${appShotFolder(lang)}/${id}.webp`;
}
