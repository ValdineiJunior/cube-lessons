import { useState, useCallback, useEffect } from "react";
import { formatTime } from "../utils/timeUtils";

const STORAGE_KEY = "cube-solve-times";

interface SolveTime {
  time: number;
  scramble: string;
}

export function useSolveStats() {
  const [solveTimes, setSolveTimes] = useState<SolveTime[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on client only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (
            Array.isArray(parsed) &&
            parsed.every(
              (item: any) =>
                item &&
                typeof item.time === "number" &&
                typeof item.scramble === "string",
            )
          ) {
            setSolveTimes(parsed);
          }
        } catch (e) {
          // Ignore parse errors
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever solveTimes changes (after initial load)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(solveTimes));
    }
  }, [solveTimes, isLoaded]);

  // Add a new solve time with scramble
  const addSolveTime = useCallback((time: number, scramble: string) => {
    setSolveTimes((prev) => [...prev, { time, scramble }]);
  }, []);

  // Delete a solve time by index
  const deleteSolveTime = useCallback((index: number) => {
    setSolveTimes((prev) => prev.filter((_, i) => i !== index));
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
