import { useEffect } from "react";
import { MIN_HOLD_DURATION_MS } from "../constants/time";

interface UseTimerControlsProps {
  timerRef: React.RefObject<HTMLDivElement | null>;
  isRunning: boolean;
  holdStartTime: number | null;
  startTimer: () => void;
  stopTimer: () => void;
  startHold: () => void;
  endHold: () => void;
}

export function useTimerControls({
  timerRef,
  isRunning,
  holdStartTime,
  startTimer,
  stopTimer,
  startHold,
  endHold,
}: UseTimerControlsProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (isRunning) {
          stopTimer();
        } else {
          startHold();
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        const holdDuration = holdStartTime ? Date.now() - holdStartTime : 0;

        if (holdDuration >= MIN_HOLD_DURATION_MS) {
          startTimer();
        } else if (isRunning) {
          stopTimer();
        }
        endHold();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      event.preventDefault();
      if (isRunning) {
        stopTimer();
      } else {
        startHold();
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      event.preventDefault();
      const holdDuration = holdStartTime ? Date.now() - holdStartTime : 0;

      if (holdDuration >= MIN_HOLD_DURATION_MS) {
        startTimer();
      } else if (isRunning) {
        stopTimer();
      }
      endHold();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    const timerElement = timerRef.current;
    if (timerElement) {
      timerElement.addEventListener("touchstart", handleTouchStart);
      timerElement.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      if (timerElement) {
        timerElement.removeEventListener("touchstart", handleTouchStart);
        timerElement.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [
    isRunning,
    holdStartTime,
    startTimer,
    stopTimer,
    startHold,
    endHold,
    timerRef,
  ]);
}
