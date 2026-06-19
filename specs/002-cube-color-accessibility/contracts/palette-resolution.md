# Contract: Palette Resolution

**Feature**: `002-cube-color-accessibility`  
**Consumers**: `CubeFace2D`, `CubeFace3D`, `cubeTheme.ts`, scramble preview

## Purpose

Resolve semantic `CubeColor` roles to concrete CSS styles, merging preset palettes with user overrides.

## Types

```typescript
type ResolvedStickerStyle = {
  backgroundColor: string;
  backgroundImage?: string;
  borderColor: string;
};

type ActiveThemeState = {
  theme: CubeTheme;
  palette: CubeColorPalette;
  presetId: ColorPresetId | "custom";
};
```

## API

### `mergePalette(base: CubeColorPalette, overrides?: Partial<Record<CubeColor, string>>): CubeColorPalette`

Returns new palette; override values replace `hex` only (patterns from base retained unless preset is achromatopsia and override forces custom — custom mode drops patterns for overridden roles).

### `resolveStickerStyle(role: CubeColor, palette: CubeColorPalette): ResolvedStickerStyle`

```typescript
// Pseudocode
const stop = palette[role];
return {
  backgroundColor: stop.hex,
  backgroundImage: stop.pattern,
  borderColor: stop.borderHex ?? darken(stop.hex),
};
```

### `resolveThemeState(preference: UserColorPreference): ActiveThemeState`

1. Load base preset via `getColorPreset(preference.presetId === "custom" ? "default" : preference.presetId)` for face map
2. If `presetId !== "custom"`, use preset palette as-is
3. If `presetId === "custom"`, merge `default` palette with `paletteOverrides`
4. Return `{ theme: { id, label, faces: preset.faceMap }, palette, presetId }`

### `applyPaletteToDocument(palette: CubeColorPalette): void` (optional)

Sets CSS variables on `document.documentElement` for devtools inspection:

```text
--cube-red, --cube-green, ... --cube-gray
```

Primary render path uses `resolveStickerStyle`; CSS vars are supplementary for debugging.

## Integration with 001 `cubeTheme.ts`

Existing functions gain optional `palette` parameter:

```typescript
faceletsToCube3DColors(
  state: string,
  theme?: CubeTheme,
  palette?: CubeColorPalette,
): CubeColor[][]; // roles unchanged — renderers resolve styles

// New helper
faceletsToCube3DStyledFaces(
  state: string,
  theme: CubeTheme,
  palette: CubeColorPalette,
): ResolvedStickerStyle[][];
```

**Rule**: `cubeTheme.ts` continues to output semantic `CubeColor` roles. Style resolution happens in renderers or a thin `cubeColorStyles.ts` module — not in lesson data.

## Validation

### `isValidHex(color: string): boolean`

Used before persisting user picks.

### `loadPreference(): UserColorPreference`

Reads `localStorage` key `cube-lessons:color-preference`; returns default on failure.

### `savePreference(pref: UserColorPreference): void`

Writes JSON; catches quota errors silently (falls back to session-only context state).

## Non-Goals

- Color contrast calculation at runtime
- Persisting resolved styles (only preferences stored)
