# Educator guide — Probability Detective

## Objectives

After one 10–15 minute session the learner can:

1. Distinguish theoretical probability from observed frequency and explain
   why small samples vary.
2. Compare experiments at different sample sizes and describe how
   proportions approach — without guaranteeing — expected values.
3. Explain fairness in a simple points game via expected gain, and design a
   fair rule for a biased coin.

The lesson explicitly avoids "randomness owes you" thinking: feedback
explains that 7 heads in 10 flips is unusual but expected sometimes on a
fair coin.

## Prerequisites

Basic fractions/percentages help; all terms are defined inline.

## Suggested session

- 2 min: briefing (theory vs observed).
- 4 min: Lab 1 — prediction first, then 10/100/1,000-flip runs, checkpoint.
- 4 min: Lab 2 — prediction about equal totals, dice runs, checkpoint.
- 4 min: Lab 3 — build a game, simulate, checkpoint, design fair game.
- Report screen restates the detective rule.

## Differentiation / co-play

- Hint buttons and unlimited retry on every checkpoint; feedback names the
  misconception (e.g. "unusual is not impossible").
- Extension: ask learners to find the point spread that makes the 30% coin
  fair, or predict the 6 and 8 columns before rolling.
- Co-play: adult reads the claim aloud; learner predicts before each run.

## Content sources

- GAISE Pre-K–12 Framework (ASA), levels on chance variation:
  https://www.amstat.org/education/gaise — supports the
  predict-then-sample sequence and sample-size comparison.
- NCTM "Illuminations" probability investigations:
  https://illuminations.nctm.org/ — supports the dice-sum counting approach
  used in Lab 2.

## Model & limitations

- Simulations use a seeded mulberry32 generator; domain tests inject fixed
  seeds so assertions are reproducible. Learner-facing runs advance one
  shared stream, so per-click outcomes vary within a session.
- The fair-game lab uses a two-outcome points model only; no gambling
  framing, odds, or stakes are presented.

## Offline follow-up idea

Paper tally: 30 real coin flips in pairs of students; pool class results
and compare the class proportion to each pair's proportion.
