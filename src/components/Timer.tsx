"use client";

import { useCallback, useRef } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { useTimer } from "../hooks/useTimer";
import { useTimerControls } from "../hooks/useTimerControls";
import { useSolveStats } from "../hooks/useSolveStats";
import { useScramble } from "../hooks/useScramble";
import {
  SCRAMBLE_DESCRIPTIONS,
  type TimerScrambleType,
} from "@/types/scramble";
import { formatTime } from "../utils/timeUtils";
import { useTranslations } from "next-intl";

export function Timer() {
  const isMobile = useIsMobile();
  const t = useTranslations("timer");
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

  const { addSolveTime, stats } = useSolveStats();
  const {
    scramble: currentScramble,
    status: scrambleStatus,
    error: scrambleError,
    scrambleType,
    setScrambleType,
    refresh: refreshScramble,
  } = useScramble("3x3");

  const handleStopTimer = useCallback(() => {
    if (isRunning && time > 0 && scrambleStatus === "ready") {
      addSolveTime(time, currentScramble);
      refreshScramble();
    }
    stopTimer();
  }, [
    isRunning,
    time,
    currentScramble,
    scrambleStatus,
    addSolveTime,
    refreshScramble,
    stopTimer,
  ]);

  useTimerControls({
    timerRef,
    isRunning,
    holdStartTime,
    startTimer,
    stopTimer: handleStopTimer,
    startHold,
    endHold,
  });

  const scrambleDisplay =
    scrambleStatus === "loading"
      ? t("generatingScramble")
      : scrambleStatus === "error"
        ? (scrambleError?.fallback ?? currentScramble)
        : currentScramble;

  return (
    <div className="select-none touch-none flex-1 flex flex-col min-h-0">
      <div className="text-center flex flex-col flex-1 min-h-0">
        <div className="mb-4 flex flex-col items-center">
          <label
            htmlFor="scrambleType"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Scramble Type:
          </label>
          <select
            id="scrambleType"
            value={scrambleType}
            onChange={(e) =>
              setScrambleType(e.target.value as TimerScrambleType)
            }
            className="mb-2 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {Object.keys(SCRAMBLE_DESCRIPTIONS).map((type) => (
              <option key={type} value={type}>
                {type.toUpperCase()}
              </option>
            ))}
          </select>
          <div className="text-xs text-gray-500 text-center max-w-md">
            {SCRAMBLE_DESCRIPTIONS[scrambleType]}
          </div>
          <p className="mt-2 text-xs text-gray-400 max-w-md">
            {t("wcaDisclaimer")}
          </p>
        </div>

        <div ref={timerRef} className="flex-1">
          <div className="mb-4 flex flex-col items-center gap-1">
            {stats.map((stat) => (
              <div key={stat.label} className="text-base text-gray-700">
                <span className="text-sm font-semibold">{stat.label}:</span>{" "}
                {stat.value}
              </div>
            ))}
          </div>
          <p className="font-mono mb-4">{scrambleDisplay}</p>
          {scrambleStatus === "error" && (
            <p className="text-xs text-amber-700 mb-2">{t("scrambleError")}</p>
          )}

          <div className="text-5xl font-mono font-bold mb-4">
            {formatTime(time)}
          </div>
          <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
            <div
              className={`h-full transition-none ${
                holdProgress >= 100 ? "bg-green-500" : "bg-blue-500"
              }`}
              style={{
                width: `${holdProgress}%`,
                willChange: "width",
              }}
            />
          </div>
          <div className="text-xs text-gray-600 mb-4">
            {isRunning ? (
              <p>{isMobile ? t("stopMobile") : t("stopDesktop")}</p>
            ) : (
              <p>{isMobile ? t("prepareMobile") : t("prepareDesktop")}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
