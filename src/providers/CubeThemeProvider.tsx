"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { ColorPresetId, CubeColorPalette } from "@/types/colorTheme";
import type { CubeColor } from "@/types/types";
import {
  applyPaletteToDocument,
  isValidHex,
  resolveThemeState,
} from "@/utils/cubeColorStyles";
import {
  DEFAULT_PREFERENCE,
  getCachedColorPreference,
  getColorPreferenceServerSnapshot,
  getColorPreferenceSnapshot,
  savePreference,
  subscribeColorPreference,
} from "@/utils/colorPreference";
import type { CubeTheme } from "@/utils/cubeTheme";

type CubeThemeContextValue = {
  presetId: ColorPresetId | "custom";
  theme: CubeTheme;
  palette: CubeColorPalette;
  setPreset: (id: ColorPresetId) => void;
  setRoleColor: (role: CubeColor, hex: string) => void;
  resetToDefault: () => void;
  isReady: boolean;
};

const CubeThemeContext = createContext<CubeThemeContextValue | null>(null);

export function CubeThemeProvider({ children }: { children: ReactNode }) {
  const preference = useSyncExternalStore(
    subscribeColorPreference,
    getColorPreferenceSnapshot,
    getColorPreferenceServerSnapshot,
  );
  const isReady = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const { theme, palette, presetId } = useMemo(
    () => resolveThemeState(preference),
    [preference],
  );

  useEffect(() => {
    if (!isReady) return;
    applyPaletteToDocument(palette);
  }, [palette, isReady]);

  const setPreset = useCallback((id: ColorPresetId) => {
    savePreference({ version: 1, presetId: id });
  }, []);

  const setRoleColor = useCallback((role: CubeColor, hex: string) => {
    if (!isValidHex(hex)) return;
    const prev = getCachedColorPreference();
    const baseOverrides =
      prev.presetId === "custom" ? (prev.paletteOverrides ?? {}) : {};
    savePreference({
      version: 1,
      presetId: "custom",
      paletteOverrides: { ...baseOverrides, [role]: hex },
    });
  }, []);

  const resetToDefault = useCallback(() => {
    savePreference(DEFAULT_PREFERENCE);
  }, []);

  const value = useMemo(
    () => ({
      presetId,
      theme,
      palette,
      setPreset,
      setRoleColor,
      resetToDefault,
      isReady,
    }),
    [
      presetId,
      theme,
      palette,
      setPreset,
      setRoleColor,
      resetToDefault,
      isReady,
    ],
  );

  return (
    <CubeThemeContext.Provider value={value}>
      {children}
    </CubeThemeContext.Provider>
  );
}

export function useCubeTheme(): CubeThemeContextValue {
  const context = useContext(CubeThemeContext);
  if (!context) {
    throw new Error("useCubeTheme must be used within CubeThemeProvider");
  }
  return context;
}

export function useCubeThemeOptional(): CubeThemeContextValue | null {
  return useContext(CubeThemeContext);
}
