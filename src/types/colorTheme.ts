import type { CubeColor } from "@/types/types";

import type { FaceLetter } from "@/types/scramble";

export type ColorPresetId =
  | "default"
  | "reduced-contrast"
  | "protanopia"
  | "deuteranopia"
  | "tritanopia"
  | "achromatopsia";

export type CubeColorStop = {
  hex: string;
  pattern?: string;
  borderHex?: string;
};

export type CubeColorPalette = Record<CubeColor, CubeColorStop>;

export type ColorPreset = {
  id: ColorPresetId;
  labelKey: string;
  faceMap: Record<FaceLetter, CubeColor>;
  palette: CubeColorPalette;
};

export type UserColorPreference = {
  version: 1;
  presetId: ColorPresetId | "custom";
  paletteOverrides?: Partial<Record<CubeColor, string>>;
};

export type ResolvedStickerStyle = {
  backgroundColor: string;
  backgroundImage?: string;
  borderColor: string;
};

export type ActiveThemeState = {
  theme: import("@/utils/cubeTheme").CubeTheme;
  palette: CubeColorPalette;
  presetId: ColorPresetId | "custom";
};
