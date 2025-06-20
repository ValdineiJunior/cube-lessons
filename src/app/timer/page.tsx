import { Timer } from "@/components/Timer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timer - Cube Lessons",
  description: "Acompanhe seus tempos de resolução do Cubo Mágico",
};

export default function TimerPage() {
  return <Timer />;
}
