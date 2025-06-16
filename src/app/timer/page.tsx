import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timer - Cube Lessons",
  description: "Acompanhe seus tempos de resolução do Cubo Mágico",
};

export default function TimerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
          Timer
        </h1>
        <div className="text-6xl font-mono font-bold mb-8">00:00.00</div>
      </div>
    </div>
  );
}
