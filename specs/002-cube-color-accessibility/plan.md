# Implementation Plan: Accessible Cube Color Themes

**Branch**: `002-cube-color-accessibility` | **Date**: 2026-06-19 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-cube-color-accessibility/spec.md`

## Summary

Deliver six accessibility color presets (Default, Reduced contrast, Protanopia, Deuteranopia, Tritanopia, Achromatopsia) with a header-mounted theme control, per-role custom colors via `react-colorful`, and `localStorage` persistence. Migrate cube renderers from hard-coded Tailwind color classes to CSS-variable / inline resolved styles driven by a global `CubeThemeProvider`, extending the 001 `cubeTheme.ts` face-identity layer without changing lesson or scramble data.

## Technical Context

**Language/Version**: TypeScript 6, React 19, Next.js 16 (App Router)

**Primary Dependencies**: `react-colorful` (new), `@radix-ui/react-dialog` / existing Sheet, `next-intl`, Tailwind CSS 4; extends 001 `cubeTheme.ts`

**Storage**: Browser `localStorage` key `cube-lessons:color-preference` (versioned JSON)

**Testing**: Manual smoke tests per [quickstart.md](./quickstart.md); no test framework in repo

**Target Platform**: Modern browsers; client components for theme UI and hydration

**Project Type**: Single Next.js web application

**Performance Goals**: Theme switch updates all visible cubes within 1 s (SC-002); no full page reload (FR-012)

**Constraints**: Lesson case data unchanged (FR-014); EN + PT labels (FR-013); achromatopsia uses non-hue cues (FR-005)

**Scale/Scope**: 6 presets, 7 customizable roles, ~6 cube render paths, 1 header control, 2 locale files

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

| Gate                  | Status      | Notes                                                                                          |
| --------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| Constitution ratified | ⚠️ N/A      | `.specify/memory/constitution.md` is still a template — no project-specific gates enforced     |
| Library-first / CLI   | ✅ Pass     | Palette resolution and preset data isolated in `src/utils/` + `src/data/` with typed contracts |
| Test-first            | ⚠️ Deferred | Validation via quickstart until testing policy defined                                         |
| Simplicity            | ✅ Pass     | CSS variables + context provider; no new global state library                                  |
| Integration testing   | ⚠️ Manual   | Cross-page theme consistency in quickstart                                                     |

**Post-design re-check**: Adds `react-colorful` and renderer migration — justified by FR-007/FR-008 and elimination of Tailwind-only limitation. `CubeFace2D` refactor is the largest touch but replaces unmaintainable class matrix. No unjustified complexity.

## Project Structure

### Documentation (this feature)

```text
specs/002-cube-color-accessibility/
├── plan.md              # This file
├── research.md          # Phase 0 — technology decisions
├── data-model.md        # Phase 1 — entities and persistence
├── quickstart.md        # Phase 1 — validation scenarios
├── contracts/
│   ├── color-presets.md
│   ├── palette-resolution.md
│   └── theme-provider.md
└── tasks.md             # Phase 2 (/speckit-tasks — not created here)
```

### Source Code (repository root)

```text
src/
├── app/[locale]/layout.tsx          # wrap with CubeThemeProvider
├── components/
│   ├── layout/
│   │   ├── header.tsx               # mount ColorThemeControl
│   │   └── ColorThemeControl.tsx    # new
│   ├── CubeFace2D.tsx               # migrate to resolveStickerStyle
│   ├── CubeFace3D.tsx               # migrate to resolveStickerStyle
│   ├── Cube3D.tsx                   # pass palette or use context
│   └── ScrambleCubePreview.tsx      # use active theme from context
├── providers/
│   └── CubeThemeProvider.tsx        # new
├── data/
│   └── cubeColorPresets.ts          # six presets (static)
├── utils/
│   ├── cubeTheme.ts                 # extend with palette-aware helpers
│   ├── cubeColorStyles.ts           # new — resolveStickerStyle, mergePalette
│   └── colorPreference.ts           # new — load/save localStorage
└── types/
    └── colorTheme.ts                # new — ColorPresetId, UserColorPreference

messages/
├── en.json                          # cubeTheme namespace
└── pt.json                          # cubeTheme namespace
```

**Structure Decision**: Single Next.js app. New modules under `src/data/`, `src/utils/`, `src/providers/`. Renderer components consume `useCubeTheme()`. Header hosts the sole theme entry point.

## Complexity Tracking

> No constitution violations requiring justification.

| Decision                      | Why Needed                          | Simpler Alternative Rejected Because                   |
| ----------------------------- | ----------------------------------- | ------------------------------------------------------ |
| CSS variables + inline styles | User hex customization (FR-007)     | Tailwind class maps cannot represent arbitrary colors  |
| `react-colorful`              | Accessible visual picker (FR-008)   | Native color input alone is poor UX                    |
| Global React context          | All cubes sync on one page (FR-003) | Prop drilling through lesson pages is fragile          |
| Achromatopsia CSS patterns    | FR-005 non-hue distinction          | Luminance-only grays fail adjacent-face discrimination |

## Implementation Phases (for tasks.md)

### Phase A — Presets & Resolution (P1 foundation)

1. Add `src/types/colorTheme.ts` and `src/data/cubeColorPresets.ts` per [contracts/color-presets.md](./contracts/color-presets.md)
2. Implement `cubeColorStyles.ts` + `colorPreference.ts` per [contracts/palette-resolution.md](./contracts/palette-resolution.md)
3. Unit-test palette merge / hex validation manually via quickstart Scenario 8

### Phase B — Provider & Header (P1 UX)

1. Implement `CubeThemeProvider` per [contracts/theme-provider.md](./contracts/theme-provider.md)
2. Mount provider in `layout.tsx`
3. Build `ColorThemeControl` + integrate into `header.tsx` (desktop + mobile)
4. Add `cubeTheme` i18n strings (EN/PT)

### Phase C — Renderer Migration (P1 delivery)

1. Refactor `CubeFace3D` to use `resolveStickerStyle`
2. Refactor `CubeFace2D` (fill + borders) — largest file change
3. Wire `ScrambleCubePreview` to active theme
4. Verify `CubeInfoCard2D` / `CubeInfoCard3D` lesson paths on F2L, OLL, PLL, movements, cubePieces

### Phase D — Custom Colors (P2)

1. Add customize accordion with `HexColorPicker` per role
2. Persist `presetId: "custom"` + `paletteOverrides`
3. Preset selection clears overrides (spec acceptance scenario)

### Phase E — Polish & Persistence (P2/P3)

1. Reset to Default action
2. Hydration flash mitigation (optional `isReady` skeleton)
3. Mobile sheet placement verification
4. Run full quickstart checklist

### Explicit Non-Changes

- Lesson case TypeScript data files (`cubeCases*.ts`, `moves.ts`)
- Scramble generation logic
- Solve history schema
- Named custom preset save / URL theme sharing

## Artifacts Generated

| Artifact          | Path                                                                 |
| ----------------- | -------------------------------------------------------------------- |
| Research          | [research.md](./research.md)                                         |
| Data model        | [data-model.md](./data-model.md)                                     |
| Presets contract  | [contracts/color-presets.md](./contracts/color-presets.md)           |
| Palette contract  | [contracts/palette-resolution.md](./contracts/palette-resolution.md) |
| Provider contract | [contracts/theme-provider.md](./contracts/theme-provider.md)         |
| Quickstart        | [quickstart.md](./quickstart.md)                                     |

## Next Step

Run `/speckit-tasks` to generate dependency-ordered `tasks.md` from this plan.
