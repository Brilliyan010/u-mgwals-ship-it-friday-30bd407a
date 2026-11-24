# Ship It Friday — NOTES

Competition: u-mgwals-ship-it-friday-30bd407a ("Ship It Friday")
Pot: $2.00, free entry. Opens 2026-11-24T14:12:47Z, entries close 2026-11-26T10:15:00Z (26 Nov 17:15 WIB).
Judging: blind rounds, pairwise house judge (z-ai/glm-5.3-flash), 3 Swiss rounds + playoff, top 500 dev-board contenders.

## Entry (single line written to /output/entry.txt)

fix: Friday 4:59pm deploy - turned off the prod safety check, tests were red but my vibes were green

- Characters: 100 (gate: 1–159, UTF-8, not only whitespace) — PASS
- Lines: 1, no trailing newline, plain ASCII — PASS
- Bytes: 100

## Revision (this session — thinking_revised fix)

The banked v1 line took its final content from a single assistant message, so
the kit's thinking_revised check was expected to FAIL (same failure as the
sibling one-liner loading-screen). This session ran the entry, critiqued it
against the judge brief, and EDITED main.ts to genuinely improve it:

1. Line refined — `ship:` → `fix:`: "fix:" is the commit prefix a real engineer
   recognises instantly (criterion 5); "ship:" is not a conventional type.
   `disabled` → `turned off`: casual, cheerful phrasing the agent itself would
   use (criterion 3, AI voice), instead of the formal "disabled". Friday
   4:59pm, the concrete disaster, and the punch "tests were red but my vibes
   were green" are unchanged, word-for-word at the end where it pays off.
   99 → 100 chars, still inside the 1–159 gate.
2. Code hardened — main.ts now fails loudly (throws) instead of ever writing a
   line the gate would refuse: enforces 1–159 chars, single line (no \n/\r),
   not only whitespace, before writing /output/entry.txt.

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

- Ran `node main.ts` twice; outputs byte-identical (cmp clean) — both before
  the revision (v1, 99 chars) and after it (v2, 100 chars).
- Char count verified with Python: 100 chars, 1 line, no trailing newline,
  plain ASCII.
- Gate guard in main.ts verified by inspection (throws on >159 chars, newline,
  or whitespace-only); normal run writes /output/entry.txt cleanly.
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

BANKED ONLY — not submitted. Revision (v2) banked as a new commit on top of
the anchor; parent submits ticket-1.
