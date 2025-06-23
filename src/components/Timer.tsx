"use client";

import { useRef, useEffect, useState } from "react";
import { formatTime } from "../utils/timeUtils";
import { useIsMobile } from "../hooks/useIsMobile";
import { useTimer } from "../hooks/useTimer";
import { useTimerControls } from "../hooks/useTimerControls";

export function Timer() {
  const isMobile = useIsMobile();
  const timerRef = useRef<HTMLDivElement>(null);
  const {
    time,
    isRunning,
    holdProgress,
    holdStartTime,
    startTimer,
    stopTimer,
    startHold,
    endHold,
  } = useTimer();

  // --- New state for solve times ---
  const [solveTimes, setSolveTimes] = useState<number[]>([]);
  const [prevIsRunning, setPrevIsRunning] = useState(false);

  // Detect when timer stops and save the time
  useEffect(() => {
    if (prevIsRunning && !isRunning && time > 0) {
      setSolveTimes((prev) => [...prev, time]);
    }
    setPrevIsRunning(isRunning);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning]);

  // --- Stats calculation helpers ---
  function format(time: number) {
    return formatTime(time);
  }
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

  useTimerControls({
    timerRef,
    isRunning,
    holdStartTime,
    startTimer,
    stopTimer,
    startHold,
    endHold,
  });

  return (
    <div className="min-h-screen select-none touch-none" ref={timerRef}>
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
          Timer
        </h1>
        {/* --- Stats display --- */}
        <div className="mb-8 flex flex-col items-center gap-1">
          {stats.map((stat) => (
            <div key={stat.label} className="text-base text-gray-700">
              <span className="font-semibold">{stat.label}:</span> {stat.value}
            </div>
          ))}
        </div>
        {/* --- Timer display --- */}
        <div className="text-6xl font-mono font-bold mb-8">
          {formatTime(time)}
        </div>
        <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto mb-8 overflow-hidden">
          <div
            className={`h-full transition-all duration-100 ${
              holdProgress >= 100 ? "bg-green-500" : "bg-blue-500"
            }`}
            style={{ width: `${holdProgress}%` }}
          />
        </div>
        <div className="text-sm text-gray-600 mb-8">
          {isRunning ? (
            <p>
              {isMobile
                ? "Clique na tela para parar o timer"
                : "Pressione espaço para parar o timer"}
            </p>
          ) : (
            <p>
              {isMobile
                ? "Pressione a tela por 1 segundo para preparar, solte para iniciar"
                : "Segure espaço por 1 segundo para preparar, solte para iniciar"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
