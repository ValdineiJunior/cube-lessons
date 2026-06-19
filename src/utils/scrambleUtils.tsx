import { cubeCasesOrientationLastLayer } from "../data/cubeCasesOrientationLastLayer";
import { cubeCasesPermutationLastLayer } from "@/data/cubeCasesPermutationLastLayer";
import { generateScrambleAsync } from "@/lib/scrambleService";
import { FALLBACK_SCRAMBLE } from "@/types/scramble";

export async function generateScramble(): Promise<string> {
  try {
    const result = await generateScrambleAsync({ type: "3x3", requestId: 0 });
    return result.text;
  } catch (error) {
    console.error("Error generating scramble:", error);
    return FALLBACK_SCRAMBLE;
  }
}

function getInverseMoves(caseMoves: string): string[] {
  return caseMoves
    .trim()
    .split(/\s+/)
    .reverse()
    .map((move) => {
      if (move.endsWith("'")) return move.replace("'", "");
      if (move.endsWith("2")) return move;
      return move + "'";
    });
}

export function generateF2LCaseScramble(caseMoves: string): string {
  const inverseMoves = getInverseMoves(caseMoves);
  const randomIdx = Math.floor(
    Math.random() * cubeCasesOrientationLastLayer.length,
  );
  const randomCase = cubeCasesOrientationLastLayer[randomIdx];
  const lastLayerMoves = randomCase.moves;
  return [lastLayerMoves, ...inverseMoves].join(" ");
}

export function generateOLLCaseScramble(caseMoves: string): string {
  const inverseMoves = getInverseMoves(caseMoves);
  const randomIdx = Math.floor(
    Math.random() * cubeCasesPermutationLastLayer.length,
  );
  const randomCase = cubeCasesPermutationLastLayer[randomIdx];
  const lastLayerMoves = randomCase.moves;
  return [lastLayerMoves, ...inverseMoves].join(" ");
}

export function generatePLLCaseScramble(caseMoves: string): string {
  const inverseMoves = getInverseMoves(caseMoves);
  return inverseMoves.join(" ");
}
