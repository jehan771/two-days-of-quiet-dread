import { mkdirSync, writeFileSync } from "node:fs";

// One-line code review comment: approves the PR (LGTM) while carrying
// quiet existential dread. Flat tone, understatement, no exclamation.
const LINE =
  "LGTM. The tests pass and the types agree, which only means the universe hasn't noticed yet.";

// Gate: single line, 1-140 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`entry violates gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
