# Contract: Theme Provider & Header Control

**Feature**: `002-cube-color-accessibility`  
**Consumers**: `layout.tsx`, `header.tsx`, all cube components

## Purpose

Global React context for active color theme and header UI for preset selection / customization.

## Context API

```typescript
type CubeThemeContextValue = {
  presetId: ColorPresetId | "custom";
  theme: CubeTheme;
  palette: CubeColorPalette;
  setPreset: (id: ColorPresetId) => void;
  setRoleColor: (role: CubeColor, hex: string) => void;
  resetToDefault: () => void;
  isReady: boolean; // false until localStorage hydrated
};

// Hook
function useCubeTheme(): CubeThemeContextValue;
```

## Provider

### `CubeThemeProvider`

- **Location**: `src/providers/CubeThemeProvider.tsx`
- **Mount**: Inside `NextIntlClientProvider` in `src/app/[locale]/layout.tsx`
- **Behavior**:
  1. Initialize with `default` preset (SSR-safe)
  2. On mount, `loadPreference()` and hydrate state
  3. On `setPreset` / `setRoleColor` / `resetToDefault`, update state + `savePreference()`
  4. Optionally set CSS variables on `<html>` for `--cube-*`

## Header Control

### `ColorThemeControl`

- **Location**: `src/components/layout/ColorThemeControl.tsx`
- **Mount points** (`header.tsx`):
  - Desktop: adjacent to language switcher (FR-002)
  - Mobile: section in hamburger sheet above language (FR-002, P3)

### UI Structure

```text
[Palette icon button]
  └─ Sheet / Dialog
       ├─ Preset list (6 radio items + swatch preview)
       ├─ "Customize" accordion
       │    └─ 7 rows: role label | current swatch | HexColorPicker
       └─ "Reset to Default" button
```

### Accessibility

- Trigger: `aria-label` from `cubeTheme.openControl`
- Preset list: `role="radiogroup"` with `aria-checked`
- Color picker rows: `label` associated with each role name
- Focus trap inside sheet while open

## Renderer Consumption

### `CubeFace3D` / `CubeFace2D`

```typescript
const { palette } = useCubeTheme();
// For each sticker role:
const style = resolveStickerStyle(role, palette);
```

Components MUST work when provider is absent (Storybook/tests): fall back to `default` preset palette.

### `ScrambleCubePreview`

```typescript
const { theme, palette } = useCubeTheme();
const themedFaces = faceletsToCube3DColors(facelets, theme);
// Pass palette to Cube3D or resolve inside CubeFace3D
```

## i18n Keys (`cubeTheme` namespace)

| Key                       | EN example         |
| ------------------------- | ------------------ |
| `openControl`             | "Cube color theme" |
| `presets.default`         | "Default"          |
| `presets.reducedContrast` | "Reduced contrast" |
| `presets.protanopia`      | "Protanopia"       |
| `presets.deuteranopia`    | "Deuteranopia"     |
| `presets.tritanopia`      | "Tritanopia"       |
| `presets.achromatopsia`   | "Achromatopsia"    |
| `customize`               | "Customize colors" |
| `reset`                   | "Reset to Default" |
| `roles.red`               | "Red"              |
| `roles.green`             | "Green"            |
| ...                       | (all seven roles)  |

## Dependencies

- `react-colorful` — `HexColorPicker`
- `@radix-ui/react-dialog` or existing `Sheet` — panel container
- `lucide-react` — `Palette` icon

## Non-Goals

- Theme control on non-header pages
- Account-linked preferences
- Export/import theme JSON
