import { CubeInfoCard3D } from "@/components/CubeInfoCard3D";
import PageHeader from "@/components/layout/PageHeader";
import { advancedMoves, basicMoves } from "@/data/moves";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Movements({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <PageHeader
        title="Movimentos"
        description="Para solucionar o Cubo Mágico nós vamos utilizar algumas fórmulas, que
        são sequencias de movimentos que podem ser escritos (traduzidos) com
        letras. Parece muito complexo, mas é extremamente simples e intuitivo.
        Cada lado do cubo é representado pela sua inicial em inglês. Se a letra
        estiver sozinha significa que o movimento é no sentido horário. Se
        estiver acompanhada de um apóstrofo, significa que é no sentido
        anti-horário. E se for seguida do número 2, significa que é um movimento
        duplo."
      />

      <h2 className="text-2xl text-center py-8">Movimentos Básicos</h2>

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {basicMoves.map((cubeMove) => (
          <CubeInfoCard3D
            key={cubeMove.name}
            name={cubeMove.name}
            colors={cubeMove.colors}
            description={cubeMove.description}
          />
        ))}
      </div>

      <h2 className="text-2xl text-center py-8">Movimentos Avançados</h2>

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {advancedMoves.map((cubeMove) => (
          <CubeInfoCard3D
            key={cubeMove.name}
            name={cubeMove.name}
            colors={cubeMove.colors}
            description={cubeMove.description}
          />
        ))}
      </div>
    </>
  );
}
