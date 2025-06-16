"use client";

import { useState, useEffect } from "react";
import { formatTime } from "../utils/timeUtils";

export function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [holdStartTime, setHoldStartTime] = useState<number | null>(null);
  const [hasReset, setHasReset] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (isRunning) {
          // Stop the timer immediately if it's running
          setIsRunning(false);
        } else if (!holdStartTime) {
          // Only start the hold process if timer is not running
          setHoldStartTime(Date.now());
          setHasReset(false);
          setHoldProgress(0);
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        const holdDuration = holdStartTime ? Date.now() - holdStartTime : 0;

        if (holdDuration >= 1000) {
          // If held for 1 second, start the timer
          setIsRunning(true);
        } else if (isRunning) {
          // If not held long enough and timer is running, stop it
          setIsRunning(false);
        }

        setHoldStartTime(null);
        setHasReset(false);
        setHoldProgress(0);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      event.preventDefault();
      if (isRunning) {
        // Stop the timer immediately if it's running
        setIsRunning(false);
      } else if (!holdStartTime) {
        // Only start the hold process if timer is not running
        setHoldStartTime(Date.now());
        setHasReset(false);
        setHoldProgress(0);
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      event.preventDefault();
      const holdDuration = holdStartTime ? Date.now() - holdStartTime : 0;

      if (holdDuration >= 1000) {
        // If held for 1 second, start the timer
        setIsRunning(true);
      } else if (isRunning) {
        // If not held long enough and timer is running, stop it
        setIsRunning(false);
      }

      setHoldStartTime(null);
      setHasReset(false);
      setHoldProgress(0);
    };

    const checkHoldTime = () => {
      if (holdStartTime && !hasReset) {
        const holdDuration = Date.now() - holdStartTime;
        const progress = Math.min((holdDuration / 1000) * 100, 100);
        setHoldProgress(progress);

        if (holdDuration >= 1000) {
          // Reset timer after 1 second of holding
          setTime(0);
          setHasReset(true);
        }
      }
    };

    const intervalId = setInterval(checkHoldTime, 10);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      clearInterval(intervalId);
    };
  }, [holdStartTime, isRunning, hasReset]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  return (
    <div className="text-center select-none touch-none">
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
            Pressione espaço, toque na tela ou use o botão para parar o timer
          </p>
        ) : (
          <p>
            Segure espaço ou toque na tela por 1 segundo para preparar, solte
            para iniciar
          </p>
        )}
      </div>
    </div>
  );
}
