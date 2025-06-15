import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cube Lessons - Master the Rubik&apos;s Cube",
  description:
    "Learn to solve the Rubik&apos;s Cube with step-by-step tutorials, from beginner to advanced methods.",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Master the Rubik&apos;s Cube
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover the secrets of the world&apos;s most famous puzzle. From
          beginner to advanced, learn step-by-step methods to solve the
          Rubik&apos;s Cube with confidence.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-blue-600 text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold mb-3">First Two Layers (F2L)</h3>
          <p className="text-gray-600">
            Master the efficient method of solving the first two layers
            simultaneously, reducing your solve time significantly.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-blue-600 text-4xl mb-4">✨</div>
          <h3 className="text-xl font-semibold mb-3">
            Orientation Last Layer (OLL)
          </h3>
          <p className="text-gray-600">
            Learn the algorithms to orient all pieces in the last layer,
            creating a uniform top face color.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-blue-600 text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-3">
            Permutation Last Layer (PLL)
          </h3>
          <p className="text-gray-600">
            Complete your solve by learning how to permute the last layer pieces
            into their correct positions.
          </p>
        </div>
      </div>

      {/* Interactive Cube Preview */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Interactive Learning</h2>
        <p className="text-gray-600 mb-8">
          Practice with our interactive 3D cube simulator. Visualize moves and
          algorithms in real-time to better understand each step.
        </p>
        <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
          <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">3D Cube Preview</span>
          </div>
        </div>
      </div>
    </div>
  );
}
