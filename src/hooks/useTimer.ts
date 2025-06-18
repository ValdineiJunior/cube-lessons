import { useState, useEffect, useCallback } from "react";
import {
  TIMER_INCREMENT_MS,
  TIMER_UPDATE_INTERVAL_MS,
  MIN_HOLD_DURATION_MS,
  MAX_PROGRESS_PERCENTAGE,
} from "../constants/time";

interface UseTimerReturn {
  time: number;
  isRunning: boolean;
  holdProgress: number;
  holdStartTime: number | null;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  startHold: () => void;
  endHold: () => void;
}

export function useTimer(): UseTimerReturn {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [holdStartTime, setHoldStartTime] = useState<number | null>(null);
  const [hasReset, setHasReset] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + TIMER_INCREMENT_MS);
      }, TIMER_UPDATE_INTERVAL_MS);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = useCallback(() => {
    setTime(0);
    setHasReset(true);
  }, []);

  const startHold = () => {
    if (!isRunning && !holdStartTime) {
      setHoldStartTime(Date.now());
      setHasReset(false);
      setHoldProgress(0);
    }
  };

  const endHold = () => {
    setHoldStartTime(null);
    setHasReset(false);
    setHoldProgress(0);
  };

  const checkHoldTime = useCallback(() => {
    if (holdStartTime && !hasReset) {
      const holdDuration = Date.now() - holdStartTime;
      const progress = Math.min(
        (holdDuration / MIN_HOLD_DURATION_MS) * MAX_PROGRESS_PERCENTAGE,
        MAX_PROGRESS_PERCENTAGE,
      );
      setHoldProgress(progress);

      if (holdDuration >= MIN_HOLD_DURATION_MS) {
        resetTimer();
      }
    }
  }, [holdStartTime, hasReset, resetTimer]);

  useEffect(() => {
    const intervalId = setInterval(checkHoldTime, 10);
    return () => clearInterval(intervalId);
  }, [checkHoldTime]);

  return {
    time,
    isRunning,
    holdProgress,
    holdStartTime,
    startTimer,
    stopTimer,
    resetTimer,
    startHold,
    endHold,
  };
}
