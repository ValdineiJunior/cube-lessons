"use client";

import { useEffect, useRef } from "react";
import { formatTime } from "../utils/timeUtils";
import { useIsMobile } from "../hooks/useIsMobile";
import { useTimer } from "../hooks/useTimer";

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

        if (holdDuration >= 1000) {
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

      if (holdDuration >= 1000) {
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
  }, [isRunning, holdStartTime, startTimer, stopTimer, startHold, endHold]);

  return (
    <div className="min-h-screen select-none touch-none" ref={timerRef}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            Timer
          </h1>
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
    </div>
  );
}
