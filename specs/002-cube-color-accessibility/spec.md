# Feature Specification: Accessible Cube Color Themes

**Feature Branch**: `002-cube-color-accessibility`

**Created**: 2026-06-19

**Status**: Draft

**Input**: User description: "Make cubes accessible with presets of default colors and pre-set color-blind-friendly palettes (Default, Reduced contrast, Protanopia, Deuteranopia, Tritanopia, Achromatopsia). Toggle color theme in the header. Allow users to set a color for any display color used to represent the cube. Goal: make cube tutorials accessible for everyone with minimum visibility requirements."

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Choose an Accessibility Preset from the Header (Priority: P1)

As a learner with color-vision difficulty, I want to switch cube colors to a preset designed for my vision type from the site header so I can follow tutorials without misidentifying faces.

**Why this priority**: Preset palettes deliver the core accessibility value immediately and require no setup. This is the fastest path to inclusive cube diagrams.

**Independent Test**: Open any lesson page with cube diagrams, open the header color control, select each preset, and confirm all cube stickers update to distinguishable colors for that preset.

**Acceptance Scenarios**:

1. **Given** the user is on any page that shows cube diagrams, **When** they open the header color control, **Then** they see these preset options: Default, Reduced contrast, Protanopia, Deuteranopia, Tritanopia, and Achromatopsia.
2. **Given** a preset is selected, **When** cube diagrams are visible on the page, **Then** every cube sticker uses colors from that preset consistently (2D faces, 3D views, scramble previews).
3. **Given** the user selects Default, **When** cubes render, **Then** colors match the standard competition-style palette users expect today.

---

### User Story 2 - Distinguish All Six Face Colors Under Each Preset (Priority: P1)

As a user with protanopia, deuteranopia, tritanopia, or achromatopsia, I want each preset to use colors I can tell apart so I can identify U/R/F/D/L/B positions during lessons and practice.

**Why this priority**: Presets that look different to designers but not to affected users would fail the feature's purpose. Distinctiveness is the measurable accessibility outcome.

**Independent Test**: For each preset, display a solved cube and a scrambled cube; verify a user can name or point to each of the six face colors without ambiguity.

**Acceptance Scenarios**:

1. **Given** the Protanopia preset is active, **When** a solved cube is shown, **Then** no face color relies on red hues that are indistinguishable for users with protanopia.
2. **Given** the Deuteranopia preset is active, **When** a solved cube is shown, **Then** no face color relies on green hues that are indistinguishable for users with deuteranopia.
3. **Given** the Tritanopia preset is active, **When** a solved cube is shown, **Then** no face color relies on blue hues that are indistinguishable for users with tritanopia.
4. **Given** the Achromatopsia preset is active, **When** a solved cube is shown, **Then** faces are distinguishable using lightness, pattern, or non-color cues (not hue alone).
5. **Given** the Reduced contrast preset is active, **When** cubes render, **Then** adjacent stickers on the same face and across edges remain visually separable for users who need lower saturation or softer contrast.

---

### User Story 3 - Customize Individual Cube Display Colors (Priority: P2)

As a user whose needs are not fully met by presets, I want to assign my own color to each semantic cube color role so I can tune visibility to my personal comfort.

**Why this priority**: Personal customization extends accessibility beyond fixed presets and supports users with combined or atypical vision needs.

**Independent Test**: Open the customization panel, change at least two semantic colors (e.g., red and green roles), save, and confirm all cube diagrams reflect the new mapping.

**Acceptance Scenarios**:

1. **Given** the user opens color customization, **When** they view available roles, **Then** they can adjust every display color role used by cube renderers (red, green, blue, orange, yellow, white, and gray for neutral or unknown stickers).
2. **Given** the user picks a new color for a role, **When** they confirm the change, **Then** all cube diagrams site-wide use the updated color for stickers mapped to that role.
3. **Given** the user has customized colors, **When** they select a named preset, **Then** the preset replaces the current full color mapping (custom values are discarded unless the user saves them as a personal preset in a future enhancement).

---

### User Story 4 - Persist Color Preferences Across Visits (Priority: P2)

As a returning learner, I want my chosen preset or custom colors to be remembered so I do not have to reconfigure accessibility settings every session.

**Why this priority**: Re-applying settings on every visit creates friction and excludes users who need reliable, predictable cube colors.

**Independent Test**: Select a non-default preset or custom colors, reload the browser, navigate across lesson pages, and confirm the same theme remains active.

**Acceptance Scenarios**:

1. **Given** the user selects a preset or saves custom colors, **When** they reload the application or return later, **Then** the same color theme is restored automatically.
2. **Given** stored preferences are unavailable (e.g., first visit or cleared storage), **When** the user opens the app, **Then** the Default preset is used.

---

### User Story 5 - Access Color Controls on Mobile (Priority: P3)

As a mobile user, I want to change cube color settings from the header so accessibility is not limited to desktop.

**Why this priority**: Many learners use phones; header placement was explicitly requested and must work on small screens.

**Independent Test**: On a mobile viewport, open the header menu or compact header control and change the color preset; confirm cubes update.

**Acceptance Scenarios**:

1. **Given** the viewport is mobile-sized, **When** the user opens navigation or header utilities, **Then** the color theme control is reachable without leaving the current page.
2. **Given** a mobile user changes the preset, **When** they navigate to another lesson, **Then** the selected theme persists and applies there as well.

---

### Edge Cases

- What happens when a user selects a preset and then partially customizes colors before navigating away? The last saved full mapping (preset application or confirmed custom save) is persisted.
- How does the system handle neutral or placeholder stickers (gray role)? Gray remains available and customizable; it must stay visually distinct from active face colors in every preset.
- What if two customized colors are too similar for the user? The system does not block selection, but presets provide vetted alternatives; users can reset to Default or any named preset at any time.
- What happens on pages with multiple cube widgets simultaneously? All widgets on the page reflect the same active theme without requiring per-widget configuration.
- What if the user switches language (EN/PT)? Color labels and controls follow the active locale; color values themselves are not language-dependent.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: System MUST provide six named color presets: Default, Reduced contrast, Protanopia, Deuteranopia, Tritanopia, and Achromatopsia.
- **FR-002**: System MUST expose a color-theme control in the site header on all primary pages, alongside existing header utilities (e.g., language switcher).
- **FR-003**: System MUST apply the active color theme to every cube visualization in the application (lesson diagrams, scramble previews, timer cube preview, and any 2D or 3D cube component).
- **FR-004**: Each preset MUST map the six cube face identities (U, R, F, D, L, B) to display colors such that users with the corresponding vision profile can distinguish all faces on a standard solved cube.
- **FR-005**: The Achromatopsia preset MUST distinguish faces without relying on hue alone (e.g., lightness steps, patterns, or labels).
- **FR-006**: The Reduced contrast preset MUST lower visual intensity while keeping adjacent stickers distinguishable on typical displays.
- **FR-007**: System MUST allow users to customize each semantic display color role: red, green, blue, orange, yellow, white, and gray.
- **FR-008**: System MUST provide an intuitive color-selection interaction for customization (visual picker or equivalent) so users are not required to enter color codes manually.
- **FR-009**: System MUST persist the user's active preset or customized color mapping across sessions on the same device/browser.
- **FR-010**: System MUST default to the Default preset when no saved preference exists.
- **FR-011**: System MUST allow users to return to the Default preset in one action from the header control.
- **FR-012**: Color theme changes MUST take effect on visible cube diagrams without requiring a full page reload.
- **FR-013**: Color control labels and preset names MUST be available in all supported site languages (English and Portuguese).
- **FR-014**: System MUST NOT change lesson case data or scramble logic when themes change; only display colors change.

### Key Entities

- **Color Preset**: A named, curated mapping from cube face identities to display colors, with a stable identifier and human-readable label (e.g., Protanopia).
- **Semantic Color Role**: One of the seven display roles (red, green, blue, orange, yellow, white, gray) used by renderers to paint stickers; independent of physical WCA color names in lesson data.
- **User Color Preference**: The user's currently active preset identifier, or a custom mapping of semantic roles to chosen display colors, persisted for return visits.
- **Cube Theme**: The resolved mapping consumed by cube renderers to translate face-identity state into sticker colors (extends the theme model established for scramble integration).

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Users can switch between any two presets from the header in under 10 seconds on first attempt without documentation.
- **SC-002**: After a theme change, all visible cube diagrams on the current page reflect the new colors within 1 second.
- **SC-003**: In moderated usability checks with at least one participant per vision profile (or validated palette review against established color-accessibility guidelines), users correctly identify all six faces on a solved cube for their selected preset in at least 90% of trials.
- **SC-004**: 95% of returning users see their last-selected theme restored automatically across sessions on the same device.
- **SC-005**: Custom color changes apply consistently across at least three different page types that show cubes (e.g., lesson case, movements reference, timer preview) without per-page setup.
- **SC-006**: Support requests or feedback mentioning "cannot tell cube colors apart" decrease after release compared to the prior 30-day baseline (qualitative tracking if volume is low).

## Assumptions

- The application already separates cube face identity from display color via a theme layer; this feature extends that layer with presets, persistence, and UI controls rather than rewriting lesson content.
- Preset palettes will be defined using established color-accessibility guidance and reviewed for pairwise distinguishability; exact hex values are a design decision during planning, not a user-facing requirement.
- Customization applies to semantic color roles globally, not per individual lesson or case.
- Selecting a named preset replaces the entire current mapping; advanced "save my custom theme as a preset" is out of scope for this feature.
- Preferences are stored locally per browser/device; cross-device sync is out of scope unless a user account system is added later.
- The header remains the single entry point for theme switching in v1; deep-linking or URL-based theme sharing is out of scope.
- Gray is used for neutral, unknown, or non-face stickers and must remain customizable like other roles.

## Dependencies

- Completion of the cube theme adapter and face-identity rendering pipeline (from WCA scramble integration) so all renderers consume a shared theme rather than hard-coded colors.
- Existing header layout and mobile navigation patterns for placing the new control without crowding primary navigation.
- Internationalization messages for preset names, control labels, and accessibility descriptions in English and Portuguese.
