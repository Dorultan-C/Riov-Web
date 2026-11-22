import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const staticDir = path.join(root, ".next", "static");
const required = [".nav-toggle", ".control-pill"];

async function collectCssFiles(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error && error.code === "ENOENT") return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectCssFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith(".css")) {
      files.push(fullPath);
    }
  }
  return files;
}

const cssFiles = await collectCssFiles(staticDir);

if (cssFiles.length === 0) {
  console.error(
    "CSS guard failed: no CSS files found under .next/static. Refusing to ship a build that did not emit the site stylesheet.",
  );
  process.exit(1);
}

let matched = null;
const present = new Set();

for (const file of cssFiles) {
  const css = await readFile(file, "utf8");
  const hits = required.filter((selector) => css.includes(selector));
  for (const selector of hits) present.add(selector);
  if (hits.length === required.length) {
    matched = path.relative(root, file);
    break;
  }
}

if (!matched) {
  const missing = required.filter((selector) => !present.has(selector));
  const detail = missing.length
    ? `Missing ${missing.join(" and ")} from every emitted stylesheet.`
    : "Those selectors were split across chunks, so no single stylesheet contains the current header CSS.";
  console.error(
    `CSS guard failed: no file under .next/static contains ${required.join(" and ")}. ${detail} The production CSS chunk may have been restored from a stale Turbopack build cache (globals.css).`,
  );
  process.exit(1);
}

console.log(
  `CSS guard passed: ${matched} contains ${required.join(" and ")} (${cssFiles.length} stylesheet${cssFiles.length === 1 ? "" : "s"} scanned).`,
);
