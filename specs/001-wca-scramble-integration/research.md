# Research: WCA Official Scramble Integration

**Feature**: `001-wca-scramble-integration`  
**Date**: 2026-06-19

## 1. WCA-Faithful 3x3 Scramble Generation

**Decision**: Use [`cubing`](https://www.npmjs.com/package/cubing) (`cubing/scramble`) with `randomScrambleForEvent("333")` for timer `3x3` scrambles only.

**Rationale**:

- Generates random-state scrambles aligned with WCA Regulation 4b3 intent (same approach as official TNoodle family).
- Built-in Web Worker execution avoids main-thread blocking (FR-004, SC-002).
- Supports prefetching the next scramble while the user solves (timer UX).
- Maintained by the cubing community; avoids legacy JSSS-derived code paths with unclear licensing.
- Integrates with `Alg` type for move parsing and future visualization via `cubing/alg`.

**Alternatives considered**:

| Alternative                        | Rejected because                                                                    |
| ---------------------------------- | ----------------------------------------------------------------------------------- |
| Keep `cube-solver` for 3x3         | MIT-licensed but Kociemba-oriented; not WCA random-state + Regulation 4b3 filtering |
| Official TNoodle Java JAR (server) | Out of scope per spec; adds server dependency and ops burden                        |
| Self-implement TNoodle algorithm   | High complexity, maintenance burden, unlikely to match delegate tooling             |
| `tnoodle-lib` via WASM/Java bridge | Heavy build pipeline; no mature browser distribution                                |

**Known limitation**: `cubing/scramble` documents that full scramble filtering (move-count trimming to exactly 20–25) may lag official TNoodle in edge cases. Acceptable per spec assumption: practice-equivalent rules are sufficient (not bitwise-identical to a specific JAR version).

---

## 2. Training Subset Scrambles (Non-3x3 Timer Types)

**Decision**: Retain `cube-solver` for training subset types (`2gll`, `cmll`, `corners`, `edges`, `lse`, `lsll`, `pll`, `zbll`, `zzls`).

**Rationale**:

- Already integrated in `Timer.tsx` and `scrambleUtils.tsx`; all ten types work today.
- Spec explicitly allows training subsets to follow established training rules, not WCA 4b3.
- Avoids replacing working code without user value; reduces migration risk.

**Alternatives considered**:

| Alternative                            | Rejected because                                                              |
| -------------------------------------- | ----------------------------------------------------------------------------- |
| Migrate all types to `cubing/scramble` | No training-subset events in WCA catalog; would require custom logic anyway   |
| Fork training logic into new module    | Unnecessary refactor for P1; can wrap existing calls behind `ScrambleService` |

---

## 3. Async Scramble UX in Next.js Client Components

**Decision**: Replace synchronous `useMemo(() => scramble(...))` with an async hook (`useScramble`) that manages `{ status, scramble, error }`, cancels stale requests on type change, and prefetches the next 3x3 scramble after display.

**Rationale**:

- `cubing/scramble` returns `Promise<Alg>`; synchronous generation would block or require anti-patterns.
- Spec requires visible loading state and no stale scrambles on rapid type switching (edge cases).
- Matches existing SSR pattern: show `t("generatingScramble")` until client resolves.

**Alternatives considered**:

| Alternative                       | Rejected because                                             |
| --------------------------------- | ------------------------------------------------------------ |
| Dynamic import + `useEffect` only | Needs explicit abort/cancellation and prefetch semantics     |
| Server Actions for scrambles      | Unnecessary latency; scrambles are client-only practice data |

---

## 4. Canonical Cube State (54-Character Facelet String)

**Decision**: Adopt standard facelet order **U → R → F → D → L → B**, 9 stickers per face row-major, characters **U/R/F/D/L/B** representing face identity (not physical color).

**Rationale**:

- Industry standard (WCA/TNoodle, ksolve, most timers); enables interchange and future tooling.
- Separates state from display (FR-006, FR-013): themes map face letters → `CubeColor` at render time.
- Solved state: `UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB`.

**Alternatives considered**:

| Alternative                                                  | Rejected because                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------------ |
| Keep physical single-letter colors (`w`, `r`, `g`…) in state | Breaks theme swapping; already inconsistent across F2L vs OLL data |
| 3D partial-face grids as canonical                           | Not a full cube state; blocks unified scramble→render pipeline     |

**Implementation note**: Apply moves using `cubing/alg` (or a thin wrapper) to produce facelet strings from scramble text.

---

## 5. Custom Rendering Pipeline (No Third-Party Images)

**Decision**: Pipeline **move string → facelet string → themed view model → existing `CubeFace2D` / `CubeFace3D`**.

**Rationale**:

- Spec forbids external scramble image APIs (FR-007).
- Project already owns `Cube3D`, `CubeFace2D`, `CubeFace3D`; adapt inputs via theme adapter rather than replacing components.
- Phase 1: introduce adapter layer; Phase 2 (tasks): migrate one legacy format as proof (FR-012, SC-006).

**Alternatives considered**:

| Alternative                                    | Rejected because                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------ |
| `TwistyPlayer` from cubing.js for all diagrams | Heavier dependency surface; spec calls for project-owned renderers |
| Pre-render SVG/PNG from library                | Violates FR-007                                                    |

---

## 6. License Compatibility (`cubing` GPL)

**Decision**: Add `cubing` under **MPL-2.0** option (`MPL-2.0 OR GPL-3.0-or-later`); document in README/plan that GPL path applies if MPL incompatibilities arise.

**Rationale**:

- Spec assumption: GPL acceptable pending review; dual-license package allows MPL when combined correctly.
- Project is `private: true` on npm but source should remain compliant for future public release.
- `cube-solver` (MIT) retained for training subsets only.

**Alternatives considered**:

| Alternative                  | Rejected because                                                   |
| ---------------------------- | ------------------------------------------------------------------ |
| GPL-only interpretation      | MPL-2.0 is explicitly offered by upstream                          |
| Avoid GPL libraries entirely | No MIT alternative with WCA-faithful random-state + worker support |

---

## 7. Testing Strategy

**Decision**: Manual smoke tests per `quickstart.md` for P1; optional lightweight Node script for scramble property checks (move count, same-face consecutive) without adding a full test framework in this feature.

**Rationale**:

- No Jest/Vitest/Playwright in `package.json` today; adding framework is out of spec scope.
- SC-001/SC-003/SC-004 are verifiable manually or via ad-hoc script.

**Alternatives considered**:

| Alternative                | Rejected because                                                    |
| -------------------------- | ------------------------------------------------------------------- |
| Add Vitest in this feature | Scope creep; constitution template mentions TDD but is not ratified |

---

## 8. Lesson Scrambles (Out of WCA Replacement)

**Decision**: No change to `generateF2LCaseScramble`, `generateOLLCaseScramble`, `generatePLLCaseScramble` logic; only remove `cube-solver` import from `generateScramble()` if unused elsewhere, or repoint 3x3 helper to WCA service.

**Rationale**: Spec FR-010 / User Story 5 require pedagogical inverse-move scrambles unchanged.
