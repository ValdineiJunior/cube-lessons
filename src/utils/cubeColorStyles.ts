import type {
  ActiveThemeState,
  CubeColorPalette,
  ResolvedStickerStyle,
  UserColorPreference,
} from "@/types/colorTheme";
import type { CubeColor } from "@/types/types";
import { getColorPreset } from "@/data/cubeColorPresets";

const HEX_REGEX = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

export function isValidHex(color: string): boolean {
  return HEX_REGEX.test(color);
}

function parseHex(hex: string): [number, number, number] | null {
  if (!isValidHex(hex)) return null;
  const raw = hex.slice(1);
  if (raw.length === 3) {
    return [
      parseInt(raw[0] + raw[0], 16),
      parseInt(raw[1] + raw[1], 16),
      parseInt(raw[2] + raw[2], 16),
    ];
  }
  return [
    parseInt(raw.slice(0, 2), 16),
    parseInt(raw.slice(2, 4), 16),
    parseInt(raw.slice(4, 6), 16),
  ];
}

function darkenHex(hex: string, factor = 0.75): string {
  const rgb = parseHex(hex);
  if (!rgb) return hex;
  const [r, g, b] = rgb.map((v) => Math.round(v * factor));
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

export function mergePalette(
  base: CubeColorPalette,
  overrides?: Partial<Record<CubeColor, string>>,
): CubeColorPalette {
  if (!overrides) return { ...base };

  const merged = { ...base };
  for (const role of Object.keys(overrides) as CubeColor[]) {
    const hex = overrides[role];
    if (hex && isValidHex(hex)) {
      merged[role] = { hex, borderHex: darkenHex(hex) };
    }
  }
  return merged;
}

export function resolveStickerStyle(
  role: CubeColor,
  palette: CubeColorPalette,
): ResolvedStickerStyle {
  const stop = palette[role] ?? palette.gray;
  return {
    backgroundColor: stop.hex,
    backgroundImage: stop.pattern,
    borderColor: stop.borderHex ?? darkenHex(stop.hex),
  };
}

export function resolveThemeState(
  preference: UserColorPreference,
): ActiveThemeState {
  const defaultPreset = getColorPreset("default");

  if (preference.presetId === "custom") {
    const palette = mergePalette(
      defaultPreset.palette,
      preference.paletteOverrides,
    );
    return {
      theme: {
        id: "custom",
        label: "Custom",
        faces: defaultPreset.faceMap,
      },
      palette,
      presetId: "custom",
    };
  }

  const preset = getColorPreset(preference.presetId);
  return {
    theme: {
      id: preset.id,
      label: preset.labelKey,
      faces: preset.faceMap,
    },
    palette: preset.palette,
    presetId: preset.id,
  };
}

export function applyPaletteToDocument(palette: CubeColorPalette): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  for (const role of Object.keys(palette) as CubeColor[]) {
    root.style.setProperty(`--cube-${role}`, palette[role].hex);
  }
}

export function getDefaultPalette(): CubeColorPalette {
  return getColorPreset("default").palette;
}
