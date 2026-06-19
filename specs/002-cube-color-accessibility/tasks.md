# Tasks: Accessible Cube Color Themes

**Input**: Design documents from `/specs/002-cube-color-accessibility/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Manual smoke tests per quickstart.md only (no test framework in repo).

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: User story label (US1–US5)
- Include exact file paths in descriptions

## Path Conventions

Single Next.js project: `src/` at repository root (see plan.md).

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Install dependencies and shared types before implementation

- [x] T001 Add `react-colorful` npm dependency and run install in `package.json`
- [x] T002 [P] Add `ColorPresetId`, `CubeColorStop`, `CubeColorPalette`, `ColorPreset`, and `UserColorPreference` types in `src/types/colorTheme.ts`
- [x] T003 [P] Add `--cube-red` through `--cube-gray` CSS custom property placeholders in `src/app/globals.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Preset data, palette resolution, preference storage, and global provider — MUST complete before user story phases

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Implement six accessibility presets (`default`, `reduced-contrast`, `protanopia`, `deuteranopia`, `tritanopia`, `achromatopsia`) with WCA face map in `src/data/cubeColorPresets.ts` per `specs/002-cube-color-accessibility/contracts/color-presets.md`
- [x] T005 [P] Implement `mergePalette`, `resolveStickerStyle`, `resolveThemeState`, and `isValidHex` in `src/utils/cubeColorStyles.ts` per `specs/002-cube-color-accessibility/contracts/palette-resolution.md`
- [x] T006 [P] Implement `loadPreference` and `savePreference` for key `cube-lessons:color-preference` in `src/utils/colorPreference.ts`
- [x] T007 Implement `CubeThemeProvider` and `useCubeTheme` hook in `src/providers/CubeThemeProvider.tsx` per `specs/002-cube-color-accessibility/contracts/theme-provider.md`
- [x] T008 Mount `CubeThemeProvider` inside `NextIntlClientProvider` in `src/app/[locale]/layout.tsx`

**Checkpoint**: Provider active with default preset; palette resolution callable

---

## Phase 3: User Story 1 — Choose an Accessibility Preset from the Header (Priority: P1) 🎯 MVP

**Goal**: Users switch cube colors via header control; all cube diagrams update consistently without page reload

**Independent Test**: Open any lesson page, open header color control, select each of the six presets — all visible cube stickers update (2D, 3D, scramble preview). Default restores WCA-like colors.

### Implementation for User Story 1

- [x] T009 [P] [US1] Add `cubeTheme` namespace (preset labels, control aria-labels, reset) in `messages/en.json`
- [x] T010 [P] [US1] Add `cubeTheme` namespace Portuguese translations in `messages/pt.json`
- [x] T011 [US1] Create preset selector UI (six radio options + swatch preview) in `src/components/layout/ColorThemeControl.tsx`
- [x] T012 [US1] Mount `ColorThemeControl` next to language switcher on desktop in `src/components/layout/header.tsx`
- [x] T013 [US1] Refactor sticker rendering to use `resolveStickerStyle` via `useCubeTheme` in `src/components/CubeFace3D.tsx`
- [x] T014 [US1] Refactor fill and border rendering to use `resolveStickerStyle` via `useCubeTheme` in `src/components/CubeFace2D.tsx`
- [x] T015 [US1] Pass active `theme` from `useCubeTheme` into `faceletsToCube3DColors` in `src/components/ScrambleCubePreview.tsx`
- [x] T016 [P] [US1] Add optional palette-aware helpers or re-exports in `src/utils/cubeTheme.ts` if needed by renderers

**Checkpoint**: Header preset picker works; cubes repaint on theme change across lesson and timer preview paths

---

## Phase 4: User Story 2 — Distinguish All Six Face Colors Under Each Preset (Priority: P1)

**Goal**: Each preset uses colors (and patterns for achromatopsia) distinguishable for the target vision profile

**Independent Test**: For each preset, display a solved cube on `/en/cubePieces` — user can identify all six faces without ambiguity; achromatopsia uses non-hue cues.

### Implementation for User Story 2

- [x] T017 [US2] Tune protanopia role hex values for red–green separability in `src/data/cubeColorPresets.ts`
- [x] T018 [P] [US2] Tune deuteranopia role hex values in `src/data/cubeColorPresets.ts`
- [x] T019 [P] [US2] Tune tritanopia role hex values for blue–yellow separability in `src/data/cubeColorPresets.ts`
- [x] T020 [P] [US2] Tune reduced-contrast palette (lower saturation, separable adjacents) in `src/data/cubeColorPresets.ts`
- [x] T021 [US2] Add distinct CSS hatch `pattern` per role for achromatopsia preset in `src/data/cubeColorPresets.ts`
- [x] T022 [US2] Layer `backgroundImage` from palette patterns in `resolveStickerStyle` in `src/utils/cubeColorStyles.ts`

**Checkpoint**: All six presets meet distinguishability goals on solved-cube smoke check

---

## Phase 5: User Story 3 — Customize Individual Cube Display Colors (Priority: P2)

**Goal**: Users assign custom hex colors to each of the seven semantic roles via visual picker

**Independent Test**: Open customize panel, change red and green roles, confirm all cube diagrams site-wide reflect new colors.

### Implementation for User Story 3

- [x] T023 [US3] Add customize accordion with seven role rows and `HexColorPicker` from `react-colorful` in `src/components/layout/ColorThemeControl.tsx`
- [x] T024 [US3] Implement `setRoleColor(role, hex)` merging into `paletteOverrides` with `presetId: "custom"` in `src/providers/CubeThemeProvider.tsx`
- [x] T025 [US3] Clear `paletteOverrides` when `setPreset` selects a named preset in `src/providers/CubeThemeProvider.tsx`
- [x] T026 [P] [US3] Add role label i18n keys (`roles.red`, `roles.green`, etc.) in `messages/en.json` and `messages/pt.json`

**Checkpoint**: Custom colors apply globally; selecting a named preset replaces custom mapping

---

## Phase 6: User Story 4 — Persist Color Preferences Across Visits (Priority: P2)

**Goal**: Last-selected preset or custom palette restored on reload; default when storage empty

**Independent Test**: Select Deuteranopia (or custom colors), hard-refresh, confirm same theme; clear localStorage → Default.

### Implementation for User Story 4

- [x] T027 [US4] Hydrate state from `loadPreference()` on client mount in `src/providers/CubeThemeProvider.tsx`
- [x] T028 [US4] Call `savePreference` on every `setPreset`, `setRoleColor`, and `resetToDefault` in `src/providers/CubeThemeProvider.tsx`
- [x] T029 [US4] Add **Reset to Default** action wired to `resetToDefault()` in `src/components/layout/ColorThemeControl.tsx`
- [x] T030 [US4] Apply optional `applyPaletteToDocument` CSS variables on theme change in `src/providers/CubeThemeProvider.tsx`

**Checkpoint**: Preference survives reload; reset returns to default preset

---

## Phase 7: User Story 5 — Access Color Controls on Mobile (Priority: P3)

**Goal**: Mobile users reach color theme control from header menu without leaving the page

**Independent Test**: Mobile viewport → open hamburger sheet → change preset → navigate to another lesson; theme persists.

### Implementation for User Story 5

- [x] T031 [US5] Add `ColorThemeControl` section above language switcher inside mobile sheet in `src/components/layout/header.tsx`
- [x] T032 [US5] Ensure sheet trigger, preset radiogroup, and picker rows have accessible labels in `src/components/layout/ColorThemeControl.tsx`

**Checkpoint**: Mobile and desktop both expose full theme control

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Hydration polish, regression checks, and quickstart validation

- [x] T033 [P] Expose `isReady` flag to suppress hydration mismatch flash in `src/providers/CubeThemeProvider.tsx`
- [x] T034 Verify lesson pages (`src/app/[locale]/firstTwoLayers/page.tsx`, `orientationLastLayer/page.tsx`, `permutationLastLayer/page.tsx`, `movements/page.tsx`, `cubePieces/page.tsx`) show themed cubes without data changes
- [x] T035 Confirm scramble text unchanged when switching themes on OLL lesson page (FR-014 manual check)
- [x] T036 Run all scenarios in `specs/002-cube-color-accessibility/quickstart.md`
- [x] T037 Run `npm run build` and `npm run format:check`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 — **blocks all user stories**
- **US1 (Phase 3)**: Depends on Phase 2 — **MVP** (header + renderer migration)
- **US2 (Phase 4)**: Depends on Phase 2; best after US1 renderers exist for visual verification
- **US3 (Phase 5)**: Depends on US1 (`ColorThemeControl` shell)
- **US4 (Phase 6)**: Depends on Phase 2 (`colorPreference.ts`); integrates with US1/US3 provider actions
- **US5 (Phase 7)**: Depends on US1 (`ColorThemeControl` component)
- **Polish (Phase 8)**: Depends on desired user stories complete

### User Story Dependencies

| Story | Depends on                         | Independent test focus                    |
| ----- | ---------------------------------- | ----------------------------------------- |
| US1   | Foundational                       | Header presets + global cube repaint      |
| US2   | Foundational (+ US1 for visual QA) | Per-preset face distinguishability        |
| US3   | US1                                | Custom role hex + preset clears overrides |
| US4   | Foundational, US1                  | Reload persistence + reset                |
| US5   | US1                                | Mobile sheet access                       |

### Within Each User Story

- i18n tasks marked [P] can run in parallel
- Renderer refactors (T013–T015) should follow `ColorThemeControl` shell (T011) or run in parallel if provider already mounted
- US2 palette tuning tasks T017–T020 can run in parallel on different preset sections of `cubeColorPresets.ts` (coordinate merge)

### Parallel Opportunities

- **Phase 1**: T002 ∥ T003
- **Phase 2**: T005 ∥ T006 (after T002 types exist)
- **Phase 3**: T009 ∥ T010; T013 ∥ T016 after T005/T007
- **Phase 4**: T017–T020 palette tuning in parallel
- **Phase 5**: T026 ∥ T023 after provider wiring
- **Phase 8**: T033 ∥ T034

---

## Parallel Example: User Story 1

```bash
# i18n in parallel:
Task T009: messages/en.json
Task T010: messages/pt.json

# After provider mounted, renderer refactors in parallel:
Task T013: src/components/CubeFace3D.tsx
Task T014: src/components/CubeFace2D.tsx
Task T016: src/utils/cubeTheme.ts
```

---

## Parallel Example: User Story 2

```bash
# Palette tuning (coordinate file merges):
Task T018: deuteranopia section in src/data/cubeColorPresets.ts
Task T019: tritanopia section in src/data/cubeColorPresets.ts
Task T020: reduced-contrast section in src/data/cubeColorPresets.ts
```

---

## Implementation Strategy

### MVP First (User Stories 1 + 2)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: US1 — header preset picker + renderer migration
4. Complete Phase 4: US2 — palette distinguishability tuning
5. **STOP and VALIDATE**: quickstart Scenarios 1–4
6. Demo accessible cube tutorials with all six presets

### Incremental Delivery

1. Setup + Foundational → provider and presets ready
2. US1 → preset switching works globally (**MVP**)
3. US2 → palettes validated for each vision profile
4. US3 → custom colors
5. US4 → persistence hardened + reset
6. US5 → mobile header placement
7. Polish → full quickstart + build

### Suggested MVP Scope

**Phases 1–4 (T001–T022)**: Delivers FR-001–FR-006, FR-011–FR-013 with header control and themed renderers. Defers custom colors (US3), full persistence polish (US4), and mobile-specific placement (US5) to follow-on increments.

---

## Notes

- Lesson data files under `src/data/cubeCases*.ts` and `src/data/moves.ts` are **not** modified (FR-014)
- `CubeInfoCard2D` / `CubeInfoCard3D` should inherit themed renderers automatically after T013–T014
- No automated test tasks — validation via `quickstart.md` only
- Commit after each phase checkpoint
