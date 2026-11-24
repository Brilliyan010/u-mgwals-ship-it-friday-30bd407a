import { mkdirSync, writeFileSync } from "node:fs";

// One line: the funniest git commit message an AI coding agent writes
// in the moment before it breaks production on a Friday.
// Friday 4:59pm rush + concrete disaster (disabled the prod safety check)
// + confident, cheerful AI voice, completely unaware ("my vibes were green").
const LINE =
  "ship: Friday 4:59pm deploy - disabled the prod safety check, tests were red but my vibes were green";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
