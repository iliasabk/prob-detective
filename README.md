# Probability Detective — when does a pattern mean something?

A self-contained interactive lesson (~10–15 min) for readers around age 12.
Three labs: coin experiments at 10/100/1,000 flips, two-dice sums, and a
fair-game designer. All randomness is simulated locally with a seeded
generator; nothing is collected or transmitted.

## Run

```sh
python3 -m http.server 8080   # then open http://localhost:8080
# or simply open index.html directly in a browser
```

No build, no dependencies, no accounts, no tracking. Rendering verified at
360px / 768px / 1280px; full keyboard operation.

## Tests

```sh
node test/calc.test.mjs
```

Covers seeded reproducibility, coin-run statistics, dice-sum distribution vs
theory, and expected-gain balancing.

## Files

- `index.html` — complete lesson (markup, styles, logic)
- `EDUCATOR_GUIDE.md` — objectives, walkthrough, sources, limitations
- `TEST_REPORT.md` — acceptance-criteria evidence
- `test/calc.test.mjs` — reproducibility tests
- `LICENSE` — MIT

## Known limitations

- Learner-facing runs share one seeded generator state; results are
  reproducible across sessions only in aggregate, not per click.
- The fair-game lab teaches expected value with a simplified two-outcome
  game; it is an illustration, not a game-theory treatment.
