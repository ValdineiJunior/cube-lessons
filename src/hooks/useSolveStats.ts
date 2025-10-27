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
    const sum = lastN.reduce((a, b) => a + b, 0);
    return sum / n;
  }

  // Define milestone averages: 1-5, 12, 50, 100, then every 100 from 200 onwards
  function getAverageMilestones() {
    const milestones: number[] = [1, 2, 3, 4, 5, 12, 50, 100];
    const solveCount = solveTimes.length;

    // Add increments of 100 from 200 onwards, up to the nearest 100 above current solve count
    const maxMilestone = Math.ceil(solveCount / 100) * 100;
    for (let i = 200; i <= maxMilestone; i += 100) {
      milestones.push(i);
    }

    // Only include milestones that are <= solveCount
    return milestones.filter((milestone) => milestone <= solveCount);
  }

  const baseStats = [
    { label: "Best time", value: best !== null ? format(best) : "N/A" },
    { label: "Worst time", value: worst !== null ? format(worst) : "N/A" },
    { label: "Number of solutions", value: solveTimes.length },
  ];

  const averageStats = getAverageMilestones()
    .map((milestone) => ({
      label: `Average of ${milestone}`,
      value: averageOf(milestone) ? format(averageOf(milestone)!) : "N/A",
    }))
    .filter((stat) => stat.value !== "N/A");

  // Only include the last (most recent) average
  const lastAverage =
    averageStats.length > 0 ? averageStats[averageStats.length - 1] : null;

  const stats = [
    baseStats[0],
    baseStats[1],
    ...(lastAverage ? [lastAverage] : []),
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
