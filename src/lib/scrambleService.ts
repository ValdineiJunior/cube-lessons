import { scramble as cubeSolverScramble } from "cube-solver";
import {
  FALLBACK_SCRAMBLE,
  TRAINING_SCRAMBLE_TYPES,
  type ScrambleError,
  type ScrambleRequest,
  type ScrambleResult,
  type ScrambleSource,
  type TimerScrambleType,
} from "@/types/scramble";

function isTrainingType(
  type: TimerScrambleType,
): type is Exclude<TimerScrambleType, "3x3"> {
  return TRAINING_SCRAMBLE_TYPES.includes(type);
}

async function generateWca3x3Scramble(): Promise<string> {
  const response = await fetch("/api/scramble", { cache: "no-store" });

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    throw new Error(body?.error ?? `Scramble API failed (${response.status})`);
  }

  const data = (await response.json()) as { scramble: string };
  return data.scramble.trim();
}

export async function generateScrambleAsync(
  request: ScrambleRequest,
): Promise<ScrambleResult> {
  const { type } = request;

  if (type === "3x3") {
    try {
      const text = await generateWca3x3Scramble();
      return { text, source: "wca", type };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Scramble generation failed";
      throw createScrambleError(
        "GENERATION_FAILED",
        message,
        FALLBACK_SCRAMBLE,
      );
    }
  }

  if (isTrainingType(type)) {
    try {
      const text = cubeSolverScramble(type);
      return { text, source: "training", type };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Scramble generation failed";
      throw createScrambleError(
        "GENERATION_FAILED",
        message,
        FALLBACK_SCRAMBLE,
      );
    }
  }

  throw createScrambleError(
    "UNSUPPORTED_TYPE",
    `Unsupported scramble type: ${type}`,
  );
}

export function prefetchScramble(type: TimerScrambleType): void {
  if (type !== "3x3") return;
  void fetch("/api/scramble", { cache: "no-store" }).catch(() => {
    // Prefetch is best-effort.
  });
}

export function createScrambleError(
  code: ScrambleError["code"],
  message: string,
  fallback?: string,
): ScrambleError {
  return { code, message, fallback };
}

export function scrambleSourceForType(type: TimerScrambleType): ScrambleSource {
  return type === "3x3" ? "wca" : "training";
}
