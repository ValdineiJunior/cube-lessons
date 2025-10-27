"use client";

import { useRef, useEffect, useState } from "react";
import { formatTime } from "../utils/timeUtils";
import PageHeader from "./layout/PageHeader";
import { useIsMobile } from "../hooks/useIsMobile";
import { useTimer } from "../hooks/useTimer";
import { useTimerControls } from "../hooks/useTimerControls";
import { useSolveStats } from "../hooks/useSolveStats";
import { scramble } from "cube-solver";

import { useTranslations } from "next-intl";

type Scrambler =
  | "3x3"
  | "2gll"
  | "cmll"
  | "corners"
  | "edges"
  | "lse"
  | "lsll"
  | "pll"
  | "zbll"
  | "zzls";

const SCRAMBLE_DESCRIPTIONS: Record<Scrambler, string> = {
  "3x3": "Standard 3x3 scramble for general practice.",
  "2gll": "2GLL: Last layer corners oriented, practice corner permutation.",
  cmll: "CMLL: Corners of the last layer, used in Roux method.",
  corners: "Corners: Scramble for practicing only corner pieces.",
  edges: "Edges: Scramble for practicing only edge pieces.",
  lse: "LSE: Last six edges, Roux method.",
  lsll: "LSLL: Last slot and last layer.",
  pll: "PLL: Permute last layer pieces.",
  zbll: "ZBLL: All last layer cases with oriented edges.",
  zzls: "ZZLS: ZZ method last slot.",
};

export function Timer() {
  const isMobile = useIsMobile();
  const t = useTranslations("timer");
  const timerRef = useRef<HTMLDivElement>(null);
  const [currentScramble, setCurrentScramble] = useState<string>("");
  const [scrambleType, setScrambleType] = useState<Scrambler>("3x3");
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
    setCurrentScramble(scramble(scrambleType));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrambleType]);

  // Regenerate scramble when scrambleType changes
  useEffect(() => {
    if (isHydrated) {
      setCurrentScramble(scramble(scrambleType));
    }
  }, [scrambleType, isHydrated]);

  // Detect when timer stops and save the time, also generate new scramble
  useEffect(() => {
    if (prevIsRunning && !isRunning && time > 0) {
      addSolveTime(time, currentScramble);
      // Generate new scramble when timer stops
      setCurrentScramble(scramble(scrambleType));
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
    <div className="select-none touch-none">
      <div className="text-center">
        {/* Scramble type select and description */}
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
            onChange={(e) => setScrambleType(e.target.value as Scrambler)}
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
        </div>

        <div ref={timerRef}>
          {/* --- Stats display --- */}
          <div className="mb-8 flex flex-col items-center gap-1">
            {stats.map((stat) => (
              <div key={stat.label} className="text-base text-gray-700">
                <span className="font-semibold">{stat.label}:</span>{" "}
                {stat.value}
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
              className={`h-full transition-none ${
                holdProgress >= 100 ? "bg-green-500" : "bg-blue-500"
              }`}
              style={{
                width: `${holdProgress}%`,
                willChange: "width",
              }}
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
    </div>
  );
}
