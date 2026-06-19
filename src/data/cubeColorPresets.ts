import type {
  ColorPreset,
  ColorPresetId,
  CubeColorPalette,
  CubeColorStop,
} from "@/types/colorTheme";
import type { CubeColor } from "@/types/types";
import { FACE_TO_CUBE_COLOR, type FaceLetter } from "@/types/scramble";

export const WCA_FACE_MAP: Record<FaceLetter, CubeColor> = FACE_TO_CUBE_COLOR;

const DEFAULT_STOPS: CubeColorPalette = {
  white: { hex: "#f0f9ff", borderHex: "#cbd5e1" },
  red: { hex: "#ef4444", borderHex: "#b91c1c" },
  green: { hex: "#22c55e", borderHex: "#15803d" },
  blue: { hex: "#3b82f6", borderHex: "#1d4ed8" },
  orange: { hex: "#f97316", borderHex: "#c2410c" },
  yellow: { hex: "#facc15", borderHex: "#ca8a04" },
  gray: { hex: "#52525b", borderHex: "#27272a" },
};

const REDUCED_CONTRAST_STOPS: CubeColorPalette = {
  white: { hex: "#f1f5f9", borderHex: "#94a3b8" },
  red: { hex: "#f87171", borderHex: "#dc2626" },
  green: { hex: "#4ade80", borderHex: "#16a34a" },
  blue: { hex: "#60a5fa", borderHex: "#2563eb" },
  orange: { hex: "#fb923c", borderHex: "#ea580c" },
  yellow: { hex: "#fde047", borderHex: "#eab308" },
  gray: { hex: "#64748b", borderHex: "#334155" },
};

const PROTANOPIA_STOPS: CubeColorPalette = {
  white: { hex: "#f5f5f5", borderHex: "#bdbdbd" },
  red: { hex: "#1565c0", borderHex: "#0d47a1" },
  green: { hex: "#ffb300", borderHex: "#ff8f00" },
  blue: { hex: "#1976d2", borderHex: "#0d47a1" },
  orange: { hex: "#ff7043", borderHex: "#e64a19" },
  yellow: { hex: "#ffd54f", borderHex: "#ffb300" },
  gray: { hex: "#616161", borderHex: "#424242" },
};

const DEUTERANOPIA_STOPS: CubeColorPalette = {
  white: { hex: "#f5f5f5", borderHex: "#bdbdbd" },
  red: { hex: "#d84315", borderHex: "#bf360c" },
  green: { hex: "#ffc107", borderHex: "#ff8f00" },
  blue: { hex: "#1e88e5", borderHex: "#1565c0" },
  orange: { hex: "#ff6f00", borderHex: "#e65100" },
  yellow: { hex: "#ffeb3b", borderHex: "#fbc02d" },
  gray: { hex: "#616161", borderHex: "#424242" },
};

const TRITANOPIA_STOPS: CubeColorPalette = {
  white: { hex: "#f5f5f5", borderHex: "#bdbdbd" },
  red: { hex: "#e53935", borderHex: "#c62828" },
  green: { hex: "#43a047", borderHex: "#2e7d32" },
  blue: { hex: "#ec407a", borderHex: "#c2185b" },
  orange: { hex: "#ff7043", borderHex: "#e64a19" },
  yellow: { hex: "#26a69a", borderHex: "#00897b" },
  gray: { hex: "#616161", borderHex: "#424242" },
};

function achroPattern(kind: string): string {
  const patterns: Record<string, string> = {
    white:
      "repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0, rgba(0,0,0,0.35) 2px, transparent 2px, transparent 6px)",
    yellow:
      "repeating-linear-gradient(90deg, rgba(0,0,0,0.35) 0, rgba(0,0,0,0.35) 2px, transparent 2px, transparent 6px)",
    red: "repeating-linear-gradient(45deg, rgba(0,0,0,0.4) 0, rgba(0,0,0,0.4) 2px, transparent 2px, transparent 5px)",
    orange:
      "repeating-linear-gradient(-45deg, rgba(0,0,0,0.4) 0, rgba(0,0,0,0.4) 2px, transparent 2px, transparent 5px)",
    green: "radial-gradient(circle, rgba(0,0,0,0.45) 1.5px, transparent 1.5px)",
    blue: "repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, rgba(0,0,0,0.35) 0, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 4px)",
  };
  return patterns[kind] ?? "";
}

function achroStop(role: CubeColor, hex: string): CubeColorStop {
  if (role === "gray") {
    return { hex, borderHex: "#333333" };
  }
  return {
    hex,
    borderHex: "#444444",
    pattern: `${achroPattern(role)}, ${hex}`,
  };
}

const ACHROMATOPSIA_STOPS: CubeColorPalette = {
  white: achroStop("white", "#eeeeee"),
  yellow: achroStop("yellow", "#dddddd"),
  red: achroStop("red", "#cccccc"),
  orange: achroStop("orange", "#bbbbbb"),
  green: achroStop("green", "#aaaaaa"),
  blue: achroStop("blue", "#999999"),
  gray: { hex: "#666666", borderHex: "#333333" },
};

function buildPreset(
  id: ColorPresetId,
  labelKey: string,
  palette: CubeColorPalette,
): ColorPreset {
  return {
    id,
    labelKey,
    faceMap: WCA_FACE_MAP,
    palette,
  };
}

export const COLOR_PRESETS: Record<ColorPresetId, ColorPreset> = {
  default: buildPreset("default", "cubeTheme.presets.default", DEFAULT_STOPS),
  "reduced-contrast": buildPreset(
    "reduced-contrast",
    "cubeTheme.presets.reducedContrast",
    REDUCED_CONTRAST_STOPS,
  ),
  protanopia: buildPreset(
    "protanopia",
    "cubeTheme.presets.protanopia",
    PROTANOPIA_STOPS,
  ),
  deuteranopia: buildPreset(
    "deuteranopia",
    "cubeTheme.presets.deuteranopia",
    DEUTERANOPIA_STOPS,
  ),
  tritanopia: buildPreset(
    "tritanopia",
    "cubeTheme.presets.tritanopia",
    TRITANOPIA_STOPS,
  ),
  achromatopsia: buildPreset(
    "achromatopsia",
    "cubeTheme.presets.achromatopsia",
    ACHROMATOPSIA_STOPS,
  ),
};

export const PRESET_ORDER: ColorPresetId[] = [
  "default",
  "reduced-contrast",
  "protanopia",
  "deuteranopia",
  "tritanopia",
  "achromatopsia",
];

export function getColorPreset(id: ColorPresetId): ColorPreset {
  return COLOR_PRESETS[id] ?? COLOR_PRESETS.default;
}

export function listColorPresets(): ColorPreset[] {
  return PRESET_ORDER.map((id) => COLOR_PRESETS[id]);
}
