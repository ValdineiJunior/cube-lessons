# Tasks: WCA Official Scramble Integration

**Input**: Design documents from `/specs/001-wca-scramble-integration/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Manual smoke tests per quickstart.md only (no test framework in repo). Optional validation script in Polish phase.

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: User story label (US1–US6)
- Include exact file paths in descriptions

## Path Conventions

Single Next.js project: `src/` at repository root (see plan.md).

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Install dependencies and shared types before implementation

- [x] T001 Add `cubing` npm dependency and run install in `package.json`
- [x] T002 [P] Add `TimerScrambleType`, `FaceLetter`, `ScrambleSource`, and `ScrambleError` types in `src/types/scramble.ts`
- [x] T003 [P] Document `cubing` MPL-2.0 license choice in `README.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core scramble service and validation helpers — MUST complete before user story phases

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Implement `generateScrambleAsync`, `prefetchScramble`, and fallback scramble handling in `src/lib/scrambleService.ts` per `specs/001-wca-scramble-integration/contracts/scramble-service.md`
- [x] T005 [P] Implement WCA scramble property helpers (move count 20–25, same-face consecutive check) in `src/utils/scrambleValidation.ts`
- [x] T006 [P] Configure Next.js bundler for `cubing` worker imports if required in `next.config.mjs`

**Checkpoint**: Scramble service callable; foundation ready for user stories

---

## Phase 3: User Story 1 — Competition-Faithful 3x3 Practice (Priority: P1) 🎯 MVP

**Goal**: Timer `3x3` mode generates WCA-faithful random-state scrambles; solve history stores scramble text

**Independent Test**: Open timer, select 3x3, generate 20 scrambles — each has 20–25 moves, no consecutive same-face moves, standard notation. Complete a solve and confirm scramble saved on solve times page.

### Implementation for User Story 1

- [x] T007 [US1] Wire `3x3` path to `randomScrambleForEvent("333")` in `src/lib/scrambleService.ts`
- [x] T008 [US1] Repoint `generateScramble()` to use `generateScrambleAsync` for 3x3 in `src/utils/scrambleUtils.tsx`
- [x] T009 [US1] Confirm `addSolveTime(time, scramble)` in `src/components/Timer.tsx` still passes scramble text via `src/hooks/useSolveStats.ts`

**Checkpoint**: WCA 3x3 scrambles work; solve history unchanged

---

## Phase 4: User Story 2 — Responsive Timer During Scramble Generation (Priority: P1)

**Goal**: Async scramble generation with loading feedback, no UI freeze, stale-request cancellation, 3x3 prefetch

**Independent Test**: Generate scrambles while holding timer and switching types rapidly — UI stays responsive, loading state visible, only latest type's scramble displays.

### Implementation for User Story 2

- [x] T010 [US2] Implement `useScramble` hook with `{ status, scramble, error, refresh }` and requestId cancellation in `src/hooks/useScramble.ts`
- [x] T011 [US2] Call `prefetchScramble("3x3")` after scramble ready in `src/hooks/useScramble.ts`
- [x] T012 [US2] Refactor `src/components/Timer.tsx` to replace synchronous `useMemo` + `cube-solver` import with `useScramble`
- [x] T013 [US2] Add loading and error display in `src/components/Timer.tsx` (preserve `t("generatingScramble")` from `messages/en.json`)
- [x] T014 [P] [US2] Add scramble error i18n keys in `messages/en.json` and `messages/pt.json`

**Checkpoint**: Timer fully async; US1 + US2 together form MVP

---

## Phase 5: User Story 3 — Custom Cube Visualization from Standard State (Priority: P2)

**Goal**: Facelet string + theme adapter pipeline feeding project-owned `CubeFace2D` / `CubeFace3D` renderers (no third-party images)

**Independent Test**: Derive cube state from a scramble move string and render via existing components; confirm no external scramble image network requests.

### Implementation for User Story 3

- [x] T015 [P] [US3] Implement `SOLVED_FACELETS`, `parseFacelets`, and `applyMoves` in `src/utils/cubeState.ts` per `specs/001-wca-scramble-integration/contracts/cube-state.md`
- [x] T016 [P] [US3] Implement `WCA_DEFAULT_THEME` and `themeFaceLetter` in `src/utils/cubeTheme.ts` per `specs/001-wca-scramble-integration/contracts/cube-theme.md`
- [x] T017 [US3] Implement `faceletsToThemedGrid` and `faceletsToCube3DFaces` in `src/utils/cubeTheme.ts`
- [x] T018 [US3] Add `scrambleToFacelets(moves: string)` bridge in `src/utils/scrambleVisualization.ts`
- [x] T019 [P] [US3] Add optional `CubeColor[]` themed input path to `src/components/CubeFace3D.tsx`
- [x] T020 [US3] Create optional `ScrambleCubePreview` component using `Cube3D` in `src/components/ScrambleCubePreview.tsx`

**Checkpoint**: Move string → facelet → themed renderer pipeline exists

---

## Phase 6: User Story 4 — Training Subset Scrambles Continue Working (Priority: P2)

**Goal**: All nine non-3x3 training types produce valid scrambles via `cube-solver` through unified service

**Independent Test**: Select each training type (`2gll`, `cmll`, `corners`, `edges`, `lse`, `lsll`, `pll`, `zbll`, `zzls`) and confirm non-empty valid scramble.

### Implementation for User Story 4

- [x] T021 [US4] Route all nine training types to `cube-solver` in `src/lib/scrambleService.ts`
- [x] T022 [US4] Export shared `SCRAMBLE_DESCRIPTIONS` / type union from `src/types/scramble.ts` and update `src/components/Timer.tsx` imports
- [x] T023 [US4] Verify training types return `source: "training"` and sync-wrapped results in `src/lib/scrambleService.ts`

**Checkpoint**: All 10 timer scramble types functional

---

## Phase 7: User Story 5 — Lesson Case Scrambles Unchanged (Priority: P3)

**Goal**: F2L/OLL/PLL lesson scrambles retain inverse-move pedagogy; no WCA generator on lesson paths

**Independent Test**: Open F2L, OLL, PLL lesson pages — scrambles match inverse-move + random LL structure from current behavior.

### Implementation for User Story 5

- [x] T024 [P] [US5] Audit and preserve `generateF2LCaseScramble`, `generateOLLCaseScramble`, `generatePLLCaseScramble` in `src/utils/scrambleUtils.tsx`
- [x] T025 [US5] Confirm lesson pages use scrambleUtils only (not `scrambleService`) in `src/app/[locale]/firstTwoLayers/page.tsx`, `src/app/[locale]/orientationLastLayer/page.tsx`, and `src/app/[locale]/permutationLastLayer/page.tsx`
- [x] T026 [US5] Remove unused `cube-solver` direct imports outside `src/lib/scrambleService.ts` and preserved lesson paths

**Checkpoint**: Lesson pedagogy unchanged

---

## Phase 8: User Story 6 — Legacy Lesson Data Migration Path (Priority: P3)

**Goal**: Prove one legacy format converts to facelet string with visually equivalent output

**Independent Test**: Convert F2L `case01` partial grid to facelet string and render via theme adapter (quickstart Scenario 7).

### Implementation for User Story 6

- [x] T027 [US6] Implement `f2lPartialGridToFacelets` in `src/utils/legacyCaseAdapters.ts`
- [x] T028 [US6] Add F2L case01 parity check notes to `specs/001-wca-scramble-integration/quickstart.md` Scenario 7
- [x] T029 [US6] Document remaining OLL/PLL migration backlog in `specs/001-wca-scramble-integration/data-model.md`

**Checkpoint**: One legacy adapter proven; migration path documented

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Validation, disclaimers, and quality gates across all stories

- [x] T030 [P] Add optional `scripts/validate-scramble.ts` for 3x3 property checks per `specs/001-wca-scramble-integration/quickstart.md`
- [x] T031 Add practice-only WCA disclaimer copy in `messages/en.json`, `messages/pt.json`, and timer UI in `src/components/Timer.tsx`
- [x] T032 Run all scenarios in `specs/001-wca-scramble-integration/quickstart.md` and record results
- [x] T033 Run `npm run lint` and `npm run format:check` on changed files

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 — **blocks all user stories**
- **US1 (Phase 3)**: Depends on Phase 2
- **US2 (Phase 4)**: Depends on Phase 2; integrates with US1 scramble service
- **US3 (Phase 5)**: Depends on Phase 2; independent of US1/US2 (can parallel after Phase 2)
- **US4 (Phase 6)**: Depends on Phase 2 + US2 hook integration (Timer must use service)
- **US5 (Phase 7)**: Depends on Phase 2 (ensure refactor doesn't break lesson utils)
- **US6 (Phase 8)**: Depends on US3 (`cubeState.ts`, `cubeTheme.ts`)
- **Polish (Phase 9)**: Depends on desired user stories being complete

### User Story Dependencies

| Story | Depends on           | Can parallel with |
| ----- | -------------------- | ----------------- |
| US1   | Phase 2              | —                 |
| US2   | Phase 2, US1 service | US3 after Phase 2 |
| US3   | Phase 2              | US1, US2          |
| US4   | Phase 2, US2         | US3, US5          |
| US5   | Phase 2              | US3, US4          |
| US6   | US3                  | US5               |

### Within Each User Story

- Service/lib modules before components/hooks
- Hooks before Timer integration (US2)
- cubeState + cubeTheme before visualization bridge (US3)
- Adapters after cube state foundation (US6)

---

## Parallel Example: User Story 3

```bash
# Launch cube state and theme modules together:
Task T015: "Implement cubeState.ts in src/utils/cubeState.ts"
Task T016: "Implement WCA_DEFAULT_THEME in src/utils/cubeTheme.ts"
Task T019: "Add CubeColor[] path to src/components/CubeFace3D.tsx"
```

---

## Parallel Example: User Story 2 + US3

After Phase 2 completes, two developers can work in parallel:

- Developer A: US1 (T007–T009) then US2 (T010–T014) — MVP timer path
- Developer B: US3 (T015–T020) — cube state pipeline

---

## Implementation Strategy

### MVP First (User Stories 1 + 2)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: US1 — WCA 3x3 scrambles
4. Complete Phase 4: US2 — async responsive timer
5. **STOP and VALIDATE**: quickstart Scenarios 1, 2, 4
6. Demo/deploy MVP

### Incremental Delivery

1. Setup + Foundational → service ready
2. US1 + US2 → MVP timer (WCA 3x3 + responsive UX)
3. US4 → all 10 scramble types via unified service
4. US3 → facelet + theme rendering pipeline
5. US5 → lesson regression check
6. US6 → legacy adapter proof
7. Polish → full quickstart validation

### Suggested MVP Scope

**Phases 1–4 only** (T001–T014): WCA 3x3 scrambles with async timer UX and solve history. Training subsets continue working via existing `cube-solver` path inside `scrambleService` (minimal US4 work in T004).

---

## Notes

- [P] tasks = different files, no incomplete-task dependencies
- [Story] label maps to spec.md user stories US1–US6
- No automated test tasks — manual validation per quickstart.md
- Do not replace lesson inverse-move logic (FR-010)
- Do not add third-party scramble images (FR-007)
- Commit after each phase checkpoint
