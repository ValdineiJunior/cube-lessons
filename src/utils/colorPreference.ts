import type { UserColorPreference } from "@/types/colorTheme";
import { PRESET_ORDER } from "@/data/cubeColorPresets";
import type { ColorPresetId } from "@/types/colorTheme";
import { isValidHex } from "@/utils/cubeColorStyles";

export const COLOR_PREFERENCE_KEY = "cube-lessons:color-preference";

export const DEFAULT_PREFERENCE: UserColorPreference = {
  version: 1,
  presetId: "default",
};

function isValidPresetId(id: string): id is ColorPresetId {
  return PRESET_ORDER.includes(id as ColorPresetId);
}

function sanitizePreference(raw: unknown): UserColorPreference {
  if (!raw || typeof raw !== "object") return DEFAULT_PREFERENCE;

  const data = raw as Record<string, unknown>;
  if (data.version !== 1) return DEFAULT_PREFERENCE;

  const presetId = data.presetId;
  if (presetId === "custom") {
    const overrides = data.paletteOverrides;
    const paletteOverrides: UserColorPreference["paletteOverrides"] = {};
    if (overrides && typeof overrides === "object") {
      for (const [role, hex] of Object.entries(
        overrides as Record<string, unknown>,
      )) {
        if (typeof hex === "string" && isValidHex(hex)) {
          paletteOverrides[role as keyof typeof paletteOverrides] = hex;
        }
      }
    }
    return {
      version: 1,
      presetId: "custom",
      paletteOverrides,
    };
  }

  if (typeof presetId === "string" && isValidPresetId(presetId)) {
    return { version: 1, presetId };
  }

  return DEFAULT_PREFERENCE;
}

export function loadPreference(): UserColorPreference {
  if (typeof window === "undefined") return DEFAULT_PREFERENCE;
  try {
    const stored = localStorage.getItem(COLOR_PREFERENCE_KEY);
    if (!stored) return DEFAULT_PREFERENCE;
    return sanitizePreference(JSON.parse(stored));
  } catch {
    return DEFAULT_PREFERENCE;
  }
}

export function savePreference(pref: UserColorPreference): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(COLOR_PREFERENCE_KEY, JSON.stringify(pref));
  } catch {
    // Quota exceeded or private mode — session-only state
  }
}
