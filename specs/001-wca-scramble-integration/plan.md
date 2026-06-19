# Implementation Plan: WCA Official Scramble Integration

**Branch**: `001-wca-scramble-integration` | **Date**: 2026-06-19 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-wca-scramble-integration/spec.md`

## Summary

Replace synchronous `cube-solver` 3x3 timer scrambles with WCA-faithful random-state generation via `cubing/scramble` (async, Web Worker–backed), adopt the standard 54-character URFDLB facelet string as canonical cube state, introduce a theme adapter layer for project-owned renderers, retain `cube-solver` for training subset types and unchanged lesson inverse-move scrambles, and phase legacy lesson data migration behind adapters.

## Technical Context

**Language/Version**: TypeScript 6, React 19, Next.js 16 (App Router)

**Primary Dependencies**: `cubing` (scramble + alg), `cube-solver` (training subsets only), `next-intl`, Tailwind CSS 4

**Storage**: Browser `localStorage` for solve times (scramble text per solve); no server DB

**Testing**: Manual smoke tests per [quickstart.md](./quickstart.md); no test framework in repo today

**Target Platform**: Modern browsers (client components); requires HTTP/HTTPS (not `file://`) for cubing workers

**Project Type**: Single Next.js web application (`src/app`, `src/components`)

**Performance Goals**: No UI freeze >100 ms during scramble generation (SC-002); prefetch next 3x3 scramble while solving

**Constraints**: No third-party scramble images; GPL/MPL compliance for `cubing`; lesson pedagogy unchanged

**Scale/Scope**: ~10 timer scramble types, 3 lesson pages, static case data files; P1 focuses on timer 3x3 + architecture foundations

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

| Gate                  | Status      | Notes                                                                                                          |
| --------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| Constitution ratified | ⚠️ N/A      | `.specify/memory/constitution.md` is still a template — no project-specific gates enforced                     |
| Library-first / CLI   | ✅ Pass     | Scramble and cube-state logic isolated in `src/lib/` or `src/utils/` modules with typed contracts              |
| Test-first            | ⚠️ Deferred | No test runner configured; validation via quickstart smoke scenarios until constitution defines testing policy |
| Simplicity            | ✅ Pass     | Dual-library approach (cubing for 3x3, cube-solver for training) avoids rewriting working training generators  |
| Integration testing   | ⚠️ Manual   | End-to-end checks documented in quickstart                                                                     |

**Post-design re-check**: Design adds three contract documents and a theme adapter layer — justified by FR-005–FR-008 and future colorblind support. No unjustified complexity.

## Project Structure

### Documentation (this feature)

```text
specs/001-wca-scramble-integration/
├── plan.md              # This file
├── research.md          # Phase 0 — technology decisions
├── data-model.md        # Phase 1 — entities and invariants
├── quickstart.md        # Phase 1 — validation scenarios
├── contracts/           # Phase 1 — service and state contracts
│   ├── scramble-service.md
│   ├── cube-state.md
│   └── cube-theme.md
└── tasks.md             # Phase 2 (/speckit.tasks — not created here)
```

### Source Code (repository root)

```text
src/
├── app/[locale]/
│   ├── timer/page.tsx
│   ├── firstTwoLayers/page.tsx
│   ├── orientationLastLayer/page.tsx
│   └── permutationLastLayer/page.tsx
├── components/
│   ├── Timer.tsx
│   ├── Cube3D.tsx
│   ├── CubeFace2D.tsx
│   └── CubeFace3D.tsx
├── hooks/
│   ├── useTimer.ts
│   └── useSolveStats.ts
├── utils/
│   ├── scrambleUtils.tsx      # lesson scrambles (unchanged logic)
│   ├── colorUtils.ts
│   └── (new) cubeState.ts     # facelet parse/apply
│   └── (new) cubeTheme.ts     # theme adapter
├── lib/
│   └── (new) scrambleService.ts
├── data/
│   ├── cubeCasesFirstTwoLayers.ts
│   ├── cubeCasesOrientationLastLayer.ts
│   └── cubeCasesPermutationLastLayer.ts
└── types/
    └── types.ts               # extend with FaceLetter, ScrambleType
```

**Structure Decision**: Single Next.js app. New modules under `src/lib/` (scramble service) and `src/utils/` (cube state + theme). `Timer.tsx` consumes `useScramble` hook. Lesson pages untouched in P1 except optional adapter proof.

## Complexity Tracking

> No constitution violations requiring justification. Dual-library scramble approach documented in [research.md](./research.md#2-training-subset-scrambles-non-3x3-timer-types).

| Decision                 | Why Needed                              | Simpler Alternative Rejected                              |
| ------------------------ | --------------------------------------- | --------------------------------------------------------- |
| `cubing` + `cube-solver` | WCA 3x3 vs training subset rules differ | Single library lacks training subset support              |
| Facelet + theme layer    | FR-006, FR-013 theme-ready architecture | Keep physical colors in data — blocks colorblind palettes |
| Async scramble hook      | cubing API is Promise-based + worker    | Sync useMemo blocks UI                                    |

## Implementation Phases (for tasks.md)

### Phase A — WCA 3x3 Timer (P1)

1. Add `cubing` dependency; implement `scrambleService.ts` per [contracts/scramble-service.md](./contracts/scramble-service.md)
2. Implement `useScramble` hook with cancellation and prefetch
3. Refactor `Timer.tsx` to async scramble display + loading/error states
4. Verify solve history still records scramble text

### Phase B — Cube State & Theme Foundation (P2 architecture)

1. Implement `cubeState.ts` per [contracts/cube-state.md](./contracts/cube-state.md)
2. Implement `cubeTheme.ts` per [contracts/cube-theme.md](./contracts/cube-theme.md)
3. Wire scramble → facelet → themed view model (timer visualization optional in P1)

### Phase C — Legacy Migration Proof (P3)

1. Implement one F2L adapter (`f2lPartialGridToFacelets`)
2. Visual parity check per quickstart Scenario 7
3. Document remaining migration backlog

### Explicit Non-Changes

- `generateF2LCaseScramble`, `generateOLLCaseScramble`, `generatePLLCaseScramble` logic
- Solve record schema
- Colorblind palette UI

## Artifacts Generated

| Artifact            | Path                                                             |
| ------------------- | ---------------------------------------------------------------- |
| Research            | [research.md](./research.md)                                     |
| Data model          | [data-model.md](./data-model.md)                                 |
| Scramble contract   | [contracts/scramble-service.md](./contracts/scramble-service.md) |
| Cube state contract | [contracts/cube-state.md](./contracts/cube-state.md)             |
| Theme contract      | [contracts/cube-theme.md](./contracts/cube-theme.md)             |
| Quickstart          | [quickstart.md](./quickstart.md)                                 |

## Next Step

Run `/speckit-tasks` to generate dependency-ordered `tasks.md` from this plan.
