"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { generateScrambleAsync, prefetchScramble } from "@/lib/scrambleService";
import {
  FALLBACK_SCRAMBLE,
  type ScrambleError,
  type ScrambleStatus,
  type TimerScrambleType,
} from "@/types/scramble";

export type UseScrambleReturn = {
  scramble: string;
  status: ScrambleStatus;
  error: ScrambleError | null;
  scrambleType: TimerScrambleType;
  setScrambleType: (type: TimerScrambleType) => void;
  refresh: () => void;
};

export function useScramble(
  initialType: TimerScrambleType = "3x3",
): UseScrambleReturn {
  const [scrambleType, setScrambleTypeState] =
    useState<TimerScrambleType>(initialType);
  const [scramble, setScramble] = useState("");
  const [status, setStatus] = useState<ScrambleStatus>("loading");
  const [error, setError] = useState<ScrambleError | null>(null);
  const [revision, setRevision] = useState(0);
  const requestIdRef = useRef(0);

  const loadScramble = useCallback(
    async (type: TimerScrambleType, requestId: number) => {
      setStatus("loading");
      setError(null);

      try {
        const result = await generateScrambleAsync({ type, requestId });
        if (requestIdRef.current !== requestId) return;

        setScramble(result.text);
        setStatus("ready");

        if (type === "3x3") {
          prefetchScramble("3x3");
        }
      } catch (err) {
        if (requestIdRef.current !== requestId) return;

        const scrambleError =
          err && typeof err === "object" && "code" in err
            ? (err as ScrambleError)
            : {
                code: "GENERATION_FAILED" as const,
                message:
                  err instanceof Error
                    ? err.message
                    : "Scramble generation failed",
                fallback: FALLBACK_SCRAMBLE,
              };

        setScramble(scrambleError.fallback ?? FALLBACK_SCRAMBLE);
        setStatus("error");
        setError(scrambleError);
      }
    },
    [],
  );

  useEffect(() => {
    const requestId = ++requestIdRef.current;
    void loadScramble(scrambleType, requestId);
  }, [scrambleType, revision, loadScramble]);

  const setScrambleType = useCallback((type: TimerScrambleType) => {
    setScrambleTypeState(type);
  }, []);

  const refresh = useCallback(() => {
    setRevision((r) => r + 1);
  }, []);

  return {
    scramble,
    status,
    error,
    scrambleType,
    setScrambleType,
    refresh,
  };
}
