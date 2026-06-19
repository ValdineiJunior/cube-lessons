import type { UserColorPreference } from "@/types/colorTheme";
import { PRESET_ORDER } from "@/data/cubeColorPresets";
import type { ColorPresetId } from "@/types/colorTheme";
import type { CubeColor } from "@/types/types";
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

function preferencesEqual(
  a: UserColorPreference,
  b: UserColorPreference,
): boolean {
  if (a.presetId !== b.presetId) return false;
  if (a.presetId !== "custom") return true;

  const aOverrides = a.paletteOverrides ?? {};
  const bOverrides = b.paletteOverrides ?? {};
  const aKeys = Object.keys(aOverrides) as CubeColor[];
  const bKeys = Object.keys(bOverrides) as CubeColor[];

  if (aKeys.length !== bKeys.length) return false;
  return aKeys.every((key) => aOverrides[key] === bOverrides[key]);
}

let cachedSnapshot: UserColorPreference = DEFAULT_PREFERENCE;
let hydrated = false;

function commitSnapshot(next: UserColorPreference): UserColorPreference {
  if (preferencesEqual(next, cachedSnapshot)) {
    return cachedSnapshot;
  }

  if (next.presetId !== "custom") {
    cachedSnapshot = { version: 1, presetId: next.presetId };
  } else {
    cachedSnapshot = {
      version: 1,
      presetId: "custom",
      paletteOverrides: { ...(next.paletteOverrides ?? {}) },
    };
  }

  return cachedSnapshot;
}

function hydrateFromStorage() {
  if (typeof window === "undefined" || hydrated) return;
  commitSnapshot(loadPreference());
  hydrated = true;
}

function reloadFromStorage() {
  if (typeof window === "undefined") return;
  commitSnapshot(loadPreference());
  hydrated = true;
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

type PreferenceListener = () => void;
const preferenceListeners = new Set<PreferenceListener>();

function notifyPreferenceListeners() {
  preferenceListeners.forEach((listener) => listener());
}

export function subscribeColorPreference(
  listener: PreferenceListener,
): () => void {
  preferenceListeners.add(listener);

  const onStorage = (event: StorageEvent) => {
    if (event.key === COLOR_PREFERENCE_KEY || event.key === null) {
      reloadFromStorage();
      listener();
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }

  return () => {
    preferenceListeners.delete(listener);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

export function getColorPreferenceSnapshot(): UserColorPreference {
  hydrateFromStorage();
  return cachedSnapshot;
}

export function getColorPreferenceServerSnapshot(): UserColorPreference {
  return DEFAULT_PREFERENCE;
}

export function savePreference(pref: UserColorPreference): void {
  commitSnapshot(pref);
  notifyPreferenceListeners();

  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(COLOR_PREFERENCE_KEY, JSON.stringify(cachedSnapshot));
  } catch {
    // Quota exceeded or private mode — cachedSnapshot keeps session state
  }
}

export function getCachedColorPreference(): UserColorPreference {
  return cachedSnapshot;
}
