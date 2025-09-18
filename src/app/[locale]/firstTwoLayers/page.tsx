import { CubeInfoCard3D } from "@/components/CubeInfoCard3D";
import PageHeader from "@/components/layout/PageHeader";
import { cubeCasesFirstTwoLayers } from "@/data/cubeCasesFirstTwoLayers";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function FirstTwoLayers({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <PageHeader
        title="First Two Layers - F2L"
        description="O método F2L, abreviação para First Two Layers ou Primeiras Duas
        Camadas, foca na conclusão das primeiras duas camadas do cubo,
        representando dois terços da resolução total. Neste estágio, a abordagem
        difere do método básico ao priorizar a construção simultânea de pares de
        quinas e meios."
      />

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {cubeCasesFirstTwoLayers.map((cubeCase) => (
          <CubeInfoCard3D
            key={cubeCase.name}
            name={cubeCase.name}
            colors={cubeCase.colors}
            description={cubeCase.description}
          />
        ))}
      </div>
    </>
  );
}
