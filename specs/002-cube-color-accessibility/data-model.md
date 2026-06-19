# Data Model: Accessible Cube Color Themes

**Feature**: `002-cube-color-accessibility`  
**Date**: 2026-06-19

## Overview

Extends the 001 `CubeTheme` model with **color presets**, **role palettes** (hex + optional patterns), and **persisted user preferences**. Lesson case data and scramble logic are unchanged; only display resolution changes.

---

## Entities

### ColorPresetId

Stable identifier for a named accessibility preset.

```typescript
type ColorPresetId =
  | "default"
  | "reduced-contrast"
  | "protanopia"
  | "deuteranopia"
  | "tritanopia"
  | "achromatopsia";
```

| Rule                                              |
| ------------------------------------------------- |
| Exactly six presets in v1 (FR-001)                |
| `default` used when no stored preference (FR-010) |

---

### CubeColorStop

Resolved display values for one semantic role.

| Field       | Type      | Rules                                                   |
| ----------- | --------- | ------------------------------------------------------- |
| `hex`       | `string`  | Valid `#RRGGBB` or `#RGB`                               |
| `pattern`   | `string?` | CSS `background-image` value; achromatopsia preset only |
| `borderHex` | `string?` | Optional; defaults to darker derivative of `hex`        |

**Validation**:

- `hex` must parse as CSS color
- When `pattern` present, sticker uses layered background (pattern over `hex`)

---

### CubeColorPalette

Maps all seven semantic roles to display stops.

```typescript
type CubeColorPalette = Record<CubeColor, CubeColorStop>;
```

| Role     | Usage                               |
| -------- | ----------------------------------- |
| `red`    | R-face stickers, red-role borders   |
| `green`  | F-face stickers                     |
| `blue`   | B-face stickers                     |
| `orange` | L-face stickers                     |
| `yellow` | D-face stickers                     |
| `white`  | U-face stickers                     |
| `gray`   | Neutral / unknown / hidden stickers |

**Validation**:

- All seven keys required in a complete palette
- Pairwise luminance contrast between any two face colors on solved cube ≥ 3:1 for each preset (design-time check, SC-003)

---

### ColorPreset

Curated bundle of face mapping + palette.

| Field      | Type                            | Rules                             |
| ---------- | ------------------------------- | --------------------------------- |
| `id`       | `ColorPresetId`                 | Unique                            |
| `labelKey` | `string`                        | i18n key under `cubeTheme`        |
| `faceMap`  | `Record<FaceLetter, CubeColor>` | WCA-default in v1 for all presets |
| `palette`  | `CubeColorPalette`              | Complete seven-role palette       |

**Relationships**:

- One `ColorPreset` resolves to one `CubeTheme` + one `CubeColorPalette`
- Selecting preset replaces active preference (FR-001, spec edge case)

---

### CubeTheme (extended from 001)

| Field   | Type                            | Rules                         |
| ------- | ------------------------------- | ----------------------------- |
| `id`    | `string`                        | Preset id or `"custom"`       |
| `label` | `string`                        | Localized display name        |
| `faces` | `Record<FaceLetter, CubeColor>` | Face-identity → semantic role |

**Resolution**:

```text
displayStop = palette[ theme.faces[faceLetter] ]
```

For legacy lesson `SquareColorDetail`, each `centerColor` / `*Border` field is a `CubeColor` role resolved through `palette[role]`.

---

### UserColorPreference

Persisted browser preference.

| Field              | Type                                  | Rules                                          |
| ------------------ | ------------------------------------- | ---------------------------------------------- |
| `version`          | `1`                                   | Schema version for migrations                  |
| `presetId`         | `ColorPresetId \| "custom"`           | Active preset or custom mode                   |
| `paletteOverrides` | `Partial<Record<CubeColor, string>>?` | Hex only; present when `presetId === "custom"` |

**Storage key**: `cube-lessons:color-preference`  
**Storage**: `localStorage` (browser, per device)

**State transitions**:

```text
[no storage] → default preset
select preset P → { version:1, presetId:P }  // overrides cleared
edit role color → { version:1, presetId:"custom", paletteOverrides:{...} }
reset → { version:1, presetId:"default" }
select preset after custom → overrides discarded; preset palette applied
```

**Validation**:

- Unknown `presetId` in storage → fall back to `default`
- Invalid hex in overrides → ignore that key; keep last valid
- Malformed JSON → `default`

---

### ResolvedStickerStyle

Ephemeral view-model for one sticker (not persisted).

| Field             | Type      | Source                     |
| ----------------- | --------- | -------------------------- |
| `backgroundColor` | `string`  | `palette[role].hex`        |
| `backgroundImage` | `string?` | `palette[role].pattern`    |
| `borderColor`     | `string`  | role border or `borderHex` |

Produced by `resolveStickerStyle(role: CubeColor, palette: CubeColorPalette)`.

---

## Invariants

1. Lesson/scramble data stores face identities or semantic roles only — never user hex values (FR-014).
2. All cube widgets on a page share one active `UserColorPreference` (context singleton).
3. Theme changes propagate without full page reload (FR-012).
4. Gray role must remain distinguishable from all face colors in every preset (spec edge case).

---

## Relationships Diagram

```text
UserColorPreference
       │
       ├─ presetId ──► ColorPreset (static data)
       │                      ├─ faceMap ──► CubeTheme.faces
       │                      └─ palette ──► CubeColorPalette
       │
       └─ paletteOverrides ──► merged into CubeColorPalette when custom

FaceletString / SquareColorDetail
       │
       └─ CubeColor role ──► ResolvedStickerStyle (via active palette)
```

---

## Out of Scope (data model)

- Named user-saved custom presets (future)
- Cross-device preference sync
- Server-side preference API
- Per-lesson theme overrides
