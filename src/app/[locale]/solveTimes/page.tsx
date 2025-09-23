"use client";

import PageHeader from "@/components/layout/PageHeader";
import { useSolveStats } from "@/hooks/useSolveStats";
import { useTranslations } from "next-intl";

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
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">#</th>
                <th className="py-2 px-4 text-left">{t("time")}</th>
                <th className="py-2 px-4 text-left">{t("scramble")}</th>
                <th className="py-2 px-4 text-left">{t("action")}</th>
              </tr>
            </thead>
            <tbody>
              {solveTimes.map((solve, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-2 px-4">{idx + 1}</td>
                  <td className="py-2 px-4 font-mono">{format(solve.time)}</td>
                  <td
                    className="py-2 px-4 font-mono text-sm text-gray-600 max-w-xs truncate"
                    title={solve.scramble}
                  >
                    {solve.scramble}
                  </td>
                  <td className="py-2 px-4">
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => deleteSolveTime(idx)}
                    >
                      {t("delete")}
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
