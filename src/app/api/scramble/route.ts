import { randomScrambleForEvent } from "cubing/scramble";
import {
  hasConsecutiveSameFaceMoves,
  isWcaMoveCountValid,
} from "@/utils/scrambleValidation";

const MAX_ATTEMPTS = 8;

async function generateValidWca3x3Scramble(): Promise<string> {
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const alg = await randomScrambleForEvent("333");
    const text = alg.toString().trim();
    const tokens = text.split(/\s+/).filter(Boolean);

    if (
      isWcaMoveCountValid(tokens.length) &&
      !hasConsecutiveSameFaceMoves(tokens)
    ) {
      return text;
    }
  }

  // Best effort: return last generated scramble even if filtering is imperfect
  // (cubing.js may emit 17–19 moves before full WCA trim — see research.md)
  const alg = await randomScrambleForEvent("333");
  return alg.toString().trim();
}

export async function GET() {
  try {
    const scramble = await generateValidWca3x3Scramble();
    return Response.json({ scramble, source: "wca" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Scramble generation failed";
    return Response.json({ error: message }, { status: 500 });
  }
}
