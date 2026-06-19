"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { Palette, ChevronDown } from "lucide-react";
import { HexColorPicker } from "react-colorful";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { listColorPresets } from "@/data/cubeColorPresets";
import { useCubeTheme } from "@/providers/CubeThemeProvider";
import type { ColorPresetId } from "@/types/colorTheme";
import type { CubeColor } from "@/types/types";
import { resolveStickerStyle } from "@/utils/cubeColorStyles";

const COLOR_ROLES: CubeColor[] = [
  "white",
  "yellow",
  "red",
  "orange",
  "green",
  "blue",
  "gray",
];

type ColorThemeControlProps = {
  variant?: "header" | "mobile";
};

export function ColorThemeControl({
  variant = "header",
}: ColorThemeControlProps) {
  const t = useTranslations("cubeTheme");
  const { presetId, palette, setPreset, setRoleColor, resetToDefault } =
    useCubeTheme();
  const presets = listColorPresets();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label={t("openControl")}
          className={
            variant === "mobile"
              ? "inline-flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              : "inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          }
        >
          <Palette className="h-4 w-4" />
          {variant === "mobile" ? (
            <span>{t("openControl")}</span>
          ) : (
            <span className="sr-only">{t("openControl")}</span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[320px] overflow-y-auto sm:w-[380px]"
      >
        <SheetTitle className="mt-8">{t("openControl")}</SheetTitle>
        <SheetDescription className="sr-only">
          {t("openControl")}
        </SheetDescription>

        <div
          role="radiogroup"
          aria-label={t("openControl")}
          className="mt-6 space-y-2"
        >
          {presets.map((preset) => (
            <PresetOption
              key={preset.id}
              id={preset.id}
              label={t(`presets.${presetKeyToI18n(preset.id)}`)}
              selected={presetId === preset.id}
              palette={preset.palette}
              onSelect={() => setPreset(preset.id)}
            />
          ))}
        </div>

        <details className="mt-6 group">
          <summary className="flex cursor-pointer list-none items-center justify-between rounded-md border px-3 py-2 text-sm font-medium">
            {t("customize")}
            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
          </summary>
          <div className="mt-3 space-y-4">
            {COLOR_ROLES.map((role) => (
              <RoleColorRow
                key={role}
                role={role}
                hex={palette[role].hex}
                label={t(`roles.${role}`)}
                onChange={(hex) => setRoleColor(role, hex)}
              />
            ))}
          </div>
        </details>

        <button
          type="button"
          onClick={resetToDefault}
          className="mt-6 w-full rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          {t("reset")}
        </button>
      </SheetContent>
    </Sheet>
  );
}

function presetKeyToI18n(id: ColorPresetId): string {
  if (id === "reduced-contrast") return "reducedContrast";
  return id;
}

function PresetOption({
  id,
  label,
  selected,
  palette,
  onSelect,
}: {
  id: ColorPresetId;
  label: string;
  selected: boolean;
  palette: import("@/types/colorTheme").CubeColorPalette;
  onSelect: () => void;
}) {
  const swatches = useMemo(
    () =>
      (
        ["white", "red", "green", "blue", "orange", "yellow"] as CubeColor[]
      ).map((role) => resolveStickerStyle(role, palette)),
    [palette],
  );

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      aria-label={label}
      onClick={onSelect}
      className={`flex w-full items-center gap-3 rounded-md border px-3 py-2 text-left text-sm transition-colors ${
        selected
          ? "border-blue-600 bg-blue-50"
          : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <span
        className={`h-4 w-4 shrink-0 rounded-full border ${
          selected ? "border-blue-600 bg-blue-600" : "border-gray-400"
        }`}
      />
      <span className="flex-1 font-medium">{label}</span>
      <span className="flex gap-0.5">
        {swatches.map((style, i) => (
          <span
            key={`${id}-swatch-${i}`}
            className="h-4 w-4 rounded-sm border border-black/20"
            style={{
              backgroundColor: style.backgroundColor,
              backgroundImage: style.backgroundImage,
            }}
          />
        ))}
      </span>
    </button>
  );
}

function RoleColorRow({
  role,
  hex,
  label,
  onChange,
}: {
  role: CubeColor;
  hex: string;
  label: string;
  onChange: (hex: string) => void;
}) {
  return (
    <div className="rounded-md border p-3">
      <label htmlFor={`color-role-${role}`} className="text-sm font-medium">
        {label}
      </label>
      <div className="mt-2 flex items-start gap-3">
        <span
          className="mt-1 h-8 w-8 shrink-0 rounded border border-gray-300"
          style={{ backgroundColor: hex }}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <HexColorPicker
            id={`color-role-${role}`}
            color={hex}
            onChange={onChange}
            style={{ width: "100%", height: "120px" }}
          />
        </div>
      </div>
    </div>
  );
}
