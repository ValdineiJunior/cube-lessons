import { useState, useCallback } from "react";
import { formatTime } from "../utils/timeUtils";

export function useSolveStats() {
  const [solveTimes, setSolveTimes] = useState<number[]>([]);

  // Add a new solve time
  const addSolveTime = useCallback((time: number) => {
    setSolveTimes((prev) => [...prev, time]);
  }, []);

  // Format helper
  function format(time: number) {
    return formatTime(time);
  }

  // Stats calculations
  const best = solveTimes.length ? Math.min(...solveTimes) : null;
  const worst = solveTimes.length ? Math.max(...solveTimes) : null;
  function averageOf(n: number) {
    if (solveTimes.length < n) return null;
    const lastN = solveTimes.slice(-n);
    const sum = lastN.reduce((a, b) => a + b, 0);
    return sum / n;
  }

  const stats = [
    { label: "Best time", value: best !== null ? format(best) : "N/A" },
    { label: "Worst time", value: worst !== null ? format(worst) : "N/A" },
    {
      label: "Average of 5",
      value: averageOf(5) ? format(averageOf(5)!) : "N/A",
    },
    {
      label: "Average of 12",
      value: averageOf(12) ? format(averageOf(12)!) : "N/A",
    },
    {
      label: "Average of 50",
      value: averageOf(50) ? format(averageOf(50)!) : "N/A",
    },
    {
      label: "Average of 100",
      value: averageOf(100) ? format(averageOf(100)!) : "N/A",
    },
    {
      label: "Average of 1000",
      value: averageOf(1000) ? format(averageOf(1000)!) : "N/A",
    },
    { label: "Number of solutions", value: solveTimes.length },
  ];

  return {
    solveTimes,
    addSolveTime,
    stats,
    format,
  };
}
