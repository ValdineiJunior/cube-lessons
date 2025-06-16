import { Metadata } from "next";

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
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-blue-600 text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold mb-3">
            Primeiras Duas Camadas (F2L)
          </h3>
          <p className="text-gray-600">
            Domine o método eficiente de resolver as duas primeiras camadas
            simultaneamente, reduzindo significativamente seu tempo de
            resolução.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-blue-600 text-4xl mb-4">✨</div>
          <h3 className="text-xl font-semibold mb-3">
            Orientação da Última Camada (OLL)
          </h3>
          <p className="text-gray-600">
            Aprenda os algoritmos para orientar todas as peças da última camada,
            criando uma face superior uniforme.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-blue-600 text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-3">
            Permutação da Última Camada (PLL)
          </h3>
          <p className="text-gray-600">
            Complete sua resolução aprendendo como permutar as peças da última
            camada em suas posições corretas.
          </p>
        </div>
      </div>
    </div>
  );
}
