"use client";

import { useSolveStats } from "../../hooks/useSolveStats";

export default function SolveTimesPage() {
  const { solveTimes, deleteSolveTime, format } = useSolveStats();

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Solve Times
      </h1>
      {solveTimes.length === 0 ? (
        <div className="text-gray-500">No solves recorded yet.</div>
      ) : (
        <table className="w-full max-w-xl border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Time</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {solveTimes.map((time, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-2 px-4">{idx + 1}</td>
                <td className="py-2 px-4 font-mono">{format(time)}</td>
                <td className="py-2 px-4">
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => deleteSolveTime(idx)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
