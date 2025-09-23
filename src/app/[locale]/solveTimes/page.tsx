"use client";

import PageHeader from "@/components/layout/PageHeader";
import { useSolveStats } from "@/hooks/useSolveStats";
import { useTranslations } from "next-intl";
import { TrashIcon } from "lucide-react";

export default function SolveTimesPage() {
  const t = useTranslations("solveTimes");
  const { solveTimes, deleteSolveTime, format } = useSolveStats();

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <PageHeader title={t("title")} />
      {solveTimes.length === 0 ? (
        <div className="text-gray-500">{t("noSolves")}</div>
      ) : (
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="w-full border-collapse ">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-2 text-left w-8">#</th>
                <th className="py-2 px-2 text-left w-20">{t("time")}</th>
                <th className="py-2 px-2 text-left w-2/3">{t("scramble")}</th>
                <th className="py-2 px-2 text-left w-12">{t("action")}</th>
              </tr>
            </thead>
            <tbody>
              {solveTimes.map((solve, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-2 px-2">{idx + 1}</td>
                  <td className="py-2 px-2 font-mono">{format(solve.time)}</td>
                  <td
                    className="py-2 px-2 font-mono text-xs sm:text-sm text-gray-600 whitespace-normal break-words max-w-[300px]"
                    title={solve.scramble}
                  >
                    {solve.scramble}
                  </td>
                  <td className="py-2 px-2">
                    <button
                      className="text-red-500 hover:text-red-700 p-1"
                      aria-label={t("delete")}
                      onClick={() => deleteSolveTime(idx)}
                    >
                      <TrashIcon className="h-4 w-4 " />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
