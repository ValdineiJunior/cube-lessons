# Quickstart: Accessible Cube Color Themes Validation

**Feature**: `002-cube-color-accessibility`  
**Prerequisites**: Node.js, npm, repo cloned; 001 cube theme foundation merged

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en/firstTwoLayers` (or any lesson page with cube diagrams).

---

## Scenario 1 — Header Preset Picker (SC-001, FR-001, FR-002)

**Goal**: All six presets are reachable from the header.

1. Locate the palette/theme icon in the header (desktop: near language switcher; mobile: inside menu sheet).
2. Open the color theme panel.
3. Confirm presets listed: Default, Reduced contrast, Protanopia, Deuteranopia, Tritanopia, Achromatopsia.

**Expected**: All six options visible with localized labels (repeat in `/pt/...` for FR-013).

---

## Scenario 2 — Global Cube Update (FR-003, SC-002)

**Goal**: Theme applies to all cube types without reload.

1. Open a page with multiple cubes (e.g. F2L case list).
2. Select **Protanopia** preset.
3. Observe all 2D/3D cube stickers update within ~1 second.
4. Navigate to `/en/timer`, generate a scramble, confirm scramble cube preview matches theme.
5. Navigate to `/en/movements` — 3D reference cubes match theme.

**Expected**: Consistent colors across page types; no manual per-page setup.

---

## Scenario 3 — Default Baseline (FR-010, FR-011)

**Goal**: Default matches pre-feature WCA-like colors; reset works.

1. Select a non-default preset; confirm cubes change.
2. Click **Reset to Default** (or select Default preset).
3. Compare cube colors to a known screenshot or memory of original app.

**Expected**: Default preset restores standard competition-style appearance.

---

## Scenario 4 — Vision-Profile Distinguishability (SC-003, FR-004–FR-006)

**Goal**: Six faces distinguishable per preset.

For each preset (especially Protanopia, Deuteranopia, Tritanopia, Achromatopsia):

1. Open `/en/cubePieces` or a page showing a solved-style cube.
2. Identify all six face colors (U/R/F/D/L/B) without ambiguity.
3. For **Achromatopsia**, confirm faces differ by pattern and/or lightness, not hue alone.
4. For **Reduced contrast**, confirm adjacent stickers remain separable.

**Expected**: No two faces indistinguishable on a solved cube for the active preset.

---

## Scenario 5 — Custom Role Colors (FR-007, FR-008, SC-005)

**Goal**: Per-role customization applies globally.

1. Open theme panel → **Customize colors**.
2. Change **Red** and **Green** roles to distinct custom colors.
3. Confirm cubes update immediately.
4. Visit F2L lesson, timer preview, and movements page.

**Expected**: Custom red/green appear on all three page types.

---

## Scenario 6 — Persistence (FR-009, SC-004)

**Goal**: Preference survives reload.

1. Select **Deuteranopia** (or save custom colors).
2. Hard-refresh the browser (`Ctrl+Shift+R`).
3. Open any lesson page.

**Expected**: Same theme restored. Clear `localStorage` key `cube-lessons:color-preference` → app falls back to Default.

---

## Scenario 7 — Preset Overrides Custom (spec User Story 3)

**Goal**: Selecting preset discards custom mapping.

1. Customize at least one role color.
2. Select **Tritanopia** preset.

**Expected**: Tritanopia palette fully replaces custom values.

---

## Scenario 8 — Preference Storage Format

**Goal**: Stored JSON is valid and versioned.

1. Set any non-default theme.
2. In DevTools → Application → Local Storage, inspect `cube-lessons:color-preference`.

**Expected**: JSON with `version: 1`, `presetId`, and optional `paletteOverrides` when custom.

---

## Scenario 9 — Mobile Header (P3)

**Goal**: Theme control reachable on small viewports.

1. Resize to mobile width (< 768px) or use device emulation.
2. Open hamburger menu.
3. Access color theme control and switch preset.

**Expected**: Control reachable without leaving current page context.

---

## Scenario 10 — Lesson Data Unchanged (FR-014)

**Goal**: Scrambles and case logic unaffected.

1. On OLL page, select a case and generate scramble text.
2. Switch between Default and Achromatopsia presets.

**Expected**: Scramble move string identical; only sticker colors change.

---

## Regression Checks

- Language switch (EN ↔ PT) still works in header
- Timer hold-to-start and scramble generation unaffected
- `npm run build` succeeds
- `npm run format:check` passes

---

## Reference

- Data model: [data-model.md](./data-model.md)
- Presets contract: [contracts/color-presets.md](./contracts/color-presets.md)
- Provider contract: [contracts/theme-provider.md](./contracts/theme-provider.md)
