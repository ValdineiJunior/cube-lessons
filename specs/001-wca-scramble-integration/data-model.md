# Data Model: WCA Official Scramble Integration

**Feature**: `001-wca-scramble-integration`  
**Date**: 2026-06-19

## Overview

This feature introduces a canonical cube-state representation and a scramble generation service while preserving existing solve-history and lesson-scramble shapes.

---

## Entities

### Scramble

A competition or training move sequence displayed to the user and optionally persisted with solve records.

| Field    | Type                              | Rules                                             |
| -------- | --------------------------------- | ------------------------------------------------- |
| `text`   | `string`                          | Space-separated WCA SiGN moves (e.g. `R U R' U'`) |
| `type`   | `ScrambleType`                    | Generator rules applied                           |
| `source` | `'wca' \| 'training' \| 'lesson'` | Provenance for debugging and UI disclaimers       |

**Validation**:

- Non-empty string when `status === 'ready'`
- 3x3 WCA: 20–25 moves after filtering (SC-001)
- No two consecutive moves on the same face for 3x3 WCA (FR-003)

**Relationships**:

- One `Scramble` is stored on each `SolveRecord` (unchanged)
- One `Scramble` can derive one `FaceletString` via move application

---

### ScrambleType

Identifies which generator to invoke.

```typescript
type TimerScrambleType =
  | "3x3"
  | "2gll"
  | "cmll"
  | "corners"
  | "edges"
  | "lse"
  | "lsll"
  | "pll"
  | "zbll"
  | "zzls";

type ScrambleType = TimerScrambleType; // lesson types use separate functions
```

| Type       | Generator                 | WCA rules                 |
| ---------- | ------------------------- | ------------------------- |
| `3x3`      | `cubing/scramble` (`333`) | Yes (practice-equivalent) |
| All others | `cube-solver`             | No (training rules)       |

---

### FaceletString

Canonical 54-character cube state.

| Field       | Type     | Rules                                                              |
| ----------- | -------- | ------------------------------------------------------------------ |
| `value`     | `string` | Length exactly 54                                                  |
| `faceOrder` | constant | `URFDLB` — U[0–8], R[9–17], F[18–26], D[27–35], L[36–44], B[45–53] |
| `alphabet`  | constant | Characters ∈ `{U,R,F,D,L,B}` only                                  |

**Validation**:

- `value.length === 54`
- Each character is a face-identity letter (FR-005, FR-006)
- Solved reference: `UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB`

**State transitions**:

```text
SOLVED --apply(moves)--> SCRAMBLED
SCRAMBLED --apply(inverse)--> SOLVED (for lesson case setup)
```

---

### CubeTheme

Maps face-identity letters to display colors. Not persisted in cube state.

| Field        | Type                            | Rules                                                  |
| ------------ | ------------------------------- | ------------------------------------------------------ |
| `id`         | `string`                        | e.g. `wca-default`, `colorblind-deuteranopia` (future) |
| `faceColors` | `Record<FaceLetter, CubeColor>` | Six entries required                                   |

**Default WCA orientation palette** (display only):

| Face  | Letter | Default `CubeColor` |
| ----- | ------ | ------------------- |
| Up    | U      | white               |
| Right | R      | red                 |
| Front | F      | green               |
| Down  | D      | yellow              |
| Left  | L      | orange              |
| Back  | B      | blue                |

---

### ThemedFaceGrid

View model consumed by renderers after theme application.

| Variant        | Shape                            | Consumer               |
| -------------- | -------------------------------- | ---------------------- |
| `Face2DGrid`   | `SquareColorDetail[9]`           | `CubeFace2D`           |
| `Face3DGrid`   | `string[9]` (legacy color codes) | `CubeFace3D` (interim) |
| `Face3DThemed` | `CubeColor[9]`                   | `CubeFace3D` (target)  |

---

### SolveRecord (unchanged)

Existing localStorage shape from `useSolveStats`.

| Field      | Type     | Rules                                     |
| ---------- | -------- | ----------------------------------------- |
| `time`     | `number` | Milliseconds                              |
| `scramble` | `string` | Full scramble text at solve time (FR-011) |

---

### LessonCaseScramble

Pedagogical scramble; not a persisted entity—computed on demand.

| Input          | Output                               |
| -------------- | ------------------------------------ |
| F2L case moves | random OLL setup + inverse F2L moves |
| OLL case moves | random PLL setup + inverse OLL moves |
| PLL case moves | inverse PLL moves only               |

**Invariant**: Logic in `scrambleUtils.tsx` unchanged (FR-010).

---

### LegacyCaseData

Static lesson diagram source formats (migration sources only).

| Format             | Location                                 | Encoding                                                              |
| ------------------ | ---------------------------------------- | --------------------------------------------------------------------- |
| F2L partial 3-face | `cubeCasesFirstTwoLayers.ts`             | `string[][]` with `z` hidden stickers; physical letters `w,r,b,y,g,o` |
| OLL/PLL top face   | `cubeCasesOrientationLastLayer.ts`, etc. | `SquareColorDetail[]` border colors                                   |
| 3D piece diagrams  | `CubeInfoCard3D` data                    | `string[][]` per face                                                 |

**Migration target**: `FaceletString` + adapter to existing view models for visual parity (FR-012, phased).

---

## Scramble Generation State Machine (Timer)

```text
idle
  └─ request(type) → loading
loading
  ├─ success → ready (display scramble)
  ├─ error → error (show fallback or message)
  └─ type changed → loading (cancel stale)
ready
  └─ request(type) → loading
```

**Race rule**: Only the latest `requestId` for a given hook instance may commit to UI state.

---

## Key Invariants

1. Cube-state data never stores physical color names—only face letters.
2. Display colors always flow through `CubeTheme`.
3. Lesson scrambles never call WCA random-state generator.
4. Solve history stores scramble text, not facelet strings (unless extended later).

---

## Migration Backlog (post F2L adapter)

| Format                     | Source                             | Status                                                           |
| -------------------------- | ---------------------------------- | ---------------------------------------------------------------- |
| F2L partial 3-face grid    | `cubeCasesFirstTwoLayers.ts`       | Adapter implemented (`f2lPartialGridToFacelets`)                 |
| OLL top-face border colors | `cubeCasesOrientationLastLayer.ts` | Pending (`ollBorderGridToFacelets`)                              |
| PLL top-face border colors | `cubeCasesPermutationLastLayer.ts` | Pending                                                          |
| 3D piece diagram grids     | `CubeInfoCard3D` data              | Pending unified facelet + theme path                             |
| Static data rewrite        | All case files                     | Optional future phase — replace source data with facelet strings |
