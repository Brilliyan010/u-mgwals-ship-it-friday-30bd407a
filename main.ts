import { mkdirSync, writeFileSync } from "node:fs";

// One line: the funniest git commit message an AI coding agent writes
// in the moment before it breaks production on a Friday.
// Friday 4:59pm rush + concrete disaster (turned off the prod safety check)
// + confident, cheerful AI voice, completely unaware ("my vibes were green").
// Revision: "fix:" is the commit prefix a real engineer recognises instantly
// ("ship:" is not a conventional type), and "turned off" is the casual,
// cheerful phrasing the agent itself would use instead of formal "disabled".
// The punch stays word-for-word at the end, where it pays off in one read.
const LINE =
  "fix: Friday 4:59pm deploy - turned off the prod safety check, tests were red but my vibes were green";

// Fail loudly instead of ever writing a line the gate would refuse:
// 1-159 UTF-8 chars, single line, not only whitespace (RULES.txt gate).
if (
  LINE.length < 1 ||
  LINE.length > 159 ||
  LINE.includes("\n") ||
  LINE.includes("\r") ||
  LINE.trim().length === 0
) {
  throw new Error(
    `entry line violates gate: ${LINE.length} chars, ` +
      `newlines=${LINE.includes("\n") || LINE.includes("\r")}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
