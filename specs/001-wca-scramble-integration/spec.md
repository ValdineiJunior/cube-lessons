# Feature Specification: WCA Official Scramble Integration

**Feature Branch**: `001-wca-scramble-integration`

**Created**: 2026-06-19

**Status**: Draft

**Input**: User description: "I like to specify again the WCA Scramble integration — replace current scramble generation with WCA-official algorithms (Tnoodle), adopt standard 54-character facelet string cube state, migrate legacy lesson formats, and use custom cube-state rendering (no third-party images) with future colorblind palette support."

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Competition-Faithful 3x3 Practice (Priority: P1)

As a speedcuber using the timer, I want 3x3 scrambles that follow the same rules as official WCA competitions so my practice sessions reflect real tournament conditions.

**Why this priority**: The timer's default `3x3` mode is the primary use case and the main reason for this feature. WCA-faithful scrambles deliver the core user value immediately.

**Independent Test**: Open the timer, select 3x3, generate 20 scrambles, and verify each meets WCA scramble properties (20–25 moves, no consecutive moves on the same face, standard notation). The timer must remain usable while scrambles generate.

**Acceptance Scenarios**:

1. **Given** the timer is on the 3x3 scramble type, **When** a new scramble is generated, **Then** the scramble contains between 20 and 25 space-separated moves using WCA notation (U, D, L, R, F, B with optional `'` and `2`).
2. **Given** a generated 3x3 scramble, **When** the move sequence is inspected, **Then** no two consecutive moves affect the same face (e.g., no `R R'`, `U U2`).
3. **Given** the user completes a solve, **When** a new scramble is requested, **Then** the scramble string is stored with the solve time exactly as today, with no loss of solve-history functionality.

---

### User Story 2 - Responsive Timer During Scramble Generation (Priority: P1)

As a user timing solves, I want scramble generation to happen without freezing the interface so I can start inspection or adjust settings immediately.

**Why this priority**: Scramble generation is computationally heavy; a frozen UI would break the core timer experience.

**Independent Test**: Generate scrambles repeatedly while interacting with the timer (hold-to-start, type switching). The interface must stay responsive throughout.

**Acceptance Scenarios**:

1. **Given** the timer page is open, **When** a scramble is being generated, **Then** the user can still see loading feedback and interact with controls without a multi-second freeze.
2. **Given** the user switches scramble type, **When** the new scramble is loading, **Then** a clear generating state is shown until the scramble is ready.

---

### User Story 3 - Custom Cube Visualization from Standard State (Priority: P2)

As a learner viewing cube diagrams, I want scrambles and lesson cases rendered using the project's own cube components—not pre-generated images from external libraries—so future color customization (e.g., colorblind palettes) can apply consistently.

**Why this priority**: Custom rendering is a stated product constraint and prerequisite for accessibility goals; it shapes how cube state is represented across the app.

**Independent Test**: Display a scramble-derived cube state using existing `Cube3D` / `CubeFace2D` components. Confirm no third-party scramble images or SVG exports are loaded.

**Acceptance Scenarios**:

1. **Given** a scramble move string, **When** the cube is visualized, **Then** the display is produced by project-owned renderers fed from a standard cube-state model, not from external image APIs.
2. **Given** a cube state, **When** rendered, **Then** sticker identity uses face letters (U/R/F/D/L/B meaning "that face's color when solved") rather than fixed physical color names baked into state data.

---

### User Story 4 - Training Subset Scrambles Continue Working (Priority: P2)

As a user practicing method-specific subsets (2GLL, CMLL, ZBLL, etc.), I want those training scramble types to keep working in the timer even after 3x3 switches to WCA-official generation.

**Why this priority**: The timer supports 10 scramble types; only `3x3` is a WCA competition event. Breaking training modes would regress existing users.

**Independent Test**: Select each non-3x3 training type in the timer and confirm a valid scramble is produced.

**Acceptance Scenarios**:

1. **Given** the user selects a training subset (e.g., `2gll`, `zbll`, `cmll`), **When** a scramble is generated, **Then** a valid move sequence is returned without error.
2. **Given** training subsets are not WCA competition events, **When** generated, **Then** they follow their established training rules (not necessarily WCA 20–25 move filtering).

---

### User Story 5 - Lesson Case Scrambles Unchanged (Priority: P3)

As a student on F2L/OLL/PLL lesson pages, I want case-specific practice scrambles (inverse moves + random last-layer setup) to behave exactly as today so pedagogy is not disrupted.

**Why this priority**: Lesson scrambles are intentionally designed for case practice, not competition scrambling. Out of scope for WCA replacement.

**Independent Test**: Open F2L, OLL, and PLL lesson pages, select cases, and verify scramble output matches current inverse-move logic.

**Acceptance Scenarios**:

1. **Given** a selected F2L case, **When** the page shows a scramble, **Then** it combines a random OLL case setup with inverse F2L moves (unchanged pedagogy).
2. **Given** a selected OLL or PLL case, **When** the scramble is shown, **Then** the inverse-move scramble logic is preserved.

---

### User Story 6 - Legacy Lesson Data Migration Path (Priority: P3)

As a maintainer, I want lesson cube diagrams to migrate toward a single standard cube-state format so rendering and future themes work uniformly across timer scrambles and static case data.

**Why this priority**: Long-term consistency enables colorblind themes and reduces duplicate color representations; can be phased without blocking P1.

**Independent Test**: Convert at least one legacy case format (F2L partial faces or OLL/PLL border-color grids) to the standard 54-sticker state and render correctly via adapters.

**Acceptance Scenarios**:

1. **Given** legacy F2L data using partial face grids with hidden (`z`) stickers, **When** migrated, **Then** an equivalent standard cube-state representation exists that renders the same visible diagram.
2. **Given** legacy OLL/PLL `SquareColorDetail` border-color data, **When** migrated, **Then** an equivalent top-down view can be derived from standard cube state plus a theme palette.

---

### Edge Cases

- What happens when scramble generation fails (library error, worker crash)? A fallback scramble or clear error message must appear; the timer must not crash or show an empty state silently.
- What happens on first page load before client-side code runs? The timer already shows a "generating scramble" message; this behavior must be preserved.
- What happens when the user rapidly switches scramble types? Only the latest requested type's scramble should display (no race-condition stale scrambles).
- How are wide moves and other event-specific notations handled for future WCA events (2x2, 4x4)? Out of initial scope unless timer UI expands; document extension point.
- What if a user expects scrambles to be identical to the official WCA Java program used at competitions? The product must clearly position browser-based generation as practice-equivalent, not a replacement for the official competition binary.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: The system MUST generate 3x3 timer scrambles using algorithms equivalent to the WCA Tnoodle scramble rules (random-state generation with Regulation 4b3 move filtering).
- **FR-002**: Generated 3x3 scrambles MUST contain 20–25 moves after filtering, using standard face notation (U, D, L, R, F, B with optional `'` and `2`).
- **FR-003**: Generated 3x3 scrambles MUST NOT contain consecutive moves on the same face.
- **FR-004**: Scramble generation MUST NOT block the main user interface; generation runs asynchronously with visible loading feedback.
- **FR-005**: The system MUST adopt the industry-standard 54-character facelet string (face order U, R, F, D, L, B; 9 stickers per face, row-major) as the canonical cube-state representation.
- **FR-006**: Cube-state data MUST use face-identity letters (U/R/F/D/L/B), not fixed physical color names, so display colors can be swapped via themes.
- **FR-007**: The system MUST render cube diagrams exclusively through project-owned components; it MUST NOT use third-party scramble image, SVG, or PNG generation APIs.
- **FR-008**: The scramble-to-visualization pipeline MUST follow: move string → applied cube state → themed display values → existing cube renderers.
- **FR-009**: All ten current timer scramble types MUST remain available; training subsets (`2gll`, `cmll`, `corners`, `edges`, `lse`, `lsll`, `pll`, `zbll`, `zzls`) MUST continue producing valid scrambles.
- **FR-010**: Lesson-page scramble functions (`generateF2LCaseScramble`, `generateOLLCaseScramble`, `generatePLLCaseScramble`) MUST retain current inverse-move pedagogy and MUST NOT be replaced with competition scrambles.
- **FR-011**: Solve-time recording MUST continue storing the scramble string alongside each solve time without regression.
- **FR-012**: The system MUST provide a migration path from legacy lesson data formats (partial 3-face grids, border-color detail arrays, single-letter physical colors) to the canonical facelet string, executable in phases.
- **FR-013**: The architecture MUST support a future user-selectable color palette (including colorblind presets) without rewriting cube-state data.
- **FR-014**: The product MUST NOT claim browser-generated scrambles are valid for WCA-sanctioned competition administration; only the official WCA-distributed program is authoritative for competitions.

### Key Entities

- **Scramble**: A space-separated sequence of cube moves in standard notation; produced by type (e.g., 3x3, 2gll); stored with solve records.
- **Scramble Type**: Identifies which generator rules apply (WCA 3x3 vs training subset); maps from current timer selector values.
- **Facelet String**: Canonical 54-character cube state; solved state is all face-identity letters in URFDLB order; input to renderers and move application.
- **Cube Theme**: Mapping from face-identity letters to display colors or patterns; user preference (future); separate from state data.
- **Lesson Case Scramble**: Pedagogical scramble built from case algorithm inverses plus optional random last-layer setup; distinct from competition scrambles.
- **Legacy Case Data**: Existing static lesson diagrams in non-standard formats (partial faces, border-color grids); migration source only.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: 100% of sampled 3x3 timer scrambles (minimum 50 consecutive generations) contain between 20 and 25 moves and pass same-face consecutive-move checks.
- **SC-002**: Users can interact with timer controls (hold, stop, type switch) during scramble generation with no perceptible UI freeze exceeding 100 ms on typical devices.
- **SC-003**: All 10 timer scramble types produce a valid scramble on first attempt in manual smoke testing.
- **SC-004**: F2L, OLL, and PLL lesson pages produce scrambles identical in structure to current behavior (inverse moves + random LL where applicable).
- **SC-005**: Zero third-party scramble images appear in network requests or DOM when viewing timer or lesson cube diagrams.
- **SC-006**: At least one legacy lesson data format has a documented, tested conversion to the canonical facelet string with visually equivalent output.
- **SC-007**: Solve history continues to record scramble text for every completed solve, matching pre-migration behavior.

## Assumptions

- Primary users are speedcubers practicing for WCA-style 3x3 solves; competition delegate use is out of scope.
- Initial WCA-official replacement targets only the timer's `3x3` type; other WCA events (2x2, 4x4, etc.) are deferred until the timer UI supports them.
- Training subset scrambles may continue using the existing generator or an equivalent training engine; they are not required to meet WCA Regulation 4b3 filtering.
- Lesson inverse-move scrambles remain pedagogically correct without adopting WCA scramble rules.
- Browser-based Tnoodle-equivalent libraries (e.g., csTimer-derived ports) are acceptable for practice; the official Java JAR is not required for this web application.
- WCA default orientation (white on top, green on front) applies to scramble display context; facelet letters abstract physical sticker colors.
- Colorblind palette UI is a follow-on feature; this spec only requires theme-ready architecture (face letters in state, palette in display layer).
- GPL-licensed scramble libraries are acceptable pending project license compatibility review during planning.
- The existing custom renderers (`Cube3D`, `CubeFace2D`, `CubeFace3D`) remain the visualization layer; they are adapted to consume themed view models, not replaced.

## Dependencies

- Current timer implementation (`Timer.tsx`) and solve-stats storage depend on scramble strings remaining text-based.
- Lesson pages (F2L, OLL, PLL) depend on `scrambleUtils.tsx` inverse-move logic.
- Static case data files (`cubeCasesFirstTwoLayers`, OLL/PLL case data) use legacy formats targeted for phased migration.
- Existing color utilities and cube component patterns inform the theme adapter design.

## Out of Scope

- Running the official WCA Tnoodle Java JAR on a server for this practice timer.
- Replacing lesson case scrambles with competition-style random-state scrambles.
- Implementing colorblind palette user settings UI (architecture only in this feature).
- Adding new WCA event types to the timer UI (2x2, 4x4, Pyraminx, etc.).
- Using third-party pre-rendered cube images for any scramble or case display.
- Guaranteeing bitwise-identical scrambles to a specific Tnoodle JAR version (practice-equivalent rules are sufficient).
