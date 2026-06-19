export function getMoveFace(token: string): string | null {
  const match = token.match(/^([URFDLB])/);
  return match?.[1] ?? null;
}

export function hasConsecutiveSameFaceMoves(tokens: string[]): boolean {
  for (let i = 1; i < tokens.length; i++) {
    const prev = getMoveFace(tokens[i - 1]);
    const curr = getMoveFace(tokens[i]);
    if (prev && curr && prev === curr) return true;
  }
  return false;
}

export function isWcaMoveCountValid(moveCount: number): boolean {
  return moveCount >= 20 && moveCount <= 25;
}

export function validateWca3x3Scramble(scramble: string): {
  valid: boolean;
  moveCount: number;
  sameFaceConsecutive: boolean;
  moveCountValid: boolean;
} {
  const tokens = scramble.trim().split(/\s+/).filter(Boolean);
  const moveCount = tokens.length;
  const sameFaceConsecutive = hasConsecutiveSameFaceMoves(tokens);
  const moveCountValid = isWcaMoveCountValid(moveCount);
  return {
    valid: moveCountValid && !sameFaceConsecutive,
    moveCount,
    sameFaceConsecutive,
    moveCountValid,
  };
}
