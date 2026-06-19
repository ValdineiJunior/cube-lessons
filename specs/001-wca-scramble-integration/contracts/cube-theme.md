# Contract: Cube Theme & Render View Model

**Feature**: `001-wca-scramble-integration`  
**Consumers**: `CubeFace2D`, `CubeFace3D`, lesson pages (future themed migration)

## Purpose

Decouple face-identity state from display colors to enable future colorblind palettes (FR-013) without rewriting case data.

## Types

```typescript
type CubeColor =
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "yellow"
  | "white"
  | "gray";

type CubeTheme = {
  id: string;
  label: string;
  faces: Record<FaceLetter, CubeColor>;
};

type ThemedSticker = {
  face: FaceLetter;
  displayColor: CubeColor;
};
```

## Default Theme

```typescript
const WCA_DEFAULT_THEME: CubeTheme = {
  id: "wca-default",
  label: "WCA Default",
  faces: {
    U: "white",
    R: "red",
    F: "green",
    D: "yellow",
    L: "orange",
    B: "blue",
  },
};
```

## API

### `themeFaceLetter(letter: FaceLetter, theme?: CubeTheme): CubeColor`

Returns display color for a face-identity sticker.

### `faceletsToThemedGrid(state: FaceletString, face: FaceLetter, theme?: CubeTheme): CubeColor[]`

Returns nine display colors for one face (row-major).

### `faceletsToSquareColorDetails(state: FaceletString, face: FaceLetter, theme?: CubeTheme): SquareColorDetail[]`

Produces `CubeFace2D`-compatible grid using border inference from adjacent facelets (for top-down OLL-style views).

### `faceletsToCube3DFaces(state: FaceletString, theme?: CubeTheme): CubeColor[][]`

Produces three visible faces for `Cube3D` layout (left, right, top projections).

## Renderer Integration

**Pipeline** (FR-008):

```text
MoveString → applyMoves(SOLVED) → FaceletString → CubeTheme → ViewModel → CubeFace*
```

**Rules**:

- Renderers MUST NOT fetch external images (FR-007)
- Tailwind class mapping remains in components; theme adapter supplies semantic `CubeColor` only
- Interim: `CubeFace3D` may accept legacy letter codes via adapter shim until full migration

## Future Extension (out of scope)

```typescript
type CubeThemePreference = {
  themeId: string;
}; // persisted in localStorage — not implemented in this feature
```

## Non-Goals

- User-facing theme picker UI
- CSS variable theming (optional follow-up)
