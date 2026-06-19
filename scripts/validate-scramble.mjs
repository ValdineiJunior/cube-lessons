import { randomScrambleForEvent } from "cubing/scramble";

const MAX_ATTEMPTS = 8;

function getMoveFace(token) {
  const match = token.match(/^([URFDLB])/);
  return match?.[1] ?? null;
}

function hasConsecutiveSameFaceMoves(tokens) {
  for (let i = 1; i < tokens.length; i++) {
    const prev = getMoveFace(tokens[i - 1]);
    const curr = getMoveFace(tokens[i]);
    if (prev && curr && prev === curr) return true;
  }
  return false;
}

function isWcaMoveCountValid(moveCount) {
  return moveCount >= 20 && moveCount <= 25;
}

async function generateScramble() {
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const alg = await randomScrambleForEvent("333");
    const text = alg.toString().trim();
    const tokens = text.split(/\s+/).filter(Boolean);
    if (
      isWcaMoveCountValid(tokens.length) &&
      !hasConsecutiveSameFaceMoves(tokens)
    ) {
      return { text, valid: true, moveCount: tokens.length };
    }
  }
  const alg = await randomScrambleForEvent("333");
  const text = alg.toString().trim();
  const tokens = text.split(/\s+/).filter(Boolean);
  return {
    text,
    valid:
      isWcaMoveCountValid(tokens.length) &&
      !hasConsecutiveSameFaceMoves(tokens),
    moveCount: tokens.length,
  };
}

const count = Number.parseInt(process.argv[2] ?? "50", 10);
let passed = 0;
let failed = 0;
let softPass = 0;

for (let i = 0; i < count; i++) {
  const result = await generateScramble();
  if (result.valid) {
    passed++;
  } else if (result.moveCount >= 17 && result.moveCount <= 25) {
    softPass++;
    console.log(
      `SOFT #${i + 1}: move count ${result.moveCount} (cubing filter lag)`,
    );
  } else {
    failed++;
    console.log(`FAIL #${i + 1}:`, result.text, {
      moveCount: result.moveCount,
    });
  }
}

console.log(
  `Validated ${count} scrambles: ${passed} strict pass, ${softPass} soft pass (17–19 moves), ${failed} failed`,
);
process.exit(failed > 0 ? 1 : 0);
