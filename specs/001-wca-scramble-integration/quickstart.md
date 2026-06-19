# Quickstart: WCA Scramble Integration Validation

**Feature**: `001-wca-scramble-integration`  
**Prerequisites**: Node.js, npm, repo cloned

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000/{locale}/timer` (e.g. `/en/timer`).

---

## Scenario 1 — WCA 3x3 Scramble Properties (SC-001)

**Goal**: Verify competition-faithful 3x3 scrambles.

1. Select scramble type **3x3**.
2. Wait for scramble to appear (not stuck on "generating scramble").
3. Repeat for 20+ solves (stop timer each time to refresh scramble).
4. For each scramble, confirm:
   - Move count between 20 and 25 (split on spaces)
   - No consecutive moves on the same face (compare first character of each move token)

**Expected**: All sampled scrambles pass both checks.

---

## Scenario 2 — UI Responsiveness During Generation (SC-002, FR-004)

**Goal**: Timer stays interactive while scrambles generate.

1. On timer page, open DevTools Performance or simply interact during load.
2. While scramble shows loading text, attempt hold-to-start gesture and change scramble type.
3. Switch rapidly between `3x3` and `2gll` five times.

**Expected**:

- Controls respond without multi-second freeze
- Only the latest selected type's scramble displays (no stale scramble flash)

---

## Scenario 3 — All Timer Scramble Types (SC-003)

**Goal**: Ten types remain functional.

For each type in the selector (`3x3`, `2gll`, `cmll`, `corners`, `edges`, `lse`, `lsll`, `pll`, `zbll`, `zzls`):

1. Select type
2. Confirm non-empty scramble appears

**Expected**: Valid move string on first attempt for all ten types.

---

## Scenario 4 — Solve History Persistence (SC-007)

**Goal**: Scramble text stored with solves.

1. Complete one solve on 3x3.
2. Navigate to solve times page (`/{locale}/solveTimes`).
3. Inspect the row for the latest solve.

**Expected**: Scramble column shows the exact scramble from the completed solve.

---

## Scenario 5 — Lesson Scrambles Unchanged (SC-004)

**Goal**: Pedagogical scrambles preserved.

| Page | Path                             | Check                                                         |
| ---- | -------------------------------- | ------------------------------------------------------------- |
| F2L  | `/{locale}/firstTwoLayers`       | Open a case sheet → scramble includes OLL setup + inverse F2L |
| OLL  | `/{locale}/orientationLastLayer` | Scramble includes PLL setup + inverse OLL                     |
| PLL  | `/{locale}/permutationLastLayer` | Scramble is inverse PLL only                                  |

**Expected**: Structure matches pre-migration behavior (compare with current `main` if needed).

---

## Scenario 6 — No Third-Party Scramble Images (SC-005)

**Goal**: Custom rendering only.

1. Open timer and any lesson page with cube diagrams.
2. DevTools → Network: filter `Img` / `svg` / external cube CDN domains.
3. Confirm no requests to scramble image APIs (e.g. `cube-solver` image endpoints, external PNG/SVG scramble services).

**Expected**: Zero third-party scramble image loads.

---

## Scenario 7 — Legacy Migration Smoke (SC-006)

**Goal**: One legacy format converts to facelet string.

1. In Node or a dev console, import `f2lPartialGridToFacelets` from `src/utils/legacyCaseAdapters.ts`.
2. Pass `cubeCasesFirstTwoLayers[0].colors` (case01) from `src/data/cubeCasesFirstTwoLayers.ts`.
3. Render the result with `faceletsToCube3DFaces` + `Cube3D` (`themedColors` prop) and compare to the existing `CubeInfoCard3D` for case01.

**Expected**: Visually equivalent F/U/R diagram using the facelet pipeline.

**Recorded 2026-06-19**: Adapter maps F2L partial grids (faces 0→F, 1→U, 2→R) with `z` stickers skipped; non-visible faces remain solved.

---

## Scenario 8 — Error Fallback

**Goal**: Graceful degradation (edge case).

1. Simulate failure (e.g. temporarily break scramble import in dev build, or disconnect after starting load if applicable).
2. Observe timer scramble area.

**Expected**: Fallback scramble or clear error message; app does not crash or show blank scramble silently.

---

## Optional Dev Script (post-implementation)

If added under `scripts/validate-scramble.mjs`:

```bash
node scripts/validate-scramble.mjs 50
```

**Expected**: Reports pass rate for move count and same-face checks on 3x3 samples.

---

## References

- [Scramble Service Contract](./contracts/scramble-service.md)
- [Cube State Contract](./contracts/cube-state.md)
- [Cube Theme Contract](./contracts/cube-theme.md)
- [Data Model](./data-model.md)
