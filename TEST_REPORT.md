# Test report — Probability Detective

Environment: macOS, Chromium (Playwright) at 1280x900 and 360x740;
`node test/calc.test.mjs` for domain math. Run against the public preview at
https://iliasabk.github.io/prob-detective/ on 2026-09-14.

## Acceptance-example mapping

| Brief acceptance example | Evidence | Result |
|---|---|---|
| Coin lab: predict, run 10/100/1,000 trials, inspect counts & proportions; fair + labelled biased coins | Prediction field; three run sizes; coin select offers fair / 70% / 30% with explicit labels — shot 02 | PASS |
| Dice lab: fair six-sided dice, compare sums of two; explain unequal sums; chart + equivalent table | Histogram with theory dashes; per-total table with observed %, expected %, ways — shot 03 | PASS |
| Fair-game designer: choose rules, simulate, reason about equal expected advantage; new game as final challenge | Coin/points selectors, 1,000-flip simulation, expected-vs-simulated table, free-text fair-game design — shot 04 | PASS |
| Predictions before evidence, revisable without penalty | Lab 1 prediction field and Lab 2 radio prediction; both optional/changeable | PASS |
| Experimental vs theoretical distinguished visually + verbally | Green "expected" lines/dashes vs observed bars; labels and feedback state the difference | PASS |
| Incorrect responses explained with worked examples | Wrong-answer feedback gives concrete counterexamples (e.g. "7 heads in 10 happens ~1 time in 8 on a fair coin") | PASS |
| Tests reproducible via seeded/injected randomness | `test/calc.test.mjs` uses fixed seeds; all assertions deterministic | PASS |
| Charts update from actual generated trial data | Every run appends real simulated data to chart + table | PASS |
| No real gambling/betting framing | Points-only game, no money/stakes/casino language | PASS |

## Manual checks

- Keyboard: Tab/Enter reach all controls; visible focus ring.
- Touch targets ≥44px; labelled radio rows; selects operable.
- Reduced motion honoured; non-colour-only feedback (text + border).
- Reset without reload via "Restart the labs".
- Mobile 360px: tabs stack, no horizontal scroll — shot 06.
- No network calls after load; all content inline.

## Automated tests

```
$ node test/calc.test.mjs
all calc tests passed
```

Covers: seeded reproducibility, 10-flip variation vs 1,000-flip convergence,
biased-coin persistence, dice-sum distribution vs 36-outcome theory, and the
3-vs-7 fair-game balance on a 70% coin.

## Screenshot walkthrough (numbered)

1. `docs/shots/01-intro.png` — briefing and navigation
2. `docs/shots/02-coinlab.png` — coin lab with runs and expected line
3. `docs/shots/03-dicelab.png` — dice sums vs theory dashes
4. `docs/shots/04-fairgame.png` — fair-game simulation, balanced state
5. `docs/shots/05-report.png` — completion report with learner design
6. `docs/shots/06-mobile-360.png` — 360px mobile rendering
