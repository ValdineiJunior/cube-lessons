import { CubeInfoCard2D } from "@/components/CubeInfoCard2D";
import PageHeader from "@/components/layout/PageHeader";
import { cubeCasesPermutationLastLayer } from "@/data/cubeCasesPermutationLastLayer";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PermutationLastLayer({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <PageHeader
        title="Permutation Last Layer - PLL"
        description="PLL significa (Permutação da Última Camada), ou seja, é a forma como as
        peças estão posicionadas na camada superior do cubo. Nesta etapa, o
        objetivo é resolver todas as peças da última camada, mantendo a
        orientação correta. Após completar o OLL, as peças devem estar em uma
        das 21 situações específicas."
      />
      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {cubeCasesPermutationLastLayer.map((cubeCase) => (
          <CubeInfoCard2D
            key={cubeCase.name}
            name={cubeCase.name}
            colors={cubeCase.colors}
            moves={cubeCase.moves}
          />
        ))}
      </div>
    </>
  );
}
