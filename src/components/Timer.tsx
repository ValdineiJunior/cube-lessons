"use client";

import { useRef, useEffect, useState } from "react";
import { formatTime } from "../utils/timeUtils";
import PageHeader from "./layout/PageHeader";
import { useIsMobile } from "../hooks/useIsMobile";
import { useTimer } from "../hooks/useTimer";
import { useTimerControls } from "../hooks/useTimerControls";
import { useSolveStats } from "../hooks/useSolveStats";
import { generateScramble } from "../utils/scrambleUtils";

import { useTranslations } from "next-intl";

export function Timer() {
  const isMobile = useIsMobile();
  const t = useTranslations("timer");
  const timerRef = useRef<HTMLDivElement>(null);
  const [currentScramble, setCurrentScramble] = useState<string>("");
  const [isHydrated, setIsHydrated] = useState(false);

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

  // Generate initial scramble only on client side after hydration
  useEffect(() => {
    setIsHydrated(true);
    setCurrentScramble(generateScramble());
  }, []);

  // Detect when timer stops and save the time, also generate new scramble
  useEffect(() => {
    if (prevIsRunning && !isRunning && time > 0) {
      addSolveTime(time, currentScramble);
      // Generate new scramble when timer stops
      setCurrentScramble(generateScramble());
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
        <PageHeader title={t("title")} />
        {/* --- Stats display --- */}
        <div className="mb-8 flex flex-col items-center gap-1">
          {stats.map((stat) => (
            <div key={stat.label} className="text-base text-gray-700">
              <span className="font-semibold">{stat.label}:</span> {stat.value}
            </div>
          ))}
        </div>
        <p className="text-lg font-mono mb-4">
          {isHydrated ? currentScramble : t("generatingScramble")}
        </p>

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
            <p>{isMobile ? t("stopMobile") : t("stopDesktop")}</p>
          ) : (
            <p>{isMobile ? t("prepareMobile") : t("prepareDesktop")}</p>
          )}
        </div>
      </div>
    </div>
  );
}
