import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Cube Lessons - Aprenda o Cubo Mágico",
  description:
    "Aprenda a resolver o Cubo Mágico com tutoriais passo a passo, do básico ao avançado.",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Aprenda o Cubo Mágico
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Descubra os segredos do quebra-cabeça mais famoso do mundo. Do básico
          ao avançado, aprenda métodos passo a passo para resolver o Cubo Mágico
          com confiança.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="text-blue-600 text-4xl mb-4">🎯</div>
            <CardTitle className="text-xl">
              Primeiras Duas Camadas (F2L)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Domine o método eficiente de resolver as duas primeiras camadas
              simultaneamente, reduzindo significativamente seu tempo de
              resolução.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="text-blue-600 text-4xl mb-4">✨</div>
            <CardTitle className="text-xl">
              Orientação da Última Camada (OLL)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Aprenda os algoritmos para orientar todas as peças da última
              camada, criando uma face superior uniforme.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="text-blue-600 text-4xl mb-4">🎨</div>
            <CardTitle className="text-xl">
              Permutação da Última Camada (PLL)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Complete sua resolução aprendendo como permutar as peças da última
              camada em suas posições corretas.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="text-blue-600 text-4xl mb-4">🧩</div>
            <CardTitle className="text-xl">Peças do Cubo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Conheça todas as peças que compõem o Cubo Mágico e entenda como
              elas se movem e interagem entre si.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="text-blue-600 text-4xl mb-4">🔄</div>
            <CardTitle className="text-xl">Movimentos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Aprenda a notação dos movimentos e como executá-los corretamente
              para resolver o cubo de forma eficiente.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="text-blue-600 text-4xl mb-4">⏱️</div>
            <CardTitle className="text-xl">Time Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Acompanhe seu progresso e melhore seus tempos com nosso sistema de
              cronometragem e análise de resoluções.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
