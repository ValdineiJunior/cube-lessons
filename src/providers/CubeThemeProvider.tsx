"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type {
  ColorPresetId,
  CubeColorPalette,
  UserColorPreference,
} from "@/types/colorTheme";
import type { CubeColor } from "@/types/types";
import {
  applyPaletteToDocument,
  isValidHex,
  resolveThemeState,
} from "@/utils/cubeColorStyles";
import {
  DEFAULT_PREFERENCE,
  loadPreference,
  savePreference,
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
  const [preference, setPreference] =
    useState<UserColorPreference>(DEFAULT_PREFERENCE);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = loadPreference();
    setPreference(stored);
    setIsReady(true);
  }, []);

  const { theme, palette, presetId } = useMemo(
    () => resolveThemeState(preference),
    [preference],
  );

  useEffect(() => {
    if (!isReady) return;
    applyPaletteToDocument(palette);
  }, [palette, isReady]);

  const commit = useCallback((next: UserColorPreference) => {
    setPreference(next);
    savePreference(next);
  }, []);

  const setPreset = useCallback(
    (id: ColorPresetId) => {
      commit({ version: 1, presetId: id });
    },
    [commit],
  );

  const setRoleColor = useCallback((role: CubeColor, hex: string) => {
    if (!isValidHex(hex)) return;
    setPreference((prev) => {
      const baseOverrides =
        prev.presetId === "custom" ? (prev.paletteOverrides ?? {}) : {};
      const next: UserColorPreference = {
        version: 1,
        presetId: "custom",
        paletteOverrides: { ...baseOverrides, [role]: hex },
      };
      savePreference(next);
      return next;
    });
  }, []);

  const resetToDefault = useCallback(() => {
    commit(DEFAULT_PREFERENCE);
  }, [commit]);

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
