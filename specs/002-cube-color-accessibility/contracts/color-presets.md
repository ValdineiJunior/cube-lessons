# Contract: Color Presets

**Feature**: `002-cube-color-accessibility`  
**Consumers**: `CubeThemeProvider`, header `ColorThemeControl`, tests

## Purpose

Define the six accessibility presets and the static registry API.

## Types

```typescript
type ColorPresetId =
  | "default"
  | "reduced-contrast"
  | "protanopia"
  | "deuteranopia"
  | "tritanopia"
  | "achromatopsia";

type CubeColorStop = {
  hex: string;
  pattern?: string;
  borderHex?: string;
};

type CubeColorPalette = Record<CubeColor, CubeColorStop>;

type ColorPreset = {
  id: ColorPresetId;
  labelKey: string; // e.g. "cubeTheme.presets.protanopia"
  faceMap: Record<FaceLetter, CubeColor>;
  palette: CubeColorPalette;
};
```

## Default Face Map (all presets v1)

```typescript
const WCA_FACE_MAP: Record<FaceLetter, CubeColor> = {
  U: "white",
  R: "red",
  F: "green",
  D: "yellow",
  L: "orange",
  B: "blue",
};
```

## Registry API

### `COLOR_PRESETS: Record<ColorPresetId, ColorPreset>`

Static export of all six presets.

### `getColorPreset(id: ColorPresetId): ColorPreset`

Returns preset by id; throws or returns default if unknown (implementation: return `default` for resilience).

### `listColorPresets(): ColorPreset[]`

Stable order: default, reduced-contrast, protanopia, deuteranopia, tritanopia, achromatopsia.

## Palette Requirements (per preset)

| Preset ID          | Design constraint                                      |
| ------------------ | ------------------------------------------------------ |
| `default`          | Match current app colors (WCA-like)                    |
| `reduced-contrast` | Saturation ≤ default; adjacent stickers separable      |
| `protanopia`       | No reliance on distinguishable red–green hue pairs     |
| `deuteranopia`     | No reliance on distinguishable green–red hue pairs     |
| `tritanopia`       | No reliance on distinguishable blue–yellow hue pairs   |
| `achromatopsia`    | Each role has unique `pattern`; grayscale `hex` values |

## Achromatopsia Patterns

Each role MUST define a distinct `pattern` CSS value, e.g.:

```typescript
// Example — final values defined at implementation
{ hex: "#e0e0e0", pattern: "repeating-linear-gradient(45deg, ...)" }
```

Renderers apply: `backgroundImage: pattern`, `backgroundColor: hex` (layered).

## Non-Goals

- Runtime palette generation
- User-defined named presets in registry
- WCAG audit tooling in repo (manual/quickstart validation only)
