# Research: Accessible Cube Color Themes

**Feature**: `002-cube-color-accessibility`  
**Date**: 2026-06-19

## 1. Runtime Color Application (Tailwind vs CSS Variables)

**Decision**: Map semantic `CubeColor` roles to **CSS custom properties** (`--cube-red`, `--cube-green`, etc.) on a root wrapper, and resolve sticker `background-color` / `border-color` via inline styles or a small `cubeColorStyle(role)` helper.

**Rationale**:

- Current renderers hard-code Tailwind classes per role (`bg-red-500`, `border-l-green-500` in `CubeFace2D`; `COLOR_CLASS` in `CubeFace3D`). Tailwind classes are compile-time; user-customized hex values cannot be expressed without arbitrary values or a giant safelist.
- CSS variables update instantly across all stickers when the palette changes (FR-012, SC-002) without re-mounting lesson data.
- Aligns with the 001 theme contract's deferred "CSS variable theming" follow-up while keeping semantic `CubeColor` names in lesson/view-model data.
- `globals.css` already uses CSS variables for shadcn tokens; cube palette vars fit the same pattern.

**Alternatives considered**:

| Alternative                                             | Rejected because                                                           |
| ------------------------------------------------------- | -------------------------------------------------------------------------- |
| Keep Tailwind-only with preset class maps               | Cannot support arbitrary user hex picks (FR-007, FR-008)                   |
| Generate dynamic Tailwind safelist                      | Build complexity; still awkward for per-user colors                        |
| Inline `style={{ backgroundColor: hex }}` only, no vars | Works but duplicates hex on every sticker; harder to batch-update palette  |
| Replace semantic roles with raw hex in data             | Breaks 001 face-identity decoupling; couples lesson data to display colors |

---

## 2. Preset Palette Design

**Decision**: Ship six curated presets as static data in `src/data/cubeColorPresets.ts`. Each preset defines:

1. `faceMap`: `Record<FaceLetter, CubeColor>` (WCA-default face→role mapping for all presets in v1)
2. `palette`: `Record<CubeColor, CubeColorStop>` where `CubeColorStop = { hex: string; pattern?: string }`

Use **Paul Tol–inspired** and **Wong palette** distinguishability principles; validate pairwise contrast with WCAG 2.1 relative luminance (target ≥ 3:1 between adjacent face colors on a solved cube).

**Preset color strategy**:

| Preset           | Strategy                                                                             |
| ---------------- | ------------------------------------------------------------------------------------ |
| Default          | Current WCA-like hues (match today's visual baseline)                                |
| Reduced contrast | Lower saturation, slightly raised luminance; softer borders                          |
| Protanopia       | Avoid red–green confusion; emphasize blue–orange–yellow separation                   |
| Deuteranopia     | Avoid green–red confusion; blue–orange–purple family for conflicting faces           |
| Tritanopia       | Avoid blue–yellow confusion; red–pink–teal separation                                |
| Achromatopsia    | Grayscale luminance steps (6 levels) + optional CSS hatch patterns per role (FR-005) |

**Rationale**:

- Spec requires presets tuned for users **with** each condition, not simulations for sighted users.
- Face→role mapping stays WCA-default so pedagogy ("green face" = F) remains verbally consistent; distinguishability is achieved via role→display hex (and patterns for achromatopsia).
- Static curated data is reviewable, versionable, and testable; no runtime color-science library needed.

**Alternatives considered**:

| Alternative                       | Rejected because                                                     |
| --------------------------------- | -------------------------------------------------------------------- |
| `color-blind` npm simulation      | Simulates deficiency for sighted users; wrong goal per spec          |
| `chroma-js` / `culori` transforms | Over-engineering; curated palettes are standard for accessibility UX |
| Per-preset face remapping         | Confusing for learners ("red face" no longer R); pedagogy risk       |

---

## 3. Color Picker for Custom Roles

**Decision**: Add **`react-colorful`** (`HexColorPicker`) inside a Radix `Sheet` or `Dialog` for per-role customization.

**Rationale**:

- ~3 KB gzipped; no dependency on heavy suites (`react-color`, `@uiw/react-color`).
- Keyboard-accessible; works in client components.
- Returns hex strings directly for palette storage (FR-008).
- Project already uses Radix (`@radix-ui/react-dialog`, sheet in header).

**Alternatives considered**:

| Alternative                   | Rejected because                                       |
| ----------------------------- | ------------------------------------------------------ |
| Native `<input type="color">` | Poor UX on some browsers; limited accessibility labels |
| `react-color`                 | Large bundle; unmaintained-feeling surface area        |
| Manual hex text field only    | Spec excludes requiring manual color codes (FR-008)    |

---

## 4. Global Theme State & Persistence

**Decision**: `CubeThemeProvider` React context in `src/app/[locale]/layout.tsx` (inside `NextIntlClientProvider`), backed by `localStorage` key `cube-lessons:color-preference` with versioned JSON schema.

**Rationale**:

- Single source of truth for all cube widgets on a page (edge case: multiple cubes).
- Header control and renderers share `useCubeTheme()` without prop drilling.
- Matches existing solve-history `localStorage` pattern.
- SSR: hydrate from `localStorage` in `useEffect`; flash of default theme acceptable for first paint (or `suppressHydrationWarning` on wrapper).

**Stored shape**:

```typescript
type StoredColorPreference = {
  version: 1;
  presetId: ColorPresetId | "custom";
  paletteOverrides?: Partial<Record<CubeColor, string>>;
};
```

Selecting a named preset clears `paletteOverrides`. Custom edits set `presetId: "custom"`.

**Alternatives considered**:

| Alternative     | Rejected because                     |
| --------------- | ------------------------------------ |
| URL query param | Out of scope per spec                |
| Cookies         | Unnecessary server involvement       |
| Zustand / Jotai | No global state lib in project today |
| Per-page state  | Violates FR-003 global consistency   |

---

## 5. Renderer Migration Scope

**Decision**: Migrate all cube render paths to consume resolved palette from context:

| Component / path        | Current state                                 | Migration                                            |
| ----------------------- | --------------------------------------------- | ---------------------------------------------------- |
| `CubeFace3D`            | `COLOR_CLASS` Tailwind map                    | `cubeColorStyle(role)` + optional pattern            |
| `CubeFace2D`            | Per-role Tailwind classes (large)             | Same helper for fill + borders                       |
| `ScrambleCubePreview`   | Uses `faceletsToCube3DColors` + default theme | Pass active `CubeTheme` from context                 |
| `CubeInfoCard2D` / `3D` | Legacy data colors                            | Map legacy `SquareColorDetail` roles through palette |
| Lesson static data      | Physical color names in TS files              | Unchanged (FR-014); renderers resolve at paint time  |

**Rationale**:

- 001 laid `cubeTheme.ts` adapter for facelet pipeline; this feature extends it with palette resolution, not lesson rewrites.
- `CubeFace2D` is the highest-churn file; centralizing color application reduces duplication.

---

## 6. Header UI Pattern

**Decision**: Add a **Palette** icon button next to the language switcher (desktop) and inside the mobile sheet (above language). Click opens a `Sheet`/`Popover` with:

1. Preset radio/select list (6 options + visual preview swatch row)
2. "Customize colors" expandable section with 7 role rows + mini pickers
3. "Reset to Default" action (FR-011)

**Rationale**:

- Matches user request ("toggle on header") and existing header utility placement.
- Sheet reuses `@radix-ui/react-dialog` pattern already in `header.tsx`.
- Mobile P3: same sheet content inside hamburger menu section avoids crowding the top bar.

---

## 7. Internationalization

**Decision**: Add `messages/en.json` and `messages/pt.json` namespace `cubeTheme` with preset labels, control aria-labels, and customize/reset strings (FR-013).

**Rationale**: Project uses `next-intl`; header already uses `useTranslations("navigation")`.

---

## 8. Achromatopsia Non-Color Cues

**Decision**: For achromatopsia preset only, apply **CSS repeating-linear-gradient** hatch patterns per `CubeColor` role (distinct angle/spacing per role) on top of grayscale fills.

**Rationale**:

- Satisfies FR-005 without adding sticker text labels that clutter small 3D faces.
- Patterns survive custom palette edits if user starts from achromatopsia preset then tweaks hex (pattern metadata travels with preset definition).

**Alternatives considered**:

| Alternative               | Rejected because                               |
| ------------------------- | ---------------------------------------------- |
| Letter labels on stickers | Too small on 3D view; clutters lesson diagrams |
| Icons per face            | High design cost; inconsistent at sticker size |
| Luminance only            | May fail SC-003 for adjacent similar grays     |

---

## Resolved Clarifications

All technical-context items resolved; no blocking unknowns remain for Phase 1 design.
