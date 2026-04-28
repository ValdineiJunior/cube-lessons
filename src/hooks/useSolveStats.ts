import { useCallback, useSyncExternalStore } from "react";
import { formatTime } from "../utils/timeUtils";

const STORAGE_KEY = "cube-solve-times";

interface SolveTime {
  time: number;
  scramble: string;
}

const EMPTY_SOLVE_TIMES: SolveTime[] = [];

function parseSolveTimes(stored: string | null): SolveTime[] {
  if (!stored) return [];
  try {
    const parsed = JSON.parse(stored);
    if (
      Array.isArray(parsed) &&
      parsed.every(
        (item: unknown) =>
          item &&
          typeof item === "object" &&
          "time" in item &&
          "scramble" in item &&
          typeof (item as SolveTime).time === "number" &&
          typeof (item as SolveTime).scramble === "string",
      )
    ) {
      return parsed;
    }
  } catch {
    // Ignore parse errors
  }
  return [];
}

// Store for solve times using useSyncExternalStore pattern
let solveTimesCache: SolveTime[] = [];
let listeners: Array<() => void> = [];

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot(): SolveTime[] {
  return solveTimesCache;
}

function getServerSnapshot(): SolveTime[] {
  return EMPTY_SOLVE_TIMES;
}

function initializeFromStorage() {
  if (typeof window !== "undefined" && solveTimesCache.length === 0) {
    const stored = localStorage.getItem(STORAGE_KEY);
    solveTimesCache = parseSolveTimes(stored);
  }
}

function updateSolveTimes(newTimes: SolveTime[]) {
  solveTimesCache = newTimes;
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTimes));
  }
  emitChange();
}

export function useSolveStats() {
  // Initialize from storage on first client render
  initializeFromStorage();

  const solveTimes = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // Add a new solve time with scramble
  const addSolveTime = useCallback((time: number, scramble: string) => {
    updateSolveTimes([...solveTimesCache, { time, scramble }]);
  }, []);

  // Delete a solve time by index
  const deleteSolveTime = useCallback((index: number) => {
    updateSolveTimes(solveTimesCache.filter((_, i) => i !== index));
  }, []);

  // Format helper
  function format(time: number) {
    return formatTime(time);
  }

  // Stats calculations
  const times = solveTimes.map((solve) => solve.time);
  const best = times.length ? Math.min(...times) : null;
  const worst = times.length ? Math.max(...times) : null;
  function averageOf(n: number) {
    if (times.length < n) return null;
    const lastN = times.slice(-n);

    // Special trimmed averages for cube timing
    let trimmed: number[] = [...lastN].sort((a, b) => a - b);

    if (n === 5) {
      // Drop lowest 1 and highest 1 -> average remaining 3
      trimmed = trimmed.slice(1, trimmed.length - 1);
    } else if (n === 12) {
      // Drop lowest 1 and highest 1 -> average remaining 10
      trimmed = trimmed.slice(1, trimmed.length - 1);
    } else if (n >= 100) {
      // Drop 5% lowest and 5% highest
      const dropEachSide = Math.floor(n * 0.05);
      trimmed = trimmed.slice(dropEachSide, trimmed.length - dropEachSide);
    }

    if (trimmed.length === 0) return null;
    const sum = trimmed.reduce((a, b) => a + b, 0);
    return sum / trimmed.length;
  }

  const baseStats = [
    { label: "Best time", value: best !== null ? format(best) : "N/A" },
    { label: "Worst time", value: worst !== null ? format(worst) : "N/A" },
    { label: "Number of solutions", value: solveTimes.length },
  ];

  // Include specific averages: Ao5, Ao12, Ao100
  const ao5 = averageOf(5);
  const ao12 = averageOf(12);
  const ao100 = averageOf(100);

  const stats = [
    baseStats[0],
    baseStats[1],
    ...(ao5 !== null ? [{ label: "Average of 5", value: format(ao5) }] : []),
    ...(ao12 !== null ? [{ label: "Average of 12", value: format(ao12) }] : []),
    ...(ao100 !== null
      ? [{ label: "Average of 100", value: format(ao100) }]
      : []),
    baseStats[2],
  ];

  return {
    solveTimes,
    addSolveTime,
    deleteSolveTime,
    stats,
    format,
  };
}
