"use client";

import { useRef, useEffect, useState } from "react";
import { formatTime } from "../utils/timeUtils";
import { useIsMobile } from "../hooks/useIsMobile";
import { useTimer } from "../hooks/useTimer";
import { useTimerControls } from "../hooks/useTimerControls";
import { useSolveStats } from "../hooks/useSolveStats";
import PageHeader from "./layout/PageHeader";

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

  // --- Use custom hook for solve stats ---
  const { addSolveTime, stats } = useSolveStats();
  const [prevIsRunning, setPrevIsRunning] = useState(false);

  // Detect when timer stops and save the time
  useEffect(() => {
    if (prevIsRunning && !isRunning && time > 0) {
      addSolveTime(time);
    }
    setPrevIsRunning(isRunning);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning]);

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
        <PageHeader title="Timer" />
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
