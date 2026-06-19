import type { CubeColor } from "@/types/types";

export type FaceLetter = "U" | "R" | "F" | "D" | "L" | "B";

export type TimerScrambleType =
  | "3x3"
  | "2gll"
  | "cmll"
  | "corners"
  | "edges"
  | "lse"
  | "lsll"
  | "pll"
  | "zbll"
  | "zzls";

export type ScrambleSource = "wca" | "training";

export type ScrambleStatus = "loading" | "ready" | "error";

export type ScrambleErrorCode =
  | "GENERATION_FAILED"
  | "UNSUPPORTED_TYPE"
  | "CANCELLED";

export type ScrambleError = {
  code: ScrambleErrorCode;
  message: string;
  fallback?: string;
};

export type ScrambleRequest = {
  type: TimerScrambleType;
  requestId: number;
};

export type ScrambleResult = {
  text: string;
  source: ScrambleSource;
  type: TimerScrambleType;
};

export type FaceletString = string & { readonly __brand: "FaceletString" };

export const TRAINING_SCRAMBLE_TYPES: TimerScrambleType[] = [
  "2gll",
  "cmll",
  "corners",
  "edges",
  "lse",
  "lsll",
  "pll",
  "zbll",
  "zzls",
];

export const SCRAMBLE_DESCRIPTIONS: Record<TimerScrambleType, string> = {
  "3x3": "Standard 3x3 scramble for general practice.",
  "2gll": "2GLL: Last layer corners oriented, practice corner permutation.",
  cmll: "CMLL: Corners of the last layer, used in Roux method.",
  corners: "Corners: Scramble for practicing only corner pieces.",
  edges: "Edges: Scramble for practicing only edge pieces.",
  lse: "LSE: Last six edges, Roux method.",
  lsll: "LSLL: Last slot and last layer.",
  pll: "PLL: Permute last layer pieces.",
  zbll: "ZBLL: All last layer cases with oriented edges.",
  zzls: "ZZLS: ZZ method last slot.",
};

export const FALLBACK_SCRAMBLE =
  "R2 U2 F2 U' F2 L2 D' B2 R2 D' R2 U' L' U L R F' D F2 U2 R' U'";

export const PHYSICAL_TO_FACE: Record<string, FaceLetter> = {
  w: "U",
  r: "R",
  g: "F",
  y: "D",
  o: "L",
  b: "B",
};

export const FACE_TO_CUBE_COLOR: Record<FaceLetter, CubeColor> = {
  U: "white",
  R: "red",
  F: "green",
  D: "yellow",
  L: "orange",
  B: "blue",
};

export const CUBE_COLOR_TO_LEGACY: Record<CubeColor, string> = {
  white: "w",
  red: "r",
  green: "g",
  yellow: "y",
  orange: "o",
  blue: "b",
  gray: "z",
};
