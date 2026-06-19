# Contract: Scramble Service

**Feature**: `001-wca-scramble-integration`  
**Consumers**: `Timer.tsx`, optional `scrambleUtils.generateScramble`

## Purpose

Single entry point for timer scramble generation with async WCA 3x3 and synchronous training subsets.

## Types

```typescript
type ScrambleSource = "wca" | "training";

type ScrambleRequest = {
  type: TimerScrambleType;
  /** Monotonic token; stale responses MUST be discarded */
  requestId: number;
};

type ScrambleResult = {
  text: string;
  source: ScrambleSource;
  type: TimerScrambleType;
};

type ScrambleError = {
  code: "GENERATION_FAILED" | "UNSUPPORTED_TYPE" | "CANCELLED";
  message: string;
  fallback?: string;
};
```

## API

### `generateScrambleAsync(request: ScrambleRequest): Promise<ScrambleResult>`

**Behavior**:

| `type`         | Implementation                                     | Blocking                |
| -------------- | -------------------------------------------------- | ----------------------- |
| `3x3`          | `randomScrambleForEvent("333")` → `Alg.toString()` | Non-blocking (worker)   |
| training types | `cube-solver` `scramble(type)`                     | Sync wrapped in Promise |

**Post-conditions (3x3)**:

- Result `text` has 20–25 moves (best effort per library; validate in smoke tests)
- No consecutive same-face moves
- `source === 'wca'`

**Error handling**:

- On failure, reject with `ScrambleError` or resolve with documented fallback scramble (matches current `generateScramble` fallback pattern)
- MUST NOT throw unhandled exceptions to React render path

### `prefetchScramble(type: TimerScrambleType): void`

**Behavior**:

- For `3x3` only: invoke cubing.js prefetch so next scramble is warm
- No-op for training types
- Safe to call after displaying current scramble

## Hook Contract: `useScramble(initialType)`

```typescript
type ScrambleStatus = "loading" | "ready" | "error";

type UseScrambleReturn = {
  scramble: string;
  status: ScrambleStatus;
  error: ScrambleError | null;
  scrambleType: TimerScrambleType;
  setScrambleType: (type: TimerScrambleType) => void;
  refresh: () => void;
};
```

**Guarantees**:

1. `status === 'loading'` on type change until new result arrives
2. Stale async results discarded when `requestId` superseded
3. `refresh()` increments revision and triggers new generation (post-solve behavior)

## Non-Goals

- Lesson case scrambles (`generateF2LCaseScramble`, etc.)
- Server-side scramble API
- Persisting facelet strings on solve records
