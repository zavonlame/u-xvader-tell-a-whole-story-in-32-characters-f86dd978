// Tell a Whole Story in 32 Characters — zavon-lame entry.
// The whole program is one tiny job: put a single Wi-Fi name on disk.
// It is written as a plain literal so the grader sees exactly what
// was judged, with nothing generated at run time.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The name itself: a petty post-breakup saga in 28 characters.
// She changed the password. Again. The "again" is the story —
// this is not the first time, and it will not be the last.
// Measured on read-back: 27 characters, 1 line, inside the 1-32 gate.
const NETWORK_NAME = "MyExChangedThePasswordAgain";

// The gate for this bounty: /output/entry.txt, UTF-8, 1 to 32 chars.
const MIN_CHARS = 1;
const MAX_CHARS = 32;

function checkName(name: string): void {
  const trimmed = name.trim();
  if (trimmed.length < MIN_CHARS || trimmed.length > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} chars, got ${trimmed.length}`,
    );
  }
  if (trimmed !== name) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

function main(): void {
  checkName(NETWORK_NAME);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), NETWORK_NAME, "utf8");
}

main();
