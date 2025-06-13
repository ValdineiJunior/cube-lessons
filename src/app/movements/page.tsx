import { Cube } from "@/components/Cube";
import { CubeCase, movimentosNotations } from "@/types";

export default function Movements() {
  return (
    <>
      <h1 className="text-3xl">Movimentos Básicos</h1>
      <p className="py-8">
        Para solucionar o Cubo Mágico nós vamos utilizar algumas fórmulas, que
        são sequencias de movimentos que podem ser escritos (traduzidos) com
        letras. Parece muito complexo, mas é extremamente simples e intuitivo.
      </p>
      <p className="py-4">
        Cada lado do cubo é representado pela sua inicial em inglês. Se a letra
        estiver sozinha significa que o movimento é no sentido horário. Se
        estiver acompanhada de um apóstrofo, significa que é no sentido
        anti-horário. E se for seguida do número 2, significa que é um movimento
        duplo.
      </p>

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {movimentosNotations.map((notation: CubeCase) => (
          <Cube
            key={notation.name}
            name={notation.name}
            colors={notation.colors}
            description={notation.description}
          />
        ))}
      </div>
    </>
  );
}
