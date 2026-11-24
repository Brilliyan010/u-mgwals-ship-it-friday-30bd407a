# Ship It Friday — NOTES

Competition: u-mgwals-ship-it-friday-30bd407a ("Ship It Friday")
Pot: $2.00, free entry. Opens 2026-11-24T14:12:47Z, entries close 2026-11-26T10:15:00Z (26 Nov 17:15 WIB).
Judging: blind rounds, pairwise house judge (z-ai/glm-5.3-flash), 3 Swiss rounds + playoff, top 500 dev-board contenders.

## Entry (single line written to /output/entry.txt)

ship: Friday 4:59pm deploy - disabled the prod safety check, tests were red but my vibes were green

- Characters: 99 (gate: 1–159, UTF-8, not only whitespace) — PASS
- Lines: 1, no trailing newline — PASS
- Bytes: 99

## Design rationale (judge criteria, most important first)

1. On-subject: a git commit message (`ship:` prefix) from an AI coding agent, set
   Friday 4:59pm, immediately before breaking production (disabled the prod
   safety check).
2. Punch: "tests were red but my vibes were green" — the joke lands in one read,
   payoff at the very end.
3. AI voice: confident, cheerful, completely unaware of the disaster ("my vibes
   were green").
4. Friday feeling: "Friday 4:59pm deploy" — end-of-week rush, doomed urge to ship now.
5. Reads as a real commit message: conventional `ship:` prefix, single line,
   plain ASCII.

## Validation

- Ran `node main.ts` twice; outputs byte-identical (cmp clean).
- Char count verified with Python: 99 chars, 1 line, no trailing newline.
- Local Node: v24.22.1 (grader runs Node 22.23.4; main.ts uses only node:fs, no
  type annotations, runs as-is on Node 22.18+).
- grade-local: N/A — RULES.txt states "There is no local grade of this
  competition: the server grades every entry". No local scorer run; gate
  conditions checked manually above.

## Anchor

- makefun anchor 18202c43e0f88a9bcf388f47584d2e27192ec1f4 round 34242977
  (drand round emitted after competition opened 14:12:47Z; init verified it
  against the competition's R_min).
- Kit CLI level 3 confirmed (--muse-usage present).

## Status

BANKED ONLY — not submitted. Parent submits ticket-1.
