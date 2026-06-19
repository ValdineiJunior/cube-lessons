# Contract: Cube State & Move Application

**Feature**: `001-wca-scramble-integration`  
**Consumers**: Theme adapter, future scramble visualization, legacy migration

## Facelet String Format

```
Index:  0–8    9–17   18–26  27–35  36–44  45–53
Face:   U      R      F      D      L      B
Order:  row-major, 3×3 per face, top-left to bottom-right
```

**Solved state**:

```text
UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB
```

## Types

```typescript
type FaceLetter = "U" | "R" | "F" | "D" | "L" | "B";

type FaceletString = string & { readonly __brand: "FaceletString" };

type MoveString = string; // space-separated WCA notation
```

## API

### `SOLVED_FACELETS: FaceletString`

Constant solved state.

### `parseFacelets(value: string): FaceletString | null`

**Validation**:

- Length 54
- Every char ∈ `{U,R,F,D,L,B}`

Returns `null` on invalid input.

### `applyMoves(state: FaceletString, moves: MoveString): FaceletString`

**Behavior**:

- Applies moves in order using WCA default orientation (white top, green front)
- Supports `U/D/L/R/F/B`, suffix `'` and `2`
- Wide moves (`Rw`, etc.) NOT required for P1 timer/lesson paths

**Implementation**: Delegate to `cubing/alg` cube state APIs or equivalent tested wrapper.

### `faceletsToFaces(state: FaceletString): Record<FaceLetter, FaceLetter[]>`

Returns six arrays of nine face-identity letters (for theme mapping).

## Legacy Adapters (phased)

### `f2lPartialGridToFacelets(grid: string[][]): FaceletString`

Convert F2L 3-face partial grid (`z` = hidden) to full facelet string with gray/hidden handling at view layer.

### `ollBorderGridToFacelets(details: SquareColorDetail[]): FaceletString`

Convert OLL top-face border diagram to full cube state assuming solved elsewhere except specified face.

**Phase 1 deliverable**: One adapter implemented + visual parity test documented in `quickstart.md`.

## Invariants

1. Adapters MUST NOT write physical color names into `FaceletString`.
2. Hidden stickers (`z`) are a **view** concern; facelets always use face letters.
3. Move application is deterministic for the same `(state, moves)` pair.
